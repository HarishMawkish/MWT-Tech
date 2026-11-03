import Link from "next/link";
import { Copyright, CtaBand, Crumbs, FaqSection, Head, Kicker, Onward, RelatedGrid } from "../parts";
import { Fig, Row, Screen, Tile } from "../screens";
import { dbPath } from "../data";

/**
 * Databricks Apps — application development. The page's argument: the slow part of an internal tool has never been
 * the code, it is the server and the security review, and that is precisely what this removes.
 */
export function AppsBody() {
  return (
    <>
      <section className="hero">
        <div className="in">
          <Crumbs here="Databricks Apps" />
          <div className="hero-grid">
            <div>
              <Kicker>Application development</Kicker>
              <h1>
                The internal tool that took three months. <em>Minus the three months.</em>
              </h1>
              <p className="lede">
                Think about the last small internal tool your organisation built — a review queue, an approval screen,
                a planning sheet with real data behind it. Now count where the time went. Almost none of it was the
                interface. It was finding somewhere to run it, getting sign-in working, passing a security review for a
                server nobody wanted to own, and arguing about who holds the database credential. Databricks Apps
                deletes that list.
              </p>
              <div className="ctas">
                <a href="#security" className="btn pri">
                  The part that is actually the product <span className="ar">&rarr;</span>
                </a>
                <a href="#first" className="btn sec">
                  Four to build first
                </a>
              </div>
            </div>

            <Fig caption="Our illustration of an internal app built this way. Sample data.">
              <Screen
                title="App · Stock cover review"
                user="SC"
                label="Illustration of an internal application showing 38 items below reorder point, 11 awaiting a buyer decision and 4 flagged by the forecast, a list of four items each with days of cover and a suggested order quantity, and a footer showing the app runs on serverless compute, signs users in through single sign-on and reads data through Unity Catalog"
              >
                <div className="body-pad">
                  <div className="tiles">
                    <Tile h="Below reorder point" s="Live, from the lakehouse" k="38" tone="neg" />
                    <Tile h="Awaiting a buyer" s="Written back to Lakebase" k="11" tone="own" />
                    <Tile h="Forecast flagged" s="ai_forecast, nightly" k="4" />
                  </div>
                  <div className="card-f" style={{ marginTop: "9px" }}>
                    <div className="h">
                      Needs a decision today
                      <span className="m">sorted by days of cover</span>
                    </div>
                    <Row l="SKU 41082 · 500ml PET" r="2.1 days · order 14,400" pill={{ k: "er", t: "Urgent" }} />
                    <Row l="SKU 38817 · 1L glass" r="4.6 days · order 6,000" pill={{ k: "wr", t: "Soon" }} />
                    <Row l="SKU 52140 · carton 24s" r="6.8 days · order 2,400" pill={{ k: "wr", t: "Soon" }} />
                    <Row l="SKU 11093 · 330ml can" r="9.2 days · no action" pill={{ k: "ok", t: "Fine" }} />
                  </div>
                  <div className="card-f">
                    <div className="h">How it runs</div>
                    <Row l="Compute" r="serverless, provisioned automatically" pill={{ k: "ok", t: "No server" }} />
                    <Row l="Sign-in" r="your SSO, via OIDC" pill={{ k: "ok", t: "No login code" }} />
                    <Row l="Data" r="through Unity Catalog" pill={{ k: "own", t: "Governed" }} />
                  </div>
                </div>
              </Screen>
            </Fig>
          </div>
        </div>
      </section>

      {/* ---------------- why they take so long ---------------- */}
      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="The diagnosis" title="Where the three months actually went.">
              We have watched this happen in enough organisations to be confident about the breakdown. If your
              experience differs, it is usually because the project was abandoned at step three rather than because it
              went faster.
            </Head>
          </div>
          <div className="meters" data-r>
            <div className="meter-row dim">
              <span className="nm">Writing the interface</span>
              <span className="meter">
                <i style={{ width: "11%" }} />
              </span>
              <span className="v">~1 week</span>
            </div>
            <div className="meter-row">
              <span className="nm">Finding somewhere to run it</span>
              <span className="meter">
                <i style={{ width: "40%" }} />
              </span>
              <span className="v">~3 weeks</span>
            </div>
            <div className="meter-row">
              <span className="nm">Sign-in and permissions</span>
              <span className="meter">
                <i style={{ width: "33%" }} />
              </span>
              <span className="v">~2.5 weeks</span>
            </div>
            <div className="meter-row">
              <span className="nm">Security review of the server</span>
              <span className="meter">
                <i style={{ width: "62%" }} />
              </span>
              <span className="v">~5 weeks</span>
            </div>
            <div className="meter-row">
              <span className="nm">Who holds the data credential</span>
              <span className="meter">
                <i style={{ width: "27%" }} />
              </span>
              <span className="v">~2 weeks</span>
            </div>
          </div>
          <p className="note" data-r>
            Illustrative, from projects we have been part of rather than from a study. The proportions are the point:
            roughly one part building and nine parts everything else. Every one of those nine is a thing Databricks
            Apps supplies as a default rather than a project.
          </p>
        </div>
      </section>

      {/* ---------------- what you get ---------------- */}
      <section>
        <div className="in">
          <div className="two">
            <div data-r>
              <Head eyebrow="What you get" title="Python you already know, hosted for you.">
                Nothing exotic. Dash, Gradio and Streamlit — the three frameworks a data team can already use — with
                pre-built templates to start from, developed either in the workspace or in your own editor through the
                Databricks extension for VS Code or the PyCharm integration.
              </Head>
              <p className="body-t">
                Apps run on serverless compute that is provisioned automatically, so there is no instance to size,
                patch or forget about. Git version control and CI/CD pipelines are supported, which means an app is a
                repository like anything else — reviewed, branched, and rolled back when needed.
              </p>
              <p className="body-t">
                That last point sounds administrative and is the difference between a tool and a liability. The
                internal tools that haunt organisations are the ones with no repository, no owner and no way back to
                last week&rsquo;s version.
              </p>
              <div className="chips">
                <span>Streamlit</span>
                <span>Dash</span>
                <span>Gradio</span>
                <span>Pre-built templates</span>
                <span>VS Code extension</span>
                <span>PyCharm integration</span>
                <span>Git</span>
                <span>CI/CD</span>
              </div>
            </div>
            <div data-r id="security">
              <Head eyebrow="Security" title="This is the actual product.">
                Everything above is convenience. This is the bit that removes the five weeks.
              </Head>
              <ul className="cap" style={{ marginTop: "24px", listStyle: "none" }}>
                <li>
                  <b>Users are signed in automatically</b> through OIDC and OAuth 2.0 with your single sign-on. You
                  write no login code and store no passwords.
                </li>
                <li>
                  <b>Access is granted per app</b>, so &ldquo;who can open this&rdquo; is a permission rather than an
                  obscure URL.
                </li>
                <li>
                  <b>App-to-app communication uses service principals</b> that Databricks manages, rather than a
                  long-lived token in a config file.
                </li>
                <li>
                  <b>Data access goes through Unity Catalog</b>, so the app sees exactly what its user is allowed to
                  see — row filters and column masks included.
                </li>
                <li>
                  <b>The app inherits the workspace&rsquo;s networking protections</b>, which means it is covered by
                  controls your security team has already reviewed.
                </li>
                <li>
                  <b>Data stays within the organisation</b> unless a user chooses to share it, per Databricks&rsquo;
                  own statement.
                </li>
              </ul>
              <p className="note">
                Read that list again as a security reviewer would. Almost every question they would ask has a default
                answer, and the answers point at controls already approved for the platform. That is why this is fast —
                not because the hosting is clever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- four to build first ---------------- */}
      <section className="light" id="first">
        <div className="in">
          <div data-r>
            <Head eyebrow="Where to start" title="Four apps that pay for themselves quickly." wide>
              The pattern that works: take a decision currently made in a spreadsheet emailed between three people,
              and give it a screen that reads governed data and writes the decision back. These four come up again and
              again.
            </Head>
          </div>
          <div className="caps four-up" data-r>
            <div className="cap">
              <span className="n">01</span>
              <h3>A review queue</h3>
              <p>
                Anything with an exception list: invoices that failed a check, orders on credit block, stock below
                reorder point. The data is already in the lakehouse; what is missing is somewhere to action it and a
                record of who did.
              </p>
              <div className="foot">
                <b>Replaces</b> a spreadsheet and a mail thread
              </div>
            </div>
            <div className="cap">
              <span className="n">02</span>
              <h3>A planning screen</h3>
              <p>
                A forecast from <code>ai_forecast</code> beside the buyer&rsquo;s own judgement, with the override
                captured as data rather than lost in a conversation. The overrides become the most valuable training
                data you have.
              </p>
              <div className="foot">
                <b>Replaces</b> a monthly planning workbook
              </div>
            </div>
            <div className="cap">
              <span className="n">03</span>
              <h3>A front end for an agent</h3>
              <p>
                A question box, an answer with its sources, a thumbs-down that files a real report to the space owner.
                This is how an agent gets evaluated by the people who know the right answers.
              </p>
              <div className="foot">
                <Link href={dbPath("agent-bricks")}>
                  <b>With Agent Bricks &rarr;</b>
                </Link>
              </div>
            </div>
            <div className="cap">
              <span className="n">04</span>
              <h3>A data quality console</h3>
              <p>
                The expectations your pipelines are already evaluating, shown to the business owners of each domain
                rather than only to the data team. Ownership follows visibility.
              </p>
              <div className="foot">
                <Link href={dbPath("lakeflow")}>
                  <b>With Lakeflow expectations &rarr;</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- the line ---------------- */}
      <section>
        <div className="in">
          <div data-r>
            <Head eyebrow="The limits" title="Keep one line very clear.">
              This ties an application&rsquo;s lifecycle to your data platform. For an internal tool that is exactly
              right — the platform is where the data, the permissions and the identities already are. For a
              customer-facing product it is exactly wrong, and the fact that it would technically work is not a reason
              to do it.
            </Head>
          </div>
          <div className="vs" data-r>
            <div className="good">
              <span className="lab">Build it here</span>
              <h3>Internal, data-shaped, few hundred users</h3>
              <ul>
                <li>Used by named colleagues who already have accounts.</li>
                <li>Its value is the governed data behind it.</li>
                <li>It needs to exist this month, not next quarter.</li>
                <li>Its availability requirement is &ldquo;working hours&rdquo;.</li>
              </ul>
            </div>
            <div>
              <span className="lab">Build it elsewhere</span>
              <h3>Customer-facing, or a product</h3>
              <ul>
                <li>Anonymous or customer sign-in, at unpredictable scale.</li>
                <li>A release cycle that must not depend on your data platform.</li>
                <li>A latency or availability commitment to someone outside the company.</li>
                <li>A front end that is itself the thing you sell.</li>
              </ul>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">i</span>
            <div>
              <h3>What Databricks publishes, and what it does not</h3>
              <p>
                Its customer notes praise one specific thing: getting something real into colleagues&rsquo; hands
                without an infrastructure conversation. SAE International describes turning a retrieval proof of
                concept into a polished, branded application; E.ON describes demoing and testing with users without
                extra infrastructure; Addi describes saving several rounds with security and infrastructure teams and
                sharing in production immediately.
              </p>
              <p>
                There are no performance, scale or adoption figures published at all. Take the product at the level
                its own evidence supports: an excellent way to make something real quickly, not a general-purpose
                application platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="in">
          <div data-r>
            <Head eyebrow="Read next" title="What an app usually needs beside it.">
              Data to read, somewhere to write, and an answer to give.
            </Head>
          </div>
          <RelatedGrid slugs={["lakebase", "genie", "agent-bricks"]} cols={3} />
        </div>
      </section>

      <Onward slug="apps" />
      <Copyright />
      <FaqSection slug="apps" title="What people ask about internal apps." />

      <CtaBand
        title="Name the spreadsheet that runs part of your business."
        body="Every organisation has one: emailed between three people, with a decision made in it that matters. Tell us which one. We will build it as an app over governed data in a fortnight, capture the decisions as data, and leave you with a repository, an owner and a way back to last week's version."
        label="Book an app sprint"
        points={[
          "One real decision, one screen",
          "Sign-in through your existing SSO",
          "Data read through Unity Catalog permissions",
          "Decisions captured as data, not conversation",
          "A repository, a pipeline and a rollback",
        ]}
      />
    </>
  );
}
