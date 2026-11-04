import type { Metadata } from "next";
import { CareersPage } from "@/components/careers/CareersPage";
import { brand, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { CanaryNote } from "@/components/CanaryNote";

const description =
  "Join Mawkish Technologies. Open roles across SAP, Salesforce, AWS, sales and marketing in Colombo, with AI on every task and mentors from day one.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    url: "/careers",
    siteName: brand.name,
    locale: "en_US",
    title: `Careers | ${brand.name}`,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: brand.name }],
  },
};

export default function CareersRoute() {
  return (
    <>
      <CareersPage />
      <CanaryNote />
    </>
  );
}
