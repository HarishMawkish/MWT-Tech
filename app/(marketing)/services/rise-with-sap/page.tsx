import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { AccordionRows } from "@/components/sap-erp/AccordionRows";
import { AuditLog } from "@/components/sap-erp/AuditLog";
import { BeforeAfter } from "@/components/sap-erp/BeforeAfter";
import { CaseList } from "@/components/sap-erp/CaseList";
import { ChapterLayout } from "@/components/sap-erp/ChapterLayout";
import { MetroLine } from "@/components/sap-erp/MetroLine";
import { PathPicker } from "@/components/sap-erp/PathPicker";
import { StatStrip } from "@/components/sap-erp/StatStrip";
import {
  assistants,
  carryOver,
  compare,
  customerStories,
  foundation,
  inheritedControls,
  orchestration,
  oversight,
  photos,
  pillars,
  proofStats,
  sections,
} from "@/components/sap-erp/rise-data";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "RISE with SAP",
  description:
    "RISE with SAP is SAP's guided, agent-led path for existing SAP customers to move their ERP to the cloud: a proven methodology, migration assistants, a clean core, and a fast path to agentic AI.",
};

/** Chapter opener: left-aligned and editorial, with a rule above. */
function Chapter({
  id,
  n,
  tag,
  title,
  lead,
  children,
}: {
  id: string;
  n: number;
  tag: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-t border-white/10 py-20 first:border-t-0 lg:py-28">
      <Reveal>
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#7fd9b4]">
          <span className="font-display text-2xl font-bold tracking-normal text-white/20">{String(n).padStart(2, "0")}</span>
          {tag}
        </p>
        <h2 id={`${id}-title`} className="mt-5 max-w-3xl text-balance font-display text-3xl text-white sm:text-5xl">
          {title}
        </h2>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">{lead}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

/** Columns divided by thin vertical rules, as in a printed report. */
function Columns({ items }: { items: readonly { title: string; body: string }[] }) {
  return (
    <ul className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
      {items.map((it, i) => (
        <li key={it.title} className="sap-rise py-7 md:px-7 md:py-2 md:first:pl-0 md:last:pr-0" style={{ animationDelay: `${i * 90}ms` }}>
          <p className="font-display text-xs font-bold tracking-[0.2em] text-[#7fd9b4]">0{i + 1}</p>
          <h3 className="mt-3 font-display text-xl text-white">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{it.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default function RiseWithSapPage() {
  const title = "RISE with SAP".split(" ");

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="relative isolate flex min-h-[88svh] flex-col overflow-hidden bg-black">
        <Image
          src={photos.overview.src}
          alt={photos.overview.alt}
          fill
          priority
          sizes="100vw"
          className="sap-photo-drift -z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#1c6b51]/30 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/45" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <Link
              href="/services/sap-solutions"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-black/30 pl-3.5 pr-5 text-sm font-semibold text-white/85 backdrop-blur-xl transition-colors hover:border-white/40 hover:text-white active:scale-[0.97]"
            >
              <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:-translate-x-1">
                &larr;
              </span>
              SAP Solutions
            </Link>
          </nav>

          <div className="mt-auto max-w-4xl pb-10 pt-24">
            <p className="sap-rise text-xs font-semibold uppercase tracking-[0.24em] text-[#7fd9b4]">For existing SAP customers</p>
            <h1 className="mt-5 text-balance font-display text-5xl font-bold leading-[1.02] text-white sm:text-7xl lg:text-[6rem]">
              {title.map((w, i) => (
                <span key={w + i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span
                    className={`sap-rise-word inline-block ${w === "RISE" ? "mw-text-gradient" : ""}`}
                    style={{ animationDelay: `${120 + i * 100}ms` }}
                  >
                    {w}
                    {i < title.length - 1 ? " " : ""}
                  </span>
                </span>
              ))}
            </h1>
            <p className="sap-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl" style={{ animationDelay: "480ms" }}>
              Modernize your on-premises ERP in the cloud, so it can power AI assistants that drive real business
              outcomes, on a guided, agent-led path.
            </p>
            <div className="sap-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "620ms" }}>
              <Link
                href="/contact"
                className="rounded-full bg-mw-mint px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
              >
                Schedule a Consultation
              </Link>
              <a
                href="#assistants"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/70 active:scale-[0.97]"
              >
                Meet the AI assistants
              </a>
            </div>
          </div>

          {/* three promises as a glass bar along the bottom */}
          <ul className="sap-fade mb-8 grid grid-cols-1 divide-y divide-white/15 overflow-hidden rounded-3xl border border-white/15 bg-black/35 backdrop-blur-xl md:grid-cols-3 md:divide-x md:divide-y-0" style={{ animationDelay: "800ms" }}>
            {pillars.map((p, i) => (
              <li key={p.title} className="px-6 py-5">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-[#7fd9b4]">0{i + 1}</p>
                <p className="mt-1.5 font-display text-base text-white">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------- the report */}
      <div className="bg-black">
        <ChapterLayout chapters={sections}>
          <Chapter
            id="overview"
            n={1}
            tag="Overview"
            title="Modernize your ERP. Unlock real AI value."
            lead="RISE with SAP is SAP's route for companies running SAP ERP on premises, on ECC or S/4HANA, to move to the cloud: a proven methodology, expert guidance and an agent-led toolchain, with AI assistants built into the migration."
          >
            <div className="flex flex-col gap-10">
              <Reveal>
                <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
                  <p className="font-display text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_#7fd9b4] sm:text-8xl">2030</p>
                  <p className="max-w-md text-base leading-relaxed text-white/65">
                    The year SAP gives for the end of extended maintenance on SAP Business Suite 7. AI is the other reason
                    to move now: it asks ERP to do more than keep records.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  What changes when AI moves in. Drag the handle.
                </p>
                <BeforeAfter before={compare.before} after={compare.after} />
                <p className="mt-3 text-xs text-white/40">SAP&rsquo;s view, from its RISE with SAP FAQ.</p>
              </Reveal>
            </div>
          </Chapter>

          <Chapter
            id="transformation"
            n={2}
            tag="Agent-led transformation"
            title="A transformation that is orchestrated, not improvised."
            lead="Business transformation orchestration is built around six outcomes, so value stays the measure and not just go-live."
          >
            <Reveal>
              <AccordionRows items={orchestration} />
            </Reveal>
            <div className="mt-16">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">What carries over</p>
              <Columns items={carryOver} />
            </div>
          </Chapter>

          <Chapter
            id="assistants"
            n={3}
            tag="AI assistants"
            title="Seven assistants built into the migration."
            lead="They take on the most complex, time-intensive parts of the move. Point at a stop on the line to see what each one does."
          >
            <div className="pt-24 lg:pt-28">
              <MetroLine stops={assistants} />
            </div>
          </Chapter>

          <Chapter
            id="ai"
            n={4}
            tag="AI on your ERP"
            title="A fast path to agentic AI."
            lead="SAP Cloud ERP Private is the foundation: SAP's proven ERP in a trusted, SAP-managed cloud, built for organizations that need depth, control and reliability."
          >
            <Reveal>
              <div className="relative mb-12 h-56 overflow-hidden rounded-[2rem] border border-white/10 sm:h-72">
                <Image
                  src={photos.ai.src}
                  alt={photos.ai.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="sap-photo-drift object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-[#1c6b51]/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Columns items={foundation} />
            <Reveal className="mt-12">
              <div className="flex flex-col gap-5 rounded-[2rem] border border-[#7fd9b4]/25 bg-[#7fd9b4]/[0.05] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="max-w-xl">
                  <p className="font-display text-2xl text-white">Start realizing AI value quickly.</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    Activation services cover up to three Joule Assistants at no additional cost, and the Max Success
                    Plan lets you activate every assistant your business needs.
                  </p>
                </div>
                <Link href="/services/sap-ai-solutions" className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white">
                  See SAP Business AI
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-mw-void transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          </Chapter>

          <Chapter
            id="governance"
            n={5}
            tag="Governance"
            title="AI that acts inside your guardrails."
            lead="When an AI agent works inside the ERP, it inherits the same controls as a person, and every action it takes is logged in the change log in the same structure as a human one."
          >
            <Reveal>
              <AuditLog />
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="h-full">
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Inherited automatically</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {inheritedControls.map((c) => (
                      <li key={c} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">Oversight postures</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {oversight.map((o) => (
                      <li key={o} className="rounded-full border border-[#7fd9b4]/30 bg-[#7fd9b4]/[0.07] px-4 py-1.5 text-sm font-semibold text-[#7fd9b4]">
                        {o}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed text-white/40">
                    SAP describes these as structural design choices of the architecture, not bolt-on settings.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100} className="h-full">
                <div className="relative h-full min-h-[14rem] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={photos.governance.src}
                    alt={photos.governance.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="sap-photo-drift object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1c6b51]/25 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                </div>
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="customers" n={6} tag="Customers" title="What SAP and its customers report.">
            <StatStrip stats={proofStats} />
            <div className="mt-14">
              <CaseList items={customerStories} />
            </div>
            <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/40">
              These figures and stories are SAP&rsquo;s, as published on its own pages. Your results will depend on your
              landscape, data and rollout.
            </p>
          </Chapter>

          <Chapter
            id="compare"
            n={7}
            tag="GROW or RISE?"
            title="Where are you starting from?"
            lead="Both are built on SAP S/4HANA Cloud. They differ in who they're for."
          >
            <PathPicker current="rise" />
          </Chapter>
        </ChapterLayout>
      </div>

      <CtaBand />
    </>
  );
}
