import { buildLlmsTxt } from "@/lib/llms-txt";

// /llms.txt: a guide to the site for AI assistants and AI search. Built once and cached; it rebuilds with each deploy.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
