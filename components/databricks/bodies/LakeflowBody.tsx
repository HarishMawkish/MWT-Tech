import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Lakeflow — data engineering. The page is built around the thing that actually goes wrong in this layer: not the
 * transformation logic, but getting data out of a source system reliably and knowing what to do at 2am when it stops.
 */
export function LakeflowBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Lakeflow" />
          <div className="hero-grid">
            <div>
              <Kicker>Data engineering</Kicker>
              <h1>
                Getting the data out is the hard part. <em>Not the SQL.</em>
              </h1>
              <p className="lede">
                Almost every data project is sold on its transformations and sunk by its extracts. The nightly job that
                competes with month-end close. The schema change nobody announced. The connector written by someone who
                has since left. Lakeflow is Databricks&rsquo; answer to that whole category: managed connectors that
                read a source&rsquo;s change stream, declarative pipelines where you state the table you want and the
                quality it must meet, and one scheduler over everything.
              </p>
              <div className="ctas">
                <a href="#connect" className="btn pri">
                  How a connector works <span className="ar">&rarr;</span>
                </a>
                <a href="#breaks" className="btn sec">
                  What happens at 2am
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of the jobs and pipelines list. Sample data.">
              <Screen
                title="Jobs &amp; Pipelines"
                user="EN"
                label="Illustration of a jobs and pipelines list showing a Salesforce ingestion pipeline streaming, a SQL Server gateway running continuously, a nightly margin pipeline succeeded, and a SharePoint contract ingest paused on an expired credential, with tiles above reporting 14 pipelines, 3 continuous, 1 needing attention and 11 minutes as the longest run"
              >
                <div className="body-pad">
                  <div className="tiles four">
                    <Tile h="Pipelines" s="Across 4 domains" k="14" />
                    <Tile h="Continuous" s="Change streams" k="3" tone="own" />
                    <Tile h="Need attention" s="Waiting on you" k="1" tone="neg" />
                    <Tile h="Longest run" s="Last 24 hours" k="11" unit="min" tone="pos" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Recent activity
                      <span className="m">serverless unless stated</span>
                    </div>
                    <Row l="salesforce_crm · managed connector" r="cursor: SystemModstamp" pill={{ k: "in", t: "Streaming" }} />
                    <Row l="erp_sqlserver · ingestion gateway" r="continuous task" pill={{ k: "ok", t: "Healthy" }} />
                    <Row l="margin_nightly · declarative pipeline" r="4m 12s" pill={{ k: "ok", t: "Succeeded" }} />
                    <Row l="sharepoint_contracts · file source" r="credential expired" pill={{ k: "er", t: "Paused" }} />
                    <Row l="web_events · real-time mode" r="p50 0.4s" pill={{ k: "own", t: "Sub-second" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- three jobs ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="What is in it" title="Three tools you were buying separately.">
              Most data teams have an ingestion product, a transformation framework and an orchestrator from three
              different vendors, with three sets of credentials, three monitoring screens and three renewal dates.
              Lakeflow is the argument for having one.
            </Head>
          </div>
          <div className="layers" data-r>
            <div className="layer core">
              <span className="who">Ingest</span>
              <div>
                <h3>Lakeflow Connect</h3>
                <p>
                  Managed connectors for databases, SaaS applications, event streams, file sources and cloud storage,
                  with automated change-data capture and schema evolution. Each connector is a Unity Catalog
                  connection, a pipeline and a set of destination streaming tables — nothing you maintain yourself.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Transform</span>
              <div>
                <h3>Spark Declarative Pipelines</h3>
                <p>
                  An open declarative framework, standardised on Apache Spark: you declare the tables you want and the
                  expectations they must meet, and the same code runs for batch or streaming. Pipeline code is
                  validated up front, with data quality checks inline, and a real-time mode delivers sub-second
                  latency.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Orchestrate</span>
              <div>
                <h3>Lakeflow Jobs</h3>
                <p>
                  One scheduler for ETL, analytics and AI work on serverless infrastructure, with observability and a
                  wide range of task types, so a pipeline, a notebook, a dashboard refresh and a model run can be
                  steps in the same dependency graph instead of four schedules that hope.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Author</span>
              <div>
                <h3>Lakeflow Designer and Genie Code</h3>
                <p>
                  Visual, SQL and natural-language authoring for people who prepare data without writing Spark, and an
                  agentic tool that drafts, tests and deploys a declarative pipeline from a description, using what
                  Unity Catalog already knows about your tables.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Operate</span>
              <div>
                <h3>Genie ZeroOps</h3>
                <p>
                  Watches pipeline health, notices schema drift, and uses telemetry and lineage to point at a root
                  cause and propose a fix — which is the difference between an alert that tells you something is broken
                  and one that tells you what broke it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- anatomy of a connector ---------------- */}
      <section id="connect">
        <div className="in">
          <div data-r>
            <Head eyebrow="Anatomy" title="What a managed connector actually sets up." wide>
              &ldquo;Managed&rdquo; is a word that hides a lot, so here is what appears in your workspace when you add
              one. Knowing these four pieces is what lets you reason about cost, about load on the source, and about
              what to check when it stops.
            </Head>
          </div>

          <div className="dia" data-r>
            <div className="dh">A database connector, from source to governed table</div>
            <div className="scroll">
              <svg viewBox="0 0 980 212" role="img" aria-labelledby="db-conn-t">
              <title id="db-conn-t">
                A left-to-right diagram. Your source database on the left. An arrow labelled change stream leads to an
                ingestion gateway, which runs as a continuous task. From there an arrow leads to staging storage, then
                to an ingestion pipeline on serverless compute, then to destination streaming tables in Unity Catalog.
                A box underneath spans the gateway, staging and pipeline, labelled all of this is created and managed
                for you. A Unity Catalog connection holding the source credentials sits above the gateway.
              </title>
              <g fontFamily="var(--display)" fontWeight="700" fontSize="12.5">
                <rect x="0" y="62" width="132" height="66" rx="11" fill="var(--dia-n)" stroke="var(--line)" />
                <text x="16" y="88" fill="var(--fg)" fontSize="12">Source system</text>
                <text x="16" y="107" fill="var(--muted)" fontSize="10.5" fontWeight="500">SQL Server,</text>
                <text x="16" y="121" fill="var(--muted)" fontSize="10.5" fontWeight="500">Postgres, MySQL…</text>

                <path d="M132 95 H230" stroke="var(--a)" strokeWidth="2" />
                <path d="M224 90 l7 5 -7 5 z" fill="var(--a)" />
                <text x="182" y="84" fill="var(--a)" fontSize="9" fontWeight="800" letterSpacing="1" textAnchor="middle">
                  CHANGE STREAM
                </text>

                <rect x="236" y="62" width="160" height="66" rx="11" fill="var(--a)" fillOpacity="0.12" stroke="var(--a)" strokeOpacity="0.5" />
                <text x="252" y="88" fill="var(--a)" fontSize="12">Ingestion gateway</text>
                <text x="252" y="107" fill="var(--muted)" fontSize="10.5" fontWeight="500">Runs as its own</text>
                <text x="252" y="121" fill="var(--muted)" fontSize="10.5" fontWeight="500">continuous task</text>

                <rect x="236" y="12" width="160" height="32" rx="9" fill="#3d7df6" fillOpacity="0.12" stroke="#3d7df6" strokeOpacity="0.45" />
                <text x="252" y="33" fill="#9bc0fb" fontSize="10.5">UC connection · credentials</text>
                <path d="M316 44 V60" stroke="#3d7df6" strokeOpacity="0.6" strokeWidth="1.6" strokeDasharray="3 3" />

                <path d="M396 95 H430" stroke="var(--a)" strokeWidth="2" />
                <path d="M424 90 l7 5 -7 5 z" fill="var(--a)" />

                <rect x="436" y="62" width="146" height="66" rx="11" fill="var(--dia-n)" stroke="var(--line)" />
                <text x="452" y="88" fill="var(--fg)" fontSize="12">Staging storage</text>
                <text x="452" y="107" fill="var(--muted)" fontSize="10.5" fontWeight="500">Where captured</text>
                <text x="452" y="121" fill="var(--muted)" fontSize="10.5" fontWeight="500">change lands first</text>

                <path d="M582 95 H616" stroke="var(--a)" strokeWidth="2" />
                <path d="M610 90 l7 5 -7 5 z" fill="var(--a)" />

                <rect x="622" y="62" width="160" height="66" rx="11" fill="var(--a)" fillOpacity="0.12" stroke="var(--a)" strokeOpacity="0.5" />
                <text x="638" y="88" fill="var(--a)" fontSize="12">Ingestion pipeline</text>
                <text x="638" y="107" fill="var(--muted)" fontSize="10.5" fontWeight="500">Serverless compute</text>
                <text x="638" y="121" fill="var(--muted)" fontSize="10.5" fontWeight="500">by default</text>

                <path d="M782 95 H816" stroke="#3d7df6" strokeWidth="2" />
                <path d="M810 90 l7 5 -7 5 z" fill="#3d7df6" />

                <rect x="822" y="62" width="158" height="66" rx="11" fill="#3d7df6" fillOpacity="0.12" stroke="#3d7df6" strokeOpacity="0.5" />
                <text x="838" y="88" fill="#9bc0fb" fontSize="12">Streaming tables</text>
                <text x="838" y="107" fill="var(--muted)" fontSize="10.5" fontWeight="500">In Unity Catalog,</text>
                <text x="838" y="121" fill="var(--muted)" fontSize="10.5" fontWeight="500">governed on arrival</text>

                <rect x="236" y="150" width="546" height="42" rx="10" fill="var(--dia-n-soft)" stroke="var(--line)" strokeDasharray="5 4" />
                <text x="256" y="176" fill="var(--muted)" fontSize="11.5" fontWeight="600">
                  Created and managed for you — nothing here is a server you patch
                </text>
              </g>
            </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> Managed by Lakeflow
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#3d7df6" }} /> Governed by Unity Catalog
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--dia-n-mark)" }} /> Yours, or storage
              </span>
            </div>
          </div>

          <ul className="flow" data-r>
            <span className="fline" aria-hidden="true">
              <i />
            </span>
            <li>
              <span className="d">1</span>
              <h3>First run</h3>
              <p>Loads everything you selected. This is the run to plan a window for, not the ones after it.</p>
            </li>
            <li>
              <span className="d">2</span>
              <h3>Then change only</h3>
              <p>
                Later runs load what changed where the source supports it — change tracking or CDC on SQL Server, a
                cursor column on Salesforce.
              </p>
            </li>
            <li>
              <span className="d">3</span>
              <h3>On a schedule you set</h3>
              <p>
                One or more schedules per pipeline, each creating a job with the pipeline as a task, and more tasks
                alongside it if you want.
              </p>
            </li>
            <li>
              <span className="d">4</span>
              <h3>Or continuously</h3>
              <p>
                For database connectors the gateway runs as its own continuous task, so change is captured as it
                happens rather than in a window.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- the connectors ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Sources" title="What is covered, and what you build yourself.">
              Databricks names examples in each category rather than publishing one exhaustive list, and the list moves
              every quarter. These are the ones it names today. For your systems specifically, we check the current
              table rather than assume — a connector that is not there yet changes an architecture, not just a date.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Kind</th>
                  <th>Named sources</th>
                  <th>How it reads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SaaS applications</td>
                  <td data-label="Named sources">
                    Salesforce, Workday, HubSpot, Jira, Confluence, Zendesk Support, Slack and Slack audit logs, Google
                    Ads, Meta Ads, TikTok Ads — and more, Databricks says.
                  </td>
                  <td data-label="How it reads">
                    Incrementally where the API allows. Salesforce uses a cursor column from a fixed set of options.
                  </td>
                </tr>
                <tr>
                  <td>Databases, with CDC</td>
                  <td data-label="Named sources">Microsoft SQL Server, PostgreSQL, MySQL.</td>
                  <td data-label="How it reads">
                    Continuously, through an ingestion gateway and staging storage. SQL Server can use change tracking
                    or CDC.
                  </td>
                </tr>
                <tr>
                  <td>Databases, query-based</td>
                  <td data-label="Named sources">Databricks does not list these individually.</td>
                  <td data-label="How it reads">
                    Queries the source on a schedule. No gateway, no staging — simpler to set up, heavier on the
                    source.
                  </td>
                </tr>
                <tr>
                  <td>File sources</td>
                  <td data-label="Named sources">SharePoint, Google Drive.</td>
                  <td data-label="How it reads">
                    Picks up files as they appear, which is how contracts and scanned documents reach the AI functions.
                  </td>
                </tr>
                <tr>
                  <td>Streaming</td>
                  <td data-label="Named sources">RabbitMQ, plus Auto Loader for cloud object storage.</td>
                  <td data-label="How it reads">
                    Continuously. Structured Streaming underneath, with exactly-once processing guarantees.
                  </td>
                </tr>
                <tr>
                  <td>Community and custom</td>
                  <td data-label="Named sources">
                    Open-source connectors maintained by the community; anything else you write yourself.
                  </td>
                  <td data-label="How it reads">
                    Runs in your own workspace. This is where an Odoo instance or a local bank file usually lands.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="callout" data-r>
            <span className="m">?</span>
            <div>
              <h3>Will the first run hurt our production database?</h3>
              <p>
                It is a full read of everything you selected, so treat it like one: a read replica, an off-hours
                window, or a staged selection of tables. After that the gateway reads the change stream rather than
                re-scanning, which is far lighter than the nightly full extract most teams are replacing.
              </p>
              <p>
                This is also the moment to be honest about table selection. Ingesting everything &ldquo;because we
                might need it&rdquo; is how a platform&rsquo;s first bill becomes its last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- declarative ---------------- */}
      <section id="declarative">
        <div className="in">
          <div className="two wide-r">
            <div data-r>
              <Head eyebrow="Declarative pipelines" title="State the table. Not the orchestration.">
                The shift here is small to describe and large in practice. Instead of writing the steps that produce a
                table — read this, join that, write there, in this order, handling failure — you declare the table, the
                query behind it, and the expectations its rows must satisfy. The framework works out the dependency
                graph, the incremental processing and the recovery.
              </Head>
              <p className="body-t">
                The same code runs as a batch job or as a stream, which removes an entire category of duplicated
                logic: the nightly version and the real-time version of the same business rule, which inevitably drift.
                Real-time mode brings sub-second latency when you want it.
              </p>
              <p className="body-t">
                <b>Expectations are the underrated part.</b> A quality rule written beside the table is enforced on
                every run, with violations visible rather than discovered in a meeting six weeks later. It is the
                cheapest data-quality programme available, because it does not need a programme.
              </p>
              <div className="chips">
                <Link href={dbPath("unity-catalog")}>Where the lineage is recorded &rarr;</Link>
                <Link href={dbPath("lakehouse")}>What the tables become &rarr;</Link>
              </div>
            </div>

            <Fig caption="Our illustration of a declarative pipeline and its quality report. Sample data.">
              <Screen
                dark
                title="order_line_clean · declarative pipeline"
                run="Validate"
                user="EN"
                label="Illustration of a declarative pipeline definition: a streaming table called order_line_clean reading from the raw Salesforce order lines, with three expectations requiring a non-null order identifier, a positive quantity and a known region, and a quality panel reporting 4.21 million rows processed, 99.97 percent passing, 1,284 rows dropped on a null order identifier and a schema change detected and applied"
              >
                <div className="body-pad tight">
                  <div className="code">
                    <div>
                      <span className="c"># one table, declared with the rules it must meet</span>
                    </div>
                    <div>
                      <span className="f">@dp.table</span>(name=<span className="s">&quot;order_line_clean&quot;</span>)
                    </div>
                    <div>
                      <span className="f">@dp.expect_or_drop</span>(<span className="s">&quot;order_id&quot;</span>, <span className="s">&quot;order_id IS NOT NULL&quot;</span>)
                    </div>
                    <div>
                      <span className="f">@dp.expect_or_drop</span>(<span className="s">&quot;qty&quot;</span>, <span className="s">&quot;quantity &gt; 0&quot;</span>)
                    </div>
                    <div>
                      <span className="f">@dp.expect</span>(<span className="s">&quot;region&quot;</span>, <span className="s">&quot;region_id IN (SELECT id FROM ref.region)&quot;</span>)
                    </div>
                    <div>
                      <span className="k">def</span> <span className="f">order_line_clean</span>():
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="k">return</span> dp.<span className="f">read_stream</span>(<span className="s">&quot;raw.salesforce.order_line&quot;</span>)
                    </div>
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Quality, this run
                      <span className="m">continuous · real-time mode</span>
                    </div>
                    <Row l="Rows processed" r="4.21m" />
                    <Row l="Expectations passed" r="99.97%" pill={{ k: "ok", t: "Within rule" }} />
                    <Row l="Dropped · order_id null" r="1,284" pill={{ k: "wr", t: "Quarantined" }} />
                    <Row l="Schema change" r="new column: promo_code" pill={{ k: "in", t: "Applied" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- when it breaks ---------------- */}
      <section className="light" id="breaks">
        <div className="in">
          <div data-r>
            <Head eyebrow="Operations" title="What happens at two in the morning.">
              This is the section most vendor pages skip and the one that decides whether your team trusts the
              platform. Three mechanisms matter, and none of them removes the need for a named owner.
            </Head>
          </div>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">01</span>
              <h3>It retries itself</h3>
              <p>
                Failed connectors retry automatically with exponential backoff. Most transient failures — a network
                blip, a source under load — resolve before anyone is woken.
              </p>
              <div className="foot">
                <b>No human needed</b>
              </div>
            </div>
            <div className="cap">
              <span className="n">02</span>
              <h3>It keeps its place</h3>
              <p>
                When an error genuinely needs a person — an expired credential, a permission revoked — the connector
                stores its cursor position and resumes from there once fixed. It does not start the history again.
              </p>
              <div className="foot">
                <b>Fix it at 9am, not 2am</b>
              </div>
            </div>
            <div className="cap">
              <span className="n">03</span>
              <h3>It points at the cause</h3>
              <p>
                Genie ZeroOps watches pipeline health, catches schema drift, and uses telemetry and lineage to surface
                a root cause and propose a fix, rather than handing you a stack trace and a dependency graph.
              </p>
              <div className="foot">
                <b>Diagnosis, not just an alert</b>
              </div>
            </div>
          </div>
          <div className="facts" data-r>
            <div className="fact">
              <b>85%</b>
              <span>Faster development, ingesting Salesforce CRM data</span>
              <span className="who">Porsche, via Databricks</span>
            </div>
            <div className="fact">
              <b>50%</b>
              <span>Cost reduction while handling 10x data growth</span>
              <span className="who">Hinge Health, via Databricks</span>
            </div>
            <div className="fact">
              <b>99%</b>
              <span>Reduction in pipeline latency for real-time inventory</span>
              <span className="who">Volvo, via Databricks</span>
            </div>
            <div className="fact">
              <b>4,500+</b>
              <span>Jobs orchestrated weekly after moving to serverless</span>
              <span className="who">AccuWeather, via Databricks</span>
            </div>
          </div>
          <p className="note" data-r>
            Every figure above is a customer result Databricks published, not a measurement of ours, and none comes
            with a method. We quote them because they indicate the shape of the gains people report — development
            speed and cost, rather than raw throughput. What yours would be is a question for a pilot on your own
            sources.
          </p>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="Where the data goes once it is in.">
              Ingestion is the start of the chain, not the point of it.
            </Head>
          </div>
          <RelatedGrid slugs={["unity-catalog", "lakehouse", "sap-business-data-cloud"]} cols={3} />
        </div>
      </section>

      <Onward slug="lakeflow" />
      <Copyright />
      <FaqSection slug="lakeflow" title="What people ask about pipelines." />

      <CtaBand
        title="Show us the extract everyone is afraid of."
        body="Every data team has one: the nightly job that must not fail, that nobody wants to touch, whose author has left. Show us that one. We will tell you whether a managed connector replaces it, what the first full read would cost your source, and what the migration looks like with the old job still running beside it."
        label="Book a pipeline review"
        points={[
          "Your actual sources, checked against the current connector list",
          "A plan for the first full read",
          "Quality expectations written beside the tables",
          "One scheduler instead of three",
          "The old job left running until the new one reconciles",
        ]}
      />
    </>
  );
}
