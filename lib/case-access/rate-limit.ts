// A small in-memory limiter for the registration endpoint. It stops one address hammering the form, which would
// otherwise let someone use us to send email to other people or run up DNS lookups. It is per server instance, so
// on serverless hosting it is a speed bump rather than a hard cap; put a shared store behind it if abuse appears.

const hits = new Map<string, number[]>();
let lastSweep = 0;

export function tooManyAttempts(key: string, max: number, windowMs: number, now = Date.now()): boolean {
  if (now - lastSweep > windowMs) {
    lastSweep = now;
    for (const [k, times] of hits) {
      if (!times.some((t) => now - t < windowMs)) hits.delete(k);
    }
  }
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

/** The caller's address as the host reports it. Falls back to a shared bucket when there is none (local development). */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headers.get("x-real-ip")?.trim() || "unknown";
}
