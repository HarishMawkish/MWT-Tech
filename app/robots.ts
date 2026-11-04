import type { MetadataRoute } from "next";
import { AI_CRAWLERS } from "@/lib/case-access/crawlers";
import { absoluteUrl, siteUrl } from "@/lib/seo";

// AI assistants and AI search crawlers are welcome on every public page, and /llms.txt is a guide to the site for them.
// Back-office screens and every form or data endpoint are not for search results or for AI. That includes the
// gated case-study endpoints under /api/. (The case studies are also locked behind registration, so this is a
// request to well-behaved crawlers on top of the real lock: see lib/case-access/crawlers.ts.)
const PRIVATE = ["/admin", "/studio", "/api/", "/api/case-studies/", "/api/case-study-access"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      // A crawler that finds a rule group with its own name reads only that group, so the AI crawlers are given
      // the same restrictions explicitly rather than relying on the "*" group above.
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
