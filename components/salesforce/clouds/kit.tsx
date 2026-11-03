import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CopyrightNotice } from "@/components/CopyrightNotice";
import { mainProducts, productPath, type ProductSlug } from "../data";
import { d } from "../parts";
import { cloudFaqs } from "./faqs";

/* ----------------------------------------------------------------- illustrated screens

   Free-form versions of the illustrated app screens, for the five main cloud pages. The shared template's
   Screen is driven by a spec, which keeps every page looking the same; these take children instead, so a
   pipeline, a console, a segment builder and a loyalty tier ladder can each look like themselves. They are
   our own drawings with sample data, never screenshots, and they carry no Salesforce logo or characters. */

export function Screen({
  app,
  user = "MT",
  search,
  action,
  label,
  children,
}: {
  app: string;
  user?: string;
  search?: string;
  /** A small accented control in the chrome, e.g. "Save". */
  action?: string;
  /** What a screen reader is told the picture shows. Always written out in full. */
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="screen" role="img" aria-label={label}>
      <div className="shell">
        <span className="logo">
          <i />
        </span>
        <span className="t">{app}</span>
        {search && <span className="search">{search}</span>}
        {action && <span className="run">{action}</span>}
        <span className="ai" />
        <span className="av">{user}</span>
      </div>
      <div className="body-pad">{children}</div>
    </div>
  );
}

/** A screen with the line beneath it that says it is our illustration, not a screenshot. */
export function Fig({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure style={{ margin: 0 }}>
      {children}
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  );
}

/** A metric tile inside a screen. */
export function Tile({ h, k, s, tone }: { h: string; k: string; s?: string; tone?: "sf" | "ok" | "wr" | "er" }) {
  return (
    <div className="tile">
      <span className="h">{h}</span>
      <span className={tone ? `k ${tone}` : "k"}>{k}</span>
      {s && <span className="s">{s}</span>}
    </div>
  );
}

export function Tiles({ children, cols = 3 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  return <div className={`tiles t${cols}`}>{children}</div>;
}

/** A white card inside a screen. */
export function Card({ title, meta, children }: { title: string; meta?: string; children: ReactNode }) {
  return (
    <div className="card-f">
      <div className="h">
        {title}
        {meta && <small style={{ float: "right", fontWeight: 500, color: "var(--app-muted)" }}>{meta}</small>}
      </div>
      {children}
    </div>
  );
}

/** One line inside a card. */
export function Row({ l, r, pill }: { l: ReactNode; r?: ReactNode; pill?: { k: string; t: string } }) {
  return (
    <div className="row">
      <span>{l}</span>
      {pill && <span className={`pill ${pill.k}`}>{pill.t}</span>}
      {r && <span style={{ color: "var(--app-muted)", whiteSpace: "nowrap" }}>{r}</span>}
    </div>
  );
}

/* ----------------------------------------------------------------- section parts */

/** The eyebrow, heading and lede trio every section opens with. */
export function Head({
  eyebrow,
  title,
  children,
  wide = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <span className="eyebrow" data-r>
        {eyebrow}
      </span>
      <h2 data-r style={d(1)}>
        {title}
      </h2>
      {children && (
        <p className={wide ? "lede wide" : "lede"} data-r style={d(2)}>
          {children}
        </p>
      )}
    </>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="kicker">
      <i aria-hidden="true" />
      {children}
    </span>
  );
}

/** The copyright card, which sits above the FAQ on every page in this section. */
export function Copyright() {
  return <CopyrightNotice inline />;
}

/** Questions and answers, drawn from the one file that also feeds the structured data. */
export function FaqSection({
  slug,
  title = "Straight answers.",
  light = true,
}: {
  slug: ProductSlug;
  title?: string;
  light?: boolean;
}) {
  const items = cloudFaqs[slug] ?? [];
  if (!items.length) return null;
  return (
    <section className={light ? "light" : undefined} id="faq">
      <div className="in">
        <Head eyebrow="Questions we hear" title={title} />
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} data-r style={d(Math.min(i, 4))}>
              <summary>{f.q}</summary>
              {f.a.split("\n\n").map((para) => (
                <p key={para}>{para}</p>
              ))}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Where this page sits in the five, and the two nearest neighbours to read next. */
export function Onward({ slug }: { slug: ProductSlug }) {
  const i = mainProducts.findIndex((p) => p.slug === slug);
  const prev = mainProducts[(i - 1 + mainProducts.length) % mainProducts.length];
  const next = mainProducts[(i + 1) % mainProducts.length];
  return (
    <section>
      <div className="in">
        <Head eyebrow="Keep reading" title="Where this leads next.">
          The five are read in any order, but these two are the ones this page leans on most.
        </Head>
        <div className="onward" data-r>
          <Link href={productPath(prev.slug)} style={{ "--c": prev.color } as CSSProperties}>
            <span className="d">&larr; {prev.stage}</span>
            <h3>{prev.name}</h3>
            <p>{prev.tagline}</p>
          </Link>
          <Link href={productPath(next.slug)} className="rt" style={{ "--c": next.color } as CSSProperties}>
            <span className="d">{next.stage} &rarr;</span>
            <h3>{next.name}</h3>
            <p>{next.tagline}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

/** The closing band, tinted with the page's own colour. */
export function CloudCta({
  eyebrow = "Start here",
  title,
  body,
  label,
  points,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  label: string;
  points: string[];
}) {
  return (
    <div className="cloud-cta">
      <section id="book">
        <div className="in">
          <div className="cta-band" data-r>
            <div>
              <span className="eyebrow">{eyebrow}</span>
              <h2>{title}</h2>
              <p className="lede">{body}</p>
              <div style={{ marginTop: 28 }}>
                <Link href="/contact" className="btn pri">
                  {label} <span className="ar">&rarr;</span>
                </Link>
              </div>
            </div>
            <ul>
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

/** The sources line that closes each cloud page, so a reader can check us. */
export function Sources({ checked, items }: { checked: string; items: { label: string; href: string }[] }) {
  return (
    <div className="src" data-r>
      <p>{checked}</p>
      <ul>
        {items.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
