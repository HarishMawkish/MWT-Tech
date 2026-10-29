import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { AnalyticsBody } from "./AnalyticsBody";
import "./analytics.css";

// The page's own two typefaces, loaded the Next way and handed to its stylesheet as variables.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/**
 * SAP Analytics Cloud, from the supplied page: the body only. The site's own header and footer wrap it, untouched.
 * Everything below is scoped to one class, so none of this page's CSS reaches the rest of the site.
 */
export function AnalyticsPage() {
  return (
    <div className={`an ${jakarta.variable} ${manrope.variable}`}>
      <main id="top">
        <AnalyticsBody />
      </main>
      {/* The standalone page carried this line in its own footer; the site footer is left alone, so it sits here. */}
      <div className="legal">
        <div className="in">
          <p>SAP, SAP Analytics Cloud, SAP Business Data Cloud, SAP Cloud ERP and Joule are trademarks of SAP SE. Excel is a trademark of Microsoft. Screens shown are illustrations.</p>
        </div>
      </div>
    </div>
  );
}
