import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import { signingKey } from "./token";

// Proving that a visitor can read the inbox they typed, with no database.
//
// When someone submits the form we email them a one-time code and put a signed cookie (PENDING) in their browser.
// The cookie holds their details and a keyed fingerprint of the code, never the code itself, so the code cannot be
// worked out from it. When they type the code back we recompute the fingerprint and compare. The code is long
// enough (31^8, about 850 billion combinations) and short-lived enough that guessing it is not realistic even
// without counting wrong attempts.
//
// A second signed cookie (RATE) counts how many codes this browser has been sent, to stop repeated resends. Cookies
// can be cleared, so this keeps honest visitors from hammering Resend; it is not a defence against a determined
// attacker. Put a firewall rate-limit rule in front of the endpoint for that.

export const PENDING_COOKIE = "mw_case_pending";
export const RATE_COOKIE = "mw_case_rate";

/** How long a code can be used. */
export const CODE_TTL_MS = 10 * 60 * 1000;
/** The wait before another code can be requested. */
export const RESEND_WAIT_MS = 2 * 60 * 1000;
/** Codes allowed per window: the first one plus five resends. */
export const MAX_SENDS = 6;
/** Once the limit is hit, no more codes for this long (counted from the first code of the window). */
export const WINDOW_MS = 2 * 60 * 60 * 1000;

// No 0/O, 1/I/L: they are easily misread when copied by eye.
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function newCode(): string {
  let code = "";
  for (let i = 0; i < 8; i++) code += ALPHABET[randomInt(ALPHABET.length)];
  return code;
}

/** How the code is shown in the email: K7MQ-4TXP. */
export const formatCode = (code: string) => `${code.slice(0, 4)}-${code.slice(4)}`;

/** Whatever the visitor typed or pasted, reduced to the bare code (case, spaces and the hyphen do not matter). */
export const normalizeCode = (input: string) => input.toUpperCase().replace(/[^A-Z0-9]/g, "");

export type Pending = {
  v: 2;
  name: string;
  company: string;
  email: string;
  domain: string;
  mx: string[];
  caseId?: string;
  /** Random per code, so each new code replaces the last. */
  nonce: string;
  /** Keyed fingerprint of the code. */
  h: string;
  /** When the code stops working (ms since epoch). */
  exp: number;
};

type Rate = { v: 1; t0: number; n: number; last: number };

const b64 = (buf: Buffer | string) => Buffer.from(buf).toString("base64url");

function mac(body: string, key: string) {
  return createHmac("sha256", key).update(body).digest();
}

function seal(obj: unknown): string | null {
  const key = signingKey();
  if (!key) return null;
  const body = b64(JSON.stringify(obj));
  return `${body}.${b64(mac(body, key))}`;
}

function open<T>(token: string | undefined): T | null {
  const key = signingKey();
  if (!token || !key) return null;
  const [body, sig, extra] = token.split(".");
  if (!body || !sig || extra !== undefined) return null;
  const expected = mac(body, key);
  let given: Buffer;
  try {
    given = Buffer.from(sig, "base64url");
  } catch {
    return null;
  }
  if (given.length !== expected.length || b64(given) !== sig || !timingSafeEqual(given, expected)) return null;
  try {
    return JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as T;
  } catch {
    return null;
  }
}

function fingerprint(code: string, nonce: string, email: string, key: string) {
  return b64(mac(`code|${nonce}|${email}|${normalizeCode(code)}`, key));
}

export type Details = Pick<Pending, "name" | "company" | "email" | "domain" | "mx" | "caseId">;

/** Makes a fresh code for these details. `code` goes in the email; `token` goes in the cookie. */
export function issueChallenge(details: Details, now = Date.now()): { code: string; pending: Pending; token: string } | null {
  const key = signingKey();
  if (!key) return null;
  const code = newCode();
  const nonce = randomBytes(9).toString("base64url");
  const pending: Pending = { v: 2, ...details, nonce, h: fingerprint(code, nonce, details.email, key), exp: now + CODE_TTL_MS };
  const token = seal(pending);
  return token ? { code, pending, token } : null;
}

export function readPending(token: string | undefined): Pending | null {
  const p = open<Partial<Pending>>(token);
  if (!p || p.v !== 2 || typeof p.email !== "string" || typeof p.h !== "string" || typeof p.exp !== "number") return null;
  if (typeof p.name !== "string" || typeof p.company !== "string" || typeof p.domain !== "string" || typeof p.nonce !== "string") {
    return null;
  }
  return { ...(p as Pending), mx: Array.isArray(p.mx) ? p.mx.filter((m): m is string => typeof m === "string") : [] };
}

export type CodeCheck = "ok" | "wrong" | "expired";

export function checkCode(pending: Pending, input: string, now = Date.now()): CodeCheck {
  const key = signingKey();
  if (!key) return "wrong";
  if (now > pending.exp) return "expired";
  const entered = normalizeCode(input);
  if (entered.length !== 8) return "wrong";
  const expected = Buffer.from(pending.h);
  const given = Buffer.from(fingerprint(entered, pending.nonce, pending.email, key));
  return expected.length === given.length && timingSafeEqual(expected, given) ? "ok" : "wrong";
}

/** The email with the middle hidden: j***@company.com. */
export function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  return `${local.slice(0, 1)}***@${domain}`;
}

// ---- The send counter ----

export function readRate(token: string | undefined, now = Date.now()): Rate {
  const r = open<Partial<Rate>>(token);
  if (r && r.v === 1 && typeof r.t0 === "number" && typeof r.n === "number" && typeof r.last === "number" && now - r.t0 < WINDOW_MS) {
    return r as Rate;
  }
  return { v: 1, t0: now, n: 0, last: 0 };
}

export type SendCheck = { ok: true } | { ok: false; reason: "limit" } | { ok: false; reason: "wait"; retryInSeconds: number };

/** `isResend` applies the two-minute wait; a first request, or one for a different email, only counts toward the limit. */
export function canSend(rate: Rate, isResend: boolean, now = Date.now()): SendCheck {
  if (rate.n >= MAX_SENDS) return { ok: false, reason: "limit" };
  if (isResend && rate.n > 0 && now - rate.last < RESEND_WAIT_MS) {
    return { ok: false, reason: "wait", retryInSeconds: Math.ceil((RESEND_WAIT_MS - (now - rate.last)) / 1000) };
  }
  return { ok: true };
}

export function recordSend(rate: Rate, now = Date.now()): { rate: Rate; token: string | null } {
  const next: Rate = { v: 1, t0: rate.n === 0 ? now : rate.t0, n: rate.n + 1, last: now };
  return { rate: next, token: seal(next) };
}

/** Seconds until another code can be requested (0 when it can be now). */
export function resendInSeconds(rate: Rate, now = Date.now()) {
  if (rate.n === 0) return 0;
  return Math.max(0, Math.ceil((RESEND_WAIT_MS - (now - rate.last)) / 1000));
}

export const cookieBase = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

/** The cookies live as long as the send-count window, so reloading or leaving the page never resets the counter. */
export const CHALLENGE_COOKIE_MAX_AGE = Math.floor(WINDOW_MS / 1000);
