import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FitPage } from "@/components/sap-fit/FitPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "fit-to-standard-workshops";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function FitToStandardWorkshopsPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <FitPage />
    </>
  );
}
