import type { Metadata } from "next";
import { absoluteUrl, breadcrumbLd, brand, DEFAULT_OG_IMAGE, robotsDefault, siteUrl } from "@/lib/seo";

// The search-facing details of every Swyftflo page, and the questions each page answers. The FAQ text is the
// single source for both the visible FAQ and the FAQ structured data. All product facts come from Swyftflo's
// own published material.

export const SWYFTFLO_HUB_PATH = "/services/swyftflo";

export type SwPageMeta = {
  /** "" for the hub. */
  slug: string;
  name: string;
  title: string;
  description: string;
  updated: string;
};

const UPDATED = "2026-11-01";

export const swyftfloPages: SwPageMeta[] = [
  {
    slug: "",
    name: "Swyftflo Supply Chain Suite",
    title: "Swyftflo: AI-Native Supply Chain Suite",
    description:
      "Your ERP runs the enterprise. Swyftflo connects what happens between enterprises: sourcing, shipments, transport, invoice audit, spend and provenance.",
    updated: UPDATED,
  },
  {
    slug: "source-to-pay",
    name: "Swyftflo Source to Pay",
    title: "Swyftflo Source to Pay",
    description:
      "Requisitions, RFQs, RFPs, tenders, negotiation and reverse auctions in one auditable record, with suppliers in the room. The award flows back to your ERP.",
    updated: UPDATED,
  },
  {
    slug: "control-tower",
    name: "Swyftflo Supply Chain Control Tower",
    title: "Swyftflo Supply Chain Control Tower",
    description:
      "One live, role-based workspace for every PO and shipment, from cargo ready to goods received. Air, ocean, road and rail, AI-predicted ETAs and disruption alerts.",
    updated: UPDATED,
  },
  {
    slug: "invoice-hub",
    name: "Swyftflo Invoice Hub",
    title: "Swyftflo Invoice Hub: 6-Way AI Invoice Audit",
    description:
      "Check every invoice against the PO, contract, receipt, proof of work, confirmations and the invoice itself before you pay. Only real exceptions reach a reviewer.",
    updated: UPDATED,
  },
  {
    slug: "spend-intelligence",
    name: "Swyftflo Spend Intelligence",
    title: "Swyftflo Spend Intelligence",
    description:
      "See every dollar, stop every leak and prove every saving. One spend agent that answers in plain language, with every number produced by a governed engine.",
    updated: UPDATED,
  },
  {
    slug: "authentik",
    name: "Swyftflo Authentik",
    title: "Swyftflo Authentik: Digital Product Passports",
    description:
      "Digital product passports that write themselves from real sourcing, production and logistics events. Batch and serial provenance, verified with a single scan.",
    updated: UPDATED,
  },
  {
    slug: "tms",
    name: "Swyftflo Transportation Management System",
    title: "Swyftflo TMS: AI Transportation Management",
    description:
      "Plan, move and settle transport with AI on every leg: load and route optimisation, dispatch, driver app, ePOD and carrier payouts for shippers, 3PLs and carriers.",
    updated: UPDATED,
  },
];

export type Faq = { q: string; a: string };

