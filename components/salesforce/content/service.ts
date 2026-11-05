import type { ProductContent } from "../content-types";

// Service Cloud. Sources: Salesforce's Service overview, its Customer Service Management page, and its Agentforce
// implementation guide (Salesforce Research, 2024). Read in November 2026. Salesforce's
// pages read did not cover entitlements, service-level agreements or incident and problem management, so those are
// left out.

export const service: ProductContent = {
  slug: "service-cloud",
  crumb: "Service Cloud",
  eyebrow: "Service Cloud",
  title: ["Cases, conversations and knowledge,", "with agents and people together."],
  lede: "Service Cloud is Salesforce's customer service and support product. It brings AI agents, human reps and customer data together across the customer journey: self-service, a contact centre, field work and internal IT and HR service.",
  primary: { label: "See what it covers", href: "#explore" },
  secondary: { label: "How to start", href: "#start" },
  note: "Salesforce's Service pages present Service Cloud with Agentforce supplying the AI agents.",
  hero: {
    app: "Service Cloud · Console",
    label: "Illustration of a service console: a case, a customer conversation, an AI-suggested reply and knowledge articles. Sample data.",
    tiles: [
      { h: "Open cases", k: "18", s: "Assigned to me" },
      { h: "Waiting on customer", k: "5", s: "Follow-up due", tone: "wr" },
    ],
    chat: {
      title: "Conversation",
      msgs: [
        { who: "u", t: "My order has not arrived." },
        { who: "a", t: "I can see the order and the carrier note. I'll check the status and update the case." },
      ],
    },
    rows: { title: "Suggested knowledge", items: [{ a: "Article: delayed deliveries", pill: { t: "Relevant", tone: "in" } }, { a: "Article: change a delivery address", pill: { t: "Relevant", tone: "in" } }] },
  },
  heroCaption: "Illustration of a service console, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Resolve the question, whoever, or whatever, answers it.",
    lede: "Customers ask through many channels and expect the same context every time. Service Cloud is built to hold that context and to share the work between agents and people.",
    items: [
      { title: "Case management", body: "Cases are managed centrally, in one place for the whole team." },
      { title: "A console for reps", body: "The Service Console combines customer context, cases, conversations and tools in one workspace, with AI help at each step." },
      { title: "Knowledge that learns", body: "Article recommendations, answers grounded in knowledge from several sources, and a feature that finds gaps and drafts new or updated articles." },
      { title: "Self-service", body: "A help centre and customer-facing agents let customers resolve things on their own." },
      { title: "A contact centre on one platform", body: "Voice and digital channels, with telephony integrations, in the same system as the CRM data." },
      { title: "Supervision", body: "A Command Center lets supervisors watch rep and AI conversations, performance and hand-offs in real time, and step in." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Four areas of Service Cloud, up close.",
    lede: "Pick an area to see what it covers.",
    tabs: [
      {
        id: "cases",
        label: "Cases and console",
        title: "Cases, conversations and one workspace",
        tagline: "What a rep sees when a customer gets in touch.",
        points: [
          "Service Rep Assistant gives step-by-step plans, Agentforce actions and real-time guidance across live messaging, voice and the case record.",
          "Service Replies are AI-drafted replies grounded in customer and organisation data.",
          "The console combines customer context, cases, conversations and tools.",
        ],
        look: { title: "The rep stays in charge", body: "Suggestions appear in the workspace and the rep decides what to send." },
        screen: {
          app: "Service Console · Case",
          label: "Illustration of a case with a conversation and an AI-suggested reply. Sample data.",
          chat: { title: "Conversation", msgs: [{ who: "u", t: "Can you change my delivery address?" }, { who: "a", t: "Suggested reply: Yes, I can update that. Please confirm the new address." }] },
          steps: { title: "Rep guidance", items: [{ t: "Verify customer", state: "done" }, { t: "Update address", state: "now" }, { t: "Confirm by message" }] },
        },
      },
      {
        id: "knowledge",
        label: "Knowledge",
        title: "Answers grounded in your knowledge",
        tagline: "For reps, and for the agents that serve customers.",
        points: [
          "Enterprise Knowledge grounds AI answers in knowledge from several sources, including external unstructured content, through Data 360.",
          "Article Recommendations suggest articles based on the current case and similar past ones.",
          "Self-Learning Knowledge looks at interactions to find knowledge gaps and drafts new or updated articles.",
        ],
        look: { title: "Good articles make good agents", body: "Salesforce's guide to building an agent says Q&A articles with clear titles and separate focus areas work best." },
        screen: {
          app: "Knowledge · Gaps",
          label: "Illustration of a list of suggested knowledge gaps with draft articles. Sample data.",
          rows: { title: "Suggested by self-learning knowledge", items: [{ a: "Gap: returns for sale items", pill: { t: "Draft ready", tone: "in" } }, { a: "Gap: delivery to a new address", pill: { t: "Draft ready", tone: "in" } }] },
        },
      },
      {
        id: "contact",
        label: "Contact centre",
        title: "Every channel, one platform",
        tagline: "Voice and digital engagement with the CRM data behind it.",
        points: [
          "Omnichannel contact centre on one platform, with telephony integrations.",
          "Salesforce names chat, email, WhatsApp, SMS, voice and Slack as channels.",
          "Supervisors use the Command Center to monitor conversations, performance and hand-offs between agents and reps.",
        ],
        look: { title: "Agent to person", body: "When an agent cannot finish, the conversation moves to a rep with its history, and supervisors can see the hand-off." },
        screen: {
          app: "Command Center · Live",
          label: "Illustration of a supervisor view of live conversations handled by agents and reps. Sample data.",
          tiles: [{ h: "Handled by agents", k: "Live", tone: "ap" }, { h: "With reps", k: "Live" }, { h: "Hand-offs", k: "Watching", tone: "wr" }],
          bars: { title: "Conversations by channel", rows: [["Chat", 70, "Index 70"], ["Email", 50, "Index 50", "g"], ["Voice", 30, "Index 30", "l"]] },
        },
      },
      {
        id: "agent",
        label: "AI agent",
        title: "How a service agent is built",
        tagline: "From Salesforce's own implementation guide.",
        points: [
          "An agent is made of topics, the jobs it can do, and actions, the tools it uses. A topic has a classification description, a scope and instructions.",
          "Standard topics and actions, such as getting or creating a case, can be extended with Flow, Apex and prompt templates.",
          "Builders test the agent in a planner canvas, which shows how it reasons, and adjust the topic's description, scope or instructions.",
          "Salesforce advises starting with a minimal set of instructions and building up as you test.",
        ],
        look: { title: "Business rules belong in actions", body: "The guide says logic specific to your business, such as whether a refund should be issued, should sit in an action built in a declarative way rather than rely on the language model to decide." },
        screen: {
          app: "Agent Builder · Topic",
          label: "Illustration of a service agent topic with a description, scope and actions. Sample data.",
          rows: { title: "Topic: Order management", items: [{ a: "Classification: order and delivery questions", pill: { t: "Set", tone: "ok" } }, { a: "Scope: answer only, never create orders", pill: { t: "Set", tone: "ok" } }, { a: "Action: get order status", pill: { t: "Flow", tone: "in" } }, { a: "Action: answer with knowledge", pill: { t: "Standard", tone: "nt" } }] },
        },
      },
    ],
  },

  scenario: {
    eyebrow: "End to end",
    title: "From a question to a closed case.",
    lede: "How the capabilities Salesforce describes work through one request.",
    steps: [
      { t: "The customer asks", s: "On chat, messaging, voice or the help centre. An AI agent can answer around the clock." },
      { t: "The agent resolves or hands over", s: "It uses knowledge and actions to answer, and hands the conversation to a rep when needed." },
      { t: "The rep takes over", s: "The console shows the customer, the case and the conversation, with suggested steps and replies." },
      { t: "Knowledge improves", s: "Interactions reveal gaps, and drafts of new or updated articles are suggested." },
      { t: "Supervisors watch", s: "The Command Center shows conversations, performance and hand-offs as they happen." },
    ],
    note: "A walk-through of Salesforce's described capabilities, not a customer story.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "What each role does in it.",
    lede: "How Salesforce's Service page groups its audiences.",
    rows: [
      { who: "Customers", does: "Get answers around the clock from agents, and use self-service." },
      { who: "Service reps", does: "Work cases with context and next steps, so cases close faster." },
      { who: "Supervisors", does: "See the whole team in real time and step in." },
      { who: "Field teams", does: "Move from reactive to proactive work with Field Service." },
      { who: "Employees", does: "Get IT and HR help where they work, including in Slack." },
    ],
  },

  fits: {
    eyebrow: "Fit with your systems",
    title: "Service beside the rest of the platform.",
    lede: "From Salesforce's Service pages.",
    rows: [
      { name: "Data 360", how: "Grounds AI answers in knowledge from several sources, and gives reps the full interaction history." },
      { name: "Slack", how: "Adds swarming with subject-matter experts, Slackbot help and swarming reports to service work." },
      { name: "Field Service", how: "Extends the same customer record to scheduling, dispatch and technicians on site." },
      { name: "Telephony", how: "Contact-centre-as-a-service integrations connect existing phone systems." },
      { name: "Industries", how: "Salesforce positions Service Cloud for healthcare, banking, retail, manufacturing, financial services, technology, education, transportation and the public sector." },
    ],
  },

  ai: {
    eyebrow: "AI and agents",
    title: "What AI does in Service Cloud.",
    lede: "From Salesforce's Service pages and its implementation guide.",
    items: [
      { title: "Agents for customers", body: "Autonomous agents answer customer questions around the clock and hand over to people when needed." },
      { title: "Help for reps", body: "Service Rep Assistant and Service Replies guide the rep and draft responses." },
      { title: "Knowledge", body: "Enterprise Knowledge, Article Recommendations and Self-Learning Knowledge keep the answers current." },
      { title: "Guardrails", body: "Agents are given a scope for each job. The guide advises treating the agent as a complete novice: it knows only what it can retrieve or what is in its configuration." },
    ],
    note: "Salesforce's trust layer and guardrails are described on the Agentforce page.",
  },

  start: {
    eyebrow: "Getting started",
    title: "Where a service project begins.",
    lede: "Salesforce's own guide to a service agent says to start simple, then build, test and repeat.",
    steps: [
      { title: "Start with standard topics", body: "Salesforce provides service agent templates for common jobs such as case management, account management and order enquiries." },
      { title: "Describe each job", body: "Write the classification description the way customers ask, add a scope that bounds the job, and a few instructions." },
      { title: "Add actions", body: "Give the agent the tools: look up an order, create a case, send a reset link." },
      { title: "Test and adjust", body: "Simulate conversations in the planner, check which topic and action it chose, and tune the weakest part." },
    ],
    decide: {
      title: "Decisions to settle before you buy",
      items: [
        "Which capabilities you need, such as digital channels or workforce and quality management.",
        "Whether to add AI agents for customers, employees or IT.",
      ],
    },
  },


  faq: [
    { q: "What is Service Cloud?", a: "Salesforce's customer service and support product. It combines case management, a console for reps, knowledge, a contact centre and AI agents on one platform." },
    { q: "Which channels does it cover?", a: "Salesforce names chat, email, WhatsApp, SMS, voice and Slack." },
    { q: "Can AI agents and human reps work together?", a: "Yes. Agents answer customers and hand over to reps. Supervisors can monitor both and step in from the Command Center." },
    { q: "How do I build a service agent?", a: "Salesforce's guide: start from a standard topic, describe the job, scope and instructions, add actions, then test and refine in the planner." },
    { q: "Does it cover field work?", a: "Field Service is a separate Salesforce product. It covers scheduling, dispatch and technicians on site." },
  ],

  sources: [
    { label: "Service overview", href: "https://www.salesforce.com/service/" },
    { label: "Customer Service Management", href: "https://www.salesforce.com/service/cloud/" },
    { label: "How to Get Started with Agentforce (Salesforce Research guide, 2024)", href: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/PDF/agentforce-implementation-guide.pdf" },
  ],
  checked: "Checked against Salesforce's Service pages and its implementation guide in November 2026. The guide is from 2024, so check Salesforce Help for the latest steps.",
};
