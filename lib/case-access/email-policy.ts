import { findCompetitor } from "./competitors";

// Which email addresses may unlock the case studies: a company address only. Free mailbox providers, throwaway
// inboxes and competitors are turned away. This decides on the address itself; whether the domain can really
// receive mail is checked separately (see verify-domain.ts).

export type EmailVerdict =
  | { ok: true; email: string; domain: string }
  | { ok: false; reason: "invalid" | "personal" | "disposable" | "blocked" };

/** Free mailbox providers anyone can sign up to. Matched on the exact domain. */
const FREE_MAIL = new Set([
  "gmail.com", "googlemail.com", "outlook.com", "live.com", "msn.com", "icloud.com", "me.com", "mac.com",
  "aol.com", "proton.me", "protonmail.com", "pm.me", "zoho.com", "zohomail.com", "zohomail.in", "gmx.com", "gmx.net",
  "gmx.de", "mail.com", "email.com", "inbox.com", "yandex.com", "yandex.ru", "ya.ru", "fastmail.com", "fastmail.fm",
  "hey.com", "tutanota.com", "tuta.io", "tuta.com", "qq.com", "163.com", "126.com", "sina.com", "naver.com",
  "daum.net", "web.de", "t-online.de", "libero.it", "mail.ru", "bk.ru", "list.ru", "rambler.ru", "seznam.cz",
  "ymail.com", "rocketmail.com", "rediffmail.com", "rediff.com", "in.com", "sify.com", "sltnet.lk",
  // Microsoft's regional mailboxes. Listed by name because "outlook" and "live" are also ordinary company names.
  "outlook.in", "outlook.sg", "outlook.com.au", "outlook.co.uk", "outlook.fr", "outlook.de", "outlook.es",
  "live.in", "live.co.uk", "live.com.au", "live.fr", "live.de", "hotmail.com",
]);

/**
 * Providers that run a domain per country (yahoo.com, yahoo.co.in, hotmail.co.uk, gmx.at). They are matched on the
 * name itself, but only in the shapes "name.tld" and "name.co.tld", so "yahoo.theircompany.com" is not caught.
 * Microsoft's outlook.* and live.* are too common as real company names, so their regional domains are listed above.
 */
const FREE_MAIL_BRANDS = new Set(["yahoo", "hotmail", "gmx"]);
const COUNTRY_SECOND_LEVEL = new Set(["co", "com", "net", "org", "ac"]);

/** Throwaway-inbox services. A short list of the common ones; the domain check below catches dead domains. */
const DISPOSABLE = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "guerrillamail.org", "sharklasers.com", "grr.la",
  "10minutemail.com", "10minutemail.net", "tempmail.com", "temp-mail.org", "temp-mail.io", "tempmail.net",
  "yopmail.com", "yopmail.net", "trashmail.com", "trashmail.net", "getnada.com", "nada.email", "maildrop.cc",
  "dispostable.com", "throwawaymail.com", "fakeinbox.com", "mailnesia.com", "mintemail.com", "mohmal.com",
  "emailondeck.com", "spamgourmet.com", "mytemp.email", "tempr.email", "discard.email", "burnermail.io",
  "inboxkitten.com", "moakt.com", "tmpmail.org", "tmpmail.net", "dropmail.me", "33mail.com", "anonaddy.com",
]);

const EMAIL_SHAPE = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+)$/;

function matchesSuffix(domain: string, set: Set<string>): boolean {
  if (set.has(domain)) return true;
  // A subdomain of a listed provider (mail.proton.me) is still that provider.
  const parts = domain.split(".");
  for (let i = 1; i < parts.length - 1; i++) {
    if (set.has(parts.slice(i).join("."))) return true;
  }
  return false;
}

export function classifyEmail(raw: string): EmailVerdict {
  const email = raw.trim().toLowerCase();
  if (email.length > 254) return { ok: false, reason: "invalid" };
  const m = EMAIL_SHAPE.exec(email);
  if (!m) return { ok: false, reason: "invalid" };
  const [local] = email.split("@");
  if (local.length > 64 || local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return { ok: false, reason: "invalid" };
  }
  const domain = m[1];

  const labels = domain.split(".");
  const isBrandedFree =
    FREE_MAIL_BRANDS.has(labels[0]) &&
    (labels.length === 2 || (labels.length === 3 && COUNTRY_SECOND_LEVEL.has(labels[1])));
  if (matchesSuffix(domain, FREE_MAIL) || isBrandedFree) return { ok: false, reason: "personal" };
  if (matchesSuffix(domain, DISPOSABLE)) return { ok: false, reason: "disposable" };
  if (findCompetitor(domain)) return { ok: false, reason: "blocked" };

  return { ok: true, email, domain };
}
