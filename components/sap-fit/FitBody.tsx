import Link from "next/link";
import type { CSSProperties } from "react";

/** The sections of the Fit-to-Standard Workshops page, converted from the supplied HTML. */
export function FitBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Fit-to-Standard Workshops</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Fit-to-Standard Workshops</span>
          <h1>See your business running in SAP <em>before you change a thing.</em></h1>
          <p className="lede">Traditional ERP projects begin with months of specifications describing a system nobody has seen yet. Fit-to-standard flips that around. We show your team SAP's ready-made processes working in a live system, they tell us what really has to be different, and only those gaps get built.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Plan your workshops →</a>
            <a href="#anatomy" className="btn sec">Inside a workshop</a>
          </div>
          <p className="name-note"><b>Part of every Mawkish SAP Cloud ERP project.</b> Fit-to-standard is the Explore phase of SAP Activate, SAP's method for cloud ERP. It runs the same way for GROW and RISE.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a requirements list captured during a Sell from Stock workshop, with each requirement classified by how it will be met">
            <div className="shell"><span className="sap">SAP</span><span className="t">Cloud ALM · Requirements</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Sell from Stock</div><div className="s">BD9 · Workshop 2 of 6</div></div><div className="k pos">Fits<small>with 4 changes</small></div></div>
                <div className="tile"><div><div className="h">Requirements raised</div><div className="s">This workshop</div></div><div className="k">11</div></div>
                <div className="tile"><div><div className="h">Solved by standard</div><div className="s">No build needed</div></div><div className="k pos">7</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Requirements · Sell from Stock</div>
                <div className="row"><span>Customer price list by region</span><span className="pill ok">Configuration</span></div>
                <div className="row"><span>Product grade field on sales order</span><span className="pill in">Key-user field</span></div>
                <div className="row"><span>Delivery note with company branding</span><span className="pill in">Form template</span></div>
                <div className="row"><span>Weighbridge reading at goods issue</span><span className="pill wr">Integration</span></div>
                <div className="row"><span>Separate approval for every order</span><span className="pill ok">Standard: credit check</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of requirements captured in SAP Cloud ALM during a workshop. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Why it's different</span>
      <h2>Stop describing the system you want. Start reacting to the one you'll get.</h2>
      <p className="lede">In a blueprint project, people imagine requirements and consultants write them down. Most of those requirements describe how the old system worked. Fit-to-standard starts from a working system, so the conversation is about real gaps, not habits.</p>
      <div className="vs">
        <div>
          <h3>Traditional blueprint</h3>
          <p className="sub">How ERP projects used to start</p>
          <ul>
            <li><span>Starting point</span>A blank page and interviews about the current system</li>
            <li><span>Output</span>Hundreds of pages of specifications</li>
            <li><span>Users see SAP</span>Months later, at testing</li>
            <li><span>Typical result</span>The old system rebuilt in SAP, with custom code that slows every upgrade</li>
          </ul>
        </div>
        <div className="new">
          <h3>Fit-to-standard</h3>
          <p className="sub">How SAP Cloud ERP projects start</p>
          <ul>
            <li><span>Starting point</span>SAP's preconfigured process running with sample data</li>
            <li><span>Output</span>A short list of real gaps, each with an agreed solution</li>
            <li><span>Users see SAP</span>On day one, and they click through it themselves</li>
            <li><span>Typical result</span>Mostly standard processes, a clean core and upgrades that just work</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section id="anatomy">
    <div className="in">
      <span className="eyebrow">Inside a workshop</span>
      <h2>Seven steps, the same every time.</h2>
      <p className="lede">Each workshop covers one or two business processes, such as selling from stock or paying suppliers. Two Mawkish consultants run it: one leads and demonstrates, the other records every decision as it happens.</p>
      <div className="steps">
        <div className="step"><span className="num">1</span><div><span className="tm">10 minutes</span><h3>Set the ground rules</h3></div><p>Why we're here and how decisions get made. Standard first. Separate need-to-have from nice-to-have. Configure before extending, and never change SAP's core.</p></div>
        <div className="step"><span className="num">2</span><div><span className="tm">15 minutes</span><h3>Walk through the process map</h3></div><p>SAP's documented process flow for the scope item, showing who does what and in which order, so everyone sees the whole picture before the detail.</p></div>
        <div className="step"><span className="num">3</span><div><span className="tm">The core</span><h3>Live demo in SAP</h3></div><p>We run the process end to end in a live SAP system, following SAP's own test scripts. We also show in-app help, learning simulations and Joule along the way.</p></div>
        <div className="step"><span className="num">4</span><div><span className="tm">Throughout</span><h3>Answer the configuration questions</h3></div><p>SAP's structured questionnaire for each department. Some answers were collected before the workshop, and we confirm them and capture the detailed values: number ranges, document types, approval limits.</p></div>
        <div className="step"><span className="num">5</span><div><span className="tm">Throughout</span><h3>Log every real gap</h3></div><p>Each gap goes into SAP Cloud ALM as one requirement: a custom field, a form layout, an approval rule, an integration or a report. Each one gets a named owner.</p></div>
        <div className="step"><span className="num">6</span><div><span className="tm">10 minutes</span><h3>Note the change impact</h3></div><p>Which roles will work differently, and what training they'll need. This goes straight to whoever owns change management and training.</p></div>
        <div className="step"><span className="num">7</span><div><span className="tm">30 minutes</span><h3>Hands on the keyboard</h3></div><p>Everyone gets a test login and tries the process themselves. People accept what they've used far more readily than what they've only been shown.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">When standard isn't enough</span>
        <h2>Every gap goes down the same ladder.</h2>
        <p className="lede">Not every request is a gap. And not every real gap needs code. We always solve a requirement on the lowest rung that works, because every rung higher adds cost to each future upgrade.</p>
        <div className="tests">
          <div><b>Is it required by law or a contract?</b><span>Statutory reports, tax and customer-mandated documents are real needs.</span></div>
          <div><b>Does it make customers choose you?</b><span>If it's a true differentiator, protect it. If it's just "how we've always done it", reconsider.</span></div>
          <div><b>What will it cost every six months?</b><span>Each extension has to be retested at every upgrade. Some changes aren't worth that.</span></div>
        </div>
      </div>
      <div className="ladder">
        <div className="rung"><span className="i">1</span><div><h3>Adopt the standard</h3><p>Change the way of working, not the system. More often the answer than people expect.</p></div><span className="cost c0">No upkeep</span></div>
        <div className="rung"><span className="i">2</span><div><h3>Configure</h3><p>Settings, values and rules in SAP's configuration tools.</p></div><span className="cost c0">No upkeep</span></div>
        <div className="rung"><span className="i">3</span><div><h3>Key-user extension</h3><p>Custom fields, simple logic, forms and email templates, built in the browser.</p></div><span className="cost c1">Light</span></div>
        <div className="rung"><span className="i">4</span><div><h3>Developer extension</h3><p>Upgrade-safe custom code inside the system, for logic configuration can't handle.</p></div><span className="cost c2">Moderate</span></div>
        <div className="rung"><span className="i">5</span><div><h3>Side-by-side on SAP BTP</h3><p>A separate app or integration connected through stable APIs.</p></div><span className="cost c3">Own lifecycle</span></div>
        <div className="rung never"><span className="i">×</span><div><h3>Modify SAP's core</h3><p>Not possible in SAP Cloud ERP, and strongly discouraged in Private Edition.</p></div><span className="cost c4">Never</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">A real day</span>
      <h2>Sample agenda: Order to Cash, day one.</h2>
      <p className="lede">A full day covers two or three processes that share the same people. Here's what one looks like for a distribution business.</p>
      <div className="agenda">
        <div className="ag"><span className="t">09:00</span><div><h3 style={{ fontSize: "16px" }}>Kick-off and ground rules</h3><p>Goals for the day, the cloud mindset, how decisions get recorded.</p></div><span className="who">Sales manager, customer service, credit control, billing</span></div>
        <div className="ag"><span className="t">09:20</span><div><h3 style={{ fontSize: "16px" }}>Sell from Stock <span className="sid">BD9</span></h3><p>Quotation, sales order, availability check, delivery, picking, goods issue, invoice.</p></div><span className="who">Customer service, warehouse lead</span></div>
        <div className="ag brk"><span className="t">11:00</span><p>Break</p><span></span></div>
        <div className="ag"><span className="t">11:15</span><div><h3 style={{ fontSize: "16px" }}>Pricing and credit</h3><p>Price lists, discounts, credit limits and blocked orders, using the questionnaire values.</p></div><span className="who">Sales manager, credit control</span></div>
        <div className="ag"><span className="t">12:30</span><div><h3 style={{ fontSize: "16px" }}>Hands-on: create and ship your own order</h3><p>Every attendee runs an order end to end with a test login.</p></div><span className="who">All</span></div>
        <div className="ag brk"><span className="t">13:15</span><p>Lunch</p><span></span></div>
        <div className="ag"><span className="t">14:00</span><div><h3 style={{ fontSize: "16px" }}>Accounts Receivable <span className="sid">J59</span></h3><p>Incoming payments, clearing, dunning, customer statements.</p></div><span className="who">Billing, finance</span></div>
        <div className="ag"><span className="t">16:00</span><div><h3 style={{ fontSize: "16px" }}>Requirements review</h3><p>Read back every gap logged today, agree the rung on the ladder, name an owner.</p></div><span className="who">All, plus process owner</span></div>
        <div className="ag"><span className="t">16:45</span><div><h3 style={{ fontSize: "16px" }}>Change impact and close</h3><p>What changes for whom, training needs, open questions for next time.</p></div><span className="who">All</span></div>
      </div>
      <p className="note">Scope item codes such as BD9 and J59 are SAP's own references for best-practice processes, documented in SAP Signavio Process Navigator.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Preparation</span>
      <h2>Good workshops are decided before they start.</h2>
      <p className="lede">Most failed workshops fail for the same reasons: the wrong people in the room, too many processes in one day, or arguing about the chart of accounts in the middle of a sales session. We plan around all three.</p>
      <div className="prep">
        <div className="cap"><h3>The right people</h3><p>Two to four people per role who actually do the work, not only their managers. Leadership tells line managers these sessions come first. The same people come back for testing, so they become your champions at go-live.</p></div>
        <div className="cap"><h3>The right pace</h3><p>One or two processes per half day, two or three per full day. We size each workshop by the length of SAP's test script and time a dry run beforehand.</p></div>
        <div className="cap"><h3>The right order</h3><p>Chart of accounts and organisation structure come first, because everything else depends on them. After that, departments can run in parallel.</p></div>
      </div>
      <div className="seq">
        <svg viewBox="0 0 1000 170" role="img" aria-label="Workshop sequence: first chart of accounts and organisation structure, then finance, sales, procurement and operations workshops in parallel, then a cross-department review.">
          <g style={{ fontFamily: "var(--body)" }} fontSize="13">
            <rect x="10" y="30" width="200" height="44" rx="10" style={{ fill: "var(--green)" }}/><text x="110" y="57" textAnchor="middle" fill="#fff" fontWeight="700">Chart of accounts</text>
            <rect x="10" y="96" width="200" height="44" rx="10" style={{ fill: "var(--green)" }}/><text x="110" y="123" textAnchor="middle" fill="#fff" fontWeight="700">Organisation structure</text>
            <path d="M220 85 H300" style={{ stroke: "var(--muted)" }} strokeWidth="2"/><path d="M292 79 l8 6 -8 6" fill="none" style={{ stroke: "var(--muted)" }} strokeWidth="2"/>
            <rect x="320" y="8" width="380" height="34" rx="8" style={{ fill: "var(--bg-2)", stroke: "var(--line)" }}/><text x="340" y="30" style={{ fill: "var(--fg)" }}>Finance: record to report, payables, receivables</text>
            <rect x="320" y="48" width="380" height="34" rx="8" style={{ fill: "var(--bg-2)", stroke: "var(--line)" }}/><text x="340" y="70" style={{ fill: "var(--fg)" }}>Sales: order to cash</text>
            <rect x="320" y="88" width="380" height="34" rx="8" style={{ fill: "var(--bg-2)", stroke: "var(--line)" }}/><text x="340" y="110" style={{ fill: "var(--fg)" }}>Procurement: source to pay</text>
            <rect x="320" y="128" width="380" height="34" rx="8" style={{ fill: "var(--bg-2)", stroke: "var(--line)" }}/><text x="340" y="150" style={{ fill: "var(--fg)" }}>Operations: plan, make, store</text>
            <path d="M710 85 H790" style={{ stroke: "var(--muted)" }} strokeWidth="2"/><path d="M782 79 l8 6 -8 6" fill="none" style={{ stroke: "var(--muted)" }} strokeWidth="2"/>
            <rect x="800" y="63" width="190" height="44" rx="10" style={{ fill: "var(--fg)" }}/><text x="895" y="90" textAnchor="middle" fill="#ffffff" fontWeight="700">Cross-team review</text>
            <text x="10" y="20" style={{ fill: "var(--muted)" }} fontSize="11" fontWeight="700" letterSpacing="1.5">FIRST</text>
            <text x="320" y="4" style={{ fill: "var(--muted)" }} fontSize="11" fontWeight="700" letterSpacing="1.5"> </text>
          </g>
        </svg>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Decide early</span>
        <h2>A few decisions can't be undone later.</h2>
        <p className="lede">In SAP Cloud ERP, most settings can be changed whenever you need to. A handful are fixed once saved, and changing them later means rebuilding the system. We bring these to your leadership in the first week, with a recommendation, so nobody makes them by accident.</p>
      </div>
      <div className="locks">
        <div className="lock"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="14" height="10" rx="2"/><path d="M7 10V7a4 4 0 0 1 8 0v3"/></svg><div><h3>Accounting standards</h3><p>Which parallel ledgers you run, such as local GAAP, IFRS or US GAAP. They can't be added later.</p></div></div>
        <div className="lock"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="14" height="10" rx="2"/><path d="M7 10V7a4 4 0 0 1 8 0v3"/></svg><div><h3>Fiscal year</h3><p>Your financial calendar and special closing periods, one for the whole system.</p></div></div>
        <div className="lock"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="14" height="10" rx="2"/><path d="M7 10V7a4 4 0 0 1 8 0v3"/></svg><div><h3>Group currency</h3><p>The currency your group reports in, across every company.</p></div></div>
        <div className="lock"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="14" height="10" rx="2"/><path d="M7 10V7a4 4 0 0 1 8 0v3"/></svg><div><h3>Organisation units</h3><p>Once confirmed, companies, plants and sales organisations can't be deleted.</p></div></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What you walk away with</span>
      <h2>Workshops that feed straight into the build.</h2>
      <p className="lede">Nothing gets retyped into a specification. Everything captured in the workshops goes straight into the build and the test plan.</p>
      <div className="outs">
        <div className="cap"><span className="tag2">In SAP Cloud ALM</span><h3>Requirements backlog</h3><p>Every gap, its rung on the ladder, its owner and its status, traceable through to testing.</p></div>
        <div className="cap"><span className="tag2">In SAP's configuration tool</span><h3>Configuration values</h3><p>The detailed settings from the questionnaires, ready to be applied in the development system.</p></div>
        <div className="cap"><span className="tag2">For security</span><h3>Roles and data owners</h3><p>Who does what, and who owns which data. This is the basis for role design. SAP's standard demo roles never go to production.</p></div>
        <div className="cap"><span className="tag2">For change management</span><h3>Change impact log</h3><p>Which roles change and how, with training needs and expected pain points.</p></div>
        <div className="cap"><span className="tag2">For testing</span><h3>Acceptance test plan</h3><p>Test cases built from the processes you approved. The same experts run them and sign off before go-live.</p></div>
        <div className="cap"><span className="tag2">For go-live</span><h3>Your champions</h3><p>The people who sat through the workshops already know the system. They become the go-to people in each department.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Can't we just keep our current processes?</summary><p>Some, yes. But many current processes are workarounds for the limits of the old system. In the workshop you'll see whether SAP's standard already solves the problem. When it doesn't and the need is real, we'll find the simplest upgrade-safe way to support it.</p></details>
        <details><summary>How many workshops will we need?</summary><p>It depends on how many processes are in scope. A mid-sized company implementing finance, sales, procurement and inventory typically needs eight to fifteen workshop days, spread over three to five weeks, with departments running in parallel after the finance foundations are set.</p></details>
        <details><summary>Do our people need SAP experience?</summary><p>No. They need to know their own work well. We explain the SAP side, and the hands-on session at the end of each workshop is where they get comfortable with it.</p></details>
        <details><summary>What if two departments want different things?</summary><p>That's normal, and the workshop is the right place to find out. We log both views, show how the standard handles it, and bring a decision to the process owner or steering committee. Decisions are recorded in SAP Cloud ALM, so they don't get reopened later.</p></details>
        <details><summary>Is this only for GROW with SAP?</summary><p>No. Fit-to-standard is SAP's method for every cloud ERP project. For RISE projects that convert an existing system, we use it to review processes and decide what to simplify during the move.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book" className="light">
    <div className="in">
      <div className="cta-band" style={{ color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as CSSProperties}>
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Let your team see SAP before anyone signs off a requirement.</h2>
          <p className="lede">We'll plan your workshop calendar, who should attend, and how long each session needs, based on your scope.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Plan your workshops →</Link></div>
        </div>
        <ul>
          <li>Live demos in SAP, not slides</li>
          <li>Gaps solved on the lowest rung that works</li>
          <li>Every decision recorded in SAP Cloud ALM</li>
          <li>Irreversible choices flagged in week one</li>
          <li>Your people ready to champion go-live</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
