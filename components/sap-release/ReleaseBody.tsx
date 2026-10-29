import Link from "next/link";
import type { CSSProperties } from "react";

/** The sections of the Release & Upgrade Management page, converted from the supplied HTML. */
export function ReleaseBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Release &amp; Upgrade Management</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Release &amp; Upgrade Management</span>
          <h1>A new SAP release every six months. <em>No surprises on Monday.</em></h1>
          <p className="lede">SAP upgrades SAP Cloud ERP twice a year, on SAP's schedule, for every customer at once. You can't skip a release, and you wouldn't want to: each one brings new features and AI. But each one also changes screens, roles and processes your people rely on. We plan every upgrade, test what matters to your business, and switch on the new features worth having.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Plan your next upgrade →</a>
            <a href="#runbook" className="btn sec">See our upgrade plan</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of an upgrade plan for release 2702: test system upgrade in 18 days, 14 changes affecting your scope, 6 new features shortlisted, and a task list showing impact analysis done, test plan ready, regression testing and production upgrade planned">
            <div className="shell"><span className="sap">SAP</span><span className="t">Cloud ALM · Upgrade 2702</span><span className="joule-btn"></span><span className="av">MT</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Test system upgrade</div><div className="s">Countdown</div></div><div className="k">18<small>days</small></div></div>
                <div className="tile"><div><div className="h">Changes in your scope</div><div className="s">From impact analysis</div></div><div className="k neg">14</div></div>
                <div className="tile"><div><div className="h">New features</div><div className="s">Shortlisted for you</div></div><div className="k pos">6</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Upgrade tasks</div>
                <div className="row"><span>Impact analysis for your scope</span><span className="pill ok">Done</span></div>
                <div className="row"><span>Test plan · automated and key-user tests</span><span className="pill ok">Ready</span></div>
                <div className="row"><span>Move open extensions before the freeze</span><span className="pill wr">2 left</span></div>
                <div className="row"><span>Regression testing in the test system</span><span className="pill in">Planned</span></div>
                <div className="row"><span>Production upgrade weekend</span><span className="pill in">Planned</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of an upgrade plan in SAP Cloud ALM. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">How SAP releases work</span>
      <h2>Two big releases a year, and smaller ones in between.</h2>
      <p className="lede">SAP Cloud ERP gets a major release every February and every August. Between them, SAP ships smaller feature deliveries and regular fixes. Everyone runs the same version, which is why SAP can move this fast, and why nobody falls years behind.</p>
      <div className="cal">
        <svg viewBox="0 0 1100 170" style={{ fontFamily: "var(--body)" }} role="img" aria-label="A year of releases: major release in February, feature deliveries in between, major release in August, feature deliveries again, and the next major release in February">
          <path d="M20 80H1080" stroke="#c9d3ce" strokeWidth="3"/>
          <g fontSize="12" fill="#5a6862" textAnchor="middle">
            <text x="60" y="150">Feb</text><text x="210" y="150">Apr</text><text x="360" y="150">Jun</text><text x="510" y="150">Aug</text><text x="660" y="150">Oct</text><text x="810" y="150">Dec</text><text x="960" y="150">Feb</text>
          </g>
          <g>
            <rect x="20" y="52" width="80" height="56" rx="12" fill="#1f7a5a"/><text x="60" y="78" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">2602</text><text x="60" y="96" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#cdeee0">major</text>
            <rect x="470" y="52" width="80" height="56" rx="12" fill="#1f7a5a"/><text x="510" y="78" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">2608</text><text x="510" y="96" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#cdeee0">major</text>
            <rect x="920" y="52" width="80" height="56" rx="12" fill="#1f7a5a"/><text x="960" y="78" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">2702</text><text x="960" y="96" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#cdeee0">major</text>
          </g>
          <g fontSize="12" fontWeight="800" fill="#17694b" textAnchor="middle">
            <circle cx="210" cy="80" r="16" fill="#fff" stroke="#1f7a5a" strokeWidth="2.5"/><text x="210" y="84">.1</text>
            <circle cx="360" cy="80" r="16" fill="#fff" stroke="#1f7a5a" strokeWidth="2.5"/><text x="360" y="84">.2</text>
            <circle cx="660" cy="80" r="16" fill="#fff" stroke="#1f7a5a" strokeWidth="2.5"/><text x="660" y="84">.1</text>
            <circle cx="810" cy="80" r="16" fill="#fff" stroke="#1f7a5a" strokeWidth="2.5"/><text x="810" y="84">.2</text>
          </g>
          <g fontSize="11.5" fill="#5a6862" textAnchor="middle">
            <text x="285" y="40">feature deliveries</text>
            <text x="735" y="40">feature deliveries</text>
          </g>
          <g fill="#b5651d"><circle cx="135" cy="118" r="3"/><circle cx="285" cy="118" r="3"/><circle cx="435" cy="118" r="3"/><circle cx="585" cy="118" r="3"/><circle cx="735" cy="118" r="3"/><circle cx="885" cy="118" r="3"/></g>
          <text x="1080" y="122" textAnchor="end" fontSize="11" fill="#b5651d">fixes, regularly</text>
        </svg>
        <ol className="cal-list"><li><b>February:</b> major release (for example 2602).</li><li><b>Spring:</b> feature deliveries 2602.1 and 2602.2.</li><li><b>August:</b> major release (2608).</li><li><b>Autumn:</b> feature deliveries 2608.1 and 2608.2.</li><li><b>All year:</b> regular fixes.</li></ol>
      </div>
      <div className="codes">
        <div><b>2608</b><h3>Major release</h3><p>Year 26, August. SAP upgrades your systems, and enhancements to processes you already use arrive automatically.</p></div>
        <div><b>2608.2</b><h3>Feature delivery</h3><p>Small additions between majors. You can switch them on early, or they come on with the next major.</p></div>
        <div><b>New scope</b><h3>Always your choice</h3><p>New processes and countries are never forced on you. You add them when you're ready, through SAP's configuration tool.</p></div>
      </div>
    </div>
  </section>

  
  <section id="runbook">
    <div className="in">
      <span className="eyebrow">Our upgrade plan</span>
      <h2>Six steps, every release, the same way.</h2>
      <p className="lede">SAP gives about six weeks' notice. It upgrades your test system first, and your development and production systems about three weeks later. Those three weeks are the window to find anything that would affect your business, so we plan the work before it opens.</p>
      <div className="run">
        <div><span className="w">On notice</span><h3>Plan</h3><p>Agree dates, testers and the freeze with you. Clear open changes so nothing is half-moved.</p></div>
        <div><span className="w">Weeks before</span><h3>Assess</h3><p>Run SAP's impact analysis against your actual scope and read the release notes for your processes.</p></div>
        <div><span className="w">Before the freeze</span><h3>Prepare</h3><p>Update automated tests, brief key users, and move extensions to production before transports close.</p></div>
        <div className="hot"><span className="w">Test upgraded</span><h3>Test</h3><p>Automated regression tests, SAP's post-upgrade tests, and key users checking what only they can judge.</p></div>
        <div className="hot"><span className="w">About 3 weeks</span><h3>Fix and sign off</h3><p>Fix what we find, retest, and give you a go or no-go before production is upgraded.</p></div>
        <div><span className="w">After go-live</span><h3>Watch and adopt</h3><p>Close monitoring on the first working days, then a review of the new features worth switching on.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Know before it happens</span>
        <h2>Only the changes that touch your business.</h2>
        <p className="lede">A major release has hundreds of changes across every industry and country. Most of them don't affect you. SAP's release assessment tool compares the release with the processes you actually use, and lists the changes, retired apps and new features that matter to you.</p>
        <p className="lede">We go through that list with you, decide what needs testing or training, and track every item as a task until it's done. Role changes get special attention: after each upgrade, SAP's role catalogues change, and someone has to update your roles so people can still do their jobs.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen ra" role="img" aria-label="Illustration of an impact analysis for release 2702 against the customer's scope: 4 changed apps, 1 deprecated app with a successor, 6 new features, and 3 role catalogue changes, with examples in procurement, finance and sales">
          <div className="shell"><span className="sap">SAP</span><span className="t">Release Assessment · Your Scope</span><span className="joule-btn"></span><span className="av">IT</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Processes in scope</div><div className="s">Your solution</div></div><div className="k">63</div></div>
              <div className="tile"><div><div className="h">Affected</div><div className="s">By release 2702</div></div><div className="k neg">14</div></div>
              <div className="tile"><div><div className="h">Not affected</div><div className="s">No action</div></div><div className="k pos">49</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Changes for you · release 2702</div>
              <div className="row"><span><span className="tag chg">CHANGED</span>Supplier invoices · new layout for tax details</span><span className="pill wr">Test</span></div>
              <div className="row"><span><span className="tag dep">RETIRED</span>Old payment monitor · successor app available</span><span className="pill wr">Train</span></div>
              <div className="row"><span><span className="tag role">ROLES</span>3 business catalogues changed in finance</span><span className="pill wr">Update</span></div>
              <div className="row"><span><span className="tag new">NEW</span>Joule summary for sales order exceptions</span><span className="pill in">Review</span></div>
              <div className="row"><span><span className="tag new">NEW</span>Faster bank statement matching rules</span><span className="pill in">Review</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a release impact analysis. Example items, not actual 2702 content.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of automated regression results after an upgrade: 148 test processes, 143 passed, 5 need attention. The failures are a custom field not filled in test data, a test user missing a new role, a changed button label, a bank file layout check, and a VAT invoice form check.">
          <div className="shell"><span className="sap">SAP</span><span className="t">Analyze Automated Test Results</span><span className="joule-btn"></span><span className="av">MT</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Regression run · test system on 2702</div>
              <div className="donut">
                <svg viewBox="0 0 42 42" aria-hidden="true"><circle cx="21" cy="21" r="15.9" fill="none" stroke="#eee" strokeWidth="6"/><circle cx="21" cy="21" r="15.9" fill="none" stroke="#107e3e" strokeWidth="6" strokeDasharray="96.6 3.4" transform="rotate(-90 21 21)"/><circle cx="21" cy="21" r="15.9" fill="none" stroke="#e9730c" strokeWidth="6" strokeDasharray="3.4 96.6" strokeDashoffset="-96.6" transform="rotate(-90 21 21)"/><text x="21" y="23.5" textAnchor="middle" fontSize="5.6" fontWeight="700" fill="#1d2d3e" style={{ fontFamily: "var(--body)" }}>143/148</text></svg>
                <div className="lg"><span style={{ "--c": "#107e3e" } as CSSProperties}>143 passed</span><span style={{ "--c": "#e9730c" } as CSSProperties}>5 need attention</span><span style={{ "--c": "#d9d9d9" } as CSSProperties}>0 not run</span></div>
              </div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Needs attention</div>
              <div className="row"><span>Sales order · custom field missing in test data</span><span className="pill in">Test fix</span></div>
              <div className="row"><span>Goods receipt · test user lacks new role</span><span className="pill in">Role fix</span></div>
              <div className="row"><span>Billing · button label changed</span><span className="pill in">Script fix</span></div>
              <div className="row"><span>Payment run · bank file layout check</span><span className="pill wr">Investigate</span></div>
              <div className="row"><span>VAT tax invoice form · field position</span><span className="pill wr">Investigate</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of automated test results. Sample data.</figcaption>
      </figure>
      <div>
        <span className="eyebrow">Test what you use</span>
        <h2>Machines run the routine checks. People check what matters.</h2>
        <p className="lede">SAP Cloud ERP includes a test automation tool at no extra cost. We build automated tests for your main processes during implementation and keep them current, so every upgrade starts with a full regression run in hours rather than days. SAP also runs its own post-upgrade tests if you allow it.</p>
        <div className="three">
          <div><h3>SAP's tests</h3><p>Standard checks SAP runs on its own processes after each upgrade.</p></div>
          <div><h3>Your automated tests</h3><p>Your processes, with your data, roles, fields and variants.</p></div>
          <div><h3>Key-user checks</h3><p>Forms, reports and outputs a person has to look at.</p></div>
        </div>
        <p className="note">Most failures aren't SAP faults. They're test data, roles or a changed label. We sort the real issues from the noise before anyone else sees them.</p>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">The Sri Lanka layer</span>
      <h2>The local pieces SAP doesn't test for you.</h2>
      <p className="lede">Sri Lanka isn't one of SAP's standard country versions, so local requirements are built on top of SAP's template. SAP's own tests can't know about them. We check them on every release.</p>
      <div className="apps2">
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 2h10v16l-2.5-1.5L10 18l-2.5-1.5L5 18z"/><path d="M8 7h4M8 10h4"/></svg></span><h3>VAT tax invoices</h3><p>The tax invoice layout, VAT at 18%, and the details the Inland Revenue Department requires.</p></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h14M10 3l7 7-7 7"/></svg></span><h3>VAT submissions</h3><p>The connection that sends invoice data to the tax authority's system, where it applies to you.</p></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="16" height="11" rx="2"/><path d="M2 9h16"/></svg></span><h3>Bank payment files</h3><p>Payment file layouts for each of your banks, including LankaPay transfers, checked end to end.</p></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7"/><path d="M7 10h6"/></svg></span><h3>Withholding tax</h3><p>Withholding tax calculation and certificates, in line with current Inland Revenue rules.</p></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15l4-6 4 3 6-8"/></svg></span><h3>Local reports</h3><p>Statutory and management reports your finance team files or relies on every month.</p></div>
        <div className="app2"><span className="ic"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12v12H4z"/><path d="M8 8h4v4H8z"/></svg></span><h3>Local integrations</h3><p>Payroll, customs and other local systems that exchange data with SAP Cloud ERP.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">The other half of an upgrade</span>
        <h2>New features you've already paid for.</h2>
        <p className="lede">Every release brings new features and AI capabilities, and many of them are switched off until you choose to use them. Most companies never look. We go through each release with you, show the useful features in your test system, and switch on the ones you want.</p>
        <p className="lede">Some features can't be switched off again once they're on, so we test them first and agree the change with the people it affects.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen feat" role="img" aria-label="Illustration of a new feature shortlist for release 2608: Joule for goods receipts recommended for procurement, partner address improvements recommended for sales, a new asset transfer app as optional for finance, and a manufacturing feature marked not relevant">
          <div className="shell"><span className="sap">SAP</span><span className="t">What's New · Shortlist for You</span><span className="joule-btn"></span><span className="av">MT</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Release 2608 · reviewed with your key users</div>
              <div className="row"><span>Confirm goods receipts by chatting with Joule</span><span className="pill ok">Recommended</span></div>
              <div className="row"><span>Improved partner addresses on sales orders</span><span className="pill ok">Recommended</span></div>
              <div className="row"><span>New app to post asset transfers</span><span className="pill in">Optional</span></div>
              <div className="row"><span>Variant configuration enhancements</span><span className="pill wr">Not relevant</span></div>
            </div>
            <div className="joule" style={{ marginTop: "10px" }}>
              <div className="jh"><i></i>Joule</div>
              <div className="msgs">
                <div className="bub u">I received the 40 cartons on PO 4500018840.</div>
                <div className="bub j">Goods receipt posted for <b>40 pcs</b> to storage location <b>Colombo DC</b>. Anything else?</div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration. Features based on SAP's 2608 release highlights; availability depends on your scope.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What catches teams out</span>
        <h2>Six things we plan for every time.</h2>
        <p className="lede">None of these is hard on its own. Together, they're why some upgrades go quietly and others cause a difficult first Monday.</p>
      </div>
      <div className="includes">
        <div><h3>Transports freeze</h3><p>Moves between systems stop a few days before the upgrade. Changes still in progress have to wait or be finished early.</p></div>
        <div><h3>Extensions out of step</h3><p>Changes built on the old release may not move into an upgraded system, so we time them carefully.</p></div>
        <div><h3>Roles change</h3><p>SAP's role catalogues change each release. Someone has to update your roles before people log in.</p></div>
        <div><h3>Content updates</h3><p>New configuration content arrives in development first. Moving it on is your call, so we schedule it.</p></div>
        <div><h3>One-way switches</h3><p>Some new features can't be turned off again. We test them before anyone switches them on.</p></div>
        <div><h3>Month-end clashes</h3><p>When an upgrade lands near a close, we plan cover and extra checks around it.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">What a release brings</span>
      <h2>See it from SAP.</h2>
      <p className="lede">SAP publishes release highlights for each area with every major release. Here are three from release 2608.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=EFelOaZuczQ" target="_blank" rel="noopener" data-yt="EFelOaZuczQ" aria-label="Play on YouTube: Finance in SAP S/4HANA Cloud Public Edition 2608">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Release 2608</span></div><div className="big">Finance in 2608</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Finance in SAP S/4HANA Cloud Public Edition 2608</h3><p>Release highlights for finance, including a new app to post asset transfers and cost settlement for lease management.</p><span className="d">SAP · October 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=JaQ7ucmjisk" target="_blank" rel="noopener" data-yt="JaQ7ucmjisk" aria-label="Play on YouTube: Sourcing and Procurement in SAP S/4HANA Cloud Public Edition 2608">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Release 2608</span></div><div className="big">Procurement in 2608</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Sourcing and Procurement in SAP S/4HANA Cloud Public Edition 2608</h3><p>How occasional users confirm goods receipts and service entries by chatting with Joule instead of opening apps.</p><span className="d">SAP · July 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=VV2z6CN4JLU" target="_blank" rel="noopener" data-yt="VV2z6CN4JLU" aria-label="Play on YouTube: Sales in SAP S/4HANA Cloud Public Edition 2608">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Release 2608</span></div><div className="big">Sales in 2608</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Sales in SAP S/4HANA Cloud Public Edition 2608</h3><p>New sales features in the release, including improved partner address handling and supply blocks on sales orders.</p><span className="d">SAP · September 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Can we delay or skip an upgrade?</summary><p>No. SAP Cloud ERP is one version for all customers, and SAP upgrades everyone on a published schedule. That's what keeps you current. The way to reduce risk is good testing, not delay.</p></details>
        <details><summary>Will the system be down during the upgrade?</summary><p>Production is upgraded over a planned weekend window that SAP announces in advance. We tell your users when it is and plan around your critical dates.</p></details>
        <details><summary>How much of our team's time does an upgrade take?</summary><p>With automated tests in place, mostly a few days of key-user checks during the test window, plus a short briefing on what's changed. Without automation, it's much more, which is why we build the tests early.</p></details>
        <details><summary>We didn't build automated tests during our implementation. Is it too late?</summary><p>No. We start with your most important processes, such as order to cash, procure to pay and the month-end close, and add more each release.</p></details>
        <details><summary>Are new features switched on automatically?</summary><p>Improvements to processes you already use arrive with the upgrade. Many new features stay off until you choose them, and new processes or countries are always your decision.</p></details>
        <details><summary>Is this included in your support service?</summary><p>Yes, upgrade testing is part of our Managed and Extended support plans. We also offer it on its own for customers who support themselves.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Get ready for the next release.</h2>
          <p className="lede">In one session, we look at your scope, your extensions and your Sri Lanka layer, and give you an upgrade plan with dates, tests and the features worth a look.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an upgrade review →</Link></div>
        </div>
        <ul>
          <li>Impact on your processes</li>
          <li>Automated and key-user tests</li>
          <li>Roles, extensions and the freeze</li>
          <li>Local requirements checked</li>
          <li>New features worth switching on</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
