import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { JouleBody } from "./JouleBody";
import "./joule.css";

// The page's own two typefaces, loaded the Next way and handed to its stylesheet as variables.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/**
 * Joule & AI Agents, from the supplied page: the body only. The site's own header and footer wrap it, untouched.
 * Everything below is scoped to one class, so none of this page's CSS reaches the rest of the site.
 */
export function JoulePage() {
  return (
    <div className={`jl ${jakarta.variable} ${manrope.variable}`}>
      <main id="top">
        <JouleBody />
      </main>
      {/* The standalone page carried this line in its own footer; the site footer is left alone, so it sits here. */}
      <div className="legal">
        <div className="in">
          <p>SAP, SAP Cloud ERP, Joule and Joule Studio are trademarks of SAP SE. Salesforce is a trademark of Salesforce, Inc. Screens shown are illustrations.</p>
        </div>
      </div>
    </div>
  );
}
