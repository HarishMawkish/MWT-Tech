import type { ProductContent } from "../content-types";

// Sales Cloud. Every statement below comes from Salesforce's own Sales Cloud pages (the product overview, the
// capability and FAQ page and the pricing page), read in November 2026. Anything Salesforce itself labels as a result
// or a forecast figure has been left out.

export const sales: ProductContent = {
  slug: "sales-cloud",
  crumb: "Sales Cloud",
  eyebrow: "Sales Cloud",
  title: ["One place for leads, deals and forecasts,", "with AI beside the seller."],
  lede: "Sales Cloud is Salesforce's CRM for sales teams. It keeps leads, contacts, accounts and opportunities in one record, logs emails, events and other activity automatically, and adds AI and agents to the work of selling.",
  primary: { label: "See what it does", href: "#explore" },
  secondary: { label: "How to start", href: "#start" },
  note: "Salesforce's current sales page calls the product Sales Cloud. Agent features are sold as additions to it, covered under editions below.",
  hero: {
    app: "Sales Cloud · Pipeline",
    label: "Illustration of a Sales Cloud pipeline: open opportunities in four stages, a forecast summary and an AI suggestion to follow up on a deal that has gone quiet. Sample data.",
    tiles: [
      { h: "Open deals", k: "24", s: "This quarter" },
      { h: "Forecast", k: "On track", s: "Commit vs goal", tone: "ok" },
      { h: "Needs attention", k: "3", s: "No recent activity", tone: "wr" },
    ],
    board: [
      { h: "Qualify", cards: [{ t: "Deal A", s: "Next step set" }, { t: "Deal B", s: "Call logged" }] },
      { h: "Propose", cards: [{ t: "Deal C", s: "Quote drafted" }] },
      { h: "Negotiate", cards: [{ t: "Deal D", s: "Approval pending" }] },
    ],
    chat: { title: "Agent suggestion", msgs: [{ who: "a", t: "Deal D has had no activity this week. Draft a follow-up email for the owner to review?" }] },
  },
  heroCaption: "Illustration of a Sales Cloud pipeline, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Selling, recorded as it happens.",
    lede: "Sales teams lose time re-typing what they did and guessing what comes next. Sales Cloud is built to capture the activity, show the pipeline and point at the next step.",
    items: [
      { title: "Records without re-typing", body: "Emails, events and other engagement are logged automatically, so the history of an account sits in one place." },
      { title: "A pipeline you can read", body: "One consolidated view of the pipeline, with changes tracked over time and AI coaching on the deals that matter most." },
      { title: "Forecasts that follow the deals", body: "Real-time forecasts with metrics chosen to fit your goals, and shared views of top deals and trends." },
      { title: "Process you build by dragging", body: "Sales processes and workflows are built with drag-and-drop tools, and territory assignments are managed in the same place." },
      { title: "Quotes and approvals", body: "Templated quotes are tied to opportunities, and contract-approval steps can be automated." },
      { title: "Away from the desk", body: "A mobile app and a browser extension let sellers update the CRM wherever they are." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Four areas of Sales Cloud, up close.",
    lede: "Pick an area to see what it covers and how the screen sellers use might look.",
    tabs: [
      {
        id: "records",
        label: "Leads and accounts",
        title: "Leads, contacts, accounts and opportunities in one place",
        tagline: "A single source of truth for who you sell to and what has happened so far.",
        points: [
          "Leads, contacts, accounts and opportunities are kept together, so the whole relationship is visible.",
          "Activity such as emails and events is captured automatically.",
          "AI ranks leads by likely revenue and gives sellers a prioritised to-do list.",
          "Account plans and files can be shared across teams.",
        ],
        look: { title: "One account page", body: "The record pulls the people, the deals and the recent activity into one view, so nobody has to ask a colleague what happened last month." },
        screen: {
          app: "Account · Overview",
          label: "Illustration of an account page showing contacts, open opportunities and a timeline of recent activity. Sample data.",
          rows: {
            title: "Open opportunities",
            items: [
              { a: "Opportunity 1", b: "Propose", pill: { t: "Open", tone: "in" } },
              { a: "Opportunity 2", b: "Qualify", pill: { t: "Open", tone: "in" } },
            ],
          },
          steps: { title: "Recent activity (captured automatically)", items: [{ t: "Email received", state: "done" }, { t: "Meeting held", state: "done" }, { t: "Call logged", state: "now" }] },
        },
      },
      {
        id: "pipeline",
        label: "Pipeline",
        title: "A pipeline view that shows change",
        tagline: "See where deals are, what moved, and where coaching helps.",
        points: [
          "A consolidated view of the pipeline, with changes tracked over time.",
          "AI-driven coaching on priority deals.",
          "Reports and dashboards for lead volume, conversion rates and pipeline, with views for each team member.",
          "Account monitoring: agents can flag risks and opportunities before deals stall.",
        ],
        look: { title: "Stages and signals", body: "Each deal sits in a stage. Signals such as a quiet week or a pending approval are shown on the card so a manager can see where to help." },
        screen: {
          app: "Pipeline · This quarter",
          label: "Illustration of a pipeline board with three stages and a bar chart of deals by stage. Sample data.",
          board: [
            { h: "Qualify", cards: [{ t: "Deal A", s: "Next step set" }] },
            { h: "Propose", cards: [{ t: "Deal B", s: "Quote drafted" }, { t: "Deal C", s: "No activity" }] },
            { h: "Negotiate", cards: [{ t: "Deal D", s: "Approval pending" }] },
          ],
          bars: { title: "Deals by stage", rows: [["Qualify", 80, "9"], ["Propose", 55, "6", "o"], ["Negotiate", 30, "3", "g"]] },
        },
      },
      {
        id: "forecast",
        label: "Forecasting",
        title: "Forecasts built from the live pipeline",
        tagline: "A forecast leaders can trust to be current.",
        points: [
          "Real-time forecasts, with metrics tailored to your business goals.",
          "Shared views of top deals and trends.",
          "Sales performance data for quota tracking, earnings and SPIFFs, and manager coaching, available through Sales Performance Management.",
        ],
        look: { title: "Forecast and goal", body: "The forecast is calculated from the deals in the pipeline, so it changes as sellers update them." },
        screen: {
          app: "Forecast · This quarter",
          label: "Illustration of a forecast view with a goal line and a column chart of commit by month. Sample data.",
          tiles: [{ h: "Goal", k: "100" , s: "Index" }, { h: "Commit", k: "82", s: "Index", tone: "ap" }, { h: "Best case", k: "96", s: "Index" }],
          cols: { title: "Commit by month (index)", values: [24, 31, 27], labels: ["Month 1", "Month 2", "Month 3"] },
        },
      },
      {
        id: "quotes",
        label: "Quotes and automation",
        title: "Quotes, approvals and workflow",
        tagline: "Less hand-offs between the seller and everyone else.",
        points: [
          "Templated quotes tied to the opportunity.",
          "Contract approval steps can be automated.",
          "Sales processes and workflows are built with drag-and-drop tools.",
          "For complex quoting, contracts and billing, Revenue Cloud takes over on the same data.",
        ],
        look: { title: "An approval in flight", body: "The quote waits for an approver. Once it is approved the opportunity moves on without anyone re-keying it." },
        screen: {
          app: "Quote · Approval",
          label: "Illustration of a quote with an approval path. Sample data.",
          steps: { title: "Approval path", items: [{ t: "Quote drafted from template", state: "done" }, { t: "Manager approval", state: "now" }, { t: "Sent to customer" }] },
          rows: { title: "Quote lines", items: [{ a: "Product line 1", b: "Qty 10" }, { a: "Product line 2", b: "Qty 2" }] },
        },
      },
    ],
  },

  scenario: {
    eyebrow: "End to end",
    title: "From a new lead to a forecast.",
    lede: "A walk through how the capabilities Salesforce describes fit together in one selling cycle.",
    steps: [
      { t: "A lead arrives", s: "It joins the other leads, and AI ranks them by likely revenue so the seller sees a prioritised list." },
      { t: "The seller prepares", s: "Account history and live buyer signals sit on one page. Agents can research the prospect and prepare the deal." },
      { t: "The deal moves", s: "Emails and events are logged for the seller. The pipeline shows what changed." },
      { t: "Quote and approval", s: "A templated quote is tied to the opportunity, and the approval steps run automatically." },
      { t: "The forecast updates", s: "The forecast reflects the deals as they stand, and managers see the top deals together." },
    ],
    note: "A walk-through of Salesforce's described capabilities, not a customer story.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "What each role does in it.",
    lede: "Salesforce names these audiences for Sales Cloud.",
    rows: [
      { who: "Sellers", does: "Work leads and deals, see account history in one place, and update the CRM from the app or the browser extension." },
      { who: "Sales managers", does: "Read the pipeline, coach on priority deals and review shared views of top deals." },
      { who: "Revenue leaders", does: "Forecast revenue. Salesforce names chief revenue officers as a core audience." },
      { who: "Partner sellers", does: "Work from a shared account view with the company, and track co-sold deals, through Partner Cloud." },
      { who: "Sales operations", does: "Manage territories and processes, and use performance data on quota, earnings and coaching." },
    ],
  },

  fits: {
    eyebrow: "Fit with your systems",
    title: "Sales Cloud beside everything else you run.",
    lede: "Salesforce positions Sales Cloud as one product on a shared platform. These are the connections its pages describe.",
    rows: [
      { name: "Data 360", how: "Brings data from other systems into Salesforce so sellers and agents see more of the customer." },
      { name: "Revenue Cloud", how: "Takes over for quoting, pricing, contracts and billing. Its product catalogue connects to PIM, PLM and ERP systems." },
      { name: "Slack, Teams, ChatGPT and Claude", how: "Headless Sales brings account insights and deal updates into these tools under enterprise controls." },
      { name: "MuleSoft", how: "Connects Salesforce to systems inside and outside it, including through published connectors for SAP." },
      { name: "AgentExchange", how: "Salesforce's marketplace for apps, agents and consultants, listed as the place to find implementation help." },
    ],
    note: "Specific ERP connections depend on the ERP and its edition. See the MuleSoft page for what is published.",
  },

  ai: {
    eyebrow: "AI and agents",
    title: "What AI does in Sales Cloud.",
    lede: "As Salesforce describes it on its sales pages.",
    items: [
      { title: "Ranks and prioritises", body: "AI scores leads by likely revenue and builds a prioritised to-do list." },
      { title: "Drafts", body: "AI can draft content such as emails and proposals, and can detect triggers without manual set-up." },
      { title: "Agents that research and prepare", body: "Autonomous agents research prospects, prepare deals and monitor accounts, and flag risks and opportunities before deals stall." },
      { title: "Agents that take on tasks", body: "Agents can engage inbound leads, generate quotes and process orders, working alongside sellers in the same process." },
    ],
    note: "Agent capabilities are sold separately from the base editions. Salesforce's trust layer and guardrails are described on the Agentforce page.",
  },

  start: {
    eyebrow: "Getting started",
    title: "Where a Sales Cloud project begins.",
    lede: "Salesforce's own FAQ describes the starting path: a free trial, a choice of plan, then configuration, with consultants available through its marketplace.",
    steps: [
      { title: "Try it", body: "Salesforce offers a free 30-day trial of Sales Cloud." },
      { title: "Choose a plan", body: "Pick the edition that fits the team and the AI you want. Editions are summarised below." },
      { title: "Configure", body: "Set up the platform for your sales process, with drag-and-drop workflow tools." },
      { title: "Bring in help if needed", body: "Salesforce points customers to consultants and partners listed on AgentExchange." },
    ],
    decide: {
      title: "Decisions to settle before you buy",
      items: [
        "Which edition, and how many users.",
        "Which support plan: Standard is included, Premier and Signature are higher.",
        "Which add-ons you need, such as agents, Revenue Cloud or partner management.",
        "Which AI and agent features you need. Salesforce lists some as additions to the base editions, and its Agentforce pricing page explains how agent use is paid for.",
      ],
    },
  },

  editions: {
    eyebrow: "Editions",
    title: "How Sales Cloud is packaged.",
    lede: "Prices and allowances change, so this page does not quote them. The official pricing page is the source.",
    rows: [
      { name: "Free Suite, Starter Suite, Pro Suite", body: "Suites for smaller teams covering sales and more. Pro adds custom objects and apps, a sandbox, sales forecasting and more advanced automation to Starter." },
      { name: "Core", body: "Sales CRM with built-in AI, plus Slack and Tableau Next. The entry point for AI add-ons." },
      { name: "Advanced", body: "Core plus enhanced security, more AI, more data capacity and backup and archive tools." },
      { name: "Max", body: "The fullest edition, combining the AI suite and Agentforce for Sales with Sales Planning and other additions." },
    ],
    link: { label: "Sales Cloud pricing on salesforce.com", href: "https://www.salesforce.com/sales/pricing/" },
  },

  faq: [
    { q: "What is Sales Cloud?", a: "Salesforce's CRM for sales teams. It gives teams one platform for leads, accounts, opportunities, forecasting and automation, with AI and agents built in." },
    { q: "What is sales force automation?", a: "Software that handles the repetitive parts of selling, such as updating records, tracking the pipeline and sending reminders, so sellers can spend more time with customers." },
    { q: "How does Sales Cloud handle customer data?", a: "Activity and the information sellers enter are stored in a single secure database. That gives teams deal visibility and accurate real-time reports, and the same data can feed AI agents." },
    { q: "Does it work on a phone?", a: "Yes. Salesforce provides a mobile app and a browser extension so sellers can update the CRM from anywhere." },
    { q: "How do we get started?", a: "Salesforce describes three steps: sign up for a free trial, choose a pricing plan, and configure the platform. Consultants and partners listed on AgentExchange can help with implementation." },
    { q: "Are agent features included?", a: "Not in every edition. Salesforce lists agent capabilities such as prospecting, pipeline management and lead nurture as additions, and the top edition bundles Agentforce for Sales." },
  ],

  sources: [
    { label: "Sales Cloud overview", href: "https://www.salesforce.com/sales/" },
    { label: "Sales Cloud capabilities and FAQ", href: "https://www.salesforce.com/sales/cloud/" },
    { label: "Sales Cloud pricing and editions", href: "https://www.salesforce.com/sales/pricing/" },
    { label: "Starter Suite", href: "https://www.salesforce.com/small-business/starter/" },
  ],
  checked: "Checked against Salesforce's own Sales Cloud pages in November 2026.",
};
