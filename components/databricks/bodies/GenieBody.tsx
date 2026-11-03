import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Genie — BI and the business-user experience. The spine of this page: a natural-language answer is only as good as
 * the curation behind it, so the interesting content is what has to be true before the question is asked.
 */
export function GenieBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Genie" />
          <div className="hero-grid">
            <div>
              <Kicker>BI and the AI assistant</Kicker>
              <h1>
                Anyone can ask. <em>Whether the answer is right is up to you.</em>
              </h1>
              <p className="lede">
                Genie is where people who do not write SQL meet your data: governed dashboards, questions asked in
                plain English and answered from curated tables, and the shared metric definitions that keep two people
                asking the same thing from getting two different numbers. Databricks publishes no accuracy figure for
                it, and that is the right place to start — because what decides accuracy is not the model, it is the
                curation underneath.
              </p>
              <div className="ctas">
                <a href="#trust" className="btn pri">
                  What makes answers trustworthy <span className="ar">&rarr;</span>
                </a>
                <a href="#cost" className="btn sec">
                  What it costs per person
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of a Genie answer with its sources. Sample data.">
              <Screen
                title="Genie · Sales &amp; margin"
                user="PR"
                label="Illustration of a Genie conversation. A user asks which regions lost margin last quarter and why. Genie answers that Northern fell 8.2 percent driven by freight cost on three products, cites the certified margin metric definition and the sales order line table as its sources, and offers to open the figure as a chart. The user then asks to exclude intercompany sales and Genie confirms the revised figure."
              >
                <div className="body-pad">
                  <div className="chat">
                    <div className="ch">
                      <i aria-hidden="true" />
                      Genie
                      <span className="m">Sales &amp; margin · certified space</span>
                    </div>
                    <div className="msgs">
                      <div className="bub u">Which regions lost margin last quarter, and why?</div>
                      <div className="bub a">
                        <b>Northern</b> fell <b>8.2%</b> against Q3. Most of it sits in three SKUs where freight cost
                        per unit rose 31%. Western and Central were flat; Southern gained 2.1%.
                        <div className="src">
                          <span>metric: margin</span>
                          <span>main.sales.order_line</span>
                          <span>main.ref.freight_rate</span>
                        </div>
                      </div>
                      <div className="bub u">Exclude intercompany.</div>
                      <div className="bub a">
                        Using the <b>certified</b> definition, which already excludes intercompany, the figure is
                        unchanged at <b>8.2%</b>. Your Sales dashboard uses a second definition that includes it and
                        shows 6.4%.
                        <div className="src">
                          <span>definition conflict flagged</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tiles" style={{ marginTop: "9px" }}>
                    <Tile h="Tables in space" s="Described and certified" k="11" tone="own" />
                    <Tile h="Metrics defined" s="In the catalogue" k="9" tone="pos" />
                    <Tile h="Questions today" s="Across 3 teams" k="214" />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the four parts ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="What is in it" title="Four things wearing one name.">
              Databricks has consolidated a lot under the word Genie over the past year, including renaming what was
              called Databricks One. Here is what each piece actually is, because the names are used interchangeably in
              places and it matters which one you are buying a rollout of.
            </Head>
          </div>
          <div className="layers" data-r>
            <div className="layer">
              <span className="who">The canvas</span>
              <div>
                <h3>AI/BI Dashboards</h3>
                <p>
                  Dashboards and visualisations built on analytical datasets, with AI assistance through the build. The
                  familiar artefact: a page of charts someone owns, certifies and shares, embeddable in another
                  application.
                </p>
              </div>
            </div>
            <div className="layer core">
              <span className="who">The conversation</span>
              <div>
                <h3>Genie Spaces, now Genie Agents</h3>
                <p>
                  Domain-specific environments where the data team configures the trusted tables, the metrics and the
                  business rules that answers are drawn from. This is the artefact that decides quality, and the one
                  that needs an owner. Databricks reports customers created over 1.5 million of them in 2026.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">The front door</span>
              <div>
                <h3>Genie One</h3>
                <p>
                  The simplified interface for business users, previously called Databricks One, where dashboards,
                  questions and Databricks Apps sit together. Available at workspace level for members with the
                  consumer entitlement, and at account level as one view across every workspace — Databricks says
                  unified login scales past 100,000 users.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">The accelerator</span>
              <div>
                <h3>Genie Code</h3>
                <p>
                  The technical counterpart: AI-assisted SQL authoring and fixes, pipeline drafting, and the agentic
                  code converter used in warehouse migrations. Same brand, entirely different audience.
                </p>
              </div>
            </div>
          </div>
          <p className="note" data-r>
            The widened Genie can answer beyond the boundary of a single space, and reach connected sources such as
            SharePoint and Google Drive through built-in connectors and MCP, with access managed through the gateway.
            Which means the governance question — who may ask what, of which sources — is now a BI question too. See{" "}
            <Link href={dbPath("unity-catalog")}>Unity Catalog</Link>.
          </p>
        </div>
      </section>

      {/* ---------------- how an answer happens ---------------- */}
      <section id="trust">
        <div className="in">
          <div data-r>
            <Head eyebrow="How an answer happens" title="Six things between the question and the number." wide>
              Understanding this sequence is what separates a useful rollout from a disappointing one, because five of
              the six steps are yours to get right and only one belongs to the model.
            </Head>
          </div>
          <ul className="flow" data-r>
            <span className="fline" aria-hidden="true">
              <i />
            </span>
            <li>
              <span className="d">1</span>
              <h3>The question</h3>
              <p>Asked in plain language, with follow-ups, by someone who will not read a data dictionary.</p>
            </li>
            <li>
              <span className="d">2</span>
              <h3>Permission</h3>
              <p>
                Resolved against the asker&rsquo;s own grants. Nobody can ask their way to data they could not already
                query.
              </p>
            </li>
            <li>
              <span className="d">3</span>
              <h3>Routing</h3>
              <p>
                Metadata decides which certified space, dashboard or app should answer, with higher-trust sources
                preferred.
              </p>
            </li>
            <li>
              <span className="d">4</span>
              <h3>Definition</h3>
              <p>
                The metric is computed from the shared definition in the catalogue, not inferred from a column name.
              </p>
            </li>
            <li>
              <span className="d">5</span>
              <h3>Query</h3>
              <p>
                Run against governed tables on warehouse compute, with row filters and column masks applied on the way.
              </p>
            </li>
            <li>
              <span className="d">6</span>
              <h3>The answer, with its sources</h3>
              <p>
                Returned with the assets it came from, so a figure can be checked rather than believed.
              </p>
            </li>
          </ul>

          <div className="callout" data-r>
            <span className="m">!</span>
            <div>
              <h3>It will sometimes be wrong, and the fix is not a better model</h3>
              <p>
                Databricks publishes no accuracy number for Genie, and anyone quoting you one is making it up. What it
                does publish is the machinery for making answers trustworthy: certified spaces, governed dashboards,
                shared definitions, and routing that prefers vetted sources and reuses their logic.
              </p>
              <p>
                A space pointed at raw tables with no descriptions and no agreed metrics will be confidently wrong, and
                will poison trust in the whole platform in about three weeks. A space over ten well-described tables
                with nine agreed metrics is genuinely useful. The difference is curation work, and it is the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- curation checklist ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="Curation" title="What has to be true before you let people ask.">
                We will not switch this on for a client until these are done, because the alternative is a fortnight of
                enthusiasm followed by a year of &ldquo;we tried that, it does not work&rdquo;.
              </Head>
              <ol className="steps">
                <li>
                  <div>
                    <h3>A named owner for the space</h3>
                    <p>
                      One person accountable for what it answers. Curation that is everybody&rsquo;s job is
                      nobody&rsquo;s.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Ten tables, described in business language</h3>
                    <p>
                      Not forty. Column comments that say what a field means to a human, not what type it is. This is
                      also what the SAP connector brings across for free, if your data comes from there.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>The metrics defined and agreed</h3>
                    <p>
                      In the catalogue, with the rule written down and signed off by the people who disagree about it.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>A list of questions it must answer correctly</h3>
                    <p>
                      Twenty real questions from real people, with the right answer established by hand. This is your
                      regression test, and you will use it every time the space changes.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>A rule for what it must refuse</h3>
                    <p>
                      Questions outside the domain should be declined rather than guessed at. An honest &ldquo;I do not
                      cover that&rdquo; is worth more than a plausible fabrication.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Somewhere to report a wrong answer</h3>
                    <p>
                      One click, going to the owner. Without it you will never find out, you will only notice usage
                      quietly stopping.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <Fig caption="Our illustration of a certified dashboard. Sample data.">
              <Screen
                title="Dashboard · Margin by region"
                user="PR"
                label="Illustration of a certified AI/BI dashboard showing margin of 921.2 million rupees down 3.4 percent, freight cost per unit up 31 percent, a twelve-month margin trend chart, and a panel listing the certified metric definition, its owner, when it was last refreshed and the three dashboards retired when it replaced them"
              >
                <div className="body-pad">
                  <div className="tiles">
                    <Tile h="Margin · quarter" s="Certified definition" k="921.2" unit="m" tone="own" />
                    <Tile h="Against Q3" s="Down" k="-3.4" unit="%" tone="neg" />
                    <Tile h="Freight per unit" s="Up" k="+31" unit="%" tone="neg" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Margin, 12 months
                      <span className="m">materialized view · refreshed 06:10</span>
                    </div>
                    <div className="bars" style={{ marginTop: "4px" }}>
                      {[52, 58, 61, 57, 64, 69, 72, 68, 74, 71, 66, 61].map((h, i) => (
                        <i key={i} className={i > 8 ? "" : "on"} style={{ height: `${h}%`, ["--i" as string]: i }} />
                      ))}
                    </div>
                  </div>
                  <div className="card-f">
                    <div className="h">Provenance</div>
                    <Row l="Metric definition" r="margin · v3" pill={{ k: "ok", t: "Certified" }} />
                    <Row l="Owner" r="Group Finance" />
                    <Row l="Dashboards retired by this one" r="3" pill={{ k: "own", t: "Good sign" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- where it lives ---------------- */}
      <section>
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="Adoption" title="A good answer in a tool nobody opens is nothing.">
                The single best predictor of whether this gets used is not answer quality. It is whether the answer
                appears where the person already is. Databricks supports that in several ways, and choosing the right
                one is a change-management decision rather than a technical one.
              </Head>
              <div className="chips">
                <span>Genie One on the web</span>
                <span>Account-level view across workspaces</span>
                <span>Dashboards embedded in your applications</span>
                <span>Genie API into Microsoft Teams</span>
                <span>Genie API into Slack</span>
                <span>Genie API into Glean</span>
                <span className="off">Native iOS and Android, on request</span>
              </div>
              <p className="body-t">
                Identity is handled for you at scale: automated sync through Entra and Okta, domains grouped by
                business concept, custom URLs, and consumer entitlements for people who should see answers and nothing
                else. Which removes the usual reason a rollout stalls at fifty users.
              </p>
              <p className="body-t">
                Pick one channel and do it properly before adding a second. A rollout that lands in Teams for the
                whole finance team beats one that is technically available in four places and habitually used in
                none.
              </p>
            </div>
            <div data-r id="cost">
              <Head eyebrow="What it costs" title="No seat licence. One thing to check.">
                AI/BI dashboards and Genie spaces carry no per-seat or per-licence BI fee — they bill at standard
                warehouse rates for the compute a question actually uses. For an organisation coming off per-user BI
                licensing, that alone can change the economics.
              </Head>
              <div className="callout">
                <span className="m">$</span>
                <div>
                  <h3>The Genie One pricing notices disagree</h3>
                  <p>
                    Databricks has published both a move to usage-based pricing for Genie One products with a free
                    monthly per-user allowance, and a statement that Genie One and Genie Agents usage is free through a
                    stated date. The two notices give different dates, and we have not been able to reconcile them.
                  </p>
                  <p>
                    If you are planning a rollout to hundreds of people, that is a sentence to resolve with Databricks
                    in writing before you plan the budget. We will read the current pricing page with you rather than
                    quote a figure that may already be stale.
                  </p>
                </div>
              </div>
              <p className="note">
                The cost lever that actually matters is what the questions hit. A space pointed at materialized views
                and metric definitions costs a fraction of one pointed at three years of raw events, for identical
                answers. See <Link href={dbPath("pricing-and-cost")}>pricing and cost</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the data team's job ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="The honest trade" title="Your data team does not get smaller. It gets different.">
              The pitch for self-service BI has always implied that the analytics team shrinks. It does not, and
              pretending otherwise is how these programmes lose their sponsors in month four.
            </Head>
          </div>
          <div className="vs" data-r>
            <div>
              <span className="lab">What stops</span>
              <h3>The request queue</h3>
              <ul>
                <li>Building the hundredth variant of a report.</li>
                <li>Answering &ldquo;can you just pull me&hellip;&rdquo; four times a day.</li>
                <li>Reconciling two numbers that were never going to match.</li>
                <li>Maintaining dashboards nobody has opened since 2024.</li>
              </ul>
            </div>
            <div className="good">
              <span className="lab">What starts</span>
              <h3>Curation, as a real job</h3>
              <ul>
                <li>Describing tables in language a business reader understands.</li>
                <li>Defining and owning metrics, and arbitrating when they are challenged.</li>
                <li>Certifying what is trustworthy and demoting what is not.</li>
                <li>Running the regression questions when a space changes.</li>
                <li>Watching which questions get asked, and what that reveals about the business.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r>
            That last one is the underrated prize. The log of what people ask is the clearest statement of what your
            organisation does not currently know — and it is far more useful than any survey about reporting
            requirements.
          </p>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What has to be right underneath.">
              Genie is a window. These are what it looks at.
            </Head>
          </div>
          <RelatedGrid slugs={["unity-catalog", "lakehouse", "apps"]} cols={3} />
        </div>
      </section>

      <Onward slug="genie" />
      <Copyright />
      <FaqSection slug="genie" title="What people ask about asking questions." />

      <CtaBand
        title="Give us twenty questions and the right answers."
        body="Write down twenty questions your people actually ask and what the correct answer is. We will build one curated space that answers them, measure it against your list, and show you the honest hit rate before anyone else sees it. If it is not good enough, you will know in a fortnight rather than a year."
        label="Book a Genie pilot"
        points={[
          "One domain, one named owner",
          "Ten tables described in business language",
          "Metric definitions agreed and certified",
          "A measured hit rate against your own questions",
          "A route for reporting wrong answers",
        ]}
      />
    </>
  );
}
