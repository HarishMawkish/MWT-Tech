import Link from "next/link";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/** The sections of the SAP Business Data Cloud page, converted from the supplied HTML. */
export function BdcBody() {
  return (
    <>
  <section className="hero">
    <div className="in">
      <div className="crumbs">Services / SAP Solutions / SAP Business Data Cloud</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">SAP Business Data Cloud · Technical guide</span>
          <h1>One data foundation for analytics, planning <em>and AI.</em></h1>
          <p className="lede">SAP Business Data Cloud brings SAP Datasphere, SAP Analytics Cloud, SAP BW and SAP HANA Cloud together as one managed service, with SAP Databricks built in. SAP delivers your business data as ready-made data products that keep their meaning, and you combine them with the rest of your data. This page explains how it works underneath, layer by layer, and how we help you decide what you need.</p>
          <div className="ctas">
            <a href="#architecture" className="btn pri">See how it works →</a>
            <a href="#fit" className="btn sec">Is it for you?</a>
          </div>
        </div>

        <figure className="b-hero-fig">
          <svg className="b-stack" viewBox="0 0 540 500" role="img" aria-label="SAP Business Data Cloud in four layers. From the bottom: lake storage holding data products; intelligent compute with SAP HANA Cloud, SAP Databricks and SAP Snowflake; the knowledge core with SAP Datasphere and SAP Analytics Cloud; and at the top, Joule, AI agents and intelligent applications. Sources such as SAP Cloud ERP, SuccessFactors, Ariba and non-SAP systems feed the lake.">
            <defs><path id="b-up1" d="M78 474 V398" /><path id="b-up2" d="M206 474 V398" /><path id="b-up3" d="M334 474 V398" /><path id="b-up4" d="M462 474 V398" /></defs>
            <g fontFamily="inherit">
              <g className="b-layer">
                <rect className="b-lr" x="10" y="8" width="520" height="86" rx="14" /><rect className="b-glow" x="10" y="8" width="520" height="86" rx="14" />
                <text className="b-e" x="30" y="34">AI AGENTS &amp; INTELLIGENT APPS</text>
                <rect className="b-chip" x="30" y="48" width="78" height="30" rx="15" /><text className="b-t" x="69" y="68" textAnchor="middle" fontSize="13.5">Joule</text>
                <rect className="b-chip" x="118" y="48" width="104" height="30" rx="15" /><text className="b-t" x="170" y="68" textAnchor="middle" fontSize="13.5">AI agents</text>
                <rect className="b-chip" x="232" y="48" width="196" height="30" rx="15" /><text className="b-t" x="330" y="68" textAnchor="middle" fontSize="13.5">Intelligent applications</text>
              </g>
              <g className="b-layer">
                <rect className="b-lr" x="10" y="104" width="520" height="86" rx="14" /><rect className="b-glow" x="10" y="104" width="520" height="86" rx="14" />
                <text className="b-e" x="30" y="130">KNOWLEDGE CORE</text>
                <rect className="b-chip" x="30" y="144" width="150" height="30" rx="15" /><text className="b-t" x="105" y="164" textAnchor="middle" fontSize="13.5">SAP Datasphere</text>
                <rect className="b-chip" x="190" y="144" width="190" height="30" rx="15" /><text className="b-t" x="285" y="164" textAnchor="middle" fontSize="13.5">SAP Analytics Cloud</text>
                <rect className="b-chip" x="390" y="144" width="120" height="30" rx="15" strokeDasharray="4 4" /><text className="b-s" x="450" y="164" textAnchor="middle">SAP BW (option)</text>
              </g>
              <g className="b-layer">
                <rect className="b-lr" x="10" y="200" width="520" height="86" rx="14" /><rect className="b-glow" x="10" y="200" width="520" height="86" rx="14" />
                <text className="b-e" x="30" y="226">INTELLIGENT COMPUTE</text>
                <rect className="b-chip" x="30" y="240" width="146" height="30" rx="15" /><text className="b-t" x="103" y="260" textAnchor="middle" fontSize="13.5">SAP HANA Cloud</text>
                <rect className="b-chip" x="186" y="240" width="146" height="30" rx="15" /><text className="b-t" x="259" y="260" textAnchor="middle" fontSize="13.5">SAP Databricks</text>
                <rect className="b-chip" x="342" y="240" width="146" height="30" rx="15" /><text className="b-t" x="415" y="260" textAnchor="middle" fontSize="13.5">SAP Snowflake</text>
              </g>
              <g className="b-layer">
                <rect className="b-lr" x="10" y="296" width="520" height="96" rx="14" /><rect className="b-glow" x="10" y="296" width="520" height="96" rx="14" />
                <text className="b-e" x="30" y="322">LAKE STORAGE</text>
                <text className="b-t" x="30" y="350" fontSize="14.5">Data products in an open lake</text>
                <text className="b-s" x="30" y="372">SAP-managed and your own, shared without copying</text>
                <g fill="none" stroke="#34b386" strokeWidth="1.5" opacity=".8"><ellipse cx="468" cy="330" rx="34" ry="9" /><path d="M434 330 V362 a34 9 0 0 0 68 0 V330" /><path d="M434 346 a34 9 0 0 0 68 0" opacity=".5" /></g>
              </g>
              <g className="b-s" textAnchor="middle" fontSize="12">
                <rect x="20" y="474" width="116" height="24" rx="6" fill="none" stroke="currentColor" opacity=".35" /><text x="78" y="490">SAP Cloud ERP</text>
                <rect x="148" y="474" width="116" height="24" rx="6" fill="none" stroke="currentColor" opacity=".35" /><text x="206" y="490">SuccessFactors</text>
                <rect x="276" y="474" width="116" height="24" rx="6" fill="none" stroke="currentColor" opacity=".35" /><text x="334" y="490">Ariba, Concur</text>
                <rect x="404" y="474" width="116" height="24" rx="6" fill="none" stroke="currentColor" opacity=".35" /><text x="462" y="490">Non-SAP data</text>
              </g>
              <g className="b-ln" strokeDasharray="3 5"><path d="M78 474 V398" /><path d="M206 474 V398" /><path d="M334 474 V398" /><path d="M462 474 V398" /></g>
              <g className="b-anim">
                <circle className="b-dot" r="4"><animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#b-up1" /></animateMotion></circle>
                <circle className="b-dot" r="4"><animateMotion dur="2.2s" begin=".6s" repeatCount="indefinite"><mpath href="#b-up2" /></animateMotion></circle>
                <circle className="b-dot" r="4"><animateMotion dur="2.2s" begin="1.2s" repeatCount="indefinite"><mpath href="#b-up3" /></animateMotion></circle>
                <circle className="b-dot" r="4"><animateMotion dur="2.2s" begin="1.7s" repeatCount="indefinite"><mpath href="#b-up4" /></animateMotion></circle>
              </g>
            </g>
          </svg>
          <figcaption className="caption">SAP Business Data Cloud in four layers, as SAP describes it. Simplified.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <nav className="b-sub" aria-label="On this page">
    <div className="b-subin">
      <a href="#overview">Overview</a>
      <a href="#architecture">Architecture</a>
      <a href="#data-products">Data products</a>
      <a href="#intelligent-apps">Intelligent apps</a>
      <a href="#datasphere">Datasphere</a>
      <a href="#analytics">Analytics &amp; planning</a>
      <a href="#open">Open ecosystem</a>
      <a href="#fit">Is it for you?</a>
      <a href="#start">Getting started</a>
      <a href="#faq">FAQ</a>
    </div>
    <span className="b-prog" aria-hidden="true"></span>
  </nav>


  <section className="light" id="overview">
    <div className="in">
      <div className="b-grid2">
        <div className="b-rv">
          <span className="eyebrow">01 · Overview</span>
          <h2>AI is only as good as the business context it gets.</h2>
          <p className="lede">A sales order number means little on its own. It becomes useful when it is linked to its customer, its deliveries, its invoices and the posting in your general ledger. Classic data platforms lose those links when they copy SAP tables, and teams spend months rebuilding them.</p>
          <p className="lede">Business Data Cloud keeps them. SAP extracts the data from its applications, models it once, and delivers it as data products with the business meaning attached. Your reports, your planning, your data scientists and SAP's AI agents all work from that same governed foundation.</p>
        </div>
        <div className="b-msg b-msgv b-rv">
          <div><h3>Turn data into outcomes</h3><p>Reuse SAP's data products and ready-made applications across finance, supply chain and HR, instead of building each report from scratch.</p></div>
          <div><h3>Connect all your data</h3><p>Combine SAP and non-SAP data, and share it with platforms such as Databricks, Snowflake and Google BigQuery without copying it.</p></div>
          <div><h3>Trustworthy AI</h3><p>Joule and AI agents answer from governed, semantically rich data, so their answers are grounded in how your business actually runs.</p></div>
        </div>
      </div>
      <div className="users b-rv" style={{ marginTop: "56px" }}>
        <table><thead><tr><th>Question</th><th>The old way</th><th>With Business Data Cloud</th></tr></thead><tbody>
            <tr><td data-label="Question">Who builds the data model?</td><td data-label="The old way">Your team or a consultant, table by table.</td><td data-label="With Business Data Cloud">SAP, as ready-made data products.</td></tr>
            <tr><td data-label="Question">What happens at an upgrade?</td><td data-label="The old way">Extracts and reports need checking and fixing.</td><td data-label="With Business Data Cloud">SAP keeps its data products current.</td></tr>
            <tr><td data-label="Question">How many copies of the data?</td><td data-label="The old way">Several, often out of date.</td><td data-label="With Business Data Cloud">Shared rather than copied where possible.</td></tr>
            <tr><td data-label="Question">Non-SAP data?</td><td data-label="The old way">Joined by hand in spreadsheets.</td><td data-label="With Business Data Cloud">Combined with SAP data in one governed model.</td></tr>
            <tr><td data-label="Question">Ready for AI?</td><td data-label="The old way">Rarely: meaning is lost in the copy.</td><td data-label="With Business Data Cloud">Yes: business context travels with the data.</td></tr>
          </tbody></table>
      </div>
    </div>
  </section>


  <section id="architecture">
    <div className="in">
      <div className="b-rv">
        <span className="eyebrow">02 · Architecture</span>
        <h2>How a Business Data Cloud landscape is put together.</h2>
        <p className="lede">You don't install anything. SAP runs the service, and you assemble your landscape from a cockpit: which applications you use, and which source systems feed them. SAP calls that grouping a <b>formation</b>.</p>
      </div>
      <figure className="b-fig b-rv">
        <svg className="b-wide" viewBox="0 0 1000 440" role="img" aria-label="Business Data Cloud landscape. SAP Cloud ERP and other SAP cloud applications connect to a formation. Inside the formation, SAP-run foundation services ingest the data and store data products in the lake. SAP Datasphere, SAP Analytics Cloud, SAP Databricks and optionally SAP Snowflake use those data products. The Business Data Cloud cockpit manages the formation. SAP BW sits alongside and connects to Datasphere, but is not part of the formation.">
          <defs>
            <path id="b-a1" d="M200 150 H300" />
            <path id="b-a2" d="M200 290 C250 290 250 200 300 200" />
            <path id="b-a3" d="M520 175 H600" />
          </defs>
          <g fontFamily="inherit">
            <rect className="b-box" x="20" y="110" width="180" height="80" rx="12" /><text className="b-t" x="110" y="144" textAnchor="middle">SAP Cloud ERP</text><text className="b-s" x="110" y="164" textAnchor="middle">Public Edition</text>
            <text className="b-s" x="110" y="214" textAnchor="middle" fontSize="11.5">Certificate trust,</text><text className="b-s" x="110" y="230" textAnchor="middle" fontSize="11.5">no Cloud Connector</text>
            <rect className="b-box" x="20" y="250" width="180" height="80" rx="12" /><text className="b-t" x="110" y="284" textAnchor="middle">Other SAP apps</text><text className="b-s" x="110" y="304" textAnchor="middle">SuccessFactors, Ariba…</text>

            <rect className="b-dash" x="260" y="70" width="720" height="290" rx="18" />
            <text className="b-e" x="284" y="96">FORMATION</text>

            <rect className="b-boxa" x="300" y="115" width="220" height="125" rx="14" />
            <text className="b-t" x="410" y="146" textAnchor="middle">Foundation services</text>
            <text className="b-s" x="410" y="168" textAnchor="middle">run by SAP</text>
            <text className="b-s" x="410" y="196" textAnchor="middle">ingest · refine · enrich</text>
            <text className="b-s" x="410" y="216" textAnchor="middle">data lake (Delta tables)</text>

            <rect className="b-box" x="300" y="262" width="220" height="74" rx="12" /><text className="b-t" x="410" y="294" textAnchor="middle">Data products</text><text className="b-s" x="410" y="314" textAnchor="middle">described, discoverable, shareable</text>
            <path className="b-ln" d="M410 240 V262" />

            <rect className="b-box" x="600" y="115" width="170" height="62" rx="12" /><text className="b-t" x="685" y="151" textAnchor="middle">SAP Datasphere</text>
            <rect className="b-box" x="790" y="115" width="170" height="62" rx="12" /><text className="b-t" x="875" y="143" textAnchor="middle">SAP Analytics</text><text className="b-t" x="875" y="161" textAnchor="middle">Cloud</text>
            <rect className="b-box" x="600" y="196" width="170" height="62" rx="12" /><text className="b-t" x="685" y="232" textAnchor="middle">SAP Databricks</text>
            <rect className="b-box" x="790" y="196" width="170" height="62" rx="12" strokeDasharray="5 5" /><text className="b-t" x="875" y="224" textAnchor="middle">SAP Snowflake</text><text className="b-s" x="875" y="242" textAnchor="middle">optional extension</text>
            <rect className="b-box" x="600" y="277" width="360" height="62" rx="12" /><text className="b-t" x="780" y="305" textAnchor="middle">Intelligent applications</text><text className="b-s" x="780" y="324" textAnchor="middle">installed into Datasphere and Analytics Cloud</text>
            <path className="b-ln" d="M770 146 H790" />

            <rect className="b-box" x="330" y="10" width="520" height="44" rx="10" /><text className="b-t" x="590" y="38" textAnchor="middle" fontSize="14">Business Data Cloud cockpit: formations, activation, monitoring</text>
            <path className="b-ln" d="M590 54 V70" strokeDasharray="3 4" />

            <rect className="b-box" x="600" y="386" width="360" height="44" rx="10" strokeDasharray="5 5" /><text className="b-t" x="780" y="413" textAnchor="middle" fontSize="14">SAP BW: alongside, not in the formation</text>
            <path className="b-ln" d="M685 386 V362" strokeDasharray="3 4" />

            <path className="b-flow" d="M200 150 H300" /><path className="b-flow" d="M200 290 C250 290 250 200 300 200" />
            <path className="b-flow" d="M520 175 C560 175 560 146 600 146" /><path className="b-flow" d="M520 195 C560 195 560 227 600 227" /><path className="b-flow" d="M520 299 C560 299 560 308 600 308" />
            <g className="b-anim">
              <circle className="b-dot" r="4.5"><animateMotion dur="1.6s" repeatCount="indefinite"><mpath href="#b-a1" /></animateMotion></circle>
              <circle className="b-dot" r="4.5"><animateMotion dur="1.9s" begin=".5s" repeatCount="indefinite"><mpath href="#b-a2" /></animateMotion></circle>
            </g>
          </g>
        </svg>
        <ol className="b-list">
          <li><b>Business Data Cloud cockpit:</b> where you create formations, activate data products and monitor them.</li>
          <li><b>Sources:</b> SAP Cloud ERP Public Edition connects with a certificate, no Cloud Connector needed. Other SAP cloud applications join the same way.</li>
          <li><b>Foundation services:</b> run by SAP. They ingest, refine and enrich the data and store it in the data lake.</li>
          <li><b>Data products:</b> the result, described and ready to share.</li>
          <li><b>Applications:</b> SAP Datasphere, SAP Analytics Cloud, SAP Databricks and optionally SAP Snowflake use the data products. Intelligent applications install into Datasphere and Analytics Cloud.</li>
          <li><b>SAP BW:</b> runs alongside and connects to Datasphere, but is not part of a formation.</li>
        </ol>
        <figcaption>Simplified view of a Business Data Cloud landscape. SAP manages everything inside the formation.</figcaption>
      </figure>
      <div className="b-cards b4">
        <div className="b-card b-rv"><span className="b-k">Cockpit</span><h3>Provisioned first</h3><p>The control centre. Your administrator provisions it, then adds applications, connects sources and activates data products from here.</p></div>
        <div className="b-card b-rv"><span className="b-k">Formation</span><h3>Apps plus sources</h3><p>A formation links your Business Data Cloud applications to the SAP systems that feed them. Data products from those sources then become available to activate.</p></div>
        <div className="b-card b-rv"><span className="b-k">Public Edition</span><h3>A certificate, not a connector</h3><p>For SAP Cloud ERP Public Edition, trust is set up with a certificate exchange. No Cloud Connector, no on-premise components.</p></div>
        <div className="b-card b-rv"><span className="b-k">Existing tenants</span><h3>Bring them along</h3><p>Already run SAP Datasphere or SAP Analytics Cloud? They can join Business Data Cloud without a migration. It's mostly a contract change.</p></div>
      </div>
    </div>
  </section>


  <section className="light" id="data-products">
    <div className="in">
      <div className="b-rv">
        <span className="eyebrow">03 · Data products</span>
        <h2>From a table in SAP to a data product you can trust.</h2>
        <p className="lede">A data product is a curated, documented data set with an owner, a meaning and a defined way to access it. SAP builds its own data products from your SAP systems and keeps them current. Step through how one is made.</p>
      </div>
      <div className="b-pipe b-rv">
        <div className="b-steps" role="tablist" aria-label="How an SAP data product is made">
          <span className="b-bar" aria-hidden="true"></span>
          <button className="b-step on" role="tab" aria-selected="true" data-i="0"><div className="b-n">1</div><span>Source</span><small>CDS view</small></button>
          <button className="b-step" role="tab" aria-selected="false" data-i="1"><div className="b-n">2</div><span>Ingest</span><small>push to lake</small></button>
          <button className="b-step" role="tab" aria-selected="false" data-i="2"><div className="b-n">3</div><span>Refine</span><small>transform</small></button>
          <button className="b-step" role="tab" aria-selected="false" data-i="3"><div className="b-n">4</div><span>Enrich</span><small>business logic</small></button>
          <button className="b-step" role="tab" aria-selected="false" data-i="4"><div className="b-n">5</div><span>Describe</span><small>metadata</small></button>
          <button className="b-step" role="tab" aria-selected="false" data-i="5"><div className="b-n">6</div><span>Share</span><small>zero copy</small></button>
        </div>
        <div className="b-detail" id="b-detail" role="tabpanel" aria-live="polite">
          <div><span className="b-who">In SAP Cloud ERP</span><h3>It starts with a CDS view</h3><p>SAP's applications describe their data in CDS views: virtual data models that already know that a journal entry belongs to a company code and a ledger. These views are the source for SAP's data products, so the business meaning is there from the first step.</p></div>
          <div className="b-viz"><em>{"// SAP Cloud ERP (simplified)"}</em>{"\n"}<i>define view</i>{" JournalEntryItem\n  key CompanyCode\n  key FiscalYear\n  key AccountingDocument\n      GLAccount\n      "}<u>AmountInCompanyCodeCurrency</u>{"\n      PostingDate"}</div>
        </div>
        <div className="b-ctrl"><button type="button" id="b-play">▶ Play the steps</button><span>or pick a step above</span></div>
      </div>

      <div className="b-grid2" style={{ marginTop: "64px" }}>
        <div className="b-rv">
          <h3 style={{ fontSize: "24px" }}>Federate or replicate?</h3>
          <p className="lede" style={{ fontSize: "16.5px" }}>Once a data product is installed in SAP Datasphere, you choose how each model reads it: query it where it lives, or take a local copy. Most landscapes use both.</p>
          <div className="b-seg" role="group" aria-label="Access mode">
            <button type="button" aria-pressed="true" data-m="fed">Federate</button>
            <button type="button" aria-pressed="false" data-m="rep">Replicate</button>
          </div>
        </div>
        <div className="b-rv">
          <div className="b-fr" id="b-fr">
            <svg viewBox="0 0 260 150" aria-hidden="true">
              <rect className="b-box" x="6" y="45" width="90" height="60" rx="10" /><text className="b-t" x="51" y="72" textAnchor="middle" fontSize="12.5">Data</text><text className="b-t" x="51" y="88" textAnchor="middle" fontSize="12.5">product</text>
              <rect className="b-box" x="164" y="45" width="90" height="60" rx="10" /><text className="b-t" x="209" y="80" textAnchor="middle" fontSize="11.5">Datasphere</text>
              <rect id="b-copy" className="b-boxa" x="176" y="112" width="66" height="26" rx="6" opacity="0" /><text id="b-copyt" className="b-s" x="209" y="129" textAnchor="middle" fontSize="11" opacity="0">local copy</text>
              <path className="b-flow" d="M96 75 H164" />
              <text id="b-frl" className="b-s" x="130" y="64" textAnchor="middle" fontSize="11">query</text>
            </svg>
            <dl id="b-frd">
              <dt>How</dt><dd>Datasphere reads the data product where it lives. Nothing is copied.</dd>
              <dt>Fresh</dt><dd>Always as current as the data product itself.</dd>
              <dt>Best for</dt><dd>Exploring, lower volumes, and data you query occasionally.</dd>
              <dt>Watch</dt><dd>Heavy, frequent queries can be slower and use more compute.</dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="b-rv" style={{ marginTop: "64px" }}>
        <h3 style={{ fontSize: "24px" }}>Governed from activation to use.</h3>
        <p className="lede" style={{ fontSize: "16.5px" }}>Data products are not free-for-all downloads. Activation loads the complete data set so every use case shares one version of it, and each team then requests access for a stated purpose.</p>
        <div className="b-gov">
          <div><span className="b-i">01</span><b>Activate</b><span>An administrator activates a data product or a whole package. Everything is loaded: no field or row filters at this stage.</span></div>
          <div><span className="b-i">02</span><b>Request</b><span>A data engineer finds it in the catalog and requests it for a space, with a purpose and an end date.</span></div>
          <div><span className="b-i">03</span><b>Approve</b><span>An approver accepts or rejects. The requester can't approve their own request.</span></div>
          <div><span className="b-i">04</span><b>Install</b><span>The product is installed into the target space in SAP Datasphere.</span></div>
          <div><span className="b-i">05</span><b>Restrict</b><span>Data access controls in Datasphere decide who sees which rows.</span></div>
        </div>
        <p className="b-callout"><b>Tip:</b> data products carry personal-data tags. We check them before approval, so HR and customer data only reaches the spaces that should have it.</p>
      </div>
    </div>
  </section>


  <section id="intelligent-apps">
    <div className="in two">
      <div>
        <div className="b-rv">
          <span className="eyebrow">04 · Intelligent applications</span>
          <h2>Ready-made analytics, built on data products.</h2>
          <p className="lede">SAP also delivers complete analytics for a business area, now also called intelligent content. Install one and Business Data Cloud activates the data products it needs, generates the models in Datasphere and deploys the dashboards in SAP Analytics Cloud, end to end.</p>
        </div>
        <div className="b-ia b-rv" aria-label="What an intelligent application is made of">
          <div><b>Story</b><span>Dashboards in SAP Analytics Cloud</span></div>
          <div><b>Analytic models</b><span>Measures and logic in SAP Datasphere</span></div>
          <div><b>Data products</b><span>Activated automatically from your sources</span></div>
          <div><b>Source system</b><span>SAP Cloud ERP, SuccessFactors and others</span></div>
        </div>
        <div className="b-spaces b-rv">
          <div><b>Ingestion</b><span>Where the data products land</span></div>
          <div><b>Preparation</b><span>Where data is shaped</span></div>
          <div><b>Application</b><span>What the stories read</span></div>
        </div>
        <p className="b-callout b-rv"><b>Extending them:</b> SAP's content is read-only, so you copy it and change the copy. SAP's later updates don't flow into copies, so we keep changes small and documented.</p>
      </div>
      <figure style={{ margin: "0" }} className="b-rv">
        <div className="screen" role="img" aria-label="Illustration of a working capital dashboard: days sales outstanding 58, days payable outstanding 42, days inventory 71, with days sales outstanding by customer group, exporters highest at 84 days">
          <div className="shell"><span className="sap">SAP</span><span className="t">Working Capital Insights</span><span className="joule-btn"></span><span className="av">CFO</span></div>
          <div className="body-pad">
            <div className="b-kpi3">
              <div className="tile"><div><div className="h">DSO</div><div className="s">Days to collect</div></div><div className="k neg">58</div></div>
              <div className="tile"><div><div className="h">DPO</div><div className="s">Days to pay</div></div><div className="k">42</div></div>
              <div className="tile"><div><div className="h">DIO</div><div className="s">Days in stock</div></div><div className="k">71</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Days to collect by customer group</div>
              <div className="b-bars">
                <div className="b-br"><span>Exporters</span><span className="b-tr"><i className="hi" style={{ width: "84%" }}></i></span><span>84</span></div>
                <div className="b-br"><span>Supermarkets</span><span className="b-tr"><i style={{ width: "61%" }}></i></span><span>61</span></div>
                <div className="b-br"><span>Hotels</span><span className="b-tr"><i style={{ width: "47%" }}></i></span><span>47</span></div>
                <div className="b-br"><span>Distributors</span><span className="b-tr"><i style={{ width: "38%" }}></i></span><span>38</span></div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of an intelligent application for working capital. Sample data.</figcaption>
        <div className="b-card" style={{ marginTop: "22px" }}>
          <span className="b-k">Check before you plan</span>
          <p style={{ marginTop: "6px" }}>SAP releases intelligent applications by line of business and edition, and some, such as SAP Cloud ERP Intelligence, are aimed at the Private Edition today. We confirm what's available for your edition before it goes into a plan.</p>
        </div>
      </figure>
    </div>
  </section>


  <section className="light" id="datasphere">
    <div className="in">
      <div className="b-rv">
        <span className="eyebrow">05 · SAP Datasphere</span>
        <h2>The knowledge core where your data model lives.</h2>
        <p className="lede">SAP Datasphere is where SAP and non-SAP data come together. Each team works in its own <b>space</b>, with its own storage, connections and users. We organise models in layers, so each step has one job and changes stay contained.</p>
      </div>
      <div className="b-layers b-rv">
        <div><span className="b-i">LAYER 1</span><h3>Inbound</h3><p>Data as it arrives: installed data products, replicated or federated tables, files.</p></div>
        <div><span className="b-i">LAYER 2</span><h3>Harmonisation</h3><p>Shared keys, currencies and master data. Data access controls are applied here.</p></div>
        <div><span className="b-i">LAYER 3</span><h3>Propagation</h3><p>Reusable business views, combined across sources, ready for any consumer.</p></div>
        <div><span className="b-i">LAYER 4</span><h3>Reporting</h3><p>Analytic models with measures and semantics for SAP Analytics Cloud and Excel.</p></div>
      </div>
      <div className="b-cards">
        <div className="b-card b-rv"><span className="b-k">Replication flows</span><h3>Move data in</h3><p>For SAP Cloud ERP, replication reads SAP's released extraction CDS views or uses the SQL service. Classic extractors and SLT don't apply to the cloud edition.</p></div>
        <div className="b-card b-rv"><span className="b-k">Transformation flows</span><h3>Shape it</h3><p>Graphical or SQL transformations, loaded in full or as deltas, and grouped into task chains that run on a schedule.</p></div>
        <div className="b-card b-rv"><span className="b-k">Semantics</span><h3>Keep the meaning</h3><p>Semantic types, associations and hierarchies tell every tool what an amount, a currency or a date really is.</p></div>
      </div>
      <p className="b-callout b-rv"><b>Your own data products:</b> a model you build in Datasphere can be published as a data product, for example a cleansed customer view, and shared with other teams or with Databricks like SAP's own.</p>
    </div>
  </section>


  <section id="analytics">
    <div className="in two">
      <div className="b-rv">
        <span className="eyebrow">06 · Analytics and planning</span>
        <h2>Where people see, plan and ask.</h2>
        <p className="lede">SAP Analytics Cloud is the front end of Business Data Cloud: dashboards, planning and predictive analysis in one tool, on the same models your data team maintains.</p>
        <div className="b-cards" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "26px" }}>
          <div className="b-card"><span className="b-k">Live</span><h3>Live connection</h3><p>Reads SAP models in place, so figures are current and nothing is copied.</p></div>
          <div className="b-card"><span className="b-k">Import</span><h3>Imported data</h3><p>Copies data into Analytics Cloud. Needed for planning and many non-SAP sources.</p></div>
          <div className="b-card"><span className="b-k">Plan</span><h3>Budgets and forecasts</h3><p>Versions, data actions and allocations, with the actuals coming straight from SAP.</p></div>
          <div className="b-card"><span className="b-k">Ask</span><h3>AI built in</h3><p>Ask questions in plain language, explain variances and run predictive scenarios.</p></div>
        </div>
        <p style={{ marginTop: "22px" }}><Link href="/services/sap-solutions/sap-analytics-cloud" style={{ color: "var(--green-hi)", fontWeight: "700", textDecoration: "none" }}>See our SAP Analytics Cloud page →</Link></p>
      </div>
      <figure style={{ margin: "0" }} className="b-rv">
        <div className="screen" role="img" aria-label="Illustration of a sales planning screen in SAP Analytics Cloud: actuals and a forecast by month, an editable plan table for three regions, and Joule answering a question about the forecast">
          <div className="shell"><span className="sap">SAP</span><span className="t">Analytics Cloud · Sales plan 2027</span><span className="joule-btn"></span><span className="av">FP</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Net revenue, LKR m · actual and forecast</div>
              <div className="b-chart"><i style={{ height: "52%" }}></i><i style={{ height: "58%" }}></i><i style={{ height: "55%" }}></i><i style={{ height: "63%" }}></i><i style={{ height: "66%" }}></i><i style={{ height: "61%" }}></i><i className="f" style={{ height: "70%" }}></i><i className="f" style={{ height: "74%" }}></i><i className="f" style={{ height: "78%" }}></i><i className="f" style={{ height: "83%" }}></i></div>
            </div>
            <div className="split">
              <div className="card-f">
                <div className="h">Plan by region</div>
                <table className="b-plan"><thead><tr><th>Region</th><th>Q1</th><th>Q2</th></tr></thead>
                <tbody><tr><td>Western</td><td>412</td><td className="b-ed">440</td></tr><tr><td>Central</td><td>188</td><td>196</td></tr><tr><td>Exports</td><td>305</td><td className="b-ed">330</td></tr></tbody></table>
              </div>
              <div className="joule">
                <div className="jh"><i></i>Joule</div>
                <div className="msgs">
                  <div className="bub u">Why is the Q2 forecast up?</div>
                  <div className="bub j">Mostly <b>Exports</b>: two new contracts and a higher price assumption.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of planning in SAP Analytics Cloud. Sample data.</figcaption>
      </figure>
    </div>
  </section>


  <section className="light" id="open">
    <div className="in">
      <div className="b-rv">
        <span className="eyebrow">07 · Open data ecosystem</span>
        <h2>Share SAP data with the platforms you already use.</h2>
        <p className="lede">Business Data Cloud is open by design. Data products are stored in an open table format and shared with Delta Sharing, so data platforms can read them without copies or extraction jobs. Results can come back as data products too, which closes the loop.</p>
      </div>
      <figure className="b-fig b-rv">
        <svg className="b-wide" viewBox="0 50 1000 215" role="img" aria-label="Round trip: an SAP data product is shared with zero copy to a data platform such as SAP Databricks, Snowflake or Google BigQuery. A machine learning model there combines it with external data and produces a forecast. The forecast is shared back, becomes a custom data product, is modelled in SAP Datasphere and is shown in SAP Analytics Cloud.">
          <defs><path id="b-rt" d="M180 110 H400 M400 110 H620 M720 150 V220 H530 M530 220 H310 M210 220 H140" />
          <path id="b-rt1" d="M190 110 H410" /><path id="b-rt2" d="M590 110 H700 C760 110 760 220 700 220 H600" /><path id="b-rt3" d="M420 220 H340" /><path id="b-rt4" d="M230 220 H170" /></defs>
          <g fontFamily="inherit">
            <rect className="b-boxa" x="20" y="72" width="170" height="76" rx="12" /><text className="b-t" x="105" y="105" textAnchor="middle">SAP data product</text><text className="b-s" x="105" y="126" textAnchor="middle">sales, stock, prices</text>
            <rect className="b-box" x="410" y="62" width="180" height="96" rx="12" /><text className="b-t" x="500" y="96" textAnchor="middle">Data platform</text><text className="b-s" x="500" y="117" textAnchor="middle">SAP Databricks, Snowflake,</text><text className="b-s" x="500" y="134" textAnchor="middle">Google BigQuery</text>
            <rect className="b-box" x="760" y="62" width="220" height="96" rx="12" strokeDasharray="5 5" /><text className="b-t" x="870" y="96" textAnchor="middle">External data</text><text className="b-s" x="870" y="117" textAnchor="middle">weather, market feeds,</text><text className="b-s" x="870" y="134" textAnchor="middle">IoT, web</text>
            <path className="b-ln" d="M760 110 H690" strokeDasharray="3 4" />
            <text className="b-e" x="300" y="98" textAnchor="middle">DELTA SHARING</text><text className="b-s" x="300" y="135" textAnchor="middle" fontSize="11.5">zero copy</text>
            <rect className="b-box" x="420" y="190" width="180" height="62" rx="12" /><text className="b-t" x="510" y="217" textAnchor="middle">Forecast</text><text className="b-s" x="510" y="236" textAnchor="middle">shared back</text>
            <rect className="b-box" x="230" y="190" width="110" height="62" rx="12" /><text className="b-t" x="285" y="217" textAnchor="middle">Custom</text><text className="b-t" x="285" y="235" textAnchor="middle">data product</text>
            <rect className="b-box" x="20" y="190" width="150" height="62" rx="12" /><text className="b-t" x="95" y="217" textAnchor="middle">Datasphere</text><text className="b-s" x="95" y="236" textAnchor="middle">→ Analytics Cloud</text>
            <path className="b-flow" d="M190 110 H410" /><path className="b-flow" d="M590 110 H700 C760 110 760 220 700 220 H600" /><path className="b-flow" d="M420 220 H340" /><path className="b-flow" d="M230 220 H170" />
            <g className="b-anim">
              <circle className="b-dot" r="5"><animateMotion dur="1.8s" repeatCount="indefinite"><mpath href="#b-rt1" /></animateMotion></circle>
              <circle className="b-dot" r="5"><animateMotion dur="2.4s" begin=".6s" repeatCount="indefinite"><mpath href="#b-rt2" /></animateMotion></circle>
              <circle className="b-dot" r="5"><animateMotion dur="1.2s" begin="1s" repeatCount="indefinite"><mpath href="#b-rt3" /></animateMotion></circle>
              <circle className="b-dot" r="5"><animateMotion dur="1s" begin="1.4s" repeatCount="indefinite"><mpath href="#b-rt4" /></animateMotion></circle>
            </g>
          </g>
        </svg>
        <ol className="b-list">
          <li><b>Share:</b> an SAP data product is shared with zero copy to a data platform such as SAP Databricks, Snowflake or Google BigQuery.</li>
          <li><b>Combine:</b> data scientists add external data such as weather or auction prices and train a forecast.</li>
          <li><b>Share back:</b> the forecast returns as a custom data product.</li>
          <li><b>Use:</b> Datasphere models it and SAP Analytics Cloud shows it next to your actuals.</li>
        </ol>
        <figcaption>An illustration of the round trip, for example a tea exporter forecasting demand from SAP sales and stock plus auction and weather data.</figcaption>
      </figure>
      <div className="users b-rv" style={{ marginTop: "34px" }}>
        <table><thead><tr><th>How you connect</th><th>What it means</th><th>Typical fit</th></tr></thead><tbody>
            <tr><td data-label="How you connect">SAP Databricks</td><td data-label="What it means">Built into Business Data Cloud and run by SAP.</td><td data-label="Typical fit">A data science workspace with nothing extra to contract.</td></tr>
            <tr><td data-label="How you connect">SAP Snowflake</td><td data-label="What it means">Snowflake offered by SAP as an extension of Business Data Cloud.</td><td data-label="Typical fit">Teams that prefer Snowflake as their engine.</td></tr>
            <tr><td data-label="How you connect">BDC Connect</td><td data-label="What it means">Zero-copy sharing with your own Databricks, Snowflake or Google BigQuery.</td><td data-label="Typical fit">Companies that already run one of these platforms.</td></tr>
            <tr><td data-label="How you connect">Partner applications</td><td data-label="What it means">Specialist tools for data governance, catalogues and machine learning.</td><td data-label="Typical fit">Specific needs such as data lineage or automated ML.</td></tr>
          </tbody></table>
      </div>
    </div>
  </section>


  <section id="fit">
    <div className="in">
      <div className="b-rv">
        <span className="eyebrow">08 · Is it for you?</span>
        <h2>Answer four questions. Get an honest starting point.</h2>
        <p className="lede">Not every company needs Business Data Cloud on day one. SAP Cloud ERP already has strong real-time reporting built in. Pick your answers and see which pieces would fit.</p>
      </div>
      <div className="b-helper">
        <form className="b-rv" id="b-form">
          <div className="b-q"><fieldset><legend>Where does the data you report on live?</legend><div className="b-opts">
            <label><input type="radio" name="src" value="erp" defaultChecked /><span>Mainly SAP Cloud ERP</span></label>
            <label><input type="radio" name="src" value="many" /><span>Several SAP and non-SAP systems</span></label></div></fieldset></div>
          <div className="b-q"><fieldset><legend>Do you need budgeting, planning or forecasting?</legend><div className="b-opts">
            <label><input type="radio" name="plan" value="no" defaultChecked /><span>Not yet</span></label>
            <label><input type="radio" name="plan" value="yes" /><span>Yes</span></label></div></fieldset></div>
          <div className="b-q"><fieldset><legend>Data science and custom AI?</legend><div className="b-opts">
            <label><input type="radio" name="ds" value="no" defaultChecked /><span>Not planned</span></label>
            <label><input type="radio" name="ds" value="new" /><span>Yes, we need a platform</span></label>
            <label><input type="radio" name="ds" value="own" /><span>We already run Databricks, Snowflake or BigQuery</span></label></div></fieldset></div>
          <div className="b-q"><fieldset><legend>Do you run SAP BW today?</legend><div className="b-opts">
            <label><input type="radio" name="bw" value="no" defaultChecked /><span>No</span></label>
            <label><input type="radio" name="bw" value="yes" /><span>Yes</span></label></div></fieldset></div>
        </form>
        <div className="b-res b-rv" aria-live="polite">
          <span className="eyebrow" style={{ marginBottom: "8px" }}>Your starting point</span>
          <h3 id="b-rt-h">Start with what SAP Cloud ERP includes.</h3>
          <p className="b-sum" id="b-rt-p">Real-time embedded analytics cover day-to-day reporting for a single ERP. Revisit when you add systems, planning or AI.</p>
          <ol>
            <li data-k="emb" className="on"><i></i><div><b>Embedded analytics in SAP Cloud ERP</b><small>Real-time reports, KPIs and dashboards. Included.</small></div></li>
            <li data-k="sac"><i></i><div><b>SAP Analytics Cloud</b><small>Planning and management dashboards.</small></div></li>
            <li data-k="bdc"><i></i><div><b>Business Data Cloud with Datasphere</b><small>Data products and one model across systems.</small></div></li>
            <li data-k="dbx"><i></i><div><b>SAP Databricks</b><small>Data science on SAP data, built in.</small></div></li>
            <li data-k="con"><i></i><div><b>BDC Connect</b><small>Zero-copy sharing with your current platform.</small></div></li>
            <li data-k="bw"><i></i><div><b>SAP BW alongside</b><small>Keep what works, move to data products step by step.</small></div></li>
          </ol>
        </div>
      </div>
      <p className="note b-rv">A first indication, not a recommendation. Business Data Cloud is licensed by capacity, and we size it against your data and use cases before anything is committed.</p>
    </div>
  </section>


  <section className="light" id="start">
    <div className="in">
      <div className="b-grid2">
        <div className="b-rv">
          <span className="eyebrow">09 · Getting started</span>
          <h2>From contract to first dashboard.</h2>
          <p className="lede">A typical first setup, connecting SAP Cloud ERP Public Edition. SAP runs the platform, so the work is configuration, governance and modelling, not servers.</p>
        </div>
        <ol className="b-tl b-rv">
          <li><span className="b-n">1</span><div><b>Provision the cockpit <span className="b-who">Admin</span></b><span>Capacity is assigned in SAP for Me once the contract starts, then the cockpit is provisioned.</span></div></li>
          <li><span className="b-n">2</span><div><b>Add applications <span className="b-who">Admin</span></b><span>Datasphere and Analytics Cloud are added, new or brought over from existing tenants.</span></div></li>
          <li><span className="b-n">3</span><div><b>Connect SAP Cloud ERP <span className="b-who">Basis</span></b><span>Certificate trust is set up and the formation created. SAP content then shows as available.</span></div></li>
          <li><span className="b-n">4</span><div><b>Activate data products <span className="b-who">Admin</span></b><span>Start with one area, usually finance, and check the data against SAP.</span></div></li>
          <li><span className="b-n">5</span><div><b>Install and govern <span className="b-who">Data team</span></b><span>Products are requested, approved and installed into spaces, with access rules.</span></div></li>
          <li><span className="b-n">6</span><div><b>Model and report <span className="b-who">Business</span></b><span>Analytic models and the first stories, or an intelligent application switched on.</span></div></li>
        </ol>
      </div>
      <div className="b-rv" style={{ marginTop: "48px" }}>
        <h3 style={{ fontSize: "24px" }}>How we run it with you.</h3>
        <div className="b-phases">
          <div><small>Assess</small><b>Questions first</b><p>The questions management can't answer today, and the data each one needs.</p></div>
          <div><small>Design</small><b>Right-sized</b><p>Which components you need now, which can wait, and an estimate of capacity.</p></div>
          <div><small>Build</small><b>One area live</b><p>Data products, models and dashboards for the first area, checked against SAP.</p></div>
          <div><small>Scale</small><b>Area by area</b><p>Each next area reuses the same foundation, with governance and cost monitoring.</p></div>
        </div>
      </div>
    </div>
  </section>


  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channel on SAP Business Data Cloud.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=OkwQimWDeos" target="_blank" rel="noopener" data-yt="OkwQimWDeos" aria-label="Play on YouTube: Demo: SAP Business Data Cloud">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Demo</span></div><div className="big">Business Data Cloud</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f" /></svg></span></div>
      <div className="vmeta"><h3>Demo: SAP Business Data Cloud</h3><p>SAP’s launch demo: data products, intelligent applications and AI on one data foundation.</p><span className="d">SAP · February 2025</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=PhAMg7UVuE8" target="_blank" rel="noopener" data-yt="PhAMg7UVuE8" aria-label="Play on YouTube: Keynote highlights: AI, data and the autonomous enterprise">
      <div className="poster" data-k="mod"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Keynote</span></div><div className="big">AI, data and the autonomous enterprise</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f" /></svg></span></div>
      <div className="vmeta"><h3>Keynote highlights: AI, data and the autonomous enterprise</h3><p>Where SAP is taking business data and AI, and the role Business Data Cloud plays in it.</p><span className="d">SAP · October 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>


  <CopyrightNotice inline />

  <section className="light" id="faq">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Does Business Data Cloud replace SAP Analytics Cloud or Datasphere?</summary><p>No, it includes them. Business Data Cloud is the managed service that brings them together with data products, SAP Databricks and SAP HANA Cloud. If you already use Datasphere or Analytics Cloud, those tenants can join without a migration.</p></details>
        <details><summary>Do we need SAP Cloud Connector for SAP Cloud ERP Public Edition?</summary><p>No. Public Edition connects with a certificate exchange. Other SAP deployments, such as on-premise systems, need the Cloud Connector.</p></details>
        <details><summary>Is our data copied?</summary><p>SAP's data products are stored once in the Business Data Cloud data lake. From there they are shared, not copied, with Datasphere, SAP Databricks and partner platforms. You decide per model whether to take a local copy for performance.</p></details>
        <details><summary>Can we filter what gets activated?</summary><p>Not at activation. A data product is activated in full so every use case shares one data set. You restrict access afterwards in Datasphere, by space and with data access controls.</p></details>
        <details><summary>Does it replace our SAP BW?</summary><p>Not overnight. SAP BW can run alongside Business Data Cloud and connect to Datasphere, so you keep what works and move to data products at your own pace.</p></details>
        <details><summary>Which data products are available for SAP Cloud ERP Public Edition?</summary><p>SAP adds data products with each release, and availability differs by edition. We check the current catalogue for your edition before we plan anything.</p></details>
        <details><summary>How is it licensed?</summary><p>By capacity: you buy capacity units and the services consume them. Intelligent applications are added on top. We estimate capacity from your data volumes and use cases, and check it against your SAP contract.</p></details>
        <details><summary>We've just gone live on SAP Cloud ERP. Is it too early?</summary><p>Usually, yes. Get comfortable with the built-in reporting first. Plan Business Data Cloud when you need to combine systems, plan, or use AI across your data.</p></details>
      </div>
    </div>
  </section>


  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Answer the questions your data can't today.</h2>
          <p className="lede">In one session we look at the questions your management wants answered, the systems that hold the data, and whether Business Data Cloud, SAP Analytics Cloud or SAP's built-in reporting is the right next step.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book a data strategy session →</Link></div>
        </div>
        <ul>
          <li>Questions and sources mapped</li>
          <li>Architecture: what you need now, and later</li>
          <li>A first-area plan with effort and capacity</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
