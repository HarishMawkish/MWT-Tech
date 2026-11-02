import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { products } from "../data";

import { AlongsideErp, Caps, CtaBand, d, Facts, Faq, Head, Hero, Integrations, Layers, Phases, ProductIndex } from "../parts";
import { StartPicker } from "../StartPicker";
import { ThreadExplorer } from "../ThreadExplorer";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/** Hero illustration: your enterprise, your trading network, and the thread between them. */
function BrokenThread() {
  return (
    <figure style={{ margin: 0 }}>
      <div
        className="thread-fig"
        role="img"
        aria-label="Your enterprise's systems of record on one side, independent trading partners on the other. Today the work between them runs on email, chat, spreadsheets, PDFs and calls. Swyftflo gives every party one shared, role-based workspace per transaction, connected to the systems already in place by bi-directional APIs."
      >
        <div className="tcol">
          <span className="lab">Your enterprise</span>
          <h4>Systems of record</h4>
          {["ERP and finance", "WMS and inventory", "Master data", "Accounts payable"].map((x) => (
            <span className="it" key={x}>
              <i />
              {x}
            </span>
          ))}
          <span style={{ marginTop: "auto", fontSize: 11.5, color: "var(--muted)" }}>Strong inside one organisation.</span>
        </div>
        <div className="tmid">
          <p className="noise" aria-hidden="true">
            Email, chat apps, spreadsheets, PDFs and calls
          </p>
          <p className="x">Today: no single source of truth, late updates, manual reconciliation</p>
          <div className="hubcard float">
            <b>swyftflo</b>
            <span>One shared, role-based workspace per transaction</span>
            <span className="six" aria-hidden="true">
              {products.map((p) => p.short).join("  ·  ")}
            </span>
          </div>
          <p className="api">⇅ Bi-directional APIs with the systems already in place</p>
        </div>
        <div className="tcol ext">
          <span className="lab">Your trading network</span>
          <h4>Independent organisations</h4>
          {["Suppliers and factories", "3PLs and forwarders", "Shipping lines and airlines", "Transporters", "Ports, terminals, customs", "Customers and regulators"].map(
            (x) => (
              <span className="it" key={x}>
                <i />
                {x}
              </span>
            ),
          )}
        </div>
      </div>
      <figcaption className="caption">Based on Swyftflo&rsquo;s 2026 capability overview.</figcaption>
    </figure>
  );
}

