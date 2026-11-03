import { NextResponse } from "next/server";
import { clients } from "@/components/clients/data";
import { getAccess } from "@/lib/case-access/access";
import { isKnownCrawler, PRIVATE_HEADERS } from "@/lib/case-access/crawlers";
import { classifyEmail } from "@/lib/case-access/email-policy";
import { cookies } from "next/headers";
import {
  CHALLENGE_COOKIE_MAX_AGE,
  CODE_TTL_MS,
  PENDING_COOKIE,
  RATE_COOKIE,
  canSend,
  cookieBase,
  formatCode,
  issueChallenge,
  maskEmail,
  readPending,
  readRate,
  recordSend,
  resendInSeconds,
} from "@/lib/case-access/challenge";
import { buildCodeEmail } from "@/lib/case-access/emails";
import { sendMail } from "@/lib/case-access/mailer";
import { clientIp, tooManyAttempts } from "@/lib/case-access/rate-limit";
import { accessConfigured } from "@/lib/case-access/token";
import { checkDomainReceivesMail } from "@/lib/case-access/verify-domain";

// Registering to read the case studies, step one. The visitor gives a name, company and company email; if the address
// passes our checks we email it a one-time code. Nothing is unlocked and nobody at Mawkish is told yet: that
// happens in ./verify once they type the code back, which proves they can read that inbox. GET says whether this
// browser is already registered, or has a code waiting to be entered.

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
  if (access) return NextResponse.json({ unlocked: true }, { headers: noStore });

  // A code may be waiting (the visitor reloaded, or came back from their email app): let the page offer the code box.
  const store = await cookies();
  const pending = readPending(store.get(PENDING_COOKIE)?.value);
  if (!pending) return NextResponse.json({ unlocked: false }, { headers: noStore });
  const rate = readRate(store.get(RATE_COOKIE)?.value);
  return NextResponse.json(
    { unlocked: false, pending: { email: maskEmail(pending.email), resendIn: resendInSeconds(rate) } },
    { headers: noStore }
  );
}

/** "Use a different email": forget the code that is waiting. The send counter is kept. */
export async function DELETE() {
  const res = NextResponse.json({ ok: true }, { headers: noStore });
  res.cookies.set({ name: PENDING_COOKIE, value: "", ...cookieBase, maxAge: 0 });
  return res;
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
    return NextResponse.json({ ok: true, step: "code", email: "***", resendIn: 120 }, { headers: noStore });
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

  const caseId = typeof body.caseId === "string" && clients.some((c) => c.id === body.caseId) ? body.caseId : undefined;

  // Codes sent to this browser so far. A different email is allowed straight away (people mistype); the cap still counts.
  const store = await cookies();
  const rate = readRate(store.get(RATE_COOKIE)?.value);
  const allowed = canSend(rate, false);
  if (!allowed.ok) return fail(429, "Too many requests. Please try again in a bit.", undefined, "limit");

  const challenge = issueChallenge({ name, company, email: verdict.email, domain: verdict.domain, mx: domainCheck.mx.slice(0, 3), caseId });
  if (!challenge) return fail(500, "Server misconfiguration. Please try again later.");

  // Unlike the notification emails, this one cannot be skipped: without it the visitor has no way in.
  try {
    const mail = buildCodeEmail(name, formatCode(challenge.code), CODE_TTL_MS / 60000);
    const result = await sendMail({ to: verdict.email, ...mail });
    if (!result.sent) throw new Error(result.reason ?? "not sent");
  } catch (err) {
    console.error("[case-access] Could not send the verification code:", err);
    return fail(503, "We couldn't send your code just now. Please try again in a moment.");
  }

  const counted = recordSend(rate);
  const res = NextResponse.json(
    { ok: true, step: "code", email: maskEmail(verdict.email), resendIn: resendInSeconds(counted.rate) },
    { headers: noStore }
  );
  res.cookies.set({ name: PENDING_COOKIE, value: challenge.token, ...cookieBase, maxAge: CHALLENGE_COOKIE_MAX_AGE });
  if (counted.token) res.cookies.set({ name: RATE_COOKIE, value: counted.token, ...cookieBase, maxAge: CHALLENGE_COOKIE_MAX_AGE });
  return res;
}
