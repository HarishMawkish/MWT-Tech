import Link from "next/link";

/** The sections of the SAP & Non-SAP Integration page, converted from the supplied HTML. */
export function IntegrationBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / SAP &amp; Non-SAP Integration</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">SAP &amp; Non-SAP Integration</span>
          <h1>SAP at the centre. <em>Everything else connected.</em></h1>
          <p className="lede">Your ERP doesn't work alone. It talks to your CRM, your payroll system, your banks, the tax authority, your online store and your data platform. We connect SAP Cloud ERP to all of them with SAP's own integration tools, so data moves once, in real time where it matters, and someone knows straight away when a message fails.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Map your integrations →</a>
            <a href="#local" className="btn sec">What we connect in Sri Lanka</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <svg className="map" viewBox="0 0 560 440" role="img" aria-label="Integration map: SAP Cloud ERP in the centre, surrounded by SAP Integration Suite, connected to Salesforce CRM, MiHCM payroll, banks through LankaPay, the IRD RAMIS VAT system, Sri Lanka Customs, an e-commerce store, a data platform such as Databricks, other SAP cloud apps, and EDI customers and suppliers.">
            <defs><radialGradient id="core" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#1f7a5a"/><stop offset="1" stopColor="#0c2a1f"/></radialGradient></defs>
            <circle cx="280" cy="220" r="118" fill="none" stroke="#2f6b55" strokeDasharray="2 6"/>
            
            <g>
              <path className="wire" d="M280 220 L90 70"/><path className="pulse" d="M280 220 L90 70"/>
              <path className="wire" d="M280 220 L280 40"/><path className="pulse r" d="M280 220 L280 40"/>
              <path className="wire" d="M280 220 L470 70"/><path className="pulse" d="M280 220 L470 70"/>
              <path className="wire" d="M280 220 L60 220"/><path className="pulse r" d="M280 220 L60 220"/>
              <path className="wire" d="M280 220 L500 220"/><path className="pulse" d="M280 220 L500 220"/>
              <path className="wire" d="M280 220 L90 370"/><path className="pulse r" d="M280 220 L90 370"/>
              <path className="wire" d="M280 220 L280 400"/><path className="pulse" d="M280 220 L280 400"/>
              <path className="wire" d="M280 220 L470 370"/><path className="pulse r" d="M280 220 L470 370"/>
            </g>
            <circle cx="280" cy="220" r="62" fill="url(#core)" stroke="#34b386" strokeOpacity=".6"/>
            <text x="280" y="214" textAnchor="middle" style={{ fontFamily: "var(--display)" }} fontSize="15" fontWeight="800" fill="#fff">SAP</text>
            <text x="280" y="234" textAnchor="middle" style={{ fontFamily: "var(--display)" }} fontSize="15" fontWeight="800" fill="#fff">Cloud ERP</text>
            <rect x="208" y="330" width="144" height="20" rx="10" fill="#050807"/><text x="280" y="344" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="9.5" fontWeight="800" letterSpacing="1.4" fill="#7f938a">SAP INTEGRATION SUITE</text>
            <g style={{ fontFamily: "var(--body)" }} fontSize="11.5" fontWeight="700">
              <g transform="translate(30 50)"><rect width="120" height="40" rx="20" fill="#fff"/><text x="60" y="25" textAnchor="middle" fill="#142019">Salesforce CRM</text></g>
              <g transform="translate(220 20)"><rect width="120" height="40" rx="20" fill="#fff"/><text x="60" y="25" textAnchor="middle" fill="#142019">MiHCM payroll</text></g>
              <g transform="translate(410 50)"><rect width="120" height="40" rx="20" fill="#fff"/><text x="60" y="25" textAnchor="middle" fill="#142019">Banks · LankaPay</text></g>
              <g transform="translate(4 200)"><rect width="112" height="40" rx="20" fill="#e9a23b"/><text x="56" y="25" textAnchor="middle" fill="#2b1a00">IRD RAMIS</text></g>
              <g transform="translate(444 200)"><rect width="112" height="40" rx="20" fill="#fff"/><text x="56" y="25" textAnchor="middle" fill="#142019">SL Customs</text></g>
              <g transform="translate(30 350)"><rect width="120" height="40" rx="20" fill="#fff"/><text x="60" y="25" textAnchor="middle" fill="#142019">Online store</text></g>
              <g transform="translate(220 380)"><rect width="120" height="40" rx="20" fill="#fff"/><text x="60" y="25" textAnchor="middle" fill="#142019">Databricks</text></g>
              <g transform="translate(410 350)"><rect width="120" height="40" rx="20" fill="#0a6ed1"/><text x="60" y="25" textAnchor="middle" fill="#fff">SAP cloud apps</text></g>
            </g>
          </svg>
          <figcaption className="caption">Illustration of a typical integration landscape. Systems vary by client.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Three ways to connect</span>
      <h2>Use what SAP has already built before building anything new.</h2>
      <p className="lede">The cheapest integration is the one you don't have to build or run. We always check the three options in this order, and only design a custom flow when the first two don't fit.</p>
      <div className="ways3">
        <div className="w3"><span className="k">First choice</span><h3>Run by SAP</h3><p>Some connections between SAP's own cloud products come ready-made and SAP operates them. You switch them on and set them up. There's no middleware for you to run.</p><div className="eg"><b>Examples:</b> SAP SuccessFactors, SAP Sales Cloud, SAP Ariba, SAP Concur, SAP Field Service Management.</div></div>
        <div className="w3"><span className="k">Second choice</span><h3>Prebuilt integration content</h3><p>SAP and its partners publish ready-made integration packages and documented APIs on the SAP Business Accelerator Hub. We import them into SAP Integration Suite and adapt them to your setup.</p><div className="eg"><b>Examples:</b> Salesforce, Microsoft, Workday, ServiceNow, other SAP systems.</div></div>
        <div className="w3"><span className="k">When needed</span><h3>A flow designed for you</h3><p>For local systems and special needs, we build an integration flow in SAP Integration Suite using SAP Cloud ERP's released APIs and events, so it keeps working through every upgrade.</p><div className="eg"><b>Examples:</b> RAMIS VAT, local bank files, MiHCM, tea broker data, a custom app.</div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">The toolkit</span>
      <h2>Standard parts on both sides of every connection.</h2>
      <p className="lede">SAP Cloud ERP is built to be connected. It publishes released APIs and business events that SAP keeps stable across upgrades. SAP Integration Suite, on SAP's Business Technology Platform, moves, transforms and monitors the data in between.</p>
      <div className="kit">
        <div className="cap"><span className="side">In SAP Cloud ERP</span><h3>Released APIs and events</h3><p>Hundreds of documented APIs (OData, REST and SOAP) and business events such as "sales order created". Each connection is switched on with a communication arrangement, with its own user and permissions.</p></div>
        <div className="cap"><span className="side">Integration Suite</span><h3>Cloud Integration</h3><p>The engine that runs integration flows: mapping, routing and transforming messages between systems over REST, SOAP, OData, SFTP, IDoc, AMQP and more.</p></div>
        <div className="cap"><span className="side">Integration Suite</span><h3>API Management</h3><p>Publishes your APIs securely to partners, apps and websites, with keys, traffic limits and usage analytics.</p></div>
        <div className="cap"><span className="side">Integration Suite</span><h3>Event Mesh</h3><p>Sends business events to every system that needs them, as they happen, instead of each system asking for updates.</p></div>
        <div className="cap"><span className="side">Integration Suite</span><h3>B2B and EDI</h3><p>Integration Advisor and Trading Partner Management for EDI with large customers, retailers and logistics providers.</p></div>
        <div className="cap"><span className="side">Integration Suite</span><h3>Edge Integration Cell</h3><p>Runs integrations inside your own data centre or private cloud, when data must stay on-premise or systems can't be reached from the internet.</p></div>
      </div>
      <div className="kit" style={{ gridTemplateColumns: "minmax(0,1fr)", marginTop: "14px" }}>
        <div className="cap new"><span className="side">New in 2026 · AI-assisted integration</span><h3>Describe a flow, and Integration Suite drafts it</h3><p>At SAP Sapphire 2026, SAP announced an enhanced edition of Integration Suite with AI features. They include Text-to-Flow, which builds a first draft of an integration from a plain-language description. Script optimisation, Joule assistance and a gateway that lets AI agents reach non-SAP data through the Model Context Protocol (MCP) are also part of it. We use these to speed up delivery. Our consultants still design, review and test every flow.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light" id="local">
    <div className="in">
      <span className="eyebrow">What we connect in Sri Lanka</span>
      <h2>The local connections every Sri Lankan SAP system needs.</h2>
      <p className="lede">Global integration content covers the big international products. The systems that make a Sri Lankan business run day to day need local knowledge as well. These are the connections we design most often.</p>
      <div className="lk">
        <div className="lkc"><h3>Banks and LankaPay</h3><p>Supplier and salary payments out as bank files or host-to-host, through SLIPS, CEFTS or RTGS. Bank statements come back in for automatic reconciliation.</p><div className="tags"><span className="dir">ERP → bank → ERP</span><span>Daily and intraday</span><span>Files or API</span></div></div>
        <div className="lkc"><h3>IRD RAMIS VAT</h3><p>Sales invoices, credit notes and debit notes reported to the Inland Revenue Department through the VAT Web API as they are issued, with status and errors returned.</p><div className="tags"><span className="dir">ERP → IRD</span><span className="rt">Real time</span><span>API</span></div></div>
        <div className="lkc"><h3>MiHCM and other HR systems</h3><p>Employees, cost centres and organisation in one direction. Payroll results, EPF and ETF, and expense claims post to finance in the other.</p><div className="tags"><span className="dir">Both ways</span><span>Per payroll run</span><span>API</span></div></div>
        <div className="lkc"><h3>Salesforce CRM</h3><p>Accounts, products and prices from SAP. Quotes and won deals become SAP sales orders, and order, delivery and invoice status flows back to sales.</p><div className="tags"><span className="dir">Both ways</span><span className="rt">Near real time</span><span>API and events</span></div></div>
        <div className="lkc"><h3>Customs and trade</h3><p>Import and export data prepared from SAP for customs brokers and Sri Lanka Customs systems, and duty and cess costs back into landed cost.</p><div className="tags"><span className="dir">Both ways</span><span>Per shipment</span><span>Files or API</span></div></div>
        <div className="lkc"><h3>Online stores and marketplaces</h3><p>Web orders into SAP for fulfilment, stock levels and prices out to the store, and payment gateway settlements into finance.</p><div className="tags"><span className="dir">Both ways</span><span className="rt">Near real time</span><span>API and events</span></div></div>
        <div className="lkc"><h3>Tea brokers and auctions</h3><p>Catalogues, auction results, broker sales and settlements turned into SAP sales, invoices and receivables. No retyping from broker statements.</p><div className="tags"><span className="dir">Broker → ERP</span><span>Per sale</span><span>Files</span></div></div>
        <div className="lkc"><h3>Data platforms</h3><p>SAP data shared with Databricks or SAP Business Data Cloud for group analytics and AI, with its business meaning kept.</p><div className="tags"><span className="dir">ERP → data</span><span>Continuous</span><span>Data sharing</span></div></div>
        <div className="lkc"><h3>Warehouses and 3PLs</h3><p>Delivery orders to third-party warehouses and logistics partners, with confirmations, stock and proof of delivery coming back.</p><div className="tags"><span className="dir">Both ways</span><span>Per order</span><span>EDI or API</span></div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Deep dive · CRM to ERP</span>
      <h2>A deal won in Salesforce becomes an order in SAP.</h2>
      <p className="lede">Sales works in Salesforce, and operations and finance work in SAP. A good integration lets each team stay in its own system and still see what the other is doing.</p>
      <div className="lane">
        <svg viewBox="0 0 1000 340" role="img" aria-label="Three lanes: Salesforce, SAP Integration Suite and SAP Cloud ERP. 1, a salesperson marks a quote as won in Salesforce. 2, Integration Suite maps the quote to an SAP sales order and calls the SAP sales order API. 3, SAP creates the order, prices it and checks credit and stock. 4, SAP raises a business event when the order changes, delivers and invoices. 5, Integration Suite receives the event. 6, Salesforce shows the order, delivery and invoice status to the salesperson.">
          <rect x="0" y="0" width="1000" height="110" style={{ fill: "var(--bg-2)" }}/>
          <rect x="0" y="110" width="1000" height="110" fill="#0f1c17"/>
          <rect x="0" y="220" width="1000" height="120" fill="#0c1a2b"/>
          <g style={{ fontFamily: "var(--body)" }} fontSize="10.5" fontWeight="800" letterSpacing="1.4">
            <text x="20" y="26" fill="#58b0ff">SALESFORCE</text>
            <text x="20" y="136" fill="#34b386">SAP INTEGRATION SUITE</text>
            <text x="20" y="246" fill="#8fb8ff">SAP CLOUD ERP</text>
          </g>
          <g style={{ fontFamily: "var(--body)" }}>
            <g transform="translate(40 40)"><rect width="170" height="54" rx="10" fill="#fff"/><text x="12" y="22" fontSize="10" fontWeight="800" fill="#0a6ed1">1</text><text x="12" y="40" fontSize="13" fontWeight="800" fill="#142019">Quote marked won</text></g>
            <g transform="translate(200 150)"><rect width="190" height="54" rx="10" fill="#1f7a5a"/><text x="12" y="22" fontSize="10" fontWeight="800" fill="#bfe6d4">2</text><text x="12" y="40" fontSize="13" fontWeight="800" fill="#fff">Map and call order API</text></g>
            <g transform="translate(400 256)"><rect width="200" height="66" rx="10" fill="#0a6ed1"/><text x="12" y="22" fontSize="10" fontWeight="800" fill="#d1e8ff">3</text><text x="12" y="40" fontSize="13" fontWeight="800" fill="#fff">Order created, priced,</text><text x="12" y="57" fontSize="11" fill="#d1e8ff">credit and stock checked</text></g>
            <g transform="translate(640 256)"><rect width="190" height="66" rx="10" fill="#0a6ed1"/><text x="12" y="22" fontSize="10" fontWeight="800" fill="#d1e8ff">4</text><text x="12" y="40" fontSize="13" fontWeight="800" fill="#fff">Business events</text><text x="12" y="57" fontSize="11" fill="#d1e8ff">changed · delivered · billed</text></g>
            <g transform="translate(700 150)"><rect width="170" height="54" rx="10" fill="#1f7a5a"/><text x="12" y="22" fontSize="10" fontWeight="800" fill="#bfe6d4">5</text><text x="12" y="40" fontSize="13" fontWeight="800" fill="#fff">Event received</text></g>
            <g transform="translate(780 40)"><rect width="200" height="54" rx="10" fill="#fff"/><text x="12" y="22" fontSize="10" fontWeight="800" fill="#0a6ed1">6</text><text x="12" y="40" fontSize="13" fontWeight="800" fill="#142019">Status shown to sales</text></g>
          </g>
          <g fill="none" stroke="#7f938a" strokeWidth="1.6">
            <path d="M210 67 C240 67 260 110 280 146"/><path d="M273 141 L281 148 L284 138"/>
            <path d="M390 177 C430 177 470 220 490 258"/><path d="M482 253 L491 260 L493 250"/>
            <path d="M600 291 H632"/><path d="M626 286 L633 291 L626 296"/>
            <path d="M760 256 C770 240 780 220 785 208"/><path d="M779 211 L786 204 L789 214"/>
            <path d="M840 150 C850 130 860 110 868 98"/><path d="M861 101 L869 94 L871 104"/>
          </g>
        </svg>
        <ol className="lsteps">
          <li className="ls sf"><span className="ll">SALESFORCE</span><div className="lb"><i>1</i><b>Quote marked won</b></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls su"><span className="ll">SAP INTEGRATION SUITE</span><div className="lb"><i>2</i><b>Map and call order API</b></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls er"><span className="ll">SAP CLOUD ERP</span><div className="lb"><i>3</i><b>Order created, priced,</b><span>credit and stock checked</span></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls er"><span className="ll">SAP CLOUD ERP</span><div className="lb"><i>4</i><b>Business events</b><span>changed · delivered · billed</span></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls su"><span className="ll">SAP INTEGRATION SUITE</span><div className="lb"><i>5</i><b>Event received</b></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls sf"><span className="ll">SALESFORCE</span><div className="lb"><i>6</i><b>Status shown to sales</b></div></li>
        </ol>
      </div>
      <div className="facts">
        <div className="fact"><b>1</b><span>place where each piece of data is created and owned</span></div>
        <div className="fact"><b>Seconds</b><span>from a won deal to a priced, checked SAP order</span></div>
        <div className="fact"><b>Events</b><span>instead of polling, so updates arrive as they happen</span></div>
        <div className="fact"><b>Released APIs</b><span>only, so the flow survives SAP's twice-yearly upgrades</span></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Monitoring</span>
        <h2>Integrations fail. You should know first.</h2>
        <p className="lede">A bank rejects a file, a customer TIN is wrong, a password expires. These things happen in every live system. What matters is that the right person is alerted straight away, the message can be fixed and resent, and nothing is lost.</p>
        <p className="lede">Every integration we build gets monitoring and alerting before go-live, plus a written run-book that says who fixes what. When we support your system after go-live, we watch the monitors with you.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of an integration message monitor listing recent messages by interface with their status, including a failed RAMIS submission and a retried bank file">
          <div className="shell"><span className="sap">SAP</span><span className="t">Message Monitoring</span><span className="joule-btn"></span><span className="av">IT</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Messages today</div><div className="s">All interfaces</div></div><div className="k">14,862</div></div>
              <div className="tile"><div><div className="h">Failed</div><div className="s">Needs action</div></div><div className="k neg">3</div></div>
              <div className="tile"><div><div className="h">Success rate</div><div className="s">Last 7 days</div></div><div className="k pos">99.97<small>%</small></div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Recent messages</div>
              <div className="row"><span>RAMIS VAT · Invoice 9400018231</span><span className="pill wr">Error: buyer TIN invalid</span></div>
              <div className="row"><span>Bank payment file · SLIPS batch 1029</span><span className="pill in">Retried · sent</span></div>
              <div className="row"><span>Salesforce · Sales order 1002433</span><span className="pill ok">Processed</span></div>
              <div className="row"><span>MiHCM · October payroll posting</span><span className="pill ok">Processed</span></div>
              <div className="row"><span>Online store · 62 web orders</span><span className="pill ok">Processed</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of integration monitoring. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Still on SAP PI/PO?</span>
        <h2>Move your interfaces before maintenance runs out.</h2>
        <p className="lede">Many SAP customers still run their interfaces on SAP Process Integration or Process Orchestration. Mainstream maintenance for SAP PI/PO ends in 2027. SAP Integration Suite is its successor, and it includes tools that assess your current interfaces and help move them across.</p>
        <p className="lede">We start with an inventory of what you have, retire what's no longer used, move the rest, and modernise where a flow can use APIs or events instead.</p>
      </div>
      <div className="facts" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))", marginTop: "8px" }}>
        <div className="fact"><b>2027</b><span>end of mainstream maintenance for SAP PI/PO</span></div>
        <div className="fact"><b>Assess</b><span>Integration Suite's migration assessment groups interfaces by effort</span></div>
        <div className="fact"><b>Retire</b><span>interfaces nobody uses any more, and there are usually some</span></div>
        <div className="fact"><b>Modernise</b><span>file and point-to-point flows into APIs and events where it pays off</span></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Where we start</span>
      <h2>Every integration project starts with a list.</h2>
      <p className="lede">The number and complexity of interfaces are the biggest driver of integration effort and cost. So the first thing we build with you is an inventory: each system, what moves, in which direction, how often and how much.</p>
      <div className="users inv">
        <table>
          <thead><tr><th>System</th><th>What moves</th><th>Direction</th><th>How often</th><th>Method</th></tr></thead>
          <tbody>
            <tr><td data-label="System">Salesforce</td><td data-label="What moves">Accounts, prices, won quotes, order status</td><td data-label="Direction">Both ways</td><td data-label="How often">Near real time</td><td data-label="Method"><span className="m">Prebuilt content</span></td></tr>
            <tr><td data-label="System">Commercial bank</td><td data-label="What moves">Payments out, statements in</td><td data-label="Direction">Both ways</td><td data-label="How often">Daily</td><td data-label="Method"><span className="m">Bank files</span></td></tr>
            <tr><td data-label="System">IRD RAMIS</td><td data-label="What moves">Invoices, credit and debit notes</td><td data-label="Direction">To IRD</td><td data-label="How often">Real time</td><td data-label="Method"><span className="m">Custom flow</span></td></tr>
            <tr><td data-label="System">MiHCM</td><td data-label="What moves">Employees, payroll postings</td><td data-label="Direction">Both ways</td><td data-label="How often">Monthly</td><td data-label="Method"><span className="m">Custom flow</span></td></tr>
            <tr><td data-label="System">SAP SuccessFactors</td><td data-label="What moves">Employees, org structure</td><td data-label="Direction">Into ERP</td><td data-label="How often">Daily</td><td data-label="Method"><span className="m">Run by SAP</span></td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Example rows. Your inventory also records volumes, error handling and who owns each interface.</p>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See Integration Suite from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channels on how Integration Suite connects SAP and non-SAP systems.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=fAZtipJqZNo" target="_blank" rel="noopener" data-yt="fAZtipJqZNo" aria-label="Play on YouTube: AI, automation and connectivity in SAP Integration Suite">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>Help & Learning</span><span className="tag">Demo</span></div><div className="big">Integration Suite in action</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>AI, automation and connectivity in SAP Integration Suite</h3><p>A demo of prebuilt flows and connectors, AI-assisted integration, central monitoring and the SAP Business Accelerator Hub.</p><span className="d">SAP Help and Learning · June 2025</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=oZ0Bu6plkfk" target="_blank" rel="noopener" data-yt="oZ0Bu6plkfk" aria-label="Play on YouTube: Next-generation hybrid integration with Edge Integration Cell">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>Developers</span><span className="tag">Hybrid</span></div><div className="big">Edge Integration Cell</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Next-generation hybrid integration with Edge Integration Cell</h3><p>SAP’s product team on running integrations inside your own landscape, with the latest updates and roadmap.</p><span className="d">SAP Developers · October 2025</span></div></a></div>
      <p className="vnote">Published by SAP on its official SAP Help and Learning and SAP Developers YouTube channels.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Do we need SAP Integration Suite?</summary><p>Not always. Integrations that SAP runs, and simple direct connections, work without it. Once you connect several non-SAP systems, Integration Suite is the right place to build, run and monitor them. It is licensed separately on SAP Business Technology Platform, and we size it with you.</p></details>
        <details><summary>Will our integrations break when SAP upgrades the system?</summary><p>Not if they use SAP's released APIs and events, which SAP keeps stable across upgrades. That's why we don't build integrations on internal tables or screens. We also include key interfaces in the regression tests for each release.</p></details>
        <details><summary>Can we keep our existing middleware?</summary><p>Yes. SAP Cloud ERP's APIs follow open standards, so other middleware, such as MuleSoft, Boomi or Azure Integration Services, can connect to it. We'll tell you honestly where SAP's prebuilt content would save you effort.</p></details>
        <details><summary>Can you connect to systems running in our own data centre?</summary><p>Yes, through SAP's secure connectivity to on-premise systems, or with Edge Integration Cell when integrations themselves must run on your own infrastructure.</p></details>
        <details><summary>How do you keep integrations secure?</summary><p>Every connection has its own technical user with only the permissions it needs, encrypted transport and certificate-based authentication where the other system supports it. Personal data is only sent where there's a business reason, and every message is logged.</p></details>
        <details><summary>Does Mawkish work with the other systems too?</summary><p>Yes. Besides SAP, we're partners for Salesforce, Odoo, MiHCM and Databricks, among others, so we understand both ends of many of these connections.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Map every connection before you plan the project.</h2>
          <p className="lede">In an integration workshop we build your inventory with you and recommend the right method for each interface, starting with what SAP already provides.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an integration workshop →</Link></div>
        </div>
        <ul>
          <li>Inventory of systems and interfaces</li>
          <li>Method for each: SAP-run, prebuilt or custom</li>
          <li>Real-time needs, such as RAMIS</li>
          <li>Monitoring and ownership</li>
          <li>Integration Suite sizing</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
