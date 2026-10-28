import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/ui";
import { DotRail } from "@/components/sap-erp/DotRail";
import { CountUp } from "@/components/sap-erp/CountUp";
import { CloudHero } from "./CloudHero";
import { CloudMark, Faq, ScrollProgress, ScrollStatement, Spot, Timeline } from "./parts";
import { Scenarios } from "./Scenarios";
import { AgentTrace, DataFlow, RewardWallet } from "./showcases-b";
import { JourneyMap, SalesBoard, ServiceConsole } from "./showcases-a";
import { ForecastProof, GaugeProof, HudProof, MeterProof, OdometerProof, TierProof } from "./proofs";
import { clouds, cloudHref, rgbOf, type CloudSlug, type SalesforceCloud } from "./clouds";

const sections = [
  { id: "top", label: "Overview" },
  { id: "story", label: "The idea" },
  { id: "capabilities", label: "Capabilities" },
  { id: "results", label: "Results" },
  { id: "how", label: "How it works" },
  { id: "scenarios", label: "In practice" },
  { id: "faq", label: "Questions" },
];

function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-10" style={{ background: "var(--sf)" }} />
      <span className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--sf)" }}>
        {children}
      </span>
    </div>
  );
}

// Each cloud presents its capabilities and its figures in its own way, so the six
// pages read as one family but never as one template.
const showcases: Record<CloudSlug, (c: SalesforceCloud) => React.ReactNode> = {
  "sales-cloud": (c) => <SalesBoard items={c.capabilities} />,
  "service-cloud": (c) => <ServiceConsole items={c.capabilities} />,
  "marketing-cloud": (c) => <JourneyMap items={c.capabilities} />,
  "data-360": (c) => <DataFlow items={c.capabilities} />,
  agentforce: (c) => <AgentTrace items={c.capabilities} />,
  "loyalty-management": (c) => <RewardWallet items={c.capabilities} />,
};

const proofs: Record<CloudSlug, (c: SalesforceCloud) => React.ReactNode> = {
  "sales-cloud": (c) => <ForecastProof stats={c.stats} />,
  "service-cloud": (c) => <GaugeProof stats={c.stats} />,
  "marketing-cloud": (c) => <MeterProof stats={c.stats} />,
  "data-360": (c) => <OdometerProof stats={c.stats} />,
  agentforce: (c) => <HudProof stats={c.stats} />,
  "loyalty-management": (c) => <TierProof stats={c.stats} />,
};

/**
 * One template for all eight cloud pages. The structure is the same so the
 * section feels like one product family; what changes is the colour, the hero
 * illustration and the content, which come from the cloud's data.
 */
export function CloudPage({ cloud }: { cloud: SalesforceCloud }) {
  const others = clouds.filter((c) => c.slug !== cloud.slug);
  const style = { "--sf": cloud.accent, "--sf-rgb": rgbOf(cloud.accent) } as CSSProperties;

  return (
    <div style={style} className="bg-black text-white">
      <ScrollProgress />
      <DotRail sections={sections} />
      <CloudHero cloud={cloud} />

      {/* a slow ticker of what the product covers */}
      <div aria-hidden="true" className="relative overflow-hidden border-y border-white/10 bg-black py-5">
        <div className="sf-marquee flex w-max gap-10 whitespace-nowrap">
          {[...cloud.marquee, ...cloud.marquee, ...cloud.marquee, ...cloud.marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl text-white/35 sm:text-3xl">
              {m}
              <CloudMark className="h-5 w-7" />
            </span>
          ))}
        </div>
        <span className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <span className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* the idea, lit word by word */}
      <section id="story" className="relative scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-36">
          <Reveal>
            <Kicker>{cloud.name}</Kicker>
          </Reveal>
          <div className="mt-8">
            <ScrollStatement text={cloud.statement} />
          </div>
        </div>
      </section>

      {/* the showcase: this cloud's capabilities, in this cloud's own form */}
      <section id="capabilities" className="relative scroll-mt-24 border-t border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-80" style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(var(--sf-rgb),0.14), transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <Kicker>{cloud.showcaseKicker}</Kicker>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl text-white sm:text-6xl">{cloud.showcaseTitle}</h2>
          </Reveal>
          <div className="mt-14 lg:mt-20">{showcases[cloud.slug](cloud)}</div>
        </div>
      </section>

      {/* results, in this cloud's own form */}
      <section id="results" className="relative scroll-mt-24 overflow-hidden border-t border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" style={{ background: "rgba(var(--sf-rgb),0.12)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <Kicker>In numbers</Kicker>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl text-white sm:text-6xl">{cloud.proofTitle}</h2>
          </Reveal>
          <div className="mt-14">{proofs[cloud.slug](cloud)}</div>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="relative scroll-mt-24 border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-8 lg:py-36">
          <div>
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Kicker>How it works</Kicker>
                <h2 className="mt-5 text-balance font-display text-4xl text-white sm:text-6xl">{cloud.flowTitle}.</h2>
                <p className="mt-6 max-w-sm text-lg text-white/60">Scroll, and watch the path light up.</p>
              </Reveal>
            </div>
          </div>
          <Timeline steps={cloud.flow} />
        </div>
      </section>

      {/* scenarios */}
      <section id="scenarios" className="relative scroll-mt-24 overflow-hidden border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <Kicker>In practice</Kicker>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl text-white sm:text-6xl">{cloud.scenariosTitle}.</h2>
          </Reveal>
          <div className="mt-14">
            <Scenarios items={cloud.scenarios} />
          </div>
        </div>
      </section>

      {/* questions */}
      <section id="faq" className="relative scroll-mt-24 border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-8 lg:py-32">
          <Reveal>
            <Kicker>Good questions</Kicker>
            <h2 className="mt-5 text-balance font-display text-4xl text-white sm:text-5xl">Before you ask.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={cloud.faqs} />
          </Reveal>
        </div>
      </section>

      {/* the rest of Salesforce */}
      <section aria-labelledby="more-title" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 id="more-title" className="font-display text-3xl text-white sm:text-5xl">
                The rest of Salesforce.
              </h2>
              <Link href="/services/salesforce-solutions" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white">
                See them all
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o, i) => (
              <li key={o.slug}>
                <Reveal delay={i * 60} className="h-full">
                  <div style={{ "--sf": o.accent, "--sf-rgb": rgbOf(o.accent) } as CSSProperties} className="h-full">
                    <Link href={cloudHref(o.slug)} className="block h-full">
                      <Spot className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:border-[rgba(var(--sf-rgb),0.6)]">
                        <CloudMark className="h-8 w-11 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                        <span className="mt-5 block font-display text-2xl text-white">{o.name}</span>
                        <span className="mt-2 block flex-1 text-sm leading-snug text-white/55">{o.blurb}</span>
                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--sf)" }}>
                          Explore
                          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </span>
                      </Spot>
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
