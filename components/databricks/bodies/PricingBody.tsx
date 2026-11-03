import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Pricing and cost. Databricks publishes the mechanics but not the rates, so the useful thing we can add is not a
 * price list — it is the list of settings that decide whether your platform costs what it should or twice that.
 */
export function PricingBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Pricing and cost" />
          <div className="hero-grid">
            <div>
              <Kicker>The bill</Kicker>
              <h1>
                Nobody can quote you a price. <em>We can tell you where it leaks.</em>
              </h1>
              <p className="lede">
                Databricks bills consumption: no seats, no suite, no up-front cost, measured per second. Rates differ
                by product, by region and by cloud, which is why any figure quoted without all three is fiction. What
                can be said usefully is this — in every over-spending platform we have audited, the cause was not the
                rates. It was five or six settings, each of which is a configuration change rather than a rewrite.
              </p>
              <div className="ctas">
                <a href="#leaks" className="btn pri">
                  Where the money goes <span className="ar">&rarr;</span>
                </a>
                <a href="#free" className="btn sec">
                  Free Edition, honestly
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of a usage review. Sample data.">
              <Screen
                title="Usage · last 30 days, by tag"
                user="FN"
                label="Illustration of a usage review grouped by team tag: four teams with their spend, one flagged because all-purpose compute accounts for most of its usage, and a panel listing four findings — a cluster with no auto-termination, dashboards scanning raw history, a dedicated serving endpoint billing while idle, and a nightly job on all-purpose compute"
              >
                <div className="body-pad">
                  <div className="tiles four">
                    <Tile h="Attributed" s="By tag" k="94" unit="%" tone="pos" />
                    <Tile h="Unattributed" s="Needs a tag" k="6" unit="%" tone="neg" />
                    <Tile h="Idle spend found" s="This review" k="31" unit="%" tone="own" />
                    <Tile h="Changes needed" s="All settings" k="4" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      By team
                      <span className="m">from system.billing.usage</span>
                    </div>
                    <Row l="Finance analytics" r="serverless SQL, 82%" pill={{ k: "ok", t: "Healthy" }} />
                    <Row l="Data engineering" r="job compute, 91%" pill={{ k: "ok", t: "Healthy" }} />
                    <Row l="Data science" r="all-purpose, 76%" pill={{ k: "er", t: "Look here" }} />
                    <Row l="Untagged" r="no owner" pill={{ k: "wr", t: "Attribute" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">Findings, all configuration</div>
                    <Row l="Cluster with no auto-termination" r="running 24/7" pill={{ k: "er", t: "Fix" }} />
                    <Row l="Dashboards scanning raw history" r="no materialized view" pill={{ k: "wr", t: "Fix" }} />
                    <Row l="Dedicated serving endpoint" r="idle 93% of the time" pill={{ k: "er", t: "Fix" }} />
                    <Row l="Nightly job on all-purpose compute" r="should be job compute" pill={{ k: "wr", t: "Fix" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the units ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="The units" title="Five things you will see on an invoice.">
              Worth learning, because an invoice you cannot read is an invoice you cannot challenge.
            </Head>
          </div>
          <div className="defs" data-r>
            <div>
              <div className="t">
                DBU <span style={{ opacity: 0.75 }}>Databricks Unit</span>
              </div>
              <p>
                A normalised unit of processing power, driven by the compute resources used and the data processed. The
                rate per DBU differs by product — data engineering, warehousing and AI are priced on separate lists —
                and by region and cloud. This is the line that dominates most bills.
              </p>
            </div>
            <div>
              <div className="t">
                DSU <span style={{ opacity: 0.75 }}>Databricks Storage Unit</span>
              </div>
              <p>
                A standardised measure of storage usage, whose value varies by region, storage type, data volume or
                transactions. Separate from, and in addition to, what your cloud provider charges you for the bucket.
              </p>
            </div>
            <div>
              <div className="t">GB</div>
              <p>
                Used for data transfer and networking charges, defined as 2<sup>30</sup> bytes. Small until it is not —
                regular large cross-region or outbound transfers are worth modelling before they appear.
              </p>
            </div>
            <div>
              <div className="t">Private connectivity endpoint</div>
              <p>
                Billed by hours provisioned, rounded up to the whole hour. A fixed cost of a network choice rather than
                of a workload, which means it does not go away when nothing is running.
              </p>
            </div>
            <div>
              <div className="t">Per second</div>
              <p>
                The granularity of consumption billing, and the reason serverless compute that idles to nothing changes
                the economics of bursty work so sharply.
              </p>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">&#8364;</span>
            <div>
              <h3>Who sends the invoice, and what is not on it</h3>
              <p>
                Pay-as-you-go accounts are billed monthly to a card on file, and charges may be taken more often as
                they accrue. <b>Azure Databricks is billed by Microsoft under your Azure subscription</b>, which
                matters for anyone with an existing Azure commitment to draw down.
              </p>
              <p>
                Storage, networking and cloud infrastructure costs are <b>separate</b> and come from your cloud
                provider. A Databricks estimate that does not include them is incomplete, and the gap is not small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- commitments ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Commitments" title="Discounts exist. Earn the right to take one.">
              Databricks offers committed use contracts, with greater benefits at larger commitments, including the
              option to apply a commitment across more than one cloud. Temporary promotional discounts appear on the
              price list or are communicated to eligible customers — whether those stack with a commitment is not
              stated publicly, which is itself a question to ask.
            </Head>
            <p className="body-t">
              The mistake we see most often is committing before the workload is understood. A commitment made on an
              estimate is a bet on an architecture nobody has measured yet, and the downside is paying for capacity you
              were persuaded to promise. There is a second mistake, quieter and more common: committing to the right
              number for a platform that has not been tuned, so every configuration leak you have not found yet is
              inside that commitment, on a multi-year term rather than a monthly one.
            </p>
            <p className="body-t">
              Our advice is unglamorous: run pay-as-you-go for a quarter with proper tagging, fix the configuration
              leaks below, and then commit to a number you can defend from your own usage data. You will commit to less
              and get a better outcome, because the leaks you fixed were going to be inside the commitment otherwise.
            </p>
          </div>

          <ul className="flow" data-r>
            <span className="fline" aria-hidden="true">
              <i />
            </span>
            <li>
              <span className="d">1</span>
              <h3>Measure</h3>
              <p>A quarter of real usage, tagged by team and by workload, before anyone signs anything.</p>
            </li>
            <li>
              <span className="d">2</span>
              <h3>Fix</h3>
              <p>The configuration leaks below, before they are baked into a commitment for three years.</p>
            </li>
            <li>
              <span className="d">3</span>
              <h3>Commit</h3>
              <p>To a defensible number, drawn from your own usage data rather than from a projection.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- the leaks ---------------- */}
      <section className="light" id="leaks">
        <div className="in">
          <div data-r>
            <Head eyebrow="Where it leaks" title="Six settings, in the order we find them." wide>
              This is the most useful thing on this page. None of these is a rewrite, none requires a new architecture,
              and together they routinely halve a bill — which is why we audit them before anyone argues about rates.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>What we find</th>
                  <th>Why it costs</th>
                  <th>The change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nightly work on all-purpose compute</td>
                  <td data-label="Why it costs">
                    All-purpose compute is meant for interactive work and is shared and restartable. Scheduled work
                    running on it pays interactive rates and often keeps a cluster alive between runs.
                  </td>
                  <td data-label="The change">
                    Move it to job compute, which the scheduler creates per run and terminates afterwards.
                  </td>
                </tr>
                <tr>
                  <td>Clusters with no auto-termination</td>
                  <td data-label="Why it costs">
                    Somebody started it on Thursday to look at something. It is Tuesday. This is the single most common
                    finding, and the most embarrassing one to explain upward.
                  </td>
                  <td data-label="The change">
                    Set auto-termination as a policy rather than a habit, and review long-running clusters weekly.
                  </td>
                </tr>
                <tr>
                  <td>Classic warehouses where serverless would idle</td>
                  <td data-label="Why it costs">
                    BI load is bursty. A classic warehouse running through the quiet hours bills for the quiet hours.
                  </td>
                  <td data-label="The change">
                    Serverless, which Databricks recommends where available — unless a stated requirement needs the
                    compute in your own account.
                  </td>
                </tr>
                <tr>
                  <td>Dashboards scanning raw history</td>
                  <td data-label="Why it costs">
                    Every open recomputes three years of events for a chart that needed a maintained summary.
                    Multiply by the number of viewers and the number of opens a day.
                  </td>
                  <td data-label="The change">
                    Materialized views that refresh incrementally, with the definition in the catalogue.
                  </td>
                </tr>
                <tr>
                  <td>Pipelines re-reading the world</td>
                  <td data-label="Why it costs">
                    A full extract every night, because nothing captures change. The cost is paid twice — in compute
                    here and in load on the source system.
                  </td>
                  <td data-label="The change">
                    Change-data capture through a managed connector, or the change data feed.{" "}
                    <Link href={dbPath("lakeflow")}>Lakeflow &rarr;</Link>
                  </td>
                </tr>
                <tr>
                  <td>Dedicated model serving endpoints, idle</td>
                  <td data-label="Why it costs">
                    A custom or provisioned-throughput endpoint bills its own dedicated serving compute whether it is
                    busy or not. Batch work pointed at one pays for the gaps.
                  </td>
                  <td data-label="The change">
                    For batch inference, use Databricks-hosted models rather than a provisioned endpoint — which is
                    Databricks&rsquo; own guidance.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            A seventh, which is not a setting but a decision: ingesting everything &ldquo;because we might need
            it&rdquo;. Storage is cheap and the pipelines, the optimisation and the governance around unused tables are
            not. Select tables deliberately, and revisit what nobody has queried in six months.
          </p>
        </div>
      </section>

      {/* ---------------- what bills on top ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="On top of compute" title="Which features add a charge, and which do not.">
              The difference between a predictable platform and a surprise is knowing this list before someone
              discovers it in an invoice. The compute running a query is always billed; these are the additions.
            </Head>
          </div>
          <div className="vs" data-r>
            <div>
              <span className="lab">Adds an inference or service charge</span>
              <h3>Budget for these separately</h3>
              <ul>
                <li>
                  Task-specific AI functions and Databricks-hosted model endpoints, which add inference charges on top
                  of compute.
                </li>
                <li>
                  <code>ai_query</code>, billed according to the model serving endpoint you name.
                </li>
                <li>Custom and provisioned-throughput endpoints, billing their own dedicated serving compute.</li>
                <li>
                  <code>vector_search</code>, billed through the AI Search service.
                </li>
                <li>Private connectivity endpoints, billed by hours provisioned.</li>
              </ul>
            </div>
            <div className="good">
              <span className="lab">No separate charge</span>
              <h3>Compute only</h3>
              <ul>
                <li>
                  <code>ai_forecast</code>, <code>ai_detect_anomalies</code>, <code>ai_predict_class</code>,{" "}
                  <code>ai_predict_value</code> and <code>ai_top_drivers</code> carry no separate inference cost.
                </li>
                <li>
                  Unity Catalog, included in the Premium and Enterprise tiers — you pay only for compute and storage.
                </li>
                <li>AI/BI dashboards and Genie spaces, with no per-seat or per-licence BI fee.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r>
            Spend is queryable: batch inference from some functions appears under <code>MODEL_SERVING</code> in{" "}
            <code>system.billing.usage</code>, and others under <code>AI_FUNCTIONS</code>. That distinction is how you
            attribute AI spend to a team instead of arguing about it. One exception to flag:{" "}
            <Link href={dbPath("genie")}>Genie One pricing</Link> has been announced twice with different dates, and
            that is worth resolving in writing before a large rollout.
          </p>
        </div>
      </section>

      {/* ---------------- control ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Keeping control" title="Attribute first. Then limit. Then review in public.">
              Platforms do not become expensive because of rates. They become expensive because the bill arrives
              somewhere nobody can recognise their own work in it, so nobody feels responsible for any of it.
            </Head>
          </div>
          <ol className="steps" data-r>
            <li>
              <div>
                <h3>Tag everything, from day one</h3>
                <p>
                  Compute, jobs, warehouses and endpoints tagged by team and by workload. Retrofitting attribution is
                  painful and always incomplete, and six per cent untagged is enough to make a review arguable.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Make the system billing tables the single source</h3>
                <p>
                  Not a spreadsheet, not the portal, not an export. One query everyone trusts, which also means the
                  finance team and the platform team stop maintaining two versions of the truth about cost.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Set budgets with hard caps for AI</h3>
                <p>
                  Unity Gateway supports budgets with monitoring, per-user thresholds and hard caps, plus rate limits
                  on model and MCP services. One retry loop in one notebook can otherwise spend a month of budget
                  overnight.{" "}
                  <Link href={dbPath("unity-catalog")}>Unity Gateway &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Put cost beside governance</h3>
                <p>
                  The governance dashboard shows cost alongside access changes and policy drift. Seeing the three
                  together is how you notice that the expensive new workload is also the ungoverned one.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Review monthly, with names on it</h3>
                <p>
                  Each team sees its own number, in a meeting, with its own people present. This is the control that
                  works, and it is the one most organisations skip because it is social rather than technical.
                </p>
              </div>
            </li>
          </ol>
          <div className="quote" data-r>
            <p>
              A platform nobody is accountable for the cost of will cost whatever it costs. Attribution is not an
              accounting exercise, it is the only thing that makes the engineering decisions visible.
            </p>
            <span className="by">What we say in the first week of every engagement</span>
          </div>
        </div>
      </section>

      {/* ---------------- free edition ---------------- */}
      <section id="free">
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="Trying it" title="Free Edition is for learning. Be clear about that.">
                There is a Free Edition and there is a trial of the full platform with credits. They are different
                things and only one of them will tell you anything about cost.
              </Head>
              <p className="body-t">
                Free Edition is genuinely good for what it is: learning the interface, the SQL, the notebooks, the
                catalogue. It is also deliberately boxed in, and knowing the walls saves a wasted fortnight. Some
                limits can be raised after identity verification through LinkedIn; the enterprise-only features and the
                administrative restrictions stay.
              </p>
              <p className="body-t">
                The trial gives free access to the full platform, with credits whose amount and eligibility Databricks
                decides, ending when the credits are used. If you connect it to your own cloud account, your cloud
                provider still charges for what you use. At the end of a trial you are subscribed automatically to the
                plan you were using, and a valid payment method is required to continue — so put a date in the diary.
              </p>
              <div className="callout">
                <span className="m">i</span>
                <div>
                  <h3>What we usually recommend instead</h3>
                  <p>
                    Learn on Free Edition, and run a short <b>paid</b> proof on your own data to find out what your
                    workload actually costs. A fortnight of real usage with proper tagging answers the pricing question
                    definitively, and nothing else does.
                  </p>
                </div>
              </div>
            </div>
            <div data-r>
              <div className="includes" style={{ marginTop: 0 }}>
                <div>
                  <span className="t">Compute</span>
                  <h3>One small warehouse</h3>
                  <p>
                    One SQL warehouse at 2X-Small, serverless only, no custom compute configurations and no GPUs. Jobs
                    cap at five concurrent tasks; one active Lakeflow pipeline per pipeline type.
                  </p>
                </div>
                <div>
                  <span className="t">AI</span>
                  <h3>One search endpoint</h3>
                  <p>
                    One AI Search endpoint with one search unit and no direct vector access, limits on active serving
                    endpoints, no GPU serving. One Lakebase project, scaling to zero.
                  </p>
                </div>
                <div>
                  <span className="t">Apps</span>
                  <h3>One app, time-limited</h3>
                  <p>
                    The AWS documentation says one app per account running up to 24 hours after being started, updated
                    or redeployed; another localised page says three. Check the current English page.
                  </p>
                </div>
                <div>
                  <span className="t">Not included</span>
                  <h3>A real list, worth reading</h3>
                  <p>
                    R and Scala, custom workspace storage, online tables, clean rooms and Agent Bricks are not
                    available. Nor are Lakebase database instances.
                  </p>
                </div>
                <div>
                  <span className="t">Administration</span>
                  <h3>One workspace, no SSO</h3>
                  <p>
                    One workspace and one metastore per account, no account console, authentication limited to email
                    one-time codes and Sign in with Microsoft — no SSO, no SCIM.
                  </p>
                </div>
                <div>
                  <span className="t">Terms</span>
                  <h3>Not for commercial use</h3>
                  <p>
                    Free Edition accounts may not be used commercially, and are not covered by the support policy or
                    any SLA. Exceeding a quota can make compute unavailable until it resets, though data is not
                    deleted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="The three places cost is actually decided.">
              Not on this page. In the compute you choose, the pipelines you run and the AI you point at an endpoint.
            </Head>
          </div>
          <RelatedGrid slugs={["lakehouse", "lakeflow", "agent-bricks"]} cols={3} />
        </div>
      </section>

      <Onward slug="pricing-and-cost" />
      <Copyright />
      <FaqSection slug="pricing-and-cost" title="What people ask about the bill." />

      <CtaBand
        title="Send us thirty days of usage."
        body="If you are already on Databricks, give us a month of system billing data and we will come back with the configuration changes worth making, each with the saving attached and none of them a rewrite. If you are not on it yet, we will tell you what a measured proof would cost before anyone commits to anything."
        label="Book a cost audit"
        points={[
          "Findings from your own usage tables",
          "Configuration changes, not re-architecture",
          "Each saving quantified and attributed",
          "Tagging and budgets put in place",
          "A monthly review each team can see itself in",
        ]}
      />
    </>
  );
}
