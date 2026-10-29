"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { servicesMenu, type MenuCategory, type MenuLink } from "@/lib/services-menu";

// The phone menu: a full-height sheet under the header, in the way LeverX's is. Each top-level
// entry is a row that unfolds; "Our Services" unfolds into the categories, and a category
// unfolds into its headings and every small item beneath them. The sheet scrolls, the page
// behind it does not.

const EASE = "ease-[cubic-bezier(0.23,1,0.32,1)]";

function Plus({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-white/80">
      <svg viewBox="0 0 12 12" fill="none" className={`h-3 w-3 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}>
        <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Folds its children in and out without animating height directly. Folded content cannot be tabbed to. */
function Fold({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${EASE} ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
      <div className="min-h-0 overflow-hidden" inert={!open}>
        {children}
      </div>
    </div>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <p className="px-1 pb-1 pt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-mw-mint">{children}</p>;
}

/** One small line under a heading: a link when there is a page, plain dimmed text when there is not yet. */
function Item({ item }: { item: string | MenuLink }) {
  const l: MenuLink = typeof item === "string" ? { label: item } : item;
  if (!l.href) {
    return <span className="flex min-h-10 items-center px-1 text-[14.5px] text-white/40">{l.label}</span>;
  }
  return (
    <Link href={l.href} className="flex min-h-11 items-center gap-2.5 rounded-lg px-1 text-[14.5px] text-white/85 active:bg-white/10">
      {l.accent && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: l.accent }} />}
      {l.label}
    </Link>
  );
}

const hasBody = (c: MenuCategory) => Boolean(c.featured?.length || c.groups?.length || c.tiles?.length);

/** Everything a category holds, as one unfolded list. */
function CategoryBody({ c }: { c: MenuCategory }) {
  return (
    <div className="pb-4 pl-1">
      {c.href && (
        <Link href={c.href} className="flex min-h-11 items-center justify-between rounded-lg px-1 text-[14.5px] font-semibold text-white active:bg-white/10">
          {`All ${c.label}`}
          <span aria-hidden="true" className="text-mw-mint">→</span>
        </Link>
      )}

      {c.featured && c.featured.length > 0 && (
        <>
          <Heading>{c.featuredTitle ?? "Programmes"}</Heading>
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {c.featured.map((f) => (
              <Link key={f.href} href={f.href} className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 active:bg-white/10">
                {f.mark && <img src={f.mark} alt="" className="h-11 w-11 rounded-[9px] bg-[#ebf8ff] object-cover" />}
                <span className="text-[14px] font-bold leading-tight text-white">{f.label}</span>
                <span className="-mt-1 text-[12px] leading-snug text-white/55">{f.sub}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {c.groups?.map((g) => (
        <div key={g.title}>
          <Heading>{g.title}</Heading>
          {g.items.map((it) => (
            <Item key={typeof it === "string" ? it : it.label} item={it} />
          ))}
        </div>
      ))}

      {c.tiles && c.tiles.length > 0 && (
        <>
          <Heading>{c.tilesTitle ?? "Products"}</Heading>
          {c.tiles.map((t) => (
            <Item key={t.href} item={{ label: t.label, href: t.href, accent: t.accent }} />
          ))}
        </>
      )}

      {c.cta && (
        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-[14px] font-bold text-white">{c.cta.title}</p>
          <p className="mt-1 text-[12.5px] leading-snug text-white/60">{c.cta.body}</p>
          <Link href={c.cta.href} className="mt-3 inline-flex min-h-10 items-center rounded-lg bg-mw-mint px-4 text-[12px] font-semibold uppercase tracking-wider text-white active:scale-[0.97]">
            {c.cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}

function CategoryRow({ c, open, onToggle }: { c: MenuCategory; open: boolean; onToggle: () => void }) {
  const row = "flex min-h-12 w-full items-center gap-3 border-b border-white/[0.07] px-1 text-left";
  const mark = c.mark ? <img src={c.mark} alt="" className="h-5 w-5 shrink-0 object-contain" /> : <span aria-hidden="true" className="h-5 w-5 shrink-0" />;
  const label = (dim: boolean) => (
    <span className={`flex min-w-0 flex-1 flex-col ${dim ? "text-white/45" : "text-white"}`}>
      <span className="text-[15px] font-semibold leading-tight">{c.label}</span>
      {c.descriptor && <span className="text-[12px] font-normal text-white/40">{c.descriptor}</span>}
    </span>
  );

  if (hasBody(c)) {
    return (
      <div>
        <button type="button" onClick={onToggle} aria-expanded={open} className={`${row} active:bg-white/5`}>
          {mark}
          {label(false)}
          <Plus open={open} />
        </button>
        <Fold open={open}>
          <CategoryBody c={c} />
        </Fold>
      </div>
    );
  }
  // A category with a page and nothing to unfold goes straight to it; one with neither is listed, not linked.
  return c.href ? (
    <Link href={c.href} className={`${row} active:bg-white/5`}>
      {mark}
      {label(false)}
      <span aria-hidden="true" className="pr-1 text-mw-mint">→</span>
    </Link>
  ) : (
    <div className={row}>
      {mark}
      {label(true)}
    </div>
  );
}

function ServicesRow({ label, href, active, pathname }: { label: string; href: string; active: boolean; pathname: string }) {
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState<string | null>(null);
  useEffect(() => {
    setOpen(false);
    setCat(null);
  }, [pathname]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex min-h-14 w-full items-center justify-between border-b border-white/10 px-1 text-left text-[13px] font-semibold uppercase tracking-wider active:bg-white/5 ${active ? "text-mw-mint" : "text-white"}`}
      >
        {label}
        <Plus open={open} />
      </button>
      <Fold open={open}>
        <div className="pb-2 pl-3">
          <Link href={href} className="flex min-h-12 items-center justify-between border-b border-white/[0.07] px-1 text-[15px] font-semibold text-white/85 active:bg-white/5">
            All Services
            <span aria-hidden="true" className="text-mw-mint">→</span>
          </Link>
          {servicesMenu.map((c) => (
            <CategoryRow key={c.id} c={c} open={cat === c.id} onToggle={() => setCat((v) => (v === c.id ? null : c.id))} />
          ))}
        </div>
      </Fold>
    </div>
  );
}

