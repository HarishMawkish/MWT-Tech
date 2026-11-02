import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { CopyrightBody } from "./CopyrightBody";
import { CopyrightSpy } from "./CopyrightSpy";
import "./copyright.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/** Copyright and Content Use, from the supplied page: the body only. The site's own header and footer wrap it, untouched. */
export function CopyrightPage() {
  return (
    <div className={`cr ${jakarta.variable} ${manrope.variable}`}>
      <div id="top">
        <CopyrightBody />
      </div>
      <CopyrightSpy />
    </div>
  );
}
