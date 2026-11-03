// The MiHCM product set, as the pages and the menu see it. MiHCM sells two editions (MiHCM Enterprise and MiHCM Lite) and
// draws MiHCM Enterprise as four parts: Workforce Management, Talent Management, Employee Experience, and Data & AI. The
// pages follow that: one page per edition, one page per part, and each module inside a part is a tab on its page. Every
// description here is written from MiHCM's own published material (see the sources on each page and in
// docs/mihcm-product-knowledge.md).

export const MH_HUB = "/services/mihcm";

/** One colour for every "you are here" marker, on every MiHCM page. */
export const MH_HERE = "#f37721";

export const MH_LEGAL =
  "MiHCM, MiHCM Enterprise, MiHCM Lite, MiA ONE, Syntra, MiHCM SmartAssist, their logos and their module icons belong to M I H C M Solutions (Private) Limited. They are shown unaltered, as MiHCM publishes them on mihcm.com. Other names are the property of their owners. Screens shown are our own illustrations with sample data, not MiHCM screenshots. Product descriptions follow MiHCM's own published material and may change; check mihcm.com for current details.";

export type ProductSlug =
  | "enterprise"
  | "lite"
  | "workforce-management"
  | "talent-management"
  | "employee-experience"
  | "data-and-ai";

/** Where a module's icon lives. The files are MiHCM's own, as published on mihcm.com. */
export const iconSrc = (key: string) => `/images/mihcm/modules/${key}.svg`;

/** Where a product's logo lives. The files are MiHCM's own, as published on mihcm.com. */
export const logoSrc = (key: "enterprise" | "lite" | "mia-one" | "smartassist" | "syntra" | "mihcm") => `/images/mihcm/logos/${key}.svg`;

export type PartSlug = Exclude<ProductSlug, "enterprise" | "lite">;

export type Module = {
  /** The icon file name. */
  key: string;
  name: string;
  part: PartSlug;
  /** The tab on the part's page that covers it, when it is not the module's own key (some modules share a tab). */
  tab?: string;
  /** One plain line on what it is for. */
  line: string;
};

/**
 * The seventeen capabilities MiHCM draws in its Enterprise product stack, each with MiHCM's own icon. The ten Talent
 * Management modules are the ten MiHCM names on that page; the lines are ours.
 */
export const modules: Module[] = [
  // Workforce management
  { key: "core", name: "MiHCM Core", part: "workforce-management", line: "One employee record, from onboarding to retirement." },
  { key: "payroll", name: "Payroll", part: "workforce-management", line: "Statutory payroll, run natively in each country." },
  { key: "time-attendance", name: "Time & Attendance", part: "workforce-management", line: "Shifts, rosters, overtime and devices." },
  { key: "organisation-planning", name: "Organisation Planning", part: "workforce-management", line: "Live org charts and approved headcount." },
  // Talent management
  { key: "recruitment", name: "Recruitment", part: "talent-management", line: "Requisition to offer letter." },
  { key: "onboarding", name: "Onboarding", part: "talent-management", line: "Checklists, documents and a new-hire portal." },
  { key: "performance", name: "Performance Management", part: "talent-management", line: "Goals, appraisals and 360° feedback." },
  { key: "succession", name: "Succession Planning", part: "talent-management", line: "Successors identified from performance and potential." },
  { key: "learning-management", name: "Learning Management System", part: "talent-management", tab: "learning", line: "Skills-based courses, assessments and certificates." },
  { key: "learning-administration", name: "Learning Administration", part: "talent-management", tab: "learning", line: "Training calendars, nominations and requests." },
  { key: "compensation", name: "Compensation Planning", part: "talent-management", tab: "reward", line: "Planning held inside an approved budget." },
  { key: "benefits", name: "Benefits Management", part: "talent-management", tab: "reward", line: "Employee benefits, reported alongside pay." },
  { key: "expenses", name: "Expense Claims", part: "talent-management", tab: "reward", line: "Claims raised and approved in self-service." },
  { key: "engagement", name: "Employee Engagement", part: "talent-management", line: "Pulse check-ins, surveys and engagement dashboards." },
  // Employee experience
  { key: "mia-one", name: "MiA ONE", part: "employee-experience", tab: "mia-one", line: "A personal AI assistant for every employee." },
  // Data and AI
  { key: "syntra", name: "Syntra", part: "data-and-ai", line: "Ask questions of workforce data in plain language." },
  { key: "smartassist", name: "MiHCM SmartAssist", part: "data-and-ai", line: "AI-drafted HR documents and candidate screening." },
];

export const moduleByKey = (key: string) => modules.find((m) => m.key === key);

export type Product = {
  slug: ProductSlug;
  /** Full name as the pages use it. */
  name: string;
  /** Short name for the chip line and the menu. */
  short: string;
  /** "edition" for the two products MiHCM sells; "main" for the four parts of MiHCM Enterprise. */
  tier: "edition" | "main";
  /** What it is for, in a word or two. */
  stage: string;
  tagline: string;
  /** Two sentences for the index. */
  summary: string;
  points: string[];
  /** The accent, taken from the colours of MiHCM's own logos and icons. */
  color: string;
  /** A module icon that stands for it. */
  icon?: string;
  /** The product's own logo, for the two editions. */
  logo?: "enterprise" | "lite";
};

