import Link from "next/link";

/** The sections of the SAP Analytics Cloud page, converted from the supplied HTML. */
export function AnalyticsBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / SAP Analytics Cloud</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">SAP Analytics Cloud</span>
          <h1>Report, plan and forecast <em>in one place.</em></h1>
          <p className="lede">Month-end packs built in Excel. Budgets emailed back and forth in twenty versions. Forecasts nobody trusts. SAP Analytics Cloud replaces all three with one tool connected to SAP Cloud ERP: live dashboards for management, budgets and forecasts your teams enter together, and AI that explains what changed. We design it around the decisions you need to make.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Replace your Excel packs →</a>
            <a href="#plan" className="btn sec">How planning works</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of an SAP Analytics Cloud management dashboard: revenue year to date LKR 4.8 billion, 3 percent ahead of budget, gross margin 31.4 percent, operating cash LKR 620 million, with a monthly chart of actual revenue against budget and forecast">
            <div className="shell"><span className="sap">SAP</span><span className="t">Analytics Cloud · Management Pack</span><span className="joule-btn"></span><span className="av">CFO</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Revenue YTD</div><div className="s">vs budget +3%</div></div><div className="k pos">4.8<small>bn</small></div></div>
                <div className="tile"><div><div className="h">Gross margin</div><div className="s">vs budget −0.6 pt</div></div><div className="k neg">31.4<small>%</small></div></div>
                <div className="tile"><div><div className="h">Operating cash</div><div className="s">LKR, this month</div></div><div className="k">620<small>m</small></div></div>
              </div>
              <div className="chart" style={{ marginTop: "10px" }}>
                <div className="h">Revenue by month, LKR m <span>Apr–Mar</span></div>
                <svg viewBox="0 0 400 120" aria-hidden="true">
                  <g stroke="#eef0f2"><path d="M0 20H400M0 55H400M0 90H400"/></g>
                  <g fill="#5899da">
                    <rect x="8" y="58" width="22" height="52" rx="2"/><rect x="41" y="52" width="22" height="58" rx="2"/><rect x="74" y="55" width="22" height="55" rx="2"/><rect x="107" y="46" width="22" height="64" rx="2"/><rect x="140" y="42" width="22" height="68" rx="2"/><rect x="173" y="38" width="22" height="72" rx="2"/><rect x="206" y="44" width="22" height="66" rx="2"/>
                  </g>
                  <g fill="#c3d8ee"><rect x="239" y="40" width="22" height="70" rx="2"/><rect x="272" y="36" width="22" height="74" rx="2"/><rect x="305" y="34" width="22" height="76" rx="2"/><rect x="338" y="30" width="22" height="80" rx="2"/><rect x="371" y="26" width="22" height="84" rx="2"/></g>
                  <path d="M19 62 L52 58 L85 56 L118 52 L151 48 L184 45 L217 44 L250 42 L283 39 L316 36 L349 33 L382 30" fill="none" stroke="#e9730c" strokeWidth="2" strokeDasharray="4 3"/>
                </svg>
                <div className="lg"><span><i style={{ background: "#5899da" }}></i>Actual</span><span><i style={{ background: "#c3d8ee" }}></i>Forecast</span><span><i style={{ background: "#e9730c" }}></i>Budget</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of an SAP Analytics Cloud dashboard. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">One tool, three jobs</span>
      <h2>Business intelligence, planning and prediction together.</h2>
      <p className="lede">Most companies buy a reporting tool, a budgeting tool and a forecasting spreadsheet, and spend every month reconciling them. SAP Analytics Cloud does all three on the same numbers, connected to SAP Cloud ERP.</p>
      <div className="uses3">
        <div className="u3"><span className="n">Report</span><h3>Dashboards people use</h3><p>Management packs, board reports and team dashboards, on live SAP data and on phones as well as laptops.</p><div className="tags"><span>Live data</span><span>Mobile</span><span>Board packs</span></div></div>
        <div className="u3"><span className="n">Plan</span><h3>Budgets without the email</h3><p>Every manager enters their budget in one shared plan, with approvals, versions and a full audit trail.</p><div className="tags"><span>Budgets</span><span>Forecasts</span><span>Workflow</span></div></div>
        <div className="u3"><span className="n">Predict</span><h3>AI that explains</h3><p>Forecasts from your history, automatic explanations of what moved a number, and questions answered in plain English.</p><div className="tags"><span>Smart insights</span><span>Forecasts</span><span>Joule</span></div></div>
      </div>
    </div>
  </section>

  
  <section id="plan">
    <div className="in two">
      <div>
        <span className="eyebrow">Planning</span>
        <h2>One plan, everyone working in it.</h2>
        <p className="lede">Each cost centre manager enters their budget in a form with last year's actuals beside it. Head office sets the drivers, such as exchange rates, salary increases and inflation, and the numbers update for everyone. Finance sees progress in real time and approves each submission.</p>
        <p className="lede">The approved plan goes back to SAP Cloud ERP, so your reports there compare actual against plan without anyone copying numbers. We start from SAP's ready-made planning content for finance and adapt it to your structure.</p>
        <div className="facts">
          <div className="fact"><b>Shared</b><span>one plan, no emailed spreadsheets</span></div>
          <div className="fact"><b>Drivers</b><span>change a rate once, update every plan</span></div>
          <div className="fact"><b>In SAP</b><span>approved plans flow back to the ERP</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a budget entry form in SAP Analytics Cloud for the Colombo sales office cost centre, comparing last year's actuals to next year's budget in LKR thousands for salaries, travel, marketing and rent, with marketing being edited and a total showing an 8.1 percent increase, status submitted for approval">
          <div className="shell"><span className="sap">SAP</span><span className="t">Analytics Cloud · Budget 2027</span><span className="joule-btn"></span><span className="av">CC</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Cost centre 1100 · Colombo sales office · LKR '000</div>
              <table className="pg">
                <thead><tr><th>Account</th><th>Actual 2026</th><th>Budget 2027</th><th>Change</th></tr></thead>
                <tbody>
                  <tr><td>Salaries</td><td>48,200</td><td>52,060</td><td className="neg">+8.0%</td></tr>
                  <tr><td>Travel</td><td>6,400</td><td>6,100</td><td className="pos">−4.7%</td></tr>
                  <tr><td>Marketing</td><td>12,500</td><td className="ed">14,000</td><td className="neg">+12.0%</td></tr>
                  <tr><td>Rent and utilities</td><td>9,800</td><td>10,290</td><td className="neg">+5.0%</td></tr>
                  <tr className="tot"><td>Total</td><td>76,900</td><td>82,450</td><td>+7.2%</td></tr>
                </tbody>
              </table>
              <div className="row" style={{ marginTop: "6px" }}><span>Salary driver: +8% · set by head office</span><span className="pill in">Submitted</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of budget entry in SAP Analytics Cloud. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">AI in analytics</span>
        <h2>Ask why, and get an answer.</h2>
        <p className="lede">When a number moves, SAP Analytics Cloud can tell you what drove it: which region, product or customer made the difference. Managers can ask questions in plain English and get a chart back. Predictive forecasting uses your own history to suggest next quarter's numbers as a starting point for the plan.</p>
        <p className="lede">With Joule, SAP's AI assistant, your teams can ask questions across analytics and SAP Cloud ERP, and SAP's AI can now summarise a whole dashboard in a few sentences.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of AI explanations in SAP Analytics Cloud: a question asking why gross margin fell in September, with an answer that the export tea segment margin fell 2.4 points due to higher auction prices, and the hotel segment added 0.5 points, with a list of contributors">
          <div className="shell"><span className="sap">SAP</span><span className="t">Analytics Cloud · Insights</span><span className="joule-btn"></span><span className="av">FC</span></div>
          <div className="body-pad">
            <div className="joule">
              <div className="jh"><i></i>Ask a question</div>
              <div className="msgs">
                <div className="bub u">Why did gross margin fall in September?</div>
                <div className="bub j">Gross margin fell <b>0.6 points</b> against budget. The main driver was <b>export tea</b>: higher auction prices cut its margin by <b>2.4 points</b>. Hotel sales partly offset this, adding <b>0.5 points</b>.</div>
              </div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Top contributors to the change</div>
              <div className="row"><span>Export tea · purchase price</span><span className="pill wr">−2.4 pt</span></div>
              <div className="row"><span>Hotels and restaurants · volume</span><span className="pill ok">+0.5 pt</span></div>
              <div className="row"><span>Freight · rate change</span><span className="pill wr">−0.3 pt</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of AI-assisted insights in SAP Analytics Cloud. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Where it fits</span>
      <h2>Built-in reports, Analytics Cloud, or both?</h2>
      <p className="lede">SAP Cloud ERP already has strong real-time reporting built in, and you should use it. SAP Analytics Cloud adds what the ERP doesn't do on its own. We'll tell you which you need for each report, so you don't pay for what you already have.</p>
      <div className="users">
        <table>
          <thead><tr><th>You need</th><th>Use</th></tr></thead>
          <tbody>
            <tr><td data-label="You need">Day-to-day lists and checks: open orders, overdue invoices, stock</td><td data-label="Use">Reports and apps built into SAP Cloud ERP</td></tr>
            <tr><td data-label="You need">Management dashboards and board packs</td><td data-label="Use">SAP Analytics Cloud on live SAP data</td></tr>
            <tr><td data-label="You need">Budgets, forecasts and what-if scenarios</td><td data-label="Use">SAP Analytics Cloud planning</td></tr>
            <tr><td data-label="You need">Data from several systems or companies together</td><td data-label="Use">SAP Analytics Cloud with <Link href="/services/sap-solutions/sap-business-data-cloud" style={{ color: "var(--green-hi)", fontWeight: "700", textDecoration: "none" }}>Business Data Cloud →</Link></td></tr>
            <tr><td data-label="You need">Group consolidation and statutory reporting</td><td data-label="Use"><Link href="/services/sap-solutions/group-reporting-and-consolidation" style={{ color: "var(--green-hi)", fontWeight: "700", textDecoration: "none" }}>Group Reporting →</Link> in SAP Cloud ERP</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">How we work</span>
        <h2>From your Excel pack to live dashboards.</h2>
        <p className="lede">We start with the reports your management already reads and the budget process you run today. We rebuild the pack on live SAP data, simplify where we can, and set up planning for your next budget cycle. Your finance team is trained to change dashboards and plans themselves.</p>
      </div>
      <div className="includes">
        <div><h3>Reporting review</h3><p>Which reports matter, who reads them, and what's missing.</p></div>
        <div><h3>Management pack</h3><p>Rebuilt on live SAP data, on desktop and mobile.</p></div>
        <div><h3>Budget and forecast</h3><p>Planning set up for your structure and approval steps.</p></div>
        <div><h3>Plan back to SAP</h3><p>Approved plans sent to SAP Cloud ERP for plan-actual reporting.</p></div>
        <div><h3>Access and security</h3><p>Each person sees only their own company, region or cost centre.</p></div>
        <div><h3>Your team trained</h3><p>Finance can build and change stories without us.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">A video from SAP’s official YouTube channel on SAP’s analytics and data offering.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=OkwQimWDeos" target="_blank" rel="noopener" data-yt="OkwQimWDeos" aria-label="Play on YouTube: Demo: SAP Business Data Cloud">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Analytics and data</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Demo: SAP Business Data Cloud</h3><p>SAP’s demo of its data and analytics offering, which includes SAP Analytics Cloud for dashboards and planning.</p><span className="d">SAP · February 2025</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Is SAP Analytics Cloud included in SAP Cloud ERP?</summary><p>SAP Cloud ERP includes its own reporting and can show some SAP Analytics Cloud content inside the ERP. Full dashboards and planning need a separate SAP Analytics Cloud subscription. We tell you what you need for your use.</p></details>
        <details><summary>Can we keep using Excel?</summary><p>Yes. SAP Analytics Cloud has an Excel add-in, so finance teams can work with live, governed data in Excel when they prefer it.</p></details>
        <details><summary>Is our data copied out of SAP?</summary><p>For dashboards, SAP Analytics Cloud can read data live from SAP Cloud ERP without copying it. Planning works on its own copy of the data it needs, which is kept in step with SAP.</p></details>
        <details><summary>How long does a first budget take to set up?</summary><p>It depends on your structure and approval steps. We plan it so you're ready before your budget cycle starts, starting from SAP's ready-made finance planning content.</p></details>
        <details><summary>Can managers use it on their phones?</summary><p>Yes. Dashboards work on phones and tablets through SAP's mobile app, with the same access rules as on the desktop.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Close the month, not your spreadsheets.</h2>
          <p className="lede">In one session, we review your management reports and budget process, show the same pack on live SAP data, and propose a plan for your next budget cycle.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an analytics review →</Link></div>
        </div>
        <ul>
          <li>Management pack on live data</li>
          <li>Budgets without the email</li>
          <li>Forecasts with AI</li>
          <li>Plan back into SAP</li>
          <li>Built-in reports used first</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
