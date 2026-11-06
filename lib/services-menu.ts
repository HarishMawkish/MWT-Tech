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
  /** "contain" shows a wide logo whole on white, instead of cropping it to fill the square (MiHCM's product logos). */
  markFit?: "contain";
  accent?: string;
};

export type MenuLogo = { src: string; alt: string };

/** One equal-weight tile in a grid of products (Salesforce's clouds). */
export type MenuTile = { label: string; sub: string; href: string; accent: string };

/** One of a category's main products: shown large, numbered, in its own colour. */
export type MenuMain = { label: string; sub: string; href: string; accent: string; /** An app icon (a file in /images/odoo/apps), shown in place of the number. */ icon?: string };

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
  /** Columns in the featured band. Two by default (GROW and RISE); Cloud Infrastructure has three platforms. */
  featuredCols?: 2 | 3;
  /** Where the "all" link at the foot of the panel goes, and what it says. Defaults to all services. */
  allHref?: string;
  allLabel?: string;
  /** Offerings under short headings (SAP only). Display-only for now. */
  groups?: MenuGroup[];
  /** Sits in the last cell of the groups grid. */
  cta?: MenuCta;
  /** The main products, drawn as large coloured cards ahead of everything else (Salesforce). */
  main?: MenuMain[];
  mainTitle?: string;
  /** Columns for the main cards. Three by default; Odoo has eight families, so it uses four. */
  mainCols?: 3 | 4;
  /** The supporting products, set as one quiet line under the main ones. */
  also?: MenuLink[];
  alsoTitle?: string;
  /** Plain supporting points, for categories with a page. */
  bullets?: string[];
  logos?: MenuLogo[];
};

const summaryOf = (slug: string) => services.find((s) => s.slug === slug)?.summary ?? "";

