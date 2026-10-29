import Link from "next/link";
import type { CSSProperties } from "react";

/** The sections of the Cloud ERP Readiness Assessment page, converted from the supplied HTML. */
export function ReadinessBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Cloud ERP Readiness Assessment</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Cloud ERP Readiness Assessment</span>
          <h1>Know what SAP Cloud ERP means for you <em>before you commit.</em></h1>
          <p className="lede">In two weeks we map how your business runs today against SAP's standard processes. You get a clear answer on fit, the right route (GROW or RISE), a sized licence, a realistic timeline and a budget range. It's everything your board needs to decide.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Book an assessment →</a>
            <a href="#get" className="btn sec">See what you get</a>
          </div>
          <p className="name-note"><b>Fixed scope, fixed fee.</b> If we find SAP Cloud ERP isn't right for you yet, we'll tell you. That's a valid result too.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of an assessment summary with a process fit heatmap by department and a GROW recommendation">
            <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MK</span><span className="t">Readiness Assessment · Summary</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Processes reviewed</div><div className="s">Across 6 departments</div></div><div className="k">48</div></div>
                <div className="tile"><div><div className="h">Fit to SAP standard</div><div className="s">Without changes</div></div><div className="k pos">84<small>%</small></div></div>
                <div className="tile"><div><div className="h">Real gaps</div><div className="s">Need an extension</div></div><div className="k" style={{ color: "#e9730c" }}>6</div></div>
              </div>
              <div className="split">
                <div className="card-f">
                  <div className="h">Process fit by department</div>
                  <table className="heat"><tbody>
                    <tr><th></th><th>Plan</th><th>Execute</th><th>Report</th></tr>
                    <tr><th>Finance</th><td className="h5">96</td><td className="h5">92</td><td className="h4">85</td></tr>
                    <tr><th>Sales</th><td className="h4">88</td><td className="h4">81</td><td className="h5">90</td></tr>
                    <tr><th>Procurement</th><td className="h5">94</td><td className="h4">86</td><td className="h4">82</td></tr>
                    <tr><th>Manufacturing</th><td className="h3">72</td><td className="h4">78</td><td className="h3">70</td></tr>
                    <tr><th>Warehouse</th><td className="h4">83</td><td className="h2">64</td><td className="h4">80</td></tr>
                  </tbody></table>
                </div>
                <div className="card-f">
                  <div className="h">Recommendation</div>
                  <div className="row"><span>Route</span><span className="pill ok">GROW with SAP</span></div>
                  <div className="row"><span>Go-live</span><b>7 months</b></div>
                  <div className="row"><span>Phases</span><b>2</b></div>
                  <div className="row"><span>Integrations</span><b>5</b></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of an assessment summary. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Who it's for</span>
      <h2>For leadership teams facing a big ERP decision.</h2>
      <p className="lede">Most of our assessments start with one of these four situations.</p>
      <div className="who4">
        <div className="cap"><h3>You're on SAP ECC</h3><p>Mainstream maintenance ends in 2027, and you need to know the path, the effort and the cost of moving.</p><p className="q2">"Conversion or fresh start?"</p></div>
        <div className="cap"><h3>You've outgrown your ERP</h3><p>Your current system, spreadsheets and workarounds can't keep up with growth, new entities or new markets.</p><p className="q2">"Is SAP right for our size?"</p></div>
        <div className="cap"><h3>You're part of a group</h3><p>Head office runs SAP, and the subsidiaries need something lighter that still connects to the group.</p><p className="q2">"Can subsidiaries run on GROW?"</p></div>
        <div className="cap"><h3>You need board approval</h3><p>You know you need a new ERP, but the board wants a business case, a budget and a plan before saying yes.</p><p className="q2">"What will it really cost?"</p></div>
      </div>
    </div>
  </section>

  
  <section id="get">
    <div className="in">
      <span className="eyebrow">What you get</span>
      <h2>Six deliverables you can act on.</h2>
      <p className="lede">These aren't slides that end up in a drawer. Each deliverable answers a specific question your leadership team will ask.</p>
      <div className="dels">
        <div className="del">
          <div className="pv" aria-hidden="true"><span className="t">Process fit map</span>
            <div className="mini-row"><span>Finance</span><span className="tr"><i style={{ width: "91%" }}></i></span><b>91%</b></div>
            <div className="mini-row"><span>Sales</span><span className="tr"><i style={{ width: "86%" }}></i></span><b>86%</b></div>
            <div className="mini-row"><span>Procurement</span><span className="tr"><i style={{ width: "87%" }}></i></span><b>87%</b></div>
            <div className="mini-row"><span>Manufacturing</span><span className="tr"><i style={{ width: "73%" }}></i></span><b>73%</b></div>
            <div className="mini-row"><span>Warehouse</span><span className="tr"><i style={{ width: "76%" }}></i></span><b>76%</b></div>
          </div>
          <div className="tx"><h3>Process fit map</h3><p>Every process in scope, rated against SAP's standard, with each real gap described and a way to close it.</p></div>
        </div>
        <div className="del">
          <div className="pv" aria-hidden="true"><span className="t">Route recommendation</span>
            <div className="verdict"><span className="on">GROW</span><span>RISE</span><span>Two-tier</span></div>
            <p style={{ fontSize: "11.5px", color: "#55655e", marginTop: "6px" }}>Standard processes fit, custom needs are light, and the business is ready for twice-yearly upgrades.</p>
          </div>
          <div className="tx"><h3>GROW or RISE recommendation</h3><p>Which route fits, with the reasons spelled out. If neither fits yet, we say so and explain why.</p></div>
        </div>
        <div className="del">
          <div className="pv" aria-hidden="true"><span className="t">Licence sizing</span>
            <div className="mini-row"><span>Finance Base</span><span className="tr"><i style={{ width: "22%" }}></i></span><b>18</b></div>
            <div className="mini-row"><span>Supply Chain</span><span className="tr"><i style={{ width: "26%" }}></i></span><b>21</b></div>
            <div className="mini-row"><span>Operational</span><span className="tr"><i style={{ width: "70%" }}></i></span><b>58</b></div>
            <div className="mini-row"><span>Self-Service</span><span className="tr"><i style={{ width: "100%" }}></i></span><b>84</b></div>
          </div>
          <div className="tx"><h3>Licence sizing</h3><p>The right user type for every role, so you don't overpay for occasional users or under-license power users.</p></div>
        </div>
        <div className="del">
          <div className="pv" aria-hidden="true"><span className="t">Integration and data</span>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Bank connectivity</span><span className="pill ok">Standard</span></div>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>E-commerce site</span><span className="pill in">API</span></div>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Payroll system</span><span className="pill wr">Custom</span></div>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Open items · 5 years</span><span className="pill ok">Migrate</span></div>
          </div>
          <div className="tx"><h3>Integration and data outline</h3><p>Every system that needs to connect, how it connects, and which data moves across.</p></div>
        </div>
        <div className="del">
          <div className="pv" aria-hidden="true"><span className="t">Roadmap</span>
            <div className="road"><i></i><i></i><i></i><i></i></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "4px", fontSize: "10.5px", color: "#55655e" }}><span>Prepare</span><span>Explore</span><span>Realize</span><span>Deploy</span></div>
            <p style={{ fontSize: "11.5px", color: "#55655e", marginTop: "6px" }}>Phase 1: Finance, Sales, Procurement. Phase 2: Manufacturing and Warehouse.</p>
          </div>
          <div className="tx"><h3>Roadmap and team</h3><p>The phases, a realistic go-live date, and the people you'll need to release from the business.</p></div>
        </div>
        <div className="del">
          <div className="pv" aria-hidden="true"><span className="t">Business case</span>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Subscription, 5 years</span><b>Range</b></div>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Implementation</span><b>Range</b></div>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Legacy costs retired</span><b style={{ color: "#107e3e" }}>Savings</b></div>
            <div className="row" style={{ borderColor: "#dfe6e2" }}><span>Benefits by KPI</span><b>Measured</b></div>
          </div>
          <div className="tx"><h3>Budget and business case</h3><p>Five-year cost ranges for subscription and implementation, set against the savings and benefits you can expect.</p></div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">How it works</span>
      <h2>Two weeks, ten working days.</h2>
      <p className="lede">We keep the time we need from your people to a minimum. Workshops are short and focused, and we do the analysis afterwards.</p>
      <div className="gantt" role="img" aria-label="Ten-day plan: day 1 kick-off; days 2 to 6 department workshops; days 4 to 8 system, data and integration review; days 7 to 9 analysis and sizing; day 10 board readout.">
        <div className="gantt-in">
          <span></span>
          <span className="d">D1</span><span className="d">D2</span><span className="d">D3</span><span className="d">D4</span><span className="d">D5</span><span className="d">D6</span><span className="d">D7</span><span className="d">D8</span><span className="d">D9</span><span className="d">D10</span>

          <span className="lab"><b>Kick-off</b><span>Goals, scope, people</span></span>
          <span className="gb dk" style={{ gridColumn: "2 / span 1" }}>Start</span><span style={{ gridColumn: "3 / span 9" }}></span>

          <span className="lab"><b>Department workshops</b><span>Live demos of SAP standard</span></span>
          <span style={{ gridColumn: "2 / span 1" }}></span><span className="gb" style={{ gridColumn: "3 / span 5" }}>Finance · Sales · Procurement · Ops</span><span style={{ gridColumn: "8 / span 4" }}></span>

          <span className="lab"><b>Systems and data review</b><span>Current ERP, integrations, data</span></span>
          <span style={{ gridColumn: "2 / span 3" }}></span><span className="gb lt" style={{ gridColumn: "5 / span 5" }}>IT sessions</span><span style={{ gridColumn: "10 / span 2" }}></span>

          <span className="lab"><b>Analysis and sizing</b><span>Our team, offline</span></span>
          <span style={{ gridColumn: "2 / span 6" }}></span><span className="gb lt" style={{ gridColumn: "8 / span 3" }}>Fit, licences, plan</span><span style={{ gridColumn: "11 / span 1" }}></span>

          <span className="lab"><b>Readout</b><span>Leadership presentation</span></span>
          <span style={{ gridColumn: "2 / span 9" }}></span><span className="gb dk" style={{ gridColumn: "11 / span 1" }}>Board</span>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">What we need from you</span>
        <h2>A few hours from the right people.</h2>
        <p className="lede">An assessment is only as good as the people in the room. We need the ones who actually run the processes, not just the ones who sign off on them.</p>
        <p className="lede">Before the kick-off, we'll send a short questionnaire and a document request list, so workshop time goes on decisions rather than on gathering facts.</p>
      </div>
      <div className="need">
        <div><span className="h">~4 hours</span><b>Executive sponsor</b><p>Kick-off, a mid-point check-in and the final readout.</p></div>
        <div><span className="h">½ day each</span><b>Process owners</b><p>One or two people per department who know the day-to-day work.</p></div>
        <div><span className="h">~1 day</span><b>IT lead</b><p>Current systems, integrations, data volumes and infrastructure.</p></div>
        <div><span className="h">Before day 1</span><b>Documents</b><p>Organisation chart, user list by role, system list and any process documents.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Built on SAP's own method</span>
      <h2>Facts from SAP's tools, judgment from our consultants.</h2>
      <p className="lede">The assessment follows the Discover phase of SAP Activate, SAP's implementation method. We use SAP's own assessment tools wherever possible, so our findings carry straight into your project.</p>
      <div className="tools">
        <div className="cap"><span className="tag2">All customers</span><h3>Fit-to-standard demos</h3><p>Your team sees each process running in a live SAP system, not on slides.</p></div>
        <div className="cap"><span className="tag2">All customers</span><h3>SAP configuration questionnaires</h3><p>SAP's structured questions per department, which flag early whether GROW or RISE fits.</p></div>
        <div className="cap"><span className="tag2">On SAP ECC</span><h3>SAP Readiness Check</h3><p>A technical scan of your system covering custom code, simplification items and data volumes.</p></div>
        <div className="cap"><span className="tag2">All customers</span><h3>SAP licensing model</h3><p>User types assigned by role, using SAP's current user-type definitions.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Isn't this just a sales exercise?</summary><p>No. It's a fixed-fee piece of work with a written result you own. If SAP Cloud ERP isn't the right fit, or the timing is wrong, the report says so. Our reputation depends on recommending only projects that succeed.</p></details>
        <details><summary>What does it cost?</summary><p>A fixed fee, agreed upfront, based on the number of departments and entities in scope. If you go ahead with Mawkish for the implementation, we credit the fee against the project.</p></details>
        <details><summary>We're on SAP ECC. Is this different for us?</summary><p>Yes. We add SAP's technical Readiness Check on your system. It shows how much custom code you really use, which changes affect you, and whether a conversion or a fresh start makes more sense.</p></details>
        <details><summary>Can you assess several companies in our group?</summary><p>Yes. For groups, we look at how head office and the subsidiaries fit together. That often leads to a two-tier recommendation: RISE at the centre and GROW in the subsidiaries. The timeline grows with the number of entities.</p></details>
        <details><summary>What happens after the readout?</summary><p>You keep everything. Many customers take the report to their board, then use the roadmap and licence sizing to request formal proposals. The fit map becomes the starting point for the project's workshops, so none of the work is wasted.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book" className="light">
    <div className="in">
      <div className="cta-band" style={{ color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as CSSProperties}>
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Two weeks from now, you could have your answer.</h2>
          <p className="lede">Tell us about your business, and we'll propose a scope and fee for your assessment within two working days.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book your assessment →</Link></div>
        </div>
        <ul>
          <li>Process fit map by department</li>
          <li>GROW, RISE or two-tier recommendation</li>
          <li>Licence sizing by user type</li>
          <li>Integration and data migration outline</li>
          <li>Roadmap, team and budget range</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
