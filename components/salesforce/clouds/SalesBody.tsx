import Link from "next/link";
import { SF_HUB, productPath } from "../data";
import { ProductChips, d } from "../parts";
import { CloudCta, Copyright, FaqSection, Fig, Head, Kicker, Onward, Row, Screen, Sources, Tile, Tiles, Card } from "./kit";

/**
 * Sales Cloud, written on its own rather than from the shared product template. The spine of the page is the shift
 * Salesforce itself now leads with — truth, context, action — and the uncomfortable fact underneath it, which is that
 * all three depend on CRM hygiene nobody enjoys.
 */
export function SalesBody() {
  return (
    <>
      <section className="hero tinted">
        <div className="in">
          <div className="crumbs">
            <Link href="/services">Services</Link> / <Link href={SF_HUB}>Salesforce</Link> / Sales Cloud
          </div>
          <ProductChips current="sales-cloud" />
          <div className="hero-grid">
            <div>
              <div data-r>
                <Kicker>Sell &middot; the first of the five</Kicker>
              </div>
              <h1 data-r style={d(1)}>
                The CRM nobody filled in, <em>now filling itself in.</em>
              </h1>
              <p className="lede" data-r style={d(2)}>
                Every sales system of the last twenty years asked the same thing of sellers: stop selling for a moment
                and tell us what happened. Most of them never got an honest answer, which is why so many forecasts were
                fiction. Sales Cloud&rsquo;s current pitch is to invert that — capture the calls, emails and meetings
                automatically, keep the account history beside them, and let agents do the research and the chasing so
                the seller does the selling.
              </p>
              <div className="ctas" data-r style={d(3)}>
                <a href="#hygiene" className="btn pri">
                  The uncomfortable part <span className="ar">&rarr;</span>
                </a>
              </div>
              <p className="name-note" data-r style={d(4)}>
                Everything here comes from what <b>Salesforce publishes</b> — its product pages and its newsroom. Its customer figures are labelled as its own, because that is what they are.
              </p>
            </div>

            <div data-r style={d(2)}>
              <Fig caption="Our illustration of a seller's morning. Sample data.">
                <Screen
                  app="Sales &middot; My day"
                  user="AN"
                  search="Search accounts, deals, contacts"
                  label="Illustration of a seller's home screen: tiles showing 14 open deals worth 4.2 million rupees, 3 deals needing attention and 11 hours of admin avoided this week; an overnight agent brief listing a renewal at risk because the champion left, a competitor mentioned on a call, and a quote that expired unopened; and a pipeline list with each deal's stage and next step"
                >
                  <Tiles cols={3}>
                    <Tile h="Open pipeline" k="LKR 4.2m" s="14 deals" tone="sf" />
                    <Tile h="Need attention" k="3" s="Flagged overnight" tone="wr" />
                    <Tile h="Admin avoided" k="11h" s="This week" tone="ok" />
                  </Tiles>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Overnight, while you were asleep" meta="agent brief">
                      <Row l="Harbour Foods &middot; champion left the company" pill={{ k: "er", t: "Renewal risk" }} />
                      <Row l="Kandy Hotels &middot; competitor named on Tuesday's call" pill={{ k: "wr", t: "Read it" }} />
                      <Row l="Southern Traders &middot; quote expired, never opened" pill={{ k: "wr", t: "Resend?" }} />
                      <Row l="Lanka Retail &middot; procurement added two approvers" pill={{ k: "in", t: "Noted" }} />
                    </Card>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Your pipeline" meta="by close date">
                      <Row l="Lanka Retail &middot; expansion" r="Negotiation" pill={{ k: "ok", t: "On track" }} />
                      <Row l="Harbour Foods &middot; renewal" r="Proposal" pill={{ k: "er", t: "Slipping" }} />
                      <Row l="Ceylon Mills &middot; new" r="Discovery" pill={{ k: "nt", t: "Early" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the three pillars ---------------- */}
      <section className="light">
        <div className="in">
          <Head eyebrow="The shape of it" title="Truth, context, action.">
            Salesforce organises its own Sales Cloud pitch around three words. They are worth taking seriously, because
            each one is a different kind of problem and most CRM projects only ever solve the first.
          </Head>
          <div className="layers" style={{ marginTop: 40 }}>
            <div className="layer core" data-r>
              <span className="who">Truth</span>
              <div>
                <h3>What actually happened, captured without being typed</h3>
                <p>
                  Calls, emails and meetings captured automatically rather than entered after the fact. This is the
                  foundation and the one most organisations have never had: a record that reflects reality instead of
                  reflecting whoever was diligent about data entry on a Friday afternoon.
                </p>
              </div>
            </div>
            <div className="layer" data-r style={d(1)}>
              <span className="who">Context</span>
              <div>
                <h3>Account history beside live signals</h3>
                <p>
                  Thirty years of account history, as Salesforce puts it, with what is happening now set against it. A
                  renewal looks different when you can see that this customer has churned once before, or that the
                  person who championed you has just changed jobs.
                </p>
              </div>
            </div>
            <div className="layer" data-r style={d(2)}>
              <span className="who">Action</span>
              <div>
                <h3>Handoffs between sellers and agents that do not drop</h3>
                <p>
                  Autonomous agents that research prospects, prepare deals and monitor accounts around the clock,
                  flagging risks and opportunities — and handing them to a person at the point where judgement is
                  actually needed. Salesforce calls the arrangement agentic selling: every seller with a small team of
                  agents doing the operational work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what changes for a seller ---------------- */}
      <section>
        <div className="in">
          <Head eyebrow="For the person doing the job" title="What a seller stops doing.">
            The test of any of this is not the dashboard. It is whether a working seller&rsquo;s Tuesday is different.
          </Head>
          <div className="vs">
            <div data-r>
              <span className="lab">The Tuesday they have now</span>
              <h3>An hour of admin, then selling</h3>
              <ul>
                <li>Writing up yesterday&rsquo;s calls from memory, badly.</li>
                <li>Re-reading an account history scattered over email, a shared drive and someone else&rsquo;s head.</li>
                <li>Hunting for the last quote, the signed contract and the current price list.</li>
                <li>Updating close dates the night before the forecast call.</li>
                <li>Finding out a champion left two months after they left.</li>
                <li>Building the same proposal for the fourth time this quarter.</li>
              </ul>
            </div>
            <div className="good" data-r style={d(1)}>
              <span className="lab">What the product is aiming at</span>
              <h3>The admin happens around them</h3>
              <ul>
                <li>Calls, emails and meetings captured as they happen.</li>
                <li>Account history in one place, with the live signals against it.</li>
                <li>Research and preparation done overnight by an agent, ready to read.</li>
                <li>Risks flagged when they appear rather than at quarter end.</li>
                <li>Quoting, approvals and contracts on the same record.</li>
                <li>Deal updates in Slack or Teams, without opening the CRM at all.</li>
              </ul>
            </div>
          </div>
          <p className="note" data-r style={d(2)}>
            That right-hand column is the promise, not a report of what you will get. Which of those six you actually
            land depends almost entirely on the section below.
          </p>
        </div>
      </section>

      {/* ---------------- hygiene ---------------- */}
      <section className="light" id="hygiene">
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="The uncomfortable part" title="An agent cannot read what nobody wrote down.">
                Here is the thing we say in the first meeting, because it saves everyone a year. Agents read the same
                fields a person would. Where those are stale, blank or contradictory, an experienced rep quietly works
                around it — they know the close date is optimistic and the owner is wrong. An agent does not know that,
                so it reports what the record says, confidently.
              </Head>
              <p className="body-t">
                This is why AI makes bad CRM data feel worse before it feels better. It is also the best thing that can
                happen to you, because for the first time the cost of the mess is visible to the people who could fix
                it.
              </p>
              <p className="body-t">
                So the order of work is not negotiable for us: hygiene, then automation, then agents. Required fields
                that are genuinely required. One definition of a qualified lead, agreed by the people who disagree
                about it. Owners on accounts. Close-date discipline with a consequence. And automatic activity capture,
                so the record stops depending on anybody&rsquo;s memory.
              </p>
              <div className="quote">
                <p>
                  Every organisation that told us its CRM data was fine had not looked. Every organisation that told us
                  it was a disaster was about three weeks from fixing it.
                </p>
                <span className="by">From the discovery stage of more projects than we would like to admit</span>
              </div>
            </div>

            <div data-r style={d(1)}>
              <div className="includes" style={{ marginTop: 0 }}>
                <div>
                  <h3>Close dates in the past</h3>
                  <p>The single most common finding. It makes every forecast wrong and every agent wrong with it.</p>
                </div>
                <div>
                  <h3>Accounts with no owner</h3>
                  <p>Nobody is accountable, so nothing is maintained, so nobody trusts the segment it sits in.</p>
                </div>
                <div>
                  <h3>Four definitions of qualified</h3>
                  <p>One per team. Every conversion-rate argument traces back to this, and none of them is a data problem.</p>
                </div>
                <div>
                  <h3>Contacts who left in 2023</h3>
                  <p>Still receiving campaigns, still counted in reach, still the named champion on a live renewal.</p>
                </div>
                <div>
                  <h3>Notes in a private inbox</h3>
                  <p>The real account history, invisible to everyone and gone the day that person resigns.</p>
                </div>
                <div>
                  <h3>Stages that mean nothing</h3>
                  <p>Six stages, all advanced by optimism rather than evidence. Fix the exit criteria, not the stage names.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what is sold under the name ---------------- */}
      <section>
        <div className="in">
          <Head eyebrow="The product set" title="Six things are sold under this one name." wide>
            &ldquo;Sales Cloud&rdquo; in a proposal can mean any of these. Knowing which you are being quoted for, and
            which you actually need, is worth doing before the commercial conversation rather than during it.
          </Head>
          <div className="tbl stack" data-r>
            <table>
              <thead>
                <tr>
                  <th>What</th>
                  <th>What it is</th>
                  <th>When you need it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales Cloud</td>
                  <td data-label="What it is">
                    The core CRM: leads, accounts, contacts and opportunities, automatic capture of calls, emails and
                    meetings, deal and pipeline tracking.
                  </td>
                  <td data-label="When you need it">Always. This is the thing itself.</td>
                </tr>
                <tr>
                  <td>Headless Sales</td>
                  <td data-label="What it is">
                    Sales intelligence and deal updates inside Slack, Teams, ChatGPT and Claude, under enterprise
                    guardrails, rather than inside the CRM interface.
                  </td>
                  <td data-label="When you need it">
                    When adoption is your problem, not capability. See below.
                  </td>
                </tr>
                <tr>
                  <td>Sales Performance Management</td>
                  <td data-label="What it is">
                    Sales Programs, Sales Planning and Spiff: real-time earnings, quota tracking, incentives and the
                    performance data behind coaching. Spiff is the commissions product.
                  </td>
                  <td data-label="When you need it">
                    When commissions are run in a spreadsheet nobody fully trusts.
                  </td>
                </tr>
                <tr>
                  <td>Partner Cloud</td>
                  <td data-label="What it is">
                    Partner relationship management: a shared account view with partners, co-sold deal tracking and
                    market development fund claims.
                  </td>
                  <td data-label="When you need it">
                    When a meaningful share of revenue arrives through resellers or distributors.
                  </td>
                </tr>
                <tr>
                  <td>Revenue Cloud</td>
                  <td data-label="What it is">
                    Quoting, configure-price-quote, contracts, pricing and billing on the same platform and the same
                    data as the CRM.
                  </td>
                  <td data-label="When you need it">
                    When quoting is slow, inconsistent or produces prices nobody can defend.
                  </td>
                </tr>
                <tr>
                  <td>Agentforce for Sales</td>
                  <td data-label="What it is">
                    The agents: prospecting, pipeline management and sales actions, built and governed on the
                    Agentforce platform.
                  </td>
                  <td data-label="When you need it">
                    After the hygiene work, not before. It is also the largest line on the invoice.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- headless sales ---------------- */}
      <section className="light" id="headless">
        <div className="in">
          <div className="two mid">
            <div data-r>
              <Head eyebrow="Headless Sales" title="The first credible answer to &ldquo;nobody uses the CRM&rdquo;.">
                The oldest complaint in this category is that CRM takes time away from selling in order to serve a
                system nobody sells from. Every previous answer was a better interface. This one is different: stop
                requiring the interface at all.
              </Head>
              <p className="body-t">
                Salesforce names Slack, Microsoft Teams, ChatGPT and Claude as places where deal intelligence and
                updates can live, under enterprise guardrails. A seller asks about an account where they already are,
                and updates a deal in the same place, and the CRM stays current as a by-product.
              </p>
              <p className="body-t">
                <b>What to check:</b> which guardrails, exactly. An assistant that can read your pipeline in a
                third-party chat tool is a governance question as much as a productivity one, and it belongs in the
                security review rather than in the sales demo.
              </p>
              <div className="linkrow" style={{ marginTop: 26 }}>
                <Link href={productPath("data-360")}>What grounds the answers &rarr;</Link>
                <Link href="/services/salesforce/agentforce">How agents are governed &rarr;</Link>
              </div>
            </div>

            <div data-r style={d(1)}>
              <Fig caption="Our illustration of a deal update in a chat tool. Sample data.">
                <Screen
                  app="Team channel &middot; #deals-west"
                  user="DK"
                  label="Illustration of a sales assistant inside a team chat channel: a seller asks what changed on the Harbour Foods renewal, the assistant answers that the champion left, the renewal date is in 31 days and the last quote was never opened, citing the account record and the call transcript as sources, and the seller then updates the close date by replying in the channel"
                >
                  <div className="chat2">
                    <div className="ch">
                      <i aria-hidden="true" />
                      Sales assistant
                      <span className="m">in your chat tool &middot; not the CRM</span>
                    </div>
                    <div className="msgs">
                      <div className="bub u">What changed on Harbour Foods?</div>
                      <div className="bub a">
                        Three things. Their champion <b>left on the 4th</b>. The renewal is in <b>31 days</b>. The
                        quote you sent on the 12th was <b>never opened</b>.
                        <div className="src">
                          <span>account record</span>
                          <span>call transcript, 14 Oct</span>
                          <span>quote activity</span>
                        </div>
                      </div>
                      <div className="bub u">Push close date to 30 Nov and flag it for Dilshan.</div>
                      <div className="bub a">
                        Done. Close date updated, owner notified, and I have drafted a re-introduction email to the new
                        procurement lead for you to review.
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="What the CRM recorded" meta="automatically">
                      <Row l="Close date" r="12 Nov → 30 Nov" pill={{ k: "ok", t: "Updated" }} />
                      <Row l="Risk flag" r="Champion departed" pill={{ k: "er", t: "Raised" }} />
                      <Row l="Task" r="Assigned to Dilshan" pill={{ k: "in", t: "Open" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the claims ---------------- */}
      <section className="light">
        <div className="in">
          <Head eyebrow="The numbers, labelled" title="What Salesforce claims, and who said it.">
            We reproduce these because you will meet them in the sales cycle, and it is better to know whose figures
            they are. Every one is Salesforce&rsquo;s own, published without a method.
          </Head>
          <div className="facts" data-r>
            <div className="fact">
              <b>30%</b>
              <span>More revenue</span>
              <span className="who">Salesforce headline claim</span>
            </div>
            <div className="fact">
              <b>25h</b>
              <span>Back each week, per seller</span>
              <span className="who">Salesforce headline claim</span>
            </div>
            <div className="fact">
              <b>63%</b>
              <span>Faster closing after consolidating eight systems</span>
              <span className="who">The 1916 Company, via Salesforce</span>
            </div>
            <div className="fact">
              <b>5h</b>
              <span>Saved per rep per day with Sales AI</span>
              <span className="who">Crexi, via Salesforce</span>
            </div>
          </div>
          <p className="note" data-r style={d(1)}>
            Also on the record and more checkable: Salesforce has been named a Leader in the Gartner Magic Quadrant for
            CRM Sales Platforms for the twentieth consecutive year. An analyst placement is not a promise about your
            project, but unlike a customer-success metric it is independently produced.
          </p>
          <div className="quote" data-r style={d(2)}>
            <p>
              The only figure that should move your decision is the one from your own pipeline. Two teams, one quarter,
              one changed process. Six weeks of work, and the argument is settled for good.
            </p>
            <span className="by">What we would rather you did than believe any of the above</span>
          </div>
        </div>
      </section>

      <Onward slug="sales-cloud" />
      <Copyright />
      <FaqSection slug="sales-cloud" title="What sales leaders ask us." />

      <section>
        <div className="in">
          <Sources
            checked="Checked against Salesforce's own pages in November 2026. Product names and packaging change; check salesforce.com before you commit to anything."
            items={[
              { label: "Salesforce — Sales Cloud", href: "https://www.salesforce.com/sales/" },
              { label: "Salesforce — Agentforce", href: "https://www.salesforce.com/agentforce/" },
            ]}
          />
        </div>
      </section>

      <CloudCta
        title="Show us your pipeline report, not your requirements."
        body="Bring last quarter's forecast and what actually closed. The gap between those two numbers tells us more about what you need than any requirements document, and it usually points at process and hygiene rather than at software."
        label="Book a pipeline review"
        points={[
          "Your forecast against your actuals",
          "The hygiene work that has to come first",
          "Which of the six products you actually need",
          "A first release in weeks, not quarters",
        ]}
      />
    </>
  );
}
