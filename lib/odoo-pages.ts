import type { Metadata } from "next";
import { contents } from "@/components/odoo/content";
import { hubFaq } from "@/components/odoo/hub-content";
import { OD_HUB, products, type ProductSlug } from "@/components/odoo/data";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every Odoo page: the title and description that appear in results, the address, and the
// structured data. The FAQ text is the single source for both the visible FAQ and the FAQ structured data. Product facts come
// from Odoo's own published material.

export type OdooPageMeta = {
  /** "" for the hub. */
  slug: "" | ProductSlug;
  name: string;
  title: string;
  description: string;
  /** ISO date the page was last changed, for the sitemap. */
  updated: string;
};

const UPDATED = "2026-11-02";

export const odooPages: OdooPageMeta[] = [
  {
    slug: "",
    name: "Odoo",
    title: "Odoo: Eight Families of Business Apps",
    description:
      "Odoo explained from its own material: eight app families on one database, where to start, editions and hosting, and what its documentation and release notes say about India and Sri Lanka.",
    updated: UPDATED,
  },
  {
    slug: "finance",
    name: "Odoo Finance",
    title: "Odoo Finance: Accounting, Invoicing and More",
    description:
      "Odoo's finance apps explained: Accounting, Invoicing, Expenses, Sign, Spreadsheet and ESG, with what Odoo's documentation and release notes say about GST in India and tax rules in Sri Lanka.",
    updated: UPDATED,
  },
  {
    slug: "sales",
    name: "Odoo Sales",
    title: "Odoo Sales: CRM, Quotations, Subscriptions and Point of Sale",
    description:
      "Odoo's sales apps explained: CRM, Sales, Subscriptions, Point of Sale for shops and restaurants, and Rental, from the first lead to the renewal.",
    updated: UPDATED,
  },
  {
    slug: "websites",
    name: "Odoo Websites",
    title: "Odoo Websites: Website, eCommerce, Events and eLearning",
    description:
      "Odoo's website apps explained: a no-code site builder, an online shop tied to live stock, events, courses, a blog and a forum, all on one database.",
    updated: UPDATED,
  },
  {
    slug: "supply-chain",
    name: "Odoo Supply Chain",
    title: "Odoo Supply Chain: Inventory, Manufacturing and Purchase",
    description:
      "Odoo's supply chain apps explained: Inventory, Manufacturing, Purchase, PLM, Quality and Maintenance, with replenishment, barcodes and traceability.",
    updated: UPDATED,
  },
  {
    slug: "human-resources",
    name: "Odoo Human Resources",
    title: "Odoo HR: Employees, Recruitment, Time Off and Payroll",
    description:
      "Odoo's HR apps explained: Employees, Recruitment, Time Off, Appraisals, Payroll and Fleet, from the job posting to the payslip, and what Odoo's pages say about India and Sri Lanka.",
    updated: UPDATED,
  },
  {
    slug: "marketing",
    name: "Odoo Marketing",
    title: "Odoo Marketing: Email, SMS, WhatsApp and Automation",
    description:
      "Odoo's marketing apps explained: Email, SMS, Social Marketing, Marketing Automation, WhatsApp and Surveys, tied to the customer record and to revenue.",
    updated: UPDATED,
  },
  {
    slug: "services",
    name: "Odoo Service Delivery",
    title: "Odoo Service Delivery: Project, Helpdesk and Field Service",
    description:
      "Odoo's service apps explained: Project, Timesheets, Planning, Appointments, Helpdesk, Field Service and Live Chat, with time and materials flowing into invoices.",
    updated: UPDATED,
  },
  {
    slug: "productivity",
    name: "Odoo Productivity",
    title: "Odoo Productivity: Discuss, Documents, Knowledge and IoT",
    description:
      "Odoo's productivity apps explained: Discuss, Documents, Knowledge, VoIP, IoT and Approvals, keeping conversations, files and sign-offs with the records they belong to.",
    updated: UPDATED,
  },
  {
    slug: "ai",
    name: "Odoo AI",
    title: "Odoo AI: Agents, Credits and What Is Unsaid",
    description:
      "Odoo AI explained from its documentation: agents, skills and sources, AI server actions, the MCP server, credits and plans, and what Odoo does not say about models or privacy.",
    updated: UPDATED,
  },
  {
    slug: "studio",
    name: "Odoo Studio",
    title: "Odoo Studio: Customise Odoo Without Code",
    description:
      "Odoo Studio explained: fields, views, automation, reports and approvals without code, how it affects your plan, and what it means for hosting and upgrades.",
    updated: UPDATED,
  },
  {
    slug: "editions-and-hosting",
    name: "Odoo Editions and Hosting",
    title: "Odoo Editions and Hosting: Community, Enterprise, Online, Odoo.sh",
    description:
      "Odoo Community or Enterprise, and Odoo Online, Odoo.sh or on-premise: what differs, what each allows, how long versions are supported and how to choose.",
    updated: UPDATED,
  },
];

export type Faq = { q: string; a: string };

export const odooFaqs = (slug: OdooPageMeta["slug"]): Faq[] => (slug === "" ? hubFaq : contents[slug].faq);

const bySlug = (slug: string) => odooPages.find((p) => p.slug === slug);
export const odPath = (slug: string) => (slug ? `${OD_HUB}/${slug}` : OD_HUB);

export function odooMetadata(slug: OdooPageMeta["slug"]): Metadata {
  const p = bySlug(slug);
  if (!p) return {};
  const url = odPath(slug);
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
 * Structured data for one Odoo page: the page, the product it is about, where it sits, and its FAQ. The product is Odoo's, not
 * ours, so it appears as what the page is about rather than as software we publish.
 */
export function odooLd(slug: OdooPageMeta["slug"]) {
  const p = bySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(odPath(slug));
  const productName = products.find((x) => x.slug === slug)?.name ?? p.name;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Odoo", path: OD_HUB },
    ...(slug ? [{ name: productName, path: odPath(slug) }] : []),
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
            publisher: { "@type": "Organization", name: "Odoo S.A." },
          }
        : { "@type": "Organization", name: "Odoo S.A." },
    },
    breadcrumbLd(crumbs),
  ];
  const faq = odooFaqs(slug);
  if (faq.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return out;
}
