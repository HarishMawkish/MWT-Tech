import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { AboutBody } from "./AboutBody";
import "./about.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/** About: the body only. The site's own header, copyright notice and footer wrap it, untouched. */
export function AboutPage() {
  return (
    <div className={`ab ${jakarta.variable} ${manrope.variable}`}>
      <AboutBody />
    </div>
  );
}
