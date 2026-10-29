import Link from "next/link";
import { FitCheck } from "./FitCheck";
import { ModuleExplorer } from "./ModuleExplorer";
import { VideoLibrary } from "./VideoLibrary";

/** The static sections of the GROW with SAP page, converted from the supplied HTML. The interactive parts are components. */
export function GrowBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / GROW with SAP</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">GROW with SAP</span>
          <h1>Run a growing business on <em>SAP Cloud ERP</em>, live in months.</h1>
          <p className="lede">GROW with SAP gives fast-growing companies SAP's cloud ERP as a ready-to-run service. You get proven processes from day one, built-in AI, and upgrades SAP runs for you twice a year. Mawkish takes you from first workshop to go-live and keeps you current after.</p>
          <div className="ctas">
            <a href="#book" className="btn pri">Book a readiness assessment →</a>
            <a href="#fit" className="btn sec">Is it right for us?</a>
          </div>
          <p className="name-note"><b>About the names.</b> GROW with SAP is the offering. The software inside it is SAP Cloud ERP, also known as SAP S/4HANA Cloud Public Edition.</p>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of the SAP Cloud ERP My Home page with finance tiles, an approvals list and the Joule assistant">
            <div className="shell"><span className="sap">SAP</span><span className="t">My Home</span><span className="search">Search apps, products, documents…</span><span className="joule-btn"></span><span className="av">NP</span></div>
            <div className="body-pad">
              <div className="greet">Good morning, Nirmala</div>
              <div className="tiles">
                <div className="tile"><div><div className="h">Days Sales Outstanding</div><div className="s">Last 12 months</div></div><div className="k pos">38<small>days</small></div></div>
                <div className="tile"><div><div className="h">Overdue Payables</div><div className="s">Company code 1710</div></div><div className="k neg">4.2<small>M LKR</small></div></div>
                <div className="tile"><div><div className="h">Cash Position</div><div className="s">Today vs forecast</div></div>
                  <svg className="spark" viewBox="0 0 100 26" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20 L14 17 L28 18 L42 12 L56 14 L70 8 L84 9 L100 4 L100 26 L0 26 Z" fill="#d1e8ff"/><path d="M0 20 L14 17 L28 18 L42 12 L56 14 L70 8 L84 9 L100 4" fill="none" stroke="#0a6ed1" strokeWidth="1.6"/><circle cx="100" cy="4" r="2.4" fill="#0a6ed1"/></svg>
                </div>
              </div>
              <div className="split">
                <div className="card-f">
                  <div className="h">My Inbox · 4 approvals</div>
                  <div className="row"><span>PO 4500018832 · Packaging film</span><span className="pill wr">Approve</span></div>
                  <div className="row"><span>Supplier invoice 5105600711</span><span className="pill in">Review</span></div>
                  <div className="row"><span>Journal entry · Accrual Oct</span><span className="pill ok">Posted</span></div>
                  <div className="row"><span>Sales order 1002 · Credit block</span><span className="pill wr">Release</span></div>
                </div>
                <div className="joule">
                  <div className="jh"><i></i>Joule</div>
                  <div className="msgs">
                    <div className="bub u">Which customers are likely to pay late this month?</div>
                    <div className="bub j">3 customers are at risk, with <b>12.6M LKR</b> open. Should I draft dunning notes?</div>
                    <div className="bub j typing" aria-hidden="true"><span></span><span></span><span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of the SAP Fiori "My Home" start page with Joule. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What you get</span>
        <h2>One subscription. Software, systems, operations and upgrades.</h2>
        <p className="lede">With GROW with SAP you don't buy servers, plan upgrade projects or patch databases. SAP runs the cloud. You and Mawkish focus on how your business works in it.</p>
        <p className="lede">It is built for companies that want to adopt proven ways of working instead of rebuilding old ones. That's what keeps projects short and upgrades painless.</p>
      </div>
      <div className="includes">
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="5" width="22" height="6" rx="2"/><rect x="4" y="13" width="22" height="6" rx="2"/><rect x="4" y="21" width="22" height="5" rx="2"/></svg>
          <h3>Ready-made best practices</h3><p>Thousands of preconfigured processes, from order to cash to the financial close, ready to switch on.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 20a6 6 0 0 1 1-12 8 8 0 0 1 15 2 5 5 0 0 1 0 10z"/></svg>
          <h3>Three systems included</h3><p>Development, test and production systems, run and backed up by SAP.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 4v6M15 20v6M4 15h6M20 15h6"/><circle cx="15" cy="15" r="4"/></svg>
          <h3>AI built in</h3><p>Joule, SAP's AI assistant, and embedded AI features come as standard across the system.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M25 15a10 10 0 1 1-3-7"/><path d="M25 5v6h-6"/></svg>
          <h3>Always current</h3><p>Two major releases a year plus smaller updates, applied by SAP. No upgrade projects.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 22l6-7 5 4 9-11"/><path d="M5 26h20"/></svg>
          <h3>Analytics included</h3><p>Live dashboards and reports run directly on your transactions, with no separate data warehouse.</p>
        </div>
        <div>
          <svg className="ico" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M8 13l4 4 10-10"/><rect x="4" y="4" width="22" height="22" rx="4"/></svg>
          <h3>Tools to run the project</h3><p>Project, test-automation and data-migration tools are included at no extra cost.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="fit">
    <div className="in">
      <span className="eyebrow">Is it right for you?</span>
      <h2>Five questions that predict a good fit.</h2>
      <p className="lede">These are the questions we ask in a first meeting. Answer them honestly. If GROW isn't the right fit, RISE with SAP usually is, and we'll tell you so.</p>

      <FitCheck />
    </div>
  </section>

  
  <section className="light" id="modules">
    <div className="in">
      <span className="eyebrow">Across the business</span>
      <h2>One system from the first quote to the final close.</h2>
      <p className="lede">SAP Cloud ERP covers the core of a mid-sized or growing company in one integrated system. Pick an area to see what it does, then look at the screens your people would actually use.</p>
      <ModuleExplorer />
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">AI that does the work</span>
        <h2>Joule and AI agents inside the processes you already run.</h2>
        <p className="lede">Joule is SAP's AI assistant, built into every screen. It answers questions about your own data and can take actions for you. AI agents go further and handle routine tasks from start to finish, with a person approving the result.</p>
        <div className="agents">
          <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h12M9 3v12"/></svg></span><div><h3>Month-end accruals</h3><p>Proposes accrual entries from open purchase orders and goods receipts, for your accountant to review.</p></div></div>
          <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="6"/><path d="M9 6v3l2 2"/></svg></span><div><h3>Cash and collections</h3><p>Flags customers likely to pay late and drafts the follow-up.</p></div></div>
          <div className="agent"><span className="n"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 14l4-5 3 3 5-7"/></svg></span><div><h3>Production planning</h3><p>Spots material shortages and suggests how to reschedule.</p></div></div>
        </div>
      </div>
      <figure style={{ margin: "0" }}>
        <div className="screen" role="img" aria-label="Illustration of an AI agent proposing accrual entries for review">
          <div className="shell"><span className="sap">SAP</span><span className="t">Manage Accruals</span><span className="joule-btn"></span><span className="av">NP</span></div>
          <div className="body-pad">
            <div className="card-f">
              <div className="h">Agent run · October close</div>
              <div className="prog"><i></i></div>
              <div className="row" style={{ marginTop: "10px" }}><span>Purchase orders analysed</span><b>214</b></div>
              <div className="row"><span>Accrual proposals</span><b>37</b></div>
              <div className="row"><span>Needs your review</span><span className="pill wr">5</span></div>
            </div>
            <div className="card-f" style={{ marginTop: "10px" }}>
              <div className="h">Proposals for review</div>
              <div className="row"><span>PO 4500018790 · Logistics services</span><span className="pill ok">Ready</span></div>
              <div className="row"><span>PO 4500018802 · Machine maintenance</span><span className="pill ok">Ready</span></div>
              <div className="row"><span>PO 4500018841 · Marketing agency</span><span className="pill wr">Check amount</span></div>
            </div>
            <div className="joule" style={{ marginTop: "10px" }}>
              <div className="msgs">
                <div className="bub j">I estimated the marketing agency accrual from the last three invoices because there's no goods receipt yet. <b>Approve or adjust?</b></div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="caption">Illustration of an AI agent preparing accruals for review. Sample data. Which agents are available depends on your package and SAP's release.</figcaption>
      </figure>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Always current</span>
      <h2>New features twice a year, without an upgrade project.</h2>
      <p className="lede">SAP releases a major update every February and August. Your test system is upgraded about three weeks before production, so you can check your processes first. The test automation tool is included, and new processes stay off until you choose to switch them on.</p>
      <div className="tl">
        <svg viewBox="0 0 1000 190" role="img" aria-label="Release timeline: release 2602 in February, 2608 in August, 2702 the following February. For each release the test system is upgraded about three weeks before production.">
          <line x1="40" y1="96" x2="960" y2="96" style={{ stroke: "var(--line)" }} strokeWidth="2"/>
          <g style={{ fontFamily: "var(--body)", fill: "var(--muted)" }} fontSize="13">
            <text x="40" y="128">Jan</text><text x="190" y="128">Mar</text><text x="340" y="128">May</text><text x="490" y="128">Jul</text><text x="640" y="128">Sep</text><text x="790" y="128">Nov</text><text x="930" y="128">Jan</text>
          </g>
          <g>
            <rect x="80" y="60" width="54" height="22" rx="5" fill="#1f7a5a" opacity=".45"/>
            <rect x="134" y="60" width="26" height="22" rx="5" fill="#34b386"/>
            <text x="80" y="48" style={{ fontFamily: "var(--display)", fill: "var(--fg)" }} fontWeight="800" fontSize="20">2602</text>
            <rect x="530" y="60" width="54" height="22" rx="5" fill="#1f7a5a" opacity=".45"/>
            <rect x="584" y="60" width="26" height="22" rx="5" fill="#34b386"/>
            <text x="530" y="48" style={{ fontFamily: "var(--display)", fill: "var(--fg)" }} fontWeight="800" fontSize="20">2608</text>
            <rect x="880" y="60" width="54" height="22" rx="5" fill="#1f7a5a" opacity=".45"/>
            <rect x="934" y="60" width="26" height="22" rx="5" fill="#34b386"/>
            <text x="880" y="48" style={{ fontFamily: "var(--display)", fill: "var(--fg)" }} fontWeight="800" fontSize="20">2702</text>
          </g>
          <g style={{ fontFamily: "var(--body)", fill: "var(--muted)" }} fontSize="11">
            <circle cx="210" cy="96" r="4" style={{ fill: "var(--muted)" }}/><text x="196" y="80">2602.1</text>
            <circle cx="350" cy="96" r="4" style={{ fill: "var(--muted)" }}/><text x="336" y="80">2602.2</text>
            <circle cx="680" cy="96" r="4" style={{ fill: "var(--muted)" }}/><text x="666" y="80">2608.1</text>
            <circle cx="790" cy="96" r="4" style={{ fill: "var(--muted)" }}/><text x="776" y="80">2608.2</text>
          </g>
          <g style={{ fontFamily: "var(--body)", fill: "var(--fg)" }} fontSize="13">
            <rect x="40" y="156" width="14" height="14" rx="3" fill="#1f7a5a" opacity=".45"/><text x="62" y="168">Test system upgraded, you check your processes</text>
            <rect x="420" y="156" width="14" height="14" rx="3" fill="#34b386"/><text x="442" y="168">Production upgraded</text>
            <circle cx="620" cy="163" r="4" style={{ fill: "var(--muted)" }}/><text x="633" y="168">Smaller feature updates between major releases</text>
          </g>
        </svg>
      </div>
      <div className="facts">
        <div className="fact"><b>2</b><span>major releases a year, in February and August</span></div>
        <div className="fact"><b>~6 weeks</b><span>notice before each upgrade</span></div>
        <div className="fact"><b>~3 weeks</b><span>to test on the upgraded test system before production</span></div>
        <div className="fact"><b>0</b><span>upgrade projects to budget for</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in two">
      <div>
        <span className="eyebrow">Your differences, protected</span>
        <h2>Tailor it without breaking the upgrades.</h2>
        <p className="lede">The standard system stays untouched. That's called a "clean core". Your changes sit in layers around it and use interfaces SAP keeps stable, so every upgrade carries your changes forward automatically.</p>
        <p className="lede">We always start with the simplest layer that does the job, and we'll ask whether each change is a need or a nice-to-have. That question saves money on every future release.</p>
      </div>
      <div className="layers">
        <div className="layer"><span className="who">Business users</span><div><h3>Key-user changes</h3><p>Add custom fields, adjust forms and emails, change screen layouts and build simple custom logic, all in the browser without code.</p></div></div>
        <div className="layer"><span className="who">Developers, inside</span><div><h3>Developer extensions</h3><p>Custom logic and apps built inside the system with upgrade-safe tools, for requirements that need more than configuration.</p></div></div>
        <div className="layer"><span className="who">Developers, alongside</span><div><h3>Side-by-side apps on SAP BTP</h3><p>Separate apps, automations and integrations on SAP's Business Technology Platform, connected through stable APIs.</p></div></div>
        <div className="layer core"><span className="who">SAP standard</span><div><h3>Clean core</h3><p>SAP's processes and code, untouched. That's why upgrades just work.</p></div></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">How Mawkish delivers</span>
      <h2>From first workshop to go-live, in months, not years.</h2>
      <p className="lede">We follow SAP Activate, SAP's method for cloud ERP projects. Instead of writing a long specification up front, we show your team the standard process working in a real system and only change what really needs to change.</p>
      <div className="phases">
        <div className="ph"><span className="st">Step 1</span><h3>Discover</h3><p>Agree the business case and the scope you need.</p><p className="we"><b>We:</b> run a readiness assessment and confirm GROW is the right fit.</p></div>
        <div className="ph"><span className="st">Step 2</span><h3>Prepare</h3><p>Systems are set up and the team and plan are in place.</p><p className="we"><b>We:</b> set up the project and a working demo system.</p></div>
        <div className="ph"><span className="st">Step 3</span><h3>Explore</h3><p>Fit-to-standard workshops with the people who do the work.</p><p className="we"><b>We:</b> demo each process and capture only real gaps.</p></div>
        <div className="ph"><span className="st">Step 4</span><h3>Realize</h3><p>Configure, extend, integrate, migrate data and test.</p><p className="we"><b>We:</b> build it, load your data and run user acceptance testing with you.</p></div>
        <div className="ph"><span className="st">Step 5</span><h3>Deploy</h3><p>Cutover, training and go-live.</p><p className="we"><b>We:</b> train your users and stay on site for go-live.</p></div>
        <div className="ph"><span className="st">Step 6</span><h3>Run</h3><p>Upgrades, new features and new scope.</p><p className="we"><b>We:</b> support you, test each release and switch on what's new.</p></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Licensing, simply</span>
      <h2>You pay per user, by what each person does.</h2>
      <p className="lede">SAP Cloud ERP is a subscription priced per user per month. Each person gets the user type that matches their role, so a warehouse operator doesn't cost the same as a financial controller.</p>
      <div className="users">
        <table>
          <thead><tr><th>User type</th><th>Typical people</th><th>What they can do</th></tr></thead>
          <tbody>
            <tr><td>Finance Base / Premium</td><td>Accountants, controllers, treasury</td><td>Full finance processes. Premium adds wider scope and advanced AI.</td></tr>
            <tr><td>Supply Chain Base / Premium</td><td>Planners, production and warehouse leads</td><td>Full supply chain and manufacturing. Premium adds sustainability and compliance.</td></tr>
            <tr><td>Combo Base</td><td>Power users across functions</td><td>Finance Base and Supply Chain Base together.</td></tr>
            <tr><td>Operational</td><td>Sales, purchasing and service staff</td><td>Day-to-day transactions such as orders, purchasing and deliveries.</td></tr>
            <tr><td>Self-Service</td><td>Everyone else</td><td>Approvals, requests, timesheets and simple confirmations.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="note">Every user type also includes Joule and embedded AI. We size your user mix as part of the readiness assessment, so the quote matches how your teams actually work.</p>
    </div>
  </section>

  
  <section id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP, in their own words.</h2>
      <p className="lede">A short library of videos from SAP's official YouTube channel: what GROW with SAP is, a tour of the product, and the latest release highlights for each part of the business. Most run three to six minutes.</p>
      <VideoLibrary />
      <p className="vnote">All videos are published by SAP on its official YouTube channel. Videos from before 2025 use the product's earlier name, SAP S/4HANA Cloud Public Edition. The release numbers (2502, 2602) are SAP's release names: 2602 means February 2026.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>What's the difference between GROW with SAP and RISE with SAP?</summary><p>Both put you on SAP's cloud ERP. GROW is for a fresh start on the standard cloud product, shared with other customers and upgraded by SAP twice a year. RISE gives you your own private instance, more room for deep custom code, and the option to convert an existing SAP ECC system. Most growing mid-sized companies and subsidiaries fit GROW. Large groups with complex customisation usually fit RISE.</p></details>
        <details><summary>Can we keep our current SAP ECC configuration?</summary><p>No. GROW is always a fresh implementation, but you can bring your data with you. Migration tools are included, and many customers find it a good chance to clean up years of old data and workarounds.</p></details>
        <details><summary>How long does an implementation take?</summary><p>For a mid-sized company with standard scope, a few months rather than years. The biggest factors are how many processes and countries are in scope, how much data you migrate, and how quickly your people can join the workshops. We give you a realistic plan after the readiness assessment.</p></details>
        <details><summary>Will upgrades disrupt our business?</summary><p>They're designed not to. You get about six weeks' notice, the test system is upgraded about three weeks early, and the test automation tool is included. Extensions built the clean-core way carry over automatically. We can run regression testing for you each release.</p></details>
        <details><summary>What if we need something the standard system doesn't do?</summary><p>First we check whether a standard process or a configuration setting covers it. If it doesn't, there are three upgrade-safe options: key-user changes, developer extensions, and side-by-side apps on SAP BTP. We'll recommend the simplest one that does the job.</p></details>
        <details><summary>Does it work for our country?</summary><p>SAP provides local versions for around 60 countries, covering tax, legal reporting and language. Requirements in other countries can be added through localisation. We'll confirm exactly what applies to your entities during the assessment.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Find out in two weeks whether GROW with SAP fits.</h2>
          <p className="lede">The Mawkish Cloud ERP Readiness Assessment maps your processes to SAP's standard, highlights the gaps, and gives you a scope, user mix and roadmap you can take to your board.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book your assessment →</Link></div>
        </div>
        <ul>
          <li>Process fit by department</li>
          <li>GROW or RISE recommendation, with reasons</li>
          <li>Licence sizing by user type</li>
          <li>Implementation timeline and team</li>
          <li>Integration and data migration outline</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
