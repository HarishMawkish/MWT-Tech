import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightLink";
import { AgentFlow } from "@/components/sap-ai/AgentFlow";
import { LayerStack } from "@/components/sap-ai/LayerStack";
import { OrchestrationVisual } from "@/components/sap-ai/OrchestrationVisual";
import { ProofStats } from "@/components/sap-ai/ProofStats";
import { SectionNav } from "@/components/sap-ai/SectionNav";
import { StartSteps } from "@/components/sap-ai/StartSteps";
import { UseCaseExplorer } from "@/components/sap-ai/UseCaseExplorer";
import {
  customerStories,
  layers,
  photos,
  pillars,
  principles,
  proofStats,
  sections,
  startSteps,
  useCases,
} from "@/components/sap-ai/data";

// This route is deliberately its own page, not an entry rendered by the shared
// /services/[slug] template: a static segment takes precedence over the
// dynamic one, so /services/sap-ai-solutions lands here.
export const metadata: Metadata = {
  title: "SAP Business AI Solutions",
  description:
    "What SAP Business AI is and how it works: Joule, Joule Agents and Joule Studio, real use cases by function, published results, and SAP's approach to trust and governance.",
};

const linesOfBusiness = [
  "Financial management",
  "Supply chain",
  "Spend management",
  "Human capital management",
  "Customer experience",
];

const benefits = [
  { title: "A new human advantage", body: "Routine workflows are automated so people can focus on the decisions that matter." },
  { title: "Performance that scales", body: "Insights, agents and models work together across systems." },
  { title: "Agility without compromise", body: "AI speed, with security and governance built in." },
];

/** Section opener, in the same style as the rest of the site. */
function Head({ tag, title, id, children }: { tag: string; title: string; id: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-3">
        <span className="h-px w-10 bg-[#7fd9b4]" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">{tag}</span>
      </div>
      <h2 id={id} className="mt-5 text-balance font-display text-3xl text-white sm:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{children}</p>}
    </div>
  );
}

