// Content for the SAP Business AI page.
//
// Every statement here is paraphrased from SAP's own public pages
// (sap.com/products/artificial-intelligence and its Joule Agents, Responsible AI
// and AI-agent use-case pages), read on 28 October 2026. Figures are SAP's, describing SAP's
// products and named customers' results; they are not claims about Mawkish.

import type { ExplorerItem, PageSection, Photo, ProofStat, StackLayer } from "./types";

export type { Photo };

export const sections: PageSection[] = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "How it fits together" },
  { id: "how-it-works", label: "How work gets done" },
  { id: "use-cases", label: "Use cases" },
  { id: "results", label: "Results" },
  { id: "trust", label: "Trust" },
  { id: "getting-started", label: "Getting started" },
];

export const layers: StackLayer[] = [
  {
    id: "work",
    name: "Joule Work",
    tag: "Ask",
    blurb:
      "One place where people put questions to the business and get fast, accurate answers, then turn those answers into action without switching tools.",
    points: [
      "Connects the systems your business runs on, SAP and non-SAP",
      "Reliable autonomous workflows at enterprise scale",
      "Powered by enterprise-grade AI orchestration",
    ],
  },
  {
    id: "agents",
    name: "Joule Assistants & Agents",
    tag: "Act",
    blurb:
      "Agents carry business-process expertise and execute multistep tasks across systems. Assistants understand a person's role and coordinate the right agents for the job.",
    points: [
      "Prebuilt agents pair SAP process knowledge with the MCP and A2A protocols for cross-system work",
      "Assistants know your role and which agents to bring in",
      "Humans stay in control: actions are authorized, observable and traceable",
    ],
  },
  {
    id: "studio",
    name: "Joule Studio",
    tag: "Build",
    blurb:
      "For needs beyond the prebuilt agents, describe the outcome you want in plain language and build a custom agent grounded in your own business context.",
    points: [
      "Low-code and pro-code tooling, with frameworks such as LangChain and LlamaIndex",
      "SAP AI Agent Hub: a vendor-agnostic place to discover, inventory and govern agents",
      "Visibility into performance and business impact",
    ],
  },
  {
    id: "foundation",
    name: "Knowledge Graph & agent gateway",
    tag: "Ground",
    blurb:
      "The foundation under everything. SAP Knowledge Graph links business data, relationships and processes, so answers are relevant and context-aware, and the gateway keeps agents inside your guardrails.",
    points: [
      "SAP Knowledge Graph grounds AI in your enterprise context",
      "The agent gateway enforces identity, access and policy at runtime",
      "It governs agent communication, tool use and human oversight",
    ],
  },
];

export const flowSteps = [
  {
    title: "You state the intent",
    body: "Ask a question or describe a goal in plain language, in the flow of your work.",
  },
  {
    title: "An assistant coordinates",
    body: "Using your role and process context, it works out which agents the job needs.",
  },
  {
    title: "Agents execute",
    body: "Specialised agents run the multistep work across SAP and non-SAP systems, handing off to one another.",
  },
  {
    title: "Governance stays on",
    body: "Every action is authorized, observable and traceable, with people in control of the decisions that matter.",
  },
] as const;

// SAP's description of the Dispute Resolution Agent, as an illustrative log.
export const disputeLog = [
  "Reads the invoice and contract details",
  "Flags discrepancies and mismatches proactively",
  "Advises the finance team on handling the credit memo",
] as const;

export type UseCase = ExplorerItem;

