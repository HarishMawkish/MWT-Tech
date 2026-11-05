"use client";

import { useEffect } from "react";

/**
 * The supplied page's script, kept as it was: the market tabs and the clickable hotspots on the plant
 * illustration. It only works inside the page's own wrapper, so it cannot touch the rest of the site.
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

    return () => off.forEach((f) => f());
  }, []);
  return null;
}
