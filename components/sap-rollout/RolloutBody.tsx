import Link from "next/link";

/** The sections of the Rollouts & Localisation page, converted from the supplied HTML. */
export function RolloutBody() {
  return (
    <>
<section className="hero">
    <div className="in">
      <div className="crumbs"><Link href="/services">Services</Link> / <Link href="/services/sap-solutions">SAP Solutions</Link> / Rollouts &amp; Localisation</div>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Rollouts &amp; Localisation</span>
          <h1>Local where it matters. <em>Global where you grow.</em></h1>
          <p className="lede">Every country has its own tax, invoicing, payroll, banking and reporting rules. Your SAP system has to follow them without turning into a different system in each country. We localise SAP for Sri Lanka in depth, and we roll out one global template to every market you operate in.</p>
          <div className="part">
            <a href="#lk"><span>Part 1</span><b>Built for Sri Lanka</b><small>VAT, RAMIS, WHT, payroll, banking, tea and apparel</small></a>
            <a href="#global"><span>Part 2</span><b>Ready for every country</b><small>Global templates, SAP local versions, e-invoicing</small></a>
          </div>
        </div>

        <figure style={{ margin: "0" }}>
          <div className="screen" role="img" aria-label="Illustration of a multi-country rollout plan with entities in Sri Lanka, India, the UAE and the Maldives, their localisation basis and go-live waves">
            <div className="shell"><span className="sap" style={{ background: "#1f7a5a" }}>MK</span><span className="t">Global rollout · 4 countries, 7 companies</span><span className="av">MK</span></div>
            <div className="body-pad">
              <div className="tiles">
                <div className="tile"><div><div className="h">Global template</div><div className="s">Shared processes</div></div><div className="k pos">86<small>%</small></div></div>
                <div className="tile"><div><div className="h">Local requirements</div><div className="s">Across all countries</div></div><div className="k">64</div></div>
                <div className="tile"><div><div className="h">E-invoicing links</div><div className="s">Live or planned</div></div><div className="k">3</div></div>
              </div>
              <div className="card-f" style={{ marginTop: "10px" }}>
                <div className="h">Rollout waves</div>
                <div className="row"><span>Sri Lanka · 3 companies · RAMIS VAT API</span><span className="pill ok">Wave 1 · Live</span></div>
                <div className="row"><span>India · 2 companies · SAP local version</span><span className="pill in">Wave 2</span></div>
                <div className="row"><span>UAE · 1 company · SAP local version</span><span className="pill in">Wave 2</span></div>
                <div className="row"><span>Maldives · 1 company · template-based</span><span className="pill wr">Wave 3</span></div>
              </div>
            </div>
          </div>
          <figcaption className="caption">Illustration of a group rollout plan. Sample data.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  
  <section className="divider" id="lk">
    <div className="in">
      <span className="pn">01</span>
      <div><span className="eyebrow">Part 1</span><h2>Built for Sri Lanka.</h2><p>Sri Lanka's tax rules have changed more in the last three years than in the decade before. Here's what your SAP system has to handle today, and how we make it do so.</p></div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">The honest starting point</span>
        <h2>SAP doesn't ship a Sri Lanka version. That's where we come in.</h2>
        <p className="lede">SAP provides ready-made local versions of its cloud ERP for about 60 countries, with tax, legal reporting and payment formats maintained by SAP. Sri Lanka isn't one of them, and neither are Bangladesh, Pakistan or the Maldives.</p>
        <p className="lede">SAP Cloud ERP still runs in Sri Lanka. It's set up from a template country's settings, with a Sri Lanka layer built on top. But SAP doesn't keep that layer up to date when the rules change. Whoever builds it has to maintain it. So you need a partner who reads every IRD notice, not one who learns about them at year-end.</p>
      </div>
      <div className="layers2">
        <div className="ly l1"><div><h3>SAP Cloud ERP core</h3><p>Processes, finance, supply chain, AI. Identical everywhere.</p></div><span className="own">Maintained by SAP</span></div>
        <div className="ly l2"><div><h3>Template country settings</h3><p>Base tax and reporting framework, copied from a supported country.</p></div><span className="own">Maintained by SAP</span></div>
        <div className="ly l3"><div><h3>Sri Lanka layer</h3><p>VAT and SSCL, RAMIS integration, WHT, invoice forms, bank files, statutory reports, payroll links.</p></div><span className="own">Built and kept current by Mawkish</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">The Sri Lanka compliance map</span>
      <h2>What your ERP has to handle in 2026.</h2>
      <p className="lede">Current rules as of October 2026, with what each one means for your SAP system. Rates and thresholds change with budgets and IRD circulars, so this is the starting point for a project, not tax advice.</p>
      <div className="comp">
        <div className="cc hot">
          <span className="k">New · VAT e-invoicing</span><h3>RAMIS VAT Web API</h3>
          <div className="facts2">
            <div><b>Real time</b><span>Invoice data sent from your ERP to the IRD's RAMIS system</span></div>
            <div><b>Phase 1</b><span>Export-oriented VAT registrants: garment and tea exporters, tea manufacturers through brokers</span></div>
            <div><b>Phase 2</b><span>All VAT-registered businesses. Full integration expected by end of 2026</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> an API link from billing to RAMIS, with monitoring and resubmission. Submitted invoices can't be edited, so corrections must go through credit and debit notes.</p>
        </div>
        <div className="cc">
          <span className="k">Indirect tax</span><h3>VAT</h3>
          <div className="facts2">
            <div><b>18%</b><span>Standard rate since January 2024</span></div>
            <div><b>LKR 60m</b><span>Annual registration threshold, with LKR 36m proposed from July 2026</span></div>
            <div><b>Schedules</b><span>Output, input, zero-rated, credit and debit notes, imports and exports</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> tax codes and determination rules, compliant tax invoice and credit note layouts, and VAT return schedules generated from postings.</p>
        </div>
        <div className="cc hot">
          <span className="k">Changed · Exporters</span><h3>SVAT has ended</h3>
          <div className="facts2">
            <div><b>1 Oct 2025</b><span>SVAT repealed. Registrations moved to standard VAT</span></div>
            <div><b>No vouchers</b><span>Suppliers to exporters now issue standard VAT invoices</span></div>
            <div><b>Refunds</b><span>Exporters recover input VAT through a refund process</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> SVAT voucher logic removed, input VAT refund claims tracked, and the cash-flow impact visible in treasury.</p>
        </div>
        <div className="cc">
          <span className="k">Turnover levy</span><h3>SSCL</h3>
          <div className="facts2">
            <div><b>2.5%</b><span>Social Security Contribution Levy on liable turnover</span></div>
            <div><b>2026</b><span>Financial services exempted from January 2026</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> SSCL calculated on liable turnover from billing data, with postings and a reconciliation report for the quarterly return.</p>
        </div>
        <div className="cc">
          <span className="k">Withholding</span><h3>WHT and AIT</h3>
          <div className="facts2">
            <div><b>5%</b><span>Service fees to residents above LKR 100,000 a month</span></div>
            <div><b>10%</b><span>Interest, and rent above LKR 100,000 a month</span></div>
            <div><b>15%</b><span>Dividends</span></div>
            <div><b>14%</b><span>Most payments to non-residents</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> withholding codes on supplier payments, monthly thresholds tracked, certificates issued and remittance reports. Updated for the June 2026 IRD circular.</p>
        </div>
        <div className="cc">
          <span className="k">People</span><h3>Payroll and statutory funds</h3>
          <div className="facts2">
            <div><b>8% / 12%</b><span>EPF, employee and employer</span></div>
            <div><b>3%</b><span>ETF, employer</span></div>
            <div><b>APIT</b><span>PAYE tax on IRD tables, due on the 15th</span></div>
            <div><b>Rs 30,000</b><span>Minimum monthly wage from January 2026</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> payroll runs in a local HCM system such as MiHCM, with postings and cost allocation flowing into SAP finance automatically.</p>
        </div>
        <div className="cc">
          <span className="k">Banking</span><h3>Payments and collections</h3>
          <div className="facts2">
            <div><b>CEFTS</b><span>LankaPay real-time transfers</span></div>
            <div><b>SLIPS</b><span>Bulk payments such as supplier runs and salaries</span></div>
            <div><b>RTGS</b><span>High-value payments through the Central Bank</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> payment files in each bank's format, or direct bank connectivity, plus bank statement import for automatic reconciliation.</p>
        </div>
        <div className="cc">
          <span className="k">Reporting</span><h3>SLFRS and the tax year</h3>
          <div className="facts2">
            <div><b>SLFRS</b><span>Sri Lanka Accounting Standards, converged with IFRS</span></div>
            <div><b>Apr–Mar</b><span>Tax year, often also the financial year</span></div>
            <div><b>LKR + USD</b><span>Many exporters also report or price in US dollars</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> the fiscal year and ledgers are fixed at setup and can't be changed later. We settle April–March versus calendar year, and group currency, in week one.</p>
        </div>
        <div className="cc">
          <span className="k">Trade</span><h3>Customs and BOI</h3>
          <div className="facts2">
            <div><b>Customs</b><span>Import and export declarations, duties and cess</span></div>
            <div><b>BOI</b><span>Board of Investment enterprises with special tax terms</span></div>
            <div><b>Coming</b><span>RAMIS to prefill import and export schedules from Customs data</span></div>
          </div>
          <p className="erp"><b>In SAP:</b> landed cost on imports, duty and cess accruals, and export documents matched to Customs data for VAT reconciliation.</p>
        </div>
      </div>
      <p className="srcs">Sources: IRD notice SEC/PN/VAT/2026-03 on VAT Web API integration (<a href="https://assets.kpmg.com/content/dam/kpmgsites/lk/pdf/kpmg-tax-news/2026/may/Notice-to-the-VAT-Registered-Persons-VAT-Invoice-Data-Integration.pdf">via KPMG Sri Lanka</a>) · <a href="https://regfollower.com/sri-lanka-inland-revenue-announces-end-of-svat-scheme/">End of SVAT</a> · <a href="https://factum.lk/health-and-economic-cooperation/factum-perspectives-sri-lankas-tax-reform-landscape-2026-a-critical-assessment/">VAT and SSCL 2026</a> · <a href="https://regfollower.com/sri-lanka-ird-issues-guidance-on-withholding-tax-deduction/">WHT circular SEC/2026/E/04</a> · <a href="https://mihcm.com/resources/guides/sri-lanka-payroll-guide">Sri Lanka payroll guide (MiHCM)</a>. Confirm current rates with your tax adviser.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Deep dive · RAMIS VAT integration</span>
      <h2>From SAP invoice to matched VAT record, in real time.</h2>
      <p className="lede">The IRD's VAT Web API changes how VAT works in Sri Lanka. Your sales invoices are reported as you issue them, and your customers approve them in RAMIS before they can claim input tax. Errors can no longer be quietly fixed at month-end. Here's how it works with SAP.</p>
      <div className="ramis" role="img" aria-label="Flow: an invoice is created in SAP billing; an API connector validates and sends it to RAMIS in real time; RAMIS records it on the supplier's VAT schedules; the customer reviews and approves the record in RAMIS e-Service, which changes it to Matched; the customer can then claim input tax. Corrections are made with credit or debit notes, which follow the same path.">
        <div className="rb r1">
          <b>SAP billing</b>
          <span>Invoice, credit or debit note posted</span>
        </div>
        <div className="rar rar1" aria-hidden="true"><svg viewBox="0 0 28 12" width="24" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 6H26M18 0l8 6-8 6" /></svg></div>
        <div className="rb r2">
          <b>API connector</b>
          <span>Validates TINs and fields, sends, logs, retries</span>
        </div>
        <div className="rar rar2" aria-hidden="true"><svg viewBox="0 0 28 12" width="24" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 6H26M18 0l8 6-8 6" /></svg></div>
        <div className="rb r3">
          <b>IRD RAMIS</b>
          <span>Records on supplier's VAT schedules</span>
        </div>
        <div className="rar rar3" aria-hidden="true"><svg viewBox="0 0 28 12" width="24" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 6H26M18 0l8 6-8 6" /></svg></div>
        <div className="rb r4">
          <b>Your customer</b>
          <span>Approves in RAMIS e-Service, status becomes Matched</span>
        </div>
        <div className="rar rad" aria-hidden="true"><svg viewBox="0 0 12 28" width="12" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 0V26M0 18l6 8 6-8" /></svg></div>
        <div className="rb rin">
          <b>Input tax claimable</b>
          <span>only on matched records</span>
        </div>
        <div className="rb rno">
          <b>No edits or deletions after submission</b>
          <span>Every correction is a new credit or debit note in SAP, and it travels the same path. Failed records can be uploaded by CSV.</span>
        </div>
      </div>
      <div className="facts" style={{ marginTop: "32px" }}>
        <div className="fact"><b>1 May 2026</b><span>Tea brokers begin sending Colombo Tea Auction invoices</span></div>
        <div className="fact"><b>Phase 1</b><span>Export-oriented enterprises, including garment and tea exporters</span></div>
        <div className="fact"><b>End 2026</b><span>Full integration expected for all VAT registrants</span></div>
        <div className="fact"><b>5,000</b><span>Records a buyer can approve at once in RAMIS</span></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Sri Lankan industries</span>
      <h2>Localisation goes deeper than tax.</h2>
      <p className="lede">The businesses that drive Sri Lanka's economy run processes you won't find in a generic template. We build on SAP's standard and adapt it to how these industries actually work here.</p>
      <div className="inds">
        <div className="cap"><h3>Tea</h3><p>From estate to auction to export.</p><ul><li>Grades, lots and batch traceability</li><li>Colombo Tea Auction sales and broker settlement</li><li>Broker invoice data now flows to RAMIS</li><li>Export documents and multi-currency pricing</li></ul></div>
        <div className="cap"><h3>Apparel and textiles</h3><p>Export manufacturing on tight margins.</p><ul><li>Style, colour and size variants</li><li>Subcontracting and cut-make-trim</li><li>Fabric imports at 18% VAT since April 2026</li><li>BOI terms and export VAT refunds</li></ul></div>
        <div className="cap"><h3>Diversified conglomerates</h3><p>Many businesses, one group.</p><ul><li>Dozens of companies in one system</li><li>Intercompany trading and eliminations</li><li>Group reporting under SLFRS</li><li>Shared services for finance and procurement</li></ul></div>
        <div className="cap"><h3>Manufacturing and distribution</h3><p>Building materials, beverages, consumer goods.</p><ul><li>Island-wide distributor and route sales</li><li>Production planning and quality</li><li>Trade promotions and rebates</li><li>Landed cost on imported materials</li></ul></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">What we deliver</span>
        <h2>The Sri Lanka layer, built and kept current.</h2>
        <p className="lede">Every Mawkish SAP project in Sri Lanka includes the localisation below, configured and tested against your own transactions. Because SAP doesn't maintain it, we do. When an IRD circular or a budget changes a rate or a form, we update your system.</p>
        <p className="lede">The July 2026 VAT amendments are a good example. A lower registration threshold and a new rate for financial services both needed system changes, not just a memo.</p>
      </div>
      <div className="pack">
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>VAT and SSCL setup</h3><p>Tax codes, determination rules and return schedules.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>RAMIS VAT API link</h3><p>Real-time submission, monitoring and resubmission.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>Tax invoice forms</h3><p>Compliant invoice, credit and debit note layouts.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>Withholding tax</h3><p>WHT and AIT codes, thresholds, certificates, remittances.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>Bank payment files</h3><p>Formats for leading Sri Lankan banks, plus statement import.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>SLFRS chart of accounts</h3><p>Structured for statutory and management reporting.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>Payroll integration</h3><p>Postings from your HCM system, such as MiHCM, into finance.</p></div></div>
        <div className="pk"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10l4 4 8-8"/></svg><div><h3>Regulatory watch</h3><p>IRD, CBSL and budget changes tracked and applied.</p></div></div>
      </div>
    </div>
  </section>

  
  <section className="divider" id="global">
    <div className="in">
      <span className="pn">02</span>
      <div><span className="eyebrow">Part 2</span><h2>Ready for every country you operate in.</h2><p>Many of our clients start in Sri Lanka and grow into India, the Middle East and beyond. The method that makes Sri Lanka work is the same one we use to roll SAP out across borders.</p></div>
    </div>
  </section>

  
  <section className="light">
    <div className="in two">
      <div>
        <span className="eyebrow">The global template</span>
        <h2>Design once. Localise each country. Roll out in waves.</h2>
        <p className="lede">A global template is your group's way of working in SAP: one chart of accounts, one set of processes, one set of reports. Each country adds only what its law requires, such as local tax, invoicing, banking and statutory reports. Nothing else changes from one country to the next.</p>
        <p className="lede">The result is a group that closes the books the same way everywhere, shares data without translation, and opens a new country in weeks instead of months.</p>
      </div>
      <div className="tmpl" role="img" aria-label="Global template diagram: a shared global template covering processes, chart of accounts, master data, reporting and integrations sits above country layers for Sri Lanka, India, UAE and further countries, each adding tax, e-invoicing, banking and statutory reports.">
        <div className="gt">
          <b>Global template</b>
          <span>Shared by every company, everywhere</span>
          <ul>
            <li>Processes</li>
            <li>Chart of accounts</li>
            <li>Master data rules</li>
            <li>Roles</li>
            <li>Group reporting</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="stems" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="cts">
          <div className="ct sl">
            <b>Sri Lanka</b>
            <span>VAT, SSCL</span>
            <span>RAMIS API</span>
            <span>WHT, banks</span>
            <span className="strong">Mawkish layer</span>
          </div>
          <div className="ct ind">
            <b>India</b>
            <span>GST, TDS</span>
            <span>E-invoice, e-way bill</span>
            <span>Local banks</span>
            <span className="strong">SAP local version</span>
          </div>
          <div className="ct uae">
            <b>UAE</b>
            <span>VAT, corporate tax</span>
            <span>E-invoicing 2027</span>
            <span>WPS payroll</span>
            <span className="strong">SAP local version</span>
          </div>
          <div className="ct next">
            <b>Next country</b>
            <span>Local tax</span>
            <span>E-invoicing</span>
            <span>Banking, reports</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">Country coverage</span>
      <h2>Two kinds of country, one approach.</h2>
      <p className="lede">In about 60 countries, SAP maintains the local version itself, and we configure and connect it. Everywhere else, we build the local layer the way we do for Sri Lanka. Either way, the global template stays the same.</p>
      <div className="ctry">
        <div className="panel">
          <h3>SAP local versions</h3>
          <p className="sub">SAP maintains tax, legal reporting and formats. Highlighted: markets near our clients.</p>
          <div className="flags">
            <span className="hl">India</span><span className="hl">United Arab Emirates</span><span className="hl">Saudi Arabia</span><span className="hl">Qatar</span><span className="hl">Oman</span><span className="hl">Kuwait</span><span className="hl">Singapore</span><span className="hl">Malaysia</span><span className="hl">Thailand</span><span className="hl">Vietnam</span><span className="hl">Indonesia</span><span className="hl">Philippines</span><span className="hl">Australia</span><span>United Kingdom</span><span>United States</span><span>Germany</span><span>France</span><span>Netherlands</span><span>Japan</span><span>China</span><span>South Africa</span><span>Egypt</span><span>+ around 40 more</span>
          </div>
        </div>
        <div className="panel">
          <h3>Template plus local layer</h3>
          <p className="sub">Built from a template country, with the local layer owned by the partner.</p>
          <div className="flags">
            <span className="lk">Sri Lanka</span><span>Maldives</span><span>Bangladesh</span><span>Pakistan</span><span>Nepal</span><span>Bahrain</span><span>Jordan</span><span>Kenya</span><span>Nigeria</span>
          </div>
          <p className="note" style={{ marginTop: "18px" }}>For SAP Cloud ERP Private, country coverage differs. We confirm the options for each country during the assessment.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">E-invoicing across our markets</span>
      <h2>Every market is moving to real-time tax reporting.</h2>
      <p className="lede">Governments increasingly want to see invoices as they're issued. SAP Document and Reporting Compliance connects SAP to many of these systems out of the box. For the rest, such as Sri Lanka's RAMIS, we build the connection. Your finance team sees one monitor for all of them.</p>
      <div className="einv">
        <svg viewBox="0 0 1000 230" role="img" aria-label="E-invoicing timeline: India already live with e-invoicing and e-way bills; Sri Lanka RAMIS VAT API phase 1 in 2026 with full integration expected by end of 2026; UAE voluntary pilot from July 2026, mandatory for revenue of AED 50 million or more from January 2027 and for others from July 2027.">
          <g style={{ fontFamily: "var(--body)" }}>
            <g fontSize="12" fontWeight="700" style={{ fill: "var(--muted)" }}>
              <text x="200" y="26">2025</text><text x="360" y="26">2026 H1</text><text x="520" y="26">2026 H2</text><text x="680" y="26">2027 H1</text><text x="840" y="26">2027 H2</text>
            </g>
            <g fontSize="14" fontWeight="800" style={{ fill: "var(--fg)" }}><text x="20" y="70">India</text><text x="20" y="130">Sri Lanka</text><text x="20" y="190">UAE</text></g>
            <rect x="200" y="52" width="780" height="28" rx="7" fill="#1f7a5a"/><text x="212" y="71" fontSize="12" fontWeight="700" fill="#fff">Live: GST e-invoicing and e-way bills, through SAP's India local version</text>
            <rect x="420" y="112" width="160" height="28" rx="7" fill="#e9a23b"/><text x="430" y="131" fontSize="12" fontWeight="700" fill="#2b1a00">Phase 1: exporters</text>
            <rect x="584" y="112" width="396" height="28" rx="7" fill="#b7791f"/><text x="596" y="131" fontSize="12" fontWeight="700" fill="#fff">Phase 2: all VAT-registered · full by end 2026</text>
            <rect x="520" y="172" width="160" height="28" rx="7" fill="#b7e1cf"/><text x="530" y="191" fontSize="12" fontWeight="700" fill="#0f2a1f">Voluntary pilot</text>
            <rect x="684" y="172" width="156" height="28" rx="7" fill="#2f9e76"/><text x="694" y="191" fontSize="12" fontWeight="700" fill="#fff">AED 50m+ revenue</text>
            <rect x="844" y="172" width="136" height="28" rx="7" fill="#17694b"/><text x="854" y="191" fontSize="12" fontWeight="700" fill="#fff">All businesses</text>
          </g>
        </svg>
      </div>
      <p className="srcs">UAE timeline per Ministerial Decision 244 of 2025 (<a href="https://kpmg.com/us/en/taxnewsflash/news/2025/10/uae-framework-scope-implementation-e-invoicing-system.html">KPMG</a>). Sri Lanka per IRD notice SEC/PN/VAT/2026-03. Bar lengths are approximate.</p>
    </div>
  </section>

  
  <section>
    <div className="in">
      <span className="eyebrow">The rollout playbook</span>
      <h2>Each new country is faster than the last.</h2>
      <p className="lede">After the first country, a rollout reuses the template, the test library and the training material. The work narrows to what's actually local. SAP's parallel project line lets us build the next country without disturbing the ones already live.</p>
      <div className="wave">
        <div><span className="st2">Step 1</span><h3>Country assessment</h3><p>Legal entities, tax registrations, e-invoicing, banking, payroll and statutory reports.</p></div>
        <div><span className="st2">Step 2</span><h3>Local fit-gap</h3><p>Template processes reviewed with local teams. Only legal or business-critical differences are added.</p></div>
        <div><span className="st2">Step 3</span><h3>Build the local layer</h3><p>Tax, forms, bank formats, integrations and reports, built in a parallel project line.</p></div>
        <div><span className="st2">Step 4</span><h3>Test and migrate</h3><p>The template test library plus local test cases. Local data loaded and reconciled.</p></div>
        <div><span className="st2">Step 5</span><h3>Go live and support</h3><p>Cutover, local hypercare, then the same support desk as every other country.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Can SAP Cloud ERP really run a Sri Lankan company?</summary><p>Yes. SAP doesn't provide a ready-made Sri Lanka version, but the system is configured from a template country and a Sri Lanka layer is added for VAT, SSCL, withholding tax, RAMIS integration, invoice formats and bank files. The difference is who maintains that layer: in Sri Lanka, it's your partner, not SAP.</p></details>
        <details><summary>What happens when the IRD changes a rate or a rule?</summary><p>We track IRD notices, circulars and budget changes, assess the impact on your system, and apply the change before it takes effect. Most rate changes are configuration. Changes to schedules or the RAMIS API may need a small development, which we plan with you.</p></details>
        <details><summary>Do we have to connect to RAMIS?</summary><p>The IRD is rolling out the VAT Web API in phases, starting with export-oriented businesses and expecting full integration by the end of 2026. Records can also be uploaded by CSV, but an ERP integration is the only practical option at volume. We build it as part of the project.</p></details>
        <details><summary>We export in US dollars. Can SAP handle LKR and USD?</summary><p>Yes. SAP keeps several currencies on every posting: transaction, company and group currency. We decide early which currency each company reports in, because group currency is one of the settings that can't be changed later.</p></details>
        <details><summary>Do you only work in Sri Lanka?</summary><p>No. We're based in Colombo and serve clients in Sri Lanka, India, the UAE and beyond. Many projects start with a Sri Lankan head office and roll out to subsidiaries abroad. The global template approach is designed for exactly that.</p></details>
        <details><summary>How long does it take to add a country?</summary><p>Once the template is live, a new country in SAP's local-version list typically takes a few months, depending on scope and integrations. Countries that need a local layer built take longer the first time, and less after that.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>Compliant in Colombo. Consistent everywhere else.</h2>
          <p className="lede">Tell us which countries you operate in today and where you're heading. We'll map the local requirements, the template and the rollout sequence.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Plan your rollout →</Link></div>
        </div>
        <ul>
          <li>Sri Lanka layer: VAT, SSCL, WHT, RAMIS</li>
          <li>Kept current with every IRD change</li>
          <li>One global template for the whole group</li>
          <li>SAP local versions in about 60 countries</li>
          <li>E-invoicing monitored in one place</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
