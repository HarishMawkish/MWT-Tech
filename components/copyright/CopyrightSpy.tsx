"use client";
import { useEffect } from "react";

/** Keeps the "On this page" list in step with the section being read, and tells the CSS how tall the site header is. */
export function CopyrightSpy() {
  useEffect(() => {
    const hdr = document.querySelector("header") as HTMLElement | null;
    const setHdr = () => { if (hdr) document.documentElement.style.setProperty("--hdr", hdr.offsetHeight + "px"); };
    setHdr();
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".cr .cp-toc a"));
    const secs = links.map((a) => document.querySelector(a.getAttribute("href") ?? ""));
    const spy = () => {
      const y = (hdr ? hdr.offsetHeight : 72) + 60;
      let idx = 0;
      secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= y) idx = i; });
      links.forEach((a, i) => a.classList.toggle("on", i === idx));
    };
    const onResize = () => { setHdr(); spy(); };
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", onResize);
    spy();
    return () => { window.removeEventListener("scroll", spy); window.removeEventListener("resize", onResize); };
  }, []);
  return null;
}
