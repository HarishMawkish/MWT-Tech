"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";
import { IndustriesMenu } from "./IndustriesMenu";
import { navLinks, siteConfig } from "@/lib/site-data";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "industries" | null>(null);
  const megaOpen = menu === "services";
  const indOpen = menu === "industries";
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const megaTimer = useRef<number | undefined>(undefined);

  // The services panel opens as soon as the pointer reaches the link, and closes
  // after a short grace period, so crossing the gap between the link and the
  // panel doesn't shut it.
  const openMega = (id: "services" | "industries" = "services") => {
    window.clearTimeout(megaTimer.current);
    setMenu(id);
  };
  const closeMega = (delay = 180) => {
    window.clearTimeout(megaTimer.current);
    megaTimer.current = window.setTimeout(() => setMenu(null), delay);
  };
  useEffect(() => () => window.clearTimeout(megaTimer.current), []);

  // Close the menus whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // Escape closes the mobile menu and any focused dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setMenu(null);
      const active = document.activeElement as HTMLElement | null;
      if (active && headerRef.current?.contains(active)) active.blur();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[72px] lg:px-8">
        <Logo tone="light" />

        {/* One bar, edge to edge: content scrolls underneath it (see header::before in globals.css). */}
        <div className="hidden h-full items-center lg:flex">
          <nav aria-label="Primary" className="flex h-full items-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const id = link.children ? "services" : link.href === "/industries" ? "industries" : null;
              const hasMenu = id !== null;
              const shown = id === "services" ? megaOpen : id === "industries" ? indOpen : false;
              return (
                <div
                  key={link.href}
                  className="group relative h-full"
                  onPointerEnter={hasMenu ? () => openMega(id) : undefined}
                  onPointerLeave={hasMenu ? () => closeMega() : undefined}
                  onFocus={hasMenu ? () => openMega(id) : undefined}
                  onBlur={
                    hasMenu
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
                    aria-haspopup={hasMenu ? "true" : undefined}
                    aria-expanded={hasMenu ? shown : undefined}
                    className={`relative flex h-full items-center gap-1.5 px-3.5 text-[14px] font-medium tracking-[0.005em] transition-colors duration-150 after:absolute after:inset-x-3.5 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-mw-mint after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.23,1,0.32,1)] aria-[current=page]:after:scale-x-100 aria-expanded:after:scale-x-100 ${
                      active || shown ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {hasMenu && (
                      <svg
                        className={`h-3 w-3 opacity-70 transition-transform duration-200 ${shown ? "rotate-180" : ""}`}
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

          <span aria-hidden="true" className="mx-4 h-5 w-px bg-white/15" />

          <Link
            href={siteConfig.primaryCta.href}
            className="inline-flex h-10 items-center rounded-lg bg-mw-mint px-4 text-[13.5px] font-semibold text-white transition-[transform,filter] duration-150 hover:brightness-125 active:scale-[0.97]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition-[transform,background-color] duration-150 active:scale-95 lg:hidden"
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

      <ServicesMenu open={megaOpen} onEnter={() => openMega("services")} onLeave={() => closeMega()} pathname={pathname} />
      <IndustriesMenu open={indOpen} onEnter={() => openMega("industries")} onLeave={() => closeMega()} pathname={pathname} />

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} isActive={isActive} />
    </header>
  );
}
