import Link from "next/link";

/** The sections of the SAP BTP Extensions & Apps page, converted from the supplied HTML. */
export function BtpBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / SAP BTP Extensions &amp; Apps</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">SAP BTP Extensions &amp; Apps</span>
          <h1>Build what makes you different. <em>Keep the core clean.</em></h1>
          <p className="lede">SAP Cloud ERP runs your standard processes. The things that set your business apart, such as a field app, a dealer portal or a special approval, are built around it: small changes inside the system, and complete apps on SAP's Business Technology Platform. Every extension uses SAP's released interfaces, so the twice-yearly upgrades never break what you've built.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Discuss your requirements →</a>
            <a href="#ladder" className="btn sec">Where should a change go?</a>
          </div>
          <p className="name-note"><b>About the names.</b> At SAP Sapphire 2026, SAP brought its Business Technology Platform (BTP), Business Data Cloud and Business AI together as the <b>SAP Business AI Platform</b>. You'll see both names for a while.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a custom app built on SAP BTP called Bought Leaf Intake, styled like SAP Fiori, showing today's green leaf collection by route and supplier settlements posted to SAP Cloud ERP">
            <div className="shell"><span className="sap">SAP</span><span className="t">Bought Leaf Intake</span><span className="badge-c">CUSTOM APP · SAP BTP</span><span className="av">FM</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Green leaf today</div><div className="s">All collection routes</div></div><div className="k">18,420<small>kg</small></div></div>
                <div className="tile"><div><div className="h">Smallholders</div><div className="s">Delivered today</div></div><div className="k pos">1,236</div></div>
                <div className="tile"><div><div className="h">Rejected leaf</div><div className="s">Quality below standard</div></div><div className="k neg">2.4<small>%</small></div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Collection routes · Factory 02</div>
                <div className="row"><span>Route 4 · Deniyaya · 214 suppliers</span><span className="pill ok">Synced to SAP</span></div>
                <div className="row"><span>Route 7 · Kotapola · 188 suppliers</span><span className="pill ok">Synced to SAP</span></div>
                <div className="row"><span>Route 9 · Morawaka · 162 suppliers</span><span className="pill in">Uploading · offline</span></div>
                <div className="row"><span>Fortnight 2 · supplier settlement</span><span className="pill wr">Ready for payment run</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a side-by-side app for a tea factory. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Clean core, in plain words</span>
        <h2>Don't change SAP. Build next to it.</h2>
        <p className="lede">In older ERP systems, companies changed SAP's own code to fit their needs. Every upgrade then became a project, because someone had to check and repair every change. Many companies simply stopped upgrading.</p>
        <p className="lede">Clean core means SAP's standard stays untouched. Your extensions connect only through interfaces SAP has released and promised to keep stable. SAP upgrades the core, and your extensions carry on working.</p>
      </div>
      <div className="thennow">
        <div className="tn then"><span className="k">The old way</span><h3>Modified core</h3>
          <svg viewBox="0 0 240 120" aria-hidden="true"><rect x="70" y="20" width="100" height="80" rx="10" fill="#b5651d" opacity=".18"/><rect x="70" y="20" width="100" height="80" rx="10" fill="none" stroke="#b5651d" strokeWidth="2"/><path d="M90 40l20 20M130 35l-15 30M95 85l30-15M140 60l15 25" stroke="#b5651d" strokeWidth="3" strokeLinecap="round"/><text x="120" y="116" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="11" fontWeight="700" fill="#b5651d">changes inside the core</text></svg>
          <p>Every upgrade means retesting and repairing custom code. Projects take months, so upgrades get delayed for years.</p></div>
        <div className="tn now"><span className="k">Clean core</span><h3>Extended core</h3>
          <svg viewBox="0 0 240 120" aria-hidden="true"><rect x="80" y="30" width="80" height="60" rx="10" fill="#1f7a5a"/><text x="120" y="65" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="11" fontWeight="800" fill="#fff">SAP standard</text><g fill="none" stroke="#17694b" strokeWidth="2"><rect x="10" y="40" width="50" height="40" rx="8"/><rect x="180" y="40" width="50" height="40" rx="8"/><rect x="95" y="0" width="50" height="20" rx="6"/><path d="M60 60h20M160 60h20M120 20v10" strokeDasharray="3 3"/></g><text x="120" y="116" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="11" fontWeight="700" fill="#17694b">extensions through released interfaces</text></svg>
          <p>SAP upgrades twice a year on a fixed schedule. Extensions keep working, and you get new features without a project.</p></div>
      </div>
    </div>
  </section>

  
  <section id="ladder">
    <div className="in">
      <span className="eyebrow">Three places to put a change</span>
      <h2>Always start with the simplest option that does the job.</h2>
      <p className="lede">SAP gives you three ways to extend SAP Cloud ERP. Each step to the right gives more freedom, and also more to build, test and own. We only move right when the requirement really needs it.</p>
      <div className="ladder">
        <div className="rung"><span className="n">1</span><h3>Key-user changes</h3><span className="who">Business experts, in the browser, no code</span>
          <ul><li>Custom fields on screens, forms, reports and APIs</li><li>Screen layouts by country, unit or role</li><li>Simple rules, such as checks and defaults</li><li>Form and email layouts with your branding</li><li>Custom reports and analytical queries</li></ul>
          <div className="tools"><span>Custom Fields</span><span>Custom Logic</span><span>Adapt UI</span><span>Custom CDS Views</span></div>
          <p className="when"><b>Choose when:</b> the change is a field, a rule, a layout or a report.</p></div>
        <div className="rung"><span className="n">2</span><h3>Developer extensions</h3><span className="who">ABAP developers, inside the system</span>
          <ul><li>Logic too complex for key-user tools</li><li>Custom business objects tightly tied to SAP data</li><li>Custom SAP Fiori apps on SAP data</li><li>Only released APIs and extension points</li></ul>
          <div className="tools"><span>ABAP Cloud</span><span>RAP</span><span>ABAP Development Tools</span></div>
          <p className="when"><b>Choose when:</b> it must run inside SAP's transactions. Needs the three-system landscape.</p></div>
        <div className="rung"><span className="n">3</span><h3>Side-by-side apps</h3><span className="who">Developers and low-code builders, on SAP BTP</span>
          <ul><li>Apps with their own users, such as suppliers, dealers or field staff</li><li>Mobile and offline apps</li><li>Logic that spans several systems</li><li>AI agents and automations</li></ul>
          <div className="tools"><span>SAP Build</span><span>Joule Studio</span><span>CAP</span><span>Work Zone</span></div>
          <p className="when"><b>Choose when:</b> it has its own life cycle, its own users or reaches beyond SAP.</p></div>
      </div>
      <p className="ladder-note"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="9"/><path d="M11 7v5M11 15v.5"/></svg>Before any of the three, we ask whether a standard process or setting already covers the need. Often it does.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Option 1 in practice</span>
        <h2>A new field in minutes, everywhere it's needed.</h2>
        <p className="lede">Say your sales team needs to record the tea grade on every sales order. A key user adds one custom field in the browser and chooses where it appears: the order screen, the invoice form, the sales report and the API that feeds your CRM.</p>
        <p className="lede">Before promising any change, we check SAP's Extensibility Cockpit, which shows what each app and process allows. That way the answer is "yes, here's how" or "no, here's the alternative", not a surprise halfway through the project.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of the SAP Custom Fields app: a new field Tea Grade on the Sales Document business context, enabled for the sales order screen, invoice form, analytics and the sales order API">
          <div className="shell"><span className="sap">SAP</span><span className="t">Custom Fields</span><span className="joule-btn"></span><span className="av">KU</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">New field · Tea Grade</div>
              <div className="row"><span>Business context</span><b>Sales Document: Item</b></div>
              <div className="row"><span>Type</span><b>Code list · 12 values</b></div>
              <div className="row"><span>Values</span><span>BOP · BOPF · FBOP · OP · Pekoe · Dust 1 …</span></div>
              <div className="row"><span>Status</span><span className="pill ok">Published</span></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Where the field is used</div>
              <div className="row"><span>Sales order screen</span><span className="pill ok">Enabled</span></div>
              <div className="row"><span>Customer invoice form</span><span className="pill ok">Enabled</span></div>
              <div className="row"><span>Sales analytics</span><span className="pill ok">Enabled</span></div>
              <div className="row"><span>Sales order API</span><span className="pill ok">Enabled</span></div>
              <div className="row"><span>Delivery note form</span><span className="pill in">Not enabled</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of SAP's Custom Fields app. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Option 3 in practice</span>
      <h2>Apps we build next to SAP.</h2>
      <p className="lede">Side-by-side apps reach the people and places your ERP doesn't: smallholders, dealers, field teams and suppliers. Each one reads and writes SAP data through released APIs, and signs users in with the same identity service as SAP.</p>
      <div className="apps2">
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 18c-4-3-6-6-6-9a6 6 0 0 1 12 0c0 3-2 6-6 9z"/><path d="M10 6v6"/></svg></span><h3>Bought leaf and collection</h3><p>Weigh-in at collection points, offline on a phone, with supplier settlements and payments run in SAP.</p><div className="tags"><span>Mobile · offline</span><span>SAP Build Apps</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="14" height="12" rx="2"/><path d="M3 8h14"/></svg></span><h3>Dealer and distributor portal</h3><p>Dealers place orders, check stock and prices, download invoices and see what they owe, from their own login.</p><div className="tags"><span>External users</span><span>CAP · Fiori</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="7" r="3"/><path d="M4 17c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5"/></svg></span><h3>Supplier onboarding</h3><p>New suppliers submit their company, tax and bank details and documents. Checks and approval run before the record reaches SAP.</p><div className="tags"><span>Workflow</span><span>SAP Build</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 16V6l6-3 6 3v10"/><path d="M8 16v-5h4v5"/></svg></span><h3>Field sales and van sales</h3><p>Route plans, orders and collections on a tablet, synced to SAP when the van is back in coverage.</p><div className="tags"><span>Mobile · offline</span><span>SAP Build Apps</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12v12H4z"/><path d="M7 8h6M7 11h6M7 14h3"/></svg></span><h3>Style costing for apparel</h3><p>Merchandisers build cost sheets for a style from SAP prices and rates, compare scenarios and send the agreed cost back to SAP.</p><div className="tags"><span>Pro-code</span><span>CAP</span></div></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7"/><path d="M7 10l2 2 4-4"/></svg></span><h3>One inbox for approvals</h3><p>Approvals from SAP and other systems in one place, on the web and on SAP's mobile app, with Joule to explain each request.</p><div className="tags"><span>Work Zone</span><span>Joule</span></div></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Deep dive · a tea factory</span>
      <h2>From a smallholder's leaf to a bank transfer.</h2>
      <p className="lede">Tea factories in the low country buy green leaf from hundreds of smallholders every day, often in places with weak mobile coverage. Here's how a side-by-side app and SAP Cloud ERP share the work.</p>
      <div className="leaf">
        <div className="phone" role="img" aria-label="Illustration of a mobile weigh-in screen: supplier S-04417, 42.6 kilograms net of 1.2 kilograms deducted for water and coarse leaf, route 9, saved offline and waiting to sync">
          <div className="scr">
            <div className="bar"><small>Route 9 · Collection point 3</small><b>Weigh-in</b></div>
            <div className="pbody">
              <div className="big"><small>Net green leaf</small><div className="kg">42.6 kg</div><small>Gross 43.8 · deduction 1.2</small></div>
              <div className="f"><div><span>Supplier</span><b>S-04417 · R. Kumari</b></div><div><span>Leaf quality</span><b>Good · 2 leaves + bud</b></div><div><span>Fortnight to date</span><b>486.0 kg</b></div></div>
              <div className="go">Save and print receipt</div>
              <div className="off">● Saved offline · syncs when connected</div>
            </div>
          </div>
        </div>
        <div className="steps4">
          <div><span className="where">Mobile app · offline</span><h3>Weigh and record at the collection point</h3><p>The collector records weight, deductions and quality for each supplier and prints a receipt. It works without a signal.</p></div>
          <div><span className="where">SAP BTP</span><h3>Sync, check and combine</h3><p>When the lorry reaches coverage, the app syncs. The BTP service checks for duplicates and combines the day's intake by supplier.</p></div>
          <div><span className="where">SAP Cloud ERP</span><h3>Goods receipts and supplier liabilities</h3><p>Through released APIs, the service posts goods receipts and builds the fortnight's supplier invoices at the agreed leaf price.</p></div>
          <div><span className="where">SAP Cloud ERP</span><h3>Pay smallholders by bank transfer</h3><p>SAP's payment run creates a bank file for the fortnight, and the settlement statement goes to each supplier.</p></div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Agents are extensions too</span>
        <h2>Build your own AI agents, inside the same guardrails.</h2>
        <p className="lede">SAP's AI agents cover common tasks such as accruals and cash management. For tasks specific to your business, Joule Studio lets teams build custom agents by describing the outcome they want. SAP launched it at Sapphire 2026.</p>
        <p className="lede">Custom agents run on SAP's managed platform, use the same business context as SAP's own agents, and act only within each user's existing permissions.</p>
      </div>
      <div className="agents" style={{ marginTop: "8px" }}>
        <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h12M9 3v12"/></svg></span><div><h3>Describe, then refine</h3><p>Joule Studio drafts requirements, logic and tests from a plain-language description. Developers can also work in Python or TypeScript.</p></div></div>
        <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="6"/><path d="M9 6v3l2 2"/></svg></span><div><h3>Grounded in your SAP data</h3><p>Agents use SAP's Knowledge Graph and business data, so they understand what an order, a supplier or a cost centre means.</p></div></div>
        <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9l3 3 7-7"/></svg></span><div><h3>Governed like any extension</h3><p>Each agent has an owner, a clear scope, human approval where it matters, and a place in the regression tests.</p></div></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What you get from us</span>
        <h2>Every extension documented, owned and tested.</h2>
        <p className="lede">An extension is a small product. It needs an owner, documentation and tests, or it becomes the next system nobody dares to touch. Every extension we build comes with the following.</p>
      </div>
      <div className="includes">
        <div><h3>Extension register</h3><p>What exists, why, who owns it, and which SAP interfaces it uses.</p></div>
        <div><h3>Your code, your repository</h3><p>Source code in your Git repository, not on a consultant's laptop.</p></div>
        <div><h3>Tests in every release</h3><p>Automated tests added to the regression pack that runs before each SAP upgrade.</p></div>
        <div><h3>Roles and security</h3><p>Access by role, sign-on through SAP's identity service, and no personal data in custom fields.</p></div>
        <div><h3>Handover and training</h3><p>Your team can maintain key-user changes and simple apps themselves.</p></div>
        <div><h3>Clean-core check</h3><p>Every extension uses released interfaces only, checked before it goes live.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channel on clean core and building your own apps and agents.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=WK1U0BVexLE" target="_blank" rel="noopener" data-yt="WK1U0BVexLE" aria-label="Play on YouTube: Simplify and accelerate ERP with a clean core">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Clean core</span></div><div className="big">Why a clean core</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Simplify and accelerate ERP with a clean core</h3><p>How a clean core cuts technical debt and keeps SAP Cloud ERP ready for continuous change and AI.</p><span className="d">SAP · February 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=3dJeQu7sxk4" target="_blank" rel="noopener" data-yt="3dJeQu7sxk4" aria-label="Play on YouTube: Build AI agents with Joule Studio">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Sapphire 2026</span></div><div className="big">Agents in Joule Studio</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Build AI agents with Joule Studio</h3><p>A Sapphire demo: a pricing validation agent built by describing the outcome, tested and connected to other agents.</p><span className="d">SAP · May 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=6rtdMi-rv7g" target="_blank" rel="noopener" data-yt="6rtdMi-rv7g" aria-label="Play on YouTube: SAP Business AI Platform: build and govern AI agents">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">SAP Connect 2026</span></div><div className="big">Business AI Platform</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP Business AI Platform: build and govern AI agents</h3><p>How Joule Studio, the Knowledge Graph and Business Data Cloud give custom agents business context and governance.</p><span className="d">SAP · October 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Do we need to pay for SAP BTP?</summary><p>Key-user changes and developer extensions inside SAP Cloud ERP come with your subscription, although developer extensions need the three-system landscape. Side-by-side apps run on SAP BTP services, which are subscribed separately and sized by use. We size this with you before you commit.</p></details>
        <details><summary>Will our extensions break when SAP upgrades?</summary><p>Not if they're built on released interfaces, which is the only way SAP Cloud ERP allows. We also run each extension's tests on the upgraded test system before SAP upgrades production.</p></details>
        <details><summary>Our old ERP has hundreds of customisations. Do we rebuild them all?</summary><p>Usually not. When we go through them, many turn out to be reports that standard analytics now covers, or workarounds for processes SAP now handles. The rest become key-user changes, developer extensions or side-by-side apps, and only where they still add value.</p></details>
        <details><summary>Low-code or pro-code?</summary><p>Both have a place. Low-code with SAP Build is fast for forms, approvals and simple mobile apps. Pro-code with CAP or ABAP Cloud suits complex logic, high volumes and apps you'll grow over years. We choose per app and tell you why.</p></details>
        <details><summary>Can our own developers build extensions?</summary><p>Yes, and we encourage it. Many clients have us build the first extensions together with their team, set the standards, and review what the team builds after that.</p></details>
        <details><summary>Who owns what we build?</summary><p>You do. The code lives in your repository and runs in your SAP accounts, and the documentation is handed over with it.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Bring us your list of "SAP doesn't do this".</h2>
          <p className="lede">In one workshop, we take each requirement and tell you whether standard SAP covers it, which of the three options fits, and roughly what it takes.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an extensions workshop →</Link></div>
        </div>
        <ul>
          <li>Standard first, then the simplest option</li>
          <li>Key-user, developer or side-by-side</li>
          <li>Low-code or pro-code, per app</li>
          <li>BTP services and sizing</li>
          <li>Ownership and support model</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
