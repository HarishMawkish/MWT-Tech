import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { BentoOverview } from "@/components/sap-erp/BentoOverview";
import { Configurator } from "@/components/sap-erp/Configurator";
import { DashboardMock } from "@/components/sap-erp/DashboardMock";
import { DotRail } from "@/components/sap-erp/DotRail";
import { ExpandPanels } from "@/components/sap-erp/ExpandPanels";
import { PathPicker } from "@/components/sap-erp/PathPicker";
import { SpecTable } from "@/components/sap-erp/SpecTable";
import { StatStrip } from "@/components/sap-erp/StatStrip";
import { StepperH } from "@/components/sap-erp/StepperH";
import { coreProcesses, goLiveSteps, photos, proofStats, sections, specGroups } from "@/components/sap-erp/grow-data";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "GROW with SAP",
  description:
    "GROW with SAP is SAP's entry point to cloud ERP for companies new to SAP: finance, supply chain and HR on one AI-enabled platform, live in weeks, with room to grow.",
};

/** Section opener: centred and generous, to suit a product-led page. */
function Head({ tag, title, id, children }: { tag: string; title: string; id: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7fd9b4]">{tag}</p>
      <h2 id={id} className="mt-4 text-balance font-display text-3xl text-white sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">{children}</p>}
    </div>
  );
}

const pad = "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28";

export default function GrowWithSapPage() {
  const title = "GROW with SAP".split(" ");

  return (
    <>
      <DotRail sections={sections} />

      {/* ------------------------------------------------------------ hero */}
      <section className="mw-dark-section relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(28,107,81,0.4) 0%, rgba(28,107,81,0.08) 55%, rgba(0,0,0,0) 80%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-4 pt-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3">
            <Link
              href="/services/sap-solutions"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-3.5 pr-5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
            >
              <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
                &larr;
              </span>
              SAP Solutions
            </Link>
          </nav>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="sap-rise text-xs font-semibold uppercase tracking-[0.24em] text-[#7fd9b4]">For companies new to SAP</p>
            <h1 className="mt-5 text-balance font-display text-5xl font-bold leading-[1.02] text-white sm:text-7xl lg:text-[5.5rem]">
              {title.map((w, i) => (
                <span key={w + i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span
                    className={`sap-rise-word inline-block ${w === "GROW" ? "mw-text-gradient" : ""}`}
                    style={{ animationDelay: `${120 + i * 100}ms` }}
                  >
                    {w}
                    {i < title.length - 1 ? " " : ""}
                  </span>
                </span>
              ))}
            </h1>
            <p className="sap-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl" style={{ animationDelay: "480ms" }}>
              A cloud ERP you grow into, not out of. Finance, supply chain and HR on one AI-enabled platform, live in
              weeks, with room to add more whenever you need it.
            </p>
            <div className="sap-rise mt-9 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "620ms" }}>
              <Link
                href="/contact"
                className="rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
              >
                Schedule a Consultation
              </Link>
              <a
                href="#go-live"
                className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60 active:scale-[0.97]"
              >
                See how you go live
              </a>
            </div>
          </div>

          {/* the product, fading into the page below it */}
          <div className="sap-fade relative mt-16 px-2 sm:px-10" style={{ animationDelay: "700ms" }}>
            <DashboardMock />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- overview */}
      <section id="overview" aria-labelledby="overview-title" className="scroll-mt-28 bg-black">
        <div className={pad}>
          <Reveal>
            <Head tag="Overview" title="A platform you grow into, not out of." id="overview-title">
              GROW with SAP is SAP&rsquo;s entry point to cloud ERP, built on SAP S/4HANA Cloud Public Edition. Launch
              with what you need today and add capabilities on the same system as the business expands.
            </Head>
          </Reveal>
          <div className="mt-14">
            <BentoOverview />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ core */}
      <section id="core" aria-labelledby="core-title" className="relative scroll-mt-28 border-t border-white/10 bg-[#050a08]">
        <div className={pad}>
          <Reveal>
            <Head tag="Core processes" title="One foundation for finance, supply chain and HR." id="core-title">
              Start with the area that matters most and add the rest when you&rsquo;re ready.
            </Head>
          </Reveal>
          <div className="mt-14">
            <ExpandPanels items={coreProcesses} />
          </div>
          <p className="mt-8 text-center text-sm text-white/55">
            Joule, SAP&rsquo;s AI solution, is available across all three areas.{" "}
            <Link href="/services/sap-ai-solutions" className="font-semibold text-[#7fd9b4] underline-offset-4 hover:underline">
              See SAP Business AI &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- go live */}
      <section id="go-live" aria-labelledby="golive-title" className="scroll-mt-28 bg-black">
        <div className={pad}>
          <Reveal>
            <Head tag="Go live fast" title="Live in weeks, with a partner by your side." id="golive-title">
              GROW Fast pairs a predefined scope with SAP-approved tools, delivered by certified partners.
            </Head>
          </Reveal>

          <div className="mt-16">
            <StepperH steps={goLiveSteps} />
          </div>

          <div className="mt-20 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photos.golive.src}
                    alt={photos.golive.alt}
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="sap-photo-drift object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1c6b51]/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
            <div>
              <StatStrip stats={proofStats} />
              <p className="mt-5 text-xs leading-relaxed text-white/40">
                These figures are SAP&rsquo;s, as published on its own pages. Timelines and savings depend on scope, data
                and partner, so treat them as indicative rather than a promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- scale */}
      <section id="scale" aria-labelledby="scale-title" className="relative scroll-mt-28 border-t border-white/10 bg-[#050a08]">
        <div className={pad}>
          <Reveal>
            <Head tag="Grow into more" title="Start small. Switch more on as you grow." id="scale-title">
              No re-implementation when you expand. Try it: build up the platform one capability at a time.
            </Head>
          </Reveal>
          <div className="mt-14">
            <Configurator />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- trust */}
      <section id="trust" aria-labelledby="trust-title" className="scroll-mt-28 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <Head tag="Security & cost" title="Secure, compliant, and no surprises." id="trust-title" />
          </Reveal>
          <div className="mt-14">
            <SpecTable groups={specGroups} />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- compare */}
      <section id="compare" aria-labelledby="compare-title" className="relative scroll-mt-28 border-t border-white/10 bg-[#050a08]">
        <div className={pad}>
          <Reveal>
            <Head tag="GROW or RISE?" title="Where are you starting from?" id="compare-title">
              Both are built on SAP S/4HANA Cloud. They differ in who they&rsquo;re for.
            </Head>
          </Reveal>
          <div className="mt-12">
            <PathPicker current="grow" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
