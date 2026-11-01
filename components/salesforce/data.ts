// The Salesforce product set, as the pages and the menu see it. Five main products come first and are what the hub
// and every page lead with; the supporting products follow. Every description here is written from Salesforce's own
// published material (see the sources listed on each page and in docs/salesforce-product-knowledge.md).

export const SF_HUB = "/services/salesforce";

/** One colour for every "you are here" marker, on every Salesforce page. */
export const SF_HERE = "#38a3ff";

export const SF_LEGAL =
  "Salesforce, Agentforce, Data 360, Slack, Tableau, MuleSoft and other Salesforce product names are trademarks of Salesforce, Inc. Other names are the property of their owners. Screens shown are illustrations with sample data. Product descriptions follow Salesforce's own published material and can change, so check salesforce.com for current details.";

export type ProductSlug =
  | "sales-cloud"
  | "data-360"
  | "marketing-cloud"
  | "loyalty-management"
  | "service-cloud"
  | "agentforce"
  | "revenue-cloud"
  | "field-service"
  | "commerce-cloud"
  | "slack"
  | "tableau"
  | "mulesoft";

export type Product = {
  slug: ProductSlug;
  /** Full name as Salesforce uses it today. */
  name: string;
  /** Short name for the stepper and the menu. */
  short: string;
  tier: "main" | "support";
  /** What the product is for, in two or three words. */
  stage: string;
  tagline: string;
  /** Two sentences for the index. */
  summary: string;
  points: string[];
  /** Thin rule colour in the index. */
  color: string;
};

export const products: Product[] = [
  {
    slug: "sales-cloud",
    name: "Sales Cloud",
    short: "Sales",
    tier: "main",
    stage: "Sell",
    tagline: "CRM for sales teams, with AI beside the seller.",
    summary:
      "Leads, contacts, accounts and opportunities in one place, with activity captured automatically, forecasts that follow the deals, and agents that research, prepare and monitor.",
    points: ["Pipeline and forecasting", "Activity capture", "Quotes and approvals", "AI and agents"],
    color: "#2f86d2",
  },
  {
    slug: "data-360",
    name: "Data 360",
    short: "Data",
    tier: "main",
    stage: "Unify",
    tagline: "The data layer people and agents share.",
    summary:
      "Brings data from Salesforce and other systems together, often without copying it, and gives it business meaning so teams and agents can act on it.",
    points: ["Zero-copy access", "Unified profiles", "Segments and activation", "Grounding for agents"],
    color: "#1fa5b8",
  },
  {
    slug: "marketing-cloud",
    name: "Marketing Cloud",
    short: "Marketing",
    tier: "main",
    stage: "Engage",
    tagline: "Campaigns, journeys and agents for marketers.",
    summary:
      "The family of Salesforce marketing products: Marketing Cloud Next, Account Engagement and Marketing Cloud Engagement, built around one customer profile.",
    points: ["Marketing Cloud Next", "Segments and journeys", "Campaign Agent", "B2B and B2C"],
    color: "#e0763a",
  },
  {
    slug: "loyalty-management",
    name: "Loyalty Management",
    short: "Loyalty",
    tier: "main",
    stage: "Retain",
    tagline: "Programmes, offers and referrals that keep customers.",
    summary:
      "Build and run loyalty programmes with members, points, tiers and vouchers, add personalised offers, and run referral campaigns for consumers or business partners.",
    points: ["Points and tiers", "Offers", "Referrals", "Partner programmes"],
    color: "#c2478a",
  },
  {
    slug: "service-cloud",
    name: "Service Cloud",
    short: "Service",
    tier: "main",
    stage: "Serve",
    tagline: "Cases, conversations and knowledge, with agents and people together.",
    summary:
      "Customer service on one platform: case management, a console for reps, knowledge, a contact centre and AI agents that answer and hand over.",
    points: ["Case management", "Knowledge", "Contact centre", "AI agents"],
    color: "#3a9d6e",
  },
  {
    slug: "agentforce",
    name: "Agentforce",
    short: "Agentforce",
    tier: "support",
    stage: "Agents",
    tagline: "The platform for building and running AI agents.",
    summary: "Build, test, deploy and monitor agents that work across Salesforce and connected systems.",
    points: ["Agent Builder", "Actions and topics", "Testing", "Monitoring"],
    color: "#7a6bd8",
  },
  {
    slug: "revenue-cloud",
    name: "Revenue Cloud",
    short: "Revenue",
    tier: "support",
    stage: "Quote to cash",
    tagline: "Pricing, quotes, contracts, orders and billing.",
    summary: "The quote-to-cash product, running on the same data as the CRM.",
    points: ["Guided quoting", "Pricing", "Contracts", "Billing"],
    color: "#8a8f98",
  },
  {
    slug: "field-service",
    name: "Field Service",
    short: "Field Service",
    tier: "support",
    stage: "On site",
    tagline: "Scheduling, dispatch and mobile work for site visits.",
    summary: "Software for work done at customers' sites, from scheduling to the technician's phone.",
    points: ["Dispatch", "Mobile app", "Assets", "Parts"],
    color: "#8a8f98",
  },
  {
    slug: "commerce-cloud",
    name: "Commerce Cloud",
    short: "Commerce",
    tier: "support",
    stage: "Sell online",
    tagline: "Online, in-store and order management on one platform.",
    summary: "B2C and B2B commerce, order management and point of sale.",
    points: ["B2C Commerce", "B2B Commerce", "Order management", "Payments"],
    color: "#8a8f98",
  },
  {
    slug: "slack",
    name: "Slack",
    short: "Slack",
    tier: "support",
    stage: "Collaborate",
    tagline: "Where people and agents work on Salesforce records.",
    summary: "Channels tied to records, agents inside conversations and approvals in Slack.",
    points: ["Channels on records", "Agents in Slack", "Approvals", "Workflow Builder"],
    color: "#8a8f98",
  },
  {
    slug: "tableau",
    name: "Tableau",
    short: "Tableau",
    tier: "support",
    stage: "Analyse",
    tagline: "Analytics on the same data, with conversational answers.",
    summary: "Tableau Next, Tableau and CRM Analytics: dashboards, a shared semantic layer and agents that watch metrics.",
    points: ["Tableau Next", "Semantic layer", "CRM Analytics", "Slack"],
    color: "#8a8f98",
  },
  {
    slug: "mulesoft",
    name: "MuleSoft",
    short: "MuleSoft",
    tier: "support",
    stage: "Connect",
    tagline: "Integration and APIs for Salesforce and everything around it.",
    summary: "Anypoint Platform, Agent Fabric and Omni Gateway connect applications, APIs and agents.",
    points: ["Anypoint Platform", "Agent Fabric", "Omni Gateway", "SAP connector"],
    color: "#8a8f98",
  },
];

export const mainProducts = products.filter((p) => p.tier === "main");
export const supportProducts = products.filter((p) => p.tier === "support");

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productPath = (slug: ProductSlug) => `${SF_HUB}/${slug}`;
