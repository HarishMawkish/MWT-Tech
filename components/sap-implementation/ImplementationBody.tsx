import Link from "next/link";

/** The sections of the Cloud ERP Implementation page, converted from the supplied HTML. */
export function ImplementationBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Cloud ERP Implementation</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Cloud ERP Implementation</span>
          <h1>An SAP project that runs <em>like a plan, not a gamble.</em></h1>
          <p className="lede">Implementing SAP Cloud ERP is a defined sequence of decisions, builds and rehearsals. Getting them in the right order is what separates a calm go-live from a crisis. Mawkish runs every project on SAP Activate, with every requirement, test and decision tracked in SAP Cloud ALM, so you always know where you are and what's next.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Plan your implementation →</a>
            <a href="#plan" className="btn sec">See a typical project</a>
          </div>
          <p className="name-note"><b>For GROW and RISE.</b> This page describes a new implementation of SAP Cloud ERP. For moving an existing SAP ECC system, see RISE with SAP.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of an implementation project in SAP Cloud ALM, showing phase progress, open requirements, test status and an upcoming SAP release">
            <div className="shell"><span className="sap">SAP</span><span className="t">Cloud ALM · Project Overview</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Phase</div><div className="s">Week 17 of 28</div></div><div className="k" style={{ fontSize: "19px" }}>Realize</div></div>
                <div className="tile"><div><div className="h">Requirements</div><div className="s">Closed / total</div></div><div className="k pos">41<small>/ 46</small></div></div>
                <div className="tile"><div><div className="h">Test cases</div><div className="s">Passed in Test</div></div><div className="k">212</div></div>
              </div>
              <div className="split">
                <div className="card-f">
                  <div className="h">Workstreams</div>
                  <div className="row"><span>Configuration</span><span className="pill ok">On track</span></div>
                  <div className="row"><span>Integrations · 5</span><span className="pill ok">On track</span></div>
                  <div className="row"><span>Data migration · load 2</span><span className="pill in">In progress</span></div>
                  <div className="row"><span>Roles and security</span><span className="pill wr">At risk</span></div>
                </div>
                <div className="card-f">
                  <div className="h">Upcoming</div>
                  <div className="row"><span>Release 2702 · Test upgrade</span><span className="pill wr">Feb</span></div>
                  <div className="row"><span>Mock load 3</span><b>Wk 20</b></div>
                  <div className="row"><span>UAT start</span><b>Wk 21</b></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a project tracked in SAP Cloud ALM. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="plan">
    <div className="in">
      <span className="eyebrow">A typical project</span>
      <h2>Seven months from kick-off to go-live.</h2>
      <p className="lede">A mid-sized company implementing finance, sales, procurement and inventory in one country, as a single phase. Bigger scope, more countries or heavy integration make it longer, and a phased rollout spreads it out. The shape stays the same.</p>
      <div className="plan">
        <svg viewBox="0 0 1000 330" role="img" aria-label="Example 28-week plan: Prepare weeks 1 to 3, Explore with fit-to-standard workshops weeks 3 to 9, Realize weeks 9 to 24 with configuration, integrations, data loads and testing, a release upgrade window around weeks 15 to 19, user acceptance testing weeks 20 to 23, Deploy weeks 24 to 28, go-live at week 28, then hypercare.">
          <g style={{ fontFamily: "var(--body)" }}>
            <g fontSize="11" style={{ fill: "var(--muted)" }} fontWeight="700">
              <text x="190" y="26">WK 1</text><text x="330" y="26">WK 6</text><text x="470" y="26">WK 11</text><text x="610" y="26">WK 16</text><text x="750" y="26">WK 21</text>
            </g>
            <rect x="574" y="36" width="112" height="282" rx="6" fill="#e9a23b" opacity=".14"/>
            <text x="580" y="312" fontSize="11" fontWeight="800" fill="#b7791f">SAP RELEASE UPGRADE</text>

            <g fontSize="13" style={{ fill: "var(--fg)" }} fontWeight="700">
              <text x="20" y="62">Prepare</text><text x="20" y="102">Explore</text><text x="20" y="142">Configure and extend</text><text x="20" y="182">Integrations</text><text x="20" y="222">Data migration</text><text x="20" y="262">Testing</text><text x="20" y="302">Deploy</text>
            </g>
            <rect x="190" y="46" width="84" height="24" rx="6" fill="#142019"/><text x="198" y="63" fontSize="11.5" fill="#fff" fontWeight="700">Kick-off</text>
            <rect x="246" y="86" width="196" height="24" rx="6" fill="#1f7a5a"/><text x="254" y="103" fontSize="11.5" fill="#fff" fontWeight="700">Fit-to-standard workshops</text>
            <rect x="414" y="126" width="336" height="24" rx="6" fill="#2f9e76"/><text x="422" y="143" fontSize="11.5" fill="#fff" fontWeight="700">Configuration, key-user and developer extensions</text>
            <rect x="470" y="166" width="280" height="24" rx="6" fill="#4fb38a"/><text x="478" y="183" fontSize="11.5" fill="#0f2a1f" fontWeight="700">Best-practice and custom integrations</text>
            <rect x="526" y="206" width="36" height="24" rx="6" fill="#6cc19e"/><text x="531" y="223" fontSize="11" fill="#0f2a1f" fontWeight="800">L1</text>
            <rect x="694" y="206" width="36" height="24" rx="6" fill="#6cc19e"/><text x="699" y="223" fontSize="11" fill="#0f2a1f" fontWeight="800">L2</text>
            <rect x="806" y="206" width="36" height="24" rx="6" fill="#6cc19e"/><text x="811" y="223" fontSize="11" fill="#0f2a1f" fontWeight="800">L3</text>
            <rect x="610" y="246" width="140" height="24" rx="6" fill="#b7e1cf"/><text x="618" y="263" fontSize="11.5" fill="#0f2a1f" fontWeight="700">End-to-end tests</text>
            <rect x="750" y="246" width="112" height="24" rx="6" fill="#142019"/><text x="758" y="263" fontSize="11.5" fill="#fff" fontWeight="700">UAT</text>
            <rect x="862" y="286" width="84" height="24" rx="6" fill="#142019"/><text x="870" y="303" fontSize="11.5" fill="#fff" fontWeight="700">Cutover</text>
            <line x1="950" y1="36" x2="950" y2="318" stroke="#1f7a5a" strokeWidth="2" strokeDasharray="5 4"/>
            <circle cx="950" cy="36" r="6" fill="#1f7a5a"/><text x="900" y="20" fontSize="12" fontWeight="800" fill="#1f7a5a">GO-LIVE</text>
          </g>
        </svg>
      </div>
      <p className="note">Illustrative plan. SAP upgrades the system twice a year. If an upgrade falls inside the project, we plan around it rather than letting it surprise us: about a month of reduced change while new features are assessed and regression tests run.</p>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">The systems</span>
        <h2>Four systems, one direction of travel.</h2>
        <p className="lede">You start with a starter system preloaded with SAP's best practices and sample data. That's where the workshops happen. After the workshops, SAP provides your own development, test and production systems. Every change is built in development, proven in test and moved to production through controlled transports. Nobody configures production directly.</p>
        <p className="lede">The starter system expires a year after contract start, so we plan the workshops early in the project.</p>
      </div>
      <div
        className="land"
        role="img"
        aria-label="Landscape: the starter system for workshops; then development, where configuration and extensions are built; changes transported to test for integration and acceptance testing; then to production."
      >
        <div className="lb starter">
          <b>Starter system</b>
          <span>SAP best practices and sample data · fit-to-standard workshops · expires after 12 months</span>
        </div>
        <div className="arr" aria-hidden="true">
          <svg viewBox="0 0 12 28" width="12" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 0V26M0 18l6 8 6-8" /></svg>
        </div>
        <div className="lb dev">
          <b>Development</b>
          <span>Configuration and key-user changes · upgrade-safe developer extensions</span>
          <span>Only the project team works here</span>
        </div>
        <div className="arr" aria-hidden="true">
          <svg viewBox="0 0 12 28" width="12" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 0V26M0 18l6 8 6-8" /></svg>
          <em>TRANSPORT</em>
        </div>
        <div className="row2">
          <div className="lb test">
            <b>Test</b>
            <span>End-to-end, integration and acceptance testing · upgraded first at each SAP release</span>
          </div>
          <div className="arr2" aria-hidden="true">
            <svg viewBox="0 0 28 12" width="28" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 6H26M18 0l8 6-8 6" /></svg>
          </div>
          <div className="lb prod">
            <b>Production</b>
            <span>Your live business · changes arrive only by transport · run and backed up by SAP</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What gets built</span>
      <h2>Nine workstreams, one plan.</h2>
      <p className="lede">An implementation is more than configuration. These are the workstreams we run in parallel, each with an owner on our side and yours, tracked in the same plan.</p>
      <div className="ws">
        <div className="cap"><span className="tag2">Foundation</span><h3>Configuration</h3><p>Scope, organisation structure, chart of accounts and process settings, entered in SAP's configuration tool from the workshop decisions.</p><p className="tip"><b>We:</b> settle the irreversible choices, such as ledgers, fiscal year and group currency, before anything else.</p></div>
        <div className="cap"><span className="tag2">Your differences</span><h3>Extensions</h3><p>Custom fields, logic, screens and apps, built at the lowest level that does the job so they survive every upgrade.</p><p className="tip"><b>We:</b> check each app's extension options before promising a field or rule.</p></div>
        <div className="cap"><span className="tag2">Connected</span><h3>Integrations</h3><p>SAP's prebuilt integrations where they exist, and custom APIs and SAP Integration Suite where they don't.</p><p className="tip"><b>We:</b> use SAP-maintained integrations first, because SAP keeps them working through every upgrade.</p></div>
        <div className="cap"><span className="tag2">Your history</span><h3>Data migration</h3><p>Master data, open items and balances, loaded with SAP's Migration Cockpit and rehearsed three times before go-live.</p><p className="tip"><b>We:</b> reconcile each load against your old system, record by record.</p></div>
        <div className="cap"><span className="tag2">Secure</span><h3>Roles and authorisations</h3><p>Custom business roles that give each person exactly what they need, and set their licence level correctly.</p><p className="tip"><b>We:</b> never take SAP's demo roles to production.</p></div>
        <div className="cap"><span className="tag2">Your brand</span><h3>Forms and output</h3><p>Invoices, purchase orders, delivery notes and emails in your branding, with printers and email channels set up.</p><p className="tip"><b>We:</b> name one owner for output early, because it touches every department.</p></div>
        <div className="cap"><span className="tag2">Insight</span><h3>Analytics and alerts</h3><p>Built-in dashboards, KPIs and SAP's situation alerts that flag problems, such as late deliveries or unbilled orders, before they cost you.</p><p className="tip"><b>We:</b> add every custom field to the reports that need it, not just the screens.</p></div>
        <div className="cap"><span className="tag2">Proof</span><h3>Testing</h3><p>From unit tests to full end-to-end runs and user acceptance, with automated tests built as each process is finished.</p><p className="tip"><b>We:</b> leave you a test library that makes every future upgrade faster.</p></div>
        <div className="cap"><span className="tag2">Adoption</span><h3>Change and training</h3><p>Role-based training, in-app guidance and key users in every department, ready for go-live day.</p><p className="tip"><b>We:</b> start change management at the workshops, not a week before go-live.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Data migration</span>
        <h2>Three rehearsals before the real thing.</h2>
        <p className="lede">Data is where go-lives slip. We load your data three times into the test system before cutover. Each load is checked against your old system and fixed at the source, until the final rehearsal is clean and timed to the hour.</p>
        <div className="mig" style={{ marginTop: "28px" }}>
          <div><b>Templates</b><p>Fill SAP's templates and upload. Right for most mid-sized volumes.</p><span>Most projects</span></div>
          <div><b>Staging database</b><p>Load large volumes through a separate database, repeatably.</p><span>High volumes</span></div>
          <div><b>Direct transfer</b><p>Pull selected data straight from an SAP ECC system.</p><span>ECC sources</span></div>
        </div>
      </div>
      <div>
        <div className="panel" style={{ border: "1px solid var(--line)", borderRadius: "16px", padding: "24px", background: "var(--bg-2)" }}>
          <h3 style={{ fontSize: "17px", marginBottom: "4px" }}>Records with errors, by load</h3>
          <p style={{ color: "var(--muted)", fontSize: "13.5px" }}>Example: customers, suppliers, materials and open items</p>
          <div className="loads">
            <div className="ld"><span>Mock load 1</span><span className="tr"><i className="ok" style={{ width: "86%" }}></i><i className="er" style={{ width: "14%" }}></i></span><b>14% errors</b></div>
            <div className="ld"><span>Mock load 2</span><span className="tr"><i className="ok" style={{ width: "97%" }}></i><i className="er" style={{ width: "3%" }}></i></span><b>3% errors</b></div>
            <div className="ld"><span>Mock load 3</span><span className="tr"><i className="ok" style={{ width: "99.6%" }}></i><i className="er" style={{ width: ".4%" }}></i></span><b>0.4% errors</b></div>
            <div className="ld"><span>Cutover</span><span className="tr"><i className="ok" style={{ width: "100%" }}></i></span><b>Reconciled</b></div>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "16px" }}>Illustrative. Most first-load errors come from the source data, such as missing tax numbers, duplicate customers or unused materials, not from SAP.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Testing</span>
        <h2>Your people sign off. Not ours.</h2>
        <p className="lede">We test continuously as we build. But the test that matters is user acceptance, run by the same business experts who sat in the workshops, on processes they approved. It's mandatory before go-live, and it's recorded in SAP Cloud ALM, case by case.</p>
        <p className="lede">As each process is finished, we also build its automated test. That library is what makes every future SAP upgrade a routine check rather than a project.</p>
      </div>
      <div className="tpyr">
        <div className="tp" style={{ background: "#142019", width: "62%" }}><b>Regression</b><span>Automated, at every SAP release</span></div>
        <div className="tp" style={{ background: "#17694b", width: "74%" }}><b>User acceptance</b><span>Your experts, mandatory sign-off</span></div>
        <div className="tp" style={{ background: "#2f9e76", width: "87%" }}><b>End-to-end and integration</b><span>Full processes across systems, with migrated data</span></div>
        <div className="tp" style={{ background: "#6cc19e", width: "100%", color: "#0f2a1f" }}><b>Unit and role tests</b><span>Every setting and role, as it's built</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">The team</span>
      <h2>Who's needed, on both sides.</h2>
      <p className="lede">The most underestimated part of any ERP project is the customer's own time. We tell you upfront who we need and roughly how much of their week, so you can plan around it.</p>
      <div className="team">
        <div className="panel">
          <h3>Your team</h3>
          <div className="r"><b>Executive sponsor<small>Decisions, escalations, steering committee</small></b><span>Fortnightly</span></div>
          <div className="r"><b>IT contact<small>Receives the systems, manages users. One named person from day one</small></b><span>Part-time throughout</span></div>
          <div className="r"><b>Business experts<small>Two to four per role, for workshops and acceptance testing</small></b><span>Peaks in Explore and UAT</span></div>
          <div className="r"><b>Data owner<small>Access to and authority over legacy data</small></b><span>Peaks at each load</span></div>
          <div className="r"><b>Change lead<small>Communication, training and adoption</small></b><span>Grows to go-live</span></div>
        </div>
        <div className="panel">
          <h3>Mawkish team</h3>
          <div className="r"><b>Project manager<small>Plan, timeboxes, risks and reporting in SAP Cloud ALM</small></b><span>Throughout</span></div>
          <div className="r"><b>Lead solution consultant<small>Scope, organisation structure, finance foundations, cross-team design</small></b><span>Throughout</span></div>
          <div className="r"><b>Functional consultants<small>One or more per area, such as finance, sales, procurement and operations</small></b><span>Explore to Deploy</span></div>
          <div className="r"><b>Integration and development<small>Custom integrations and extensions</small></b><span>Realize</span></div>
          <div className="r"><b>Data and test leads<small>Migration rehearsals, test plans and automation</small></b><span>Realize to Deploy</span></div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What we tell every customer upfront</span>
      <h2>Six things you should hear before you sign.</h2>
      <p className="lede">None of these are problems if you plan for them. All of them become problems if nobody mentions them.</p>
      <div className="truths">
        <div className="truth"><span className="n">1</span><div><h3>The starter system has a 12-month clock</h3><p>It expires a year after contract start, so workshops need to happen early. A slow start costs you time you can't get back.</p></div></div>
        <div className="truth"><span className="n">2</span><div><h3>SAP upgrades don't wait for your project</h3><p>If a release lands mid-project, expect about a month of reduced change while it's tested. We build it into the plan from day one.</p></div></div>
        <div className="truth"><span className="n">3</span><div><h3>A few early choices are permanent</h3><p>Accounting standards, fiscal year, group currency and confirmed organisation units can't be changed later without rebuilding.</p></div></div>
        <div className="truth"><span className="n">4</span><div><h3>Role design takes weeks, not days</h3><p>SAP's demo roles are too broad for security and for licensing. Proper roles need your data owners' input, and we start early.</p></div></div>
        <div className="truth"><span className="n">5</span><div><h3>Custom integrations are yours to keep</h3><p>SAP maintains its prebuilt integrations through upgrades. Custom ones need an owner after go-live, either your team or ours.</p></div></div>
        <div className="truth"><span className="n">6</span><div><h3>Your experts' time is the critical path</h3><p>If the people who know the processes can't attend workshops and testing, the project waits. Leadership needs to make it their priority.</p></div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Go-live</span>
      <h2>A rehearsed cutover, then a month of hypercare.</h2>
      <p className="lede">Go-live follows a runbook we've already run in rehearsal. Every task has an owner, a start time and a check. After go-live, our consultants stay on hand while your team settles in, then hand over to ongoing support.</p>
      <div className="runbook">
        <div className="rb"><span className="t">T-21</span><h3>Final rehearsal</h3><p>Full dress rehearsal of the data load and cutover tasks, timed.</p></div>
        <div className="rb"><span className="t">T-14</span><h3>Change freeze</h3><p>No new configuration. Only fixes go to production.</p></div>
        <div className="rb"><span className="t">T-7</span><h3>Go / no-go</h3><p>Steering committee confirms readiness against agreed criteria.</p></div>
        <div className="rb"><span className="t">T-3</span><h3>Data load</h3><p>Master data, open items and balances loaded and reconciled.</p></div>
        <div className="rb go"><span className="t">T-0</span><h3>Go-live</h3><p>Users switch over. The old system becomes read-only.</p></div>
        <div className="rb"><span className="t">+30</span><h3>Hypercare</h3><p>Daily check-ins, first month-end close together, then handover to support.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>How long will our implementation take?</summary><p>For a mid-sized company with standard scope in one country, typically six to eight months. More countries, complex manufacturing, many integrations or large data volumes extend it. We give you a firm plan after the readiness assessment and workshops.</p></details>
        <details><summary>Can we go live in phases?</summary><p>Yes, and many companies do. The usual pattern is finance, sales and procurement first, then manufacturing, warehouse or more countries in later phases. SAP offers a parallel project line, so later phases can be built without disturbing the live system.</p></details>
        <details><summary>What happens to our old system?</summary><p>It stays read-only after go-live for reference and audit. We migrate master data, open items and balances, and you decide how much history to bring across. Often the answer is less than you'd expect, because older data is still searchable in the old system.</p></details>
        <details><summary>Who owns the system after go-live?</summary><p>You do. SAP runs the infrastructure and upgrades. Your team, or Mawkish through our support service, looks after the application: users, roles, changes, integrations and testing each release.</p></details>
        <details><summary>Will our users need a lot of training?</summary><p>Less than with older ERPs. SAP's apps are built around specific tasks and include in-app help and guided simulations. We train key users first, who then support their colleagues, with role-based sessions before go-live.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Bring us your scope. We'll bring you a plan.</h2>
          <p className="lede">We'll give you a realistic timeline, team plan and the key decisions you'll face, based on your processes, countries and systems.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Plan your implementation →</Link></div>
        </div>
        <ul>
          <li>SAP Activate, run end to end</li>
          <li>Every decision tracked in SAP Cloud ALM</li>
          <li>Three data rehearsals before cutover</li>
          <li>Automated tests that outlive the project</li>
          <li>Hypercare through your first month-end</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
