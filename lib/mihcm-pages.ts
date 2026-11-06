import type { Metadata } from "next";
import { contents } from "@/components/mihcm/content";
import { hubFaq } from "@/components/mihcm/hub-content";
import { MH_HUB, products, type ProductSlug } from "@/components/mihcm/data";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every MiHCM page: the title and description that appear in results, the address, and the
// structured data. The FAQ text is the single source for both the visible FAQ and the FAQ structured data. Product facts
// come from MiHCM's own published material.

export type MihcmPageMeta = {
  /** "" for the hub. */
  slug: "" | ProductSlug;
  name: string;
  title: string;
  description: string;
  /** ISO date the page was last changed, for the sitemap. */
  updated: string;
};

const UPDATED = "2026-11-03";

export const mihcmPages: MihcmPageMeta[] = [
  {
    slug: "",
    name: "MiHCM",
    title: "MiHCM: HR and Payroll Built in Asia",
    description:
      "MiHCM explained from its own material: MiHCM Enterprise and MiHCM Lite, seventeen modules on one employee record, payroll in 13 countries, its AI products, security, and what it covers in Sri Lanka and India.",
    updated: UPDATED,
  },
  {
    slug: "enterprise",
    name: "MiHCM Enterprise",
    title: "MiHCM Enterprise: All-in-One HR for 250 to 20,000+ People",
    description:
      "MiHCM Enterprise explained: four parts and seventeen modules, native payroll in 13 countries, three AI products, data residency, security certifications and integration with your ERP.",
    updated: UPDATED,
  },
  {
    slug: "lite",
    name: "MiHCM Lite",
    title: "MiHCM Lite: HR, Payroll and Attendance for Small Businesses",
    description:
      "MiHCM Lite explained: Core HRIS, Payroll, and Time & Attendance with analytics for up to 250 employees, on web and mobile, and how it compares with MiHCM Enterprise.",
    updated: UPDATED,
  },
  {
    slug: "workforce-management",
    name: "MiHCM Workforce Management",
    title: "MiHCM Workforce Management: Core HR, Payroll and Attendance",
    description:
      "MiHCM Core, Payroll, Time & Attendance and Organisation Planning explained, with how Sri Lankan payroll works: EPF, ETF, gratuity, APIT and the most common mistakes.",
    updated: UPDATED,
  },
  {
    slug: "talent-management",
    name: "MiHCM Talent Management",
    title: "MiHCM Talent Management: Recruitment to Succession",
    description:
      "MiHCM's ten talent modules explained: recruitment, onboarding, performance, succession, learning, compensation, benefits, expense claims and engagement, with SmartAssist screening.",
    updated: UPDATED,
  },
  {
    slug: "employee-experience",
    name: "MiHCM Employee Experience",
    title: "MiHCM Employee Experience: MiA ONE, Self-Service and Kiosk",
    description:
      "MiHCM's employee experience explained: MiA ONE by chat or voice, web self-service, the mobile app and a shop-floor kiosk, all feeding one set of workflows.",
    updated: UPDATED,
  },
  {
    slug: "data-and-ai",
    name: "MiHCM Data & AI",
    title: "MiHCM Data & AI: Reporting, Power BI, Syntra and SmartAssist",
    description:
      "MiHCM's reporting and AI explained: ready-made reports, Power BI inside MiHCM, a visual query builder, Syntra, SmartAssist, Data & AI services and what MiHCM says about responsible AI.",
    updated: UPDATED,
  },
];

export type Faq = { q: string; a: string };

export const mihcmFaqs = (slug: MihcmPageMeta["slug"]): Faq[] => (slug === "" ? hubFaq : contents[slug].faq);

const bySlug = (slug: string) => mihcmPages.find((p) => p.slug === slug);
export const mhPath = (slug: string) => (slug ? `${MH_HUB}/${slug}` : MH_HUB);

export function mihcmMetadata(slug: MihcmPageMeta["slug"]): Metadata {
  const p = bySlug(slug);
  if (!p) return {};
  const url = mhPath(slug);
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
 * Structured data for one MiHCM page: the page, the product it is about, where it sits, and its FAQ. The product is MiHCM's,
 * not ours, so it appears as what the page is about rather than as software we publish.
 */
export function mihcmLd(slug: MihcmPageMeta["slug"]) {
  const p = bySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(mhPath(slug));
  const productName = products.find((x) => x.slug === slug)?.name ?? p.name;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "MiHCM", path: MH_HUB },
    ...(slug ? [{ name: productName, path: mhPath(slug) }] : []),
  ];
  const publisher = { "@type": "Organization", name: "MiHCM" };
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
  const faq = mihcmFaqs(slug);
  if (faq.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return out;
}
