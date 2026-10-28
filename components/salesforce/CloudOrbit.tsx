"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { CloudMark } from "./parts";
import { clouds, cloudBySlug, cloudHref, rgbOf, type CloudSlug } from "./clouds";

const short = (name: string) => name.replace(" Cloud", "").replace(" Management", "");

// All six sit on one ring, the same size: no cloud is the centre of the others.
const ring: CloudSlug[] = clouds.map((c) => c.slug);

const theme = (hex: string) => ({ "--sf": hex, "--sf-rgb": rgbOf(hex) }) as CSSProperties;

function Node({ slug, active, onActivate }: { slug: CloudSlug; active: boolean; onActivate: (s: CloudSlug) => void }) {
  const c = cloudBySlug(slug)!;
  return (
    <Link
      href={cloudHref(slug)}
      onPointerEnter={(e) => e.pointerType === "mouse" && onActivate(slug)}
      onFocus={() => onActivate(slug)}
      aria-label={c.name}
      style={theme(c.accent)}
      className="group flex w-[4.4rem] flex-col items-center gap-1.5 outline-none sm:w-24"
    >
      <span
        className={`relative grid h-[3.1rem] w-[3.1rem] place-items-center rounded-full border backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] sm:h-16 sm:w-16 ${active ? "scale-[1.18]" : "group-hover:scale-110"}`}
        style={{
          borderColor: active ? "var(--sf)" : "rgba(255,255,255,0.22)",
          background: active ? "rgba(var(--sf-rgb),0.3)" : "rgba(8,14,12,0.85)",
          boxShadow: active ? "0 0 40px rgba(var(--sf-rgb),0.7)" : "none",
        }}
      >
        {active && <span className="sf-orbit-pulse absolute inset-0 rounded-full" aria-hidden="true" />}
        <CloudMark className="h-5 w-7 sm:h-7 sm:w-9" />
      </span>
      <span className={`text-center text-[9.5px] font-semibold uppercase leading-tight tracking-[0.1em] transition-colors duration-300 sm:text-[11px] ${active ? "text-white" : "text-white/55 group-hover:text-white"}`}>
        {short(c.name)}
      </span>
    </Link>
  );
}

