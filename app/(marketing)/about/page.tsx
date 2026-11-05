import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

const description =
  "Mawkish Technologies is an enterprise technology consulting firm in Colombo: one accountable partner for enterprise applications.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
