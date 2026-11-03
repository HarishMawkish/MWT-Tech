import type { ProductContent } from "../content-types";

// The Claude models. Every statement below comes from Anthropic's own model pages (Fable, Mythos, Opus, Sonnet and Haiku on
// anthropic.com) and the Claude Platform page, read in November 2026. Token prices, benchmark scores and the percentage
// improvements Anthropic reports between versions have been left out.

export const models: ProductContent = {
  slug: "models",
  crumb: "Models",
  eyebrow: "Claude models",
  title: ["Four models,", "and which to use when."],
  lede: "Claude is a family of models, not one. Anthropic's current line-up runs from Fable 5.1, built for multi-day autonomous work, through Opus 5.5 and Sonnet 5.5 to Haiku 5.5, its fastest and cheapest. The same models power every Claude surface, so choosing one is about the job: how hard it is, how long it runs and how fast and cheap it needs to be.",
  primary: { label: "Compare the four", href: "#family" },
  secondary: { label: "Controls that change cost", href: "#controls" },
  note: "Model versions change often. These are the models Anthropic lists as current in November 2026.",
  hero: {
    app: "Models · Routing",
    icon: "layers",
    label: "Illustration of a multi-model system: a larger model plans and hands subtasks to faster ones. Sample data.",
    steps: { title: "One job, three models", items: [{ t: "Opus 5.5 plans the work", state: "done" }, { t: "Sonnet 5.5 drafts each section", state: "done" }, { t: "Haiku 5.5 classifies 4,000 tickets", state: "now" }, { t: "Opus 5.5 reviews the result" }] },
    bars: { title: "Speed and cost, relative", rows: [["Haiku 5.5", 20, "Fastest", "g"], ["Sonnet 5.5", 45, "Balanced"], ["Opus 5.5", 70, "Deepest daily", "o"], ["Fable 5.1", 95, "Frontier", "r"]] },
  },
  heroCaption: "Illustration, simplified. Positions are indicative, not measured.",

  does: {
    eyebrow: "How to choose",
    title: "Match the model to the job.",
    lede: "Anthropic's own advice runs through its model pages: use the most capable model where judgement matters, and faster ones for volume, often in the same system.",
    items: [
      { title: "Hard, long, open-ended", body: "Multi-day autonomous projects, ambitious codebase-wide work and frontier research: Fable 5.1." },
      { title: "Serious daily work", body: "Agentic coding, long-running agents and enterprise workflows that need precise instruction-following: Opus 5.5." },
      { title: "Well-scoped work at scale", body: "Everyday coding, customer-facing agents and multi-tool workflows that run repeatedly: Sonnet 5.5." },
      { title: "Speed and volume", body: "Real-time chat and voice, classification, summarisation, routing and sub-agents: Haiku 5.5." },
      { title: "Several at once", body: "A more intelligent model plans and hands subtasks to Haiku, so many agents run in parallel at lower cost." },
      { title: "Effort, per task", body: "Effort controls trade cost against intelligence task by task; Haiku 5.5 is the first Haiku to have them." },
    ],
  },

  blocks: [
    {
      id: "family",
      kind: "pairs",
      eyebrow: "The family",
      title: "The four models, as Anthropic describes them.",
      lede: "Each is available on the Claude Platform and on Amazon Web Services, Google Cloud and Microsoft Foundry.",
      a: "Model",
      b: "What it is for",
      rows: [
        { l: "Fable 5.1", r: "A Mythos-level model for the most ambitious, long-running projects: jobs that take hours across many applications, codebase-wide features, code review, performance work and multi-day autonomous sessions. It writes its own tests and uses vision to check outputs against the goal. Available in Claude on Pro, Max, Ultra, Team and Enterprise." },
        { l: "Opus 5.5", r: "A hybrid reasoning model with a 1M-token context window, built as the enterprise daily driver: long-running coding in large codebases, agents that coordinate sub-agents and use memory, financial analysis, and vision and computer use. Anthropic says it communicates clearly and follows writing rules. Available in Claude on Pro, Max, Ultra, Team and Enterprise." },
        { l: "Sonnet 5.5", r: "A hybrid reasoning model with a 1M-token context window: a faster, lower-cost complement to Opus for well-scoped coding, agent tasks such as investigation, review and drafting, design and visual work, and office tasks. Anyone can use it in Claude." },
        { l: "Haiku 5.5", r: "Anthropic's fastest and most efficient model, for high-volume, cost-sensitive work: classification, summarisation, real-time chat and voice, sub-agents, simple coding and repetitive browser and desktop automation. Selectable in Claude on every plan, and in Claude Code." },
      ],
      link: { label: "Claude Platform models and pricing", href: "https://claude.com/platform/api" },
    },
    {
      id: "mythos",
      kind: "defs",
      eyebrow: "Mythos and Fable",
      title: "Why there is a model most people cannot use.",
      lede: "Anthropic's most capable model class, Claude Mythos, is strong enough in cybersecurity and biology that Anthropic limits who can use it. Fable is how those capabilities are released more widely.",
      items: [
        { title: "Claude Mythos 5.1", body: "Anthropic's most capable model class for cybersecurity and biology research, available only to vetted cyber-defenders and life scientists through trusted access programmes." },
        { title: "Claude Fable 5.1", body: "The same underlying model as Mythos 5.1, with safeguards for cybersecurity and biology. Flagged requests in those areas are routed to less capable models, and you are not charged Fable prices for them." },
        { title: "Verification programmes", body: "Security teams can apply to the Cyber Verification Program for advanced cyber capabilities on Opus 5.5, Sonnet 5.5 and Mythos 5.1; life-science researchers to the Life Sciences Verification Program." },
        { title: "Retention for safety monitoring", body: "Using Fable or Mythos requires 30-day data retention for safety monitoring by default. For Fable, enterprises eligible for Enterprise Frontier Safeguards can keep data on their own cloud instead." },
      ],
      note: "Claude Security, Anthropic's code-scanning product for Claude Enterprise, now runs on Mythos 5.1.",
    },
    {
      id: "controls",
      kind: "pairs",
      eyebrow: "Controls that change cost",
      title: "The same model, cheaper or faster.",
      lede: "From Anthropic's model and platform pages. Prices change, so none are quoted here.",
      a: "Control",
      b: "What it does",
      rows: [
        { l: "Effort", r: "Choose how hard Claude works on a task. Anthropic's model pages describe fine-grained control over thinking effort for API users." },
        { l: "Prompt caching", r: "Reuse background knowledge and examples across requests at a much lower price for the cached part; Anthropic quotes cache reads separately on each model." },
        { l: "Batch processing", r: "Send large volumes asynchronously for a lower price when results are not needed in real time." },
        { l: "Fast mode", r: "Faster responses from Opus 5.5 at a higher price per token, in Claude Code and on the Claude Platform." },
        { l: "US-only inference", r: "For workloads that must run in the United States, at a premium on input and output tokens." },
        { l: "Context window", r: "Up to 1M tokens depending on the model. Longer prompts cost more; Haiku 5.5 is priced differently above 100K tokens." },
      ],
    },
  ],

  faq: [
    { q: "Which model should we use?", a: "Start from the job. Anthropic positions Opus 5.5 as the enterprise daily driver, Sonnet 5.5 for well-scoped work at scale, Haiku 5.5 for speed and volume, and Fable 5.1 for the hardest long-running work. Many systems use more than one." },
    { q: "Are the same models in the Claude app and the API?", a: "Yes. Anthropic says the same frontier models power every surface, from business apps to developer tools. Which models are available in the app depends on the plan." },
    { q: "What is the difference between Fable and Mythos?", a: "They are the same underlying model. Mythos 5.1 is limited to vetted organisations because of its cybersecurity and biology capabilities; Fable 5.1 adds safeguards in those areas so it can be offered widely." },
    { q: "Do some models keep our data longer?", a: "Yes. Anthropic says using Fable or Mythos requires 30-day retention for safety monitoring by default. For Fable, enterprises eligible for Enterprise Frontier Safeguards can keep data on their own cloud instead." },
    { q: "Why are there no prices or benchmark scores here?", a: "They change with each release. Anthropic publishes current prices on its Claude Platform page and benchmarks on each model page, both linked below." },
  ],
  sources: [
    { label: "Claude Fable", href: "https://www.anthropic.com/claude/fable" },
    { label: "Claude Mythos", href: "https://www.anthropic.com/claude/mythos" },
    { label: "Claude Opus", href: "https://www.anthropic.com/claude/opus" },
    { label: "Claude Sonnet", href: "https://www.anthropic.com/claude/sonnet" },
    { label: "Claude Haiku", href: "https://www.anthropic.com/claude/haiku" },
    { label: "Claude Platform", href: "https://claude.com/platform/api" },
  ],
  checked: "Checked against Anthropic's own pages in November 2026.",
};
