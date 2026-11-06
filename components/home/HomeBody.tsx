import Image from "next/image";
import Link from "next/link";
import { Rv } from "./Rv";
// One source of truth for industries, shared with the header menu, the
// footer and /industries, so the four can never disagree.
import { industriesMenu } from "@/lib/industries-menu";

/* Platform rail. Logos that already ship in /public/images. */
const rail = [
  { name: "SAP", src: "/images/solutions/sap.svg" },
  { name: "Salesforce", src: "/images/solutions/salesforce.svg" },
  { name: "Odoo", src: "/images/solutions/odoo.svg" },
  { name: "Swyftflo AI", src: "/images/solutions/swyftflo.png" },
  { name: "MiHCM", src: "/images/solutions/mihcm.svg" },
  { name: "AWS", src: "/images/solutions/AWS.png" },
  { name: "Databricks", src: "/images/Databricks_Logo.png" },
];

/* The engagement, stage by stage. One sentence each: a row of bulleted
   cards is the shape every template uses. */
const stops = [
  {
    no: "01",
    phase: "Presales",
    title: "Advise and select",
    body: "Our consultants join the first conversation, represent your interest with every vendor, and shape the commercial case before anything is signed.",
  },
  {
    no: "02",
    phase: "Before kickoff",
    title: "Scope and contract",
    body: "Scope is finalised by the people who will deliver it, then placed under one contract with one commercial owner, one plan and one governance model.",
  },
  {
    no: "03",
    phase: "Implementation",
    title: "Deliver and govern",
    body: "A local project office runs the build through migration, testing and cutover, whether the hands on the keyboard are ours or a specialist partner's.",
  },
  {
    no: "04",
    phase: "Go-live",
    title: "Adopt and enable",
    body: "Role-based training, change support and knowledge transfer, so the system is genuinely used by the people it was bought for.",
  },
  {
    no: "05",
    phase: "Managed services",
    title: "Run and improve",
    body: "Application support from L1 to L3, cloud operations, health checks, and a roadmap that keeps the platform current instead of drifting.",
  },
];

/* What stays with Mawkish across all five stages above. */
const held = [
  "Client relationship",
  "Contract and commercials",
  "Project office",
  "Scope of work",
  "Implementation governance",
  "Delivery accountability",
];

const commitments = [
  {
    h: "Client first, every time",
    p: "We act in your best interest whichever principal or partner is involved, including our own.",
  },
  {
    h: "Independent scrutiny",
    p: "We review every proposal, change request and invoice from principals and partners before it reaches you.",
  },
  {
    h: "Fair commercials",
    p: "No licences you do not need, no inflated scope, and no change orders that should have been in the plan.",
  },
  {
    h: "We stand with you",
    p: "When something goes wrong we escalate on your behalf, and stay until it is resolved.",
  },
];

/* What the Careers page promises, in four lines. Wording follows /careers. */
const joinPoints = [
  { h: "AI first", p: "Every role uses AI daily, and we teach you how." },
  { h: "Client first", p: "We sit on the client’s side of the table, always." },
  { h: "Real projects", p: "Industry work across Sri Lanka and India." },
  { h: "Grow fast", p: "A clear path from intern to lead." },
];

