import { NextResponse } from "next/server";
import { clients } from "@/components/clients/data";
import { getAccess } from "@/lib/case-access/access";
import { isKnownCrawler, PRIVATE_HEADERS } from "@/lib/case-access/crawlers";
import { classifyEmail } from "@/lib/case-access/email-policy";
import { sendRegistrationEmails } from "@/lib/case-access/notify";
import { clientIp, tooManyAttempts } from "@/lib/case-access/rate-limit";
import { ACCESS_COOKIE, ACCESS_MAX_AGE_SECONDS, accessConfigured, createAccessToken } from "@/lib/case-access/token";
import { checkDomainReceivesMail } from "@/lib/case-access/verify-domain";

// Registering to read the case studies. The visitor gives a name, company and company email; if the address passes
// our checks we remember them with a signed cookie and email them and our sales inbox. GET says whether the
// current browser has already registered, so returning visitors are never asked again.

const CONTACT_EMAIL = "info@mawkishtechnologies.com";
const noStore = PRIVATE_HEADERS;

type Body = { name?: unknown; company?: unknown; email?: unknown; consent?: unknown; caseId?: unknown; website?: unknown };

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max) : "";

function fail(status: number, error: string, field?: string, code?: string) {
  return NextResponse.json({ error, field, code }, { status, headers: noStore });
}

export async function GET() {
  const access = await getAccess();
  return NextResponse.json({ unlocked: access !== null }, { headers: noStore });
}

export async function POST(request: Request) {
  // Browsers must send JSON with a preflight to reach us from another site, so other sites cannot post here.
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return fail(415, "Invalid request.");
  }

  // Crawlers and scrapers cannot register: otherwise one could sign up with an address of its own and read everything.
  if (isKnownCrawler(request.headers.get("user-agent"))) {
    return fail(403, "Registration is not available for automated requests.");
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return fail(400, "Invalid request body.");
  }

  // A hidden field no person fills in. Bots do; pretend it worked and give them nothing.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true }, { headers: noStore });
  }

  const ip = clientIp(request.headers);
  if (tooManyAttempts(`case-access:${ip}`, 8, 10 * 60 * 1000)) {
    return fail(429, "Too many attempts. Please try again in a few minutes.");
  }

  const name = clean(body.name, 100);
  const company = clean(body.company, 120);
  const rawEmail = typeof body.email === "string" ? body.email : "";

  if (name.length < 2) return fail(422, "Please enter your name.", "name");
  if (company.length < 2) return fail(422, "Please enter your company name.", "company");
  if (!rawEmail.trim()) return fail(422, "Please enter your company email.", "email");
  if (body.consent !== true) return fail(422, "Please tick the box so we can contact you about this request.", "consent");

  const verdict = classifyEmail(rawEmail);
  if (!verdict.ok) {
    switch (verdict.reason) {
      case "invalid":
        return fail(422, "Please enter a valid email address.", "email", verdict.reason);
      case "personal":
        return fail(422, "Please use your company email. Personal addresses such as Gmail or Yahoo can't be accepted.", "email", verdict.reason);
      case "disposable":
        return fail(422, "Temporary email addresses can't be accepted. Please use your company email.", "email", verdict.reason);
      case "blocked":
        // Neutral on purpose: we do not tell people why.
        return fail(
          403,
          `We're not able to open the case studies for this email address. If you think this is a mistake, please write to ${CONTACT_EMAIL}.`,
          "email",
          verdict.reason
        );
    }
  }

  if (!accessConfigured()) {
    console.error("CASE_ACCESS_SECRET is not set (needs 32+ characters): cannot issue case-study access.");
    return fail(500, "Server misconfiguration. Please try again later.");
  }

  const domainCheck = await checkDomainReceivesMail(verdict.domain);
  if (!domainCheck.ok) {
    return domainCheck.reason === "unavailable"
      ? fail(503, "We couldn't check your email just now. Please try again in a moment.", "email", "unavailable")
      : fail(422, `We couldn't find a mailbox for ${verdict.domain}. Please check the address.`, "email", "no-mail");
  }

  const token = createAccessToken(verdict.domain);
  if (!token) return fail(500, "Server misconfiguration. Please try again later.");

  const caseId = typeof body.caseId === "string" && clients.some((c) => c.id === body.caseId) ? body.caseId : undefined;
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

  // Mail is best-effort: it must never stand between a vetted visitor and the case studies.
  await sendRegistrationEmails({
    name,
    company,
    email: verdict.email,
    domain: verdict.domain,
    mx: domainCheck.mx,
    caseId,
    submittedAt: new Date(),
    ip,
    userAgent: clean(h.get("user-agent"), 300),
    referrer: clean(h.get("referer"), 300),
    location: place,
  }).catch((err) => console.error("[case-access] Could not send registration emails:", err));

  const res = NextResponse.json({ ok: true }, { headers: noStore });
  res.cookies.set({
    name: ACCESS_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ACCESS_MAX_AGE_SECONDS,
  });
  return res;
}
