import Link from "next/link";
import type { CSSProperties } from "react";

/** The sections of the Move from ECC & On-Premise page, converted from the supplied HTML. */
export function MoveBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Move from ECC &amp; On-Premise</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Move from ECC &amp; S/4HANA On-Premise</span>
          <h1>Choose your route to the cloud <em>before the deadline chooses it for you.</em></h1>
          <p className="lede">Whether you're on SAP ECC or an older on-premise SAP S/4HANA release, there are four ways into SAP's cloud ERP. Each keeps something different and costs something different. We help you pick the right one, prepare your system for it, and run the move with rehearsed, measured downtime.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Get a migration assessment →</a>
            <a href="#routes" className="btn sec">Compare the routes</a>
          </div>
          <p className="name-note"><b>Where you're going.</b> SAP Cloud ERP Private (through RISE with SAP) or SAP Cloud ERP (through GROW with SAP). This page covers the move itself.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a conversion cockpit for an SAP ECC system, showing pre-check results and mock conversion runtimes">
            <div className="shell"><span className="sap">SAP</span><span className="t">Conversion Cockpit · PRD (ECC 6.0 EHP8)</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Pre-checks</div><div className="s">Simplification items</div></div><div className="k pos">96<small>% clear</small></div></div>
                <div className="tile"><div><div className="h">Business partners</div><div className="s">Customers and suppliers</div></div><div className="k">18.4<small>k</small></div></div>
                <div className="tile"><div><div className="h">Database</div><div className="s">After archiving</div></div><div className="k pos">1.2<small>TB</small></div></div>
              </div>
              <div className="split">
                <div className="card-f">
                  <div className="h">Preparation</div>
                  <div className="row"><span>Customer and supplier → business partner</span><span className="pill ok">Done</span></div>
                  <div className="row"><span>Asset accounting checks</span><span className="pill ok">Done</span></div>
                  <div className="row"><span>Custom code fixes · 412</span><span className="pill in">78%</span></div>
                  <div className="row"><span>Archiving · FI documents</span><span className="pill wr">Running</span></div>
                </div>
                <div className="card-f">
                  <div className="h">Downtime by rehearsal</div>
                  <div className="row"><span>Mock 1</span><b>51 h</b></div>
                  <div className="row"><span>Mock 2</span><b>37 h</b></div>
                  <div className="row"><span>Mock 3</span><b>29 h</b></div>
                  <div className="row"><span>Window</span><span className="pill ok">42 h</span></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a conversion tracked across rehearsals. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>


  
  <section className="light">
    <div className="in">
      <span className="eyebrow">The deadlines</span>
      <h2>Four options for an ECC system, and what each one costs you.</h2>
      <p className="lede">SAP's dates are fixed, and the window for the cheapest options is already narrowing. Before choosing a route, it helps to see every option on the table, including the ones we wouldn't recommend.</p>
      <div className="dl">
        <svg viewBox="0 0 1000 210" role="img" aria-label="ECC timeline: mainstream maintenance to end of 2027; extended maintenance 2028 to 2030 at a two-point premium; ECC must run on SAP HANA and move under RISE by end of 2030 to use the transition option; transition option 2031 to 2033.">
          <g style={{ fontFamily: "var(--body)" }}>
            <line x1="30" y1="120" x2="970" y2="120" style={{ stroke: "var(--line)" }} strokeWidth="2"/>
            <g fontSize="13" style={{ fill: "var(--muted)" }}>
              <text x="30" y="150">2025</text><text x="134" y="150">2026</text><text x="238" y="150">2027</text><text x="342" y="150">2028</text><text x="446" y="150">2029</text><text x="550" y="150">2030</text><text x="654" y="150">2031</text><text x="758" y="150">2032</text><text x="862" y="150">2033</text>
            </g>
            <rect x="30" y="96" width="312" height="18" rx="4" fill="#1f7a5a"/>
            <rect x="342" y="96" width="312" height="18" rx="4" fill="#b7791f"/>
            <rect x="654" y="96" width="312" height="18" rx="4" fill="#6b5bb5"/>
            <g fontSize="12.5" fontWeight="700" style={{ fill: "var(--fg)" }}>
              <text x="30" y="86">Mainstream maintenance</text>
              <text x="342" y="86">Extended maintenance (+2 points)</text>
              <text x="654" y="86">RISE transition option</text>
            </g>
            <line x1="220" y1="30" x2="220" y2="126" stroke="#34b386" strokeWidth="2" strokeDasharray="4 4"/>
            <circle cx="220" cy="120" r="6" fill="#34b386"/>
            <text x="228" y="40" fontSize="13" fontWeight="800" fill="#34b386">Today</text>
            <line x1="652" y1="160" x2="652" y2="126" stroke="#b42318" strokeWidth="2"/>
            <text x="560" y="182" fontSize="12" fontWeight="800" fill="#b42318">End 2030: on SAP HANA,</text>
            <text x="560" y="198" fontSize="12" fontWeight="800" fill="#b42318">under RISE, to qualify</text>
          </g>
        </svg>
      </div>
      <div className="opts">
        <div className="opt"><span className="k">Option 1</span><h3>Stay, pay extended maintenance</h3><p>Keep ECC on SAP support until the end of 2030.</p><ul><li className="p">Buys three years</li><li className="m">Two-point premium on your maintenance fee</li><li className="m">Only the last three enhancement packages qualify</li><li className="m">Pushes the project into the busiest years for SAP skills</li></ul></div>
        <div className="opt"><span className="k">Option 2</span><h3>Switch to third-party support</h3><p>Leave SAP support for an independent provider.</p><ul><li className="p">Lower annual fee</li><li className="m">No SAP legal, tax or security updates</li><li className="m">Reinstatement fees if you return to SAP</li><li className="m">The move still has to happen eventually</li></ul></div>
        <div className="opt"><span className="k">Option 3</span><h3>RISE transition option</h3><p>Run ECC in SAP's private cloud with support until 2033, as a bridge.</p><ul><li className="p">Three more years for very complex estates</li><li className="m">Only with a RISE contract, on SAP HANA by end of 2030</li><li className="m">Price uplift for commitments made after 2025</li><li className="m">Essential fixes only, no new features</li></ul></div>
        <div className="opt rec"><span className="k">Option 4 · Our advice for most</span><h3>Plan the move now</h3><p>Choose a route and start the preparation work this year.</p><ul><li className="p">Your timing, not SAP's deadline</li><li className="p">Preparation done while ECC is stable</li><li className="p">Partner and SAP capacity still available</li><li className="p">Benefits start years earlier</li></ul></div>
      </div>
      <p className="src-note">Dates and conditions as published by SAP and reported by <a href="https://sapinsider.org/blogs/sap-support-deadlines-2027-2030-2033/">SAPinsider</a>. The transition option also requires a minimum system size and SAP's top support plan. Confirm current terms for your contract.</p>
    </div>
  </section>
  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Already on S/4HANA?</span>
        <h2>Your release has a date too.</h2>
        <p className="lede">Moving from ECC to S/4HANA on-premise wasn't the end of the road. Each on-premise release has its own maintenance end. Releases before 2023 got five years of mainstream maintenance. From 2023, SAP ships a release every two years, each with seven years of maintenance.</p>
        <p className="lede">If your release is close to its end, the choice is another on-premise upgrade project, or moving to SAP Cloud ERP Private, where SAP runs the upgrades.</p>
      </div>
      <div className="rel">
        <table>
          <thead><tr><th>Release</th><th>Mainstream maintenance to</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>1909 and earlier</td><td>Ended</td><td><span className="st out">Act now</span></td></tr>
            <tr><td>2020</td><td>End of 2025</td><td><span className="st out">Ended</span></td></tr>
            <tr><td>2021</td><td>End of 2026</td><td><span className="st soon">Ending</span></td></tr>
            <tr><td>2022</td><td>End of 2027</td><td><span className="st soon">Plan now</span></td></tr>
            <tr><td>2023</td><td>End of 2030</td><td><span className="st ok">Supported</span></td></tr>
            <tr><td>2025</td><td>End of 2032</td><td><span className="st ok">Current</span></td></tr>
          </tbody>
        </table>
        <p className="src-note">Based on SAP's published release and maintenance strategy. Check your exact release and feature pack in SAP's Product Availability Matrix.</p>
      </div>
    </div>
  </section>


  <section className="light" id="routes">
    <div className="in">
      <span className="eyebrow">Four routes</span>
      <h2>Where you are, where you're going, and what comes with you.</h2>
      <p className="lede">The starting system and the target decide which paths are open. SAP Cloud ERP (Public Edition) is always a fresh start. SAP Cloud ERP Private can take your existing system as it is.</p>
      <div className="mx">
        <span className="hd blank"></span>
        <span className="hd">To<b>SAP Cloud ERP Private</b></span>
        <span className="hd">To<b>SAP Cloud ERP</b></span>

        <div className="src"><b>SAP ECC</b><span>ECC 6.0, any enhancement pack</span></div>
        <div className="cell"><span className="tgt">ECC → Cloud ERP Private</span><h3>Convert, select or start fresh</h3><p>All three paths are open: convert the whole system, carry over selected data and processes, or reimplement.</p><div className="chips"><span>History</span><span>Custom code</span><span>Configuration</span></div><div className="eff">Effort <span className="dots"><i className="f"></i><i className="f"></i><i className="f"></i><i className="f"></i><i></i></span> Largest change in software, smallest in process</div></div>
        <div className="cell"><span className="tgt">ECC → Cloud ERP</span><h3>Fresh start, with data</h3><p>A new implementation on SAP's standard processes. Master data and open items move across, and some can be pulled directly from ECC.</p><div className="chips"><span>Master data</span><span>Open items</span><span className="no">Custom code</span><span className="no">Full history</span></div><div className="eff">Effort <span className="dots"><i className="f"></i><i className="f"></i><i className="f"></i><i></i><i></i></span> Biggest process change, cleanest result</div></div>

        <div className="src"><b>S/4HANA on-premise</b><span>Any release you run today</span></div>
        <div className="cell"><span className="tgt">S/4HANA → Cloud ERP Private</span><h3>Move and upgrade</h3><p>You're already on S/4HANA, so the system moves to SAP's private cloud and is brought up to a current release.</p><div className="chips"><span>Everything</span></div><div className="eff">Effort <span className="dots"><i className="f"></i><i className="f"></i><i></i><i></i><i></i></span> The shortest route</div></div>
        <div className="cell"><span className="tgt">S/4HANA → Cloud ERP</span><h3>Fresh start, with data</h3><p>A new implementation on the public edition, with master data and open items migrated. Worth it if you want SAP's standard and twice-yearly innovation.</p><div className="chips"><span>Master data</span><span>Open items</span><span className="no">Custom code</span></div><div className="eff">Effort <span className="dots"><i className="f"></i><i className="f"></i><i className="f"></i><i></i><i></i></span> Process change, simpler system to run</div></div>
      </div>
      <p className="note">Effort is relative and depends heavily on how customised your system is and how clean your data is.</p>
    </div>
  </section>


  
  <section>
    <div className="in">
      <span className="eyebrow">Selective data transition</span>
      <h2>The middle path, in four techniques.</h2>
      <p className="lede">Between converting everything and starting from scratch, there's a set of specialist techniques for choosing exactly what moves. They suit groups that want to restructure during the move, for example merging company codes, carving out a business, or going live country by country.</p>
      <div className="sdt">
        <div className="cap">
          <svg viewBox="0 0 200 46" aria-hidden="true"><rect x="2" y="8" width="70" height="30" rx="6" fill="none" stroke="#9aaaa2" strokeWidth="2"/><rect x="12" y="16" width="50" height="6" rx="2" fill="#34b386"/><rect x="12" y="26" width="50" height="6" rx="2" fill="#2a3a33"/><path d="M82 23h40" stroke="#34b386" strokeWidth="3"/><rect x="128" y="8" width="70" height="30" rx="6" fill="#1f7a5a"/></svg>
          <h3>Shell conversion</h3><p>Your system's configuration and custom code are converted without the business data. Selected data is then loaded into the clean shell.</p><p className="use"><b>Use when:</b> your configuration is good but you want to leave old data and history behind.</p></div>
        <div className="cap">
          <svg viewBox="0 0 200 46" aria-hidden="true"><rect x="2" y="8" width="70" height="30" rx="6" fill="none" stroke="#9aaaa2" strokeWidth="2"/><path d="M82 16h40M82 30h24" stroke="#34b386" strokeWidth="3" strokeDasharray="5 4"/><rect x="128" y="8" width="70" height="30" rx="6" fill="#1f7a5a"/><circle cx="163" cy="23" r="6" fill="#eef3f0"/></svg>
          <h3>Mix and match</h3><p>A new S/4HANA system is installed, and only the configuration and code you choose are carried across. Everything else is rebuilt on standard.</p><p className="use"><b>Use when:</b> some areas work well and others need a redesign.</p></div>
        <div className="cap">
          <svg viewBox="0 0 200 46" aria-hidden="true"><rect x="2" y="2" width="56" height="18" rx="5" fill="none" stroke="#9aaaa2" strokeWidth="2"/><rect x="2" y="26" width="56" height="18" rx="5" fill="none" stroke="#9aaaa2" strokeWidth="2"/><path d="M64 11l58 12M64 35l58-12" stroke="#34b386" strokeWidth="3"/><rect x="128" y="8" width="70" height="30" rx="6" fill="#1f7a5a"/></svg>
          <h3>Client transfer</h3><p>A complete client, with its configuration, master and transaction data, moves into the new system. Several source systems can be merged.</p><p className="use"><b>Use when:</b> you're consolidating several SAP systems into one.</p></div>
        <div className="cap">
          <svg viewBox="0 0 200 46" aria-hidden="true"><rect x="2" y="8" width="70" height="30" rx="6" fill="none" stroke="#9aaaa2" strokeWidth="2"/><rect x="10" y="15" width="16" height="16" rx="3" fill="#34b386"/><rect x="30" y="15" width="16" height="16" rx="3" fill="#2a3a33"/><rect x="50" y="15" width="16" height="16" rx="3" fill="#2a3a33"/><path d="M82 23h40" stroke="#34b386" strokeWidth="3"/><rect x="128" y="8" width="70" height="30" rx="6" fill="#1f7a5a"/></svg>
          <h3>Company code transfer</h3><p>One company code at a time moves across with its data, while the rest of the business stays on ECC until its turn.</p><p className="use"><b>Use when:</b> you want phased go-lives by country or business unit.</p></div>
      </div>
      <p className="note">Selective data transition uses specialist tools from SAP and certified partners. It needs more planning than a conversion, but gives you control that neither of the other routes can.</p>
    </div>
  </section>

  <section className="light">
    <div className="in">
      <span className="eyebrow">Start now</span>
      <h2>Six things you can do this quarter, whatever route you pick.</h2>
      <p className="lede">The work that makes migrations late is mostly preparation, and most of it can start before you've signed anything. Every item below makes the move shorter, cheaper and less risky.</p>
      <div className="pre">
        <div className="cap"><h3>Run SAP's Readiness Check</h3><p>A free SAP analysis of your system: which SAP changes affect you, how much custom code you use, and how large your data really is.</p><p className="why"><b>Why now:</b> it turns opinions into numbers for your business case.</p></div>
        <div className="cap"><h3>Convert customers and suppliers</h3><p>S/4HANA replaces separate customer and supplier records with a single business partner. The conversion can be done, and tested, in ECC today.</p><p className="why"><b>Why now:</b> it's often the longest data task, and it doesn't need the new system.</p></div>
        <div className="cap"><h3>Archive old data</h3><p>Archive closed years of documents you no longer need online. A smaller database means a shorter conversion weekend and lower running costs.</p><p className="why"><b>Why now:</b> archiving has its own lead time and approvals.</p></div>
        <div className="cap"><h3>Retire unused custom code</h3><p>Usage statistics show which programs nobody has run in a year. Deleting them now means nothing to adapt, test or migrate later.</p><p className="why"><b>Why now:</b> every object removed is one less to fix.</p></div>
        <div className="cap"><h3>Clean up finance</h3><p>S/4HANA brings everything into one financial journal. Asset accounting, ledgers and reconciliation issues need to be resolved first.</p><p className="why"><b>Why now:</b> finance checks are the most common conversion blocker.</p></div>
        <div className="cap"><h3>Cleanse master data</h3><p>Duplicate customers, blocked suppliers, unused materials and missing tax numbers. Fix them once at the source.</p><p className="why"><b>Why now:</b> it pays off on every route, including a fresh start.</p></div>
      </div>
    </div>
  </section>


  
  <section>
    <div className="in">
      <span className="eyebrow">What changes inside</span>
      <h2>The changes you'll meet, and how much each one matters.</h2>
      <p className="lede">S/4HANA isn't ECC on a faster database. SAP simplified the data model and replaced several older functions. SAP's Readiness Check lists the ones relevant to your system. These are the ones almost every ECC customer meets.</p>
      <div className="simp">
        <table>
          <thead><tr><th>Area</th><th>In ECC</th><th>In S/4HANA</th><th>Impact</th></tr></thead>
          <tbody>
            <tr><td>Customers and suppliers</td><td>Separate customer and vendor records</td><td>One business partner for both, converted before the move</td><td><span className="imp h">High</span></td></tr>
            <tr><td>Finance</td><td>Separate GL, CO, asset and material tables reconciled at month-end</td><td>One universal journal for all postings, with new asset accounting</td><td><span className="imp h">High</span></td></tr>
            <tr><td>Inventory valuation</td><td>Material ledger optional</td><td>Material ledger always on, with actual costing optional</td><td><span className="imp m">Medium</span></td></tr>
            <tr><td>Credit management</td><td>Credit checks in sales</td><td>SAP Credit Management, with credit segments and rules</td><td><span className="imp m">Medium</span></td></tr>
            <tr><td>Rebates</td><td>Rebate agreements in sales</td><td>Settlement management with condition contracts</td><td><span className="imp m">Medium</span></td></tr>
            <tr><td>Warehouse</td><td>Classic warehouse management</td><td>Extended Warehouse Management is the strategic option</td><td><span className="imp m">Medium</span></td></tr>
            <tr><td>Material numbers</td><td>Up to 18 characters</td><td>Up to 40 characters, which matters for interfaces and custom code</td><td><span className="imp l">Low</span></td></tr>
            <tr><td>User interface</td><td>SAP GUI transactions</td><td>Role-based Fiori apps, with SAP GUI still available in Private Edition</td><td><span className="imp m">Medium</span></td></tr>
            <tr><td>Output</td><td>Classic output conditions and forms</td><td>New output management framework alongside the classic one</td><td><span className="imp l">Low</span></td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Impact is typical, not universal. A business that uses classic warehouse management heavily, for example, will rate it high.</p>
    </div>
  </section>

  <section className="light">
    <div className="in">
      <span className="eyebrow">Inside a system conversion</span>
      <h2>Eight steps, rehearsed until they're routine.</h2>
      <p className="lede">For conversions to SAP Cloud ERP Private, the sequence is well established. What makes it safe is repetition. We run the whole sequence on copies of your production system until timings are known and every issue has a fix.</p>
      <div className="conv">
        <div className="cv"><span className="n">1</span><h3>Assess</h3><p>Readiness Check, simplification items, custom code analysis and sizing.</p></div>
        <div className="cv"><span className="n">2</span><h3>Prepare</h3><p>Business partner conversion, finance checks, archiving and code clean-up in ECC.</p></div>
        <div className="cv loop"><span className="n">3</span><h3>Convert</h3><p>Database and software converted to SAP S/4HANA in one technical run, using SAP's own conversion tools.</p></div>
        <div className="cv loop"><span className="n">4</span><h3>Migrate finance</h3><p>Historical finance data rebuilt into the new single journal, then reconciled to the old totals.</p></div>
        <div className="cv loop"><span className="n">5</span><h3>Adapt code</h3><p>Remaining custom code fixed for S/4HANA's data model, or replaced by standard.</p></div>
        <div className="cv loop"><span className="n">6</span><h3>Roles and Fiori</h3><p>Users moved from old transactions to role-based Fiori apps, with roles rebuilt to match.</p></div>
        <div className="cv loop"><span className="n">7</span><h3>Test</h3><p>Regression, integration and user acceptance tests on the converted system.</p></div>
        <div className="cv"><span className="n">8</span><h3>Cut over</h3><p>The final run on production over a planned weekend, with a fallback plan ready.</p></div>
      </div>
      <p className="loopnote"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 10a6 6 0 1 1-2-4.5"/><path d="M16 3v4h-4"/></svg>Steps 3 to 7 are repeated in at least two or three mock conversions before production.</p>
    </div>
  </section>



  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Downtime</span>
        <h2>Measured in rehearsals, not promised in a proposal.</h2>
        <p className="lede">The question every board asks is how long the business will be offline. The honest answer comes from mock conversions on a copy of your production data. Each rehearsal is faster than the last, as we archive more, tune the run and parallelise the steps.</p>
        <p className="lede">The method matters too. SAP's conversion tooling offers several ways to move work out of the downtime window. We pick one based on your database size and how long the business can stop.</p>
      </div>
      <div style={{ border: "1px solid var(--line)", borderRadius: "16px", padding: "24px", background: "var(--bg-2)" }}>
        <h3 style={{ fontSize: "17px", marginBottom: "4px" }}>Business downtime by rehearsal</h3>
        <p style={{ color: "var(--muted)", fontSize: "13.5px", marginBottom: "20px" }}>Example. The dashed line is a 42-hour weekend window.</p>
        <div className="dt">
          <div className="dtr"><span>Mock 1</span><span className="tr"><i style={{ width: "100%" }}></i><span className="win"></span></span><b>51 h</b></div>
          <div className="dtr"><span>Mock 2</span><span className="tr"><i style={{ width: "73%" }}></i><span className="win"></span></span><b>37 h</b></div>
          <div className="dtr"><span>Mock 3</span><span className="tr"><i style={{ width: "57%" }}></i><span className="win"></span></span><b>29 h</b></div>
          <div className="dtr prod"><span>Production</span><span className="tr"><i style={{ width: "55%" }}></i><span className="win"></span></span><b>28 h</b></div>
        </div>
        <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "18px" }}>Illustrative. Real figures depend on database size, hardware, archiving and the conversion method.</p>
      </div>
    </div>
    <div className="in">      <div className="meth">
        <div><b>Standard conversion</b><p>Database migration and software conversion in one run during the downtime window.</p><span>Most systems</span></div>
        <div><b>Downtime-optimised</b><p>Large tables and much of the finance conversion run while the business keeps working, leaving a smaller final step.</p><span>Large systems</span></div>
        <div><b>Near-zero downtime</b><p>A specialist service that replicates changes continuously, so the switch-over takes hours.</p><span>24/7 operations</span></div>
      </div>
    </div>
  </section>


  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Custom code</span>
      <h2>Most of it shouldn't make the trip.</h2>
      <div className="code">
        <div>
          <p className="lede">A typical ECC system carries thousands of custom objects built over fifteen years or more. SAP's own analysis tools show which ones are actually used, and which ones S/4HANA's changes will break. Usually, the majority can simply be retired.</p>
          <div className="tools2">
            <div><b>Usage data</b><span>Months of real usage statistics collected from production, so nothing is retired on a guess.</span></div>
            <div><b>Custom code checks</b><span>SAP's automated checks flag every object affected by the simplifications above.</span></div>
            <div><b>Quick fixes</b><span>Many findings are fixed automatically in SAP's development tools.</span></div>
            <div><b>Clean core review</b><span>Code that stays is rebuilt on released interfaces, or moved to SAP BTP, so it survives future upgrades.</span></div>
          </div>
        </div>
        <div className="funnel" role="img" aria-label="Custom code funnel example: 4,200 custom objects; 2,350 unused and retired; 650 replaced by standard; 980 adapted automatically or manually; 220 rebuilt clean-core or on SAP BTP.">
          <div className="fn" style={{ background: "#142019", width: "100%" }}><span>Custom objects found</span><span>4,200</span></div>
          <div className="fn" style={{ background: "#5c6c65", width: "90%" }}><span>Unused, retired <small>· 56%</small></span><span>2,350</span></div>
          <div className="fn" style={{ background: "#17694b", width: "78%" }}><span>Replaced by standard <small>· 15%</small></span><span>650</span></div>
          <div className="fn" style={{ background: "#2f9e76", width: "66%" }}><span>Adapted <small>· 23%</small></span><span>980</span></div>
          <div className="fn" style={{ background: "#6cc19e", width: "54%", color: "#0f2a1f" }}><span>Rebuilt clean core <small>· 5%</small></span><span>220</span></div>
          <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "6px" }}>Illustrative example from a mid-sized ECC system.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section>
    <div className="in">
      <span className="eyebrow">Beyond the ERP</span>
      <h2>The systems around ECC have deadlines too.</h2>
      <p className="lede">ERP rarely moves alone. The systems around it are often on the same maintenance clock, and they're easy to forget until late in the plan. We map your whole SAP landscape in the assessment.</p>
      <div className="beyond">
        <div className="bx"><span className="from">From SAP PI/PO</span><h3>Integration Suite</h3><p>Interfaces move from Process Integration to SAP Integration Suite. SAP provides migration tooling for many standard patterns.</p><span className="when">Mainstream maintenance ends 2027</span></div>
        <div className="bx"><span className="from">From SAP CRM, SRM, SCM</span><h3>Into S/4HANA or the cloud</h3><p>Many functions are now in S/4HANA itself. Others move to SAP's cloud products. These systems aren't covered by the ECC transition option.</p><span className="when">Same 2027 and 2030 dates as ECC</span></div>
        <div className="bx"><span className="from">From SAP BW</span><h3>Analytics and data</h3><p>Reporting moves to embedded S/4HANA analytics, SAP BW/4HANA or SAP's Business Data Cloud, depending on what you report on.</p><span className="when">Plan alongside ERP</span></div>
        <div className="bx"><span className="from">From GRC and roles</span><h3>Access and security</h3><p>Transaction-based roles are rebuilt around Fiori apps, and access controls are revalidated for the new roles.</p><span className="when">Part of every conversion</span></div>
        <div className="bx"><span className="from">From third-party interfaces</span><h3>Partner systems</h3><p>Banks, e-commerce, logistics and payroll interfaces are checked for data model changes, such as business partners and longer material numbers.</p><span className="when">Test early</span></div>
        <div className="bx"><span className="from">From non-HANA databases</span><h3>SAP HANA</h3><p>Systems on Oracle, SQL Server or DB2 move to SAP HANA as part of the conversion, which also affects database licensing.</p><span className="when">Required for S/4HANA</span></div>
      </div>
    </div>
  </section>

  <section className="light">
    <div className="in">
      <span className="eyebrow">After the move</span>
      <h2>A technical move is the start, not the finish.</h2>
      <p className="lede">A conversion keeps your processes the same, so the business benefits come from what you switch on afterwards. We plan these in from the start, so the move pays for itself.</p>
      <div className="after">
        <div className="cap"><span className="tag2">Finance</span><h3>One journal, faster close</h3><p>All finance and controlling in one table: real-time margin reporting, no reconciliation between ledgers, and a shorter month-end.</p></div>
        <div className="cap"><span className="tag2">People</span><h3>Fiori for every role</h3><p>Role-based apps and a personal home page replace transaction codes. Training focuses on what changes for each role.</p></div>
        <div className="cap"><span className="tag2">Insight</span><h3>Live analytics</h3><p>Reports that run directly on live transactions, plus alerts for late deliveries, credit blocks and unbilled orders.</p></div>
        <div className="cap"><span className="tag2">AI</span><h3>Joule and AI agents</h3><p>SAP's AI works on S/4HANA's data model, not on ECC. The move is what opens the door.</p></div>
        <div className="cap"><span className="tag2">Operations</span><h3>Less to run</h3><p>SAP runs the infrastructure, database and technical operations, so your team can move from keeping the lights on to improving processes.</p></div>
        <div className="cap"><span className="tag2">Clean core</span><h3>Easier upgrades</h3><p>With custom code cleaned up and new extensions built the upgrade-safe way, future releases become routine.</p></div>
      </div>
    </div>
  </section>


  
  <section>
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>When exactly does SAP stop supporting ECC?</summary><p>Mainstream maintenance ends at the end of 2027. Extended maintenance runs from 2028 to the end of 2030 at a two-point premium, and only for the last three enhancement packages. After that, the only SAP-supported option is the RISE transition option to 2033, which needs a RISE contract and an SAP HANA system moved into SAP's private cloud by the end of 2030.</p></details>
        <details><summary>Should we wait for the 2033 option?</summary><p>Only if your landscape is genuinely too complex to move by 2030. It provides essential fixes but no new features, the price rises for later commitments, and the project still has to happen. For most mid-sized companies, it costs more than it saves.</p></details>
        <details><summary>We're already on S/4HANA on-premise. Do we need to move?</summary><p>Check your release. Releases before 2023 had five years of mainstream maintenance, and several have ended or end soon. From 2023, each release gets seven years. Moving an existing S/4HANA system to SAP Cloud ERP Private is the shortest route on this page and stops the cycle of upgrade projects.</p></details>
        <details><summary>Our ECC runs on Oracle or SQL Server. Is that a problem?</summary><p>No, but it adds a database migration to SAP HANA. SAP's conversion tools handle the database migration and the software conversion in one run. The database size after archiving is what drives the downtime.</p></details>
        <details><summary>What happens to our history if we choose a fresh start?</summary><p>Open items, balances and master data move across. Older history usually stays in a read-only copy of the old system or an archive for audit and reference. Selective data transition can bring a defined number of years of history into the new system if you need it.</p></details>
        <details><summary>How long does a conversion take?</summary><p>Typically 12 to 24 months from assessment to go-live, depending on system size, custom code, data quality and integrations. Preparation work done in advance shortens it.</p></details>
        <details><summary>Can we change processes during a conversion?</summary><p>Keep it limited. The safest approach is to convert first, then improve processes in planned waves after go-live. If you need to restructure during the move, for example by merging company codes, selective data transition is the better route.</p></details>
      </div>
    </div>
  </section>


  <section id="book" className="light">
    <div className="in">
      <div className="cta-band" style={{ color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as CSSProperties}>
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Know your route, your effort and your downtime.</h2>
          <p className="lede">Our migration assessment runs SAP's Readiness Check on your system, analyses your custom code and data, and gives you a recommended route with a timeline and budget range.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Get a migration assessment →</Link></div>
        </div>
        <ul>
          <li>Recommended route, with reasons</li>
          <li>Custom code findings and clean-up plan</li>
          <li>Preparation work you can start now</li>
          <li>Downtime estimate and approach</li>
          <li>Timeline, team and budget range</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
