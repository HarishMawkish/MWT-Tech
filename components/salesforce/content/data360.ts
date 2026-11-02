import type { ProductContent } from "../content-types";

// Data 360 (formerly Data Cloud). Sources: Salesforce's Data 360 product page and guide, its Trailhead module on the
// stages of Data 360, and its published guide to Data 360 pricing (July 2026). Read in November 2026.

export const data360: ProductContent = {
  slug: "data-360",
  crumb: "Data 360",
  eyebrow: "Data 360 · formerly Data Cloud",
  title: ["The data layer", "people and agents share."],
  lede: "Data 360 is Salesforce's data platform. It brings data from Salesforce and from other systems together, often without copying it, and gives that data business meaning so teams, applications and AI agents can act on it.",
  primary: { label: "See how it works", href: "#explore" },
  secondary: { label: "How it is priced", href: "#editions" },
  note: "Salesforce renamed Data Cloud to Data 360. Some training material and older pages still use the earlier name.",
  hero: {
    app: "Data 360 · Unified profile",
    label: "Illustration of Data 360 building one profile from several sources: sales, service, marketing and web records are matched into a single customer profile. Sample data.",
    tiles: [
      { h: "Sources connected", k: "5", s: "CRM, web, warehouse…" },
      { h: "Unified profiles", k: "Live", s: "Updated as data changes", tone: "ok" },
    ],
    rows: {
      title: "One profile, built from",
      items: [
        { a: "Sales record", b: "Contact ID", pill: { t: "Matched", tone: "ok" } },
        { a: "Service record", b: "Case history", pill: { t: "Matched", tone: "ok" } },
        { a: "Web visits", b: "Device ID", pill: { t: "Matched", tone: "ok" } },
        { a: "Warehouse table", b: "Zero copy", pill: { t: "Linked", tone: "in" } },
      ],
    },
  },
  heroCaption: "Illustration of a unified profile, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Data that carries its meaning with it.",
    lede: "Customer data sits in many systems under different IDs. An agent or a marketer working from one of them sees only part of the customer. Data 360 is built to connect the parts.",
    items: [
      { title: "Connect without building pipelines", body: "Warehouse and lake data can be reached in place, without copying it. Salesforce names Snowflake, Databricks, Google BigQuery and AWS sources." },
      { title: "One profile per customer", body: "Interactions from sales, service, marketing and the web are merged into a profile that is kept current in near real time." },
      { title: "A shared data model", body: "Data is mapped so that outside data behaves like native Salesforce objects and fields." },
      { title: "Segments and activation", body: "Build audiences and send them, or the insights behind them, to Salesforce apps, ad platforms and other destinations." },
      { title: "Grounding for agents", body: "The Agent Context Engine turns structured records and unstructured files such as PDFs, call logs and wikis into knowledge agents can reason from." },
      { title: "Governance built in", body: "Classification and tagging, policy-based access, data masking, secure connections and encryption-key management." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "The three stages of Data 360.",
    lede: "Salesforce's Trailhead training describes Data 360 in three stages. Pick one to see what happens there.",
    tabs: [
      {
        id: "connect",
        label: "1 · Connect",
        title: "Bring data in, or reach it where it lives",
        tagline: "Salesforce clouds, apps, legacy systems, lakes and warehouses.",
        points: [
          "Connect to Salesforce clouds, third-party apps, legacy and on-premises systems, and data lakes or warehouses.",
          "Warehouse data can be mirrored without copying it, which Salesforce calls zero copy.",
          "Pre-built connectors, SDKs and APIs cover the rest. Salesforce's page cites more than 200 pre-built connectors.",
          "Unstructured files such as documents, audio and video are processed and indexed for AI.",
        ],
        look: { title: "Zero copy", body: "The data stays in the warehouse. Data 360 queries it in place, so there is one version of the data and no pipeline to maintain." },
        screen: {
          app: "Data 360 · Data streams",
          label: "Illustration of a list of connected sources with their connection type. Sample data.",
          rows: {
            title: "Sources",
            items: [
              { a: "Salesforce CRM", b: "Ingested", pill: { t: "Active", tone: "ok" } },
              { a: "Cloud data warehouse", b: "Zero copy", pill: { t: "Active", tone: "ok" } },
              { a: "Document library", b: "Unstructured", pill: { t: "Indexed", tone: "in" } },
              { a: "Web events", b: "Streaming", pill: { t: "Active", tone: "ok" } },
            ],
          },
        },
      },
      {
        id: "harmonize",
        label: "2 · Harmonise and unify",
        title: "Give the data one shape, then one identity",
        tagline: "Governed, mapped and matched.",
        points: [
          "Set governance rules for access, tagging and encryption.",
          "Clean and transform the data, in batch or as a stream.",
          "Map it to a shared data model, so external data works like standard Salesforce objects.",
          "Match records across sources to build a single profile for each customer. Identity resolution uses rulesets, with match rules that decide which source profiles consolidate and reconciliation rules that decide which value appears.",
        ],
        look: { title: "A key ring of IDs", body: "Salesforce's training likens a unified profile to a key ring that links all of a customer's IDs, from Salesforce and from outside. It updates as the source data changes." },
        screen: {
          app: "Data 360 · Identity resolution",
          label: "Illustration of match and reconciliation rules producing a unified profile. Sample data.",
          steps: { title: "Ruleset", items: [{ t: "Match rules: which source profiles belong together", state: "done" }, { t: "Reconciliation rules: which value is shown", state: "now" }, { t: "Unified profile published" }] },
          rows: { title: "Matched IDs", items: [{ a: "Contact ID", b: "CRM" }, { a: "Subscriber ID", b: "Marketing" }, { a: "Device ID", b: "Web" }] },
        },
      },
      {
        id: "act",
        label: "3 · Analyse and act",
        title: "Insights, segments and action",
        tagline: "Where the unified data is put to work.",
        points: [
          "Create calculated insights and audience segments, and build or connect predictive models.",
          "Show results on Salesforce records, trigger automated flows, and send them to Sales, Service and Marketing, to AI agents, dashboards and ad platforms.",
          "Segments can be refreshed on a schedule, and activation notifies the destination that a new version is ready.",
        ],
        look: { title: "From segment to action", body: "A segment is built once on the unified profile, then used by marketing, service or an agent without rebuilding it in each tool." },
        screen: {
          app: "Data 360 · Segments",
          label: "Illustration of a segment with its size and destinations. Sample data.",
          tiles: [{ h: "Segment", k: "Active", s: "Refreshed on schedule", tone: "ok" }, { h: "Destinations", k: "3", s: "Apps and ad platform" }],
          bars: { title: "Used by", rows: [["Marketing", 70, "Journeys"], ["Service", 45, "Agents", "g"], ["Ad platform", 30, "Audience", "l"]] },
        },
      },
      {
        id: "agents",
        label: "Grounding agents",
        title: "The Agent Context Engine",
        tagline: "Context for agents, from structured and unstructured data.",
        points: [
          "Enriches records and files such as PDFs, call logs and wikis into structured business knowledge.",
          "Agents reason from that context, which Salesforce says reduces hallucinations and model costs.",
          "Keeps session history and user activity as persistent memory.",
          "Context Anywhere makes the enriched context available to custom apps and other AI tools outside Salesforce.",
        ],
        look: { title: "Why it matters to agents", body: "An agent answers from the data it can reach. Data 360 widens what it can reach, with the permissions and governance of the platform around it." },
        screen: {
          app: "Agent · Grounding",
          label: "Illustration of an agent answer that cites the records and documents it used. Sample data.",
          chat: { title: "Agent", msgs: [{ who: "u", t: "What is the status of this customer's last order?" }, { who: "a", t: "The latest order shipped this week. I used the order record and the carrier note." }] },
          rows: { title: "Grounded in", items: [{ a: "Order record", b: "CRM" }, { a: "Carrier note", b: "Document" }] },
        },
      },
    ],
  },

  scenario: {
    eyebrow: "End to end",
    title: "From scattered records to an answer.",
    lede: "How the three stages fit together on one customer question.",
    steps: [
      { t: "Connect", s: "CRM records, web events, a warehouse table and some documents are connected." },
      { t: "Map", s: "Fields are mapped to the shared data model and cleaned." },
      { t: "Match", s: "Identity resolution joins the records into one profile." },
      { t: "Use", s: "A segment, a dashboard, a flow or an agent reads the profile." },
      { t: "Stay current", s: "As source data changes, the profile and the segments change with it." },
    ],
    note: "A walk-through of Salesforce's described stages, not a customer story.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "What each role does in it.",
    lede: "The audiences Salesforce names for Data 360.",
    rows: [
      { who: "Service reps and agents", does: "See the full interaction history of a customer in the console." },
      { who: "Marketers", does: "Build segments and journeys on the unified profile." },
      { who: "Sales and service teams", does: "Use shared context to automate work and decide faster." },
      { who: "Admins and low-code builders", does: "Use Flow and Agentforce on top of the data." },
      { who: "Data and AI teams", does: "Build models and insights, using the platform's governance." },
    ],
  },

  fits: {
    eyebrow: "Fit with your systems",
    title: "Data 360 beside the data you already hold.",
    lede: "Salesforce describes Data 360 as the layer that connects, rather than replaces, your other data platforms.",
    rows: [
      { name: "Data warehouses and lakes", how: "Snowflake, Databricks, Google BigQuery and AWS sources can be queried in place through zero copy." },
      { name: "MuleSoft and other apps", how: "Over 200 pre-built connectors cover Salesforce clouds, MuleSoft, databases and popular apps; SDKs and APIs cover the rest." },
      { name: "Salesforce apps", how: "Sales, Service, Marketing and Commerce read the same profile, and Flow can act on it." },
      { name: "Tableau", how: "Tableau Next works on the unified data and adds a semantic layer, Tableau Semantics, so business definitions stay consistent." },
    ],
  },

  ai: {
    eyebrow: "AI and agents",
    title: "The data foundation for Agentforce.",
    lede: "Salesforce positions Data 360 as the data layer under its agents.",
    items: [
      { title: "Grounding", body: "Agents draw on trusted data, including external data through Data 360, and answer within your guardrails." },
      { title: "Unstructured data", body: "Documents and call logs are enriched so agents can use them, not only database fields." },
      { title: "Governance", body: "Policy-based access, masking and tagging apply to the data agents use." },
    ],
    note: "The trust layer that sits between your data and the language model is described on the Agentforce page.",
  },

  start: {
    eyebrow: "Getting started",
    title: "Where a Data 360 project begins.",
    lede: "Salesforce's own pricing guide starts with the use case, not the tool. It asks four questions of every use case before anything is estimated.",
    steps: [
      { title: "Frame the use case", body: "What problem are you solving, for which people? What is the role of AI: augment human work, automate a process or accelerate a workflow?" },
      { title: "Decide what data it needs", body: "Data types, sources, how fresh it must be, and the governance it requires." },
      { title: "Say what success looks like", body: "The business value, with measures and targets." },
      { title: "Start with the high-value, low-effort cases", body: "The guide sorts use cases by value and effort, and labels the high-value, low-effort ones \"do it now\"." },
    ],
    decide: {
      title: "Decisions to settle before you buy",
      items: [
        "Which pricing model: Flex Credits or profile-based pricing.",
        "How much data, how often it refreshes, and what you will do with it.",
        "Which sources to connect first, and which can stay in place.",
      ],
    },
  },

  editions: {
    eyebrow: "Pricing",
    title: "Data 360 is priced by what you use.",
    lede: "Salesforce says its data and AI products are priced on consumption. Its pricing guide offers two models. Figures change, so this page does not quote them.",
    rows: [
      { name: "Flex Credits", body: "A consumption model. One kind of credit is shared across Data 360 and Agentforce, so credits bought for one use case can be applied to another." },
      { name: "Profile-based pricing", body: "A predictable, flat-rate model aimed at control." },
      { name: "What drives consumption", body: "For Data 360, three things: data volume, how often it runs, and what is done to it, such as processing, segmentation or activation. The July 2026 guide lists batch ingestion and zero-copy integrations as free in the Flex Credits model." },
    ],
    link: { label: "Data 360 pricing on salesforce.com", href: "https://www.salesforce.com/data/pricing/" },
  },

  faq: [
    { q: "What is Data 360, and was it called Data Cloud?", a: "Data 360 is Salesforce's data platform, formerly called Data Cloud. Some training and older pages still use the earlier name." },
    { q: "Is it a customer data platform?", a: "Yes, and Salesforce says it goes further than a traditional one, because it serves sales, service and commerce as well as marketing." },
    { q: "Do we have to copy our data into Salesforce?", a: "Not always. With zero copy, data in warehouses and lakes can be queried where it lives. Data can also be ingested when that suits the use case." },
    { q: "What is identity resolution?", a: "The process that builds unified profiles. A ruleset has match rules, which decide which source profiles are consolidated, and reconciliation rules, which decide which value shows on the profile." },
    { q: "How is it priced?", a: "By consumption, through Flex Credits, or with a profile-based model. What you pay depends on data volume, how often it runs and what you do with it. Salesforce provides a pricing page and calculator." },
    { q: "How does it help agents?", a: "It gives agents trusted context, including unstructured content, and keeps persistent memory of sessions, so their answers are tied to your data." },
  ],

  sources: [
    { label: "Data 360 product page", href: "https://www.salesforce.com/data/" },
    { label: "Data 360 guide", href: "https://www.salesforce.com/data/guide/" },
    { label: "Trailhead: the stages of Data 360", href: "https://trailhead.salesforce.com/content/learn/modules/data-cloud-explore-the-data-landscape/explore-the-stages-of-data-cloud" },
    { label: "Understanding Data 360 pricing (Salesforce guide, July 2026)", href: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/products/data/resources/understanding-data360-pricing/S-DPM-Pricing-Guide-Ebook-2026-07-23.pdf" },
  ],
  checked: "Checked against Salesforce's Data 360 page, guide, Trailhead module and pricing guide in November 2026.",
};
