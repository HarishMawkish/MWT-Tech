import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageWatermark } from "@/components/PageWatermark";
import { SiteLoader } from "@/components/SiteLoader";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { DEFAULT_OG_IMAGE, organizationLd, robotsDefault, siteUrl, websiteLd } from "@/lib/seo";

// Montserrat — main/heading text. Clean geometric letterforms.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Inter — sub text / small text / body copy. Paired with Montserrat.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  src: [{ path: "../../public/fonts/JetBrainsMono-Variable.ttf", style: "normal" }],
  display: "swap",
});

export const metadata: Metadata = {
  // Relative addresses in every page's metadata (canonical, share images) are resolved against this.
  metadataBase: new URL(siteUrl),
  applicationName: "Mawkish Technologies",
  authors: [{ name: "Mawkish Technologies", url: siteUrl }],
  creator: "Mawkish Technologies",
  robots: robotsDefault,
  formatDetection: { telephone: false, email: false, address: false },
  title: {
    default: "Mawkish Technologies | Business Transformation Partner",
    template: "%s | Mawkish Technologies",
  },
  description:
    "Mawkish Technologies helps organizations modernize operations and accelerate growth through SAP, Salesforce, Odoo, AI, and enterprise technology.",
  keywords: [
    "Mawkish Technologies",
    "SAP implementation",
    "Salesforce partner",
    "Odoo implementation",
    "business transformation",
    "digital transformation consulting",
  ],
  openGraph: {
    title: "Mawkish Technologies | Business Transformation Partner",
    description:
      "Technology that creates real business outcomes — SAP, Salesforce, Odoo, and enterprise transformation.",
    siteName: "Mawkish Technologies",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Mawkish Technologies: technology that creates real business outcomes" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
    title: "Mawkish Technologies | Business Transformation Partner",
    description:
      "Technology that creates real business outcomes — SAP, Salesforce, Odoo, and enterprise transformation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationLd, websiteLd]} />
        <Analytics />
        {/* Splash sits above absolutely everything, including the navbar,
            and fades out once the page is ready — the navbar is already
            rendered underneath it the whole time, so the fade genuinely
            reveals it rather than the navbar popping in afterwards. */}
        <SiteLoader />
        <div aria-hidden="true" className="mw-scanline" />
        <PageWatermark />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}