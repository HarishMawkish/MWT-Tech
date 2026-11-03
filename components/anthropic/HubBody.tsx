import { CopyrightNotice } from "@/components/CopyrightNotice";
import { Fragment, type ReactNode } from "react";
import { AppGrid } from "./AppGrid";
import { OneDatabase } from "./OneDatabase";
import { Picker, type PickItem } from "./Picker";
import { CtaBand, Defs, d, Faq, FlowSteps, Head, Hero, Pairs, ProductIndex, SupportDirectory } from "./parts";
import { hubFaq } from "./hub-content";
import { features, productPath } from "./data";

// "Where to start": pick the need that fits, see which part of Claude answers it and what to look at next. Every capability
// named below comes from Anthropic's own pages for that product.
const NEEDS: PickItem[] = [
  {
    pain: "People are already using AI with company data, on personal accounts.",
    title: "Claude Enterprise",
    icon: "org",
    why: "Claude Enterprise gives everyone a company-controlled account, with domain capture to bring existing accounts under your organisation, SSO and SCIM, and no training on your data by default.",
    gets: ["Domain capture and account migration", "Audit logs and the Compliance API", "Retention controls and spend limits"],
    then: { label: "Security and deployment", why: "your security team will want the data and residency answers in one place." },
    links: [{ label: "Explore Claude Enterprise", href: `${productPath("claude-enterprise")}#identity` }],
  },
  {
    pain: "Our teams lose hours to reports, reconciliations and first drafts.",
    title: "Claude",
    icon: "chat",
    why: "Claude takes the task, not just the question: it works across the files and tools you allow and hands back an editable spreadsheet, deck or document, and repeats it on a schedule.",
    gets: ["Scheduled reports, ready for review", "Tracked changes in Word, highlighted cells in Excel", "Skills that repeat your procedure every time"],
    then: { label: "Claude Enterprise", why: "to give whole departments access with the right controls." },
    links: [{ label: "Explore Claude", href: `${productPath("claude")}#tasks` }],
  },
  {
    pain: "Our engineers are buried in maintenance, migrations and reviews.",
    title: "Claude Code",
    icon: "terminal",
    why: "Claude Code reads the whole codebase, runs your tests and opens pull requests, from the terminal, the IDE, Slack or the web, and reviews pull requests before people do.",
    gets: ["Issues turned into pull requests", "Multi-hour refactors and migrations", "Managed settings and OpenTelemetry for leaders"],
    then: { label: "Claude Security", why: "to scan the code for vulnerabilities and propose patches." },
    links: [{ label: "Explore Claude Code", href: `${productPath("claude-code")}#surfaces` }],
  },
  {
    pain: "We want AI inside our own product or customer service.",
    title: "Claude Platform",
    icon: "blocks",
    why: "The Claude Platform gives developers the Messages API, tools such as computer use and code execution, and Claude Managed Agents to run long-running agents in production.",
    gets: ["Structured outputs to your JSON schema", "Managed Agents with memory and vaults", "Batch and caching to control cost"],
    then: { label: "Claude models", why: "the right model per task decides both quality and cost." },
    links: [{ label: "Explore the Claude Platform", href: `${productPath("claude-platform")}#messages-api` }],
  },
  {
    pain: "Data must stay in our region and our cloud.",
    title: "Security and deployment",
    icon: "shield",
    why: "Claude runs through Amazon Web Services, Google Cloud and Microsoft Foundry, with regional endpoints for data and inference residency, including India and Singapore.",
    gets: ["Your cloud's IAM, logging and billing", "Regional data and inference residency", "SOC 2 Type 2, ISO 27001, 27017 and 27018"],
    then: { label: "Claude Platform", why: "it is the layer most cloud deployments build on." },
    links: [{ label: "Security and deployment", href: productPath("security-and-deployment") }],
  },
  {
    pain: "We need an agent to run a process end to end.",
    title: "Claude Managed Agents",
    icon: "agents",
    why: "Managed Agents runs long-running agents without your own infrastructure: a lead agent delegates to specialists, a grader checks the output against your rubric, and runs can be scheduled.",
    gets: ["Templates for research, contracts, support and data", "Self-hosted sandboxes and MCP tunnels", "Session tracing of what each agent did"],
    then: { label: "Claude Enterprise", why: "so the people who supervise agents have the same controls." },
    links: [{ label: "Explore Managed Agents", href: `${productPath("claude-platform")}#managed-agents` }],
  },
];