function Ring({
  slugs,
  inset,
  seconds,
  reverse,
  offset,
  paused,
  active,
  onActivate,
}: {
  slugs: CloudSlug[];
  inset: number;
  seconds: number;
  reverse?: boolean;
  offset: number;
  paused: boolean;
  active: CloudSlug;
  onActivate: (s: CloudSlug) => void;
}) {
  const play = paused ? "paused" : "running";
  return (
    <div className="absolute" style={{ inset: `${inset}%` }}>
      <div aria-hidden="true" className="absolute inset-0 rounded-full border border-dashed border-white/12" />
      <div className={`absolute inset-0 ${reverse ? "sf-spin-rev" : "sf-spin"}`} style={{ "--d": `${seconds}s`, animationPlayState: play } as CSSProperties}>
        {slugs.map((s, i) => {
          const a = ((offset + (i / slugs.length) * 360) * Math.PI) / 180;
          return (
            <div key={s} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(50 + 50 * Math.sin(a)).toFixed(3)}%`, top: `${(50 - 50 * Math.cos(a)).toFixed(3)}%` }}>
              <div className={reverse ? "sf-spin" : "sf-spin-rev"} style={{ "--d": `${seconds}s`, animationPlayState: play } as CSSProperties}>
                <Node slug={s} active={active === s} onActivate={onActivate} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * The Salesforce clouds as a small solar system. Data 360 is the sun; the clouds
 * that serve customers circle it in two rings, and the whole thing slows to a
 * stop under the pointer so any one of them can be picked. A panel beside it
 * says what the chosen cloud is for and links to its page.
 */
export function CloudOrbit() {
  const [active, setActive] = useState<CloudSlug>("sales-cloud");
  const [hover, setHover] = useState(false);
  const cur = cloudBySlug(active)!;

  return (
    <section id="clouds" aria-labelledby="clouds-title" className="relative scroll-mt-28 overflow-hidden border-t border-white/10 bg-black" style={theme(cur.accent)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 transition-[background] duration-700" style={{ background: "radial-gradient(60% 70% at 78% 50%, rgba(var(--sf-rgb),0.2), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10" style={{ background: "var(--sf)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--sf)" }}>
                Salesforce Solutions
              </span>
            </div>
            <h2 id="clouds-title" className="mt-5 text-balance font-display text-3xl text-white sm:text-5xl">
              One customer at the centre. A cloud for every way you meet them.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* what the chosen cloud is for */}
          <div className="order-2 lg:order-1">
            <div key={active} className="sap-rise" style={{ animationDuration: "0.55s" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Salesforce cloud</p>
              <h3 className="mt-3 font-display text-5xl leading-none text-white sm:text-6xl" style={{ textShadow: "0 0 50px rgba(var(--sf-rgb),0.55)" }}>
                {cur.name}
              </h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">{cur.lede}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cur.capabilities.slice(0, 4).map((c) => (
                  <li key={c.title} className="rounded-full border px-3.5 py-1.5 text-xs font-medium text-white/85" style={{ borderColor: "rgba(var(--sf-rgb),0.45)", background: "rgba(var(--sf-rgb),0.1)" }}>
                    {c.title}
                  </li>
                ))}
              </ul>
              <Link
                href={cloudHref(cur.slug)}
                className="group relative mt-8 inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full px-7 text-sm font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 active:scale-[0.97]"
                style={{ background: "var(--sf)", boxShadow: "0 16px 44px -14px rgba(var(--sf-rgb),0.9)" }}
              >
                <span className="sf-shine absolute inset-0" aria-hidden="true" />
                <span className="relative">Explore {cur.name}</span>
                <span aria-hidden="true" className="relative transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>

            {/* the same choices as a plain list: the way in on a touch screen */}
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="All Salesforce clouds">
              {clouds.map((c) => {
                const on = c.slug === active;
                return (
                  <li key={c.slug} style={theme(c.accent)}>
                    <button
                      type="button"
                      onClick={() => setActive(c.slug)}
                      onPointerEnter={(e) => e.pointerType === "mouse" && setActive(c.slug)}
                      aria-pressed={on}
                      className="rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300"
                      style={{
                        borderColor: on ? "var(--sf)" : "rgba(255,255,255,0.18)",
                        background: on ? "rgba(var(--sf-rgb),0.22)" : "transparent",
                        color: on ? "#fff" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {short(c.name)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* the orbit */}
          <div className="order-1 lg:order-2" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
              <span aria-hidden="true" className="absolute inset-[14%] rounded-full blur-3xl transition-colors duration-700" style={{ background: "rgba(var(--sf-rgb),0.2)" }} />
              <Ring slugs={ring} inset={11} seconds={90} offset={0} paused={hover} active={active} onActivate={setActive} />

              {/* a quiet inner ring and the customer at the centre */}
              <span aria-hidden="true" className="absolute inset-[32%] rounded-full border border-dashed border-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative grid h-[5.8rem] w-[5.8rem] place-items-center rounded-full text-center sm:h-32 sm:w-32">
                  <span className="sf-ping absolute inset-0 rounded-full" style={{ background: "rgba(var(--sf-rgb),0.22)" }} aria-hidden="true" />
                  <span className="sf-ping absolute inset-0 rounded-full" style={{ background: "rgba(var(--sf-rgb),0.14)", animationDelay: "1.3s" }} aria-hidden="true" />
                  <span
                    className="relative grid h-full w-full place-items-center rounded-full border transition-colors duration-700"
                    style={{ borderColor: "var(--sf)", background: "radial-gradient(circle at 35% 30%, rgba(var(--sf-rgb),0.5), #06120d 72%)", boxShadow: "0 0 60px rgba(var(--sf-rgb),0.55)" }}
                  >
                    <span>
                      <span className="block font-display text-base leading-none text-white sm:text-xl">Your customer</span>
                      <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[9.5px]">at the centre</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
