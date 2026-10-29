import Link from "next/link";

/** The sections of the Joule & AI Agents page, converted from the supplied HTML. */
export function JouleBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Joule &amp; AI Agents</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Joule &amp; AI Agents</span>
          <h1>Ask SAP. Then let it <em>do the work.</em></h1>
          <p className="lede">Joule is SAP's AI assistant, built into SAP Cloud ERP. Ask it a question in plain English and it finds the answer in your live data. Ask it to act and it opens the right app with the fields filled in. SAP's AI agents go further: they take on whole tasks, such as clearing open items or fixing blocked orders, and hand you only the decisions. We help you put both to work, safely.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">See Joule on your processes →</a>
            <a href="#agents" className="btn sec">Agents available today</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of Joule in SAP Cloud ERP: a sales user asks why the order for Lanka Retail Holdings is blocked, and Joule answers that the customer is over its credit limit by LKR 1.2 million with two invoices overdue more than 60 days, and offers actions to request a credit increase, send a payment reminder or open the customer's account">
            <div className="shell"><span className="sap">SAP</span><span className="t">Manage Sales Orders</span><span className="joule-btn"></span><span className="av">SO</span></div>
            <div className="body-pad">
              <div className="jgrid">
                <div className="joule">
                  <div className="jh"><i></i>Joule</div>
                  <div className="msgs">
                    <div className="bub u">Why is the Lanka Retail order 1047 blocked?</div>
                    <div className="bub j">It's on <b>credit block</b>. Lanka Retail Holdings is <b>LKR 1.2m</b> over its credit limit, and <b>2 invoices</b> are more than 60 days overdue.
                      <div className="acts"><span>Request credit increase</span><span>Send reminder</span><span>Open account</span></div>
                    </div>
                    <div className="bub u">Send the reminder and copy the account manager.</div>
                    <div className="bub j">Done. Reminder sent for <b>2 invoices</b>, copied to Dilshan.</div>
                  </div>
                </div>
                <div className="card-f">
                  <div className="h">Order 1047</div>
                  <div className="row"><span>Customer</span><span>Lanka Retail</span></div>
                  <div className="row"><span>Net value</span><span>LKR 3.4m</span></div>
                  <div className="row"><span>Credit</span><span className="pill wr">Blocked</span></div>
                  <div className="row"><span>Delivery</span><span className="pill in">Waiting</span></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of Joule in SAP Cloud ERP. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Joule, assistants and agents</span>
      <h2>From answering questions to doing the work.</h2>
      <p className="lede">SAP's AI comes in layers. Each one does more on its own, and each one works within the same roles and authorisations as the person it works for.</p>
      <div className="users">
        <table>
          <thead><tr><th>Layer</th><th>What it does</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td data-label="Layer">Joule</td><td data-label="What it does">Answers questions from your live data, finds apps, explains errors, and starts tasks for you to finish.</td><td data-label="Example">“Show overdue invoices for Lanka Retail.”</td></tr>
            <tr><td data-label="Layer">Joule Work</td><td data-label="What it does">One place to work across SAP, your files and other systems, on desktop, web and mobile.</td><td data-label="Example">Prepare a customer meeting from SAP data and your notes.</td></tr>
            <tr><td data-label="Layer">Assistants</td><td data-label="What it does">Look after a whole area, such as accounts receivable or financial closing, and run its routine steps.</td><td data-label="Example">Prepare collections, send reminders, open disputes.</td></tr>
            <tr><td data-label="Layer">Agents</td><td data-label="What it does">Carry out one specific task end to end and report back.</td><td data-label="Example">Match and clear open receivables and payables.</td></tr>
            <tr><td data-label="Layer">Your own agents</td><td data-label="What it does">Built in Joule Studio for tasks that are specific to your business.</td><td data-label="Example">Check supplier invoices against your own rules.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section id="agents">
    <div className="in two">
      <div>
        <span className="eyebrow">Available today</span>
        <h2>Agents that already work in SAP Cloud ERP.</h2>
        <p className="lede">SAP releases new agents and assistants every quarter. These are some that work in SAP Cloud ERP now. Some are generally available, some are in early release; we check which apply to your release and country.</p>
        <div className="ag-list">
          <div className="ag"><span className="a">Finance</span><h3>Receivables and payables clearing</h3><p>Matches open items and proposes clearing.</p></div>
          <div className="ag"><span className="a">Finance</span><h3>Financial closing</h3><p>Helps with accruals, journal entries and close checks.</p></div>
          <div className="ag"><span className="a">Sales</span><h3>Sales operations</h3><p>Resolves billing, credit and delivery blocks.</p></div>
          <div className="ag"><span className="a">Compliance</span><h3>E-invoicing errors</h3><p>Finds and fixes rejected electronic invoices.</p></div>
          <div className="ag"><span className="a">Manufacturing</span><h3>Production planning</h3><p>Checks components and flags scheduling conflicts.</p></div>
          <div className="ag"><span className="a">Trade</span><h3>Trade classification</h3><p>Proposes customs codes for your products.</p></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of an agent's work log: the receivables and payables clearing agent reviewed 214 open items overnight, cleared 188 automatically under the rules you set, and left 26 for review, with a list of proposals including a partial payment, a short payment explained by a bank charge, and a payment with no matching invoice">
          <div className="shell"><span className="sap">SAP</span><span className="t">Clearing Agent · overnight run</span><span className="joule-btn"></span><span className="av">AR</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Open items</div><div className="s">Reviewed</div></div><div className="k">214</div></div>
              <div className="tile"><div><div className="h">Cleared</div><div className="s">Within your rules</div></div><div className="k pos">188</div></div>
              <div className="tile"><div><div className="h">For you</div><div className="s">Needs a decision</div></div><div className="k neg">26</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Waiting for your decision</div>
              <div className="row"><span>Harbour Foods · paid LKR 1,500 short · bank charge</span><span className="pill in">Write off?</span></div>
              <div className="row"><span>Kandy Hotels · part payment of 3 invoices</span><span className="pill in">Confirm split</span></div>
              <div className="row"><span>Unknown payer · LKR 240,000</span><span className="pill wr">No match</span></div>
              <div className="row"><span>Southern Traders · 4 invoices</span><span className="pill ok">Cleared</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of an SAP agent's results. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">You stay in charge</span>
      <h2>You decide how much it does on its own.</h2>
      <p className="lede">An agent doesn't have to act alone from day one. SAP lets you set how much each assistant can do without asking. We start every agent at the safest level, measure how often its proposals are right, and only give it more freedom when the numbers support it.</p>
      <div className="lvls">
        <div className="lvl"><span className="n">Level 1</span><div className="meter"><i className="on"></i><i></i><i></i></div><h3>Suggest</h3><p>The agent finds the work and proposes what to do. A person reviews and decides every case.</p><div className="eg">Where every agent starts</div></div>
        <div className="lvl"><span className="n">Level 2</span><div className="meter"><i className="on"></i><i className="on"></i><i></i></div><h3>Prepare</h3><p>The agent prepares the documents. A person approves them in one click, or sends them back.</p><div className="eg">After proposals prove reliable</div></div>
        <div className="lvl"><span className="n">Level 3</span><div className="meter"><i className="on"></i><i className="on"></i><i className="on"></i></div><h3>Act and report</h3><p>The agent acts within rules you set, such as a value limit, and reports what it did. Exceptions still come to a person.</p><div className="eg">For high-volume, low-risk work</div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Joule Studio</span>
        <h2>Build agents for the work only your business does.</h2>
        <p className="lede">SAP's agents cover common tasks. Your business has its own. In Joule Studio we build skills and agents for them: you describe the goal, we give the agent the SAP data and actions it needs, set its rules and approvals, and test it with your data.</p>
        <p className="lede">Agents can work across systems, not just SAP. Through open standards for connecting AI to other tools and to other agents, an agent can read a shared mailbox, update Salesforce or check a supplier portal as part of the same task.</p>
        <div className="facts">
          <div className="fact"><b>Skills</b><span>reusable actions Joule can run on request</span></div>
          <div className="fact"><b>Agents</b><span>multi-step tasks with your rules</span></div>
          <div className="fact"><b>Open</b><span>works with SAP and other systems</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of an agent definition in Joule Studio: a supplier invoice checker agent whose goal is to check invoices from a shared mailbox against purchase orders and goods receipts, with SAP tools for purchase orders, goods receipts and supplier invoices, an external mailbox tool, rules allowing up to 2 percent price variance, and approval by the accounts payable lead above LKR 500,000">
          <div className="shell"><span className="sap">SAP</span><span className="t">Joule Studio · Agent Builder</span><span className="joule-btn"></span><span className="av">MT</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Supplier invoice checker · draft</div>
              <div className="cfg"><span>Goal</span><span>Check invoices from the AP mailbox against the purchase order and goods receipt, then post or route them.</span></div>
              <div className="cfg"><span>Tools</span><span className="chips"><span>Purchase orders</span><span>Goods receipts</span><span>Supplier invoices</span><span className="ext">AP mailbox</span></span></div>
              <div className="cfg"><span>Rules</span><span>Price variance up to 2%. Quantity must match the goods receipt.</span></div>
              <div className="cfg"><span>Approval</span><span>AP lead above LKR 500,000</span></div>
              <div className="cfg"><span>Status</span><span><span className="pill in">Testing with last month's invoices</span></span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of an agent in SAP Joule Studio. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">How we work</span>
        <h2>Real tasks, measured results.</h2>
        <p className="lede">Many companies switch Joule on and then nobody uses it. We start the other way round: with the tasks your people repeat every day, and a clear number for each. Then we pick the SAP agent or Joule skill that fits, train your users on the questions that matter to their job, and report what it saves.</p>
        <p className="lede">Joule and agents only see what each person's roles allow, so good role design comes first. We check it before anything goes live.</p>
      </div>
      <div className="includes">
        <div><h3>Task review</h3><p>The repeated work in each team, with time and volumes.</p></div>
        <div><h3>Pilot</h3><p>One or two agents tried with your data in the test system.</p></div>
        <div><h3>Guardrails</h3><p>Autonomy levels, value limits and approvals agreed and set.</p></div>
        <div><h3>User training</h3><p>Short, job-specific sessions on what to ask Joule.</p></div>
        <div><h3>Usage and cost</h3><p>Adoption and premium AI use tracked every month.</p></div>
        <div><h3>New releases</h3><p>New SAP agents reviewed each quarter for fit.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channel on Joule and AI agents.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=DnIUOHMjowc" target="_blank" rel="noopener" data-yt="DnIUOHMjowc" aria-label="Play on YouTube: Joule: Work, AI Assistants and Platform">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">Joule in 2 minutes</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Joule: Work, AI Assistants and Platform</h3><p>A short overview of Joule Work, SAP’s AI assistants and the platform behind them.</p><span className="d">SAP · May 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=r0KiK90ty34" target="_blank" rel="noopener" data-yt="r0KiK90ty34" aria-label="Play on YouTube: Joule Studio: build AI agents and apps in minutes">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Joule Studio</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Joule Studio: build AI agents and apps in minutes</h3><p>A demo of building an agent in Joule Studio, from goal to tools to testing.</p><span className="d">SAP · May 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Is Joule included in SAP Cloud ERP?</summary><p>Joule's basic features are included. Assistants, agents and some advanced features are premium AI, licensed separately and charged by use. We tell you which is which for each use case.</p></details>
        <details><summary>Can an agent do something it shouldn't?</summary><p>Agents work within the roles and authorisations of the user they act for, and within the autonomy level, limits and approvals you set. Their actions are recorded, so you can always see what was done and why.</p></details>
        <details><summary>Does Joule understand our company's terms?</summary><p>Joule works on your live SAP data, so it knows your customers, products and documents. Your own terms, such as product nicknames, can be taught through custom skills and grounding in your own documents.</p></details>
        <details><summary>Can agents work with our non-SAP systems?</summary><p>Yes. Agents built in Joule Studio can connect to other systems and to other companies' agents through open standards. We check what each system supports.</p></details>
        <details><summary>Where should we start?</summary><p>With one high-volume task that annoys your team, such as clearing open items or resolving blocked orders. Prove it there, then expand.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Give your team an assistant that knows your business.</h2>
          <p className="lede">In one session, we show Joule and SAP's agents on processes like yours, find the tasks where they'd save most, and propose a pilot with clear guardrails and a clear measure of success.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a Joule session →</Link></div>
        </div>
        <ul>
          <li>Joule on your processes</li>
          <li>Agents that fit your work</li>
          <li>Autonomy and guardrails</li>
          <li>Custom agents in Joule Studio</li>
          <li>Adoption measured monthly</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
