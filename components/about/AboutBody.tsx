import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "23", label: "consultants, presales and delivery specialists" },
  { value: "50", label: "implementations delivered" },
  { value: "14", label: "featured client case studies" },
  { value: "7", label: "Odoo-certified consultants, fully in-house" },
];

const pillars = [
  { title: "Business-first transformation", body: "Technology aligned to your operational, financial and growth goals." },
  { title: "Cross-platform expertise", body: "One team that can advise across platforms, not defend one." },
  { title: "Leadership involvement", body: "Senior leaders stay close to every engagement." },
  { title: "Lifecycle ownership", body: "From strategy and implementation to managed support." },
  { title: "Long-term partnership", body: "Sustainable value and continuous improvement after go-live." },
];

const lanes = [
  {
    name: "Software principal",
    note: "SAP, Salesforce, AWS",
    body: "Provides the platform, the licences and product support.",
  },
  {
    name: "Implementation partner",
    note: "Specialist delivery team",
    body: "Configures, builds and deploys the solution.",
  },
];

const commitments = [
  {
    title: "Client first, every time",
    body: "We act in your best interest, whichever principal or partner is involved, including our own.",
  },
  {
    title: "Independent scrutiny",
    body: "We review every proposal, change request and invoice from principals and partners before it reaches you.",
  },
  {
    title: "Fair commercials",
    body: "No licences you do not need, no inflated scope and no change orders that should have been in the plan.",
  },
  {
    title: "We stand with you",
    body: "When something goes wrong, we escalate on your behalf and stay until it is resolved.",
  },
];

const trustChain = [
  { who: "The champion", what: "put our name forward first" },
  { who: "The evaluation team", what: "tested team, approach and commercials" },
  { who: "Management", what: "backed the recommendation" },
  { who: "Leadership and board", what: "awarded the contract" },
];

