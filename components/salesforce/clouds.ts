// Content for the Salesforce cloud pages. Everything here is paraphrased from
// Salesforce's own pages (product pages, FAQs, help and Trailhead material and
// the Atlas / zero-copy explainers). Figures are Salesforce's, quoted as they
// state them, and each carries the name of whoever it is attributed to.

export type CloudSlug =
  | "sales-cloud"
  | "service-cloud"
  | "marketing-cloud"
  | "data-360"
  | "agentforce"
  | "loyalty-management";

export type VisualKind = "pipeline" | "console" | "journey" | "graph" | "agent" | "loyalty";

export type CloudStat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source: string;
};

export type CloudCapability = {
  title: string;
  tag: string;
  body: string;
  /** Optional detail chips shown with the capability (channels, platforms, examples). */
  details?: string[];
  /** Which column / lane / layer a capability sits in, for pages that group them. */
  group?: string;
};

export type CloudStep = { title: string; body: string };

export type CloudScenario = { title: string; body: string; tag: string };

export type SalesforceCloud = {
  slug: CloudSlug;
  name: string;
  /** Short line used on cards, the orbit and the menu. */
  blurb: string;
  accent: string;
  visual: VisualKind;
  headline: [string, string];
  lede: string;
  statement: string;
  marquee: string[];
  showcaseKicker: string;
  showcaseTitle: string;
  capabilities: CloudCapability[];
  proofTitle: string;
  stats: CloudStat[];
  flowTitle: string;
  flow: CloudStep[];
  scenariosTitle: string;
  scenarios: CloudScenario[];
  faqs: { q: string; a: string }[];
};

