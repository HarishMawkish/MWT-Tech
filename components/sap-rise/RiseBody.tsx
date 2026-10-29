import Link from "next/link";

/** The sections of the RISE with SAP page, converted from the supplied HTML. */
export function RiseBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / RISE with SAP</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">RISE with SAP</span>
          <h1>Move your SAP ERP to the cloud <em>without starting over.</em></h1>
          <p className="lede">RISE with SAP takes the SAP system your business already runs on and moves it to SAP Cloud ERP Private, on your own private cloud instance. You keep your history, your processes and the custom work that sets you apart. Mawkish plans the move, runs the conversion, and supports you afterwards.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Book a RISE readiness check →</a>
            <a href="#paths" className="btn sec">See the three paths</a>
          </div>
          <p className="name-note"><b>About the names.</b> RISE with SAP is the offering. The software inside it is SAP Cloud ERP Private, also known as SAP S/4HANA Cloud Private Edition.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a readiness check summary for an SAP ECC system, showing simplification items, custom code findings and a custom code triage chart">
            <div className="shell"><span className="sap">SAP</span><span className="t">Readiness Check · ECC 6.0 → Cloud ERP Private</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Simplification items</div><div className="s">Relevant to your system</div></div><div className="k">142</div></div>
                <div className="tile"><div><div className="h">Custom code objects</div><div className="s">Analysed</div></div><div className="k">3,812</div></div>
                <div className="tile"><div><div className="h">Unused in 12 months</div><div className="s">Candidates to retire</div></div><div className="k pos">58<small>%</small></div></div>
              </div>
              <div className="split">
                <div className="card-f">
                  <div className="h">Custom code triage</div>
                  <div className="bars">
                    <div className="bar-r"><span>Retire, not used</span><span className="tr"><i style={{ width: "58%" }}></i></span><b>58%</b></div>
                    <div className="bar-r"><span>Replace with standard</span><span className="tr"><i style={{ width: "19%" }}></i></span><b>19%</b></div>
                    <div className="bar-r"><span>Adapt and keep</span><span className="tr"><i style={{ width: "17%" }}></i></span><b>17%</b></div>
                    <div className="bar-r"><span>Move to SAP BTP</span><span className="tr"><i style={{ width: "6%" }}></i></span><b>6%</b></div>
                  </div>
                </div>
                <div className="card-f">
                  <div className="h">Conversion plan</div>
                  <div className="row"><span>Readiness check</span><span className="pill ok">Done</span></div>
                  <div className="row"><span>Mock conversion 1</span><span className="pill ok">Done</span></div>
                  <div className="row"><span>Mock conversion 2</span><span className="pill in">Running</span></div>
                  <div className="row"><span>Cutover rehearsal</span><span className="pill wr">Planned</span></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a readiness check summary. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What you get</span>
        <h2>Your SAP system, run by SAP, on the cloud you choose.</h2>
        <p className="lede">RISE brings the software, the infrastructure and the technical operations together under one SAP contract. SAP looks after the servers, database and backups. You and Mawkish focus on the business processes that run on them.</p>
        <p className="lede">Unlike GROW with SAP, you get your own private instance. That means room for deeper customisation, all of SAP's industry solutions, and upgrades on your own schedule.</p>
      </div>
      <div className="includes">
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="5" width="22" height="6" rx="2"/><rect x="4" y="13" width="22" height="6" rx="2"/><rect x="4" y="21" width="22" height="5" rx="2"/></svg>
          <h3>SAP Cloud ERP Private</h3><p>The full SAP S/4HANA system on a private, single-customer instance.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 20a6 6 0 0 1 1-12 8 8 0 0 1 15 2 5 5 0 0 1 0 10z"/></svg>
          <h3>Your choice of cloud</h3><p>Run on Microsoft Azure, AWS, Google Cloud or SAP's own data centres.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="15" cy="15" r="10"/><path d="M15 9v6l4 3"/></svg>
          <h3>Technical operations</h3><p>SAP runs the infrastructure, database, backups, security patches and technical monitoring.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 22l6-7 5 4 9-11"/><path d="M5 26h20"/></svg>
          <h3>Process insight tools</h3><p>Tools that analyse how your current system is really used, so the move is based on facts.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 4v6M15 20v6M4 15h6M20 15h6"/><circle cx="15" cy="15" r="4"/></svg>
          <h3>Platform credits</h3><p>Credits for SAP BTP, to build extensions and integrations outside the core.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M8 13l4 4 10-10"/><rect x="4" y="4" width="22" height="22" rx="4"/></svg>
          <h3>Tools to run the project</h3><p>Project management, testing and migration tools to plan and track the move.</p>
        </div>
      </div>
    </div>
    <div className="in"><p className="note" style={{ marginTop: "28px" }}>What's included in a RISE contract depends on SAP's current package and your negotiation. We'll show you exactly what's in your quote.</p></div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Why now</span>
      <h2>The clock on SAP ECC is running.</h2>
      <p className="lede">Mainstream maintenance for SAP ECC ends in 2027. Extended maintenance runs to 2030 at extra cost. A conversion takes most companies 12 to 24 months once you include planning, so the companies starting now are the ones that finish on their own terms.</p>
      <div className="clock">
        <svg viewBox="0 0 1000 200" role="img" aria-label="Timeline from 2025 to 2033: today is late 2026, ECC mainstream maintenance ends at the end of 2027, extended maintenance ends at the end of 2030, and a transition option for RISE customers runs to 2033.">
          <line x1="40" y1="110" x2="960" y2="110" stroke="#2a3a33" strokeWidth="2"/>
          <g style={{ fontFamily: "var(--body)" }} fontSize="13" fill="#9aaaa2">
            <text x="40" y="140">2025</text><text x="155" y="140">2026</text><text x="270" y="140">2027</text><text x="385" y="140">2028</text><text x="500" y="140">2029</text><text x="615" y="140">2030</text><text x="730" y="140">2031</text><text x="845" y="140">2032</text><text x="935" y="140">2033</text>
          </g>
          <rect x="40" y="88" width="345" height="16" rx="4" fill="#1f7a5a"/>
          <rect x="385" y="88" width="345" height="16" rx="4" fill="#b7791f"/>
          <rect x="730" y="88" width="230" height="16" rx="4" fill="#5c6c65"/>
          <line x1="250" y1="50" x2="250" y2="118" stroke="#34b386" strokeWidth="2" strokeDasharray="4 4"/>
          <circle cx="250" cy="110" r="6" fill="#34b386"/>
          <text x="258" y="44" style={{ fontFamily: "var(--display)" }} fontWeight="800" fontSize="15" fill="#eef3f0">Today</text>
          <g style={{ fontFamily: "var(--body)" }} fontSize="12.5" fill="#eef3f0">
            <text x="40" y="78">Mainstream, to 2027</text>
            <text x="390" y="78">Extended maintenance, extra cost, to 2030</text>
            <text x="735" y="78">RISE transition option, to 2033</text>
          </g>
          <g style={{ fontFamily: "var(--body)" }} fontSize="13" fill="#9aaaa2">
            <text x="40" y="184">Typical conversion: 12 to 24 months, including planning.</text>
          </g>
        </svg>
      </div>
      <div className="facts">
        <div className="fact"><b>2027</b><span>end of mainstream maintenance for SAP ECC</span></div>
        <div className="fact"><b>2030</b><span>end of extended maintenance, at extra cost</span></div>
        <div className="fact"><b>12–24</b><span>months for a typical conversion, including planning</span></div>
        <div className="fact"><b>1</b><span>contract for software, infrastructure and operations</span></div>
      </div>
    </div>
  </section>

  
  <section className="light" id="paths">
    <div className="in">
      <span className="eyebrow">Three ways to move</span>
      <h2>Keep what works. Leave behind what doesn't.</h2>
      <p className="lede">There's no single right way to move to SAP Cloud ERP Private. We recommend a path after looking at your system, your data and how much you want to change.</p>
      <div className="paths">
        <div className="path">
          <span className="k">Brownfield</span>
          <h3>System conversion</h3>
          <svg viewBox="0 0 300 54" aria-hidden="true"><rect x="2" y="14" width="90" height="26" rx="6" fill="none" stroke="#9aaaa2" strokeWidth="2"/><text x="47" y="32" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="12" fill="#55655e">ECC</text><path d="M100 27h96" stroke="#1f7a5a" strokeWidth="3"/><path d="M190 20l8 7-8 7" fill="none" stroke="#1f7a5a" strokeWidth="3"/><rect x="206" y="14" width="90" height="26" rx="6" fill="#1f7a5a"/><text x="251" y="32" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="12" fill="#fff">Cloud ERP</text></svg>
          <p>Your existing system is converted as a whole. Configuration, history and custom code come across, then get cleaned up.</p>
          <dl><dt>Keeps</dt><dd>All history, processes and custom code</dd><dt>Best when</dt><dd>Your processes work well and you want the fastest, lowest-risk move</dd></dl>
        </div>
        <div className="path">
          <span className="k">Bluefield</span>
          <h3>Selective data transition</h3>
          <svg viewBox="0 0 300 54" aria-hidden="true"><rect x="2" y="14" width="90" height="26" rx="6" fill="none" stroke="#9aaaa2" strokeWidth="2"/><text x="47" y="32" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="12" fill="#55655e">ECC</text><path d="M100 20h96M100 34h60" stroke="#1f7a5a" strokeWidth="3" strokeDasharray="6 5"/><path d="M190 13l8 7-8 7" fill="none" stroke="#1f7a5a" strokeWidth="3"/><rect x="206" y="14" width="90" height="26" rx="6" fill="#1f7a5a"/><text x="251" y="32" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="12" fill="#fff">Cloud ERP</text></svg>
          <p>You choose what to bring: certain company codes, years of history or processes. Other areas get redesigned along the way.</p>
          <dl><dt>Keeps</dt><dd>The data and processes you select</dd><dt>Best when</dt><dd>You want to merge, split or redesign parts of the business during the move</dd></dl>
        </div>
        <div className="path">
          <span className="k">Greenfield</span>
          <h3>New implementation</h3>
          <svg viewBox="0 0 300 54" aria-hidden="true"><rect x="2" y="14" width="90" height="26" rx="6" fill="none" stroke="#9aaaa2" strokeWidth="2" strokeDasharray="4 4"/><text x="47" y="32" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="12" fill="#55655e">Legacy</text><path d="M100 27h40" stroke="#9aaaa2" strokeWidth="2" strokeDasharray="3 4"/><rect x="206" y="14" width="90" height="26" rx="6" fill="#1f7a5a"/><text x="251" y="32" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="12" fill="#fff">Cloud ERP</text><circle cx="174" cy="27" r="9" fill="none" stroke="#1f7a5a" strokeWidth="3"/></svg>
          <p>A fresh system built on SAP best practices. Only open items and master data come across from the old one.</p>
          <dl><dt>Keeps</dt><dd>Master data and open balances</dd><dt>Best when</dt><dd>The old system is heavily customised and no longer matches how you work</dd></dl>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Who does what</span>
        <h2>Clear lines between SAP, Mawkish and your team.</h2>
        <p className="lede">The most common surprise in RISE projects is what SAP's technical operations do and don't include. SAP runs everything up to the technical layer of the system. Your business processes, configuration, custom code and users are still yours to manage, with Mawkish as your partner.</p>
        <p className="lede">We set out this split in writing before you sign, so nobody discovers a gap at go-live.</p>
      </div>
      <div>
        <div className="stack">
          <div className="lvl you"><div><h3>Business ownership</h3><p>Process owners, decisions, data quality, sign-off.</p></div><span className="who">Your team</span></div>
          <div className="lvl mk"><div><h3>Application management</h3><p>Configuration, custom code, integrations, roles, user support, testing each upgrade.</p></div><span className="who">Mawkish</span></div>
          <div className="lvl mk"><div><h3>Transition project</h3><p>Assessment, conversion, data migration, testing, cutover, training.</p></div><span className="who">Mawkish</span></div>
          <div className="lvl sap"><div><h3>Technical operations</h3><p>System administration, database, backups, technical upgrades and monitoring.</p></div><span className="who">SAP</span></div>
          <div className="lvl sap"><div><h3>Infrastructure</h3><p>Servers, storage, network and security on your chosen cloud.</p></div><span className="who">SAP</span></div>
        </div>
        <div className="legend2"><span><i style={{ background: "#2a2f2c", border: "1px solid #55655e" }}></i>Your team</span><span><i style={{ background: "var(--green)" }}></i>Mawkish</span><span><i style={{ background: "#0a6ed1" }}></i>SAP</span></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">RISE or GROW?</span>
      <h2>Two routes to SAP's cloud ERP.</h2>
      <p className="lede">Both run on SAP's cloud and include AI and operations. The difference is how much you keep and how much control you want over the system.</p>
      <div className="users cmp">
        <table>
          <thead><tr><th></th><th>GROW with SAP</th><th>RISE with SAP</th></tr></thead>
          <tbody>
            <tr><td>Product</td><td>SAP Cloud ERP</td><td>SAP Cloud ERP Private</td></tr>
            <tr><td>Who it's for</td><td>New to SAP, growing mid-sized companies, subsidiaries</td><td>Existing SAP customers and larger, more complex businesses</td></tr>
            <tr><td>Your instance</td><td>Shared cloud service</td><td>Private instance, just for you</td></tr>
            <tr><td>Starting point</td><td>Always a fresh start</td><td>Convert, select or start fresh</td></tr>
            <tr><td>Upgrades</td><td>By SAP, twice a year</td><td>On your schedule</td></tr>
            <tr><td>Custom code</td><td>Upgrade-safe extensions only</td><td>Classic custom code allowed, with clean core encouraged</td></tr>
            <tr><td>Industry coverage</td><td>Core industries, growing each release</td><td>All SAP industry solutions</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Many groups use both: RISE at head office and GROW in subsidiaries, connected as one two-tier ERP. <Link href="/services/sap-solutions/grow-with-sap" style={{ color: "var(--green-hi)", fontWeight: "700" }}>Read about GROW with SAP →</Link></p>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">More than a lift and shift</span>
        <h2>Come out with a cleaner system, ready for AI.</h2>
        <p className="lede">Moving to the cloud with all your old workarounds only moves the problem. In most ECC systems, more than half the custom code is never used. We use the move to retire what's dead, replace what the standard now does, and move the rest to upgrade-safe extensions.</p>
        <p className="lede">A clean core is also what makes SAP's AI useful. Joule and AI agents work best on standard processes and clean data. A cleaner system pays off from day one.</p>
      </div>
      <div className="layers">
        <div className="layer"><span className="who">Retire</span><div><h3>Unused custom code</h3><p>Usage data shows what nobody has run in a year. It doesn't come across.</p></div></div>
        <div className="layer"><span className="who">Replace</span><div><h3>Workarounds the standard now covers</h3><p>Many old custom programs exist because ECC couldn't do something that SAP S/4HANA now does as standard.</p></div></div>
        <div className="layer"><span className="who">Rebuild</span><div><h3>What truly differentiates you</h3><p>Moved to upgrade-safe extensions inside the system or on SAP BTP.</p></div></div>
        <div className="layer core"><span className="who">Result</span><div><h3>A cleaner core</h3><p>Faster upgrades, lower support costs, and a system AI can actually work with.</p></div></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">How Mawkish delivers</span>
      <h2>A conversion you rehearse before you run it.</h2>
      <p className="lede">We follow SAP Activate, SAP's method for cloud ERP projects, adapted for moving an existing system. The key difference is practice: we run full trial conversions on copies of your system before the real one, so go-live weekend holds no surprises.</p>
      <div className="phases">
        <div className="ph"><span className="st">Step 1</span><h3>Discover</h3><p>Business case and path decision.</p><p className="we"><b>We:</b> run the readiness check and analyse your custom code.</p></div>
        <div className="ph"><span className="st">Step 2</span><h3>Prepare</h3><p>Plan, team and systems in place.</p><p className="we"><b>We:</b> fix data issues early and agree the cleanup scope.</p></div>
        <div className="ph"><span className="st">Step 3</span><h3>Explore</h3><p>Confirm processes and changes.</p><p className="we"><b>We:</b> review each process with your owners and decide what changes.</p></div>
        <div className="ph"><span className="st">Step 4</span><h3>Realize</h3><p>Convert, adapt and test.</p><p className="we"><b>We:</b> run trial conversions and adapt custom code and integrations.</p></div>
        <div className="ph"><span className="st">Step 5</span><h3>Deploy</h3><p>Cutover and go-live.</p><p className="we"><b>We:</b> rehearse the cutover, then run it with minimal downtime.</p></div>
        <div className="ph"><span className="st">Step 6</span><h3>Run</h3><p>Support and continuous improvement.</p><p className="we"><b>We:</b> manage the application and plan your upgrades.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Is RISE with SAP just hosting?</summary><p>No. Hosting moves your servers somewhere else. RISE moves you to SAP Cloud ERP Private, with infrastructure, technical operations and tools under one SAP contract. You also move from ECC to SAP S/4HANA along the way.</p></details>
        <details><summary>Can we keep our custom code?</summary><p>Yes. Private Edition allows classic custom code, unlike GROW with SAP. We still recommend cleaning it up during the move. Most systems carry a lot of code that's no longer used, and every object you keep has to be adapted and tested.</p></details>
        <details><summary>How long does a conversion take?</summary><p>For most companies, 12 to 24 months from planning to go-live. The main factors are system size, how much custom code there is, data quality, the number of integrations, and which path you take. We give you a firm plan after the readiness check.</p></details>
        <details><summary>How much downtime is there at go-live?</summary><p>Usually a planned weekend. We rehearse the cutover several times on copies of your system, so the timing is measured, not guessed.</p></details>
        <details><summary>Do we have to upgrade every year?</summary><p>No. With Private Edition, you decide when to move to a new release, within SAP's maintenance windows. We help you plan upgrades around your business calendar.</p></details>
        <details><summary>We're not on SAP today. Is RISE still an option?</summary><p>Yes. Larger or more complex companies sometimes choose Private Edition for a new implementation, for example for industry coverage or deeper customisation. If you're a growing mid-sized company, GROW with SAP is often the better fit. We'll recommend one honestly.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Know your path, effort and timeline before you commit.</h2>
          <p className="lede">The Mawkish RISE Readiness Check analyses your current SAP system and gives you a fact-based plan you can take to your board.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book your readiness check →</Link></div>
        </div>
        <ul>
          <li>Recommended path: conversion, selective or new</li>
          <li>Custom code findings and cleanup plan</li>
          <li>Data quality and archiving review</li>
          <li>Timeline, team and budget range</li>
          <li>What SAP runs, what you run, and what we run</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
