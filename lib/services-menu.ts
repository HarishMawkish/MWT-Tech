import { services } from "@/lib/site-data";

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
        href: "/services/sap-solutions/grow-with-sap",
        mark: "/images/solutions/grow-with-sap.jpg",
      },
      {
        label: "RISE with SAP",
        sub: "S/4HANA Private Cloud",
        href: "/services/sap-solutions/rise-with-sap",
        mark: "/images/solutions/rise-with-sap.jpg",
      },
    ],
    descriptor: "Cloud ERP, AI & data",
    groups: [
      {
        title: "Advise & plan",
        items: [
          { label: "Cloud ERP Readiness Assessment", href: "/services/sap-solutions/cloud-erp-readiness-assessment" },
          { label: "Fit-to-Standard Workshops", href: "/services/sap-solutions/fit-to-standard-workshops" },
          { label: "Licensing & Commercial Advisory", href: "/services/sap-solutions/licensing-and-commercial-advisory" },
          { label: "Two-Tier ERP for Subsidiaries", href: "/services/sap-solutions/two-tier-erp-for-subsidiaries" },
        ],
      },
      {
        title: "Implement & migrate",
        items: [
          { label: "Cloud ERP Implementation", href: "/services/sap-solutions/cloud-erp-implementation" },
          { label: "Move from ECC & On-Premise", href: "/services/sap-solutions/move-from-ecc-on-premise" },
          { label: "Data Migration", href: "/services/sap-solutions/data-migration" },
          { label: "Rollouts & Localisation", href: "/services/sap-solutions/rollouts-and-localisation" },
        ],
      },
      {
        title: "Extend & integrate",
        items: [
          { label: "SAP BTP Extensions & Apps", href: "/services/sap-solutions/sap-btp-extensions-and-apps" },
          { label: "Process Automation with SAP Build", href: "/services/sap-solutions/process-automation-with-sap-build" },
          { label: "SAP & Non-SAP Integration", href: "/services/sap-solutions/sap-and-non-sap-integration" },
        ],
      },
      {
        title: "Run & optimise",
        items: [
          { label: "Application Management Support", href: "/services/sap-solutions/application-management-support" },
          { label: "Release & Upgrade Management", href: "/services/sap-solutions/release-and-upgrade-management" },
          { label: "Test Automation", href: "/services/sap-solutions/test-automation" },
          { label: "Security, Roles & Authorisations", href: "/services/sap-solutions/security-roles-and-authorisations" },
        ],
      },
      {
        title: "AI & data",
        items: [
          { label: "AI Catalog", href: "/services/sap-solutions/ai-catalog" },
          { label: "SAP Business AI", href: "/services/sap-solutions/sap-business-ai" },
          { label: "Joule & AI Agents", href: "/services/sap-solutions/joule-and-ai-agents" },
          { label: "SAP Business Data Cloud", href: "/services/sap-solutions/sap-business-data-cloud" },
          { label: "SAP Analytics Cloud", href: "/services/sap-solutions/sap-analytics-cloud" },
          { label: "Group Reporting & Consolidation", href: "/services/sap-solutions/group-reporting-and-consolidation" },
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
    // Laid out like SAP: two featured cards, titled groups and a call to action. The first group is the five main
    // products, each in its own colour, so they are what the eye lands on; the groups after it are the supporting
    // products and deep links into the pages.
    id: "salesforce",
    mark: "/images/solutions/salesforce.svg",
    label: "Salesforce Solutions",
    href: "/services/salesforce",
    blurb: summaryOf("salesforce-solutions"),
    featuredTitle: "The Salesforce platform",
    featured: [
      {
        label: "Five products, one platform",
        sub: "Sales, data, marketing, loyalty, service",
        href: "/services/salesforce",
        mark: "/images/solutions/salesforce-hub.svg",
      },
      {
        label: "Where to start",
        sub: "Find the gap that bites most",
        href: "/services/salesforce#start",
        mark: "/images/solutions/salesforce-start.svg",
      },
    ],
    groups: [
      {
        title: "The five main products",
        items: [
          { label: "Sales Cloud", href: "/services/salesforce/sales-cloud", accent: "#2f86d2" },
          { label: "Data 360", href: "/services/salesforce/data-360", accent: "#1fa5b8" },
          { label: "Marketing Cloud", href: "/services/salesforce/marketing-cloud", accent: "#e0763a" },
          { label: "Loyalty Management", href: "/services/salesforce/loyalty-management", accent: "#c2478a" },
          { label: "Service Cloud", href: "/services/salesforce/service-cloud", accent: "#3a9d6e" },
        ],
      },
      {
        title: "Sell and serve more",
        items: [
          { label: "Revenue Cloud", href: "/services/salesforce/revenue-cloud" },
          { label: "Commerce Cloud", href: "/services/salesforce/commerce-cloud" },
          { label: "Field Service", href: "/services/salesforce/field-service" },
        ],
      },
      {
        title: "Agents and analytics",
        items: [
          { label: "Agentforce", href: "/services/salesforce/agentforce" },
          { label: "Trust and guardrails", href: "/services/salesforce/agentforce#trust" },
          { label: "Tableau", href: "/services/salesforce/tableau" },
        ],
      },
      {
        title: "Connect and collaborate",
        items: [
          { label: "MuleSoft", href: "/services/salesforce/mulesoft" },
          { label: "MuleSoft and SAP", href: "/services/salesforce/mulesoft#explore" },
          { label: "Slack", href: "/services/salesforce/slack" },
        ],
      },
    ],
    cta: {
      title: "Not sure which Salesforce product comes first?",
      body: "Tell us what you want it to do. We will help you work out which of the five to look at first.",
      label: "Find your starting point",
      href: "/services/salesforce#start",
    },
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
    // Laid out like SAP: two featured cards, five titled groups and a call to action. The dotted rows are the six
    // products (in each product's colour); the rows under them jump to the matching section of that product's page.
    id: "swyftflo",
    mark: "/images/solutions/swyftflo.png",
    label: "Swyftflo",
    href: "/services/swyftflo",
    descriptor: "AI-native supply chain suite",
    featuredTitle: "Swyftflo supply chain suite",
    featured: [
      {
        label: "Swyftflo Suite",
        sub: "Six products, one digital thread",
        href: "/services/swyftflo",
        mark: "/images/solutions/swyftflo-suite.svg",
      },
      {
        label: "Where to start",
        sub: "Find the gap that costs you most",
        href: "/services/swyftflo#start",
        mark: "/images/solutions/swyftflo-start.svg",
      },
    ],
    groups: [
      {
        title: "Source & procure",
        items: [
          { label: "Source to Pay", href: "/services/swyftflo/source-to-pay", accent: "#3b4cca" },
          { label: "Sourcing Events & Tenders", href: "/services/swyftflo/source-to-pay#events" },
          { label: "Bid Evaluation & Negotiation", href: "/services/swyftflo/source-to-pay#explore" },
        ],
      },
      {
        title: "Execute & track",
        items: [
          { label: "Supply Chain Control Tower", href: "/services/swyftflo/control-tower", accent: "#2563eb" },
          { label: "Shipment Journey & Live Tracking", href: "/services/swyftflo/control-tower#journey" },
          { label: "Role-Based Partner Views", href: "/services/swyftflo/control-tower#roles" },
        ],
      },
      {
        title: "Move & deliver",
        items: [
          { label: "Transportation Management", href: "/services/swyftflo/tms", accent: "#3b6ff5" },
          { label: "For Shippers, 3PLs & Carriers", href: "/services/swyftflo/tms#audience" },
          { label: "Load, Route & Driver App", href: "/services/swyftflo/tms#explore" },
        ],
      },
      {
        title: "Verify & pay",
        items: [
          { label: "Invoice Hub", href: "/services/swyftflo/invoice-hub", accent: "#2aa8e0" },
          { label: "6-Way AI Invoice Audit", href: "/services/swyftflo/invoice-hub#audit" },
          { label: "Approvals & Tolerances", href: "/services/swyftflo/invoice-hub#explore" },
        ],
      },
      {
        title: "Analyse & prove",
        items: [
          { label: "Spend Intelligence", href: "/services/swyftflo/spend-intelligence", accent: "#7c5cff" },
          { label: "The Spend Agent", href: "/services/swyftflo/spend-intelligence#levels" },
          { label: "Authentik Product Passports", href: "/services/swyftflo/authentik", accent: "#16b8d6" },
          { label: "Stakeholder Passport Views", href: "/services/swyftflo/authentik#views" },
        ],
      },
    ],
    cta: {
      title: "Not sure which product to start with?",
      body: "Tell us how a purchase, a shipment and an invoice move today. We'll show you which gap to close first.",
      label: "Find your starting point",
      href: "/services/swyftflo#start",
    },
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
