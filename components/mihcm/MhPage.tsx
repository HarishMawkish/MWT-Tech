import type { ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { MhMotion } from "./MhMotion";
import { MH_LEGAL } from "./data";
import "./mihcm.css";

// The same two typefaces as the SAP and Swyftflo pages, so the families read as one.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/** Wraps every MiHCM page. The site's own header and footer sit around it, untouched. */
export function MhPage({ children }: { children: ReactNode }) {
  return (
    <div className={`mh ${jakarta.variable} ${manrope.variable}`}>
      <MhMotion />
      {children}
      <div className="legal">
        <div className="in">
          <p>{MH_LEGAL}</p>
        </div>
      </div>
    </div>
  );
}
