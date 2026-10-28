import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { ServiceMark } from "@/components/ServiceMark";
import { StackedCards } from "@/components/fx/StackedCards";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "SAP, Salesforce, and Odoo implementation, plus AI, automation, data & analytics, managed services, cloud transformation, and enterprise integrations.",
};

// Slightly different green-black per card so the pile reads as separate layers.
const stackTone = ["!bg-[#050f0a]", "!bg-[#06160f]", "!bg-[#071c13]"];

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
    >
      &rarr;
    </span>
  );
}

function SectionHead({ tag, title, id }: { tag: string; title: string; id: string }) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-3">
        <span className="mw-tag-line h-px w-10 bg-mw-glow" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">{tag}</span>
      </div>
      <h2 id={id} className="mt-5 text-balance font-display text-3xl text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function ServicesPage() {
  const core = services.filter((s) => s.category === "core");
  const future = services.filter((s) => s.category === "future");

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Enterprise platforms, applied with a business-first lens."
        description="We help organizations plan, implement, and get lasting value from the platforms that run their business — and the emerging capabilities that will shape its next stage."
      >
        <a
          href="#core"
          className="mw-sheen rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
        >
          Explore core platforms
        </a>
        <Link
          href="/contact"
          className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60 active:scale-[0.97]"
        >
          Talk to us
        </Link>
      </PageHero>

      {/* Core platforms: three tall feature cards */}
      <section id="core" aria-labelledby="core-title" className="scroll-mt-28 bg-black">
        <Section className="!py-20 lg:!py-28">
          <Reveal>
            <SectionHead tag="Core Platforms" title="SAP, Salesforce & Odoo implementation." id="core-title" />
          </Reveal>

          {/* Stacking cards: each pins as the next slides over it. */}
          <StackedCards className="mt-14 space-y-6 lg:space-y-10">
            {core.map((s, i) => (
              <div
                key={s.slug}
                data-stack-card
                className="lg:sticky"
                style={{ top: `calc(6.75rem + ${i * 1.1}rem)` }}
              >
                <div data-stack-inner className="origin-top">
                  <SpotlightLink
                    href={`/services/${s.slug}`}
                    className={`group relative grid min-h-[26rem] rounded-[2rem] ${stackTone[i % stackTone.length]}`}
                  >
                    {/* Dims as the next card covers this one (see StackedCards). */}
                    <span
                      data-stack-shade
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0"
                    />
                    <div className="relative z-10 grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                      <div className="flex flex-col">
                        <div className="flex items-start justify-between">
                          <ServiceMark slug={s.slug} size="lg" />
                          <span className="font-display text-sm font-semibold tracking-widest text-white/40 lg:hidden">
                            0{i + 1}
                          </span>
                        </div>
                        <h3 className="mt-10 font-display text-3xl text-white sm:text-4xl">{s.name}</h3>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{s.summary}</p>

                        <ul className="mt-8 space-y-2.5 border-t border-white/10 pt-6">
                          {s.outcomes.slice(0, 3).map((o) => (
                            <li key={o} className="flex items-start gap-3 text-sm leading-snug text-white/65">
                              <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-mw-glow" />
                              {o}
                            </li>
                          ))}
                        </ul>

                        <span className="mt-auto inline-flex items-center gap-3 pt-10 text-sm font-semibold text-white">
                          Explore {s.name.split(" ")[0]}
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-mw-void transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1.5">
                            &rarr;
                          </span>
                        </span>
                      </div>

                      {/* Fluted-glass panel with a hollow numeral. Decorative. */}
                      <div aria-hidden="true" className="mw-fluted relative hidden min-h-[16rem] overflow-hidden rounded-3xl lg:block">
                        <span className="mw-outline-text absolute -bottom-6 -right-2 font-display text-[11rem] font-extrabold leading-none">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  </SpotlightLink>
                </div>
              </div>
            ))}
          </StackedCards>
        </Section>
      </section>

      {/* Future areas: compact grid */}
      <section aria-labelledby="future-title" className="relative border-t border-white/10 bg-[#050a08]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{
            background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.16) 0%, rgba(0,0,0,0) 80%)",
          }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <Reveal>
            <SectionHead tag="Future Service Areas" title="Where we're expanding next." id="future-title" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {future.map((s, i) => {
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80} className="h-full">
                  <SpotlightLink
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-3xl p-7"
                  >
                    <ServiceMark slug={s.slug} size="sm" />
                    <h3 className="mt-8 font-display text-xl text-white">{s.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{s.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                      Learn more
                      <Arrow />
                    </span>
                  </SpotlightLink>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
