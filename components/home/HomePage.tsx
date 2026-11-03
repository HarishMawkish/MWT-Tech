import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { HomeBody } from "./HomeBody";
import "./home.css";

// The same two typefaces the SAP pages load, so the homepage sits in the
// same typographic system rather than next to it.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/**
 * Homepage body. Everything is scoped under .hp, so none of this page's CSS
 * reaches the rest of the site. The site header, footer, News & Events and
 * closing CTA band wrap it and are left alone.
 */
export function HomePage() {
  return (
    <div className={`hp ${jakarta.variable} ${manrope.variable}`}>
      <HomeBody />
    </div>
  );
}