export const swyftfloFaqs: Record<string, Faq[]> = {
  "": [
    {
      q: "Does Swyftflo replace our ERP?",
      a: "No. Swyftflo is built to sit beside the ERP, not to take its place. Requisitions, purchase orders, goods receipts, accounts payable, the ledger and master data all stay in your ERP. Swyftflo runs the work that happens between your company and its suppliers, carriers and partners, and hands the verified result back through APIs.",
    },
    {
      q: "Which ERPs does it connect to?",
      a: "Swyftflo integrates through bi-directional APIs. Its material shows connections to SAP, Oracle and Oracle NetSuite, Microsoft Dynamics 365, Infor, IFS, Epicor, Sage, Acumatica, Odoo, Zoho, Salesforce, Workday, QAD and others. The exact integration points are agreed for each deployment.",
    },
    {
      q: "Do our suppliers and carriers need to buy a licence?",
      a: "Each supplier or provider joins as its own organisation with its own users and history. Partners without an account can still respond to a request and land in the same record, and a guest can be invited to a single shipment with a one-time passcode.",
    },
    {
      q: "Do we have to take all six products?",
      a: "No. Adoption is modular. Each product works on its own, connected to the ERP, and you can start with one product or one lane and extend along the same thread when it pays off.",
    },
    {
      q: "Who sees our data?",
      a: "Access is need-to-know. Every party on a transaction sees only the data its role is entitled to act on. A carrier can see milestones without seeing your rates or invoices, for example, and each company is separated at the data layer.",
    },
    {
      q: "How long does it take to go live?",
      a: "Swyftflo is designed for rapid implementation in four steps: connect your systems, configure workflows, onboard teams and partners, and go live. Swyftflo describes this as days rather than months, and a Control Tower can start moving shipments within hours. The real timeline depends on how many integrations and partners are in scope.",
    },
  ],
  "source-to-pay": [
    {
      q: "Which sourcing events does it support?",
      a: "RFIs and expressions of interest to prequalify the market, RFQs for competitive pricing, RFPs for solutions and services, and full tenders with structured evaluation and governance. All of them run in one environment, for products, services and freight.",
    },
    {
      q: "Can purchase requests come from our ERP?",
      a: "Yes. A purchase request can be created in Swyftflo or flow in from your ERP through the API. Swyftflo turns it into a structured sourcing workflow, and once an award is made it flows back to the ERP for PO creation. The ERP stays the system of record.",
    },
    {
      q: "What if a supplier is not on Swyftflo?",
      a: "Suppliers without an account can still respond, and their quotes land in the same quotation model as everyone else's, so you compare like with like.",
    },
    {
      q: "How does negotiation work?",
      a: "Inside the event. You can run conversational negotiation rounds with each supplier, reverse auctions and compound bidding, and every quote, revision and round stays on one auditable record instead of in inbox threads.",
    },
    {
      q: "Where does AI help?",
      a: "It drafts structured requirements from your sourcing context and history, suggests suitable suppliers by category and track record, assists with bid scoring, summarises contracts and their key obligations, and extracts catalogues.",
    },
  ],
  "control-tower": [
    {
      q: "Is it only for freight?",
      a: "No. Control Tower creates a workspace around a PO or a shipment, so it works for product and service procurement as well as freight. It covers air, ocean, road and rail in one view, from the first mile to the buyer's warehouse.",
    },
    {
      q: "How do we track a shipment?",
      a: "With whatever reference you have: PO number, booking number, bill of lading, air waybill or container number. Control Tower matches it to the right carrier, mode and journey automatically.",
    },
    {
      q: "Do our forwarders and carriers need accounts?",
      a: "Partners can join as their own organisations. For a one-off, a guest can join a single shipment with a one-time passcode, no account needed.",
    },
    {
      q: "What does the AI agent do?",
      a: "It watches shipments, predicts arrival times that update before delays land, flags disruptions such as port congestion with a recommended action, drafts tasks and can auto-assign routine ones, and categorises documents as they arrive.",
    },
    {
      q: "How does it help finance?",
      a: "Every milestone confirmation, photo and document captured in the workspace becomes evidence. Invoice Hub uses that proof of work and those confirmations when it audits the supplier's invoice.",
    },
  ],
  "invoice-hub": [
    {
      q: "What is a 6-way match?",
      a: "A classic 3-way match compares the purchase order, the goods or service receipt and the invoice. Invoice Hub adds three more sources: the contract with its agreed rates and terms, proof of work from the field, and confirmations from the parties involved. An invoice is approved only when the six agree, within your tolerances.",
    },
    {
      q: "Where do the extra three sources come from?",
      a: "From the work itself. Contract terms come from the sourcing award in Source to Pay. Proof of work and confirmations are captured in Control Tower while the work happens, so finance validates against evidence instead of reconstructing it.",
    },
    {
      q: "Will small differences hold up payment?",
      a: "No. You set tolerance levels for price and quantity variances. Minor deviations inside your tolerance can be approved automatically, and only issues outside it are flagged for review.",
    },
    {
      q: "Can it read invoices that arrive as PDFs or emails?",
      a: "Yes. AI capture extracts invoice numbers, suppliers, dates, line items, taxes and totals from PDFs, scans, emails and images, and Invoice Hub can convert any format into a standardised PDF for storage and audit.",
    },
    {
      q: "Does it post to our ERP?",
      a: "Approved invoices post to your ERP's accounts payable. Invoice Hub adds the operational evidence that accounts payable cannot see on its own.",
    },
  ],
  "spend-intelligence": [
    {
      q: "What data does Spend Intelligence use?",
      a: "Spend from Swyftflo procurement, sourcing and invoice audit, plus ERP payables, ledger and budgets by integration, scheduled file or upload, and any reference files you choose to add.",
    },
    {
      q: "Can we trust the numbers the AI gives us?",
      a: "The AI never calculates. It interprets the question and explains the result, a governed engine produces every figure, and a validator rejects any answer containing a number that did not come from your data. Every number shows how it was produced.",
    },
    {
      q: "Will the agent change anything in our systems?",
      a: "No. It is read-only. It recommends, drafts documents and adds opportunities to the register, and people decide.",
    },
    {
      q: "Do we need a data team to run it?",
      a: "No. People build dashboards in conversation with the agent. A data steward approves the agent's category and supplier-matching suggestions.",
    },
    {
      q: "Can teams use it without the AI subscription?",
      a: "Yes. A manual builder gives full dashboards on the same governed data.",
    },
  ],
  authentik: [
    {
      q: "What is a digital product passport?",
      a: "A structured, verifiable digital record of a product's origin, composition, lifecycle, provenance, sustainability information and supply chain history, opened with a single scan of a QR identity.",
    },
    {
      q: "How is Authentik different from other passports?",
      a: "Most passports are filled in by hand after the fact. Authentik runs on the Control Tower, so the sourcing, production and logistics events Swyftflo already captures become a time-stamped, verifiable product history as they happen.",
    },
    {
      q: "Can different audiences see different information?",
      a: "Yes. One provenance layer can power separate views for consumers, regulators, B2B partners, distributors and internal teams, so each audience sees what it needs rather than identical information.",
    },
    {
      q: "At what level does it trace products?",
      a: "Down to batch and serial level, with material and origin traceability, supplier and facility verification and multi-source validation of each claim.",
    },
  ],
  tms: [
    {
      q: "Who is the TMS for?",
      a: "Three kinds of operator: shippers moving inbound, outbound and intercompany freight; intermediaries such as 3PLs, 4PLs and brokers running multi-client, multi-carrier operations; and carriers and fleet owners managing fleets, drivers, trips and payouts.",
    },
    {
      q: "How do orders get in?",
      a: "From your ERP or order systems by API, by file upload or Excel, or by manual entry. Orders land in one controlled pool where they are validated, prioritised and prepared for planning.",
    },
    {
      q: "What does the optimiser take into account?",
      a: "Vehicle capacity in cubic metres, maximum weight, running cost, which vehicles can reach each location, delivery windows and other operational constraints. It builds loads and routes together rather than one after the other.",
    },
    {
      q: "How is delivery proven?",
      a: "The driver app captures an electronic proof of delivery at handover: who received it, when, a signature and a photo, attached to the job and visible to everyone who needs it.",
    },
    {
      q: "Does it handle billing?",
      a: "Yes. It generates freight invoices, validates transport charges against the contract and calculates carrier payouts. For intermediaries it keeps the customer revenue contract and the carrier cost contract on the same job, so margin is visible per job.",
    },
  ],
};

export const swPath = (slug: string) => (slug ? `${SWYFTFLO_HUB_PATH}/${slug}` : SWYFTFLO_HUB_PATH);
const bySlug = (slug: string) => swyftfloPages.find((p) => p.slug === slug);

export function swyftfloMetadata(slug: string): Metadata {
  const p = bySlug(slug);
  if (!p) return {};
  const url = swPath(slug);
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

/** Structured data for one Swyftflo page: the page, the product, where it sits, and its FAQ. */
export function swyftfloLd(slug: string) {
  const p = bySlug(slug);
  if (!p) return [];
  const url = absoluteUrl(swPath(slug));
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Swyftflo", path: SWYFTFLO_HUB_PATH },
    ...(slug ? [{ name: p.name, path: swPath(slug) }] : []),
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
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${url}#product`,
      name: p.name,
      description: p.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url,
    },
    breadcrumbLd(crumbs),
  ];
  const faq = swyftfloFaqs[slug];
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
