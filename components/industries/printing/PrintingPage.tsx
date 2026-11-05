import { PrintingBody } from "./PrintingBody";
import { PrintingInteractions } from "./PrintingInteractions";
import "./printing.css";

/**
 * Printing and Packaging on SAP, from the supplied page: the body only. The site's own header, copyright
 * notice and footer wrap it, untouched. The page names its two typefaces and loads them the way it did
 * originally, so its illustrations (which name the fonts directly) draw exactly as they were made.
 */
export function PrintingPage() {
  return (
    <div className="pp-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
        precedence="default"
      />
      <PrintingBody />
      <PrintingInteractions />
    </div>
  );
}
