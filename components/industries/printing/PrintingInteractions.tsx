"use client";

import { useEffect } from "react";

/**
 * The supplied page's script, kept as it was: the market tabs and the clickable hotspots on the plant
 * illustration. Plus the in-page menu's scroll-spy, copied from the SAP Business Data Cloud page. It only works
 * inside the page's own wrapper, so it cannot touch the rest of the site.
 */
export function PrintingInteractions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".pp-page");
    if (!root) return;
    const off: (() => void)[] = [];
    const on = (el: Element, ev: string, fn: (e: Event) => void) => {
      el.addEventListener(ev, fn);
      off.push(() => el.removeEventListener(ev, fn));
    };

    const tabs = [].slice.call(root.querySelectorAll<HTMLElement>(".pp-tabs [role=tab]")) as HTMLElement[];
    function sel(t: HTMLElement, focus?: boolean) {
      tabs.forEach((b) => {
        const isOn = b === t;
        b.setAttribute("aria-selected", String(isOn));
        b.tabIndex = isOn ? 0 : -1;
        const panel = document.getElementById(b.getAttribute("aria-controls") ?? "");
        if (panel) panel.hidden = !isOn;
      });
      if (focus) t.focus();
    }
    tabs.forEach((b, i) => {
      on(b, "click", () => sel(b));
      on(b, "keydown", (e) => {
        const k = (e as KeyboardEvent).key;
        const d = k === "ArrowRight" ? 1 : k === "ArrowLeft" ? -1 : 0;
        if (d) {
          e.preventDefault();
          sel(tabs[(i + d + tabs.length) % tabs.length], true);
        }
      });
      b.tabIndex = i ? -1 : 0;
    });

    const hots = [].slice.call(root.querySelectorAll<HTMLElement>(".pp-hot")) as HTMLElement[];
    const pts = [].slice.call(root.querySelectorAll<HTMLElement>(".pp-pts li")) as HTMLElement[];
    function act(i: string | number, scroll?: boolean) {
      hots.forEach((h) => h.classList.toggle("on", h.dataset.i == String(i)));
      pts.forEach((p) => p.classList.toggle("on", p.dataset.i == String(i)));
      if (scroll && window.innerWidth < 1080) pts[Number(i)]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    hots.forEach((h) => {
      on(h, "click", () => act(h.dataset.i ?? 0, true));
      on(h, "keydown", (e) => {
        const k = (e as KeyboardEvent).key;
        if (k === "Enter" || k === " ") {
          e.preventDefault();
          act(h.dataset.i ?? 0, true);
        }
      });
    });
    pts.forEach((p) => on(p, "click", () => act(p.dataset.i ?? 0)));
    act(0);

    // The in-page menu, as on the SAP Business Data Cloud page: it clears the site's header, underlines the section you are
    // in, keeps that tab in view, and draws a thin progress line along its bottom edge.
    const ac = new AbortController();
    const { signal } = ac;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hdr = document.querySelector<HTMLElement>("body > header, header");
    const setHdr = () => {
      if (hdr) root.style.setProperty("--hdr", `${hdr.offsetHeight}px`);
    };
    setHdr();
    window.addEventListener("resize", setHdr, { signal });

    const nav = root.querySelector<HTMLElement>(".pp-sub");
    const wrap = nav?.querySelector<HTMLElement>(".pp-subin");
    const prog = nav?.querySelector<HTMLElement>(".pp-prog");
    if (nav && wrap && prog) {
      const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
      const secs = links.map((a) => root.querySelector<HTMLElement>(a.getAttribute("href") ?? "#")).filter((s): s is HTMLElement => !!s);
      let current = -1;
      const spy = () => {
        const y = (hdr ? hdr.offsetHeight : 72) + nav.offsetHeight + 40;
        let idx = -1;
        secs.forEach((s, i) => {
          if (s.getBoundingClientRect().top <= y) idx = i;
        });
        const last = secs[secs.length - 1].getBoundingClientRect();
        if (last.bottom <= window.innerHeight + 4) idx = secs.length - 1;
        if (idx !== current) {
          current = idx;
          links.forEach((a, i) => {
            a.classList.toggle("on", i === idx);
            if (i === idx) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
          if (idx >= 0) {
            const a = links[idx];
            wrap.scrollTo({ left: a.offsetLeft - (wrap.clientWidth - a.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
          }
        }
        const top = secs[0].offsetTop;
        const end = secs[secs.length - 1].offsetTop + secs[secs.length - 1].offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, (window.scrollY - top + 200) / Math.max(1, end - top)));
        prog.style.transform = `scaleX(${p})`;
      };
      let tick = false;
      window.addEventListener(
        "scroll",
        () => {
          if (!tick) {
            tick = true;
            requestAnimationFrame(() => {
              spy();
              tick = false;
            });
          }
        },
        { passive: true, signal },
      );
      spy();
    }

    return () => {
      off.forEach((f) => f());
      ac.abort();
    };
  }, []);
  return null;
}
