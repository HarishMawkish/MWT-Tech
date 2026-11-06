import Link from "next/link";
import { CopyrightNotice } from "@/components/CopyrightNotice";
import { CLOUD_HUB_PATH, cloudPath } from "@/lib/cloud-pages";
import type { CloudPageData } from "./data";

const CONTACT = "/contact";

/** One Cloud Infrastructure page. All 23 share this template; only the data changes. */
export function CloudBody({ d }: { d: CloudPageData }) {
  return (
    <>
      <section className="hero cs-hero">
        <div className="in">
          <div className="crumbs">
            Services / <Link href={CLOUD_HUB_PATH}>Cloud Infrastructure</Link> / {d.crumb}
          </div>
          <span className="eyebrow">{d.eyebrow}</span>
          <h1>
            {d.h1[0]} <em>{d.h1[1]}</em>
          </h1>
          <p className="lede">{d.lede}</p>
          <div className="ctas">
            <Link href={CONTACT} className="btn pri">
              {d.cta1}
            </Link>
            <a href="#how" className="btn sec">
              {d.cta2}
            </a>
          </div>
          <div className="cs-facts">
            {d.facts.map(([figure, caption]) => (
              <div key={figure + caption}>
                <b>{figure}</b>
                <span>{caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={d.cls.why || undefined}>
        <div className="in">
          <span className="eyebrow">{d.why.eyebrow}</span>
          <h2>{d.why.h2}</h2>
          {d.why.lede && <p className="lede">{d.why.lede}</p>}
          <div className="cs-why">
            {d.why.items.map(([h, p]) => (
              <div key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {d.str && (
        <section className={d.cls.str || undefined}>
          <div className="in">
            <span className="eyebrow">{d.str.eyebrow}</span>
            <h2>{d.str.h2}</h2>
            {d.str.lede && <p className="lede">{d.str.lede}</p>}
            <div className="cs-str">
              {d.str.items.map(([h, p]) => (
                <div key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={d.cls.what || undefined}>
        <div className="in">
          <span className="eyebrow">{d.what.eyebrow}</span>
          <h2>{d.what.h2}</h2>
          {d.what.lede && <p className="lede">{d.what.lede}</p>}
          <div className="cs-what">
            {d.what.items.map(([n, h, p]) => (
              <div key={n + h}>
                <span className="n">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className={d.cls.how || undefined}>
        <div className="in">
          <span className="eyebrow">{d.how.eyebrow}</span>
          <h2>{d.how.h2}</h2>
          {d.how.lede && <p className="lede">{d.how.lede}</p>}
          <ol className="cs-steps" style={{ "--n": d.how.steps.length } as React.CSSProperties}>
            {d.how.steps.map(([h, p, dur], i) => (
              <li key={h}>
                <span className="n">{i + 1}</span>
                <h3>{h}</h3>
                <p>{p}</p>
                <span className="d">{dur}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={d.cls.tbl || undefined}>
        <div className="in">
          <span className="eyebrow">{d.tbl.eyebrow}</span>
          <h2>{d.tbl.h2}</h2>
          {d.tbl.lede && <p className="lede">{d.tbl.lede}</p>}
          <div className="cs-tbl">
            <table>
              <thead>
                <tr>
                  {d.tbl.cols.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.tbl.rows.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    {r.slice(1).map((cell, i) => (
                      <td key={i} data-c={d.tbl.cols[i + 1]}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={d.cls.sap || undefined}>
        <div className="in cs-sap">
          <div>
            <span className="eyebrow">{d.sap.eyebrow}</span>
            <h2>{d.sap.h2}</h2>
            {d.sap.lede && <p className="lede">{d.sap.lede}</p>}
          </div>
          <ul className="cs-sapl">
            {d.sap.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* The site's standard copyright card, in the same place it sits on the SAP pages: just above the FAQ. */}
      <CopyrightNotice inline />

      <section className={d.cls.two || undefined}>
        <div className="in cs-two">
          <div>
            <span className="eyebrow">{d.del.eyebrow}</span>
            <h2>{d.del.h2}</h2>
            <ul className="cs-del">
              {d.del.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">{d.faq.eyebrow}</span>
            <h2>{d.faq.h2}</h2>
            <div className="cs-faq">
              {d.faq.items.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={d.cls.rel || undefined}>
        <div className="in">
          <span className="eyebrow">{d.relH.eyebrow}</span>
          <h2>{d.relH.h2}</h2>
          <div className="cs-rels">
            {d.rels.map(([group, title, slug]) => (
              <Link key={slug} className="cs-rel" href={cloudPath(slug)}>
                <span>{group}</span>
                <b>{title}</b>
                <i>→</i>
              </Link>
            ))}
          </div>
          <div className="cta-band" style={{ color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as React.CSSProperties}>
            <div>
              <span className="eyebrow">{d.cta.eyebrow}</span>
              <h2>{d.cta.h2}</h2>
              {d.cta.lede && <p className="lede">{d.cta.lede}</p>}
              <div style={{ marginTop: 28 }}>
                <Link href={CONTACT} className="btn pri">
                  {d.cta.btn}
                </Link>
              </div>
            </div>
            <ul>
              {d.cta.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <details className="cs-src">
            <summary>Sources</summary>
            <ul>
              {d.sources.map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </>
  );
}
