import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * OpenSharing — sharing and collaboration. The page starts from an uncomfortable question most organisations cannot
 * answer — who has a copy of our data — and treats live sharing as the fix rather than as a feature.
 */
export function SharingBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="OpenSharing" />
          <div className="hero-grid">
            <div>
              <Kicker>Sharing and collaboration</Kicker>
              <h1>
                Who has a copy of your pricing table? <em>Nobody knows.</em>
              </h1>
              <p className="lede">
                Ask that question in any organisation and watch the room. Somewhere there is a monthly extract going
                to a distributor, a spreadsheet a consultant still has, a feed to an auditor set up by someone who has
                left. Every one of those is a copy you cannot revoke, update or audit. OpenSharing is the alternative:
                publish a share, and the other side queries your live table from where they are, on whatever platform
                they use — with nothing copied and the whole arrangement visible in one place.
              </p>
              <div className="ctas">
                <a href="#how" className="btn pri">
                  How a share works <span className="ar">&rarr;</span>
                </a>
                <a href="#cleanroom" className="btn sec">
                  Work neither side may see
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of the shares and recipients view. Sample data.">
              <Screen
                title="Sharing · outbound"
                user="SH"
                label="Illustration of an outbound sharing view: four active shares to a distributor, an auditor, a brand partner and a group subsidiary, each showing what is shared, which platform the recipient reads from, when they last queried it, and tiles above reporting 4 active shares, 0 copies made, 41 queries today and 1 share expiring this month"
              >
                <div className="body-pad">
                  <div className="tiles four">
                    <Tile h="Active shares" s="Outbound" k="4" />
                    <Tile h="Copies made" s="By design" k="0" tone="pos" />
                    <Tile h="Queries today" s="By recipients" k="41" />
                    <Tile h="Expiring" s="This month" k="1" tone="own" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Recipients
                      <span className="m">live tables, not extracts</span>
                    </div>
                    <Row l="Island Distributors · sell-through" r="reads from Snowflake" pill={{ k: "ok", t: "Live" }} />
                    <Row l="External auditor · GL extract view" r="reads from pandas" pill={{ k: "ok", t: "Live" }} />
                    <Row l="Brand partner · clean room only" r="no raw access" pill={{ k: "own", t: "Clean room" }} />
                    <Row l="Subsidiary · group reporting" r="reads from Databricks" pill={{ k: "ok", t: "Live" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">What that replaced</div>
                    <Row l="Monthly CSV to distributor" r="retired" pill={{ k: "er", t: "Gone" }} />
                    <Row l="SFTP drop for the auditor" r="retired" pill={{ k: "er", t: "Gone" }} />
                    <Row l="Spreadsheet to brand partner" r="retired" pill={{ k: "er", t: "Gone" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- how a share works ---------------- */}
      <section className="light" id="how">
        <div className="in">
          <div data-r>
            <Head eyebrow="The mechanism" title="An open protocol, not a Databricks feature.">
              This distinction decides whether it is usable in practice. Delta Sharing was developed by Databricks with
              the Linux Foundation as an open, vendor-neutral protocol, and it has since widened into OpenSharing,
              which Databricks calls the first open, vendor-neutral protocol for securely sharing AI assets.
            </Head>
          </div>
          <ul className="flow" data-r>
            <span className="fline" aria-hidden="true">
              <i />
            </span>
            <li>
              <span className="d">1</span>
              <h3>You publish a share</h3>
              <p>
                A named set of tables, views, volumes, models or notebooks, with a recipient and a grant — all recorded
                in Unity Catalog.
              </p>
            </li>
            <li>
              <span className="d">2</span>
              <h3>They get credentials</h3>
              <p>
                Not a file, not an endpoint to build against. A recipient identity under your control, which you can
                revoke.
              </p>
            </li>
            <li>
              <span className="d">3</span>
              <h3>They query it where they are</h3>
              <p>
                With SQL, Python or a BI tool, from Delta Lake and Parquet data, with no proprietary client in
                between.
              </p>
            </li>
            <li>
              <span className="d">4</span>
              <h3>They always see current data</h3>
              <p>
                Recipients read the latest published version directly from you. There is no refresh schedule to
                argue about.
              </p>
            </li>
            <li>
              <span className="d">5</span>
              <h3>You can see and stop it</h3>
              <p>
                Usage is tracked and audited in one place, and revoking the share ends access — with no stale copy left
                behind.
              </p>
            </li>
          </ul>
          <div className="callout" data-r>
            <span className="m">&ne;</span>
            <div>
              <h3>The recipient does not need to be on Databricks</h3>
              <p>
                That is the whole point of a vendor-neutral protocol, and it is what makes this usable with
                distributors, auditors and partners who have their own stack. Recipients who are not Databricks
                customers can also reach shared data products through the Marketplace without an account at all.
              </p>
              <p>
                Databricks names Atlassian, Shell, Nasdaq, Deutsche Börse, SafeGraph and YipitData among the
                organisations using it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what can be shared ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="What travels" title="Not only tables, and that is the recent change.">
                Sharing started with tables, which was already useful. What has widened is the range of things that can
                move this way — because an AI asset is as much a thing you might hand to a partner as a dataset is.
              </Head>
              <p className="body-t">
                Databricks lists structured datasets, unstructured data through volume sharing, AI models, notebooks
                and code, and under OpenSharing extends the approach to agent skills and unstructured content. Cross-platform
                view sharing, and sharing of materialized views and streaming tables, are offered as early access
                — which is worth noting, because &ldquo;early access&rdquo; is not the same as a feature you can plan a
                contract around.
              </p>
              <p className="body-t">
                A smaller detail with real commercial weight: sharing through <b>Cloudflare R2</b> is offered as a way
                to lower cost, with zero egress fees. If you share large volumes regularly, egress is often the line
                item that kills the business case, so it is worth pricing both ways.
              </p>
            </div>
            <div data-r>
              <div className="defs" style={{ marginTop: 0 }}>
                <div>
                  <div className="t">Tables and datasets</div>
                  <p>Delta Lake and Parquet, read live by the recipient from wherever they work.</p>
                </div>
                <div>
                  <div className="t">Volumes</div>
                  <p>Unstructured content — documents, images, audio — governed the same way as the tables.</p>
                </div>
                <div>
                  <div className="t">Models and agent skills</div>
                  <p>What OpenSharing added: the AI assets, not only the data they were built from.</p>
                </div>
                <div>
                  <div className="t">Notebooks and code</div>
                  <p>Which is how a data product arrives with instructions rather than as a mystery.</p>
                </div>
                <div>
                  <div className="t">
                    Views <span style={{ opacity: 0.75 }}>(early access)</span>
                  </div>
                  <p>Cross-platform view sharing, and materialized views and streaming tables, by sign-up.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- three ways ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Three shapes" title="Direct, marketplace, or neither side sees the other.">
              The same protocol underneath, three quite different commercial arrangements on top. Choosing the wrong
              one is the usual cause of a stalled data-sharing conversation.
            </Head>
          </div>
          <div className="layers" data-r>
            <div className="layer">
              <span className="who">Direct</span>
              <div>
                <h3>A share to a named recipient</h3>
                <p>
                  For a known counterparty: a distributor, an auditor, a subsidiary, a franchise. You know who they
                  are, you have a contract, and you want them reading current data rather than last month&rsquo;s
                  file. This is where almost everyone should start, because it retires existing extracts rather than
                  creating new work.
                </p>
              </div>
            </div>
            <div className="layer">
              <span className="who">Marketplace</span>
              <div>
                <h3>Published once, discovered by many</h3>
                <p>
                  An open marketplace where datasets, AI models, dashboards and notebooks can be discovered and
                  evaluated, including by people not on Databricks. For monetisation, or for making a reference dataset
                  broadly available. The distribution mechanics are the easy half; the licensing and support
                  obligations are the project.
                </p>
              </div>
            </div>
            <div className="layer core">
              <span className="who">Clean room</span>
              <div>
                <h3>Collaboration without disclosure</h3>
                <p>
                  For work where neither side may see the other&rsquo;s rows. Both parties bring data into a hosted
                  environment, agreed computations run there, and only the result leaves — nothing replicated, no raw
                  data exposed, and it works across clouds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- clean rooms ---------------- */}
      <section id="cleanroom">
        <div className="in">
          <div className="two wide-r">
            <div data-r>
              <Head eyebrow="Clean rooms" title="The measurement that could not be done before.">
                Here is the canonical case, and it is worth walking through because it makes the idea concrete. A
                retailer knows who bought what. A brand knows who saw its campaign. Neither can hand its customer list
                to the other — commercially unthinkable, and in most jurisdictions unlawful. So the campaign is
                measured by proxy, badly, for years.
              </Head>
              <p className="body-t">
                In a clean room both lists go into a hosted environment, an agreed computation runs — how many people
                who saw the campaign subsequently bought — and that single number comes out. Neither party sees the
                other&rsquo;s rows, nothing is replicated, and the computation is agreed in advance rather than
                discovered afterwards.
              </p>
              <p className="body-t">
                Computations run in SQL and Python; R and Scala are listed, and Java is marked as coming. Predefined
                templates, notebooks and dashboards are offered for common cases, which matters because the slow part
                of a clean room is usually agreeing what will be computed, not writing it.
              </p>
              <p className="body-t">
                It is not only a marketing tool. We have seen the same shape work for a bank and an insurer measuring
                shared risk, a manufacturer and a logistics provider reconciling damage claims, and two subsidiaries
                whose data-protection regimes prevent a straight merge.
              </p>
            </div>

            <Fig caption="Our illustration of a clean room collaboration. Sample data.">
              <Screen
                title="Clean room · retailer × brand"
                user="CR"
                label="Illustration of a clean room: two collaborators each contributing one dataset that the other cannot see, an agreed computation measuring overlap between campaign exposure and purchase, and an output of three aggregate figures with a note that no row-level data leaves the room"
              >
                <div className="body-pad">
                  <div className="card-f">
                    <div className="h">
                      Contributed
                      <span className="m">neither side can read the other</span>
                    </div>
                    <Row l="Retailer · transactions, 18 months" r="2.4m rows" pill={{ k: "er", t: "Hidden" }} />
                    <Row l="Brand · campaign exposure" r="1.1m rows" pill={{ k: "er", t: "Hidden" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">
                      Agreed computation
                      <span className="m">signed off before it ran</span>
                    </div>
                    <Row l="Overlap, aggregated only" r="SQL + Python" pill={{ k: "in", t: "Approved" }} />
                    <Row l="Minimum group size" r="k ≥ 500" pill={{ k: "ok", t: "Enforced" }} />
                    <Row l="Row-level output" r="not permitted" pill={{ k: "ok", t: "Blocked" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">What came out</div>
                    <Row l="Exposed and purchased" r="312,400" />
                    <Row l="Uplift vs unexposed" r="+11.4%" pill={{ k: "own", t: "Result" }} />
                    <Row l="Rows copied anywhere" r="0" pill={{ k: "ok", t: "By design" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- governance ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="The uncomfortable audit" title="Start by writing down what already left.">
              Before any of this is switched on, we run the same exercise with every client, and it is always
              revealing. List every place company data currently leaves the building. Not the ones in the integration
              catalogue — all of them.
            </Head>
          </div>
          <ol className="steps" data-r>
            <li>
              <div>
                <h3>The scheduled extracts</h3>
                <p>
                  The nightly CSV, the SFTP drop, the API someone built for a partner in 2021. Each one is a standing
                  copy with no expiry and usually no owner.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>The reports people forward</h3>
                <p>
                  A dashboard export emailed weekly to a distributor is a data share with no governance at all. It is
                  also the hardest one to find, because it looks like ordinary work.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>The consultants and former staff</h3>
                <p>
                  Every spreadsheet handed over during a project still exists somewhere. You cannot recall it; you can
                  only stop creating new ones.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>The ones nobody remembers</h3>
                <p>
                  There are always two or three. They surface in this exercise, which is reason enough to run it even
                  if you never publish a single share.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Then replace them, one at a time</h3>
                <p>
                  Each becomes a share with a named recipient, a grant, an expiry and an audit trail — and Unity
                  Catalog becomes the one place that answers &ldquo;who has our pricing table?&rdquo;{" "}
                  <Link href={dbPath("unity-catalog")}>Unity Catalog &rarr;</Link>
                </p>
              </div>
            </li>
          </ol>
          <div className="quote" data-r>
            <p>
              A share you can revoke is a relationship. A file you have sent is a loss of control with a friendly
              covering email.
            </p>
            <span className="by">The sentence we use to explain why this matters to a board</span>
          </div>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="Where sharing comes up most.">
              Two cases dominate: group reporting across entities, and receiving data from your ERP vendor.
            </Head>
          </div>
          <RelatedGrid slugs={["sap-business-data-cloud", "unity-catalog", "security-and-architecture"]} cols={3} />
        </div>
      </section>

      <Onward slug="sharing" />
      <Copyright />
      <FaqSection slug="sharing" title="What people ask about sharing." />

      <CtaBand
        title="Let us list what already leaves your building."
        body="We will go through every scheduled extract, forwarded report and partner feed we can find, say which of them a revocable share replaces, and leave you with one register of who has what — with an owner and an expiry against each. Most clients find at least two they had forgotten."
        label="Book a sharing audit"
        points={[
          "Every outbound copy, written down",
          "Extracts replaced by revocable shares",
          "Recipients on their own platforms, not yours",
          "A clean room where disclosure is not allowed",
          "One register, with owners and expiry dates",
        ]}
      />
    </>
  );
}
