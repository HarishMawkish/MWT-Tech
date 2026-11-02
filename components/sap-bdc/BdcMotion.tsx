"use client";

import { useEffect } from "react";

type Step = [who: string, title: string, text: string, viz: string];

// The data product pipeline: who does the step, its heading, the explanation, and the sample shown beside it.
const STEPS: Step[] = [
  ["In SAP Cloud ERP", "It starts with a CDS view", "SAP’s applications describe their data in CDS views: virtual data models that already know that a journal entry belongs to a company code and a ledger. These views are the source for SAP’s data products, so the business meaning is there from the first step.",
    "<em>// SAP Cloud ERP (simplified)</em>\n<i>define view</i> JournalEntryItem\n  key CompanyCode\n  key FiscalYear\n  key AccountingDocument\n      GLAccount\n      <u>AmountInCompanyCodeCurrency</u>\n      PostingDate"],
  ["Run by SAP", "The source pushes the data", "The source system sends its data to Business Data Cloud’s foundation services: a full load first, then changes as they happen. You don’t build or schedule extraction jobs.",
    "<em>// ingestion (illustrative)</em>\nsource    : SAP Cloud ERP\nmode      : <u>initial load</u> → <u>delta</u>\ntarget    : data lake · ingestion zone\njobs to maintain : <i>0</i>"],
  ["Run by SAP", "Refined into clean tables", "Inside the lake, SAP’s pipelines clean and standardise the raw records with Spark: consistent types, keys and history, stored as open Delta tables.",
    "<em>// refined zone (illustrative)</em>\nformat    : <i>Delta</i> (Parquet files)\nengine    : Spark\nkeys      : CompanyCode, FiscalYear,\n            AccountingDocument, LineItem\nhistory   : <u>kept</u>"],
  ["Run by SAP", "Enriched with business logic", "Related data is joined in and business rules are applied, so the result reads like the business, not like a database. This is the layer the data product exposes.",
    "<em>// enriched (illustrative)</em>\n+ Company code name, currency\n+ G/L account text, account group\n+ Fiscal period from posting date\n<i>= Journal Entry data product</i>"],
  ["Run by SAP", "Described so tools understand it", "Each data product is published with machine-readable metadata. Discovery uses SAP’s Open Resource Discovery standard, and the schema uses CSN, which carries labels and semantics, such as how a measure may be aggregated.",
    "<em>// metadata (simplified)</em>\n\"StockQuantity\": {\n  \"@label\": \"Closing stock\",\n  \"@Semantics.quantity\": <i>true</i>,\n  \"@Aggregation.default\": <u>\"LAST\"</u>\n}\n<em>// summed across months? no: last value.</em>"],
  ["For every consumer", "Shared, not copied", "Data products are shared with Delta Sharing. SAP Datasphere, SAP Databricks and partner platforms read the same files, so there is one version of the truth and no extra copies to keep in sync.",
    "<em>// consumers of one data product</em>\nSAP Datasphere   <i>✓</i> install, federate or replicate\nSAP Databricks   <i>✓</i> zero-copy share\nSnowflake, BigQuery <i>✓</i> via BDC Connect\nJoule and agents <i>✓</i> grounded answers"],
];

// Federate or replicate: the label on the arrow, whether the local copy shows, and the four facts beside it.
const MODES: Record<string, { l: string; c: number; d: [string, string][] }> = {
  fed: { l: "query", c: 0, d: [["How", "Datasphere reads the data product where it lives. Nothing is copied."], ["Fresh", "Always as current as the data product itself."], ["Best for", "Exploring, lower volumes, and data you query occasionally."], ["Watch", "Heavy, frequent queries can be slower and use more compute."]] },
  rep: { l: "copy", c: 1, d: [["How", "Datasphere keeps a local copy and refreshes it on a schedule or with each change."], ["Fresh", "As current as the last refresh."], ["Best for", "Large models, heavy dashboards and data used every day."], ["Watch", "Uses more storage, which counts against your capacity."]] },
};

/**
 * The behaviour the supplied page carried in its own script: scroll reveals, the in-page menu with its progress line,
 * the data product stepper, the federate/replicate toggle and the "is it for you?" helper. It works on the page's
 * existing markup, so the words and layout are exactly the supplied ones.
 */
