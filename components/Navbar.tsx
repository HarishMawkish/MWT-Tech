"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";
import { navLinks, siteConfig } from "@/lib/site-data";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const megaTimer = useRef<number | undefined>(undefined);

  // The services panel opens as soon as the pointer reaches the link, and closes
  // after a short grace period, so crossing the gap between the link and the
  // panel doesn't shut it.
  const openMega = () => {
    window.clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = (delay = 180) => {
    window.clearTimeout(megaTimer.current);
    megaTimer.current = window.setTimeout(() => setMegaOpen(false), delay);
  };
  useEffect(() => () => window.clearTimeout(megaTimer.current), []);

  // Close the menus whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu and any focused dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setMegaOpen(false);
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
            <nav aria-label="Primary" className="flex items-center gap-1 px-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div
                    key={link.href}
                    className="group relative"
                    onPointerEnter={link.children ? openMega : undefined}
                    onPointerLeave={link.children ? () => closeMega() : undefined}
                    onFocus={link.children ? openMega : undefined}
                    onBlur={
                      link.children
                        ? (e) => {
                            // Keep it open while focus moves into the panel.
                            if (!headerRef.current?.contains(e.relatedTarget as Node | null)) closeMega(0);
                          }
                        : undefined
                    }
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      aria-haspopup={link.children ? "true" : undefined}
                      aria-expanded={link.children ? megaOpen : undefined}
                      className={`flex min-h-11 items-center gap-1 rounded-lg px-3 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.97] ${
                        active ? "text-mw-mint" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {link.children && (
                        <svg
                          className={`h-3 w-3 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </Link>

                  </div>
                );
              })}
            </nav>

            <Link
              href={siteConfig.primaryCta.href}
              className="rounded-xl bg-mw-mint px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-mw-void active:scale-[0.97]"
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

      <ServicesMenu open={megaOpen} onEnter={openMega} onLeave={() => closeMega()} pathname={pathname} />

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} isActive={isActive} />
    </header>
  );
}
