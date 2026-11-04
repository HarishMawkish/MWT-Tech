import type { Metadata } from "next";
import { cloudPageData, type CloudPageData } from "@/components/cloud/data";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every Cloud Infrastructure page: the title and description that appear in results, the
// address, and the structured data. The FAQ text is the single source for both the visible FAQ and the FAQ data.

export const CLOUD_HUB_PATH = "/services/cloud-infrastructure";

const UPDATED = "2026-11-04";

export const cloudHub = {
  name: "Cloud Infrastructure",
  title: "Cloud Infrastructure: AWS, Azure and Google Cloud for SAP",
  description:
    "Plan, build and run SAP and business workloads on AWS, Microsoft Azure or Google Cloud. Mawkish advises, migrates, connects and operates, from Colombo, Sri Lanka.",
  updated: UPDATED,
};

export const cloudPages: CloudPageData[] = cloudPageData;
export const cloudPageBySlug = (slug: string) => cloudPages.find((p) => p.slug === slug);
export const cloudPath = (slug: string) => `${CLOUD_HUB_PATH}/${slug}`;

/** The pages in menu order, grouped the way the menu groups them. */
export const cloudGroups = Array.from(new Set(cloudPages.map((p) => p.group))).map((title) => ({
  title,
  pages: cloudPages.filter((p) => p.group === title),
}));

export function cloudMetadata(slug: string): Metadata {
  const p = cloudPageBySlug(slug);
  if (!p) return {};
  const url = cloudPath(slug);
  const title = `${p.label}: Cloud Infrastructure`;
  const fullTitle = `${title} | ${brand.name}`;
  return {
    title,
    description: p.description,
    alternates: { canonical: url },
    robots: robotsDefault,
    openGraph: {
      type: "article",
      url,
      siteName: brand.name,
      locale: "en_US",
      title: fullTitle,
      description: p.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: p.label }],
      modifiedTime: UPDATED,
      section: "Cloud Infrastructure",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: p.description, images: [DEFAULT_OG_IMAGE] },
  };
}

export function cloudHubMetadata(): Metadata {
  const fullTitle = `${cloudHub.title} | ${brand.name}`;
  return {
    title: cloudHub.title,
    description: cloudHub.description,
    alternates: { canonical: CLOUD_HUB_PATH },
    robots: robotsDefault,
    openGraph: {
      type: "website",
      url: CLOUD_HUB_PATH,
      siteName: brand.name,
      locale: "en_US",
      title: fullTitle,
      description: cloudHub.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: cloudHub.name }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: cloudHub.description, images: [DEFAULT_OG_IMAGE] },
  };
}

/** Structured data for one page: the page, the service, where it sits, and its FAQ. */
export function cloudLd(slug: string) {
  const p = cloudPageBySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(cloudPath(slug));
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${p.label}: Cloud Infrastructure | ${brand.name}`,
      description: p.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${url}#service` },
      dateModified: UPDATED,
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: p.label,
      description: p.description,
      serviceType: p.group,
      url,
      provider: { "@id": `${siteUrl}/#organization` },
    },
    {
      ...breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Cloud Infrastructure", path: CLOUD_HUB_PATH },
        { name: p.label, path: cloudPath(slug) },
      ]),
      "@id": `${url}#breadcrumb`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: p.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];
}

/** The hub lists every page, so search engines can see the whole set from one place. */
export function cloudHubLd() {
  const url = absoluteUrl(CLOUD_HUB_PATH);
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: `${cloudHub.name} | ${brand.name}`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${url}#list` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${url}#list`,
      itemListElement: cloudPages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.label,
        url: absoluteUrl(cloudPath(p.slug)),
      })),
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Cloud Infrastructure", path: CLOUD_HUB_PATH },
    ]),
  ];
}
