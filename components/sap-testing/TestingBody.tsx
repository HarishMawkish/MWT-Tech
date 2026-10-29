import Link from "next/link";

/** The sections of the Test Automation page, converted from the supplied HTML. */
export function TestingBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Test Automation</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Test Automation</span>
          <h1>Test every process in hours, <em>not weeks.</em></h1>
          <p className="lede">SAP Cloud ERP changes twice a year, and your business changes more often than that. Testing by hand can't keep up: it takes your best people away from their jobs, and it still misses things. We automate the tests for your key processes with SAP's own tools, so every upgrade and every change is checked the same way, in hours.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Automate your regression tests →</a>
            <a href="#first" className="btn sec">What to automate first</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of the Test Your Processes app running a regression plan of 38 processes: 31 passed, 2 failed, 5 running, with a list of processes such as sell from stock, procurement of direct materials and the payment run">
            <div className="shell"><span className="sap">SAP</span><span className="t">Test Your Processes</span><span className="joule-btn"></span><span className="av">QA</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Test plan</div><div className="s">Monthly regression</div></div><div className="k">38</div></div>
                <div className="tile"><div><div className="h">Passed</div><div className="s">So far</div></div><div className="k pos">31</div></div>
                <div className="tile"><div><div className="h">Failed</div><div className="s">To analyse</div></div><div className="k neg">2</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Plan progress · started 06:00, no one at a keyboard</div>
                <div className="bar2" style={{ marginBottom: "8px" }}><i style={{ width: "81%", background: "#3fa45b" }}></i><i style={{ width: "5%", background: "#d04343" }}></i><i style={{ width: "14%", background: "#5899da" }}></i></div>
                <div className="row"><span>Sell from stock · LKR, company code 1000</span><span className="pill ok">Passed</span></div>
                <div className="row"><span>Procurement of direct materials</span><span className="pill ok">Passed</span></div>
                <div className="row"><span>Automatic payment run · bank file</span><span className="pill wr">Failed · step 7</span></div>
                <div className="row"><span>Period-end closing · general ledger</span><span className="pill in">Running</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of SAP's Test Automation Tool. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Four kinds of testing</span>
      <h2>Different tests, different people, different tools.</h2>
      <p className="lede">A cloud ERP project runs four kinds of tests, and the last one never stops. Automation pays off most there, because the same tests run again with every upgrade and every change, for as long as you run SAP.</p>
      <div className="users">
        <table>
          <thead><tr><th>Test</th><th>What it proves</th><th>When</th><th>Who</th></tr></thead>
          <tbody>
            <tr><td data-label="Test">Unit and role tests</td><td data-label="What it proves">Each configured step works, and each business role can do its job.</td><td data-label="When">During the build</td><td data-label="Who">Our consultants</td></tr>
            <tr><td data-label="Test">End-to-end tests</td><td data-label="What it proves">Whole processes work across modules, integrations and migrated data.</td><td data-label="When">Before acceptance</td><td data-label="Who">Our consultants, with your key users</td></tr>
            <tr><td data-label="Test">User acceptance</td><td data-label="What it proves">The people who'll use the system agree that it works for them. SAP makes this mandatory before go-live.</td><td data-label="When">Before go-live</td><td data-label="Who">Your key users</td></tr>
            <tr><td data-label="Test">Regression tests</td><td data-label="What it proves">What worked yesterday still works after an upgrade or a change.</td><td data-label="When">Every release, every change</td><td data-label="Who">Automated, checked by us</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Included with SAP Cloud ERP</span>
        <h2>SAP's test tool is already in your system.</h2>
        <p className="lede">SAP Cloud ERP includes a test automation tool at no extra cost. It runs your processes through the real screens with test users, in your test system, and records every step with screenshots. SAP provides ready-made tests that match its standard processes.</p>
        <p className="lede">We copy those tests and adapt them to your setup: your company codes, your custom fields, your approvals and your data. We record extra steps where you've extended a process, and add checks so a test proves the right result, not just that a screen opened.</p>
        <div className="facts">
          <div className="fact"><b>Free</b><span>included in the SAP Cloud ERP subscription</span></div>
          <div className="fact"><b>Standard</b><span>ready-made tests for SAP's standard processes</span></div>
          <div className="fact"><b>Evidence</b><span>every step recorded with screenshots for review</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of the Manage Your Test Processes app showing a copied test for creating a sales order with steps: open app, enter customer, read the sales order number, check the net value in LKR, a custom step for the tea grade field, and check the credit status">
          <div className="shell"><span className="sap">SAP</span><span className="t">Manage Your Test Processes</span><span className="joule-btn"></span><span className="av">QA</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Create sales order · your copy</div>
              <div className="row"><span>Based on</span><b>SAP standard test</b></div>
              <div className="row"><span>Test data</span><b>Container: Colombo customers</b></div>
              <div className="row"><span>Variant</span><b>Company code 1000 · LKR</b></div>
            </div>
            <div className="steps-t" style={{ marginTop: "10px" }}>
              <div className="st-r"><span className="no">1</span><span><b>Open</b> Manage Sales Orders</span><span className="act in">INPUT</span></div>
              <div className="st-r"><span className="no">2</span><span><b>Enter</b> customer, material, quantity</span><span className="act in">INPUT</span></div>
              <div className="st-r"><span className="no">3</span><span><b>Enter</b> tea grade (custom field)</span><span className="act q">CUSTOM ?</span></div>
              <div className="st-r"><span className="no">4</span><span><b>Read</b> sales order number for next test</span><span className="act rd">READ</span></div>
              <div className="st-r"><span className="no">5</span><span><b>Check</b> net value = LKR 1,240,000</span><span className="act chk">CHECK</span></div>
              <div className="st-r"><span className="no">6</span><span><b>Check</b> credit status = not blocked</span><span className="act chk">CHECK</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a test process. Custom steps are flagged to recheck each release. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light" id="first">
    <div className="in">
      <span className="eyebrow">What to automate first</span>
      <h2>Start where a failure would hurt most.</h2>
      <p className="lede">You don't need to automate everything. A focused set of tests on the processes that move money, goods and tax covers most of the risk. We usually start with these, then add more each release.</p>
      <div className="apps2">
        <div className="app2"><span className="n">Order to cash</span><h3>Sell, deliver, invoice, collect</h3><p>Orders with your pricing and credit checks, deliveries, invoices with VAT, and incoming payments.</p><div className="tags"><span>Sales</span><span>Finance</span></div></div>
        <div className="app2"><span className="n">Procure to pay</span><h3>Buy, receive, pay</h3><p>Requisitions and approvals, purchase orders, goods receipts, supplier invoices and the payment run.</p><div className="tags"><span>Procurement</span><span>Finance</span></div></div>
        <div className="app2"><span className="n">Record to report</span><h3>Close the month</h3><p>Journal entries, accruals, depreciation, foreign currency valuation and the period-end steps.</p><div className="tags"><span>Finance</span></div></div>
        <div className="app2"><span className="n">Plan to produce</span><h3>Plan and make</h3><p>Planning runs, production orders, confirmations and goods movements for manufacturers.</p><div className="tags"><span>Manufacturing</span></div></div>
        <div className="app2"><span className="n">Local requirements</span><h3>Tax and banks</h3><p>VAT invoice output, withholding tax, and payment files for each of your banks.</p><div className="tags"><span>Sri Lanka layer</span></div></div>
        <div className="app2"><span className="n">Roles</span><h3>The right access</h3><p>Key roles can still do their work, and can't do what they shouldn't, after every role change.</p><div className="tags"><span>Security</span></div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Beyond one system</span>
      <h2>Some processes cross systems. So should the tests.</h2>
      <p className="lede">SAP's built-in tool tests processes inside SAP Cloud ERP. When a process starts in Salesforce, passes through SAP and ends at your bank, the test has to follow it. For that, SAP offers Tricentis test automation through its partnership with Tricentis, connected to SAP Cloud ALM. We use it for the end-to-end flows that matter most.</p>
      <div className="xs">
        <svg viewBox="0 0 1000 170" style={{ fontFamily: "var(--body)" }} role="img" aria-label="A cross-system test: a won deal in Salesforce, an order and delivery in SAP Cloud ERP, an invoice reported to the tax system, and payment received from the bank, all checked by one automated test">
          <g fontSize="13" fontWeight="800">
            <rect x="10" y="40" width="200" height="64" rx="12" fill="#fff"/><text x="110" y="70" textAnchor="middle" fill="#142019">Salesforce</text><text x="110" y="90" textAnchor="middle" fontSize="11" fontWeight="600" fill="#55655e">deal marked won</text>
            <rect x="270" y="40" width="200" height="64" rx="12" fill="#0a6ed1"/><text x="370" y="70" textAnchor="middle" fill="#fff">SAP Cloud ERP</text><text x="370" y="90" textAnchor="middle" fontSize="11" fontWeight="600" fill="#d1e8ff">order, delivery, invoice</text>
            <rect x="530" y="40" width="200" height="64" rx="12" fill="#e9a23b"/><text x="630" y="70" textAnchor="middle" fill="#2b1a00">Tax system</text><text x="630" y="90" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4a3200">invoice accepted</text>
            <rect x="790" y="40" width="200" height="64" rx="12" fill="#fff"/><text x="890" y="70" textAnchor="middle" fill="#142019">Bank</text><text x="890" y="90" textAnchor="middle" fontSize="11" fontWeight="600" fill="#55655e">payment matched</text>
          </g>
          <g stroke="#7f938a" strokeWidth="2" fill="none"><path d="M210 72h52"/><path d="M470 72h52"/><path d="M730 72h52"/><path d="M256 66l8 6-8 6M516 66l8 6-8 6M776 66l8 6-8 6"/></g>
          <path d="M110 120v20h780v-20" stroke="#34b386" strokeWidth="2" fill="none" strokeDasharray="5 5"/>
          <text x="500" y="162" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#34b386">one automated test checks every hand-over</text>
        </svg>
        <ol className="xs-list"><li><b>Salesforce:</b> deal marked won.</li><li><b>SAP Cloud ERP:</b> order, delivery, invoice.</li><li><b>Tax system:</b> invoice accepted.</li><li><b>Bank:</b> payment matched.</li><li>One automated test checks every hand-over.</li></ol>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">User acceptance testing</span>
        <h2>Acceptance testing your people can actually finish.</h2>
        <p className="lede">Acceptance testing is where projects slip: testers don't know what to test, results live in spreadsheets, and nobody can say when it's done. We run it in SAP Cloud ALM, which comes with your subscription. Each tester gets their own cases for their role, step by step, and everyone sees progress in one place.</p>
        <p className="lede">Every failed step becomes a tracked defect, fixed and retested before sign-off. The record stays with your project for auditors and for the next change.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen uat" role="img" aria-label="Illustration of acceptance test progress in SAP Cloud ALM by tester: accounts payable 100 percent, sales operations 85 percent, warehouse 60 percent, production planning 40 percent, with 6 open defects">
          <div className="shell"><span className="sap">SAP</span><span className="t">Cloud ALM · Test Execution</span><span className="joule-btn"></span><span className="av">PM</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Test cases</div><div className="s">Acceptance testing</div></div><div className="k">142</div></div>
              <div className="tile"><div><div className="h">Completed</div><div className="s">Signed by testers</div></div><div className="k pos">71<small>%</small></div></div>
              <div className="tile"><div><div className="h">Open defects</div><div className="s">Being fixed</div></div><div className="k neg">6</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Progress by tester</div>
              <div className="tester"><span>Accounts payable</span><span className="bar2"><i style={{ width: "100%", background: "#3fa45b" }}></i></span><span>100%</span></div>
              <div className="tester"><span>Sales operations</span><span className="bar2"><i style={{ width: "85%", background: "#3fa45b" }}></i></span><span>85%</span></div>
              <div className="tester"><span>Warehouse</span><span className="bar2"><i style={{ width: "60%", background: "#5899da" }}></i></span><span>60%</span></div>
              <div className="tester"><span>Production planning</span><span className="bar2"><i style={{ width: "40%", background: "#e9730c" }}></i></span><span>40%</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of acceptance testing in SAP Cloud ALM. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">The part people forget</span>
        <h2>Good tests need good test data.</h2>
        <p className="lede">Most failed automated tests aren't SAP problems. They're missing test data: a customer without a credit limit, a material with no stock, a supplier whose bank details changed. We set up test data that's realistic for Sri Lanka, with valid TIN formats, LKR prices and your real organisation, and keep it in reusable test data sets.</p>
        <p className="lede">When you need production-like data in the test system, SAP offers a paid test data refresh that copies production data across and anonymises personal details. We help you decide whether it's worth it.</p>
      </div>
      <div className="includes">
        <div><h3>Reusable data sets</h3><p>Customers, products and suppliers that every test can use, kept apart from real business.</p></div>
        <div><h3>Test users</h3><p>Users with the right roles for each test, including integration users for interfaces.</p></div>
        <div><h3>Local formats</h3><p>Valid TIN and VAT numbers, LKR amounts and Sri Lankan addresses, so local checks run too.</p></div>
        <div><h3>No personal data</h3><p>Test data contains no real employee or customer details unless anonymised.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What you get from us</span>
        <h2>A test pack that keeps working.</h2>
        <p className="lede">Automated tests are software. They need to be maintained as your processes and SAP change, or they quietly stop proving anything.</p>
      </div>
      <div className="includes">
        <div><h3>Test catalogue</h3><p>Which processes are covered, which aren't, and why.</p></div>
        <div><h3>Updated every release</h3><p>Tests reviewed and repaired before each upgrade's test window opens.</p></div>
        <div><h3>Added with every change</h3><p>A new extension or process doesn't go live without its test.</p></div>
        <div><h3>Results you can read</h3><p>A short report after each run: what passed, what failed and why.</p></div>
        <div><h3>SAP's post-upgrade tests</h3><p>Set up so SAP runs its own checks on your system after each upgrade.</p></div>
        <div><h3>Your team trained</h3><p>Key users can run tests and read results without us.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official Services and Support channel on testing with SAP Cloud ALM.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=OemltROkkk8" target="_blank" rel="noopener" data-yt="OemltROkkk8" aria-label="Play on YouTube: SAP Cloud ALM: test management">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Cloud ALM</span></div><div className="big">Test management</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP Cloud ALM: test management</h3><p>How to prepare and run manual and automated tests in SAP Cloud ALM, from an SAP ALM Summit session.</p><span className="d">Services and Support from SAP · November 2021</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=0SKZ1Qa-aRE" target="_blank" rel="noopener" data-yt="0SKZ1Qa-aRE" aria-label="Play on YouTube: SAP Cloud ALM in a minute">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">Cloud ALM in a minute</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP Cloud ALM in a minute</h3><p>A one-minute introduction to SAP Cloud ALM, included with SAP cloud subscriptions.</p><span className="d">Services and Support from SAP · March 2021</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channels.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Do we have to pay for the test tool?</summary><p>No. SAP's test automation tool and SAP Cloud ALM come with SAP Cloud ERP. Tricentis test automation for cross-system tests is offered through SAP's partnership with Tricentis; we check what your SAP support agreement includes.</p></details>
        <details><summary>How many tests do we need?</summary><p>Fewer than you'd think. A few dozen well-chosen tests on your main processes cover most of the risk. We start there and add tests as you change the system.</p></details>
        <details><summary>Does automation replace our key users' testing?</summary><p>No. Automated tests check that processes still work. Key users still review what only a person can judge, such as a form layout or a new screen, and they still sign off acceptance testing.</p></details>
        <details><summary>We're already live without automated tests. Can we start now?</summary><p>Yes. We start with the processes that hurt most if they fail, have them ready before your next upgrade, and build from there.</p></details>
        <details><summary>Can the tests run in production?</summary><p>No. Tests run in your test system, so they never create real orders, postings or payments.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Be ready before the next upgrade.</h2>
          <p className="lede">In one session, we look at your processes and your last upgrade, and propose the first set of tests to automate, with the effort and the time it saves your team.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a test automation review →</Link></div>
        </div>
        <ul>
          <li>Processes that matter most</li>
          <li>Built-in tool or cross-system</li>
          <li>Test data and test users</li>
          <li>Acceptance testing in Cloud ALM</li>
          <li>Upkeep every release</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
