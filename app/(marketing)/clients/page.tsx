import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { ClientsPage } from "@/components/clients/ClientsPage";
import { brand, DEFAULT_OG_IMAGE } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-pjs", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const description =
  "Companies in Sri Lanka and India that run on SAP and Salesforce implementations delivered by Mawkish Technologies.";

export const metadata: Metadata = {
  title: "Our Clients",
  description,
  alternates: { canonical: "/clients" },
  openGraph: {
    type: "website",
    url: "/clients",
    siteName: brand.name,
    locale: "en_US",
    title: `Our Clients | ${brand.name}`,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: brand.name }],
  },
};

export default function ClientsRoute() {
  return <ClientsPage fontClass={`${jakarta.variable} ${manrope.variable}`} />;
}
