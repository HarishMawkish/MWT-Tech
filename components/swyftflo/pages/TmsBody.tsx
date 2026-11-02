import type { CSSProperties } from "react";
import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { Explorer } from "../Explorer";
import { Glyph, type GlyphName } from "../icons";
import { AiChat, AppFrame, Pill, Tile } from "../screens";
import { Switcher } from "../Switcher";
import { AlongsideErp, Caps, CtaBand, d, Faq, Head, Hero, NativeAi, Related, WordList, PhotoStrip } from "../parts";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/* ---------------------------------------------------------------- screens */

function TripTower() {
  const stops: [string, string, "done" | "now" | ""][] = [
    ["Location 1 · ABC Limited", "Cargo loading · exit 08:30", "done"],
    ["Location 2 · Arrow Logistics", "Cargo unloading · ETA 11:40", "now"],
    ["Location 3 · Richard PLC", "Cargo unloading", ""],
    ["Location 4 · Dynamic Trading", "Cargo unloading", ""],
  ];
  return (
    <AppFrame title="TMS Control Tower · Operation 1" search="Search trips, loads, drivers…" label="Illustration of a trip in the TMS control tower: vehicle and driver, four stops with one done and one in progress, and the AI's ETA to the next drop-off" rail={2}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div className="map light" style={{ height: "auto", minHeight: 200 }}>
          <svg viewBox="0 0 200 220" preserveAspectRatio="none" aria-hidden="true">
            {[30, 70, 110, 150, 190].map((y) => (
              <path key={y} d={`M0 ${y} L200 ${y - 20}`} stroke="#dfe3ee" strokeWidth="6" />
            ))}
            {[40, 100, 160].map((x) => (
              <path key={x} d={`M${x} 0 L${x + 20} 220`} stroke="#dfe3ee" strokeWidth="6" />
            ))}
            <path d="M30 40 C 60 70, 40 110, 90 120 S 150 150, 170 190" fill="none" stroke="#b9bdf7" strokeWidth="4" />
            <path d="M30 40 C 60 70, 40 110, 90 120" fill="none" stroke="var(--sf)" strokeWidth="4" />
            <circle cx="90" cy="120" r="9" fill="var(--sf)" className="pulse" />
            <circle cx="90" cy="120" r="6" fill="#fff" stroke="var(--sf)" strokeWidth="3" />
            {[
              [30, 40],
              [128, 140],
              [170, 190],
            ].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="5" fill="#1b2140" />
            ))}
          </svg>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <div className="card-f">
            <div className="row">
              <span>Vehicle</span>
              <b>TRK-2847</b>
            </div>
            <div className="row">
              <span>Driver</span>
              <b>Adam Smith</b>
            </div>
          </div>
          <div className="card-f">
            {stops.map(([a, b, s]) => (
              <div className="row" key={a}>
                <span>
                  <b>{a}</b>
                  <br />
                  <span style={{ color: "var(--app-muted)", fontSize: 9.5 }}>{b}</span>
                </span>
                {s === "done" ? <Pill tone="ok">Done</Pill> : s === "now" ? <Pill tone="in">Next</Pill> : <span />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-f ai" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11 }}>
          <b>✦ ETA to next drop-off</b> · 4 hours 28 minutes
        </span>
        <Pill tone="ok">68% of stops on time</Pill>
      </div>
    </AppFrame>
  );
}

function Intake() {
  return (
    <AppFrame title="Order manager" label="Illustration of transport orders from ERPs selected and grouped into a load with live capacity feedback" rail={1}>
      <div className="chips">
        {["From ERP", "API", "Excel upload", "Manual entry"].map((c, i) => (
          <span key={c} className={`chip${i === 0 ? " on" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="card-f" style={{ overflowX: "auto" }}>
        <div className="h">
          Ready to plan <small>sorted by volume · ascending</small>
        </div>
        <table className="ftab">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>From → to</th>
              <th className="r">Priority</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ORD-2026-8539", "New Customer Inc", "Colombo → Badulla", "High"],
              ["ORD-2026-8540", "Tech Solutions Ltd", "Nairobi → Mombasa", "Medium"],
              ["ORD-2026-8541", "Green Energy Co", "Berlin → Munich", "Low"],
            ].map((r) => (
              <tr key={r[0]}>
                <td>
                  <b>{r[0]}</b>
                </td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td className="r">
                  <Pill tone={r[3] === "High" ? "er" : r[3] === "Medium" ? "wr" : "nt"}>{r[3]}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-f">
        <div className="h">
          ORD-2026-8539 · order items <small>Cold chain 2°C to 8°C · window 13:00 to 15:00</small>
        </div>
        <div className="row">
          <span>SKU-A1001 · Office furniture · 5 pallets · 120×80×100 cm</span>
          <b>250 kg</b>
        </div>
      </div>
      <div className="card-f dark" style={{ display: "flex", justifyContent: "space-between" }}>
        <b style={{ fontSize: 12 }}>6 orders selected</b>
        <span style={{ fontSize: 11 }}>Total 12 CBM · 512 kg</span>
      </div>
    </AppFrame>
  );
}

function Optimizer() {
  return (
    <AppFrame title="Load and route optimiser" label="Illustration of the optimiser running on 8 orders and a load showing capacity and weight utilisation" rail={1}>
      <div className="card-f dark">
        <div className="h">
          ✦ Route optimiser <small style={{ color: "#a9aedc" }}>8 orders</small>
        </div>
        <p style={{ fontSize: 11, color: "#d9dcff" }}>Finding the best routes… 73%</p>
        <div className="prog live" style={{ marginTop: 6, background: "rgba(255,255,255,.15)" }}>
          <i style={{ background: "#a5b4fc" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div className="card-f">
          <div className="h">Load HMT32-3923</div>
          <div className="row">
            <span>Vehicle type</span>
            <b>8.5 ft truck</b>
          </div>
          <div className="row">
            <span>Vehicle ID</span>
            <b>LM-5783</b>
          </div>
          <div className="row">
            <span>Capacity</span>
            <b>200/300 CBM</b>
          </div>
          <div className="row">
            <span>Weight</span>
            <b>28/35 kg</b>
          </div>
        </div>
        <div className="card-f">
          <div className="h">Route</div>
          {["ABC Limited · loading", "Arrow Logistics · unloading", "Richard PLC · unloading", "Dynamic Trading · unloading"].map((s, i) => (
            <div className="row" key={s}>
              <span>
                {i + 1}. {s}
              </span>
            </div>
          ))}
          <div className="row">
            <span>4 stops · 15 km</span>
            <b>4 h</b>
          </div>
        </div>
      </div>
      <div className="chips">
        {["Vehicle CBM capacity", "Max carrying weight", "Running cost", "Accessibility by location", "Delivery window"].map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
      </div>
    </AppFrame>
  );
}

function Schedule() {
  return (
    <AppFrame title="Schedule pickup · October 2026" label="Illustration of assigning a driver and a pickup window to a load, with the assignment timeline and driver capacity" rail={3}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div className="card-f dark">
          <div className="h">Who&rsquo;s hauling this load?</div>
          <div style={{ display: "flex", gap: 6, margin: "6px 0 10px" }}>
            {["NP", "KS", "DF", "RJ"].map((x, i) => (
              <span key={x} style={{ width: 26, height: 26, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 9.5, fontWeight: 800, background: i === 1 ? "var(--sf-2)" : "rgba(255,255,255,.12)", color: "#fff" }}>
                {x}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 10.5, color: "#d9dcff" }}>Wednesday, 21 October · 10:00 to 11:00 · 6 hours · 232 km</p>
          <span className="fbtn em" style={{ display: "inline-block", marginTop: 10 }}>
            Assign and dispatch
          </span>
        </div>
        <div className="card-f">
          <div className="h">Pick a window</div>
          {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((t, i) => (
            <div className="row" key={t}>
              <span>{t}</span>
              {i === 0 ? <Pill tone="in">Selected</Pill> : <span />}
            </div>
          ))}
          <div className="row">
            <span>Notify driver by SMS</span>
            <Pill tone="ok">On</Pill>
          </div>
        </div>
      </div>
      <div className="tiles t2">
        <Tile h="Available drivers" k="11" tone="ok" />
        <Tile h="Total loads" k="03" />
      </div>
      <div className="card-f">
        <div className="row">
          <span>Load #29492 · Logistics International Yard → AL-TAS Health</span>
          <Pill tone="ok">Assigned</Pill>
        </div>
        <div className="row">
          <span>Load #204200 · New Line Limited → Park St, Hamilton</span>
          <Pill tone="nt">Unassigned</Pill>
        </div>
      </div>
    </AppFrame>
  );
}

function CarrierSourcing() {
  return (
    <AppFrame title="Contracts · Carrier contracts · Ridgeline Carriers" label="Illustration of carrier contracts with statuses and a freight RFQ with carrier quotes to negotiate or award" rail={4}>
      <div className="chips">
        {["All", "Require action", "Signed", "Pending", "Requested changes", "Expiring"].map((c, i) => (
          <span key={c} className={`chip${i === 0 ? " on" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="card-f">
        {[
          ["Master carrier agreement", "ok", "Signed"],
          ["Rate confirmation · LD-4482", "wr", "Pending"],
          ["Broker–carrier agreement", "ok", "Signed"],
          ["Fuel surcharge addendum", "in", "Requested changes"],
        ].map(([a, t, s]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b> · Ridgeline Carriers LLC
            </span>
            <Pill tone={t as "ok" | "wr" | "in"}>{s}</Pill>
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">
          Freight RFQ · 8 ft truck load <small>Load 3252525 · 40&prime; high cube</small>
        </div>
        {[
          ["Arrow Line", "USD 5,000.00"],
          ["Sunset Services", "USD 2,000.00"],
          ["Titan Freight Solutions", "USD 1,600.00"],
        ].map(([a, b]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b>
            </span>
            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Pill tone="in">{b}</Pill>
              <span className="fbtn">Negotiate</span>
              <span className="fbtn em">Award</span>
            </span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function Tracking() {
  return (
    <AppFrame title="Live tracking · EV-2017002346" label="Illustration of live vehicle tracking with geofences and an AI alert about an unplanned stop" rail={2}>
      <div className="card-f warn">
        <div className="h" style={{ color: "var(--warn)" }}>
          ⚠ Unplanned stop · 12 min
        </div>
        <p style={{ fontSize: 11 }}>Driver Darrell made an unplanned stop with vehicle LM-6862 at Santa Ana. Next drop: 8502 Preston.</p>
        <span className="fbtn em" style={{ display: "inline-block", marginTop: 6 }}>
          View job
        </span>
      </div>
      <div className="tiles t3">
        <Tile h="Distance to destination" k="5 km" s="Penn Street, Long Branch" />
        <Tile h="Today" k="210 km" s="50 km/h now" />
        <Tile h="Total duration" k="06:23" s="hours" />
      </div>
      <div className="card-f">
        <div className="h">
          Geofences <span className="fbtn">Draw area</span>
        </div>
        {[
          ["Checkpoint Charlie", "Arrival and dwell captured"],
          ["Shop inner city", "Arrival and departure captured"],
          ["The district", "Delivery zone"],
        ].map(([a, b]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b> · {b}
            </span>
            <Pill tone="ok">Active</Pill>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function DriverApp() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 14 }}>
      <div className="phone" style={{ maxWidth: 260 }} role="img" aria-label="Illustration of the driver app showing work order steps and a delivery proven with signature and photo">
        <div className="scr" style={{ minHeight: 440 }}>
          <div className="notch" />
          <div className="pp-head" style={{ background: "linear-gradient(160deg,#4f6df5,#3b4cca)" }}>
            <div className="k">TMS driver app</div>
            <h4 style={{ fontFamily: "var(--display)", fontSize: 18 }}>Trip HT-204299</h4>
            <div className="v">Turn left in 300 m · St. Peter Street · 20 min</div>
          </div>
          <div className="pp-body">
            {[
              ["Enter warehouse", "ok", "Completed"],
              ["Cargo drop-off", "ok", "Completed"],
              ["Sign off", "wr", "Pending"],
              ["Upload POD", "nt", "Pending"],
            ].map(([a, t, s], i) => (
              <div className="pp-row" key={a}>
                <i style={{ fontStyle: "normal", fontSize: 11, fontWeight: 800, color: "var(--sf)" }}>0{i + 1}</i>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <b>{a}</b>
                  <Pill tone={t as "ok" | "wr" | "nt"}>{s}</Pill>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AppFrame title="Delivery success" search={false} label="Illustration of an electronic proof of delivery with recipient, time, signature and photo">
        <div className="card-f">
          <div className="row">
            <span>
              <b>Ethan Walker</b> · delivered to recipient
            </span>
            <Pill tone="ok">09:20</Pill>
          </div>
          <div className="row">
            <span>01 Central London, United Kingdom</span>
            <span className="fbtn">Location</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div className="card-f" style={{ display: "grid", placeItems: "center", minHeight: 80 }}>
            <Glyph name="sign" style={{ width: 54, height: 40, color: "#1b2140" }} />
          </div>
          <div className="card-f" style={{ display: "grid", placeItems: "center", minHeight: 80 }}>
            <Glyph name="box" style={{ width: 40, height: 40, color: "#b07a3c" }} />
          </div>
        </div>
        <div className="card-f">
          <div className="row">
            <span>ePOD uploaded · visible to shipper and finance</span>
            <Pill tone="ok">View</Pill>
          </div>
        </div>
      </AppFrame>
    </div>
  );
}

function Settlement() {
  return (
    <AppFrame title="Trip HT204299 · settlement" label="Illustration of a job with a customer revenue contract and a carrier cost contract, showing gross profit, and freight invoice validation" rail={5}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          ["Customer contract", "Revenue", "USD 1,480.80", "Rate card · per trip"],
          ["Supplier contract", "Cost", "USD 1,250.00", "Committed capacity slab"],
        ].map(([a, b, c, s]) => (
          <div className="card-f" key={a}>
            <div className="h">{a}</div>
            <div className="row">
              <span>{b}</span>
              <b>{c}</b>
            </div>
            <div className="row">
              <span>{s}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="card-f ai" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <b style={{ fontSize: 12 }}>Gross profit</b>
        <b style={{ fontSize: 16, color: "var(--ok)" }}>USD 230.80</b>
      </div>
      <div className="card-f">
        <div className="h">
          Freight invoice · Ridgeline Carriers <Pill tone="ok">Approved by 3</Pill>
        </div>
        {[
          ["Automated invoice generation", "Done"],
          ["Freight charge validation", "Matched to contract"],
          ["Internal approval workflow", "Complete"],
        ].map(([a, b]) => (
          <div className="row" key={a}>
            <span>{a}</span>
            <Pill tone="ok">{b}</Pill>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function Analytics() {
  return (
    <AppFrame title="Transport dashboard" label="Illustration of the transport dashboard with this week's revenue, cost and profit, and job status" rail={0}>
      <div className="tiles t3">
        <Tile h="This week's revenue" k="$50,000" s="+4.6%" tone="ok" />
        <Tile h="This week's cost" k="$25,000" s="+3.1%" tone="er" />
        <Tile h="This week's profit" k="$25,000" s="+6.2%" tone="sf" />
      </div>
      <div className="card-f">
        <div className="h">
          Job summary <small>12 months · 30 days · 7 days · 24 hours</small>
        </div>
        {[
          ["Completed", 84, "g"],
          ["Delivery in progress", 46, ""],
          ["Backhaul jobs", 22, "l"],
          ["Notified", 15, "o"],
          ["Scheduled", 30, "l"],
        ].map(([a, w, c]) => (
          <div className="hb" key={a as string} style={{ marginTop: 6 }}>
            <div className="b">
              <span>{a as string}</span>
              <span className="tr">
                <i className={c as string} style={{ width: `${w}%` } as CSSProperties} />
              </span>
              <span>{w as number}</span>
            </div>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

/* ---------------------------------------------------------------- loop + audiences */

function Loop() {
  const pts: [GlyphName, string][] = [
    ["inbox", "Order intake"],
    ["route", "Plan, optimise"],
    ["contract", "Carrier rates"],
    ["calendar", "Schedule"],
    ["truck", "Dispatch"],
    ["pin", "Live tracking"],
    ["sign", "ePOD"],
    ["coins", "Invoice, payout"],
  ];
  return (
    <div className="loop" role="img" aria-label="The TMS loop: order intake, plan and optimise, carrier rates, schedule, dispatch, live tracking, electronic proof of delivery, invoice and payout, with analytics on every leg at the centre.">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="38" fill="none" stroke="#22322b" strokeWidth=".6" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#34b386" strokeWidth=".8" className="flow" />
      </svg>
      <span className="loop-dot" aria-hidden="true" />
      <div className="center">
        <div>
          <b>TMS</b>
          <span>Analytics on every leg</span>
        </div>
      </div>
      {pts.map(([i, l], k) => {
        const a = ((k / pts.length) * 360 - 90) * (Math.PI / 180);
        return (
          <div key={l} className="lp" style={{ left: `${50 + 38 * Math.cos(a)}%`, top: `${50 + 38 * Math.sin(a)}%` }}>
            <i>
              <Glyph name={i} />
            </i>
            {l}
          </div>
        );
      })}
    </div>
  );
}

function Audience({ who, intro, gets, models }: { who: string; intro: string; gets: string[]; models: string[] }) {
  return (
    <div className="aud-grid">
      <div>
        <p className="lede" style={{ marginTop: 0 }}>
          {intro}
        </p>
        <WordList label={`Typical ${who}`} items={models} />
      </div>
      <div className="cap">
        <h3>What you get</h3>
        <ul>
          {gets.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- page */

export function TmsBody() {
  return (
    <>
      <Hero
        current="tms"
        crumb="TMS"
        eyebrow="Swyftflo Transportation Management System"
        title={
          <>
            Plan, move and settle transport, <em>with AI on every leg.</em>
          </>
        }
        lede="Swyftflo TMS runs the whole transport lifecycle in one workflow: plan, optimise, contract, schedule, dispatch, monitor and invoice. AI-driven routing, planning and predictive insight help shippers, logistics providers and carriers cut planning time and cost across road transport and container movements."
        primary={{ label: "Book a TMS demo", href: "#book" }}
        secondary={{ label: "Who it's for", href: "#audience" }}
        note={
          <>
            <b>Alongside your ERP.</b> The TMS takes transport orders from your ERP or order systems and runs execution with carriers and drivers.
            Proof of delivery and audited transport costs return to the business.
          </>
        }
        visual={
          <figure style={{ margin: 0 }}>
            <TripTower />
            <figcaption className="caption">Illustration of the TMS control tower, simplified. Map is illustrative. Sample data.</figcaption>
          </figure>
        }
      />

      <section className="light">
        <div className="in two mid">
          <div>
            <Head
              eyebrow="TMS in a nutshell"
              title="One loop, from order to payout."
              lede={[
                "Orders arrive by API or Excel, routes are optimised, and loads are contracted to logistics service providers. Drivers and resources are scheduled, with real-time tracking and automatic field updates. Invoicing, payout calculations and analytics close the loop.",
                "First mile, middle mile and last mile run on the same system, so cost, visibility and proof travel with every job.",
              ]}
            />
            <AlongsideErp
              erp={["Sales and purchase orders", "Freight cost posting", "Accounts payable and receivable"]}
              sw={["Load and route planning", "Dispatch, tracking and ePOD", "Freight invoices and carrier payouts"]}
            />
          </div>
          <div data-r style={d(2)}>
            <Loop />
          </div>
        </div>
      </section>

      <section id="audience">
        <div className="in">
          <Head
            eyebrow="Who it serves"
            title="Built for every side of the road."
            lede="Swyftflo publishes the TMS in three editions, one for each kind of transport operator. Pick yours."
          />
          <div style={{ marginTop: 34 }}>
            <Switcher
              label="TMS edition"
              options={[
                {
                  id: "shippers",
                  label: "Shippers",
                  content: (
                    <Audience
                      who="shippers"
                      intro="For manufacturers, distributors, importers and exporters running inbound, outbound and intercompany transport, and buying it from carriers and logistics providers."
                      models={["Manufacturers", "FMCG", "Distributors", "Importers", "Exporters"]}
                      gets={[
                        "One intake layer for every transport order, from ERP, API, file or manual entry",
                        "Loads built by CBM and weight, with routes optimised in the same run",
                        "Carrier sourcing: loads turned into freight RFQs, quotes compared and awarded",
                        "Long-term contracts and rate cards attached to each job",
                        "Automated proof of delivery and chain-of-custody capture",
                        "Walkthrough test and payable audit before carrier payment",
                      ]}
                    />
                  ),
                },
                {
                  id: "intermediaries",
                  label: "Intermediaries",
                  content: (
                    <Audience
                      who="intermediaries"
                      intro="For 3PLs, 4PLs and transport brokers running multi-client, multi-carrier operations, who buy transport and sell transport on the same job."
                      models={["3PLs", "4PLs", "Transport brokers", "Freight forwarders"]}
                      gets={[
                        "A task feed for every transport request: sent, received, assigned and follow-ups",
                        "Paired revenue and cost contracts on one job",
                        "Two-sided settlement: customer invoices and supplier payouts",
                        "Job-level margin, visible per trip",
                        "Rate cards and fleet assignment across clients",
                        "SLA, on-time-in-full and utilisation analytics",
                      ]}
                    />
                  ),
                },
                {
                  id: "carriers",
                  label: "Carriers and fleets",
                  content: (
                    <Audience
                      who="carriers"
                      intro="For carriers and fleet owners managing vehicles, drivers, trips and payouts, and responding to transport requests from shippers and intermediaries."
                      models={["Carriers", "Fleet owners", "Transporters"]}
                      gets={[
                        "A task feed for incoming transport requests and follow-ups",
                        "Fleet, driver and trip management with the driver app",
                        "Invoice generation and instant payout calculations",
                        "Digital running sheets and real-time updates from the field",
                        "Live tracking and geofence events for every trip",
                        "Performance analytics by trip, vehicle and driver",
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <PhotoStrip
        items={[
          { file: "tms-port", alt: "A truck carrying cargo at a container port", cap: "Port and first mile" },
          { file: "tms-truck", alt: "A freight truck on the road", cap: "Road freight, planned and tracked" },
          { file: "tms-container", alt: "A shipping container with its locking bars at a port", cap: "Container pickup and drop-off" },
          { file: "tms-driver", alt: "A driver with a tablet beside a truck", cap: "Drivers, with a job in hand" },
        ]}
      />

      <section className="light" id="explore">
        <div className="in">
          <Head
            eyebrow="From desk to dock to driver's seat"
            title="Every step of the transport lifecycle, in one platform."
            lede="Pick a step to see what it does, then look at the screen your planners, dispatchers, drivers and finance team would use."
          />
          <Explorer
            label="TMS capabilities"
            tabs={[
              {
                id: "intake",
                label: "Order intake",
                title: "One intake layer for every transport order",
                tagline: "From fragmented ERP orders to planning-ready loads.",
                points: [
                  "Orders from ERP, API, file upload or manual entry, in one controlled pool",
                  "Validated, prioritised and prepared for planning automatically",
                  "SKU, quantity, dimensions, weight, delivery window and handling requirements",
                  "Select and group orders into loads with live capacity feedback",
                ],
                screen: <Intake />,
              },
              {
                id: "opt",
                label: "Load and route",
                title: "AI load and route optimisation",
                tagline: "Loads and routes solved together, not one after the other.",
                points: [
                  "Capacity, cost, delivery windows, vehicle restrictions and real-world conditions",
                  "Dynamic load optimisation and delivery sequence intelligence",
                  "Manual load building with capacity and weight gauges",
                  "Stop-by-stop route builder with windows and toll options",
                ],
                look: {
                  title: "From orders to an optimised route, in one run.",
                  body: "The optimiser takes the selected orders, works out the best stop sequence and returns a complete route with distance and stops, ready to confirm.",
                },
                screen: <Optimizer />,
              },
              {
                id: "sched",
                label: "Schedule and dispatch",
                title: "Schedule from the contract, not a spreadsheet",
                tagline: "One timeline from assignment to dispatch.",
                points: [
                  "Assign provider, vehicle and driver, and pick the pickup window",
                  "Confirm resources and notify the people who'll run the trip",
                  "See what's assigned, what's open and driver capacity on one timeline",
                  "Planning agent drafts tomorrow's plan in minutes",
                ],
                screen: <Schedule />,
              },
              {
                id: "carriers",
                label: "Carriers and contracts",
                title: "Source the best carrier for every load",
                tagline: "Every commitment as a self-executing smart contract.",
                points: [
                  "Loads turned into freight RFQs for approved providers",
                  "Carrier quotes compared, negotiated and awarded in one place",
                  "Rate, charging model, validity and scope attached to the job",
                  "Master agreements, rate confirmations and surcharge addenda tracked",
                ],
                screen: <CarrierSourcing />,
              },
              {
                id: "track",
                label: "Tracking and geofences",
                title: "Real-time visibility across every movement",
                tagline: "Live, stop by stop.",
                points: [
                  "Live shipment, carrier and fleet visibility",
                  "Geofences capture arrival, departure and dwell automatically",
                  "AI agents flag unplanned stops and deviations, with a recommended action",
                  "Adaptive AI routing as traffic and priorities change",
                ],
                screen: <Tracking />,
              },
              {
                id: "driver",
                label: "Driver app and ePOD",
                title: "Signed, photographed, confirmed, on the spot",
                tagline: "No paperwork. No delays.",
                points: [
                  "Trip assignments to accept or reject, with live navigation",
                  "Work order steps: enter warehouse, drop-off, sign off, upload POD",
                  "Incident reporting with photos and notes",
                  "ePOD with recipient, time, signature and photo, attached to the job",
                ],
                screen: <DriverApp />,
              },
              {
                id: "settle",
                label: "Invoicing and settlement",
                title: "Create, validate and settle freight invoices",
                tagline: "Buy transport, sell transport, one record.",
                points: [
                  "Automated freight invoice generation",
                  "Freight charges validated against the contract",
                  "Internal approval workflows and instant payout calculations",
                  "Paired revenue and cost contracts with job-level margin",
                ],
                screen: <Settlement />,
              },
              {
                id: "kpi",
                label: "Analytics",
                title: "Every metric that moves transportation",
                tagline: "On one dashboard.",
                points: [
                  "KPIs and metrics overview, with customisable widgets",
                  "Real-time analytics and historical data",
                  "Search and filter across jobs, trips and carriers",
                  "On-time, cost and carrier performance",
                ],
                screen: <Analytics />,
              },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="in">
          <Head
            eyebrow="Built for project and container logistics"
            title="Beyond recurring distribution."
            lede="Project and specialised transport run as first-class jobs on the same planning, execution and settlement backbone."
          />
          <Caps
            items={[
              { title: "Project and multi-leg moves", body: "Multi-leg project logistics planned and tracked as one job." },
              { title: "Oversized and special handling", body: "Heavy and oversized cargo and breakbulk, with handling requirements on the order." },
              { title: "Container pickup, drop-off and repositioning", body: "Container movements alongside distribution, on the same system." },
            ]}
          />
          <WordList label="Flexible commercial models for carrier contracts" items={["Rate cards", "Vehicle category rates", "Committed capacity slabs", "Temperature-controlled billing", "Long-term contracts", "Freight RFQs"]} />
        </div>
      </section>

      <section className="light">
        <div className="in two mid">
          <div>
            <Head
              eyebrow="Planning that happens at AI speed"
              title="Cut planning time from hours to minutes."
              lede="AI agents understand your operations and generate transport plans on request: which deliveries go together, on which vehicles, in which order. Your planners review and adjust instead of starting from a blank sheet."
            />
            <div className="facts" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {[
                ["Up to 40%", "lower transportation costs"],
                ["90%", "less planning time"],
              ].map(([b, s], i) => (
                <div className="fact" key={s} data-r style={d(i + 2)}>
                  <b>{b}</b>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <p className="note">Figures as published by Swyftflo. Actual results depend on network, fleet and data quality.</p>
          </div>
          <figure style={{ margin: 0, ...d(2) }} data-r>
            <AppFrame title="Planning agent" label="Illustration of the planning agent creating tomorrow's distribution plan" search={false}>
              <AiChat title="Planning agent · creating distribution job 3403LK">
                <div className="bub u">Create tomorrow&rsquo;s distribution transport plan for all deliveries from Amsterdam to Rotterdam.</div>
                <div className="bub a">
                  Transport plan created: <b>124 deliveries on 18 vehicles</b>. Low-volume retail stops consolidated into shared routes, high-volume
                  stores prioritised for early dispatch.
                </div>
              </AiChat>
              <div className="tiles t3">
                <Tile h="Deliveries" k="124" />
                <Tile h="Vehicles" k="18" tone="sf" />
                <Tile h="Routes" k="18" tone="ok" />
              </div>
            </AppFrame>
            <figcaption className="caption">Illustration of the TMS planning agent. Sample data.</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="in">
          <Head eyebrow="Native AI" title="AI on every leg." />
          <NativeAi
            items={[
              { label: "AI load and route optimisation" },
              { label: "ETA prediction" },
              { label: "Exception detection" },
              { label: "Planning assistance" },
              { label: "Reporting and business agents" },
            ]}
          />
        </div>
      </section>

      <CopyrightNotice inline />

      <section className="light">
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs.tms} />
        </div>
      </section>

      <CtaBand
        title="Plan tomorrow's deliveries in Swyftflo TMS."
        lede="Send us a day's orders and your fleet. We'll run them through the optimiser, show the loads and routes, and walk through dispatch, ePOD and settlement."
        label="Book a TMS demo"
        list={["Your own orders, optimised", "Loads and routes for your fleet", "Driver app and ePOD walkthrough", "Carrier contracts and rate cards", "Freight invoicing and payouts"]}
      />

      <Related current="tms" />
    </>
  );
}