export const useCases: UseCase[] = [
  {
    id: "finance",
    photo: { src: "/images/sap-ai/uc-finance.jpg", alt: "A calculator, printed charts and a laptop on a finance desk" },
    label: "Finance & accounting",
    badge: "Dispute Resolution Agent",
    headline:
      "Analyses invoice and contract details, flags discrepancies up front instead of after the fact, and advises finance teams on how to handle the resulting credit memo.",
    also: [
      "Late payment prediction, to forecast delays and reach out early",
      "Automatic payment matching, to cut days sales outstanding",
      "Financial close resolution, flagging anomalies before they snowball",
    ],
  },
  {
    id: "supply",
    photo: { src: "/images/sap-ai/uc-supply.jpg", alt: "Two warehouse colleagues checking stock on a tablet in a storeroom" },
    label: "Supply chain & procurement",
    badge: "Sourcing Agent",
    headline:
      "Identifies sourcing opportunities, evaluates suppliers and starts RFPs on its own, shortening procurement cycles and improving cost efficiency.",
    also: [
      "Automatic invoice processing: extract, validate and catch discrepancies",
      "Lead time analysis, to find bad data before it causes stockouts",
      "Defect detection from image data",
    ],
  },
  {
    id: "hr",
    photo: { src: "/images/sap-ai/uc-hr.jpg", alt: "A smiling interviewer across a desk in a glass-walled office" },
    label: "Human resources",
    badge: "Performance and Goals Agent",
    headline:
      "Automates data collection so managers have current insight on every employee, then drafts talking points for 1:1s and helps align goals with business objectives.",
    also: [
      "Job description generation, flagging vague or biased wording",
      "Applicant screening at scale, designed to reduce unconscious bias",
      "Interview preparation tailored to the role",
    ],
  },
  {
    id: "manufacturing",
    photo: { src: "/images/sap-ai/uc-manufacturing.jpg", alt: "A worker operating machinery on a factory floor" },
    label: "Manufacturing",
    badge: "Shop Floor Supervisor Agent",
    headline:
      "Spots likely disruptions and recommends schedule adjustments, showing the severity of each issue and the dependencies behind it.",
    also: [
      "Predictive maintenance from sensor data, before equipment fails",
      "Quality control that identifies defects and reduces waste",
    ],
  },
  {
    id: "commerce",
    photo: { src: "/images/sap-ai/uc-commerce.jpg", alt: "A woman checking a parcel with her phone beside a laptop and stacked boxes" },
    label: "Marketing & commerce",
    badge: "Catalog Optimization Agent",
    headline:
      "Keeps prices and product entries current and restructures content as search intent shifts, to improve search ranking.",
    also: [
      "Customer segmentation based on behaviour and intent",
      "Product recommendations from real-time interactions",
      "Content generation for product copy and campaigns",
    ],
  },
  {
    id: "support",
    photo: { src: "/images/sap-ai/uc-support.jpg", alt: "A smiling customer support agent wearing a headset in a busy contact centre" },
    label: "Customer support",
    badge: "Q&A Agent",
    headline:
      "Assesses the intent behind a customer's question and answers from approved knowledge, while a Shopping Agent helps new customers with product details, options and orders.",
    also: [
      "Ticket triage and routing by urgency, topic and sentiment",
      "Service case summarization for cleaner handoffs",
      "Real-time suggestions and next-best actions for live agents",
    ],
  },
  {
    id: "it",
    photo: { src: "/images/sap-ai/uc-it.jpg", alt: "A technician working on network equipment in a server rack" },
    label: "IT & governance",
    headline:
      "Agents support IT teams in staying compliant and defending against threats by automating routine compliance work and monitoring.",
    also: [
      "Policy enforcement across user activity and system configuration",
      "Data governance: spotting inconsistencies and managing access",
      "Security monitoring for unusual patterns in system behaviour",
    ],
  },
];

export const proofStats: ProofStat[] = [
  {
    prefix: "Up to",
    value: 75,
    suffix: "%",
    label: "less time on multistep workflows",
    source: "SAP, on Joule Agents and Assistants",
  },
  {
    prefix: "",
    value: 90,
    suffix: "%",
    label: "payroll time cut at PostNL",
    source: "SAP customer story: SuccessFactors Employee Central Payroll with Joule",
  },
  {
    prefix: "",
    value: 20,
    suffix: "%",
    label: "developer productivity gain at Bosch Digital",
    source: "SAP customer story: SAP AI Core, ABAP Cloud and Joule for Developers",
  },
];