/** About, in the same page pattern as Careers and Industries: the body only, wrapped by the site's own header and footer. */
export function AboutBody() {
  return (
    <main id="top">
      {/* Hero: the office photo is kept from the previous page */}
      <section className="a-hero">
        <div className="a-photo">
          <Image
            src="https://zql0rfjwszzixew9.public.blob.vercel-storage.com/background/untitled-03672.JPG"
            alt="Two Mawkish colleagues talking through a project in the office"
            fill
            priority
            sizes="(min-width: 981px) 50vw, 100vw"
          />
        </div>
        <div className="a-copy">
          <div className="crumbs">
            <Link href="/">Home</Link> / About
          </div>
          <span className="eyebrow">About Mawkish Technologies</span>
          <h1>
            Architecting <em>Transformation.</em>
          </h1>
          <p className="sub">One accountable partner for enterprise applications.</p>
          <p className="lede">
            We are an enterprise technology consulting firm based in Colombo, Sri Lanka.
            We bridge business strategy and technology, and we answer for the result.
          </p>
          <div className="ctas">
            <a href="#standard" className="btn pri">How we work →</a>
            <a href="#leadership" className="btn sec">Meet the leadership</a>
          </div>
        </div>
      </section>

      <section className="a-stats" aria-label="Mawkish at a glance">
        <div className="in">
          {stats.map((s) => (
            <div className="s" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="light" id="who">
        <div className="in">
          <Reveal>
            <div className="a-who">
              <div>
                <span className="eyebrow">Who we are</span>
                <p className="a-line">
                  Boutique attention. <em>Enterprise capability.</em>
                </p>
              </div>
              <div className="a-text">
                <p>
                  Large companies and fast-growing ones come to us to run their finance, supply chain, sales and
                  service on world-class platforms. We start with the business objective, not the technology
                  preference, and we choose the platform to fit the strategy.
                </p>
                <p>
                  That means the attention of a boutique, with senior people close to every engagement, and the
                  capability of a large integrator behind it. One partner owns the relationship, the contract and the
                  outcome, so you are never left to manage the gaps between vendors yourself.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="a-pillars">
              {pillars.map((p) => (
                <li key={p.title}>
                  <b>{p.title}</b>
                  <span>{p.body}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Our standard: the back of the cabinet */}
      <section className="a-cab" id="standard">
        <div className="in">
          <Reveal>
            <div className="a-cab-head">
              <div>
                <span className="eyebrow">Our standard</span>
                <h2>We build the back of the cabinet.</h2>
                <p className="a-claim">
                  <strong>The details nobody sees are the ones that decide whether a project succeeds.</strong> We look
                  after every one of them. Most problems hide in the gaps between the parties on a project, and owning
                  those gaps is our job.
                </p>
              </div>
              <figure className="a-quote">
                <p>
                  &ldquo;You&rsquo;re not going to use a piece of plywood on the back, even though it faces the wall and
                  nobody will ever see it.&rdquo;
                </p>
                <cite>Steve Jobs, 1985</cite>
              </figure>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="a-deal" role="group" aria-label="One deal, many parties: who does what, from presales to support">
              <div className="a-deal-title">
                <h3>One deal, many parties</h3>
                <span>One of them is accountable for all of it.</span>
              </div>
              <div className="a-phases" aria-hidden="true">
                <div>Presales</div>
                <div>Implementation</div>
                <div>Post go-live support</div>
              </div>
              {lanes.map((l) => (
                <div className="a-lane" key={l.name}>
                  <div>
                    <b>{l.name}</b>
                    <small>{l.note}</small>
                  </div>
                  <p>{l.body}</p>
                </div>
              ))}
              <div className="a-lane me">
                <div>
                  <b>Mawkish</b>
                  <small>Your accountable partner</small>
                </div>
                <p>Owns quality across every phase and every party, and checks every handover.</p>
              </div>
              <p className="a-final">
                Whoever does the work, Mawkish <em>checks it, owns it and answers for it</em>, from the first presales
                meeting to long after go-live.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitments */}
      <section className="light" id="commitment">
        <div className="in">
          <Reveal>
            <span className="eyebrow">Our commitment to you</span>
            <h2>Always on the client&rsquo;s side of the table.</h2>
            <p className="lede">Four commitments, stated plainly.</p>
          </Reveal>
          <div className="a-commit">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article style={{ height: "100%" }}>
                  <span className="n">0{i + 1}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="a-trust">
              <div>
                <h3>What a contract award means to us</h3>
                <p>
                  Every award is the trust of many people. Each of them put their name behind us, and we protect that
                  trust as if it were our own.
                </p>
              </div>
              <ol className="a-chain">
                {trustChain.map((t) => (
                  <li key={t.who}>
                    {t.who}
                    <span>{t.what}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal>
            <p className="a-closer">
              Our partners deliver the technology. <em>Our loyalty stays with you.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team image band: the culture photo is kept from the previous page */}
      <section className="a-band">
        <div className="in">
          <Reveal>
            <figure className="a-bandbox">
              <Image
                src="/images/culture.JPG"
                alt="Mawkish team and workspace"
                fill
                sizes="(min-width: 1240px) 1200px, 100vw"
              />
              <figcaption>Friendly, collaborative, and innovation-driven culture.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Leadership: people, photos and bios are kept from the previous page */}
      <section id="leadership" style={{ borderTop: 0 }}>
        <div className="in">
          <Reveal>
            <span className="eyebrow">The people</span>
            <h2>Led by people who stay accountable long after sign-off.</h2>
          </Reveal>

          <div className="a-people">
            <Reveal>
              <div className="a-person">
                <div className="ph">
                  <Image
                    src="/images/brand/malick2.jpeg"
                    alt="Hatim Malick - Founder & Director"
                    fill
                    sizes="(min-width: 981px) 50vw, 100vw"
                    style={{ objectPosition: "75% 30%" }}
                  />
                </div>
                <div className="bio">
                  <h3>Hatim Malick</h3>
                  <div className="role">Founder &amp; Director</div>
                  <a className="li" href="https://www.linkedin.com/in/hathim-malick" target="_blank" rel="noopener noreferrer" aria-label="Hatim Malick on LinkedIn (opens in a new tab)"><svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg><span>LinkedIn</span></a>
                  <p>
                    Provides strategic oversight across Mawkish Group&apos;s portfolio, guiding long-term regional
                    growth and enterprise partnerships across South Asia and the Middle East.
                  </p>
                  <blockquote>Technology should serve business strategy, not exist in isolation.</blockquote>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="a-person flip">
                <div className="bio">
                  <h3>Michael Gunawardena</h3>
                  <div className="role">Director &amp; CEO</div>
                  <a className="li" href="https://www.linkedin.com/in/michael-gunawardena-9250a9271" target="_blank" rel="noopener noreferrer" aria-label="Michael Gunawardena on LinkedIn (opens in a new tab)"><svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg><span>LinkedIn</span></a>
                  <p>
                    13+ years of leadership in business operations, client management, and enterprise transformation.
                    Michael leads Mawkish&apos;s growth strategy and multi-platform advisory across SAP, Salesforce,
                    and Odoo.
                  </p>
                  <blockquote>
                    Enterprises need transformation partners who understand both technology and business outcomes.
                  </blockquote>
                </div>
                <div className="ph">
                  <Image
                    src="/images/brand/michael.JPG"
                    alt="Michael Gunawardena - Director & CEO"
                    fill
                    sizes="(min-width: 981px) 50vw, 100vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="a-person">
                <div className="ph">
                  {/* Blurred copy fills the frame so the full portrait can sit uncropped on top. */}
                  <Image
                    src="/images/brand/nafaz.jpeg"
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 981px) 50vw, 100vw"
                    className="blur"
                  />
                  <Image
                    src="/images/brand/nafaz.jpeg"
                    alt="Nafaz Jalaldeen"
                    fill
                    sizes="(min-width: 981px) 50vw, 100vw"
                    className="fit"
                  />
                </div>
                <div className="bio">
                  <h3>Nafaz Jalaldeen</h3>
                  <div className="role">Director &amp; CRO</div>
                  <a className="li" href="https://www.linkedin.com/in/nafaz" target="_blank" rel="noopener noreferrer" aria-label="Nafaz Jalaldeen on LinkedIn (opens in a new tab)"><svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg><span>LinkedIn</span></a>
                  <p>
                    Nafaz brings over a decade of experience in technology consulting and enterprise sales across Sri
                    Lanka and the Middle East. At Mawkish Technologies, he connects client priorities with the right
                    solutions across our technology portfolio. His expertise in commercial strategy, partnerships, and
                    executive engagement helps Mawkish win complex projects and build lasting client relationships.
                  </p>
                  <blockquote>
                    Trust comes from transparent commercials, realistic scope and accountability long after sign-off.
                  </blockquote>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section>
        <div className="in">
          <Reveal>
            <div className="cta-band">
              <div>
                <span className="eyebrow">Work with us</span>
                <h2>Let&rsquo;s architect your transformation.</h2>
                <p className="lede">
                  Tell us about the challenge you&rsquo;re facing. We&rsquo;ll help you design a practical path from
                  where you are to where you need to be.
                </p>
                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn pri">Schedule a consultation →</Link>
                  <Link href="/contact?intent=proposal" className="btn sec">Request a proposal</Link>
                </div>
              </div>
              <ul>
                <li>One accountable partner</li>
                <li>Independent scrutiny of every proposal</li>
                <li>Fair, transparent commercials</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
