import type { ProductContent } from "../content-types";

// Claude Enterprise. Every statement below comes from Anthropic's own pages (claude.com's Enterprise solutions page, its
// pricing page, the Claude Code for Enterprise page, the Claude overview, Cowork and Claude Tag pages, Claude on AWS, and
// the Fable model page), read in November 2026. Prices, customer results and customer quotes have been left out.

export const claudeEnterprise: ProductContent = {
  slug: "claude-enterprise",
  crumb: "Claude Enterprise",
  eyebrow: "Claude Enterprise",
  title: ["Claude on every desk,", "with the controls IT needs."],
  lede: "Anthropic describes two ways to bring Claude into an organisation: deploy it to your workforce, or build it into your products. Claude Enterprise is the first. Every employee gets secure access to Claude's chat, Claude Cowork, Claude Code and your company's connectors, and IT gets single sign-on, provisioning, audit logs, retention controls and spend limits to run it.",
  primary: { label: "See what it includes", href: "#explore" },
  secondary: { label: "Team or Enterprise?", href: "#plans" },
  note: "The other way, building Claude into your own products and agents, is the Claude Platform. Many organisations do both.",
  hero: {
    app: "Admin · Organisation",
    icon: "org",
    label: "Illustration of an organisation's Claude admin view: seats by department, spend against limits, and identity settings. Sample data.",
    tiles: [
      { h: "Seats", k: "420", s: "6 departments" },
      { h: "Spend", k: "71%", s: "Of monthly limit", tone: "ok" },
      { h: "SSO", k: "On", s: "SCIM provisioning", tone: "ok" },
    ],
    rows: {
      title: "Departments",
      items: [
        { a: "Engineering", b: "Claude Code, premium seats", pill: { t: "Active", tone: "ok" } },
        { a: "Finance", b: "Cowork, Excel", pill: { t: "Active", tone: "ok" } },
        { a: "Legal", b: "Connectors restricted", pill: { t: "Policy", tone: "in" } },
      ],
    },
  },
  heroCaption: "Illustration of an admin view, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Frontier AI for the whole workforce, run like enterprise software.",
    lede: "The hard part of putting AI in front of thousands of people is not the model. It is identity, data handling, spend and visibility. Anthropic's Enterprise offering is built around exactly those.",
    items: [
      { title: "One product for everyone", body: "Chat for thinking work, Cowork for delegating tasks across files and tools, Claude Code for engineers, and connectors to company systems, under one account and one admin console." },
      { title: "No training on your data by default", body: "Anthropic says prompts, data and results are not used to train its models by default. Its Trust Center sets out the data practices." },
      { title: "Identity done properly", body: "Single sign-on (SAML), domain capture, SCIM provisioning and role-based access with fine-grained permissions." },
      { title: "Visibility for IT and security", body: "Audit logs, usage analytics, a Compliance API, and activity streamed to your SIEM through OpenTelemetry." },
      { title: "Control of cost", body: "Admins set spend limits for users and the organisation, and access by team, with tool permissions by department." },
      { title: "Built to pass security review", body: "SOC 2, ISO 27001, GDPR and CCPA compliance, a HIPAA-ready offering, custom data retention, IP allowlisting and network-level access control." },
    ],
  },

  explore: {
    eyebrow: "What it includes",
    title: "Four things to understand before you roll it out.",
    lede: "Pick one to see what Anthropic includes, and what it means for your rollout.",
    tabs: [
      {
        id: "workforce",
        label: "For employees",
        icon: "org",
        title: "What every employee gets",
        tagline: "Chat, Cowork, Claude Code, Claude Security and your connectors.",
        points: [
          "Chat: a thinking partner to develop ideas, draft content, tighten reports and work through hard problems.",
          "Claude Cowork: connect files and tools, hand off research, documents and repetitive work, and get polished deliverables back.",
          "Claude Code: build, debug and ship in natural language from the terminal, the IDE, Slack or the web.",
          "Claude Security (beta on Enterprise): reviews code for security issues, drafts patches and explains the risk.",
          "Connectors to Gmail, Google Drive, Slack and more, and Claude inside Microsoft 365 and Google Chrome.",
          "Claude Design, Slides and Docs; Claude Tag in Slack is in beta for Team and Enterprise.",
        ],
        look: { title: "The same models everywhere", body: "Anthropic says the same frontier models power every surface, from business apps to developer tools, so what people learn in one carries to the next." },
        screen: {
          app: "Claude · Task",
          icon: "chat",
          label: "Illustration of an employee handing Claude a task across connected tools. Sample data.",
          chat: { title: "Claude", msgs: [{ who: "u", t: "Reconcile the regional exports in the Close folder against budget and flag what does not tie out." }, { who: "a", t: "Two exports use different shapes, so I am mapping them first. The workbook will have variances flagged and a note on what did not reconcile." }] },
        },
      },
      {
        id: "identity",
        label: "Identity and access",
        icon: "key",
        title: "Who can use Claude, and what they can reach",
        tagline: "SSO, domain capture, SCIM and role-based access.",
        points: [
          "Single sign-on through SAML and domain capture, so accounts on your domain sit under your organisation.",
          "Domain verification, restrictions on creating separate organisations, and migration of accounts already using your domains.",
          "SCIM provisioning, so joiners and leavers in your identity provider are joiners and leavers in Claude.",
          "Role-based access with fine-grained permissions; access set by team, and tool permissions by department.",
          "Admin controls for remote and local connectors, and organisation-wide deployment of skills.",
          "Enterprise deployment of the Claude desktop app; network-level access control and IP allowlisting on Enterprise.",
        ],
        look: { title: "Shadow AI, closed off", body: "Domain capture and migration bring the personal accounts people already opened with work email under company control, instead of leaving them outside it." },
        screen: {
          app: "Admin · Identity",
          icon: "key",
          label: "Illustration of identity settings with SSO, SCIM and domain capture switched on. Sample data.",
          rows: { title: "Identity", items: [{ a: "SAML single sign-on", pill: { t: "On", tone: "ok" } }, { a: "SCIM provisioning", pill: { t: "On", tone: "ok" } }, { a: "Domain capture", pill: { t: "On", tone: "ok" } }, { a: "IP allowlist", pill: { t: "3 ranges", tone: "in" } }] },
        },
      },
      {
        id: "governance",
        label: "Data and governance",
        icon: "shield",
        title: "What happens to your data, and how you can see it",
        tagline: "Retention, audit, compliance monitoring and training defaults.",
        points: [
          "By default Anthropic does not train its models on Enterprise data, including code, conversations and proprietary information; the exception is feedback you choose to send.",
          "Custom data retention controls, on Enterprise only.",
          "Audit logs, and OpenTelemetry monitoring that streams activity to your SIEM, on Enterprise only.",
          "A Compliance API for observability and monitoring.",
          "A HIPAA-ready offering is available.",
          "Like all Claude services, Enterprise usage is subject to automated safety monitoring for misuse.",
        ],
        look: { title: "One model has its own rule", body: "Anthropic's most capable general model, Fable 5.1, requires 30-day retention for safety monitoring by default. Eligible Enterprise customers can instead use Enterprise Frontier Safeguards, which keep data on their own cloud." },
        screen: {
          app: "Admin · Data",
          icon: "shield",
          label: "Illustration of data settings: retention period, audit log export and model training off. Sample data.",
          rows: { title: "Data controls", items: [{ a: "Model training on our data", pill: { t: "Off", tone: "ok" } }, { a: "Retention", pill: { t: "Custom", tone: "in" } }, { a: "Audit logs to SIEM", pill: { t: "Streaming", tone: "ok" } }] },
        },
      },
      {
        id: "security",
        label: "Claude Security",
        icon: "check",
        title: "Find and fix vulnerabilities in your code",
        tagline: "In public beta for Claude Enterprise.",
        points: [
          "Claude scans your codebase, traces data flows across files and repositories, and keeps scanning as the code changes.",
          "Every finding passes adversarial verification before it reaches your team, against a threat model your team can edit.",
          "Each finding comes with a recommended patch to review and approve; Claude marks it fixed once the fix ships.",
          "Scans in the Claude Security app can use Anthropic's most cyber-capable Mythos models, with no Cyber Verification Program access needed.",
          "Findings reach your tools through webhooks and the API; a Claude Security plugin for Claude Code is in beta.",
          "Anthropic's own caution: Claude can make mistakes, so review proposed patches before applying them.",
        ],
        look: { title: "A human approves every patch", body: "Anthropic describes full remediation control: every suggested fix needs human review and approval before it is applied." },
        screen: {
          app: "Claude Security · Findings",
          icon: "shield",
          label: "Illustration of validated security findings with severity and a suggested patch status. Sample data.",
          rows: { title: "Findings", items: [{ a: "Injection in report export", b: "High", pill: { t: "Patch ready", tone: "wr" } }, { a: "Token in log output", b: "Medium", pill: { t: "Fixed", tone: "ok" } }, { a: "Open redirect", b: "Low", pill: { t: "Review", tone: "in" } }] },
        },
      },
    ],
  },

  blocks: [
    {
      id: "plans",
      kind: "pairs",
      eyebrow: "Team or Enterprise?",
      title: "Two business plans, and how they differ.",
      lede: "Anthropic sells Claude to organisations on two plans. Prices change, so we link Anthropic's pricing page instead of quoting it.",
      a: "Plan",
      b: "What Anthropic includes",
      rows: [
        { l: "Team", r: "For teams of 2 to 150. Standard and premium seats (premium seats get more usage), which can be mixed. Claude Code and Cowork, Design, Slides and Docs, Microsoft 365, Claude Tag, enterprise search, central billing, SSO, admin controls for connectors, enterprise deployment of the desktop app, and no training on your content by default." },
        { l: "Enterprise", r: "For large businesses operating at scale. Everything in Team, plus spend limits set by admins, role-based access with fine-grained permissions, SCIM, audit logs, the Compliance API, custom data retention, network-level access control, IP allowlisting, a HIPAA-ready offering and Claude Security (beta)." },
        { l: "How Enterprise is billed", r: "A seat price plus usage billed at API rates, so cost scales with the model and the task. An annual commitment and a minimum of 20 seats apply. It can be bought self-serve or with Anthropic's sales team." },
        { l: "Through AWS", r: "Claude Enterprise is also offered in AWS Marketplace, billed through AWS." },
      ],
      note: "Anthropic's pages describe usage limits on every plan and say prices and plans may change at its discretion.",
      link: { label: "Anthropic's current pricing", href: "https://claude.com/pricing" },
    },
    {
      id: "departments",
      kind: "defs",
      eyebrow: "Real work, across every function",
      title: "What each department hands to Claude.",
      lede: "Anthropic's examples of everyday work, by function.",
      items: [
        { title: "Engineering", body: "Turn requirements into technical specifications, design architecture, troubleshoot runtime errors and find performance improvements, with Claude Code for the code itself." },
        { title: "Marketing", body: "Interpret market trends, brainstorm content across platforms, develop campaign strategy and write post-campaign reports." },
        { title: "Sales", body: "Analyse sales calls into account plans, prepare objection handling, build tailored pitches and interpret sales metrics." },
        { title: "Product management", body: "Define vision and objectives, analyse feedback and usage data, write specifications and interpret product metrics." },
        { title: "Human resources", body: "Summarise candidate feedback into hiring recommendations, build review templates and calibration summaries, and design learning programmes." },
        { title: "Security", body: "Triage alerts, investigate incidents and trace attack paths, correlate signals across tools, draft post-mortems and tune detection rules." },
      ],
    },
  ],

  start: {
    eyebrow: "Rolling it out",
    title: "How we would bring Claude to your organisation.",
    lede: "Anthropic provides the product and the controls. The work that decides whether people actually use it well is ours to do together.",
    steps: [
      { title: "Set the guardrails", body: "SSO, SCIM, domain capture, retention, which connectors are allowed and which departments get which seats." },
      { title: "Pick the first use cases", body: "Two or three tasks per department that are frequent, measurable and safe to delegate, written as skills where they repeat." },
      { title: "Connect the systems", body: "The connectors your people need, Microsoft 365 or Google Workspace, and your own MCP servers where needed." },
      { title: "Train and measure", body: "Short, role-specific training; then usage analytics and spend reviewed monthly, and the next use cases added." },
    ],
    decide: {
      title: "Decisions to settle before you start",
      items: [
        "Team or Enterprise, and how many seats need premium usage.",
        "Which data classes Claude may see, and the retention period you need.",
        "Which connectors and tools each department may use.",
        "Whether to buy directly from Anthropic or through AWS Marketplace.",
        "Who owns Claude internally after launch, and how new use cases are approved.",
      ],
    },
  },

  faq: [
    { q: "What is Claude Enterprise?", a: "Anthropic's plan for deploying Claude to a whole workforce: chat, Claude Cowork, Claude Code and company connectors for every employee, with the admin controls, management and visibility IT and security teams need." },
    { q: "Does Anthropic train on our data?", a: "Anthropic says that by default it does not use your prompts, data or results to train its models, and that for Enterprise this covers code, conversations and proprietary information. Feedback you choose to send, such as ratings, is the exception. Usage is still subject to automated safety monitoring for misuse." },
    { q: "What is the difference between Team and Enterprise?", a: "Team is for 2 to 150 people with SSO, central billing and admin controls for connectors. Enterprise adds SCIM, audit logs, the Compliance API, custom data retention, fine-grained roles, spend limits, network controls, IP allowlisting, a HIPAA-ready offering and Claude Security (beta), with a 20-seat minimum and usage billed at API rates." },
    { q: "Which compliance standards does it meet?", a: "Anthropic's Enterprise page lists SOC 2, ISO 27001, GDPR and CCPA compliance and a HIPAA-ready offering. Its regional compliance page adds ISO/IEC 27017, ISO/IEC 27018 and CSA STAR. Full documentation is in Anthropic's Trust Center." },
    { q: "Can we use Claude Enterprise in Sri Lanka and India?", a: "Both countries are on Anthropic's supported regions list. Our security and deployment page covers availability and data residency in detail." },
    { q: "Is Claude Code included?", a: "Yes. Anthropic includes Claude Code in Team and Enterprise plans, with enterprise controls such as managed settings, contribution metrics and OpenTelemetry monitoring." },
  ],
  sources: [
    { label: "Claude enterprise solutions", href: "https://claude.com/solutions/enterprise" },
    { label: "Claude pricing (Team and Enterprise)", href: "https://claude.com/pricing" },
    { label: "Claude Code for Enterprise", href: "https://claude.com/product/claude-code/enterprise" },
    { label: "Claude Security", href: "https://claude.com/product/claude-security" },
    { label: "Claude on AWS", href: "https://claude.com/partners/claude-on-aws" },
    { label: "Claude Fable (data retention)", href: "https://www.anthropic.com/claude/fable" },
  ],
  checked: "Checked against Anthropic's own pages in November 2026.",
};
