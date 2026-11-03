import Link from "next/link";
import type { CSSProperties } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { CopyrightNotice } from "@/components/CopyrightNotice";
import { IndustryExplorer } from "./IndustryExplorer";
import "./industries.css";

// The page's own two typefaces, loaded the Next way and handed to its stylesheet as variables.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ctaVars = { color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as CSSProperties;

/**
 * Industries, from the supplied page: the body only. The site's own header, copyright notice and footer wrap it, untouched.
 * Everything below is scoped to .ind, so none of this page's CSS reaches the rest of the site.
 */
export function IndustriesPage() {
  return (
    <div className={`ind ${jakarta.variable} ${manrope.variable}`}>
      <main id="top">
        <section className="hero i-hero">
          <div className="in">
            <div className="crumbs">
              <Link href="/">Home</Link> / Industries
            </div>
            <span className="eyebrow">Industries we serve</span>
            <h1>
              We start with your industry, <em>then pick the platform.</em>
            </h1>
            <p className="lede">
              A tea exporter, a tile showroom network and a poultry integrator need very different things from their systems. SAP has deep, proven processes for each of them, and we know which ones matter in your industry. Open any industry to see what SAP does for it, step by step.
            </p>
            <div className="i-stats">
              <div>
                <b>9</b>
                <span>industries</span>
              </div>
              <div>
                <b>14</b>
                <span>published case studies</span>
              </div>
              <div>
                <b>2</b>
                <span>countries: Sri Lanka and India</span>
              </div>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="in">
            <span className="eyebrow">Choose your industry</span>
            <h2>What each platform does for your industry.</h2>
            <p className="lede">
              Each industry has a full guide for every platform we use there. SAP runs the core of the business, Salesforce runs the customer side, and the guides show what each one does for your industry.
            </p>
            <IndustryExplorer />
          </div>
        </section>

        <section>
          <div className="in">
            <span className="eyebrow">How we approach an industry</span>
            <h2>One value chain, the right product at each step.</h2>
            <p className="lede">
              Every industry page follows your business from end to end and shows which platform handles each step. Here&apos;s a tile and bathware company with a showroom network as an example.
            </p>
            <div className="i-chain" aria-label="Example value chain for a tile company: buy, make, sell, deliver and account, with the products used at each step">
              <div>
                <span className="s">01 · Buy</span>
                <h3>Clay, glaze and imports</h3>
                <div className="i-prods"><span>SAP Cloud ERP</span></div>
              </div>
              <div>
                <span className="s">02 · Make</span>
                <h3>Batches and quality</h3>
                <div className="i-prods"><span>SAP Cloud ERP</span></div>
              </div>
              <div>
                <span className="s">03 · Sell</span>
                <h3>Leads, showrooms, quotes</h3>
                <div className="i-prods"><span className="sf">Sales Cloud</span><span className="sf">CPQ</span></div>
              </div>
              <div>
                <span className="s">04 · Deliver</span>
                <h3>Orders, stock, dispatch</h3>
                <div className="i-prods"><span>SAP Cloud ERP</span><span className="sf">Order status</span></div>
              </div>
              <div>
                <span className="s">05 · Account</span>
                <h3>Invoices, margins, close</h3>
                <div className="i-prods"><span>SAP Cloud ERP</span></div>
              </div>
            </div>
            <div className="i-legend">
              <span className="i-prods"><span>SAP</span></span> core business processes <span className="i-prods"><span className="sf">Salesforce</span></span> customer-facing processes
            </div>
            <div className="i-why">
              <div>
                <h3>We speak your industry</h3>
                <p>Our consultants have run projects in these industries, so workshops start from your processes, not from a textbook.</p>
              </div>
              <div>
                <h3>Best product per step</h3>
                <p>We&apos;re partners of both SAP and Salesforce, so we recommend what fits each step instead of forcing one product onto everything.</p>
              </div>
              <div>
                <h3>Built for Sri Lanka</h3>
                <p>Tea auctions, export zones, local tax and banks: the local details are covered from the first workshop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="in">
            <div className="cta-band" style={ctaVars}>
              <div>
                <span className="eyebrow">Don&apos;t see your industry?</span>
                <h2>Tell us how your business runs.</h2>
                <p className="lede">
                  Most of what makes an industry different is in a few key processes. In one conversation we&apos;ll show you how SAP and Salesforce handle yours, and who we&apos;ve done it for.
                </p>
                <div style={{ marginTop: 28 }}>
                  <Link href="/contact" className="btn pri">Talk to an industry expert →</Link>
                </div>
              </div>
              <ul>
                <li>Your key processes, mapped</li>
                <li>The right platform for each</li>
                <li>Relevant client stories</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* The copyright notice sits here, above the trademark line, instead of at the very end of the page. */}
      <CopyrightNotice inline />

      {/* The standalone page carried this line in its own footer; the site footer is left alone, so it sits here. */}
      <div className="legal">
        <div className="in">
          <p>SAP is a trademark of SAP SE. Salesforce is a trademark of Salesforce, Inc.</p>
        </div>
      </div>
    </div>
  );
}
