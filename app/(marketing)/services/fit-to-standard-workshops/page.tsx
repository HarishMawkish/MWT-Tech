import type { Metadata } from "next";
import { FitPage } from "@/components/sap-fit/FitPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Fit-to-Standard Workshops",
  description:
    "We show your team SAP's ready-made processes working in a live system, they tell us what really has to be different, and only those gaps get built.",
};

export default function FitToStandardWorkshopsPage() {
  return <FitPage />;
}
