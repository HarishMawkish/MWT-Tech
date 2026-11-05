import Link from "next/link";
import { SF_HUB, productPath } from "../data";
import { ProductChips, d } from "../parts";
import { Card, CloudCta, Copyright, FaqSection, Fig, Head, Kicker, Onward, Row, Screen, Sources, Tile, Tiles } from "./kit";

/**
 * Data 360. The page every other Salesforce page quietly depends on, and the one most buyers meet last. Its spine is
 * the single idea that makes it different from a warehouse: it reads data where it already lives.
 */
export function DataBody() {
  return (
    <>
      <section className="hero tinted">
        <div className="in">
          <div className="crumbs">
            <Link href="/services">Services</Link> / <Link href={SF_HUB}>Salesforce</Link> / Data 360
          </div>
          <ProductChips current="data-360" />
          <div className="hero-grid">
            <div>
              <div data-r>
                <Kicker>Unify &middot; the layer underneath</Kicker>
              </div>
              <h1 data-r style={d(1)}>
                Everything else on this platform <em>assumes this page.</em>
              </h1>
              <p className="lede" data-r style={d(2)}>
                A seller&rsquo;s agent can only brief them on what it can read. A marketer&rsquo;s segment is only as
                honest as the profile behind it. A service agent answering about an order needs the order. Data 360 is
                the layer that makes those possible, and its one distinguishing idea is that it reads your data where
                it already lives — Snowflake, Databricks, BigQuery, S3, Redshift — rather than demanding another copy.
              </p>
              <div className="ctas" data-r style={d(3)}>
                <a href="#zero-copy" className="btn pri">
                  What zero copy means <span className="ar">&rarr;</span>
                </a>
              </div>
              <p className="name-note" data-r style={d(4)}>
                It used to be called <b>Data Cloud</b>, and before that Customer 360 Audiences and Salesforce CDP. If
                your last proposal used one of those names, this is the same lineage.
              </p>
            </div>

            <div data-r style={d(2)}>
              <Fig caption="Our illustration of connected sources and one resolved profile. Sample data.">
                <Screen
                  app="Data 360 &middot; Sources"
                  user="GV"
                  search="Search objects, profiles, segments"
                  label="Illustration of the Data 360 sources screen: tiles showing 11 connected sources, zero copies made and 1.9 million resolved profiles; a source list showing Snowflake, Databricks, an S3 bucket and the CRM connected live with no copy, alongside a point-of-sale file that is ingested; and a resolved profile panel showing four identities from different systems merged into one customer"
                >
                  <Tiles cols={3}>
                    <Tile h="Connected sources" k="11" s="Across 4 systems" tone="sf" />
                    <Tile h="Copies made" k="0" s="Read in place" tone="ok" />
                    <Tile h="Resolved profiles" k="1.9m" s="From 3.4m records" />
                  </Tiles>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Where the data lives" meta="live, not extracted">
                      <Row l="Snowflake &middot; orders, returns" r="zero copy" pill={{ k: "ok", t: "Live" }} />
                      <Row l="Databricks &middot; propensity scores" r="zero copy" pill={{ k: "ok", t: "Live" }} />
                      <Row l="Amazon S3 &middot; web events" r="zero copy" pill={{ k: "ok", t: "Live" }} />
                      <Row l="Salesforce CRM &middot; accounts, cases" r="native" pill={{ k: "ok", t: "Live" }} />
                      <Row l="Point-of-sale export &middot; nightly" r="ingested" pill={{ k: "wr", t: "Copied" }} />
                    </Card>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="One customer, four identities" meta="identity resolution">
                      <Row l="loyalty #4471882" r="in-store" pill={{ k: "in", t: "Matched" }} />
                      <Row l="p.silva@…  &middot; web account" r="ecommerce" pill={{ k: "in", t: "Matched" }} />
                      <Row l="+94 77 ••• 4120 &middot; service call" r="contact centre" pill={{ k: "in", t: "Matched" }} />
                      <Row l="anonymous session &middot; 3 visits" r="web" pill={{ k: "nt", t: "Linked" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the problem ---------------- */}
      <section className="light">
        <div className="in">
          <Head eyebrow="Why it exists" title="The copy problem, and why it is expensive twice.">
            Nobody planned this either. A warehouse arrived for analysis. The marketing tool needed its own audience
            store, so data was copied into it. The service tool needed order history, so that was copied too. Each copy
            was reasonable on the day it was made.
          </Head>
          <div className="vs">
            <div data-r>
              <span className="lab">What most estates look like</span>
              <h3>Five copies, five truths</h3>
              <ul>
                <li>A warehouse holding the analytical version of the customer.</li>
                <li>A marketing audience store holding a second one, a day behind.</li>
                <li>Order history copied into the service tool, a week behind.</li>
                <li>A spreadsheet somebody maintains because none of those were right.</li>
                <li>Consent recorded in one of them and honoured in none of the others.</li>
                <li>Four answers to &ldquo;how many customers do we have?&rdquo;, all defensible.</li>
              </ul>
            </div>
            <div className="good" data-r style={d(1)}>
              <span className="lab">What this is supposed to replace it with</span>
              <h3>One resolved profile, read in place</h3>
              <ul>
                <li>Live reads against Snowflake, Databricks, BigQuery, S3 and Redshift — no ETL, no duplication.</li>
                <li>Identities matched across devices, channels and anonymous sessions into known profiles.</li>
                <li>Business meaning attached, so a field means the same thing to every team.</li>
                <li>Segments and activation driven from the same profile every application reads.</li>
                <li>Agents grounded in that profile rather than in whatever they were handed.</li>
                <li>Consent and permissions enforced on the path, not re-implemented per tool.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r style={d(2)}>
            <b>The honest caveat:</b> zero copy is a connection, not magic. Performance still depends on the
            system at the far end, and some operations will materialise data anyway. Which ones
            belongs in an architecture review rather than on a product page — ours included.
          </p>
        </div>
      </section>

      {/* ---------------- the diagram ---------------- */}
      <section id="zero-copy">
        <div className="in">
          <Head eyebrow="Zero copy" title="Where the data stays, and what moves instead." wide>
            Only two things actually travel: the query, and the answer. That is the whole idea, and it is worth seeing
            drawn once.
          </Head>
          <div className="dia" data-r>
            <div className="dh">Your systems, the profile layer, and what reads it</div>
            <div className="scroll">
              <svg viewBox="0 0 980 300" role="img" aria-labelledby="sf-zc-t">
                <title id="sf-zc-t">
                  A three-band diagram. The bottom band holds the systems that keep your data — Snowflake, Databricks,
                  Google BigQuery, Amazon S3 and Redshift, and the Salesforce CRM — all labelled as staying where they
                  are. The middle band is Data 360, holding identity resolution, business meaning, segments and the
                  agent context engine, with arrows up from the sources marked as queries rather than copies. The top
                  band holds what reads the profile: Sales, Marketing, Service, Loyalty and agents.
                </title>
                <g fontFamily="var(--display)" fontWeight="700" fontSize="12.5">
                  {/* consumers */}
                  <rect x="0" y="0" width="980" height="62" rx="13" fill="#7a6bd8" fillOpacity="0.13" stroke="#7a6bd8" strokeOpacity="0.45" />
                  <text x="22" y="26" fill="#b3a9ef" fontSize="13.5">What reads the profile</text>
                  <text x="22" y="47" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                    Sales Cloud · Marketing Cloud · Service Cloud · Loyalty Management · every agent you build
                  </text>

                  <path d="M490 62 V96" stroke="#7a6bd8" strokeWidth="2" />
                  <path d="M485 90 l5 7 5 -7 z" fill="#7a6bd8" transform="rotate(180 490 93)" />

                  {/* data 360 */}
                  <rect x="0" y="104" width="980" height="96" rx="13" fill="var(--a)" fillOpacity="0.14" stroke="var(--a)" strokeOpacity="0.55" />
                  <text x="22" y="130" fill="var(--fg)" fontSize="14">Data 360</text>
                  <text x="22" y="152" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                    Identity resolution · business meaning · segments and activation · Agent Context Engine · persistent agent memory
                  </text>
                  <text x="22" y="178" fill="var(--a)" fontSize="11.5">
                    Holds the resolved profile and the meaning. Does not hold another copy of your data.
                  </text>

                  {/* arrows down to sources */}
                  <path d="M150 200 V236" stroke="var(--a)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M145 230 l5 7 5 -7 z" fill="var(--a)" />
                  <path d="M490 200 V236" stroke="var(--a)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M485 230 l5 7 5 -7 z" fill="var(--a)" />
                  <path d="M830 200 V236" stroke="var(--a)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d="M825 230 l5 7 5 -7 z" fill="var(--a)" />
                  <text x="506" y="222" fill="var(--a)" fontSize="10" fontWeight="800" letterSpacing="1.2">
                    QUERIES, NOT COPIES
                  </text>

                  {/* sources */}
                  <rect x="0" y="244" width="980" height="56" rx="13" fill="var(--dia-n)" stroke="var(--line)" />
                  <text x="22" y="268" fill="var(--fg)" fontSize="13.5">Your systems, where they already are</text>
                  <text x="22" y="289" fill="var(--muted)" fontSize="11.5" fontWeight="500">
                    Snowflake · Databricks · Google BigQuery · Amazon S3 and Redshift · Salesforce CRM · 200+ connectors for the rest
                  </text>
                </g>
              </svg>
            </div>
            <div className="legend">
              <span>
                <i aria-hidden="true" style={{ background: "#7a6bd8" }} /> Applications and agents
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--a)" }} /> The profile layer
              </span>
              <span>
                <i aria-hidden="true" style={{ background: "var(--dia-n-mark)" }} /> Your data, unmoved
              </span>
            </div>
          </div>
          <p className="note" data-r style={d(1)}>
            If your organisation already runs a lakehouse, that estate is not threatened by this — it is the thing on
            the bottom row. We write about that side of the connection on our{" "}
            <Link href="/services/databricks">Databricks pages</Link>.
          </p>
        </div>
      </section>

      {/* ---------------- four products ---------------- */}
      <section className="light">
        <div className="in">
          <Head eyebrow="What is in it" title="Four things sold under one name.">
            Salesforce groups Data 360 into parts that are bought and used quite differently. Knowing which one a
            proposal is actually about saves a lot of confusion later.
          </Head>
          <div className="layers" style={{ marginTop: 40 }}>
            <div className="layer" data-r>
              <span className="who">The pipes</span>
              <div>
                <h3>Headless Data Platform</h3>
                <p>
                  Zero-copy integration, structured and unstructured data, more than 200 pre-built connectors, and what
                  Salesforce calls context anywhere. This is the plumbing layer, and the connector list matters more
                  here than any feature.
                </p>
              </div>
            </div>
            <div className="layer core" data-r style={d(1)}>
              <span className="who">The new part</span>
              <div>
                <h3>Agent Context Engine</h3>
                <p>
                  Turns unstructured material — PDFs, call logs, wikis — into structured business knowledge agents can
                  be grounded in, with persistent agent memory, trusted grounding and what Salesforce describes as
                  lower model processing cost. If an AI pilot of yours has disappointed, this is the part of the
                  platform that addresses why.
                </p>
              </div>
            </div>
            <div className="layer" data-r style={d(2)}>
              <span className="who">The familiar part</span>
              <div>
                <h3>Customer Data Platform</h3>
                <p>
                  Unified profiles, identity resolution, personalised journeys and agent-ready data. This is the piece
                  marketers recognise, and the one that was sold as Data Cloud.
                </p>
              </div>
            </div>
            <div className="layer" data-r style={d(3)}>
              <span className="who">Alongside</span>
              <div>
                <h3>Insights, and the rest</h3>
                <p>
                  An insights builder derives measures such as propensity to buy and customer lifetime value, and
                  low-code tools — Flow, and Agentforce — act on them. Salesforce also lists Data 360 Headless,
                  Agentforce Coworker and Apromore process intelligence in this family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- identity resolution ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="Identity resolution" title="The setting that quietly decides everything.">
                Matching identities across devices, channels and anonymous sessions sounds like a technical
                configuration. It is not. It is a business decision with a privacy consequence, and it is routinely
                made by whoever happened to be clicking during setup.
              </Head>
              <p className="body-t">
                Match too tightly — email only — and you under-merge: the same person appears three times, your
                customer count is inflated, and your personalisation is wrong in a way nobody notices.
              </p>
              <p className="body-t">
                Match too loosely — fuzzy name and postcode — and you over-merge, which is far worse. Two real people
                become one profile. One of them now sees the other&rsquo;s order history. That is not a data quality
                issue; it is an incident, and you will hear about it from the customer rather than from a dashboard.
              </p>
            </div>

            <div data-r style={d(1)}>
              <ol className="steps" style={{ marginTop: 0 }}>
                <li>
                  <div>
                    <h3>Decide what a customer is</h3>
                    <p>
                      An individual, a household, or an account? Retailers and B2B businesses answer this differently,
                      and the answer changes every number downstream.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Rank your identifiers</h3>
                    <p>
                      A loyalty number is stronger than an email, which is stronger than a name and a postcode. Write
                      the ranking down before you write the rules.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Test against known answers</h3>
                    <p>
                      Take 200 records where you know the truth, run the rules, and count both the merges that should
                      not have happened and the ones that should have.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Decide who owns it</h3>
                    <p>
                      One named person, not a committee and not the implementation partner. Match rules outlive
                      projects.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Re-test when a source joins</h3>
                    <p>
                      Every new system brings new identifier quality. The rules that were right for three sources are
                      not automatically right for four.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="callout" data-r>
            <span className="m">!</span>
            <div>
              <h3>How we treat match rules</h3>
              <p>
                They get written down in business language, reviewed by someone accountable for customer data, and
                tested against a sample where the right answer is already known — counting both the merges that should
                not have happened and the ones that should have. Then they get re-reviewed whenever a new source is
                connected, because every new system brings different identifier quality and changes the arithmetic.
              </p>
              <p>
                It is an hour of work a quarter. The alternative is finding out from a customer that they can see
                somebody else&rsquo;s order history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the record ---------------- */}
      <section>
        <div className="in">
          <Head eyebrow="On the record" title="What can be checked, and what cannot.">
            Salesforce publishes rather less hard data about this product than about the others, which is itself worth
            noting. Here is what it does say.
          </Head>
          <div className="facts three" data-r>
            <div className="fact">
              <b>200+</b>
              <span>Pre-built connectors</span>
              <span className="who">Salesforce&rsquo;s own figure</span>
            </div>
            <div className="fact">
              <b>Leader</b>
              <span>Forrester, customer data platforms for B2C</span>
              <span className="who">Independently produced</span>
            </div>
            <div className="fact">
              <b>2nd year</b>
              <span>Named a Leader by Gartner for CDPs</span>
              <span className="who">Independently produced</span>
            </div>
          </div>
          <p className="note" data-r style={d(1)}>
            Named customers on its pages include FedEx, Heathrow, Pacers Sports &amp; Entertainment, UChicago Medicine
            and MIMIT Health. What Salesforce does <b>not</b> publish for this product is any quantified claim — no
            hallucination reduction figure for the Agent Context Engine, no cost-saving percentage, no match-rate
            benchmark. We would rather tell you that than fill the gap with something borrowed from a blog.
          </p>
          <div className="linkrow" style={{ marginTop: 30 }}>
            <Link href={productPath("marketing-cloud")}>Where segments get used &rarr;</Link>
            <Link href={productPath("service-cloud")}>What grounds a service answer &rarr;</Link>
            <Link href="/services/databricks/sharing">Sharing data between platforms &rarr;</Link>
          </div>
        </div>
      </section>

      <Onward slug="data-360" />
      <Copyright />
      <FaqSection slug="data-360" title="What data teams ask us." />

      <section>
        <div className="in">
          <Sources
            checked="Checked against Salesforce's own pages in November 2026. Product names and packaging in this area have changed twice in three years; check salesforce.com before you commit."
            items={[
              { label: "Salesforce — Data 360", href: "https://www.salesforce.com/data/" },
            ]}
          />
        </div>
      </section>

      <CloudCta
        title="Tell us the question nobody can answer."
        body="Every organisation has one: how many customers do we actually have, or what did this person buy last year, or did we already email them this week. Bring us that question. Working out why it cannot be answered today maps the data work far better than a requirements workshop does."
        label="Book a data session"
        points={[
          "The question, and why it cannot be answered",
          "Which sources connect live and which must be copied",
          "Match rules written down and tested",
          "Data volumes scoped against your real sources",
          "A first release scoped to decisions, not to tables",
        ]}
      />
    </>
  );
}
