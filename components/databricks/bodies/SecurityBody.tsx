import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Security and architecture. The page every procurement and risk review asks for, written so that a reader who is not
 * an architect can still answer the question their auditor will put to them: where is the data, and who can reach it.
 */
export function SecurityBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Security and architecture" />
          <div className="hero-grid">
            <div>
              <Kicker>Foundations</Kicker>
              <h1>
                Where your data sits, <em>and who can reach it.</em>
              </h1>
              <p className="lede">
                Every procurement review arrives at the same two questions, and most vendor pages answer neither
                clearly. Your tables and files stay in cloud storage you own, in the region you choose. Databricks runs
                a control plane — the interface, the scheduling, the metadata — and the work itself runs in a compute
                plane that sits either inside your own cloud account or in a Databricks-managed account in the same
                region, depending on a choice you make. That choice decides which controls are yours to configure and
                which are Databricks&rsquo; to attest, which is why it deserves more than a default.
              </p>
              <div className="ctas">
                <a href="#planes" className="btn pri">
                  The two planes <span className="ar">&rarr;</span>
                </a>
                <a href="#regions" className="btn sec">
                  Regions near Sri Lanka
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of a workspace security posture. Sample data.">
              <Screen
                title="Workspace · security posture"
                user="SE"
                label="Illustration of a security posture panel: customer-managed keys enabled, Private Link enabled for both front end and back end, serverless egress controls restricting destinations to three approved hosts, Databricks employee access disabled, and tiles showing the region, the compute plane in use and the number of external destinations permitted"
              >
                <div className="body-pad">
                  <div className="tiles">
                    <Tile h="Region" s="Data at rest" k="ap-south-1" tone="own" />
                    <Tile h="Compute plane" s="For this workload" k="Serverless" />
                    <Tile h="Egress hosts" s="Approved list" k="3" tone="pos" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Controls in force
                      <span className="m">configured, not assumed</span>
                    </div>
                    <Row l="Customer-managed keys" r="your KMS key" pill={{ k: "ok", t: "On" }} />
                    <Row l="Multi-key encryption" r="per workspace" pill={{ k: "ok", t: "On" }} />
                    <Row l="Private Link · front end" r="no public ingress" pill={{ k: "ok", t: "On" }} />
                    <Row l="Private Link · back end" r="no public egress" pill={{ k: "ok", t: "On" }} />
                    <Row l="Serverless egress controls" r="3 destinations" pill={{ k: "own", t: "Restricted" }} />
                    <Row l="Databricks employee access" r="denied by customer" pill={{ k: "ok", t: "Off" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">Attestations held</div>
                    <div className="chips-s">
                      <span>ISO 27001</span>
                      <span>ISO 27017</span>
                      <span>ISO 27018</span>
                      <span>SOC 2 Type II</span>
                      <span className="own">PCI-DSS</span>
                      <span className="own">HIPAA</span>
                      <span className="own">FedRAMP</span>
                    </div>
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- the planes ---------------- */}
      <section className="light" id="planes">
        <div className="in">
          <div data-r>
            <Head eyebrow="Architecture" title="Two planes, and one decision that follows from them." wide>
              If you take one diagram from this section, take this one. Almost every security question about Databricks
              resolves into &ldquo;which plane is that in?&rdquo;
            </Head>
          </div>
          <div className="dia" data-r>
            <div className="dh">What Databricks runs, what you run, and where your data stays</div>
            <div className="scroll">
              <svg viewBox="0 0 980 300" role="img" aria-labelledby="db-plane-t">
              <title id="db-plane-t">
                A diagram in three bands. The top band is the Databricks control plane, a multi-tenant service holding
                the web interface, job orchestration, metadata and the Unity Catalog metastore. The middle band is the
                compute plane, shown as two alternatives side by side: classic compute running inside your own cloud
                account, and serverless compute running in a Databricks-managed account in the same region. The bottom
                band is your own cloud object storage, holding your tables and files in your account and region, and is
                labelled as never moving.
              </title>
              <g fontFamily="var(--display)" fontWeight="700" fontSize="12.5">
                <rect x="0" y="0" width="980" height="78" rx="13" fill="#3d7df6" fillOpacity="0.12" stroke="#3d7df6" strokeOpacity="0.5" />
                <text x="24" y="28" fill="#9bc0fb" fontSize="14">Control plane — operated by Databricks, multi-tenant</text>
                <text x="24" y="50" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  The web interface · job scheduling and orchestration · workspace metadata · the Unity Catalog metastore
                </text>
                <text x="24" y="68" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  Immutable infrastructure: systems are replaced rather than patched
                </text>

                <rect x="0" y="100" width="478" height="104" rx="13" fill="var(--dia-n)" stroke="var(--line)" />
                <text x="24" y="128" fill="var(--fg)" fontSize="14">Classic compute</text>
                <text x="24" y="150" fill="var(--muted)" fontSize="11.5" fontWeight="500">Runs inside your own cloud account</text>
                <text x="24" y="170" fill="var(--muted)" fontSize="11.5" fontWeight="500">Your VPC, your network rules, your instances</text>
                <text x="24" y="190" fill="var(--a)" fontSize="11.5">More of the controls are yours to configure</text>

                <rect x="502" y="100" width="478" height="104" rx="13" fill="var(--a)" fillOpacity="0.1" stroke="var(--a)" strokeOpacity="0.45" />
                <text x="526" y="128" fill="var(--fg)" fontSize="14">Serverless compute</text>
                <text x="526" y="150" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  Runs in a Databricks-managed account, same region
                </text>
                <text x="526" y="170" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  Starts in seconds, idles to nothing, nothing to patch
                </text>
                <text x="526" y="190" fill="var(--a)" fontSize="11.5">Egress controls and keys still configurable</text>

                <rect x="0" y="226" width="980" height="74" rx="13" fill="#2ba86f" fillOpacity="0.1" stroke="#2ba86f" strokeOpacity="0.45" />
                <text x="24" y="254" fill="#73cfa0" fontSize="14">Your cloud object storage — your account, your region</text>
                <text x="24" y="276" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  Open Delta Lake and Apache Iceberg files. This is where your data lives, and it does not move to run a query.
                </text>
                <text x="24" y="294" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                  Encrypted with keys you can own · readable by other engines
                </text>
              </g>
            </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "#3d7df6" }} /> Databricks operates
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--dia-n-mark)" }} /> Your account
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> Databricks-managed, your region
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "#2ba86f" }} /> Always yours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the trade ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="The decision" title="Serverless or classic: an honest trade.">
              Databricks recommends serverless wherever it is available, and for most workloads that is right. But the
              recommendation is not universal, and a risk review that has not had this conversation has not been done.
            </Head>
          </div>
          <div className="vs" data-r>
            <div className="good">
              <span className="lab">Choose serverless when</span>
              <h3>You want the platform to carry the operational burden</h3>
              <ul>
                <li>Load is bursty and idle time is where your money currently goes.</li>
                <li>You do not want to patch, size or capacity-plan compute.</li>
                <li>Egress controls and customer-managed keys satisfy your requirements.</li>
                <li>You want features — AI functions among them — that need it.</li>
              </ul>
            </div>
            <div>
              <span className="lab">Choose classic when</span>
              <h3>A requirement names the account the compute runs in</h3>
              <ul>
                <li>A regulator, a contract or an internal policy requires compute inside your own account.</li>
                <li>You need network controls that only exist in your own VPC.</li>
                <li>You have instance-level requirements — specific hardware, specific images.</li>
                <li>An existing approved pattern already covers it and re-approval is costly.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r>
            The mistake we see is choosing classic out of caution, inheriting all of its operational work, and then not
            configuring the controls that were the reason for choosing it. If you take classic, take it deliberately
            and configure it. If the requirement cannot be stated in a sentence, it is probably not a requirement.
          </p>
        </div>
      </section>

      {/* ---------------- controls ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="What you can switch on" title="Named features, and what each is for.">
              These are the controls Databricks names. Each has prerequisites and a tier, and we size them against
              your actual obligations rather than switching on everything that sounds reassuring — because every
              control you enable is also a thing that can break a deployment at an awkward moment.
            </Head>
          </div>
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Control</th>
                  <th>What it addresses</th>
                  <th>The question it answers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer-Managed Keys</td>
                  <td data-label="What it addresses">
                    Encryption using keys held in your own key management service rather than the platform&rsquo;s.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Can we revoke access to our own data unilaterally?&rdquo;
                  </td>
                </tr>
                <tr>
                  <td>Multi-Key Encryption</td>
                  <td data-label="What it addresses">
                    More than one key in play, so different data can be encrypted under different keys.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Can one tenant&rsquo;s or one entity&rsquo;s data be cryptographically separated?&rdquo;
                  </td>
                </tr>
                <tr>
                  <td>Private Link</td>
                  <td data-label="What it addresses">
                    Private network connectivity, so traffic does not traverse the public internet.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Is any of this reachable from, or reaching out to, the open internet?&rdquo;
                  </td>
                </tr>
                <tr>
                  <td>Serverless Egress Controls</td>
                  <td data-label="What it addresses">
                    Constraining where serverless workloads are permitted to send traffic.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Could a notebook post our data to an arbitrary external host?&rdquo;
                  </td>
                </tr>
                <tr>
                  <td>Enhanced Security and Compliance</td>
                  <td data-label="What it addresses">
                    The hardened configuration profile used for regulated workloads.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Is this workspace configured for the standard we are bound by?&rdquo;
                  </td>
                </tr>
                <tr>
                  <td>Unified Security for Data and AI</td>
                  <td data-label="What it addresses">
                    One control point over both data and AI assets, through Unity Catalog and the gateway.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Who decides what an agent is allowed to read?&rdquo;
                  </td>
                </tr>
                <tr>
                  <td>Employee access control</td>
                  <td data-label="What it addresses">
                    Whether Databricks staff can access your workspace at all — a setting you control.
                  </td>
                  <td data-label="The question it answers">
                    &ldquo;Can the vendor see our data?&rdquo; This is the one auditors ask most sharply.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r>
            On compliance, be precise about wording. Databricks is <b>attested</b> to ISO 27001, ISO 27017, ISO 27018
            and SOC 2 Type II, and <b>offers</b> PCI-DSS, HIPAA and FedRAMP compliance. An offering is a configuration
            and a tier, not a default — a regulated workload is a procurement item. The plain-language security
            commitment sits in the Security Addendum of the customer agreement, and that is the document to read rather
            than the marketing page.
          </p>
        </div>
      </section>

      {/* ---------------- how they look after themselves ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="The vendor's own practice" title="Unusually specific, which is itself a signal.">
                Most platform vendors answer &ldquo;how do you secure yourselves?&rdquo; with a page of adjectives.
                Databricks publishes numbers, and the specificity is worth noting in a vendor assessment — not because
                the numbers are impressive in themselves, but because an organisation willing to publish a count is
                usually one that keeps the count.
              </Head>
              <div className="facts">
                <div className="fact">
                  <b>8—10</b>
                  <span>External penetration tests a year</span>
                </div>
                <div className="fact">
                  <b>15—20</b>
                  <span>Internal penetration tests a year</span>
                </div>
                <div className="fact">
                  <b>Daily</b>
                  <span>Authenticated vulnerability scans</span>
                </div>
                <div className="fact">
                  <b>9TB+</b>
                  <span>Processed daily in its own security monitoring, on its own platform</span>
                </div>
              </div>
              <p className="note">
                Alongside those: static and dynamic analysis before code reaches production, severity-zero issues
                prioritised above everything else, a public bug bounty through HackerOne, an immutable infrastructure
                model in both planes, multi-factor authentication and single sign-on for production access,
                least-privilege controls with separation of duties, security design reviews for high-impact features,
                peer code review, and multi-person approval for deployments.
              </p>
            </div>
            <div data-r>
              <div className="callout" style={{ marginTop: 0 }}>
                <span className="m">&loz;</span>
                <div>
                  <h3>Lakewatch, and what it tells you</h3>
                  <p>
                    In March 2026 Databricks launched its own security monitoring product: Lakewatch, an open, agentic
                    SIEM built as a security lakehouse rather than a tool you pay to copy your logs into. Triage uses
                    agents built on Agent Bricks, Genie handles multi-step investigation, and an assistant writes,
                    tests and deploys detections. Databricks claims petabyte-scale detection at up to 80% lower total
                    cost of ownership, names Adobe and Dropbox among early customers, and uses Anthropic&rsquo;s Claude
                    models inside it.
                  </p>
                  <p>
                    It is in <b>private preview</b>, so treat it as a direction rather than a plan. What it does tell
                    you is that Databricks runs its own security operations on this architecture — which is a more
                    meaningful endorsement than a certificate.
                  </p>
                  <p>
                    <Link href="/services/anthropic">Our pages on Claude &rarr;</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- regions ---------------- */}
      <section className="light" id="regions">
        <div className="in">
          <div data-r>
            <Head eyebrow="Regions" title="What is available near Sri Lanka, and the caveat that matters.">
              We work from Colombo, so this question comes up on every engagement, and the answer has two parts: which
              regions exist, and which features have reached them. The second part is the one that changes
              architectures.
            </Head>
          </div>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">AWS</span>
              <h3>Mumbai and Singapore</h3>
              <p>
                Asia Pacific (Mumbai) and Asia Pacific (Singapore) both appear with serverless support on
                Databricks&rsquo; regional availability tables, alongside Tokyo and Seoul. The AI and machine learning
                table shows both as supported, with a note that Asia-region traffic may be processed within regions in
                Japan, South Korea or Singapore.
              </p>
            </div>
            <div className="cap">
              <span className="n">Google Cloud</span>
              <h3>asia-south1 and asia-southeast1</h3>
              <p>
                Mumbai maps to asia-south1 and Singapore to asia-southeast1 on the Google Cloud region list, with
                support for the core feature columns. Some features — certain Lakeflow connectors among them — have
                narrower availability.
              </p>
            </div>
            <div className="cap">
              <span className="n">Azure</span>
              <h3>Maintained separately</h3>
              <p>
                Azure Databricks keeps its own region list, and we have not been able to confirm its Asia-region
                feature coverage from the pages we checked. For an Azure-first organisation this is a question to
                resolve against the current Azure Databricks documentation before design, not after.
              </p>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">&#9888;</span>
            <div>
              <h3>Region support and feature support are different questions</h3>
              <p>
                A region appearing on the list does not mean every service in it is available. Individual features
                reach regions at different times, and the one that bites hardest is usually a Lakeflow connector or an
                AI service that is not there yet. That is not a timeline problem — it changes the architecture, because
                the fallback is a different ingestion method or a different region for one workload.
              </p>
              <p>
                We check the current region and feature tables for the specific services a design depends on, and we
                write down what we checked and when. A note that said &ldquo;supported&rdquo; eight months ago is not
                evidence.
              </p>
            </div>
          </div>
          <p className="note" data-r>
            One more consideration for organisations in Sri Lanka and the region: data residency requirements are set
            by your sector and your contracts, not by the platform. The region choice is the easy half. Knowing whether
            your own obligations permit Mumbai or Singapore, and what your customers were told, is the half worth
            getting advice on.
          </p>
        </div>
      </section>

      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="Where these controls get applied.">
              Architecture decides what is possible. These decide what actually happens.
            </Head>
          </div>
          <RelatedGrid slugs={["unity-catalog", "sharing", "pricing-and-cost"]} cols={3} />
        </div>
      </section>

      <Onward slug="security-and-architecture" />
      <Copyright />
      <FaqSection slug="security-and-architecture" title="What risk and procurement ask." />

      <CtaBand
        title="Send us your security questionnaire."
        body="We will work through it against what Databricks actually publishes, mark what is attested, what is an offering requiring configuration, and what we could not verify — and give you back a design with the controls chosen to match your obligations rather than everything switched on for comfort."
        label="Book an architecture review"
        points={[
          "Serverless or classic, decided on a stated requirement",
          "Controls matched to obligations, not to anxiety",
          "Region and feature availability checked and dated",
          "The Security Addendum read, not the marketing page",
          "What we could not verify, said plainly",
        ]}
      />
    </>
  );
}
