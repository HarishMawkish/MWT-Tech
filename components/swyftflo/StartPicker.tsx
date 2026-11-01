"use client";

import Link from "next/link";
import { useState } from "react";
import { productBySlug, productPath, type ProductSlug } from "./data";

// "Starts small, connects fast": pick the problem that costs you most today, see which product closes it first,
// and what it connects to next. The pairings follow the thread in Swyftflo's own material.
const PAINS: { pain: string; slug: ProductSlug; why: string; gets: string[]; next: ProductSlug; nextWhy: string }[] = [
  {
    pain: "Quotes and negotiations live in inbox threads and spreadsheets.",
    slug: "source-to-pay",
    why: "Every quote, revision and negotiation round moves into one record, with suppliers responding inside it.",
    gets: ["RFQs, RFPs and tenders in one place", "Bids side by side with committee scoring", "A defensible audit trail for every award"],
    next: "invoice-hub",
    nextWhy: "the award becomes the contract each invoice is audited against.",
  },
  {
    pain: "We find out about shipment delays after our customer does.",
    slug: "control-tower",
    why: "Every PO or shipment gets a live, shared workspace, and AI agents flag disruptions before they hit the schedule.",
    gets: ["Track by PO, BL, air waybill or container", "AI-predicted ETAs on every leg", "Suppliers, forwarders and customs on one record"],
    next: "invoice-hub",
    nextWhy: "every confirmation captured becomes evidence for the invoice that follows.",
  },
  {
    pain: "We pay invoices we can't fully check against what was delivered.",
    slug: "invoice-hub",
    why: "Each invoice is checked against six sources, not three, and only real exceptions reach a person.",
    gets: ["Contract, proof of work and confirmations added to the match", "Tolerances so small gaps don't hold payment", "An audit report with evidence for every finding"],
    next: "control-tower",
    nextWhy: "it captures the proof of work and confirmations the audit relies on.",
  },
  {
    pain: "Planning trucks and routes takes hours, and transport costs keep creeping up.",
    slug: "tms",
    why: "Orders become optimised loads and routes in one run, and every trip is tracked, proven and settled in the same system.",
    gets: ["AI load and route optimisation", "Driver app with electronic proof of delivery", "Transport invoicing and carrier payouts"],
    next: "spend-intelligence",
    nextWhy: "freight spend from the TMS feeds the same view as the rest of your spend.",
  },
  {
    pain: "Nobody can say where our spend leaks or whether savings were real.",
    slug: "spend-intelligence",
    why: "One governed view of spend, a findings engine that looks for leakage every day, and savings tracked until they show up in what was paid.",
    gets: ["Answers in plain language, with evidence", "Daily findings with the value attached", "Identified, validated and realised savings"],
    next: "source-to-pay",
    nextWhy: "each insight can launch the next sourcing event.",
  },
  {
    pain: "Customers and regulators want proof of origin we can't easily give.",
    slug: "authentik",
    why: "A digital product passport built from the events Swyftflo already captures, verified and time-stamped as they happen.",
    gets: ["Batch and serial-level provenance", "QR identities at scale", "Separate consumer, regulator and partner views"],
    next: "control-tower",
    nextWhy: "Authentik runs on the Control Tower's record of real events.",
  },
];

export function StartPicker() {
  const [i, setI] = useState<number | null>(null);
  const p = i === null ? null : PAINS[i];
  const prod = p ? productBySlug(p.slug) : null;
  const next = p ? productBySlug(p.next) : null;

  return (
    <div className="pick">
      <div className="pick-qs" role="radiogroup" aria-label="What costs you most today?">
        {PAINS.map((x, k) => (
          <button key={x.pain} type="button" role="radio" aria-checked={i === k} onClick={() => setI(k)}>
            <span className="rb" aria-hidden="true" />
            <span>{x.pain}</span>
          </button>
        ))}
      </div>
      <aside className="pick-res" aria-live="polite">
        <div className="lab">Where to start</div>
        {p && prod && next ? (
          <div className="tabpane" key={p.slug + i}>
            <h3>{prod.name}</h3>
            <p>{p.why}</p>
            <ul>
              {p.gets.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p className="then">
              <b>Then connect {next.short}:</b> {p.nextWhy}
            </p>
            <div className="acts">
              <Link href={productPath(p.slug)} className="btn pri">
                Explore {prod.short} <span className="ar">→</span>
              </Link>
              <a href="#book" className="btn sec">
                Talk it through
              </a>
            </div>
          </div>
        ) : (
          <>
            <h3>Pick the problem that costs you most today.</h3>
            <p>
              Swyftflo is modular. Most companies begin with one product or one lane, prove the value, and extend along the
              same thread. Choose a problem on the left to see where that usually starts.
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