/** The Anthropic hub. It leads with the two ways to bring Claude in, then the two products, then everything else. */
export function HubBody() {
  const bands: { node: (light: boolean) => ReactNode }[] = [];
  const add = (node: (light: boolean) => ReactNode) => bands.push({ node });

  add((light) => (
    <section className={light ? "light" : undefined} id="products" key="products">
      <div className="in">
        <Head
          eyebrow="Two ways in, two products"
          title="Deploy Claude to your people, build it into your products, or both."
          lede="Anthropic describes two ways to bring Claude into an organisation, and two products most people use. Each has its own page here, followed by the models and the security answers."
        />
        <div className="five">
          <ProductIndex />
        </div>
        <div className="hub-sup">
          <SupportDirectory />
        </div>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="capabilities" key="capabilities">
      <div className="in">
        <Head
          eyebrow="Every capability"
          title={`${features.length} capabilities, by product.`}
          lede="What each product includes, named as Anthropic names it. Filter by product, then choose one to read about it."
        />
        <AppGrid />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="fit-together" key="fit">
      <div className="in">
        <Head
          eyebrow="How it fits together"
          title="One family of models, every surface."
          lede="Anthropic says the same frontier models power every surface, from business apps to developer tools. That is what lets one organisation use Claude in many ways without starting over each time."
        />
        <Defs
          items={[
            { title: "The models underneath", body: "Fable, Opus, Sonnet and Haiku, from the most capable to the fastest, available in the apps and through the API." },
            { title: "Where people work", body: "The Claude app on web, desktop and mobile, and Claude inside Microsoft 365, Google Workspace, Chrome and Slack." },
            { title: "Where developers work", body: "Claude Code in the terminal and IDE, and the Claude Platform for building products and agents." },
            { title: "What it can reach", body: "Connectors and the Model Context Protocol bring in your apps and data; skills package your procedures." },
            { title: "Who controls it", body: "SSO, SCIM, roles, audit logs and retention for people; workspaces, keys and limits for what developers build." },
            { title: "Where it runs", body: "Anthropic's own platform, or Amazon Web Services, Google Cloud and Microsoft Foundry, with regional residency." },
          ]}
        />
        <FlowSteps
          label="A skill, written once and used everywhere"
          steps={[
            { t: "Written", s: "A team packages its month-end procedure as a skill.", icon: "book" },
            { t: "Shared", s: "Admins deploy it across the organisation.", icon: "org" },
            { t: "Used at work", s: "Finance runs it in Claude and in Excel.", icon: "grid" },
            { t: "Used in code", s: "Engineers call it from Claude Code.", icon: "terminal" },
            { t: "Used by agents", s: "A managed agent runs it on a schedule.", icon: "agents" },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          Illustrative: built from Anthropic&rsquo;s statement that the same skill runs across Claude, Claude Code and the API without changes. What each team may use is set by your administrators.
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="start" key="start">
      <div className="in">
        <Head eyebrow="Where to start" title="Find the need that matters most." lede="Pick the situation closest to yours. We will show which part of Claude usually comes first, and what to look at next." />
        <Picker
          items={NEEDS}
          label="What do you need most?"
          kicker="Where to start"
          prompt="Pick the situation closest to yours."
          intro="Most organisations start with one of these and add the next once the first is working. Choose one on the left to see where to begin."
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="local" key="local">
      <div className="in">
        <Head eyebrow="In Sri Lanka and India" title="Our two markets, stated plainly." lede="What Anthropic's own pages say about the two countries we work in, as we read them in November 2026." />
        <Pairs
          a="Question"
          b="What Anthropic says"
          rows={[
            { l: "Availability", r: "Sri Lanka and India are both on Anthropic's Supported Regions Policy, covering the Claude apps, Claude Code, the API and Claude models through cloud platforms." },
            { l: "Data residency", r: "India is among the Asia-Pacific regions Anthropic names for regional data residency, alongside Singapore, Japan, South Korea and Australia. No Sri Lankan region is named." },
            { l: "Who counts", r: "The policy also looks at where an organisation is incorporated or headquartered and who owns or controls it, so group structures should be checked before signing." },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          <a href={`${productPath("security-and-deployment")}#regions`}>
            Availability and residency in detail <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="beside" key="beside">
      <div className="in">
        <Head
          eyebrow="Beside what you already run"
          title="Claude next to SAP, Salesforce, Odoo and MiHCM."
          lede="Claude does not replace your business systems; it works with them. What Anthropic's pages describe, and how we would apply it."
        />
        <Pairs
          a="Route"
          b="How Claude reaches it"
          rows={[
            { l: "Connectors", r: "Ready-made connectors for common apps, such as Microsoft 365, Google Drive, Gmail, Notion and Slack, and a marketplace of connectors and plugins." },
            { l: "Your own MCP servers", r: "The Model Context Protocol is an open standard; custom connectors and MCP servers can expose your own systems to Claude, and MCP tunnels reach servers in a private network." },
            { l: "The API", r: "Your applications call the Claude Platform directly, with tool use to look up and update records in your systems." },
            { l: "The browser", r: "Claude in Chrome and computer use can work in web applications that have no API, with a person approving what happens." },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          Anthropic&rsquo;s own examples include updating Salesforce opportunities from call notes. For each of your systems we would check the connector marketplace first, and where there is no connector, build and scope the connection like any integration.
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="delivery" key="delivery">
      <div className="in">
        <Head
          eyebrow="Rolling out Claude"
          title="What a Claude programme involves."
          lede="The software is ready on day one. The work is deciding what Claude may see and do, connecting it, and helping people change how they work."
        />
        <Defs
          items={[
            { title: "Governance first", body: "Identity, data classes, retention and the connectors each department may use, agreed with security and legal before launch." },
            { title: "Use cases that pay", body: "Frequent, measurable tasks in each department, chosen with the people who do them." },
            { title: "Skills and connectors", body: "Your procedures written as skills, and your systems connected through connectors or MCP servers." },
            { title: "Agents where they fit", body: "Managed agents for processes that run end to end, each with a person accountable for its output." },
            { title: "Training by role", body: "Short sessions for each function, built on that function's own tasks." },
            { title: "Measured and expanded", body: "Usage, spend and outcomes reviewed monthly, and the next use cases added." },
          ]}
        />
        <div className="decide" data-r style={d(1)}>
          <h3>Decisions to settle before you start</h3>
          <ul>
            <li>Claude Enterprise for your people, the Claude Platform for your products, or both.</li>
            <li>Direct from Anthropic, or through AWS, Google Cloud or Microsoft Foundry.</li>
            <li>Which region data is stored and processed in.</li>
            <li>Which systems Claude may reach, and what it may change without asking.</li>
            <li>Who owns Claude internally, and how new uses are approved.</li>
          </ul>
        </div>
      </div>
    </section>
  ));

  add((light) => (
    <Fragment key="faq-band">
      <CopyrightNotice inline />
      <section className={light ? "light" : undefined} id="faq" key="faq">
        <div className="in">
          <Head eyebrow="Questions" title="Straight answers." />
          <Faq items={hubFaq} />
          <div className="src" data-r>
            <p>Checked against Anthropic&rsquo;s own pages in November 2026.</p>
            <ul>
              <li><a href="https://www.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic</a></li>
              <li><a href="https://claude.com/solutions/enterprise" target="_blank" rel="noopener noreferrer">Claude enterprise solutions</a></li>
              <li><a href="https://claude.com/platform/api" target="_blank" rel="noopener noreferrer">Claude Platform</a></li>
              <li><a href="https://claude.com/product/overview" target="_blank" rel="noopener noreferrer">Claude product overview</a></li>
              <li><a href="https://claude.com/regional-compliance" target="_blank" rel="noopener noreferrer">Regional compliance</a></li>
              <li><a href="https://www.anthropic.com/legal/supported-regions" target="_blank" rel="noopener noreferrer">Supported Regions Policy</a></li>
              <li><a href="https://www.anthropic.com/company" target="_blank" rel="noopener noreferrer">Anthropic company</a></li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  ));

  return (
    <>
      <Hero
        crumb="Anthropic"
        eyebrow="Anthropic · Claude"
        title={
          <>
            Claude at work, <em>for your people and your products.</em>
          </>
        }
        lede="Claude is Anthropic's family of AI models and the products built on them. Anthropic describes two ways to bring it into an organisation: Claude Enterprise, which gives every employee Claude with the controls IT needs, and the Claude Platform, which lets developers build Claude into products and agents."
        primary={{ label: "See the two ways in", href: "#products" }}
        secondary={{ label: "Where to start", href: "#start" }}
        note="Anthropic, Claude and its product names are Anthropic's trademarks. These pages use no Anthropic logos or artwork."
        visual={<OneDatabase />}
      />
      {bands.map((b, i) => b.node(i % 2 === 0))}
      <CtaBand
        title="Not sure where to start with Claude?"
        lede="Tell us what you want AI to do for your organisation. We will help you choose between Claude Enterprise and the Claude Platform, set the guardrails and pick the first use cases."
        list={["Your goals, data and systems", "Enterprise, the Platform, or both", "A sensible, governed first step"]}
      />
    </>
  );
}