export default function SapBusinessAiPage() {
  const title = "SAP Business AI Solutions".split(" ");

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="mw-dark-section relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 70% at 78% 40%, rgba(28,107,81,0.34) 0%, rgba(28,107,81,0.08) 55%, rgba(0,0,0,0) 80%), radial-gradient(40% 50% at 0% 0%, rgba(28,107,81,0.2) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <nav aria-label="Breadcrumb" className="relative mx-auto flex max-w-7xl items-center gap-3 px-6 pt-6 lg:px-8">
          <Link
            href="/services"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-3.5 pr-5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
          >
            <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
              &larr;
            </span>
            All services
          </Link>
          <span aria-hidden="true" className="hidden text-white/25 sm:inline">
            /
          </span>
          <span aria-current="page" className="hidden text-sm text-white/50 sm:inline">
            SAP Business AI Solutions
          </span>
        </nav>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8 lg:pb-16 lg:pt-14">
          <div>
            <div className="sap-rise" style={{ animationDelay: "0ms" }}>
              <Eyebrow>SAP Business AI</Eyebrow>
            </div>
            <h1 className="mt-7 text-balance font-display text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-[4.25rem]">
              {title.map((w, i) => (
                <span key={w + i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span
                    className={`sap-rise-word inline-block ${w === "AI" ? "mw-text-gradient" : ""}`}
                    style={{ animationDelay: `${120 + i * 90}ms` }}
                  >
                    {w}
                    {i < title.length - 1 ? " " : ""}
                  </span>
                </span>
              ))}
            </h1>
            <p className="sap-rise mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl" style={{ animationDelay: "480ms" }}>
              AI built into the processes that run your business: an assistant you can ask, agents that carry the work
              across systems, and a governed foundation underneath.
            </p>
            <div className="sap-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "620ms" }}>
              <Link
                href="/contact"
                className="rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
              >
                Schedule a Consultation
              </Link>
              <a
                href="#use-cases"
                className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60 active:scale-[0.97]"
              >
                Explore the use cases
              </a>
            </div>
          </div>

          <div className="sap-fade" style={{ animationDelay: "300ms" }}>
            <OrchestrationVisual />
          </div>
        </div>
      </section>

      <SectionNav sections={sections} />

      {/* -------------------------------------------------------- overview */}
      <section id="overview" aria-labelledby="overview-title" className="scroll-mt-40 bg-black">
        <Section className="!py-20 lg:!py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <Head tag="Overview" title="AI built into the work, not bolted on." id="overview-title" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                SAP Business AI is SAP&rsquo;s approach to putting AI inside the processes that run an enterprise. People
                ask in plain language, assistants and agents carry the work across SAP and non-SAP systems, and every
                answer is grounded in business data and process context rather than guesswork.
              </p>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Covers</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {linesOfBusiness.map((l) => (
                    <li
                      key={l}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-[#7fd9b4]/50 hover:text-white"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative pb-10 sm:pl-8">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_90px_-50px_rgba(127,217,180,0.6)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photos.overviewTeam.src}
                      alt={photos.overviewTeam.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="sap-photo-drift object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1c6b51]/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>
                </div>
                {/* a second, smaller photo overlapping the first, for depth */}
                <div className="sap-float absolute bottom-0 left-0 hidden w-44 overflow-hidden rounded-2xl border-4 border-black shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)] sm:block lg:w-52">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photos.overviewLaptop.src}
                      alt={photos.overviewLaptop.alt}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {benefits.map((b, i) => (
              <li key={b.title} className="h-full">
                <Reveal delay={i * 90} className="h-full">
                  <SpotlightCard className="h-full rounded-3xl p-7">
                    <p className="font-display text-xs font-bold tracking-[0.2em] text-[#7fd9b4]">0{i + 1}</p>
                    <h3 className="mt-4 font-display text-xl text-white">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{b.body}</p>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      {/* ----------------------------------------------------- architecture */}
      <section
        id="architecture"
        aria-labelledby="architecture-title"
        className="relative scroll-mt-40 border-t border-white/10 bg-[#050a08]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.16) 0%, rgba(0,0,0,0) 80%)" }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <Reveal>
            <Head tag="How it fits together" title="Four layers, working as one system." id="architecture-title">
              From the question a person asks to the data and guardrails behind the answer. Point at a layer to lift it out
              of the stack.
            </Head>
          </Reveal>
          <div className="mt-14">
            <LayerStack layers={layers} label="SAP Business AI layers" />
          </div>
        </Section>
      </section>

      {/* ------------------------------------------------------- how it works */}
      <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-40 bg-black">
        <Section className="!py-20 lg:!py-28">
          <Reveal>
            <Head tag="How work gets done" title="From intent to outcome, with people in control." id="how-title">
              Agents hand work to one another and use open protocols (MCP and A2A) to reach across systems, while
              governance runs the whole way through.
            </Head>
          </Reveal>
          <div className="mt-14">
            <AgentFlow />
          </div>
        </Section>
      </section>

      {/* ------------------------------------------------------------ use cases */}
      <section
        id="use-cases"
        aria-labelledby="use-cases-title"
        className="relative scroll-mt-40 border-t border-white/10 bg-[#050a08]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.16) 0%, rgba(0,0,0,0) 80%)" }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <Reveal>
            <Head tag="Use cases" title="Where agents are already at work." id="use-cases-title">
              Examples SAP publishes for each part of the business. Point at a function to see its headline agent and
              what else is possible there.
            </Head>
          </Reveal>
          <div className="mt-14">
            <UseCaseExplorer items={useCases} idPrefix="uc" label="Use cases by function" />
          </div>
        </Section>
      </section>

      {/* -------------------------------------------------------------- results */}
      <section id="results" aria-labelledby="results-title" className="scroll-mt-40 bg-black">
        <Section className="!py-20 lg:!py-28">
          <Reveal>
            <Head tag="Results" title="What SAP and its customers report." id="results-title" />
          </Reveal>

          <div className="mt-14">
            <ProofStats stats={proofStats} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={photos.resultsDashboard.src}
                  alt={photos.resultsDashboard.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="sap-photo-drift object-cover"
                />
                <div className="absolute inset-0 bg-[#1c6b51]/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
              </div>
            </Reveal>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {customerStories.map((c, i) => (
                <li key={c.name} className="h-full">
                  <Reveal delay={i * 70} className="h-full">
                    <SpotlightCard className="h-full rounded-3xl p-6">
                      <p className="font-display text-lg text-white">{c.name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{c.body}</p>
                    </SpotlightCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/40">
            These figures are SAP&rsquo;s, as published on its own pages, and describe the named customers&rsquo; results.
            Outcomes depend on your processes, data and rollout, so treat them as indicative rather than a promise.
          </p>
        </Section>
      </section>

      {/* ---------------------------------------------------------------- trust */}
      <section
        id="trust"
        aria-labelledby="trust-title"
        className="relative scroll-mt-40 border-t border-white/10 bg-[#050a08]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(28,107,81,0.16) 0%, rgba(0,0,0,0) 80%)" }}
        />
        <Section className="relative !py-20 lg:!py-28">
          <Reveal>
            <Head tag="Trust" title="Built for security, compliance and control." id="trust-title">
              SAP frames responsible AI on three pillars. Here is what it says sits behind each.
            </Head>
          </Reveal>

          <Reveal className="mt-14">
            <div className="relative h-60 overflow-hidden rounded-[2rem] border border-white/10 sm:h-72">
              <Image
                src={photos.trustServers.src}
                alt={photos.trustServers.alt}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="sap-photo-drift object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="relative flex h-full max-w-md flex-col justify-end p-7 sm:p-9">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">Built-in protections</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {["Encryption", "Tenant isolation", "Data masking", "Filtering"].map((t) => (
                    <li key={t} className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-md">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 100} className="h-full">
                <SpotlightCard className="flex h-full flex-col rounded-[2rem] p-8">
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-[#7fd9b4]">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-2xl text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{p.lead}</p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                        <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7fd9b4]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal className="h-full">
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  SAP&rsquo;s ten AI ethics principles
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {principles.map((p, i) => (
                    <li
                      key={p}
                      className="sap-chip rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition-colors duration-300 hover:border-[#7fd9b4]/60 hover:bg-[#7fd9b4]/10 hover:text-white"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <span className="mr-2 font-display text-xs font-bold text-[#7fd9b4]">{String(i + 1).padStart(2, "0")}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col gap-3">
                <div className="flex-1 rounded-[2rem] border border-[#7fd9b4]/25 bg-[#7fd9b4]/[0.05] p-7">
                  <p className="font-display text-3xl text-white">ISO/IEC 42001</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    Certified for AI governance, covering SAP&rsquo;s internal governance and key solutions including
                    Joule, SAP AI Core and SAP AI Launchpad.
                  </p>
                </div>
                <div className="flex-1 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
                  <p className="font-display text-3xl text-white">NIST CSF</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    Tier 3 alignment with the NIST Cybersecurity Framework (v1.1).
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <p className="max-w-3xl text-sm leading-relaxed text-white/55">
              For organizations with regional requirements, SAP also offers AI hosted and managed in European data
              centers, designed to meet GDPR and align with the EU AI Act, and SAP Sovereign Cloud for full control over
              data and compliance.
            </p>
          </Reveal>
        </Section>
      </section>

      {/* ---------------------------------------------------- getting started */}
      <section id="getting-started" aria-labelledby="start-title" className="scroll-mt-40 bg-black">
        <Section className="!py-20 lg:!py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-44">
                <Reveal>
                  <Head tag="Getting started" title="A sensible path to your first agent." id="start-title">
                    SAP&rsquo;s own guidance: start small, start with data, and bring people along.
                  </Head>
                </Reveal>
                <Reveal delay={120} className="mt-10 hidden overflow-hidden rounded-[2rem] border border-white/10 lg:block">
                  <div className="relative h-72">
                    <Image
                      src="/images/untitled-03846.JPG"
                      alt="A Mawkish team meeting around a table"
                      fill
                      sizes="40vw"
                      className="sap-photo-drift object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                </Reveal>
              </div>
            </div>

            <StartSteps steps={startSteps} />
          </div>
        </Section>
      </section>

      <CtaBand />
    </>
  );
}
