// Content for the RISE with SAP page.
//
// Paraphrased from SAP's own pages (sap.com/products/erp/rise, its FAQ, and
// SAP News Center), read on 28 October 2026. Figures are SAP's, not claims about
// Mawkish.

import type { ExplorerItem, PageSection, ProofStat } from "../sap-ai/types";

export const sections: PageSection[] = [
  { id: "overview", label: "Overview" },
  { id: "transformation", label: "Transformation" },
  { id: "assistants", label: "AI assistants" },
  { id: "ai", label: "AI on your ERP" },
  { id: "governance", label: "Governance" },
  { id: "customers", label: "Customers" },
  { id: "compare", label: "GROW or RISE?" },
];

export const pillars = [
  {
    title: "Agent-led transformation",
    body: "Migration and modernization assistants are built into the process to cut cost, complexity and risk.",
  },
  {
    title: "A fast path to agentic AI",
    body: "Faster AI activation and adoption, guided by SAP experts.",
  },
  {
    title: "On the way to the Autonomous Enterprise",
    body: "Ground decisions in real-time intelligence, automate workflows and proactively optimize every function.",
  },
] as const;

export const whyNow = [
  {
    role: "System of context",
    body: "AI needs semantic relationships in your data that it can reason across.",
  },
  {
    role: "System of execution",
    body: "AI needs to act inside governed business workflows, not just read from them.",
  },
  {
    role: "System of engagement",
    body: "People and AI need a shared interface to work together.",
  },
] as const;

export const photos = {
  overview: {
    src: "/images/sap-erp/rise-overview.jpg",
    alt: "Two colleagues walking and talking through a bright, modern office",
  },
  ai: {
    src: "/images/sap-erp/grow-golive.jpg",
    alt: "Two colleagues working on laptops at a desk in a glass-walled office",
  },
  governance: {
    src: "/images/sap-erp/rise-governance.jpg",
    alt: "A rack of network equipment with neatly connected cables",
  },
  customers: {
    src: "/images/sap-ai/results-dashboard.jpg",
    alt: "A team gathered around a screen showing charts and a world map",
  },
};

export const orchestration: { title: string; body: string }[] = [
  { title: "User adoption", body: "In-product guidance and e-learning that speed up adoption." },
  { title: "Process transformation", body: "Understand, improve and transform your processes." },
  { title: "Landscape governance", body: "Plan, manage and govern your IT landscape strategically." },
  { title: "Quality and testing", body: "Implement and operate with assured quality and automated testing." },
  { title: "Clean-core extensibility", body: "Governed extensibility, with development that keeps the core clean." },
  { title: "Data quality", body: "Data quality management and a managed data transition." },
];

export const carryOver = [
  {
    title: "Your business rules",
    body: "Pricing logic, tax compliance, credit policies, approval strategies and posting controls carry years of organizational learning, and they are preserved through modernization.",
  },
  {
    title: "Your processes",
    body: "Business Transformation Management tools help you analyze and standardize processes as you move.",
  },
  {
    title: "Your custom code",
    body: "An AI-enabled Custom Code Assistant analyzes your custom ABAP developments, so they can be modernized rather than left behind.",
  },
] as const;

export const assistants: ExplorerItem[] = [
  {
    id: "system",
    label: "System Analysis",
    badge: "AI assistant",
    headline: "Builds a trusted, customer-specific baseline of your system, so the journey starts from a clear picture.",
    also: [],
  },
  {
    id: "code",
    label: "Custom Code",
    badge: "AI assistant",
    headline: "Modernizes custom code to reduce technical debt and enable a clean core.",
    also: [],
  },
  {
    id: "data",
    label: "Data Management",
    badge: "AI assistant",
    headline: "Prepares and migrates your data into a governed cockpit, to improve speed.",
    also: [],
  },
  {
    id: "config",
    label: "Configuration",
    badge: "AI assistant",
    headline: "Optimizes system configuration based on best practices and your needs.",
    also: [],
  },
  {
    id: "test",
    label: "Test Management",
    badge: "AI assistant",
    headline: "Automates test scope, test data and test execution.",
    also: [],
  },
  {
    id: "rollout",
    label: "Rollout",
    badge: "AI assistant",
    headline: "Manages global rollouts with template comparison and automated localization.",
    also: [],
  },
  {
    id: "project",
    label: "Project Management",
    badge: "AI assistant",
    headline: "Delivers end-to-end guidance, decision support and training across the project.",
    also: [],
  },
];

export const foundation = [
  {
    title: "Connected domain intelligence",
    body: "AI is grounded in your operational blueprint (domain expertise, business rules and end-to-end process insight), with agents embedded directly in core processes.",
  },
  {
    title: "An adaptive, extensible platform",
    body: "Tailor ERP and AI to how you operate, with customizations that reflect your strengths and no new technical debt.",
  },
  {
    title: "A trusted, managed foundation",
    body: "A SAP-managed cloud with security and compliance built into every layer, plus authorization, governance and responsible-AI frameworks that keep AI under your control.",
  },
] as const;

export const inheritedControls = [
  "Role-based access controls",
  "Posting period restrictions",
  "Approval strategies",
  "Segregation of duties",
  "Compensating transactions",
  "Full audit trails",
] as const;

export const oversight = ["Human-in-the-loop", "Human-on-the-loop", "Human-in-command"] as const;

export const proofStats: ProofStat[] = [
  {
    value: 7,
    label: "AI assistants built into the migration",
    source: "SAP, RISE with SAP: migration and modernization assistants",
  },
  {
    prefix: "Up to",
    value: 3,
    label: "Joule Assistants activated at no additional cost",
    source: "SAP, agentic AI activation on SAP Cloud ERP Private",
  },
  {
    value: 99.97,
    decimals: 2,
    suffix: "%",
    label: "availability reported by Nestlé",
    source: "SAP customer story: Nestlé",
  },
];

export const customerStories = [
  {
    name: "BMW Group",
    body: "An ambitious IT transformation with RISE with SAP, moving its ERP systems to the cloud to future-proof them.",
  },
  {
    name: "Accenture",
    body: "A digital transformation that has driven efficiency gains and opened up AI capabilities at scale.",
  },
  {
    name: "Bertrandt",
    body: "Migrated to SAP Cloud ERP Private through the RISE journey to improve performance and optimize processes.",
  },
  {
    name: "Nestlé",
    body: "The world's largest food and beverage company improved the availability, agility and speed of its business processes and systems.",
  },
] as const;

// SAP's own comparison, from the RISE with SAP FAQ: AI tools bolted onto an
// on-premises ERP versus AI working inside Cloud ERP Private.
export const compare = {
  before: {
    label: "On premises",
    title: "A system of record",
    points: [
      "AI tools read replicated or exported data, not live transactional state",
      "They can't execute back into the system of record with proper controls",
      "Governance has to be replicated separately, and never completely",
    ],
  },
  after: {
    label: "SAP Cloud ERP Private",
    title: "Context, execution and engagement",
    points: [
      "AI works with live business context and the relationships between objects",
      "Agents act through governed workflows, under the same controls as people",
      "Governance is part of the architecture, not a bolt-on",
    ],
  },
};
