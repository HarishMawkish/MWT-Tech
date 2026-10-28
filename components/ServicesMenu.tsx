"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { MenuGlyph, type GlyphName } from "./MenuGlyph";
import { servicesMenu, type MenuCategory, type MenuTile } from "@/lib/services-menu";

// A frosted sheet of paper laid over the dark page: soft off-white, translucent,
// with the page dimmed and blurred behind it, a glow that follows the pointer, a
// lens that glides between the rail items, and content that rises in. The deep
// brand green is used only as an accent.
const INK = "text-[#071912]";
const MUTED = "text-[#4d6157]";
const EASE = "ease-[cubic-bezier(0.23,1,0.32,1)]";

/** One line of plain text. With an href it is a link; without one it only reacts. */
function Item({
  delay,
  icon,
  href,
  accent,
  dense = false,
  children,
}: {
  delay: number;
  icon?: GlyphName;
  href?: string;
  accent?: string;
  dense?: boolean;
  children: string;
}) {
  const body = (
    <>
      {accent && <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />}
      {icon && <MenuGlyph name={icon} className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#1c6b51]" />}
      <span className={`relative transition-transform duration-300 ${EASE} group-hover:translate-x-1`}>
        {children}
        <span
          aria-hidden="true"
          className="absolute left-full top-0 ml-1.5 -translate-x-1 text-[#1c6b51] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          &rarr;
        </span>
      </span>
    </>
  );
  const cls =
    `group flex items-start gap-2 ${dense ? "py-[3px]" : "py-[7px]"} text-[13.5px] font-medium leading-snug transition-colors duration-200 hover:text-[#071912]`;
  return (
    <li className="sap-rise" style={{ animationDelay: `${delay}ms`, animationDuration: "0.45s" }}>
      {href ? (
        <Link href={href} className={`${cls} text-[#1f3a2d]`}>
          {body}
        </Link>
      ) : (
        <div className={`${cls} cursor-default text-[#33463c]`}>{body}</div>
      )}
    </li>
  );
}

/** Small caps label over a hairline: the heading every group sits under. */
function Heading({ children }: { children: string }) {
  return (
    <h3 className="mb-1 border-b border-[#d9e3de] pb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#6f8278]">
      {children}
    </h3>
  );
}

function AllServicesLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/services"
      className={`group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1c6b51] transition-colors hover:text-[#071912] ${className}`}
    >
      All services
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

/** The row at the top of every panel: what you are looking at, and the way out to everything. */
function HeaderRow({ title, link = true }: { title: string; link?: boolean }) {
  return (
    <div className="mb-2.5 flex items-center justify-between border-b border-[#d9e3de] pb-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f8278]">{title}</span>
      {link && <AllServicesLink />}
    </div>
  );
}

/** The dark card in the last cell of the SAP grid: one question, one answer, one button. */
function CtaCard({ cta, delay }: { cta: NonNullable<MenuCategory["cta"]>; delay: number }) {
  return (
    <div className="sap-rise" style={{ animationDelay: `${delay}ms`, animationDuration: "0.5s" }}>
      <Link
        href={cta.href}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#10201a] p-4 text-left transition-all duration-300 ${EASE} hover:-translate-y-0.5 hover:shadow-[0_24px_40px_-22px_rgba(7,25,18,0.9)]`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7fd9b4]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="relative block text-[14px] font-semibold leading-snug text-white">{cta.title}</span>
        <span className="relative mt-2 block text-[11.5px] leading-[1.45] text-white/60">{cta.body}</span>
        <span className="relative mt-auto inline-flex items-center gap-2 pt-3 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#7fd9b4]">
          {cta.label}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </Link>
    </div>
  );
}

/** GROW and RISE, side by side: a mark, a name, a line, an arrow. */
function FeaturedCard({
  f,
  delay,
  current,
}: {
  f: { label: string; sub: string; href: string; mark?: string; accent?: string };
  delay: number;
  current: boolean;
}) {
  return (
    <li className="sap-rise" style={{ animationDelay: `${delay}ms`, animationDuration: "0.5s" }}>
      <Link
        href={f.href}
        aria-current={current ? "page" : undefined}
        className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border border-[#cfe0d7] bg-white/90 p-2 transition-all duration-300 ${EASE} hover:-translate-y-0.5 hover:border-[#1c6b51] hover:shadow-[0_16px_30px_-18px_rgba(28,107,81,0.75)]`}
      >
        {/* a sheen that crosses the card on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:left-[110%] group-hover:opacity-100"
        />
        {f.mark ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={f.mark} alt="" className="relative h-9 w-9 shrink-0 rounded-lg border border-[#e0e8e4] bg-white object-contain p-0.5" />
        ) : null}
        <span className="relative min-w-0 flex-1">
          <span className={`block font-display text-[14px] font-extrabold uppercase leading-tight tracking-wide ${INK}`}>{f.label}</span>
          <span className="block text-[11.5px] font-medium text-[#4d6157]">{f.sub}</span>
        </span>
        <span
          aria-hidden="true"
          className="relative grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1c6b51]/10 text-xs text-[#1c6b51] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#1c6b51] group-hover:text-white"
        >
          &rarr;
        </span>
      </Link>
    </li>
  );
}

/**
 * One Salesforce cloud: the same size as every other, tinted in its own colour. It
 * leans a few degrees toward the pointer, lifts, glows in its colour, and a cloud
 * mark floats up in its corner.
 */
function CloudTile({ t, delay, current }: { t: MenuTile; delay: number; current: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const frame = useRef(0);
  const point = useRef({ x: 0, y: 0 });

  // Tilt is only a transform, and it is applied at most once per frame, so a fast
  // pointer cannot queue up style work.
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    point.current = { x: e.clientX, y: e.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (point.current.x - r.left) / r.width - 0.5;
      const y = (point.current.y - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
    });
  };
  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <li className="sap-rise [perspective:900px]" style={{ animationDelay: `${delay}ms`, animationDuration: "0.55s" }}>
      <Link
        ref={ref}
        href={t.href}
        aria-current={current ? "page" : undefined}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ "--a": t.accent, "--rx": "0deg", "--ry": "0deg" } as CSSProperties}
        className={`group relative flex h-full min-h-[8.9rem] flex-col justify-between overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--a)_26%,#dbe5e0)] bg-[linear-gradient(155deg,color-mix(in_srgb,var(--a)_13%,#fcfdfc),#f5f8f6_72%)] p-4 [transform:rotateX(var(--rx))_rotateY(var(--ry))] transition-[transform,box-shadow,border-color] duration-300 ${EASE} hover:-translate-y-1 hover:border-[var(--a)] hover:shadow-[0_26px_44px_-24px_var(--a)]`}
      >
        {/* a wash of the cloud's colour that fades in on hover (static, so it costs no repaints) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(120% 90% at 20% 0%, color-mix(in srgb, var(--a) 20%, transparent), transparent 65%)" }}
        />
        <span className="relative flex items-start justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0a1511] shadow-[0_8px_16px_-8px_rgba(0,0,0,0.6)]">
            <svg
              viewBox="0 0 48 32"
              className="h-[18px] w-6 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-0.5 group-hover:scale-125"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12.5 29h24a9.5 9.5 0 0 0 1.4-18.9A13 13 0 0 0 13 8.4 10.3 10.3 0 0 0 12.5 29Z"
                fill="var(--a)"
                fillOpacity="0.3"
                stroke="var(--a)"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            aria-hidden="true"
            className="grid h-7 w-7 -translate-x-1 place-items-center rounded-full bg-[var(--a)] text-[11px] font-bold text-[#06120d] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            &rarr;
          </span>
        </span>
        <span className="relative mt-4 block">
          <span className={`block font-sans text-[15px] font-semibold leading-tight tracking-[-0.012em] ${INK}`}>{t.label}</span>
          <span className="mt-1.5 line-clamp-2 block font-sans text-[12px] font-normal leading-[1.4] text-[#58695f]">{t.sub}</span>
        </span>
      </Link>
    </li>
  );
}

function Panel({ cat, pathname }: { cat: MenuCategory; pathname: string }) {
  // ---- Salesforce: every cloud given the same weight ----
  if (cat.tiles) {
    return (
      <>
        <HeaderRow title={cat.tilesTitle ?? cat.label} />
        <ul className="grid grid-cols-3 gap-3">
          {cat.tiles.map((t, i) => (
            <CloudTile key={t.href} t={t} delay={i * 55} current={pathname === t.href} />
          ))}
        </ul>
        <Link
          href="/contact"
          className="group mt-4 flex items-center justify-between rounded-2xl border border-[#d6e2dc] bg-white/60 px-4 py-3 text-[13px] transition-all duration-300 hover:border-[#1c6b51] hover:bg-white"
        >
          <span className="flex items-center gap-2.5 text-[#4d6157]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#1c6b51] opacity-60 motion-safe:animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#1c6b51]" />
            </span>
            Not sure which cloud fits?
          </span>
          <span className="font-semibold text-[#1c6b51]">
            Talk to our Salesforce team{" "}
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </Link>
      </>
    );
  }

  // ---- SAP: the two programmes in a band, then five titled groups and a call to action in a 3 x 2 grid ----
  if (cat.featured) {
    const groups = cat.groups ?? [];
    return (
      <>
        <HeaderRow title={cat.featuredTitle ?? "Featured"} link={!cat.cta} />
        <ul className="mb-3 grid grid-cols-2 gap-3">
          {cat.featured.map((f, i) => (
            <FeaturedCard key={f.href} f={f} delay={i * 80} current={pathname === f.href} />
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-x-8 gap-y-2.5">
          {groups.map((g, gi) => (
            <section key={g.title}>
              <Heading>{g.title}</Heading>
              <ul>
                {g.items.map((it, i) => {
                  const l = typeof it === "string" ? { label: it } : it;
                  return (
                    <Item key={l.label} dense delay={140 + gi * 50 + i * 28} href={l.href} accent={l.accent}>
                      {l.label}
                    </Item>
                  );
                })}
              </ul>
              {/* with a call to action in the grid, "All services" lives at the foot of the
                  first column of the second row, where the shorter column leaves room */}
              {cat.cta && gi === 3 && <AllServicesLink className="mt-3.5" />}
            </section>
          ))}
          {cat.cta && <CtaCard cta={cat.cta} delay={140 + groups.length * 50} />}
        </div>
      </>
    );
  }

  // ---- Categories with a page: a card that links to it, then its points ----
  if (cat.href) {
    return (
      <>
        <HeaderRow title={cat.label} />
        <Link
          href={cat.href}
          aria-current={pathname === cat.href ? "page" : undefined}
          className={`group relative block overflow-hidden rounded-2xl border border-[#cfe0d7] bg-gradient-to-br from-[#e6f2ec] via-[#f1f7f4] to-white px-6 py-5 transition-all duration-500 ${EASE} hover:-translate-y-0.5 hover:border-[#1c6b51] hover:shadow-[0_22px_40px_-26px_rgba(28,107,81,0.8)]`}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:left-[110%] group-hover:opacity-100"
          />
          <span className={`relative flex items-center justify-between gap-4 font-display text-lg font-extrabold uppercase tracking-wide ${INK}`}>
            {cat.label}
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#1c6b51] text-sm text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-110">
              &rarr;
            </span>
          </span>
          <span className={`relative mt-1.5 block max-w-xl text-sm leading-relaxed ${MUTED}`}>{cat.blurb}</span>
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
    <>
      <HeaderRow title={cat.label} />
      <div className="relative cursor-default overflow-hidden rounded-2xl border border-[#d5dfda] bg-white/80 px-6 py-6">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#1c6b51]/60" />
        <p className={`font-display text-2xl font-extrabold uppercase tracking-wide ${INK}`}>{cat.label}</p>
        <p className="mt-1 text-sm font-semibold text-[#1c6b51]">{cat.descriptor}</p>

        {cat.logos && (
          <ul className="mt-5 flex flex-wrap items-center gap-3">
            {cat.logos.map((l, i) => (
              <li
                key={l.alt}
                className="sap-rise grid h-14 min-w-24 place-items-center rounded-xl border border-[#e0e8e4] bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1c6b51]/50 hover:shadow-[0_14px_28px_-18px_rgba(28,107,81,0.6)]"
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
    </>
  );
}

/** A square mark for the rail: the logo when there is one, a monogram when there is not. */
function RailMark({ cat, on }: { cat: MenuCategory; on: boolean }) {
  return (
    <span
      className={`grid h-[2rem] w-[2rem] shrink-0 place-items-center overflow-hidden rounded-[0.65rem] border bg-white transition-all duration-500 ${EASE} ${
        on ? "border-[#cfe0d7] shadow-[0_8px_18px_-10px_rgba(28,107,81,0.7)]" : "border-[#dde6e1]"
      }`}
    >
      {cat.mark ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cat.mark} alt="" className="h-[1.35rem] w-[1.35rem] object-contain" />
      ) : (
        <span className="font-display text-[13px] font-extrabold text-[#1c6b51]">{cat.label.charAt(0)}</span>
      )}
    </span>
  );
}

/**
 * The large "Our Services" panel. A rail of categories on the left, with a lens that
 * glides to whichever one you point at; the area on the right fills with what sits
 * under it. SAP Solutions is selected when the panel opens. Categories with a page
 * link to it; the rest are display-only. Opening, closing and the hover grace
 * period are owned by the Navbar; this component is the contents.
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
  const [lens, setLens] = useState({ top: 0, height: 0 });
  const rows = useRef<(HTMLLIElement | null)[]>([]);
  const panel = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);
  const point = useRef({ x: 0, y: 0 });
  const intent = useRef<number | undefined>(undefined);
  const [fit, setFit] = useState(1);

  // Pointing at a rail row switches to it only after the pointer has rested there for a
  // moment. Without this, sweeping diagonally from the rail toward the content flips
  // through every category on the way, which is what made the menu feel jumpy.
  const aim = (i: number) => {
    window.clearTimeout(intent.current);
    if (i === active) return;
    intent.current = window.setTimeout(() => setActive(i), 75);
  };
  const unaim = () => window.clearTimeout(intent.current);
  useEffect(() => () => {
    window.clearTimeout(intent.current);
    cancelAnimationFrame(frame.current);
  }, []);

  // Reopen on SAP, but only once the closing fade has finished so the content
  // doesn't visibly jump while the panel is leaving.
  useEffect(() => {
    if (open) return;
    const id = window.setTimeout(() => setActive(0), 320);
    return () => window.clearTimeout(id);
  }, [open]);

  const measure = useCallback(() => {
    const el = rows.current[active];
    if (el) setLens({ top: el.offsetTop, height: el.offsetHeight });
  }, [active]);

  // If the window is too short to show the whole panel, the panel shrinks a little to fit
  // rather than scrolling. Its natural height does not depend on the transform, so this
  // can be measured at any time.
  const measureFit = useCallback(() => {
    const el = panel.current;
    if (!el) return;
    const top = (el.closest("header")?.getBoundingClientRect().bottom ?? 104) + 8;
    const room = window.innerHeight - top - 16;
    setFit(Math.min(1, Math.max(0.72, room / el.offsetHeight)));
  }, []);

  useLayoutEffect(measure, [measure, open]);
  useLayoutEffect(measureFit, [measureFit, active, open]);
  useEffect(() => {
    const onResize = () => {
      measure();
      measureFit();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure, measureFit]);

  // The glow that follows the pointer is one small element moved with a transform,
  // at most once per frame, so it never repaints the panel behind it.
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    point.current = { x: e.clientX, y: e.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const el = panel.current;
      const dot = spot.current;
      if (!el || !dot) return;
      const r = el.getBoundingClientRect();
      dot.style.transform = `translate3d(${(point.current.x - r.left) / fit - 230}px, ${(point.current.y - r.top) / fit - 230}px, 0)`;
    });
  };

  const cat = servicesMenu[active];

  return (
    <>
      {/* The rest of the page recedes while the menu is open. It sits behind the header's own
          content (negative z-index inside the header's stacking context) but over the page. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 -z-10 hidden bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.3),rgba(0,0,0,0.6))] transition-opacity duration-300 [will-change:opacity] lg:block ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        className={`absolute inset-x-0 top-full hidden origin-top transition-[opacity,transform,visibility] duration-[360ms] [will-change:opacity,transform] ${EASE} lg:block ${
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none -translate-y-3 scale-[0.985] opacity-0"
        }`}
      >
        {/* Invisible bridge over the gap beneath the nav, so the pointer can travel from
            "Our Services" down to the panel without the menu closing on the way. */}
        <span aria-hidden="true" className="absolute inset-x-0 -top-7 h-7" />
        <div className="mx-auto flex max-w-7xl justify-center px-6 pt-2 lg:px-8">
          <div
            ref={panel}
            onPointerMove={onMove}
            style={{ transform: fit < 1 ? `scale(${fit})` : undefined, transformOrigin: "top center" }}
            className="relative grid w-full max-w-[72rem] grid-cols-[17.25rem_1fr] overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,#fbfdfc,#f1f6f3)] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_50px_90px_-30px_rgba(0,0,0,0.65)]"
          >
            {/* a hairline of light along the top edge, and a glow that follows the pointer */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#1c6b51]/60 to-transparent" />
            <span
              ref={spot}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-[460px] w-[460px] rounded-full [will-change:transform]"
              style={{ background: "radial-gradient(closest-side, rgba(28,107,81,0.11), transparent)", transform: "translate3d(300px,-200px,0)" }}
            />

            {/* ---- category rail ---- */}
            <ul className="relative z-10 space-y-0.5 border-r border-[#dde6e1] bg-[#e8eeea]/70 p-2.5" role="tablist" aria-label="Services">
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute left-2.5 right-2.5 top-0 overflow-hidden rounded-2xl bg-white shadow-[0_10px_26px_-12px_rgba(7,25,18,0.45),0_0_0_1px_rgba(7,25,18,0.04)] transition-[transform,height,opacity] duration-[550ms] ${EASE}`}
                style={{ transform: `translateY(${lens.top}px)`, height: lens.height, opacity: lens.height ? 1 : 0 }}
              >
                <span className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-[#1c6b51]" />
              </span>

              {servicesMenu.map((c, i) => {
                const on = i === active;
                const inner = (
                  <>
                    <RailMark cat={c} on={on} />
                    <span className="min-w-0 flex-1">
                      <span className={`block font-display text-[13px] font-bold uppercase leading-tight tracking-[0.06em] transition-colors duration-300 ${on ? "text-[#071912]" : "text-[#3e5248]"}`}>{c.label}</span>
                      {c.descriptor && (
                        <span className={`mt-0.5 block text-[10.5px] font-medium normal-case tracking-normal ${on ? "text-[#4d6157]" : "text-[#6f8278]"}`}>{c.descriptor}</span>
                      )}
                    </span>
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 shrink-0 text-[#1c6b51] transition-all duration-300 ${on ? "translate-x-0 opacity-100" : "-translate-x-1.5 opacity-0"}`}
                    >
                      <path d="M4 2.5L7.5 6L4 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                );
                const cls = "relative z-10 flex min-h-[2.85rem] w-full items-center gap-2.5 rounded-2xl px-2.5 text-left";
                return (
                  <li
                    key={c.id}
                    ref={(el) => {
                      rows.current[i] = el;
                    }}
                  >
                    {c.href ? (
                      <Link
                        href={c.href}
                        role="tab"
                        aria-selected={on}
                        onPointerEnter={() => aim(i)}
                        onPointerLeave={unaim}
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
                        onPointerEnter={() => aim(i)}
                        onPointerLeave={unaim}
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
            <div className="relative z-10 min-h-[22rem] overflow-hidden p-3.5 [contain:layout_paint]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1c6b51]/[0.07] blur-3xl"
              />
              <div key={cat.id} className="sap-rise relative" style={{ animationDuration: "0.45s" }}>
                <Panel cat={cat} pathname={pathname} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
