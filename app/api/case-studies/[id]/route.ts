import { NextResponse } from "next/server";
import { getAccess } from "@/lib/case-access/access";
import { caseDetails } from "@/lib/case-access/case-details";
import { isKnownCrawler, PRIVATE_HEADERS } from "@/lib/case-access/crawlers";
import { clientIp, tooManyAttempts } from "@/lib/case-access/rate-limit";

// The body of a case study. It is only sent to a browser holding a valid registration cookie, which is what keeps
// the text out of the page's JavaScript and away from anyone who has not registered (or is blocked). On top of
// that, known crawlers are refused and every response says "do not index" (see lib/case-access/crawlers.ts).

const deny = (status: number, error: string) => NextResponse.json({ error }, { status, headers: PRIVATE_HEADERS });

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (isKnownCrawler(request.headers.get("user-agent"))) return deny(403, "Registration required.");

  const access = await getAccess();
  if (!access) return deny(403, "Registration required.");

  // A person reads a handful of case studies a minute. Someone fetching them all in a burst is copying them.
  if (tooManyAttempts(`case-detail:${clientIp(request.headers)}`, 30, 60 * 1000)) {
    return deny(429, "Too many requests. Please slow down.");
  }

  const { id } = await params;
  const detail = Object.hasOwn(caseDetails, id) ? caseDetails[id] : undefined;
  if (!detail) return deny(404, "Case study not found.");

  return NextResponse.json(detail, { headers: PRIVATE_HEADERS });
}
