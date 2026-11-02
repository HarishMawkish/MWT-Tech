import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { ContactForm } from "@/components/ContactForm";
import "@/components/contact/contact.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a consultation, request a demo, or request a proposal from the Mawkish Technologies team.",
};

const RFP_EMAIL = "info@mawkishtechnologies.com";

const rfps = [
  {
    title: "AI tenders",
    body: "Issuing a government tender for artificial intelligence? Send us the RFP, or your request to take part.",
    subject: "AI tender: RFP / EOI participation request",
  },
  {
    title: "ERP and digitalisation tenders",
    body: "Calling for government ERP or digitalisation proposals? Email us the RFP or EOI participation request.",
    subject: "ERP and digitalisation tender: RFP / EOI participation request",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;

  return (
    <div className={`ct ${jakarta.variable} ${manrope.variable}`}>
      <section className="hero">
        <div className="in">
          <div className="crumbs">
            <Link href="/">Home</Link> / Contact
          </div>
          <span className="eyebrow">Get in touch</span>
          <h1>
            Let&apos;s design your path to a <em>measurable outcome.</em>
          </h1>
          <p className="lede">
            Tell us about the challenge you&apos;re facing. A member of our team will follow up to schedule a
            consultation.
          </p>
        </div>
      </section>

      <section className="light">
        <div className="in t-grid">
          <div className="t-card">
            <h2>Send us a message</h2>
            <p>Share a few details and we&apos;ll come back to you shortly.</p>
            <ContactForm defaultIntent={intent} />
          </div>

          <div className="t-side">
            <div className="t-hq">
              <span className="eyebrow">Headquarters</span>
              <div className="t-co">Mawkish Technologies Pvt Ltd</div>
              <a href="https://maps.app.goo.gl/1tY6TsvdXmYuFvXs8" target="_blank" rel="noopener noreferrer">
                2nd Floor, Oceanica Tower, 490 Galle Rd, Colombo 00300, Sri Lanka
              </a>
            </div>

            <div className="t-map">
              <iframe
                title="Mawkish Technologies — Oceanica Tower, Colombo, Sri Lanka"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.8419%2C6.8938%2C79.8619%2C6.9138&layer=mapnik&marker=6.9037886%2C79.8519282"
                loading="lazy"
              />
            </div>

            <div className="t-rfp">
              {rfps.map((r) => (
                <article key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                  <a href={`mailto:${RFP_EMAIL}?subject=${encodeURIComponent(r.subject)}`}>{RFP_EMAIL} →</a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
