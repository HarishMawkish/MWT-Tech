import type { ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { SwMotion } from "./SwMotion";
import { SW_LEGAL } from "./data";
import "./swyftflo.css";

// The same two typefaces as the SAP pages, so Swyftflo reads as part of the same family.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/** Wraps every Swyftflo page. The site's own header and footer sit around it, untouched. */
export function SwPage({ children }: { children: ReactNode }) {
  return (
    <div className={`sw ${jakarta.variable} ${manrope.variable}`}>
      <SwMotion />
      {children}
      <div className="legal">
        <div className="in">
          <p>{SW_LEGAL}</p>
        </div>
      </div>
    </div>
  );
}
