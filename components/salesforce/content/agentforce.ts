import type { ProductContent } from "../content-types";

// Agentforce. Sources: Salesforce's Agentforce page and its "how it works" and pricing pages, the Salesforce Architects'
// Agent Development Lifecycle, the trusted-AI page, and two Salesforce guides: "How to Get Started with Agentforce"
// (Salesforce Research, 2024) and the marketing workbook. Read in November 2026.

export const agentforce: ProductContent = {
  slug: "agentforce",
  crumb: "Agentforce",
  eyebrow: "Agentforce",
  title: ["The platform for building", "and running AI agents."],
  lede: "Agentforce is Salesforce's platform for AI agents that handle customer and employee work around the clock and hand over to people when needed. Unlike a scripted chatbot, an agent interprets a request, plans, and chooses from the tools it has.",
  primary: { label: "How an agent is built", href: "#explore" },
  secondary: { label: "Trust and guardrails", href: "#trust" },
  note: "Salesforce's Agentforce page describes its employee assistant as formerly Einstein Copilot.",
  hero: {
    app: "Agent Builder · Planner",
    label: "Illustration of an agent builder showing a topic, its actions and a test conversation with the agent's reasoning. Sample data.",
    rows: {
      title: "Topic: Order management",
      items: [
        { a: "Classification", b: "Order and delivery questions", pill: { t: "Set", tone: "ok" } },
        { a: "Scope", b: "Answer only", pill: { t: "Set", tone: "ok" } },
        { a: "Action", b: "Get order status", pill: { t: "Flow", tone: "in" } },
      ],
    },
    chat: { title: "Preview", msgs: [{ who: "u", t: "Where is my order?" }, { who: "a", t: "I'm checking the order status now." }] },
  },
  heroCaption: "Illustration of an agent builder, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Agents that act, within limits you set.",
    lede: "Agents analyse data, make decisions and take actions on tasks such as answering service questions, qualifying sales leads and optimising marketing campaigns. Salesforce describes five attributes that define one.",
    items: [
      { title: "Role", body: "The agent's purpose." },
      { title: "Knowledge", body: "The data the agent needs in order to do its job well." },
      { title: "Actions", body: "What the agent is able to do: the goals it can fulfil." },
      { title: "Guardrails", body: "The guidelines the agent operates within." },
      { title: "Channels", body: "The places where the agent does its work, such as CRM, WhatsApp, Messenger or your website." },
    ],
  },

  explore: {
    eyebrow: "How it works",
    title: "How an agent is built, tested and run.",
    lede: "Four views of Agentforce, from Salesforce's own pages and guides.",
    tabs: [
      {
        id: "blocks",
        label: "Topics and actions",
        title: "An agent is made of topics and actions",
        tagline: "From Salesforce's implementation guide for a service agent.",
        points: [
          "Topics are the jobs the agent can do. A topic has a classification description (the kinds of request it covers), a scope (the limits of the job) and instructions (how to do it).",
          "Actions are the tools the agent uses, such as getting or creating a case. They can be extended with Flow, Apex and prompt templates.",
          "Newer Salesforce material also describes subagents, actions and instructions in Agent Builder.",
        ],
        look: { title: "A job description", body: "Salesforce suggests writing a topic's scope like a job description: what the agent can do and what it must not." },
        screen: {
          app: "Agent Builder · Topic",
          label: "Illustration of a topic with its classification, scope and instructions. Sample data.",
          rows: { title: "Topic", items: [{ a: "Classification", pill: { t: "Mirrors how customers ask", tone: "in" } }, { a: "Scope", pill: { t: "Job description", tone: "in" } }, { a: "Instructions", pill: { t: "Start with one", tone: "nt" } }] },
        },
      },
      {
        id: "reasoning",
        label: "Reasoning",
        title: "How an agent decides what to do",
        tagline: "Atlas Reasoning Engine.",
        points: [
          "The agent breaks a request into smaller tasks, evaluates each step and builds a plan until the answer or action is complete.",
          "It draws on CRM data and, through Data 360, on external data.",
          "Agents can also be triggered by data changes and automations, not only by a person typing.",
          "Salesforce's guide says the language model checks each response before it is sent, so that it does not conflict with the instructions and uses only information from the available instructions and actions.",
        ],
        look: { title: "Plan, then act", body: "In the planner, builders can see which topic was chosen, which action ran and the reasoning behind the reply." },
        screen: {
          app: "Planner · Reasoning",
          label: "Illustration of the planner showing the steps an agent took. Sample data.",
          steps: { title: "Agent steps", items: [{ t: "Classify topic", state: "done" }, { t: "Choose action", state: "done" }, { t: "Run action", state: "now" }, { t: "Check and reply" }] },
        },
      },
      {
        id: "lifecycle",
        label: "Lifecycle",
        title: "The Agent Development Lifecycle",
        tagline: "Five phases, with monitoring feeding back into design.",
        points: [
          "Ideation and design: purpose, goals, persona, the data and tools needed, and when to hand over to a person.",
          "Development: reasoning logic, prompts, and the actions the agent can call, built in Agent Builder or in code.",
          "Testing and validation: unit tests, end-to-end scenarios, adversarial inputs, human review and load tests, in a sandbox because agents can change CRM data.",
          "Deployment: agents are version-controlled metadata. Deployment and activation are separate steps, and versions can be rolled back.",
          "Monitoring and tuning: latency, cost, errors, task completion, escalations and satisfaction feed the next round of design.",
        ],
        look: { title: "A loop, not a line", body: "Salesforce's architects stress that testing and monitoring are continuous, because an agent's behaviour is not identical every time." },
        screen: {
          app: "Lifecycle",
          label: "Illustration of the five lifecycle phases as a checklist. Sample data.",
          steps: { title: "Phases", items: [{ t: "Design", state: "done" }, { t: "Develop", state: "done" }, { t: "Test", state: "now" }, { t: "Deploy" }, { t: "Monitor and tune" }] },
        },
      },
      {
        id: "patterns",
        label: "Kinds of agent",
        title: "Five shapes an agent can take",
        tagline: "From Salesforce's agentic patterns guidance.",
        points: [
          "Conversational: reactive, multi-turn chat or email agents that answer, act and escalate.",
          "Proactive: event-driven agents that start work when something happens, such as an abandoned cart.",
          "Ambient: background agents that watch a stream, such as calls, and surface suggestions.",
          "Collaborative: a conversational agent coordinating other agents, with people in the loop.",
          "Autonomous: agents given a goal that plan and execute within policy and notify people rather than ask at every step.",
        ],
        look: { title: "Orchestrator", body: "Salesforce also describes an orchestrator pattern, where a lead agent plans, delegates to specialist agents and combines their results." },
        screen: {
          app: "Agent map",
          label: "Illustration of a lead agent delegating to specialist agents. Sample data.",
          rows: { title: "Orchestrator", items: [{ a: "Lead agent", b: "Plans and delegates", pill: { t: "Orchestrates", tone: "in" } }, { a: "Specialist agent 1", pill: { t: "Order status", tone: "nt" } }, { a: "Specialist agent 2", pill: { t: "Returns", tone: "nt" } }] },
        },
      },
    ],
  },

  ai: {
    eyebrow: "Trust and guardrails",
    title: "How Salesforce keeps agents on a lead.",
    lede: "From Salesforce's trusted-AI and Agentforce pages. Salesforce calls this the trust layer, and one of its own pages calls it the Einstein Trust Layer.",
    items: [
      { title: "Secure data retrieval and grounding", body: "The model works from your company data, such as Data 360 or internal knowledge, and people see only what their permissions allow." },
      { title: "Zero data retention and data masking", body: "Salesforce says prompts and responses are not stored or used to train third-party models, and that personal or proprietary details are swapped for placeholders before reaching the model." },
      { title: "Toxicity detection and guardrails", body: "Generated content is scanned, and flagged output is filtered, blocked or marked before the user sees it." },
      { title: "Guardrails on the agent", body: "Safeguards you define and protections Salesforce manages keep agents to their instructions, block off-topic or inappropriate conversations and reduce hallucinated or biased answers." },
      { title: "An audit trail", body: "Salesforce's how-it-works page lists an audit trail of agent actions and outputs for governance reviews." },
      { title: "People stay in control", body: "Deploying and activating a new version are separate steps, and Salesforce says long-running agents work under human oversight." },
    ],
    note: "Salesforce's pages differ slightly in which of these they list, so check the page for the feature you rely on.",
  },

  start: {
    eyebrow: "Getting started",
    title: "Start simple, then build, test, repeat.",
    lede: "Advice from Salesforce's guide to building a service agent.",
    steps: [
      { title: "Begin with a template", body: "Start from a standard topic and its standard actions, then customise." },
      { title: "Keep instructions minimal", body: "Begin with one instruction and add more as you simulate conversations. The guide's advice: less is more." },
      { title: "Put business rules in actions", body: "Logic that is specific to you, such as refund rules, belongs in a flow-based action, not in a free-text instruction." },
      { title: "Be explicit", body: "Agents take words such as always and never literally, and do not rely on the visual order of instructions." },
      { title: "Fix the weakest link", body: "If the answer is wrong, check the topic chosen, the action chosen, the action's output and then the tone, in that order." },
    ],
    decide: {
      title: "Decisions to settle before you buy",
      items: [
        "Whether the agent serves customers or employees.",
        "How predictable your usage is, which decides between consumption and per-user models.",
        "How much commitment you want: prepaid, a baseline, or pay as you go.",
        "How you will track consumption and set alerts.",
      ],
    },
  },

  editions: {
    eyebrow: "Pricing",
    title: "How Agentforce is paid for.",
    lede: "Salesforce describes consumption and per-user models. Rates change, so this page does not quote them.",
    rows: [
      { name: "Flex Credits", body: "Pay per action an agent performs, from a shared pool used across teams and channels. Voice actions cost more than standard ones. Unused credits do not carry over to a later term." },
      { name: "Conversations", body: "Pay per customer conversation, which suits agents that face customers. It cannot be used in the same org as Flex Credits." },
      { name: "Per-user models", body: "An Agentforce user licence for employees, add-ons for Sales, Service, Field Service and industries with unmetered employee use, and a separate licence for Agentforce Coworker." },
      { name: "Entry point", body: "Salesforce Foundations is a free tier that includes the builder tools." },
    ],
    link: { label: "Agentforce pricing on salesforce.com", href: "https://www.salesforce.com/agentforce/pricing/" },
  },

  faq: [
    { q: "What is Agentforce?", a: "Salesforce's platform for building, deploying and monitoring AI agents that work around the clock across channels and hand over to people when needed." },
    { q: "How is an agent different from a chatbot?", a: "A scripted chatbot follows a fixed path. An agent interprets the request, makes a plan and chooses the tools it has, and it can be started by a data change as well as by a person." },
    { q: "How do we test an agent before it goes live?", a: "Salesforce describes generating test cases, simulating conversations in a planner and checking how well guardrails are followed, in a sandbox, because agents can change CRM data." },
    { q: "Is our data used to train other companies' models?", a: "Salesforce says prompts and responses are not stored or used to train third-party models, and that personal details are masked before a prompt reaches the model." },
    { q: "Can we mix pricing models?", a: "Flex Credits and Conversations cannot be used in the same org. Per-user add-ons are a separate option." },
    { q: "Who builds agents?", a: "Admins and developers. Agent Builder is low-code, and agents can also be built in code." },
  ],

  sources: [
    { label: "Agentforce", href: "https://www.salesforce.com/agentforce/" },
    { label: "How Agentforce works", href: "https://www.salesforce.com/ap/agentforce/how-it-works/" },
    { label: "Agentforce pricing", href: "https://www.salesforce.com/agentforce/pricing/" },
    { label: "Trusted AI at Salesforce", href: "https://www.salesforce.com/artificial-intelligence/trusted-ai/" },
    { label: "Agent Development Lifecycle (Salesforce Architects)", href: "https://architect.salesforce.com/fundamentals/agent-development-lifecycle" },
    { label: "How to Get Started with Agentforce (Salesforce Research, 2024)", href: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/PDF/agentforce-implementation-guide.pdf" },
  ],
  checked: "Checked against Salesforce's Agentforce pages, architects' guidance and implementation guide in November 2026. The implementation guide is from 2024 and refers to topics; newer pages also say subagents.",
};