export function BdcMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".bd");
    const main = root?.querySelector<HTMLElement>("main");
    if (!root || !main) return;
    const $ = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel);
    const $$ = <T extends Element = HTMLElement>(sel: string) => Array.from(root.querySelectorAll<T>(sel));

    const ac = new AbortController();
    const { signal } = ac;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: ReturnType<typeof setInterval> | null = null;
    let io: IntersectionObserver | null = null;

    main.classList.add("b-js");

    // The site's own header sits above the in-page menu; measure it so the menu and anchors clear it.
    const hdr = document.querySelector<HTMLElement>("body > header, header");
    const setHdr = () => { if (hdr) root.style.setProperty("--hdr", `${hdr.offsetHeight}px`); };
    setHdr();
    window.addEventListener("resize", setHdr, { signal });

    // SVG motion off for reduced-motion users
    if (reduce) $$(".b-anim").forEach((g) => g.remove());

    // reveal on scroll
    const rv = $$(".b-rv");
    if ("IntersectionObserver" in window && !reduce) {
      io = new IntersectionObserver((es) => {
        es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io?.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px" });
      rv.forEach((el) => io?.observe(el));
    } else {
      rv.forEach((el) => el.classList.add("on"));
    }

    // in-page menu: scrollspy + progress
    const nav = $(".b-sub");
    const wrap = nav?.querySelector<HTMLElement>(".b-subin");
    const prog = nav?.querySelector<HTMLElement>(".b-prog");
    if (nav && wrap && prog) {
      const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
      const secs = links.map((a) => $(a.getAttribute("href") ?? "#")).filter((s): s is HTMLElement => !!s);
      let current = -1;
      const spy = () => {
        const y = (hdr ? hdr.offsetHeight : 72) + nav.offsetHeight + 40;
        let idx = -1;
        secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= y) idx = i; });
        const last = secs[secs.length - 1].getBoundingClientRect();
        if (last.bottom <= window.innerHeight + 4) idx = secs.length - 1;
        if (idx !== current) {
          current = idx;
          links.forEach((a, i) => {
            a.classList.toggle("on", i === idx);
            if (i === idx) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
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
      window.addEventListener("scroll", () => {
        if (!tick) { tick = true; requestAnimationFrame(() => { spy(); tick = false; }); }
      }, { passive: true, signal });
      spy();
    }

    // data product pipeline
    const steps = $$<HTMLButtonElement>(".b-step");
    const bar = $(".b-steps .b-bar");
    const det = $("#b-detail");
    const play = $<HTMLButtonElement>("#b-play");
    if (steps.length && bar && det && play) {
      let at = 0;
      const stop = () => {
        if (timer) { clearInterval(timer); timer = null; play.textContent = "▶ Play the steps"; }
      };
      const show = (i: number, user?: boolean) => {
        at = i;
        steps.forEach((b, j) => {
          b.classList.toggle("on", j === i);
          b.classList.toggle("done", j < i);
          b.setAttribute("aria-selected", j === i ? "true" : "false");
        });
        bar.style.width = `${(92 * i) / (steps.length - 1)}%`;
        const s = STEPS[i];
        det.innerHTML = `<div><span class="b-who">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div><div class="b-viz">${s[3]}</div>`;
        det.classList.remove("b-fade");
        void det.offsetWidth;
        if (!reduce) det.classList.add("b-fade");
        if (user) stop();
      };
      play.addEventListener("click", () => {
        if (timer) { stop(); return; }
        play.textContent = "❚❚ Pause";
        if (at === steps.length - 1) show(0);
        timer = setInterval(() => { if (at >= steps.length - 1) { stop(); return; } show(at + 1); }, 3200);
      }, { signal });
      steps.forEach((b, i) => {
        b.addEventListener("click", () => show(i, true), { signal });
        b.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const n = (i + (e.key === "ArrowRight" ? 1 : -1) + steps.length) % steps.length;
            show(n, true);
            steps[n].focus();
          }
        }, { signal });
      });
      show(0);
    }

    // federate / replicate
    const segs = $$<HTMLButtonElement>(".b-seg button");
    segs.forEach((b) => {
      b.addEventListener("click", () => {
        segs.forEach((x) => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
        const m = MODES[b.dataset.m ?? "fed"];
        const label = $("#b-frl");
        if (label) label.textContent = m.l;
        $("#b-copy")?.setAttribute("opacity", String(m.c));
        $("#b-copyt")?.setAttribute("opacity", String(m.c));
        const dl = $("#b-frd");
        if (dl) {
          dl.innerHTML = m.d.map((r) => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("");
          dl.classList.remove("b-fade");
          void dl.offsetWidth;
          if (!reduce) dl.classList.add("b-fade");
        }
      }, { signal });
    });

    // fit helper
    const form = $<HTMLFormElement>("#b-form");
    if (form) {
      const fit = () => {
        const v = (n: string) => form.querySelector<HTMLInputElement>(`input[name="${n}"]:checked`)?.value;
        const src = v("src"), plan = v("plan"), ds = v("ds"), bw = v("bw");
        const on: Record<string, boolean> = { emb: true, sac: plan === "yes" || src === "many", bdc: src === "many" || ds !== "no" || bw === "yes", dbx: ds === "new", con: ds === "own", bw: bw === "yes" };
        $$(".b-res li").forEach((li) => li.classList.toggle("on", !!on[li.dataset.k ?? ""]));
        let h: string, p: string;
        if (!on.bdc && !on.sac) { h = "Start with what SAP Cloud ERP includes."; p = "Real-time embedded analytics cover day-to-day reporting for a single ERP. Revisit when you add systems, planning or AI."; }
        else if (!on.bdc) { h = "Add SAP Analytics Cloud for planning."; p = "Planning and management dashboards on top of SAP Cloud ERP. Business Data Cloud can come later, on the same tools."; }
        else if (ds === "own") { h = "Business Data Cloud, connected to your platform."; p = "Use SAP’s data products in Datasphere, and share them with the platform your data team already runs, without copying."; }
        else if (ds === "new") { h = "Business Data Cloud with SAP Databricks."; p = "Data products in one governed model, with a data science workspace built in for forecasting and custom AI."; }
        else if (bw === "yes" && src !== "many" && plan === "no") { h = "Modernise SAP BW step by step."; p = "Keep BW running alongside Business Data Cloud and move reporting to data products as SAP releases them."; }
        else { h = "Business Data Cloud with Datasphere."; p = "One model across your systems, built on SAP’s data products, with SAP Analytics Cloud on top."; }
        const rh = $("#b-rt-h"), rp = $("#b-rt-p");
        if (rh) rh.textContent = h;
        if (rp) rp.textContent = p;
      };
      form.addEventListener("change", fit, { signal });
      form.addEventListener("submit", (e) => e.preventDefault(), { signal });
      fit();
    }

    return () => {
      ac.abort();
      io?.disconnect();
      if (timer) clearInterval(timer);
      main.classList.remove("b-js");
    };
  }, []);

  return null;
}
