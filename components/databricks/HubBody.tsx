import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, RelatedGrid } from "./parts";
import { Fig, Row, Screen, Tile } from "./screens";
import { dbPath, platformProducts, topicPages } from "./data";

/**
 * The Databricks hub. It has one job: make a reader who arrived knowing the word "lakehouse" and nothing else
 * understand what the platform is, which eight parts it has, how it sits beside the systems they already run, and
 * which one of those parts their own problem belongs to.
 */
export function HubBody() {
  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <div className="in">
          <Crumbs />
          <div className="hero-grid">
            <div>
              <Kicker>The Data + AI Platform</Kicker>
              <h1>
                One copy of your data. <em>Every engine that needs it.</em>
              </h1>
              <p className="lede">
                Most companies keep their data twice: a warehouse for the people who report on it and a lake for the
                people who model it, with a nightly job copying between them and two sets of permissions nobody can
                fully explain. Databricks is the argument that you only need it once — as open files in your own cloud
                storage, with a warehouse engine, a pipeline engine, a Postgres database, a BI layer and an agent
                runtime all reading the same tables under one catalogue.
              </p>
              <div className="ctas">
                <a href="#platform" className="btn pri">
                  The eight parts <span className="ar">&rarr;</span>
                </a>
                <a href="#start" className="btn sec">
                  Where should we start?
                </a>
              </div>
              <p className="name-note">
                Everything on these pages is taken from what <b>Databricks publishes</b> — its product pages, its
                documentation, its engineering blog and its newsroom. Where its own pages contradict each other, or
                where a price or a release date looks likely to move, we say so rather than choose.
              </p>
            </div>

            <Fig caption="Our illustration of one workspace reading one set of tables. Sample data.">
              <Screen
                title="Workspace · one catalogue, four workloads"
                search="Search tables, models, agents"
                user="DK"
                label="Illustration of a Databricks workspace: a tile row showing 1 copy of data, 4 engines reading it, 212 governed tables and 1 permission model; beneath it a list of four workloads reading the same sales table — a finance dashboard, a nightly pipeline, a pricing agent and an internal app — each with its own compute and its own status"
              >
                <div className="body-pad">
                  <div className="tiles four">
                    <Tile h="Copies of the data" s="In object storage" k="1" tone="own" />
                    <Tile h="Engines on it" s="SQL, pipelines, AI, app" k="4" />
                    <Tile h="Governed tables" s="Unity Catalog" k="212" />
                    <Tile h="Permission models" s="For all of the above" k="1" tone="pos" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Reading main.sales.order_line
                      <span className="m">last 15 minutes</span>
                    </div>
                    <Row l="Finance dashboard · 41 viewers" r="Serverless SQL" pill={{ k: "ok", t: "Live" }} />
                    <Row l="Nightly margin pipeline" r="Lakeflow" pill={{ k: "in", t: "Streaming" }} />
                    <Row l="Pricing agent · 1,204 calls" r="Agent Bricks" pill={{ k: "ok", t: "Traced" }} />
                    <Row l="Stock cover app" r="Databricks Apps" pill={{ k: "own", t: "12 users" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the problem it is answering ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Why this exists" title="The two-copy problem, and what it costs you.">
              Nobody set out to build it this way. A warehouse arrived first, for reporting. Then the data science team
              needed raw history the warehouse could not hold economically, so a lake appeared. Then both needed to be
              kept in step.
            </Head>
          </div>
          <div className="vs" data-r>
            <div>
              <span className="lab">The shape most estates are in</span>
              <h3>Two copies, two sets of rules</h3>
              <ul>
                <li>A warehouse holding curated tables, priced to discourage keeping history.</li>
                <li>A lake holding the raw history, with permissions managed separately.</li>
                <li>Pipelines copying between them, which are the first thing to break and the last thing anyone
                  documents.</li>
                <li>Two definitions of revenue, because each side modelled it independently.</li>
                <li>A separate serving database for anything that needed an answer in milliseconds, and a third copy
                  to feed it.</li>
                <li>Machine-learning features computed one way for training and another way for production.</li>
              </ul>
            </div>
            <div className="good">
              <span className="lab">What a lakehouse changes</span>
              <h3>One copy, one catalogue</h3>
              <ul>
                <li>Tables are open files — Delta Lake or Apache Iceberg — in storage you own, in your region.</li>
                <li>ACID transactions, table history and time travel sit on top of those files, so the lake behaves
                  like a warehouse.</li>
                <li>One catalogue governs tables, files, models, dashboards and agents with the same privileges.</li>
                <li>Metric definitions are held once and used by every dashboard, question and agent.</li>
                <li>A real-time tier and a Postgres database read the same governed data instead of a copy of it.</li>
                <li>Another engine can read your files tomorrow, which is what makes leaving possible.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r>
            <b>The honest caveat:</b> consolidating onto one platform trades several small lock-ins for one large
            commercial relationship. The open file formats are the hedge against that, and they are a real one — but
            the engine, the catalogue, the pipelines and the agent runtime are not portable. Go in knowing which part
            is open and which part is not.
          </p>
        </div>
      </section>

      {/* ---------------- the platform, part by part ---------------- */}
      <section id="platform">
        <div className="in">
          <div data-r>
            <Head eyebrow="The platform" title="Eight parts, as Databricks itself lists them." wide>
              Databricks groups its own product menu by job rather than by technology: data engineering, data
              warehousing, governance, BI, AI, database, application development, sharing. Each of the eight has a page
              here, written to be read on its own.
            </Head>
          </div>
          <RelatedGrid slugs={platformProducts.map((p) => p.slug)} cols={4} />

          <div className="dia" data-r>
            <div className="dh">How the eight sit relative to one another</div>
            <div className="scroll">
              <svg viewBox="0 0 980 332" role="img" aria-labelledby="db-stack-t">
              <title id="db-stack-t">
                A diagram in four bands. At the bottom, your cloud object storage holding open Delta Lake and Apache
                Iceberg files. Above it, Unity Catalog running the full width as the governance layer. Above that, five
                engines reading the same tables: Lakeflow for pipelines, Lakehouse for SQL, Lakebase for Postgres,
                Agent Bricks for AI and OpenSharing for sharing outward. At the top, the two places people meet the
                platform: Genie for questions and dashboards, and Databricks Apps for internal tools.
              </title>
              <defs>
                <linearGradient id="dbg" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="var(--a)" stopOpacity="0.5" />
                  <stop offset="1" stopColor="var(--a)" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <g fontFamily="var(--display)" fontSize="13" fontWeight="700">
                {/* people layer */}
                <rect x="0" y="0" width="478" height="58" rx="12" fill="#9b5de5" fillOpacity="0.14" stroke="#9b5de5" strokeOpacity="0.5" />
                <text x="24" y="26" fill="#c9a6f5">Genie</text>
                <text x="24" y="45" fill="var(--muted)" fontSize="11.5" fontWeight="500">Dashboards, questions, metric definitions</text>
                <rect x="502" y="0" width="478" height="58" rx="12" fill="#5a6ff0" fillOpacity="0.14" stroke="#5a6ff0" strokeOpacity="0.5" />
                <text x="526" y="26" fill="#a9b4f7">Databricks Apps</text>
                <text x="526" y="45" fill="var(--muted)" fontSize="11.5" fontWeight="500">Internal tools on serverless compute</text>

                {/* engines */}
                <rect x="0" y="86" width="186" height="76" rx="12" fill="#ef8a2b" fillOpacity="0.13" stroke="#ef8a2b" strokeOpacity="0.5" />
                <text x="20" y="112" fill="#f3b472">Lakeflow</text>
                <text x="20" y="131" fill="var(--muted)" fontSize="11" fontWeight="500">Ingest and</text>
                <text x="20" y="146" fill="var(--muted)" fontSize="11" fontWeight="500">transform</text>

                <rect x="198" y="86" width="186" height="76" rx="12" fill="#ff3621" fillOpacity="0.14" stroke="#ff3621" strokeOpacity="0.55" />
                <text x="218" y="112" fill="#ff8f7c">Lakehouse</text>
                <text x="218" y="131" fill="var(--muted)" fontSize="11" fontWeight="500">SQL, BI and</text>
                <text x="218" y="146" fill="var(--muted)" fontSize="11" fontWeight="500">real time</text>

                <rect x="396" y="86" width="186" height="76" rx="12" fill="#13a0a0" fillOpacity="0.13" stroke="#13a0a0" strokeOpacity="0.5" />
                <text x="416" y="112" fill="#5ec9c9">Lakebase</text>
                <text x="416" y="131" fill="var(--muted)" fontSize="11" fontWeight="500">Postgres for apps</text>
                <text x="416" y="146" fill="var(--muted)" fontSize="11" fontWeight="500">and agents</text>

                <rect x="594" y="86" width="186" height="76" rx="12" fill="#e4376a" fillOpacity="0.13" stroke="#e4376a" strokeOpacity="0.5" />
                <text x="614" y="112" fill="#f087a4">Agent Bricks</text>
                <text x="614" y="131" fill="var(--muted)" fontSize="11" fontWeight="500">Build, evaluate</text>
                <text x="614" y="146" fill="var(--muted)" fontSize="11" fontWeight="500">and run agents</text>

                <rect x="794" y="86" width="186" height="76" rx="12" fill="#2ba86f" fillOpacity="0.13" stroke="#2ba86f" strokeOpacity="0.5" />
                <text x="814" y="112" fill="#73cfa0">OpenSharing</text>
                <text x="814" y="131" fill="var(--muted)" fontSize="11" fontWeight="500">Out to other</text>
                <text x="814" y="146" fill="var(--muted)" fontSize="11" fontWeight="500">companies</text>

                {/* governance */}
                <rect x="0" y="190" width="980" height="56" rx="12" fill="url(#dbg)" stroke="#3d7df6" strokeOpacity="0.55" />
                <text x="24" y="215" fill="#9bc0fb">Unity Catalog</text>
                <text x="24" y="234" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  One permission model, column-level lineage and shared business meaning for tables, files, models, dashboards and agents
                </text>

                {/* storage */}
                <rect x="0" y="274" width="980" height="58" rx="12" fill="var(--dia-n)" stroke="var(--line)" />
                <text x="24" y="299" fill="var(--fg)">Your cloud object storage</text>
                <text x="24" y="318" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  Open Delta Lake and Apache Iceberg files, in your account, in your region — readable by other engines
                </text>
              </g>
            </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "#9b5de5" }} /> Where people meet it
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> Engines on the same tables
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#3d7df6" }} /> Governance, across all of it
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--dia-n-mark)" }} /> Storage you own
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the company ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="Who builds it" title="A company that gave away its foundations.">
                Databricks was founded in 2013 by the people who created Apache Spark at Berkeley, and it has kept
                open-sourcing the layers underneath its product: Spark itself, then Delta Lake, then MLflow, then Unity
                Catalog. The pattern is deliberate — the formats and the engine core are open, and the managed platform
                around them is what you pay for.
              </Head>
              <p className="body-t">
                That history is the reason the openness claim is more than marketing. Delta Lake and MLflow are Linux
                Foundation projects; Delta Sharing was developed with the Linux Foundation as a vendor-neutral
                protocol. It is also why so much of the vocabulary — Spark, notebooks, Delta tables — is already in
                your team&rsquo;s hands even if Databricks is not.
              </p>
            </div>
            <div data-r>
              <div className="facts three">
                <div className="fact">
                  <b>2013</b>
                  <span>Founded, by the creators of Apache Spark</span>
                </div>
                <div className="fact">
                  <b>20,000+</b>
                  <span>Organisations using the platform</span>
                  <span className="who">Databricks&rsquo; own figure</span>
                </div>
                <div className="fact">
                  <b>70%</b>
                  <span>Of the Fortune 500, it says</span>
                  <span className="who">Databricks&rsquo; own figure</span>
                </div>
                <div className="fact">
                  <b>1,200+</b>
                  <span>Cloud, software and consulting partners</span>
                </div>
                <div className="fact">
                  <b>4</b>
                  <span>Open-source projects it created: Spark, Delta Lake, MLflow, Unity Catalog</span>
                </div>
                <div className="fact">
                  <b>3</b>
                  <span>Clouds it runs on: AWS, Azure and Google Cloud</span>
                </div>
              </div>
              <p className="note">
                Customer and adoption numbers on this page are Databricks&rsquo; own, published on its about page and
                its product pages. We have not independently verified them, and we label them so you can weigh them
                accordingly. The founding date, the open-source projects and the cloud support are matters of record.
              </p>
            </div>
          </div>

          <div className="quote" data-r>
            <p>
              The files are open so you can leave. The platform is good enough that you probably won&rsquo;t. Both
              halves of that sentence are the strategy.
            </p>
            <span className="by">Our reading of it, not a Databricks statement</span>
          </div>
        </div>
      </section>

      {/* ---------------- beside what you already run ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Alongside your systems" title="It does not replace the systems that run your business.">
              This is the question we are asked first, usually with some suspicion, and the answer is simple. Your ERP
              runs your processes. Your CRM runs your pipeline. Your HR system runs your payroll. Databricks is where
              what came out of them gets combined, measured and built on.
            </Head>
          </div>
          <div className="caps two-up" data-r>
            <div className="cap">
              <span className="n">SAP</span>
              <h3>A connector built by both vendors</h3>
              <p>
                SAP and Databricks have published a connector that shares data between SAP Business Data Cloud and
                Databricks over the open sharing protocol, in both directions, with no copy made. SAP data products
                mount as catalogues in Unity Catalog, and the table comments, keys and governance tags come with them.
              </p>
              <div className="foot">
                <Link href={dbPath("sap-business-data-cloud")}>
                  <b>SAP Business Data Cloud and Databricks &rarr;</b>
                </Link>
              </div>
            </div>
            <div className="cap">
              <span className="n">Salesforce</span>
              <h3>A managed connector, change captured</h3>
              <p>
                Salesforce is one of the managed sources in Lakeflow Connect: the connector handles incremental
                ingestion using a cursor column and keeps the destination streaming tables current, which is a
                different thing from the scheduled export most teams have today.
              </p>
              <div className="foot">
                <Link href={dbPath("lakeflow")}>
                  <b>How ingestion works &rarr;</b>
                </Link>
              </div>
            </div>
            <div className="cap">
              <span className="n">Odoo and other Postgres systems</span>
              <h3>Change data capture, not a nightly dump</h3>
              <p>
                Anything on PostgreSQL, MySQL or SQL Server — which includes an Odoo database — can be ingested through
                a database connector with an ingestion gateway reading the change stream, rather than a full extract
                that competes with your users for the server.
              </p>
              <div className="foot">
                <Link href="/services/odoo">
                  <b>Our Odoo pages &rarr;</b>
                </Link>
              </div>
            </div>
            <div className="cap">
              <span className="n">Claude and other models</span>
              <h3>Models behind one governed gateway</h3>
              <p>
                Unity Gateway puts frontier and open models behind a single API with guardrails, rate limits, budgets
                and usage tracking — Anthropic and OpenAI among the named providers, with your own key. Databricks&rsquo;
                own security product uses Claude models inside it.
              </p>
              <div className="foot">
                <Link href="/services/anthropic">
                  <b>Our Anthropic pages &rarr;</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what changed recently ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Recently" title="What arrived in the last year, and how finished it is.">
              This platform is moving quickly enough that advice eighteen months old is misleading. Several things on
              it are genuinely new, and a few are not finished. Knowing which is which is the difference between a
              design that ships and a design that waits.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>What</th>
                  <th>What it is</th>
                  <th className="nw">How finished</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lakehouse//RT</td>
                  <td data-label="What it is">
                    A real-time tier on a new engine called Reyden, answering queries on governed Delta and Iceberg
                    tables in milliseconds at high concurrency, so dashboards and apps stop needing a separate serving
                    database.
                  </td>
                  <td data-label="How finished" className="nw">
                    Beta, selected read-only workloads. Announced June 2026.
                  </td>
                </tr>
                <tr>
                  <td>The new Genie</td>
                  <td data-label="What it is">
                    The business-user experience formerly called Databricks One, renamed and widened: questions
                    answered across spaces rather than inside one, reaching connected sources such as SharePoint and
                    Google Drive, with account-level access and identity sync.
                  </td>
                  <td data-label="How finished" className="nw">
                    Generally available on web. Mobile apps on request.
                  </td>
                </tr>
                <tr>
                  <td>Agent Bricks</td>
                  <td data-label="What it is">
                    An agent development platform rather than a library: durable runtime, memory and sessions,
                    sandboxed code execution, MCP tools, tracing and evaluation, governed by Unity Gateway.
                  </td>
                  <td data-label="How finished" className="nw">
                    Shipping, with parts arriving continuously.
                  </td>
                </tr>
                <tr>
                  <td>Lakebase</td>
                  <td data-label="What it is">
                    Serverless Postgres with storage and compute separated, instant branching, scale to zero, and a
                    change feed into the lakehouse with no pipeline between.
                  </td>
                  <td data-label="How finished" className="nw">
                    Available, with a published uptime SLA.
                  </td>
                </tr>
                <tr>
                  <td>Unity Gateway</td>
                  <td data-label="What it is">
                    Governance applied to AI at runtime: which models, agents, tools and MCP servers may be used, by
                    whom, with rate limits, budgets, guardrails and usage attribution.
                  </td>
                  <td data-label="How finished" className="nw">
                    Available. Naming still settling against &ldquo;AI Gateway&rdquo; in places.
                  </td>
                </tr>
                <tr>
                  <td>Lakewatch</td>
                  <td data-label="What it is">
                    Databricks&rsquo; own security monitoring product, built as a security lakehouse rather than a tool
                    you copy logs into, with triage agents and an assistant that writes and tests detections.
                  </td>
                  <td data-label="How finished" className="nw">
                    Private preview. Announced March 2026.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            We keep this table current because it is the one most people need and nobody publishes. If a design of
            yours depends on something in beta, we will say so in writing, with what the fallback is.
          </p>
        </div>
      </section>

      {/* ---------------- where to start ---------------- */}
      <section id="start">
        <div className="in">
          <div data-r>
            <Head eyebrow="Where to start" title="Begin with the thing that is actually costing you.">
              Nobody needs a platform. People need a specific problem to stop happening. Find the sentence below that
              sounds like your week, and the page behind it is the one to read first.
            </Head>
          </div>
          <ul className="steps" data-r>
            <li>
              <div>
                <h3>&ldquo;Three teams bring three different revenue numbers to the same meeting.&rdquo;</h3>
                <p>
                  This is a definition problem wearing a data problem&rsquo;s clothes. Both numbers are usually
                  correctly calculated from different rules. Start with shared business semantics in the catalogue, so
                  the metric is defined once and every dashboard, question and agent computes it the same way.{" "}
                  <Link href={dbPath("unity-catalog")}>Unity Catalog &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>&ldquo;Our SAP data is the data we need, and we cannot get at it.&rdquo;</h3>
                <p>
                  The connector SAP and Databricks built shares data products into Unity Catalog with no copy and with
                  the business meaning attached, and shares Databricks tables back. Start there rather than by writing
                  another extract.{" "}
                  <Link href={dbPath("sap-business-data-cloud")}>SAP Business Data Cloud and Databricks &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>&ldquo;Every dashboard is slow and the warehouse bill keeps climbing.&rdquo;</h3>
                <p>
                  Usually a handful of settings rather than a rewrite: serverless compute that idles to nothing,
                  materialized views behind the dashboards, self-tuning table layouts instead of hand-designed
                  partitions. Then look at the rates.{" "}
                  <Link href={dbPath("lakehouse")}>Lakehouse &rarr;</Link> or{" "}
                  <Link href={dbPath("pricing-and-cost")}>Pricing and cost &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>&ldquo;Our AI pilot demoed beautifully and never reached production.&rdquo;</h3>
                <p>
                  Almost always one of two causes: the agent had nothing governed to retrieve, or there was no
                  definition of good enough and no way to measure it. Both are fixable, and both are fixed before the
                  model is chosen.{" "}
                  <Link href={dbPath("agent-bricks")}>Agent Bricks &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>&ldquo;We are on a warehouse we want to leave, and the estimate frightens us.&rdquo;</h3>
                <p>
                  Federate before you migrate: query the old system in place under one catalogue, prove the numbers
                  reconcile, then move domain by domain. The tooling helps with the SQL rewrite and not much else, and
                  it is better to know that at the start.{" "}
                  <Link href={dbPath("migration")}>Migration &rarr;</Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- supporting pages ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Also on this platform" title="Four things that decide whether it works." wide>
              The eight products are what Databricks sells. These four are what determines whether what you build on
              them survives a procurement review, an audit, a migration and a budget cycle.
            </Head>
          </div>
          <RelatedGrid slugs={topicPages.map((p) => p.slug)} cols={4} />
        </div>
      </section>

      {/* ---------------- how we work ---------------- */}
      <section>
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="How we work" title="We would rather talk you out of the wrong build.">
                A data platform is the easiest project in enterprise technology to start and one of the hardest to
                finish, because nothing fails loudly. Reports keep being produced. They are just wrong, or late, or
                nobody trusts them, and that state can persist for years.
              </Head>
              <p className="body-t">
                So we begin with the inventory and the definitions, not the architecture. What decisions are being made
                badly today, what data they need, who owns each domain, and what number has to reconcile before
                anything is switched off. If the answer at the end of that is that you need better processes rather
                than a lakehouse, we will tell you, and that conversation is free.
              </p>
              <p className="body-t">
                It is the same discipline we bring to the other platforms we build on, and it is why the order of the
                work rarely changes: understand the decisions, agree the definitions, prove one domain, then scale
                what worked.
              </p>
              <div className="chips">
                <Link href={dbPath("unity-catalog")}>Start with definitions &rarr;</Link>
                <Link href={dbPath("migration")}>Coming off another warehouse &rarr;</Link>
                <Link href="/contact">Talk to us &rarr;</Link>
              </div>
            </div>
            <div className="includes" data-r>
              <div>
                <span className="t">First</span>
                <h3>Decision inventory</h3>
                <p>The decisions that are slow or wrong today, the data each one needs, and who owns it.</p>
              </div>
              <div>
                <span className="t">Then</span>
                <h3>Definitions before dashboards</h3>
                <p>The ten metrics that matter, defined once in the catalogue and agreed by the people who argue about them.</p>
              </div>
              <div>
                <span className="t">Then</span>
                <h3>One domain, end to end</h3>
                <p>Ingest, model, govern, publish and measure a single domain, with the old numbers reconciled.</p>
              </div>
              <div>
                <span className="t">Then</span>
                <h3>Cost controls on day one</h3>
                <p>Tags, budgets, the system billing tables, and a monthly review each team can see itself in.</p>
              </div>
              <div>
                <span className="t">Then</span>
                <h3>AI on governed data only</h3>
                <p>Agents pointed at described, certified tables, with a written bar for accuracy before anything ships.</p>
              </div>
              <div>
                <span className="t">Always</span>
                <h3>In writing, including the doubts</h3>
                <p>What is generally available, what is in beta, what we have assumed, and what would change our advice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Copyright />
      <FaqSection slug="" title="What people ask before they start." />

      <CtaBand
        title="Bring us the argument you keep having about numbers."
        body="In one session we will map the decisions that are costing you, say which part of this platform addresses them, and tell you plainly if the answer is something cheaper than a data platform. You will leave with a written view either way."
        label="Book a data session"
        points={[
          "The decisions, before the architecture",
          "Which of the eight parts you actually need",
          "What is generally available and what is beta",
          "A costed first domain, not a programme",
          "Cost controls designed in, not retrofitted",
        ]}
      />
    </>
  );
}
