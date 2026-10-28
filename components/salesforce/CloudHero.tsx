"use client";

import Link from "next/link";
import { useRef } from "react";
import { HeroVisual } from "./HeroVisual";
import type { SalesforceCloud } from "./clouds";

const dots = [
  ["8%", "18%", 0], ["22%", "72%", 1.2], ["38%", "12%", 2.1], ["57%", "84%", 0.6], ["71%", "22%", 1.7],
  ["86%", "64%", 2.6], ["93%", "14%", 0.9], ["14%", "46%", 3.1], ["64%", "52%", 1.4], ["46%", "92%", 2.3],
] as const;

function Words({ text, start }: { text: string; start: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span className="sf-hero-word" style={{ animationDelay: `${start + i * 90}ms` }}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}

/**
 * The top of every cloud page: a dark stage with slow aurora light in the cloud's
 * colour, a faint grid, drifting points, a headline that rises word by word, and
 * the product visual, which leans a few degrees toward the pointer.
 */
export function CloudHero({ cloud }: { cloud: SalesforceCloud }) {
  const root = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = root.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--tx", (x - 0.5).toFixed(3));
    el.style.setProperty("--ty", (y - 0.5).toFixed(3));
  };
  const onLeave = () => {
    const el = root.current;
    if (!el) return;
    el.style.setProperty("--tx", "0");
    el.style.setProperty("--ty", "0");
  };

  return (
    <section
      id="top"
      ref={root}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="mw-dark-section relative isolate overflow-hidden bg-black"
      style={{ "--mx": "70%", "--my": "30%", "--tx": "0", "--ty": "0" } as React.CSSProperties}
    >
      {/* light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="sf-aurora-a absolute -left-[12%] -top-[28%] h-[44rem] w-[44rem] rounded-full blur-[110px]" style={{ background: "rgba(var(--sf-rgb),0.34)" }} />
        <div className="sf-aurora-b absolute -right-[10%] top-[8%] h-[38rem] w-[38rem] rounded-full blur-[120px]" style={{ background: "rgba(var(--sf-rgb),0.2)" }} />
        <div className="sf-grid-bg absolute inset-0" />
        <div className="absolute inset-0 transition-[background] duration-300" style={{ background: "radial-gradient(520px circle at var(--mx) var(--my), rgba(var(--sf-rgb),0.16), transparent 62%)" }} />
        {dots.map(([l, t, d], i) => (
          <span key={i} className="sf-twinkle absolute h-1 w-1 rounded-full bg-white" style={{ left: l, top: t, animationDelay: `${d}s` }} />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <nav aria-label="Breadcrumb" className="relative mx-auto flex max-w-7xl items-center gap-3 px-6 pt-6 lg:px-8">
        <Link
          href="/services/salesforce-solutions"
          className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-3.5 pr-5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
        >
          <span aria-hidden="true" className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1">
            &larr;
          </span>
          Salesforce
        </Link>
        <span aria-hidden="true" className="hidden text-white/25 sm:inline">
          /
        </span>
        <span aria-current="page" className="hidden text-sm text-white/50 sm:inline">
          {cloud.name}
        </span>
      </nav>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-6">
        <div>
          <div className="sap-rise inline-flex items-center gap-3 rounded-full border px-4 py-2" style={{ borderColor: "rgba(var(--sf-rgb),0.45)", background: "rgba(var(--sf-rgb),0.1)" }}>
            <span className="relative flex h-2 w-2">
              <span className="sf-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "var(--sf)" }} />
              <span className="relative h-2 w-2 rounded-full" style={{ background: "var(--sf)" }} />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">Salesforce &middot; {cloud.name}</span>
          </div>

          <h1 className="mt-6 font-display text-[3rem] leading-[0.98] text-white sm:text-6xl lg:text-[3.7rem] xl:text-[4.5rem]">
            <span className="block">
              <Words text={cloud.headline[0]} start={150} />
            </span>
            <span className="block" style={{ color: "var(--sf)" }}>
              <Words text={cloud.headline[1]} start={450} />
            </span>
          </h1>

          <p className="sap-rise mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg" style={{ animationDelay: "800ms" }}>
            {cloud.lede}
          </p>

          <div className="sap-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "950ms" }}>
            <Link
              href="/contact"
              className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full px-7 text-sm font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 active:scale-[0.97]"
              style={{ background: "var(--sf)", boxShadow: "0 18px 50px -14px rgba(var(--sf-rgb),0.9)" }}
            >
              <span className="sf-shine absolute inset-0" aria-hidden="true" />
              <span className="relative">Talk to our Salesforce team</span>
              <span aria-hidden="true" className="relative transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <a
              href="#capabilities"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              See what it does
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">
                &darr;
              </span>
            </a>
          </div>
        </div>

        <div className="sap-rise relative" style={{ animationDelay: "500ms", animationDuration: "1.2s" }}>
          <span aria-hidden="true" className="absolute -inset-10 rounded-full blur-3xl" style={{ background: "rgba(var(--sf-rgb),0.2)" }} />
          <div
            className="relative transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: "perspective(1400px) rotateY(calc(var(--tx) * 7deg)) rotateX(calc(var(--ty) * -6deg))" }}
          >
            <div className="sap-float">
              <HeroVisual kind={cloud.visual} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
