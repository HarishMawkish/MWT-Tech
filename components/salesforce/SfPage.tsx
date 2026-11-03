import type { CSSProperties, ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { SfMotion } from "./SfMotion";
import { SF_LEGAL } from "./data";
import "./salesforce.css";

// The same two typefaces as the SAP and Swyftflo pages, so the families read as one.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/**
 * Wraps every Salesforce page. The site's own header and footer sit around it, untouched.
 *
 * `accent` is the one colour a page carries, used by the five main cloud pages so each has its own temperature while
 * the type, spacing and structure stay identical. Left out, the stylesheet falls back to the family green, which is
 * what the hub and the supporting product pages use.
 */
export function SfPage({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <div
      className={`sf ${accent ? "cloud " : ""}${jakarta.variable} ${manrope.variable}`}
      style={accent ? ({ "--a": accent } as CSSProperties) : undefined}
    >
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
