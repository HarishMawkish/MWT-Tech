"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { StatCounter } from "./StatCounter";
import { SplitHeading } from "@/components/fx/SplitHeading";
import { Magnetic } from "@/components/fx/Magnetic";
import { gsap, EASE_OUT_SOFT, prefersReducedMotion, whenLoaderDone } from "@/lib/motion";
import { IconStack, IconGrid, IconOrbit, IconShield, IconSpark } from "./icons";
import { siteConfig, stats } from "@/lib/site-data";

// Loaded lazily, client-side only: this pulls in the full `three` library
// (plus postprocessing modules), which is heavy to download/parse/execute.
// Deferring it off the initial-load path keeps the rest of the page
// interactive sooner — the scene still renders the same way, just a beat
// after first paint instead of blocking it. No loading UI needed since the
// section's own CSS gradient background already holds the space visually.
const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
  },
);

const ecosystem = [
  { name: "SAP", logo: "/images/solutions/SAP.jpg" },
  { name: "Salesforce", logo: "/images/solutions/salesforce.png" },
  { name: "Odoo", logo: "/images/solutions/Odoo.png" },
  { name: "Swyftflo", logo: "/images/solutions/swyftflo.png" },
  { name: "Microsoft", logo: "/images/solutions/Microsoft.png" },
  { name: "AWS", logo: "/images/solutions/AWS.png" },
  { name: "AI Systems", logo: null },
];

const statIcons = [IconStack, IconGrid, IconOrbit, IconShield];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  // Entrance: the headline rises word by word (SplitHeading), then the rest of
  // the copy and the stat tiles follow in a cascade. The 3D scene also drifts
  // down slower than the page on scroll, which gives the hero real depth.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const items = root.querySelectorAll("[data-hero-in]");
    const stats = root.querySelectorAll("[data-hero-stat]");
    const scene = root.querySelector("[data-hero-scene]");

    gsap.set(items, { opacity: 0, y: 26 });
    gsap.set(stats, { opacity: 0, y: 44 });
    const stop = whenLoaderDone(() => {
      gsap.to(items, { opacity: 1, y: 0, duration: 1, ease: EASE_OUT_SOFT, stagger: 0.12, delay: 0.45, clearProps: "transform" });
      // clearProps hands the transform back to the cards' own hover styles.
      gsap.to(stats, { opacity: 1, y: 0, duration: 1.1, ease: EASE_OUT_SOFT, stagger: 0.09, delay: 0.9, clearProps: "transform" });
    });

    const parallax = scene
      ? gsap.to(scene, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
        })
      : null;

    return () => {
      stop();
      parallax?.scrollTrigger?.kill();
      parallax?.kill();
      gsap.killTweensOf([...items, ...stats]);
      gsap.set([...items, ...stats, ...(scene ? [scene] : [])], { clearProps: "all" });
    };
  }, []);

  return (
    <section
      ref={rootRef}
      style={{ backgroundColor: "#020604" }}
      className="mw-void-bg relative flex min-h-[calc(100svh-104px)] flex-col overflow-hidden"
    >
      {/* WebGL network scene — reacts to pointer movement, not scroll. Taller
          than the section so the scroll parallax never exposes an edge. */}
      <div data-hero-scene className="absolute inset-x-0 -top-[12%] h-[112%] will-change-transform">
        <HeroScene className="absolute inset-0" />
      </div>

      {/* Depth layers — literal color values, no CSS-variable indirection */}
      <div className="mw-scan-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="mw-hero-scrim pointer-events-none absolute inset-0" />

      {/* Center content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 pt-24 text-center">
        <div className="mw-copy-panel absolute inset-x-0 top-1/2 h-[85%] -translate-y-1/2 rounded-[48px]" />

        {/* Ambient glow behind the headline — reads as a glowing display
            rather than flat text on a flat background. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] h-[280px] w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-mw-mint/20 blur-[110px]"
        />

        <SplitHeading
          as="h1"
          on="load"
          delay={0.1}
          parts={[
            { text: "Technology that creates real" },
            { text: "business outcomes", className: "mw-text-gradient" },
          ]}
          className="relative mt-7 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[76px] lg:leading-[1.03] lg:tracking-[-2.5px]"
        />

        {/* Subtext — bumped from white/70 to white/85 so it doesn't wash
            out against the dark backdrop. */}
        <p data-hero-in className="relative mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/85 sm:text-base">
          We architect and implement SAP, Salesforce, Odoo, and AI-driven
          systems that turn disconnected operations into one connected,
          intelligent platform.
        </p>

        {/* Live ecosystem ticker — small scrolling credibility strip */}
        <div data-hero-in className="mw-edge-fade relative mt-6 w-full max-w-sm overflow-hidden">
          <div className="mw-marquee-track flex w-max items-center gap-3">
            {[...ecosystem, ...ecosystem].map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                title={item.name}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white shadow-sm"
              >
                {item.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <IconSpark className="h-4 w-4 text-mw-void" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div data-hero-in className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA sits on its own soft glow so it reads as the
              obvious next step, not just another button. */}
          <Magnetic className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-mw-mint/50 blur-xl"
            />
            <Link
              href={siteConfig.primaryCta.href}
              className="mw-sheen block rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-mw-mint/30 transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </Magnetic>
          <Link
            href="/services"
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:text-white active:scale-[0.97]"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Scroll cue — a bead sliding down a hairline; wordless on purpose. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-8 z-10 hidden h-16 w-px overflow-hidden bg-white/15 lg:block"
      >
        <span className="mw-cue-bead block h-5 w-px bg-mw-glow" />
      </div>

      {/* Bento-style stat cards — distinct glass tiles instead of one
          continuous pill bar, big animated numbers, icon per metric. */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-10 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.slice(0, 4).map((s, i) => {
            const Icon = statIcons[i] ?? IconStack;
            return (
              <div
                key={s.label}
                data-hero-stat
                className="mw-glass mw-glass-hover rounded-2xl px-4 py-5 text-center sm:px-5 sm:py-6"
              >
                <Icon className="mx-auto h-5 w-5 text-mw-glow" />
                <div className="mt-2 font-display text-4xl text-white sm:text-5xl">
                  <StatCounter value={Number(s.value)} />
                </div>
                <div className="mt-1.5 text-xs font-medium leading-snug tracking-wide text-white/70">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
