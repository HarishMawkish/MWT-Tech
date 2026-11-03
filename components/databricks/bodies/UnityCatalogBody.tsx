import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen } from "../screens";
import { dbPath } from "../data";

/**
 * Unity Catalog — governance. The argument of this page is that governance is not a compliance chore bolted on at the
 * end but the thing that decides whether anyone trusts a number, and that it now has to cover agents as well as
 * tables, because an agent is only as safe as the permissions on what it can reach.
 */
export function UnityCatalogBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Unity Catalog" />
          <div className="hero-grid">
            <div>
              <Kicker>Governance</Kicker>
              <h1>
                The least exciting page here. <em>And the one that decides everything.</em>
              </h1>
              <p className="lede">
                Nobody has ever been promoted for designing a permission model. And yet every data platform that fails
                fails here: two definitions of revenue, a table nobody owns, a dashboard built on an extract of an
                extract, an agent that answered a question it should never have been able to ask. Unity Catalog puts
                tables, files, models, dashboards, agents and the servers they call into one hierarchy with one
                privilege model, one lineage graph and one set of shared definitions.
              </p>
              <div className="ctas">
                <a href="#semantics" className="btn pri">
                  The highest-return part <span className="ar">&rarr;</span>
                </a>
                <a href="#gateway" className="btn sec">
                  Governing AI
                </a>
              </div>
              <p className="name-note">
                It is <b>included in the Premium and Enterprise tiers</b> — no separate licence, you pay only for the
                compute and storage you use — and it is <b>switched on automatically in new workspaces</b>. So the
                decision was made for you. What is left is the design.
              </p>
            </div>

            <Fig caption="Our illustration of Catalog Explorer. Sample data.">
              <Screen
                title="Catalog Explorer"
                search="Search tables, models, agents"
                user="GV"
                label="Illustration of the catalogue browser showing a catalogue called main containing schemas for sales, reference data and finance, with tables for order line and customer, a volume of contract files, a registered model for demand forecasting and an agent for pricing questions, each row showing its owner and whether it is certified"
              >
                <div className="body-pad">
                  <div className="card-f">
                    <div className="h">
                      main
                      <span className="m">catalogue · owner: data platform</span>
                    </div>
                    <ul className="tree">
                      <li>
                        <i className="cat" aria-hidden="true" />
                        main
                        <span className="m">4 schemas</span>
                      </li>
                      <li className="ind-1">
                        <i className="sch" aria-hidden="true" />
                        sales
                        <span className="m">18 objects</span>
                      </li>
                      <li className="ind-2">
                        <i className="tbl" aria-hidden="true" />
                        order_line
                        <span className="m">certified</span>
                      </li>
                      <li className="ind-2">
                        <i className="tbl" aria-hidden="true" />
                        customer
                        <span className="m">pii tagged</span>
                      </li>
                      <li className="ind-2">
                        <i className="vol" aria-hidden="true" />
                        contracts
                        <span className="m">volume · 4,112 files</span>
                      </li>
                      <li className="ind-1">
                        <i className="sch" aria-hidden="true" />
                        finance
                        <span className="m">restricted</span>
                      </li>
                      <li className="ind-2">
                        <i className="mdl" aria-hidden="true" />
                        demand_forecast
                        <span className="m">model · v7</span>
                      </li>
                      <li className="ind-2">
                        <i className="agt" aria-hidden="true" />
                        pricing_agent
                        <span className="m">agent · governed</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-f">
                    <div className="h">
                      main.sales.customer
                      <span className="m">column policies</span>
                    </div>
                    <Row l="email · tagged pii" r="masked" pill={{ k: "own", t: "Policy" }} />
                    <Row l="nic_number · tagged pii" r="masked" pill={{ k: "own", t: "Policy" }} />
                    <Row l="region_id" r="visible" pill={{ k: "ok", t: "Open" }} />
                    <Row l="credit_limit" r="Finance only" pill={{ k: "in", t: "Row filter" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the hierarchy ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="The shape of it" title="Everything lives in three levels.">
              Catalogue, then schema, then the object. That is the whole hierarchy, and it is worth internalising
              because every grant, every policy and every lineage edge is expressed against it.
            </Head>
          </div>
          <div className="defs" data-r>
            <div>
              <div className="t">Metastore</div>
              <p>
                An account-level registry of your catalogues, schemas, tables and permissions. One per account and
                region. The old Hive metastore still exists for estates not yet on Unity Catalog; new work should not
                go there.
              </p>
            </div>
            <div>
              <div className="t">Catalogue</div>
              <p>
                The top level, and the unit of isolation. Catalogues can be shared across workspaces in the same
                account and region, which is how you give three teams their own workspace without three copies of the
                data.
              </p>
            </div>
            <div>
              <div className="t">Schema</div>
              <p>
                Inside a catalogue, holding tables, views, volumes, functions and models. Most arguments about data
                architecture are really arguments about where the schema boundaries go, so draw them around ownership
                rather than around technology.
              </p>
            </div>
            <div>
              <div className="t">
                Table, view, <span style={{ opacity: 0.8 }}>volume</span>
              </div>
              <p>
                A table is structured data, Delta by default. A view is a saved query, read-only. A volume is governed
                storage for everything that is not tabular — PDFs, images, audio — which is how documents reach the AI
                functions under the same permissions as the tables.
              </p>
            </div>
            <div>
              <div className="t">
                Function, <span style={{ opacity: 0.8 }}>model</span>
              </div>
              <p>
                Functions are reusable logic, and a function registered here can be published as a tool an agent may
                call. Models live in the registry inside Unity Catalog, inheriting its access control and lineage
                rather than sitting in a separate system with separate rules.
              </p>
            </div>
            <div>
              <div className="t">
                Agent, <span style={{ opacity: 0.8 }}>MCP server</span>
              </div>
              <p>
                An agent is registered as a model, and the tools it uses are governed as MCP services, functions or
                connections. This is the part that is genuinely new, and the part most governance programmes have not
                caught up with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- lineage ---------------- */}
      <section id="lineage">
        <div className="in">
          <div data-r>
            <Head eyebrow="Lineage" title="Before you change a column, see who breaks." wide>
              Lineage here is automatic and column-level: not &ldquo;this table feeds that one&rdquo; but &ldquo;this
              column feeds that calculation in that dashboard that the board reads on Mondays&rdquo;. It covers AI
              assets as well as data, which is how an audit of an agent&rsquo;s answer becomes possible at all.
            </Head>
          </div>
          <div className="dia" data-r>
            <div className="dh">One column, traced forward</div>
            <div className="scroll">
              <svg viewBox="0 0 980 248" role="img" aria-labelledby="db-lin-t">
              <title id="db-lin-t">
                A lineage diagram tracing one column forward. On the left, the column net_amount in the raw Salesforce
                order line table. It feeds a cleaned order line table, which feeds a margin metric definition. From
                that metric, three things branch: a finance dashboard with 41 viewers, a Genie space used by the sales
                team, and a pricing agent. A fourth branch leads out to a share given to an external auditor.
              </title>
              <g fontFamily="var(--display)" fontWeight="700" fontSize="12">
                <rect x="0" y="92" width="176" height="60" rx="10" fill="var(--dia-n)" stroke="var(--line)" />
                <text x="16" y="116" fill="var(--fg)" fontSize="12.5">raw.salesforce</text>
                <text x="16" y="133" fill="var(--a)" fontSize="11.5">.order_line.net_amount</text>

                <path d="M176 122 H228" stroke="var(--a)" strokeWidth="2" />
                <path d="M222 117 l7 5 -7 5 z" fill="var(--a)" />

                <rect x="234" y="92" width="176" height="60" rx="10" fill="var(--a)" fillOpacity="0.1" stroke="var(--a)" strokeOpacity="0.45" />
                <text x="250" y="116" fill="var(--fg)" fontSize="12.5">main.sales</text>
                <text x="250" y="133" fill="var(--a)" fontSize="11.5">.order_line_clean</text>

                <path d="M410 122 H462" stroke="var(--a)" strokeWidth="2" />
                <path d="M456 117 l7 5 -7 5 z" fill="var(--a)" />

                <rect x="468" y="86" width="186" height="72" rx="10" fill="#3d7df6" fillOpacity="0.14" stroke="#3d7df6" strokeOpacity="0.55" />
                <text x="486" y="110" fill="#9bc0fb" fontSize="12.5">Metric: margin</text>
                <text x="486" y="128" fill="var(--muted)" fontSize="11" fontWeight="500">Defined once,</text>
                <text x="486" y="143" fill="var(--muted)" fontSize="11" fontWeight="500">used everywhere below</text>

                <path d="M654 110 C700 110 700 36 740 36" stroke="#9b5de5" strokeWidth="1.8" fill="none" />
                <path d="M654 122 H740" stroke="#9b5de5" strokeWidth="1.8" />
                <path d="M654 134 C700 134 700 192 740 192" stroke="#e4376a" strokeWidth="1.8" fill="none" />
                <path d="M654 140 C700 140 700 236 740 236" stroke="#2ba86f" strokeWidth="1.8" fill="none" strokeDasharray="5 4" />

                <rect x="746" y="14" width="234" height="44" rx="9" fill="#9b5de5" fillOpacity="0.12" stroke="#9b5de5" strokeOpacity="0.45" />
                <text x="762" y="34" fill="#c9a6f5" fontSize="12">Finance dashboard</text>
                <text x="762" y="50" fill="var(--muted)" fontSize="10.5" fontWeight="500">41 viewers · certified</text>

                <rect x="746" y="100" width="234" height="44" rx="9" fill="#9b5de5" fillOpacity="0.12" stroke="#9b5de5" strokeOpacity="0.45" />
                <text x="762" y="120" fill="#c9a6f5" fontSize="12">Genie space · Sales</text>
                <text x="762" y="136" fill="var(--muted)" fontSize="10.5" fontWeight="500">Natural-language questions</text>

                <rect x="746" y="170" width="234" height="44" rx="9" fill="#e4376a" fillOpacity="0.12" stroke="#e4376a" strokeOpacity="0.45" />
                <text x="762" y="190" fill="#f087a4" fontSize="12">pricing_agent</text>
                <text x="762" y="206" fill="var(--muted)" fontSize="10.5" fontWeight="500">1,204 calls today · traced</text>

                <rect x="746" y="226" width="234" height="22" rx="7" fill="#2ba86f" fillOpacity="0.12" stroke="#2ba86f" strokeOpacity="0.4" />
                <text x="762" y="241" fill="#73cfa0" fontSize="11">Share · external auditor</text>
              </g>
            </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> Data
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#3d7df6" }} /> Shared definition
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#9b5de5" }} /> People
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#e4376a" }} /> Agents
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#2ba86f" }} /> Outside the company
              </span>
            </div>
          </div>
          <p className="note" data-r>
            Databricks positions lineage for impact analysis, troubleshooting, governance and AI audits. The one that
            earns its keep daily is the first: the question &ldquo;if I change this, what breaks?&rdquo; used to be
            answered by asking around and hoping. Now it is a screen.
          </p>
        </div>
      </section>

      {/* ---------------- access control ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="Access" title="Rules that still hold for next month's tables.">
                A permission model written object by object is obsolete the day someone creates a table. The shift
                worth making is from naming objects to describing them: write the rule against tags and attributes, let
                classification apply the tags, and the rule covers what does not exist yet.
              </Head>
              <p className="body-t">
                So instead of &ldquo;grant select on these forty tables to this group&rdquo;, the rule is
                &ldquo;columns tagged <b>pii</b> are masked for everyone outside Finance&rdquo; — and the table created
                next Tuesday is covered because its email column gets classified and tagged on arrival.
              </p>
              <ul className="cap" style={{ marginTop: "28px", listStyle: "none" }}>
                <li>Grants on catalogues, schemas and objects, inherited downward.</li>
                <li>Row filters, so a regional manager&rsquo;s query returns their region.</li>
                <li>Column masks, so a support agent sees the last four digits and no more.</li>
                <li>Policies written against attributes and tags rather than object names.</li>
                <li>Automated classification, so the tags arrive without a human cataloguing columns.</li>
                <li>Audit logging of what was read, by whom, and through which path.</li>
              </ul>
            </div>
            <div data-r>
              <div className="callout" style={{ marginTop: 0 }}>
                <span className="m">&ne;</span>
                <div>
                  <h3>What it governs, and what it cannot</h3>
                  <p>
                    Lakehouse Federation and foreign tables bring systems you have not moved — Snowflake, Redshift,
                    BigQuery, SQL Server, Postgres, Glue, Hive Metastore — under this discovery and these controls when
                    they are queried through Databricks.
                  </p>
                  <p>
                    What that does <b>not</b> do is make Databricks the enforcement point inside those systems. Someone
                    connecting directly to that Postgres instance is governed by Postgres. Federation governs a path,
                    not a database, and a governance programme that misses this distinction is telling itself a story.
                  </p>
                </div>
              </div>
              <div className="caps stack" style={{ marginTop: "16px" }}>
                <div className="cap">
                  <span className="n">Quality</span>
                  <h3>Monitoring that surfaces where people look</h3>
                  <p>
                    Anomaly detection and freshness tracking, with trust signals shown where users and agents actually
                    work rather than in a report only the data team opens.
                  </p>
                </div>
                <div className="cap">
                  <span className="n">Oversight</span>
                  <h3>One governance dashboard</h3>
                  <p>
                    Governance, cost and AI usage in one view, flagging gaps, risky access changes and policy drift —
                    which is the difference between governance as a state and governance as an annual exercise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- semantics ---------------- */}
      <section id="semantics">
        <div className="in">
          <div data-r>
            <Head eyebrow="Business semantics" title="Why three teams bring three revenue numbers.">
              Here is the thing almost nobody says out loud: in most of these arguments, everybody is right. Two
              correct calculations of two different definitions. Finance excludes intercompany; Sales does not. One
              counts on invoice date, the other on delivery. Neither is wrong and neither is reconcilable, because the
              rule lives in a dashboard rather than in the data.
            </Head>
          </div>
          <div className="vs" data-r>
            <div>
              <span className="lab">Definition in the dashboard</span>
              <h3>Twelve versions of margin</h3>
              <ul>
                <li>Each report author encodes the rule in their own query.</li>
                <li>A rule change means finding and editing twelve places, and missing two.</li>
                <li>A natural-language question gets whichever version the model inferred.</li>
                <li>An agent computes a thirteenth.</li>
                <li>Every meeting starts with a reconciliation instead of a decision.</li>
              </ul>
            </div>
            <div className="good">
              <span className="lab">Definition in the catalogue</span>
              <h3>One version, used by everything</h3>
              <ul>
                <li>Metric views hold the measure, its dimensions and its rule once.</li>
                <li>A change is made in one place and every consumer follows.</li>
                <li>BI tools, Genie answers and agents all compute the same figure.</li>
                <li>Lineage shows exactly which definition produced a number.</li>
                <li>The argument moves from &ldquo;whose number&rdquo; to &ldquo;what to do&rdquo;.</li>
              </ul>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">&rarr;</span>
            <div>
              <h3>If you take one thing from this section</h3>
              <p>
                Agree ten metric definitions before you build a single dashboard. Get the people who argue about them
                into one room, write the rules down, put them in the catalogue, and name an owner for each. It takes
                about two weeks and it is the highest-return fortnight in a data programme — because it is the only
                part that cannot be retrofitted without redoing everything built on top of it.
              </p>
              <p>
                We run that fortnight as a fixed-scope piece of work, with the definitions as the deliverable.{" "}
                <Link href="/contact">Ask us about it</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the gateway ---------------- */}
      <section className="light" id="gateway">
        <div className="in">
          <div data-r>
            <Head eyebrow="Unity Gateway" title="Governing AI is governing what it can reach." wide>
              An agent is not dangerous because it is clever. It is dangerous because it holds a credential. Unity
              Gateway applies the catalogue&rsquo;s privileges at runtime to models, agents, tools and MCP servers —
              the same grants you use for tables and volumes, extended to the things that call them.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Control</th>
                  <th>What it does</th>
                  <th>The problem it prevents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Access</td>
                  <td data-label="What it does">
                    Unity Catalog privileges over foundation models served natively, external providers connected with
                    your own key, registered models, MCP servers, functions used as tools, and HTTP connections.
                    Permissions can be set per group and per model.
                  </td>
                  <td data-label="The problem it prevents">
                    A team quietly standing up its own provider account outside every control you have.
                  </td>
                </tr>
                <tr>
                  <td>Rate limits</td>
                  <td data-label="What it does">
                    Consumption limits on model and MCP services, to manage both capacity and cost.
                  </td>
                  <td data-label="The problem it prevents">
                    One retry loop in one notebook spending a month of budget overnight.
                  </td>
                </tr>
                <tr>
                  <td>Budgets</td>
                  <td data-label="What it does">
                    Monitoring with per-user thresholds and hard caps, so spend has a ceiling rather than a report.
                  </td>
                  <td data-label="The problem it prevents">Discovering the number at the end of the month.</td>
                </tr>
                <tr>
                  <td>Guardrails</td>
                  <td data-label="What it does">
                    Service policies over request and response content, which can account for the caller&rsquo;s
                    identity. Built-in, custom and external policies are supported, including enforcing a third-party
                    guardrail vendor&rsquo;s decisions.
                  </td>
                  <td data-label="The problem it prevents">
                    An agent repeating something back to a customer that should never have left the building.
                  </td>
                </tr>
                <tr>
                  <td>Routing</td>
                  <td data-label="What it does">
                    Traffic splitting across model destinations, failover for availability, and Smart Routing that
                    picks a model and harness per coding task to control spend.
                  </td>
                  <td data-label="The problem it prevents">
                    A model choice baked into application code, which is the wrong place for a decision that changes
                    quarterly.
                  </td>
                </tr>
                <tr>
                  <td>Audit</td>
                  <td data-label="What it does">
                    Usage tracking in system tables — requests, tokens, latency — cost attributed to services, models,
                    principals and tags, and request and response logging to Delta tables.
                  </td>
                  <td data-label="The problem it prevents">
                    Being unable to answer, six months later, why the agent said that.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            One naming note, because it will confuse you otherwise: Databricks&rsquo; own pages use both{" "}
            <b>Unity Gateway</b> and <b>AI Gateway</b>, sometimes on the same page, and the relationship between the
            two names is not stated clearly anywhere. Treat them as the same control point until Databricks settles the
            naming. See <Link href={dbPath("agent-bricks")}>Agent Bricks</Link> for what sits on top of it.
          </p>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What governance makes possible.">
              Everything else on this platform assumes this layer has been designed rather than defaulted.
            </Head>
          </div>
          <RelatedGrid slugs={["genie", "agent-bricks", "sharing"]} cols={3} />
        </div>
      </section>

      <Onward slug="unity-catalog" />
      <Copyright />
      <FaqSection slug="unity-catalog" title="What people ask about governance." />

      <CtaBand
        title="Two weeks on ten definitions."
        body="We will get the people who disagree about your numbers into a room, write down what each metric actually means, put the definitions in the catalogue with an owner against each, and leave you with a permission model designed around ownership rather than around whoever asked first."
        label="Book a definitions fortnight"
        points={[
          "Ten metrics, defined once and agreed",
          "Catalogue and schema boundaries drawn around ownership",
          "Tag-based policies instead of object lists",
          "Lineage you can answer impact questions from",
          "AI access governed before the first agent",
        ]}
      />
    </>
  );
}
