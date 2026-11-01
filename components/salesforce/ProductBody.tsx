import type { ReactNode } from "react";
import { Explorer } from "./Explorer";
import { CtaBand, Defs, d, Faq, FlowSteps, Head, Hero, Pairs, Related } from "./parts";
import { Screen } from "./screens";
import type { ProductContent } from "./content-types";

/**
 * One product page, built from its content. Sections that the content does not have are left out, and the dark and
 * light bands alternate down whatever remains, the way the SAP pages do.
 */
export function ProductBody({ c }: { c: ProductContent }) {
  const bands: { id: string; node: (light: boolean) => ReactNode }[] = [];
  const add = (id: string, node: (light: boolean) => ReactNode) => bands.push({ id, node });

  add("what", (light) => (
    <section className={light ? "light" : undefined} id="what" key="what">
      <div className="in">
        <Head eyebrow={c.does.eyebrow} title={c.does.title} lede={c.does.lede} />
        <Defs items={c.does.items} />
      </div>
    </section>
  ));

  add("explore", (light) => (
    <section className={light ? "light" : undefined} id="explore" key="explore">
      <div className="in">
        <Head eyebrow={c.explore.eyebrow} title={c.explore.title} lede={c.explore.lede} />
        <Explorer
          label={c.explore.title}
          tabs={c.explore.tabs.map((t) => ({
            id: t.id,
            label: t.label,
            title: t.title,
            tagline: t.tagline,
            points: t.points,
            look: t.look,
            screen: <Screen spec={t.screen} />,
            caption: "Illustration of a screen, simplified. Sample data.",
          }))}
        />
      </div>
    </section>
  ));

  if (c.scenario) {
    const s = c.scenario;
    add("scenario", (light) => (
      <section className={light ? "light" : undefined} id="scenario" key="scenario">
        <div className="in">
          <Head eyebrow={s.eyebrow} title={s.title} lede={s.lede} />
          <FlowSteps steps={s.steps} label={s.title} />
          <p className="note" data-r style={d(1)}>
            {s.note}
          </p>
        </div>
      </section>
    ));
  }

  if (c.roles) {
    const r = c.roles;
    add("roles", (light) => (
      <section className={light ? "light" : undefined} id="roles" key="roles">
        <div className="in">
          <Head eyebrow={r.eyebrow} title={r.title} lede={r.lede} />
          <Pairs a="Role" b="What they do" rows={r.rows.map((x) => ({ l: x.who, r: x.does }))} />
        </div>
      </section>
    ));
  }

  if (c.fits) {
    const f = c.fits;
    add("fits", (light) => (
      <section className={light ? "light" : undefined} id="fits" key="fits">
        <div className="in">
          <Head eyebrow={f.eyebrow} title={f.title} lede={f.lede} />
          <Pairs a="Connects to" b="How" rows={f.rows.map((x) => ({ l: x.name, r: x.how }))} />
          {f.note && <p className="pairs-note">{f.note}</p>}
        </div>
      </section>
    ));
  }

  if (c.ai) {
    const a = c.ai;
    add("ai", (light) => (
      <section className={light ? "light" : undefined} id={c.slug === "agentforce" ? "trust" : "ai"} key="ai">
        <div className="in">
          <Head eyebrow={a.eyebrow} title={a.title} lede={a.lede} />
          <Defs items={a.items} />
          {a.note && <p className="pairs-note">{a.note}</p>}
        </div>
      </section>
    ));
  }

  if (c.start) {
    const s = c.start;
    add("start", (light) => (
      <section className={light ? "light" : undefined} id="start" key="start">
        <div className="in">
          <Head eyebrow={s.eyebrow} title={s.title} lede={s.lede} />
          <FlowSteps steps={s.steps.map((x) => ({ t: x.title, s: x.body }))} label={s.title} />
          <div className="decide" data-r style={d(1)}>
            <h3>{s.decide.title}</h3>
            <ul>
              {s.decide.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    ));
  }

  if (c.editions) {
    const e = c.editions;
    add("editions", (light) => (
      <section className={light ? "light" : undefined} id="editions" key="editions">
        <div className="in">
          <Head eyebrow={e.eyebrow} title={e.title} lede={e.lede} />
          <Pairs a="Option" b="What it is" rows={e.rows.map((x) => ({ l: x.name, r: x.body }))} />
          <p className="pairs-note">
            <a href={e.link.href} target="_blank" rel="noopener noreferrer">
              {e.link.label} <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </section>
    ));
  }

  add("faq", (light) => (
    <section className={light ? "light" : undefined} id="faq" key="faq">
      <div className="in">
        <Head eyebrow="Questions" title="Straight answers." />
        <Faq items={c.faq} />
        <div className="src" data-r>
          <p>{c.checked}</p>
          <ul>
            {c.sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  ));

  // The hero is dark, so the first band is light and they alternate. The related section takes the opposite tone
  // to the last band, so two bands of the same tone never sit together.
  const lastIsLight = bands.length % 2 === 1;

  return (
    <>
      <Hero
        current={c.slug}
        crumb={c.crumb}
        eyebrow={c.eyebrow}
        title={
          <>
            {c.title[0]} <em>{c.title[1]}</em>
          </>
        }
        lede={c.lede}
        primary={c.primary}
        secondary={c.secondary}
        note={c.note}
        visual={
          <figure style={{ margin: 0 }}>
            <Screen spec={c.hero} />
            <figcaption className="caption">{c.heroCaption ?? "Illustration of a screen, simplified. Sample data."}</figcaption>
          </figure>
        }
      />
      {bands.map((b, i) => b.node(i % 2 === 0))}
      <Related current={c.slug} light={!lastIsLight} />
      <CtaBand
        title="Talk it through with us."
        lede="Tell us what you want Salesforce to do for you, and we will help you work out where to start."
        list={["Your goals and the systems involved", "Which Salesforce products fit, and which can wait", "A sensible first step"]}
      />
    </>
  );
}
