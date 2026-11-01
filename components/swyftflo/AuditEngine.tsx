"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Glyph, type GlyphName } from "./icons";

// One invoice, two ways of checking it. The PO was raised at the supplier's quoted price, so PO, receipt and
// invoice all agree and a 3-way match approves it. Only the contract shows the agreed rate was lower.
// The example figures follow Swyftflo's own audit-report illustration (425.00 billed against 400.00 agreed).

type Src = { id: string; name: string; what: string; icon: GlyphName; classic: boolean; ok: boolean; result: string; angle: number };

const SOURCES: Src[] = [
  { id: "po", name: "Purchase order", what: "What was ordered", icon: "doc", classic: true, ok: true, result: "Matched · 100 units at 425.00", angle: -90 },
  { id: "con", name: "Contract", what: "Agreed rates and terms", icon: "contract", classic: false, ok: false, result: "Price above agreed rate · 400.00 per unit", angle: -30 },
  { id: "grn", name: "GRN / SRN", what: "What was received", icon: "box", classic: true, ok: true, result: "Matched · 100 units received, no damage", angle: 30 },
  { id: "pow", name: "Proof of work", what: "Evidence from the field", icon: "camera", classic: false, ok: true, result: "Matched · delivery photos and ePOD", angle: 90 },
  { id: "cnf", name: "Confirmations", what: "Multi-party sign-off", icon: "users", classic: false, ok: true, result: "2 of 2 confirmed", angle: 150 },
  { id: "inv", name: "Invoice", what: "What is billed", icon: "receipt", classic: true, ok: true, result: "No duplicate · tax correct", angle: 210 },
];

type State = "idle" | "checking" | "done" | "flag";

export function AuditEngine() {
  const [mode, setMode] = useState<3 | 6>(6);
  const [states, setStates] = useState<Record<string, State>>({});
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);

  const active = SOURCES.filter((s) => mode === 6 || s.classic);
  const finished = step >= active.length;
  const caught = mode === 6;

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  useEffect(() => clear, []);

  const run = (m: 3 | 6 = mode) => {
    clear();
    const list = SOURCES.filter((s) => m === 6 || s.classic);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setStates({});
    setStep(0);
    setRunning(true);
    if (reduce) {
      setStates(Object.fromEntries(list.map((s) => [s.id, s.ok ? "done" : "flag"])));
      setStep(list.length);
      setRunning(false);
      return;
    }
    const T = 520;
    list.forEach((s, i) => {
      timers.current.push(window.setTimeout(() => setStates((p) => ({ ...p, [s.id]: "checking" })), i * T));
      timers.current.push(
        window.setTimeout(() => {
          setStates((p) => ({ ...p, [s.id]: s.ok ? "done" : "flag" }));
          setStep(i + 1);
        }, i * T + T * 0.8),
      );
    });
    timers.current.push(window.setTimeout(() => setRunning(false), list.length * T + 100));
  };

  const switchMode = (m: 3 | 6) => {
    setMode(m);
    clear();
    setStates({});
    setStep(-1);
    setRunning(false);
  };

  return (
    <div className="audit">
      <div className="wheel" role="img" aria-label={`Diagram of the ${mode}-way audit: ${active.map((s) => s.name).join(", ")} checked around the AI audit engine.`}>
        <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="36" className="ringpath" />
        </svg>
        <div className="core">
          <div>
            <b>{mode}-Way</b>
            <span>{mode === 6 ? "AI audit engine" : "Classic match"}</span>
          </div>
        </div>
        {SOURCES.map((s) => {
          const a = (s.angle * Math.PI) / 180;
          const on = mode === 6 || s.classic;
          const st = states[s.id] ?? "idle";
          return (
            <div
              key={s.id}
              className={`node ${s.classic ? "classic" : "added"}${on ? "" : " off"}${st !== "idle" ? ` ${st}` : ""}`}
              style={{ left: `${50 + 38 * Math.cos(a)}%`, top: `${50 + 38 * Math.sin(a)}%` } as CSSProperties}
            >
              <span className="disc">
                <Glyph name={st === "flag" ? "alert" : st === "done" ? "check" : s.icon} />
              </span>
              <b>{s.name}</b>
              <span>{s.what}</span>
            </div>
          );
        })}
      </div>

      <div className="auditlog">
        <div className="run">
          <div className="mode" role="group" aria-label="Matching method">
            <button type="button" aria-pressed={mode === 3} onClick={() => switchMode(3)}>
              3-way match
            </button>
            <button type="button" aria-pressed={mode === 6} onClick={() => switchMode(6)}>
              6-way audit
            </button>
          </div>
          <button type="button" className="btn pri" onClick={() => run()} disabled={running} style={{ opacity: running ? 0.6 : 1, cursor: running ? "default" : "pointer" }}>
            {step === -1 ? "Run the audit" : "Run again"} <span className="ar">→</span>
          </button>
        </div>

        <div className="screen" aria-live="polite">
          <div className="shell">
            <span className="logo">
              <i />
              swyftflo
            </span>
            <span className="t">AI audit report · INV-3291 · 8 documents</span>
            <span className="ai" />
          </div>
          <div className="body-pad">
            <div className="card-f">
              {active.map((s, i) => {
                const st = states[s.id];
                return (
                  <div className="row" key={s.id} style={{ opacity: step === -1 || i < Math.max(step, 0) || st === "checking" ? 1 : 0.35 }}>
                    <span>
                      <b>{s.name}</b>
                    </span>
                    {st === "done" ? (
                      <span className="pill ok">{s.result}</span>
                    ) : st === "flag" ? (
                      <span className="pill er">{s.result}</span>
                    ) : st === "checking" ? (
                      <span className="pill in">Checking…</span>
                    ) : (
                      <span className="pill nt">Waiting</span>
                    )}
                  </div>
                );
              })}
            </div>
            {finished &&
              (caught ? (
                <div className="card-f bad tabpane">
                  <div className="h" style={{ color: "var(--bad)" }}>
                    Discrepancy found · routed to procurement
                  </div>
                  <p style={{ fontSize: 11.5 }}>
                    Line price 425.00 is above the contracted rate of 400.00 on 100 units, an overcharge of <b>2,500.00</b>. The other five
                    sources match.
                  </p>
                </div>
              ) : (
                <div className="card-f warn tabpane">
                  <div className="h" style={{ color: "var(--warn)" }}>
                    Approved · 3 of 3 matched
                  </div>
                  <p style={{ fontSize: 11.5 }}>
                    The PO, receipt and invoice agree, so the invoice is paid. The 2,500.00 overcharge against the contract goes unnoticed.
                  </p>
                </div>
              ))}
            {step === -1 && <p style={{ fontSize: 11.5, color: "var(--app-muted)" }}>Choose a method and run the audit on the same invoice.</p>}
          </div>
        </div>
        <p className="caption">Illustration with sample data. The three added sources are captured during execution, in Source to Pay and Control Tower.</p>
      </div>
    </div>
  );
}
