import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Agent Bricks — artificial intelligence. Written against the thing we see most often: a pilot that demoed well and
 * never shipped. The page is organised around what is missing in that gap rather than around the model.
 */
export function AgentBricksBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Agent Bricks" />
          <div className="hero-grid">
            <div>
              <Kicker>Artificial intelligence</Kicker>
              <h1>
                The demo was never the hard part. <em>Shipping it was.</em>
              </h1>
              <p className="lede">
                Almost every organisation we meet has an AI pilot that worked. It answered the questions in the
                meeting, everyone was impressed, and it is still a notebook eleven months later. What stands between
                that notebook and production is dull: durable execution, memory that survives a restart, governed
                access to tools, traces you can debug from, and an agreed definition of good enough. Agent Bricks is
                Databricks&rsquo; attempt to supply all five.
              </p>
              <div className="ctas">
                <a href="#gap" className="btn pri">
                  What is actually missing <span className="ar">&rarr;</span>
                </a>
                <a href="#cheaper" className="btn sec">
                  You may not need an agent
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of a traced agent run. Sample data.">
              <Screen
                dark
                title="MLflow trace · supplier_query_agent"
                user="AI"
                label="Illustration of an MLflow trace for an agent run answering a supplier question: six steps with timings — the question received, a Genie query over governed tables, a document search over contract files, a sandboxed calculation, a draft answer, and a judge score of 0.91 — totalling 4.2 seconds, with a panel showing tools used, tokens consumed and the governing gateway policy"
              >
                <div className="body-pad tight">
                  <div className="card-f">
                    <div className="h">
                      Run 8f21c · 4.2s total
                      <span className="m">session: supplier-412</span>
                    </div>
                    <Row l="1 · question received" r="3 ms" />
                    <Row l="2 · genie_one · governed query" r="610 ms" pill={{ k: "in", t: "2 tables" }} />
                    <Row l="3 · ai_search · contract volume" r="840 ms" pill={{ k: "in", t: "4 chunks" }} />
                    <Row l="4 · sandbox · penalty calculation" r="1.1 s" pill={{ k: "own", t: "Code run" }} />
                    <Row l="5 · draft answer" r="1.6 s" />
                    <Row l="6 · judge score" r="0.91" pill={{ k: "ok", t: "Above bar" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">Governance applied</div>
                    <Row l="Model" r="via Unity Gateway" pill={{ k: "ok", t: "Allowed" }} />
                    <Row l="Tools" r="3 registered, 0 ad hoc" pill={{ k: "ok", t: "Audited" }} />
                    <Row l="Spend, this session" r="under per-user cap" pill={{ k: "own", t: "Budgeted" }} />
                  </div>
                  <div className="tiles" style={{ marginTop: "9px" }}>
                    <Tile h="Runs today" s="Across 2 agents" k="1,204" />
                    <Tile h="Above bar" s="Judge + experts" k="94" unit="%" tone="pos" />
                    <Tile h="Escalated" s="To a person" k="71" tone="own" />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the gap ---------------- */}
      <section className="light" id="gap">
        <div className="in">
          <div data-r>
            <Head eyebrow="The gap" title="Six things a notebook does not have.">
              This is the list we work through with every client who has a stalled pilot. It is rarely the model, and
              it is never the prompt.
            </Head>
          </div>
          <div className="vs" data-r>
            <div>
              <span className="lab">The pilot in a notebook</span>
              <h3>Works until something moves</h3>
              <ul>
                <li>A crash or a restart loses the run and everything it had worked out.</li>
                <li>No memory, so every conversation starts from nothing.</li>
                <li>Credentials pasted into a cell, held by whoever wrote it.</li>
                <li>No record of what the agent did, so a bad answer cannot be diagnosed.</li>
                <li>&ldquo;It seems good&rdquo; as the quality standard.</li>
                <li>Spend discovered at the end of the month.</li>
              </ul>
            </div>
            <div className="good">
              <span className="lab">What production needs</span>
              <h3>Boring, and non-negotiable</h3>
              <ul>
                <li>Durable execution, so a run survives a restart or a crash.</li>
                <li>Sessions and long-term memory, stored and governed.</li>
                <li>Registered, permissioned tools instead of ambient credentials.</li>
                <li>A trace of every step, tied to the output it produced.</li>
                <li>A written numeric bar, measured on a fixed set of real cases.</li>
                <li>Rate limits, budgets and hard caps before the first week of traffic.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what the platform provides ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="The parts" title="What Databricks supplies, piece by piece." wide>
              Agent Bricks is described as an agent developer platform rather than a framework, and the distinction is
              real: it hosts agents built with whatever framework or harness you prefer, and supplies the surrounding
              machinery.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Piece</th>
                  <th>What it does</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent Runtime</td>
                  <td data-label="What it does">
                    Hosts agents built with any framework or harness, stateful or stateless.
                  </td>
                  <td data-label="Why it matters">
                    You are not betting the project on one framework being the right one in a year.
                  </td>
                </tr>
                <tr>
                  <td>AgentKit</td>
                  <td data-label="What it does">
                    Adds durable execution, so runs survive restarts and crashes.
                  </td>
                  <td data-label="Why it matters">
                    A long-running task that loses its place on a deploy is not a production system.
                  </td>
                </tr>
                <tr>
                  <td>Agent Server</td>
                  <td data-label="What it does">
                    Built on DurableAgentServer: synchronous, streaming and background runs, with crash recovery.
                  </td>
                  <td data-label="Why it matters">
                    Background runs are what let an agent do ten minutes of work without a browser waiting on it.
                  </td>
                </tr>
                <tr>
                  <td>Memory and sessions</td>
                  <td data-label="What it does">
                    Conversation state and long-term memory, stored in Lakebase-backed stores.
                  </td>
                  <td data-label="Why it matters">
                    An agent with no memory re-asks what it was told, which is how users stop using it.
                  </td>
                </tr>
                <tr>
                  <td>Databricks Sandbox</td>
                  <td data-label="What it does">An isolated environment where an agent runs the code it writes.</td>
                  <td data-label="Why it matters">
                    Letting a model execute code is useful and must be contained. This is the containment.
                  </td>
                </tr>
                <tr>
                  <td>MCP servers and tools</td>
                  <td data-label="What it does">
                    Databricks-managed, custom and external MCP servers; Unity Catalog functions published as tools;
                    HTTP connections. Includes a Genie One MCP server for natural-language questions over governed
                    data.
                  </td>
                  <td data-label="Why it matters">
                    Every capability an agent has is a registered, permissioned object rather than a secret in a file.
                  </td>
                </tr>
                <tr>
                  <td>AI Search</td>
                  <td data-label="What it does">
                    A managed vector index with real-time syncing from the source data, for retrieval over text and
                    unstructured content.
                  </td>
                  <td data-label="Why it matters">
                    Grounding in your own documents is what separates a useful answer from a fluent one.
                  </td>
                </tr>
                <tr>
                  <td>MLflow Tracing</td>
                  <td data-label="What it does">Records every step an agent takes, in development and in production.</td>
                  <td data-label="Why it matters">
                    A bad output leads to the step that caused it instead of to a shrug.
                  </td>
                </tr>
                <tr>
                  <td>Unity Gateway</td>
                  <td data-label="What it does">
                    Governs which models, MCP servers and skills may be used, with guardrails, rate limits, budgets and
                    usage tracking.
                  </td>
                  <td data-label="Why it matters">
                    It is the only part of this list that your auditor will ask about by name.
                  </td>
                </tr>
                <tr>
                  <td>Agent Bricks CLI</td>
                  <td data-label="What it does">Scaffolds, runs and deploys agents from the command line.</td>
                  <td data-label="Why it matters">
                    An agent becomes a repository with a pipeline, which is how it gets reviewed and rolled back.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            Agents are queried through an invocation API, a Responses API, or from SQL — which means an agent can be
            called from a query, and its output treated as a column. That is a strange and useful idea worth sitting
            with for a minute.
          </p>
        </div>
      </section>

      {/* ---------------- models ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two mid">
            <div data-r>
              <Head eyebrow="Models" title="Keep the model out of the application code.">
                The best model for a job has changed roughly every quarter for three years and will keep changing. Any
                architecture that bakes a model name into application code is buying itself a rewrite on somebody
                else&rsquo;s release schedule.
              </Head>
              <p className="body-t">
                Here, frontier and open models are reached through one API behind Unity Gateway — foundation models
                served natively, plus external providers connected with your own key, with OpenAI and Anthropic named
                among them and GPT, Claude and Gemini named as examples. Traffic can be split across destinations, with
                failover for availability, and Smart Routing picks a model and harness per coding task to control
                spend.
              </p>
              <p className="body-t">
                So the model is configuration behind a governed interface. Changing it is a change to a policy, not a
                deployment — and when a cheaper model turns out to be good enough for eight of your ten cases, you can
                act on that finding the same week.
              </p>
              <div className="chips">
                <Link href={dbPath("unity-catalog")}>How the gateway governs it &rarr;</Link>
                <Link href="/services/anthropic">Our Anthropic pages &rarr;</Link>
              </div>
            </div>
            <div data-r>
              <div className="caps two-up" style={{ marginTop: 0 }}>
                <div className="cap">
                  <span className="n">Training</span>
                  <h3>Fine-tuning and pretraining</h3>
                  <p>
                    Fine-tune open models on your data, build classical ML models, or pretrain a custom model.
                    Retrieval-augmented generation, parameter-efficient fine-tuning and standard fine-tuning are all
                    supported, with Hugging Face and DeepSpeed tooling.
                  </p>
                  <div className="foot">
                    <b>Try grounding first.</b> It is cheaper and usually wins.
                  </div>
                </div>
                <div className="cap">
                  <span className="n">Serving</span>
                  <h3>One deployment path</h3>
                  <p>
                    Model Serving covers agents, generative models and classical ML behind a unified deployment, with
                    latency and drift monitoring and retraining pipelines after go-live.
                  </p>
                  <div className="foot">
                    <b>Watch the endpoint type.</b> Dedicated endpoints bill whether busy or idle.
                  </div>
                </div>
                <div className="cap">
                  <span className="n">Lifecycle</span>
                  <h3>Managed MLflow</h3>
                  <p>
                    Hosted MLflow for experiments, models and generative AI, with the registry inside Unity Catalog so
                    models inherit its access control and lineage.
                  </p>
                  <div className="foot">
                    <b>Open at the core.</b> MLflow is a Linux Foundation project.
                  </div>
                </div>
                <div className="cap">
                  <span className="n">Documents</span>
                  <h3>Document Intelligence</h3>
                  <p>
                    Parsing, extraction and classification of enterprise documents at scale, with governance built in
                    rather than bolted on to a separate vendor.
                  </p>
                  <div className="foot">
                    <b>Often the whole project.</b> See below.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- evaluation ---------------- */}
      <section id="evaluation">
        <div className="in">
          <div className="two wide-r">
            <div data-r>
              <Head eyebrow="Evaluation" title="Define good enough before you build anything.">
                This is the discipline we insist on, and the one clients resist most, because it feels like
                bureaucracy. It is the opposite: it is the only thing that lets you ship. Without a number, every
                review is an argument about anecdotes, and the person with the most memorable bad example wins.
              </Head>
              <p className="body-t">
                Evaluation is part of the platform rather than a separate exercise: LLM judges, custom scorers you
                write for your own criteria, and structured feedback from the people who actually know the right
                answer, all tied back to traces so a failure leads to its cause.
              </p>
              <p className="body-t">
                What we add is the governance around it: a fixed set of real cases agreed up front, a written bar, and
                a rule that the bar does not move to meet the result. If the agent reaches 78% and the bar was 90%,
                that is useful information, not a negotiation.
              </p>
              <div className="callout">
                <span className="m">&frac34;</span>
                <div>
                  <h3>And a rule for what happens below the bar</h3>
                  <p>
                    The most valuable design decision in most agent projects is not how to be right more often — it is
                    what to do when the agent is unsure. Escalate to a person, say so plainly, decline. An agent that
                    escalates 30% of cases and is right about the rest is deployable. One that is right 95% of the time
                    and confident about the other 5% is not.
                  </p>
                </div>
              </div>
            </div>

            <Fig caption="Our illustration of an evaluation scorecard. Sample data.">
              <Screen
                title="Evaluation · supplier_query_agent v4"
                user="EV"
                label="Illustration of an evaluation scorecard: 240 agreed test cases, 94 percent above the bar set at 90 percent, with breakdowns by judge score, expert agreement, grounding and refusal behaviour, and a list of four failing cases each annotated with the step that caused the failure"
              >
                <div className="body-pad">
                  <div className="tiles">
                    <Tile h="Agreed cases" s="Fixed before build" k="240" />
                    <Tile h="Above bar" s="Bar set at 90%" k="94" unit="%" tone="pos" />
                    <Tile h="Refused correctly" s="Out of domain" k="31" tone="own" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      How it scored
                      <span className="m">judges + expert review</span>
                    </div>
                    <Row l="Grounded in a cited source" r="97%" pill={{ k: "ok", t: "Pass" }} />
                    <Row l="Expert agreed with answer" r="92%" pill={{ k: "ok", t: "Pass" }} />
                    <Row l="Correct refusal when unsure" r="88%" pill={{ k: "wr", t: "Below bar" }} />
                    <Row l="Tone and format" r="99%" pill={{ k: "ok", t: "Pass" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">Failing cases, with cause</div>
                    <Row l="Penalty on a renewed contract" r="step 3 · wrong chunk retrieved" pill={{ k: "er", t: "Fix" }} />
                    <Row l="Multi-currency total" r="step 4 · sandbox rounding" pill={{ k: "er", t: "Fix" }} />
                    <Row l="Question about headcount" r="should have refused" pill={{ k: "wr", t: "Guardrail" }} />
                    <Row l="Supplier not in catalogue" r="answered from memory" pill={{ k: "wr", t: "Guardrail" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
          <div className="facts" data-r>
            <div className="fact">
              <b>44%</b>
              <span>More accurate text-to-code knowledge agent, as an agent system</span>
              <span className="who">FactSet, via Databricks</span>
            </div>
            <div className="fact">
              <b>96%</b>
              <span>Accuracy reported with AI agents</span>
              <span className="who">Intercontinental Exchange, via Databricks</span>
            </div>
            <div className="fact">
              <b>10x</b>
              <span>Lower machine-learning cost for personalised viewing</span>
              <span className="who">Comcast, via Databricks</span>
            </div>
            <div className="fact">
              <b>$10m</b>
              <span>Productivity gains attributed to AI agents</span>
              <span className="who">Block, via Databricks</span>
            </div>
          </div>
          <p className="note" data-r>
            Customer figures published by Databricks, without methods. We quote them to show the shape of the results
            companies report, not as a forecast. The only number that should influence your decision is the one your
            own evaluation produces on your own cases.
          </p>
        </div>
      </section>

      {/* ---------------- the cheaper answer ---------------- */}
      <section className="light" id="cheaper">
        <div className="in">
          <div data-r>
            <Head eyebrow="Before you build an agent" title="Half of these projects are a SQL function.">
              We would rather lose the bigger piece of work than sell you one. A great many requests that arrive
              described as &ldquo;an AI agent&rdquo; are, on inspection, a batch job: read these five thousand
              documents, pull out these eight fields, flag the ones that disagree with the purchase order.
            </Head>
          </div>
          <div className="caps two-up" data-r>
            <div className="cap">
              <span className="n">Agent</span>
              <h3>When you genuinely need one</h3>
              <ul>
                <li>The task takes several steps whose order depends on what was found.</li>
                <li>It must decide which tool to use, not just run one.</li>
                <li>It holds a conversation, or state across time.</li>
                <li>It needs to escalate, with judgement about when.</li>
              </ul>
              <div className="foot">
                <b>Then build it properly</b> — durable, traced, governed, measured.
              </div>
            </div>
            <div className="cap">
              <span className="n">Function</span>
              <h3>When a SQL call will do</h3>
              <ul>
                <li>Extracting fields from documents into a table.</li>
                <li>Classifying text against a known set of labels.</li>
                <li>Summarising, translating or masking at volume.</li>
                <li>Forecasting a series or ranking what drove a change.</li>
              </ul>
              <div className="foot">
                <Link href={dbPath("lakehouse")}>
                  <b>AI functions in SQL &rarr;</b>
                </Link>
              </div>
            </div>
          </div>
          <p className="note" data-r>
            The second column is cheaper to build, cheaper to run, easier to test, and already governed by the
            catalogue. It also tends to deliver the value people actually asked for. Start there, and reach for an
            agent when the work genuinely branches.
          </p>
          <div className="quote" data-r>
            <p>
              An agent is only as good as what it can retrieve. The most common reason a pilot disappoints is not the
              model — it is that nobody described the data.
            </p>
            <span className="by">Which is why we start with the catalogue, not the prompt</span>
          </div>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What an agent stands on.">
              Grounding, memory and a place for people to use it.
            </Head>
          </div>
          <RelatedGrid slugs={["unity-catalog", "lakebase", "apps"]} cols={3} />
        </div>
      </section>

      <Onward slug="agent-bricks" />
      <Copyright />
      <FaqSection slug="agent-bricks" title="What people ask about agents." />

      <CtaBand
        title="Bring us your stalled pilot."
        body="Tell us what it does, what it demoed on, and why it has not shipped. We will tell you which of the six missing pieces it needs, whether it should be an agent at all, and what a written bar for good enough would look like on your cases. Often the answer is smaller and cheaper than the one you came in with."
        label="Book an agent review"
        points={[
          "An honest read on whether you need an agent",
          "A written accuracy bar before any build",
          "Grounding in governed, described data",
          "Tools registered, not credentials shared",
          "A rule for what happens when it is unsure",
        ]}
      />
    </>
  );
}
