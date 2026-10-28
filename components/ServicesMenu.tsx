"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuGlyph, type GlyphName } from "./MenuGlyph";
import { servicesMenu, type MenuCategory } from "@/lib/services-menu";

// The panel is deliberately light: off-white, with the deep brand green for
// accents, so it reads as a clean sheet laid over the dark page. Pure white
// would glare against the black header, so it's a soft paper tone.
const INK = "text-[#071912]";
const MUTED = "text-[#4d6157]";

/**
 * The way every list in the panel reads: plain text, no box. Hierarchy comes from
 * the headings and the spacing, which is how Stripe, Atlassian and Accenture keep
 * a long menu calm. On hover the text slides across and darkens and an arrow
 * appears, so it still answers the pointer. Items without a page lead nowhere.
 */
function Item({ delay, icon, children }: { delay: number; icon?: GlyphName; children: string }) {
  return (
    <li
      className="sap-rise group flex cursor-default items-start gap-2 py-[7px] text-[13.5px] font-medium leading-snug text-[#33463c] transition-colors duration-200 hover:text-[#071912]"
      style={{ animationDelay: `${delay}ms`, animationDuration: "0.45s" }}
    >
      {icon && <MenuGlyph name={icon} className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#1c6b51]" />}
      <span className="relative transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1">
        {children}
        <span
          aria-hidden="true"
          className="absolute left-full top-0 ml-1.5 -translate-x-1 text-[#1c6b51] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          &rarr;
        </span>
      </span>
    </li>
  );
}

/** Small caps label over a hairline: the heading every group and band sits under. */
function Heading({ children }: { children: string }) {
  return (
    <h3 className="mb-1.5 border-b border-[#d9e3de] pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f8278]">
      {children}
    </h3>
  );
}

/** GROW and RISE, side by side in their own band: a mark, a name, a line, an arrow. */
function FeaturedCard({
  f,
  delay,
  current,
}: {
  f: { label: string; sub: string; href: string; mark: string };
  delay: number;
  current: boolean;
}) {
  return (
    <li className="sap-rise" style={{ animationDelay: `${delay}ms`, animationDuration: "0.5s" }}>
      <Link
        href={f.href}
        aria-current={current ? "page" : undefined}
        className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-[#cfe0d7] bg-white p-3 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-[#1c6b51] hover:shadow-[0_16px_30px_-18px_rgba(28,107,81,0.75)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={f.mark} alt="" className="h-11 w-11 shrink-0 rounded-lg border border-[#e0e8e4] bg-white object-contain p-0.5" />
        <span className="min-w-0 flex-1">
          <span className={`block font-display text-[15px] font-extrabold uppercase leading-tight tracking-wide ${INK}`}>{f.label}</span>
          <span className="mt-0.5 block text-xs font-medium text-[#4d6157]">{f.sub}</span>
        </span>
        <span
          aria-hidden="true"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1c6b51]/10 text-xs text-[#1c6b51] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#1c6b51] group-hover:text-white"
        >
          &rarr;
        </span>
      </Link>
    </li>
  );
}

function AllServicesLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/services"
      className={`group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1c6b51] transition-colors hover:text-[#071912] ${className}`}
    >
      All services
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

function Panel({ cat, pathname }: { cat: MenuCategory; pathname: string }) {
  // ---- SAP: the two programmes in a band, then offerings in titled columns ----
  if (cat.featured) {
    const groups = cat.groups ?? [];
    return (
      <div>
        <Heading>Cloud ERP programmes</Heading>
        <ul className="mb-6 mt-3 grid grid-cols-2 gap-3">
          {cat.featured.map((f, i) => (
            <FeaturedCard key={f.href} f={f} delay={i * 80} current={pathname === f.href} />
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-x-7">
          {groups.map((g, gi) => (
            <section key={g.title}>
              <Heading>{g.title}</Heading>
              <ul>
                {g.items.map((label, i) => (
                  <Item key={label} delay={140 + gi * 60 + i * 30}>
                    {label}
                  </Item>
                ))}
              </ul>
              {/* the last column is the short one, so the link lives in its spare room */}
              {gi === groups.length - 1 && <AllServicesLink className="mt-6" />}
            </section>
          ))}
        </div>
      </div>
    );
  }

  // ---- Categories with a page: a header row that links to it, then its points ----
  if (cat.href) {
    return (
      <>
        <Link
          href={cat.href}
          aria-current={pathname === cat.href ? "page" : undefined}
          className="group relative block overflow-hidden rounded-lg border border-[#b7d6c7] bg-gradient-to-r from-[#e4f1ea] via-[#eef6f1] to-white px-6 py-5 shadow-[0_10px_22px_-16px_rgba(28,107,81,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#1c6b51]"
        >
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#1c6b51]" />
          <span className={`flex items-center justify-between gap-4 font-display text-lg font-extrabold uppercase tracking-wide ${INK}`}>
            {cat.label}
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#1c6b51] text-sm text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-110">
              &rarr;
            </span>
          </span>
          <span className={`mt-1.5 block max-w-xl text-sm leading-relaxed ${MUTED}`}>{cat.blurb}</span>
        </Link>
        <ul className="mt-4 grid grid-cols-2 gap-x-7">
          {cat.bullets?.map((b, i) => (
            <Item key={b} icon="check" delay={80 + i * 60}>
              {b}
            </Item>
          ))}
        </ul>
      </>
    );
  }

  // ---- Entries without a page yet: shown, animated, not linked ----
  return (
    <div className="relative cursor-default overflow-hidden rounded-lg border border-[#d5dfda] bg-white px-6 py-6">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#1c6b51]/60" />
      <p className={`font-display text-2xl font-extrabold uppercase tracking-wide ${INK}`}>{cat.label}</p>
      <p className="mt-1 text-sm font-semibold text-[#1c6b51]">{cat.descriptor}</p>

      {cat.logos && (
        <ul className="mt-5 flex flex-wrap items-center gap-3">
          {cat.logos.map((l, i) => (
            <li
              key={l.alt}
              className="sap-rise grid h-14 min-w-24 place-items-center rounded-lg border border-[#e0e8e4] bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1c6b51]/50 hover:shadow-[0_14px_28px_-18px_rgba(28,107,81,0.6)]"
              style={{ animationDelay: `${100 + i * 90}ms`, animationDuration: "0.5s" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={l.alt} className="max-h-8 w-auto object-contain" />
            </li>
          ))}
        </ul>
      )}

      <p className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${MUTED}`}>
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#1c6b51] opacity-60 motion-safe:animate-ping" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-[#1c6b51]" />
        </span>
        Details coming soon
      </p>
    </div>
  );
}

/**
 * The large "Our Services" panel. A rail of service categories on the left;
 * pointing at one fills the area on the right with what sits under it, and SAP
 * Solutions is always selected when the panel opens. Categories that have a
 * page link to it; the rest are display-only (they animate but go nowhere).
 * Opening, closing and the hover grace period are owned by the Navbar; this
 * component is the contents.
 */
export function ServicesMenu({
  open,
  onEnter,
  onLeave,
  pathname,
}: {
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  pathname: string;
}) {
  const [active, setActive] = useState(0);

  // Reopen on SAP, but only once the closing fade has finished so the content
  // doesn't visibly jump while the panel is leaving.
  useEffect(() => {
    if (open) return;
    const id = window.setTimeout(() => setActive(0), 260);
    return () => window.clearTimeout(id);
  }, [open]);

  const cat = servicesMenu[active];

  return (
    <div
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className={`absolute inset-x-0 top-full hidden origin-top transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:block ${
        open ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      {/* Invisible bridge over the gap beneath the nav, so the pointer can travel from
          "Our Services" down to the panel without the menu closing on the way. */}
      <span aria-hidden="true" className="absolute inset-x-0 -top-7 h-7" />
      <div className="mx-auto flex max-w-7xl justify-center px-6 pt-2 lg:px-8">
        <div className="grid w-full max-w-5xl grid-cols-[17rem_1fr] overflow-hidden rounded-3xl border border-white/60 bg-[#f7f9f8] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,0,0,0.06)]">
          {/* ---- category rail ---- */}
          <ul className="space-y-1 border-r border-[#dde6e1] bg-[#ebf0ed] p-3" role="tablist" aria-label="Services">
            {servicesMenu.map((c, i) => {
              const on = i === active;
              const inner = (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-3 left-0 w-[3px] rounded-full bg-[#1c6b51] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      on ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
                  />
                  <span className="min-w-0">
                    <span className="block font-display text-[13px] font-bold uppercase leading-tight tracking-[0.06em]">{c.label}</span>
                    {c.descriptor && (
                      <span className={`mt-0.5 block text-[11px] font-medium normal-case tracking-normal ${on ? "text-[#4d6157]" : "text-[#6f8278]"}`}>
                        {c.descriptor}
                      </span>
                    )}
                  </span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 shrink-0 text-[#1c6b51] transition-all duration-300 ${
                      on ? "translate-x-0 opacity-100" : "-translate-x-1.5 opacity-0"
                    }`}
                  >
                    <path d="M4 2.5L7.5 6L4 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              );
              const cls = `group relative flex min-h-[3.25rem] w-full items-center justify-between gap-3 overflow-hidden rounded-xl px-5 text-left transition-all duration-300 ${
                on ? "bg-white text-[#071912] shadow-[0_6px_18px_-10px_rgba(7,25,18,0.35)]" : "text-[#3e5248] hover:bg-white/60 hover:text-[#071912]"
              }`;
              return (
                <li key={c.id}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      role="tab"
                      aria-selected={on}
                      onPointerEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className={cls}
                    >
                      {inner}
                    </Link>
                  ) : (
                    // No page behind it: reacts to hover and focus, goes nowhere.
                    <button
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onPointerEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className={`${cls} cursor-default`}
                    >
                      {inner}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ---- the selected category ---- */}
          <div className="relative min-h-[24rem] overflow-hidden p-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1c6b51]/[0.07] blur-3xl"
            />
            <div key={cat.id} className="sap-rise relative flex h-full flex-col" style={{ animationDuration: "0.4s" }}>
              <Panel cat={cat} pathname={pathname} />

              {/* SAP carries this link inside its own second column, where there is room */}
              {!cat.featured && <AllServicesLink className="mt-auto pt-4" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
