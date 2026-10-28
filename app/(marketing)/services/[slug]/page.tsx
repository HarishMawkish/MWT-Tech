import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { ServiceMark } from "@/components/ServiceMark";
import { ScrollWords } from "@/components/fx/ScrollWords";
import { SplitHeading } from "@/components/fx/SplitHeading";
import { TiltCard } from "@/components/fx/TiltCard";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);
  const groupLabel = service.category === "core" ? "Core platform" : "Future service area";

  return (
    <>
      {/* Hero */}
      <section className="mw-dark-section relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[30rem]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(28,107,81,0.34) 0%, rgba(28,107,81,0.08) 48%, rgba(0,0,0,0) 78%)",
          }}
        />
        {/* Breadcrumb row: sits on the same left edge as the logo and page
            grid, so "back" lives where people look for it. */}
        <nav
          aria-label="Breadcrumb"
          className="relative mx-auto flex max-w-7xl items-center gap-3 px-6 pt-6 lg:px-8"
        >
          <Link
            href="/services"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-3.5 pr-5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
            >
              &larr;
            </span>
            All services
          </Link>
          <span aria-hidden="true" className="hidden text-white/25 sm:inline">
            /
          </span>
          <span aria-current="page" className="hidden text-sm text-white/50 sm:inline">
            {service.name}
          </span>
        </nav>

        <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-14 text-center lg:px-8 lg:pb-32 lg:pt-20">
          <Reveal>
            <Eyebrow>{groupLabel}</Eyebrow>
          </Reveal>
          <SplitHeading
            as="h1"
            on="load"
            delay={0.1}
            parts={[{ text: service.name }]}
            className="mx-auto mt-7 max-w-4xl text-balance font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
              {service.summary}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="mw-sheen rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/contact?intent=proposal"
                className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60 active:scale-[0.97]"
              >
                Request a Proposal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview: one confident statement */}
      <section className="bg-black" aria-labelledby="overview-title">
        <Section className="!py-20 lg:!py-28">
          <Reveal className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span className="mw-tag-line h-px w-10 bg-mw-glow" />
              <span
                id="overview-title"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow"
              >
                Overview
              </span>
            </div>
            <ScrollWords
              as="p"
              className="mt-8 text-balance text-2xl font-medium leading-snug tracking-tight text-white sm:text-[2rem] sm:leading-[1.3]"
            >
              {service.description}
            </ScrollWords>
          </Reveal>
        </Section>
      </section>

      {/* Outcomes */}
      <section className="relative border-t border-white/10 bg-[#050a08]" aria-labelledby="outcomes-title">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64"
          style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.14) 0%, rgba(0,0,0,0) 80%)" }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="mw-tag-line h-px w-10 bg-mw-glow" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mw-glow">
                Outcomes to expect
              </span>
            </div>
            <h2 id="outcomes-title" className="mt-5 max-w-2xl text-balance font-display text-3xl text-white sm:text-5xl">
              What changes when it&rsquo;s done right.
            </h2>
          </Reveal>

          <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {service.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 100} className="h-full">
                <li className="h-full">
                  <TiltCard className="flex h-full min-h-[15rem] flex-col rounded-[2rem] p-8">
                    <span className="font-display text-5xl font-bold text-mw-glow">0{i + 1}</span>
                    <p className="mt-auto pt-10 text-lg font-medium leading-snug text-white">{o}</p>
                  </TiltCard>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-white/10 bg-black" aria-labelledby="related-title">
          <Section className="!py-20 lg:!py-28">
            <Reveal>
              <h2 id="related-title" className="font-display text-2xl text-white sm:text-4xl">
                More {service.category === "core" ? "core platforms" : "future services"}
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => {
                return (
                  <Reveal key={s.slug} delay={i * 80} className="h-full">
                    <SpotlightLink
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col rounded-3xl p-7"
                    >
                      <ServiceMark slug={s.slug} size="sm" />
                      <h3 className="mt-8 font-display text-xl text-white">{s.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{s.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                        Learn more
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                        >
                          &rarr;
                        </span>
                      </span>
                    </SpotlightLink>
                  </Reveal>
                );
              })}
            </div>
          </Section>
        </section>
      )}

      <CtaBand />
    </>
  );
}
