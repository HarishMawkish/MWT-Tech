"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Tuck the bar away while reading down the page and bring it straight back
  // on any upward scroll or when the pointer heads for the top edge. It stays
  // put while the menu is open or something inside it has keyboard focus.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let last = window.scrollY;
    let frame = 0;

    const setHidden = (hidden: boolean) => {
      if (hidden) header.dataset.hidden = "true";
      else delete header.dataset.hidden;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const dy = y - last;
        if (Math.abs(dy) < 5) return;
        last = y;
        if (y < 120 || dy < 0 || openRef.current || header.contains(document.activeElement)) setHidden(false);
        else setHidden(true);
      });
    };
    const onPointer = (e: PointerEvent) => {
      if (e.clientY < 64 && e.pointerType !== "touch") setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(frame);
    };
  }, []);

  // One highlight pill glides between nav items instead of each item fading
  // on its own, so the bar reads as a single piece of hardware.
  const movePill = (target: Element | null) => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;
    if (!target) {
      pill.style.opacity = "0";
      return;
    }
    const n = nav.getBoundingClientRect();
    const r = target.getBoundingClientRect();
    const firstShow = pill.style.opacity !== "1";
    // Appear in place on first hover; only glide once it is already visible.
    if (firstShow) pill.style.transitionProperty = "opacity";
    pill.style.width = `${r.width}px`;
    pill.style.height = `${r.height}px`;
    pill.style.transform = `translate(${r.left - n.left}px, ${r.top - n.top}px)`;
    pill.style.opacity = "1";
    if (firstShow) requestAnimationFrame(() => (pill.style.transitionProperty = ""));
  };

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu and any focused dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      const active = document.activeElement as HTMLElement | null;
      if (active && headerRef.current?.contains(active)) active.blur();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo tone="light" />

        {/* Floating translucent pill: content scrolls underneath it. */}
        <div className="hidden items-center lg:flex">
          <div className="flex items-center rounded-2xl border border-white/15 bg-black/45 p-1.5 shadow-sm backdrop-blur-xl backdrop-saturate-150">
            <nav
              ref={navRef}
              aria-label="Primary"
              className="relative flex items-center gap-1 px-3"
              onPointerOver={(e) => {
                const link = (e.target as Element).closest("[data-nav-link]");
                if (link) movePill(link);
              }}
              onPointerLeave={() => movePill(null)}
              onFocus={(e) => {
                const link = (e.target as Element).closest("[data-nav-link]");
                if (link) movePill(link);
              }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) movePill(null);
              }}
            >
              <span
                ref={pillRef}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 rounded-lg bg-white/10 opacity-0 transition-[transform,width,height,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
              />
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      data-nav-link
                      aria-current={active ? "page" : undefined}
                      aria-haspopup={link.children ? "true" : undefined}
                      className={`relative flex min-h-11 items-center gap-1 rounded-lg px-3 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.97] ${
                        active ? "text-mw-glow" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {link.children && (
                        <svg
                          className="h-3 w-3 transition-transform duration-300 group-focus-within:rotate-180 group-hover:rotate-180"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </Link>

                    {link.children && (
                      <div className="invisible absolute left-0 top-full origin-top-left pt-3 opacity-0 transition duration-200 ease-out group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        <div className="w-56 rounded-xl border border-white/10 bg-[#0d221a] p-2 shadow-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className="block rounded-lg px-3 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <Link
              href={siteConfig.primaryCta.href}
              className="mw-sheen rounded-xl bg-mw-mint px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
            >
              {siteConfig.primaryCta.label}
            </Link>
          </div>
        </div>

        {/* Mobile trigger */}
        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-black/45 text-white shadow-sm backdrop-blur-xl transition active:scale-95 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Scrim: tap outside to dismiss, and it separates the menu from the
          page behind it. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile drawer: always mounted so it can animate in and out, and it
          grows from its trigger (top-right) instead of just appearing. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute inset-x-6 top-full origin-top-right rounded-2xl border border-white/10 bg-[#0a1812]/95 p-4 shadow-xl backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex max-h-[70svh] flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 text-xs font-semibold uppercase tracking-wider active:bg-white/10 ${
                  isActive(link.href) ? "text-mw-glow" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-3 border-l border-white/15 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex min-h-11 items-center rounded-lg px-3 text-sm text-white/65 active:bg-white/10"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href={siteConfig.primaryCta.href}
            className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-mw-mint px-5 text-center text-xs font-semibold uppercase tracking-wider text-white active:scale-[0.98]"
          >
            {siteConfig.primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
