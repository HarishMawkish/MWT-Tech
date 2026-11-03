import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { CareersBody } from "./CareersBody";
import "./careers.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/** Careers, from the supplied page: the body only. The site's own header, copyright notice and footer wrap it, untouched. */
export function CareersPage() {
  return (
    <div className={`ca ${jakarta.variable} ${manrope.variable}`}>
      <CareersBody />
    </div>
  );
}
