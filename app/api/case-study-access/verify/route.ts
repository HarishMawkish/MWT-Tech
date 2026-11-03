import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PENDING_COOKIE, checkCode, cookieBase, readPending } from "@/lib/case-access/challenge";
import { isKnownCrawler, PRIVATE_HEADERS } from "@/lib/case-access/crawlers";
import { classifyEmail } from "@/lib/case-access/email-policy";
import { sendRegistrationEmails } from "@/lib/case-access/notify";
import { clientIp, tooManyAttempts } from "@/lib/case-access/rate-limit";
import { ACCESS_COOKIE, ACCESS_MAX_AGE_SECONDS, createAccessToken } from "@/lib/case-access/token";

// Registering, step two: the visitor types the code we emailed. A correct code proves they can read that inbox, so
// this is where access is given and where Mawkish is told (welcome email to them; full details to sales).

const fail = (status: number, error: string, code?: string) =>
  NextResponse.json({ error, code }, { status, headers: PRIVATE_HEADERS });

const clean = (v: string | null, max: number) => (v ?? "").replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return fail(415, "Invalid request.");
  if (isKnownCrawler(request.headers.get("user-agent"))) return fail(403, "Not available for automated requests.");

  const ip = clientIp(request.headers);
  if (tooManyAttempts(`case-verify:${ip}`, 30, 10 * 60 * 1000)) {
    return fail(429, "Too many attempts. Please try again in a bit.", "limit");
  }

  let body: { code?: unknown };
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  const store = await cookies();
  const pending = readPending(store.get(PENDING_COOKIE)?.value);
  if (!pending) return fail(400, "Your session has ended. Please enter your details again.", "restart");

  const check = checkCode(pending, typeof body.code === "string" ? body.code : "");
  if (check === "expired") return fail(422, "That code has expired. Please ask for a new one.", "expired");
  if (check !== "ok") return fail(422, "That code isn't right. Please check it and try again.", "wrong");

  // The blocklist may have changed since the code was sent.
  const verdict = classifyEmail(pending.email);
  if (!verdict.ok) return fail(403, "We're not able to open the case studies for this email address. Please write to info@mawkishtechnologies.com.");

  const token = createAccessToken(pending.domain);
  if (!token) return fail(500, "Server misconfiguration. Please try again later.");

  const h = request.headers;
  const place = [h.get("x-vercel-ip-city"), h.get("x-vercel-ip-country-region"), h.get("x-vercel-ip-country")]
    .map((p) => {
      try {
        return p ? decodeURIComponent(p) : "";
      } catch {
        return p ?? "";
      }
    })
    .filter(Boolean)
    .join(", ");

  // Mail is best-effort here: it must never stand between a verified visitor and the case studies.
  await sendRegistrationEmails({
    name: pending.name,
    company: pending.company,
    email: pending.email,
    domain: pending.domain,
    mx: pending.mx,
    caseId: pending.caseId,
    submittedAt: new Date(),
    ip,
    userAgent: clean(h.get("user-agent"), 300),
    referrer: clean(h.get("referer"), 300),
    location: place,
  }).catch((err) => console.error("[case-access] Could not send registration emails:", err));

  const res = NextResponse.json({ ok: true }, { headers: PRIVATE_HEADERS });
  res.cookies.set({ name: ACCESS_COOKIE, value: token, ...cookieBase, maxAge: ACCESS_MAX_AGE_SECONDS });
  res.cookies.set({ name: PENDING_COOKIE, value: "", ...cookieBase, maxAge: 0 });
  return res;
}
