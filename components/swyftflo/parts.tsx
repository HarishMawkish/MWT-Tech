import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ProductIcon } from "./icons";
import { productPath, products, SW_HUB, type ProductSlug } from "./data";

/** Stagger index for a revealed element. */
export const d = (n: number) => ({ "--d": n }) as CSSProperties;

/* ------------------------------------------------------------------ hero */

/** Module logos, from Swyftflo's brochures and swyftflo.ai. The drawn tile is only a fallback for a product without one. */
const LOGOS: Partial<Record<ProductSlug, string>> = {
  "source-to-pay": "/images/swyftflo/source-to-pay.png",
  "control-tower": "/images/swyftflo/control-tower.png",
  "invoice-hub": "/images/swyftflo/invoice-hub.png",
  "spend-intelligence": "/images/swyftflo/spend-intelligence.png",
  authentik: "/images/swyftflo/authentik.png",
  tms: "/images/swyftflo/tms.png",
};

export function ProductMark({ slug, size = "md" }: { slug: ProductSlug; size?: "sm" | "md" | "lg" }) {
  const src = LOGOS[slug];
  if (!src) return <ProductIcon slug={slug} size={size === "lg" ? "lg" : size === "sm" ? "sm" : undefined} className={`pmark ${size}`} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" width={256} height={256} className={`plogo ${size}`} loading="lazy" decoding="async" />;
}

