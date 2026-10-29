import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { GrowPage } from "@/components/sap-grow/GrowPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "grow-with-sap";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function GrowWithSapPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <GrowPage />
    </>
  );
}
