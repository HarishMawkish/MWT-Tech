"use client";

import Link from "next/link";
import { useState } from "react";

const paths = {
  new: {
    label: "I'm new to SAP",
    id: "grow" as const,
    href: "/services/grow-with-sap",
    name: "GROW with SAP",
    who: "Designed for companies new to SAP",
    points: [
      "Start with cloud ERP for finance, supply chain or HR",
      "Expand flexibly across SAP solutions as you grow",
      "Subscription packages, tools and services built for growth-focused companies",
    ],
  },
  existing: {
    label: "I already run SAP",
    id: "rise" as const,
    href: "/services/rise-with-sap",
    name: "RISE with SAP",
    who: "Aimed at existing SAP customers",
    points: [
      "SAP Cloud ERP or SAP Cloud ERP Private at the core",
      "Modernize on-premises ECC or S/4HANA in the cloud",
      "An agent-led migration toolchain with a proven methodology",
    ],
  },
};

/**
 * A two-way switch instead of two side-by-side cards: say where you are and the
 * programme that fits you takes the stage. Starts on the page you are reading.
 */
export function PathPicker({ current }: { current: "grow" | "rise" }) {
  const [side, setSide] = useState<"new" | "existing">(current === "grow" ? "new" : "existing");
  const p = paths[side];
  const here = p.id === current;

  return (
    <div className="mx-auto max-w-4xl">
      <div
        role="tablist"
        aria-label="Where are you starting from?"
        className="relative mx-auto grid max-w-md grid-cols-2 rounded-full border border-white/12 bg-white/[0.04] p-1.5"
      >
        {/* sliding thumb */}
        <span
          aria-hidden="true"
          className="absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-[#7fd9b4] shadow-[0_0_24px_rgba(127,217,180,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ transform: side === "existing" ? "translateX(100%)" : "translateX(0)" }}
        />
        {(["new", "existing"] as const).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={side === k}
            onClick={() => setSide(k)}
            className={`relative z-10 min-h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-300 ${
              side === k ? "text-[#02140d]" : "text-white/70 hover:text-white"
            }`}
          >
            {paths[k].label}
          </button>
        ))}
      </div>

      <div
        key={side}
        role="tabpanel"
        className="sap-rise relative mt-8 overflow-hidden rounded-[2rem] border border-[#7fd9b4]/30 bg-gradient-to-b from-[#7fd9b4]/[0.08] to-transparent p-8 sm:p-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#7fd9b4]/15 blur-3xl"
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#7fd9b4]">{p.who}</p>
        <h3 className="relative mt-3 font-display text-4xl text-white sm:text-5xl">{p.name}</h3>
        <ul className="relative mt-7 grid gap-3 sm:grid-cols-1">
          {p.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-base leading-relaxed text-white/75">
              <svg viewBox="0 0 20 20" fill="none" className="mt-1 h-4 w-4 shrink-0 text-[#7fd9b4]" aria-hidden="true">
                <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {pt}
            </li>
          ))}
        </ul>
        <div className="relative mt-9">
          {here ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7fd9b4] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#02140d]">
              You&rsquo;re reading it
            </span>
          ) : (
            <Link href={p.href} className="group inline-flex items-center gap-3 text-sm font-semibold text-white">
              Explore {p.name}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-mw-void transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1.5">
                &rarr;
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
