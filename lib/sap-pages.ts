import type { Metadata } from "next";
import { sapFaqs } from "@/lib/sap-faqs";
import { absoluteUrl, breadcrumbLd, brand, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every SAP page: the title and description that appear in results, the address,
// and the structured data. None of this is shown on the pages themselves.

export const SAP_HUB_PATH = "/services/sap-solutions";

export type SapPage = {
  slug: string;
  /** Service name for structured data. */
  name: string;
  /** Search-result title, without the site suffix. */
  title: string;
  /** Search-result description, kept under about 160 characters. */
  description: string;
  /** Grouping from the services menu. */
  group: "Programmes" | "Advise & plan" | "Implement & migrate" | "Extend & integrate" | "Run & optimise" | "AI & data";
  /** ISO date the page was last changed, for the sitemap. */
  updated: string;
};

const UPDATED = "2026-10-29";

export const sapPages: SapPage[] = [
  {
    slug: "grow-with-sap",
    name: "GROW with SAP",
    title: "GROW with SAP: Public Cloud ERP",
    description: "Run a growing business on SAP Cloud ERP, live in months. Mawkish takes you from first workshop to go-live and keeps you current, from Colombo, Sri Lanka.",
    group: "Programmes",
    updated: UPDATED,
  },
  {
    slug: "rise-with-sap",
    name: "RISE with SAP",
    title: "RISE with SAP: Private Cloud ERP",
    description: "Move your SAP ERP to SAP Cloud ERP Private without starting over. Mawkish plans the move, runs the conversion and supports you afterwards.",
    group: "Programmes",
    updated: UPDATED,
  },
  {
    slug: "cloud-erp-readiness-assessment",
    name: "SAP Cloud ERP Readiness Assessment",
    title: "SAP Cloud ERP Readiness Assessment",
    description: "In two weeks, see how your business fits SAP's standard processes. Get the right route (GROW or RISE), a sized licence, a timeline and a budget range.",
    group: "Advise & plan",
    updated: UPDATED,
  },
  {
    slug: "fit-to-standard-workshops",
    name: "SAP Fit-to-Standard Workshops",
    title: "SAP Fit-to-Standard Workshops",
    description: "See your business running in SAP before you change a thing. Fit-to-standard workshops show SAP's ready-made processes live, so only real gaps get built.",
    group: "Advise & plan",
    updated: UPDATED,
  },
  {
    slug: "licensing-and-commercial-advisory",
    name: "SAP Licensing & Commercial Advisory",
    title: "SAP Licensing & Commercial Advisory",
    description: "Get your SAP Cloud ERP licence right the first time. We size it from your actual user roles and check every entitlement before you sign.",
    group: "Advise & plan",
    updated: UPDATED,
  },
  {
    slug: "two-tier-erp-for-subsidiaries",
    name: "Two-Tier ERP for Subsidiaries",
    title: "Two-Tier ERP for Subsidiaries with SAP",
    description: "Run subsidiaries on lighter SAP Cloud ERP, connected to your SAP S/4HANA headquarters with prebuilt integrations and no double entry.",
    group: "Advise & plan",
    updated: UPDATED,
  },
  {
    slug: "cloud-erp-implementation",
    name: "SAP Cloud ERP Implementation",
    title: "SAP Cloud ERP Implementation",
    description: "An SAP project that runs like a plan, not a gamble. Mawkish delivers on SAP Activate with every requirement, test and decision tracked in SAP Cloud ALM.",
    group: "Implement & migrate",
    updated: UPDATED,
  },
  {
    slug: "move-from-ecc-on-premise",
    name: "Move from SAP ECC & On-Premise to Cloud ERP",
    title: "Move from SAP ECC to SAP Cloud ERP",
    description: "Four routes from SAP ECC or on-premise S/4HANA to SAP Cloud ERP. We help you pick one, prepare your system and run the move with measured downtime.",
    group: "Implement & migrate",
    updated: UPDATED,
  },
  {
    slug: "data-migration",
    name: "SAP Data Migration",
    title: "SAP Data Migration",
    description: "On go-live morning your system is only as good as its data. We plan, clean, load and reconcile master data and open balances, and rehearse until it is calm.",
    group: "Implement & migrate",
    updated: UPDATED,
  },
  {
    slug: "rollouts-and-localisation",
    name: "SAP Rollouts & Localisation",
    title: "SAP Rollouts & Sri Lanka Localisation",
    description: "Localise SAP for Sri Lanka in depth and roll one global template out to every market you operate in. Local where it matters, global where you grow.",
    group: "Implement & migrate",
    updated: UPDATED,
  },
  {
    slug: "sap-btp-extensions-and-apps",
    name: "SAP BTP Extensions & Apps",
    title: "SAP BTP Extensions & Apps",
    description: "Build what makes you different and keep the core clean. Extensions and apps on SAP BTP that use released interfaces and survive every upgrade.",
    group: "Extend & integrate",
    updated: UPDATED,
  },
  {
    slug: "process-automation-with-sap-build",
    name: "Process Automation with SAP Build",
    title: "Process Automation with SAP Build",
    description: "Automate approvals, invoices and supplier checks around SAP Cloud ERP with SAP's own tools, so people only see what needs their judgement.",
    group: "Extend & integrate",
    updated: UPDATED,
  },
  {
    slug: "sap-and-non-sap-integration",
    name: "SAP & Non-SAP Integration",
    title: "SAP & Non-SAP Integration",
    description: "Connect SAP Cloud ERP to your CRM, payroll, banks, tax authority and data platform with SAP's own integration tools, monitored from day one.",
    group: "Extend & integrate",
    updated: UPDATED,
  },
  {
    slug: "application-management-support",
    name: "SAP Application Management Support",
    title: "SAP Application Management Support",
    description: "Go-live is the start. Mawkish keeps your SAP Cloud ERP working with support that knows your setup, from Colombo and in your time zone.",
    group: "Run & optimise",
    updated: UPDATED,
  },
  {
    slug: "release-and-upgrade-management",
    name: "SAP Release & Upgrade Management",
    title: "SAP Release & Upgrade Management",
    description: "A new SAP release every six months, with no surprises on Monday. We plan each upgrade, test what matters and switch on the features worth having.",
    group: "Run & optimise",
    updated: UPDATED,
  },
  {
    slug: "test-automation",
    name: "SAP Test Automation",
    title: "SAP Test Automation",
    description: "Test every key SAP process in hours, not weeks. We automate your tests with SAP's own tools so every upgrade and change is checked the same way.",
    group: "Run & optimise",
    updated: UPDATED,
  },
  {
    slug: "security-roles-and-authorisations",
    name: "SAP Security, Roles & Authorisations",
    title: "SAP Security, Roles & Authorisations",
    description: "The right access for every person, and nothing more. We design, build and look after your SAP Cloud ERP roles, keeping auditors happy and licence costs down.",
    group: "Run & optimise",
    updated: UPDATED,
  },
  {
    slug: "ai-catalog",
    name: "SAP AI Catalog for Cloud ERP",
    title: "AI Catalog for SAP Cloud ERP",
    description: "Find the SAP AI that fits your business: what each feature, assistant and agent does, what you need and how it is licensed. Shortlist and we will demo them.",
    group: "AI & data",
    updated: UPDATED,
  },
  {
    slug: "sap-business-ai",
    name: "SAP Business AI",
    title: "SAP Business AI",
    description: "AI that works inside your SAP processes, not beside them. We find where it pays off for your business, switch it on and show you the results.",
    group: "AI & data",
    updated: UPDATED,
  },
  {
    slug: "joule-and-ai-agents",
    name: "SAP Joule & AI Agents",
    title: "SAP Joule & AI Agents",
    description: "Ask SAP, then let it do the work. We roll out Joule and build governed AI agents that take on whole tasks inside your SAP Cloud ERP.",
    group: "AI & data",
    updated: UPDATED,
  },
  {
    slug: "sap-business-data-cloud",
    name: "SAP Business Data Cloud",
    title: "SAP Business Data Cloud",
    description: "Your business data, ready for analytics and AI. SAP data products combined with your other systems on one governed foundation.",
    group: "AI & data",
    updated: UPDATED,
  },
  {
    slug: "sap-analytics-cloud",
    name: "SAP Analytics Cloud",
    title: "SAP Analytics Cloud",
    description: "Report, plan and forecast in one place. Live dashboards, shared budgets and AI explanations, connected to your SAP Cloud ERP data.",
    group: "AI & data",
    updated: UPDATED,
  },
  {
    slug: "group-reporting-and-consolidation",
    name: "SAP Group Reporting & Consolidation",
    title: "SAP Group Reporting & Consolidation",
    description: "Close the group in days, not weeks. SAP Group Reporting runs on the same data as your accounting, with intercompany differences caught early.",
    group: "AI & data",
    updated: UPDATED,
  },
];

export const sapPageBySlug = (slug: string) => sapPages.find((p) => p.slug === slug);
export const sapPath = (slug: string) => `${SAP_HUB_PATH}/${slug}`;

/** Where the social-share image for a page comes from. */
export const sapOgImage = (slug: string) => `/og/sap/${slug}`;

export function sapMetadata(slug: string): Metadata {
  const p = sapPageBySlug(slug);
  if (!p) return {};
  const url = sapPath(slug);
  const fullTitle = `${p.title} | ${brand.name}`;
  return {
    title: p.title,
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
      images: [{ url: sapOgImage(slug), width: 1200, height: 630, alt: p.title }],
      modifiedTime: p.updated,
      section: "SAP Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: p.description,
      images: [sapOgImage(slug)],
    },
  };
}

/** Structured data for one SAP page: the page, the service, where it sits, and its FAQ. */
export function sapLd(slug: string) {
  const p = sapPageBySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(sapPath(slug));
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
      about: { "@id": `${url}#service` },
      dateModified: p.updated,
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: p.name,
      description: p.description,
      serviceType: p.group,
      url,
      provider: { "@id": `${siteUrl}/#organization` },
    },
    { ...breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "SAP Solutions", path: SAP_HUB_PATH },
      { name: p.name, path: sapPath(slug) },
    ]), "@id": `${url}#breadcrumb` },
  ];
  const faq = sapFaqs[slug];
  if (faq?.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return out;
}

/** The SAP hub lists every SAP page, so search engines can see the whole set from one place. */
export function sapHubLd() {
  const url = absoluteUrl(SAP_HUB_PATH);
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: `SAP Solutions | ${brand.name}`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${url}#list` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${url}#list`,
      itemListElement: sapPages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: absoluteUrl(sapPath(p.slug)),
      })),
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "SAP Solutions", path: SAP_HUB_PATH },
    ]),
  ];
}