export const servicesMenu: MenuCategory[] = [
  {
    id: "sap",
    mark: "/images/solutions/sap.svg",
    label: "SAP Solutions",
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
    // The five main products are drawn large, numbered and in their own colours, so they are what the eye lands on
    // when the menu opens. The supporting products sit in one small line underneath.
    id: "salesforce",
    mark: "/images/solutions/salesforce.svg",
    label: "Salesforce Solutions",
    href: "/services/salesforce",
    blurb: summaryOf("salesforce-solutions"),
    mainTitle: "The five main Salesforce products",
    main: [
      { label: "Sales Cloud", sub: "Pipeline, forecasts and agents for sellers", href: "/services/salesforce/sales-cloud", accent: "#2f86d2" },
      { label: "Data 360", sub: "One customer profile, shared with agents", href: "/services/salesforce/data-360", accent: "#1fa5b8" },
      { label: "Marketing Cloud", sub: "Journeys, campaigns and campaign agents", href: "/services/salesforce/marketing-cloud", accent: "#e0763a" },
      { label: "Loyalty Management", sub: "Programmes, offers and referrals", href: "/services/salesforce/loyalty-management", accent: "#c2478a" },
      { label: "Service Cloud", sub: "Cases, knowledge and AI agents", href: "/services/salesforce/service-cloud", accent: "#3a9d6e" },
    ],
    alsoTitle: "Also on the platform",
    also: [
      { label: "Agentforce", href: "/services/salesforce/agentforce" },
      { label: "Revenue Cloud", href: "/services/salesforce/revenue-cloud" },
      { label: "Field Service", href: "/services/salesforce/field-service" },
      { label: "Commerce Cloud", href: "/services/salesforce/commerce-cloud" },
      { label: "Slack", href: "/services/salesforce/slack" },
      { label: "Tableau", href: "/services/salesforce/tableau" },
      { label: "MuleSoft", href: "/services/salesforce/mulesoft" },
    ],
    cta: {
      title: "Not sure which comes first?",
      body: "Pick the problem that bites most and we will show which of the five to start with.",
      label: "Where to start",
      href: "/services/salesforce#start",
    },
  },
  {
    id: "odoo",
    mark: "/images/solutions/odoo.svg",
    label: "Odoo Solutions",
    href: "/services/odoo",
    blurb: summaryOf("odoo-implementation"),
    mainTitle: "The eight families of Odoo apps",
    mainCols: 4,
    main: [
      { label: "Finance", sub: "Accounting, invoicing, expenses and sign", href: "/services/odoo/finance", accent: "#b26aa0", icon: "accounting" },
      { label: "Sales", sub: "CRM, quotations, subscriptions and POS", href: "/services/odoo/sales", accent: "#f86126", icon: "sales" },
      { label: "Websites", sub: "Website, shop, events and courses", href: "/services/odoo/websites", accent: "#2ebcfa", icon: "website" },
      { label: "Supply Chain", sub: "Inventory, production and purchasing", href: "/services/odoo/supply-chain", accent: "#fbb945", icon: "inventory" },
      { label: "Human Resources", sub: "Hiring, leave, payroll and appraisals", href: "/services/odoo/human-resources", accent: "#1ad3bb", icon: "employees" },
      { label: "Marketing", sub: "Email, SMS, WhatsApp and automation", href: "/services/odoo/marketing", accent: "#fc868b", icon: "email-marketing" },
      { label: "Service Delivery", sub: "Projects, helpdesk and field service", href: "/services/odoo/services", accent: "#7a8cf0", icon: "project" },
      { label: "Productivity", sub: "Discuss, documents, knowledge and IoT", href: "/services/odoo/productivity", accent: "#9aa9c7", icon: "discuss" },
    ],
    alsoTitle: "Also across Odoo",
    also: [
      { label: "Odoo AI", href: "/services/odoo/ai" },
      { label: "Odoo Studio", href: "/services/odoo/studio" },
      { label: "Editions and hosting", href: "/services/odoo/editions-and-hosting" },
    ],
    cta: {
      title: "Not sure which comes first?",
      body: "Pick the problem that costs you most and we will show which family to start with.",
      label: "Where to start",
      href: "/services/odoo#start",
    },
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
    // Laid out like SAP: MiHCM's two editions as the featured cards (with MiHCM's own logos), then the four parts of MiHCM
    // Enterprise as titled groups. The dotted row in each group is the part's page; the rows under it open that module's tab.
    id: "mihcm",
    mark: "/images/mihcm/logos/mihcm.svg",
    label: "MiHCM",
    href: "/services/mihcm",
    descriptor: "HR & payroll, built in Asia",
    featuredTitle: "The two MiHCM editions",
    featured: [
      {
        label: "MiHCM Enterprise",
        sub: "250 to 20,000+ people, 13-country payroll",
        href: "/services/mihcm/enterprise",
        mark: "/images/mihcm/logos/enterprise.svg",
        markFit: "contain",
      },
      {
        label: "MiHCM Lite",
        sub: "Up to 250 people, HR and payroll",
        href: "/services/mihcm/lite",
        mark: "/images/mihcm/logos/lite.svg",
        markFit: "contain",
      },
    ],
    groups: [
      {
        title: "Workforce management",
        items: [
          { label: "Workforce Management", href: "/services/mihcm/workforce-management", accent: "#2f6fd6" },
          { label: "MiHCM Core", href: "/services/mihcm/workforce-management#core" },
          { label: "Payroll", href: "/services/mihcm/workforce-management#payroll" },
          { label: "Time & Attendance", href: "/services/mihcm/workforce-management#time-attendance" },
        ],
      },
      {
        title: "Talent management",
        items: [
          { label: "Talent Management", href: "/services/mihcm/talent-management", accent: "#0aa5d8" },
          { label: "Recruitment & Onboarding", href: "/services/mihcm/talent-management#recruitment" },
          { label: "Performance & Succession", href: "/services/mihcm/talent-management#performance" },
          { label: "Learning (LMS)", href: "/services/mihcm/talent-management#learning" },
        ],
      },
      {
        title: "Employee experience",
        items: [
          { label: "Employee Experience", href: "/services/mihcm/employee-experience", accent: "#f37721" },
          { label: "MiA ONE", href: "/services/mihcm/employee-experience#mia-one" },
          { label: "Self-Service & Mobile", href: "/services/mihcm/employee-experience#self-service" },
          { label: "Shop-Floor Kiosk", href: "/services/mihcm/employee-experience#kiosk" },
        ],
      },
      {
        title: "Data & AI",
        items: [
          { label: "Data & AI", href: "/services/mihcm/data-and-ai", accent: "#8238bf" },
          { label: "Syntra", href: "/services/mihcm/data-and-ai#syntra" },
          { label: "MiHCM SmartAssist", href: "/services/mihcm/data-and-ai#smartassist" },
          { label: "Reporting & Power BI", href: "/services/mihcm/data-and-ai#reporting" },
        ],
      },
      {
        title: "Payroll & compliance",
        items: [
          { label: "Sri Lankan Payroll, Explained", href: "/services/mihcm/workforce-management#lk-payroll" },
          { label: "Payroll in 13 Countries", href: "/services/mihcm/enterprise#payroll" },
          { label: "Security & Data Residency", href: "/services/mihcm/enterprise#trust" },
          { label: "Lite or Enterprise?", href: "/services/mihcm/lite#compare" },
        ],
      },
    ],
    cta: {
      title: "Not sure which edition, or where to start?",
      body: "Tell us your headcount, entities and countries. We'll show which edition fits.",
      label: "Pick your edition",
      href: "/services/mihcm#start",
    },
  },
  {
    // Laid out like SAP: Anthropic's two ways to bring Claude in as the featured cards, then the products as titled groups.
    // Anthropic's trademark guidelines allow its logos only in materials it has approved, so this entry carries no Anthropic
    // artwork: the rail shows a monogram and the cards are text only.
    id: "anthropic",
    label: "Anthropic AI",
    href: "/services/anthropic",
    descriptor: "Claude for work and products",
    featuredTitle: "Two ways to bring Claude in",
    featured: [
      { label: "Claude Enterprise", sub: "Claude for every employee, with IT controls", href: "/services/anthropic/claude-enterprise" },
      { label: "Claude Platform", sub: "Build Claude into products and agents", href: "/services/anthropic/claude-platform" },
    ],
    groups: [
      {
        title: "Claude at work",
        items: [
          { label: "Claude", href: "/services/anthropic/claude", accent: "#d9a03f" },
          { label: "Tasks & Cowork", href: "/services/anthropic/claude#tasks" },
          { label: "Connectors & Skills", href: "/services/anthropic/claude#connectors" },
          { label: "Microsoft 365 & Slack", href: "/services/anthropic/claude#microsoft-365" },
        ],
      },
      {
        title: "For developers",
        items: [
          { label: "Claude Code", href: "/services/anthropic/claude-code", accent: "#7a6ff0" },
          { label: "Issues to Pull Requests", href: "/services/anthropic/claude-code#issues-to-prs" },
          { label: "Code Review", href: "/services/anthropic/claude-code#code-review" },
          { label: "For Engineering Leaders", href: "/services/anthropic/claude-code#code-controls" },
        ],
      },
      {
        title: "Build & run agents",
        items: [
          { label: "Messages API & Tools", href: "/services/anthropic/claude-platform#messages-api" },
          { label: "Claude Managed Agents", href: "/services/anthropic/claude-platform#managed-agents" },
          { label: "Claude on Your Cloud", href: "/services/anthropic/claude-platform#clouds" },
        ],
      },
      {
        title: "Models",
        items: [
          { label: "Claude Models", href: "/services/anthropic/models", accent: "#8f9aa6" },
          { label: "Which Model When", href: "/services/anthropic/models#family" },
          { label: "Mythos & Fable", href: "/services/anthropic/models#mythos" },
        ],
      },
      {
        title: "Security & deployment",
        items: [
          { label: "Security & Deployment", href: "/services/anthropic/security-and-deployment", accent: "#3a9d6e" },
          { label: "Data & Training", href: "/services/anthropic/security-and-deployment#data" },
          { label: "Data Residency", href: "/services/anthropic/security-and-deployment#residency" },
          { label: "Sri Lanka & India", href: "/services/anthropic/security-and-deployment#regions" },
        ],
      },
    ],
    cta: {
      title: "Not sure where to start with Claude?",
      body: "Tell us what you want AI to do. We'll help you choose Enterprise, the Platform or both.",
      label: "Plan your start",
      href: "/services/anthropic#start",
    },
  },
  {
    // Laid out like Odoo and Salesforce: Databricks presents its platform as a set of products of roughly equal
    // weight, grouped by job, so each one is a card in its own colour. The supporting pages sit in the quiet line
    // underneath. The order matches the order the pages read in.
    id: "databricks",
    mark: "/images/Databricks_Logo.png",
    label: "Databricks",
    href: "/services/databricks",
    descriptor: "Data & AI platform",
    mainTitle: "The eight parts of the platform",
    mainCols: 4,
    main: [
      { label: "Lakehouse", sub: "SQL and BI on open tables you own", href: "/services/databricks/lakehouse", accent: "#ff3621" },
      { label: "Lakeflow", sub: "Ingestion, pipelines and orchestration", href: "/services/databricks/lakeflow", accent: "#ef8a2b" },
      { label: "Unity Catalog", sub: "One catalogue for data and AI", href: "/services/databricks/unity-catalog", accent: "#3d7df6" },
      { label: "Genie", sub: "Dashboards and questions in plain English", href: "/services/databricks/genie", accent: "#9b5de5" },
      { label: "Agent Bricks", sub: "Build, evaluate and run agents", href: "/services/databricks/agent-bricks", accent: "#e4376a" },
      { label: "Lakebase", sub: "Serverless Postgres that branches", href: "/services/databricks/lakebase", accent: "#13a0a0" },
      { label: "Databricks Apps", sub: "Internal tools without a server", href: "/services/databricks/apps", accent: "#5a6ff0" },
      { label: "OpenSharing", sub: "Share live data, don't copy it", href: "/services/databricks/sharing", accent: "#2ba86f" },
    ],
    alsoTitle: "Also in this section",
    also: [
      { label: "SAP Business Data Cloud", href: "/services/databricks/sap-business-data-cloud" },
      { label: "Security & architecture", href: "/services/databricks/security-and-architecture" },
      { label: "Migration", href: "/services/databricks/migration" },
      { label: "Pricing & cost", href: "/services/databricks/pricing-and-cost" },
    ],
    cta: {
      title: "Not sure which part you need?",
      body: "Tell us the argument you keep having about numbers and we will show you where it belongs.",
      label: "Where to start",
      href: "/services/databricks#start",
    },
  },
  {
    id: "cloud",
    mark: "/images/solutions/cloud-infrastructure.svg",
    label: "Hyperscalers",
    href: "/services/cloud-infrastructure",
    descriptor: "Cloud Infrastructure Provider",
    featuredTitle: "Cloud platforms",
    featuredCols: 3,
    // One line each, so this band is exactly as tall as the SAP one. The logos are the vendors' own marks, as on the home page.
    featured: [
      { label: "AWS", sub: "Amazon Web Services", href: "/services/cloud-infrastructure/aws", mark: "/images/solutions/AWS.png", markFit: "contain" },
      { label: "Microsoft Azure", sub: "SAP and Microsoft 365", href: "/services/cloud-infrastructure/microsoft-azure", mark: "/images/solutions/Microsoft.png", markFit: "contain" },
      {
        label: "Google Cloud",
        sub: "SAP, data and AI",
        href: "/services/cloud-infrastructure/google-cloud",
        mark: "https://zql0rfjwszzixew9.public.blob.vercel-storage.com/solutions/Google%20Cloud.png",
        markFit: "contain",
      },
    ],
    groups: [
      {
        title: "Advise & plan",
        items: [
          { label: "Cloud Strategy & Readiness Assessment", href: "/services/cloud-infrastructure/cloud-readiness-assessment" },
          { label: "Business Case & TCO", href: "/services/cloud-infrastructure/business-case-tco" },
          { label: "Landing Zone & Architecture Design", href: "/services/cloud-infrastructure/landing-zone-architecture" },
          { label: "Migration Funding & Marketplace Buying", href: "/services/cloud-infrastructure/migration-funding-marketplace" },
        ],
      },
      {
        title: "Migrate & modernise",
        items: [
          { label: "SAP ECC & S/4HANA to the Cloud", href: "/services/cloud-infrastructure/sap-to-cloud" },
          { label: "RISE with SAP: Cloud & Region Choice", href: "/services/cloud-infrastructure/rise-cloud-region-choice" },
          { label: "Database & Application Migration", href: "/services/cloud-infrastructure/database-application-migration" },
          { label: "Infrastructure Modernisation", href: "/services/cloud-infrastructure/infrastructure-modernisation" },
        ],
      },
      {
        title: "Build & connect",
        items: [
          { label: "Infrastructure Provisioning as Code", href: "/services/cloud-infrastructure/infrastructure-as-code" },
          { label: "Network & Connectivity to RISE and BTP", href: "/services/cloud-infrastructure/network-connectivity-rise-btp" },
          { label: "Identity & Single Sign-On", href: "/services/cloud-infrastructure/identity-single-sign-on" },
          { label: "Hosting for Non-SAP Workloads", href: "/services/cloud-infrastructure/non-sap-workload-hosting" },
        ],
      },
      {
        title: "Run & optimise",
        items: [
          { label: "Managed Cloud Operations", href: "/services/cloud-infrastructure/managed-cloud-operations" },
          { label: "FinOps & Cost Optimisation", href: "/services/cloud-infrastructure/finops-cost-optimisation" },
          { label: "High Availability, DR & Backup", href: "/services/cloud-infrastructure/high-availability-dr-backup" },
          { label: "Cloud Security & Compliance", href: "/services/cloud-infrastructure/cloud-security-compliance" },
        ],
      },
      {
        title: "Data, AI & skills",
        items: [
          { label: "AI & Data on SAP Data", href: "/services/cloud-infrastructure/ai-data-on-sap" },
          { label: "Microsoft 365 & Copilot with SAP", href: "/services/cloud-infrastructure/microsoft-365-copilot-sap" },
          { label: "DevOps & Automation", href: "/services/cloud-infrastructure/devops-automation" },
          { label: "Training & Enablement", href: "/services/cloud-infrastructure/training-enablement" },
        ],
      },
    ],
    cta: {
      title: "Still running SAP in your own data centre?",
      body: "A readiness assessment compares RISE with SAP and a cloud move: cost, risk and timeline.",
      label: "Book an assessment",
      href: "/contact",
    },
    allHref: "/services/cloud-infrastructure",
    allLabel: "All cloud services",
  },
];
