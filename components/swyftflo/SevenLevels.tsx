"use client";

import { useState } from "react";

// "One agent. Seven levels of intelligence." A simple question stops at level one; a hard one uses all seven.
// The level names are Swyftflo's; the example questions use the brochure's packaging-spend scenario.
const LEVELS = [
  {
    name: "Answer",
    sub: "What happened?",
    q: "How much did we spend on packaging this quarter?",
    a: "Packaging spend was 8% higher than last quarter.",
    ev: "Computed from your data · 1,284 invoice lines",
  },
  {
    name: "Explain",
    sub: "Why did it happen?",
    q: "Why did packaging spend rise 8% this quarter?",
    a: "Most of the rise came from price, not volume: +6.1% price, +1.4% volume, +0.5% mix. Two suppliers billed above their contracted rates.",
    ev: "Price-volume-mix bridge · contract rates from sourcing awards",
  },
  {
    name: "Connect",
    sub: "What else is linked?",
    q: "Are those two suppliers late as well?",
    a: "One of them also has a rising late-delivery trend on open purchase orders.",
    ev: "Joined with execution delays from Control Tower",
  },
  {
    name: "Predict",
    sub: "What comes next?",
    q: "Where will packaging spend land by year end?",
    a: "On the current pace it lands above budget. The forecast is shown with an 80% range and its method.",
    ev: "Statistical forecast · labelled as a forecast",
  },
  {
    name: "Simulate",
    sub: "What if we act?",
    q: "What if 30% of the category moves to supplier B?",
    a: "Category cost over 12 months falls by about 4.3%, with supplier B's share rising from 22% to 52%. Assumptions are listed in full.",
    ev: "What-if scenario · assumptions listed",
  },
  {
    name: "Watch",
    sub: "Tell me when it changes.",
    q: "Tell me if any packaging supplier bills above contract again.",
    a: "Subscribed. You'll get a finding with the value attached the day it appears.",
    ev: "Findings engine · runs daily and after every data load",
  },
  {
    name: "Recommend",
    sub: "What should we do?",
    q: "What should we do about packaging?",
    a: "Packaging is bought from 9 suppliers, 41% off-contract. Consolidate to a sourcing event with the top 3, and renegotiate the two above-contract suppliers.",
    ev: "Recommendation · added to the opportunity register on approval",
  },
];

export function SevenLevels() {
  const [i, setI] = useState(1);
  const L = LEVELS[i];
  return (
    <div className="levels">
      <div className="lv-list" role="tablist" aria-label="Levels of intelligence">
        {LEVELS.map((l, k) => (
          <button key={l.name} type="button" role="tab" aria-selected={k === i} className={k <= i ? "lit" : undefined} onClick={() => setI(k)}>
            <span className="num">{k + 1}</span>
            <span>
              {l.name}
              <br />
              <small>{l.sub}</small>
            </span>
            <span aria-hidden="true" style={{ color: "var(--muted)", fontSize: 12 }}>
              {k <= i ? "used" : ""}
            </span>
          </button>
        ))}
      </div>
      <div role="tabpanel" aria-live="polite">
        <div className="screen tabpane" key={i}>
          <div className="shell">
            <span className="logo">
              <i />
              swyftflo
            </span>
            <span className="t">Spend agent</span>
            <span className="ai" />
            <span className="av">CM</span>
          </div>
          <div className="body-pad">
            <div className="msgs">
              <div className="bub u">{L.q}</div>
              <div className="bub a">{L.a}</div>
            </div>
            <div className="chips">
              <span className="chip">✓ {L.ev}</span>
            </div>
            <div className="card-f">
              <div className="h">
                Levels used in this answer <small>{i + 1} of 7</small>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                {LEVELS.map((l, k) => (
                  <span
                    key={l.name}
                    title={l.name}
                    style={{
                      height: 8,
                      borderRadius: 4,
                      background: k <= i ? "var(--sf)" : "#e6e8f2",
                      transition: "background-color .25s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="caption">Illustration with sample data. A simple question stops at level one; a hard one uses all seven in a single answer.</p>
      </div>
    </div>
  );
}
