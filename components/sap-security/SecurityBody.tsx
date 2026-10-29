import Link from "next/link";

/** The sections of the Security, Roles & Authorisations page, converted from the supplied HTML. */
export function SecurityBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Security, Roles &amp; Authorisations</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Security, Roles &amp; Authorisations</span>
          <h1>The right access for every person, <em>and nothing more.</em></h1>
          <p className="lede">Who can post a journal, release a payment or change a supplier's bank account? In SAP Cloud ERP that's decided by business roles. Design them well and your auditors are happy, your people can do their jobs, and you don't pay for licences nobody needs. We design, build and look after your roles, from the first workshop to every upgrade after go-live.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Review your access design →</a>
            <a href="#model" className="btn sec">How access works</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of the Maintain Business Roles app showing a custom role for accounts payable clerks in Sri Lanka with five business catalogs, write access restricted to company codes LK01 and LK02, and 14 assigned users">
            <div className="shell"><span className="sap">SAP</span><span className="t">Maintain Business Roles</span><span className="joule-btn"></span><span className="av">IT</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Business catalogs</div><div className="s">In this role</div></div><div className="k">5</div></div>
                <div className="tile"><div><div className="h">Assigned users</div><div className="s">Active</div></div><div className="k">14</div></div>
                <div className="tile"><div><div className="h">SoD conflicts</div><div className="s">Last review</div></div><div className="k pos">0</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Z_AP_CLERK_LK · Accounts payable clerk, Sri Lanka</div>
                <div className="row"><span>Accounts payable · invoice processing</span><span className="pill ok">Write</span></div>
                <div className="row"><span>Accounts payable · supplier display</span><span className="pill in">Read</span></div>
                <div className="row"><span>Company code restriction</span><span className="pill in">LK01, LK02</span></div>
                <div className="row"><span>Payment release</span><span className="pill wr">Not included</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of SAP's Maintain Business Roles app. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="model">
    <div className="in">
      <span className="eyebrow">How access works</span>
      <h2>Four building blocks decide what anyone can do.</h2>
      <p className="lede">SAP Cloud ERP doesn't use the old authorisation objects and profiles of on-premise SAP. Access is built from four blocks, and SAP delivers most of them ready-made. The work is in combining them to fit your organisation.</p>
      <div className="model">
        <div className="mstep"><span className="n">1 · Business user</span><h3>A person</h3><p>Every employee who signs in, linked to their record in HR or the employee master.</p><div className="eg">Nimali Perera, accounts payable</div></div>
        <div className="mstep"><span className="n">2 · Business role</span><h3>A job</h3><p>What a job needs, built by you from SAP's catalogs. A user can hold several roles.</p><div className="eg">Accounts payable clerk, Sri Lanka</div></div>
        <div className="mstep"><span className="n">3 · Business catalog</span><h3>A set of apps</h3><p>Delivered and maintained by SAP. Each catalog groups the apps for one task and is designed to avoid conflicts.</p><div className="eg">Supplier invoice processing</div></div>
        <div className="mstep"><span className="n">4 · Restriction</span><h3>A limit on data</h3><p>Which company codes, plants or sales areas a role can see or change, and whether it can only read.</p><div className="eg">Write in LK01 and LK02 only</div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Role design</span>
        <h2>Start from the jobs, not from SAP's demo roles.</h2>
        <p className="lede">SAP ships standard roles so you can try the system. They're for demos and testing and should never be given to real users in production: they're too broad, and they cost you licences. We build your own roles from SAP's catalogs, one per job, mapped to how your teams really work.</p>
        <p className="lede">We start from SAP's list of apps and the catalogs they belong to, run workshops with each department, and agree a role matrix your managers can sign off. Each role also gets its own launchpad space, so people see only the apps they use.</p>
        <div className="facts">
          <div className="fact"><b>Per job</b><span>one role for each real job, not one per person</span></div>
          <div className="fact"><b>Signed off</b><span>a role matrix your managers approve</span></div>
          <div className="fact"><b>Tidy</b><span>a launchpad with only the apps each role needs</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of the restrictions on a business role: company code write access LK01 and LK02, read access to all company codes, plant restricted to Colombo and Kandy, purchasing group restricted, and payment release not granted">
          <div className="shell"><span className="sap">SAP</span><span className="t">Maintain Restrictions</span><span className="joule-btn"></span><span className="av">IT</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Z_BUYER_LK · Buyer, Sri Lanka</div>
              <div className="rst"><span><b>Company code</b> · write</span><span className="vals"><span>LK01</span><span>LK02</span></span></div>
              <div className="rst"><span><b>Company code</b> · read</span><span className="vals"><span>All</span></span></div>
              <div className="rst"><span><b>Plant</b> · write</span><span className="vals"><span>Colombo</span><span>Kandy</span></span></div>
              <div className="rst"><span><b>Purchasing group</b> · write</span><span className="vals"><span>Raw materials</span><span>Packaging</span></span></div>
              <div className="rst"><span><b>Purchase order value</b></span><span className="vals"><span>Approval above limit</span></span></div>
              <div className="rst"><span><b>Supplier bank details</b></span><span className="vals"><span className="no">No access</span></span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of role restrictions in SAP Cloud ERP. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Roles and licences</span>
      <h2>Your role design decides your licence bill.</h2>
      <p className="lede">In SAP Cloud ERP, every app belongs to a catalog, and every catalog has a licence category. A user's licence type follows the most demanding catalog in their roles. One careless app in a role can move a whole team to a more expensive user type. We design roles with the licence category in view from the start, and check it again whenever a role changes.</p>
      <div className="users">
        <table>
          <thead><tr><th>Who</th><th>Typical access</th><th>What to watch</th></tr></thead>
          <tbody>
            <tr><td data-label="Who">Professional users</td><td data-label="Typical access">Finance, sales, procurement and planning teams who create and change documents.</td><td data-label="What to watch">Give each team only the catalogs its job needs.</td></tr>
            <tr><td data-label="Who">Operational users</td><td data-label="Typical access">Warehouse, production and service staff doing focused, repetitive tasks.</td><td data-label="What to watch">A single professional catalog can move them to a higher user type.</td></tr>
            <tr><td data-label="Who">Self-service users</td><td data-label="Typical access">Employees who approve, request or look up information now and then.</td><td data-label="What to watch">Keep their roles to approvals and self-service apps.</td></tr>
            <tr><td data-label="Who">Technical users</td><td data-label="Typical access">Interfaces and integrations that call SAP's APIs.</td><td data-label="What to watch">Communication users are set up separately from people.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">SAP's user types and their names change with SAP's licensing model. We check your design against your current SAP contract and give you the count for each type before you sign.</p>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Segregation of duties</span>
        <h2>No one should be able to create a supplier and pay them.</h2>
        <p className="lede">SAP designs its catalogs so that a single catalog doesn't combine conflicting tasks. Conflicts appear when roles combine catalogs, or when one person holds several roles. We define the conflicts that matter to your auditors, check every role and user against them, and document the controls where a small team means one person must do both.</p>
        <p className="lede">For companies that need more, SAP Cloud Identity Access Governance adds automated risk analysis, access requests with approvals, and regular access reviews by managers. We help you decide whether you need it.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a segregation of duties review showing four rules: maintain supplier and process payments with one conflict mitigated, create purchase order and post goods receipt with no conflict, post journal and approve journal with no conflict, and maintain customer credit limit and create sales order with no conflict">
          <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MT</span><span className="t">Access review · quarterly</span><span className="av">AU</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Users checked</div><div className="s">All active</div></div><div className="k">186</div></div>
              <div className="tile"><div><div className="h">Conflicts</div><div className="s">Found</div></div><div className="k neg">1</div></div>
              <div className="tile"><div><div className="h">Mitigated</div><div className="s">With control</div></div><div className="k pos">1</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Conflict rules</div>
              <div className="sod"><span>Maintain supplier · run payments<small>1 user, small branch team · monthly review by CFO</small></span><span className="pill wr">Mitigated</span></div>
              <div className="sod"><span>Create purchase order · post goods receipt</span><span className="pill ok">Clear</span></div>
              <div className="sod"><span>Post journal entry · approve journal entry</span><span className="pill ok">Clear</span></div>
              <div className="sod"><span>Change credit limit · create sales order</span><span className="pill ok">Clear</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a Mawkish access review report. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Identity and sign-on</span>
      <h2>One sign-in, managed where your people already are.</h2>
      <p className="lede">SAP Cloud ERP signs users in through SAP Cloud Identity Services, which can hand over to the directory you already use, such as Microsoft Entra ID. Your people use their usual company sign-in and multi-factor authentication. When someone leaves, disabling them in your directory closes their SAP access too.</p>
      <div className="flow">
        <svg viewBox="0 0 1000 170" role="img" aria-label="Sign-in flow: a user opens SAP Cloud ERP, which sends them to SAP Cloud Identity Services, which hands over to the corporate directory such as Microsoft Entra ID for sign-in and multi-factor authentication, then the user returns to SAP signed in">
          <g fontFamily="inherit" fontSize="15" fontWeight="700" textAnchor="middle">
            <rect x="10" y="40" width="200" height="64" rx="12" fill="none" stroke="#7f938a"/><text x="110" y="70" fill="currentColor">Your employee</text><text x="110" y="90" fontSize="12" fontWeight="500" fill="#7f938a">opens SAP</text>
            <rect x="270" y="40" width="200" height="64" rx="12" fill="none" stroke="#7f938a"/><text x="370" y="70" fill="currentColor">SAP Cloud ERP</text><text x="370" y="90" fontSize="12" fontWeight="500" fill="#7f938a">asks who they are</text>
            <rect x="530" y="40" width="200" height="64" rx="12" fill="none" stroke="#34b386"/><text x="630" y="70" fill="currentColor">Identity Services</text><text x="630" y="90" fontSize="12" fontWeight="500" fill="#7f938a">SAP's identity broker</text>
            <rect x="790" y="40" width="200" height="64" rx="12" fill="none" stroke="#7f938a"/><text x="890" y="70" fill="currentColor">Your directory</text><text x="890" y="90" fontSize="12" fontWeight="500" fill="#7f938a">password and MFA</text>
          </g>
          <g stroke="#7f938a" strokeWidth="2" fill="none"><path d="M210 72h52"/><path d="M470 72h52"/><path d="M730 72h52"/><path d="M256 66l8 6-8 6M516 66l8 6-8 6M776 66l8 6-8 6"/></g>
          <path d="M890 112v20H110v-20" stroke="#34b386" strokeWidth="2" fill="none" strokeDasharray="5 5"/>
          <text x="500" y="160" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#34b386">signed in once, with your usual company account</text>
        </svg>
        <ol className="flow-list"><li><b>Your employee</b> opens SAP.</li><li><b>SAP Cloud ERP</b> asks who they are.</li><li><b>SAP Cloud Identity Services</b> passes the request on.</li><li><b>Your directory</b> checks their password and MFA.</li><li>They're signed in with their usual company account.</li></ol>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">After go-live</span>
        <h2>Roles need looking after, especially at upgrades.</h2>
        <p className="lede">SAP adds and changes apps in its catalogs with every release. After each upgrade, SAP lists the role changes waiting for you, and someone needs to review them: some add useful new apps, some need a restriction set before people can use them. We do that review for you, as part of every release.</p>
        <p className="lede">Data protection matters more every year. Sri Lanka's Personal Data Protection Act brings its compliance obligations into force from 1 January 2027. We help you limit who sees personal data, keep it out of custom fields that aren't logged, and use SAP's tools for blocking and deleting personal data when it's no longer needed.</p>
      </div>
      <div className="includes">
        <div><h3>Upgrade role review</h3><p>New and changed apps reviewed and approved after every SAP release.</p></div>
        <div><h3>Joiners, movers, leavers</h3><p>A simple process so access follows people as they change jobs.</p></div>
        <div><h3>Access reviews</h3><p>Managers confirm their team's access every quarter or half-year.</p></div>
        <div><h3>Personal data</h3><p>Access to employee, customer and supplier personal data kept to those who need it.</p></div>
        <div><h3>Audit evidence</h3><p>Role matrix, conflict rules and review records ready for your auditors.</p></div>
        <div><h3>Emergency access</h3><p>A controlled, logged way to give temporary extra access when something breaks.</p></div>
      </div>
    </div>
  </section>



  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Can we just use SAP's standard roles?</summary><p>Only for demos and testing. SAP's standard roles are broad examples. In production they give people more access than they need and can push users into a higher licence type. We build your roles from SAP's catalogs instead.</p></details>
        <details><summary>How long does role design take?</summary><p>It depends on how many jobs and companies you have. For a mid-sized company, role design runs alongside the project for several weeks and needs time from each department head. Starting early avoids a rush before go-live.</p></details>
        <details><summary>Can our existing ECC or IFS roles be copied across?</summary><p>Not directly. SAP Cloud ERP uses a different access model. Your current roles are still useful as a starting point for who does what, and we map them to the new catalogs.</p></details>
        <details><summary>Do we need SAP Cloud Identity Access Governance?</summary><p>Many companies manage well with clear roles, conflict rules and regular reviews. Larger or regulated companies, or those with strict audit demands, often find the automated risk analysis and access requests worth it. We'll help you decide.</p></details>
        <details><summary>Can we keep using our Microsoft sign-in?</summary><p>Yes. SAP Cloud Identity Services can hand sign-in over to Microsoft Entra ID or another corporate directory, so people use the account and multi-factor authentication they already have.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Know who can do what, and prove it.</h2>
          <p className="lede">In one session, we review your current roles or your plans for them, show you where the access and licence risks are, and propose a role design your auditors will accept.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an access review →</Link></div>
        </div>
        <ul>
          <li>Role matrix by job</li>
          <li>Licence impact of each role</li>
          <li>Segregation of duties rules</li>
          <li>Single sign-on with your directory</li>
          <li>Role reviews every release</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
