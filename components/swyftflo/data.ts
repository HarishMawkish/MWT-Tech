// The Swyftflo suite as the pages present it. All product facts come from Swyftflo's own material
// (the 2026 capability overview and the product brochures). Where Swyftflo's sources disagree, the
// pages use the brochure wording and the open points are listed in the project brief.

export const SW_HUB = "/services/swyftflo";

export type ProductSlug = "source-to-pay" | "control-tower" | "invoice-hub" | "spend-intelligence" | "authentik" | "tms";

export type Product = {
  slug: ProductSlug;
  /** Full name, as Swyftflo writes it. */
  name: string;
  /** Short name for chips and menus. */
  short: string;
  /** Stage of the transaction the product owns. */
  stage: string;
  /** One line under the name. */
  tagline: string;
  /** Two or three sentences for cards. */
  summary: string;
  points: string[];
  /** Colour of the product's icon tile. */
  color: string;
  dark?: boolean;
};

export const products: Product[] = [
  {
    slug: "source-to-pay",
    name: "Source to Pay",
    short: "Source to Pay",
    stage: "Source and negotiate",
    tagline: "From requirement to award, with suppliers in the room.",
    summary:
      "Requisitions, RFQs, RFPs, tenders and negotiation in one governed record, with every supplier working in it. The award goes back to your ERP to become the PO.",
    points: ["RFI, EOI, RFQ, RFP and tenders", "Bids side by side, committee scoring", "Conversational rounds and reverse auctions"],
    color: "#3b4cca",
  },
  {
    slug: "control-tower",
    name: "Supply Chain Control Tower",
    short: "Control Tower",
    stage: "Execute and track",
    tagline: "From PO to dispatch to GRN, one operational truth.",
    summary:
      "A shared, role-based workspace around every PO or shipment. Supplier, forwarder, carrier, customs broker, warehouse and buyer work from the same live record.",
    points: ["Air, ocean, road and rail in one view", "AI-predicted ETAs and disruption alerts", "Every confirmation becomes evidence"],
    color: "#2563eb",
  },
  {
    slug: "tms",
    name: "Transportation Management System",
    short: "TMS",
    stage: "Move and deliver",
    tagline: "Plan, move and settle transport, with AI on every leg.",
    summary:
      "Order intake, AI load and route optimisation, dispatch, a driver app, electronic proof of delivery and carrier settlement, for shippers, intermediaries and carriers.",
    points: ["AI load and route optimisation", "Driver app and ePOD", "Transport invoicing and carrier payouts"],
    color: "#3b6ff5",
  },
  {
    slug: "invoice-hub",
    name: "Invoice Hub",
    short: "Invoice Hub",
    stage: "Verify and pay",
    tagline: "Every charge traced back to what was agreed and what happened.",
    summary:
      "A 6-way AI audit checks each invoice against the PO, contract, receipt, proof of work, confirmations and the invoice itself, then routes only real exceptions.",
    points: ["6-way AI audit engine", "Variance tolerances and approval rules", "AI invoice capture"],
    color: "#2aa8e0",
  },
  {
    slug: "spend-intelligence",
    name: "Spend Intelligence",
    short: "Spend Intelligence",
    stage: "Analyse and improve",
    tagline: "See every dollar. Stop every leak. Prove every saving.",
    summary:
      "One spend agent that answers in plain language, finds leakage every day and tracks each saving until it shows up in what was actually paid.",
    points: ["Seven levels of intelligence, one agent", "Findings engine and opportunity register", "The AI never produces a number"],
    color: "#7c5cff",
  },
  {
    slug: "authentik",
    name: "Authentik",
    short: "Authentik",
    stage: "Prove and trust",
    tagline: "Provenance written by the supply chain itself.",
    summary:
      "Digital product passports built from the sourcing, production and logistics events Swyftflo already captures, verified and time-stamped as they happen.",
    points: ["Digital product passports and QR identities", "Batch and serial-level provenance", "Consumer, regulator and partner views"],
    color: "#16b8d6",
    dark: true,
  },
];

export const productBySlug = (slug: ProductSlug) => products.find((p) => p.slug === slug)!;
export const productPath = (slug: ProductSlug) => `${SW_HUB}/${slug}`;

/** Trademark line under every Swyftflo page. */
export const SW_LEGAL =
  "Swyftflo, Authentik and the Swyftflo product names are trademarks of Swyftflo PTE LTD. Other names are the property of their owners. Screens shown are illustrations with sample data. Figures quoted are Swyftflo's own published figures.";
