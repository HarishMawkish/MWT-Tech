import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { CtaBand, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RegionsMap } from "@/components/RegionsMap";
import { ImageReveal } from "@/components/fx/ImageReveal";
import { SplitHeading } from "@/components/fx/SplitHeading";
import { TiltCard } from "@/components/fx/TiltCard";
import { regions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Mawkish Technologies",
  description:
    "Mawkish Technologies bridges the gap between technology and business strategy to deliver measurable outcomes.",
};

function IconStrategy({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 20V10M12 20V4M20 20v-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlatform({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconTeam({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c2.8.2 5 2.4 5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cultureCards = [
  {
    title: "Strategy-First",
    icon: IconStrategy,
    body: "We start with business objectives, not technology preferences — the platform is chosen to fit the strategy, never the other way around.",
  },
  {
    title: "Platform Agnostic",
    icon: IconPlatform,
    body: "SAP, Salesforce, and Odoo each solve different problems. We recommend whichever fits your growth stage, not whichever we're most incentivized to sell.",
    badges: ["SAP", "Salesforce", "Odoo"],
  },
  {
    title: "Collaborative Energy",
    icon: IconTeam,
    body: "A friendly, high-energy, team-centric culture — we work closely with clients as partners, not vendors, for the long haul.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: Hero Split (50/50 full-bleed) */}
      <div className="grid min-h-[calc(100svh-104px)] w-full grid-cols-1 bg-[#000100] lg:grid-cols-2">
        <div className="relative order-last h-[22rem] overflow-hidden sm:h-[28rem] lg:order-first lg:h-full">
          <Image
            src="https://zql0rfjwszzixew9.public.blob.vercel-storage.com/background/untitled-03672.JPG"
            alt="Two Mawkish colleagues talking through a project in the office"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000100] via-transparent to-transparent" />
          {/* Soft fade into the copy panel so the photo and the panel read as
              one surface instead of two pieces butted together. */}
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-[#080d0c] lg:block" />
        </div>
        <div className="flex flex-col justify-center border-l border-white/10 bg-[#080d0c] px-8 py-20 lg:px-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
              About Mawkish
            </span>
          </Reveal>
          <SplitHeading
            as="h1"
            on="load"
            delay={0.1}
            parts={[{ text: "Business outcomes first. Technology second." }]}
            className="mt-5 font-display text-4xl font-bold text-white lg:text-5xl"
          />
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
              We bridge business strategy and technology — delivering high-impact
              ERP, CRM, and AI solutions that drive real transformation.
            </p>
          </Reveal>
        </div>
      </div>

      {/* SECTION 2: Culture & Principles — glass card grid */}
      <section className="bg-black">
        <Section className="!py-12 lg:!py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
              Who we are
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Our Culture &amp; Principles.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              A collaborative, high-energy environment built around long-term
              client outcomes and innovation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cultureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 90} className="h-full">
                <TiltCard className="h-full rounded-3xl p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-mw-mint/25 bg-mw-mint/5 text-mw-glow">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {card.body}
                  </p>
                  {card.badges && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.badges.map((b, bi) => (
                        <span
                          key={b}
                          style={{ "--i": bi } as CSSProperties}
                          className="mw-chip rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-mw-glow"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </Section>
      </section>

      {/* SECTION 3: Culture / environment showcase — full-width image band */}
      <section className="bg-black">
        <Section className="!py-0 lg:!py-0">
          <ImageReveal
            className="h-[535px] overflow-hidden rounded-3xl border border-white/10"
            overlay={
              <>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl border border-white/15 border-t-white/30 bg-black/35 p-5 backdrop-blur-xl backdrop-saturate-150">
                  <p className="text-sm font-medium leading-relaxed text-white">
                    Friendly, collaborative, and innovation-driven culture.
                  </p>
                </div>
              </>
            }
          >
            <Image
              src="/images/culture.JPG"
              alt="Mawkish team and workspace"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </ImageReveal>
        </Section>
      </section>

      {/* SECTION 4: Leadership — streamlined, image + glass bio card */}
      <section className="bg-black">
        <Section className="!py-12 lg:!py-16 space-y-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
              The people
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Leadership.
            </h2>
          </div>

          {/* Chairman */}
          <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <ImageReveal
              className="h-[420px] overflow-hidden rounded-3xl border border-white/10"
              overlay={<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />}
            >
              <Image
                src="/images/brand/malick2.jpeg"
                alt="Hatim Malick - Founder & Director"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "75% 30%" }}
              />
            </ImageReveal>
            <div className="flex min-h-[420px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10">
              <h3 className="font-display text-2xl font-bold normal-case tracking-tight text-white">
                Hatim Malick
              </h3>
              <div className="mt-1 text-sm font-medium text-mw-glow">
                Founder &amp; Director
              </div>
              <p className="mt-5 text-base leading-relaxed text-gray-300">
                Provides strategic oversight across Mawkish Group&apos;s
                portfolio, guiding long-term regional growth and enterprise
                partnerships across South Asia and the Middle East.
              </p>
            </div>
          </div>

          </Reveal>

          {/* CEO */}
          <Reveal>
          <div className="grid grid-cols-1 gap-10 border-t border-white/5 pt-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 flex min-h-[420px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 lg:order-1">
              <h3 className="font-display text-2xl font-bold normal-case tracking-tight text-white">
                Michael Gunawardena
              </h3>
              <div className="mt-1 text-sm font-medium text-mw-glow">
                Director &amp; CEO
              </div>
              <p className="mt-5 text-base leading-relaxed text-gray-300">
                13+ years of leadership in business operations, client
                management, and enterprise transformation. Michael leads
                Mawkish&apos;s growth strategy and multi-platform advisory
                across SAP, Salesforce, and Odoo.
              </p>
            </div>
            <ImageReveal
              className="order-1 h-[420px] overflow-hidden rounded-3xl border border-white/10 lg:order-2"
              overlay={<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />}
            >
              <Image
                src="/images/brand/michael.JPG"
                alt="Michael Gunawardena - Director & CEO"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </ImageReveal>
          </div>
          </Reveal>

          {/* Nafaz */}
          <Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/5 pt-12 lg:grid-cols-2 lg:items-center">
            <ImageReveal
              className="h-[420px] overflow-hidden rounded-3xl border border-white/10"
              overlay={<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />}
            >
              {/* Blurred copy fills the frame so the full portrait can sit
                  uncropped on top while the box keeps the same shape as the others. */}
              <Image
                src="/images/brand/nafaz.jpeg"
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="scale-125 object-cover blur-2xl"
              />
              <Image
                src="/images/brand/nafaz.jpeg"
                alt="Nafaz Jalaldeen"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </ImageReveal>
            <div className="flex min-h-[420px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10">
              <h3 className="font-display text-2xl font-bold normal-case tracking-tight text-white">
                Nafaz Jalaldeen
              </h3>
              <div className="mt-1 text-sm font-medium text-mw-glow">
                Director &amp; CRO
              </div>
              <p className="mt-5 text-base leading-relaxed text-gray-300">
                Nafaz brings over a decade of experience in technology
                consulting and enterprise sales across Sri Lanka and the Middle
                East. At Mawkish Technologies, he connects client priorities
                with the right solutions across our technology portfolio. His
                expertise in commercial strategy, partnerships, and executive
                engagement helps Mawkish win complex projects and build lasting
                client relationships.
              </p>
            </div>
          </div>
          </Reveal>
        </Section>
      </section>

      {/* SECTION 5: Regional footprint — clean glass badge list */}
      <section className="mw-dark-section border-t border-white/10">
        <Section className="!py-12 lg:!py-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
              Regional Footprint
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Where we operate.
            </h2>
          </div>

          <div className="mt-12">
            <RegionsMap regions={regions} />
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
