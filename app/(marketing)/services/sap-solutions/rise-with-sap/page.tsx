import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RisePage } from "@/components/sap-rise/RisePage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "rise-with-sap";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function RiseWithSapPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <RisePage />
    </>
  );
}
