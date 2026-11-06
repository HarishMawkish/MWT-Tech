import type { Metadata } from "next";
import { contents } from "@/components/anthropic/content";
import { hubFaq } from "@/components/anthropic/hub-content";
import { AN_HUB, products, type ProductSlug } from "@/components/anthropic/data";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every Anthropic page: the title and description that appear in results, the address, and the
// structured data. The FAQ text is the single source for both the visible FAQ and the FAQ structured data. Product facts
// come from Anthropic's own published material.

export type AnthropicPageMeta = {
  /** "" for the hub. */
  slug: "" | ProductSlug;
  name: string;
  title: string;
  description: string;
  /** ISO date the page was last changed, for the sitemap. */
  updated: string;
};

const UPDATED = "2026-11-03";

export const anthropicPages: AnthropicPageMeta[] = [
  {
    slug: "",
    name: "Anthropic",
    title: "Anthropic Claude: For Your People and Your Products",
    description:
      "Claude explained from Anthropic's own material: Claude Enterprise and the Claude Platform, Claude and Claude Code, the models, data and security, and availability in Sri Lanka and India.",
    updated: UPDATED,
  },
  {
    slug: "claude-enterprise",
    name: "Claude Enterprise",
    title: "Claude Enterprise: Claude for Every Employee, With IT Controls",
    description:
      "Claude Enterprise explained: chat, Cowork, Claude Code and connectors for the whole workforce, SSO, SCIM, audit logs, retention controls, Team versus Enterprise, and how to roll it out.",
    updated: UPDATED,
  },
  {
    slug: "claude-platform",
    name: "Claude Platform",
    title: "Claude Platform: The API, Managed Agents and Your Cloud",
    description:
      "The Claude Platform explained: the Messages API and tools, Claude Managed Agents, context and memory, cost controls, the Console, and Claude on AWS, Google Cloud and Microsoft Foundry.",
    updated: UPDATED,
  },
  {
    slug: "claude",
    name: "Claude",
    title: "Claude at Work: Tasks, Artifacts, Connectors and Microsoft 365",
    description:
      "Claude explained for everyday work: delegated and scheduled tasks, documents and decks, connectors and skills, and Claude inside Microsoft 365, Google Workspace, Chrome and Slack.",
    updated: UPDATED,
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    title: "Claude Code: Agentic Coding for the Whole Codebase",
    description:
      "Claude Code explained: where it runs, codebase onboarding, issues to pull requests, migrations, Code Review, and the controls engineering leaders get.",
    updated: UPDATED,
  },
  {
    slug: "models",
    name: "Claude models",
    title: "Claude Models: Fable, Opus, Sonnet and Haiku Compared",
    description:
      "The Claude model family explained from Anthropic's own pages: what Fable 5.1, Opus 5.5, Sonnet 5.5 and Haiku 5.5 are for, why Mythos is restricted, and the controls that change cost.",
    updated: UPDATED,
  },
  {
    slug: "security-and-deployment",
    name: "Claude security and deployment",
    title: "Claude Security and Deployment: Data, Residency and Regions",
    description:
      "What Anthropic says about training on your data, its certifications, data and inference residency, running Claude on your own cloud, and availability in Sri Lanka and India.",
    updated: UPDATED,
  },
];

export type Faq = { q: string; a: string };

export const anthropicFaqs = (slug: AnthropicPageMeta["slug"]): Faq[] => (slug === "" ? hubFaq : contents[slug].faq);

const bySlug = (slug: string) => anthropicPages.find((p) => p.slug === slug);
export const anPath = (slug: string) => (slug ? `${AN_HUB}/${slug}` : AN_HUB);

export function anthropicMetadata(slug: AnthropicPageMeta["slug"]): Metadata {
  const p = bySlug(slug);
  if (!p) return {};
  const url = anPath(slug);
  const fullTitle = `${p.title} | ${brand.name}`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    robots: robotsDefault,
    openGraph: {
      type: "website",
      url,
      siteName: brand.name,
      locale: "en_US",
      title: fullTitle,
      description: p.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: p.title }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: p.description, images: [DEFAULT_OG_IMAGE] },
  };
}

/**
 * Structured data for one Anthropic page: the page, the product it is about, where it sits, and its FAQ. The product is
 * Anthropic's, not ours, so it appears as what the page is about rather than as software we publish.
 */
export function anthropicLd(slug: AnthropicPageMeta["slug"]) {
  const p = bySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(anPath(slug));
  const productName = products.find((x) => x.slug === slug)?.name ?? p.name;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Anthropic", path: AN_HUB },
    ...(slug ? [{ name: productName, path: anPath(slug) }] : []),
  ];
  const publisher = { "@type": "Organization", name: "Anthropic, PBC" };
  const out: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${p.title} | ${brand.name}`,
      description: p.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      dateModified: p.updated,
      about: slug ? { "@type": "SoftwareApplication", name: productName, applicationCategory: "BusinessApplication", publisher } : publisher,
    },
    breadcrumbLd(crumbs),
  ];
  const faq = anthropicFaqs(slug);
  if (faq.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return out;
}
