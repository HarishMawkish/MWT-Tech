import { cookies } from "next/headers";
import { NextResponse } from "next/server";
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
import { isKnownCrawler, PRIVATE_HEADERS } from "@/lib/case-access/crawlers";
import { buildCodeEmail } from "@/lib/case-access/emails";
import { sendMail } from "@/lib/case-access/mailer";
import { clientIp, tooManyAttempts } from "@/lib/case-access/rate-limit";

// "Send me a new code". Allowed once every two minutes, and at most five times after the first code. Past that we
// stop sending and say only "try again in a bit": the visitor is not told how long, or what the limit is.

const fail = (status: number, error: string, extra?: Record<string, unknown>) =>
  NextResponse.json({ error, ...extra }, { status, headers: PRIVATE_HEADERS });

export async function POST(request: Request) {
  if (isKnownCrawler(request.headers.get("user-agent"))) return fail(403, "Not available for automated requests.");
  if (tooManyAttempts(`case-resend:${clientIp(request.headers)}`, 20, 10 * 60 * 1000)) {
    return fail(429, "Too many requests. Please try again in a bit.", { code: "limit" });
  }

  const store = await cookies();
  const pending = readPending(store.get(PENDING_COOKIE)?.value);
  if (!pending) return fail(400, "Your session has ended. Please enter your details again.", { code: "restart" });

  const rate = readRate(store.get(RATE_COOKIE)?.value);
  const allowed = canSend(rate, true);
  if (!allowed.ok) {
    return allowed.reason === "limit"
      ? fail(429, "Too many requests. Please try again in a bit.", { code: "limit" })
      : fail(429, "Please wait a moment before asking for another code.", { code: "wait", resendIn: allowed.retryInSeconds });
  }

  const { name, company, email, domain, mx, caseId } = pending;
  const challenge = issueChallenge({ name, company, email, domain, mx, caseId });
  if (!challenge) return fail(500, "Server misconfiguration. Please try again later.");

  try {
    const mail = buildCodeEmail(name, formatCode(challenge.code), CODE_TTL_MS / 60000);
    const result = await sendMail({ to: email, ...mail });
    if (!result.sent) throw new Error(result.reason ?? "not sent");
  } catch (err) {
    console.error("[case-access] Could not resend the verification code:", err);
    return fail(503, "We couldn't send your code just now. Please try again in a moment.");
  }

  const counted = recordSend(rate);
  const res = NextResponse.json(
    { ok: true, email: maskEmail(email), resendIn: resendInSeconds(counted.rate) },
    { headers: PRIVATE_HEADERS }
  );
  res.cookies.set({ name: PENDING_COOKIE, value: challenge.token, ...cookieBase, maxAge: CHALLENGE_COOKIE_MAX_AGE });
  if (counted.token) res.cookies.set({ name: RATE_COOKIE, value: counted.token, ...cookieBase, maxAge: CHALLENGE_COOKIE_MAX_AGE });
  return res;
}
