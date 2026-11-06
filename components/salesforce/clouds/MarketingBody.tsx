import Link from "next/link";
import { SF_HUB, productPath } from "../data";
import { ProductChips, d } from "../parts";
import { Card, CloudCta, Copyright, FaqSection, Fig, Head, Kicker, Onward, Row, Screen, Sources, Tile, Tiles } from "./kit";

/**
 * Marketing Cloud. Three products share this name, and choosing between them is the decision that actually matters,
 * so the page leads with that rather than with capability lists. The rest follows from it.
 */
export function MarketingBody() {
  return (
    <>
      <section className="hero tinted">
        <div className="in">
          <div className="crumbs">
            Services / <Link href={SF_HUB}>Salesforce</Link> / Marketing Cloud
          </div>
          <ProductChips current="marketing-cloud" />
          <div className="hero-grid">
            <div>
              <div data-r>
                <Kicker>Engage &middot; three products, one name</Kicker>
              </div>
              <h1 data-r style={d(1)}>
                Before anything else: <em>which Marketing Cloud?</em>
              </h1>
              <p className="lede" data-r style={d(2)}>
                This is the only page in the five where the first job is disambiguation. Three different products are
                sold under this name — Marketing Cloud Next, Marketing Cloud Account Engagement and Marketing Cloud
                Engagement — with different foundations, different skills and different migration paths. People sign
                for one and plan for another more often than you would think.
              </p>
              <div className="ctas" data-r style={d(3)}>
                <a href="#which" className="btn pri">
                  Tell them apart <span className="ar">&rarr;</span>
                </a>
                <a href="#agents" className="btn sec">
                  What the agents do
                </a>
              </div>
              <p className="name-note" data-r style={d(4)}>
                If a proposal in front of you says only &ldquo;Marketing Cloud&rdquo;, <b>ask which one, in writing</b>,
                before the commercial conversation goes further. It is the cheapest question on this site.
              </p>
            </div>

            <div data-r style={d(2)}>
              <Fig caption="Our illustration of a campaign being assembled. Sample data.">
                <Screen
                  app="Campaign &middot; Winter renewal"
                  user="PR"
                  action="Review"
                  label="Illustration of a campaign screen: tiles showing a segment of 48,200 people, four channels and a campaign still awaiting human approval; an agent panel proposing a subject line, a send window and a budget split, each marked as a draft needing sign-off; and a channel list showing email, SMS, web and paid with their status"
                >
                  <Tiles cols={3}>
                    <Tile h="Segment" k="48,200" s="From Data 360" tone="sf" />
                    <Tile h="Channels" k="4" s="Email, SMS, web, paid" />
                    <Tile h="Approval" k="Pending" s="Nothing sent yet" tone="wr" />
                  </Tiles>
                  <div style={{ marginTop: 9 }}>
                    <div className="chat2">
                      <div className="ch">
                        <i aria-hidden="true" />
                        Campaign Agent
                        <span className="m">drafts only &middot; a person still signs off</span>
                      </div>
                      <div className="msgs">
                        <div className="bub u">Build the winter renewal campaign for lapsing Gold members.</div>
                        <div className="bub a">
                          Drafted across four channels from your brand guidelines. Suggested send{" "}
                          <b>Tuesday 09:30</b> on past open behaviour, and <b>62% of budget</b> to email where this
                          segment converts best.
                          <div className="src">
                            <span>brand guidelines v4</span>
                            <span>segment: Gold, lapsing</span>
                            <span>last 6 campaigns</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Channels" meta="awaiting approval">
                      <Row l="Email &middot; 3 variants drafted" pill={{ k: "wr", t: "Review" }} />
                      <Row l="SMS &middot; 1 variant drafted" pill={{ k: "wr", t: "Review" }} />
                      <Row l="Web &middot; banner and offer tile" pill={{ k: "wr", t: "Review" }} />
                      <Row l="Paid &middot; audience ready to activate" pill={{ k: "nt", t: "Held" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- which one ---------------- */}
      <section className="light" id="which">
        <div className="in">
          <Head eyebrow="The decision" title="The three products, and what each one was called before." wide>
            Much of the confusion is historical. Salesforce bought its way into marketing twice, and both acquisitions
            are still sold, alongside the platform-native product built to succeed them.
          </Head>
          <div className="tbl stack" data-r>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>What it is</th>
                  <th>Who it suits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Marketing Cloud Next
                    <span style={{ display: "block", fontWeight: 500, fontSize: 13, color: "var(--muted)", marginTop: 4 }}>
                      New. No former name.
                    </span>
                  </td>
                  <td data-label="What it is">
                    The flagship, built natively on the Salesforce platform with Data 360 underneath and Agentforce on
                    top. Salesforce positions it as its marketing product for the agentic enterprise.
                  </td>
                  <td data-label="Who it suits">
                    New builds, and anyone whose marketing needs to share one profile and one set of agents with sales
                    and service.
                  </td>
                </tr>
                <tr>
                  <td>
                    Marketing Cloud Account Engagement
                    <span style={{ display: "block", fontWeight: 500, fontSize: 13, color: "var(--muted)", marginTop: 4 }}>
                      Formerly Pardot.
                    </span>
                  </td>
                  <td data-label="What it is">
                    B2B marketing automation: nurture, scoring, and alignment with the sales team. Account Engagement+
                    adds Next&rsquo;s AI capabilities without changing platform.
                  </td>
                  <td data-label="Who it suits">
                    B2B organisations with a considered sale, an SDR function and a real handover to sales.
                  </td>
                </tr>
                <tr>
                  <td>
                    Marketing Cloud Engagement
                    <span style={{ display: "block", fontWeight: 500, fontSize: 13, color: "var(--muted)", marginTop: 4 }}>
                      Formerly ExactTarget.
                    </span>
                  </td>
                  <td data-label="What it is">
                    The classic high-volume B2C product, with Journey Builder at its centre. It can also take on
                    Next&rsquo;s capabilities rather than being replaced.
                  </td>
                  <td data-label="Who it suits">
                    Organisations already running it at scale, who should plan a move rather than make one this
                    quarter.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="callout" data-r>
            <span className="m">?</span>
            <div>
              <h3>If you are on Engagement today, do you have to move?</h3>
              <p>
                Not immediately, and Salesforce has clearly worked to avoid a forced migration — both older products
                can take on Next&rsquo;s AI capabilities in place. That is genuine breathing room and you should use
                it.
              </p>
              <p>
                It is not a permanent answer. When a vendor builds its new flagship on a different foundation,
                investment follows the flagship. Plan the move on your own timetable, while you still have one, rather
                than on the timetable you will be given later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what Next changes ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-r">
            <div data-r>
              <Head eyebrow="Marketing Cloud Next" title="Why building it on the platform matters.">
                Both older products were excellent and both were separate. They had their own data model, their own
                audience store, their own idea of who a customer was — which is why &ldquo;we emailed someone who had
                an open complaint&rdquo; was a normal occurrence rather than a scandal.
              </Head>
              <p className="body-t">
                Next is built on the Salesforce platform with <Link href={productPath("data-360")}>Data 360</Link>{" "}
                underneath. The profile a marketer segments is the same profile the service agent sees and the same one
                the seller&rsquo;s agent reads. Consent recorded once is honoured everywhere. The segment is not a copy
                that drifts.
              </p>
              <p className="body-t">
                That is the whole argument, and it is a good one. The cost of it is that you inherit the platform:
                its release cadence, its governance, its administration. Organisations that wanted marketing to move
                independently of IT sometimes find that trade harder than they expected.
              </p>
            </div>
            <div data-r style={d(1)}>
              <div className="includes" style={{ marginTop: 0 }}>
                <div>
                  <h3>One profile</h3>
                  <p>The segment reads what sales and service read, not a copy of it from last night.</p>
                </div>
                <div>
                  <h3>One consent record</h3>
                  <p>Recorded once and honoured across channels, rather than re-implemented per tool.</p>
                </div>
                <div>
                  <h3>One set of agents</h3>
                  <p>Built, governed and audited the same way as every other agent in the organisation.</p>
                </div>
                <div>
                  <h3>One release cadence</h3>
                  <p>Which is a benefit and a constraint. Marketing moves at platform speed now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- agents ---------------- */}
      <section className="light" id="agents">
        <div className="in">
          <Head eyebrow="The agents" title="Three of them, doing quite different jobs." wide>
            Salesforce has also bought its way into this. Two of the three named below arrived through acquisitions
            completed in 2026, which is worth knowing when you are told they are deeply integrated.
          </Head>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">Native</span>
              <h3>Campaign Agent</h3>
              <p>
                Creates on-brand, channel-ready content, builds campaigns from your brand guidelines, and optimises
                sends against intent signals. Salesforce&rsquo;s demo also has it prioritising sends and allocating
                budget.
              </p>
              <div className="foot">
                <b>Depends entirely</b> on brand guidelines that actually exist
              </div>
            </div>
            <div className="cap">
              <span className="n">Acquired, April 2026</span>
              <h3>Piper</h3>
              <p>
                An AI sales development agent that engages and converts inbound buyers on the website and in the inbox,
                around the clock. It came with Qualified, bought for about $1.2bn.
              </p>
              <div className="foot">
                <b>B2B inbound</b>, where speed to first reply decides the deal
              </div>
            </div>
            <div className="cap">
              <span className="n">Native</span>
              <h3>Agentic Demand Generation</h3>
              <p>
                Agents that prospect target accounts, qualify inbound demand and nurture buyers — the top of the funnel
                treated as a continuous process rather than a campaign.
              </p>
              <div className="foot">
                <b>Needs</b> an agreed definition of a qualified lead
              </div>
            </div>
          </div>
          <div className="quote" data-r style={d(1)}>
            <p>
              An agent writing against a vague brand does not produce nothing. It produces plausible, off-key work at
              volume, which is considerably harder to clean up.
            </p>
            <span className="by">Why the brand guidelines are the first deliverable, not the last</span>
          </div>
        </div>
      </section>

      {/* ---------------- contentful ---------------- */}
      <section>
        <div className="in">
          <div className="two mid">
            <div data-r>
              <Head eyebrow="The content layer" title="Why Salesforce bought a CMS.">
                In September 2026 Salesforce completed its acquisition of Contentful, a composable content platform,
                for about $1.5bn. It is a more interesting purchase than it first appears.
              </Head>
              <p className="body-t">
                The bottleneck in most marketing operations is not ideas and it is not data. It is production: the same
                offer re-authored five times for five channels, each version drifting from the others, none of them
                reusable. A content layer holds content as structured pieces that assemble per channel instead of being
                rebuilt per channel.
              </p>
              <p className="body-t">
                <b>Whether it helps you</b> depends on whether that is your bottleneck. If your team is re-writing the
                same proposition for email, web, SMS and paid, it is the fix. If your problem is data quality or
                approval cycles, it changes nothing at all — and it is worth being honest with yourself about which you
                have before it appears on an invoice.
              </p>
              <div className="linkrow" style={{ marginTop: 26 }}>
                <Link href={productPath("loyalty-management")}>Where offers and rewards live &rarr;</Link>
                <Link href={productPath("data-360")}>What the segments read &rarr;</Link>
              </div>
            </div>
            <div data-r style={d(1)}>
              <div className="vs stack" style={{ marginTop: 0 }}>
                <div>
                  <span className="lab">Where content is a bottleneck</span>
                  <h3>Five versions of one idea</h3>
                  <ul>
                    <li>The same offer written separately for each channel.</li>
                    <li>Legal approving four near-identical pieces of copy.</li>
                    <li>A price change requiring edits in five places, two of which get missed.</li>
                    <li>Nothing reusable next quarter, so it all happens again.</li>
                  </ul>
                </div>
                <div className="good">
                  <span className="lab">What a content layer changes</span>
                  <h3>One idea, assembled per channel</h3>
                  <ul>
                    <li>Content held as structured pieces rather than finished pages.</li>
                    <li>One approval on the substance, not four on the variants.</li>
                    <li>A price or claim changed once and reflected everywhere.</li>
                    <li>Agents assembling from approved pieces instead of writing fresh.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- numbers ---------------- */}
      <section className="light">
        <div className="in">
          <Head eyebrow="The numbers, labelled" title="Salesforce&rsquo;s own customer-success metrics.">
            These four appear throughout its marketing material. They are attributed on its pages to its own Customer
            Success Metrics, which is the weakest class of evidence a vendor publishes — the sample is customers who
            stayed.
          </Head>
          <div className="facts" data-r>
            <div className="fact">
              <b>32%</b>
              <span>Higher marketing ROI</span>
              <span className="who">Salesforce&rsquo;s own metric</span>
            </div>
            <div className="fact">
              <b>34%</b>
              <span>Higher customer lifetime value</span>
              <span className="who">Salesforce&rsquo;s own metric</span>
            </div>
            <div className="fact">
              <b>32%</b>
              <span>Higher customer engagement</span>
              <span className="who">Salesforce&rsquo;s own metric</span>
            </div>
            <div className="fact">
              <b>27%</b>
              <span>Lower cost to acquire a customer</span>
              <span className="who">Salesforce&rsquo;s own metric</span>
            </div>
          </div>
          <p className="note" data-r style={d(1)}>
            Named customer results are the same class: Fisher &amp; Paykel at 33% higher order conversion with more
            than 100,000 unified profiles, and Indeed sending over 300 million emails a year. We quote them so you
            recognise them, not because we would build a business case on them. If a number matters to your approval,
            insist on the method behind it.
          </p>
        </div>
      </section>

      <Onward slug="marketing-cloud" />
      <Copyright />
      <FaqSection slug="marketing-cloud" title="What marketing leaders ask us." />

      <section>
        <div className="in">
          <Sources
            checked="Checked against Salesforce's own pages and newsroom in November 2026. This product family has been renamed repeatedly; check salesforce.com for the current names before you sign."
            items={[
              { label: "Salesforce — Marketing Cloud", href: "https://www.salesforce.com/marketing/" },
              {
                label: "Salesforce newsroom — Contentful acquisition",
                href: "https://www.salesforce.com/news/press-releases/2026/01/22/salesforce-signs-definitive-agreement-to-acquire-contentful/",
              },
            ]}
          />
        </div>
      </section>

      <CloudCta
        title="Bring us the proposal and we will tell you which product it is."
        body="Genuinely — send us what you have been quoted. Working out whether it is Next, Account Engagement or Engagement, and whether that is the right one for how you actually market, takes us an afternoon and saves some organisations a year."
        label="Book a marketing review"
        points={[
          "Which of the three you are being sold",
          "Whether your bottleneck is data, content or approvals",
          "A migration plan on your timetable, not theirs",
          "Brand guidelines before agents, every time",
          "One profile shared with sales and service",
        ]}
      />
    </>
  );
}