export const clouds: SalesforceCloud[] = [
  /* ================================================================ Sales */
  {
    slug: "sales-cloud",
    name: "Sales Cloud",
    blurb: "One revenue workflow for sellers and agents.",
    accent: "#3da5ff",
    visual: "pipeline",
    headline: ["Close more.", "Chase less."],
    lede: "Sales Cloud brings customer data, years of relationship history and AI agents into a single revenue workflow, so sellers spend their day selling instead of updating records.",
    statement:
      "Every call, email and meeting captured. Every account understood in full context. Every signal acted on before the deal goes cold. This is what a CRM looks like when agents do the groundwork and sellers do the selling.",
    marquee: ["Pipeline", "Forecasting", "Lead scoring", "Account insight", "Sales agents", "Quoting", "Partners", "Commissions"],
    showcaseKicker: "The deal board",
    showcaseTitle: "Every stage of a deal, handled.",
    capabilities: [
      { group: "Capture", title: "Momentum", tag: "Data foundation", body: "Calls, emails and meetings are captured automatically and blended with live buyer signals and account history, so every record reflects what actually happened.", details: ["Email", "Calls", "Meetings"] },
      { group: "Capture", title: "Lead management", tag: "Know who to call", body: "AI ranks leads by their likely revenue and builds a prioritised to-do list. Lead scoring learns from your own conversion history, with models that refresh about every ten days.", details: ["Lead scoring", "Prioritised lists"] },
      { group: "Understand", title: "Accounts and opportunities", tag: "Deal-level guidance", body: "Deal-specific guidance, account plans and a unified customer profile. Each opportunity carries a score from 1 to 99, with the factors that pushed it up or down.", details: ["Account plans", "Opportunity score"] },
      { group: "Understand", title: "Pipeline and forecasting", tag: "See it coming", body: "A consolidated pipeline view with trend charts and AI coaching, plus real-time forecasts with adjustable metrics and shared views of the top deals.", details: ["Trend charts", "Forecast views"] },
      { group: "Act", title: "Hunter", tag: "Agents for pipeline", body: "Autonomous agents research prospects, prepare deals and keep watch over accounts, flagging the risks and the openings sellers would otherwise miss.", details: ["Research", "Deal prep", "Account watch"] },
      { group: "Act", title: "Headless Sales", tag: "Where you already work", body: "Account insight and deal updates surface inside Slack, Teams, ChatGPT and Claude, inside enterprise guardrails, so nobody switches tools to stay informed.", details: ["Slack", "Teams", "ChatGPT", "Claude"] },
      { group: "Close", title: "Quote to cash", tag: "Revenue Cloud", body: "Quotes link to opportunities, approvals run automatically, and quoting, contracts and billing connect into one flow with no manual hand-offs.", details: ["Quotes", "Contracts", "Billing"] },
      { group: "Close", title: "Performance and partners", tag: "Plans, quota, co-selling", body: "Real-time earnings, quota tracking and SPIFFs for sellers, and shared account visibility for partners, including co-sold deals and market development fund claims.", details: ["Spiff", "Planning", "Partner Cloud"] },
    ],
    proofTitle: "The forecast Salesforce points to.",
    stats: [
      { value: 30, suffix: "%", label: "more revenue with Sales Cloud", source: "Salesforce" },
      { value: 25, label: "hours handed back to sellers each week", source: "Salesforce" },
      { value: 63, suffix: "%", label: "faster deal closing at The 1916 Company", source: "Customer story" },
      { value: 20, label: "years running as a Gartner Magic Quadrant Leader for CRM Sales Platforms", source: "Gartner" },
    ],
    flowTitle: "Truth, context, action",
    flow: [
      { title: "Truth", body: "A data foundation that captures every interaction on its own, so the CRM stops being a record of what people remembered to type." },
      { title: "Context", body: "A complete customer view that sets account history beside live signals, so every conversation starts informed." },
      { title: "Action", body: "Revenue execution that helps sellers and agents act on those signals before a deal goes quiet." },
    ],
    scenariosTitle: "How teams use it",
    scenarios: [
      { tag: "Prospecting", title: "Start the day with a ranked list", body: "Lead scoring and prioritised to-do lists put the people most likely to convert at the top, learned from your own history." },
      { tag: "Deal review", title: "See why a deal is scored the way it is", body: "An opportunity score from 1 to 99 shows the factors behind it, so a manager coaches the cause, not the number." },
      { tag: "Account management", title: "Let an agent watch the accounts", body: "Hunter monitors accounts and flags the risk or the opening early enough to do something about it." },
      { tag: "Wherever you work", title: "Update a deal without leaving Slack", body: "Headless Sales brings deal updates into Slack, Teams, ChatGPT and Claude, under the same guardrails." },
      { tag: "Closing", title: "Quote, approve, sign, bill", body: "Quotes, approvals, contracts and billing are one connected flow in Revenue Cloud, rather than four hand-offs." },
    ],
    faqs: [
      { q: "What is Sales Cloud?", a: "It is Salesforce's sales force automation platform: the contacts, pipeline, forecasting, automation and AI a sales team needs, in one connected system." },
      { q: "What is a sales pipeline?", a: "A visual map of where every prospect sits in the sales process, used to spot the next step for each deal and whatever is blocking it." },
      { q: "What does sales automation actually do?", a: "It takes over repetitive manual work, which cuts time, effort and errors, and typically improves lead management, forecast accuracy and collaboration." },
      { q: "How does lead scoring know what a good lead is?", a: "It learns from your own history. Salesforce's help documentation says lead scoring needs a base of past leads, with a meaningful number of conversions among them, and otherwise falls back to a global model." },
      { q: "Does Salesforce offer AI for sales?", a: "Yes. Sales Cloud, Revenue Cloud and partner relationship management all include sales AI, from predictive insight to autonomous agents." },
      { q: "How do we get started?", a: "Start a free trial, pick a plan and configure the platform. Many teams bring in an implementation partner to design it around how they sell." },
    ],
  },

  /* ============================================================== Service */
  {
    slug: "service-cloud",
    name: "Service Cloud",
    blurb: "AI agents and people, resolving together.",
    accent: "#ff6fb1",
    visual: "console",
    headline: ["Resolve it.", "Everywhere."],
    lede: "Service Cloud brings AI agents, human expertise and trusted data together, so every touchpoint ends in a resolution and a stronger customer relationship.",
    statement:
      "A customer asks once, in any channel. The context arrives with them: the case, the knowledge, the asset. An agent resolves what it can, and hands a person the next step for the rest. That is service that feels effortless from both sides.",
    marquee: ["Self-service", "Contact center", "Field service", "Knowledge", "Case management", "Omnichannel routing", "IT service", "HR service"],
    showcaseKicker: "The service console",
    showcaseTitle: "Pick up a case. See how it gets resolved.",
    capabilities: [
      { title: "Agents for every role", tag: "AI across service", body: "AI agents for customers, service reps, supervisors, field teams and employees. Customers get instant answers around the clock, reps get context and next steps, and supervisors get a live view of the team.", details: ["Customers", "Reps", "Supervisors", "Field teams", "Employees"] },
      { title: "Customer service", tag: "Self-service and cases", body: "Personalised self-service at any hour, with cases, incidents, knowledge and assets centralised so teams reach an answer faster. Knowledge gaps show up from real conversations.", details: ["Self-service", "Cases", "Knowledge", "Incidents"] },
      { title: "Contact center", tag: "Every channel", body: "All channels live on one omnichannel platform. Routing sends each piece of work to the right queue or agent by skill and availability, and cloud telephony connects to CRM so calls resolve quicker.", details: ["Phone", "Chat", "Email", "Social", "Messaging"] },
      { title: "Field service", tag: "Proactive on-site", body: "End-to-end tools for frontline productivity, asset lifecycle management that unifies customer and asset data, and visual remote assistance that lifts first-time fix rates.", details: ["Dispatch", "Assets", "Remote assist"] },
      { title: "Employee service", tag: "IT and HR", body: "Conversational, data-driven IT and HR support on the same platform, plus Service Cloud in Slack, where reps, experts and agents swarm the hard cases.", details: ["IT service", "HR service", "Slack"] },
      { title: "Built for industries", tag: "Where service differs", body: "Financial services scale service with agentic AI, manufacturers serve customers, partners and distributors consistently, and the public sector moves case volume to self-service and digital channels.", details: ["Financial services", "Manufacturing", "Public sector"] },
    ],
    proofTitle: "What resolution looks like in numbers.",
    stats: [
      { value: 396, suffix: "%", label: "three-year ROI in a study of Salesforce AI agents", source: "Forrester TEI" },
      { value: 50, suffix: "%", label: "faster resolution of fans' race-day issues at Formula 1", source: "Customer story" },
      { value: 76, suffix: "%", label: "average resolution rate for Fin from Salesforce", source: "Salesforce" },
      { value: 57, suffix: "%", label: "of field service leaders say AI is driving higher revenue", source: "State of Field Service" },
    ],
    flowTitle: "One request, one connected path",
    flow: [
      { title: "A customer asks", body: "Through self-service or any channel the contact center covers, at whatever hour they need an answer." },
      { title: "It is routed", body: "Omnichannel routing assigns the work by skill, workload and availability, or hands it to an AI agent." },
      { title: "Context arrives with it", body: "The case, the knowledge article and the asset history are already in one console, so nobody asks the customer to repeat themselves." },
      { title: "It gets resolved", body: "An agent resolves what it can and gives a rep the next best step when a person is better placed. The outcome feeds the knowledge base." },
    ],
    scenariosTitle: "Where it earns its keep",
    scenarios: [
      { tag: "High volume", title: "Thousands of inquiries a day", body: "Organisations handling thousands of daily inquiries cut backlogs and resolution times with routing, knowledge and automation." },
      { tag: "Omnichannel", title: "Instagram DMs, order emails and return calls, in one console", body: "A retail brand manages every channel in a single workspace, with the full customer history beside each message." },
      { tag: "Self-service", title: "Password resets and data checks without a rep", body: "A telecom company hands routine requests to AI agents, so people spend their time on the cases that need them." },
      { tag: "Field service", title: "Dispatch, work orders and parts", body: "An appliance repair company dispatches technicians, manages work orders and tracks parts inventory from one platform." },
      { tag: "Proactive", title: "Alert customers before they call", body: "Spot an emerging problem affecting many customers and tell them first, which turns a spike of contacts into a non-event." },
    ],
    faqs: [
      { q: "What is customer service software?", a: "A solution that manages service interactions across channels: case management, digital engagement, knowledge management and collaboration." },
      { q: "How is it different from a help desk?", a: "A help desk is one tool, focused on tracking issues, usually through tickets. Customer service software is the broader toolkit, which may include a help desk." },
      { q: "What is omnichannel routing?", a: "It sends calls, chats, emails and social messages to the right agent or queue based on skills and availability, so work reaches the best-placed person quickly." },
      { q: "What is knowledge management?", a: "Capturing, organising and sharing support information in one library that agents, technicians and customers can all reach." },
      { q: "What is incident management?", a: "A structured process for responding to, and resolving, issues that disrupt a service." },
      { q: "How do I choose a solution?", a: "Weigh your needs, scalability, ease of use, integrations and the features that matter most (case management, self-service, automation and AI), then try it before you commit." },
    ],
  },

  /* ============================================================ Marketing */
  {
    slug: "marketing-cloud",
    name: "Marketing Cloud",
    blurb: "Agents that plan, create and optimise campaigns.",
    accent: "#ffab4d",
    visual: "journey",
    headline: ["Every marketer,", "multiplied."],
    lede: "Marketing Cloud gives every marketer AI agents that run self-improving campaigns, shape how the brand shows up in AI answers, and turn buying signals into revenue.",
    statement:
      "Customers now discover and decide inside AI answers, and the old, tidy path to purchase is gone. Marketing has to be built for that: context in real time, content made for people and agents alike, and campaigns that steer themselves toward a goal.",
    marquee: ["Campaign Agent", "Personalisation", "Journeys", "Segments", "Content", "Conversations", "Paid media", "Loyalty"],
    showcaseKicker: "The journey map",
    showcaseTitle: "Follow a campaign from goal to growth.",
    capabilities: [
      { title: "Context", tag: "Real-time profile", body: "A live customer profile, plus visibility into how the brand appears in AI discovery, shared by the people and the agents making decisions.", details: ["Unified profile", "AI discovery"] },
      { title: "Segments", tag: "Describe your audience", body: "Describe the audience in plain language and an agent turns it into segment attributes across unified data. No SQL required, and segments can feed journeys directly.", details: ["Plain language", "Data 360"] },
      { title: "Content", tag: "Made once, used everywhere", body: "Content is created once, structured for readers and for AI agents alike, and delivered everywhere while staying on brand.", details: ["On brand", "Channel-ready"] },
      { title: "Campaigns", tag: "Campaign Agent", body: "Set the goal and Campaign Agent keeps working toward it: building the brief, the audiences, the journeys and the content, and assembling the right experience for each customer.", details: ["Brief", "Audience", "Journey", "Content"] },
      { title: "Conversations", tag: "Two-way engagement", body: "Messages become conversations across email, SMS and the web, with agents adapting to what each customer says in the moment instead of broadcasting.", details: ["Email", "SMS", "Web"] },
      { title: "Optimise and retain", tag: "Spend and loyalty", body: "Agents monitor performance, can pause underperforming paid media against thresholds you set, and generate loyalty promotions and offers from a simple prompt.", details: ["Paid media", "Loyalty", "Analytics"] },
    ],
    proofTitle: "What marketers report.",
    stats: [
      { value: 32, suffix: "%", label: "increase in overall marketing ROI", source: "Salesforce Customer Success Metrics" },
      { value: 34, suffix: "%", label: "increase in customer lifetime value", source: "Salesforce Customer Success Metrics" },
      { value: 32, suffix: "%", label: "increase in customer engagement", source: "Salesforce Customer Success Metrics" },
      { value: 27, suffix: "%", label: "decrease in the cost to acquire new customers", source: "Salesforce Customer Success Metrics" },
    ],
    flowTitle: "From a goal to a growing relationship",
    flow: [
      { title: "Set the strategy", body: "Marketers define the goal and the guardrails, for example winning back at-risk customers." },
      { title: "Agents build", body: "Agents assemble the brief, the recommended audiences, the journeys and the on-brand content." },
      { title: "Customers converse", body: "Messages are personalised and become two-way conversations that adapt as customers reply." },
      { title: "It optimises itself", body: "Agents watch performance and adjust journeys and spend as they go, handing work between teams and channels." },
    ],
    scenariosTitle: "What it looks like in use",
    scenarios: [
      { tag: "Audiences", title: "Ask for a segment in plain language", body: "Describe who you want to reach and the segment is built across unified data, ready to drop straight into a journey." },
      { tag: "Insight", title: "Ask a question about performance, in Slack", body: "Marketers ask natural-language questions about campaign and performance data, including from inside Slack." },
      { tag: "Web", title: "Personalise the page in real time", body: "Web experiences and content adapt to the visitor, created at a scale a manual team could not match." },
      { tag: "Paid media", title: "Pause what is not working", body: "Set thresholds and let agents pause underperforming ads automatically, then put the budget behind what is." },
      { tag: "Retention", title: "Generate an offer from a prompt", body: "Create loyalty promotions and offers from a simple instruction, then watch the results by channel and audience." },
    ],
    faqs: [
      { q: "What is Marketing Cloud Next?", a: "Salesforce's marketing solution for the agentic enterprise: AI agents help plan, create, optimise and orchestrate customer experiences across channels." },
      { q: "What is agentic marketing?", a: "Marketers set the strategy, for example winning back at-risk customers, and agents handle content, audiences, personalisation, optimisation and hand-offs." },
      { q: "How do the Marketing Cloud products relate?", a: "Marketing Cloud is the overall brand and Marketing Cloud Next is the flagship. Customers of Account Engagement+ (formerly Pardot) and Marketing Cloud Engagement (formerly ExactTarget) can add Next capabilities without switching platforms." },
      { q: "Where do segments come from?", a: "Segments are built on Data 360, so marketers filter unified customer data into an audience, or describe it in plain language and let an agent build it." },
      { q: "How does it connect to other tools?", a: "It is built natively on the Salesforce platform and connects to other tools through pre-built connectors and APIs." },
    ],
  },

  /* ============================================================= Data 360 */
  {
    slug: "data-360",
    name: "Data 360",
    blurb: "Trusted context for every human and agent.",
    accent: "#35d3ee",
    visual: "graph",
    headline: ["One customer.", "Every system."],
    lede: "Access to data is not enough. Data 360 turns enterprise data into business context, so people and AI agents understand the customer and the outcome that matters. It is the new name for Data Cloud.",
    statement:
      "Sales sees one customer, service another, marketing a third. Data 360 gathers what every system knows into a single, trusted profile, and gives the agents and teams around it the context to act with confidence.",
    marquee: ["Unified profiles", "Zero copy", "200+ connectors", "Identity resolution", "Context engine", "Segments", "Insights", "Open platform"],
    showcaseKicker: "The data flow",
    showcaseTitle: "From scattered systems to shared context.",
    capabilities: [
      { group: "In", title: "Connect", tag: "200+ connectors", body: "Pre-built connectors reach Salesforce clouds, MuleSoft, databases and popular apps, with zero-copy access to Snowflake, Databricks, BigQuery and Redshift.", details: ["Snowflake", "Databricks", "BigQuery", "Redshift", "S3"] },
      { group: "In", title: "Federate", tag: "Zero copy", body: "Data 360 queries external sources live, processes the result in memory and discards it. Nothing is duplicated, and each stream can be ingested, queried live or cached.", details: ["Live query", "Cached acceleration"] },
      { group: "Core", title: "Unify", tag: "Identity resolution", body: "Sales, service, marketing and web interactions resolve into one customer profile, ready for personalised journeys and for AI agents.", details: ["Unified profiles", "Identity resolution"] },
      { group: "Core", title: "Understand", tag: "Agent Context Engine", body: "Structured records and unstructured files become structured context, grounding agents in trusted facts, reducing hallucination and lowering processing cost.", details: ["Grounding", "Agent memory"] },
      { group: "Out", title: "Activate", tag: "Segments and insights", body: "Insights such as propensity to buy, lifetime value and engagement score drive segments, journeys and agents consistently across every Salesforce app.", details: ["Segments", "Journeys", "Insights"] },
      { group: "Out", title: "Share back", tag: "Open, governed", body: "Unified segments and insights flow back out to warehouses and any agent, app or surface, under governance policies defined once, centrally.", details: ["Headless", "Governance"] },
    ],
    proofTitle: "Scale, in Salesforce's own numbers.",
    stats: [
      { value: 200, suffix: "+", label: "pre-built connectors to Salesforce clouds, MuleSoft, databases and popular apps", source: "Salesforce" },
      { value: 11, suffix: "T+", label: "records processed from external sources through zero copy in 11 months", source: "Salesforce, vendor-reported" },
      { value: 2, label: "years running as a Gartner Leader in Customer Data Platforms", source: "Gartner" },
      { value: 4, label: "pillars: unified profiles, personalised journeys, agent-ready data, identity resolution", source: "Salesforce" },
    ],
    flowTitle: "From scattered records to shared context",
    flow: [
      { title: "Connect", body: "Bring in Salesforce apps, cloud storage, MuleSoft and databases, with zero-copy access to Snowflake and Databricks." },
      { title: "Unify", body: "Identity resolution stitches the fragments into one customer profile that teams and agents share." },
      { title: "Understand", body: "The Agent Context Engine turns records and files into grounded, structured context." },
      { title: "Activate", body: "Insights drive segments, journeys and agents anywhere, and flow back to the warehouse when you want them there." },
    ],
    scenariosTitle: "What teams build on it",
    scenarios: [
      { tag: "Agents", title: "Recommendations that use warehouse data", body: "Join near-real-time Sales or Service Cloud data with data in your warehouse, so an agent's advice reflects the whole customer." },
      { tag: "Enrichment", title: "A richer customer 360", body: "Add third-party firmographic or contact data without copying it, from partners such as Dun & Bradstreet, Moody's and ZoomInfo." },
      { tag: "Analytics", title: "Send unified segments back to Snowflake", body: "Warehouse teams read segments and AI insights from Data 360 in real time, with no outbound ETL." },
      { tag: "Performance", title: "Cache what is queried constantly", body: "Choose per stream: ingest, query live, or add cached acceleration for tables that are heavily used." },
      { tag: "Multi-org", title: "One view across connected orgs", body: "Use federated data across connected Salesforce orgs through Data 360 One." },
    ],
    faqs: [
      { q: "What is Data 360?", a: "The real-time data engine that unifies data from many sources into a single customer profile using a zero-copy architecture. It is the data foundation for Agentforce." },
      { q: "What is the difference between Data Cloud and Data 360?", a: "Data 360 is the new official name for Data Cloud." },
      { q: "What is zero copy?", a: "A way to use data where it already lives. Data 360 queries an external source through a live connection, processes the result in memory and discards it, so nothing is duplicated." },
      { q: "What data sources can it use?", a: "Salesforce apps, third-party storage such as Amazon S3 and Google Cloud Storage, zero-copy access to Snowflake, Databricks, BigQuery and Redshift, and other sources through SDKs and APIs." },
      { q: "What insights can it unlock?", a: "Measures such as propensity to buy, customer lifetime value and engagement scores, built with custom models or a low-code insights builder." },
      { q: "How is it different from other data platforms?", a: "It is built to act on data inside the Salesforce applications people use every day, and it is natively integrated with the Salesforce metadata framework." },
    ],
  },

  /* ============================================================ Agentforce */
  {
    slug: "agentforce",
    name: "Agentforce",
    blurb: "The agent platform for 24/7 autonomous work.",
    accent: "#a48bff",
    visual: "agent",
    headline: ["Agents that", "actually work."],
    lede: "Agentforce is the AI agent platform that delivers autonomous support around the clock, at enterprise scale, grounded in your own business data and bound by your guardrails.",
    statement:
      "An agent is not a chatbot with a longer script. It understands the request, reasons about the steps, acts inside your systems, and brings a person in when judgment is needed. Agentforce is the platform for building and running them with confidence.",
    marquee: ["Agent Builder", "Agent Script", "Voice", "Observability", "MCP", "Orchestration", "Atlas reasoning", "Trust layer"],
    showcaseKicker: "The agent run",
    showcaseTitle: "Watch an agent think, act and hand off.",
    capabilities: [
      { title: "Trigger", tag: "Input or event", body: "An agent starts from a user message or from a business event, such as a case changing status or an email arriving. It does not have to wait to be asked.", details: ["Message", "Case update", "Email"] },
      { title: "Subagent", tag: "Scoped to the job", body: "The request is matched to a subagent that carries its own instructions, policies and allowed actions, which lets one platform scale to thousands of actions without losing focus.", details: ["Instructions", "Policies", "Actions"] },
      { title: "Reason, act, observe", tag: "Atlas Reasoning Engine", body: "The engine reasons about the next step, takes an action, reviews the result and repeats until the goal is met, breaking a request into smaller tasks and building a plan.", details: ["Plan", "Act", "Review"] },
      { title: "Retrieve", tag: "Grounded in your data", body: "Agents pull what they need through retrieval over Data 360, web search, knowledge answers, or calls to Flows, APIs and Apex, so answers rest on trusted facts.", details: ["Data 360", "Knowledge", "Flows", "APIs"] },
      { title: "Trust layer", tag: "Guardrails on", body: "Toxicity detection, zero data retention, prompt-injection defence and rules that limit drift. Admins set guardrails in natural language and can require human approval for specific actions.", details: ["Zero retention", "PII", "Approval"] },
      { title: "Hand off and improve", tag: "People in the loop", body: "A transfer-to-human action covers the cases where judgment matters. Observability tracks behaviour, and Agent Optimizer finds bottlenecks and recommends tuning.", details: ["Handoff", "Observability", "Optimizer"] },
    ],
    proofTitle: "Agents in the field.",
    stats: [
      { value: 18, suffix: "K+", label: "companies already run on Agentforce", source: "Salesforce" },
      { value: 24, suffix: "/7", label: "autonomous support, around the clock", source: "Salesforce" },
      { value: 70, suffix: "%", label: "of chat engagements resolved autonomously at 1-800Accountant during tax season, an early result", source: "Salesforce, early result" },
      { value: 5, label: "new ways to put agents to work: purpose-built agents, long-horizon runtime, Agent Optimizer, AI skills and multi-agent orchestration", source: "Salesforce" },
    ],
    flowTitle: "How an agent gets work done",
    flow: [
      { title: "Build", body: "Define the agent, its subagents, instructions and actions in Agent Builder, with Agent Script where precision matters." },
      { title: "Ground", body: "Connect it to CRM and Data 360, so every answer and action rests on trusted business data." },
      { title: "Reason", body: "The Atlas Reasoning Engine breaks a request into smaller tasks, checks each step and builds a plan until the job is done." },
      { title: "Operate", body: "Observability and the Agent Optimizer keep it measured and improving, and people step in whenever judgment is needed." },
    ],
    scenariosTitle: "Agents for the work in front of you",
    scenarios: [
      { tag: "Customer service", title: "Always-on support", body: "Answers questions and works cases, orders and troubleshooting at any hour." },
      { tag: "Employee support", title: "Answers and routine tasks", body: "Task-specific agents answer employees' questions and automate the routine requests, such as processing leave." },
      { tag: "Appointments", title: "Book, follow up, reschedule", body: "Schedules appointments, sends reminders and handles changes without a human in the loop." },
      { tag: "Sales development", title: "Questions, objections, meetings", body: "Answers product questions, handles objections and books the meeting, nurturing pipeline between human touches." },
      { tag: "Shopping", title: "Personalised recommendations", body: "Recommends products and helps shoppers decide, grounded in what the business knows about them." },
      { tag: "Events", title: "Sessions, logistics, surveys", body: "Runs event communications, books sessions, handles logistics and gathers feedback afterwards." },
    ],
    faqs: [
      { q: "What is an AI agent?", a: "An autonomous, proactive application that uses large language models to understand context, reason about next steps and execute tasks within guardrails, escalating complex issues to people." },
      { q: "How does Agentforce work?", a: "It uses the Atlas Reasoning Engine to break a request into smaller tasks, evaluate each step and build a plan until the work is complete, retrieving trusted data as it goes." },
      { q: "How do you keep agents safe?", a: "Through the Einstein Trust Layer (toxicity detection, zero data retention, prompt-injection defence), guardrails admins write in natural language, visible reasoning, and a transfer-to-human action for sensitive cases." },
      { q: "How do you build agents?", a: "With Agent Builder, a low-code environment on the Salesforce Platform: define subagents, instructions and actions, ground prompts in enterprise data, and test and observe behaviour." },
      { q: "What types of agents are there?", a: "Service, sales development, sales coach, merchandiser, buyer agent, personal shopper and campaign optimiser, plus an employee-facing assistant." },
      { q: "How much does it cost?", a: "You can start for free with Salesforce Foundations. Paid options include Flex Credits, per-resolution pricing and per-user licensing." },
    ],
  },

  /* ============================================================== Loyalty */
  {
    slug: "loyalty-management",
    name: "Loyalty Management",
    blurb: "Programs, offers and referrals that build lifetime value.",
    accent: "#ff7a59",
    visual: "loyalty",
    headline: ["Loyalty that", "pays you back."],
    lede: "Build loyalty and incentive programs that create tailored offers, engage customers in real time across channels, and keep adapting to drive repeat purchases.",
    statement:
      "A punch card is a transaction. A programme built on what customers do, want and are likely to do next is a relationship. Loyalty Management ties points, tiers, offers and referrals to the same customer data as the rest of the business.",
    marquee: ["Points", "Tiers", "Rewards", "Offers", "Referrals", "Gamification", "Partners", "Next best offer"],
    showcaseKicker: "The rewards wallet",
    showcaseTitle: "Everything a programme is made of.",
    capabilities: [
      { title: "Programs that retain", tag: "Points, tiers, rewards", body: "Design B2C and B2B programs with points, tiers and rewards using point-and-click tools, connected to CRM and marketing.", details: ["Points", "Tiers", "Rewards"] },
      { title: "Offers that adapt", tag: "Real-time signals", body: "Personalised promotions across channels, shaped by signals like browsing behaviour and purchase history, and orchestrated from set-up to analytics with guided wizards.", details: ["Promotions", "Channels", "Analytics"] },
      { title: "Referrals that grow", tag: "Advocates and partners", body: "Structured referral programs for customers and channel partners, with clear incentives, automated workflows and visibility into new business.", details: ["B2C", "B2B", "Channel partners"] },
      { title: "Proactive engagement", tag: "Before they drift", body: "Act on data from marketing, sales, service, commerce and partners; use industry templates, predict disengagement risk and trigger journeys automatically.", details: ["Templates", "Risk prediction", "Journeys"] },
      { title: "One platform, many programs", tag: "B2B and B2C", body: "Run multiple programs across brands and partners, including channel rewards and volume rebates, with tiering, gamification, clubs and redemption rules.", details: ["Rebates", "Gamification", "Clubs"] },
      { title: "Intelligence built in", tag: "Agentforce and analytics", body: "Agentforce streamlines program creation and surfaces next-best-offer recommendations, while built-in attribution and promotion analytics show results by offer, channel and audience.", details: ["Next best offer", "Attribution"] },
    ],
    proofTitle: "What one platform covers.",
    stats: [
      { value: 3, label: "connected capabilities on one platform: loyalty, offers and referrals", source: "Salesforce" },
      { value: 2, label: "audiences, one platform: B2C and B2B programs", source: "Salesforce" },
      { value: 5, label: "program styles: points, tiers, cash-back, punch cards and hybrids", source: "Salesforce" },
    ],
    flowTitle: "From a program to a habit",
    flow: [
      { title: "Design", body: "Shape the program with point-and-click tools: currencies, tiers, rewards and redemption rules, including points-free and cash-back models." },
      { title: "Personalise", body: "Offers adapt to intent, preferred channel and behaviour, with content tailored to each channel." },
      { title: "Activate", body: "Loyalty events trigger journeys and flows in marketing in real time, and referrals turn advocates into growth." },
      { title: "Measure", body: "Attribution, promotion analytics and predictive dashboards show what each offer, channel and audience earns." },
    ],
    scenariosTitle: "Programmes it can run",
    scenarios: [
      { tag: "Points and tiers", title: "A classic, done properly", body: "Points that build into tiers, with rewards and redemption rules shaped to the brand and tied to the customer's real history." },
      { tag: "Cash-back", title: "No points at all", body: "Rewards in custom currencies, such as dollars, percentages or vouchers, credited to a wallet or applied at checkout." },
      { tag: "Beyond purchase", title: "Reward what customers do", body: "Referrals, reviews and app activity can earn rewards too, not only spending." },
      { tag: "Channel partners", title: "Volume rebates and partner rewards", body: "B2B programs for channel partners, with tiering and rebates managed on the same platform as consumer ones." },
      { tag: "With Agentforce", title: "Create a promotion by asking", body: "Marketing managers create and update promotions from templates, and customers check their eligibility in self-service." },
    ],
    faqs: [
      { q: "What is loyalty management software?", a: "Software for designing, configuring, running and analysing omnichannel loyalty programs, to build lasting customer relationships." },
      { q: "Is it the same as CRM?", a: "No. It is built on the Salesforce Platform, so it connects to CRM and gives a single view of each member." },
      { q: "What program types can I build?", a: "Points, tiers, spend-based cash-back, visit or punch cards and hybrids. Actions beyond purchase, like referrals, reviews and app activity, can be rewarded too." },
      { q: "Can it run without points?", a: "Yes. Rewards can use custom currencies such as dollars, percentages or vouchers, credited to a wallet or applied at checkout." },
      { q: "How does it work with marketing?", a: "Loyalty events can trigger journeys in Marketing Cloud in real time, member data can power email and SMS, and Data 360 can add behavioural signals." },
    ],
  },
];

export const cloudBySlug = (slug: string) => clouds.find((c) => c.slug === slug);

export const cloudHref = (slug: CloudSlug) => `/services/salesforce/${slug}`;

/** "#3da5ff" -> "61,165,255", for building translucent tints from one accent. */
export function rgbOf(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}
