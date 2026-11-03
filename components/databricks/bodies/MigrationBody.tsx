import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Migration. Written to be useful to someone who has just received a frightening estimate. The honest centre of the
 * page is the gap between what the tooling converts and what a migration actually consists of.
 */
export function MigrationBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Migration" />
          <div className="hero-grid">
            <div>
              <Kicker>Getting there</Kicker>
              <h1>
                The tooling converts the SQL. <em>The SQL was never the risk.</em>
              </h1>
              <p className="lede">
                Databricks has good migration tooling, and it is free. It will assess your legacy warehouse, translate
                a great deal of proprietary SQL into something that runs, and reconcile the result. What it will not do
                is tell you which of your four hundred reports still matter, what the undocumented view in the middle
                of your finance model is actually encoding, or who owns the domain nobody has claimed. That is the
                migration. The conversion is a task inside it.
              </p>
              <div className="ctas">
                <a href="#tooling" className="btn pri">
                  What the tooling does <span className="ar">&rarr;</span>
                </a>
                <a href="#wrong" className="btn sec">
                  What usually goes wrong
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of a migration project in progress. Sample data.">
              <Screen
                title="Migration project · legacy_edw"
                run="Convert"
                user="MG"
                label="Illustration of a migration project panel: 1,284 source files of which 71 percent are converted and validated, 94 needing manual work and 11 reusable rules defined, with a list showing stored procedures, views, scheduled jobs and an ETL tool export, the last marked as not convertible by the tool"
              >
                <div className="body-pad">
                  <div className="tiles four">
                    <Tile h="Source files" s="Inventoried" k="1,284" />
                    <Tile h="Converted" s="And validated" k="71" unit="%" tone="pos" />
                    <Tile h="Needs a human" s="Flagged" k="94" tone="neg" />
                    <Tile h="Reusable rules" s="Your SQL quirks" k="11" tone="own" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      By kind
                      <span className="m">sub-agents convert in parallel</span>
                    </div>
                    <Row l="Views · 412" r="398 converted" pill={{ k: "ok", t: "Validated" }} />
                    <Row l="Stored procedures · 316" r="214 converted" pill={{ k: "wr", t: "Review" }} />
                    <Row l="Scheduled jobs · 168" r="mapped to Lakeflow" pill={{ k: "in", t: "Mapped" }} />
                    <Row l="ETL tool export · 388" r="described, not converted" pill={{ k: "er", t: "Manual" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">Not in the tool, yet</div>
                    <Row l="Data movement" r="Databricks says: coming" pill={{ k: "wr", t: "Plan it" }} />
                    <Row l="Reconciliation in-project" r="Databricks says: coming" pill={{ k: "wr", t: "Plan it" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the tooling ---------------- */}
      <section className="light" id="tooling">
        <div className="in">
          <div data-r>
            <Head eyebrow="The tooling" title="Two things, both genuinely useful.">
              Credit where it is due: this is better tooling than the market had two years ago, and it costs nothing.
              Understanding exactly what each piece covers is what lets you plan around the gaps.
            </Head>
          </div>
          <div className="layers" data-r>
            <div className="layer core">
              <span className="who">Since June 2025</span>
              <div>
                <h3>Lakebridge</h3>
                <p>
                  Released by Databricks Labs as free and open source. It does three things: assesses a legacy
                  warehouse and its pipelines, converts their code, and reconciles the output before cutover. The
                  reconciliation step is the one people overlook and the one that earns its keep — it is what lets you
                  switch something off with evidence rather than with hope.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Added 2026</span>
              <div>
                <h3>The agentic code converter in Genie Code</h3>
                <p>
                  Sub-agents analyse the source, convert files in parallel, validate the translated SQL and retry what
                  failed. You can define reusable rules for your own SQL constructs, which matters because every
                  estate has a dozen house patterns the generic translator will get wrong the same way four hundred
                  times. A migration project workspace tracks source files, conversion progress and collaboration.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Dialects</span>
              <div>
                <h3>What it translates from</h3>
                <p>
                  SQL-to-SQL translation is supported for T-SQL, Snowflake, Redshift, Oracle, BigQuery and Teradata.
                  Third-party reviews report wider converter coverage including Synapse, Netezza, DataStage and
                  Informatica, and Databricks&rsquo; own pages reference ten-plus legacy platforms — the lists do not
                  fully agree, so check the current dialect table for your sources rather than any blog, this one
                  included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the gap ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="The gap" title="Where the tooling stops, precisely.">
              This is the section we would want to read if we were on your side of the table, so here it is without
              softening.
            </Head>
          </div>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">01</span>
              <h3>Data movement is not in it yet</h3>
              <p>
                Data migration and reconciliation are not inside the migration project experience. Databricks says
                they are coming, with Lakeflow Connect integration. Until then the tooling compresses the SQL rewrite,
                not the overall timeline — and independent analysis makes exactly that point.
              </p>
              <div className="foot">
                <b>Consequence:</b> plan movement separately.
              </div>
            </div>
            <div className="cap">
              <span className="n">02</span>
              <h3>Hadoop and ETL-tool estates get much less help</h3>
              <p>
                On a Hadoop estate, or one where the logic lives in DataStage or Informatica graphs, the tooling can
                describe the problem but will not convert most of it. Spark jobs often port with modest changes;
                graphical ETL does not port at all.
              </p>
              <div className="foot">
                <b>Consequence:</b> different estimate entirely.
              </div>
            </div>
            <div className="cap">
              <span className="n">03</span>
              <h3>Converted is not the same as understood</h3>
              <p>
                A translator faithfully preserves a business rule nobody can explain. Your old warehouse encodes
                decisions in views and procedures that were never documented, and after conversion they are still
                undocumented — only now in a new dialect, and nobody can tell you why the CASE statement excludes
                those three customers.
              </p>
              <div className="foot">
                <b>Consequence:</b> the real work.
              </div>
            </div>
          </div>
          <div className="quote" data-r>
            <p>
              No single tool covers a full migration, so every real project combines several. Anyone presenting a
              one-tool plan has either not looked at your estate or is not telling you about it.
            </p>
            <span className="by">A thing the independent reviews and we agree on</span>
          </div>
        </div>
      </section>

      {/* ---------------- how we sequence it ---------------- */}
      <section className="light" id="sequence">
        <div className="in">
          <div data-r>
            <Head eyebrow="Sequence" title="Never as a big bang. Six phases, repeated by domain." wide>
              The shape that works is boring and it finishes. The shape that does not work is the one where everything
              moves at once on a date chosen before anyone inventoried the estate.
            </Head>
          </div>
          <div className="phases six" data-r>
            <div className="ph">
              <span className="st">01</span>
              <h3>Inventory</h3>
              <p>
                Every table, report, job and consumer — and, crucially, when each was last actually used. Every estate
                has reports nobody has opened in two years and three the board depends on.
              </p>
              <div className="we">
                <b>Deliverable:</b> a list, with usage
              </div>
            </div>
            <div className="ph">
              <span className="st">02</span>
              <h3>Federate</h3>
              <p>
                Register the old system under Unity Catalog and query it in place. Governance and discovery start
                before migration does, and nothing has moved yet.
              </p>
              <div className="we">
                <b>Deliverable:</b> one catalogue
              </div>
            </div>
            <div className="ph">
              <span className="st">03</span>
              <h3>One domain</h3>
              <p>
                Pick a domain with a willing owner and real pain. Build it properly here — ingestion, model,
                definitions, dashboards — beside the old one.
              </p>
              <div className="we">
                <b>Deliverable:</b> a working example
              </div>
            </div>
            <div className="ph">
              <span className="st">04</span>
              <h3>Reconcile</h3>
              <p>
                An agreed set of figures that must match to the penny. Not &ldquo;looks about right&rdquo;. This phase
                is where unexplained business rules surface.
              </p>
              <div className="we">
                <b>Deliverable:</b> signed numbers
              </div>
            </div>
            <div className="ph">
              <span className="st">05</span>
              <h3>Move consumers</h3>
              <p>
                Repoint the BI tool, the extracts and the people. The old system keeps running throughout, which is
                what makes this reversible.
              </p>
              <div className="we">
                <b>Deliverable:</b> nobody surprised
              </div>
            </div>
            <div className="ph">
              <span className="st">06</span>
              <h3>Decommission</h3>
              <p>
                Only then. And only that domain. Then start again at phase three with the next one.
              </p>
              <div className="we">
                <b>Deliverable:</b> a real saving
              </div>
            </div>
          </div>
          <p className="note" data-r>
            Note what phase two buys you: <Link href={dbPath("lakehouse")}>Lakehouse Federation</Link> lets you query
            Snowflake, Redshift, BigQuery, Synapse, SQL Server, Postgres and MySQL in place under one catalogue. That
            turns a cliff edge into a sequence you control, and it means the governance and definition work — the part
            that cannot be retrofitted — starts in month one rather than month twelve.
          </p>
        </div>
      </section>

      {/* ---------------- reconciliation ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-r">
            <div data-r>
              <Head eyebrow="Reconciliation" title="The unglamorous discipline that decides everything.">
                If we could enforce one rule on every migration we have seen, it would be this: nothing is switched off
                until an agreed set of figures matches, and the set is agreed before the work starts rather than
                negotiated when it does not match.
              </Head>
              <p className="body-t">
                It sounds like process for its own sake. It is the opposite. Reconciliation is the mechanism by which
                undocumented business logic becomes visible — because the only time anyone discovers that the old
                margin view excludes intercompany sales is when the new one does not and the numbers differ by 3.4%.
              </p>
              <p className="body-t">
                That moment is a gift. It is also the moment most projects mishandle, by adjusting the new calculation
                to match the old one without asking whether the old one was right. The correct response is to find out
                why the rule exists, write it down, put it in{" "}
                <Link href={dbPath("unity-catalog")}>the catalogue as a definition</Link>, and then match
                deliberately.
              </p>
              <div className="callout">
                <span className="m">=</span>
                <div>
                  <h3>What goes in the reconciliation pack</h3>
                  <p>
                    Twenty to forty figures, chosen by the business rather than by the data team: the ones that appear
                    in board papers, regulatory returns and commission calculations. Each with a period, a source, an
                    owner and a tolerance — usually zero.
                  </p>
                  <p>
                    If the business cannot name twenty figures that matter, that finding is more important than the
                    migration.
                  </p>
                </div>
              </div>
            </div>

            <Fig caption="Our illustration of a reconciliation pack. Sample data.">
              <Screen
                title="Reconciliation · finance domain"
                user="RC"
                label="Illustration of a reconciliation pack comparing twenty-four agreed figures between the legacy warehouse and the new model: twenty-one match exactly, two differ with an explanation found, and one is unexplained and blocking, with the differences listed and attributed to an undocumented exclusion rule"
              >
                <div className="body-pad">
                  <div className="tiles">
                    <Tile h="Agreed figures" s="Chosen by Finance" k="24" />
                    <Tile h="Match exactly" s="Tolerance zero" k="21" tone="pos" />
                    <Tile h="Blocking" s="Unexplained" k="1" tone="neg" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Differences
                      <span className="m">FY to date</span>
                    </div>
                    <Row l="Gross margin" r="−3.4% · intercompany rule" pill={{ k: "wr", t: "Explained" }} />
                    <Row l="Revenue, Northern" r="−0.2% · credit note timing" pill={{ k: "wr", t: "Explained" }} />
                    <Row l="Commission base" r="+1.1% · cause unknown" pill={{ k: "er", t: "Blocking" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">What the exercise found</div>
                    <Row l="Undocumented rules surfaced" r="4" pill={{ k: "own", t: "Now defined" }} />
                    <Row l="Reports with no users" r="118" pill={{ k: "own", t: "Not migrating" }} />
                    <Row l="Decommission approved" r="after 24/24" pill={{ k: "ok", t: "Gate" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- what goes wrong ---------------- */}
      <section className="light" id="wrong">
        <div className="in">
          <div data-r>
            <Head eyebrow="Failure modes" title="Three causes, in order of how often we see them.">
              None of these is a tooling problem, which is why a migration planned entirely around tooling tends to
              stall at seventy per cent and stay there.
            </Head>
          </div>
          <ol className="steps" data-r>
            <li>
              <div>
                <h3>Semantics: the rule nobody can explain</h3>
                <p>
                  The old warehouse encodes business decisions in views and procedures written by people who have left.
                  Converting the SQL preserves the rule perfectly while preserving nobody&rsquo;s understanding of it.
                  The fix is to treat every reconciliation difference as an investigation rather than an adjustment, and
                  to write what you learn into the catalogue as a definition with an owner.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Cost: an inefficient model on consumption pricing</h3>
                <p>
                  Lift-and-shift a model designed for a fixed-capacity warehouse onto per-second consumption billing
                  and the first invoice will end the project&rsquo;s political support regardless of how well the
                  migration went. The fix is to design the cost controls as part of the move — compute types, materialized
                  views, table layout, tagging — and to show a team its own number monthly from the first month.{" "}
                  <Link href={dbPath("pricing-and-cost")}>Pricing and cost &rarr;</Link>
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Ownership: a migration with no owner per domain</h3>
                <p>
                  The domains with a willing business owner finish. The ones without stall, and then the whole
                  programme is reported as stalled. The fix is to sequence by willingness rather than by size: start
                  where someone wants it, build the example, and let the rest of the organisation ask for it.
                </p>
              </div>
            </li>
          </ol>
          <p className="note" data-r>
            There is a fourth, rarer and more painful: migrating everything because the inventory was never done. Four
            hundred reports become four hundred reports, of which a hundred and eighteen had no users. Migration is the
            best opportunity your organisation will ever get to delete things, and it is almost always wasted.
          </p>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What a migration lands on.">
              The destination matters more than the route.
            </Head>
          </div>
          <RelatedGrid slugs={["lakehouse", "unity-catalog", "pricing-and-cost"]} cols={3} />
        </div>
      </section>

      <Onward slug="migration" />
      <Copyright />
      <FaqSection slug="migration" title="What people ask about moving." />

      <CtaBand
        title="Bring us the estimate that frightened you."
        body="Send us the scope someone has quoted and your warehouse's object inventory. We will tell you which parts the tooling genuinely converts, which parts it only describes, what the reconciliation pack should contain, and what a first domain would cost — usually a much smaller number than the one you are holding."
        label="Book a migration assessment"
        points={[
          "An inventory with actual usage, not a catalogue",
          "Tooling coverage checked against your dialects",
          "Federation first, so nothing moves on faith",
          "A reconciliation pack agreed by the business",
          "Domain by domain, each one reversible",
        ]}
      />
    </>
  );
}
