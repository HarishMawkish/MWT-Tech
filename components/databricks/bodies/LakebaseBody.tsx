import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Lakebase — the database. The reason this page exists at all is that most people's mental model of Databricks has no
 * room for a transactional database in it, so the page spends its first half explaining why one belongs here.
 */
export function LakebaseBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Lakebase" />
          <div className="hero-grid">
            <div>
              <Kicker>Database</Kicker>
              <h1>
                Postgres, with storage and compute <em>pulled apart.</em>
              </h1>
              <p className="lede">
                A warehouse is built for scanning years of history. An application updating the same row four hundred
                times a minute wants something else entirely, which is why every analytics platform eventually
                acquires a transactional database beside it and a pipeline between them to maintain. Lakebase is
                Databricks&rsquo; version of that database: open-source Postgres, not a fork, with its storage in open
                formats on object storage and a serverless engine over the top that branches like code and scales to
                zero.
              </p>
              <div className="ctas">
                <a href="#branch" className="btn pri">
                  Branching a database <span className="ar">&rarr;</span>
                </a>
                <a href="#ltap" className="btn sec">
                  Why not just use tables?
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of a psql session against a branch. Sample data.">
              <Screen
                dark
                title="psql · stock_app · branch: fix-reorder-point"
                user="DB"
                label="Illustration of a psql terminal connected to a Lakebase branch called fix-reorder-point, listing installed extensions including pgvector and PostGIS, running a hybrid query that combines a vector similarity search with a filter on stock cover, and showing the branch was created from production two minutes ago with compute scaled to zero when idle"
              >
                <div className="body-pad tight">
                  <div className="code">
                    <div>
                      <span className="c">$ psql &quot;postgresql://stock_app.lakebase/…&quot;</span>
                    </div>
                    <div>
                      psql (<span className="n">16.4</span>) — branch <b>fix-reorder-point</b>, from <b>production</b>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                      stock_app=&gt; <span className="k">\dx</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="f">pgvector</span> │ <span className="f">postgis</span> │{" "}
                      <span className="f">pg_stat_statements</span> │ <span className="f">uuid-ossp</span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                      stock_app=&gt; <span className="k">SELECT</span> sku, stock_cover_days
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="k">FROM</span> item
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="k">WHERE</span> embedding &lt;-&gt; <span className="f">$1</span>{" "}
                      &lt; <span className="n">0.25</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="k">AND</span> stock_cover_days &lt;{" "}
                      <span className="n">7</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;<span className="k">ORDER BY</span> stock_cover_days <span className="k">LIMIT</span>{" "}
                      <span className="n">20</span>;
                    </div>
                    <div>&nbsp;</div>
                    <div>
                      <span className="c">(20 rows) — 11 ms</span>
                    </div>
                  </div>
                  <div className="tiles" style={{ marginTop: "9px" }}>
                    <Tile h="Branch age" s="From production" k="2" unit="min" tone="own" />
                    <Tile h="Idle compute" s="Scales to zero" k="0" tone="pos" />
                    <Tile h="Dialect" s="Open-source Postgres" k="16.4" />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- it really is postgres ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="Compatibility" title="No new dialect to learn, no driver to wait for.">
                This is the claim to check first with any managed database, because &ldquo;Postgres-compatible&rdquo;
                has meant a dozen different things over the years. Databricks is explicit: Lakebase runs open-source
                Postgres, not a fork and not a new SQL dialect.
              </Head>
              <p className="body-t">
                Standard clients, drivers and ORMs work. <b>psql</b>, <b>pgAdmin</b> and <b>DBeaver</b> connect. Most
                popular extensions are supported, <b>PostGIS</b> and <b>pgvector</b> among them — which is how vector,
                keyword and hybrid search happen inside the database rather than in a separate service you have to keep
                in step.
              </p>
              <p className="body-t">
                The practical consequence is that your existing application code, your migrations, your connection
                pooler and your developers&rsquo; habits all transfer. The novelty is entirely underneath.
              </p>
              <div className="chips">
                <span>Standard Postgres wire protocol</span>
                <span>Your existing ORM</span>
                <span>pgvector</span>
                <span>PostGIS</span>
                <span>psql, pgAdmin, DBeaver</span>
                <span className="off">Scale claim: 1 row to 1 billion vectors</span>
              </div>
            </div>
            <div data-r>
              <div className="includes" style={{ marginTop: 0 }}>
                <div>
                  <span className="t">Underneath</span>
                  <h3>Open formats on object storage</h3>
                  <p>Data lives in open formats on low-cost cloud object storage rather than on attached disks.</p>
                </div>
                <div>
                  <span className="t">Over it</span>
                  <h3>A serverless Postgres engine</h3>
                  <p>Scales elastically with the workload, and separately from the storage beneath it.</p>
                </div>
                <div>
                  <span className="t">When idle</span>
                  <h3>Scaled to zero</h3>
                  <p>No spend on capacity nobody is using, which changes what is affordable to keep running.</p>
                </div>
                <div>
                  <span className="t">For availability</span>
                  <h3>One primary, up to three secondaries</h3>
                  <p>Across availability zones, with failover and reads offloaded onto the secondaries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- branching ---------------- */}
      <section id="branch">
        <div className="in">
          <div data-r>
            <Head eyebrow="Branching" title="The feature that changes how your team works." wide>
              Separating storage from compute makes something possible that is genuinely new to most teams: a database
              branch, taken instantly, holding production-shaped data, that can be worked against and then thrown away.
            </Head>
          </div>
          <div className="dia" data-r>
            <div className="dh">One production database, three branches, no copies to manage</div>
            <div className="scroll">
              <svg viewBox="0 0 980 230" role="img" aria-labelledby="db-branch-t">
              <title id="db-branch-t">
                A branch diagram. A horizontal production line runs across the middle. Three branches split off it: a
                development branch created instantly from production, a test branch used to validate a restore before
                it reaches production, and a branch used to rehearse a schema migration. Each branch rejoins or is
                discarded, and a note says branches read production-shaped data without affecting the live workload.
              </title>
              <g fontFamily="var(--display)" fontWeight="700" fontSize="12">
                <path d="M40 120 H940" stroke="var(--a)" strokeWidth="3" />
                <circle cx="40" cy="120" r="6" fill="var(--a)" />
                <text x="40" y="150" fill="var(--fg)" fontSize="13">production</text>
                <text x="40" y="168" fill="var(--muted)" fontSize="11" fontWeight="500">
                  primary read/write, 1–3 secondaries across zones
                </text>

                {/* dev branch */}
                <path d="M210 120 C250 120 250 54 290 54 H470" stroke="#13a0a0" strokeWidth="2.2" fill="none" />
                <circle cx="210" cy="120" r="5" fill="#13a0a0" />
                <circle cx="470" cy="54" r="5" fill="#13a0a0" />
                <text x="298" y="44" fill="#5ec9c9">branch: feature work</text>
                <text x="298" y="74" fill="var(--muted)" fontSize="11" fontWeight="500">
                  created instantly, reset to production data on demand
                </text>

                {/* restore validation */}
                <path d="M520 120 C560 120 560 186 600 186 H760" stroke="#ef8a2b" strokeWidth="2.2" fill="none" />
                <circle cx="520" cy="120" r="5" fill="#ef8a2b" />
                <path d="M760 186 C800 186 800 120 840 120" stroke="#ef8a2b" strokeWidth="2.2" fill="none" strokeDasharray="5 4" />
                <text x="608" y="176" fill="#f3b472">branch: validate a restore</text>
                <text x="608" y="206" fill="var(--muted)" fontSize="11" fontWeight="500">
                  checked in isolation before anything reaches production
                </text>

                {/* migration rehearsal */}
                <path d="M660 120 C700 120 700 54 740 54 H940" stroke="#9b5de5" strokeWidth="2.2" fill="none" />
                <circle cx="660" cy="120" r="5" fill="#9b5de5" />
                <text x="748" y="44" fill="#c9a6f5">branch: rehearse migration</text>
                <text x="748" y="74" fill="var(--muted)" fontSize="11" fontWeight="500">
                  discarded afterwards, at no storage cost
                </text>
              </g>
            </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> Production
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#13a0a0" }} /> Development
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#ef8a2b" }} /> Restore validation
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#9b5de5" }} /> Migration rehearsal
              </span>
            </div>
          </div>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">Before</span>
              <h3>A staging box and a nightly dump</h3>
              <p>
                Somebody maintains a restore script. The staging data is a week old, anonymised badly, and three times
                a year the restore fails silently. Nobody tests against real data because real data is awkward to get.
              </p>
            </div>
            <div className="cap">
              <span className="n">After</span>
              <h3>A branch, in a moment</h3>
              <p>
                Take a branch, work against production-shaped data, reset it when it drifts, discard it when done. The
                live workload is untouched throughout.
              </p>
            </div>
            <div className="cap">
              <span className="n">The one that matters</span>
              <h3>Validate the restore first</h3>
              <p>
                A restore can be checked on an isolated branch before it reaches production — which turns the most
                frightening operation in database administration into something you can look at before committing to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- LTAP ---------------- */}
      <section className="light" id="ltap">
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="One governed copy" title="The sync pipeline you are maintaining today.">
                Here is the shape almost every estate has. An application database holds the live state. A nightly or
                hourly job copies it into the warehouse so it can be reported on. A second job copies curated results
                back out so the application can use them. Both jobs are owned by someone who did not write them, and
                the two sides are permanently a little out of step.
              </Head>
              <p className="body-t">
                Databricks calls running transactional and analytical work over one governed copy <b>LTAP</b> — lake
                transactional and analytical processing. Transactions and analytics read the same data, so the sync in
                the middle stops existing, and the <b>Lakebase Change Data Feed</b> carries transactional change into
                the lakehouse without an ETL step.
              </p>
              <p className="body-t">
                The honest framing: this does not abolish the difference between the two workloads, it just means you
                are not also maintaining the plumbing between them. The row store and the columnar files are still
                different shapes for different jobs — and that is fine, because that part was never the problem.
              </p>
            </div>
            <div data-r>
              <div className="vs stack" style={{ marginTop: 0 }}>
                <div>
                  <span className="lab">What you maintain now</span>
                  <h3>Two systems, two jobs, one lag</h3>
                  <ul>
                    <li>An extract job out of the application database.</li>
                    <li>A load job back in with the curated results.</li>
                    <li>Two permission models to keep aligned.</li>
                    <li>A lag everyone has learned to work around.</li>
                    <li>A reconciliation nobody runs.</li>
                  </ul>
                </div>
                <div className="good">
                  <span className="lab">What this replaces it with</span>
                  <h3>One copy, governed once</h3>
                  <ul>
                    <li>Transactional and analytical reads over the same governed data.</li>
                    <li>A change feed into the lakehouse with no pipeline in between.</li>
                    <li>Unity Catalog permissions covering both paths.</li>
                    <li>No lag to explain to the business.</li>
                    <li>One fewer job for somebody to inherit.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- reliability ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Reliability and compliance" title="What Databricks states, and what to read.">
              For a database holding live application state, the published commitments matter more than the feature
              list. These are the ones Databricks states.
            </Head>
          </div>
          <div className="facts" data-r>
            <div className="fact">
              <b>99.99%</b>
              <span>Uptime SLA published for production apps</span>
            </div>
            <div className="fact">
              <b>1–3</b>
              <span>Secondaries across availability zones, with failover</span>
            </div>
            <div className="fact">
              <b>SOC 2</b>
              <span>And HIPAA, stated for Lakebase</span>
            </div>
            <div className="fact">
              <b>PCI, HITRUST</b>
              <span>Supported on Azure and AWS, described as limited</span>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">&sect;</span>
            <div>
              <h3>An SLA is a number and a remedy</h3>
              <p>
                Four nines sounds like 52 minutes a year, and it may be. What matters as much is what the agreement
                covers, what it excludes, what the measurement window is, and what it actually pays when missed —
                which is usually service credits rather than your losses.
              </p>
              <p>
                We read that document as part of an architecture review rather than after an outage, and we tell you
                plainly whether your application&rsquo;s availability requirement is met by the platform or needs
                designing for on top of it. The compliance wording — &ldquo;supported&hellip; limited&rdquo; — deserves
                the same treatment if you are in a regulated sector.
              </p>
            </div>
          </div>
          <p className="note" data-r>
            Databricks publishes no latency benchmark for Lakebase, and its scale claim is the memorable but
            unquantified &ldquo;from 1 row to 1 billion vectors&rdquo;. If your application has a latency requirement,
            that is a thing to measure in a pilot, not a thing to assume from a product page — ours included.
          </p>
        </div>
      </section>

      {/* ---------------- use cases ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="What it is for" title="Four jobs, in the order people reach them.">
              These are the use cases Databricks names, arranged by how we actually see teams arrive at them.
            </Head>
          </div>
          <ol className="steps" data-r>
            <li>
              <div>
                <h3>The database behind an internal application</h3>
                <p>
                  Usually the first one, because it arrives with a Databricks App: a tool that reads governed data,
                  writes back decisions, and needs somewhere to keep them. Serverless, scaling to zero between uses,
                  with no server to request.{" "}
                  <Link href={dbPath("apps")}>Databricks Apps &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>State and memory for agents</h3>
                <p>
                  Agent sessions and long-term memory are stored in Lakebase-backed stores. This is why an agent can
                  remember what it was told last week rather than re-asking, and it is the difference between a
                  novelty and something people rely on.{" "}
                  <Link href={dbPath("agent-bricks")}>Agent Bricks &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Vector, keyword and hybrid search in one place</h3>
                <p>
                  With pgvector inside the same Postgres, a retrieval query can combine semantic similarity with
                  ordinary filters — &ldquo;items like this description, with under seven days of cover, in the
                  Western region&rdquo; — in one statement, against one database, under one set of permissions.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Operational analytics and planning</h3>
                <p>
                  Reading analytical data without an ETL hop, which is what makes an inventory or replenishment screen
                  both current and correct. Databricks names inventory intelligence and planning specifically.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What usually arrives with it.">
              A database on its own is not a project. These are what it is normally part of.
            </Head>
          </div>
          <RelatedGrid slugs={["apps", "agent-bricks", "lakehouse"]} cols={3} />
        </div>
      </section>

      <Onward slug="lakebase" />
      <Copyright />
      <FaqSection slug="lakebase" title="What people ask about the database." />

      <CtaBand
        title="Tell us about the sync job nobody owns."
        body="Most estates have one: a job copying between the application database and the warehouse, written years ago, feared by everyone. We will map what it moves, whether a change feed replaces it, and what your application's latency and availability requirements actually need — including when the answer is that your current database is fine."
        label="Book an architecture review"
        points={[
          "Your Postgres code and ORM, unchanged",
          "Branches instead of a staging restore",
          "The sync pipeline mapped and costed",
          "The SLA read before it is relied on",
          "Latency measured, not assumed",
        ]}
      />
    </>
  );
}
