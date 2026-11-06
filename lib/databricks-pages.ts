import type { Metadata } from "next";
import { dbFaqs, type Faq } from "@/components/databricks/faqs";
import { ALL_SLUGS, DB_HUB, bySlug, dbPath, type DbSlug } from "@/components/databricks/data";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every Databricks page: the title and description that appear in results, the address,
// and the structured data. The FAQ text is the single source for both the visible FAQ and the FAQ structured data.
// Product facts come from Databricks' own published material.

export type DbPageMeta = {
  /** "" for the hub. */
  slug: "" | DbSlug;
  name: string;
  title: string;
  description: string;
  /** ISO date the page was last changed, for the sitemap. */
  updated: string;
};

const UPDATED = "2026-11-03";

export const databricksPages: DbPageMeta[] = [
  {
    slug: "",
    name: "Databricks",
    title: "Databricks: The Data + AI Platform, Explained",
    description:
      "Databricks explained from its own material: the eight parts of the platform, what a lakehouse changes, and how it sits beside SAP and Salesforce.",
    updated: UPDATED,
  },
  {
    slug: "lakehouse",
    name: "Databricks Lakehouse",
    title: "Databricks Lakehouse: SQL on Open Tables",
    description:
      "Data warehousing on Delta Lake and Apache Iceberg files you own: serverless compute, liquid clustering, federation and AI functions in SQL.",
    updated: UPDATED,
  },
  {
    slug: "lakeflow",
    name: "Databricks Lakeflow",
    title: "Databricks Lakeflow: Pipelines and Jobs",
    description:
      "How Lakeflow Connect captures change from source systems, what a managed connector sets up, how pipelines enforce quality, and what happens when one fails.",
    updated: UPDATED,
  },
  {
    slug: "unity-catalog",
    name: "Databricks Unity Catalog",
    title: "Databricks Unity Catalog: Governing Data, AI",
    description:
      "One catalogue for tables, files, models, dashboards and agents: lineage, attribute-based policies, shared metrics and controls on what AI can reach.",
    updated: UPDATED,
  },
  {
    slug: "genie",
    name: "Databricks Genie",
    title: "Databricks Genie and AI/BI Dashboards",
    description:
      "Genie and AI/BI dashboards explained: how an answer is produced, what curation has to be in place first, where it can be used, and what it costs.",
    updated: UPDATED,
  },
  {
    slug: "agent-bricks",
    name: "Databricks Agent Bricks",
    title: "Databricks Agent Bricks: Agents in Production",
    description:
      "Agent Bricks explained: Agent Runtime, AgentKit, sandboxed execution, memory, MCP tools and MLflow tracing, and when a SQL AI function is the better answer.",
    updated: UPDATED,
  },
  {
    slug: "lakebase",
    name: "Databricks Lakebase",
    title: "Databricks Lakebase: Serverless Postgres",
    description:
      "Open-source Postgres with storage and compute separated: instant branches from production data, scale to zero, pgvector, PostGIS and a change feed.",
    updated: UPDATED,
  },
  {
    slug: "apps",
    name: "Databricks Apps",
    title: "Databricks Apps: Internal Tools, No Servers",
    description:
      "Streamlit, Dash and Gradio apps on serverless compute with single sign-on, per-app permissions and Unity Catalog data access, and where the line is.",
    updated: UPDATED,
  },
  {
    slug: "sharing",
    name: "Databricks OpenSharing",
    title: "Databricks OpenSharing and Clean Rooms",
    description:
      "Share live data without copying it on an open protocol, clean rooms for joint analysis, a marketplace, and one register of who has what.",
    updated: UPDATED,
  },
  {
    slug: "sap-business-data-cloud",
    name: "SAP Business Data Cloud and Databricks",
    title: "SAP Business Data Cloud and Databricks",
    description:
      "Zero-copy sharing both ways between SAP Business Data Cloud and Databricks: SAP data products in Unity Catalog, and the usage clause to read first.",
    updated: UPDATED,
  },
  {
    slug: "security-and-architecture",
    name: "Databricks Security and Architecture",
    title: "Databricks Security and Architecture",
    description:
      "Control and compute planes, serverless versus classic, certifications, customer-managed keys, Private Link, egress controls and regions near Sri Lanka.",
    updated: UPDATED,
  },
  {
    slug: "migration",
    name: "Migrating to Databricks",
    title: "Migrating to Databricks: What the Tooling Does",
    description:
      "What Lakebridge and the agentic code converter convert, where they stop, and how to sequence a move off Snowflake, Teradata, Oracle or Hadoop.",
    updated: UPDATED,
  },
  {
    slug: "pricing-and-cost",
    name: "Databricks Pricing and Cost",
    title: "Databricks Pricing and Cost Control",
    description:
      "How consumption pricing works, what DBUs and DSUs are, which features bill on top of compute, where money leaks, and what Free Edition allows.",
    updated: UPDATED,
  },
];

export const databricksFaqs = (slug: DbPageMeta["slug"]): Faq[] => dbFaqs[slug] ?? [];

const metaBySlug = (slug: string) => databricksPages.find((p) => p.slug === slug);
export { dbPath, DB_HUB };

export function databricksMetadata(slug: DbPageMeta["slug"]): Metadata {
  const p = metaBySlug(slug);
  if (!p) return {};
  const url = dbPath(slug);
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
 * Structured data for one Databricks page: the page, the product it is about, where it sits, and its FAQ. The product
 * is Databricks', not ours, so it appears as what the page is about rather than as software we publish.
 */
export function databricksLd(slug: DbPageMeta["slug"]) {
  const p = metaBySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(dbPath(slug));
  const productName = bySlug(slug)?.name ?? p.name;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Databricks", path: DB_HUB },
    ...(slug ? [{ name: productName, path: dbPath(slug) }] : []),
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
            publisher: { "@type": "Organization", name: "Databricks, Inc." },
          }
        : { "@type": "Organization", name: "Databricks, Inc." },
    },
    breadcrumbLd(crumbs),
  ];
  const faq = databricksFaqs(slug);
  if (faq.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return out;
}

/** The hub lists every page in the section, so search engines can see the whole set from one place. */
export function databricksHubLd() {
  const url = absoluteUrl(DB_HUB);
  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${url}#list`,
      itemListElement: ALL_SLUGS.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: bySlug(s)?.name ?? s,
        url: absoluteUrl(dbPath(s)),
      })),
    },
  ];
}
