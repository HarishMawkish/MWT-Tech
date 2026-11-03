import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

const SAP_BDC = "/services/sap-solutions/sap-business-data-cloud";

/**
 * SAP Business Data Cloud and Databricks. For most of our clients this is the single most consequential page in the
 * section, because their most valuable data is in SAP and getting it out has historically cost them its meaning.
 */
export function SapBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="SAP Business Data Cloud" />
          <div className="hero-grid">
            <div>
              <Kicker>Alongside your ERP</Kicker>
              <h1>
                Your SAP data, without losing <em>what it means.</em>
              </h1>
              <p className="lede">
                Anyone who has built a warehouse on SAP data knows the real cost. It is not the extraction. It is that
                a table arrives called <b>KNA1</b> with eighty columns of three-letter names, and somebody spends six
                months rebuilding, by hand and from memory, the business meaning SAP already knew. SAP and Databricks
                have built a connector that does not do that: data products are shared into Unity Catalog with no copy
                made, and the comments, the keys and the governance tags come with them.
              </p>
              <div className="ctas">
                <a href="#semantics" className="btn pri">
                  What actually crosses <span className="ar">&rarr;</span>
                </a>
                <a href="#disclosure" className="btn sec">
                  The clause to read first
                </a>
              </div>
              <p className="name-note">
                We build and support SAP as well. Our page on{" "}
                <Link href={SAP_BDC}>
                  <b>SAP Business Data Cloud</b>
                </Link>{" "}
                explains that side of the arrangement — this page is about the Databricks side of the same connection.
              </p>
            </div>

            <Fig caption="Our illustration of a mounted SAP share. Sample data.">
              <Screen
                title="Catalog Explorer · sap_bdc share"
                search="Search shared catalogues"
                user="SP"
                label="Illustration of an SAP Business Data Cloud share mounted as a catalogue in Unity Catalog: four data products for customers, sales orders, the general ledger and materials, each showing that comments, primary and foreign keys and governance tags were synced, with tiles above reporting zero copies made, 4 data products, 61 described tables and metadata synced automatically"
              >
                <div className="body-pad">
                  <div className="tiles four">
                    <Tile h="Copies made" s="Zero-copy access" k="0" tone="pos" />
                    <Tile h="Data products" s="Mounted as catalogues" k="4" tone="own" />
                    <Tile h="Tables, described" s="Comments came across" k="61" />
                    <Tile h="Keys preserved" s="Primary and foreign" k="38" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      sap_bdc
                      <span className="m">mounted catalogue · read live</span>
                    </div>
                    <ul className="tree">
                      <li>
                        <i className="cat" aria-hidden="true" />
                        sap_bdc
                        <span className="m">via OpenSharing</span>
                      </li>
                      <li className="ind-1">
                        <i className="sch" aria-hidden="true" />
                        customer
                        <span className="m">described</span>
                      </li>
                      <li className="ind-1">
                        <i className="sch" aria-hidden="true" />
                        sales_order
                        <span className="m">keys intact</span>
                      </li>
                      <li className="ind-1">
                        <i className="sch" aria-hidden="true" />
                        general_ledger
                        <span className="m">tagged: restricted</span>
                      </li>
                      <li className="ind-1">
                        <i className="sch" aria-hidden="true" />
                        material
                        <span className="m">described</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-f">
                    <div className="h">What the metadata sync brought</div>
                    <Row l="Table and column comments" r="synced" pill={{ k: "ok", t: "Usable" }} />
                    <Row l="Primary and foreign keys" r="synced" pill={{ k: "ok", t: "Usable" }} />
                    <Row l="Governance tags" r="synced" pill={{ k: "own", t: "In policies" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- two things, similar names ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="First, the names" title="Two arrangements that are easy to confuse.">
              This confusion costs people real money in procurement conversations, so it is worth being precise before
              anything else. There are two distinct things, and which one you want changes the commercial discussion
              entirely.
            </Head>
          </div>
          <div className="vs" data-r>
            <div>
              <span className="lab">Arrangement one</span>
              <h3>SAP Databricks</h3>
              <ul>
                <li>An SAP-managed version of the Databricks platform.</li>
                <li>Reached from inside SAP Business Data Cloud, as part of it.</li>
                <li>Bought from SAP, governed by SAP&rsquo;s commercial terms.</li>
                <li>Suits an organisation whose centre of gravity is SAP and who wants one vendor relationship.</li>
              </ul>
            </div>
            <div className="good">
              <span className="lab">Arrangement two</span>
              <h3>Your own Databricks, connected</h3>
              <ul>
                <li>Your existing Databricks workspace, with your existing catalogue and commercial terms.</li>
                <li>Connected to SAP Business Data Cloud through the SAP BDC connector over OpenSharing.</li>
                <li>Sharing runs in both directions, with no copy of the data.</li>
                <li>Suits an organisation whose data is not only SAP — which is most of them.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r>
            The rest of this page is about <b>arrangement two</b>, because that is the one most of our clients need:
            SAP is the biggest and most important source, and it is not the only one. If arrangement one is the better
            fit for you, we will say so — and our{" "}
            <Link href={SAP_BDC}>SAP Business Data Cloud page</Link> covers it from the SAP side.
          </p>
        </div>
      </section>

      {/* ---------------- what crosses ---------------- */}
      <section id="semantics">
        <div className="in">
          <div data-r>
            <Head eyebrow="What crosses" title="In both directions, and nothing is copied." wide>
              The connector is bidirectional. Which half you use first depends on where your reporting lives today,
              and most organisations end up using both.
            </Head>
          </div>
          <div className="dia" data-r>
            <div className="dh">SAP Business Data Cloud and your Databricks workspace</div>
            <div className="scroll">
              <svg viewBox="0 0 980 252" role="img" aria-labelledby="db-sap-t">
              <title id="db-sap-t">
                A two-way diagram. On the left, SAP Business Data Cloud holding data products. On the right, a
                Databricks workspace with Unity Catalog. The upper arrow runs left to right, labelled SAP data
                products mounted as catalogues in Unity Catalog, carrying comments, keys and governance tags. The lower
                arrow runs right to left, labelled Databricks shares granted to SAP BDC recipients and exposed back as
                virtual models. A band underneath both arrows reads mutual TLS and OpenID Connect, audited in Unity
                Catalog, with no copy of the data.
              </title>
              <g fontFamily="var(--display)" fontWeight="700" fontSize="12.5">
                <rect x="0" y="52" width="216" height="116" rx="13" fill="#0a6ed1" fillOpacity="0.14" stroke="#0a6ed1" strokeOpacity="0.55" />
                <text x="22" y="82" fill="#7cb8ee" fontSize="14">SAP Business</text>
                <text x="22" y="102" fill="#7cb8ee" fontSize="14">Data Cloud</text>
                <text x="22" y="126" fill="var(--muted)" fontSize="11" fontWeight="500">Data products, with</text>
                <text x="22" y="141" fill="var(--muted)" fontSize="11" fontWeight="500">SAP&rsquo;s own business</text>
                <text x="22" y="156" fill="var(--muted)" fontSize="11" fontWeight="500">semantics attached</text>

                <rect x="764" y="52" width="216" height="116" rx="13" fill="var(--a)" fillOpacity="0.14" stroke="var(--a)" strokeOpacity="0.55" />
                <text x="786" y="82" fill="var(--fg)" fontSize="14">Your Databricks</text>
                <text x="786" y="102" fill="var(--fg)" fontSize="14">workspace</text>
                <text x="786" y="126" fill="var(--muted)" fontSize="11" fontWeight="500">Unity Catalog, your</text>
                <text x="786" y="141" fill="var(--muted)" fontSize="11" fontWeight="500">other sources, your</text>
                <text x="786" y="156" fill="var(--muted)" fontSize="11" fontWeight="500">commercial terms</text>

                {/* top arrow */}
                <path d="M216 86 H752" stroke="#0a6ed1" strokeWidth="2.4" />
                <path d="M746 80 l8 6 -8 6 z" fill="#0a6ed1" />
                <text x="300" y="58" fill="#7cb8ee" fontSize="11.5">Mounted as catalogues in Unity Catalog</text>
                <text x="300" y="76" fill="var(--muted)" fontSize="10.5" fontWeight="500">
                  comments · primary and foreign keys · governance tags
                </text>

                {/* bottom arrow */}
                <path d="M764 136 H228" stroke="var(--a)" strokeWidth="2.4" />
                <path d="M234 130 l-8 6 8 6 z" fill="var(--a)" />
                <text x="300" y="160" fill="var(--a)" fontSize="11.5">Shares granted to SAP BDC recipients</text>
                <text x="300" y="178" fill="var(--muted)" fontSize="10.5" fontWeight="500">
                  Databricks tables and models, back into the SAP side
                </text>

                <rect x="0" y="202" width="980" height="50" rx="12" fill="var(--dia-n)" stroke="var(--line)" strokeDasharray="5 4" />
                <text x="22" y="224" fill="var(--fg)" fontSize="12">OpenSharing · mutual TLS and OpenID Connect</text>
                <text x="22" y="242" fill="var(--muted)" fontSize="11" fontWeight="500">
                  Governed and audited in Unity Catalog. Live, zero-copy access — the data is read where it lives.
                </text>
              </g>
            </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "#0a6ed1" }} /> SAP side
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> Databricks side
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--dia-n-mark)" }} /> Transport and governance
              </span>
            </div>
          </div>

          <div className="callout" data-r>
            <span className="m">&#10003;</span>
            <div>
              <h3>The metadata sync is the part worth getting excited about</h3>
              <p>
                When SAP BDC shares are mounted as Unity Catalog catalogues, metadata syncs automatically: table and
                column comments, primary and foreign keys, and governance tags. That metadata is then usable in Catalog
                Explorer, in SQL queries, in <Link href={dbPath("genie")}>Genie agents</Link> and in governance
                policies.
              </p>
              <p>
                Read that list again if you have ever built an SAP warehouse. Keys intact means joins that are correct
                rather than guessed. Comments mean a Genie space has something to ground an answer in. Governance tags
                mean a policy like &ldquo;columns tagged restricted are masked outside Finance&rdquo; applies to SAP
                data on arrival, rather than being reconstructed by hand after someone notices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the handshake ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="Setting it up" title="A four-step handshake between two administrators.">
                The mechanics are genuinely short. What takes the time is the agreement about what gets shared, which
                is a governance conversation rather than a technical one — and should be, because a share has no
                natural end date unless you give it one.
              </Head>
              <ol className="steps">
                <li>
                  <div>
                    <h3>The Databricks administrator generates a connection identifier</h3>
                    <p>
                      and sends it to the SAP BDC administrator. They need a Unity Catalog-enabled workspace with
                      OpenSharing configured, and <code>CREATE PROVIDER</code> and <code>CREATE RECIPIENT</code>{" "}
                      privileges.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>The SAP BDC administrator sets up a third-party connection</h3>
                    <p>using that identifier, and returns an invitation link.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>The Databricks administrator creates the connection</h3>
                    <p>from the invitation link. The two sides are now joined.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Both sides share and receive</h3>
                    <p>
                      through OpenSharing — SAP shares mounted as catalogues here, Databricks shares granted to SAP BDC
                      recipients there.
                    </p>
                  </div>
                </li>
              </ol>
              <p className="note">
                Note the shape of that: it needs an administrator on each side, with privileges, at the same time. In
                practice the scheduling of those two people is the critical path, and it is worth booking before the
                design work finishes rather than after.
              </p>
            </div>
            <div data-r>
              <div className="includes" style={{ marginTop: 0 }}>
                <div>
                  <span className="t">Prerequisite</span>
                  <h3>Unity Catalog, enabled</h3>
                  <p>New workspaces have it on by default. Older ones may not, and that is a project of its own.</p>
                </div>
                <div>
                  <span className="t">Prerequisite</span>
                  <h3>OpenSharing, configured</h3>
                  <p>Set up in the workspace before the connection can be made.</p>
                </div>
                <div>
                  <span className="t">Prerequisite</span>
                  <h3>Two administrators, available</h3>
                  <p>One on each side, with the right privileges, in the same week.</p>
                </div>
                <div>
                  <span className="t">Decision</span>
                  <h3>Which data products</h3>
                  <p>Agreed deliberately, not by sharing everything because it is easier.</p>
                </div>
                <div>
                  <span className="t">Decision</span>
                  <h3>Who the recipients are</h3>
                  <p>Named, with an owner, and reviewed on a schedule.</p>
                </div>
                <div>
                  <span className="t">Decision</span>
                  <h3>What expires, and when</h3>
                  <p>A share without an expiry is a permanent arrangement made by accident.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the disclosure ---------------- */}
      <section id="disclosure">
        <div className="in">
          <div data-r>
            <Head eyebrow="Read this before you sign" title="There is a disclosure clause, and it is specific.">
              We would be doing you a disservice to leave this out, because it is the kind of sentence that is easy to
              miss in documentation and expensive to discover later.
            </Head>
          </div>
          <div className="callout" data-r>
            <span className="m">!</span>
            <div>
              <h3>What Databricks states</h3>
              <p>
                If you use the connector to share SAP BDC data into Databricks, Databricks may disclose usage and
                operations information to SAP for billing and administrative purposes. That can include{" "}
                <b>data volumes, timing, and your effective Databricks price</b>, identified{" "}
                <b>per workload, not aggregated and not anonymised</b>. Your organisation may be identified.
              </p>
              <p>
                If your Databricks commercial terms are confidential — and for most organisations that negotiated them
                properly, they are — then that sentence belongs in your commercial review, not in a footnote. It does
                not make the connector a bad idea. It makes it a decision that someone in procurement should take
                knowingly rather than one an engineer takes on a Tuesday.
              </p>
            </div>
          </div>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">Security</span>
              <h3>How the exchange is protected</h3>
              <p>
                Data exchanges use mutual TLS and OpenID Connect, with governance and auditing through Unity Catalog.
              </p>
            </div>
            <div className="cap">
              <span className="n">Control</span>
              <h3>What stays yours</h3>
              <p>
                The grants, the recipients, the retention and the review schedule. The controls that matter most in any
                cross-company share are the ones you set and then actually revisit.
              </p>
            </div>
            <div className="cap">
              <span className="n">Scope</span>
              <h3>What the documentation does not cover</h3>
              <p>
                The overview page does not list product limitations, pointing instead to separate pages per task. We
                read those for the specific data products you intend to share rather than assuming parity across all of
                them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- existing extraction ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="What about what we built" title="Nobody has to throw away their extraction pipelines.">
              Organisations already pulling SAP data out successfully are not disrupted by this, and the connector is
              an addition rather than an ultimatum. Which raises the better question: is the pipeline you maintain
              giving you anything the connector does not?
            </Head>
          </div>
          <ul className="flow" data-r>
            <span className="fline" aria-hidden="true">
              <i />
            </span>
            <li>
              <span className="d">1</span>
              <h3>Map what you extract today</h3>
              <p>Every job, every table, every consumer. Including the ones nobody has looked at in two years.</p>
            </li>
            <li>
              <span className="d">2</span>
              <h3>Match it to data products</h3>
              <p>
                Which of what you pull is covered by an SAP data product, and which genuinely is not. Be honest about
                the gaps.
              </p>
            </li>
            <li>
              <span className="d">3</span>
              <h3>Run both in parallel</h3>
              <p>
                The new path beside the old one, with the numbers reconciled to the penny before anyone switches
                anything off.
              </p>
            </li>
            <li>
              <span className="d">4</span>
              <h3>Retire, one at a time</h3>
              <p>
                Consumers moved first, then the job decommissioned. Nothing about this needs to be a big-bang cutover,
                and it should not be.
              </p>
            </li>
          </ul>
          <p className="note" data-r>
            For most teams the honest answer at step two is that their pipelines cost a lot of upkeep and lose the
            semantics on the way through — which is exactly what the connector addresses. But that answer should come
            from the mapping, not from us.
          </p>
          <div className="chips" data-r>
            <Link href={SAP_BDC}>Our SAP Business Data Cloud page &rarr;</Link>
            <Link href="/services/sap-solutions">All our SAP work &rarr;</Link>
            <Link href={dbPath("sharing")}>How OpenSharing works &rarr;</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What you would build on it.">
              Once SAP data is here with its meaning intact, the rest of the platform becomes considerably more useful.
            </Head>
          </div>
          <RelatedGrid slugs={["genie", "unity-catalog", "lakehouse"]} cols={3} />
        </div>
      </section>

      <Onward slug="sap-business-data-cloud" />
      <Copyright />
      <FaqSection slug="sap-business-data-cloud" title="What SAP customers ask us." />

      <CtaBand
        title="We know both sides of this connection."
        body="We build and support SAP, and we build on Databricks. Bring us your SAP landscape and the reporting you cannot get out of it, and we will map which data products cover it, what the connector would carry across, which of your pipelines it retires — and we will flag the disclosure clause before procurement does."
        label="Book an SAP data session"
        points={[
          "Your SAP landscape, mapped to data products",
          "Semantics preserved rather than rebuilt",
          "Existing extracts retired in sequence",
          "The disclosure clause raised early",
          "One team for both sides of the connection",
        ]}
      />
    </>
  );
}
