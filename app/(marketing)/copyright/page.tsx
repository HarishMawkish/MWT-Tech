import type { Metadata } from "next";
import { CopyrightPage } from "@/components/copyright/CopyrightPage";
import { brand, DEFAULT_OG_IMAGE } from "@/lib/seo";

const description =
  "How Mawkish Technologies content is protected by copyright, what you may and may not do with it, and how to ask for permission.";

export const metadata: Metadata = {
  title: "Copyright and Content Use",
  description,
  alternates: { canonical: "/copyright" },
  openGraph: {
    type: "website",
    url: "/copyright",
    siteName: brand.name,
    locale: "en_US",
    title: `Copyright and Content Use | ${brand.name}`,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: brand.name }],
  },
};

export default function CopyrightRoute() {
  return <CopyrightPage />;
}
