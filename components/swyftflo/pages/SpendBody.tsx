import type { CSSProperties } from "react";
import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { Explorer } from "../Explorer";
import { Glyph } from "../icons";
import { AppFrame, Bars, Pill, Tile } from "../screens";
import { SevenLevels } from "../SevenLevels";
import { Caps, CtaBand, d, Faq, Head, Hero, Includes, NativeAi, Related, WordList } from "../parts";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/* ---------------------------------------------------------------- screens */

function AgentAnswer() {
  const steps: [string, number, number, string][] = [
    ["Last quarter", 0, 60, "#b9bdf7"],
    ["Price", 60, 18, "#d24b4b"],
    ["Volume", 78, 4, "#e08a2e"],
    ["Mix", 82, 2, "#e08a2e"],
    ["This quarter", 0, 84, "var(--sf)"],
  ];
  return (
    <AppFrame title="Spend agent" search="Ask about suppliers, contracts, budgets…" label="Illustration of the spend agent explaining that packaging spend rose 8% mainly because of price, with a price-volume-mix bridge chart and a recommendation" rail={0}>
      <div className="msgs">
        <div className="bub u">Why did packaging spend rise 8% this quarter?</div>
        <div className="bub a">
          Most of the rise came from <b>price, not volume</b>. Two suppliers billed above their contracted rates.
        </div>
      </div>
      <div className="card-f">
        <div className="bars" style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 110, padding: "0 4px" }}>
          {steps.map(([l, base, h, c], i) => (
            <span key={l} style={{ flex: 1, height: "100%", position: "relative" }}>
              <i style={{ position: "absolute", left: 0, right: 0, bottom: `${base}%`, height: `${h}%`, background: c, borderRadius: 3, "--i": i } as CSSProperties} />
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 5, fontSize: 9.5, color: "var(--app-muted)", padding: "0 4px" }}>
          {["Last quarter", "Price +6.1%", "Volume +1.4%", "Mix +0.5%", "This quarter"].map((l) => (
            <span key={l} style={{ flex: 1, textAlign: "center" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className="chips">
        <span className="chip">✓ Computed from your data</span>
        <span className="chip" style={{ background: "#fff5e1", color: "#9a5b00" }}>
          Recommendation: renegotiate 2 suppliers
        </span>
        <span className="chip">Turn this into a CFO brief</span>
      </div>
    </AppFrame>
  );
}

function Dashboard() {
  return (
    <AppFrame title="Spend overview · 12 months" label="Illustration of a spend dashboard: total spend, share under contract, off-contract spend, negotiated savings and supplier concentration" rail={1}>
      <div className="chips">
        <span className="chip on">Procurement</span>
        <span className="chip">Spend overview</span>
        <span className="chip">Supplier performance</span>
        <span className="chip">Budgets</span>
      </div>
      <div className="tiles">
        <Tile h="Total spend" k="$48.2M" s="12 months" />
        <Tile h="Under contract" k="78%" s="target 75%" tone="ok" />
        <Tile h="Off-contract" k="$10.6M" s="22% leakage risk" tone="er" />
        <Tile h="Negotiated savings" k="$2.4M" s="from sourcing events" tone="sf" />
      </div>
      <div className="tiles t2">
        <div className="card-f">
          <div className="h">
            Spend under contract <Pill tone="ok">On track</Pill>
          </div>
          <p style={{ fontSize: 10.5, color: "var(--app-muted)" }}>78%, above the 75% target for the third month running.</p>
        </div>
        <div className="card-f">
          <div className="h">
            Top supplier share <Pill tone="wr">Watch</Pill>
          </div>
          <p style={{ fontSize: 10.5, color: "var(--app-muted)" }}>Top 4 suppliers hold 64% of spend, up from 58%.</p>
        </div>
      </div>
      <div className="card-f">
        <div className="h">Spend by category</div>
        <Bars
          rows={[
            ["Freight and logistics", 100, "34%"],
            ["Raw materials", 79, "27%"],
            ["Packaging", 41, "14%", "o"],
            ["Services", 38, "13%", "l"],
            ["Other", 35, "12%", "l"],
          ]}
        />
      </div>
    </AppFrame>
  );
}

function Findings() {
  return (
    <AppFrame title="Today's findings" label="Illustration of the findings engine listing contract price leakage, suspected duplicate invoices, missed early payment discounts and a budget overrun forecast, each with a value" rail={2}>
      {[
        ["Contract price leakage", "3 suppliers billed above contracted rates", "$42,300", "er"],
        ["Suspected duplicate invoices", "2 pairs across Swyftflo and ERP payables", "$18,900", "er"],
        ["Missed early payment discounts", "11 invoices paid after the discount window", "$6,450", "wr"],
        ["Budget overrun forecast", "Maintenance on pace to exceed its annual budget", "Forecast", "wr"],
      ].map(([a, b, v, t]) => (
        <div className={`card-f ${t === "er" ? "bad" : "warn"}`} key={a}>
          <div className="h">
            {a} <b style={{ color: t === "er" ? "var(--bad)" : "var(--warn)", fontSize: 13 }}>{v}</b>
          </div>
          <p style={{ fontSize: 10.5, color: "var(--app-muted)" }}>{b}</p>
        </div>
      ))}
    </AppFrame>
  );
}

function Register() {
  const stages: [string, string, number][] = [
    ["Identified", "Found by the engine or the agent", 100],
    ["Validated", "Finance checks the estimate", 88],
    ["Approved", "Owner and baseline agreed", 76],
    ["In progress", "Being worked", 64],
    ["Implemented", "Change made", 52],
    ["Realised", "Measured in what was paid", 40],
  ];
  return (
    <AppFrame title="Opportunity register" label="Illustration of the opportunity register: savings move from identified to validated, approved, in progress, implemented and realised" rail={3}>
      <div className="card-f ai">
        <div className="h">✦ Recommendation</div>
        <p style={{ fontSize: 11 }}>Consolidate packaging from 9 suppliers to the top 3 through one sourcing event. Estimated saving computed from current prices and volumes, with assumptions and confidence shown.</p>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <span className="fbtn em">Add to register</span>
          <span className="fbtn">Draft business case</span>
        </div>
      </div>
      <div className="card-f">
        {stages.map(([a, b, w], i) => (
          <div key={a} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 8, alignItems: "center", padding: "3px 0" }}>
            <b style={{ fontSize: 10.5 }}>{a}</b>
            <span style={{ display: "block", width: `${w}%`, background: i === 5 ? "#2fa36b" : "var(--sf-2)", opacity: i === 5 ? 1 : 0.35 + i * 0.1, color: "#fff", borderRadius: 6, padding: "4px 8px", fontSize: 9.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {b}
            </span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function Forecast() {
  return (
    <AppFrame title="Maintenance spend to year end" label="Illustration of a spend forecast with an 80% range crossing the budget line, and a what-if scenario" rail={4}>
      <div className="card-f">
        <div className="h">
          Forecast <Pill tone="wr">Forecast · 80% range</Pill>
        </div>
        <svg viewBox="0 0 320 120" style={{ width: "100%", height: 130, display: "block" }} aria-hidden="true">
          <line x1="0" y1="40" x2="320" y2="40" stroke="#d24b4b" strokeDasharray="4 4" />
          <text x="4" y="34" fontSize="9" fill="#d24b4b">
            Budget pace
          </text>
          <path d="M180 66 L320 30 L320 70 Z" fill="rgba(99,102,241,.18)" />
          <path d="M0 100 L30 92 L60 96 L90 84 L120 86 L150 76 L180 66" fill="none" stroke="#1b2140" strokeWidth="2" />
          <path d="M180 66 L320 48" fill="none" stroke="var(--sf)" strokeWidth="2" strokeDasharray="5 4" />
          <line x1="180" y1="10" x2="180" y2="112" stroke="#c9cbe0" />
          <text x="184" y="18" fontSize="9" fill="#6b7190">
            Today
          </text>
        </svg>
      </div>
      <div className="card-f">
        <div className="h">What if 30% of the category moves to supplier B?</div>
        <div className="tiles t3">
          <Tile h="Category cost, 12 months" k="−4.3%" tone="ok" />
          <Tile h="Supplier B share" k="22→52%" tone="wr" />
          <Tile h="Assumptions" k="Listed" tone="sf" />
        </div>
      </div>
    </AppFrame>
  );
}

function Budgets() {
  return (
    <AppFrame title="Budget control" label="Illustration of budget utilisation, variance, requisitions blocked by budget and a year-end overrun forecast by cost centre" rail={5}>
      <div className="tiles">
        <Tile h="Utilisation" k="71%" s="year to date" />
        <Tile h="Variance" k="+3.2%" s="vs plan" tone="wr" />
        <Tile h="Blocked PRs" k="4" s="by budget" tone="er" />
        <Tile h="Year-end" k="Over" s="maintenance" tone="er" />
      </div>
      <div className="card-f">
        <div className="h">
          Budget vs actual by cost centre <small>from ERP and Excel</small>
        </div>
        <Bars
          rows={[
            ["Maintenance", 96, "108%", "r"],
            ["Plant operations", 74, "86%", "o"],
            ["Logistics", 66, "77%", "g"],
            ["IT", 52, "61%", "g"],
            ["Marketing", 40, "47%", "g"],
          ]}
        />
      </div>
    </AppFrame>
  );
}

/* ---------------------------------------------------------------- page */

export function SpendBody() {
  return (
    <>
      <Hero
        current="spend-intelligence"
        crumb="Spend Intelligence"
        eyebrow="Swyftflo Spend Intelligence"
        title={
          <>
            See every dollar. Stop every leak. <em>Prove every saving.</em>
          </>
        }
        lede="Spend Intelligence brings every spend line into one governed view. Then it answers questions, explains what changed, forecasts what comes next and finds savings before anyone asks, so spend stops being a monthly report and becomes a live, accountable part of how the business is run."
        primary={{ label: "Book a spend demo", href: "#book" }}
        secondary={{ label: "Meet the spend agent", href: "#levels" }}
        note={
          <>
            <b>Alongside your ERP.</b> ERP reporting shows what was paid. Spend Intelligence adds what was quoted, negotiated, delivered and
            disputed before payment.
          </>
        }
        visual={
          <figure style={{ margin: 0 }}>
            <AgentAnswer />
            <figcaption className="caption">Illustration of the spend agent, simplified. Sample data.</figcaption>
          </figure>
        }
      />

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="Your margins live in your spend data"
              title="Your spend isn't hidden. It's just scattered."
              lede={[
                "Every purchase order, invoice, contract and budget line holds an answer about where money goes and where it slips away. Those answers are spread across ERPs, spreadsheets and inboxes, and by the time a report lands, the moment to act has passed.",
                "Spend Intelligence draws on data a ledger never holds: every quote and losing bid, each negotiation round and the saving it produced, execution delays by supplier, audited charges and rejected amounts, and freight spend from the TMS.",
              ]}
            />
          </div>
          <div data-r style={d(2)}>
            <div className="includes">
              {[
                { t: "Answers take weeks", b: "Every new question becomes a report request, and every report answers only the question it was built for." },
                { t: "Everyone has a different number", b: "Teams export to Excel and rebuild the same KPI three different ways." },
                { t: "Leakage hides in plain sight", b: "Off-contract buying, price creep and duplicate invoices surface months later, if ever." },
                { t: "Savings are never proven", b: "Negotiated savings are claimed once and rarely traced to what was actually paid." },
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

      <section id="levels">
        <div className="in">
          <Head
            eyebrow="One agent, seven levels of intelligence"
            title="Ask anything. Get the answer, the reason and the next step."
            lede="The spend agent knows your suppliers, contracts, budgets and invoices. It goes from what happened, to why, to what comes next, to what to do about it. Pick a level to see the kind of question it answers."
          />
          <SevenLevels />
          <WordList label="Turn any answer into" items={["Board packs in PDF", "Memos in Word", "Models in Excel", "Decks in PowerPoint"]} />
        </div>
      </section>

      <section className="light" id="explore">
        <div className="in">
          <Head
            eyebrow="From dashboard to decision"
            title="Find the leak before it finds you."
            lede="Pick a part of Spend Intelligence to see what it does, then look at the screen your procurement and finance teams would use."
          />
          <Explorer
            label="Spend Intelligence capabilities"
            tabs={[
              {
                id: "dash",
                label: "Dashboards",
                title: "Describe the dashboard. The agent builds it.",
                tagline: "No tickets, no report backlog.",
                points: [
                  "Agree a KPI in conversation and a live widget appears",
                  "Each widget carries a verdict: on track, worth watching, or needs action",
                  "Personal, team and company dashboards, with home pages for CPO, CFO and category managers",
                  "Every number shows its definition, filters, rows counted and data freshness",
                ],
                screen: <Dashboard />,
              },
              {
                id: "find",
                label: "Findings",
                title: "The findings engine",
                tagline: "Each finding arrives with its value and a plain explanation.",
                points: [
                  "Scans every connected source every day and after every data load",
                  "Duplicate invoices and payments, split POs, maverick and off-contract spend",
                  "Contract price leakage, missed early-payment discounts, unusual spikes",
                  "Thresholds set by each company; dismissed findings teach the engine what matters",
                ],
                screen: <Findings />,
              },
              {
                id: "reg",
                label: "Savings register",
                title: "Every saving, tracked to the dollar",
                tagline: "Identified, validated, realised.",
                points: [
                  "Findings become options with quantified impact, assumptions and risks",
                  "Approved options move into the opportunity register",
                  "A nominated role signs off before savings count",
                  "Savings leakage shows where agreed savings never reached the invoice",
                ],
                look: {
                  title: "Three savings numbers, so the board sees the truth.",
                  body: "A saving is identified by the engine, validated by finance and only counted as realised when it shows up in what was actually paid.",
                },
                screen: <Register />,
              },
              {
                id: "fc",
                label: "Forecasts and what-ifs",
                title: "Know where spend is heading before the month closes",
                tagline: "Honest ranges, always labelled as forecasts.",
                points: [
                  "Statistical forecasts by category, cost centre and supplier",
                  "Late-delivery risk on open purchase orders",
                  "What-if scenarios to run before a negotiation",
                  "Every forecast shows its method and accuracy; models are trained only on your data",
                ],
                screen: <Forecast />,
              },
              {
                id: "bud",
                label: "Budgets",
                title: "Budgets, wherever they live",
                tagline: "Owners see trouble while there is still time to act.",
                points: [
                  "Keep budgets in your ERP and connect them, or upload them from Excel",
                  "Utilisation, variance and forecast overruns on the same dashboards as spend",
                  "Requisitions blocked by budget, in view",
                  "Classification, supplier matching, currency conversion and data quality scoring",
                ],
                screen: <Budgets />,
              },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="in">
          <Head
            eyebrow="Trust"
            title="The AI never produces a number. Ever."
            lede="Language models are good at understanding questions and explaining results, and unreliable at arithmetic. So the AI interprets and explains, a governed engine calculates, and a validator rejects any answer containing a number that did not come from your data."
          />
          <div className="chev" data-r style={d(3)} aria-label="How an answer is produced">
            {["You ask", "AI interprets", "Engine computes", "Validator checks"].map((s, i) => (
              <span key={s} className={i % 2 ? "k" : undefined}>
                {s}
              </span>
            ))}
            <span className="end">Answer with evidence</span>
          </div>
          <Caps
            items={[
              { title: "Access follows the role", body: "Nobody sees beyond their permissions, and the agent never acts above the user it serves." },
              { title: "Your data stays yours", body: "Each company is isolated at the data layer. Models are trained per company." },
              { title: "Recommends, never acts", body: "Read-only by design. It drafts and advises; people decide." },
              { title: "No outside sources", body: "Only your information and the files you choose to load." },
              { title: "Accuracy gate", body: "Benchmark questions must pass before every release." },
              { title: "Nothing to reveal", body: "The agent works through a governed model, never tables or code." },
            ]}
          />
        </div>
      </section>

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="Your KPIs, measured your way"
              title="Start from examples. Define, version and approve your own."
              lede="Every company measures differently, so there is no fixed catalogue. KPIs are built from governed building blocks, with a company KPI library, a four-level category taxonomy, supplier hierarchies and multi-currency."
            />
          </div>
          <Includes
            items={[
              { title: "Spend visibility", body: "Total spend by supplier, category and cost centre, tail spend, concentration." },
              { title: "Compliance", body: "Under contract, off-contract, PO compliance, contract price leakage." },
              { title: "Savings and price", body: "Negotiated savings, price variance, price trends, realised savings." },
              { title: "Budget control", body: "Utilisation, variance, blocked requisitions, year-end position." },
              { title: "Sourcing", body: "Cycle time, bids per event, award against lowest compliant bid." },
              { title: "Invoice and payment", body: "First-time match, exceptions, cycle time, discount capture." },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="in two mid">
          <div>
            <Head
              eyebrow="Teach the agent your industry"
              title="Skills extend the agent to any domain, without custom code."
              lede="Freight for a logistics buyer. Direct materials for a manufacturer. Medical consumables for a hospital group. A skill carries knowledge, data requirements, formulas, KPI templates, chart recipes, playbooks and tests, and anyone can build and share one."
            />
            <div className="layers" style={{ marginTop: 26 }}>
              {[
                ["Assigned by role", "Defaults per role, with personal additions."],
                ["Always tested", "Test questions run on save and after data loads."],
                ["Never guesses", "Missing data is named, not estimated."],
              ].map(([a, b], i) => (
                <div className="layer" key={a} data-r style={d(i + 2)}>
                  <span className="who">{a}</span>
                  <div>
                    <p>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figure style={{ margin: 0, ...d(2) }} data-r>
            <AppFrame title="Skill · Freight analytics" label="Illustration of a freight analytics skill: what it knows, what it measures and example questions" search={false}>
              <div className="card-f">
                <div className="h">
                  Freight analytics skill <Pill tone="in">Example</Pill>
                </div>
                <p style={{ fontSize: 11 }}>
                  <b>Knows</b> TEU, spot versus contract rates, modes and lanes. <b>Measures</b> TEU volume, spot share of freight spend, rate against
                  transit time.
                </p>
              </div>
              {["Which lanes grew most this year?", "Are we paying above contract on our busiest lane?", "Air or sea for this lane, given cost and transit time?"].map((q) => (
                <div className="bub u" key={q} style={{ maxWidth: "100%", alignSelf: "stretch" }}>
                  {q}
                </div>
              ))}
            </AppFrame>
            <figcaption className="caption">Illustration of an agent skill. Sample content from Swyftflo&rsquo;s material.</figcaption>
          </figure>
        </div>
      </section>

      <section className="light">
        <div className="in">
          <Head
            eyebrow="Built for everyone who touches spend"
            title="One governed source of truth, seen through each role's lens."
            lede="Teams without the AI subscription still get full dashboards on the same data, through a manual builder."
          />
          <div className="tbl" data-r>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>What they get</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CPO and head of procurement", "Spend under management, the savings pipeline and a board pack in minutes."],
                  ["CFO and finance", "Budget position, validated savings, payment discipline and duplicate exposure."],
                  ["Category managers", "Price trends, leakage and what-if scenarios before every negotiation."],
                  ["Accounts payable", "Exceptions by reason and supplier, cycle times and discount capture."],
                  ["Executives", "Briefings that say what changed and why, without opening a report."],
                ].map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td className="m">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <NativeAi
            items={[
              { label: "Spend anomaly detection" },
              { label: "Savings opportunity recommendations" },
              { label: "Questions in plain language" },
              { label: "Price trend analysis" },
              { label: "Reporting and business agents" },
            ]}
          />
          <p className="note">
            Spend Intelligence is built first for procurement and designed to extend across Swyftflo&rsquo;s sourcing, visibility, invoice audit,
            provenance and transport products, so one agent can grow to see the whole operation.
          </p>
        </div>
      </section>

      <CopyrightNotice inline />

      <section>
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs["spend-intelligence"]} />
        </div>
      </section>

      <CtaBand
        title="Find out what your spend data already knows."
        lede="Connect a year of payables and contracts, and we'll show you the dashboards, the first findings and the savings pipeline on your own numbers."
        label="Book a spend demo"
        list={["Spend overview on your own data", "First findings with values attached", "KPI library tailored to your business", "Budget connection from ERP or Excel", "Role-based home pages"]}
      />

      <Related current="spend-intelligence" />
    </>
  );
}
