import Link from "next/link";

/** The sections of the Two-Tier ERP for Subsidiaries page, converted from the supplied HTML. */
export function TwoTierBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Two-Tier ERP for Subsidiaries</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Two-Tier ERP for Subsidiaries</span>
          <h1>Your group runs SAP. Your subsidiaries <em>can run lighter.</em></h1>
          <p className="lede">Most large groups run headquarters on SAP S/4HANA, and the same big system is too slow and costly to roll out to every small company. A spreadsheet or a local accounting package leaves headquarters blind. Two-tier ERP puts each subsidiary on SAP Cloud ERP, connected to headquarters by SAP's prebuilt integrations. Orders, invoices, master data and financials move between them without anyone typing them in twice.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Plan your subsidiary model →</a>
            <a href="#roles" className="btn sec">See the four patterns</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <svg className="hub" viewBox="0 0 560 400" role="img" aria-label="Diagram: headquarters on SAP S/4HANA at the top, connected to four subsidiaries on SAP Cloud ERP: a sales office in Dubai, a manufacturing plant in Biyagama, a service company in Chennai and an acquired company in Singapore. Orders, invoices, master data and financials flow along the connections.">
            <defs><linearGradient id="hqg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#1f7a5a"/><stop offset="1" stopColor="#0e3a2b"/></linearGradient></defs>
            <path className="wire" d="M280 112 C280 190 70 180 70 262"/><path className="pulse" d="M280 112 C280 190 70 180 70 262"/>
            <path className="wire" d="M280 112 C280 200 210 190 210 262"/><path className="pulse up" d="M280 112 C280 200 210 190 210 262"/>
            <path className="wire" d="M280 112 C280 200 350 190 350 262"/><path className="pulse" d="M280 112 C280 200 350 190 350 262"/>
            <path className="wire" d="M280 112 C280 190 490 180 490 262"/><path className="pulse up" d="M280 112 C280 190 490 180 490 262"/>
            <rect x="160" y="22" width="240" height="90" rx="14" fill="url(#hqg)" stroke="#34b386" strokeOpacity=".5"/>
            <text x="280" y="50" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="10.5" fontWeight="800" letterSpacing="1.6" fill="#a9e0c8">TIER 1 · HEADQUARTERS</text>
            <text x="280" y="76" textAnchor="middle" style={{ fontFamily: "var(--display)" }} fontSize="19" fontWeight="800" fill="#ffffff">SAP S/4HANA</text>
            <text x="280" y="97" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="11.5" fill="#cfe9dd">Private cloud, on-premise or ECC</text>
            <rect x="172" y="164" width="216" height="26" rx="13" fill="#0b1411" stroke="#2f6b55"/>
            <text x="280" y="181" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="10.5" fontWeight="700" fill="#cfe9dd">orders · invoices · data · financials</text>
            <g style={{ fontFamily: "var(--body)" }}>
              <g transform="translate(10 262)"><rect width="120" height="96" rx="12" fill="#ffffff"/><text x="12" y="22" fontSize="9.5" fontWeight="800" letterSpacing="1.2" fill="#0a6ed1">SALES OFFICE</text><text x="12" y="44" fontSize="14" fontWeight="800" fill="#142019" style={{ fontFamily: "var(--display)" }}>Dubai</text><text x="12" y="64" fontSize="10.5" fill="#55655e">Sells HQ products</text><text x="12" y="84" fontSize="10" fontWeight="700" fill="#17694b">SAP Cloud ERP</text></g>
              <g transform="translate(150 262)"><rect width="120" height="96" rx="12" fill="#ffffff"/><text x="12" y="22" fontSize="9.5" fontWeight="800" letterSpacing="1.2" fill="#0a6ed1">PLANT</text><text x="12" y="44" fontSize="14" fontWeight="800" fill="#142019" style={{ fontFamily: "var(--display)" }}>Biyagama</text><text x="12" y="64" fontSize="10.5" fill="#55655e">Supplies HQ</text><text x="12" y="84" fontSize="10" fontWeight="700" fill="#17694b">SAP Cloud ERP</text></g>
              <g transform="translate(290 262)"><rect width="120" height="96" rx="12" fill="#ffffff"/><text x="12" y="22" fontSize="9.5" fontWeight="800" letterSpacing="1.2" fill="#0a6ed1">SERVICE CO.</text><text x="12" y="44" fontSize="14" fontWeight="800" fill="#142019" style={{ fontFamily: "var(--display)" }}>Chennai</text><text x="12" y="64" fontSize="10.5" fill="#55655e">Installs, maintains</text><text x="12" y="84" fontSize="10" fontWeight="700" fill="#17694b">SAP Cloud ERP</text></g>
              <g transform="translate(430 262)"><rect width="120" height="96" rx="12" fill="#ffffff"/><text x="12" y="22" fontSize="9.5" fontWeight="800" letterSpacing="1.2" fill="#e9730c">ACQUIRED</text><text x="12" y="44" fontSize="14" fontWeight="800" fill="#142019" style={{ fontFamily: "var(--display)" }}>Singapore</text><text x="12" y="64" fontSize="10.5" fill="#55655e">Joining the group</text><text x="12" y="84" fontSize="10" fontWeight="700" fill="#17694b">SAP Cloud ERP</text></g>
            </g>
            <text x="280" y="388" textAnchor="middle" style={{ fontFamily: "var(--body)" }} fontSize="10.5" fontWeight="800" letterSpacing="1.6" fill="#7f938a">TIER 2 · SUBSIDIARIES</text>
          </svg>
          <figcaption className="caption">Illustration of a two-tier group. Company names and locations are examples.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Why two tiers</span>
        <h2>Standard where the subsidiaries are. Connected where it counts.</h2>
        <p className="lede">A small sales office in a new country doesn't need the full weight of your headquarters system. It needs to sell, buy, invoice and close its books in a way headquarters can see and trust.</p>
        <p className="lede">SAP Cloud ERP shares its data model with SAP S/4HANA: the same business partners, products, document types and accounting logic. That's what makes the connection between the two tiers standard work, not a custom project.</p>
      </div>
      <div className="includes">
        <div><h3>Open a company in months</h3><p>A new subsidiary starts from your group template on a ready-to-run cloud system, not a rollout of the HQ system.</p></div>
        <div><h3>Lower cost per entity</h3><p>Subscription per user, run by SAP. No local servers, upgrades or IT team in each country.</p></div>
        <div><h3>Headquarters sees everything</h3><p>Financials, cash and intercompany activity flow to HQ in a structure it already understands.</p></div>
        <div><h3>Local rules, handled locally</h3><p>Tax, invoicing and statutory reports are dealt with in the subsidiary's own system.</p></div>
        <div><h3>Easier acquisitions and exits</h3><p>An acquired company goes live on its own system first. A business you sell can leave without untangling the HQ system.</p></div>
        <div><h3>New features land first</h3><p>Subsidiaries get SAP's cloud releases twice a year, so they can pilot ideas before HQ adopts them.</p></div>
      </div>
    </div>
  </section>

  
  <section id="roles">
    <div className="in">
      <span className="eyebrow">Four patterns</span>
      <h2>What role does each subsidiary play?</h2>
      <p className="lede">SAP provides ready-made business scenarios for the most common relationships between a headquarters and its subsidiaries. We start every design by agreeing which pattern each company follows, because that decides what has to flow between the two systems.</p>
      <div className="roles">
        <div className="role"><span className="k">Pattern 1</span><h3>Sales and distribution office</h3><p>Sells the group's products in its market. It buys from headquarters and sells to local customers.</p>
          <div className="flows"><div><b>Up</b><span>Purchase orders become sales orders at HQ</span></div><div><b>Down</b><span>Shipping notices, deliveries and intercompany invoices</span></div></div>
          <span className="ex">Example: a Dubai office selling Sri Lankan-made products in the Gulf.</span></div>
        <div className="role"><span className="k">Pattern 2</span><h3>Manufacturing plant and internal supplier</h3><p>Makes finished goods or components for headquarters or for other group companies.</p>
          <div className="flows"><div><b>Down</b><span>HQ demand and scheduling agreements drive the plant's planning</span></div><div><b>Up</b><span>Deliveries, confirmations and invoices back to HQ</span></div></div>
          <span className="ex">Example: a plant in an export zone supplying the group's brands.</span></div>
        <div className="role"><span className="k">Pattern 3</span><h3>Service and installation company</h3><p>Sells, installs and maintains equipment that the group makes or distributes.</p>
          <div className="flows"><div><b>Down</b><span>Equipment and spare parts from HQ</span></div><div><b>Up</b><span>Service orders, warranty claims and costs</span></div></div>
          <span className="ex">Example: a local company servicing machinery sold by the group.</span></div>
        <div className="role"><span className="k">Pattern 4</span><h3>Served by central functions</h3><p>Uses services run once for the whole group, such as purchasing, payments or accounting.</p>
          <div className="flows"><div><b>Down</b><span>Group purchase contracts, prices and policies</span></div><div><b>Up</b><span>Postings, payment requests and spend data</span></div></div>
          <span className="ex">Example: central procurement negotiating once for every company.</span></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Deep dive · Pattern 1</span>
      <h2>One intercompany order, two systems, zero re-keying.</h2>
      <p className="lede">Here is how a sales office buys stock from headquarters. Every document on one side automatically creates the matching document on the other side, using standard SAP messages that both systems already understand.</p>
      <div className="lane">
        <svg viewBox="0 0 1000 330" role="img" aria-label="Swimlane diagram. Subsidiary on SAP Cloud ERP: 1, creates a purchase order. Headquarters on SAP S/4HANA: 2, a sales order is created automatically and confirmed. 3, headquarters delivers the goods, to the subsidiary or straight to the end customer, and sends a shipping notice. Subsidiary: 4, an inbound delivery is created and goods are received. Headquarters: 5, bills the subsidiary. Subsidiary: 6, the supplier invoice is created automatically and matched to the purchase order and goods receipt.">
          <rect x="0" y="0" width="1000" height="150" style={{ fill: "var(--bg-2)" }}/>
          <rect x="0" y="150" width="1000" height="180" fill="#e9f1ed"/>
          <text x="20" y="30" style={{ fontFamily: "var(--body)" }} fontSize="11" fontWeight="800" letterSpacing="1.5" fill="#0a6ed1">SUBSIDIARY · SAP CLOUD ERP</text>
          <text x="20" y="316" style={{ fontFamily: "var(--body)" }} fontSize="11" fontWeight="800" letterSpacing="1.5" fill="#17694b">HEADQUARTERS · SAP S/4HANA</text>
          <line x1="0" y1="150" x2="1000" y2="150" stroke="#cfdcd5" strokeDasharray="4 4"/>
          <g style={{ fontFamily: "var(--body)" }}>
            <g transform="translate(20 52)"><rect width="150" height="70" rx="10" fill="#0a6ed1"/><text x="14" y="24" fontSize="10" fontWeight="800" fill="#d1e8ff">1</text><text x="14" y="44" fontSize="14" fontWeight="800" fill="#fff">Purchase order</text><text x="14" y="60" fontSize="10.5" fill="#d1e8ff">Buyer orders stock</text></g>
            <g transform="translate(190 190)"><rect width="150" height="70" rx="10" fill="#1f7a5a"/><text x="14" y="24" fontSize="10" fontWeight="800" fill="#bfe6d4">2</text><text x="14" y="44" fontSize="14" fontWeight="800" fill="#fff">Sales order</text><text x="14" y="60" fontSize="10.5" fill="#bfe6d4">Created and confirmed</text></g>
            <g transform="translate(360 190)"><rect width="150" height="70" rx="10" fill="#1f7a5a"/><text x="14" y="24" fontSize="10" fontWeight="800" fill="#bfe6d4">3</text><text x="14" y="44" fontSize="14" fontWeight="800" fill="#fff">Delivery</text><text x="14" y="60" fontSize="10.5" fill="#bfe6d4">To subsidiary or customer</text></g>
            <g transform="translate(530 52)"><rect width="150" height="70" rx="10" fill="#0a6ed1"/><text x="14" y="24" fontSize="10" fontWeight="800" fill="#d1e8ff">4</text><text x="14" y="44" fontSize="14" fontWeight="800" fill="#fff">Goods receipt</text><text x="14" y="60" fontSize="10.5" fill="#d1e8ff">From the shipping notice</text></g>
            <g transform="translate(700 190)"><rect width="130" height="70" rx="10" fill="#1f7a5a"/><text x="14" y="24" fontSize="10" fontWeight="800" fill="#bfe6d4">5</text><text x="14" y="44" fontSize="14" fontWeight="800" fill="#fff">Billing</text><text x="14" y="60" fontSize="10.5" fill="#bfe6d4">Intercompany invoice</text></g>
            <g transform="translate(850 52)"><rect width="134" height="70" rx="10" fill="#0a6ed1"/><text x="14" y="24" fontSize="10" fontWeight="800" fill="#d1e8ff">6</text><text x="14" y="44" fontSize="14" fontWeight="800" fill="#fff">Supplier invoice</text><text x="14" y="60" fontSize="10.5" fill="#d1e8ff">Posted and matched</text></g>
          </g>
          <g fill="none" stroke="#55655e" strokeWidth="1.6">
            <path d="M170 100 C210 100 230 140 250 186"/><path d="M243 180 L250 188 L254 178"/>
            <path d="M340 225 L356 225"/><path d="M350 220 L357 225 L350 230"/>
            <path d="M480 188 C500 140 520 100 528 92"/><path d="M518 90 L529 91 L527 101"/>
            <path d="M510 236 C600 236 650 236 696 226"/><path d="M688 222 L697 226 L690 232"/>
            <path d="M800 188 C830 140 840 110 848 96"/><path d="M838 96 L849 95 L849 106"/>
          </g>
          <g style={{ fontFamily: "var(--body)", paintOrder: "stroke" }} fontSize="10" fontWeight="700" fill="#55655e" strokeWidth="5" strokeLinejoin="round">
            <text x="262" y="132" style={{ stroke: "var(--bg-2)" }}>order message</text>
            <text x="500" y="176" stroke="#e9f1ed">shipping notice</text>
            <text x="822" y="176" stroke="#e9f1ed">invoice message</text>
          </g>
        </svg>
        <ol className="lsteps">
          <li className="ls sub"><span className="ll">SUBSIDIARY · SAP CLOUD ERP</span><div className="lb"><i>1</i><b>Purchase order</b><span>Buyer orders stock</span></div></li>
          <li className="la" aria-hidden="true"><em>order message</em></li>
          <li className="ls hq"><span className="ll">HEADQUARTERS · SAP S/4HANA</span><div className="lb"><i>2</i><b>Sales order</b><span>Created and confirmed</span></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls hq"><span className="ll">HEADQUARTERS · SAP S/4HANA</span><div className="lb"><i>3</i><b>Delivery</b><span>To subsidiary or customer</span></div></li>
          <li className="la" aria-hidden="true"><em>shipping notice</em></li>
          <li className="ls sub"><span className="ll">SUBSIDIARY · SAP CLOUD ERP</span><div className="lb"><i>4</i><b>Goods receipt</b><span>From the shipping notice</span></div></li>
          <li className="la" aria-hidden="true"></li>
          <li className="ls hq"><span className="ll">HEADQUARTERS · SAP S/4HANA</span><div className="lb"><i>5</i><b>Billing</b><span>Intercompany invoice</span></div></li>
          <li className="la" aria-hidden="true"><em>invoice message</em></li>
          <li className="ls sub"><span className="ll">SUBSIDIARY · SAP CLOUD ERP</span><div className="lb"><i>6</i><b>Supplier invoice</b><span>Posted and matched</span></div></li>
        </ol>
      </div>
      <div className="facts">
        <div className="fact"><b>6</b><span>documents created across the two systems, each by one action</span></div>
        <div className="fact"><b>0</b><span>documents typed in twice</span></div>
        <div className="fact"><b>3</b><span>standard SAP messages carry the order, the shipping notice and the invoice</span></div>
        <div className="fact"><b>2</b><span>monitors, one in each system, show any message that fails</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Group finance</span>
        <h2>Close the group, not just the companies.</h2>
        <p className="lede">The second half of two-tier ERP is financial. Headquarters needs each subsidiary's results quickly, in one structure, with intercompany balances that agree.</p>
        <div className="agents">
          <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 14h12M5 14V8M9 14V4M13 14V10"/></svg></span><div><h3>Consolidation with Group Reporting</h3><p>Each subsidiary's figures flow into SAP's Group Reporting. Currency translation, intercompany matching, eliminations and group statements run there.</p></div></div>
          <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="6"/><path d="M9 3v12M3 9h12"/></svg></span><div><h3>One group ledger with Central Finance</h3><p>Where HQ runs Central Finance, subsidiary postings are copied into it in near real time, giving one ledger view across the group.</p></div></div>
          <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12l4-4 3 3 7-7"/></svg></span><div><h3>Cash visibility and planning</h3><p>Group treasury sees subsidiary bank balances and forecasts. Group planning can run in SAP Analytics Cloud on the same numbers.</p></div></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of the SAP Group Reporting Data Monitor showing October close tasks by subsidiary">
          <div className="shell"><span className="sap">SAP</span><span className="t">Data Monitor · Group Reporting</span><span className="joule-btn"></span><span className="av">GC</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Entities ready</div><div className="s">October 2026</div></div><div className="k pos">9<small>/12</small></div></div>
              <div className="tile"><div><div className="h">Intercompany differences</div><div className="s">Above tolerance</div></div><div className="k neg">4</div></div>
              <div className="tile"><div><div className="h">Group currency</div><div className="s">Translation rate set</div></div><div className="k">USD</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Close tasks by entity</div>
              <div className="row"><span>LK01 · Colombo HQ</span><span className="pill ok">Data released</span></div>
              <div className="row"><span>AE01 · Dubai sales office</span><span className="pill ok">Data released</span></div>
              <div className="row"><span>LK02 · Biyagama plant</span><span className="pill in">Currency translation</span></div>
              <div className="row"><span>IN01 · Chennai service</span><span className="pill wr">IC difference 1.2M LKR</span></div>
              <div className="row"><span>SG01 · Singapore</span><span className="pill wr">Awaiting data</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of the Data Monitor app in SAP's Group Reporting. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Master data</span>
      <h2>One customer, one product, one set of accounts.</h2>
      <p className="lede">Integration only works if both tiers mean the same thing by "product 4711" or "customer Lanka Retail". We agree which data headquarters owns and sends out, and which data each subsidiary keeps for itself.</p>
      <div className="mdo">
        <div className="cap"><h3>Products</h3><p>Created once at headquarters and sent to the subsidiaries that sell or make them, including configurable products and their variants.</p><div className="own2"><span className="hq">Owned by HQ</span><span>Local prices and texts in subsidiary</span></div></div>
        <div className="cap"><h3>Customers and suppliers</h3><p>Group customers and suppliers are governed centrally, for example with SAP Master Data Governance, so every company uses the same record.</p><div className="own2"><span className="hq">Group partners: HQ</span><span>Local partners: subsidiary</span></div></div>
        <div className="cap"><h3>Chart of accounts</h3><p>Every subsidiary posts to accounts that map to the group chart, while also meeting its own country's statutory reporting.</p><div className="own2"><span className="hq">Group accounts: HQ</span><span>Statutory accounts: subsidiary</span></div></div>
      </div>
      <p className="note">Data moves through SAP's standard replication: SAP Master Data Integration on SAP BTP, SAP Master Data Governance, or the IDocs an older ECC headquarters already uses.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Choosing the model</span>
      <h2>Is two-tier right for your group?</h2>
      <p className="lede">Two-tier isn't always the answer. Some groups are better served by one system for everyone. Here's how the three common options compare.</p>
      <div className="users">
        <table>
          <thead><tr><th>Question</th><th>One system for the whole group</th><th>Two-tier with SAP Cloud ERP</th><th>Non-SAP system in subsidiaries</th></tr></thead>
          <tbody>
            <tr><td data-label="Question">Time to open a new company</td><td data-label="One system for the whole group">Long. Every change touches the central system.</td><td data-label="Two-tier with SAP Cloud ERP"><span className="y">Short.</span> Starts from the group template.</td><td data-label="Non-SAP system in subsidiaries">Short locally, then long to integrate.</td></tr>
            <tr><td data-label="Question">Cost for a small company</td><td data-label="One system for the whole group">High for its size</td><td data-label="Two-tier with SAP Cloud ERP"><span className="y">Proportionate.</span> Per user, run by SAP.</td><td data-label="Non-SAP system in subsidiaries">Low licence, high integration cost</td></tr>
            <tr><td data-label="Question">HQ visibility</td><td data-label="One system for the whole group"><span className="y">Complete</span></td><td data-label="Two-tier with SAP Cloud ERP"><span className="y">High.</span> Prebuilt financial and process flows.</td><td data-label="Non-SAP system in subsidiaries"><span className="n">Limited.</span> Often month-end files.</td></tr>
            <tr><td data-label="Question">Local flexibility</td><td data-label="One system for the whole group"><span className="n">Low</span></td><td data-label="Two-tier with SAP Cloud ERP">Good, within SAP's standard</td><td data-label="Non-SAP system in subsidiaries">High, but every company differs</td></tr>
            <tr><td data-label="Question">Best when</td><td data-label="One system for the whole group">Companies share most processes and IT is central</td><td data-label="Two-tier with SAP Cloud ERP">Many smaller or fast-changing companies around an SAP core</td><td data-label="Non-SAP system in subsidiaries">A very small entity with a light link to HQ</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">From Colombo, both directions</span>
      <h2>Two-tier works whichever side Sri Lanka is on.</h2>
      <div className="dirs">
        <div className="dir">
          <span className="k">Global group, Sri Lankan subsidiary</span>
          <h3>Your headquarters is abroad. Your Colombo company joins in.</h3>
          <p>Headquarters runs SAP in Europe, India or Asia. The Sri Lankan company runs SAP Cloud ERP with our Sri Lanka layer for VAT, SSCL, withholding tax and RAMIS, and stays connected to the group's processes and close.</p>
          <p><Link href="/services/rollouts-and-localisation">Read about Sri Lanka localisation →</Link></p>
        </div>
        <div className="dir">
          <span className="k">Sri Lankan group, regional subsidiaries</span>
          <h3>Your headquarters is in Colombo. Your group is growing abroad.</h3>
          <p>Headquarters runs SAP S/4HANA. New companies in India, the Gulf, the Maldives or Bangladesh run SAP Cloud ERP, using SAP's own local versions where they exist and a local layer where they don't.</p>
          <p><Link href="/services/rollouts-and-localisation">Read about global rollouts →</Link></p>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">How Mawkish delivers</span>
      <h2>Design the group once. Add companies in waves.</h2>
      <div className="phases">
        <div className="ph"><span className="st">Step 1</span><h3>Map the group</h3><p>Every company, its role and its pattern.</p><p className="we"><b>We:</b> agree which flows each company needs with HQ.</p></div>
        <div className="ph"><span className="st">Step 2</span><h3>Design the template</h3><p>Processes, accounts and master data ownership.</p><p className="we"><b>We:</b> build the group template on SAP Cloud ERP.</p></div>
        <div className="ph"><span className="st">Step 3</span><h3>Connect HQ</h3><p>Messages, partner set-up and monitoring on both sides.</p><p className="we"><b>We:</b> work with your HQ SAP team or provider.</p></div>
        <div className="ph"><span className="st">Step 4</span><h3>Pilot company</h3><p>One subsidiary goes live first.</p><p className="we"><b>We:</b> test complete flows across both tiers.</p></div>
        <div className="ph"><span className="st">Step 5</span><h3>Roll out</h3><p>Further companies in waves.</p><p className="we"><b>We:</b> reuse the template, tests and training.</p></div>
        <div className="ph"><span className="st">Step 6</span><h3>Run</h3><p>Releases, new companies and changes.</p><p className="we"><b>We:</b> support both tiers and test each release.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Short videos from SAP’s official YouTube channels on two-tier ERP and group consolidation.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=ttpu0lSRWb0" target="_blank" rel="noopener" data-yt="ttpu0lSRWb0" aria-label="Play on YouTube: SAP's two-tier ERP solution: SAP S/4HANA Public Cloud demo">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Two-tier ERP demo</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP's two-tier ERP solution: SAP S/4HANA Public Cloud demo</h3><p>How a subsidiary on the public cloud edition connects to the group, with consolidated finance and analytics.</p><span className="d">SAP · July 2023</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=vKrj-RP4SBg" target="_blank" rel="noopener" data-yt="vKrj-RP4SBg" aria-label="Play on YouTube: Introducing SAP S/4HANA Cloud for Group Reporting">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>Community</span><span className="tag">Group finance</span></div><div className="big">Group Reporting</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Introducing SAP S/4HANA Cloud for Group Reporting</h3><p>A learning preview of SAP’s consolidation solution: data collection, eliminations and group statements.</p><span className="d">SAP Community · December 2023</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=gqsz8-Hif5Y" target="_blank" rel="noopener" data-yt="gqsz8-Hif5Y" aria-label="Play on YouTube: Finance in SAP Cloud ERP 2602">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Release 2602</span></div><div className="big">Finance in 2602</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Finance in SAP Cloud ERP 2602</h3><p>The latest finance features a subsidiary gets, including close and receivables.</p><span className="d">SAP · January 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official SAP and SAP Community YouTube channels. Older videos use the earlier product name, SAP S/4HANA Cloud Public Edition.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Does our headquarters have to run SAP?</summary><p>It works best when it does, because SAP's prebuilt two-tier scenarios assume SAP on both sides. That includes SAP S/4HANA on-premise, SAP Cloud ERP Private and older SAP ECC systems. If headquarters runs something else, the subsidiaries can still run SAP Cloud ERP, but the connection is built with APIs and takes more work.</p></details>
        <details><summary>Our headquarters is still on SAP ECC. Is that a problem?</summary><p>No. ECC connects through the same IDoc messages it already uses. Keep in mind that ECC mainstream maintenance ends in 2027, so we design the subsidiary side to keep working when headquarters moves to SAP S/4HANA.</p></details>
        <details><summary>Can a subsidiary work differently from headquarters?</summary><p>Yes, within SAP's standard processes. The group template fixes what has to be the same: accounts, master data and the intercompany flows. Each company then adds what its country and business need.</p></details>
        <details><summary>How is it licensed?</summary><p>Each subsidiary subscribes to SAP Cloud ERP per user, by what each person does. SAP also has commercial options for subsidiaries of groups that already use SAP. We look at both as part of licensing advisory.</p></details>
        <details><summary>What if we sell a subsidiary later, or merge it into headquarters?</summary><p>A subsidiary on its own system is easier to sell, because its data and processes are already separate. If you later want it inside the headquarters system, its data can be migrated across.</p></details>
        <details><summary>How long does it take to add a subsidiary?</summary><p>The first company takes longest, because the template and the connection to headquarters are built with it. After that, each company is mostly local set-up, data and training. We give you a plan for each wave after mapping the group.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Map your group in one workshop.</h2>
          <p className="lede">Bring your list of companies. We'll come back with the pattern for each one, what needs to flow to headquarters, and a rollout sequence.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a group mapping workshop →</Link></div>
        </div>
        <ul>
          <li>Pattern for each company</li>
          <li>Integration flows with headquarters</li>
          <li>Master data ownership</li>
          <li>Consolidation approach</li>
          <li>Rollout waves</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
