import Link from "next/link";

/** The sections of the Licensing & Commercial Advisory page, converted from the supplied HTML. */
export function LicensingBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Licensing &amp; Commercial Advisory</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Licensing &amp; Commercial Advisory</span>
          <h1>Get your SAP licence right <em>the first time.</em></h1>
          <p className="lede">SAP Cloud ERP is licensed per user, per month, by what each person does in the system. Get the mix right and you pay for what you use. Get it wrong and you either overpay for years or face a true-up later. We size your licence from your actual roles and check every entitlement, so the contract fits the business you are and the one you're becoming.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Request a licence review →</a>
            <a href="#how" className="btn sec">How SAP licensing works</a>
          </div>
          <p className="name-note"><b>Based on SAP's current model.</b> This page reflects SAP's per-user licensing for SAP Cloud ERP, which replaced the older FUE model for new contracts in 2025.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a licence sizing workbench showing users by role mapped to SAP user types, with flags for over-licensed roles">
            <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MK</span><span className="t">Licence sizing · 162 users</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Roles mapped</div><div className="s">From your org chart</div></div><div className="k">27</div></div>
                <div className="tile"><div><div className="h">Full-access users</div><div className="s">Base or Premium</div></div><div className="k pos">34</div></div>
                <div className="tile"><div><div className="h">Roles to fix</div><div className="s">Over-licensed</div></div><div className="k" style={{ color: "#e9730c" }}>3</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Role → user type</div>
                <div className="row"><span>Financial controller · 4</span><span className="pill ok">Finance Base</span></div>
                <div className="row"><span>Production planner · 6</span><span className="pill ok">Supply Chain Base</span></div>
                <div className="row"><span>AP clerk · 5</span><span className="pill wr">Base → Operational</span></div>
                <div className="row"><span>Sales coordinator · 14</span><span className="pill in">Operational</span></div>
                <div className="row"><span>Line managers · 58</span><span className="pill in">Self-Service</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a licence sizing exercise. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="how">
    <div className="in two">
      <div>
        <span className="eyebrow">How SAP licenses Cloud ERP</span>
        <h2>Four levels of user, each one including the level below.</h2>
        <p className="lede">You buy SAP Cloud ERP as a package, mainly Finance or Supply Chain, with a mix of user types. Each user type includes everything below it, so a Finance Base user can also do everything an Operational or Self-Service user can.</p>
        <p className="lede">The skill is in giving each person the lowest level that covers their actual work. Most companies have far fewer full-access users than they assume.</p>
      </div>
      <div className="nest">
        <div className="nb n1"><div className="lbl"><h3>Premium</h3><span className="for">Finance Premium · Supply Chain Premium</span></div><p>Everything in Base, plus wider scope such as projects, subscription billing, sustainability and compliance, and premium AI.</p></div>
        <div className="nb n2"><div className="lbl"><h3>Base</h3><span className="for">Finance Base · Supply Chain Base · Combo Base</span></div><p>Full finance or full supply chain processes. Combo Base covers both for cross-functional power users.</p></div>
        <div className="nb n3"><div className="lbl"><h3>Operational</h3><span className="for">Day-to-day transaction users</span></div><p>Sales orders, purchasing, deliveries, service and project tasks.</p></div>
        <div className="nb n4"><div className="lbl"><h3>Self-Service</h3><span className="for">Everyone else</span></div><p>Approvals, requests, timesheets, confirmations and display.</p></div>
        <div className="ex"><span>Joule and embedded AI included at every level</span><span>Developer users licensed separately</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">The detail most people miss</span>
      <h2>Your security roles decide your bill.</h2>
      <p className="lede">In SAP Cloud ERP, each person's user type is set by the highest-level app they can access. Give an accounts payable clerk one advanced finance app "just in case", and they're licensed as Finance Base instead of Operational, for every month of the contract. That's why licence sizing and role design have to be done together.</p>
      <div className="flow" role="img" aria-label="How a user type is set: a person holds business roles, each role contains app catalogs with a price level, and the highest level across all catalogs sets the person's user type. Example: an AP clerk with one advanced catalog becomes Finance Base; after removing it they are Operational.">
        <div className="fhead" aria-hidden="true">
          <span>PERSON</span>
          <span>ROLES AND APP CATALOGS</span>
          <span>HIGHEST LEVEL</span>
          <span>USER TYPE</span>
        </div>
        <div className="frow">
          <div className="fp" data-cap="PERSON">
            <b>AP clerk</b>
            <span>Standard role, as delivered</span>
          </div>
          <span className="fa" aria-hidden="true" />
          <div className="fc" data-cap="ROLES AND APP CATALOGS">
            <span className="chip">Invoices · Ops</span>
            <span className="chip">Payments · Ops</span>
            <span className="chip adv">GL posting · Adv.</span>
            <span className="chip">Suppliers · Ops</span>
          </div>
          <span className="fa" aria-hidden="true" />
          <div className="fh adv" data-cap="HIGHEST LEVEL">Advanced</div>
          <span className="fa" aria-hidden="true" />
          <div className="ft base" data-cap="USER TYPE">Finance Base</div>
        </div>
        <div className="frow good">
          <div className="fp" data-cap="PERSON">
            <b>AP clerk</b>
            <span>Custom role, right-sized</span>
          </div>
          <span className="fa" aria-hidden="true" />
          <div className="fc" data-cap="ROLES AND APP CATALOGS">
            <span className="chip">Invoices · Ops</span>
            <span className="chip">Payments · Ops</span>
            <span className="chip o2">Suppliers · Ops</span>
            <span className="chip rm">removed</span>
          </div>
          <span className="fa" aria-hidden="true" />
          <div className="fh ops" data-cap="HIGHEST LEVEL">Operational</div>
          <span className="fa" aria-hidden="true" />
          <div className="ft opsok" data-cap="USER TYPE">Operational</div>
        </div>
      </div>
      <p className="note">SAP's standard roles are designed for demos and give people more access than they need. They should never go to production unchanged, for security reasons as well as cost.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Already in the package</span>
      <h2>Know what you've bought before you buy more.</h2>
      <p className="lede">SAP's Cloud ERP packages include far more than user access. We often find customers planning to buy, or build, something their package already covers. Here's what comes with a Finance package today.</p>
      <div className="ents">
        <div className="cap"><span className="tag2">Banking</span><h3>Bank connectivity</h3><p>A connection to your banks for payments and statements, with a yearly transaction allowance.</p></div>
        <div className="cap"><span className="tag2">Compliance</span><h3>E-documents and tax reporting</h3><p>SAP Document and Reporting Compliance, with an allowance of documents per year.</p></div>
        <div className="cap"><span className="tag2">Working capital</span><h3>Supplier and receivables finance</h3><p>Taulia solutions up to a spend threshold, which is higher with Premium.</p></div>
        <div className="cap"><span className="tag2">Extend</span><h3>SAP Build and developers</h3><p>SAP Build access for every user, plus developer seats in each system for upgrade-safe extensions.</p></div>
        <div className="cap"><span className="tag2">Integrate</span><h3>Digital access</h3><p>20,000 documents a year per full-access user for third-party systems that create documents in SAP.</p></div>
        <div className="cap"><span className="tag2">Run</span><h3>Systems and AI</h3><p>Development, test and production systems, a parallel project line, a memory allowance that grows with users, and Joule.</p></div>
      </div>
      <p className="note">Entitlements and allowances change with SAP's packages. We check them against SAP's current terms for your quote.</p>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Beyond the user count</span>
        <h2>Six things that change the total.</h2>
        <p className="lede">The user mix is the biggest number, but it isn't the only one. These are the items we check on every quote, because they're the ones that surprise people in year two.</p>
      </div>
      <div className="drivers">
        <div className="drv"><h3><i></i>Premium AI</h3><p>Premium packages come with a required purchase of SAP AI Units, which pay for AI agents and assistants. Budget for it from the start.</p></div>
        <div className="drv"><h3><i></i>Integrations</h3><p>Documents created in SAP by other systems, such as an e-commerce site, count against your digital access allowance.</p></div>
        <div className="drv"><h3><i></i>Data growth</h3><p>System memory grows with users. High transaction volumes may need extra memory blocks, or archiving.</p></div>
        <div className="drv"><h3><i></i>Add-ons</h3><p>Some capabilities, such as advanced planning, group consolidation or extra industry scope, are licensed separately. We confirm which ones you need.</p></div>
        <div className="drv"><h3><i></i>Growth and phases</h3><p>If you roll out in phases or are adding entities, we plan when users join, so you don't pay for users before they go live.</p></div>
        <div className="drv"><h3><i></i>Existing contracts</h3><p>Customers on older GROW (FUE-based) contracts, or with SAP products like Concur, have specific rules on what they're entitled to.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">A worked example</span>
      <h2>A 160-person distributor, sized two ways.</h2>
      <p className="lede">A common first estimate is "everyone who logs in needs a full licence". Here's what changes when each role is mapped to the work it actually does.</p>
      <div className="example">
        <div className="panel">
          <h3>First estimate</h3>
          <p className="sub">Every system user treated as a full-access user</p>
          <div className="stackbar"><span style={{ flex: "160", background: "#7a3d12" }}>160 full access</span></div>
          <div className="key"><span><i style={{ background: "#7a3d12" }}></i>Base or Premium</span><span>160</span></div>
          <div style={{ marginTop: "22px" }}><div className="big">100%<small>of users on full access</small></div></div>
        </div>
        <div className="panel" style={{ borderColor: "var(--green-hi)" }}>
          <h3>After role mapping</h3>
          <p className="sub">Each role given the lowest user type that covers its work</p>
          <div className="stackbar">
            <span style={{ flex: "14", background: "#17694b" }}>14</span>
            <span style={{ flex: "12", background: "#2f9e76" }}>12</span>
            <span style={{ flex: "4", background: "#4fb38a" }}></span>
            <span style={{ flex: "52", background: "#6cc19e", color: "#0f2a1f" }}>52</span>
            <span style={{ flex: "78", background: "#b7e1cf", color: "#0f2a1f" }}>78</span>
          </div>
          <div className="key">
            <span><i style={{ background: "#17694b" }}></i>Finance Base</span><span>14</span>
            <span><i style={{ background: "#2f9e76" }}></i>Supply Chain Base</span><span>12</span>
            <span><i style={{ background: "#4fb38a" }}></i>Combo Base</span><span>4</span>
            <span><i style={{ background: "#6cc19e" }}></i>Operational</span><span>52</span>
            <span><i style={{ background: "#b7e1cf" }}></i>Self-Service</span><span>78</span>
          </div>
          <div style={{ marginTop: "22px" }}><div className="big">19%<small>of users on full access</small></div></div>
        </div>
      </div>
      <p className="note">Illustrative example, not a quote. Actual results depend on your roles, SAP's minimum user counts, and current SAP terms.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">How we work</span>
      <h2>From org chart to signed contract, and every renewal after.</h2>
      <p className="lede">Licensing advice isn't a one-off. Your licence should change as your business does. We stay involved from the first estimate through to every renewal.</p>
      <div className="svc">
        <div><span className="st">Step 1</span><h3>Role inventory</h3><p>Who does what today, by department, entity and location.</p></div>
        <div><span className="st">Step 2</span><h3>User-type mapping</h3><p>Each role mapped to SAP app catalogs and the lowest user type that fits.</p></div>
        <div><span className="st">Step 3</span><h3>Entitlement check</h3><p>What the package covers, which add-ons you need, and digital access and AI requirements.</p></div>
        <div><span className="st">Step 4</span><h3>Scenarios</h3><p>Phased go-lives, growth and new entities, modelled over the contract term.</p></div>
        <div><span className="st">Step 5</span><h3>Contract and renewals</h3><p>Review of the quote, then a usage check before each renewal.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>What happened to FUEs?</summary><p>For new contracts, SAP replaced Full Use Equivalents with named user types priced per user per month in 2025. Existing GROW customers on FUE contracts can stay on them. Whether to move to the new model is a case-by-case decision, and we can model both for you.</p></details>
        <details><summary>What are SAP AI Units?</summary><p>They're the currency for SAP's premium AI: agents and assistants that carry out work for you. Basic AI, including Joule and embedded AI features, is included with every user. Premium packages come with a required purchase of AI Units.</p></details>
        <details><summary>What is digital access?</summary><p>When another system creates documents in SAP, such as sales orders from a web shop or invoices from a portal, those documents are counted. Finance and Supply Chain users come with a yearly allowance that covers most mid-sized companies. We size it from your integration list.</p></details>
        <details><summary>Can we change our user mix later?</summary><p>You can add users and user types during the contract as you grow. Reducing them usually has to wait until renewal, which is why getting the starting mix right matters.</p></details>
        <details><summary>Does this apply to RISE with SAP too?</summary><p>SAP Cloud ERP Private has its own packages, but the same principle applies: licence by role, check entitlements, and plan for growth. We advise on both.</p></details>
        <details><summary>You're an SAP partner. Is your advice independent?</summary><p>We're an SAP partner, and we say so. Our interest is a customer who stays with us for years, and over-selling licences on day one is the fastest way to lose that customer. Every number we give you is backed by your own roles and SAP's published user-type definitions.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Bring us your org chart. We'll bring you a licence that fits.</h2>
          <p className="lede">Whether it's a first quote, a renewal or a move from an older GROW contract, we'll give you a role-based view of what you need and why.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Request a licence review →</Link></div>
        </div>
        <ul>
          <li>User mix mapped from your real roles</li>
          <li>Package entitlements checked line by line</li>
          <li>AI, integration and data costs planned up front</li>
          <li>Phasing and growth scenarios</li>
          <li>Renewal check-ins for the life of the contract</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
