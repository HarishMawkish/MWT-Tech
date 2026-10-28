import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "./fx/Magnetic";
import { SplitHeading } from "./fx/SplitHeading";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-mw-glow/30 bg-mw-glow/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mw-glow">
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mw-dark-section mw-glow-grid relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <SplitHeading
          parts={[{ text: "Let’s talk about the outcome you’re trying to reach." }]}
          className="font-display text-4xl text-white sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Tell us about the challenge you&rsquo;re facing — we&rsquo;ll help you
          design a practical path from where you are to where you need to be.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Link
              href="/contact"
              className="mw-sheen block rounded-full bg-mw-mint px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
            >
              Schedule a Consultation
            </Link>
          </Magnetic>
          <Link
            href="/contact?intent=proposal"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-mw-mint hover:text-mw-glow active:scale-[0.97]"
          >
            Request a Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="mw-dark-section relative overflow-hidden">
      {/* A single soft light from above gives the page depth without noise. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(28,107,81,0.32) 0%, rgba(28,107,81,0.08) 45%, rgba(0,0,0,0) 75%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-20 text-center lg:px-8 lg:pb-32 lg:pt-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SplitHeading
          as="h1"
          on="load"
          delay={0.1}
          parts={[{ text: title }]}
          className="mx-auto mt-7 max-w-4xl text-balance font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        />
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
          {description}
        </p>
        {children && <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

/** Section opener: a short rule, a small label, and a display heading. */
export function SectionHead({
  tag,
  title,
  id,
  className = "",
}: {
  tag: string;
  title: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
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
