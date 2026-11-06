import Link from "next/link";
import { CopyrightNotice } from "@/components/CopyrightNotice";
import { cloudGroups, cloudPath } from "@/lib/cloud-pages";

/** The platform cards: a plain text badge each, not a vendor logo (the logos are the vendors' to license). */
export const cloudPlatforms = [
  { slug: "aws", badge: "AWS", name: "AWS", line: "SAP and workloads on Amazon Web Services" },
  { slug: "microsoft-azure", badge: "AZURE", name: "Microsoft Azure", line: "SAP, Microsoft 365 and Azure together" },
  { slug: "google-cloud", badge: "GCP", name: "Google Cloud", line: "SAP, data and AI on Google Cloud" },
] as const;

/** The Cloud Infrastructure hub: the way in to every page, by platform or by the job you need done. */
export function CloudHubBody() {
  const groups = cloudGroups.filter((g) => g.title !== "Cloud platforms");
  return (
    <>
      <section className="hero cs-hero">
        <div className="in">
          <div className="crumbs">
            Services / Cloud Infrastructure
          </div>
          <span className="eyebrow">Cloud Infrastructure</span>
          <h1>
            SAP and business workloads in the cloud, <em>designed, moved and run for you.</em>
          </h1>
          <p className="lede">
            We plan, build and operate SAP and non-SAP workloads on AWS, Microsoft Azure and Google Cloud. Start from the
            platform, or start from the job: advise and plan, migrate and modernise, build and connect, run and optimise,
            or data, AI and skills.
          </p>
          <div className="ctas">
            <Link href="/contact" className="btn pri">
              Talk to a cloud architect →
            </Link>
            <a href="#platforms" className="btn sec">
              Browse the services
            </a>
          </div>
        </div>
      </section>

      <section className="light" id="platforms">
        <div className="in">
          <span className="eyebrow">Cloud platforms</span>
          <h2>Pick your platform</h2>
          <p className="lede">Each platform has its own page, covering SAP, your other systems and how we run them there.</p>
          <div className="cs-rels">
            {cloudPlatforms.map((p) => (
              <Link key={p.slug} className="cs-rel" href={cloudPath(p.slug)}>
                <span>{p.badge}</span>
                <b>{p.name}</b>
                <em className="cs-rel-line">{p.line}</em>
                <i>→</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {groups.map((g, i) => (
        <section key={g.title} className={i % 2 === 0 ? "" : "light"}>
          <div className="in">
            <span className="eyebrow">{g.title}</span>
            <h2>{g.title}</h2>
            <div className="cs-rels cs-rels-four">
              {g.pages.map((p) => (
                <Link key={p.slug} className="cs-rel" href={cloudPath(p.slug)}>
                  <span>{g.title}</span>
                  <b>{p.label}</b>
                  <i>→</i>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CopyrightNotice inline />

      <section className="light">
        <div className="in">
          <div className="cta-band" style={{ color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as React.CSSProperties}>
            <div>
              <span className="eyebrow">Next step</span>
              <h2>Still running SAP in your own data centre?</h2>
              <p className="lede">
                A cloud readiness assessment compares RISE with SAP and a move to the cloud, with the cost, risk and
                timeline of each.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link href="/contact" className="btn pri">
                  Book an assessment →
                </Link>
              </div>
            </div>
            <ul>
              <li>Your landscape reviewed</li>
              <li>The right cloud and region</li>
              <li>A first roadmap</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
