import Link from "next/link";

/** The sections of the Application Management Support page, converted from the supplied HTML. */
export function SupportBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Application Management Support</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Application Management Support</span>
          <h1>Go-live is the start. <em>We keep SAP working for you.</em></h1>
          <p className="lede">SAP runs the cloud system for you: servers, backups, security and upgrades. What SAP doesn't do is know your business. When a payment run misses a supplier, a bank file doesn't reach the bank, or finance needs a new approval rule, you need people who know your setup. That's our application management service, from Colombo, in your time zone.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Talk about support →</a>
            <a href="#who" className="btn sec">Who does what?</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of an operations overview in SAP Cloud ALM: 3 open incidents, 2 integration errors, all background jobs successful, and a list of alerts including a bank payment file not acknowledged and a VAT submission completed">
            <div className="shell"><span className="sap">SAP</span><span className="t">Cloud ALM · Operations Overview</span><span className="joule-btn"></span><span className="av">MT</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Open incidents</div><div className="s">All priorities</div></div><div className="k">3</div></div>
                <div className="tile"><div><div className="h">Integration errors</div><div className="s">Last 24 hours</div></div><div className="k neg">2</div></div>
                <div className="tile"><div><div className="h">Background jobs</div><div className="s">Successful today</div></div><div className="k pos">100<small>%</small></div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Alerts · Production</div>
                <div className="row"><span>Payment file to bank · no acknowledgement after 2 h</span><span className="pill wr">Investigating</span></div>
                <div className="row"><span>Order from online store · customer not found</span><span className="pill wr">Assigned</span></div>
                <div className="row"><span>VAT invoice submission to tax portal · 412 sent</span><span className="pill ok">Completed</span></div>
                <div className="row"><span>Month-end depreciation run · company code 1000</span><span className="pill ok">Completed</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of operations monitoring in SAP Cloud ALM. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="who">
    <div className="in">
      <span className="eyebrow">Who does what after go-live</span>
      <h2>SAP runs the system. We run your solution.</h2>
      <p className="lede">In the cloud, support is shared in a new way. SAP looks after the system itself, and most problems are no longer technical. They're about how the system is set up for your business, how people use it, and how it connects to everything else. That middle layer is our job.</p>
      <div className="who3">
        <div><span className="k">SAP</span><h3>The cloud service</h3>
          <ul><li>Data centres, servers and the database</li><li>Availability, backups and disaster recovery</li><li>Security patches and monitoring</li><li>Two upgrades a year, plus updates in between</li><li>Fixes for faults in SAP's own software</li></ul></div>
        <div className="us"><span className="k">Mawkish</span><h3>Your solution</h3>
          <ul><li>A service desk for your key users</li><li>Diagnosing problems and fixing setup issues</li><li>Raising and following up SAP cases for you</li><li>Watching integrations, jobs and interfaces</li><li>Configuration changes and small improvements</li><li>Testing before every SAP upgrade</li></ul></div>
        <div><span className="k">Your team</span><h3>Your business</h3>
          <ul><li>Key users who answer everyday questions</li><li>Decisions on processes and changes</li><li>Ownership of master data</li><li>Approving changes before they go live</li><li>Giving people the right access</li></ul></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">When something goes wrong</span>
        <h2>One place to call, and someone who knows your setup.</h2>
        <p className="lede">Your key users log an issue with us by portal, email or phone. We sort it by business impact, find the cause, and fix it. If the cause is a fault in SAP's software, we raise the case with SAP, give them what they need, and follow it through, so your team doesn't have to.</p>
        <p className="lede">Most issues aren't bugs. They're master data, authorisations, or a step done in the wrong order. Each one we fix goes into a shared knowledge base, so the same question gets answered faster next time, often by your own key users.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a support ticket: a payment run skipped supplier Lanka Packaging. Timeline: logged at 09:12, triaged as priority 2 at 09:20, cause found at 10:05 (bank details changed and waiting for approval), fixed and payment released at 10:40, closed by the key user at 11:15.">
          <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MT</span><span className="t">Mawkish Service Desk · INC-2611</span><span className="joule-btn"></span><span className="av">AP</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Payment run skipped Lanka Packaging</div>
              <div className="row"><span>Raised by</span><b>Accounts payable · key user</b></div>
              <div className="row"><span>Priority</span><span className="pill wr">P2 · High</span></div>
              <div className="row"><span>Status</span><span className="pill ok">Resolved</span></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Timeline</div>
              <div className="tl" style={{ marginTop: "8px" }}>
                <div><span className="t">09:12</span><span className="d"></span><span className="x"><b>Logged</b>Supplier missing from today's payment proposal.</span></div>
                <div><span className="t">09:20</span><span className="d"></span><span className="x"><b>Triaged</b>P2: supplier payment due today.</span></div>
                <div><span className="t">10:05</span><span className="d"></span><span className="x"><b>Cause found</b>Bank details changed, waiting for second approval.</span></div>
                <div><span className="t">10:40</span><span className="d"></span><span className="x"><b>Fixed</b>Change approved, payment released in an extra run.</span></div>
                <div><span className="t">11:15</span><span className="d"></span><span className="x"><b>Closed</b>Confirmed by the key user. Article added.</span></div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a support ticket. Sample data.</figcaption>
      </figure>
    </div>
    <div className="in">
      <div className="users prio">
        <table>
          <thead><tr><th>Priority</th><th>What it means</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td data-label="Priority"><span className="dot" style={{ background: "#e5484d" }}></span>P1 · Critical</td><td data-label="What it means">A core process has stopped for the whole business, with no workaround.</td><td data-label="Example">No one can post invoices or ship orders.</td></tr>
            <tr><td data-label="Priority"><span className="dot" style={{ background: "#e9730c" }}></span>P2 · High</td><td data-label="What it means">An important process is failing for some users, or a deadline is at risk.</td><td data-label="Example">A payment run or a VAT return due today.</td></tr>
            <tr><td data-label="Priority"><span className="dot" style={{ background: "#0a6ed1" }}></span>P3 · Medium</td><td data-label="What it means">A problem with a workaround, or one that affects few people.</td><td data-label="Example">A report shows the wrong layout.</td></tr>
            <tr><td data-label="Priority"><span className="dot" style={{ background: "#8b9196" }}></span>P4 · Request</td><td data-label="What it means">A question, a how-to or a small change.</td><td data-label="Example">Add a user to an approval step.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Response and resolution targets for each priority are agreed in your support contract.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Spot it before you do</span>
        <h2>We watch the parts that usually break.</h2>
        <p className="lede">In a cloud ERP, the system itself rarely fails. What fails is the work around it: an interface that stops, a job that ends with errors, a file the bank never receives. SAP Cloud ALM, which comes with your subscription, monitors these. We set it up for your processes and act on its alerts.</p>
        <div className="mon" style={{ marginTop: "28px" }}>
          <div><h3>Integrations</h3><p>Messages between SAP and your bank, online store, CRM, payroll and tax portal, with failed ones caught and fixed.</p></div>
          <div><h3>Background jobs</h3><p>Payment runs, depreciation, interest and MRP runs, with failures and delays flagged.</p></div>
          <div><h3>Business processes</h3><p>Orders stuck before delivery, invoices not posted, goods received but not invoiced.</p></div>
          <div><h3>Users and performance</h3><p>Slow apps, failed logins and unusual activity, checked before people complain.</p></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of integration and exception monitoring with five interfaces: bank payment files, online store orders, CRM customer sync, payroll posting and VAT invoice submission, with message counts and two errors on online store orders">
          <div className="shell"><span className="sap">SAP</span><span className="t">Integration &amp; Exception Monitoring</span><span className="joule-btn"></span><span className="av">MT</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Interfaces · last 24 hours</div>
              <div className="row"><span>Bank payment files · outbound</span><span className="pill ok">6 · OK</span></div>
              <div className="row"><span>Online store orders · inbound</span><span className="pill wr">318 · 2 errors</span></div>
              <div className="row"><span>CRM customer sync · both ways</span><span className="pill ok">54 · OK</span></div>
              <div className="row"><span>Payroll posting · monthly</span><span className="pill in">Due 25.11</span></div>
              <div className="row"><span>VAT invoice submission · outbound</span><span className="pill ok">412 · OK</span></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Error detail · Online store orders</div>
              <div className="row"><span>Order WEB-77810 · customer email not in SAP</span><span className="pill in">Auto-ticket INC-2618</span></div>
              <div className="row"><span>Order WEB-77824 · material discontinued</span><span className="pill in">Auto-ticket INC-2619</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of integration monitoring. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">More than fixing</span>
      <h2>Every month, the system should fit you a little better.</h2>
      <p className="lede">A good support service fixes issues. A better one also asks why they happen and what else the system could be doing for you. SAP adds features with every release, and most customers use only a part of what they've paid for.</p>
      <div className="flow4">
        <div><span className="n">Every day</span><h3>Fix and answer</h3><p>Incidents, questions and small changes, handled by consultants who know your setup.</p><p className="out"><b>Result:</b> fewer interruptions for your team.</p></div>
        <div><span className="n">Every month</span><h3>Review the service</h3><p>What came in, what took long, what keeps coming back, and what we'll do about it.</p><p className="out"><b>Result:</b> root causes fixed, not just symptoms.</p></div>
        <div><span className="n">Every release</span><h3>Bring in what's new</h3><p>We go through SAP's new features with you and switch on the ones worth having.</p><p className="out"><b>Result:</b> value from features you already pay for.</p></div>
        <div><span className="n">Every quarter</span><h3>Plan the road ahead</h3><p>A short roadmap of improvements, new processes, automations and reports, agreed with you.</p><p className="out"><b>Result:</b> a system that grows with the business.</p></div>
      </div>
      <div className="two" style={{ marginTop: "48px" }}>
        <div>
          <h3 style={{ fontSize: "20px" }}>What the monthly report shows</h3>
          <p className="lede">Tickets by area and priority, how fast we responded and resolved, the recurring issues and what we're doing about them, and what's planned next. It takes half an hour to go through together, and it keeps both sides honest.</p>
        </div>
        <div className="screen rep" role="img" aria-label="Illustration of a monthly support report: 46 tickets, 96 percent within target, 8 recurring issues, with tickets by area: finance 16, procurement 11, sales 8, integrations 6, access 5">
          <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MT</span><span className="t">Monthly Service Report · October 2026</span><span className="joule-btn"></span><span className="av">MT</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Tickets</div><div className="s">Opened in October</div></div><div className="k">46</div></div>
              <div className="tile"><div><div className="h">Within target</div><div className="s">Response and resolution</div></div><div className="k pos">96<small>%</small></div></div>
              <div className="tile"><div><div className="h">Recurring</div><div className="s">Root cause planned</div></div><div className="k neg">8</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Tickets by area</div>
              <div className="bars">
                <div className="bar"><span>Finance</span><i style={{ width: "100%" }}></i><span>16</span></div>
                <div className="bar"><span>Procurement</span><i style={{ width: "69%" }}></i><span>11</span></div>
                <div className="bar"><span>Sales</span><i style={{ width: "50%" }}></i><span>8</span></div>
                <div className="bar"><span>Integrations</span><i style={{ width: "38%" }}></i><span>6</span></div>
                <div className="bar"><span>Access and roles</span><i style={{ width: "31%" }}></i><span>5</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light upg">
    <div className="in">
      <span className="eyebrow">Twice a year</span>
      <h2>SAP upgrades your system. We make sure nothing breaks.</h2>
      <p className="lede">SAP Cloud ERP is upgraded twice a year on a fixed schedule, and you can't skip an upgrade. SAP gives about six weeks' notice and upgrades your test system first. That window is when we check everything: your processes, extensions, integrations, forms and roles.</p>
      <svg viewBox="0 0 1160 150" style={{ fontFamily: "var(--body)" }} role="img" aria-label="Upgrade timeline: notice about six weeks before, test system upgraded, regression testing, production upgraded about three weeks later, then new features reviewed">
        <path d="M30 60H1130" stroke="#c9d3ce" strokeWidth="3"/>
        <path d="M300 60H680" stroke="#1f7a5a" strokeWidth="7" strokeLinecap="round"/>
        <g fontSize="13" fontWeight="800" fill="#16201b" textAnchor="middle">
          <circle cx="60" cy="60" r="9" fill="#fff" stroke="#1f7a5a" strokeWidth="3"/><text x="60" y="34">Notice from SAP</text>
          <circle cx="300" cy="60" r="9" fill="#1f7a5a"/><text x="300" y="34">Test system upgraded</text>
          <text x="490" y="34" fill="#17694b">Regression testing</text>
          <circle cx="680" cy="60" r="9" fill="#1f7a5a"/><text x="680" y="34">Production upgraded</text>
          <circle cx="920" cy="60" r="9" fill="#fff" stroke="#1f7a5a" strokeWidth="3"/><text x="920" y="34">New features reviewed</text>
        </g>
        <g fontSize="12.5" fill="#5a6862" textAnchor="middle">
          <text x="60" y="92">about 6 weeks ahead</text>
          <text x="300" y="92">impact analysis</text><text x="300" y="110">for your scope</text>
          <text x="490" y="92">automated tests</text><text x="490" y="110">plus key-user checks</text>
          <text x="680" y="92">about 3 weeks</text><text x="680" y="110">after test</text>
          <text x="920" y="92">switch on what's useful</text>
        </g>
      </svg>
      <ol className="upg-list"><li><b>About 6 weeks ahead:</b> notice from SAP.</li><li><b>Test system upgraded:</b> impact analysis for your scope.</li><li><b>Regression testing:</b> automated tests plus key-user checks.</li><li><b>About 3 weeks later:</b> production upgraded.</li><li><b>After the upgrade:</b> new features reviewed and switched on.</li></ol>
      <p className="note">Our Release &amp; Upgrade Management service covers this in detail. Within application management, it's part of the service.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Ways to work with us</span>
      <h2>Support sized to how you run.</h2>
      <p className="lede">A company with one entity and twenty users needs something different from a group with factories, exports and month-end deadlines across several companies. We start from your volumes and critical dates, not a fixed package.</p>
      <div className="plans">
        <div className="plan"><span className="k">Essential</span><h3>Hours when you need them</h3><p>A bank of consultant hours each month for incidents, questions and small changes.</p><ul><li>Service desk in business hours</li><li>Incidents and SAP cases handled</li><li>Upgrade testing support</li></ul><p className="pfit"><b>Fits:</b> smaller teams with strong key users.</p></div>
        <div className="plan feat"><span className="k">Managed</span><h3>We look after the solution</h3><p>A named team responsible for your SAP Cloud ERP, with agreed targets and proactive monitoring.</p><ul><li>Everything in Essential</li><li>Response and resolution targets</li><li>Integration and job monitoring</li><li>Monthly service reviews</li><li>Full upgrade regression testing</li></ul><p className="pfit"><b>Fits:</b> most companies after go-live.</p></div>
        <div className="plan"><span className="k">Extended</span><h3>Support and improvement</h3><p>Managed support plus a set amount of improvement work every quarter.</p><ul><li>Everything in Managed</li><li>Extended hours around month-end</li><li>Quarterly improvement roadmap</li><li>New scope, reports and automations</li></ul><p className="pfit"><b>Fits:</b> groups and fast-growing businesses.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What you get from us</span>
        <h2>A service you can see into.</h2>
        <p className="lede">Support shouldn't be a black box. You should know what's open, who's on it, what changed in your system and why.</p>
      </div>
      <div className="includes">
        <div><h3>Named team</h3><p>Consultants who know your processes, with cover for leave and peaks.</p></div>
        <div><h3>Run book</h3><p>Your setup, interfaces, jobs and contacts documented and kept current.</p></div>
        <div><h3>Change control</h3><p>Every change tested in your test system and approved by you before it reaches production.</p></div>
        <div><h3>Access reviews</h3><p>Regular checks of who can do what, with segregation of duties kept intact.</p></div>
        <div><h3>Key-user training</h3><p>Short sessions on what's new and on the questions that keep coming up.</p></div>
        <div><h3>Easy exit</h3><p>Documentation and knowledge stay with you, if you ever change partners.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official Services and Support channel on running SAP cloud solutions with SAP Cloud ALM.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=0SKZ1Qa-aRE" target="_blank" rel="noopener" data-yt="0SKZ1Qa-aRE" aria-label="Play on YouTube: SAP Cloud ALM in a minute">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">Cloud ALM in a minute</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP Cloud ALM in a minute</h3><p>A one-minute introduction to SAP Cloud ALM, the lifecycle tool included with SAP cloud subscriptions.</p><span className="d">Services and Support from SAP · March 2021</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=MRIwFWcm-MU" target="_blank" rel="noopener" data-yt="MRIwFWcm-MU" aria-label="Play on YouTube: SAP Cloud ALM for operations: overview and outlook">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Operations</span></div><div className="big">Monitoring in practice</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP Cloud ALM for operations: overview and outlook</h3><p>What SAP Cloud ALM monitors after go-live, from business processes and integrations to jobs and user experience.</p><span className="d">Services and Support from SAP · November 2023</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=0l_kFF5CACc" target="_blank" rel="noopener" data-yt="0l_kFF5CACc" aria-label="Play on YouTube: Operations automation and intelligent event processing">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Automation</span></div><div className="big">From alert to action</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Operations automation and intelligent event processing</h3><p>How SAP Cloud ALM turns monitoring events into actions, including automated workflows to resolve problems.</p><span className="d">Services and Support from SAP · March 2023</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channels.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>SAP already supports the cloud system. Why do we need you?</summary><p>SAP supports its software and runs the service. It doesn't know how your company codes, approvals, integrations and reports are set up, and it doesn't make changes for you. Most issues after go-live are about exactly that, so that's what we cover.</p></details>
        <details><summary>Can you support a system another partner implemented?</summary><p>Yes. We start with a short handover review of your setup, extensions, integrations and open issues, document what we find, and then take over. If we see risks, we tell you up front.</p></details>
        <details><summary>What hours do you cover?</summary><p>Sri Lankan business hours as standard, with extended cover for critical dates such as month-end, year-end and SAP upgrade weekends. Round-the-clock cover for critical issues can be agreed where you need it.</p></details>
        <details><summary>Do unused hours roll over?</summary><p>That depends on the plan. In most plans, unused hours can go to improvement work, so the budget still goes into your system.</p></details>
        <details><summary>Do you support SAP add-ons and integrations too?</summary><p>Yes. We support the integrations, extensions and SAP Business AI Platform services around SAP Cloud ERP, as well as the connected systems we implemented, such as Salesforce.</p></details>
        <details><summary>Will we become dependent on you?</summary><p>We aim for the opposite. Your key users get training and a knowledge base, everything is documented, and you own all of it.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Tell us how you run today.</h2>
          <p className="lede">In one call, we look at your users, processes, integrations and critical dates, and suggest the support model that fits. If another partner supports you today, we'll also outline the handover.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a support review →</Link></div>
        </div>
        <ul>
          <li>Who does what: SAP, us, your team</li>
          <li>Priorities and response targets</li>
          <li>Monitoring and upgrade testing</li>
          <li>Coverage hours and critical dates</li>
          <li>Handover from another partner</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