export function MobileMenu({
  open,
  onClose,
  pathname,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  isActive: (href: string) => boolean;
}) {
  const sheet = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(84);

  // The sheet starts under the header bar, wherever that ends.
  useEffect(() => {
    if (!open) return;
    const measure = () => {
      const bar = sheet.current?.closest("header")?.firstElementChild;
      if (bar) setTop(Math.round(bar.getBoundingClientRect().height));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  // While it is open the page behind does not scroll.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      id="mobile-menu"
      ref={sheet}
      inert={!open}
      style={{ paddingTop: top }}
      onClick={(e) => {
        // Following a link to the page you are already on does not change the route, so close here too.
        if ((e.target as HTMLElement).closest("a")) onClose();
      }}
      className={`fixed inset-0 -z-10 overflow-y-auto overscroll-contain bg-[#07120d] transition-[opacity,visibility,transform] duration-300 motion-reduce:transition-none ${EASE} lg:hidden ${
        open ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <nav aria-label="Mobile" className="mx-auto max-w-xl px-6 pb-12 pt-2">
        {navLinks.map((link) =>
          "children" in link && link.children ? (
            <ServicesRow key={link.href} label={link.label} href={link.href} active={isActive(link.href)} pathname={pathname} />
          ) : (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex min-h-14 items-center border-b border-white/10 px-1 text-[13px] font-semibold uppercase tracking-wider active:bg-white/5 ${
                isActive(link.href) ? "text-mw-mint" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ),
        )}

        <Link
          href={siteConfig.primaryCta.href}
          className="mt-6 flex min-h-12 items-center justify-center rounded-xl bg-mw-mint px-5 text-center text-xs font-semibold uppercase tracking-wider text-white active:scale-[0.98]"
        >
          {siteConfig.primaryCta.label}
        </Link>
      </nav>
    </div>
  );
}