/** A row of photographs taken from the product brochures, with a short line under each. */
export function PhotoStrip({
  items,
  light = false,
  label,
}: {
  items: { file: string; alt: string; cap: string }[];
  light?: boolean;
  label?: string;
}) {
  return (
    <section className={`photos${light ? " light" : ""}`} aria-label={label}>
      <div className="in">
        <ul className={`pstrip n${items.length}`}>
          {items.map((it, i) => (
            <li key={it.file} data-r style={d(Math.min(i, 4))}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/swyftflo/photos/${it.file}.jpg`} alt={it.alt} loading="lazy" decoding="async" />
                <figcaption>{it.cap}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProductChips({ current }: { current?: ProductSlug }) {
  return (
    <nav className="pchips" aria-label="Swyftflo products">
      <Link href={SW_HUB} className="suite" aria-current={current ? undefined : "page"}>
        Suite overview
      </Link>
      {products.map((p) => (
        <Link key={p.slug} href={productPath(p.slug)} aria-current={current === p.slug ? "page" : undefined}>
          <ProductMark slug={p.slug} size="sm" />
          {p.short}
        </Link>
      ))}
    </nav>
  );
}

export function Hero({
  current,
  crumb,
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  note,
  visual,
}: {
  current?: ProductSlug;
  crumb: string;
  eyebrow: ReactNode;
  title: ReactNode;
  lede: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: ReactNode;
  visual: ReactNode;
}) {
  return (
    <section className="hero">
      <div className="in">
        <div className="crumbs">
          <Link href="/services">Services</Link> / {current ? <Link href={SW_HUB}>Swyftflo</Link> : "Swyftflo"}
          {current ? ` / ${crumb}` : ""}
        </div>
        <ProductChips current={current} />
        <div className="hero-grid">
          <div>
            {current && (
              <div className="hero-mark" data-r style={d(0)}>
                <ProductMark slug={current} size="lg" />
              </div>
            )}
            <span className="eyebrow" data-r style={d(0)}>
              {eyebrow}
            </span>
            <h1 data-r style={d(1)}>
              {title}
            </h1>
            <p className="lede" data-r style={d(2)}>
              {lede}
            </p>
            <div className="ctas" data-r style={d(3)}>
              <CtaLink href={primary.href} className="btn pri">
                {primary.label} <span className="ar">→</span>
              </CtaLink>
              {secondary && (
                <CtaLink href={secondary.href} className="btn sec">
                  {secondary.label}
                </CtaLink>
              )}
            </div>
            {note && (
              <p className="name-note" data-r style={d(4)}>
                {note}
              </p>
            )}
          </div>
          <div data-r style={d(2)}>
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}

/** In-page anchors stay plain links; everything else goes through the router. */
function CtaLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return href.startsWith("#") ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ section heading */

export function Head({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <>
      <span className="eyebrow" data-r>
        {eyebrow}
      </span>
      <h2 data-r style={d(1)}>
        {title}
      </h2>
      {lede &&
        (Array.isArray(lede) ? (
          lede.map((l, i) => (
            <p className="lede" key={i} data-r style={d(2 + i)}>
              {l}
            </p>
          ))
        ) : (
          <p className="lede" data-r style={d(2)}>
            {lede}
          </p>
        ))}
    </>
  );
}

/* ------------------------------------------------------------------ blocks */

export type Feature = { title: string; body: string };

export function Includes({ items }: { items: Feature[] }) {
  return (
    <div className="includes" data-r style={d(1)}>
      {items.map((f) => (
        <div key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  );
}

/** Open columns under a hairline: no boxes, no icons. */
export function Caps({ items }: { items: { title: string; body?: string; points?: string[] }[] }) {
  return (
    <div className="caps open">
      {items.map((c, i) => (
        <div className="cap" key={c.title} data-r style={d(i % 3)}>
          <h3>{c.title}</h3>
          {c.body && <p>{c.body}</p>}
          {c.points && (
            <ul>
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/** What stays in the ERP, and what Swyftflo adds. */
export function AlongsideErp({ erp, sw }: { erp: string[]; sw: string[] }) {
  return (
    <div className="pair">
      <div data-r style={d(1)}>
        <p className="lab">Stays in your ERP</p>
        <ul>
          {erp.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div data-r style={d(2)}>
        <p className="lab g">Runs in Swyftflo</p>
        <ul>
          {sw.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Agents({ items }: { items: Feature[] }) {
  return (
    <div className="agents">
      {items.map((a, i) => (
        <div className="agent" key={a.title} data-r style={d(i + 2)}>
          <span className="n">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** The "Native AI, built in, not bolted on" strip from the foot of each product sheet. */
export function NativeAi({ items }: { items: { label: string }[] }) {
  return (
    <div className="native" data-r>
      <p className="hd">
        <b>Native AI</b> built in, not bolted on
      </p>
      <ul>
        {items.map((x) => (
          <li key={x.label}>{x.label}</li>
        ))}
      </ul>
    </div>
  );
}

export function Layers({ items }: { items: { who: string; title: string; body: string; core?: boolean }[] }) {
  return (
    <div className="layers">
      {items.map((l, i) => (
        <div className={`layer${l.core ? " core" : ""}`} key={l.title} data-r style={d(i + 1)}>
          <span className="who">{l.who}</span>
          <div>
            <h3>{l.title}</h3>
            <p>{l.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Phases({ steps }: { steps: { title: string; body: string; we: string }[] }) {
  return (
    <div className={`phases${steps.length === 6 ? " six" : ""}`} data-r style={d(1)}>
      {steps.map((s, i) => (
        <div className="ph" key={s.title}>
          <span className="st">Step {i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <p className="we">
            <b>We:</b> {s.we}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Facts({ items, note }: { items: { b: string; s: string }[]; note?: string }) {
  return (
    <>
      <div className="facts">
        {items.map((f, i) => (
          <div className="fact" key={f.s} data-r style={d(i)}>
            <b>{f.b}</b>
            <span>{f.s}</span>
          </div>
        ))}
      </div>
      {note && <p className="note">{note}</p>}
    </>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} data-r style={d(Math.min(i, 4))}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  eyebrow = "Start here",
  title,
  lede,
  label,
  href = "/contact",
  list,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  label: string;
  href?: string;
  list: string[];
}) {
  return (
    <section id="book">
      <div className="in">
        <div className="cta-band" data-r>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p className="lede">{lede}</p>
            <div style={{ marginTop: 28 }}>
              <Link href={href} className="btn pri">
                {label} <span className="ar">→</span>
              </Link>
            </div>
          </div>
          <ul>
            {list.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * The six products as an editorial index: one ruled row per product, numbered by its stage in the transaction.
 * The product colour appears only as a thin rule that draws in on hover. With `here`, every product is listed
 * and the current one is marked "You are here" instead of linking to itself.
 */
export function ProductIndex({ current, compact = false, here = false }: { current?: ProductSlug; compact?: boolean; here?: boolean }) {
  const list = here ? products : products.filter((p) => p.slug !== current);
  return (
    <ol className={`pindex${compact ? " compact" : ""}`}>
      {list.map((p) => {
        const n = products.indexOf(p) + 1;
        const isHere = here && p.slug === current;
        const inner = (
          <>
            <span className="pi-n">0{n}</span>
            <span className="pi-stage">{p.stage}</span>
            <span className="pi-main">
              {isHere && <span className="pi-viewing">You are currently viewing</span>}
              <span className="pi-name">
                <ProductMark slug={p.slug} size="md" />
                {p.name}
              </span>
              {!compact && <span className="pi-tag">{p.tagline}</span>}
            </span>
            {compact ? (
              <span className="pi-desc">{p.tagline}</span>
            ) : (
              <span className="pi-desc">
                {p.summary}
                <span className="pi-pts">{p.points.join("  ·  ")}</span>
              </span>
            )}
            {isHere ? (
              <span className="pi-here">
                <i aria-hidden="true" />
                You are here
              </span>
            ) : (
              <span className="pi-go" aria-hidden="true">
                →
              </span>
            )}
          </>
        );
        return (
          <li key={p.slug} data-r style={d(Math.min(n - 1, 4))}>
            {isHere ? (
              <div className="pi-row is-here" aria-current="page" style={{ "--c": HERE } as CSSProperties}>
                {inner}
              </div>
            ) : (
              <Link href={productPath(p.slug)} className="pi-row" style={{ "--c": p.color } as CSSProperties}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Where this page sits among the six, as a stepper. Follows two well-tested patterns: Carbon's progress indicator
 * (completed steps ticked, the current step solid, upcoming steps outlined, the line coloured up to the current step)
 * and GOV.UK's step-by-step navigation (the current item says so in words, not only in colour).
 */
/** One colour for every "you are here" marker, on every product page. */
const HERE = "#7c5cff";

export function ReadingRail({ current }: { current: ProductSlug }) {
  const k = products.findIndex((p) => p.slug === current);
  const p = products[k];
  return (
    <div className="reading" data-r style={{ "--c": HERE, "--pct": k / (products.length - 1) } as CSSProperties}>
      <p className="rd-lab">
        <span className="rd-live" aria-hidden="true" />
        You are currently viewing <b>{p.name}</b>
        <span className="rd-count">
          Product {k + 1} of {products.length}
        </span>
      </p>
      <ol className="rd-steps" aria-label="The six Swyftflo products">
        <span className="rd-track" aria-hidden="true">
          <i />
        </span>
        {products.map((q, i) => {
          const state = i < k ? "past" : i === k ? "now" : "next";
          const body = (
            <>
              {i === k && <span className="rd-pin">You are here</span>}
              <span className="rd-node" aria-hidden="true">
                {i < k ? "✓" : i === k ? "" : String(i + 1).padStart(2, "0")}
              </span>
              <span className="rd-name">{q.short}</span>
              <span className="rd-stage">{q.stage}</span>
            </>
          );
          return (
            <li key={q.slug} className={state} aria-current={i === k ? "page" : undefined} style={{ "--k": i } as CSSProperties}>
              {i === k ? (
                <span className="rd-step">{body}</span>
              ) : (
                <Link href={productPath(q.slug)} className="rd-step">
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * A short process as numbered steps on one line that draws in when it arrives on screen. Five columns on wide
 * screens; on narrow ones the line turns vertical and the steps stack, so nothing ever needs a sideways scroll.
 */
export function FlowSteps({ steps, label }: { steps: { t: string; s: string }[]; label: string }) {
  return (
    <ol className="flow-steps" aria-label={label} data-r style={{ "--n": steps.length } as CSSProperties}>
      <span className="fs-line" aria-hidden="true">
        <i />
      </span>
      {steps.map((x, i) => (
        <li key={x.t} className={i === steps.length - 1 ? "end" : undefined} style={{ "--i": i } as CSSProperties}>
          <span className="fs-dot">{String(i + 1).padStart(2, "0")}</span>
          <b>{x.t}</b>
          <span>{x.s}</span>
        </li>
      ))}
    </ol>
  );
}

/** A run of names set as text, separated by thin rules: used where a list of names would otherwise be pills. */
export function WordList({ label, items, className = "" }: { label?: string; items: string[]; className?: string }) {
  return (
    <div className={`wlist ${className}`} data-r>
      {label && <p className="wl-lab">{label}</p>}
      <p className="wl-run">
        {items.map((x, i) => (
          <span key={x}>
            {x}
            {i < items.length - 1 && <i aria-hidden="true" />}
          </span>
        ))}
      </p>
    </div>
  );
}

/** The systems Swyftflo connects to, grouped by what they do, from Swyftflo's own integration pages. */
const SYSTEMS: { group: string; what: string; names: string[] }[] = [
  {
    group: "ERP and finance",
    what: "Requisitions and POs flow in. Awards, receipts and approved invoices flow back.",
    names: ["SAP", "Oracle", "Oracle NetSuite", "Microsoft Dynamics 365", "Infor", "IFS", "Epicor", "Sage", "Acumatica", "Odoo", "QAD", "Workday"],
  },
  {
    group: "CRM and documents",
    what: "Customer records and signed agreements stay connected to the transaction.",
    names: ["Salesforce", "Zoho", "DocuSign"],
  },
  {
    group: "Logistics and telematics",
    what: "Freight records and vehicle positions feed tracking and proof of delivery.",
    names: ["Magaya", "Wialon"],
  },
];

export function Integrations() {
  return (
    <div className="integ">
      {SYSTEMS.map((g, i) => (
        <div className="ig-row" key={g.group} data-r style={d(i)}>
          <div className="ig-head">
            <span className="ig-count">{String(g.names.length).padStart(2, "0")}</span>
            <div>
              <h3>{g.group}</h3>
              <p>{g.what}</p>
            </div>
          </div>
          <p className="ig-names">
            {g.names.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </p>
        </div>
      ))}
      <p className="note" data-r>
        Every connection is a bi-directional API. Nothing is migrated out of your system of record, and the exact integration points are
        agreed for each deployment.
      </p>
    </div>
  );
}

/** The rest of the suite, at the foot of each product page. */
export function Related({ current, title = "The same thread, extended." }: { current: ProductSlug; title?: string }) {
  return (
    <section className="light">
      <div className="in">
        <Head
          eyebrow="Across the suite"
          title={title}
          lede="Each product works on its own, connected to your ERP. Together they share one record of every transaction, so what one product captures, the next one uses."
        />
        <ProductIndex current={current} compact here />
        <p className="rel-hub" data-r>
          <Link href={SW_HUB}>
            How the six products fit together <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
