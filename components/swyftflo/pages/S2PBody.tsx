import type { CSSProperties } from "react";
import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { Explorer } from "../Explorer";
import { AiChat, AppFrame, Pill, Tile, Typing } from "../screens";
import { Switcher } from "../Switcher";
import { AlongsideErp, Agents, Caps, CtaBand, d, Facts, Faq, Head, Hero, Includes, Layers, NativeAi, Related, PhotoStrip } from "../parts";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/* ---------------------------------------------------------------- screens */

function BidEvaluation() {
  const rows: [string, string, string, string][] = [
    ["Unit price", "$2,400", "$2,250", "$2,180"],
    ["Lead time", "21 days", "14 days", "28 days"],
    ["Supplier rating", "4.2", "4.7", "3.9"],
    ["Technical score", "82", "91", "76"],
    ["Commercial score", "74", "88", "90"],
    ["Committee view", "3 of 6", "5 of 6", "2 of 6"],
  ];
  return (
    <AppFrame title="RFQ-2026-118 · Packaging film" label="Illustration of three supplier bids compared side by side, with Supplier B marked as best value by the AI" rail={2}>
      <div className="ttl">
        Bid evaluation, side by side <small>Round 3 of 3</small>
      </div>
      <div className="chips">
        {["RFI", "EOI", "RFQ", "RFP", "Tender", "Reverse auction"].map((c) => (
          <span key={c} className={`chip${c === "RFQ" ? " on" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="card-f" style={{ overflowX: "auto" }}>
        <table className="ftab">
          <thead>
            <tr>
              <th />
              <th>Supplier A</th>
              <th className="best">Supplier B</th>
              <th>Supplier C</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td style={{ color: "var(--app-muted)" }}>{r[0]}</td>
                <td>{r[1]}</td>
                <td className="best">{r[2]}</td>
                <td>{r[3]}</td>
              </tr>
            ))}
            <tr>
              <td style={{ color: "var(--app-muted)" }}>AI recommendation</td>
              <td />
              <td className="best">
                <span className="fbtn em">✦ Best value</span>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <AiChat title="Negotiation · Supplier B">
        <div className="bub u">Can you hold $2,250 if we commit to monthly volumes for Q3?</div>
        <div className="bub a">
          Agreed at <b>$2,250</b> with a 14-day lead time. Revised quote attached to the event.
        </div>
        <Typing />
      </AiChat>
    </AppFrame>
  );
}

function Requisitions() {
  const prs: [string, string, "wr" | "ok" | "er" | "in", string][] = [
    ["PR-2026-0001", "Office supplies", "wr", "Pending"],
    ["PR-2026-0451", "IT equipment", "ok", "Approved"],
    ["PR-2026-3201", "Chemicals", "ok", "Approved"],
    ["PR-2026-3202", "Office supplies", "er", "Rejected"],
    ["PR-2026-3215", "Freight, Colombo to Dubai", "in", "Imported from ERP"],
  ];
  return (
    <AppFrame title="Purchase requisitions" label="Illustration of a purchase requisition list with statuses and a multi-level approval in progress" rail={1}>
      <div className="ttl">
        Purchase requisitions{" "}
        <span style={{ display: "flex", gap: 6 }}>
          <span className="fbtn">Import from ERP</span>
          <span className="fbtn em">+ New PR</span>
        </span>
      </div>
      <div className="tiles t3">
        <Tile h="Open requests" k="42" s="this month" />
        <Tile h="Awaiting approval" k="9" s="3 escalated" tone="wr" />
        <Tile h="Average approval" k="1.4" s="days" tone="ok" />
      </div>
      <div className="card-f">
        <div className="h">
          Requests <small>All · In progress · Waiting on me</small>
        </div>
        {prs.map(([id, t, tone, st]) => (
          <div className="row" key={id}>
            <span>
              <b>{id}</b> · {t}
            </span>
            <Pill tone={tone}>{st}</Pill>
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">
          PR-2026-0001 · Chemical supplies, production <small>$4,500 · Raw materials</small>
        </div>
        <div className="row">
          <span>1 · Department head</span>
          <Pill tone="ok">Approved</Pill>
        </div>
        <div className="row">
          <span>2 · Category manager, raw materials</span>
          <Pill tone="wr">Waiting</Pill>
        </div>
        <div className="row">
          <span>3 · Finance, above $4,000</span>
          <Pill tone="nt">Next</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

function SourcingEvent() {
  return (
    <AppFrame title="New sourcing event" label="Illustration of AI generating an RFQ from a one-line requirement and suggesting suppliers" rail={2}>
      <div className="card-f ai">
        <div className="h">Describe what you need</div>
        <div className="bub u" style={{ maxWidth: "100%" }}>
          Need 2,000 cotton T-shirts for Q2, printed, delivered to Colombo.
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: "var(--sf)", fontWeight: 700 }}>✦ Generating RFQ…</div>
        <div className="prog live" style={{ marginTop: 6 }}>
          <i />
        </div>
      </div>
      <div className="card-f">
        <div className="h">
          Draft RFQ <small>from your last 4 apparel events</small>
        </div>
        <div className="row">
          <span>Item</span>
          <b>T-shirt, 100% cotton, 180 gsm</b>
        </div>
        <div className="row">
          <span>Quantity</span>
          <b>2,000 units</b>
        </div>
        <div className="row">
          <span>Delivery</span>
          <b>Colombo, by 30 Apr</b>
        </div>
        <div className="row">
          <span>Evaluation</span>
          <b>Price 50 · Quality 30 · Lead time 20</b>
        </div>
      </div>
      <div className="card-f">
        <div className="h">
          Suggested suppliers <small>by category and sourcing history</small>
        </div>
        <div className="row">
          <span>Grapher Holding · Rome</span>
          <Pill tone="ok">Rated 4.6</Pill>
        </div>
        <div className="row">
          <span>EastPoint Trading · Rome</span>
          <Pill tone="ok">Rated 4.4</Pill>
        </div>
        <div className="row">
          <span>16 more suppliers in this category</span>
          <span className="fbtn em">Send to 18 suppliers</span>
        </div>
      </div>
    </AppFrame>
  );
}

function Evaluation() {
  const stages = ["Pre-qualification", "Technical", "Commercial", "Final decision"];
  return (
    <AppFrame title="Tender T-2026-07 · Evaluation" label="Illustration of a tender evaluation: stages, bidder counts and a bid comparison with committee votes and AI scoring" rail={2}>
      <div className="jr" style={{ gridTemplateColumns: "repeat(4, minmax(0,1fr))", "--p": 0.34 } as CSSProperties}>
        <span className="fill" />
        {stages.map((s, i) => (
          <span key={s} className={`st${i === 0 ? " done" : i === 1 ? " now" : ""}`}>
            <i />
            <b>{s}</b>
          </span>
        ))}
      </div>
      <div className="tiles">
        <Tile h="Total bidders" k="25" />
        <Tile h="Evaluated" k="18/25" tone="sf" />
        <Tile h="Shortlisted" k="5" tone="ok" />
        <Tile h="Rejected" k="2" tone="er" />
      </div>
      <div className="card-f" style={{ overflowX: "auto" }}>
        <div className="h">Compare bids</div>
        <table className="ftab">
          <thead>
            <tr>
              <th />
              <th className="best">BD-04323232</th>
              <th>BD-09247243</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Bidder rating", "4.4 ★", "4.4 ★"],
              ["Bid total", "$2,250", "$2,400"],
              ["Votes in favour", "5", "3"],
              ["AI scoring", "80.9", "76.2"],
              ["Product specification", "$1,600", "$1,750"],
              ["Delivery and logistics", "$450", "$450"],
              ["Additional charges", "$200", "$200"],
            ].map((r) => (
              <tr key={r[0]}>
                <td style={{ color: "var(--app-muted)" }}>{r[0]}</td>
                <td className="best">{r[1]}</td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppFrame>
  );
}

function Negotiation() {
  const pts = [100, 96, 91, 84, 80];
  const W = 300;
  const H = 80;
  const path = pts.map((v, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * W} ${H - ((v - 76) / 26) * H}`).join(" ");
  return (
    <AppFrame title="RQ-23253L · Wayline Co" label="Illustration of a negotiation chat with a supplier and a chart of the best bid falling across rounds and a reverse auction" rail={2}>
      <div className="card-f">
        <div className="h">
          Best bid by round <small>every round kept on the record</small>
        </div>
        <svg viewBox={`-6 -6 ${W + 12} ${H + 26}`} style={{ width: "100%", height: 110, display: "block" }} aria-hidden="true">
          <path d={path} fill="none" stroke="var(--sf)" strokeWidth="2.4" />
          {pts.map((v, i) => (
            <circle key={i} cx={(i / (pts.length - 1)) * W} cy={H - ((v - 76) / 26) * H} r={i === pts.length - 1 ? 5 : 3.5} fill={i === pts.length - 1 ? "#e3a008" : "var(--sf)"} />
          ))}
          {["Quote", "Round 2", "Round 3", "Reverse auction", "Award"].map((l, i) => (
            <text key={l} x={(i / 4) * W} y={H + 18} fontSize="10" textAnchor={i === 0 ? "start" : i === 4 ? "end" : "middle"} fill="#6b7190">
              {l}
            </text>
          ))}
        </svg>
      </div>
      <div className="card-f">
        <div className="h">Conversation</div>
        <div className="msgs">
          <div className="bub u">Can we revise the price to $11.90/unit if we keep the same lead time?</div>
          <div className="bub a">
            Yes, we can agree to <b>$11.90</b>.
          </div>
          <div className="bub u">Great. One more thing: can you reduce the lead time to 15 days?</div>
          <div className="bub a">Update requested · Bid rate $12.30 → $11.90 · Lead time 18 → 15 days</div>
        </div>
      </div>
    </AppFrame>
  );
}

function Suppliers() {
  return (
    <AppFrame title="Supplier management" label="Illustration of supplier profiles with onboarding status, compliance and performance" rail={3}>
      <div className="ttl">
        Suppliers <span className="fbtn em">+ Add supplier</span>
      </div>
      <div className="chips">
        <span className="chip on">Approved 128</span>
        <span className="chip">Pending 9</span>
        <span className="chip">In revision 4</span>
        <span className="chip">Rejected 2</span>
      </div>
      <div className="card-f">
        {[
          ["Silverline Limited", "Packaging · 14 awards", "ok", "Approved", "96%"],
          ["Northbridge Systems", "IT hardware · 6 awards", "ok", "Approved", "91%"],
          ["BluePeak Packaging", "Packaging · onboarding", "wr", "Documents due", "—"],
          ["Iconic Capital Ltd", "Services · re-certifying", "in", "In revision", "88%"],
        ].map(([n, s, tone, st, otif]) => (
          <div className="row" key={n}>
            <span>
              <b>{n}</b> · {s}
            </span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "var(--app-muted)", fontSize: 10 }}>On time {otif}</span>
              <Pill tone={tone as "ok" | "wr" | "in"}>{st}</Pill>
            </span>
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">
          Silverline Limited · compliance <small>own organisation, 6 users</small>
        </div>
        <div className="row">
          <span>Business registration</span>
          <Pill tone="ok">Valid</Pill>
        </div>
        <div className="row">
          <span>ISO 9001 certificate</span>
          <Pill tone="wr">Expires in 30 days</Pill>
        </div>
        <div className="row">
          <span>Bank details verified</span>
          <Pill tone="ok">Verified</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

function Contracts() {
  return (
    <AppFrame title="Contracts" label="Illustration of an AI contract summary with obligations and items flagged for review" rail={4}>
      <div className="chips">
        {["Contract lifecycle", "Pricing and commercials", "Central repository", "Smart contracts"].map((c, i) => (
          <span key={c} className={`chip${i === 0 ? " on" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="card-f ai">
        <div className="h">
          ✦ Contract #144 · AI summary <small>Silverline Limited · 24 pages</small>
        </div>
        <div className="row">
          <span>Term</span>
          <b>1 Jan 2026 to 31 Dec 2027</b>
        </div>
        <div className="row">
          <span>Agreed rate</span>
          <b>$400.00 per unit, fixed for 12 months</b>
        </div>
        <div className="row">
          <span>Tolerance</span>
          <b>±2% quantity, 0% price</b>
        </div>
        <div className="row">
          <span>Key obligation</span>
          <b>Delivery within 14 days of PO</b>
        </div>
      </div>
      <div className="card-f warn">
        <div className="h">
          Contract agent insights <Pill tone="er">Needs your review</Pill>
        </div>
        <div className="row">
          <span>Missing contract · 7 related records</span>
          <Pill tone="wr">Review</Pill>
        </div>
        <div className="row">
          <span>Contract #151 · renewal terms missing</span>
          <Pill tone="wr">Review</Pill>
        </div>
        <div className="row">
          <span>Contract #138 · expires in 45 days</span>
          <Pill tone="in">Plan renewal</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

function Invoicing() {
  return (
    <AppFrame title="S2P invoice management" label="Illustration of supplier invoices arriving through e-invoicing networks and files, validated and paired with their purchase orders" rail={5}>
      <div className="card-f">
        <div className="h">
          Receive compliant invoices <small>any channel, any format</small>
        </div>
        <div className="chips">
          {["KSeF", "Peppol", "Tungsten Network", "SDI", "PDF", "sFTP", "NemHandel"].map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="card-f bad">
        <div className="h">
          Invoice-2193 · Ocean freight <Pill tone="er">5 discrepancies found</Pill>
        </div>
        <div className="row">
          <span>Paired with</span>
          <b>PO-2026-0882 · Contract #144</b>
        </div>
        <div className="row">
          <span>Due date</span>
          <b>15 May 2026</b>
        </div>
        <div className="row">
          <span>Amount</span>
          <b>USD 1,550.00</b>
        </div>
      </div>
      <div className="card-f">
        <div className="h">Checks</div>
        {[
          ["Validation", "ok", "Done"],
          ["Enrichment", "ok", "Done"],
          ["Coding suggestions", "in", "GL 5110 · Freight"],
          ["Invoice pairing", "ok", "Matched"],
        ].map(([a, t, b]) => (
          <div className="row" key={a}>
            <span>{a}</span>
            <Pill tone={t as "ok" | "in"}>{b}</Pill>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

/* ---------------------------------------------------------------- event types */

function EventPane({ when, get, example }: { when: string; get: string[]; example: string }) {
  return (
    <div className="two" style={{ marginTop: 28, gap: 32 }}>
      <div>
        <p className="lede" style={{ marginTop: 0 }}>
          {when}
        </p>
        <p className="note" style={{ marginTop: 18 }}>
          <b style={{ color: "var(--fg)" }}>For example:</b> {example}
        </p>
      </div>
      <div className="cap">
        <h3>What you get</h3>
        <ul>
          {get.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- page */

export function S2PBody() {
  return (
    <>
      <Hero
        current="source-to-pay"
        crumb="Source to Pay"
        eyebrow="Swyftflo Source to Pay"
        title={
          <>
            From requirement to award, <em>with suppliers in the room.</em>
          </>
        }
        lede="Swyftflo Source to Pay runs the part of procurement that happens between companies: inviting suppliers, collecting and comparing bids, negotiating and awarding. Every party works in one governed record instead of inbox threads, and every award carries a complete, defensible audit trail."
        primary={{ label: "Book a sourcing demo", href: "#book" }}
        secondary={{ label: "See a bid evaluation", href: "#explore" }}
        note={
          <>
            <b>About the names.</b> Swyftflo calls this product Source to Pay, or S2P. It covers strategic sourcing and extends into
            procure to pay, from order to payment readiness, with the supplier connected throughout.
          </>
        }
        visual={
          <figure style={{ margin: 0 }}>
            <BidEvaluation />
            <figcaption className="caption">Illustration of a Swyftflo bid evaluation, simplified. Sample data.</figcaption>
          </figure>
        }
      />

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="Alongside your ERP"
              title="Source-to-pay is where spend turns from blind to managed."
              lede={[
                "When procurement is fragmented, supplier decisions, pricing, approvals, contracts, delivery evidence and invoice checks end up in different silos. Pricing gaps go unnoticed and operations deal with the fallout.",
                "S2P extends your ERP; it doesn't replace it. Requests can start in the ERP and come back as awards ready for PO creation. The ERP keeps the record. Swyftflo hosts the supplier conversation.",
              ]}
            />
            <AlongsideErp
              erp={["Requisition approval and budget check", "Purchase order, created from the award", "Goods receipt posting", "Accounts payable and payment"]}
              sw={["RFx events, bids and evaluation", "Negotiation rounds and reverse auctions", "Award, contract and pricing agreements", "Supplier onboarding and performance"]}
            />
          </div>
          <Includes
            items={[
              { title: "Purchase requisitions", body: "Structured requests for products, services and logistics, routed through approvals by category and department." },
              { title: "Strategic sourcing", body: "RFQs, RFPs, RFIs, expressions of interest and tenders in one sourcing environment." },
              { title: "Structured evaluation", body: "Bids side by side, evaluation committees, and supplier, technical and commercial scoring." },
              { title: "Negotiation", body: "Conversational rounds, reverse auctions and compound bidding, inside the event." },
              { title: "Supplier management", body: "Onboarding, profiles, compliance records and performance monitoring." },
              { title: "Contracts and invoices", body: "A central contract repository, rate agreements, smart contracts, and invoices checked in context." },
            ]}
          />
        </div>
      </section>

      <PhotoStrip
        items={[
          { file: "s2p-office", alt: "A buyer at a desk raising a purchase request on screen", cap: "A request raised in one place" },
          { file: "s2p-team", alt: "A procurement team gathered around a laptop", cap: "Buyers, requesters and approvers on one record" },
        ]}
      />

      <section id="explore">
        <div className="in">
          <Head
            eyebrow="One procurement lifecycle"
            title="Connected from the first request to the final payment."
            lede="Every stage stays on the same record, so the requirement, the bids, the negotiation, the award and the invoice all point at each other. Pick a stage to see what it does, then look at the screen your team would use."
          />
          <Explorer
            label="Source to Pay stages"
            tabs={[
              {
                id: "pr",
                label: "Requisitions",
                title: "Requisitions",
                tagline: "Structured requests, approved by the right people.",
                points: [
                  "Requests for products, services, logistics and operational needs",
                  "Created in Swyftflo or imported from your ERP through the API",
                  "Multi-level approvals by category and department",
                  "Real-time status, escalations and dependencies",
                ],
                look: {
                  title: "Every request, and where it is stuck.",
                  body: "Status, approvals and escalations sit on one list. Opening a request shows its approval chain and who is holding it up.",
                },
                screen: <Requisitions />,
              },
              {
                id: "src",
                label: "Sourcing events",
                title: "Sourcing events",
                tagline: "One environment for every way of going to market.",
                points: [
                  "RFI and EOI to prequalify, RFQ to price, RFP to propose, tenders to govern",
                  "AI drafts the requirement from sourcing context and history",
                  "Supplier suggestions by category and track record",
                  "Configurable workflows and wizards your team builds itself",
                ],
                look: {
                  title: "A one-line need becomes a structured RFQ.",
                  body: "The AI drafts items, quantities, delivery and evaluation weights from your past events. You edit, then send to suggested suppliers in one step.",
                },
                screen: <SourcingEvent />,
              },
              {
                id: "eval",
                label: "Evaluation",
                title: "Evaluation",
                tagline: "A structured decision, not a spreadsheet shuffle.",
                points: [
                  "Pre-qualification, technical, commercial and final stages",
                  "Committees of procurement, technical, finance and business evaluators",
                  "Price, delivery, ratings, specifications, AI scores and votes side by side",
                  "Every score and comment kept on the event",
                ],
                look: {
                  title: "The full picture for each bid.",
                  body: "Bidder ratings, bid totals, committee votes and AI scoring line up row by row, so differences that matter stand out.",
                },
                screen: <Evaluation />,
              },
              {
                id: "neg",
                label: "Negotiation",
                title: "Negotiation",
                tagline: "Conversational rounds, inside the sourcing event.",
                points: [
                  "Chat-style negotiation with each supplier, on the record",
                  "Pricing revisions and bid adjustments accepted or rejected in place",
                  "Reverse auctions and compound bidding",
                  "Every quote, revision and rank kept for the audit trail",
                ],
                look: {
                  title: "Where the savings came from.",
                  body: "The chart shows the best bid falling round by round, through a reverse auction to the award. Each step links back to the conversation that produced it.",
                },
                screen: <Negotiation />,
              },
              {
                id: "sup",
                label: "Suppliers",
                title: "Supplier management",
                tagline: "Turn supplier data into supplier intelligence.",
                points: [
                  "Frictionless onboarding, with each supplier as its own organisation",
                  "Centralised profiles and compliance records",
                  "Performance monitoring across every award",
                  "AI-assisted supplier intelligence",
                ],
                screen: <Suppliers />,
              },
              {
                id: "con",
                label: "Contracts",
                title: "Contracts",
                tagline: "Contracts without the complexity.",
                points: [
                  "Contract lifecycle management and a central repository",
                  "Pricing and rate agreements, renewals and obligations",
                  "Smart contracts that carry terms into execution",
                  "AI summaries of key obligations and items to review",
                ],
                look: {
                  title: "From contract documents to actionable terms.",
                  body: "The AI reads a contract into rates, tolerances and obligations. Those terms are what Invoice Hub later audits each invoice against.",
                },
                screen: <Contracts />,
              },
              {
                id: "inv",
                label: "Invoicing",
                title: "Invoicing and validation",
                tagline: "From purchase order to invoice, without the disconnect.",
                points: [
                  "Invoices received through e-invoicing networks, PDF or sFTP",
                  "Validation, enrichment, coding suggestions and invoice pairing",
                  "Side-by-side comparison with PO, contract and delivery records",
                  "Multi-level approval workflows and finance collaboration",
                ],
                screen: <Invoicing />,
              },
            ]}
          />
        </div>
      </section>

      <section className="light" id="events">
        <div className="in">
          <Head
            eyebrow="Five ways to go to market"
            title="Pick the event that fits the decision."
            lede="All five run in the same environment, for products, services and freight, so suppliers learn one way of responding and you keep one history."
          />
          <div style={{ marginTop: 34 }}>
            <Switcher
              label="Sourcing event types"
              options={[
                {
                  id: "rfi",
                  label: "RFI",
                  content: (
                    <EventPane
                      when="A request for information builds sourcing intelligence before procurement begins: supplier qualifications, operational capabilities and what the market can offer."
                      get={["Supplier capability profiles", "A qualified long-list", "Market insight before you commit to a scope"]}
                      example="mapping which logistics providers can handle temperature-controlled freight on a new lane."
                    />
                  ),
                },
                {
                  id: "eoi",
                  label: "EOI",
                  content: (
                    <EventPane
                      when="An expression of interest identifies the right suppliers early through structured prequalification."
                      get={["Interested, prequalified suppliers", "Compliance documents up front", "A shortlist ready to invite"]}
                      example="inviting packaging converters to register interest before a two-year supply tender."
                    />
                  ),
                },
                {
                  id: "rfq",
                  label: "RFQ",
                  content: (
                    <EventPane
                      when="A request for quotation drives competitive pricing through central quote management and structured comparison of suppliers."
                      get={["Comparable quotes in one model", "Negotiation rounds and reverse auction", "An award ready for PO creation"]}
                      example="pricing 5,000 units a month of aluminium 5052 from three approved suppliers."
                    />
                  ),
                },
                {
                  id: "rfp",
                  label: "RFP",
                  content: (
                    <EventPane
                      when="A request for proposal invites suppliers to propose a solution: scope, methodology, commercial model and delivery approach."
                      get={["Technical and commercial proposals", "Committee scoring by criterion", "A defensible choice of approach"]}
                      example="selecting a facilities maintenance provider across four sites."
                    />
                  ),
                },
                {
                  id: "tender",
                  label: "Tender",
                  content: (
                    <EventPane
                      when="A tender runs an enterprise-grade process with structured evaluation, transparent governance and controlled supplier engagement."
                      get={["Staged evaluation from pre-qualification to final decision", "Evaluation committees and assigned evaluators", "A full audit trail of every step"]}
                      example="a public or group-level contract where the process itself must be provable."
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="in two mid">
          <div>
            <Head
              eyebrow="Intelligent procurement"
              title="AI that does the hard work, and shows its reasons."
              lede="AI is built into each stage rather than added on. It drafts, suggests and summarises; your team decides."
            />
            <Agents
              items={[
                { title: "Requirement generation", body: "Structured requirements from sourcing context, past activity and operational needs." },
                { title: "Supplier recommendations", body: "The most suitable suppliers by category, rating, pricing and committee history." },
                { title: "AI-assisted bid scoring", body: "Scores that combine price, delivery, technical fit and supplier performance." },
                { title: "Contract summaries", body: "Key obligations, missing terms and items that need review, pulled from the document." },
              ]}
            />
          </div>
          <figure style={{ margin: 0, ...d(2) }} data-r>
            <AppFrame title="AI picks · RFQ-2026-118" label="Illustration of AI supplier recommendations ranked by rating and price, and by committee votes" rail={2}>
              <div className="card-f ai">
                <div className="h">
                  ✦ Best on vendor rating and pricing <small>Ask more</small>
                </div>
                <div className="row">
                  <span>
                    <b>Silverline Limited</b> · BD-432423
                  </span>
                  <b>$2,550</b>
                </div>
              </div>
              <div className="card-f">
                <div className="h">Best on committee votes</div>
                <div className="row">
                  <span>BluePeak Packaging · BD-26540</span>
                  <b>$2,650</b>
                </div>
                <div className="row">
                  <span>Northbridge Systems · BD-36490</span>
                  <b>$2,700</b>
                </div>
              </div>
              <AiChat>
                <div className="bub u">Why Silverline over BluePeak?</div>
                <div className="bub a">
                  Silverline is <b>$100 lower</b> with a 4.7 rating and on-time delivery on its last 14 awards. BluePeak has two more committee
                  votes on technical quality.
                </div>
              </AiChat>
            </AppFrame>
            <figcaption className="caption">Illustration of AI-assisted supplier recommendations. Sample data.</figcaption>
          </figure>
        </div>
      </section>

      <section className="light">
        <div className="in">
          <Head
            eyebrow="Procure anything"
            title="Products, services and freight, without boundaries."
            lede="One system for both product and service procurement, with purpose-built workflows for logistics buying."
          />
          <Caps
            items={[
              { title: "Any product", points: ["Raw materials, packaging and finished goods", "Catalogue extraction from supplier files", "Quantities, specifications and delivery schedules"] },
              { title: "Any service", points: ["Scope, methodology and commercial model in RFPs", "Milestones and deliverables in the contract", "Proof of work captured during delivery"] },
              { title: "Logistics procurement", points: ["Ocean freight, air freight and transportation", "Shipment-driven procurement", "Freight rate negotiation and multi-carrier evaluation"] },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="in two">
          <div>
            <Head
              eyebrow="What sets it apart"
              title="Suppliers work in the same record you do."
              lede="Most procurement tools are built for the buyer alone. Swyftflo puts the supplier inside the event, so quotes, revisions and confirmations arrive in a structure you can compare, not in an attachment you have to retype."
            />
          </div>
          <Layers
            items={[
              { who: "Suppliers", title: "Every supplier is its own organisation", body: "With its own users, history and performance record across every event it joins." },
              { who: "Off-platform", title: "No account? It still lands in the record", body: "Suppliers without an account can respond, and their quotes land in the same quotation model." },
              { who: "Your team", title: "Workflows you configure yourselves", body: "Any procurement, with workflows and custom wizards your teams create without code." },
              { who: "Downstream", core: true, title: "The award becomes the contract", body: "Agreed rates and terms carry forward. Invoice Hub audits each invoice against them." },
            ]}
          />
        </div>
      </section>

      <section className="light">
        <div className="in">
          <Head eyebrow="Where source-to-pay starts driving performance" title="Faster cycles, less manual work, fewer invoice errors." />
          <Facts
            items={[
              { b: "3.5x", s: "faster sourcing cycles, from RFQ to award" },
              { b: "60%", s: "less manual procurement effort" },
              { b: "90%", s: "faster to create and approve purchase requests" },
              { b: "70%", s: "less invoice processing time" },
            ]}
            note="Figures as published by Swyftflo. Actual results depend on scope, data quality and adoption."
          />
          <NativeAi
            items={[
              { label: "Requirement generation from sourcing context" },
              { label: "Supplier recommendations" },
              { label: "AI-assisted bid scoring" },
              { label: "Contract summaries and key obligations" },
              { label: "Catalogue extraction" },
            ]}
          />
        </div>
      </section>

      <CopyrightNotice inline />

      <section>
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs["source-to-pay"]} />
        </div>
      </section>

      <CtaBand
        title="See your next sourcing event run in Swyftflo."
        lede="Bring a real requirement. We'll set it up as an event, invite sample suppliers, and walk you from bids to award and back to your ERP."
        label="Book a sourcing demo"
        list={["Your requirement as a live RFQ or tender", "Bid comparison and committee scoring", "Negotiation rounds and reverse auction", "Award flowing back to your ERP", "Supplier onboarding plan"]}
      />

      <Related current="source-to-pay" />
    </>
  );
}
