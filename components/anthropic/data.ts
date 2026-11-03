// The Anthropic product set, as the pages and the menu see it. Anthropic describes two ways to bring Claude to an
// organisation: Claude Enterprise, which puts Claude in front of every employee, and the Claude Platform, which builds
// Claude into your own products and agents. The pages lead with those two, then the two products people use most (Claude
// itself and Claude Code), then two supporting pages (the models, and security and deployment). Every description here is
// written from Anthropic's own published material (see the sources on each page and in docs/anthropic-product-knowledge.md).
//
// Anthropic's trademark guidelines allow its names and logos only in materials it has approved, so these pages use no
// Anthropic or Claude artwork at all: product names are set as plain text, and the small glyphs are generic line icons of
// our own that do not resemble any Anthropic mark.

export const AN_HUB = "/services/anthropic";

/** One colour for every "you are here" marker, on every Anthropic page. */
export const AN_HERE = "#34b386";

export const AN_LEGAL =
  "Anthropic, Claude, Claude Code and the other product names on these pages are trademarks of Anthropic, PBC. No Anthropic logo or artwork is used, and nothing here implies Anthropic's sponsorship or endorsement. Other names are the property of their owners. Screens shown are our own illustrations with sample data, not Anthropic screenshots. Product descriptions follow Anthropic's own published material and may change; check claude.com and anthropic.com for current details.";

export type ProductSlug = "claude-enterprise" | "claude-platform" | "claude" | "claude-code" | "models" | "security-and-deployment";

/** The generic glyphs the pages draw (see IconTile). None is an Anthropic mark. */
export type Glyph =
  | "org"
  | "blocks"
  | "chat"
  | "terminal"
  | "layers"
  | "shield"
  | "agents"
  | "plug"
  | "book"
  | "doc"
  | "grid"
  | "slides"
  | "mail"
  | "hash"
  | "window"
  | "cloud"
  | "pen"
  | "check"
  | "flask"
  | "clock"
  | "key"
  | "chart"
  | "gauge"
  | "branch"
  | "globe";

export type FeatureProduct = "claude" | "claude-code" | "claude-platform" | "claude-enterprise";

export type Feature = {
  /** The id, and the tab on its product's page that covers it unless `tab` says otherwise. */
  key: string;
  name: string;
  product: FeatureProduct;
  tab?: string;
  glyph: Glyph;
  /** One plain line on what it is for. */
  line: string;
};

/** The capabilities these pages cover, named as Anthropic names them. The lines are ours. */
export const features: Feature[] = [
  // Claude, for everyone at work
  { key: "tasks", name: "Tasks and Cowork", product: "claude", glyph: "check", line: "Hand Claude a task; get finished work back." },
  { key: "artifacts", name: "Artifacts", product: "claude", glyph: "slides", line: "Docs, decks, designs and dashboards you can edit." },
  { key: "connectors", name: "Connectors and plugins", product: "claude", glyph: "plug", line: "Claude in the apps and data you already use." },
  { key: "skills", name: "Skills", product: "claude", glyph: "book", line: "Your procedures, packaged so Claude repeats them." },
  { key: "microsoft-365", name: "Claude for Microsoft 365", product: "claude", glyph: "doc", line: "Inside Excel, PowerPoint, Word and Outlook." },
  { key: "google-workspace", name: "Claude for Google Workspace", product: "claude", glyph: "grid", line: "Inside Docs, Sheets and Slides (beta)." },
  { key: "chrome", name: "Claude in Chrome", product: "claude", glyph: "window", line: "Reads, clicks and fills forms in your browser." },
  { key: "tag", name: "Claude Tag", product: "claude", glyph: "hash", line: "Tag Claude into Slack threads and channels (beta)." },
  // Claude Code
  { key: "surfaces", name: "Terminal, IDE, web and Slack", product: "claude-code", glyph: "terminal", line: "Wherever your developers already work." },
  { key: "codebase", name: "Codebase onboarding", product: "claude-code", glyph: "branch", line: "Maps and explains a repository in seconds." },
  { key: "issues-to-prs", name: "Issues to pull requests", product: "claude-code", glyph: "check", line: "Reads the issue, writes the code, opens the PR." },
  { key: "migrations", name: "Migrations and refactors", product: "claude-code", glyph: "layers", line: "Multi-hour work across the whole repository." },
  { key: "code-review", name: "Code Review", product: "claude-code", glyph: "pen", line: "Pull requests checked before human review." },
  { key: "code-controls", name: "Enterprise controls", product: "claude-code", glyph: "gauge", line: "Managed settings, metrics and OpenTelemetry." },
  // Claude Platform
  { key: "messages-api", name: "Messages API and tools", product: "claude-platform", glyph: "blocks", line: "Tool use, computer use, code execution and more." },
  { key: "managed-agents", name: "Claude Managed Agents", product: "claude-platform", glyph: "agents", line: "Long-running agents without the infrastructure." },
  { key: "context", name: "Context and memory", product: "claude-platform", glyph: "book", line: "Up to 1M tokens, compaction and memory stores." },
  { key: "cost", name: "Cost and performance", product: "claude-platform", glyph: "chart", line: "Batch, caching, effort and fast mode." },
  { key: "console", name: "Claude Console", product: "claude-platform", glyph: "window", line: "Build, deploy, monitor and manage." },
  { key: "clouds", name: "On your cloud", product: "claude-platform", glyph: "cloud", line: "AWS, Google Cloud and Microsoft Foundry." },
  // Claude Enterprise
  { key: "workforce", name: "Claude for every employee", product: "claude-enterprise", glyph: "org", line: "Chat, Cowork, Claude Code and connectors." },
  { key: "identity", name: "Identity and access", product: "claude-enterprise", glyph: "key", line: "SSO, SCIM, domain capture and roles." },
  { key: "governance", name: "Data and governance", product: "claude-enterprise", glyph: "shield", line: "Retention, audit logs and the Compliance API." },
  { key: "security", name: "Claude Security", product: "claude-enterprise", glyph: "check", line: "Find and fix vulnerabilities (beta)." },
];

