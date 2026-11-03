import type { CSSProperties, ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { DbMotion } from "./DbMotion";
import { DB_LEGAL } from "./data";
import "./databricks.css";

// The same two typefaces as the SAP, Salesforce and Odoo pages, so the families read as one site.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

/**
 * Wraps every Databricks page. The site's own header and footer sit around it, untouched. `accent` is the one colour
 * that page carries: it tints the eyebrows, the rules, the diagrams and the closing band, so each page in the section
 * has its own temperature while the type, spacing and structure stay the same.
 */
export function DbPage({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <div className={`db ${jakarta.variable} ${manrope.variable}`} style={{ "--a": accent } as CSSProperties}>
      <DbMotion />
      {children}
      <div className="legal">
        <div className="in">
          <p>{DB_LEGAL}</p>
        </div>
      </div>
    </div>
  );
}
