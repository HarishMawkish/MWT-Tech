import Link from "next/link";

/** The sections of the Data Migration page, converted from the supplied HTML. */
export function DataMigBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Data Migration</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Data Migration</span>
          <h1>Move your data once. <em>Trust it from day one.</em></h1>
          <p className="lede">On go-live morning, your new system is only as good as the data inside it. We plan, clean, load and reconcile your master data and open balances with SAP's own migration tools. Then we rehearse until every total matches the system you're leaving.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Get a migration assessment →</a>
            <a href="#method" className="btn sec">See how we rehearse</a>
          </div>
          <div className="chips"><b>Sources we migrate from</b><span>SAP ECC</span><span>SAP Business One</span><span>IFS</span><span>Microsoft Dynamics</span><span>Oracle</span><span>Sage</span><span>Tally</span><span>QuickBooks</span><span>Custom systems</span><span>Spreadsheets</span></div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of the SAP Migrate Your Data app showing a migration project in its third mock load, with status by migration object">
            <div className="shell"><span className="sap">SAP</span><span className="t">Migrate Your Data</span><span className="search">Search migration objects…</span><span className="av">DM</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Migration objects</div><div className="s">Project · Mock load 3</div></div><div className="k">38</div></div>
                <div className="tile"><div><div className="h">Records migrated</div><div className="s">Of 186,940</div></div><div className="k pos">184,220</div></div>
                <div className="tile"><div><div className="h">Errors to fix</div><div className="s">Down from 2,310 in mock 1</div></div><div className="k neg">12</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Migration objects</div>
                <div className="row"><span>Bank</span><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span className="prog2"><i style={{ width: "100%" }}></i></span><span className="pill ok">Migrated</span></span></div>
                <div className="row"><span>Customer · 4,312 records</span><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span className="prog2"><i style={{ width: "100%" }}></i></span><span className="pill ok">Migrated</span></span></div>
                <div className="row"><span>Supplier · 2,086 records</span><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span className="prog2"><i style={{ width: "100%" }}></i></span><span className="pill ok">Migrated</span></span></div>
                <div className="row"><span>Fixed asset (incl. balances)</span><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span className="prog2"><i className="o" style={{ width: "94%" }}></i></span><span className="pill wr">12 errors</span></span></div>
                <div className="row"><span>Accounts receivable open item</span><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span className="prog2"><i className="b" style={{ width: "46%" }}></i></span><span className="pill in">Running</span></span></div>
                <div className="row"><span>G/L account balance</span><span style={{ display: "flex", gap: "8px", alignItems: "center" }}><span className="prog2"><i style={{ width: "0%" }}></i></span><span className="pill nt" style={{ background: "#f5f6f7", color: "#556b82", boxShadow: "inset 0 0 0 1px #dde1e5" }}>Waiting</span></span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of SAP's Migrate Your Data app (the migration cockpit). Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What actually moves</span>
      <h2>Your data from today, not your history.</h2>
      <p className="lede">A new SAP system starts on a clean date. You bring over what you need to keep working the next morning: the records you use, what's still open, and the balances that carry forward. Years of closed transactions stay where they are, but you can still look them up.</p>
      <div className="what">
        <div className="cap"><span className="k">Master data</span><h3>Who and what you deal with</h3><ul><li>Customers and suppliers, with bank and tax details</li><li>Products, bills of material and routings</li><li>Fixed assets</li><li>Prices, contracts and conditions</li></ul></div>
        <div className="cap"><span className="k">Open items</span><h3>Work still in progress</h3><ul><li>Unpaid customer and supplier invoices</li><li>Open sales and purchase orders</li><li>Open projects and service orders</li><li>Contracts still running</li></ul></div>
        <div className="cap"><span className="k">Balances</span><h3>What carries forward</h3><ul><li>General ledger balances</li><li>Stock quantities and values</li><li>Asset values and depreciation to date</li><li>Bank balances for reconciliation</li></ul></div>
        <div className="cap stay"><span className="k">Usually stays behind</span><h3>Kept, not migrated</h3><ul><li>Closed transactions from past years</li><li>Duplicate and inactive records</li><li>Workarounds the new process removes</li></ul><p>We keep history readable, in the old system in read-only mode or in an archive or reporting store.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Order matters</span>
      <h2>Load in the right sequence, or nothing reconciles.</h2>
      <p className="lede">An open invoice can't load before its customer exists, and a stock balance can't load before its product. SAP's migration objects depend on each other, so we plan the loads as a sequence. The general ledger goes last, because it has to agree with everything loaded before it.</p>
      <div className="seq">
        <svg viewBox="0 0 1000 300" role="img" aria-label="Load sequence in four stages. Stage 1, system settings: company codes, chart of accounts and organisation, set up through configuration. Stage 2, master data: banks, then customers and suppliers; products, then bills of material and routings; fixed assets. Stage 3, open items and stock: open receivables and payables, open sales and purchase orders, stock balances. Stage 4: general ledger balances, reconciled to the legacy trial balance.">
          <g style={{ fontFamily: "var(--body)" }} fontSize="10.5" fontWeight="800" letterSpacing="1.4" fill="#7f938a">
            <text x="20" y="30">1 · SYSTEM SETTINGS</text><text x="250" y="30">2 · MASTER DATA</text><text x="560" y="30">3 · OPEN ITEMS AND STOCK</text><text x="820" y="30">4 · CLOSING BALANCES</text>
          </g>
          <g style={{ fontFamily: "var(--body)" }}>
            <g transform="translate(20 50)"><rect width="190" height="210" rx="12" fill="#142019" stroke="#2c3d36"/><text x="16" y="32" fontSize="14" fontWeight="800" fill="#eef3f0">Configuration</text><text x="16" y="58" fontSize="12" fill="#9aaaa2">Company codes</text><text x="16" y="80" fontSize="12" fill="#9aaaa2">Chart of accounts</text><text x="16" y="102" fontSize="12" fill="#9aaaa2">Plants and storage</text><text x="16" y="124" fontSize="12" fill="#9aaaa2">Tax codes</text><text x="16" y="190" fontSize="11" fontWeight="700" fill="#34b386">Set up, not migrated</text></g>
            <g transform="translate(250 50)"><rect width="120" height="56" rx="10" fill="#1f7a5a"/><text x="14" y="34" fontSize="13" fontWeight="800" fill="#fff">Banks</text></g>
            <g transform="translate(400 50)"><rect width="130" height="56" rx="10" fill="#1f7a5a"/><text x="14" y="25" fontSize="13" fontWeight="800" fill="#fff">Customers,</text><text x="14" y="42" fontSize="13" fontWeight="800" fill="#fff">suppliers</text></g>
            <g transform="translate(250 127)"><rect width="120" height="56" rx="10" fill="#1f7a5a"/><text x="14" y="34" fontSize="13" fontWeight="800" fill="#fff">Products</text></g>
            <g transform="translate(400 127)"><rect width="130" height="56" rx="10" fill="#1f7a5a"/><text x="14" y="25" fontSize="13" fontWeight="800" fill="#fff">BOMs,</text><text x="14" y="42" fontSize="13" fontWeight="800" fill="#fff">routings</text></g>
            <g transform="translate(250 204)"><rect width="280" height="56" rx="10" fill="#1f7a5a"/><text x="14" y="34" fontSize="13" fontWeight="800" fill="#fff">Fixed assets, with values to date</text></g>
            <g transform="translate(560 50)"><rect width="220" height="56" rx="10" fill="#0a6ed1"/><text x="14" y="25" fontSize="13" fontWeight="800" fill="#fff">Open receivables</text><text x="14" y="42" fontSize="13" fontWeight="800" fill="#fff">and payables</text></g>
            <g transform="translate(560 127)"><rect width="220" height="56" rx="10" fill="#0a6ed1"/><text x="14" y="25" fontSize="13" fontWeight="800" fill="#fff">Open sales and</text><text x="14" y="42" fontSize="13" fontWeight="800" fill="#fff">purchase orders</text></g>
            <g transform="translate(560 204)"><rect width="220" height="56" rx="10" fill="#0a6ed1"/><text x="14" y="34" fontSize="13" fontWeight="800" fill="#fff">Stock balances</text></g>
            <g transform="translate(820 50)"><rect width="160" height="210" rx="12" fill="#e9a23b"/><text x="16" y="32" fontSize="14" fontWeight="800" fill="#2b1a00">G/L balances</text><text x="16" y="58" fontSize="12" fill="#4a3200">Loaded last</text><text x="16" y="80" fontSize="12" fill="#4a3200">Must equal the</text><text x="16" y="98" fontSize="12" fill="#4a3200">legacy trial balance</text><text x="16" y="190" fontSize="11" fontWeight="800" fill="#2b1a00">Final sign-off</text></g>
          </g>
          <g fill="none" stroke="#7f938a" strokeWidth="1.6">
            <path d="M210 155 H240"/><path d="M234 150 L241 155 L234 160"/>
            <path d="M370 78 H392"/><path d="M386 73 L393 78 L386 83"/>
            <path d="M370 155 H392"/><path d="M386 150 L393 155 L386 160"/>
            <path d="M530 155 H552"/><path d="M546 150 L553 155 L546 160"/>
            <path d="M780 155 H812"/><path d="M806 150 L813 155 L806 160"/>
          </g>
        </svg>
        <ol className="sqs">
          <li><span className="sh">1 · SYSTEM SETTINGS</span>
            <div className="sb dk"><b>Configuration</b><span>Company codes</span><span>Chart of accounts</span><span>Plants and storage</span><span>Tax codes</span><em>Set up, not migrated</em></div></li>
          <li><span className="sh">2 · MASTER DATA</span>
            <div className="sb gn"><b>Banks</b></div>
            <div className="sb gn"><b>Customers, suppliers</b></div>
            <div className="sb gn"><b>Products</b></div>
            <div className="sb gn"><b>BOMs, routings</b></div>
            <div className="sb gn"><b>Fixed assets, with values to date</b></div></li>
          <li><span className="sh">3 · OPEN ITEMS AND STOCK</span>
            <div className="sb bl"><b>Open receivables and payables</b></div>
            <div className="sb bl"><b>Open sales and purchase orders</b></div>
            <div className="sb bl"><b>Stock balances</b></div></li>
          <li><span className="sh">4 · CLOSING BALANCES</span>
            <div className="sb am"><b>G/L balances</b><span>Loaded last</span><span>Must equal the legacy trial balance</span><em>Final sign-off</em></div></li>
        </ol>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">SAP's own tools</span>
      <h2>The migration cockpit is built in, and it checks every record.</h2>
      <p className="lede">SAP Cloud ERP includes the migration cockpit, the <i>Migrate Your Data</i> app, at no extra cost. It loads data through the same checks as the business apps, so a record that wouldn't save on screen won't load either. There are three ways to feed it, and we pick per object.</p>
      <div className="users ways">
        <table>
          <thead><tr><th>Method</th><th>How it works</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td data-label="Method">Templates</td><td data-label="How it works">We fill SAP's Excel (XML) or CSV templates from your extracts and upload them. Each file can be up to 100 MB.</td><td data-label="Best for">Most mid-sized projects and any non-SAP source</td></tr>
            <tr><td data-label="Method">Staging tables</td><td data-label="How it works">Data is loaded into a separate SAP HANA Cloud database with an ETL tool, then the cockpit takes it from there.</td><td data-label="Best for">High volumes and loads you'll repeat several times</td></tr>
            <tr><td data-label="Method">Direct transfer</td><td data-label="How it works">The cockpit reads selected objects straight from an SAP ECC system by company code and converts them to the new data model.</td><td data-label="Best for">Moving from ECC. Objects it doesn't cover still use templates.</td></tr>
          </tbody>
        </table>
      </div>
      <div className="facts">
        <div className="fact"><b>Free</b><span>migration cockpit included in the SAP Cloud ERP subscription</span></div>
        <div className="fact"><b>Same checks</b><span>as the business apps, so bad records are stopped at load</span></div>
        <div className="fact"><b>Custom fields</b><span>appear in the templates automatically when they're enabled</span></div>
        <div className="fact"><b>Statistics</b><span>record counts and values per company code, ready for reconciliation</span></div>
      </div>
      <p className="note">Remote staging uses SAP HANA Cloud, which is free up to a size limit and charged beyond it. We tell you up front if your volumes need it.</p>
    </div>
  </section>

  
  <section id="method">
    <div className="in">
      <span className="eyebrow">How we rehearse</span>
      <h2>Three practice loads before the one that counts.</h2>
      <p className="lede">We never do a migration for the first time on go-live weekend. Each practice load, called a mock load, runs the full process on a test system with your real data. Errors fall with every round, and by the final rehearsal we know exactly how long cutover takes.</p>
      <div className="mocks">
        <svg viewBox="0 0 1000 330" role="img" aria-label="Chart of a typical migration rehearsal. Extract, clean and map comes first. Mock load 1 checks whether the data loads, with about 12 percent of records failing. Mock load 2 checks whether the totals reconcile, with about 3 percent failing. Mock load 3 is a timed dress rehearsal at full volume with under 0.5 percent failing. The go-live load then runs with no open errors. Values are illustrative.">
          <g style={{ fontFamily: "var(--body)", fill: "var(--muted)" }} fontSize="11">
            <line x1="80" y1="250" x2="960" y2="250" stroke="#2c3d36"/>
            <line x1="80" y1="70" x2="960" y2="70" stroke="#1c2823" strokeDasharray="3 5"/><text x="24" y="74">12%</text>
            <line x1="80" y1="160" x2="960" y2="160" stroke="#1c2823" strokeDasharray="3 5"/><text x="30" y="164">6%</text>
            <text x="34" y="254">0%</text>
            <text x="24" y="40" fontWeight="800" letterSpacing="1.2" fontSize="10">RECORDS FAILING</text>
          </g>
          <rect x="110" y="220" width="150" height="30" rx="6" fill="#2a3a33"/>
          <text x="185" y="240" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="11.5" fontWeight="700" fill="#cfe9dd">Extract, clean, map</text>
          <rect x="315" y="70" width="110" height="180" rx="6" fill="#e9730c"/>
          <rect x="495" y="205" width="110" height="45" rx="6" fill="#e9a23b"/>
          <rect x="675" y="243" width="110" height="7" rx="3" fill="#34b386"/>
          <rect x="855" y="246" width="80" height="4" rx="2" fill="#34b386"/>
          <g style={{ fontFamily: "var(--display)", fill: "var(--fg)" }} fontWeight="800" fontSize="18">
            <text x="370" y="60" textAnchor="middle">~12%</text><text x="550" y="195" textAnchor="middle">~3%</text><text x="730" y="233" textAnchor="middle">&lt;0.5%</text><text x="895" y="236" textAnchor="middle">0</text>
          </g>
          <g style={{ fontFamily: "var(--body)", fill: "var(--fg)" }} fontSize="12.5" fontWeight="800">
            <text x="185" y="280" textAnchor="middle">Prepare</text><text x="370" y="280" textAnchor="middle">Mock load 1</text><text x="550" y="280" textAnchor="middle">Mock load 2</text><text x="730" y="280" textAnchor="middle">Mock load 3</text><text x="895" y="280" textAnchor="middle">Go-live load</text>
          </g>
          <g style={{ fontFamily: "var(--body)", fill: "var(--muted)" }} fontSize="11.5">
            <text x="185" y="300" textAnchor="middle">Owners clean the source</text><text x="370" y="300" textAnchor="middle">Does it load?</text><text x="550" y="300" textAnchor="middle">Do the totals match?</text><text x="730" y="300" textAnchor="middle">Timed, full volume</text><text x="895" y="300" textAnchor="middle">Cutover weekend</text>
          </g>
        </svg>
        <ol className="mks">
          <li className="mk-cap" aria-hidden="true">RECORDS FAILING</li>
          <li><b>Prepare</b><span className="mk-d">Owners clean the source</span><div className="mk-bar"><i className="pre">Extract, clean, map</i></div></li>
          <li><b>Mock load 1</b><span className="mk-d">Does it load?</span><div className="mk-bar"><i className="m1" style={{ width: "100%" }} /></div><strong>~12%</strong></li>
          <li><b>Mock load 2</b><span className="mk-d">Do the totals match?</span><div className="mk-bar"><i className="m2" style={{ width: "25%" }} /></div><strong>~3%</strong></li>
          <li><b>Mock load 3</b><span className="mk-d">Timed, full volume</span><div className="mk-bar"><i className="m3" style={{ width: "4%" }} /></div><strong>&lt;0.5%</strong></li>
          <li><b>Go-live load</b><span className="mk-d">Cutover weekend</span><div className="mk-bar"><i className="m3" style={{ width: "2%" }} /></div><strong>0</strong></li>
        </ol>
      </div>
      <p className="note">Illustrative values. Your error rates depend on the source system and how much cleaning happens up front.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Clean before you load</span>
        <h2>Fix the data where it lives, before it moves.</h2>
        <p className="lede">Most migration problems are data problems: the same customer entered three times, suppliers without bank details, products without weights. We profile your source data early and give each problem to the person in your business who owns it.</p>
        <p className="lede">In Sri Lanka this now matters more than ever. With RAMIS e-invoicing, invoices go to the Inland Revenue Department in real time, so a missing or wrong customer TIN is a rejected invoice on day one, not a correction at month-end.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a data quality report listing duplicate customers, missing tax numbers, suppliers without bank details and products without units, each with an owner and status">
          <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MK</span><span className="t">Data quality · Customer and supplier master</span><span className="av">DQ</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Records profiled</div><div className="s">From legacy extract</div></div><div className="k">6,398</div></div>
              <div className="tile"><div><div className="h">Issues found</div><div className="s">Week 3 of 10</div></div><div className="k neg">571</div></div>
              <div className="tile"><div><div className="h">Fixed at source</div><div className="s">By business owners</div></div><div className="k pos">62<small>%</small></div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Issues by rule</div>
              <div className="row"><span>Possible duplicate customers · 214</span><span className="pill wr">Sales ops</span></div>
              <div className="row"><span>Missing or invalid TIN / VAT number · 96</span><span className="pill wr">Finance</span></div>
              <div className="row"><span>Supplier without bank details · 58</span><span className="pill in">Procurement</span></div>
              <div className="row"><span>Inactive more than 3 years · 187</span><span className="pill ok">Agreed: don't migrate</span></div>
              <div className="row"><span>Product without base unit or weight · 16</span><span className="pill in">Supply chain</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a Mawkish data quality report. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Reconcile and sign off</span>
      <h2>Every total checked, by the people who own it.</h2>
      <p className="lede">Loading data is half the job. The other half is proving it arrived complete and correct. After each load we compare the new system with the old one, and the business owner of each area signs it off.</p>
      <div className="recon">
        <div className="rc"><h3>Record counts</h3><p>Customers, suppliers, products and assets: what we extracted, what we excluded on purpose, and what loaded.</p><div className="sig"><span>Signed by</span><b>Data owners</b></div></div>
        <div className="rc"><h3>Receivables and payables</h3><p>Open items by customer and supplier match the legacy ageing reports, invoice by invoice.</p><div className="sig"><span>Signed by</span><b>Credit and AP leads</b></div></div>
        <div className="rc"><h3>Stock</h3><p>Quantities by product, plant and storage location, and the total stock value.</p><div className="sig"><span>Signed by</span><b>Supply chain</b></div></div>
        <div className="rc"><h3>Fixed assets</h3><p>Acquisition values, depreciation to date and net book value, asset by asset.</p><div className="sig"><span>Signed by</span><b>Asset accountant</b></div></div>
        <div className="rc"><h3>General ledger</h3><p>The opening trial balance in SAP equals the closing trial balance in the legacy system, account by account.</p><div className="sig"><span>Signed by</span><b>Financial controller</b></div></div>
        <div className="rc"><h3>Go-live decision</h3><p>All sign-offs collected, open errors at zero, and the cutover timing proven in the dress rehearsal.</p><div className="sig"><span>Signed by</span><b>Steering committee</b></div></div>
      </div>
    </div>
  </section>

  
  <section className="light" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See the tools from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channels on the migration cockpit and how it fits into a Cloud ERP project.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=4t4IuWRr5LU" target="_blank" rel="noopener" data-yt="4t4IuWRr5LU" aria-label="Play on YouTube: Data Migration Cockpit fundamentals for SAP S/4HANA Cloud Public Edition">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>Community</span><span className="tag">Fundamentals</span></div><div className="big">Migration Cockpit basics</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Data Migration Cockpit fundamentals for SAP S/4HANA Cloud Public Edition</h3><p>SAP’s data migration team explains the cockpit, its migration approaches and direct transfer from ECC, with a demo.</p><span className="d">SAP Community · August 2024</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=caZiL3DsAWA" target="_blank" rel="noopener" data-yt="caZiL3DsAWA" aria-label="Play on YouTube: What’s new in Cloud ERP Public: SAP Data Migration Cockpit">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>Community</span><span className="tag">What's new</span></div><div className="big">What's new in the cockpit</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>What’s new in Cloud ERP Public: SAP Data Migration Cockpit</h3><p>The latest features of the migration cockpit for SAP Cloud ERP, presented by SAP.</p><span className="d">SAP Community · January 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=_3PHMlne5cA" target="_blank" rel="noopener" data-yt="_3PHMlne5cA" aria-label="Play on YouTube: How SAP makes implementing the public cloud easier">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Implementing made easy</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>How SAP makes implementing the public cloud easier</h3><p>Guided configuration, best practices and data migration tools that keep projects short.</p><span className="d">SAP · April 2023</span></div></a></div>
      <p className="vnote">Published by SAP on its official SAP and SAP Community YouTube channels. Older videos use the earlier product name, SAP S/4HANA Cloud Public Edition.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Do we lose our history?</summary><p>No. History isn't loaded into the new system, but you can still see it. The usual options are to keep the old system available in read-only mode for a period, or to move history into an archive or a reporting store. We agree the option and how long you keep it, with your auditors' requirements in mind.</p></details>
        <details><summary>We aren't on SAP today. Can you still migrate us?</summary><p>Yes. Most of our sources are non-SAP systems, such as IFS, Microsoft Dynamics, Oracle, Sage, Tally or custom-built software. We extract the data, map it to SAP's templates and load it with the migration cockpit. Only moves from SAP ECC can also use the direct transfer option.</p></details>
        <details><summary>Who cleans the data, you or us?</summary><p>Both. We profile the data, find the problems and build the rules and mappings. Your people decide what's correct, because they know which of three customer records is the real one. Fixing data at the source is always cheaper than fixing it after go-live.</p></details>
        <details><summary>How long is the business frozen at cutover?</summary><p>Usually a weekend, sometimes a little longer for large volumes. The final mock load is timed, so the cutover plan is based on a measured run, not an estimate. We agree beforehand which transactions stop, and when.</p></details>
        <details><summary>Can we load data again later, for example after an acquisition?</summary><p>Yes. The migration cockpit stays available after go-live, so a new company or a new business can be loaded the same way.</p></details>
        <details><summary>How is personal data handled?</summary><p>Migration files contain personal data such as employee and customer contacts. We agree secure storage and transfer, limit access to named people, and delete working files when the project closes. The cockpit also deletes its migration data after a retention period you choose.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Know your data before you plan the project.</h2>
          <p className="lede">A migration assessment looks at your source systems and data quality early, so the migration is planned properly, not discovered late.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a migration assessment →</Link></div>
        </div>
        <ul>
          <li>Source systems and extraction approach</li>
          <li>Data quality profile of key objects</li>
          <li>Objects in scope and load sequence</li>
          <li>Method per object: template, staging or direct</li>
          <li>Mock load and cutover plan</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
