"use client";

import { useState } from "react";

type Mod = { id: string; label: string; group: "Start with" | "Add later"; detail: string };

// Details are SAP's own descriptions of each area.
const mods: Mod[] = [
  { id: "fin", label: "Finance", group: "Start with", detail: "Order-to-cash, procure-to-pay, record-to-report and financial management." },
  { id: "sc", label: "Supply chain", group: "Start with", detail: "Manufacturing, logistics, asset management and warehousing." },
  { id: "hr", label: "HR", group: "Start with", detail: "Hire-to-retire, payroll, time tracking and organizational management." },
  { id: "ai", label: "Agentic AI", group: "Add later", detail: "AI agents and Joule on the same system, with no new platform." },
  { id: "ext", label: "Extensions", group: "Add later", detail: "Application extensions that fit your business without breaking the standard." },
  { id: "int", label: "Integrations", group: "Add later", detail: "Advanced integration tools to connect the rest of your landscape." },
];

/**
 * "Grow into more", as a configurator in the manner of a car or a plan builder:
 * switch capabilities on and watch the platform fill in. The point it makes is
 * SAP's own: more capability is added to the same system, with no
 * re-implementation. Starts with Finance on.
 */
export function Configurator() {
  const [on, setOn] = useState<Set<string>>(new Set(["fin"]));

  const toggle = (id: string) =>
    setOn((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const pct = (on.size / mods.length) * 100;
  const active = mods.filter((m) => on.has(m.id));

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div>
        {(["Start with", "Add later"] as const).map((g) => (
          <div key={g} className="mb-6 last:mb-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">{g}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {mods
                .filter((m) => m.group === g)
                .map((m) => {
                  const lit = on.has(m.id);
                  return (
                    <button
                      key={m.id}
                      type="button"
                      role="switch"
                      aria-checked={lit}
                      onClick={() => toggle(m.id)}
                      className={`group relative flex min-h-28 flex-col justify-between overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
                        lit
                          ? "border-[#7fd9b4]/60 bg-[#0e3a2b]/70 shadow-[0_0_40px_-6px_rgba(127,217,180,0.45)]"
                          : "border-dashed border-white/20 bg-white/[0.02] hover:border-white/40"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 bg-[linear-gradient(rgba(127,217,180,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(127,217,180,0.12)_1px,transparent_1px)] bg-[size:22px_22px] transition-opacity duration-700 ${
                          lit ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <span className={`relative text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${lit ? "text-[#7fd9b4]" : "text-white/35"}`}>
                        {lit ? "Active" : "Off"}
                      </span>
                      <span className={`relative font-display text-lg transition-colors ${lit ? "text-white" : "text-white/60"}`}>{m.label}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
        <p className="mt-6 text-sm text-white/50">Switch things on and off to see how the platform fills in.</p>
      </div>

      {/* readout */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04100b] p-7 sm:p-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#1c6b51]/35 blur-3xl"
        />
        <div className="relative flex items-center gap-6">
          <div className="relative h-24 w-24 shrink-0">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#7fd9b4"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 42}
                strokeDashoffset={2 * Math.PI * 42 * (1 - pct / 100)}
                style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.23,1,0.32,1)", filter: "drop-shadow(0 0 6px rgba(127,217,180,0.7))" }}
              />
            </svg>
            <span className="absolute inset-0 grid place-items-center font-display text-xl font-bold text-white">
              {on.size}/{mods.length}
            </span>
          </div>
          <div>
            <p className="font-display text-2xl text-white">Same system throughout.</p>
            <p className="mt-1 text-sm text-white/55">No re-implementation as you add more.</p>
          </div>
        </div>

        <ul className="relative mt-7 min-h-[11rem] space-y-3 border-t border-white/10 pt-6" aria-live="polite">
          {active.length === 0 && <li className="text-sm text-white/45">Nothing switched on yet.</li>}
          {active.map((m) => (
            <li key={m.id} className="sap-rise flex items-start gap-3 text-sm leading-relaxed text-white/75">
              <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[#7fd9b4]" aria-hidden="true">
                <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                <span className="font-semibold text-white">{m.label}.</span> {m.detail}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOn(new Set(["fin"]))}
          className="relative mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#7fd9b4]"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
