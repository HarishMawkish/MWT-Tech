// Keeping search engines, AI crawlers and scrapers away from the gated case studies.
//
// Three layers, in order of strength:
//  1. The real lock: case-study bodies are only sent to a browser with a valid registration cookie (see access.ts).
//  2. This file: the case-study endpoints refuse requests from known crawlers outright, and say "do not index".
//  3. robots.txt (app/robots.ts): asks well-behaved crawlers not to visit. It is a request, not a barrier.
// A crawler that ignores 3 and lies about its name still meets 1.

/** The names AI and data-collection crawlers announce in robots.txt. Used for robots.txt and for the request check. */
export const AI_CRAWLERS = [
  "GPTBot", "ChatGPT-User", "OAI-SearchBot",
  "ClaudeBot", "Claude-Web", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "GoogleOther", "Applebot-Extended",
  "CCBot", "Bytespider", "Amazonbot", "meta-externalagent", "FacebookBot",
  "cohere-ai", "cohere-training-data-crawler", "Diffbot", "ImagesiftBot", "Omgilibot", "Timpibot",
  "YouBot", "DuckAssistBot", "MistralAI-User", "PetalBot", "Kangaroo Bot", "AI2Bot", "Webzio",
];

/** Other crawlers and scrapers that should not be fetching case-study endpoints either. */
const OTHER_CRAWLERS = [
  "Googlebot", "bingbot", "DuckDuckBot", "Baiduspider", "YandexBot", "Slurp", "Sogou", "Applebot",
  "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "DataForSeoBot", "BLEXBot",
  "HeadlessChrome", "PhantomJS", "Scrapy", "crawl", "spider",
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const CRAWLER_UA = new RegExp([...AI_CRAWLERS, ...OTHER_CRAWLERS].map(escape).join("|"), "i");

/** Whether a request announces itself as a known crawler. A user agent can be faked: this is a layer, not the lock. */
export function isKnownCrawler(userAgent: string | null | undefined): boolean {
  return !!userAgent && CRAWLER_UA.test(userAgent);
}

/**
 * Headers for every response from the case-study endpoints: never cached by anyone, and never indexed, followed,
 * archived or used for AI training by crawlers that read these headers.
 */
export const PRIVATE_HEADERS = {
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet, noimageai, noai",
} as const;
