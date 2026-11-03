// The questions the Anthropic hub answers, in our own words from Anthropic's own pages, read in November 2026. The same text
// feeds the visible FAQ and the FAQ structured data, so the two can never differ.

export const hubFaq: { q: string; a: string }[] = [
  {
    q: "Who is Anthropic, and what is Claude?",
    a: "Anthropic is an AI research and products company, set up as a public benefit corporation, whose stated mission is to ensure the world safely makes the transition through transformative AI. Claude is its family of AI models and the products built on them: the Claude app, Claude Code and the Claude Platform for developers.",
  },
  {
    q: "What are the ways to bring Claude into an organisation?",
    a: "Anthropic describes two. Claude Enterprise deploys Claude to your workforce, giving every employee chat, Claude Cowork, Claude Code and company connectors with admin controls. The Claude Platform gives developers the API to build Claude into products, services and agents. Many organisations use both.",
  },
  {
    q: "Is Claude available in Sri Lanka and India?",
    a: "Yes. Both are on Anthropic's Supported Regions Policy, which covers its apps, its API and Claude models through cloud platforms. India is also among the Asia-Pacific regions Anthropic names for regional data residency.",
  },
  {
    q: "Does Anthropic train its models on our data?",
    a: "Anthropic says that by default it does not use prompts, data or results from commercial deployments, including Claude Enterprise and the Claude Platform, to train its models.",
  },
  {
    q: "Which Claude model should we use?",
    a: "It depends on the job. Anthropic positions Opus 5.5 as the daily driver for coding and enterprise work, Sonnet 5.5 for well-scoped work at scale, Haiku 5.5 for speed and volume, and Fable 5.1 for its most ambitious long-running work. The same models power every surface.",
  },
  {
    q: "Can Claude run in our own cloud?",
    a: "Yes. Anthropic offers Claude through Amazon Web Services (including Amazon Bedrock), Google Cloud and Microsoft Foundry, billed through that cloud and counting towards your commitments.",
  },
  {
    q: "Does Claude work with Microsoft 365 and Google Workspace?",
    a: "Yes. Claude for Microsoft 365 works inside Excel, PowerPoint, Word and Outlook, and Claude for Google Workspace, in beta, inside Docs, Sheets and Slides. Connectors bring in other apps such as Google Drive, Gmail, Notion and Slack.",
  },
  {
    q: "How does Mawkish help with Claude?",
    a: "We help organisations plan, connect, govern and adopt Claude: choosing between Claude Enterprise and the Claude Platform, setting up identity and data controls, connecting Claude to the systems you run, including SAP, Salesforce and Odoo, and building the first use cases, skills and agents with your teams.",
  },
];