export const products: Product[] = [
  {
    slug: "enterprise",
    name: "MiHCM Enterprise",
    short: "Enterprise",
    tier: "edition",
    stage: "250 to 20,000+ people",
    tagline: "All-in-one HR for complex, multi-country organisations.",
    summary:
      "The configurable HCM suite for organisations of 250 to 20,000+ people, from hire to retire across every entity, with native statutory payroll in 13 countries across South and South East Asia.",
    points: ["13-country payroll", "17 modules", "Three AI products", "Your own Azure tenant"],
    color: "#253e98",
    icon: "core",
    logo: "enterprise",
  },
  {
    slug: "lite",
    name: "MiHCM Lite",
    short: "Lite",
    tier: "edition",
    stage: "Up to 250 people",
    tagline: "HR, payroll and attendance for small businesses.",
    summary:
      "A cloud HRIS for start-ups and small businesses of up to 250 employees: employee records, payroll, time and attendance and analytics, on web and mobile.",
    points: ["Core HRIS", "Payroll", "Time and attendance", "MiA ONE"],
    color: "#f16012",
    icon: "payroll",
    logo: "lite",
  },
  {
    slug: "workforce-management",
    name: "Workforce Management",
    short: "Workforce",
    tier: "main",
    stage: "The foundation",
    tagline: "One employee record, paid correctly, on every shift.",
    summary:
      "MiHCM Core, Payroll, Time & Attendance and Organisation Planning: the single employee record everything else depends on, and the payroll and attendance rules that run on it.",
    points: ["Employee profile", "Statutory payroll", "Shifts and overtime", "Headcount plans"],
    color: "#2f6fd6",
    icon: "core",
  },
  {
    slug: "talent-management",
    name: "Talent Management",
    short: "Talent",
    tier: "main",
    stage: "Hire to succession",
    tagline: "Hire to succession, on one connected journey.",
    summary:
      "Ten connected modules, from the job requisition and the offer letter to appraisals, learning, reward and the successor for each role, all working from the same employee record.",
    points: ["Recruitment", "Performance", "Learning", "Succession"],
    color: "#0aa5d8",
    icon: "performance",
  },
  {
    slug: "employee-experience",
    name: "Employee Experience",
    short: "Experience",
    tier: "main",
    stage: "Self-service",
    tagline: "Every request in one place, for whoever is asking.",
    summary:
      "Web self-service, the mobile app, MiA ONE by chat or voice, and a shared kiosk for staff without a workstation, so employees and managers raise and approve requests in one place.",
    points: ["MiA ONE", "Mobile app", "Manager approvals", "Shop-floor kiosk"],
    color: "#f37721",
    icon: "mia-one",
  },
  {
    slug: "data-and-ai",
    name: "Data & AI",
    short: "Data & AI",
    tier: "main",
    stage: "Insight",
    tagline: "Reports before the question, and three AI products for three jobs.",
    summary:
      "Standard reports, live dashboards, built-in Power BI and a visual query builder, plus Syntra for leadership foresight, SmartAssist for documents and screening, and MiHCM's Data & AI services.",
    points: ["Power BI", "Syntra", "SmartAssist", "Custom analytics"],
    color: "#8238bf",
    icon: "syntra",
  },
];

export const editions = products.filter((p) => p.tier === "edition");
/** Every product, editions first: the chip line, the index and the panels all show the six. */
export const mainProducts = products;
export const supportProducts: Product[] = [];

export const productBySlug = (slug: ProductSlug) => products.find((p) => p.slug === slug)!;
export const productPath = (slug: ProductSlug) => `${MH_HUB}/${slug}`;
export const modulesOf = (part: PartSlug) => modules.filter((m) => m.part === part);
/** Where a module is explained: its part's page, opened on its tab. */
export const moduleHref = (m: Module) => `${productPath(m.part)}#${m.tab ?? m.key}`;

/** The thirteen markets where MiHCM Enterprise runs native statutory payroll, as MiHCM lists them. */
export const payrollCountries: { name: string; region: "South Asia" | "South East Asia"; page: boolean }[] = [
  { name: "Sri Lanka", region: "South Asia", page: true },
  { name: "Bangladesh", region: "South Asia", page: true },
  { name: "Maldives", region: "South Asia", page: false },
  { name: "Pakistan", region: "South Asia", page: false },
  { name: "Malaysia", region: "South East Asia", page: true },
  { name: "Singapore", region: "South East Asia", page: true },
  { name: "Indonesia", region: "South East Asia", page: true },
  { name: "Thailand", region: "South East Asia", page: true },
  { name: "Vietnam", region: "South East Asia", page: true },
  { name: "Philippines", region: "South East Asia", page: true },
  { name: "Cambodia", region: "South East Asia", page: true },
  { name: "Myanmar", region: "South East Asia", page: true },
  { name: "Brunei", region: "South East Asia", page: false },
];
