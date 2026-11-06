import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { FamilyPanels } from "./FamilyPanels";
import { IconTile } from "./IconTile";
import { mainProducts, AN_HERE, AN_HUB, productPath, supportProducts, type ProductSlug } from "./data";

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

/** The Anthropic pages as a tab line under the crumbs: the two ways to bring Claude in, then the two products. */
export function ProductChips({ current }: { current?: ProductSlug }) {
  return (
    <nav className="pchips" aria-label="Anthropic pages">
      <Link href={AN_HUB} className="suite" aria-current={current ? undefined : "page"}>
        Overview
      </Link>
      {mainProducts.map((p) => (
        <Link key={p.slug} href={productPath(p.slug)} aria-current={current === p.slug ? "page" : undefined}>
          <IconTile icon={p.glyph} size={16} className="chip-ico" color={p.color} />
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
          Services / {current ? <Link href={AN_HUB}>Anthropic</Link> : "Anthropic"}
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
 * A short process as numbered steps on one line that draws in when it arrives on screen. On wide screens the steps sit in
 * columns; on narrow ones the line turns vertical and the steps stack, so nothing ever needs a sideways scroll. A step can
 * carry a small glyph of our own that hints at what happens in that step.
 */
export function FlowSteps({ steps, label }: { steps: { t: string; s: string; icon?: string }[]; label: string }) {
  return (
    <ol className="flow-steps" aria-label={label} data-r style={{ "--n": steps.length } as CSSProperties}>
      <span className="fs-line" aria-hidden="true">
        <i />
      </span>
      {steps.map((x, i) => (
        <li key={x.t} className={i === steps.length - 1 ? "end" : undefined} style={{ "--i": i } as CSSProperties}>
          <span className="fs-dot">{x.icon ? <IconTile icon={x.icon} size={30} className="dot-ico" /> : String(i + 1).padStart(2, "0")}</span>
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

/* ------------------------------------------------------------------ the family index */

/**
 * The two ways to bring Claude in and the two main products as an editorial index: one ruled row each, large, numbered,
 * with a glyph of our own. With `current`, the page's own row is marked "You are here" instead of linking to itself. The
 * supporting pages are a quiet list below it.
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
              <span className="pi-head">
                <IconTile icon={p.glyph} size={compact ? 34 : 44} color={p.color} />
                <span className="pi-name">{p.name}</span>
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
          <li key={p.slug} data-r style={d(Math.min(k, 4))}>
            {isHere ? (
              <div className="pi-row is-here" aria-current="page" style={{ "--c": AN_HERE } as CSSProperties}>
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

/** The supporting pages, as a quiet text directory: smaller than the main four on purpose. */
export function SupportDirectory({ current }: { current?: ProductSlug }) {
  return (
    <div className="supdir" data-r>
      <p className="sd-lab">Also on Claude</p>
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

/** The rest of the Anthropic pages, at the foot of each page. */
export function Related({ current, light = true }: { current: ProductSlug; light?: boolean }) {
  const here = mainProducts.find((p) => p.slug === current);
  return (
    <section className={light ? "light" : undefined}>
      <div className="in">
        <Head
          eyebrow="Across Claude"
          title={here ? `You are on ${here.name}. Where next?` : "Go to another Claude page."}
          lede="Claude Enterprise, the Claude Platform, Claude and Claude Code each have their own page. Visit them in any order. Choose one to go there."
        />
        <p className="pn-lab" data-r style={{ "--c": AN_HERE } as CSSProperties}>
          <span className="pn-dot" aria-hidden="true" />
          {here ? (
            <>
              You are currently viewing <b>{here.name}</b>
            </>
          ) : (
            <>
              You are currently viewing <b>{supportProducts.find((x) => x.slug === current)?.name}</b>, a supporting page
            </>
          )}
        </p>
        <div data-r>
          <FamilyPanels current={current} />
        </div>
        <SupportDirectory current={current} />
        <p className="rel-hub" data-r>
          <Link href={AN_HUB}>
            How it all fits together <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