export const featureByKey = (key: string) => features.find((f) => f.key === key);

export type Product = {
  slug: ProductSlug;
  /** Full name as the pages use it. */
  name: string;
  /** Short name for the chip line and the menu. */
  short: string;
  /** "flagship" for the two ways to bring Claude in; "main" for the two products; "support" for the two supporting pages. */
  tier: "flagship" | "main" | "support";
  /** What it is for, in a word or two. */
  stage: string;
  tagline: string;
  /** Two sentences for the index. */
  summary: string;
  points: string[];
  /** The accent: colours of our own, chosen to avoid Anthropic's brand palette. */
  color: string;
  glyph: Glyph;
};

export const products: Product[] = [
  {
    slug: "claude-enterprise",
    name: "Claude Enterprise",
    short: "Enterprise",
    tier: "flagship",
    stage: "Deploy to your people",
    tagline: "Claude for every employee, with the controls IT needs.",
    summary:
      "Secure access to Chat, Claude Cowork, Claude Code and your company's connectors for the whole workforce, with SSO, SCIM, audit logs, retention controls and spend limits.",
    points: ["Chat and Cowork", "Claude Code", "SSO and SCIM", "No training by default"],
    color: "#4c7bd9",
    glyph: "org",
  },
  {
    slug: "claude-platform",
    name: "Claude Platform",
    short: "Platform",
    tier: "flagship",
    stage: "Build into your products",
    tagline: "Build Claude into your products, services and agents.",
    summary:
      "The Claude API, its tools and Claude Managed Agents, for developers building AI into applications and running production agents, directly or on AWS, Google Cloud or Microsoft Foundry.",
    points: ["Messages API", "Managed Agents", "MCP and skills", "Regional residency"],
    color: "#159c9c",
    glyph: "blocks",
  },
  {
    slug: "claude",
    name: "Claude",
    short: "Claude",
    tier: "main",
    stage: "For everyone at work",
    tagline: "Hand Claude a task, not just a question.",
    summary:
      "The Claude app on web, desktop and mobile, with Cowork's ability to work across your files and tools, finished documents and decks, and Claude inside Microsoft 365, Google Workspace, Chrome and Slack.",
    points: ["Tasks and scheduling", "Artifacts", "Connectors and skills", "Microsoft 365"],
    color: "#d9a03f",
    glyph: "chat",
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    short: "Claude Code",
    tier: "main",
    stage: "For developers",
    tagline: "An agentic coding tool for the whole codebase.",
    summary:
      "Hand Claude a bug fix, a test or a multi-day migration and steer it from the terminal, the IDE, Slack or the web. It reads the whole repository, runs your tests and opens the pull request.",
    points: ["Terminal and IDE", "Issues to PRs", "Code Review", "Managed settings"],
    color: "#7a6ff0",
    glyph: "terminal",
  },
  {
    slug: "models",
    name: "Claude models",
    short: "Models",
    tier: "support",
    stage: "Choose a model",
    tagline: "Fable, Opus, Sonnet and Haiku, and which to use when.",
    summary: "The Claude model family as Anthropic describes it, the jobs each is built for, and the controls that trade cost against intelligence.",
    points: ["Fable 5.1", "Opus 5.5", "Sonnet 5.5", "Haiku 5.5"],
    color: "#8f9aa6",
    glyph: "layers",
  },
  {
    slug: "security-and-deployment",
    name: "Security and deployment",
    short: "Security",
    tier: "support",
    stage: "Run it safely",
    tagline: "Data use, certifications, residency and where Claude runs.",
    summary: "What Anthropic says about training on your data, its certifications, regional data residency, supported countries, and running Claude through your own cloud.",
    points: ["No training by default", "SOC 2 and ISO", "Data residency", "Sri Lanka and India"],
    color: "#3a9d6e",
    glyph: "shield",
  },
];

export const mainProducts = products.filter((p) => p.tier !== "support");
export const supportProducts = products.filter((p) => p.tier === "support");

export const productBySlug = (slug: ProductSlug) => products.find((p) => p.slug === slug)!;
export const productPath = (slug: ProductSlug) => `${AN_HUB}/${slug}`;
/** Where a capability is explained: its product's page, opened on its tab. */
export const featureHref = (f: Feature) => `${productPath(f.product)}#${f.tab ?? f.key}`;
