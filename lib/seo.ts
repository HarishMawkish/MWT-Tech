import type { Metadata } from "next";

/**
 * The live address of the site, used for canonical links, the sitemap, share images and structured data.
 * NEXT_PUBLIC_SITE_URL overrides it (for a staging domain, say); otherwise the production domain is used.
 */
export const PRODUCTION_URL = "https://www.mawkishtechnologies.com";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || PRODUCTION_URL).replace(/\/+$/, "");

/** The share image used by any page that does not have one of its own. */
export const DEFAULT_OG_IMAGE = "/og/default";

export const absoluteUrl = (path = "/") => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const brand = {
  name: "Mawkish Technologies",
  logo: "/images/brand/logo-mark.png",
  locality: "Colombo",
  country: "LK",
  sameAs: ["https://lk.linkedin.com/company/mawkishtech", "https://www.instagram.com/mawkish.technologies/"],
};

/** Social-share and search-result defaults every page inherits. */
export const robotsDefault: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
};

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: brand.name,
  url: siteUrl,
  logo: absoluteUrl(brand.logo),
  sameAs: brand.sameAs,
  description:
    "Mawkish Technologies is an enterprise technology consulting firm in Colombo, Sri Lanka: one accountable partner for enterprise applications, from advice and selection to implementation and support.",
  slogan: "Architecting Transformation",
  email: "info@mawkishtechnologies.com",
  areaServed: ["Sri Lanka", "India"],
  knowsAbout: [
    "SAP S/4HANA Cloud", "GROW with SAP", "RISE with SAP", "SAP Business AI", "SAP Business Data Cloud",
    "Salesforce", "Odoo", "Swyftflo AI", "MiHCM", "Databricks", "Claude", "AWS", "Microsoft Azure", "Google Cloud",
    "Enterprise architecture", "ERP implementation", "Cloud migration", "AI and automation",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Oceanica Tower, 490 Galle Road",
    addressLocality: "Colombo 03",
    addressCountry: brand.country,
  },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: brand.name,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};
