// Content for the GROW with SAP page.
//
// Paraphrased from SAP's own pages (sap.com/products/erp/grow and its FAQ),
// read on 28 October 2026. Figures are SAP's, not claims about Mawkish. SAP now
// presents the programme as "SAP GROW"; it is built on SAP S/4HANA Cloud
// Public Edition.

import type { ExplorerItem, PageSection, ProofStat, StackLayer, Step } from "../sap-ai/types";

export const sections: PageSection[] = [
  { id: "overview", label: "Overview" },
  { id: "core", label: "Core processes" },
  { id: "go-live", label: "Go live fast" },
  { id: "scale", label: "Grow into more" },
  { id: "trust", label: "Security & cost" },
  { id: "compare", label: "GROW or RISE?" },
];

export const promises = [
  {
    title: "Start fast",
    body: "Go live in weeks with preconfigured, industry-specific workflows and proven best practices.",
  },
  {
    title: "Simplify with AI",
    body: "AI is built into core processes, flagging real exceptions and adding value as you grow.",
  },
  {
    title: "Grow with industry depth",
    body: "Proven processes, data models and regulatory logic across over 25 industries and over 190 countries.",
  },
  {
    title: "Predictable costs",
    body: "Simplified packages with transparent, fixed-scope pricing: no scope creep, surprise upgrades or hidden costs.",
  },
] as const;

export const whoFor = [
  "Companies new to SAP",
  "Businesses outgrowing entry-level systems",
  "Teams unifying finance, supply chain and HR",
  "Companies that want embedded AI from day one",
] as const;

export const photos = {
  overview: {
    src: "/images/sap-erp/grow-overview.jpg",
    alt: "A team gathered around a screen, working through a plan together",
  },
  golive: {
    src: "/images/sap-erp/grow-golive.jpg",
    alt: "Two colleagues working on laptops at a desk in a glass-walled office",
  },
};

export const coreProcesses: ExplorerItem[] = [
  {
    id: "finance",
    label: "Finance",
    photo: { src: "/images/sap-ai/uc-finance.jpg", alt: "A calculator, printed charts and a laptop on a finance desk" },
    headline:
      "AI-powered automation removes bottlenecks, surfaces the insights that matter and helps you close faster, period after period.",
    alsoLabel: "What it covers",
    also: [
      "Order-to-cash, procure-to-pay and record-to-report",
      "Financial management",
      "AI tools for billing, cash management and receivables",
    ],
  },
  {
    id: "supply",
    label: "Supply chain",
    photo: { src: "/images/sap-erp/grow-supply.jpg", alt: "A man in a warehouse looking up while holding a tablet" },
    headline:
      "Connect production, logistics and maintenance so operations stay in sync, with end-to-end visibility and control across the business.",
    alsoLabel: "What it covers",
    also: ["Manufacturing", "Logistics and warehousing", "Asset management"],
  },
  {
    id: "hr",
    label: "Human resources",
    photo: { src: "/images/sap-erp/grow-hr.jpg", alt: "A smiling manager holding a clipboard during an interview" },
    headline:
      "Streamline core HR, time and global payroll. Employees get self-service AI tools and HR spends less time on manual work.",
    alsoLabel: "What it covers",
    also: [
      "Hire-to-retire, payroll and time tracking",
      "Organizational management",
      "Integrated with finance through SAP SuccessFactors",
    ],
  },
];

export const goLiveSteps: Step[] = [
  {
    title: "Define a launch scope",
    body: "A Digital Discovery Assessment helps preselect scope and speeds up discovery, so the project starts from your needs rather than a blank page.",
  },
  {
    title: "Configure from best practice",
    body: "SAP Central Business Configuration handles implementation and ongoing maintenance, starting from preconfigured industry best practices.",
  },
  {
    title: "Run the project on proven rails",
    body: "SAP Cloud ALM manages the project, using SAP-approved tools, templates and methodologies to lower risk and avoid the cost of a custom build.",
  },
  {
    title: "Go live, with partner support",
    body: "Under GROW Fast, certified partners (or SAP) deliver a predefined, fixed scope, prioritizing essential workflows so teams stay productive through go-live.",
  },
];

export const proofStats: ProofStat[] = [
  {
    value: 52,
    label: "days to go-live at Temco Logistics",
    source: "SAP customer webinar: “52 Days to Go-Live”",
  },
  {
    prefix: "Up to",
    value: 50,
    suffix: "%",
    label: "lower project costs with the GROW toolchain",
    source: "SAP; it also cites a 40–60% reduction in time-to-value",
  },
  {
    prefix: "Over",
    value: 190,
    label: "countries covered by built-in regulatory logic",
    source: "SAP GROW overview, alongside over 25 industries",
  },
];

export const scaleLayers: StackLayer[] = [
  {
    id: "start",
    name: "Start with one area",
    tag: "Start",
    blurb: "Begin with finance, supply chain or HR, whichever matters most to the business today.",
    points: [
      "Packages aligned to a defined scope, with best practices embedded",
      "Transparent, subscription-based pricing published on SAP.com",
      "GROW Fast: a predefined scope delivered by certified partners",
    ],
  },
  {
    id: "expand",
    name: "Activate more",
    tag: "Expand",
    blurb: "Switch on further capabilities as the business needs them, with no re-implementation.",
    points: [
      "Modular add-ons you extend over time",
      "Scale into new markets, acquisitions or business units",
      "No replacing or rebuilding systems",
    ],
  },
  {
    id: "extend",
    name: "Extend with AI and integrations",
    tag: "Extend",
    blurb: "Add agentic AI, application extensions and advanced integration tools on the same system.",
    points: [
      "Embedded AI inside core processes",
      "Joule, SAP's AI solution, across finance, supply chain and HR",
      "Move forward on your own terms on a platform that grows with you",
    ],
  },
];

export const trustPillars = [
  {
    title: "Secure by design",
    lead: "Runs on SAP's cloud infrastructure.",
    points: [
      "A 99.9% service-level agreement",
      "24/7 AI-assisted threat and vulnerability management",
      "Tenant isolation, encryption, authentication and access controls",
      "Auditable security practices across SAP development",
    ],
  },
  {
    title: "Always compliant",
    lead: "Updates arrive without you chasing them.",
    points: [
      "Compliance and regulatory updates delivered automatically",
      "Covers tax, statutory reporting and business-to-government requirements",
      "Across 60 countries",
    ],
  },
  {
    title: "Predictable cost",
    lead: "Know what's included from day one.",
    points: [
      "Simplified packages with fixed scope",
      "Transparent subscription pricing",
      "Add modules over time without a full reimplementation",
    ],
  },
] as const;

export const specGroups = [
  {
    title: "Security",
    rows: [
      { k: "Availability", v: "A 99.9% service-level agreement on SAP's cloud infrastructure." },
      { k: "Threat management", v: "24/7 AI-assisted threat and vulnerability management." },
      { k: "Data protection", v: "Tenant isolation, encryption, authentication and access controls." },
      { k: "Assurance", v: "Auditable security practices embedded across SAP development." },
    ],
  },
  {
    title: "Compliance",
    rows: [
      { k: "Regulatory updates", v: "Delivered automatically, covering tax, statutory reporting and business-to-government requirements." },
      { k: "Coverage", v: "Across 60 countries, so you stay current without manual effort." },
    ],
  },
  {
    title: "Cost",
    rows: [
      { k: "Packages", v: "Simplified packages aligned to a defined scope, with best practices embedded." },
      { k: "Pricing", v: "Transparent, subscription-based pricing, published on SAP.com." },
      { k: "Growth", v: "Add modules over time without a full reimplementation." },
    ],
  },
];
