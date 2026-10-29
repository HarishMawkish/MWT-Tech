import { services } from "@/lib/site-data";
import { clouds, cloudHref } from "@/components/salesforce/clouds";

// Content for the "Our Services" mega-menu. Categories sit in the left rail; the
// selected one fills the large panel on the right. SAP Solutions is the first
// category and the one the panel opens on.

/** A marquee entry: bigger, with a mark, and a real page behind it. */
export type MenuFeatured = {
  label: string;
  sub: string;
  href: string;
  /** A logo image. Without one, the card shows a cloud in `accent`. */
  mark?: string;
  accent?: string;
};

export type MenuLogo = { src: string; alt: string };

/** One equal-weight tile in a grid of products (Salesforce's clouds). */
export type MenuTile = { label: string; sub: string; href: string; accent: string };

/** One line in a group. With an `href` it is a link, without one it is display-only. */
export type MenuLink = { label: string; href?: string; accent?: string };

/** A titled column of offerings, the way Stripe and Accenture group a long menu. */
export type MenuGroup = { title: string; items: (string | MenuLink)[] };

/** A dark call-to-action card that sits in the grid beside the groups. */
export type MenuCta = { title: string; body: string; label: string; href: string };

export type MenuCategory = {
  id: string;
  label: string;
  /** Present only when there is a page to go to. Without it the entry is display-only. */
  href?: string;
  /** Short description shown under the name in the rail (for entries without a page). */
  descriptor?: string;
  /** A small logo for the rail. */
  mark?: string;
  blurb?: string;
  /** Equal-weight tiles, one per product, each with its own colour. */
  tiles?: MenuTile[];
  tilesTitle?: string;
  /** Heading over the featured band. */
  featuredTitle?: string;
  /** Two programmes shown in a band above the groups. */
  featured?: MenuFeatured[];
  /** Offerings under short headings (SAP only). Display-only for now. */
  groups?: MenuGroup[];
  /** Sits in the last cell of the groups grid. */
  cta?: MenuCta;
  /** Plain supporting points, for categories with a page. */
  bullets?: string[];
  logos?: MenuLogo[];
};

const summaryOf = (slug: string) => services.find((s) => s.slug === slug)?.summary ?? "";
const outcomesOf = (slug: string) => services.find((s) => s.slug === slug)?.outcomes ?? [];

export const servicesMenu: MenuCategory[] = [
  {
    id: "sap",
    mark: "/images/solutions/sap.svg",
    label: "SAP Solutions",
    href: "/services/sap-solutions",
    blurb: summaryOf("sap-solutions"),
    featuredTitle: "Cloud ERP programmes",
    featured: [
      {
        label: "GROW with SAP",
        sub: "S/4HANA Public Cloud",
        href: "/services/grow-with-sap",
        mark: "/images/solutions/grow-with-sap.jpg",
      },
      {
        label: "RISE with SAP",
        sub: "S/4HANA Private Cloud",
        href: "/services/rise-with-sap",
        mark: "/images/solutions/rise-with-sap.jpg",
      },
    ],
    descriptor: "Cloud ERP, AI & data",
    groups: [
      {
        title: "Advise & plan",
        items: [
          { label: "Cloud ERP Readiness Assessment", href: "/services/cloud-erp-readiness-assessment" },
          { label: "Fit-to-Standard Workshops", href: "/services/fit-to-standard-workshops" },
          { label: "Licensing & Commercial Advisory", href: "/services/licensing-and-commercial-advisory" },
          { label: "Two-Tier ERP for Subsidiaries", href: "/services/two-tier-erp-for-subsidiaries" },
        ],
      },
      {
        title: "Implement & migrate",
        items: [
          { label: "Cloud ERP Implementation", href: "/services/cloud-erp-implementation" },
          { label: "Move from ECC & On-Premise", href: "/services/move-from-ecc-on-premise" },
          "Data Migration",
          { label: "Rollouts & Localisation", href: "/services/rollouts-and-localisation" },
        ],
      },
      {
        title: "Extend & integrate",
        items: [
          { label: "SAP BTP Extensions & Apps", href: "/services/sap-btp-extensions-and-apps" },
          { label: "Process Automation with SAP Build", href: "/services/process-automation-with-sap-build" },
          { label: "SAP & Non-SAP Integration", href: "/services/sap-and-non-sap-integration" },
        ],
      },
      {
        title: "Run & optimise",
        items: [
          { label: "Application Management Support", href: "/services/application-management-support" },
          { label: "Release & Upgrade Management", href: "/services/release-and-upgrade-management" },
          { label: "Test Automation", href: "/services/test-automation" },
          { label: "Security, Roles & Authorisations", href: "/services/security-roles-and-authorisations" },
        ],
      },
      {
        title: "AI & data",
        items: [
          { label: "SAP Business AI", href: "/services/sap-business-ai" },
          { label: "Joule & AI Agents", href: "/services/joule-and-ai-agents" },
          { label: "SAP Business Data Cloud", href: "/services/sap-business-data-cloud" },
          { label: "SAP Analytics Cloud", href: "/services/sap-analytics-cloud" },
          { label: "Group Reporting & Consolidation", href: "/services/group-reporting-and-consolidation" },
        ],
      },
    ],
    cta: {
      title: "Not sure where to start with Cloud ERP?",
      body: "A two-week readiness assessment maps your processes to SAP standard and gives you a costed roadmap.",
      label: "Book an assessment",
      href: "/contact",
    },
  },
  {
    id: "salesforce",
    mark: "/images/solutions/salesforce.svg",
    label: "Salesforce Solutions",
    href: "/services/salesforce-solutions",
    blurb: summaryOf("salesforce-solutions"),
    bullets: outcomesOf("salesforce-solutions"),
    tilesTitle: "Salesforce clouds",
    tiles: clouds.map((c) => ({ label: c.name, sub: c.blurb, href: cloudHref(c.slug), accent: c.accent })),
  },
  {
    id: "odoo",
    mark: "/images/solutions/odoo.svg",
    label: "Odoo Solutions",
    href: "/services/odoo-implementation",
    blurb: summaryOf("odoo-implementation"),
    bullets: outcomesOf("odoo-implementation"),
  },
  {
    id: "swyftflo",
    mark: "/images/solutions/swyftflo.png",
    label: "Swyftflo",
    descriptor: "Supply Chain Solution",
    logos: [{ src: "/images/solutions/swyftflo.png", alt: "Swyftflo" }],
  },
  {
    id: "mihcm",
    mark: "/images/solutions/mihcm.svg",
    label: "MIHCM",
    descriptor: "HR & HCM Solution",
    logos: [{ src: "/images/solutions/mihcm.svg", alt: "MiHCM" }],
  },
  {
    id: "anthropic",
    label: "Anthropic AI",
    descriptor: "Claude Deployment",
    logos: [{ src: "/images/solutions/anthropic.svg", alt: "Anthropic" }],
  },
  {
    id: "databricks",
    mark: "/images/Databricks_Logo.png",
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
