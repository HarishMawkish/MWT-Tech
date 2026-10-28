"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { disputeLog, flowSteps, photos } from "./data";

/**
 * "How work gets done": the four stages from SAP's description of agents, lit
 * one after another, beside an illustrative activity log of the kind of work a
 * Dispute Resolution Agent does. Both loop quietly while on screen. Under
 * reduced motion everything is shown complete and nothing loops.
 */
export function AgentFlow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);
  const [reduce, setReduce] = useState(false);
  const visible = useRef(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      if (visible.current) setTick((t) => t + 1);
    }, 1300);
    return () => window.clearInterval(id);
  }, [reduce]);

  const step = reduce ? flowSteps.length : tick % flowSteps.length;
  // The log fills row by row, holds for a beat, then resets.
  const done = reduce ? disputeLog.length : Math.min(tick % (disputeLog.length + 2), disputeLog.length);

  return (
    <div ref={rootRef} className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      {/* ---- the four stages ---- */}
      <ol className="relative">
        <span aria-hidden="true" className="absolute bottom-6 left-[19px] top-6 w-px bg-white/10" />
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-6 w-px bg-gradient-to-b from-[#7fd9b4] to-[#1c6b51] shadow-[0_0_12px_rgba(127,217,180,0.8)] transition-[height] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ height: `calc((100% - 3rem) * ${Math.min(step, flowSteps.length - 1) / (flowSteps.length - 1)})` }}
        />
        {flowSteps.map((s, i) => {
          const lit = reduce || i <= step;
          const current = !reduce && i === step;
          return (
            <li key={s.title} className="relative flex gap-5 py-4">
              <span
                className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border font-display text-sm font-bold transition-all duration-500 ${
                  lit
                    ? "border-[#7fd9b4] bg-[#0e3a2b] text-[#7fd9b4]"
                    : "border-white/20 bg-black text-white/40"
                } ${current ? "scale-110 shadow-[0_0_0_6px_rgba(127,217,180,0.14),0_0_26px_rgba(127,217,180,0.6)]" : ""}`}
              >
                {i + 1}
              </span>
              <div className={`pt-1 transition-opacity duration-500 ${lit ? "opacity-100" : "opacity-45"}`}>
                <h3 className="font-display text-xl text-white">{s.title}</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/65">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* ---- illustrative activity log, shown over a real working desk ---- */}
      <div className="relative self-start overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_70px_-40px_rgba(127,217,180,0.5)]">
        <Image
          src={photos.flowInvoices.src}
          alt={photos.flowInvoices.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-[20%_35%] saturate-[.3]"
        />
        <div className="absolute inset-0 bg-[#1c6b51]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/85" />

        <div className="relative px-3 pb-3 pt-40 sm:px-5 sm:pb-5 sm:pt-52">
        <div className="overflow-hidden rounded-3xl border border-white/12 bg-[#04100b]/90 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Dispute Resolution Agent
          </span>
          <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#7fd9b4]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#7fd9b4]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#7fd9b4] opacity-70 motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#7fd9b4]" />
            </span>
            Working
          </span>
        </div>

        <ul className="space-y-1 p-3">
          {disputeLog.map((row, i) => {
            const complete = i < done;
            const running = i === done && !reduce;
            return (
              <li
                key={row}
                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors duration-500 ${
                  complete ? "bg-white/[0.03]" : running ? "bg-[#7fd9b4]/[0.06]" : ""
                }`}
              >
                <span className="relative grid h-6 w-6 shrink-0 place-items-center">
                  {complete ? (
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-[#7fd9b4]" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M7.5 12.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : running ? (
                    <span className="sap-spinner h-5 w-5 rounded-full border-2 border-[#7fd9b4]/30 border-t-[#7fd9b4]" />
                  ) : (
                    <span className="h-5 w-5 rounded-full border border-white/20" />
                  )}
                </span>
                <span className={`text-sm leading-snug transition-colors duration-500 ${complete ? "text-white" : "text-white/45"}`}>
                  {row}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="border-t border-white/10 px-5 py-3 text-[11px] leading-relaxed text-white/40">
          Illustrative. Based on SAP&rsquo;s published description of the Dispute Resolution Agent, not a screenshot of the
          product.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}
