import type { Metadata } from "next";
import { contents } from "@/components/salesforce/content";
import { cloudFaqs } from "@/components/salesforce/clouds/faqs";
import { hubFaq } from "@/components/salesforce/hub-content";
import { products, SF_HUB, type ProductSlug } from "@/components/salesforce/data";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every Salesforce page. The FAQ text comes from the same content the page shows, so the
// FAQ structured data always matches the visible FAQ. Product facts come from Salesforce's own published material.

export type SfPageMeta = {
  /** "" for the hub. */
  slug: "" | ProductSlug;
  name: string;
  title: string;
  description: string;
  updated: string;
};

const UPDATED = "2026-11-01";

export const salesforcePages: SfPageMeta[] = [
  {
    slug: "",
    name: "Salesforce",
    title: "Salesforce: Products and Where to Start",
    description:
      "Salesforce explained from its own published material: the five main products, how the platform fits together and where to start.",
    updated: UPDATED,
  },
  {
    slug: "sales-cloud",
    name: "Salesforce Sales Cloud",
    title: "Salesforce Sales Cloud",
    description:
      "Sales Cloud explained: leads, accounts and opportunities in one place, activity capture, forecasting, quotes and approvals, and the AI Salesforce adds.",
    updated: UPDATED,
  },
  {
    slug: "data-360",
    name: "Salesforce Data 360",
    title: "Salesforce Data 360 (formerly Data Cloud)",
    description:
      "Data 360 explained: connecting data, mapping it to a shared model, unifying profiles, and putting segments and agents to work, with how it is priced.",
    updated: UPDATED,
  },
  {
    slug: "marketing-cloud",
    name: "Salesforce Marketing Cloud",
    title: "Salesforce Marketing Cloud",
    description:
      "Marketing Cloud explained: Marketing Cloud Next, Account Engagement and Marketing Cloud Engagement, how they relate, and what agents do for marketers.",
    updated: UPDATED,
  },
  {
    slug: "loyalty-management",
    name: "Salesforce Loyalty Management",
    title: "Salesforce Loyalty Management",
    description:
      "Loyalty Management explained: programmes, members, points and tiers, vouchers, personalised offers and referral campaigns, for consumers and business partners.",
    updated: UPDATED,
  },
  {
    slug: "service-cloud",
    name: "Salesforce Service Cloud",
    title: "Salesforce Service Cloud",
    description:
      "Service Cloud explained: case management, the rep console, knowledge, the contact centre and how AI agents and people share the work.",
    updated: UPDATED,
  },
  {
    slug: "agentforce",
    name: "Salesforce Agentforce",
    title: "Salesforce Agentforce",
    description:
      "Agentforce explained: how agents are built from topics and actions, how they reason, the trust layer and guardrails, and how it is paid for.",
    updated: UPDATED,
  },
  {
    slug: "revenue-cloud",
    name: "Salesforce Revenue Cloud",
    title: "Salesforce Revenue Cloud",
    description: "Revenue Cloud explained: guided quoting, pricing, contracts, subscriptions, order automation and billing on one platform.",
    updated: UPDATED,
  },
  {
    slug: "field-service",
    name: "Salesforce Field Service",
    title: "Salesforce Field Service",
    description: "Field Service explained: scheduling and dispatch, the offline mobile app, asset maintenance and agents for site visits.",
    updated: UPDATED,
  },
  {
    slug: "commerce-cloud",
    name: "Salesforce Commerce Cloud",
    title: "Salesforce Commerce Cloud",
    description: "Commerce Cloud explained: B2C and B2B commerce, order management, point of sale and guided shopping.",
    updated: UPDATED,
  },
  {
    slug: "slack",
    name: "Salesforce Slack",
    title: "Slack in Salesforce",
    description: "Slack in Salesforce explained: channels tied to records, agents in conversations, approvals and workflow builder.",
    updated: UPDATED,
  },
  {
    slug: "tableau",
    name: "Salesforce Tableau",
    title: "Tableau at Salesforce",
    description: "Tableau at Salesforce explained: Tableau Next, Tableau and CRM Analytics, and agentic analytics on the same data.",
    updated: UPDATED,
  },
  {
    slug: "mulesoft",
    name: "Salesforce MuleSoft",
    title: "MuleSoft at Salesforce",
    description: "MuleSoft explained: Anypoint Platform, Agent Fabric and Omni Gateway, and what its documentation says about connecting SAP.",
    updated: UPDATED,
  },
];

export type Faq = { q: string; a: string };

/**
 * The questions a page shows are the questions its structured data carries. The five main clouds have their own
 * written on their own pages; the hub and the supporting products use the shared content files.
 */
export const salesforceFaqs = (slug: SfPageMeta["slug"]): Faq[] => {
  if (slug === "") return hubFaq;
  return cloudFaqs[slug] ?? contents[slug].faq;
};

const bySlug = (slug: string) => salesforcePages.find((p) => p.slug === slug);
export const sfPath = (slug: string) => (slug ? `${SF_HUB}/${slug}` : SF_HUB);

export function salesforceMetadata(slug: SfPageMeta["slug"]): Metadata {
  const p = bySlug(slug);
  if (!p) return {};
  const url = sfPath(slug);
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
 * Structured data for one Salesforce page: the page, the product it is about, where it sits, and its FAQ. The product
 * is Salesforce's, not ours, so it appears as what the page is about rather than as software we publish.
 */
export function salesforceLd(slug: SfPageMeta["slug"]) {
  const p = bySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(sfPath(slug));
  const productName = products.find((x) => x.slug === slug)?.name ?? p.name;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Salesforce", path: SF_HUB },
    ...(slug ? [{ name: productName, path: sfPath(slug) }] : []),
  ];
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
      about: slug
        ? {
            "@type": "SoftwareApplication",
            name: productName,
            applicationCategory: "BusinessApplication",
            publisher: { "@type": "Organization", name: "Salesforce, Inc." },
          }
        : { "@type": "Organization", name: "Salesforce, Inc." },
    },
    breadcrumbLd(crumbs),
  ];
  const faq = salesforceFaqs(slug);
  if (faq.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return out;
}
