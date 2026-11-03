// The Databricks section: which pages exist, what each one is called, and the colour each one carries.
// Everything here is navigation and labelling. The words on the pages themselves live in each page's own body file,
// and every product fact on them comes from material Databricks publishes: its product pages, its documentation,
// its blog and its newsroom.

export const DB_HUB = "/services/databricks";

/** The eight products Databricks itself lists as the platform. */
export const PRODUCT_SLUGS = [
  "lakehouse",
  "lakeflow",
  "unity-catalog",
  "genie",
  "agent-bricks",
  "lakebase",
  "apps",
  "sharing",
] as const;

/** The four pages that sit alongside the products: a partnership, a foundation, a route in, and the bill. */
export const TOPIC_SLUGS = [
  "sap-business-data-cloud",
  "security-and-architecture",
  "migration",
  "pricing-and-cost",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];
export type TopicSlug = (typeof TOPIC_SLUGS)[number];
export type DbSlug = ProductSlug | TopicSlug;

export const ALL_SLUGS: DbSlug[] = [...PRODUCT_SLUGS, ...TOPIC_SLUGS];

export type DbProduct = {
  slug: DbSlug;
  /** The product's own name, as Databricks writes it. */
  name: string;
  /** What Databricks files it under in its product menu. */
  kind: string;
  /** One line, for cards and menus. */
  sub: string;
  /** The colour this page and its card carry. */
  accent: string;
  /** Shown on the hub's product cards. */
  blurb: string;
};

export const products: DbProduct[] = [
  {
    slug: "lakehouse",
    name: "Lakehouse",
    kind: "Data warehousing",
    sub: "A warehouse that queries open tables",
    accent: "#ff3621",
    blurb:
      "SQL analytics on Delta Lake and Apache Iceberg tables in your own cloud storage, with serverless compute, self-tuning layouts and a real-time tier for dashboards and apps.",
  },
  {
    slug: "lakeflow",
    name: "Lakeflow",
    kind: "Data engineering",
    sub: "Ingestion, pipelines and orchestration",
    accent: "#ef8a2b",
    blurb:
      "Managed connectors that capture change from your source systems, declarative pipelines that run the same code for batch and streaming, and one scheduler over the lot.",
  },
  {
    slug: "unity-catalog",
    name: "Unity Catalog",
    kind: "Governance",
    sub: "One catalogue for data and AI",
    accent: "#3d7df6",
    blurb:
      "Tables, files, models, agents and dashboards in one permission model, with column-level lineage, attribute-based policies and a gateway that governs what AI is allowed to touch.",
  },
  {
    slug: "genie",
    name: "Genie",
    kind: "BI and the AI assistant",
    sub: "Questions, dashboards and answers",
    accent: "#9b5de5",
    blurb:
      "The place business users live: governed dashboards, natural-language questions answered from curated data, and the shared metric definitions that keep the answers consistent.",
  },
  {
    slug: "agent-bricks",
    name: "Agent Bricks",
    kind: "Artificial intelligence",
    sub: "Build, evaluate and run agents",
    accent: "#e4376a",
    blurb:
      "A runtime for agents that survive a crash, memory and sessions, tools and MCP servers, search over your documents, traced runs and evaluation by judges and by your experts.",
  },
  {
    slug: "lakebase",
    name: "Lakebase",
    kind: "Database",
    sub: "Serverless Postgres that branches",
    accent: "#13a0a0",
    blurb:
      "Open-source Postgres with storage and compute pulled apart: branch it like code, scale it to zero, and read the same governed data your analytics read.",
  },
  {
    slug: "apps",
    name: "Databricks Apps",
    kind: "Application development",
    sub: "Internal apps, hosted and governed",
    accent: "#5a6ff0",
    blurb:
      "Streamlit, Dash and Gradio apps on serverless compute, with sign-in, permissions and Unity Catalog around them instead of a server you have to ask IT for.",
  },
  {
    slug: "sharing",
    name: "OpenSharing",
    kind: "Sharing and collaboration",
    sub: "Share live data, don't copy it",
    accent: "#2ba86f",
    blurb:
      "An open protocol for handing live tables, models and files to another company on another platform, with clean rooms for the work neither side may see, and a marketplace.",
  },
  {
    slug: "sap-business-data-cloud",
    name: "SAP Business Data Cloud and Databricks",
    kind: "Alongside your ERP",
    sub: "Zero-copy sharing both ways",
    accent: "#0a6ed1",
    blurb:
      "The connector SAP and Databricks built: SAP data products mounted as catalogues in Unity Catalog, Databricks tables exposed back to SAP, and the business meaning carried across.",
  },
  {
    slug: "security-and-architecture",
    name: "Security and Architecture",
    kind: "Foundations",
    sub: "Where your data actually sits",
    accent: "#7d93ad",
    blurb:
      "Control plane, compute plane and your own cloud account: what runs where, which certifications Databricks holds, and the network and key controls you can turn on.",
  },
  {
    slug: "migration",
    name: "Migration",
    kind: "Getting there",
    sub: "Off the warehouse you have now",
    accent: "#c98b2e",
    blurb:
      "What Lakebridge and the agentic code converter actually do to legacy SQL, where they stop, and how to sequence a move off Snowflake, Teradata, Oracle or a Hadoop estate.",
  },
  {
    slug: "pricing-and-cost",
    name: "Pricing and Cost",
    kind: "The bill",
    sub: "DBUs, DSUs and where money leaks",
    accent: "#6b8f3d",
    blurb:
      "How consumption pricing works, what a DBU is, which products bill separately, and the handful of settings that decide whether your platform costs double what it should.",
  },
];

export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const isDbSlug = (s: string): s is DbSlug => products.some((p) => p.slug === s);

/** The eight platform products, in the order Databricks presents them. */
export const platformProducts = products.filter((p) => (PRODUCT_SLUGS as readonly string[]).includes(p.slug));
/** The four supporting pages. */
export const topicPages = products.filter((p) => (TOPIC_SLUGS as readonly string[]).includes(p.slug));

export const dbPath = (slug: string) => (slug ? `${DB_HUB}/${slug}` : DB_HUB);

/**
 * The page after this one, so every page offers somewhere to go next rather than ending on a wall.
 * The order runs through the eight products and then the four supporting pages, and wraps.
 */
export function nextPage(slug: DbSlug): DbProduct {
  const i = ALL_SLUGS.indexOf(slug);
  return bySlug(ALL_SLUGS[(i + 1) % ALL_SLUGS.length])!;
}

export function prevPage(slug: DbSlug): DbProduct {
  const i = ALL_SLUGS.indexOf(slug);
  return bySlug(ALL_SLUGS[(i - 1 + ALL_SLUGS.length) % ALL_SLUGS.length])!;
}

export const DB_LEGAL =
  "Databricks, Lakehouse, Lakeflow, Lakebase, Unity Catalog, Genie, Agent Bricks, OpenSharing, Delta Sharing and Lakewatch are trademarks of Databricks, Inc. Apache, Apache Spark, Apache Iceberg and Spark are trademarks of the Apache Software Foundation. Delta Lake and MLflow are projects of the Linux Foundation. SAP, SAP Business Data Cloud and SAP Datasphere are trademarks of SAP SE. PostgreSQL is a trademark of the PostgreSQL Community Association. All other names belong to their owners. Mawkish Technologies is not affiliated with, endorsed by or a reseller for Databricks, Inc. Everything described here is taken from material Databricks publishes; product names, availability and prices change, so check the current documentation before you commit to anything. Screens shown are our own illustrations with sample data, not screenshots.";
