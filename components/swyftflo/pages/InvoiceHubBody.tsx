import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { AuditEngine } from "../AuditEngine";
import { Explorer } from "../Explorer";
import { Glyph } from "../icons";
import { AppFrame, Pill, Tile } from "../screens";
import { AlongsideErp, Caps, CtaBand, d, Faq, Head, Hero, FlowSteps, NativeAi, Related } from "../parts";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/* ---------------------------------------------------------------- screens */

function AuditReport() {
  const rows: [string, string, "ok" | "er", string][] = [
    ["Purchase order", "PO-2026-005678", "ok", "Matched"],
    ["Contract", "Job-2026-001234", "er", "Price above agreed rate"],
    ["GRN / SRN", "GR-2026-000901", "ok", "Matched"],
    ["Proof of work", "B/L 253595236 · ePOD", "ok", "Matched"],
    ["Confirmations", "Booking 654542646", "ok", "2 of 2 confirmed"],
    ["Invoice integrity", "INV-3291", "ok", "No duplicate found"],
  ];
  return (
    <AppFrame title="AI audit report · INV-3291" search="Search invoices, suppliers, POs…" label="Illustration of an AI audit report checking an invoice against six sources and finding a price above the contracted rate" rail={2}>
      <div className="ttl">
        Red Wood Financial · INV-3291 <small>8 documents · USD 42,500.00</small>
      </div>
      <div className="card-f" style={{ overflowX: "auto" }}>
        <table className="ftab">
          <thead>
            <tr>
              <th>Trust stack</th>
              <th>Key identifier</th>
              <th className="r">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td>
                  <b>{r[0]}</b>
                </td>
                <td style={{ color: "var(--app-muted)" }}>{r[1]}</td>
                <td className="r">
                  <Pill tone={r[2]}>{r[3]}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-f bad">
        <div className="h" style={{ color: "var(--bad)" }}>
          Discrepancy found
        </div>
        <p style={{ fontSize: 11 }}>Line price 425.00 is above the contracted rate of 400.00 on 100 units, an overcharge of 2,500.00. Routed to procurement for review.</p>
      </div>
    </AppFrame>
  );
}

