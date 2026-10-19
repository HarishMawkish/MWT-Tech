import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { ServiceMark } from "@/components/ServiceMark";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "SAP, Salesforce, and Odoo implementation, plus AI, automation, data & analytics, managed services, cloud transformation, and enterprise integrations.",
};

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
        <span className="h-px w-10 bg-mw-mint" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-mint">{tag}</span>
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
          className="rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
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

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {core.map((s, i) => {
              return (
                <Reveal key={s.slug} delay={i * 100} className="h-full">
                  <SpotlightLink
                    href={`/services/${s.slug}`}
                    className="group flex h-full min-h-[27rem] flex-col rounded-[2rem] p-8 sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <ServiceMark slug={s.slug} size="lg" />
                      <span className="font-display text-sm font-semibold tracking-widest text-white/35">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col pt-14">
                      <h3 className="font-display text-2xl text-white sm:text-[1.7rem] lg:min-h-[4.3rem]">{s.name}</h3>
                      <p className="mt-4 text-base leading-relaxed text-white/70 lg:min-h-[4.9rem]">{s.summary}</p>

                      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                        {s.outcomes.slice(0, 3).map((o) => (
                          <li key={o} className="flex items-start gap-3 text-sm leading-snug text-white/60">
                            <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-mw-mint" />
                            {o}
                          </li>
                        ))}
                      </ul>

                      <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white">
                        Explore {s.name.split(" ")[0]}
                        <Arrow />
                      </span>
                    </div>
                  </SpotlightLink>
                </Reveal>
              );
            })}
          </div>
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
