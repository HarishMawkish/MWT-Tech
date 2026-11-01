import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { mainProducts, productPath, products, supportProducts, SF_HERE, SF_HUB, type ProductSlug } from "./data";

/** Stagger index for a revealed element. */
export const d = (n: number) => ({ "--d": n }) as CSSProperties;

/** In-page anchors stay plain links; everything else goes through the router. */
export function CtaLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
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

/* ------------------------------------------------------------------ hero */

/** The five main products as a tab line under the crumbs, the supporting ones after a rule. */
export function ProductChips({ current }: { current?: ProductSlug }) {
  return (
    <nav className="pchips" aria-label="Salesforce products">
      <Link href={SF_HUB} className="suite" aria-current={current ? undefined : "page"}>
        Overview
      </Link>
      {mainProducts.map((p) => (
        <Link key={p.slug} href={productPath(p.slug)} aria-current={current === p.slug ? "page" : undefined}>
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
          <Link href="/services">Services</Link> / {current ? <Link href={SF_HUB}>Salesforce</Link> : "Salesforce"}
          {current ? ` / ${crumb}` : ""}
        </div>
        <ProductChips current={current} />
        <div className="hero-grid">
          <div>
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
      {lede && (
        <p className="lede" data-r style={d(2)}>
          {lede}
        </p>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ blocks */

/** Ruled definition rows: a short heading, then what it does. No icons, no boxes. */
export function Defs({ items }: { items: { title: string; body: string }[] }) {
  return (
    <dl className="defs">
      {items.map((x, i) => (
        <div className="def" key={x.title} data-r style={d(Math.min(i, 5))}>
          <dt>
            <span className="def-n">{String(i + 1).padStart(2, "0")}</span>
            {x.title}
          </dt>
          <dd>{x.body}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Two-column ruled rows (who / does, name / how). */
export function Pairs({ rows, a, b }: { rows: { l: string; r: string }[]; a: string; b: string }) {
  return (
    <div className="pairs" role="table" aria-label={`${a} and ${b}`}>
      <div className="pairs-h" role="row">
        <span role="columnheader">{a}</span>
        <span role="columnheader">{b}</span>
      </div>
      {rows.map((x, i) => (
        <div className="pairs-r" role="row" key={x.l} data-r style={d(Math.min(i, 5))}>
          <b role="rowheader">{x.l}</b>
          <span role="cell">{x.r}</span>
        </div>
      ))}
    </div>
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
  eyebrow = "Talk to us",
  title,
  lede,
  label = "Start a conversation",
  href = "/contact",
  list,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  label?: string;
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

/** A run of names set as text, separated by thin rules. */
export function WordList({ label, items }: { label?: string; items: string[] }) {
  return (
    <div className="wlist" data-r>
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

/* ------------------------------------------------------------------ the product index */

/**
 * The five main products as an editorial index: one ruled row each, large, numbered. With `here`, the page's own
 * product is marked "You are here" instead of linking to itself. The supporting products are a quiet list below it.
 */
export function ProductIndex({ current, compact = false }: { current?: ProductSlug; compact?: boolean }) {
  return (
    <ol className={`pindex${compact ? " compact" : ""}`}>
      {mainProducts.map((p, k) => {
        const isHere = current === p.slug;
        const inner = (
          <>
            <span className="pi-n">0{k + 1}</span>
            <span className="pi-stage">{p.stage}</span>
            <span className="pi-main">
              {isHere && <span className="pi-viewing">You are currently viewing</span>}
              <span className="pi-name">{p.name}</span>
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
          <li key={p.slug} data-r style={d(Math.min(k, 4))}>
            {isHere ? (
              <div className="pi-row is-here" aria-current="page" style={{ "--c": SF_HERE } as CSSProperties}>
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

/** The supporting products, as a quiet text directory: smaller than the main five on purpose. */
export function SupportDirectory({ current }: { current?: ProductSlug }) {
  return (
    <div className="supdir" data-r>
      <p className="sd-lab">Also on the Salesforce platform</p>
      <ul>
        {supportProducts.map((p) => (
          <li key={p.slug}>
            {current === p.slug ? (
              <span className="sd-here" aria-current="page">
                {p.name}
                <small>You are here</small>
              </span>
            ) : (
              <Link href={productPath(p.slug)}>
                <b>{p.name}</b>
                <span>{p.tagline}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Where this page sits among the five, as a stepper. Follows two well-tested patterns: Carbon's progress indicator
 * (completed steps ticked, the current step solid, upcoming steps outlined, the line coloured up to the current step)
 * and GOV.UK's step-by-step navigation (the current item says so in words, not only in colour).
 * On a supporting product's page there is no place on the line, so the rail says so and sends you back to the five.
 */
export function ReadingRail({ current }: { current: ProductSlug }) {
  const k = mainProducts.findIndex((p) => p.slug === current);
  if (k < 0) {
    const p = products.find((x) => x.slug === current);
    return (
      <div className="reading support" data-r>
        <p className="rd-lab">
          <span className="rd-live" aria-hidden="true" />
          You are currently viewing <b>{p?.name}</b>
          <span className="rd-count">Supporting product</span>
        </p>
        <p className="rd-back">
          It works with the five main Salesforce products below. <Link href={SF_HUB}>See all five →</Link>
        </p>
      </div>
    );
  }
  const p = mainProducts[k];
  return (
    <div className="reading" data-r style={{ "--c": SF_HERE, "--pct": k / (mainProducts.length - 1) } as CSSProperties}>
      <p className="rd-lab">
        <span className="rd-live" aria-hidden="true" />
        You are currently viewing <b>{p.name}</b>
        <span className="rd-count">
          Product {k + 1} of {mainProducts.length}
        </span>
      </p>
      <ol className="rd-steps" aria-label="The five main Salesforce products">
        <span className="rd-track" aria-hidden="true">
          <i />
        </span>
        {mainProducts.map((q, i) => {
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

/** The rest of the platform, at the foot of each product page. */
export function Related({ current, light = true }: { current: ProductSlug; light?: boolean }) {
  return (
    <section className={light ? "light" : undefined}>
      <div className="in">
        <Head
          eyebrow="Across Salesforce"
          title="Five main products, one platform."
          lede="Sales, data, marketing, loyalty and service share the same platform and the same customer data. The other products here support them."
        />
        <ReadingRail current={current} />
        <ProductIndex current={current} compact />
        <SupportDirectory current={current} />
        <p className="rel-hub" data-r>
          <Link href={SF_HUB}>
            How the products fit together <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
