import type { ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { AnMotion } from "./AnMotion";
import { AN_LEGAL } from "./data";
import "./anthropic.css";

// The same two typefaces as the SAP and Swyftflo pages, so the families read as one.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/** Wraps every Anthropic page. The site's own header and footer sit around it, untouched. */
export function AnPage({ children }: { children: ReactNode }) {
  return (
    <div className={`an ${jakarta.variable} ${manrope.variable}`}>
      <AnMotion />
      {children}
      <div className="legal">
        <div className="in">
          <p>{AN_LEGAL}</p>
        </div>
      </div>
    </div>
  );
}
