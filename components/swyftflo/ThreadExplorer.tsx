"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Glyph } from "./icons";

// "One digital thread, two clear responsibilities": the six steps of a transaction, and who does what at each.
// Content from Swyftflo's 2026 capability overview.
const STEPS = [
  {
    name: "Requirement",
    erp: "Requisition approved and budget checked.",
    sw: "Requirement received through the API, or created in the platform.",
    partners: null,
    api: true,
  },
  {
    name: "Source and negotiate",
    erp: null,
    sw: "RFx, bid comparison, evaluation, negotiation and reverse auction.",
    partners: "Quote, revise, counter and bid live.",
    api: false,
  },
  {
    name: "Award and order",
    erp: "PO created as the record.",
    sw: "Award and contract. The PO is linked and shared with the supplier.",
    partners: "Accept and confirm commitments.",
    api: true,
  },
  {
    name: "Execute and track",
    erp: null,
    sw: "Control Tower: milestones, live tracking, documents and tasks.",
    partners: "Update milestones and upload documents.",
    api: false,
  },
  {
    name: "Receive",
    erp: "GRN posted to inventory.",
    sw: "Proof of work and delivery confirmations captured.",
    partners: "Confirm delivery and handover.",
    api: true,
  },
  {
    name: "Verify and pay",
    erp: "Approved invoice posted and paid.",
    sw: "6-way AI audit, exceptions routed, approval.",
    partners: "Submit the invoice with evidence attached.",
    api: true,
  },
];

export function ThreadExplorer() {
  const [i, setI] = useState(2);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = STEPS[i];

  const onKey = (e: KeyboardEvent) => {
    let n = i;
    if (e.key === "ArrowRight") n = Math.min(STEPS.length - 1, i + 1);
    else if (e.key === "ArrowLeft") n = Math.max(0, i - 1);
    else return;
    e.preventDefault();
    setI(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="tx">
      <div className="tx-steps" role="tablist" aria-label="Steps of a transaction" onKeyDown={onKey}>
        {STEPS.map((st, k) => (
          <button
            key={st.name}
            ref={(el) => {
              refs.current[k] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-${k}`}
            aria-selected={k === i}
            aria-controls={`${base}-p`}
            tabIndex={k === i ? 0 : -1}
            onClick={() => setI(k)}
          >
            <i>STEP {k + 1}</i>
            {st.name}
          </button>
        ))}
      </div>
      <div className="tx-rows tx-fade" key={i} role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-${i}`}>
        <div className="tx-row">
          <div className="who">
            <span className="tx-dot">
              <Glyph name="erp" />
            </span>
            <span>
              <b>Your ERP</b>
              <span>System of record</span>
            </span>
          </div>
          <div className="what">
            {s.erp ? (
              <>
                {s.erp}
                {s.api && <span className="api">⇅ API</span>}
              </>
            ) : (
              <span className="empty">Nothing to do here. This step happens between companies.</span>
            )}
          </div>
        </div>
        <div className="tx-row sf">
          <div className="who">
            <span className="tx-dot">
              <Glyph name="layers" />
            </span>
            <span>
              <b>Swyftflo</b>
              <span>Inter-enterprise layer</span>
            </span>
          </div>
          <div className="what">{s.sw}</div>
        </div>
        <div className="tx-row">
          <div className="who">
            <span className="tx-dot">
              <Glyph name="users" />
            </span>
            <span>
              <b>Partners</b>
              <span>Suppliers and providers</span>
            </span>
          </div>
          <div className="what">{s.partners ?? <span className="empty">Not involved yet.</span>}</div>
        </div>
      </div>
    </div>
  );
}
