import type { ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { SfMotion } from "./SfMotion";
import { SF_LEGAL } from "./data";
import "./salesforce.css";

// The same two typefaces as the SAP and Swyftflo pages, so the families read as one.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/** Wraps every Salesforce page. The site's own header and footer sit around it, untouched. */
export function SfPage({ children }: { children: ReactNode }) {
  return (
    <div className={`sf ${jakarta.variable} ${manrope.variable}`}>
      <SfMotion />
      {children}
      <div className="legal">
        <div className="in">
          <p>{SF_LEGAL}</p>
        </div>
      </div>
    </div>
  );
}
