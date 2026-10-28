import { services } from "@/lib/site-data";

// Content for the "Our Services" mega-menu. Categories sit in the left rail; the
// selected one fills the large panel on the right. SAP Solutions is the first
// category and the one the panel opens on.

/** A marquee entry: bigger, with a mark, and a real page behind it. */
export type MenuFeatured = {
  label: string;
  sub: string;
  href: string;
  mark: string;
};

export type MenuLogo = { src: string; alt: string };

/** A titled column of offerings, the way Stripe and Accenture group a long menu. */
export type MenuGroup = { title: string; items: string[] };

export type MenuCategory = {
  id: string;
  label: string;
  /** Present only when there is a page to go to. Without it the entry is display-only. */
  href?: string;
  /** Short description shown under the name in the rail (for entries without a page). */
  descriptor?: string;
  blurb?: string;
  /** Two programmes shown in a band above the groups (SAP only). */
  featured?: MenuFeatured[];
  /** Offerings under short headings (SAP only). Display-only for now. */
  groups?: MenuGroup[];
  /** Plain supporting points, for categories with a page. */
  bullets?: string[];
  logos?: MenuLogo[];
};

const summaryOf = (slug: string) => services.find((s) => s.slug === slug)?.summary ?? "";
const outcomesOf = (slug: string) => services.find((s) => s.slug === slug)?.outcomes ?? [];

export const servicesMenu: MenuCategory[] = [
  {
    id: "sap",
    label: "SAP Solutions",
    href: "/services/sap-solutions",
    blurb: summaryOf("sap-solutions"),
    featured: [
      {
        label: "GROW with SAP",
        sub: "S/4HANA Public Cloud",
        href: "/services/grow-with-sap",
        mark: "/images/solutions/grow.jpg",
      },
      {
        label: "RISE with SAP",
        sub: "S/4HANA Private Cloud",
        href: "/services/rise-with-sap",
        mark: "/images/solutions/rise.jpg",
      },
    ],
    groups: [
      {
        title: "Implement & migrate",
        items: [
          "SAP Implementation",
          "SAP ECC Migration",
          "SAP S/4HANA On Prem Migration",
          "SAP Integration",
          "SAP Rollout",
          "SAP BDC Deployment",
          "SAP Analytics Cloud Deployment",
          "SAP Group Reporting Deployment",
        ],
      },
      {
        title: "Run & build",
        items: [
          "SAP Support Service",
          "SAP BTP Development",
          "SAP Application Development & Automation",
          "SAP Cloud ERP Licensing",
          "SAP Cloud ERP Commercial Construct",
        ],
      },
      {
        title: "AI",
        items: ["SAP Business AI Deployment", "SAP Joule Deployment"],
      },
    ],
  },
  {
    id: "salesforce",
    label: "Salesforce Solutions",
    href: "/services/salesforce-solutions",
    blurb: summaryOf("salesforce-solutions"),
    bullets: outcomesOf("salesforce-solutions"),
  },
  {
    id: "odoo",
    label: "Odoo Solutions",
    href: "/services/odoo-implementation",
    blurb: summaryOf("odoo-implementation"),
    bullets: outcomesOf("odoo-implementation"),
  },
  {
    id: "swyftflo",
    label: "Swyftflo",
    descriptor: "Supply Chain Solution",
    logos: [{ src: "/images/solutions/swyftflo.png", alt: "Swyftflo" }],
  },
  {
    id: "mihcm",
    label: "MIHCM",
    descriptor: "HR & HCM Solution",
  },
  {
    id: "databricks",
    label: "DataBricks",
    descriptor: "Enterprise Data Platform",
    logos: [{ src: "/images/Databricks_Logo.png", alt: "Databricks" }],
  },
  {
    id: "hyperscalers",
    label: "Hyperscalers",
    descriptor: "Cloud Infrastructure Provider",
    logos: [
      { src: "/images/solutions/AWS.png", alt: "AWS" },
      { src: "/images/solutions/Microsoft.png", alt: "Microsoft" },
      {
        src: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Google%20Cloud.png",
        alt: "Google Cloud",
      },
    ],
  },
];
