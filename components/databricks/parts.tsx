import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CopyrightNotice } from "@/components/CopyrightNotice";
import { DB_HUB, bySlug, dbPath, nextPage, prevPage, type DbProduct, type DbSlug } from "./data";
import { dbFaqs, type Faq } from "./faqs";

/** The trail back up: Services, Databricks, and where you are. */
export function Crumbs({ here }: { here?: string }) {
  return (
    <div className="crumbs">
      <Link href="/services">Services</Link> / {here ? <Link href={DB_HUB}>Databricks</Link> : "Databricks"}
      {here ? ` / ${here}` : null}
    </div>
  );
}

/** The small pill above an h1 that says which part of the platform this is. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="kicker">
      <i aria-hidden="true" />
      {children}
    </span>
  );
}

/** Sections carry an eyebrow, a heading and usually a lede. This keeps that trio consistent. */
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
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p className={wide ? "lede wide" : "lede"}>{children}</p> : null}
    </>
  );
}

/** One of the questions-and-answers sections. The text comes from faqs.ts, which also feeds the structured data. */
export function FaqSection({ slug, title = "Straight answers." }: { slug: DbSlug | ""; title?: string }) {
  const items: Faq[] = dbFaqs[slug] ?? [];
  if (!items.length) return null;
  return (
    <section className="light" id="questions">
      <div className="in">
        <div data-r>
          <Head eyebrow="Questions we hear" title={title} />
        </div>
        <div className="faq" data-r>
          {items.map((f) => (
            <details key={f.q}>
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

/** The closing band: what we would do with you, and a way to start. */
export function CtaBand({
  eyebrow = "Start here",
  title,
  body,
  label,
  points,
  id = "talk",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  label: string;
  points: string[];
  id?: string;
}) {
  return (
    <section id={id}>
      <div className="in">
        <div className="cta-band" data-r>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p className="lede">{body}</p>
            <div style={{ marginTop: "28px" }}>
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
  );
}

/** One product card. Used on the hub and wherever a page points at a sibling. */
export function ProductCard({ p }: { p: DbProduct }) {
  return (
    <Link href={dbPath(p.slug)} className="pcard" style={{ "--c": p.accent } as CSSProperties} data-r>
      <span className="kind">{p.kind}</span>
      <h3>{p.name}</h3>
      <p>{p.blurb}</p>
      <span className="go">
        Read it <i aria-hidden="true">&rarr;</i>
      </span>
    </Link>
  );
}

/** A grid of named product cards, by slug, so a page can point at exactly the siblings that matter. */
export function RelatedGrid({ slugs, cols = 3 }: { slugs: DbSlug[]; cols?: 3 | 4 }) {
  return (
    <div className={cols === 3 ? "pgrid three" : "pgrid"}>
      {slugs.map((s) => {
        const p = bySlug(s);
        return p ? <ProductCard key={s} p={p} /> : null;
      })}
    </div>
  );
}

/**
 * The page before this one and the page after it, so a reader who has finished always has somewhere obvious to go.
 * The order is the section's own: the eight products, then the four supporting pages.
 */
export function Onward({ slug }: { slug: DbSlug }) {
  const prev = prevPage(slug);
  const next = nextPage(slug);
  return (
    <section>
      <div className="in">
        <div data-r>
          <Head eyebrow="Keep reading" title="Where this leads next." />
        </div>
        <div className="onward" data-r>
          <Link href={dbPath(prev.slug)} style={{ "--c": prev.accent } as CSSProperties}>
            <span className="d">&larr; Before this</span>
            <h3>{prev.name}</h3>
            <p>{prev.sub}</p>
          </Link>
          <Link href={dbPath(next.slug)} className="rt" style={{ "--c": next.accent } as CSSProperties}>
            <span className="d">After this &rarr;</span>
            <h3>{next.name}</h3>
            <p>{next.sub}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

/** The copyright card, which sits above the FAQ on every page in the section. */
export function Copyright() {
  return <CopyrightNotice inline />;
}
