import Link from "next/link";
import { SF_HUB, productPath } from "../data";
import { ProductChips, d } from "../parts";
import { Card, CloudCta, Copyright, FaqSection, Fig, Head, Kicker, Onward, Row, Screen, Sources, Tile, Tiles } from "./kit";

/**
 * Service Cloud. The product changed shape in 2026 when Salesforce bought Fin, so the page is organised around that
 * rather than around the feature list — and around the question any service leader should ask before signing, which
 * is what the published resolution rate actually counts.
 */
export function ServiceBody() {
  return (
    <>
      <section className="hero tinted">
        <div className="in">
          <div className="crumbs">
            Services / <Link href={SF_HUB}>Salesforce</Link> / Service Cloud
          </div>
          <ProductChips current="service-cloud" />
          <div className="hero-grid">
            <div>
              <div data-r>
                <Kicker>Serve &middot; the product that changed most</Kicker>
              </div>
              <h1 data-r style={d(1)}>
                A case system with AI attached, <em>or the other way round?</em>
              </h1>
              <p className="lede" data-r style={d(2)}>
                In September 2026 Salesforce completed a $3.6bn purchase of Fin — the company formerly called Intercom
                — and now leads its service pages with Fin as the flagship agent rather than with case management.
                That is not a feature release; it is a change in what the product is. Service Cloud today is closer to
                an AI resolution layer with case management behind it than to a console with a chatbot bolted on.
              </p>
              <div className="ctas" data-r style={d(3)}>
                <a href="#resolution" className="btn pri">
                  What &ldquo;resolved&rdquo; means <span className="ar">&rarr;</span>
                </a>
              </div>
              <p className="name-note" data-r style={d(4)}>
                Salesforce publishes an average of <b>76% of queries resolved</b> by Fin. The section below is about
                what that number counts, because the contract definition and the common-sense one are not the same.
              </p>
            </div>

            <div data-r style={d(2)}>
              <Fig caption="Our illustration of a service queue with an agent working it. Sample data.">
                <Screen
                  app="Service &middot; Live queue"
                  user="SV"
                  label="Illustration of a service console: tiles showing 1,284 conversations today, 71 percent closed without a person and 38 waiting for a human; a conversation list showing which were resolved by the AI agent, which escalated and why; and a panel showing the three most common reasons for escalation this week"
                >
                  <Tiles cols={3}>
                    <Tile h="Conversations today" k="1,284" s="All channels" tone="sf" />
                    <Tile h="Closed without a person" k="71%" s="Measured on completion" tone="ok" />
                    <Tile h="Waiting for a human" k="38" s="Longest 6 min" tone="wr" />
                  </Tiles>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Live queue" meta="agent first, person where it matters">
                      <Row l="Order #41882 &middot; where is it?" r="answered, 14s" pill={{ k: "ok", t: "Resolved" }} />
                      <Row l="Refund outside policy window" r="escalated" pill={{ k: "wr", t: "To a person" }} />
                      <Row l="Reset my password" r="answered, 9s" pill={{ k: "ok", t: "Resolved" }} />
                      <Row l="Complaint &middot; third contact" r="escalated, priority" pill={{ k: "er", t: "To a person" }} />
                      <Row l="Change delivery address" r="done in system" pill={{ k: "ok", t: "Resolved" }} />
                    </Card>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Why things escalated this week">
                      <Row l="Outside published policy" r="41%" />
                      <Row l="Customer asked for a person" r="28%" />
                      <Row l="Knowledge article missing" r="19%" pill={{ k: "wr", t: "Fixable" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the acquisition ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="What happened" title="Salesforce bought its service agent rather than building it.">
                Worth knowing in detail, because it explains why the product&rsquo;s centre of gravity moved so
                suddenly, and because &ldquo;deeply integrated&rdquo; means something different for an acquisition
                this recent.
              </Head>
            </div>
            <div data-r style={d(1)}>
              <p className="body-t" style={{ marginTop: 0 }}>
                Intercom renamed itself <b>Fin</b> in May 2026. Salesforce signed to buy it on 15 June 2026 for about
                $3.6bn, and completed on 10 September 2026, bringing more than 30,000 customers with it. Salesforce
                says it is folding Fin into Agentforce.
              </p>
              <p className="body-t">
                The practical question for a buyer is integration depth, and the honest answer today is that it
                varies. Salesforce&rsquo;s announcements did not spell out the Service Cloud relationship, and
                independent analysts expect packaged Fin agents to appear inside Service Cloud and Slack rather than
                describing something already shipped.
              </p>
              <p className="body-t">
                <b>So ask specifically.</b> Which pieces are native today, which are roadmap, and what the licensing
                looks like for each. An acquisition closed weeks ago is not the same as a product built together over
                years, and no amount of keynote language changes that.
              </p>
            </div>
          </div>

          <div className="phases three" data-r>
            <div className="ph">
              <span className="st">May 2026</span>
              <h3>Intercom becomes Fin</h3>
              <p>
                The company renames itself after its AI agent. Intercom survives as the name of the customer service
                software it has sold for years.
              </p>
              <div className="we">
                <b>Signal:</b> the agent is the business now
              </div>
            </div>
            <div className="ph">
              <span className="st">June 2026</span>
              <h3>Salesforce signs</h3>
              <p>
                An agreement to acquire for approximately $3.6bn, subject to customary purchase price adjustments,
                framed as making Agentforce stronger in service.
              </p>
              <div className="we">
                <b>Signal:</b> buying, not building
              </div>
            </div>
            <div className="ph">
              <span className="st">September 2026</span>
              <h3>The deal completes</h3>
              <p>
                Closed on 10 September, bringing the platform, the technical team and more than 30,000 customers into
                Salesforce.
              </p>
              <div className="we">
                <b>Ask:</b> what is native today?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what resolved means ---------------- */}
      <section id="resolution">
        <div className="in">
          <Head eyebrow="The number everyone quotes" title="Three things get called resolution. Only one is." wide>
            This is the most important section on the page. Before any contract is signed, pin down which of these
            the published rate is measuring, and which one you will be billed against.
          </Head>
          <div className="caps three" data-r>
            <div className="cap">
              <span className="n">Not resolution</span>
              <h3>Deflection</h3>
              <p>
                The customer did not reach a person. That includes the ones who gave up, closed the window, and went
                to social media instead. Deflection counts an absence, not an outcome.
              </p>
              <div className="foot">
                <b>Can rise</b> while satisfaction falls
              </div>
            </div>
            <div className="cap">
              <span className="n">Not resolution</span>
              <h3>Containment</h3>
              <p>
                The conversation stayed with the agent and did not escalate. Better, but it still counts a
                conversation that ended in an unanswered question as a success.
              </p>
              <div className="foot">
                <b>Check</b> what happened next
              </div>
            </div>
            <div className="cap">
              <span className="n">The real one</span>
              <h3>Resolution</h3>
              <p>
                The customer&rsquo;s problem was actually solved, and they did not come back about the same thing
                within a sensible window. This is the only one worth paying for.
              </p>
              <div className="foot">
                <b>Insist on</b> repeat-contact in the definition
              </div>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">?</span>
            <div>
              <h3>The four questions we put to the vendor</h3>
              <p>
                Is the rate measured on conversations <b>started</b> or conversations <b>completed</b>? Does a
                customer who abandons count as resolved? Does a customer who returns within seven days about the same
                issue reverse the resolution? And is the figure you are quoting me an average across all customers,
                or one from a customer whose volume mix looks like mine?
              </p>
              <p>
                None of these is hostile. A vendor confident in the product answers them in a sentence each. The
                published figures — 76% on average, Bloomerang at 84% of conversations with an 85% CX score, Formula 1
                resolving race-day issues 50% faster, Forrester&rsquo;s cited 396% ROI over three years — all become
                more useful once you know which definition is behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- what the team becomes ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two mid">
            <div data-r>
              <Head eyebrow="For the team" title="Your metrics will get worse. That is the sign it worked.">
                Here is the thing nobody mentions in the business case. If agents absorb the repetitive end of the
                queue, then what reaches a person is the hard end: the angry, the complicated, the ones with no
                policy covering them.
              </Head>
              <p className="body-t">
                Average handle time goes up, because the easy three-minute cases have gone. First-contact resolution
                goes down, because the cases that resolve on first contact were the ones the agent took. Satisfaction
                per case may dip while overall satisfaction rises.
              </p>
              <p className="body-t">
                If you have not told your leadership this in advance, those numbers will be read as the project
                failing at exactly the moment it is working. Change the measures before you change the queue — and
                plan for fewer, more skilled, better-paid people rather than for the same team doing less.
              </p>
              <div className="quote">
                <p>
                  The knowledge base stops being documentation and becomes the thing answering most of your customers.
                  Someone needs to be paid to own it.
                </p>
                <span className="by">The role most organisations forget to create</span>
              </div>
            </div>
            <div data-r style={d(1)}>
              <div className="meters" style={{ marginTop: 0 }}>
                <div className="meter-row dim">
                  <span className="nm">Average handle time</span>
                  <span className="meter">
                    <i style={{ width: "56%" }} />
                  </span>
                  <span className="v">up</span>
                </div>
                <div className="meter-row dim">
                  <span className="nm">First-contact resolution</span>
                  <span className="meter">
                    <i style={{ width: "44%" }} />
                  </span>
                  <span className="v">down</span>
                </div>
                <div className="meter-row">
                  <span className="nm">Total cost to serve</span>
                  <span className="meter">
                    <i style={{ width: "34%" }} />
                  </span>
                  <span className="v">down</span>
                </div>
                <div className="meter-row">
                  <span className="nm">Time to first response</span>
                  <span className="meter">
                    <i style={{ width: "18%" }} />
                  </span>
                  <span className="v">down</span>
                </div>
              </div>
              <p className="note">
                Illustrative, and deliberately unlabelled on the axis — the direction is the point, not the size. The
                first two moving the &ldquo;wrong&rdquo; way is the expected consequence of the last two moving the
                right way. Agree which four numbers you are managing before you start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the parts ---------------- */}
      <section>
        <div className="in">
          <Head eyebrow="The product set" title="Eleven things are listed. You need about four." wide>
            Salesforce&rsquo;s service page names a lot. Most organisations should start with a small subset and let
            specific problems justify the rest.
          </Head>
          <div className="tbl stack" data-r>
            <table>
              <thead>
                <tr>
                  <th>Part</th>
                  <th>What it is</th>
                  <th>Start with it?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer Service Management</td>
                  <td data-label="What it is">
                    The core: cases, incidents, knowledge and assets, managed centrally.
                  </td>
                  <td data-label="Start with it?">Yes. This is the product.</td>
                </tr>
                <tr>
                  <td>Digital Channels</td>
                  <td data-label="What it is">Messaging, chat, email and social, handled in one place.</td>
                  <td data-label="Start with it?">
                    One or two channels. Not all of them at once.
                  </td>
                </tr>
                <tr>
                  <td>Self-Service</td>
                  <td data-label="What it is">A help centre answering around the clock, personalised to the customer.</td>
                  <td data-label="Start with it?">
                    Yes, and it is only as good as the knowledge behind it.
                  </td>
                </tr>
                <tr>
                  <td>Fin and Agentforce for Service</td>
                  <td data-label="What it is">
                    The AI agents: resolving for customers, briefing reps, giving supervisors live visibility.
                  </td>
                  <td data-label="Start with it?">
                    After the knowledge base exists, not before.
                  </td>
                </tr>
                <tr>
                  <td>Contact Center</td>
                  <td data-label="What it is">
                    An omnichannel contact centre, including the agentic version that unifies voice, digital, CRM data
                    and agents.
                  </td>
                  <td data-label="Start with it?">Only if you run a real contact centre.</td>
                </tr>
                <tr>
                  <td>CCaaS Integrations</td>
                  <td data-label="What it is">Connecting existing cloud telephony to the CRM.</td>
                  <td data-label="Start with it?">If you already have telephony you are keeping.</td>
                </tr>
                <tr>
                  <td>Field Service and Operations</td>
                  <td data-label="What it is">Scheduling, dispatch and mobile work for visits to a customer site.</td>
                  <td data-label="Start with it?">
                    Separate project. See <Link href="/services/salesforce/field-service">Field Service</Link>.
                  </td>
                </tr>
                <tr>
                  <td>Asset Service Lifecycle Management</td>
                  <td data-label="What it is">Customer and asset data together, aimed at keeping equipment running.</td>
                  <td data-label="Start with it?">Only where you service installed equipment.</td>
                </tr>
                <tr>
                  <td>Visual Remote Assistant</td>
                  <td data-label="What it is">
                    Live remote assistance, aimed at fixing things without sending somebody.
                  </td>
                  <td data-label="Start with it?">Later. Strong return when it fits.</td>
                </tr>
                <tr>
                  <td>IT Service and HR Service</td>
                  <td data-label="What it is">
                    Conversational, agent-first support for employees rather than customers.
                  </td>
                  <td data-label="Start with it?">
                    Different audience, different project, different sponsor.
                  </td>
                </tr>
                <tr>
                  <td>Service Cloud in Slack</td>
                  <td data-label="What it is">Reps, experts and agents collaborating on a case in a channel.</td>
                  <td data-label="Start with it?">If your experts already live in Slack, yes.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note" data-r style={d(1)}>
            Our usual first release is the first four rows, with one channel and a knowledge base somebody is paid to
            own. Everything below that line should wait until a specific, named problem justifies it.
          </p>
        </div>
      </section>

      {/* ---------------- how we'd start ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="How we would start" title="Knowledge first. Always knowledge first.">
                The single best predictor of whether a service agent performs is not the model, the vendor or the
                integration. It is whether the answers exist, in writing, in a form something can retrieve.
              </Head>
              <p className="body-t">
                Look at your own escalation reasons and you will usually find a fifth to a quarter of them are
                &ldquo;the answer was not written down anywhere&rdquo;. That is not an AI problem. It is the same
                problem that made your help centre useless, and it has been costing you for years in agent training
                and in repeat contacts.
              </p>
              <p className="body-t">
                Fixing it is unglamorous, cheap relative to the licences, and it improves service with or without an
                agent on top. It is also the work that makes every subsequent number believable.
              </p>
            </div>
            <div data-r style={d(1)}>
              <ol className="steps" style={{ marginTop: 0 }}>
                <li>
                  <div>
                    <h3>Count your top fifty questions</h3>
                    <p>
                      Not categories — actual questions, in customers&rsquo; words, ranked by volume. Most contact
                      centres have never done this and are surprised by the list.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Write the answer to each one</h3>
                    <p>
                      Once, properly, with the policy and the exceptions. Name an owner per article and a review date.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Decide what must never be automated</h3>
                    <p>
                      Complaints, vulnerability, anything with a legal or safety dimension. Write the list before
                      anyone configures anything.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Define resolution, in the contract</h3>
                    <p>
                      With repeat contact inside the window. Then set the bar you expect, before you see a result.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Run one channel, measure honestly</h3>
                    <p>
                      Including the escalations and the abandonments. Then expand to the second channel, not to the
                      fifth.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="linkrow" data-r style={{ marginTop: 34 }}>
            <Link href={productPath("data-360")}>What grounds an answer &rarr;</Link>
            <Link href="/services/salesforce/agentforce">How agents are built and governed &rarr;</Link>
            <Link href="/services/salesforce/field-service">When the fix needs a visit &rarr;</Link>
          </div>
        </div>
      </section>

      <Onward slug="service-cloud" />
      <Copyright />
      <FaqSection slug="service-cloud" title="What service leaders ask us." />

      <section>
        <div className="in">
          <Sources
            checked="Checked against Salesforce's own pages, and press coverage of the Fin acquisition in November 2026. This product is changing quickly; confirm what is native today before you sign."
            items={[
              { label: "Salesforce — Service Cloud", href: "https://www.salesforce.com/service/" },
              {
                label: "CNBC — Salesforce to buy Fin for $3.6 billion",
                href: "https://www.cnbc.com/2026/06/15/salesforce-ai-customer-service-fin-acquistion.html",
              },
            ]}
          />
        </div>
      </section>

      <CloudCta
        title="Send us your escalation reasons."
        body="Not your requirements — the list of why conversations reached a person last month, with volumes. It tells us what an agent could genuinely resolve, what should never be automated, and how much of your escalation rate is simply an answer nobody has written down yet."
        label="Book a service review"
        points={[
          "Your top fifty questions, counted",
          "Resolution defined before the contract, not after",
          "A written list of what is never automated",
          "Metrics changed before the queue changes",
        ]}
      />
    </>
  );
}