/** The Supply Chain Brain: signals in, a living model, specialised agents, four verbs. */
function Brain() {
  const signals = ["ERP and finance", "WMS", "Supplier and partner updates", "AIS, flight and GPS", "Documents", "Email", "External APIs"];
  const agents: [string, string][] = [
    ["Control Tower AI agent", "Detects disruptions, assigns tasks, chases confirmations."],
    ["ETA prediction", "Predicted arrivals that update before delays land."],
    ["Audit intelligence", "6-way validation with clear exception summaries."],
    ["Document and contract AI", "Catalogue extraction, contract processing, categorisation."],
    ["Transport planning", "AI load and route optimisation."],
    ["Reporting and business agents", "Answers and reports from connected data."],
  ];
  return (
    <div className="brain" data-r style={d(1)} role="img" aria-label="Signals from connected systems flow into the Supply Chain Brain, a living model of suppliers, orders, shipments, costs and risks, which powers six kinds of AI agent that predict, detect, recommend and automate.">
      <div className="sig">
        <span className="lab">Signals in</span>
        <div className="chips-d">
          {signals.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <svg className="brain-wire" viewBox="0 0 40 120" preserveAspectRatio="none" aria-hidden="true">
        {[20, 45, 70, 95].map((y) => (
          <path key={y} d={`M0 ${y} C 20 ${y}, 20 60, 40 60`} className="flow" stroke="rgba(52,179,134,.55)" strokeWidth="1.4" fill="none" />
        ))}
      </svg>
      <div className="bcore">
        <div className="bh">
          <div>
            <b>Supply Chain Brain</b>
            <span>A living model of suppliers, orders, shipments, costs and risks</span>
          </div>
        </div>
        <div className="bagents">
          {agents.map(([t, b]) => (
            <div key={t}>
              <b>{t}</b>
              <span>{b}</span>
            </div>
          ))}
        </div>
        <div className="verbs">
          {["Predict", "Detect", "Recommend", "Automate"].map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HubBody() {
  return (
    <>
      <Hero
        crumb="Swyftflo"
        eyebrow="Swyftflo Supply Chain Suite"
        title={
          <>
            Your ERP runs the enterprise. <em>Swyftflo connects what happens between enterprises.</em>
          </>
        }
        lede="Every purchase, shipment and invoice crosses company boundaries. Suppliers, forwarders, carriers, ports, customs and warehouses each run their own systems, so the work between them still moves through email, chat and spreadsheets. Swyftflo gives every party one shared, governed workspace and returns clean, verified results to the systems you already run."
        primary={{ label: "Find your starting point", href: "#start" }}
        secondary={{ label: "See the six products", href: "#products" }}
        note={
          <>
            <b>About the names.</b> Swyftflo is the AI-native supply chain suite. Its six products are Source to Pay, Supply Chain
            Control Tower, Invoice Hub, Spend Intelligence, Authentik and the Transportation Management System (TMS).
          </>
        }
        visual={<BrokenThread />}
      />

      {/* ---- three ideas ---- */}
      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="What it is"
              title="One digital thread across the transaction."
              lede={[
                "ERPs are strong inside one organisation. They were not designed to coordinate the dozens of independent companies a single order passes through. That gap is where delays hide, prices drift and invoices go unchecked.",
                "Swyftflo runs that cross-company work. Each external firm joins as its own organisation, every party sees only what its role needs, and what physically happened becomes the evidence for what gets paid.",
              ]}
            />
          </div>
          <div className="includes" data-r style={d(2)}>
            {[
              { t: "Complements the ERP", b: "The system of record stays exactly where it is. No record or ledger moves out of it; integration is by API." },
              { t: "Every party is native", b: "Suppliers, forwarders and carriers join as their own organisations, with their own users and history." },
              { t: "Evidence decides payment", b: "Proof of work and confirmations captured during execution validate every invoice before it is paid." },
              { t: "AI native to every product", b: "Agents predict, detect, recommend and automate across a living model of your supply chain." },
            ].map((f) => (
              <div key={f.t}>
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- six products ---- */}
      <section id="products">
        <div className="in">
          <Head
            eyebrow="The suite"
            title="Six products. One thread from requirement to approved invoice."
            lede="Each product owns one stage of the transaction and hands its result to the next, so the award in sourcing becomes the contract the invoice is audited against, and every confirmation in execution becomes proof."
          />
          <div className="chev" data-r style={d(3)} aria-label="The stages of a transaction">
            {["Requirement", "Source", "Negotiate", "Award", "Execute", "Track", "Receive", "Audit invoice"].map((s, i) => (
              <span key={s} className={i % 2 ? "k" : undefined}>
                {s}
              </span>
            ))}
            <span className="end">Approved invoice</span>
          </div>
          <ProductIndex />
        </div>
      </section>

      {/* ---- the thread, step by step ---- */}
      <section className="light" id="thread">
        <div className="in">
          <Head
            eyebrow="How Swyftflo fits"
            title="Built to plug in beside the ERP, not to take its place."
            lede="The ERP keeps every record it owns. Swyftflo runs the cross-company work in between and hands the verified result back at each step. Pick a step to see who does what."
          />
          <ThreadExplorer />
          <AlongsideErp
            erp={[
              "Requisitions, approvals and budgets",
              "Purchase order and commitment record",
              "Inventory, receiving and GRN posting",
              "Accounts payable, payment and ledger",
              "Master data and financial controls",
            ]}
            sw={[
              "Supplier collaboration: quotes, rounds and awards in one auditable record",
              "Multi-party execution: one live workspace per PO or shipment",
              "Shared evidence: documents, proof of work and confirmations at the source",
              "Evidence-based audit: invoices tested against what was agreed and delivered",
              "Network intelligence: quotes, delays and charges the ERP never sees",
            ]}
          />
        </div>
      </section>

      {/* ---- every party native ---- */}
      <section>
        <div className="in two">
          <div>
            <Head
              eyebrow="Every party, on one record"
              title="Your partners work in it too, without seeing what isn't theirs."
              lede={[
                "A shipment can touch a factory, a forwarder, a shipping line, two customs brokers, a transporter and your warehouse. Swyftflo brings all of them into the same live record, each on its own terms.",
                "Need-to-know access is the rule: a carrier can confirm milestones without seeing your rates, and finance can see invoices without wading through every chat.",
              ]}
            />
          </div>
          <Layers
            items={[
              { who: "Organisations", title: "Partners onboard as their own tenants", body: "Each supplier or provider joins as its own organisation, with its own users, history and performance record." },
              { who: "Guests", title: "Invited to one shipment by passcode", body: "A one-off partner joins a single shipment with a one-time passcode, no account needed." },
              { who: "Off-platform", title: "Respond without an account", body: "Suppliers without an account can still answer a request, and their response lands in the same record." },
              { who: "Your company", title: "Need-to-know, by role", core: true, body: "Each role sees only the data it is entitled to act on, configured per shipment. Each company is separated at the data layer." },
            ]}
          />
        </div>
      </section>

      {/* ---- AI ---- */}
      <section className="light" id="brain">
        <div className="in">
          <Head
            eyebrow="AI that works across company lines"
            title="On data no single system holds."
            lede="The Supply Chain Brain sits above the whole suite. It absorbs signals from every Swyftflo product and every connected system, and connects them into a living model of your supply chain. Specialised agents work on that model: they don't just report, they act, with people approving what matters."
          />
          <Brain />
          <p className="note">
            Systems of record stay in place. Swyftflo adds the intelligence layer above them. Agents named in Swyftflo&rsquo;s material
            include procurement, orchestration, logistics, scheduling, invoice and audit, and provenance agents.
          </p>
        </div>
      </section>

      {/* ---- where to start ---- */}
      <section id="start">
        <div className="in">
          <Head
            eyebrow="Starts small, connects fast"
            title="Where should you start?"
            lede="Begin with the product that closes your most expensive gap, then extend along the same thread. These are the starting points we see most often."
          />
          <StartPicker />
        </div>
      </section>

      {/* ---- teams ---- */}
      <section className="light">
        <div className="in">
          <Head
            eyebrow="Built for the people who run it"
            title="AI-native workflows for every team that touches the supply chain."
            lede="One record, seen through each team's lens and permissions."
          />
          <Caps
            items={[
              {
                title: "Sourcing and procurement",
                points: ["Run RFQs, RFPs and tenders with suppliers in the room", "Compare bids side by side, with AI-assisted scoring", "Keep every award and contract on one auditable record"],
              },
              {
                title: "Operations",
                points: ["See every PO and shipment in one live view", "Get disruption alerts with a recommended action", "Turn shipment activity into assigned, tracked tasks"],
              },
              {
                title: "Finance and compliance",
                points: ["Audit every invoice against six sources of truth", "Approve by rule, from desk or mobile", "Prove provenance and keep audit evidence continuous"],
              },
              {
                title: "Logistics",
                points: ["Optimise loads and routes in one run", "Dispatch, track and prove delivery with the driver app", "Settle freight invoices and carrier payouts"],
              },
              {
                title: "Leadership",
                points: ["See where money goes and where it leaks", "Track savings until they are paid", "Ask questions in plain language"],
              },
              {
                title: "Your partners",
                points: ["Quote, confirm and upload in one place", "See only what they need to act on", "Join as an organisation, a guest, or without an account"],
              },
            ]}
          />
        </div>
      </section>

      {/* ---- why it fits ---- */}
      <section>
        <div className="in">
          <Head eyebrow="Why it fits an ERP-led landscape" title="Four reasons it fits the systems you already run." />
          <div className="why4">
            {[
              ["Coexists by design", "No record or ledger moves out of the ERP. Integration is by API."],
              ["Fills the cross-company gap", "The work between organisations becomes structured, shared and visible."],
              ["Turns execution into evidence", "What happened physically validates what gets paid."],
              ["Starts small, connects fast", "Begin with one product or lane and extend along the same thread."],
            ].map(([t, b], i) => (
              <div key={t} data-r style={d(i)}>
                <span className="num">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 72 }}>
            <span className="eyebrow" data-r>
              Works with your stack
            </span>
            <h3 className="sub-h" data-r>
              Connected to the systems you already run.
            </h3>
            <p className="lede" data-r>
              Swyftflo&rsquo;s material shows connections across ERP, CRM, document and telematics platforms. Each one carries data both ways, so
              your system of record stays the system of record.
            </p>
            <Integrations />
          </div>
        </div>
      </section>

      {/* ---- rollout ---- */}
      <section className="light">
        <div className="in">
          <Head
            eyebrow="Getting live"
            title="From setup to go-live in days, not months."
            lede="Swyftflo is designed for rapid implementation. Nothing is migrated out of your system of record, so the work is connecting, configuring and bringing people in."
          />
          <Phases
            steps={[
              { title: "Connect your systems", body: "Integrate with your ERP and other systems to bring data into one environment. Nothing that works is replaced.", we: "map your integration points and agree what flows in and back." },
              { title: "Configure workflows", body: "Set up operational workflows, validation rules and approval structures to match how you run.", we: "turn your approval rules, tolerances and roles into configuration." },
              { title: "Onboard teams and partners", body: "Bring in internal teams, suppliers, customers and logistics partners, with clear role-based access.", we: "plan partner onboarding, starting with the partners who matter most." },
              { title: "Go live", body: "Start running transactions on the thread, then extend to the next product or lane.", we: "support the first live transactions and measure the result." },
            ]}
          />
          <Facts
            items={[
              { b: "3.5x", s: "faster sourcing cycles, from RFQ to award" },
              { b: "Up to 40%", s: "lower transportation costs" },
              { b: "70%", s: "less time spent processing invoices" },
              { b: "5x", s: "productivity boost from AI" },
            ]}
            note="Figures as published by Swyftflo. Actual results depend on scope, data quality and adoption."
          />
        </div>
      </section>

      <CopyrightNotice inline />

      {/* ---- FAQ ---- */}
      <section>
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs[""]} />
        </div>
      </section>

      <CtaBand
        title="Find where your cross-company work breaks, and which product closes it first."
        lede="Tell us how a purchase, a shipment and an invoice move through your business today. We'll show you the thread Swyftflo would run, and where to begin."
        label="Book a Swyftflo walkthrough"
        list={["Your transaction flow, mapped across companies", "Where to start: one product or one lane", "ERP integration points", "Partners to onboard first", "A live demo on your own scenario"]}
      />
    </>
  );
}
