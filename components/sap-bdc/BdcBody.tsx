import Link from "next/link";

/** The sections of the SAP Business Data Cloud page, converted from the supplied HTML. */
export function BdcBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / SAP Business Data Cloud</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">SAP Business Data Cloud</span>
          <h1>Your business data, ready for analytics <em>and AI.</em></h1>
          <p className="lede">Most companies still export SAP data to spreadsheets, or keep a data warehouse that breaks at every upgrade. SAP Business Data Cloud takes a different approach: SAP delivers your ERP data as ready-made data products that keep their business meaning and stay current, and you combine them with data from your other systems for reporting, planning and AI. We help you decide whether you need it, and set it up when you do.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Plan your data foundation →</a>
            <a href="#fit" className="btn sec">Do we need it?</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a data product catalogue in SAP Business Data Cloud: 24 data products active from 4 sources, with SAP-managed products such as journal entries, purchase orders, suppliers and sales orders from SAP Cloud ERP, and customer-managed products such as Salesforce opportunities and tea auction prices">
            <div className="shell"><span className="sap">SAP</span><span className="t">Business Data Cloud · Catalog</span><span className="joule-btn"></span><span className="av">DA</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Data products</div><div className="s">Active</div></div><div className="k">24</div></div>
                <div className="tile"><div><div className="h">Sources</div><div className="s">SAP and non-SAP</div></div><div className="k">4</div></div>
                <div className="tile"><div><div className="h">Pipelines</div><div className="s">To maintain</div></div><div className="k pos">0</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Data products</div>
                <div className="dp"><span>Journal Entry<small>SAP Cloud ERP · finance</small></span><span className="src">SAP-managed</span><span className="pill ok">Active</span></div>
                <div className="dp"><span>Purchase Order<small>SAP Cloud ERP · spend</small></span><span className="src">SAP-managed</span><span className="pill ok">Active</span></div>
                <div className="dp"><span>Opportunity<small>Salesforce</small></span><span className="src cu">Your own</span><span className="pill ok">Active</span></div>
                <div className="dp"><span>Tea auction prices<small>Colombo auction data</small></span><span className="src cu">Your own</span><span className="pill in">Building</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of the data catalogue in SAP Business Data Cloud. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Why it's different</span>
      <h2>Stop rebuilding SAP data. Use it as SAP delivers it.</h2>
      <p className="lede">The old way was to copy SAP tables into a warehouse and rebuild the business meaning yourself: what a posting is, how a sales order links to its delivery. It takes months, and every SAP release can break it. With Business Data Cloud, SAP does that work and keeps it up to date.</p>
      <div className="users">
        <table>
          <thead><tr><th>Question</th><th>The old way</th><th>With Business Data Cloud</th></tr></thead>
          <tbody>
            <tr><td data-label="Question">Who builds the data model?</td><td data-label="The old way">Your team or a consultant, table by table.</td><td data-label="With Business Data Cloud">SAP, as ready-made data products.</td></tr>
            <tr><td data-label="Question">What happens at an upgrade?</td><td data-label="The old way">Extracts and reports need checking and fixing.</td><td data-label="With Business Data Cloud">SAP keeps its data products current.</td></tr>
            <tr><td data-label="Question">How many copies of the data?</td><td data-label="The old way">Several, often out of date.</td><td data-label="With Business Data Cloud">Data is shared rather than copied where possible.</td></tr>
            <tr><td data-label="Question">Non-SAP data?</td><td data-label="The old way">Joined by hand in spreadsheets.</td><td data-label="With Business Data Cloud">Combined with SAP data in one model.</td></tr>
            <tr><td data-label="Question">Ready for AI?</td><td data-label="The old way">Rarely: meaning is lost in the copy.</td><td data-label="With Business Data Cloud">Yes: data keeps its business context for Joule and agents.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">How it fits together</span>
      <h2>One data foundation, many uses.</h2>
      <p className="lede">Business Data Cloud brings SAP's data tools together. Data comes in from SAP Cloud ERP and your other SAP and non-SAP systems, is combined in one place, and is used for reporting, planning, data science and AI.</p>
      <div className="arch">
        <svg viewBox="0 0 1000 250" role="img" aria-label="Architecture: sources on the left (SAP Cloud ERP, other SAP cloud apps, non-SAP systems) feed data products in the middle, which are combined in SAP Datasphere, then used on the right by SAP Analytics Cloud for reports and planning, SAP Databricks or Snowflake for data science, and Joule and agents for AI">
          <g fontFamily="inherit" fontSize="14" fontWeight="700" textAnchor="middle">
            <rect x="10" y="20" width="200" height="58" rx="10" fill="none" stroke="#7f938a"/><text x="110" y="54" fill="currentColor">SAP Cloud ERP</text>
            <rect x="10" y="96" width="200" height="58" rx="10" fill="none" stroke="#7f938a"/><text x="110" y="122" fill="currentColor">SuccessFactors,</text><text x="110" y="140" fill="currentColor">Ariba, Concur</text>
            <rect x="10" y="172" width="200" height="58" rx="10" fill="none" stroke="#7f938a"/><text x="110" y="198" fill="currentColor">Non-SAP systems</text><text x="110" y="216" fontSize="12" fontWeight="500" fill="#7f938a">Salesforce, files, feeds</text>
            <rect x="290" y="60" width="190" height="130" rx="12" fill="none" stroke="#34b386" strokeWidth="2"/><text x="385" y="112" fill="currentColor">Data products</text><text x="385" y="134" fontSize="12" fontWeight="500" fill="#7f938a">SAP-managed</text><text x="385" y="152" fontSize="12" fontWeight="500" fill="#7f938a">and your own</text>
            <rect x="540" y="60" width="190" height="130" rx="12" fill="none" stroke="#34b386" strokeWidth="2"/><text x="635" y="112" fill="currentColor">SAP Datasphere</text><text x="635" y="134" fontSize="12" fontWeight="500" fill="#7f938a">combine and</text><text x="635" y="152" fontSize="12" fontWeight="500" fill="#7f938a">model</text>
            <rect x="790" y="20" width="200" height="58" rx="10" fill="none" stroke="#7f938a"/><text x="890" y="46" fill="currentColor">SAP Analytics Cloud</text><text x="890" y="64" fontSize="12" fontWeight="500" fill="#7f938a">reports and planning</text>
            <rect x="790" y="96" width="200" height="58" rx="10" fill="none" stroke="#7f938a"/><text x="890" y="122" fill="currentColor">Databricks, Snowflake</text><text x="890" y="140" fontSize="12" fontWeight="500" fill="#7f938a">data science</text>
            <rect x="790" y="172" width="200" height="58" rx="10" fill="none" stroke="#7f938a"/><text x="890" y="198" fill="currentColor">Joule and agents</text><text x="890" y="216" fontSize="12" fontWeight="500" fill="#7f938a">AI with context</text>
          </g>
          <g stroke="#7f938a" strokeWidth="2" fill="none">
            <path d="M210 49 L282 105"/><path d="M210 125 H282"/><path d="M210 201 L282 145"/>
            <path d="M480 125 H532"/>
            <path d="M730 105 L782 49"/><path d="M730 125 H782"/><path d="M730 145 L782 201"/>
            <path d="M524 119l8 6-8 6M774 119l8 6-8 6M274 119l8 6-8 6"/>
          </g>
        </svg>
        <ol className="arch-list"><li><b>Sources:</b> SAP Cloud ERP, other SAP cloud apps and non-SAP systems.</li><li><b>Data products:</b> SAP-managed, plus your own.</li><li><b>SAP Datasphere:</b> combines and models the data.</li><li><b>Uses:</b> SAP Analytics Cloud for reports and planning, Databricks or Snowflake for data science, Joule and agents for AI.</li></ol>
      </div>
      <div className="comps">
        <div className="comp"><span className="a">Data products</span><h3>Business-ready data</h3><p>Sales orders, journal entries, suppliers and more, delivered by SAP with their meaning intact.</p></div>
        <div className="comp"><span className="a">Datasphere</span><h3>Combine and model</h3><p>Join SAP and non-SAP data into one model your whole company trusts.</p></div>
        <div className="comp"><span className="a">Analytics Cloud</span><h3>Report and plan</h3><p>Dashboards, budgets and forecasts on the same data. <Link href="/services/sap-analytics-cloud" style={{ color: "var(--green-hi)", fontWeight: "700", textDecoration: "none" }}>See SAP Analytics Cloud →</Link></p></div>
        <div className="comp"><span className="a">AI and data science</span><h3>Predict and automate</h3><p>Data scientists and SAP's AI work on the same governed data.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Intelligent applications</span>
        <h2>Ready-made insight, switched on in days.</h2>
        <p className="lede">SAP also delivers intelligent applications: complete analytics for a business area, with the data products, models and dashboards already built. Install one and it pulls in the data it needs. Examples include working capital and profit and loss analysis.</p>
        <p className="lede">They're a fast start, and you can copy and adapt them to your own KPIs. We check which are available for your SAP edition and region, and which fit your questions, before you commit.</p>
        <div className="facts">
          <div className="fact"><b>Pre-built</b><span>data, models and dashboards together</span></div>
          <div className="fact"><b>Adaptable</b><span>copy and change to fit your KPIs</span></div>
          <div className="fact"><b>Current</b><span>maintained by SAP as SAP changes</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a working capital dashboard: days sales outstanding 58, days payable outstanding 42, days inventory 71, with days sales outstanding by customer group, exporters highest at 84 days">
          <div className="shell"><span className="sap">SAP</span><span className="t">Working Capital Insights</span><span className="joule-btn"></span><span className="av">CFO</span></div>
          <div className="body-pad">
            <div className="kpi3">
              <div className="tile"><div><div className="h">DSO</div><div className="s">Days to collect</div></div><div className="k neg">58</div></div>
              <div className="tile"><div><div className="h">DPO</div><div className="s">Days to pay</div></div><div className="k">42</div></div>
              <div className="tile"><div><div className="h">DIO</div><div className="s">Days in stock</div></div><div className="k">71</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Days to collect by customer group</div>
              <div className="bars">
                <div className="bar-r"><span>Exporters</span><span className="tr"><i className="hi" style={{ width: "84%" }}></i></span><span>84</span></div>
                <div className="bar-r"><span>Supermarkets</span><span className="tr"><i style={{ width: "61%" }}></i></span><span>61</span></div>
                <div className="bar-r"><span>Hotels</span><span className="tr"><i style={{ width: "47%" }}></i></span><span>47</span></div>
                <div className="bar-r"><span>Distributors</span><span className="tr"><i style={{ width: "38%" }}></i></span><span>38</span></div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of an SAP intelligent application for working capital. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section id="fit">
    <div className="in">
      <span className="eyebrow">An honest answer</span>
      <h2>Do you need Business Data Cloud?</h2>
      <p className="lede">Not every company does, at least not on day one. SAP Cloud ERP already includes strong real-time reporting for day-to-day operations. Business Data Cloud earns its place when you need to look across systems, companies or years, or want to plan and use AI on that data.</p>
      <div className="users">
        <table>
          <thead><tr><th>Your situation</th><th>What usually fits</th></tr></thead>
          <tbody>
            <tr><td data-label="Your situation">One company on SAP Cloud ERP, operational reporting</td><td data-label="What usually fits">The analytics built into SAP Cloud ERP</td></tr>
            <tr><td data-label="Your situation">Budgets and forecasts, a few dashboards for management</td><td data-label="What usually fits">SAP Analytics Cloud on top of SAP Cloud ERP</td></tr>
            <tr><td data-label="Your situation">Several systems or companies, group-wide analytics</td><td data-label="What usually fits">Business Data Cloud with Datasphere</td></tr>
            <tr><td data-label="Your situation">Data science, custom AI, or AI agents across your data</td><td data-label="What usually fits">Business Data Cloud with data products</td></tr>
            <tr><td data-label="Your situation">An existing SAP BW you want to modernise</td><td data-label="What usually fits">Business Data Cloud, bringing BW along</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Business Data Cloud is licensed by capacity, with intelligent applications on top. We size it for your data and use cases and check the terms in your SAP contract.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">How we work</span>
        <h2>Start with the questions, not the platform.</h2>
        <p className="lede">We begin with the questions your management can't answer today, and the data each one needs. Then we start with one area, usually finance, connect your SAP data products, add the non-SAP data that matters, and deliver the first dashboards in weeks. Each next area builds on the same foundation.</p>
      </div>
      <div className="includes">
        <div><h3>Data assessment</h3><p>Your key questions, sources and data quality, mapped.</p></div>
        <div><h3>Architecture</h3><p>Which components you need now, and which can wait.</p></div>
        <div><h3>SAP data products</h3><p>Activated and checked against SAP Cloud ERP.</p></div>
        <div><h3>Non-SAP data</h3><p>Salesforce, files and local data sources added.</p></div>
        <div><h3>Governance</h3><p>Owners, definitions and access rules for each data product.</p></div>
        <div><h3>Capacity and cost</h3><p>Usage sized and monitored so costs stay predictable.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channel on SAP Business Data Cloud.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=OkwQimWDeos" target="_blank" rel="noopener" data-yt="OkwQimWDeos" aria-label="Play on YouTube: Demo: SAP Business Data Cloud">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Business Data Cloud</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Demo: SAP Business Data Cloud</h3><p>SAP’s launch demo: data products, intelligent applications and AI on one data foundation.</p><span className="d">SAP · February 2025</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Does Business Data Cloud replace SAP Analytics Cloud?</summary><p>No. SAP Analytics Cloud is part of Business Data Cloud. It's where people see dashboards and do planning. Business Data Cloud adds the data foundation underneath it.</p></details>
        <details><summary>Does it replace our SAP BW?</summary><p>Not overnight. Business Data Cloud can include SAP BW, so you can keep what works and move to data products at your own pace.</p></details>
        <details><summary>Can we use it with Microsoft, Databricks or Snowflake?</summary><p>Yes. SAP Databricks and SAP Snowflake are part of the offering, and SAP shares data with other platforms without copying it where possible. We check what fits your existing tools.</p></details>
        <details><summary>Which data products are available for SAP Cloud ERP?</summary><p>SAP adds data products with each release, starting with finance, procurement and supply chain. We check the current list for your edition before we plan.</p></details>
        <details><summary>We've just gone live. Is it too early?</summary><p>Usually, yes. Get comfortable with SAP Cloud ERP's built-in reporting first. Plan Business Data Cloud when you need to combine systems, plan or use AI across your data.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Answer the questions your data can't today.</h2>
          <p className="lede">In one session, we look at the questions your management wants answered, the systems that hold the data, and whether Business Data Cloud, SAP Analytics Cloud or SAP's built-in reporting is the right next step.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a data strategy session →</Link></div>
        </div>
        <ul>
          <li>Questions and data sources</li>
          <li>Do you need it, or not yet</li>
          <li>SAP data products for your edition</li>
          <li>Non-SAP data alongside SAP</li>
          <li>Capacity sized to your use</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
