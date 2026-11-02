import type { ReactNode } from "react";
import { swyftfloFaqs } from "@/lib/swyftflo-pages";
import { Explorer } from "../Explorer";
import { Glyph, type GlyphName } from "../icons";
import { AppFrame, Pill } from "../screens";
import { Switcher } from "../Switcher";
import { Caps, CtaBand, d, Faq, Head, Hero, Related } from "../parts";

/* ---------------------------------------------------------------- screens */

function Passport() {
  const journey: [GlyphName, string, string][] = [
    ["globe", "Raw material", "Origin verified"],
    ["box", "Production", "Batch created"],
    ["clock", "Storage", "Conditions logged"],
    ["truck", "Logistics", "Custody handed over"],
    ["inbox", "Retail", "Received"],
    ["qr", "Customer", "Scanned"],
  ];
  return (
    <AppFrame title="Digital product passport" search={false} label="Illustration of a digital product passport for a batch of single estate tea: origin verified, 24 supply chain events, 5 custody changes all confirmed, authenticity verified">
      <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 10 }}>
        <div className="card-f">
          {journey.map(([i, a, b], k) => (
            <div key={a} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 7, alignItems: "center", padding: "4px 0", position: "relative" }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, display: "grid", placeItems: "center", background: k === 5 ? "#e3a008" : "var(--sf-soft)" }}>
                <Glyph name={i} style={{ width: 13, height: 13, color: k === 5 ? "#fff" : "var(--sf)" }} />
              </span>
              <span style={{ fontSize: 10.5, lineHeight: 1.25 }}>
                <b style={{ display: "block" }}>{a}</b>
                <span style={{ color: "var(--app-muted)", fontSize: 9.5 }}>{b}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="card-f">
          <span className="pill" style={{ background: "#b8860b", color: "#fff" }}>
            DIGITAL PRODUCT PASSPORT
          </span>
          <div style={{ display: "flex", gap: 10, alignItems: "center", margin: "10px 0 8px" }}>
            <span style={{ width: 40, height: 40, borderRadius: 9, background: "#1b2140", display: "grid", placeItems: "center" }}>
              <Glyph name="qr" style={{ width: 24, height: 24, color: "#fff" }} />
            </span>
            <span>
              <b style={{ fontSize: 13, display: "block" }}>Single estate tea, Batch 2026-114</b>
              <span style={{ fontSize: 10, color: "var(--app-muted)" }}>One scan, full verified history</span>
            </span>
          </div>
          {[
            ["Origin", "Verified at source"],
            ["Supply chain events", "24 captured"],
            ["Custody changes", "5, all confirmed"],
            ["Authenticity", "Verified"],
          ].map(([a, b]) => (
            <div className="row" key={a}>
              <span style={{ color: "var(--app-muted)" }}>{a}</span>
              <b>{b}</b>
            </div>
          ))}
          <div className="chips" style={{ marginTop: 8 }}>
            <span className="chip on">Customer view</span>
            <span className="chip">Brand view</span>
            <span className="chip">Regulator view</span>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

