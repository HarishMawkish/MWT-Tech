import type { CSSProperties } from "react";
import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { Explorer } from "../Explorer";
import { Glyph } from "../icons";
import { AiChat, AppFrame, Pill, Tile } from "../screens";
import { Switcher } from "../Switcher";
import { Agents, AlongsideErp, Caps, CtaBand, d, Faq, Head, Hero, Layers, NativeAi, Related, WordList, PhotoStrip } from "../parts";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/* ---------------------------------------------------------------- screens */

function DailyStatus() {
  const rows: [string, string, "ok" | "er" | "wr", string, string, string][] = [
    ["PO-48211", "Shanghai to Colombo", "ok", "On time", "12 Nov", "12 Nov"],
    ["PO-48230", "Frankfurt to Dubai", "er", "Delayed", "03 Nov", "05 Nov"],
    ["PO-48197", "Chennai to Malé", "wr", "At risk", "09 Nov", "10 Nov"],
    ["PO-48244", "Plant to DC North", "ok", "On time", "28 Oct", "28 Oct"],
  ];
  return (
    <AppFrame title="Daily status report" label="Illustration of a Control Tower daily status report: 128 active shipments, 104 on time, 17 delayed, 7 at risk, with an AI agent alert about port congestion" rail={0}>
      <div className="tiles">
        <Tile h="Active" k="128" />
        <Tile h="On time" k="104" tone="ok" />
        <Tile h="Delayed" k="17" tone="er" />
        <Tile h="At risk" k="7" tone="wr" />
      </div>
      <div className="card-f" style={{ overflowX: "auto" }}>
        <table className="ftab">
          <thead>
            <tr>
              <th>Ref</th>
              <th>Lane</th>
              <th>Status</th>
              <th className="r">Planned</th>
              <th className="r">AI ETA</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td>
                  <b>{r[0]}</b>
                </td>
                <td>{r[1]}</td>
                <td>
                  <Pill tone={r[2]}>{r[3]}</Pill>
                </td>
                <td className="r">{r[4]}</td>
                <td className="r" style={{ color: r[2] === "ok" ? "var(--ok)" : r[2] === "er" ? "var(--bad)" : "var(--warn)", fontWeight: 700 }}>
                  {r[5]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-f dark">
        <div className="h">
          <span>⚠ AI agent alert</span> <small style={{ color: "#a9aedc" }}>just now</small>
        </div>
        <p style={{ fontSize: 11, color: "#d9dcff" }}>Port congestion at the transshipment hub. PO-48197 is likely to slip one day.</p>
        <p style={{ fontSize: 10, color: "#a9aedc", marginTop: 6, letterSpacing: ".1em" }}>RECOMMENDED</p>
        <p style={{ fontSize: 11, color: "#fff" }}>Notify the consignee and re-confirm the delivery slot with the warehouse.</p>
      </div>
    </AppFrame>
  );
}

/** The journey of one shipment, leg by leg, with a live map. */
function Journey() {
  const legs: [string, string, "done" | "now" | ""][] = [
    ["Supplier", "Shenzhen · 20 Jun", "done"],
    ["Origin WH", "Shenzhen · 21 Jun", "done"],
    ["Origin port", "Yantian · 22 Jun", "done"],
    ["In transit", "Sea · ETA +1 day", "now"],
    ["Customs", "Colombo", ""],
    ["Buyer WH", "Colombo", ""],
    ["GRN", "Posted to ERP", ""],
  ];
  return (
    <AppFrame title="PO-48211 · Shanghai to Colombo" search="BL LO53L466 · Container MSCU4567890" label="Illustration of one shipment's journey across seven legs, with planned and actual dates and a live vessel position on a map" rail={1}>
      <div className="jr" style={{ "--p": 0.5 } as CSSProperties}>
        <span className="fill" />
        {legs.map(([n, s, st]) => (
          <span key={n} className={`st ${st}`}>
            <i />
            <b>{n}</b>
            <span style={{ fontSize: 9 }}>{s}</span>
          </span>
        ))}
      </div>
      <div className="map">
        <svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="ctgrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,.05)" />
            </pattern>
          </defs>
          <rect width="400" height="150" fill="url(#ctgrid)" />
          <path d="M40 112 C 110 30, 230 20, 360 70" fill="none" stroke="rgba(129,140,248,.35)" strokeWidth="2" />
          <path d="M40 112 C 110 30, 230 20, 200 26" fill="none" stroke="#818cf8" strokeWidth="2.4" />
          <path d="M200 26 C 260 30, 320 45, 360 70" fill="none" stroke="#818cf8" strokeWidth="1.6" className="flow" />
          <circle cx="40" cy="112" r="5" fill="#c7d2fe" />
          <circle cx="360" cy="70" r="5" fill="none" stroke="#e3a008" strokeWidth="2" />
          <circle cx="200" cy="26" r="9" fill="#818cf8" className="pulse" />
          <circle cx="200" cy="26" r="5.5" fill="#fff" />
        </svg>
        <span className="lbl" style={{ left: 14, bottom: 10 }}>
          Yantian
        </span>
        <span className="lbl" style={{ right: 14, top: 84 }}>
          Colombo
        </span>
        <span className="lbl" style={{ left: "40%", top: 44 }}>
          Container in transit · AIS position · AI-predicted ETA 13 Nov
        </span>
      </div>
      <div className="tiles t3">
        <Tile h="Planned arrival" k="12 Nov" />
        <Tile h="AI-predicted" k="13 Nov" tone="wr" />
        <Tile h="Confirmations" k="23/31" tone="sf" s="multi-party" />
      </div>
    </AppFrame>
  );
}

function TrackScreen() {
  return (
    <AppFrame title="Track and trace" label="Illustration of tracking a shipment by PO number, bill of lading, air waybill or container number" rail={1}>
      <div className="chips">
        <span className="chip on">Air freight</span>
        <span className="chip">FCL</span>
        <span className="chip">LCL</span>
      </div>
      <div className="card-f">
        <div className="h">Which reference do you have?</div>
        {[
          ["PO number", "Every shipment tied to your purchase order", true],
          ["Bill of lading", "Ocean freight, port of loading to discharge", false],
          ["Air waybill", "11-digit air cargo reference", false],
          ["Container number", "Single box by ISO 6346 number, e.g. MSCU4567890", false],
        ].map(([a, b, on]) => (
          <div className="row" key={a as string}>
            <span>
              <b>{a}</b> · {b}
            </span>
            {on ? <Pill tone="in">Selected</Pill> : <span />}
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">
          Matched automatically <small>carrier, mode and journey</small>
        </div>
        <div className="row">
          <span>BL LO53L466 · MSCU4567890</span>
          <b>Port of Shanghai → Port of Colombo</b>
        </div>
        <div className="row">
          <span>Vessel</span>
          <b>14.2 kn · course 236° · under way</b>
        </div>
      </div>
    </AppFrame>
  );
}

function Workspace() {
  const evs: [string, string, "ok" | "wr" | "nt"][] = [
    ["Location entry", "Dholia container yard · 05 Jan, 12:00", "ok"],
    ["Container inspection", "4 photos · Wharf clerk, New Line Co.", "ok"],
    ["Enter the container number", "Required · Origin transport", "wr"],
    ["End journey", "Required · Warehouse manager", "nt"],
  ];
  return (
    <AppFrame title="Container pickup · Dholia container yard" label="Illustration of a shipment workspace with milestones, field photos, multi-party confirmations and comments" rail={2}>
      <div className="tiles t2">
        <Tile h="Planned start → actual" k="05 Jan" s="12:00 → 12:00, on time" tone="ok" />
        <Tile h="Confirmations" k="2 of 2" s="Jessica, George Allen" tone="sf" />
      </div>
      <div className="card-f">
        <div className="h">
          Milestones <small>Re-assign · Truck GB-9099 · Driver Floyd Bell</small>
        </div>
        {evs.map(([a, b, t]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b> · {b}
            </span>
            <Pill tone={t}>{t === "ok" ? "Done" : t === "wr" ? "Due" : "Next"}</Pill>
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">
          Cory Fernando · Wharf clerk, New Line Co. <small>12 · reply</small>
        </div>
        <p style={{ fontSize: 11 }}>Image of the empty container before loading. Floor and walls clean, no damage.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginTop: 7 }}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ height: 34, borderRadius: 6, background: `linear-gradient(135deg, #8b7d6b, #4a4036 ${50 + i * 10}%)` }} />
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

function KeyDates() {
  const dates: [string, string, string, boolean][] = [
    ["Planned production", "PO-4471 · 1,200 cartons packed", "Sep 1", false],
    ["Cargo ready", "Greenville plant · dock 4", "Sep 11", false],
    ["Cargo cut-off", "Savannah CY closes 5:00 PM. Confirm drayage pickup.", "Today", true],
    ["Air freight", "ATL → ORD · 180 cartons", "Sep 17", false],
    ["Ocean freight", "Savannah → Colombo", "Sep 19", false],
  ];
  return (
    <AppFrame title="Key dates · PO-4471" label="Illustration of a timeline of a purchase order's key dates, with today's cut-off highlighted for a decision" rail={3}>
      <div className="ttl">
        September 2026 <small>planned vs actual on one timeline</small>
      </div>
      <div className="card-f">
        {dates.map(([a, b, c, now]) => (
          <div className="row" key={a} style={now ? { background: "var(--sf)", color: "#fff", borderRadius: 8, padding: "8px 10px", margin: "4px -4px" } : undefined}>
            <span>
              <b>{a}</b> · <span style={{ opacity: 0.8 }}>{b}</span>
            </span>
            <b>{c}</b>
          </div>
        ))}
      </div>
      <AiChat>
        <div className="bub a">
          The cut-off is <b>today at 5:00 PM</b> and the drayage pickup isn&rsquo;t confirmed. Shall I message the transporter?
        </div>
      </AiChat>
    </AppFrame>
  );
}

function Vault() {
  return (
    <AppFrame title="Document vault · PO-48211" label="Illustration of a shipment document vault with AI categorisation, permissions and search" rail={4}>
      <div className="chips">
        <span className="chip on">✦ AI categorised</span>
        <span className="chip">Roles and permissions</span>
        <span className="chip">Smart search</span>
      </div>
      <div className="card-f">
        {[
          ["Vessel booking confirmation", "Booking · shared with forwarder, consignee", "ok", "Verified"],
          ["Proforma invoice", "Commercial · finance, consignee", "in", "Finance only"],
          ["Letter of credit", "Banking · finance", "in", "Restricted"],
          ["Certificate of inspection", "Quality · all parties", "ok", "Verified"],
          ["Bill of lading draft", "Transport · forwarder, carrier", "wr", "Awaiting approval"],
        ].map(([a, b, t, c]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b> · {b}
            </span>
            <Pill tone={t as "ok" | "in" | "wr"}>{c}</Pill>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function Tasks() {
  return (
    <AppFrame title="Today's tasks" label="Illustration of the Control Tower AI drafting owners for three exceptions and suggesting a reroute" rail={5}>
      <div className="chips">
        <span className="chip">Alerts</span>
        <span className="chip on">Today&rsquo;s tasks</span>
        <span className="chip">Last activity</span>
      </div>
      <div className="card-f ai">
        <div className="h">
          ✦ Control Tower AI <small>just now</small>
        </div>
        <p style={{ fontSize: 11 }}>3 exceptions need action before 2 PM. Two put the DC 6094 on-time-in-full window at risk. I&rsquo;ve drafted an owner for each.</p>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <span className="fbtn em">Auto-assign all</span>
          <span className="fbtn">View reasoning</span>
        </div>
      </div>
      <div className="card-f">
        <div className="h">
          Resolve reefer temperature excursion <Pill tone="wr">At risk</Pill>
        </div>
        <p style={{ fontSize: 10.5, color: "var(--app-muted)" }}>Load LD-4482 · Dallas to Memphis</p>
        <div className="bub a" style={{ maxWidth: "100%", marginTop: 6 }}>
          <b>AI suggests</b> diverting to the Memphis cross-dock: ETA +2h, avoids an estimated $4.1K in spoilage.
        </div>
      </div>
      <div className="card-f">
        <div className="row">
          <span style={{ textDecoration: "line-through", color: "var(--app-muted)" }}>Reroute PO-4471 via Charleston</span>
          <Pill tone="ok">Done</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

/** One shipment, seen by three roles. */
function RoleCard({ role, sees }: { role: string; sees: [string, string, boolean][] }) {
  return (
    <div className="two" style={{ marginTop: 28, gap: 32, alignItems: "center" }}>
      <AppFrame title={`PO-48197 · viewed as ${role}`} label={`Illustration of the same shipment as the ${role} sees it`} search={false}>
        <div className="card-f">
          {sees.map(([a, b, ok]) => (
            <div className="row" key={a}>
              <span>
                <b>{a}</b> · {ok ? b : "Not shared with this role"}
              </span>
              {ok ? <Pill tone="ok">Visible</Pill> : <Pill tone="nt">🔒 Hidden</Pill>}
            </div>
          ))}
        </div>
      </AppFrame>
      <div className="see">
        {sees.map(([a, , ok]) => (
          <div key={a}>
            <span className={ok ? "y" : "n"}>{ok ? "✓" : "–"}</span>
            <span>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- page */

export function ControlTowerBody() {
  const parties = ["Shipper", "Factory", "Freight forwarder", "Shipping line", "Transporter", "Export customs", "Import customs", "Port", "Warehouse", "Consignee"];
  return (
    <>
      <Hero
        current="control-tower"
        crumb="Control Tower"
        eyebrow="Swyftflo Supply Chain Control Tower"
        title={
          <>
            From PO to dispatch to GRN, <em>one operational truth.</em>
          </>
        }
        lede="Control Tower creates a shared, role-based workspace around every PO or shipment. Supplier, forwarder, carrier, customs broker, warehouse and buyer work from the same live record, from cargo ready to goods received, across air, ocean, road and rail."
        primary={{ label: "Book a Control Tower demo", href: "#book" }}
        secondary={{ label: "Follow a shipment", href: "#journey" }}
        note={
          <>
            <b>Alongside your ERP.</b> The ERP issues the PO and posts the goods receipt. Control Tower runs everything in between, across
            every company involved.
          </>
        }
        visual={
          <figure style={{ margin: 0 }}>
            <DailyStatus />
            <figcaption className="caption">Illustration of a Control Tower daily status report, simplified. Sample data.</figcaption>
          </figure>
        }
      />

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="Why a control tower"
              title="All your supply chain partners, in one space, in real time."
              lede={[
                "Global supply chains have countless moving parts across geographies. Updates arrive late from carriers, forwarders and spreadsheets, and a delay is often discovered when the customer calls.",
                "Control Tower brings every partner on a shipment into one workspace, created automatically for each PO or shipment, so the moment something slips, everyone who needs to know sees it.",
              ]}
            />
            <AlongsideErp erp={["Purchase order", "Goods receipt (GRN) posting", "Inventory"]} sw={["Milestones, planned against actual", "Live tracking and AI-predicted ETAs", "Documents, tasks, confirmations and evidence"]} />
          </div>
          <div data-r style={d(2)}>
            <WordList label="Everyone on the shipment, one record" items={parties} className="flush" />
            <div className="includes" style={{ marginTop: 14 }}>
              {[
                { t: "A workspace per transaction", b: "Each PO or shipment gets its own shared space, created automatically." },
                { t: "Beyond port to port", b: "First mile to buyer warehouse, every mode in the same view." },
                { t: "AI agents on watch", b: "Disruptions flagged with recommended actions before they hit the schedule." },
                { t: "Evidence built for audit", b: "Every confirmation becomes proof for the invoice that follows." },
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

      <section id="journey">
        <div className="in two mid">
          <div>
            <Head
              eyebrow="We track the whole journey"
              title="Every leg of the shipment, visualised as one journey."
              lede={[
                "Pickup, ocean transit, customs clearance, warehouse and final mile move through a single live progress bar, with planned and actual dates side by side.",
                "Each leg carries its own status, owner and evidence. The moment something slips it surfaces here, before it becomes a delay your customer hears about first.",
              ]}
            />
            <WordList label="Every mode, one view" items={["Air", "Ocean", "Road", "Rail"]} className="big" />
          </div>
          <figure style={{ margin: 0, ...d(2) }} data-r>
            <Journey />
            <figcaption className="caption">Illustration of one shipment in Control Tower. Map and positions are illustrative. Sample data.</figcaption>
          </figure>
        </div>
      </section>

      <PhotoStrip
        items={[
          { file: "ct-cargo-ship", alt: "A container ship seen from above, heading out to sea", cap: "Ocean transit, tracked leg by leg" },
          { file: "ct-container-crane", alt: "A shipping container lifted by a crane above a busy port", cap: "Port and terminal handover" },
          { file: "ct-air-land-sea", alt: "An aircraft, a truck and a ship seen from above side by side", cap: "Air, road and sea in the same view" },
          { file: "ct-container-scan", alt: "A worker photographing the inside of a container with a phone", cap: "Confirmations that become evidence" },
        ]}
      />

      <section className="light" id="explore">
        <div className="in">
          <Head
            eyebrow="From overview to granular visibility"
            title="Every milestone, document and confirmation, right where you need it."
            lede="Pick a part of Control Tower to see what it does, then look at the screen your team and your partners would use."
          />
          <Explorer
            label="Control Tower capabilities"
            tabs={[
              {
                id: "track",
                label: "Track and trace",
                title: "Track it your way",
                tagline: "Not the carrier's way.",
                points: [
                  "Search by PO number, booking number, bill of lading, air waybill or container",
                  "Matched to the right carrier, mode and journey automatically",
                  "Vessel position with speed, course and navigational status",
                  "Flight and road tracking in the same view",
                ],
                screen: <TrackScreen />,
              },
              {
                id: "ws",
                label: "Shipment workspace",
                title: "The shipment workspace",
                tagline: "Real proof from the field, not from a spreadsheet later.",
                points: [
                  "Task feed, events feed, work orders and contextual comment boards",
                  "Milestones confirmed by people, AI agents and IoT signals",
                  "Photos and evidence captured on the spot",
                  "Multi-party confirmations, planned against actual",
                ],
                look: {
                  title: "Confirmations happen where the work does.",
                  body: "When someone in the field marks a milestone complete, everyone connected to the shipment sees it, with the photo attached. No relay through email.",
                },
                screen: <Workspace />,
              },
              {
                id: "dates",
                label: "Key dates",
                title: "Key dates",
                tagline: "The dates that matter most, never buried.",
                points: [
                  "Planned production, cargo ready, cut-off, pickup, departure and arrival",
                  "Every date tracked against one timeline",
                  "The ones that need a decision today, surfaced",
                  "Who confirms what, and by when",
                ],
                screen: <KeyDates />,
              },
              {
                id: "docs",
                label: "Document vault",
                title: "Document vault",
                tagline: "An intelligent space for shipment documents.",
                points: [
                  "Trade, logistics and operational documents on the shipment they belong to",
                  "AI categorisation as files arrive",
                  "Roles and permissions per document",
                  "Smart search across every shipment",
                ],
                screen: <Vault />,
              },
              {
                id: "tasks",
                label: "Tasks and AI",
                title: "From shipment activity to a team that knows what's next",
                tagline: "Assigned work: who owns it, what's due, by when.",
                points: [
                  "AI drafts the first pass of each task",
                  "Routine tasks can be auto-assigned",
                  "Disruptions come with a recommended action",
                  "Your team opens the day with a clear queue",
                ],
                screen: <Tasks />,
              },
            ]}
          />
        </div>
      </section>

      <section id="roles">
        <div className="in">
          <Head
            eyebrow="One shipment truth, different views"
            title="Each role sees exactly what it needs to act. Nothing it doesn't."
            lede="Consignee, forwarder, carrier and finance all see the same shipment through Control Tower, but not the same version of it. Visibility is configurable per shipment, so working across companies never means exposing data that isn't theirs."
          />
          <div style={{ marginTop: 34 }}>
            <Switcher
              label="View the shipment as"
              options={[
                { id: "con", label: "Consignee", content: <RoleCard role="consignee" sees={[["Milestones", "All legs and AI ETA", true], ["Documents", "Booking, inspection, BL draft", true], ["Rates", "Agreed freight rate", true], ["Invoices", "Freight invoice and audit", true]]} /> },
                { id: "fwd", label: "Forwarder", content: <RoleCard role="forwarder" sees={[["Milestones", "All legs, can confirm", true], ["Documents", "Transport documents", true], ["Rates", "Own agreed rate", true], ["Invoices", "", false]]} /> },
                { id: "car", label: "Carrier", content: <RoleCard role="carrier" sees={[["Milestones", "Own legs, can confirm", true], ["Documents", "BL draft, booking", true], ["Rates", "", false], ["Invoices", "", false]]} /> },
                { id: "fin", label: "Finance", content: <RoleCard role="finance" sees={[["Milestones", "Confirmations as evidence", true], ["Documents", "Invoices, letter of credit", true], ["Rates", "Contracted rates", true], ["Invoices", "Audit and approval", true]]} /> },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="light">
        <div className="in two mid">
          <div>
            <Head
              eyebrow="Agentic AI at the core"
              title="AI agents that orchestrate the supply chain for you."
              lede="Instead of only reporting, a coordinated set of agents understands changing conditions, identifies risks, recommends actions and supports execution. They know your organisation, not just the internet, and they work inside Swyftflo rather than in another tab."
            />
            <Agents
              items={[
                { title: "ETA prediction", body: "Predicted arrivals that update before a delay reaches your inbox." },
                { title: "Disruption detection", body: "Port congestion, missed cut-offs and route problems flagged with a recommended action." },
                { title: "Task drafting and auto-assignment", body: "Shipment activity turned into owned tasks, with routine ones assigned for you." },
                { title: "Document categorisation", body: "Files sorted, labelled and permissioned as they arrive." },
              ]}
            />
          </div>
          <figure style={{ margin: 0, ...d(2) }} data-r>
            <AppFrame title="Ask Control Tower" label="Illustration of asking the Control Tower AI on a phone for delayed shipments at a port" search={false}>
              <AiChat>
                <div className="bub u">Show me all shipments delayed at the Port of Singapore.</div>
                <div className="bub a">
                  Found <b>3 delayed shipments</b> at the Port of Singapore. Two are waiting on berth; one has a customs hold.
                </div>
                <div className="bub u">Notify the consignees and draft a new ETA for each.</div>
                <div className="bub a">Done. Three notices drafted for your review, with ETAs of 14, 15 and 15 Nov.</div>
              </AiChat>
              <div className="tiles t2">
                <Tile h="ETA updated" k="SF-23922" s="Track live" tone="sf" />
                <Tile h="Approval needed" k="TY3034" s="Invoice · View actions" tone="wr" />
              </div>
            </AppFrame>
            <figcaption className="caption">Illustration of the Control Tower assistant, as on mobile. Sample data.</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="in">
          <Head eyebrow="What sets it apart" title="Built for the companies on the other side of the PO." />
          <Layers
            items={[
              { who: "Guests", title: "Join a single shipment by one-time passcode", body: "A partner you work with once doesn't need an account to confirm a milestone or upload a document." },
              { who: "Scope", title: "Product and service procurement, not only freight", body: "A workspace can wrap any PO, so service milestones and proof of work are tracked the same way." },
              { who: "Access", title: "Need-to-know, configurable per shipment", body: "Each party sees only what it is entitled to act on." },
              { who: "Finance", core: true, title: "Every confirmation becomes evidence for the invoice audit", body: "Invoice Hub uses the proof of work and confirmations captured here to check what the supplier bills." },
            ]}
          />
          <Caps
            items={[
              { title: "Mobile", body: "Alerts, milestones, confirmations and agent chat from the field, on iOS and Android." },
              { title: "Collaborators", body: "Supply chain managers, warehouse managers, account executives and administrators from every company, in one list." },
              { title: "Live in hours", body: "Deploy, bring your collaborators on board, and start moving shipments in hours, not weeks." },
            ]}
          />
          <NativeAi
            items={[
              { label: "AI-predicted ETAs" },
              { label: "Disruption detection with recommended actions" },
              { label: "Task drafting and auto-assignment" },
              { label: "Document categorisation" },
              { label: "Control Tower AI agent" },
            ]}
          />
        </div>
      </section>

      <CopyrightNotice inline />

      <section className="light">
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs["control-tower"]} />
        </div>
      </section>

      <CtaBand
        title="Put one of your live lanes into Control Tower."
        lede="Pick a lane and a handful of POs. We'll set up the workspace, invite your forwarder and transporter, and show you the same shipment from every side."
        label="Book a Control Tower demo"
        list={["A live lane, tracked by your own references", "Partners invited by passcode", "Role-based views for each party", "AI ETA and disruption alerts", "Confirmations ready for invoice audit"]}
      />

      <Related current="control-tower" />
    </>
  );
}
