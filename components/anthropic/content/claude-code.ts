import type { ProductContent } from "../content-types";

// Claude Code. Every statement below comes from Anthropic's own pages (claude.com's Claude Code and Claude Code for
// Enterprise pages, Claude Security, the Enterprise solutions page and the Opus model page), read in November 2026. Customer
// results, adoption figures and quotes have been left out.

export const claudeCode: ProductContent = {
  slug: "claude-code",
  crumb: "Claude Code",
  eyebrow: "Claude Code",
  title: ["An agentic coding tool,", "not autocomplete."],
  lede: "Claude Code takes a bug fix, a set of tests or a multi-day migration and does the work: it searches the whole codebase, plans, writes the code, runs the tests and opens the pull request, asking when it needs a decision. Developers steer and review from the terminal, their IDE, the desktop app, Slack or the web.",
  primary: { label: "Explore Claude Code", href: "#explore" },
  secondary: { label: "For engineering leaders", href: "#code-controls" },
  note: "Included in Claude's Team and Enterprise plans, and available with a Claude Console account billed at API rates.",
  hero: {
    app: "Claude Code · Session",
    icon: "terminal",
    label: "Illustration of a Claude Code session fixing a double-charge bug: files read, the root cause found and the fix edited. Sample data.",
    steps: {
      title: "Fix the double-charge bug",
      items: [
        { t: "Read 3 files, searched checkout", state: "done" },
        { t: "Reproduced the double submit", state: "done" },
        { t: "Root cause: key per call, not per session", state: "done" },
        { t: "Edited charges.ts, tests running", state: "now" },
      ],
    },
    rows: {
      title: "Pull request",
      items: [
        { a: "Idempotency key per checkout", pill: { t: "Ready", tone: "ok" } },
        { a: "Button disabled while charging", pill: { t: "Ready", tone: "ok" } },
      ],
    },
  },
  heroCaption: "Illustration of a coding session, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Developers decide; Claude Code does the implementation.",
    lede: "Anthropic's description of the shift: you set the direction as the architect and orchestrator, and Claude Code does the work, surfacing the decisions it needs from you.",
    items: [
      { title: "Agentic, not autocomplete", body: "It builds whole features from natural language: writes the code, creates the tests and opens the pull request." },
      { title: "The whole codebase", body: "It searches the entire repository, not just the open file, which is what makes migrations, cross-file debugging and real code review possible." },
      { title: "Long-running work", body: "Routine fixes and tests, and also refactors and new features that run for hours or days, several at once." },
      { title: "Where developers already work", body: "Terminal, VS Code and JetBrains, the desktop app, the web, iOS and Android, Slack and GitHub." },
      { title: "Your tools, its tools", body: "It uses your command-line tools such as Git, and MCP servers such as GitHub, to work with deployment, databases and monitoring." },
      { title: "Asks before it acts", body: "In the terminal it runs locally, talks directly to the model APIs with no remote code index, and asks permission before changing files or running commands." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Six things Claude Code takes on.",
    lede: "Pick one to see what Anthropic describes.",
    tabs: [
      {
        id: "surfaces",
        label: "Where it runs",
        icon: "terminal",
        title: "Terminal, IDE, desktop, web, mobile and Slack",
        tagline: "It fits the workflow instead of replacing it.",
        points: [
          "The terminal, with the command-line tools you already use.",
          "Native extensions for VS Code (also Cursor and Devin Desktop) and JetBrains IDEs.",
          "The Claude desktop app, on Pro, Max, Ultra, Team and Enterprise plans.",
          "The web and the iOS and Android apps, for parallel work or coding on the move.",
          "Slack: kick off coding tasks from a channel, and debug and review in the thread.",
          "GitHub and GitLab: read issues and open pull requests.",
        ],
        look: { title: "Adopted without retraining", body: "Anthropic's argument: because it works where developers already are, teams adopt it without changing how they work." },
        screen: {
          app: "Claude Code · Projects",
          icon: "terminal",
          label: "Illustration of several Claude Code sessions running in parallel. Sample data.",
          rows: { title: "Sessions", items: [{ a: "Add dark mode to settings", b: "acme-dashboard", pill: { t: "Done", tone: "ok" } }, { a: "Write tests for payments", b: "acme-storefront", pill: { t: "Running", tone: "in" } }, { a: "Weekly dependency audit", b: "Scheduled", pill: { t: "Monday", tone: "nt" } }] },
        },
      },
      {
        id: "codebase",
        label: "Onboarding",
        icon: "branch",
        title: "A large codebase, mapped and explained",
        tagline: "Agentic search instead of hand-picked context.",
        points: [
          "Claude Code maps and explains a large codebase in seconds.",
          "It uses agentic search to understand project structure and dependencies, so nobody has to select context files by hand.",
          "Ask what a repository does, how it is organised, or where a behaviour lives.",
          "CLAUDE.md files hold project architecture and contribution guidelines, and Claude Code reads them automatically.",
        ],
        look: { title: "Day one on a new codebase", body: "New joiners and teams inheriting legacy code can ask the codebase questions instead of waiting for the one person who knows it." },
        screen: {
          app: "Claude Code · Explain",
          icon: "branch",
          label: "Illustration of Claude Code summarising a repository's structure. Sample data.",
          chat: { title: "Claude Code", msgs: [{ who: "u", t: "I'm new to this codebase. Can you explain it?" }, { who: "a", t: "It is a monorepo with three packages: the web app, a shared component library and an API. Payments live in the API's billing module." }] },
        },
      },
      {
        id: "issues-to-prs",
        label: "Issues to PRs",
        icon: "check",
        title: "From the issue to a pull request",
        tagline: "No bouncing between tools.",
        points: [
          "Claude Code works with GitHub, GitLab and your command-line tools to read issues, write code, run tests and open pull requests.",
          "It builds the plan and asks clarifying questions before it starts.",
          "It can work on several tasks at once and surface the decisions it needs from you.",
          "Auto mode, on by default on Pro, Max and Team plans, lets it work longer while being designed to catch risky commands.",
        ],
        look: { title: "Review instead of typing", body: "The engineer's job moves towards reviewing and deciding, which is where judgement matters most." },
        screen: {
          app: "GitHub · Pull request",
          icon: "check",
          label: "Illustration of a pull request opened by Claude Code with passing checks. Sample data.",
          rows: { title: "Checks", items: [{ a: "Unit tests", pill: { t: "Passed", tone: "ok" } }, { a: "Lint", pill: { t: "Passed", tone: "ok" } }, { a: "Code Review", pill: { t: "2 notes", tone: "wr" } }] },
        },
      },
      {
        id: "migrations",
        label: "Migrations",
        icon: "layers",
        title: "Multi-hour refactors and migrations",
        tagline: "It keeps going when something breaks.",
        points: [
          "Claude Code follows imports across the repository, runs your tests and keeps going when something breaks.",
          "Anthropic's example: audit a deprecated library across a monorepo and plan the move service by service, ordered by risk and dependencies.",
          "Legacy codebase migration and code modernisation are named enterprise uses.",
          "Self-hosted environments (public beta) run sessions on your own infrastructure, next to your internal services.",
        ],
        look: { title: "Planned before it is changed", body: "For a large migration, Claude Code produces the plan first: phases, risk call-outs and the services that need a design decision." },
        screen: {
          app: "Claude Code · Migration plan",
          icon: "layers",
          label: "Illustration of a three-phase migration plan with risk call-outs. Sample data.",
          steps: { title: "legacy-auth to auth-v2", items: [{ t: "Phase 1: 12 low-risk services", state: "done" }, { t: "Phase 2: 18 leaf services", state: "now" }, { t: "Phase 3: 17 core services" }] },
        },
      },
      {
        id: "code-review",
        label: "Code Review",
        icon: "pen",
        title: "Catch more bugs before they reach production",
        tagline: "Generally available for Team and Enterprise.",
        points: [
          "Claude Code analyses pull requests automatically before human review.",
          "It checks against your organisation's standards, flags issues and suggests improvements in your workflow.",
          "Organisation-wide standards live in CLAUDE.md files deployed to system directories; repository files add project specifics.",
          "The Claude Security plugin for Claude Code (beta) scans, validates and patches vulnerabilities while keeping all code in your environment.",
        ],
        look: { title: "A first reviewer that has read everything", body: "Because it has the whole codebase as context, the review can catch the change that breaks something three directories away." },
        screen: {
          app: "Code Review · Notes",
          icon: "pen",
          label: "Illustration of review notes left on a pull request. Sample data.",
          rows: { title: "Review", items: [{ a: "Missing null check", b: "billing/charge.ts", pill: { t: "Bug", tone: "er" } }, { a: "Naming against standard", b: "CLAUDE.md rule 4", pill: { t: "Style", tone: "in" } }] },
        },
      },
      {
        id: "code-controls",
        label: "For leaders",
        icon: "gauge",
        title: "Built for enterprise engineering",
        tagline: "Visibility and guardrails across the organisation.",
        points: [
          "Contribution metrics show usage and the pull requests and committed code written with Claude Code's help, in one dashboard.",
          "Server-managed settings configure tool permissions, file access restrictions and MCP servers centrally, with no MDM required.",
          "OpenTelemetry exports session activity, token use and cost to your observability stack.",
          "Fine-grained roles and SSO with Okta, Azure AD or any SAML 2.0 provider; Enterprise adds SCIM, audit trails and seat allocation visibility.",
          "Bring your own keys from Amazon Bedrock, Google Cloud or Microsoft Foundry inside your existing VPC, with your IAM and logging.",
          "TLS 1.3 in transit and AES-256 at rest; SOC 2 Type II compliance.",
        ],
        look: { title: "Know what it is doing", body: "Leaders get the numbers (sessions, tokens, cost, code contributed) without building their own integrations." },
        screen: {
          app: "Claude Code · Metrics",
          icon: "gauge",
          label: "Illustration of an engineering dashboard showing Claude Code usage and pull requests by team. Sample data.",
          bars: { title: "PRs with Claude Code, by team", rows: [["Payments", 72, "38"], ["Platform", 56, "29", "g"], ["Mobile", 40, "21", "l"]] },
        },
      },
    ],
  },

  scenario: {
    eyebrow: "A worked example",
    title: "A bug report, followed to a merged fix.",
    lede: "Built from Anthropic's own examples. An illustration, not a promise of any particular set-up.",
    steps: [
      { t: "Reported", s: "A bug report lands in Slack.", icon: "hash" },
      { t: "Reproduced", s: "Claude Code reads the code and reproduces it.", icon: "terminal" },
      { t: "Fixed", s: "It finds the root cause and edits the code.", icon: "pen" },
      { t: "Tested", s: "It runs your tests and opens a pull request.", icon: "check" },
      { t: "Reviewed", s: "Code Review, then a human approves the merge.", icon: "branch" },
    ],
    note: "Illustrative. Your managed settings decide which commands Claude Code may run without asking.",
  },

  faq: [
    { q: "How do we get Claude Code?", a: "Anthropic includes it in the Pro, Max and Ultra plans and in Team and Enterprise, and it can also be used with a Claude Console account, where it consumes API tokens at standard rates." },
    { q: "Is Claude Code secure?", a: "Anthropic says that in the terminal it runs locally and talks directly to the model APIs, with no backend server or remote code index, and that it asks permission before changing files or running commands." },
    { q: "Can it run through our cloud provider?", a: "Yes. Anthropic says Claude Code deploys through Amazon Bedrock, Google Cloud and Microsoft Foundry, integrating with your IAM, logging and VPC configuration, as well as through Anthropic's own cloud." },
    { q: "Does Anthropic train on our code?", a: "Anthropic says that by default it does not train on Enterprise data, including code, conversations and proprietary information, except feedback you choose to send. Usage is subject to automated safety monitoring for misuse." },
    { q: "Can we enforce our coding standards?", a: "Yes. Anthropic describes deploying CLAUDE.md files to system directories for company-wide standards, with repository-specific files for project architecture and contribution guidelines, which Claude Code reads automatically." },
    { q: "What is fast mode?", a: "A high-speed configuration for Opus 5.5 with lower latency at a higher price per token, available in Claude Code and on the Claude Platform." },
  ],
  sources: [
    { label: "Claude Code", href: "https://claude.com/product/claude-code" },
    { label: "Claude Code for Enterprise", href: "https://claude.com/product/claude-code/enterprise" },
    { label: "Claude Security", href: "https://claude.com/product/claude-security" },
    { label: "Claude enterprise solutions", href: "https://claude.com/solutions/enterprise" },
    { label: "Claude Opus 5.5", href: "https://www.anthropic.com/claude/opus" },
  ],
  checked: "Checked against Anthropic's own pages in November 2026.",
};
