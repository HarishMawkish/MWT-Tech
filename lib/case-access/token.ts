import { createHmac, timingSafeEqual } from "node:crypto";

// The "this visitor has already registered" memory. After a visitor passes the form we give their browser a signed
// cookie. The signature means nobody can forge or edit one, and it carries the email's domain so that a company
// added to the blocklist later loses access on its next request.

export const ACCESS_COOKIE = "mw_case_access";
/** How long a registration is remembered. */
export const ACCESS_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type Payload = { v: 1; d: string; iat: number };

/** The signing key. Required in production; in development a fixed key is used so the feature works out of the box. */
function secret(): string | null {
  const s = process.env.CASE_ACCESS_SECRET?.trim();
  if (s && s.length >= 32) return s;
  if (process.env.NODE_ENV !== "production") return "development-only-key-not-for-production-use";
  return null;
}

export const accessConfigured = () => secret() !== null;

const b64 = (buf: Buffer | string) => Buffer.from(buf).toString("base64url");

function sign(body: string, key: string) {
  return createHmac("sha256", key).update(body).digest();
}

export function createAccessToken(domain: string, now = Date.now()): string | null {
  const key = secret();
  if (!key) return null;
  const body = b64(JSON.stringify({ v: 1, d: domain.toLowerCase(), iat: Math.floor(now / 1000) } satisfies Payload));
  return `${body}.${b64(sign(body, key))}`;
}

/** The domain the visitor registered with, or null if the token is missing, forged, malformed or expired. */
export function readAccessToken(token: string | undefined, now = Date.now()): { domain: string } | null {
  const key = secret();
  if (!token || !key) return null;
  const [body, sig, extra] = token.split(".");
  if (!body || !sig || extra !== undefined) return null;

  const expected = sign(body, key);
  let given: Buffer;
  try {
    given = Buffer.from(sig, "base64url");
  } catch {
    return null;
  }
  // Re-encoding must give back exactly what was sent, so one token has one spelling (base64 ignores trailing bits).
  if (given.length !== expected.length || b64(given) !== sig || !timingSafeEqual(given, expected)) return null;

  try {
    const p = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as Partial<Payload>;
    if (p.v !== 1 || typeof p.d !== "string" || typeof p.iat !== "number") return null;
    const ageSeconds = Math.floor(now / 1000) - p.iat;
    if (ageSeconds < -300 || ageSeconds > ACCESS_MAX_AGE_SECONDS) return null;
    return { domain: p.d };
  } catch {
    return null;
  }
}
