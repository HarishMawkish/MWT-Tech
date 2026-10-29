import Link from "next/link";

/** The sections of the SAP Business AI page, converted from the supplied HTML. */
export function BaiBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / SAP Business AI</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">SAP Business AI</span>
          <h1>AI that works inside your processes, <em>not beside them.</em></h1>
          <p className="lede">SAP builds AI straight into SAP Cloud ERP: it reads purchase orders and payment advices, predicts late deliveries, explains errors in plain language and summarises your reports. Because it runs on your own processes and data, it gives useful answers, not generic ones. We help you find where AI pays off for your business, switch it on, and prove the result.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Find your AI quick wins →</a>
            <a href="#where" className="btn sec">Where AI already works</a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of AI-assisted sales order creation: a customer's purchase order PDF on the left with highlighted fields, and on the right the fields SAP extracted, such as customer, customer reference, three items, requested delivery date and total in LKR, each with a confidence label, ready to create the sales order">
            <div className="shell"><span className="sap">SAP</span><span className="t">Create Sales Orders · from document</span><span className="joule-btn"></span><span className="av">SO</span></div>
            <div className="body-pad">
              <div className="doc">
                <div className="pdf">
                  <div className="pdfh">PURCHASE ORDER</div>
                  <div>Ceylon Leaf Exports (Pvt) Ltd</div>
                  <div>PO no. <mark>CLE-PO-4471</mark></div>
                  <div className="ln" style={{ width: "80%" }}></div>
                  <div><mark>BOPF 1 kg × 400</mark></div>
                  <div><mark>Green tea 500 g × 250</mark></div>
                  <div><mark>Gift tin × 120</mark></div>
                  <div className="ln" style={{ width: "60%" }}></div>
                  <div>Deliver by <mark>14 Nov 2026</mark></div>
                  <div className="ln" style={{ width: "70%" }}></div>
                  <div>Total <mark>LKR 2,184,000</mark></div>
                </div>
                <div className="card-f">
                  <div className="h">Extracted by AI · check and create</div>
                  <div className="xf"><span>Customer<small>Ceylon Leaf Exports</small></span><span className="conf">High</span></div>
                  <div className="xf"><span>Customer reference<small>CLE-PO-4471</small></span><span className="conf">High</span></div>
                  <div className="xf"><span>Items<small>3 lines matched to products</small></span><span className="conf">High</span></div>
                  <div className="xf"><span>Gift tin<small>2 possible products</small></span><span className="conf lo">Check</span></div>
                  <div className="xf"><span>Delivery date<small>14.11.2026</small></span><span className="conf">High</span></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of AI-assisted sales order creation in SAP Cloud ERP. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light" id="where">
    <div className="in">
      <span className="eyebrow">Where AI already works</span>
      <h2>Already in your system, waiting to be switched on.</h2>
      <p className="lede">You don't need a data science team to start. SAP adds AI features to SAP Cloud ERP with every release, built for specific jobs. Most of them work on your data from the first day. A few examples from the current release:</p>
      <div className="uses">
        <div className="use"><span className="n">Finance</span><ul>
          <li><b>Payment advices</b> read automatically, whatever the customer's format.</li>
          <li><b>Report summaries</b> that explain trends and outliers in plain language.</li>
          <li><b>Predictive accounting</b> shows expected margins before invoices are posted.</li>
        </ul></div>
        <div className="use"><span className="n">Sales</span><ul>
          <li><b>Sales orders from PDFs</b>, emails and images, ready for review.</li>
          <li><b>Delivery delays</b> predicted before your customer calls.</li>
          <li><b>Returns</b> pre-filled with likely reasons from similar past returns.</li>
        </ul></div>
        <div className="use"><span className="n">Procurement and supply chain</span><ul>
          <li><b>Supplier details</b> captured from quotes and invoices into master data.</li>
          <li><b>Delivery dates</b> predicted for open purchase orders.</li>
          <li><b>Predictive MRP</b> to test demand and capacity before you commit.</li>
        </ul></div>
        <div className="use"><span className="n">Everyone</span><ul>
          <li><b>Error messages</b> explained in plain language, with how to fix them.</li>
          <li><b>Easy Fill</b>: describe a change in words and SAP fills in the fields.</li>
          <li><b>Joule</b>, SAP's AI assistant, to find, ask and act across the system.</li>
        </ul></div>
        <div className="use"><span className="n">Compliance</span><ul>
          <li><b>Environmental permits</b> read from PDFs, with compliance tasks proposed.</li>
          <li><b>Trade classification</b> of products for customs, with an agent.</li>
          <li><b>E-invoicing errors</b> analysed and resolved with an agent.</li>
        </ul></div>
        <div className="use"><span className="n">Your own AI</span><ul>
          <li><b>Custom predictions</b> on your own data, such as payment risk.</li>
          <li><b>Your documents</b> read with SAP Document AI.</li>
          <li><b>Your own agents</b> built in Joule Studio. <Link href="/services/sap-solutions/joule-and-ai-agents">See Joule &amp; AI Agents →</Link></li>
        </ul></div>
      </div>
      <p className="note">Availability depends on your SAP release, country and licence. We check what's live for your system before we promise anything.</p>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">The quickest win</span>
        <h2>Stop retyping documents.</h2>
        <p className="lede">Every company we meet has people copying data from PDFs into SAP: customer orders, supplier invoices, bank payment advices, delivery notes. SAP Document AI reads them, fills in SAP, and flags only what it's unsure about. Your team checks the exceptions instead of typing everything.</p>
        <p className="lede">We start with the documents that cost you the most time, measure how much is read correctly with your real documents, and set up the review step so nothing reaches your books unchecked.</p>
        <div className="facts">
          <div className="fact"><b>Any format</b><span>PDFs, scans, images and emails</span></div>
          <div className="fact"><b>Checked</b><span>low-confidence fields go to a person</span></div>
          <div className="fact"><b>Measured</b><span>accuracy tested on your own documents</span></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of payment advice processing: 46 advices received this week, 41 processed automatically, 5 for review, with a list of advices from customers showing amount in LKR, invoices matched, and status">
          <div className="shell"><span className="sap">SAP</span><span className="t">Process Payment Advices</span><span className="joule-btn"></span><span className="av">AR</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Received</div><div className="s">This week</div></div><div className="k">46</div></div>
              <div className="tile"><div><div className="h">Automatic</div><div className="s">No touch</div></div><div className="k pos">41</div></div>
              <div className="tile"><div><div className="h">For review</div><div className="s">Low confidence</div></div><div className="k neg">5</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Latest payment advices</div>
              <div className="row"><span>Lanka Retail Holdings · LKR 4.2m · 12 invoices</span><span className="pill ok">Cleared</span></div>
              <div className="row"><span>Harbour Foods · LKR 865k · 3 invoices</span><span className="pill ok">Cleared</span></div>
              <div className="row"><span>Kandy Hotels Group · LKR 1.1m · 1 unmatched</span><span className="pill wr">Review</span></div>
              <div className="row"><span>Southern Traders · scanned image</span><span className="pill in">Reading</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of payment advice processing with SAP Document AI. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What's included</span>
      <h2>Some AI comes with your subscription. Some you pay for as you use it.</h2>
      <p className="lede">SAP splits its AI into two groups. Base AI is included in your SAP Cloud ERP subscription. Premium AI, such as assistants, agents and some document processing, is licensed separately and charged by use. We tell you which group each use case falls into before you start, so there are no surprises on your bill.</p>
      <div className="users">
        <table>
          <thead><tr><th>Group</th><th>What it covers</th><th>How it's paid</th></tr></thead>
          <tbody>
            <tr><td data-label="Group">Base AI</td><td data-label="What it covers">Joule's basic features and many AI features built into SAP Cloud ERP apps.</td><td data-label="How it's paid">Included in your subscription</td></tr>
            <tr><td data-label="Group">Premium AI</td><td data-label="What it covers">Assistants and agents that do work for you, and higher-volume AI services.</td><td data-label="How it's paid">Licensed separately, by use</td></tr>
            <tr><td data-label="Group">Your own AI</td><td data-label="What it covers">Custom models, agents and document reading built on SAP's AI platform.</td><td data-label="How it's paid">Platform services, by use</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">SAP's AI licensing changes often. We check every use case against your current SAP contract and SAP's latest terms.</p>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">How we work</span>
        <h2>Start small, measure, then scale.</h2>
        <p className="lede">AI projects fail when they start with the technology. Ours start with a list of tasks that take your people the most time, and a number for each one: hours spent, errors made, days lost. We pick two or three where SAP's AI fits, try them in your test system with your real data, and only move to production when the numbers prove it.</p>
        <p className="lede">After go-live we keep measuring, so you can see what AI saves you every month, and decide where to go next.</p>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of a Mawkish AI value tracker showing three use cases with monthly hours before and after: sales orders from PDFs from 120 to 30 hours, payment advices from 80 to 14 hours, and supplier invoice capture in pilot">
          <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MT</span><span className="t">AI value tracker</span><span className="av">CFO</span></div>
          <div className="body-pad">
            <div className="tiles">
              <div className="tile"><div><div className="h">Use cases</div><div className="s">Live</div></div><div className="k">2</div></div>
              <div className="tile"><div><div className="h">Hours saved</div><div className="s">Per month</div></div><div className="k pos">156</div></div>
              <div className="tile"><div><div className="h">In pilot</div><div className="s">Test system</div></div><div className="k">1</div></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="vt hd"><span>Use case</span><span>Before</span><span>After</span></div>
              <div className="vt"><span>Sales orders from PDFs<small>Customer service</small></span><span>120 h</span><span>30 h</span></div>
              <div className="vt"><span>Payment advices<small>Accounts receivable</small></span><span>80 h</span><span>14 h</span></div>
              <div className="vt"><span>Supplier invoice capture<small>Accounts payable</small></span><span>95 h</span><span>Pilot</span></div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of a Mawkish AI value report. Sample data.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">Trust and control</span>
        <h2>AI you can explain to your auditors.</h2>
        <p className="lede">SAP's AI runs inside your SAP Cloud ERP system, under the same roles and authorisations as your people. It can only see and do what the user's roles allow. People keep the final say on anything that matters, and every action is recorded.</p>
        <p className="lede">AI is only as good as the data and processes underneath it. A clean, standard SAP system is the best foundation for it, which is one more reason we keep your core clean.</p>
      </div>
      <div className="includes">
        <div><h3>Your authorisations</h3><p>AI respects the same business roles as the user it works for.</p></div>
        <div><h3>A person decides</h3><p>Proposals are reviewed before they're posted, until you choose otherwise.</p></div>
        <div><h3>Traceable</h3><p>What the AI proposed and who accepted it are recorded.</p></div>
        <div><h3>SAP's AI ethics</h3><p>SAP's AI features follow its published AI ethics policy.</p></div>
        <div><h3>Clean data</h3><p>We fix the master data AI depends on before switching it on.</p></div>
        <div><h3>Clear costs</h3><p>Premium AI usage tracked so spend never surprises you.</p></div>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channel on SAP Business AI.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=IPja2VtzcEo" target="_blank" rel="noopener" data-yt="IPja2VtzcEo" aria-label="Play on YouTube: SAP Business AI Platform: build AI with business context">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">Business AI Platform</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>SAP Business AI Platform: build AI with business context</h3><p>A short overview of the platform behind SAP Business AI: business data, models and governance in one place.</p><span className="d">SAP · May 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=PhAMg7UVuE8" target="_blank" rel="noopener" data-yt="PhAMg7UVuE8" aria-label="Play on YouTube: AI, data and the autonomous enterprise">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">SAP Connect 2026</span></div><div className="big">Keynote in 17 minutes</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>AI, data and the autonomous enterprise</h3><p>Highlights from the SAP Connect keynote in October 2026: Joule, assistants, agents and SAP’s AI roadmap.</p><span className="d">SAP · October 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Do we have to pay extra for AI?</summary><p>Not for everything. Many AI features and Joule's basic features are included in SAP Cloud ERP. Assistants, agents and some document processing are premium and charged by use. We tell you which is which before you start.</p></details>
        <details><summary>Is our data used to train public AI models?</summary><p>SAP's AI runs under your SAP contract and SAP's AI ethics and data protection commitments. We walk you through what those terms say for your subscription before you switch anything on.</p></details>
        <details><summary>Do we need a data science team?</summary><p>No. Most of SAP's AI is built into the apps and works on your data as it is. You need people who know the process and can judge the results, which you already have.</p></details>
        <details><summary>We're still implementing SAP. Is it too early for AI?</summary><p>No, it's the best time. Some AI features can be part of your design from the start, such as reading sales orders or payment advices, so you never build the manual process at all.</p></details>
        <details><summary>Does AI work with Sri Lankan documents and formats?</summary><p>SAP's document reading handles many languages and layouts. We test it on your real documents first, including local bank advices, before we rely on it.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Find the hours AI can give back.</h2>
          <p className="lede">In one session, we look at where your team spends time on manual work, show which SAP AI features fit, what's included and what costs extra, and pick a first use case to prove.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an AI discovery session →</Link></div>
        </div>
        <ul>
          <li>AI already in your system</li>
          <li>Document reading quick wins</li>
          <li>Base versus premium AI</li>
          <li>A pilot with your own data</li>
          <li>Savings measured monthly</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