export const customerStories = [
  {
    name: "Bosch",
    body: "Replaced rigid, rule-based workflows with a Joule Classification Agent that routes customer service cases in real time.",
  },
  {
    name: "Mota-Engil",
    body: "Removed manual goods receipt entry and sped up invoice clearance with a procure-to-pay agent built on SAP BTP, SAP Business Data Cloud and Joule.",
  },
  {
    name: "Uniper",
    body: "Used Joule Studio to turn complex procurement processes into simple, conversational actions.",
  },
  {
    name: "Timken",
    body: "Uses SuccessFactors and Joule to help employees set goals and prepare for career conversations.",
  },
  {
    name: "HR Path Group",
    body: "Automates HR tasks and speeds hiring and onboarding with SuccessFactors and Joule.",
  },
] as const;

export const pillars = [
  {
    id: "ethics",
    title: "Ethics",
    lead: "Values that guide what gets built.",
    points: [
      "Based on the 10 principles of the UNESCO Recommendation on the Ethics of AI",
      "Every AI use case goes through an ethics impact assessment and is classified by risk",
      "Coordinated by SAP's AI Ethics Office, with an internal steering committee and an external advisory panel",
    ],
  },
  {
    id: "security",
    title: "Security",
    lead: "Your data stays protected.",
    points: [
      "Customer data is not shared with third-party LLM providers to train their models",
      "Encryption, tenant isolation, data masking and filtering",
      "Generative AI security tracks the OWASP Top 10",
      "Locally hosted AI can keep data and workflows in-region",
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    lead: "Aligned to the frameworks that matter.",
    points: [
      "Governance framework draws on the EU AI Act, NIST AI RMF, ISO 42001 and more",
      "ISO/IEC 42001 certified for AI governance, covering Joule, SAP AI Core and SAP AI Launchpad",
      "Tier 3 alignment with the NIST Cybersecurity Framework (CSF v1.1)",
    ],
  },
] as const;

export const principles = [
  "Proportionality",
  "Safety and security",
  "Fairness and non-discrimination",
  "Sustainability",
  "Right to privacy and data protection",
  "Human oversight and determination",
  "Transparency and explainability",
  "Responsibility and accountability",
  "Awareness and literacy",
  "Multistakeholder and adaptive governance",
] as const;

export const startSteps = [
  {
    title: "Identify use cases that pay off",
    body: "Look for work that is repetitive, error-prone and time-consuming, such as invoice processing or dispute resolution, or that is data-heavy, cross-functional or critical to compliance.",
  },
  {
    title: "Check your data readiness",
    body: "Agents depend on high-quality, harmonized data. Review real-time access, integration and governance, and aim for a single source of truth.",
  },
  {
    title: "Pilot something manageable",
    body: "Pick one contained use case and set clear, measurable success criteria such as time saved or errors reduced. Record a baseline and watch it closely.",
  },
  {
    title: "Bring people in early",
    body: "Involve business leaders, IT and the people who will use it from the start, and address change management, data privacy and job-impact concerns openly.",
  },
  {
    title: "Build feedback loops",
    body: "Agents improve as they learn from new data. Keep reviewing outcomes so the value lasts and informs the next use case.",
  },
] as const;

// Photography from Unsplash (free to use under the Unsplash License), chosen to
// show the kinds of work and workplaces the page describes.
export const photos = {
  overviewTeam: {
    src: "/images/sap-ai/overview-team.jpg",
    alt: "Two colleagues working together on a laptop in a bright, modern office",
  },
  overviewLaptop: {
    src: "/images/sap-ai/overview-laptop.jpg",
    alt: "A laptop showing a dashboard on a table during a team meeting",
  },
  flowInvoices: {
    src: "/images/sap-ai/flow-desk.jpg",
    alt: "A person at a laptop with printed invoices and a phone on the desk",
  },
  resultsDashboard: {
    src: "/images/sap-ai/results-dashboard.jpg",
    alt: "A team gathered around a screen showing charts and a world map",
  },
  trustServers: {
    src: "/images/sap-ai/trust-servers.jpg",
    alt: "Green-lit network cables in a dark server room",
  },
} satisfies Record<string, Photo>;
