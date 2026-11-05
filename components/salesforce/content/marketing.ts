import type { ProductContent } from "../content-types";

// Marketing Cloud. Sources: Salesforce's marketing overview page, its "Marketing Use Cases in the Age of AI and
// Agentforce" workbook and its 60-day Marketing Cloud Next adoption plan. Read in November 2026.

export const marketing: ProductContent = {
  slug: "marketing-cloud",
  crumb: "Marketing Cloud",
  eyebrow: "Marketing Cloud",
  title: ["Campaigns, journeys and agents,", "around one customer profile."],
  lede: "Marketing Cloud is the name for Salesforce's marketing products. Marketing Cloud Next is the newest, built on the Salesforce platform with AI, Data 360 and Agentforce at its core. Account Engagement and Marketing Cloud Engagement are the established products alongside it.",
  primary: { label: "The product family", href: "#explore" },
  secondary: { label: "How to start", href: "#start" },
  note: "Pardot is now called Account Engagement, and ExactTarget is now called Marketing Cloud Engagement.",
  hero: {
    app: "Marketing Cloud Next · Journey",
    label: "Illustration of a marketing journey with an audience, a message in two channels and a result summary. Sample data.",
    tiles: [
      { h: "Audience", k: "Segment", s: "From the unified profile", tone: "ap" },
      { h: "Channels", k: "Email · SMS", s: "Two steps" },
      { h: "Result", k: "Reporting", s: "By channel" },
    ],
    steps: { title: "Journey", items: [{ t: "Audience built from the profile", state: "done" }, { t: "Email sent", state: "done" }, { t: "SMS follow-up", state: "now" }, { t: "Results by channel" }] },
    chat: { title: "Campaign agent", msgs: [{ who: "u", t: "Plan a spring offer for returning customers." }, { who: "a", t: "Here is a draft plan with content for email and SMS. Review the goals and guardrails before it sends." }] },
  },
  heroCaption: "Illustration of a marketing journey, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Know the customer, then speak to them in the right place.",
    lede: "Marketing teams work from many systems and many channels. Marketing Cloud is built around a real-time customer profile and the channels, content and analytics that use it.",
    items: [
      { title: "A real-time customer profile", body: "Customer signals are unified into one profile. Salesforce positions Data 360 as the customer data platform behind it." },
      { title: "Content made once, used everywhere", body: "Content is created once and published across channels, structured for both people and AI agents." },
      { title: "Campaigns that agents can run", body: "Campaign Agent works as a digital campaign manager: it builds campaigns from brand guidelines, writes channel-specific content and tunes sends from intent signals. Marketers set the goals and guardrails." },
      { title: "Two-way conversations", body: "Engagement over email, SMS and the web, with agents that adapt during the conversation." },
      { title: "Attribution and reporting", body: "Cross-channel analytics show how campaigns performed." },
      { title: "Loyalty, offers and personalisation", body: "Tailored offers and incentive programmes, and experiences that adapt to each customer. See Loyalty Management." },
    ],
  },

  explore: {
    eyebrow: "The family",
    title: "Three products, one direction.",
    lede: "Salesforce markets several products under one name. This is how its marketing page relates them, and what each is for.",
    tabs: [
      {
        id: "next",
        label: "Marketing Cloud Next",
        title: "The newest generation, built on the platform",
        tagline: "Built natively on Salesforce, with AI, Data 360 and Agentforce at its core.",
        points: [
          "Salesforce calls it the flagship of Marketing Cloud.",
          "Audiences can be built with Agentforce or by dragging and dropping, with no SQL needed, using data from Salesforce, data extensions and public cloud sources.",
          "Flow can orchestrate experiences across Journey Builder, Agentforce and Sales.",
          "A shared workspace centralises campaign operations and analytics.",
        ],
        look: { title: "Segments and journeys", body: "Marketers define the audience and the steps. The same unified profile that sales and service use sits underneath." },
        screen: {
          app: "Marketing Cloud Next · Segments",
          label: "Illustration of an audience builder with conditions and an agent suggestion. Sample data.",
          rows: { title: "Audience conditions", items: [{ a: "Purchased in the last period", pill: { t: "Include", tone: "ok" } }, { a: "Opted in to email", pill: { t: "Include", tone: "ok" } }, { a: "Already in a journey", pill: { t: "Exclude", tone: "er" } }] },
          chat: { title: "Agent", msgs: [{ who: "a", t: "I can narrow this audience to people who engaged in the last 30 days. Apply?" }] },
        },
      },
      {
        id: "engagement",
        label: "Account Engagement",
        title: "B2B marketing automation",
        tagline: "Formerly Pardot.",
        points: [
          "Handles marketing automation for business-to-business teams.",
          "Customers can add Account Engagement+ to use Marketing Cloud Next's AI capabilities without switching platforms.",
          "Salesforce lists agentic demand generation, with agents that prospect target accounts and qualify inbound demand, and digital advertising, with agents that activate audiences on paid channels, as further parts of Marketing Cloud.",
        ],
        look: { title: "From lead to sales hand-off", body: "Qualified interest is passed to sales on the same platform, so both teams see the same lead history." },
        screen: {
          app: "Account Engagement · Leads",
          label: "Illustration of a lead list with engagement scores and a hand-off to sales. Sample data.",
          rows: { title: "Leads", items: [{ a: "Lead 1", b: "High engagement", pill: { t: "Send to sales", tone: "ok" } }, { a: "Lead 2", b: "Nurturing", pill: { t: "Nurture", tone: "in" } }, { a: "Lead 3", b: "New", pill: { t: "Score", tone: "nt" } }] },
        },
      },
      {
        id: "mce",
        label: "Marketing Cloud Engagement",
        title: "The established product, with a bridge to Next",
        tagline: "Formerly ExactTarget.",
        points: [
          "Salesforce says customers of Marketing Cloud Engagement can reach Marketing Cloud Next capabilities.",
          "Its 60-day adoption plan describes a bridge in the navigation that connects an existing Engagement instance to Next, so existing campaigns do not have to be migrated first.",
          "Email, SMS, push, WhatsApp and journeys data can be connected with the rest of the Salesforce platform.",
        ],
        look: { title: "Adopt gradually", body: "Salesforce's own plan is to use the bridge, configure the two together and build up use cases over weeks, rather than move everything at once." },
        screen: {
          app: "Engagement · Connected",
          label: "Illustration of an existing Engagement instance connected to Marketing Cloud Next. Sample data.",
          steps: { title: "Adoption path", items: [{ t: "Get access", state: "done" }, { t: "Connect Engagement and Next", state: "now" }, { t: "Build first use cases" }, { t: "Share what you learned" }] },
        },
      },
      {
        id: "pillars",
        label: "AI use cases",
        title: "Four places marketers use AI",
        tagline: "From Salesforce's workbook for marketers.",
        points: [
          "Segmentation: finding and sizing the right audiences.",
          "Automation: removing manual steps from campaign work.",
          "Personalisation: content and offers that fit each person.",
          "Insights: understanding what worked.",
        ],
        look: { title: "A data foundation first", body: "The workbook says AI works best on a unified data foundation, because data silos get in the way of agents." },
        screen: {
          app: "Marketing · AI use cases",
          label: "Illustration of four marketing AI use cases as a checklist. Sample data.",
          rows: { title: "Use cases", items: [{ a: "Segmentation", pill: { t: "Plan", tone: "in" } }, { a: "Automation", pill: { t: "Plan", tone: "in" } }, { a: "Personalisation", pill: { t: "Plan", tone: "in" } }, { a: "Insights", pill: { t: "Plan", tone: "in" } }] },
        },
      },
    ],
  },

  scenario: {
    eyebrow: "End to end",
    title: "From an audience to a result.",
    lede: "How a campaign moves through the capabilities Salesforce describes.",
    steps: [
      { t: "Set the goal", s: "A marketer states the goal and the brand guardrails." },
      { t: "Build the audience", s: "Segments come from the unified profile, by dragging and dropping or by asking an agent." },
      { t: "Create the content", s: "Content is drafted for each channel from the brand guidelines." },
      { t: "Send and converse", s: "Messages go out over email, SMS and the web, and replies continue the conversation." },
      { t: "Measure", s: "Cross-channel reporting shows how the campaign did." },
    ],
    note: "A walk-through of Salesforce's described capabilities, not a customer story.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "What each role does in it.",
    lede: "The audiences Salesforce names for Marketing Cloud.",
    rows: [
      { who: "Marketers", does: "Build audiences, content and campaigns, B2B or B2C, and set goals and guardrails for agents." },
      { who: "Small-business owners", does: "Use agents to create campaigns and nurture leads." },
      { who: "Sales, service and commerce teams", does: "Share the same conversations and customer profile as marketing." },
      { who: "Reps", does: "Get instant access to customer context." },
    ],
  },

  fits: {
    eyebrow: "Fit with your systems",
    title: "Marketing Cloud beside your other platforms.",
    lede: "From Salesforce's marketing pages.",
    rows: [
      { name: "Data 360", how: "Unifies customer signals into one profile and powers segmentation, real-time analytics and Agentforce." },
      { name: "Contentful", how: "A headless content platform that Salesforce describes as newly acquired, linked from its content-management page." },
      { name: "Paid advertising platforms", how: "Audiences can be activated to paid channels, including through Meta's Conversions API." },
      { name: "Sales and Service", how: "Shared conversations and data mean reps see marketing context." },
    ],
  },

  ai: {
    eyebrow: "AI and agents",
    title: "What agents do for marketers.",
    lede: "As Salesforce describes it.",
    items: [
      { title: "Campaign Agent", body: "Acts as a digital campaign manager for content, sends and budgets. Marketers set goals and guardrails." },
      { title: "Conversational agents", body: "Act as brand ambassadors in two-way conversations." },
      { title: "Demand generation agents", body: "Salesforce says these agents prospect target accounts and qualify inbound demand. Its demand-generation page names Hunter, which builds prioritised outbound target lists, and Piper, which qualifies inbound website and email leads and books meetings." },
      { title: "The five attributes of an agent", body: "Salesforce's workbook defines an agent by its role, knowledge, actions, guardrails and channels." },
    ],
    note: "Salesforce's demand-generation page describes Piper as its AI SDR, from Qualified.",
  },

  start: {
    eyebrow: "Getting started",
    title: "Salesforce's 60-day path to Marketing Cloud Next.",
    lede: "Salesforce publishes an adoption plan for customers who already use Marketing Cloud Engagement. These are the steps its plan names.",
    steps: [
      { title: "Get access", body: "Start from the Setup Assistant and the help documentation, and use the bridge in the navigation to reach Marketing Cloud Next." },
      { title: "Configure Next and Engagement together", body: "Connect Email, SMS, push, WhatsApp and journeys data with the rest of the platform." },
      { title: "Build use cases", body: "Audiences, orchestrations with Flow, reporting and a shared workspace, one use case at a time." },
      { title: "Share what you learned", body: "The core team collects lessons and shares them." },
    ],
    decide: {
      title: "Decisions to settle first",
      items: [
        "Whether you are starting on Marketing Cloud Next, adding to Engagement, or running Account Engagement for B2B.",
        "Which channels you will connect first.",
        "Which use cases come first: segmentation, automation, personalisation or insights.",
      ],
    },
  },


  faq: [
    { q: "What is Marketing Cloud?", a: "The umbrella name for Salesforce's marketing products. Marketing Cloud Next is the flagship, Account Engagement handles B2B automation, and Marketing Cloud Engagement is the established email and journeys product." },
    { q: "What happened to Pardot and ExactTarget?", a: "Pardot is now called Account Engagement, and ExactTarget is now called Marketing Cloud Engagement." },
    { q: "Do we have to migrate off Marketing Cloud Engagement?", a: "Salesforce says Engagement customers can also access Marketing Cloud Next capabilities, and its 60-day plan describes connecting the two with a bridge so existing campaigns do not have to be migrated first." },
    { q: "Do we need SQL to build audiences?", a: "No. Audiences in Marketing Cloud Next can be built by dragging and dropping, or with Agentforce, with no SQL needed." },
    { q: "What does Campaign Agent do?", a: "It acts as a digital campaign manager: it builds campaigns from brand guidelines, creates content for each channel and adjusts sends from intent signals, within goals and guardrails that marketers set." },
    { q: "Where does the customer data come from?", a: "From Data 360, which unifies signals from across your systems into a single real-time profile." },
  ],

  sources: [
    { label: "Marketing Cloud overview", href: "https://www.salesforce.com/marketing/" },
    { label: "Marketing Cloud Next", href: "https://www.salesforce.com/marketing/agentic-marketing/" },
    { label: "Marketing Use Cases in the Age of AI and Agentforce (Salesforce workbook)", href: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/PDF/marketing-ai-for-marketers-workbook.pdf" },
    { label: "Marketing Cloud Next 60-day adoption plan (Salesforce)", href: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/60-Day-Action-Plan_-Getting-Started-with-Engagement-Agentforce-Marketing.pdf" },
  ],
  checked: "Checked against Salesforce's marketing page, workbook and adoption plan in November 2026.",
};
