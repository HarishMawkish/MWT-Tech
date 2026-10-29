import Link from "next/link";

/** The sections of the Process Automation with SAP Build page, converted from the supplied HTML. */
export function AutomationBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Process Automation with SAP Build</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Process Automation with SAP Build</span>
          <h1>Automate the busywork. <em>Keep people for the decisions.</em></h1>
          <p className="lede">Every business has processes that live in email, spreadsheets and phone calls: approvals that wait for someone to come back from leave, invoices typed in by hand, supplier details checked one by one. We automate them around SAP Cloud ERP with SAP's own tools, so the work flows, people only see what needs their judgement, and every step is recorded.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Find your first automation →</a>
            <a href="#tools" className="btn sec">Which tool for which job?</a>
          </div>
          <p className="name-note"><b>About the names.</b> SAP Build Process Automation is part of SAP Build. SAP is bringing its process, app and agent tools together in <b>Joule Studio</b> on the SAP Business AI Platform, so you'll see both names for a while. Everything on this page carries over.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a process monitor in SAP Build Process Automation: 42 running processes, 9 waiting for approval, 318 completed this week, with a list of supplier onboarding, invoice and credit limit processes and their status">
            <div className="shell"><span className="sap">SAP</span><span className="t">Monitor · Process Instances</span><span className="joule-btn"></span><span className="av">PO</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Running</div><div className="s">All processes</div></div><div className="k">42</div></div>
                <div className="tile"><div><div className="h">Waiting on people</div><div className="s">Approvals open</div></div><div className="k neg">9</div></div>
                <div className="tile"><div><div className="h">Completed</div><div className="s">This week</div></div><div className="k pos">318</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Recent instances</div>
                <div className="row"><span>Supplier onboarding · Lanka Packaging (Pvt) Ltd</span><span className="pill in">Bank check</span></div>
                <div className="row"><span>Supplier invoice · INV-88214 · LKR 1.94M</span><span className="pill ok">Posted in SAP</span></div>
                <div className="row"><span>Credit limit increase · Colombo Retail Group</span><span className="pill wr">Finance approval</span></div>
                <div className="row"><span>Capex request · Boiler upgrade, Factory 02</span><span className="pill ok">Approved</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a process monitor. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="tools">
    <div className="in">
      <span className="eyebrow">Five tools, one rule</span>
      <h2>Use the simplest tool that does the job.</h2>
      <p className="lede">"Automation" covers very different things, from a two-step approval to an AI agent that reads documents and makes a recommendation. SAP gives you a tool for each. Some come with SAP Cloud ERP; others are SAP Business AI Platform services. We start with what you already have.</p>
      <div className="users">
        <table>
          <thead><tr><th>Tool</th><th>What it does</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td data-label="Tool">Flexible workflow<br /><span className="t">Included in SAP Cloud ERP</span></td><td data-label="What it does">Approvals inside SAP Cloud ERP, configured from SAP templates with conditions such as amount, plant or material group. Tasks land in the approver's My Inbox, on the web or on the mobile app.</td><td data-label="Example">Purchase orders over LKR 5M go to the plant manager, over LKR 25M to the CFO.</td></tr>
            <tr><td data-label="Tool">Situation handling<br /><span className="t">Included in SAP Cloud ERP</span></td><td data-label="What it does">Alerts the right person when something needs attention, such as a contract about to expire or a delivery running late, with the context to act.</td><td data-label="Example">The buyer is told 30 days before a supplier contract expires.</td></tr>
            <tr><td data-label="Tool">Process automation<br /><span className="t">SAP Build</span></td><td data-label="What it does">Processes that cross systems or need their own forms, rules and steps. Connects to SAP Cloud ERP through released APIs and to other systems through SAP Integration Suite.</td><td data-label="Example">Supplier onboarding from a web form to a checked, approved supplier record in SAP.</td></tr>
            <tr><td data-label="Tool">Documents and bots<br /><span className="t">SAP Build</span></td><td data-label="What it does">Reads data from invoices and forms, and runs software robots on screens that have no API.</td><td data-label="Example">Supplier invoices in a shared mailbox, read and posted without retyping.</td></tr>
            <tr><td data-label="Tool">AI agents<br /><span className="t">Joule Studio</span></td><td data-label="What it does">Handles steps that need judgement, such as reading an email, comparing documents or proposing an action, inside rules you set and with a person approving where it matters.</td><td data-label="Example">An agent checks a quotation against the contract price and explains any gap to the buyer.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Start with what you own</span>
        <h2>Most approvals need configuration, not a project.</h2>
        <p className="lede">SAP Cloud ERP ships with flexible workflows for purchase requisitions, purchase orders, supplier invoices, journal entries, sales documents, master data changes and more. A key user sets the steps and conditions in an SAP Fiori app, with no code and no extra licence.</p>
        <p className="lede">Approvers find everything in My Inbox, see the document behind each task, and approve on their phone. Responsibility management decides who the approver is, so when a manager leaves, you change one assignment and every workflow follows.</p>
        <div className="facts">
          <div className="fact"><b>No code</b><span>steps and conditions set by a key user in the browser</span></div>
          <div className="fact"><b>One inbox</b><span>for every approval, on the web and on mobile</span></div>
          <div className="fact"><b>Full trail</b><span>who approved what, when, and with which comment</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of the Manage Workflows for Purchase Orders app with three steps: automatic release below LKR 500,000, plant manager approval from LKR 500,000, and CFO approval above LKR 25 million">
          <div className="shell"><span className="sap">SAP</span><span className="t">Manage Workflows for Purchase Orders</span><span className="joule-btn"></span><span className="av">KU</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Workflow · PO approval, company code 1000</div>
              <div className="row"><span>Start condition</span><b>Order type: Standard</b></div>
              <div className="row"><span>Valid from</span><b>01.11.2026</b></div>
              <div className="row"><span>Status</span><span className="pill ok">Active</span></div>
            </div>
            <div className="wf-steps" style={{ marginTop: "10px" }}>
              <div className="wf-step"><span className="no">1</span><span><b>Release automatically</b><small>Net value below LKR 500,000</small></span><span className="pill ok">Auto</span></div>
              <div className="wf-step"><span className="no">2</span><span><b>Plant manager</b><small>From LKR 500,000 · by plant</small></span><span className="pill in">Approve</span></div>
              <div className="wf-step"><span className="no">3</span><span><b>Chief financial officer</b><small>Above LKR 25,000,000</small></span><span className="pill in">Approve</span></div>
              <div className="wf-step"><span className="no">!</span><span><b>Deadline</b><small>Escalate to deputy after 2 working days</small></span><span className="pill wr">Escalate</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of flexible workflow configuration. Sample values.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a process in the SAP Build process editor: a supplier web form triggers document extraction, then a rule checks the tax number and bank details. If the check passes, procurement approves and the supplier is created in SAP Cloud ERP. If not, the supplier is asked to correct the details.">
          <div className="shell"><span className="sap">SAP</span><span className="t">SAP Build · Supplier Onboarding</span><span className="badge-c">PROCESS</span><span className="av">PA</span></div>
          <div className="body-pad">
            <div className="canvas">
              <svg viewBox="0 0 560 250" style={{ fontFamily: "var(--body)" }} aria-hidden="true">
                <defs><marker id="ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0l8 4-8 4z" fill="#8b9196"/></marker></defs>
                <g stroke="#8b9196" strokeWidth="1.6" fill="none" markerEnd="url(#ar)">
                  <path d="M66 70h22"/><path d="M190 70h22"/><path d="M314 70h30"/>
                  <path d="M416 70h20"/>
                  <path d="M380 100v50h-24"/>
                  <path d="M250 175h-60v-75"/>
                  <path d="M488 100v40"/>
                </g>
                <circle cx="46" cy="70" r="20" fill="#fff" stroke="#107e3e" strokeWidth="2"/>
                <text x="46" y="74" textAnchor="middle" fontSize="9" fontWeight="800" fill="#107e3e">Form</text>
                <rect x="90" y="46" width="100" height="48" rx="8" fill="#fff" stroke="#0a6ed1" strokeWidth="1.6"/>
                <text x="140" y="66" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1d2d3e">Read documents</text>
                <text x="140" y="81" textAnchor="middle" fontSize="8.5" fill="#6a6d70">registration, bank letter</text>
                <rect x="214" y="46" width="100" height="48" rx="8" fill="#fff" stroke="#5d36ff" strokeWidth="1.6"/>
                <text x="264" y="66" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1d2d3e">Check rules</text>
                <text x="264" y="81" textAnchor="middle" fontSize="8.5" fill="#6a6d70">TIN, VAT, bank</text>
                <path d="M380 40l36 30-36 30-36-30z" fill="#fff" stroke="#e9730c" strokeWidth="1.6"/>
                <text x="380" y="74" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#e9730c">OK?</text>
                <rect x="438" y="46" width="100" height="48" rx="8" fill="#fff" stroke="#0a6ed1" strokeWidth="1.6"/>
                <text x="488" y="66" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1d2d3e">Approval</text>
                <text x="488" y="81" textAnchor="middle" fontSize="8.5" fill="#6a6d70">procurement lead</text>
                <rect x="438" y="142" width="100" height="48" rx="8" fill="#e8f6ef" stroke="#107e3e" strokeWidth="1.6"/>
                <text x="488" y="162" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1d2d3e">Create supplier</text>
                <text x="488" y="177" textAnchor="middle" fontSize="8.5" fill="#107e3e">SAP Cloud ERP API</text>
                <rect x="252" y="150" width="104" height="48" rx="8" fill="#fff" stroke="#bb0000" strokeWidth="1.6"/>
                <text x="304" y="170" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1d2d3e">Ask to correct</text>
                <text x="304" y="185" textAnchor="middle" fontSize="8.5" fill="#6a6d70">email with form link</text>
                <text x="400" y="118" fontSize="8.5" fontWeight="700" fill="#bb0000">No</text>
                <text x="418" y="55" fontSize="8.5" fontWeight="700" fill="#107e3e">Yes</text>
                <rect x="10" y="214" width="540" height="26" rx="6" fill="#fff" stroke="#e5e5e5"/>
                <circle cx="26" cy="227" r="6" fill="#5d36ff"/>
                <text x="40" y="230" fontSize="9.5" fill="#32363a">Joule: “Add a step that emails the supplier a welcome pack after the record is created.”</text>
              </svg>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a process in the SAP Build editor. Simplified.</figcaption>
      </figure>
      <div>
        <span className="eyebrow">When a process crosses systems</span>
        <h2>Draw the process. SAP Build runs it.</h2>
        <p className="lede">For processes beyond SAP Cloud ERP's own workflows, we build them in SAP Build's visual editor. Each process is made of a few building blocks, and Joule can draft a process, a form or a rule from a plain-language description, which we then review and refine.</p>
        <div className="parts" style={{ marginTop: "24px" }}>
          <div className="part"><h3><i style={{ background: "#107e3e" }}></i>Forms</h3><p>Start a process or collect input, on the web or on a phone, including for people outside your company.</p></div>
          <div className="part"><h3><i style={{ background: "#5d36ff" }}></i>Decisions</h3><p>Business rules in readable tables that the business can maintain, such as who approves what.</p></div>
          <div className="part"><h3><i style={{ background: "#0a6ed1" }}></i>Actions</h3><p>Read and write SAP Cloud ERP data through released APIs, and reach other systems through Integration Suite.</p></div>
          <div className="part"><h3><i style={{ background: "#e9730c" }}></i>Visibility</h3><p>Every instance is tracked, so you can see where work waits and how long each step takes.</p></div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Documents</span>
        <h2>Stop retyping what's already on paper.</h2>
        <p className="lede">Supplier invoices, delivery notes, bank letters and customs documents arrive as PDFs and scans in a dozen layouts. SAP's document extraction reads the fields, shows how confident it is about each one, and sends only the uncertain ones to a person.</p>
        <p className="lede">It works in two ways. With <b>templates</b>, it learns a layout from samples, which suits documents you receive often. With the <b>large language model option</b>, it reads documents it has never seen, without a template, and is charged by use.</p>
        <p className="lede">For Sri Lankan invoices we check what matters locally: the supplier's TIN and VAT number against your supplier records, VAT at the current rate, and totals in LKR or the invoice currency.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of document extraction on a supplier tax invoice from Ceylon Corrugated Cartons, with highlighted fields and the extracted values with confidence: supplier, TIN, invoice number, date, net amount, VAT at 18 percent and total, and a purchase order number with low confidence flagged for review">
          <div className="shell"><span className="sap">SAP</span><span className="t">Document Extraction · Supplier Invoices</span><span className="joule-btn"></span><span className="av">AP</span></div>
          <div className="body-pad dox">
            <div className="paper">
              <div className="hd"><b>Ceylon Corrugated Cartons</b><span>TAX INVOICE</span></div>
              <div>TIN <mark>114 523 798</mark> · VAT reg.</div>
              <div>Invoice no. <mark>CCC/26/04412</mark><br />Date <mark>21.10.2026</mark></div>
              <div>Your PO <mark>45000?8812</mark></div>
              <div className="ln"><span>Cartons 5-ply, 2,400 pcs</span><span>1,620,000.00</span></div>
              <div className="ln"><span>Net amount</span><span><mark>1,620,000.00</mark></span></div>
              <div className="ln"><span>VAT 18%</span><span><mark>291,600.00</mark></span></div>
              <div className="ln tot"><span>Total LKR</span><span><mark>1,911,600.00</mark></span></div>
            </div>
            <div className="xf">
              <div><span>Supplier<b>Ceylon Corrugated Cartons</b></span><span className="pill ok">99%</span></div>
              <div><span>TIN<b>114523798 · matches SAP</b></span><span className="pill ok">98%</span></div>
              <div><span>Invoice no.<b>CCC/26/04412</b></span><span className="pill ok">97%</span></div>
              <div><span>VAT amount<b>LKR 291,600.00 · 18%</b></span><span className="pill ok">96%</span></div>
              <div><span>Total<b>LKR 1,911,600.00</b></span><span className="pill ok">99%</span></div>
              <div><span>Purchase order<b>4500018812?</b></span><span className="pill lo">Check</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of invoice extraction. Fictional supplier and sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Software robots</span>
      <h2>Bots for the screens that have no API.</h2>
      <p className="lede">Some systems can only be used through their screens: an old payroll package, a supplier portal, a bank's website. A bot repeats the clicks and keystrokes a person would make, reliably, at any hour. SAP Build includes a recorder to capture the steps and an editor to make them robust.</p>
      <div className="bots" style={{ marginTop: "32px" }}>
        <div className="bot"><span className="k">Attended</span><h3>Runs with a person</h3><p>Started by a user on their own computer, for a task they'd otherwise do by hand. The person stays in control and reviews the result.</p><ul><li>Download and file a day's bank statements</li><li>Copy a list of orders from a customer portal</li><li>Prepare a monthly report pack</li></ul></div>
        <div className="bot"><span className="k">Unattended</span><h3>Runs on its own</h3><p>Runs on a schedule or when an event happens, on a dedicated machine, and reports exceptions to a person.</p><ul><li>Post a night's legacy payroll results into SAP</li><li>Update delivery status from a 3PL's portal</li><li>Reconcile a data extract every morning</li></ul></div>
      </div>
      <p className="warn"><b>Our rule: API first, bot second.</b> A bot depends on screens staying the same, so a redesigned web page can stop it. Where SAP or the other system offers an API, we use the API. We use bots for what's left, and we monitor every bot so a failure is seen the same day. If you already use UiPath, SAP offers a UiPath add-on for SAP Build.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Where AI fits</span>
      <h2>Rules where you can. Judgement where you must.</h2>
      <p className="lede">Most of a process should follow clear rules, because rules are predictable and easy to audit. AI agents help with the steps that rules can't describe well, like reading a free-text email or weighing up a quotation. SAP calls the three patterns deterministic, agentic and hybrid workflows.</p>
      <div className="modes">
        <div className="mode"><span className="k">Deterministic</span><h3>Fixed steps</h3>
          <svg viewBox="0 0 220 50" aria-hidden="true"><g fill="none" stroke="#34b386" strokeWidth="2"><rect x="4" y="15" width="44" height="22" rx="5"/><rect x="88" y="15" width="44" height="22" rx="5"/><rect x="172" y="15" width="44" height="22" rx="5"/><path d="M48 26h40M132 26h40"/></g></svg>
          <p>Same path every time. Approvals, postings, notifications. Most of what we automate.</p></div>
        <div className="mode"><span className="k">Agentic</span><h3>Goal, not steps</h3>
          <svg viewBox="0 0 220 50" aria-hidden="true"><g fill="none" stroke="#9b87ff" strokeWidth="2"><circle cx="110" cy="26" r="13"/><path d="M97 26H40M123 26h57M110 13V2M110 39v9" strokeDasharray="3 3"/><rect x="4" y="15" width="36" height="22" rx="5"/><rect x="180" y="15" width="36" height="22" rx="5"/></g></svg>
          <p>An agent is given a goal and tools, and decides the steps. Suits research and exceptions, with a person approving the result.</p></div>
        <div className="mode"><span className="k">Hybrid</span><h3>Rules with an agent step</h3>
          <svg viewBox="0 0 220 50" aria-hidden="true"><g fill="none" strokeWidth="2"><rect x="4" y="15" width="44" height="22" rx="5" stroke="#34b386"/><circle cx="110" cy="26" r="13" stroke="#9b87ff"/><rect x="172" y="15" width="44" height="22" rx="5" stroke="#34b386"/><path d="M48 26h49M123 26h49" stroke="#34b386"/></g></svg>
          <p>A fixed process with one AI step inside it, such as reading an email and proposing the next action. Usually the best fit.</p></div>
      </div>
      <div className="two" style={{ marginTop: "40px" }}>
        <div>
          <h3 style={{ fontSize: "20px" }}>An example from purchasing</h3>
          <p className="lede">A purchase order comes in above the agreed contract price. Instead of a bare approval task, the approver asks Joule why. The agent compares the order with the contract and recent orders, explains the gap, and suggests what to do. The approver still decides.</p>
          <p className="lede">Agents run with the permissions of the person using them, and every action is logged. Developers can build agents in Joule Studio, and from SAP TechEd 2026 they can also design and run n8n workflows there.</p>
        </div>
        <div className="screen" role="img" aria-label="Illustration of Joule in My Inbox explaining that a purchase order for cartons is 6 percent above the contract price because of a paper surcharge, and offering to request a revised quote">
          <div className="shell"><span className="sap">SAP</span><span className="t">My Inbox</span><span className="joule-btn"></span><span className="av">GM</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Approve purchase order 4500018840</div>
              <div className="row"><span>Ceylon Corrugated Cartons · 2,400 pcs</span><b>LKR 1.72M</b></div>
              <div className="row"><span>Contract price check</span><span className="pill wr">+6% over contract</span></div>
            </div>
            <div className="joule" style={{ marginTop: "10px" }}>
              <div className="jh"><i></i>Joule</div>
              <div className="msgs">
                <div className="bub u">Why is this above the contract price?</div>
                <div className="bub j">The price includes a <b>6% paper surcharge</b> the supplier added in September. The contract doesn't allow surcharges, and the last three orders were at contract price.</div>
                <div className="bub j">Should I <b>draft a request for a revised quote</b> and hold the approval?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Where to start</span>
      <h2>Six processes we're often asked to automate.</h2>
      <p className="lede">The best first automation is frequent, rule-based and annoying for the people who do it today. These come up in almost every Sri Lankan company we work with.</p>
      <div className="apps2">
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="7" r="3"/><path d="M4 17c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5"/></svg></span><h3>Supplier onboarding</h3><p>A web form for the supplier, documents read automatically, TIN, VAT and bank details checked, then approved and created in SAP.</p><div className="tags"><span>Forms</span><span>Documents</span><span>Rules</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 2h10v16l-2.5-1.5L10 18l-2.5-1.5L5 18z"/><path d="M8 7h4M8 10h4"/></svg></span><h3>Supplier invoice intake</h3><p>Invoices from a shared mailbox are read, matched to the purchase order and goods receipt, and posted. Only exceptions reach a person.</p><div className="tags"><span>Documents</span><span>SAP Cloud ERP</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="16" height="11" rx="2"/><path d="M2 9h16"/></svg></span><h3>Credit limit changes</h3><p>Sales requests a higher limit, the process collects payment history and exposure from SAP, and finance approves with the facts in front of them.</p><div className="tags"><span>Workflow</span><span>Agent step</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17V8l7-5 7 5v9z"/><path d="M8 17v-5h4v5"/></svg></span><h3>Capex requests</h3><p>A request with a business case, routed by amount and site to the right approvers, then created as an investment order in SAP when approved.</p><div className="tags"><span>Forms</span><span>Rules</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12v12H4z"/><path d="M7 8h6M7 12h3"/></svg></span><h3>Export documents</h3><p>Commercial invoice, packing list and certificate requests prepared from the SAP delivery, checked and filed for each shipment.</p><div className="tags"><span>Workflow</span><span>Documents</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg></span><h3>Master data requests</h3><p>New materials, customers or price changes requested in one form, checked against rules, approved and created in SAP with a full trail.</p><div className="tags"><span>Forms</span><span>Rules</span><span>Workflow</span></div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">How we work</span>
      <h2>Measure first, automate second, measure again.</h2>
      <p className="lede">Automating a bad process just makes it fail faster. We look at how the work really happens, fix what should be fixed, and then automate.</p>
      <div className="flow4">
        <div><span className="n">01 · Discover</span><h3>Map the process</h3><p>We sit with the people who do the work, count volumes and wait times, and find where errors and delays come from.</p><p className="out"><b>You get:</b> a ranked list of automation candidates with expected savings.</p></div>
        <div><span className="n">02 · Design</span><h3>Pick the tool</h3><p>For each candidate, the simplest tool: standard configuration, flexible workflow, SAP Build, a bot or an agent.</p><p className="out"><b>You get:</b> a design, a licence view and a plan you can approve.</p></div>
        <div><span className="n">03 · Build</span><h3>Build and test</h3><p>Built in short cycles with the people who'll use it, tested with real documents and real exceptions.</p><p className="out"><b>You get:</b> a working automation, with tests and documentation.</p></div>
        <div><span className="n">04 · Run</span><h3>Run and improve</h3><p>We watch the first weeks closely, then compare volumes, cycle times and error rates with the starting point.</p><p className="out"><b>You get:</b> before-and-after numbers, and the next candidates.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What you get from us</span>
        <h2>Automations you can trust and audit.</h2>
        <p className="lede">An automation acts on your behalf, often on money. It needs the same controls as a person in the same role, and someone who owns it.</p>
      </div>
      <div className="includes">
        <div><h3>Automation register</h3><p>Every process, bot and agent, with its owner, purpose and the systems it touches.</p></div>
        <div><h3>Same controls as people</h3><p>Technical users with only the permissions they need, and segregation of duties kept intact.</p></div>
        <div><h3>A person for exceptions</h3><p>Clear queues for what the automation can't handle, so nothing gets stuck unseen.</p></div>
        <div><h3>Monitoring and alerts</h3><p>Failures and long waits reported the same day, with a named person to act.</p></div>
        <div><h3>Tested before upgrades</h3><p>Automations included in the regression tests that run before each SAP Cloud ERP upgrade.</p></div>
        <div><h3>Handover</h3><p>Your team can change rules and approvers themselves, without calling us.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channels on process automation and building agents.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=Rt1Efnq93vE" target="_blank" rel="noopener" data-yt="Rt1Efnq93vE" aria-label="Play on YouTube: What is SAP Build Process Automation?">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">What is SAP Build Process Automation?</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>What is SAP Build Process Automation?</h3><p>A short overview of building workflows and task automations with low code, generative AI and pre-built content.</p><span className="d">SAP Community · March 2025</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=7-DWT6qd15I" target="_blank" rel="noopener" data-yt="7-DWT6qd15I" aria-label="Play on YouTube: Create your own AI agents with SAP Build">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">AI agents</span></div><div className="big">Rules or agents?</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Create your own AI agents with SAP Build</h3><p>How deterministic Joule skills compare with goal-driven AI agents, and how both scale across SAP’s platform.</p><span className="d">SAP · December 2025</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=1ebrkHm8Ls8" target="_blank" rel="noopener" data-yt="1ebrkHm8Ls8" aria-label="Play on YouTube: Build, test and deploy AI agents in Joule Studio">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Build, test, deploy</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Build, test and deploy AI agents in Joule Studio</h3><p>An overview and demo: agents built from natural-language prompts, connected to tools and grounded in documents.</p><span className="d">SAP · November 2025</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channels.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Is process automation included in SAP Cloud ERP?</summary><p>Flexible workflows, My Inbox and situation handling are included. SAP Build Process Automation, document extraction and AI agents are SAP Business AI Platform services, subscribed separately and sized by use. We check what you already own before proposing anything new.</p></details>
        <details><summary>Do we need UiPath or another RPA tool?</summary><p>No. SAP Build has its own bots. If you already use UiPath, SAP offers an add-on that lets you use UiPath capabilities with SAP Build, so you can keep that investment.</p></details>
        <details><summary>Will automations break when SAP upgrades?</summary><p>Processes that use SAP's released APIs keep working through upgrades. Bots that use screens are more fragile, which is why we prefer APIs and include every automation in the tests that run before each upgrade.</p></details>
        <details><summary>Will an AI agent approve payments on its own?</summary><p>Only if you decide it should, and only within limits you set. In practice, agents prepare, check and recommend, and a person approves anything that moves money or changes a commitment.</p></details>
        <details><summary>How quickly can we see a result?</summary><p>A flexible workflow can be live in days. A first SAP Build process, such as supplier onboarding, usually takes a few weeks from design to go-live. We agree the scope and timeline with you after discovery.</p></details>
        <details><summary>Can our own team maintain the automations?</summary><p>Yes. Business rules, approvers and forms are designed so key users can change them. We train your team and stay available for the bigger changes.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Show us the process everyone complains about.</h2>
          <p className="lede">In one workshop, we map it with your team, measure what it costs today, and show you which tool would automate it and what it would take.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an automation workshop →</Link></div>
        </div>
        <ul>
          <li>What's included in SAP Cloud ERP already</li>
          <li>Workflow, documents, bots or agents</li>
          <li>Expected savings, in hours and errors</li>
          <li>SAP Build services and sizing</li>
          <li>Controls, ownership and support</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
