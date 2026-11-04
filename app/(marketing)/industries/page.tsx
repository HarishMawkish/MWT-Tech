import type { Metadata } from "next";
import { IndustriesPage } from "@/components/industries/IndustriesPage";
import { CanaryNote } from "@/components/CanaryNote";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Mawkish Technologies starts with your industry, then picks the platform: step-by-step SAP and Salesforce guides for nine industries across Sri Lanka and India.",
};

export default function Page() {
  return (
    <>
      <IndustriesPage />
      <CanaryNote id="industries" />
    </>
  );
}
