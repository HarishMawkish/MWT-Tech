import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Lakehouse — what Databricks files under data warehousing. The spine of this page is a single idea: the table is a
 * set of open files in your bucket, and everything else is an engine's opinion about how to read them quickly.
 */
export function LakehouseBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Lakehouse" />
          <div className="hero-grid">
            <div>
              <Kicker>Data warehousing</Kicker>
              <h1>
                A warehouse whose tables are <em>just files you own.</em>
              </h1>
              <p className="lede">
                A traditional warehouse takes your data and puts it somewhere only it can read. The lakehouse inverts
                that: your tables stay as Delta Lake or Apache Iceberg files in your own cloud storage, and Databricks
                supplies a query engine, an optimiser that rewrites the layout for you, serverless compute that starts
                in seconds and governance over the top. Another engine can read the same files tomorrow, which is the
                part that changes the negotiation.
              </p>
              <div className="ctas">
                <a href="#tables" className="btn pri">
                  Start with the table <span className="ar">&rarr;</span>
                </a>
                <a href="#ai-sql" className="btn sec">
                  AI inside SQL
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of the SQL editor and a result. Sample data.">
              <Screen
                dark
                title="SQL editor · margin_by_region"
                run="Run"
                user="AN"
                label="Illustration of the Databricks SQL editor running a query that joins order lines to a region dimension and groups margin by region, with a results panel showing four regions and their margin, and a footer showing the query finished in 1.4 seconds scanning 240 million rows on a serverless warehouse"
              >
                <div className="body-pad tight">
                  <div className="code">
                    <div>
                      <span className="c">-- margin by region, last 90 days</span>
                    </div>
                    <div>
                      <span className="k">SELECT</span> r.region, <span className="f">sum</span>(ol.net_amount - ol.cost_amount) <span className="k">AS</span> margin
                    </div>
                    <div>
                      <span className="k">FROM</span> main.sales.order_line ol
                    </div>
                    <div>
                      <span className="k">JOIN</span> main.ref.region r <span className="k">ON</span> r.id = ol.region_id
                    </div>
                    <div>
                      <span className="k">WHERE</span> ol.order_date &gt;= <span className="f">current_date</span>() - <span className="n">90</span>
                    </div>
                    <div>
                      <span className="k">GROUP BY</span> <span className="n">1</span> <span className="k">ORDER BY</span> margin <span className="k">DESC</span>;
                    </div>
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Result · 4 rows
                      <span className="m">1.4s · 240M rows scanned · serverless</span>
                    </div>
                    <Row l="Western" r="LKR 418.2m" />
                    <Row l="Central" r="LKR 262.9m" />
                    <Row l="Southern" r="LKR 151.4m" />
                    <Row l="Northern" r="LKR 88.7m" />
                  </div>
                  <div className="tiles" style={{ marginTop: "9px" }}>
                    <Tile h="Table format" s="Open, in your bucket" k="Delta" tone="own" />
                    <Tile h="Layout" s="Liquid clustering" k="Auto" tone="pos" />
                    <Tile h="Warehouse" s="Idles to zero" k="Serverless" />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- what a table is ---------------- */}
      <section className="light" id="tables">
        <div className="in">
          <div data-r>
            <Head eyebrow="The table" title="Six words you will meet in week one.">
              This vocabulary does more work than any diagram. Once these six are clear, most of the architecture
              arguments resolve themselves.
            </Head>
          </div>
          <div className="defs" data-r>
            <div>
              <div className="t">Delta Lake</div>
              <p>
                An open table format over Parquet files, now a Linux Foundation project. It adds a transaction log,
                which is what turns a folder of files into a table: atomic commits, consistent reads while a write is
                in progress, and a history you can query.
              </p>
            </div>
            <div>
              <div className="t">Apache Iceberg</div>
              <p>
                The other open table format, supported as a managed format here too. If the rest of your estate has
                standardised on Iceberg, write Iceberg — Databricks will read and write both and let other engines
                read what it produced.
              </p>
            </div>
            <div>
              <div className="t">Time travel</div>
              <p>
                Because every change is a version in the log, you can audit what happened, query the table as it stood
                on a date, or roll it back. The first time a bad load lands at 3am this stops being a feature and
                becomes the reason you sleep.
              </p>
            </div>
            <div>
              <div className="t">Change Data Feed</div>
              <p>
                Row-level changes between two versions of a table, readable as a stream. It is how a downstream table
                updates incrementally instead of recomputing, and how Lakeflow and Lakebase move change around without
                anybody writing a comparison query.
              </p>
            </div>
            <div>
              <div className="t">Managed table</div>
              <p>
                A table whose storage and layout Databricks looks after, with the optimisations it reserves for them.
                It doubles as a batch table and as a streaming source and sink, which is why one pipeline can serve
                both.
              </p>
            </div>
            <div>
              <div className="t">Foreign table</div>
              <p>
                A table that lives in somebody else&rsquo;s catalogue — AWS Glue, Hive Metastore, Snowflake Horizon —
                exposed here with Unity Catalog&rsquo;s fine-grained access controls on top. The way you govern what
                you have not moved yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the layout tunes itself ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="Tuning" title="Nobody should be designing partitions in 2026.">
                For twenty years the craft of warehouse performance was choosing a partition key and living with the
                consequences — skewed partitions, small-file problems, a rewrite every time the query pattern changed.
                Databricks replaced that with two things that run on their own.
              </Head>
              <p className="body-t">
                <b>Liquid clustering</b> is a self-tuning data layout that needs no partitions and adapts as the table
                grows; Databricks recommends it in place of partitioning outright. <b>Predictive optimisation</b> then
                watches the data and the query patterns and decides when to rewrite a table&rsquo;s layout, without a
                maintenance job on anybody&rsquo;s calendar.
              </p>
              <p className="body-t">
                The honest framing: this is not magic, it is amortised. The work still happens, it just happens when
                the platform judges it worth paying for rather than when a human remembered to schedule it. What you
                get back is the engineer who used to own that calendar.
              </p>
            </div>

            <div data-r>
              <div className="meters">
                <div className="meter-row dim">
                  <span className="nm">Hand-designed partitions</span>
                  <span className="meter">
                    <i style={{ width: "100%" }} />
                  </span>
                  <span className="v">baseline</span>
                </div>
                <div className="meter-row">
                  <span className="nm">Liquid clustering</span>
                  <span className="meter">
                    <i style={{ width: "34%" }} />
                  </span>
                  <span className="v">faster</span>
                </div>
                <div className="meter-row">
                  <span className="nm">+ predictive optimisation</span>
                  <span className="meter">
                    <i style={{ width: "22%" }} />
                  </span>
                  <span className="v">faster</span>
                </div>
              </div>
              <p className="note">
                Illustrative only, and deliberately unlabelled on the axis. The shape is what we see in practice — most
                of the gain comes from stopping a human guessing the layout — but the size depends entirely on your
                tables, so the only number worth quoting is one measured on them.
              </p>
              <div className="facts two-up" style={{ marginTop: "32px" }}>
                <div className="fact">
                  <b>0</b>
                  <span>Partition keys to choose</span>
                </div>
                <div className="fact">
                  <b>0</b>
                  <span>Maintenance jobs to schedule</span>
                </div>
                <div className="fact">
                  <b>1s</b>
                  <span>Billing granularity, per second of compute</span>
                </div>
                <div className="fact">
                  <b>5</b>
                  <span>Formats readable: Delta, Iceberg, Parquet, Hudi, CSV and more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="callout" data-r>
            <span className="m">!</span>
            <div>
              <h3>What Databricks claims, and who said it</h3>
              <p>
                Shell reports up to 10x faster time-series queries using liquid clustering. Anker Innovations reports
                saving 50% of annual storage cost and more than doubling query speed. Databricks itself claims up to 6x
                better price-performance for SQL against traditional cloud warehouses, around 9x for ETL, and that
                customer queries run roughly 5x faster than three years ago.
              </p>
              <p>
                These are vendor figures with no published method. They are a reason to run a two-week measurement on
                your own queries, not a reason to skip one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- compute ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Compute" title="The one choice that moves your bill the most.">
              A warehouse here is not a server you own, it is a size and a type. Get this decision right and most cost
              conversations never happen; get it wrong and you will pay for idle machinery every night for a year.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>What it is</th>
                  <th>When it is right</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Serverless SQL warehouse</td>
                  <td data-label="What it is">
                    Compute Databricks provisions and manages, starting in seconds and idling away when nothing is
                    running. Databricks recommends it wherever it is available.
                  </td>
                  <td data-label="When it is right">
                    Almost always, and particularly for BI, where load is bursty and the gaps between bursts are where
                    the money goes.
                  </td>
                </tr>
                <tr>
                  <td>Pro and classic warehouses</td>
                  <td data-label="What it is">
                    Compute that runs in your own cloud account, which you start, size and stop. Classic warehouses do
                    not support AI functions.
                  </td>
                  <td data-label="When it is right">
                    When a network or residency requirement means the compute itself has to live in your account.
                  </td>
                </tr>
                <tr>
                  <td>Job compute</td>
                  <td data-label="What it is">
                    Created by the scheduler for a single run and terminated afterwards. It cannot be restarted, by
                    design.
                  </td>
                  <td data-label="When it is right">
                    Every scheduled pipeline. Running nightly work on all-purpose compute is the single most common
                    waste we find.
                  </td>
                </tr>
                <tr>
                  <td>All-purpose compute</td>
                  <td data-label="What it is">
                    A cluster someone starts to work interactively in a notebook, shared across a team, restartable.
                  </td>
                  <td data-label="When it is right">
                    Exploration and development. It should not be running at 4am, and an auto-termination setting is
                    not optional.
                  </td>
                </tr>
                <tr>
                  <td>Lakehouse//RT</td>
                  <td data-label="What it is">
                    A real-time tier on the Reyden engine, chosen from the warehouse selector once enabled, with
                    automatic baseline sizing and node-by-node autoscaling.
                  </td>
                  <td data-label="When it is right">
                    When you have a genuine millisecond requirement at high concurrency — and can live with a beta.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            <b>Photon</b> is the vectorised engine underneath the SQL and ETL work; you do not choose it per query, it
            is what makes the price-performance claims possible. The lever you do control is the type above, plus
            whether your dashboards read a materialized view or three years of raw events. See{" "}
            <Link href={dbPath("pricing-and-cost")}>pricing and cost</Link> for the rest.
          </p>
        </div>
      </section>

      {/* ---------------- real time ---------------- */}
      <section id="realtime">
        <div className="in">
          <div className="two mid">
            <div data-r>
              <Head eyebrow="Lakehouse//RT" title="The copy you used to make for speed.">
                Until recently, anything that had to answer in milliseconds at high concurrency needed its own serving
                database: data copied out of your open tables into a proprietary store, security policies redefined by
                hand and then drifting, another pipeline to watch, another cluster to pay for.
              </Head>
              <p className="body-t">
                Lakehouse//RT, announced in June 2026, runs those queries directly on governed Delta and Iceberg tables
                with no data movement. It sizes its own baseline compute instead of asking you to pick a t-shirt size,
                and autoscales node by node rather than doubling a cluster.
              </p>
              <p className="body-t">
                Databricks reports response times around 10ms on smaller datasets and under 100ms on larger ones, up
                to 16x better than separate serving layers in preview, and sub-100ms latency at 12,000 queries per
                second on standard benchmarks. Customers quoted include Meta at tens of milliseconds, SES at 20x faster
                than its previous setup and Magnite at sub-200ms dashboard queries.
              </p>
              <div className="callout">
                <span className="m">&beta;</span>
                <div>
                  <h3>Read the status before you design around it</h3>
                  <p>
                    It is in beta, limited to selected read-only workloads, and reached through your Databricks account
                    team. Independent reviewers note that the headline 12,000 queries per second came from a controlled
                    test on a small batch dataset and that no P99 figure has been published. There is an introductory
                    30% discount on usage through January 2027.
                  </p>
                  <p>
                    Our rule: a beta can be in a roadmap, never in a critical path, and every design that mentions one
                    carries a written fallback.
                  </p>
                </div>
              </div>
            </div>

            <Fig caption="Our illustration of the same dashboard query on two tiers. Sample data.">
              <Screen
                title="Query history · stock_cover_dashboard"
                user="RT"
                label="Illustration of a query history panel comparing the same dashboard query served from a serverless warehouse at 940 milliseconds and from the real-time tier at 38 milliseconds, with a concurrency chart showing latency staying flat as concurrent users rise from 20 to 4,000"
              >
                <div className="body-pad">
                  <div className="card-f">
                    <div className="h">
                      Same query, two tiers
                      <span className="m">p50, 1,000 runs</span>
                    </div>
                    <Row l="Serverless SQL warehouse" r="940 ms" pill={{ k: "in", t: "GA" }} />
                    <Row l="Lakehouse//RT · Reyden" r="38 ms" pill={{ k: "wr", t: "Beta" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">
                      Latency as concurrency rises
                      <span className="m">20 &rarr; 4,000 concurrent readers</span>
                    </div>
                    <div className="bars" style={{ marginTop: "4px" }}>
                      {[18, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24].map((h, i) => (
                        <i key={i} className="on" style={{ height: `${h * 1.8}%`, ["--i" as string]: i }} />
                      ))}
                    </div>
                    <p style={{ fontSize: "9.5px", color: "var(--app-muted)", marginTop: "6px" }}>
                      Flat is the claim worth testing: Databricks says latency held steady while throughput rose from a
                      few queries per second into the thousands.
                    </p>
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- federation ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Lakehouse Federation" title="Query what you have not moved yet.">
              This is the feature that turns a terrifying migration into a sequence you control. You register a
              connection to a system you already run, and its tables appear in Unity Catalog to be queried in place —
              with row filters, column masks and attribute-based policies applied here, on the way through.
            </Head>
          </div>
          <div className="chips" data-r>
            <span>MySQL</span>
            <span>PostgreSQL</span>
            <span>Microsoft SQL Server</span>
            <span>Azure SQL Database</span>
            <span>Azure Synapse</span>
            <span>Amazon Redshift</span>
            <span>Snowflake</span>
            <span>Google BigQuery</span>
            <span>AWS Glue</span>
            <span>Hive Metastore</span>
            <span>Snowflake Horizon</span>
            <span className="off">and others Databricks lists</span>
          </div>
          <div className="vs" data-r style={{ marginTop: "36px" }}>
            <div className="good">
              <span className="lab">What federation is genuinely good for</span>
              <h3>Proving before moving</h3>
              <ul>
                <li>Joining a new domain to an old one without a migration project in between.</li>
                <li>Governing an inherited catalogue under one permission model from day one.</li>
                <li>Reconciling the old warehouse against the new model, side by side, in one query.</li>
                <li>Retiring extracts one at a time, with the consumers moved before the source is switched off.</li>
              </ul>
            </div>
            <div>
              <span className="lab">What it will not do</span>
              <h3>Make the old system fast</h3>
              <ul>
                <li>A federated query runs on the source&rsquo;s compute, at the source&rsquo;s speed, and competes
                  with its users.</li>
                <li>It does not make Databricks the enforcement point inside that system — a direct connection is
                  still governed by the source.</li>
                <li>It is a bridge, not a destination. Federated tables left in place for two years become the new
                  legacy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- AI in SQL ---------------- */}
      <section id="ai-sql">
        <div className="in">
          <div data-r>
            <Head eyebrow="AI functions" title="The most underrated thing on this platform." wide>
              You can call a model from a SQL statement. Not through a pipeline, not through a notebook, not through an
              application someone has to build — as a function, in the query, over a column. For a great many problems
              that are currently a six-week project, this is a morning.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Function</th>
                  <th>What it does</th>
                  <th>What it replaces</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>ai_parse_document</code>
                  </td>
                  <td data-label="What it does">
                    Extracts text, tables, figure descriptions and layout from a document.
                  </td>
                  <td data-label="What it replaces">A document-processing vendor and an integration to it.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_extract</code>
                  </td>
                  <td data-label="What it does">
                    Pulls structured fields out of text or a document against a schema you define.
                  </td>
                  <td data-label="What it replaces">Hand-written parsers that break on the next template change.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_classify</code>
                  </td>
                  <td data-label="What it does">Assigns text to labels you supply.</td>
                  <td data-label="What it replaces">A keyword rulebook nobody has updated since 2019.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_query</code>
                  </td>
                  <td data-label="What it does">Runs your own prompt against a model serving endpoint you name.</td>
                  <td data-label="What it replaces">A bespoke batch inference service.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_forecast</code>
                  </td>
                  <td data-label="What it does">
                    Projects a time series forward to a horizon, as a table-valued function.
                  </td>
                  <td data-label="What it replaces">A spreadsheet with a trendline in it.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_detect_anomalies</code>
                  </td>
                  <td data-label="What it does">
                    Flags anomalous points in history with expected values, bounds and scores. In beta.
                  </td>
                  <td data-label="What it replaces">Threshold alerts that fire on every seasonal peak.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_top_drivers</code>
                  </td>
                  <td data-label="What it does">
                    Ranks which dimension values are behind a change in a metric. In beta.
                  </td>
                  <td data-label="What it replaces">An analyst&rsquo;s afternoon of slicing a pivot table.</td>
                </tr>
                <tr>
                  <td>
                    <code>vector_search</code>
                  </td>
                  <td data-label="What it does">Queries an AI Search index from SQL.</td>
                  <td data-label="What it replaces">A separate vector database and the sync into it.</td>
                </tr>
                <tr>
                  <td>
                    <code>ai_mask</code>, <code>ai_translate</code>, <code>ai_summarize</code>
                  </td>
                  <td data-label="What it does">
                    Masks named entities, translates, summarises — alongside sentiment, similarity and grammar
                    functions.
                  </td>
                  <td data-label="What it replaces">Three more vendors and three more contracts.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            <b>The part to read carefully:</b> cost. The compute running the query is always billed, and task-specific
            functions and Databricks-hosted endpoints add inference charges on top. <code>ai_query</code> bills
            according to the endpoint you name, and a custom or provisioned-throughput endpoint bills its own dedicated
            serving compute whether it is busy or not. Forecasting and prediction functions carry no separate inference
            cost. Spend is attributable in the system billing tables, and which functions can be used at all is
            controlled by Unity Catalog permissions. AI functions do not run on classic SQL warehouses.
          </p>
        </div>
      </section>

      {/* ---------------- BI ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="Your BI tool" title="Nobody has to learn a new chart tool.">
                Power BI, Tableau, Looker, Sigma, Qlik and ThoughtSpot are all named as supported, with connections
                tuned for high concurrency and low latency, and datasets publishable to them without anyone
                hand-managing an ODBC or JDBC connection.
              </Head>
              <p className="body-t">
                This matters more than it sounds. The expensive half of a data platform project is rarely the platform
                — it is retraining four hundred people and rebuilding three hundred reports. Keeping the tool your
                people already know and changing only what sits underneath it is the cheapest version of this project,
                and usually the one that finishes.
              </p>
              <p className="body-t">
                What does change underneath is worth doing deliberately: <b>materialized views</b> so a dashboard reads
                a maintained summary that refreshes incrementally rather than scanning raw history on every open, and{" "}
                <b>metric views</b> so the definition of margin lives in the catalogue instead of in a dozen tools.
                Those two changes account for most of the speed and most of the trust.
              </p>
              <div className="chips">
                <Link href={dbPath("genie")}>Dashboards and natural-language questions &rarr;</Link>
                <Link href={dbPath("unity-catalog")}>Where metric definitions live &rarr;</Link>
              </div>
            </div>
            <div data-r>
              <div className="caps two-up" style={{ marginTop: 0 }}>
                <div className="cap">
                  <span className="n">Keep</span>
                  <h3>The tool and the muscle memory</h3>
                  <ul>
                    <li>Existing reports and their audiences</li>
                    <li>The refresh schedules people plan around</li>
                    <li>Your report authors&rsquo; skills</li>
                  </ul>
                </div>
                <div className="cap">
                  <span className="n">Change</span>
                  <h3>What the tool is pointed at</h3>
                  <ul>
                    <li>One governed source instead of four extracts</li>
                    <li>Materialized views instead of raw scans</li>
                    <li>Metric definitions held once, centrally</li>
                  </ul>
                </div>
                <div className="cap">
                  <span className="n">Retire</span>
                  <h3>The scaffolding nobody liked</h3>
                  <ul>
                    <li>Scheduled extracts into spreadsheets</li>
                    <li>The &ldquo;one true report&rdquo; nobody trusts</li>
                    <li>Per-tool copies of the same data</li>
                  </ul>
                </div>
                <div className="cap">
                  <span className="n">Measure</span>
                  <h3>Whether it actually got better</h3>
                  <ul>
                    <li>Dashboard load time, before and after</li>
                    <li>Reports retired, not just added</li>
                    <li>Questions answered without a ticket</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="The three pages this one leans on.">
              A warehouse is only as good as what feeds it, what governs it and what people do with it.
            </Head>
          </div>
          <RelatedGrid slugs={["lakeflow", "unity-catalog", "genie"]} cols={3} />
        </div>
      </section>

      <Onward slug="lakehouse" />
      <Copyright />
      <FaqSection slug="lakehouse" title="What people ask about the warehouse." />

      <CtaBand
        title="Let us measure your slowest ten queries."
        body="Give us the ten queries your business actually waits on and the dashboards behind them. We will tell you what they would cost and how fast they would run here, with the method written down so you can check it — and if the answer is that your current warehouse is fine, we will say that too."
        label="Book a query review"
        points={[
          "Your queries, your data, your numbers",
          "Compute type chosen on evidence",
          "Table layout left to the optimiser",
          "Materialized views where they pay",
          "A written method you can audit",
        ]}
      />
    </>
  );
}