export function HomeBody() {

  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <div className="in hero-grid">
          <Rv>
            <h1>
              One accountable partner for <em>enterprise applications.</em>
            </h1>
            <p className="lede">
              Most enterprise programmes fail in the gaps between the software
              vendor, the implementation partner and the business. We architect
              the solution, govern the delivery and answer for the outcome,
              whoever does the work.
            </p>
            <div className="ctas">
              <Link href="/contact" className="btn pri">
                Schedule a consultation
              </Link>
              <Link href="/services/sap-solutions/grow-with-sap" className="btn sec">
                Explore our services
              </Link>
            </div>
          </Rv>

          <Rv delay={120} className="figures">
            <div>
              <div className="n">50</div>
              <div className="l">Implementations delivered</div>
            </div>
            <div>
              <div className="n">14</div>
              <div className="l">Client case studies</div>
            </div>
            <div>
              <div className="n">23</div>
              <div className="l">Consultants and specialists</div>
            </div>
            <div>
              <div className="n">4</div>
              <div className="l">Countries of operation</div>
            </div>
          </Rv>
        </div>
      </section>

      {/* ---------------- platform rail ---------------- */}
      <section className="rail">
        <div className="in">
          <Rv>
            <p className="label">Platforms we deliver</p>
            <div className="logos">
              {rail.map((r) => (
                <span key={r.name} className="chip" title={r.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.src} alt={r.name} loading="lazy" />
                </span>
              ))}
            </div>
          </Rv>
        </div>
      </section>

      {/* ---------------- the proposition ---------------- */}
      <section>
        <div className="in two">
          <Rv>
            <span className="eyebrow">How we work</span>
            <h2>The details nobody sees decide whether a project succeeds.</h2>
            <p className="lede">
              A typical enterprise deal has several parties. The software
              principal provides the platform and the licences. A specialist
              team configures and deploys it. Most problems hide in the gaps
              between them, and in the details nobody thinks to check. Our answer is
              Gapwatch: we inspect every handover between principal, partner
              and client before the work moves on.
            </p>
            <p className="pullline">
              Whoever does the work, Mawkish checks it, owns it and answers for
              it, from the first presales meeting to long after go-live.
            </p>
            <Link href="/about" className="tlink">
              More about how we work <i aria-hidden="true">→</i>
            </Link>
          </Rv>

          <Rv delay={100}>
            <div className="ladder">
              <div className="rung">
                <div>
                  <div className="who">Software principal</div>
                  <div className="does">
                    Provides the platform, licences and product support
                  </div>
                </div>
                <span className="tag">Vendor</span>
              </div>
              <div className="rung">
                <div>
                  <div className="who">Implementation partner</div>
                  <div className="does">
                    Configures, builds and deploys the solution
                  </div>
                </div>
                <span className="tag">Specialist</span>
              </div>
              <div className="rung mine">
                <div>
                  <div className="who">Mawkish</div>
                  <div className="does">
                    Owns quality across every phase and every party, and checks
                    every handover
                  </div>
                </div>
                <span className="tag">Accountable</span>
              </div>
            </div>
          </Rv>
        </div>
      </section>

      {/* ---------------- the engagement ---------------- */}
      <section className="journey-sec">
        <div className="in">
          <Rv>
            <span className="eyebrow">The engagement</span>
            <h2>Five stages. One name against all of them.</h2>
            <p className="lede">
              Vendors and specialists come and go as the work demands. The line
              underneath never changes hands. We call it One-Signature Delivery:
              one accountable name against every stage, from the first
              presales meeting to long after go-live.
            </p>
          </Rv>

          <div className="journey">
            <div className="stops">
              {stops.map((s, i) => (
                <Rv key={s.no} delay={i * 70} className="stop">
                  <span className="dot" aria-hidden="true" />
                  <div className="no">{s.no}</div>
                  <div className="phase">{s.phase}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </Rv>
              ))}
            </div>

            <Rv delay={120} className="band">
              <div className="band-head">
                <span className="band-k">Held by Mawkish, start to finish</span>
                <span className="band-sub">Six responsibilities that stay with us across all five stages</span>
              </div>
              <ul className="band-items">
                {held.map((h, i) => (
                  <li key={h}>
                    <span className="bi-n" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="bi-t">{h}</span>
                  </li>
                ))}
              </ul>
            </Rv>
          </div>
        </div>
      </section>

      {/* ---------------- proof ---------------- */}
      <section>
        <div className="in two">
          <Rv delay={100}>
            <div className="shot">
              <Image
                src="/images/demo/image2.jpeg"
                alt="A Mawkish consultant presenting to the delivery team in the Colombo office"
                fill
                sizes="(min-width: 1000px) 46vw, 100vw"
              />
              <span className="cap">Presales and solutioning, Colombo</span>
            </div>
          </Rv>

          <Rv>
            <span className="eyebrow">Proof in production</span>
            <h2>Fifty implementations, delivered and live.</h2>
            <p className="lede">
              Across Sri Lanka and India, on seven solutions, for listed
              conglomerates, manufacturers, exporters and retail networks.
              Fourteen are written up as case studies.
            </p>
            <div className="solutions">
              <span>RISE with SAP</span>
              <span>GROW with SAP</span>
              <span>Salesforce</span>
              <span>Odoo</span>
              <span>Swyftflo AI</span>
              <span>SAP Business AI</span>
              <span>MiHCM</span>
            </div>
            <Link href="/clients" className="tlink">
              See the client work <i aria-hidden="true">→</i>
            </Link>
          </Rv>
        </div>
      </section>

      {/* ---------------- industries ---------------- */}
      <section>
        <div className="in">
          <Rv>
            <span className="eyebrow">Industries we serve</span>
            <h2>Built around how your sector actually runs.</h2>
          </Rv>

          <div className="inds">
            {industriesMenu.map((ind, i) => (
              <Rv key={ind.k} delay={(i % 3) * 60} className="ind">
                <h3>{ind.n}</h3>
                <p>{ind.promise}</p>
              </Rv>
            ))}
          </div>

          <Rv>
            <Link href="/industries" className="tlink">
              Explore industries <i aria-hidden="true">→</i>
            </Link>
          </Rv>
        </div>
      </section>

      {/* ---------------- commitment (light) ---------------- */}
      <section className="light">
        <div className="in two">
          <Rv>
            <span className="eyebrow">Our commitment</span>
            <h2>Always on the client&rsquo;s side of the table.</h2>
            <p className="lede">
              Every contract award is the trust of many people: the champion who
              put our name forward, the evaluation team, management, the board.
              We protect that trust as if it were our own.
            </p>
            <div className="cmts">
              {commitments.map((c, i) => (
                <Rv key={c.h} delay={i * 60} className="cmt">
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </Rv>
              ))}
            </div>
          </Rv>

          <Rv delay={100}>
            <div className="shot wide">
              <Image
                src="/images/untitled-03846.JPG"
                alt="The Mawkish Technologies team in the Colombo office"
                fill
                sizes="(min-width: 1000px) 46vw, 100vw"
              />
              <span className="cap">
                The team, 2nd Floor Oceanica Tower, Colombo 03
              </span>
            </div>
            <p className="sub">
              Twenty-three consultants, presales and delivery specialists,
              including six in-house SAP presales consultants, four on
              Salesforce and seven Odoo-certified.{" "}
              <Link href="/careers" className="inline">
                We are hiring.
              </Link>
            </p>
          </Rv>
        </div>
      </section>

      {/* ---------------- careers ---------------- */}
      <section className="join">
        <div className="in two top">
          <Rv>
            <span className="eyebrow">Join the team</span>
            <h2>People who sit on the client&rsquo;s side of the table.</h2>
            <p className="lede">
              We hire people who care about our clients&rsquo; businesses as if
              they were their own, hold the line on quality, and use AI on
              every task. Small, senior-led teams, mentors from day one, and
              real projects across Sri Lanka and India.
            </p>
            <Link href="/careers#openings" className="tlink">
              See open positions <i aria-hidden="true">→</i>
            </Link>
          </Rv>

          <Rv delay={100}>
            <div className="model">
              {joinPoints.map((j) => (
                <div key={j.h} className="mrow">
                  <div className="mname">{j.h}</div>
                  <div className="mbody">
                    <p>{j.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </Rv>
        </div>
      </section>
    </>
  );
}
