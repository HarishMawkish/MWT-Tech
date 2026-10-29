import Link from "next/link";

/** The sections of the Group Reporting & Consolidation page, converted from the supplied HTML. */
export function GroupRepBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Group Reporting &amp; Consolidation</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Group Reporting &amp; Consolidation</span>
          <h1>Close the group in days, <em>not weeks.</em></h1>
          <p className="lede">For most groups, consolidation still means collecting trial balances by email, chasing intercompany differences, and rebuilding a spreadsheet that only one person understands. SAP Cloud ERP includes group reporting in the same system as your accounting: SAP companies flow in directly, other subsidiaries load their numbers, and the system matches, translates and eliminates. We set it up for your group structure and standards.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Speed up your group close →</a>
            <a href="#steps" className="btn sec">How consolidation works</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of the consolidation monitor for the September period: five consolidation units with status for data collection, validation, currency translation, intercompany matching and eliminations. Sri Lanka and Maldives units are complete, the Bangladesh unit has a validation error, the UK unit is still waiting for data">
            <div className="shell"><span className="sap">SAP</span><span className="t">Data Monitor · Group LKR · Sep 2026</span><span className="joule-btn"></span><span className="av">GC</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Units</div><div className="s">In the group</div></div><div className="k">5</div></div>
                <div className="tile"><div><div className="h">Complete</div><div className="s">Ready to eliminate</div></div><div className="k pos">2</div></div>
                <div className="tile"><div><div className="h">Open</div><div className="s">Error or waiting</div></div><div className="k neg">3</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <table className="mon">
                  <thead><tr><th>Unit</th><th>Data</th><th>Validate</th><th>Translate</th><th>Match IC</th></tr></thead>
                  <tbody>
                    <tr><td>LK01 Holding<small>SAP · real time</small></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td></tr>
                    <tr><td>LK02 Plantations<small>SAP · real time</small></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td></tr>
                    <tr><td>MV01 Maldives<small>Upload · USD</small></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td><td><span className="st ok"></span></td><td><span className="st go"></span></td></tr>
                    <tr><td>BD01 Bangladesh<small>Upload · BDT</small></td><td><span className="st ok"></span></td><td><span className="st er"></span></td><td><span className="st wt"></span></td><td><span className="st wt"></span></td></tr>
                    <tr><td>UK01 London<small>Upload · GBP</small></td><td><span className="st wt"></span></td><td><span className="st wt"></span></td><td><span className="st wt"></span></td><td><span className="st wt"></span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of the consolidation data monitor in SAP Cloud ERP. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="steps">
    <div className="in">
      <span className="eyebrow">How consolidation works</span>
      <h2>Every step of the group close, in one system.</h2>
      <p className="lede">Group reporting in SAP Cloud ERP runs the consolidation as a set of steps you follow in a monitor, period after period. Each step is logged, so auditors can trace any group number back to the entries behind it.</p>
      <div className="steps6">
        <div className="s6"><span className="n">1 · Collect</span><h3>Data in</h3><p>SAP companies flow in directly. Others upload or enter their numbers.</p></div>
        <div className="s6"><span className="n">2 · Validate</span><h3>Check it</h3><p>Rules catch errors, such as a balance sheet that doesn't balance.</p></div>
        <div className="s6"><span className="n">3 · Translate</span><h3>One currency</h3><p>Each unit's figures are translated into the group currency.</p></div>
        <div className="s6"><span className="n">4 · Match</span><h3>Intercompany</h3><p>Sales, loans and balances between companies are matched.</p></div>
        <div className="s6"><span className="n">5 · Eliminate</span><h3>Remove internal</h3><p>Intercompany items and investments are eliminated.</p></div>
        <div className="s6"><span className="n">6 · Report</span><h3>Group accounts</h3><p>Group statements and analysis, with drill-down to source.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Not everyone is on SAP</span>
      <h2>Bring in every subsidiary, whatever system it uses.</h2>
      <p className="lede">Your SAP companies need no data collection at all: their postings are already in the group ledger. Subsidiaries on other systems, such as a small overseas sales office on a local package, load their trial balance from a file or enter it in a form. SAP maps their accounts to your group chart, and validations check the data before it goes any further.</p>
      <div className="dc">
        <svg viewBox="0 0 1000 200" role="img" aria-label="Data collection: SAP Cloud ERP companies post directly in real time, while subsidiaries on other systems upload trial balances or enter data in forms; both pass through mapping and validation into the group ledger, which feeds consolidation and group reports">
          <g fontFamily="inherit" fontSize="14" fontWeight="700" textAnchor="middle">
            <rect x="10" y="20" width="230" height="64" rx="12" fill="none" stroke="#7f938a"/><text x="125" y="48" fill="currentColor">SAP Cloud ERP companies</text><text x="125" y="68" fontSize="12" fontWeight="500" fill="#7f938a">real time, no upload</text>
            <rect x="10" y="116" width="230" height="64" rx="12" fill="none" stroke="#7f938a"/><text x="125" y="144" fill="currentColor">Other subsidiaries</text><text x="125" y="164" fontSize="12" fontWeight="500" fill="#7f938a">file upload or forms</text>
            <rect x="320" y="116" width="200" height="64" rx="12" fill="none" stroke="#7f938a"/><text x="420" y="144" fill="currentColor">Map and validate</text><text x="420" y="164" fontSize="12" fontWeight="500" fill="#7f938a">to your group accounts</text>
            <rect x="600" y="60" width="180" height="80" rx="12" fill="none" stroke="#34b386" strokeWidth="2"/><text x="690" y="96" fill="currentColor">Group ledger</text><text x="690" y="116" fontSize="12" fontWeight="500" fill="#7f938a">one set of numbers</text>
            <rect x="840" y="60" width="150" height="80" rx="12" fill="none" stroke="#7f938a"/><text x="915" y="96" fill="currentColor">Group</text><text x="915" y="116" fill="currentColor">reports</text>
          </g>
          <g stroke="#7f938a" strokeWidth="2" fill="none">
            <path d="M240 52 H560 L592 82"/><path d="M240 148 H312"/><path d="M520 148 H560 L592 118"/><path d="M780 100 H832"/>
            <path d="M304 142l8 6-8 6M824 94l8 6-8 6"/>
          </g>
        </svg>
        <ol className="dc-list"><li><b>SAP Cloud ERP companies</b> post directly, in real time.</li><li><b>Other subsidiaries</b> upload a trial balance or use forms.</li><li>Their data is <b>mapped and validated</b> to your group accounts.</li><li>Everything lands in <b>one group ledger</b> for consolidation and reports.</li></ol>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Intercompany</span>
        <h2>Find intercompany differences before month-end, not after.</h2>
        <p className="lede">Intercompany differences are where group closes stall: one company booked the invoice, the other didn't; one used last month's rate. SAP matches intercompany balances and transactions between your companies, shows the differences with the reason, and lets each side fix them during the month.</p>
        <p className="lede">The matching results then drive the eliminations automatically, so what was agreed is what gets eliminated.</p>
        <div className="facts">
          <div className="fact"><b>Matched</b><span>both sides compared automatically</span></div>
          <div className="fact"><b>Explained</b><span>differences shown with their reason</span></div>
          <div className="fact"><b>Eliminated</b><span>matched items drive eliminations</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of intercompany reconciliation: four company pairs comparing receivables and payables in LKR thousands. Holding and Plantations match, Plantations and Maldives differ by 1,250 due to an exchange rate, Holding and Bangladesh have an invoice missing on one side, Holding and London match">
          <div className="shell"><span className="sap">SAP</span><span className="t">Intercompany Reconciliation · Sep 2026</span><span className="joule-btn"></span><span className="av">GC</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Pairs</div><div className="s">Company pairs</div></div><div className="k">12</div></div>
              <div className="tile"><div><div className="h">Matched</div><div className="s">No difference</div></div><div className="k pos">10</div></div>
              <div className="tile"><div><div className="h">Differences</div><div className="s">LKR '000</div></div><div className="k neg">3,400</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="icm hd"><span>Pair</span><span>Receivable</span><span>Payable</span><span></span></div>
              <div className="icm"><span>LK01 ↔ LK02<small>Management fees</small></span><span>18,400</span><span>18,400</span><span className="pill ok">Matched</span></div>
              <div className="icm"><span>LK02 ↔ MV01<small>Tea sales · rate used</small></span><span>42,750</span><span>41,500</span><span className="pill wr">FX</span></div>
              <div className="icm"><span>LK01 ↔ BD01<small>Invoice not booked</small></span><span>2,150</span><span>0</span><span className="pill wr">Missing</span></div>
              <div className="icm"><span>LK01 ↔ UK01<small>Loan interest</small></span><span>6,300</span><span>6,300</span><span className="pill ok">Matched</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of intercompany matching in SAP Cloud ERP. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Your group, your standards</span>
        <h2>Built for how your group is owned and reported.</h2>
        <p className="lede">Sri Lankan groups report under SLFRS, based on IFRS, and many also report to overseas owners or lenders in USD. Group reporting in SAP Cloud ERP supports several group currencies, consolidation groups for different views of the group, and changes in ownership such as acquisitions, disposals and minority interests.</p>
        <p className="lede">We design your group chart of accounts, consolidation units and groups, and the reports your board and auditors need, so the structure still works when the group grows.</p>
      </div>
      <div className="includes">
        <div><h3>Group chart of accounts</h3><p>One chart, mapped from each subsidiary's accounts.</p></div>
        <div><h3>Several currencies</h3><p>Group accounts in LKR, with USD or other views as needed.</p></div>
        <div><h3>Ownership changes</h3><p>Acquisitions, disposals and minority interests handled.</p></div>
        <div><h3>Several views</h3><p>Legal, management and regional groups side by side.</p></div>
        <div><h3>Audit trail</h3><p>Every group number traceable to its source entries.</p></div>
        <div><h3>Group reports</h3><p>Statements, notes support and analysis with drill-down.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What's next</span>
      <h2>Plan and forecast at group level too.</h2>
      <p className="lede">Consolidation isn't only for actuals. With SAP Analytics Cloud, your subsidiaries can submit budgets and forecasts that are consolidated the same way as actuals, so group plan and group actual finally compare like for like. SAP has also released a financial consolidation assistant that helps with data submissions and error resolution; we check what's available for your release.</p>
      <div className="users">
        <table>
          <thead><tr><th>Need</th><th>What we set up</th></tr></thead>
          <tbody>
            <tr><td data-label="Need">Monthly management consolidation</td><td data-label="What we set up">Group reporting with a short, fixed close calendar</td></tr>
            <tr><td data-label="Need">Year-end statutory group accounts</td><td data-label="What we set up">Full consolidation including investments and minority interests</td></tr>
            <tr><td data-label="Need">Group budget and forecast</td><td data-label="What we set up">Planning in SAP Analytics Cloud, consolidated like actuals</td></tr>
            <tr><td data-label="Need">Subsidiaries not on SAP</td><td data-label="What we set up">File uploads or forms, with mapping and validations</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channels on group reporting.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=vKrj-RP4SBg" target="_blank" rel="noopener" data-yt="vKrj-RP4SBg" aria-label="Play on YouTube: Introducing SAP S/4HANA Cloud for group reporting">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">Group Reporting</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Introducing SAP S/4HANA Cloud for group reporting</h3><p>A short introduction from SAP Learning to group reporting in SAP’s cloud ERP: data collection, consolidation and group reports.</p><span className="d">SAP Community · December 2023</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=EFelOaZuczQ" target="_blank" rel="noopener" data-yt="EFelOaZuczQ" aria-label="Play on YouTube: Finance in SAP S/4HANA Cloud Public Edition 2608">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Release 2608</span></div><div className="big">Finance in 2608</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Finance in SAP S/4HANA Cloud Public Edition 2608</h3><p>SAP’s release highlights for finance in the August 2026 release.</p><span className="d">SAP · October 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channels.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Do we need a separate consolidation tool?</summary><p>Usually not. Group reporting is part of SAP Cloud ERP, so it runs on the same data as your accounting. Very large or complex groups sometimes need more, and we'll tell you if that's you.</p></details>
        <details><summary>Do all our subsidiaries have to move to SAP?</summary><p>No. Subsidiaries on other systems can upload their trial balances or enter data in forms. Many groups move them to SAP over time, often using a simpler setup for small companies.</p></details>
        <details><summary>Can it handle SLFRS and reporting to overseas owners?</summary><p>Yes. You can run group accounts in more than one currency and keep separate consolidation groups for different reporting needs. We design the structure with your finance team and auditors.</p></details>
        <details><summary>How long does it take to set up?</summary><p>It depends on the number of units and how clean your intercompany process is. We usually start with a parallel run alongside your current consolidation, so you can compare before you switch.</p></details>
        <details><summary>Is group reporting included in SAP Cloud ERP?</summary><p>Group reporting is part of SAP Cloud ERP's finance scope. Some options depend on your licence. We confirm what your subscription includes.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Make your next group close the fastest yet.</h2>
          <p className="lede">In one session, we walk through your group structure, your current close calendar and where it stalls, and show how group reporting in SAP Cloud ERP would handle it.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a group close review →</Link></div>
        </div>
        <ul>
          <li>Group structure and currencies</li>
          <li>Subsidiaries on other systems</li>
          <li>Intercompany matching</li>
          <li>SLFRS and overseas reporting</li>
          <li>A parallel run before switching</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
