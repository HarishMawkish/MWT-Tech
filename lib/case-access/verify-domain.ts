import { promises as dns } from "node:dns";

// Confirms that the part of the address after the @ is a real domain that can receive email, by looking up its
// mail servers (MX records). This stops typos and made-up domains. It does not prove the person owns the inbox.

export type DomainCheck =
  | { ok: true; mx: string[] }
  | { ok: false; reason: "no-mail" | "unavailable" };

const LOOKUP_TIMEOUT_MS = 4000;

function withTimeout<T>(p: Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(Object.assign(new Error("DNS lookup timed out"), { code: "ETIMEOUT" })), LOOKUP_TIMEOUT_MS);
    p.then(
      (v) => {
        clearTimeout(timer);
        resolve(v);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      }
    );
  });
}

/** "This domain does not exist / has no such record", as opposed to "the lookup itself failed". */
const NO_RECORD = new Set(["ENODATA", "ENOTFOUND", "ENOTIMP"]);

const codeOf = (e: unknown) => (e as { code?: string })?.code ?? "";

export async function checkDomainReceivesMail(domain: string): Promise<DomainCheck> {
  try {
    const records = await withTimeout(dns.resolveMx(domain));
    // RFC 7505: a single MX of "." means "this domain deliberately accepts no email".
    const hosts = records
      .filter((r) => r.exchange && r.exchange !== ".")
      .sort((a, b) => a.priority - b.priority)
      .map((r) => r.exchange.toLowerCase());
    if (hosts.length) return { ok: true, mx: hosts };
    return { ok: false, reason: "no-mail" };
  } catch (e) {
    const code = codeOf(e);
    // ENOTFOUND means the domain itself does not exist, so there is nothing more to look up.
    if (code === "ENOTFOUND") return { ok: false, reason: "no-mail" };
    // ENODATA means it exists but publishes no MX record: fall through and try its address record.
    if (!NO_RECORD.has(code)) return { ok: false, reason: "unavailable" };
  }

  // No MX record: mail servers fall back to the domain's own address record, so accept that too.
  try {
    const v4 = await withTimeout(dns.resolve4(domain)).catch((e) => {
      if (NO_RECORD.has(codeOf(e))) return [] as string[];
      throw e;
    });
    if (v4.length) return { ok: true, mx: [domain] };
    const v6 = await withTimeout(dns.resolve6(domain)).catch((e) => {
      if (NO_RECORD.has(codeOf(e))) return [] as string[];
      throw e;
    });
    if (v6.length) return { ok: true, mx: [domain] };
    return { ok: false, reason: "no-mail" };
  } catch {
    return { ok: false, reason: "unavailable" };
  }
}