function Review() {
  return (
    <AppFrame title="Document review and matching" label="Illustration of an invoice and its purchase order side by side, with approve, dispute and reject actions" rail={2}>
      <div className="chips">
        {["Invoice", "Contract", "Purchase order", "SRN", "Proof of work"].map((c, i) => (
          <span key={c} className={`chip${i === 0 || i === 2 ? " on" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          ["Invoice #INV-2026-5678", ["Bill line price", "425.00"], "er"],
          ["Purchase order #PO-2026-5678", ["PO line price", "400.00"], "ok"],
        ].map(([t, [a, b], tone]) => (
          <div className="card-f" key={t as string}>
            <div className="h" style={{ fontSize: 10.5 }}>{t as string}</div>
            {["Item", "Quantity", a as string, "Tax"].map((x, i) => (
              <div className="row" key={x}>
                <span>{x}</span>
                <b style={i === 2 ? { color: tone === "er" ? "var(--bad)" : "var(--ok)" } : undefined}>{i === 0 ? "Freight, FCL" : i === 1 ? "100" : i === 2 ? (b as string) : "18%"}</b>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="card-f dark" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 10.5 }}>
          Total value <b style={{ display: "block", fontSize: 13 }}>USD 3,400.00</b>
        </span>
        <span style={{ display: "flex", gap: 6 }}>
          <span className="fbtn" style={{ color: "#fff", borderColor: "#6b70a8" }}>
            Approve
          </span>
          <span className="fbtn" style={{ color: "#fff", borderColor: "#6b70a8" }}>
            Dispute
          </span>
          <span className="fbtn" style={{ color: "#fff", borderColor: "#6b70a8" }}>
            Reject
          </span>
        </span>
      </div>
    </AppFrame>
  );
}

function Tolerance() {
  return (
    <AppFrame title="Variance tolerance" label="Illustration of an invoice line compared with its PO and receipt, with a variance outside tolerance flagged" rail={6}>
      <div className="tiles t3">
        <Tile h="Price tolerance" k="±2%" s="auto-approve inside" tone="ok" />
        <Tile h="Quantity tolerance" k="±1 unit" s="per line" tone="ok" />
        <Tile h="Outside tolerance" k="1 line" s="flagged for review" tone="er" />
      </div>
      <div className="card-f" style={{ overflowX: "auto" }}>
        <div className="h">
          OzOrg! · invoice captured <Pill tone="ok">Captured</Pill>
        </div>
        <table className="ftab">
          <thead>
            <tr>
              <th>Line</th>
              <th className="r">Invoice</th>
              <th className="r">PO</th>
              <th className="r">Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product A</td>
              <td className="r">1 × $1,000</td>
              <td className="r">1 × $1,000</td>
              <td className="r">1 × $1,000</td>
            </tr>
            <tr>
              <td>Product B</td>
              <td className="r" style={{ color: "var(--bad)", fontWeight: 800 }}>
                2 × $500
              </td>
              <td className="r">1 × $500</td>
              <td className="r">1 × $500</td>
            </tr>
            <tr>
              <td>Product C</td>
              <td className="r">1 × $500</td>
              <td className="r">1 × $500</td>
              <td className="r">1 × $500</td>
            </tr>
          </tbody>
        </table>
        <div className="row" style={{ marginTop: 4 }}>
          <span>Line amount $2,500</span>
          <Pill tone="er">Variance $500</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

function Approvals() {
  return (
    <AppFrame title="Approval workflow · Forgeworks Manufacturing" label="Illustration of an invoice approval chain with two approvals given and the CFO pending" rail={3}>
      <div className="card-f">
        <div className="h">
          Rule: invoices above $10,000, plant operations <small>3 approvers</small>
        </div>
        {[
          ["David Anderson · Account manager", "ok", "Approved"],
          ["Sandra Davies · Project manager", "ok", "Approved"],
          ["Philip Hobday · CFO", "wr", "Pending"],
        ].map(([a, t, s]) => (
          <div className="row" key={a}>
            <span>{a}</span>
            <Pill tone={t as "ok" | "wr"}>{s}</Pill>
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">Activity</div>
        <div className="row">
          <span>Simon Rohrbach, finance: &ldquo;@mitchell can you review the discrepancy in the PO for this invoice?&rdquo;</span>
        </div>
        <div className="row">
          <span>Benjamin approved 3 invoices · Sora Logistics</span>
        </div>
        <div className="row">
          <span>John created INV-2026-001</span>
        </div>
      </div>
      <div className="card-f dark">
        <div className="h">🔔 Reminder · 9:41</div>
        <p style={{ fontSize: 11, color: "#d9dcff" }}>Invoice INV-2026-5678 requires your review.</p>
      </div>
    </AppFrame>
  );
}

function Capture() {
  return (
    <AppFrame title="Invoice capture" label="Illustration of AI extracting the invoice number, due date, line items and total from a supplier invoice" rail={1}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 8 }}>
        <div className="card-f" style={{ background: "#fff" }}>
          <div className="h">Invoice · Beacon Engineering</div>
          {["Invoice number 800101", "Date 17 Apr 2026", "Telemetry system integration · 1 × $150.00", "Subtotal $150.00", "Tax $50.00", "Total $220.00"].map((x) => (
            <div className="row" key={x}>
              <span>{x}</span>
            </div>
          ))}
        </div>
        <div className="card-f ai">
          <div className="h">✦ Extracted</div>
          {[
            ["Invoice number", "800101"],
            ["Supplier", "Beacon Engineering"],
            ["Due date", "17 May 2026"],
            ["Line items", "1"],
            ["Tax", "$50.00"],
            ["Total amount", "$220.00"],
          ].map(([a, b]) => (
            <div className="row" key={a}>
              <span>{a}</span>
              <b>{b}</b>
            </div>
          ))}
        </div>
      </div>
      <div className="card-f">
        <div className="row">
          <span>Converting invoice to standardised PDF</span>
          <Pill tone="ok">Done</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

function Lifecycle() {
  return (
    <AppFrame title="Invoice receivables" label="Illustration of invoice receivables grouped by customer, with counts of drafts, pending and internally approved invoices" rail={4}>
      <div className="chips">
        <span className="chip on">Receivables</span>
        <span className="chip">Payables</span>
      </div>
      <div className="tiles t3">
        <Tile h="Pending approval" k="6" tone="wr" />
        <Tile h="Drafts" k="5" />
        <Tile h="Internally approved" k="7" tone="ok" />
      </div>
      <div className="card-f">
        <div className="h">
          LogiLink Logistics <small>4 invoices · last received 3 days ago</small>
        </div>
        {[
          ["Job-23920 · Ocean freight", "USD 4,500", "in", "Validating"],
          ["Job-53003 · Ocean freight", "USD 1,550", "wr", "Disputed"],
          ["Job-53011 · Ocean freight", "USD 2,180", "ok", "Approved"],
          ["Job-53019 · Air freight", "USD 960", "ok", "Paid"],
        ].map(([a, b, t, s]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b>
            </span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <b>{b}</b>
              <Pill tone={t as "in" | "wr" | "ok"}>{s}</Pill>
            </span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

/* ---------------------------------------------------------------- page */

export function InvoiceHubBody() {
  return (
    <>
      <Hero
        current="invoice-hub"
        crumb="Invoice Hub"
        eyebrow="Swyftflo Invoice Hub"
        title={
          <>
            Pay only for what was agreed <em>and what actually happened.</em>
          </>
        }
        lede="Invoice Hub checks every invoice against six independent sources of truth before it is approved: the purchase order, the contract, the goods or service receipt, proof of work, confirmations and the invoice itself. Only real exceptions reach a reviewer, with the evidence attached."
        primary={{ label: "Book an invoice audit demo", href: "#book" }}
        secondary={{ label: "Run the 6-way audit", href: "#audit" }}
        note={
          <>
            <b>Alongside your ERP.</b> Approved invoices post to your ERP&rsquo;s accounts payable. Invoice Hub adds the operational
            evidence accounts payable cannot see on its own.
          </>
        }
        visual={
          <figure style={{ margin: 0 }}>
            <AuditReport />
            <figcaption className="caption">Illustration of an Invoice Hub audit report, simplified. Sample data.</figcaption>
          </figure>
        }
      />

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="The problem"
              title="Finance is asked to validate what it cannot see."
              lede={[
                "Over 80% of invoice data originates outside finance: contracts in procurement, delivery records in logistics, confirmations from suppliers and operations. Yet finance is expected to approve invoices without those operational events in view.",
                "So errors are found too late, by people playing detective across disconnected systems, spreadsheets and email.",
              ]}
            />
          </div>
          <div data-r style={d(2)}>
            <div className="includes">
              {[
                { t: "Duplicate invoices", b: "The same charge submitted twice, or resubmitted with a new number." },
                { t: "Mismatched billing", b: "Quantities, weights or units that don't match what was received." },
                { t: "Overcharges", b: "Rates above the contract, and surcharges nobody agreed to." },
                { t: "Manual audits", b: "Approvals, deliveries and contracts traced by hand, invoice by invoice." },
              ].map((f) => (
                <div key={f.t}>
                  <h3>{f.t}</h3>
                  <p>{f.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audit">
        <div className="in">
          <Head
            eyebrow="6-way AI audit engine"
            title="A proven method, and the half of the picture it misses."
            lede="A 3-way match checks the purchase order, the receipt and the invoice. It misses contract and rate deviations, services billed but never confirmed, missing proof of work and freight overbilling. Run the same invoice both ways and see what changes."
          />
          <AuditEngine />
        </div>
      </section>

      <section className="light">
        <div className="in">
          <Head
            eyebrow="What each source proves"
            title="Six layers of financial assurance."
            lede="Every charge can be traced back to an agreement, to operational execution or to documented activity. The three added sources are captured while the work happens, so finance checks against evidence instead of reconstructing it."
          />
          <Caps
            items={[
              { title: "Purchase order", body: "Quantities, unit prices, item codes, taxes and delivery schedules, checked automatically. Mismatches go to the right reviewer." },
              { title: "Contract", body: "Negotiated pricing, validity, scope, tolerances and service conditions. Any deviation from agreed terms is flagged in seconds." },
              { title: "GRN / SRN", body: "Received quantities, damages, shortages and accepted values. The end of 'short received, full invoiced'." },
              { title: "Proof of work", body: "For services: billed hours, activities, deliverables and milestones against submitted evidence from the field." },
              { title: "Confirmations", body: "Supplier acknowledgements, operational and dispatch confirmations. What was confirmed is what gets billed." },
              { title: "Invoice", body: "A deep audit of the invoice itself: structure, values, tax accuracy, item mapping, duplicates and compliance." },
            ]}
          />
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Source checked</th>
                  <th>2-way</th>
                  <th>3-way</th>
                  <th className="hl">6-way</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Purchase order", 1, 1],
                  ["Invoice", 1, 1],
                  ["GRN / SRN", 0, 1],
                  ["Contract", 0, 0],
                  ["Proof of work", 0, 0],
                  ["Confirmations", 0, 0],
                ].map(([n, a, b]) => (
                  <tr key={n as string}>
                    <td>{n as string}</td>
                    <td className={a ? "y" : "x"}>{a ? "✓" : "–"}</td>
                    <td className={b ? "y" : "x"}>{b ? "✓" : "–"}</td>
                    <td className="hl y">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="explore">
        <div className="in">
          <Head
            eyebrow="End-to-end intelligence across the invoice lifecycle"
            title="Audit thousands of invoices with the effort of reviewing a few."
            lede="Pick a part of Invoice Hub to see what it does, then look at the screen your finance team would use."
          />
          <Explorer
            label="Invoice Hub capabilities"
            tabs={[
              {
                id: "report",
                label: "Audit report",
                title: "The AI audit report",
                tagline: "Every finding, fully accounted for.",
                points: [
                  "Every document in the transaction in one structured view",
                  "What matched, what didn't, and the evidence behind each finding",
                  "Plain-language explanations of each discrepancy",
                  "Traceable back to its source before you approve",
                ],
                screen: <AuditReport />,
              },
              {
                id: "review",
                label: "Review workspace",
                title: "Review every record in one workspace",
                tagline: "No switching between systems to find the evidence.",
                points: [
                  "Invoice, contract, PO, receipt, proof of work and confirmations side by side",
                  "Approve, dispute or reject in place",
                  "Mentions, comments and a full audit trail",
                  "Every decision recorded against the invoice",
                ],
                screen: <Review />,
              },
              {
                id: "tol",
                label: "Tolerances",
                title: "Set your preferred variance tolerance",
                tagline: "Spend review time on exceptions that matter.",
                points: [
                  "Tolerance levels for price and quantity variances",
                  "Minor deviations inside tolerance auto-approve",
                  "Issues outside tolerance are flagged for review",
                  "Duplicate detection on every invoice",
                ],
                look: {
                  title: "One line outside tolerance.",
                  body: "Product B is billed for two units against one ordered and received. The $500 variance is flagged; the other lines pass.",
                },
                screen: <Tolerance />,
              },
              {
                id: "appr",
                label: "Approvals",
                title: "Smart approval workflows",
                tagline: "Take the bottlenecks out of approvals.",
                points: [
                  "Rules by amount, location, vendor or department",
                  "Multi-level routing by organisational structure, tolerance limits and roles",
                  "Add or remove approvers and define who signs off on what",
                  "Review, approve and resolve from your phone",
                ],
                screen: <Approvals />,
              },
              {
                id: "cap",
                label: "AI capture",
                title: "Go hands-free with AI invoice capture",
                tagline: "No manual data entry.",
                points: [
                  "Extract data from PDFs, scans, emails and images",
                  "Invoice numbers, suppliers, dates, line items, taxes and totals",
                  "Any invoice converted into a standardised PDF",
                  "Coding suggestions and invoice pairing",
                ],
                screen: <Capture />,
              },
              {
                id: "life",
                label: "Payables and receivables",
                title: "Manage both sides of the invoice lifecycle",
                tagline: "From draft to validation, approval, dispute and payment.",
                points: [
                  "Receivables and payables in one view",
                  "Status of every invoice in real time",
                  "Disputes tracked to resolution",
                  "A complete audit trail, ready for compliance",
                ],
                screen: <Lifecycle />,
              },
            ]}
          />
        </div>
      </section>

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="Built on operational truth"
              title="Financial accuracy requires operational alignment."
              lede="Invoices become trustworthy only when procurement records, operational execution and financial validation line up. Invoice Hub sits where they meet."
            />
            <AlongsideErp
              erp={["Accounts payable and payment", "General ledger", "Purchase order and goods receipt records"]}
              sw={["Contract terms from the Source to Pay award", "Proof of work and confirmations from Control Tower", "The 6-way audit, exceptions and approvals"]}
            />
          </div>
          <div data-r style={d(2)}>
            <div className="caught">
              <p className="wl-lab">Caught before payment</p>
              <ol>
                {[
                  "Rates that deviate from the contract",
                  "Charges for service not confirmed as delivered",
                  "Duplicate and resubmitted invoices",
                  "Unsupported surcharges and accessorials",
                  "Quantity and weight mismatches",
                ].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="in">
          <FlowSteps
            label="How an invoice moves through Invoice Hub"
            steps={[
              { t: "Invoice received", s: "Captured from PDF, email, scan or e-invoice, and converted to a standard PDF." },
              { t: "6-way AI audit", s: "Checked against PO, contract, receipt, proof of work, confirmations and itself." },
              { t: "Exceptions routed", s: "Only discrepancies outside tolerance reach a reviewer, with the evidence attached." },
              { t: "Buyer approval", s: "Approval rules by amount, location, vendor or department, from desk or phone." },
              { t: "Approved to AP", s: "The approved invoice posts to your ERP's accounts payable for payment." },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="in">
          <Head eyebrow="Native AI" title="AI in every step of the audit." />
          <NativeAi
            items={[
              { label: "6-way AI audit engine" },
              { label: "Plain-language discrepancy explanations" },
              { label: "Audit report with evidence per finding" },
              { label: "Coding suggestions and invoice pairing" },
              { label: "Duplicate detection" },
            ]}
          />
          <p className="note">
            Swyftflo publishes a 70% cut in invoice processing time with AI-driven auditing. Results depend on invoice volumes, data quality and
            how much of the evidence is captured in Swyftflo.
          </p>
        </div>
      </section>

      <CopyrightNotice inline />

      <section className="light">
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs["invoice-hub"]} />
        </div>
      </section>

      <CtaBand
        title="Run a month of your invoices through a 6-way audit."
        lede="Share a sample of recent invoices with their POs and contracts. We'll show you what a 6-way audit would have flagged, and what it would take to capture the evidence going forward."
        label="Book an invoice audit demo"
        list={["Sample audit on your own invoices", "Tolerance and approval rules drafted", "ERP accounts payable integration outline", "Where proof of work will come from", "A view of payables and receivables"]}
      />

      <Related current="invoice-hub" />
    </>
  );
}
