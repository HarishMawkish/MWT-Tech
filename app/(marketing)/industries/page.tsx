import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FocusList } from "@/components/fx/FocusList";
import { HorizontalSectors } from "@/components/fx/HorizontalSectors";
import { painPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Mawkish Technologies works across manufacturing, distribution, consumer goods, financial services, healthcare, hospitality, logistics, and diversified conglomerates.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the way your industry actually operates."
        description="Every industry hits growth ceilings differently. We bring platform expertise combined with an understanding of how your sector runs day to day."
      >
        <a
          href="#sectors"
          className="mw-sheen rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
        >
          Explore the sectors
        </a>
        <Link
          href="/contact"
          className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60 active:scale-[0.97]"
        >
          Talk to us
        </Link>
      </PageHero>

      {/* Sectors */}
      <section id="sectors" aria-labelledby="sectors-title" className="scroll-mt-28 bg-black">
        <Section className="!py-20 lg:!py-28">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3">
                <span className="mw-tag-line h-px w-10 bg-mw-glow" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
                  Sectors we serve
                </span>
              </div>
              <h2 id="sectors-title" className="mt-5 text-balance font-display text-3xl text-white sm:text-5xl">
                Eight sectors. One way of working.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14">
            <HorizontalSectors />
          </div>
        </Section>
      </section>

      {/* Shared pain points */}
      <section
        aria-labelledby="common-title"
        className="relative border-t border-white/10 bg-[#050a08]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.16) 0%, rgba(0,0,0,0) 80%)" }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-3">
                  <span className="mw-tag-line h-px w-10 bg-mw-glow" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
                    Common across every sector
                  </span>
                </div>
                <h2 id="common-title" className="mt-5 text-balance font-display text-3xl text-white sm:text-5xl">
                  The pain points look familiar no matter the industry.
                </h2>
              </div>
            </Reveal>

            <FocusList items={painPoints} />
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