function Schema() {
  return (
    <AppFrame title="Schemas · Highland Heritage v3 · Draft" search="Search milestone types…" label="Illustration of a provenance schema with milestones captured automatically from Control Tower or confirmed by stakeholders" rail={1}>
      <div className="chips">
        <span className="chip on">All</span>
        <span className="chip">Auto-captured</span>
        <span className="chip">Manual</span>
        <span className="chip">Mandatory</span>
        <span className="chip" style={{ marginLeft: "auto" }}>
          Gold standard · 4 required milestones
        </span>
      </div>
      <div className="card-f">
        <div className="h">Origin and sourcing</div>
        {[
          ["Barley sourcing", "Farm, variety and harvest year record", "in", "Auto from Control Tower"],
          ["Water source", "Spring or burn provenance record", "in", "Auto from Control Tower"],
          ["Raw material origin", "Geographic source attestation", "ok", "Stakeholder confirms"],
        ].map(([a, b, t, s]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b> · {b}
            </span>
            <Pill tone={t as "in" | "ok"}>{s}</Pill>
          </div>
        ))}
      </div>
      <div className="card-f">
        <div className="h">Production and craft</div>
        {[
          ["Malting", "Steeping, germination and kiln-drying", "ok", "Stakeholder confirms"],
          ["Pot still distillation", "Cut points and spirit volume", "in", "Auto from Control Tower"],
        ].map(([a, b, t, s]) => (
          <div className="row" key={a}>
            <span>
              <b>{a}</b> · {b}
            </span>
            <Pill tone={t as "in" | "ok"}>{s}</Pill>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function Events() {
  const ev: [string, string, string][] = [
    ["Manufacturing completed at Richard M.C.", "15 Apr 2026 · 10:12", "Colombo, Sri Lanka"],
    ["Cargo loading at BIA Ltd", "15 Apr 2026 · 22:00", "Colombo, Sri Lanka"],
    ["Arrived at TRICO Logistics (Pvt) Ltd", "16 Apr 2026 · 08:21", "Colombo, Sri Lanka"],
    ["Customs cleared, export", "17 Apr 2026 · 14:05", "Port of Colombo"],
  ];
  return (
    <AppFrame title="Winter coat · origin Sri Lanka" label="Illustration of a product's supply chain events, each time-stamped, located and verified by named stakeholders" rail={2}>
      <div className="card-f">
        {ev.map(([a, b, c]) => (
          <div key={a} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 8, padding: "6px 0", borderTop: "1px solid #eff0f6" }}>
            <span style={{ width: 16, height: 16, marginTop: 2, borderRadius: "50%", background: "var(--sf)", boxShadow: "0 0 0 3px var(--sf-soft)" }} />
            <span style={{ fontSize: 11 }}>
              <b style={{ display: "block" }}>{a}</b>
              <span style={{ color: "var(--app-muted)", fontSize: 10 }}>
                {b} · {c}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="card-f" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 700 }}>Verified by</span>
        <span className="avs">
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
    </AppFrame>
  );
}

function Generate() {
  return (
    <AppFrame title="Generate passports" label="Illustration of 312 passports and QR codes generated for a batch, ready to download as SVG, PDF or EPS" rail={3}>
      <div className="card-f" style={{ textAlign: "center", padding: 18 }}>
        <div className="h" style={{ justifyContent: "center" }}>
          Glenmhor 18 · Cask No. 1247
        </div>
        <span style={{ width: 70, height: 70, margin: "6px auto", borderRadius: 12, background: "#fff", boxShadow: "0 0 0 1px var(--app-line)", display: "grid", placeItems: "center" }}>
          <Glyph name="qr" style={{ width: 48, height: 48, color: "#1b2140" }} />
        </span>
        <b style={{ display: "block", fontSize: 13 }}>QR codes ready</b>
        <span style={{ fontSize: 10.5, color: "var(--app-muted)" }}>312 passports minted for batch B-2026-04</span>
        <div className="chips" style={{ justifyContent: "center", marginTop: 10 }}>
          <span className="chip">↓ SVG</span>
          <span className="chip">↓ PDF</span>
          <span className="chip">↓ EPS</span>
        </div>
      </div>
    </AppFrame>
  );
}

/* ---------------------------------------------------------------- stakeholder views */

type Row = { t: string; s: string; locked?: boolean };

function Phone({ rows, badge }: { rows: Row[]; badge: string }) {
  return (
    <div className="phone" role="img" aria-label={`Illustration of the passport as the ${badge} sees it`}>
      <div className="scr">
        <div className="notch" />
        <div className="pp-head">
          <div className="k">Glenmhor Distillery · Est. 1879</div>
          <h4>Glenmhor 18 · Cask No. 1247</h4>
          <div className="v">✓ Verified · confidence 84/100 · {badge}</div>
        </div>
        <div className="pp-body">
          {rows.map((r) => (
            <div className="pp-row" key={r.t}>
              <i className={r.locked ? "lk" : "ok"}>{r.locked ? <Glyph name="lock" /> : "✓"}</i>
              <div>
                <b>{r.t}</b>
                <span className={r.locked ? "lock" : undefined}>{r.locked ? "Not shown in this view" : r.s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function View({ intro, rows, badge }: { intro: ReactNode; rows: Row[]; badge: string }) {
  return (
    <div className="views">
      <div>
        <p className="lede" style={{ marginTop: 0 }}>
          {intro}
        </p>
        <div className="see">
          {rows.map((r) => (
            <div key={r.t}>
              <span className={r.locked ? "n" : "y"}>{r.locked ? "–" : "✓"}</span>
              <span>{r.t}</span>
            </div>
          ))}
        </div>
        <p className="see-count">
          {rows.filter((r) => !r.locked).length} of {rows.length} fields shown in this view. The record behind them is the same for every
          audience.
        </p>
      </div>
      <Phone rows={rows} badge={badge} />
    </div>
  );
}

/* ---------------------------------------------------------------- page */

export function AuthentikBody() {
  return (
    <>
      <Hero
        current="authentik"
        crumb="Authentik"
        eyebrow="Swyftflo Authentik"
        title={
          <>
            Provenance <em>written by the supply chain itself.</em>
          </>
        }
        lede="Other product passports are filled in by hand after the fact. Authentik runs on the Control Tower, so the sourcing, production and logistics events Swyftflo already captures become a time-stamped, verifiable product history as they happen. One scan shows the whole journey."
        primary={{ label: "Book an Authentik demo", href: "#book" }}
        secondary={{ label: "See the stakeholder views", href: "#views" }}
        note={
          <>
            <b>About the names.</b> Authentik is Swyftflo&rsquo;s provenance product. A digital product passport (DPP) is the structured, verifiable
            record it produces for each product, batch or serial number.
          </>
        }
        visual={
          <figure style={{ margin: 0 }}>
            <Passport />
            <figcaption className="caption">Illustration of a digital product passport, simplified. Sample data.</figcaption>
          </figure>
        }
      />

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="The trust problem"
              title="Trust is getting harder to prove, and easier to fake."
              lede={[
                "Counterfeit products, unverifiable sourcing, fragmented supplier networks and growing regulatory pressure all expose the same weakness: modern commerce can't easily prove where something came from.",
                "Counterfeit supply chains now replicate packaging, labels and product experiences with alarming accuracy, so consumers can no longer tell what's real. Organisations that can verify authenticity, provenance and compliance at scale will define the next generation of trusted commerce.",
              ]}
            />
          </div>
          <div className="tbl" data-r style={{ ...d(2), marginTop: 0 }}>
            <table style={{ minWidth: 0 }}>
              <thead>
                <tr>
                  <th className="hl">True provenance</th>
                  <th>Not provenance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Automatically captured operational events", "Manually uploaded records"],
                  ["Continuously evolving product history", "Static product documentation"],
                  ["Built-in trust and verification layers", "No authenticity verification"],
                  ["Generated as events happen", "Assembled after events occur"],
                ].map(([a, b]) => (
                  <tr key={a}>
                    <td className="hl" style={{ whiteSpace: "normal", fontWeight: 600 }}>
                      {a}
                    </td>
                    <td className="m">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="in">
          <Head
            eyebrow="The only DPP that writes itself"
            title="Every event in a product's life, captured as it happens."
            lede="Because Swyftflo already runs the procurement, contracting and logistics layer beneath your supply chain, each milestone is captured automatically, verified and time-stamped the moment it happens, and connected to the product's evolving digital identity."
          />
          <div className="chev" data-r style={d(3)} aria-label="A product's journey">
            {["Raw material", "Production", "Storage", "Logistics", "Retail"].map((s, i) => (
              <span key={s} className={i % 2 ? "k" : undefined}>
                {s}
              </span>
            ))}
            <span className="end">Customer scan</span>
          </div>
          <Caps
            items={[
              { title: "Material and origin traceability", body: "Where each material came from, attested at source." },
              { title: "Supplier and facility verification", body: "The suppliers and sites behind every claim, verified." },
              { title: "Batch and serial-level provenance", body: "History down to the individual batch or serial number." },
              { title: "Multi-source provenance validation", body: "Claims checked against more than one source before they count." },
              { title: "Chain-of-custody visibility", body: "Every hand-over, confirmed by the parties involved." },
              { title: "Passports and QR identities at scale", body: "Secure, verifiable passports for thousands of products at once." },
            ]}
          />
        </div>
      </section>

      <section className="light" id="views">
        <div className="in">
          <Head
            eyebrow="One provenance layer, multiple views"
            title="Each audience sees the history it needs."
            lede="Instead of exposing identical information to everyone, Authentik structures what each stakeholder sees, all powered by the same connected product record. Switch the view to see the difference."
          />
          <div style={{ marginTop: 34 }}>
            <Switcher
              label="View the passport as"
              options={[
                {
                  id: "consumer",
                  label: "Consumer",
                  content: (
                    <View
                      badge="consumer view"
                      intro="A shopper scans the bottle and sees what proves it's genuine and where it came from, in plain language."
                      rows={[
                        { t: "Speyside · Scotland PGI", s: "Barley sourcing → field registry" },
                        { t: "Crisp Malting · floor malted", s: "Crisp Malting Group" },
                        { t: "Pot still distillation", s: "Glenmhor Distillery" },
                        { t: "Authenticity", s: "Verified for this cask" },
                        { t: "Supplier contracts and volumes", s: "", locked: true },
                      ]}
                    />
                  ),
                },
                {
                  id: "regulator",
                  label: "Regulator",
                  content: (
                    <View
                      badge="regulator view"
                      intro="An inspector sees the compliance-grade record: attestations, certificates and the chain of custody, with who confirmed each step."
                      rows={[
                        { t: "Origin attestation", s: "Geographic source, stakeholder confirmed" },
                        { t: "Facility verification", s: "Distillery licence and inspection record" },
                        { t: "Chain of custody", s: "5 custody changes, all confirmed" },
                        { t: "Time-stamped event log", s: "24 events, from field to bottling" },
                        { t: "Retail pricing", s: "", locked: true },
                      ]}
                    />
                  ),
                },
                {
                  id: "partner",
                  label: "B2B partner",
                  content: (
                    <View
                      badge="partner view"
                      intro="A distributor sees what it needs to trade and ship the product: batch identity, handling and logistics history."
                      rows={[
                        { t: "Batch and serial identity", s: "Batch B-2026-04 · 312 passports" },
                        { t: "Logistics history", s: "Custody hand-overs and conditions logged" },
                        { t: "Storage conditions", s: "Temperature and humidity within range" },
                        { t: "Authenticity", s: "Verified" },
                        { t: "Producer costs", s: "", locked: true },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="explore">
        <div className="in">
          <Head
            eyebrow="One space for your products' supply chain events"
            title="From schema to scan."
            lede="Pick a part of Authentik to see what it does, then look at the screen your brand, quality and compliance teams would use."
          />
          <Explorer
            label="Authentik capabilities"
            tabs={[
              {
                id: "schema",
                label: "Provenance schemas",
                title: "Provenance schemas",
                tagline: "Decide what a passport must prove.",
                points: [
                  "Milestone types for origin, production, transformation, transport and storage",
                  "Auto-captured from Control Tower, or confirmed by a stakeholder",
                  "Mandatory milestones and standards with required steps",
                  "Versioned schemas per product line",
                ],
                look: {
                  title: "Most of the passport fills itself.",
                  body: "Milestones marked 'Auto from Control Tower' come straight from real events. Only what the system can't see needs a named stakeholder to confirm it.",
                },
                screen: <Schema />,
              },
              {
                id: "events",
                label: "Supply chain events",
                title: "Every milestone, connected to the product",
                tagline: "Time-stamped, located and verified.",
                points: [
                  "Sourcing, production, transformation, transportation, storage and delivery",
                  "Each event time-stamped, located and tied to the product's identity",
                  "Verified by the stakeholders involved",
                  "A continuously evolving product history",
                ],
                screen: <Events />,
              },
              {
                id: "gen",
                label: "Passports at scale",
                title: "Generate passports at scale",
                tagline: "Secure QR identities for thousands of products.",
                points: [
                  "Digital product passports generated per batch or serial number",
                  "QR identities downloadable as SVG, PDF or EPS",
                  "Publish, manage and govern passports in one environment",
                  "Origin, composition, lifecycle and sustainability information in one record",
                ],
                screen: <Generate />,
              },
            ]}
          />
        </div>
      </section>

      <section className="light">
        <div className="in two">
          <div>
            <Head
              eyebrow="Proactively protect your brand"
              title="Consumers shouldn't have to choose blindly."
              lede="A verifiable history with a single scan builds consumer trust, reduces counterfeit risk and strengthens brand protection, while giving compliance teams continuous, audit-ready evidence instead of a document hunt before each inspection."
            />
          </div>
          <div className="includes" data-r style={d(2)}>
            {[
              { t: "Build consumer trust", b: "Show the real journey behind a product, not a marketing claim." },
              { t: "Reduce counterfeit risk", b: "Authenticity checked against the product's own verified record." },
              { t: "Compliance-grade visibility", b: "A structured passport designed for regulatory scrutiny and long-term scale." },
              { t: "Part of the suite", b: "Runs on Control Tower events and the sourcing records from Source to Pay." },
            ].map((f) => (
              <div key={f.t}>
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="in">
          <Head eyebrow="Questions we hear" title="Straight answers." />
          <Faq items={swyftfloFaqs.authentik} />
        </div>
      </section>

      <CtaBand
        title="Build a passport for one of your products."
        lede="Choose a product line. We'll map its supply chain events, show which ones Swyftflo can capture automatically, and build a sample passport with consumer and regulator views."
        label="Book an Authentik demo"
        list={["Your product journey, mapped", "Which milestones capture themselves", "A sample passport and QR identity", "Consumer, regulator and partner views", "What it takes to scale to every batch"]}
      />

      <Related current="authentik" />
    </>
  );
}
