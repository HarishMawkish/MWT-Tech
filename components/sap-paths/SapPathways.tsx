import { Reveal } from "@/components/Reveal";
import { SpotlightLink } from "@/components/SpotlightLink";
import { Section } from "@/components/ui";

/** Mini bar chart that rises when its card is hovered: growth, in four bars. */
function GrowGlyph() {
  const bars = [34, 52, 74, 100];
  return (
    <div aria-hidden="true" className="flex h-24 items-end gap-2.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-5 origin-bottom rounded-t-md bg-gradient-to-t from-[#1c6b51] to-[#7fd9b4] opacity-70 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100"
          style={{
            height: `${h}%`,
            transform: "scaleY(0.55)",
            transitionDelay: `${i * 70}ms`,
          }}
          data-bar
        />
      ))}
    </div>
  );
}

/** Two blocks joined by a dotted path with a pulse: from where you are to the cloud. */
function RiseGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 96" className="h-24 w-full max-w-[16rem]" fill="none">
      <rect x="4" y="34" width="46" height="46" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" />
      <path d="M14 50h26M14 58h26M14 66h18" stroke="rgba(255,255,255,0.35)" strokeLinecap="round" />
      <path d="M58 57C90 57 100 30 130 30" stroke="rgba(127,217,180,0.7)" strokeWidth="1.5" strokeDasharray="3 5" className="sap-dash" />
      <circle r="3.5" fill="#fff" style={{ filter: "drop-shadow(0 0 6px #7fd9b4)" }}>
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M58 57C90 57 100 30 130 30" />
      </circle>
      <path
        d="M160 70h34a16 16 0 0 0 1-31 22 22 0 0 0-42-3 17 17 0 0 0 7 34Z"
        fill="rgba(127,217,180,0.14)"
        stroke="#7fd9b4"
        strokeWidth="1.4"
        className="sap-float"
      />
    </svg>
  );
}

const paths = [
  {
    href: "/services/sap-solutions/grow-with-sap",
    tag: "For companies new to SAP",
    name: "GROW with SAP",
    mark: "/images/solutions/grow.jpg",
    body: "A cloud ERP built to grow with you. Run finance, supply chain and HR on one AI-enabled platform, go live in weeks, and add capabilities as you scale without starting over.",
    points: [
      "Live in weeks with preconfigured industry best practices",
      "Start with finance, supply chain or HR, then expand",
      "Transparent, fixed-scope packages",
    ],
    cta: "Explore GROW with SAP",
    glyph: <GrowGlyph />,
  },
  {
    href: "/services/sap-solutions/rise-with-sap",
    tag: "For existing SAP customers",
    name: "RISE with SAP",
    mark: "/images/solutions/rise.jpg",
    body: "Modernize your on-premises SAP ERP in the cloud. A guided, agent-led path from ECC or S/4HANA to SAP Cloud ERP Private, built on a clean core and ready for AI.",
    points: [
      "Agent-led migration and modernization toolchain",
      "Your business rules carry over to the cloud",
      "A fast path to agentic AI on your ERP",
    ],
    cta: "Explore RISE with SAP",
    glyph: <RiseGlyph />,
  },
] as const;

/**
 * The two ways into SAP, given the prominence of the page itself: this is what
 * people on the SAP page are here to choose between. Each card is one big link.
 */
export function SapPathways() {
  return (
    <section id="paths" aria-labelledby="paths-title" className="scroll-mt-28 border-t border-white/10 bg-black">
      <Section className="!py-20 lg:!py-28">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#7fd9b4]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7fd9b4]">SAP Solutions</span>
            </div>
            <h2 id="paths-title" className="mt-5 text-balance font-display text-3xl text-white sm:text-5xl">
              Two ways in. Choose the one that fits where you are.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.href} delay={i * 120} className="h-full">
              <SpotlightLink
                href={p.href}
                className="group relative flex h-full flex-col rounded-[2rem] p-8 sm:p-10 [&:hover_[data-bar]]:!scale-y-100"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#1c6b51]/30 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.mark} alt="" className="h-14 w-14 rounded-2xl bg-white object-contain p-1.5" />
                    <span className="rounded-full border border-[#7fd9b4]/30 bg-[#7fd9b4]/[0.07] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7fd9b4]">
                      {p.tag}
                    </span>
                  </div>
                </div>

                <h3 className="relative mt-10 font-display text-4xl text-white sm:text-5xl">{p.name}</h3>
                <p className="relative mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">{p.body}</p>

                <ul className="relative mt-7 space-y-3 border-t border-white/10 pt-7">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                      <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[#7fd9b4]" aria-hidden="true">
                        <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-10 flex items-end justify-between gap-6">
                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-white">
                    {p.cta}
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-mw-void transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1.5">
                      &rarr;
                    </span>
                  </span>
                  {p.glyph}
                </div>
              </SpotlightLink>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}
