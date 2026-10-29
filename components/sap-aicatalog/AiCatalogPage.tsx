import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { AiCatalogApp } from "./AiCatalogApp";
import { AiCatalogBody } from "./AiCatalogBody";
import "./aicatalog.css";

// The page's own two typefaces, loaded the Next way and handed to its stylesheet as variables.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/**
 * AI Catalog, from the supplied page: the body only. The site's own header and footer wrap it, untouched.
 * Everything below is scoped to one class, so none of this page's CSS reaches the rest of the site.
 */
export function AiCatalogPage() {
  return (
    <div className={`ac ${jakarta.variable} ${manrope.variable}`}>
      <main id="top">
        <AiCatalogApp />
        <AiCatalogBody />
      </main>
      {/* The standalone page carried this line in its own footer; the site footer is left alone, so it sits here. */}
      <div className="legal">
        <div className="in">
          <p>SAP, SAP Cloud ERP, Joule, Joule Studio and SAP Document AI are trademarks of SAP SE. This catalog is Mawkish's guide and is not an official SAP publication.</p>
        </div>
      </div>
    </div>
  );
}
