import type { ProductContent } from "../content-types";

// Odoo AI. Every statement below comes from Odoo's own AI page, its documentation for the AI app (overview, agents, server
// actions and the MCP server), its pricing page and its Odoo 20 release notes, read in November 2026. Where Odoo's pages
// say nothing (the models used, a data privacy position, bring-your-own keys) this page says so instead of filling the gap.
// The "reported results" on Odoo's AI page (time saved, accuracy) have been left out.

export const ai: ProductContent = {
  slug: "ai",
  crumb: "Odoo AI",
  eyebrow: "Odoo AI",
  title: ["AI agents that work inside your apps,", "with the limits you set."],
  lede: "Odoo AI puts agents and AI tools inside the apps your team already uses. An agent understands a plain request, reads the information it has been given, and can act through the tools you allow. This page sets out what Odoo says it does, how it is controlled, and what Odoo's own pages leave unsaid.",
  primary: { label: "See what it does", href: "#explore" },
  secondary: { label: "Credits and limits", href: "#paid" },
  note: "Odoo's pages describe AI agents, AI fields, AI in email, voice transcription, image generation and AI in Live Chat. They do not name the models behind them.",
  hero: {
    app: "AI · Agent",
    icon: "ai",
    label: "Illustration of an AI agent set-up with a purpose, two skills and two knowledge sources, and a conversation with the agent. Sample data.",
    rows: {
      title: "Agent: support assistant",
      items: [
        { a: "Skill", b: "Answer questions", pill: { t: "On", tone: "ok" } },
        { a: "Skill", b: "Create leads", pill: { t: "On", tone: "ok" } },
        { a: "Source", b: "Knowledge articles", pill: { t: "Active", tone: "in" } },
        { a: "Restrict to sources", pill: { t: "Yes", tone: "ok" } },
      ],
    },
    chat: { title: "Ask the agent", msgs: [{ who: "u", t: "What is our returns policy?" }, { who: "a", t: "From the returns article in Knowledge: items can be returned within the period it describes." }] },
  },
  heroCaption: "Illustration of an agent set-up, simplified. Sample data.",

  does: {
    eyebrow: "What it is",
    title: "AI where the work already is.",
    lede: "Odoo's own description is of an AI layer across its apps, not a separate product bolted on. Agents sit at the centre of it, with a handful of AI tools around them.",
    items: [
      { title: "Agents with a defined job", body: "An agent has a system prompt that sets its purpose and behaviour, skills that give it instructions and tools, and sources it can draw on." },
      { title: "It can only do what its skills allow", body: "Odoo's documentation says an agent with no skills can only provide information: it cannot complete tasks or change the database." },
      { title: "Anywhere in the database", body: "Open it from the AI icon at the top of the screen, or press Ctrl and K for the command palette." },
      { title: "AI inside automation", body: "AI server actions let AI choose which tool to run during a workflow, and agents can be triggered by automated and scheduled actions." },
      { title: "Tools for everyday text and speech", body: "AI fields fill values from the current record, AI helps write email templates, voice recordings are transcribed and summarised, and images can be generated from a prompt." },
      { title: "Open to outside agents", body: "An external AI agent can connect to an Odoo database through Odoo's MCP server, to read or change data through the tools you expose." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Six parts of Odoo AI, up close.",
    lede: "Pick a part to see what it covers and how its screen might look.",
    tabs: [
      {
        id: "agents",
        label: "Agents",
        icon: "ai",
        title: "A virtual assistant with a role, skills and sources",
        tagline: "Configured, not improvised.",
        points: [
          "Each agent has a system prompt, which Odoo calls its mission statement: its role, purpose and behaviour.",
          "Skills hold instructions and tools. Odoo ships preconfigured skills including View Builder, Information retrieval, Update Records, Create Records, Generate Images, Web Search, Website Builder and Create Leads.",
          "Tools are the actual functions an agent can perform, such as creating a lead or opening a view; the tools available depend on the apps installed.",
          "Sources are the information the agent can use: PDFs, weblinks, documents from the Documents app and Knowledge articles.",
          "Turn on Restrict to Sources and the agent can only use information from the active sources you uploaded.",
          "Creating and customising agents needs the AI app installed, though many AI features work without it.",
        ],
        look: { title: "Permissions as skills", body: "What an agent may change is decided by the skills you give it. Give it none and it can only answer; give it Update Records and it can edit." },
        screen: {
          app: "AI · Agent set-up",
          icon: "ai",
          label: "Illustration of an agent with its system prompt summary, skills and sources. Sample data.",
          rows: { title: "Skills", items: [{ a: "Information retrieval", pill: { t: "On", tone: "ok" } }, { a: "Update Records", pill: { t: "Off", tone: "nt" } }, { a: "Create Leads", pill: { t: "On", tone: "ok" } }] },
          steps: { title: "Sources", items: [{ t: "Knowledge article: returns", state: "done" }, { t: "PDF: product guide", state: "done" }, { t: "Restricted to sources", state: "now" }] },
        },
      },
      {
        id: "automation",
        label: "Automation",
        icon: "ai",
        title: "A manager that decides, and workers that do",
        tagline: "AI inside workflows that cannot be fully written as rules.",
        points: [
          "An AI server action acts as the manager: it reads the record, interprets the prompt and decides which tool to call and with what arguments.",
          "The tools are the workers: standard server actions marked for use in AI, which carry the logic that changes records.",
          "Odoo's documentation says the server action does not enforce business rules or guarantee correctness; tools must enforce rules explicitly in code.",
          "A tool the AI calls runs unconditionally unless its own code prevents it.",
          "Agents can also be triggered by automated and scheduled actions.",
          "Some behaviour, such as moving a document to a folder, needs no custom logic because it already exists in Odoo.",
        ],
        look: { title: "Rules live in the tool", body: "The AI chooses which tool to run. Whether it is allowed to is decided by the tool's own code, so that is where your guardrails belong." },
        screen: {
          app: "AI · Server action",
          icon: "ai",
          label: "Illustration of a workflow where a record triggers an AI server action, which picks one of several tools. Sample data.",
          steps: { title: "Workflow", items: [{ t: "Record triggers the action", state: "done" }, { t: "AI reads the record and prompt", state: "done" }, { t: "AI selects a tool", state: "now" }, { t: "Tool runs its code" }] },
        },
      },
      {
        id: "fields",
        label: "Fields and email",
        icon: "ai",
        title: "Values and drafts from the record in front of you",
        tagline: "Less typing, drawn from what is already there.",
        points: [
          "AI fields generate field values from information on the current record.",
          "AI in email templates generates personalised email content from the current record.",
          "A chatter assistant and web page content tools are listed on Odoo's AI page, alongside email templates and Live Chat.",
          "In Odoo 20, the accounting assistant can answer questions about the company's finances using only the accounting data in the database.",
          "Odoo's AI page lists use cases such as assigning a task to the right expert, sorting documents into folders and answering questions about sales figures.",
        ],
        look: { title: "From this record", body: "The draft or the field value is built from the record you are looking at, so it already knows who the customer is and what they bought." },
        screen: {
          app: "AI · Email template",
          icon: "ai",
          label: "Illustration of an email template with a draft generated from a customer record. Sample data.",
          chat: { title: "Draft from record", msgs: [{ who: "u", t: "Write a follow-up for this order." }, { who: "a", t: "Here is a short follow-up that mentions the order and the delivery date." }] },
        },
      },
      {
        id: "voice",
        label: "Voice",
        icon: "discuss",
        title: "Recordings turned into text and summaries",
        tagline: "Transcribe the conversation, keep the decision.",
        points: [
          "AI voice transcription transcribes recorded conversations and generates summaries.",
          "In Discuss, AI can record and transcribe meetings from the sidebar, capturing audio, video and screen shares.",
          "In VoIP, Odoo's AI stores the recording, a transcript and a one-line summary on the record after a call is logged.",
          "Results appear where the conversation happened, such as the chat or the customer record.",
        ],
        look: { title: "A summary on the record", body: "After a call, the customer's record carries the recording, the text and a one-line summary, so the next person starts informed." },
        screen: {
          app: "AI · Transcription",
          icon: "discuss",
          label: "Illustration of a transcript with a one-line summary above it. Sample data.",
          chat: { title: "Summary", msgs: [{ who: "a", t: "The customer asked about delivery dates and agreed to a Friday follow-up." }] },
          rows: { title: "Attached to", items: [{ a: "Customer record", pill: { t: "Saved", tone: "ok" } }] },
        },
      },
      {
        id: "live-chat",
        label: "Live Chat",
        icon: "live-chat",
        title: "An agent that answers visitors and qualifies them",
        tagline: "From a first question to a lead in your CRM.",
        points: [
          "Odoo's documentation says an AI agent can respond to visitors, qualify conversations and create leads in Live Chat.",
          "The Create Leads skill is available only if the CRM app is installed.",
          "Odoo's Live Chat page also describes a chatbot that answers questions and creates Helpdesk tickets around the clock.",
          "Pair it with Knowledge articles as sources, and with Restrict to Sources, so it answers from your own material.",
        ],
        look: { title: "A question that becomes a lead", body: "The agent answers from your sources, asks what it needs to qualify the visitor, and creates the lead for a person to follow up." },
        screen: {
          app: "AI · Live Chat",
          icon: "live-chat",
          label: "Illustration of a live chat in which an agent qualifies a visitor and creates a lead. Sample data.",
          chat: { title: "Website visitor", msgs: [{ who: "u", t: "Do you support multi-company set-ups?" }, { who: "a", t: "Yes. May I take your company name so a colleague can follow up?" }] },
          rows: { title: "Created", items: [{ a: "Lead", b: "From chat", pill: { t: "New", tone: "in" } }] },
        },
      },
      {
        id: "mcp",
        label: "Connect other agents",
        icon: "ai",
        title: "Your own AI tools, working on your Odoo data",
        tagline: "Odoo as an MCP server.",
        points: [
          "Model Context Protocol is an open standard that lets language models interact with external applications and their data.",
          "An Odoo database can act as an MCP server, so an external agent can read or change records through the tools you expose.",
          "Odoo's documentation names Claude Code, Antigravity and Codex as examples of MCP-compatible agents.",
          "Authenticate with OAuth, which Odoo recommends, or with an API key; expose server actions to the client, and revoke access for any you no longer want.",
          "Odoo 20's release notes list connecting to your database through MCP as new.",
        ],
        look: { title: "You choose what is exposed", body: "The outside agent sees only the tools you expose from the database, and you can revoke its access when you no longer want it." },
        screen: {
          app: "AI · MCP connection",
          icon: "ai",
          label: "Illustration of an external client connected to an Odoo database through a list of exposed tools. Sample data.",
          steps: { title: "Connection", items: [{ t: "Authenticate with OAuth", state: "done" }, { t: "Tools exposed", state: "done" }, { t: "Client connected", state: "now" }, { t: "Access revocable" }] },
          rows: { title: "Exposed tools", items: [{ a: "Read records", pill: { t: "On", tone: "ok" } }, { a: "Create lead", pill: { t: "On", tone: "ok" } }, { a: "Edit records", pill: { t: "Off", tone: "nt" } }] },
        },
      },
    ],
  },

  blocks: [
    {
      kind: "pairs",
      id: "paid",
      eyebrow: "Credits, plans and what is unsaid",
      title: "What it costs, and what Odoo does not say.",
      lede: "Read these together before you budget for AI or put real data through it.",
      a: "Question",
      b: "What Odoo's pages say",
      rows: [
        { l: "Is the AI app free?", r: "Odoo's AI page says it is free as your first app, with unlimited users, and that you pay only if you install more applications." },
        { l: "Which plan do I need?", r: "Odoo's documentation warns that installing the AI app on the Standard plan automatically triggers an upsell to the Custom plan, and its pricing page lists Agentic AI with the Custom plan." },
        { l: "Do requests use credits?", r: "Yes. Odoo AI uses Odoo's in-app purchase service for requests, and usage consumes credits. Odoo 20's release notes say all AI features now need credits." },
        { l: "Which models run it?", r: "Odoo's pages do not name the models or providers behind its built-in AI services." },
        { l: "What about our data?", r: "Odoo's AI pages carry no data privacy statement of their own. Ask Odoo how data is handled before using AI on sensitive records." },
        { l: "Can we use our own AI keys?", r: "Odoo's documentation has an AI API keys page that was marked as under construction when we read it, so we do not describe bring-your-own-key use." },
      ],
      note: "Odoo's pricing and licensing change. Check the pricing page for the current position.",
      link: { label: "Odoo pricing", href: "https://www.odoo.com/pricing" },
    },
  ],

  scenario: {
    eyebrow: "A worked example",
    title: "An enquiry answered, qualified and routed.",
    lede: "One enquiry followed through the AI tools, from what Odoo's pages and documentation say each one does. It is an illustration, not a promise of any particular set-up.",
    steps: [
      { t: "Visitor asks", s: "A question arrives in Live Chat.", icon: "live-chat" },
      { t: "Agent answers", s: "It replies from the Knowledge articles you gave it as sources.", icon: "ai" },
      { t: "Lead created", s: "It qualifies the visitor and creates a lead in CRM.", icon: "crm" },
      { t: "Routed", s: "An AI server action assigns the lead to the right person.", icon: "ai" },
      { t: "Follow-up recorded", s: "The call is transcribed and summarised on the record.", icon: "voip" },
    ],
    note: "Illustrative. A real project decides which of these steps are allowed, what a person reviews, and how credits are budgeted.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "Different people, different controls.",
    lede: "Odoo's documentation describes these roles.",
    rows: [
      { who: "Administrators", does: "Create agents, write their system prompts, assign skills and sources, and decide whether to restrict them to those sources." },
      { who: "Developers", does: "Build the tools AI server actions and agents can call, and put the business rules in their code." },
      { who: "Everyday users", does: "Ask questions from anywhere in the database, attach files for context and let the agent open the right view." },
      { who: "Support and sales teams", does: "Receive leads and tickets created in chat, with the conversation attached." },
      { who: "Finance leaders", does: "Ask the accounting assistant for insights drawn only from the books in the database." },
      { who: "IT and security", does: "Decide which tools are exposed over MCP and revoke access to clients no longer needed." },
    ],
  },

  start: {
    eyebrow: "Starting out",
    title: "How to begin with AI, carefully.",
    lede: "Odoo describes agents in three steps. We add the questions we would settle first.",
    steps: [
      { title: "Create the agent", body: "Give it a name and a role: what it is for and how it should behave." },
      { title: "Configure it", body: "Write the system prompt, assign only the skills it needs, add sources, and decide on Restrict to Sources." },
      { title: "Use it in context", body: "Run it inside the app where the work happens, and check what it does before widening what it may change." },
    ],
    decide: {
      title: "Questions to settle first",
      items: [
        "What the agent may change. With no skills it can only answer; every skill widens what it can do.",
        "Which sources it may use, and whether it is restricted to them.",
        "Where the business rules live. AI server actions do not enforce them, so tools must.",
        "Who reviews its work, and how often.",
        "How credits will be bought and watched, and which plan you will be on.",
        "What Odoo says about how your data is handled, since its AI pages do not say.",
      ],
    },
  },

  fits: {
    eyebrow: "Connects to",
    title: "How it meets your other tools.",
    lede: "From the integrations Odoo's own pages and documentation name.",
    rows: [
      { name: "CRM, Website, Documents, Project and Sales", how: "Odoo's AI page names these apps as places the AI works, and the Create Leads skill needs CRM installed." },
      { name: "Knowledge and Documents", how: "Their articles and files can be sources for an agent, and Documents can be used to sort files with AI." },
      { name: "Live Chat and Discuss", how: "AI answers visitors in Live Chat, and the agent conversation can be opened in Discuss." },
      { name: "External AI agents", how: "Through the MCP server, with OAuth or an API key, for agents such as Claude Code, Antigravity and Codex." },
      { name: "In-app purchase", how: "AI requests use Odoo's in-app purchase service and its prepaid credits." },
    ],
  },

  faq: [
    { q: "Can an agent change my data?", a: "Only through the tools its skills give it. Odoo's documentation says an agent with no skills can provide information but cannot complete tasks or change the database." },
    { q: "Who enforces the rules when AI runs a workflow?", a: "Not the AI. Odoo's documentation says an AI server action only decides which tool to call, and that the tool, which runs unconditionally unless its code stops it, must enforce the business rules in code." },
    { q: "Can I use ChatGPT, Claude or another assistant with Odoo?", a: "Odoo's MCP server lets an external agent connect to your database. Its documentation names Claude Code, Antigravity and Codex as MCP-compatible examples, with OAuth recommended for authentication. We have not tested particular assistants." },
    { q: "Which AI models does Odoo use?", a: "Odoo's pages do not say. If that matters for your compliance, ask Odoo directly." },
    { q: "Does AI cost extra?", a: "Usage consumes in-app purchase credits, and Odoo's documentation says installing the AI app on the Standard plan triggers an upsell to the Custom plan. Odoo's AI page also says the app is free as a first app." },
    { q: "Is my data used to train models?", a: "Odoo's AI pages say nothing about that. We will not guess: ask Odoo for its position in writing before you use AI on sensitive records." },
  ],
  sources: [
    { label: "Odoo Artificial Intelligence", href: "https://www.odoo.com/app/artificial-intelligence" },
    { label: "Odoo AI (documentation)", href: "https://www.odoo.com/documentation/latest/applications/productivity/ai.html" },
    { label: "AI agents (documentation)", href: "https://www.odoo.com/documentation/latest/applications/productivity/ai/agents.html" },
    { label: "AI server actions (documentation)", href: "https://www.odoo.com/documentation/latest/applications/productivity/ai/server-actions.html" },
    { label: "AI MCP server (documentation)", href: "https://www.odoo.com/documentation/latest/applications/productivity/ai/mcp_server.html" },
    { label: "Odoo pricing", href: "https://www.odoo.com/pricing" },
    { label: "Odoo 20 release notes", href: "https://www.odoo.com/odoo-20-release-notes" },
  ],
  checked: "Checked against Odoo's own pages and documentation in November 2026.",
};
