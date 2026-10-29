import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AiCatalogPage } from "@/components/sap-aicatalog/AiCatalogPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "ai-catalog";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function AiCatalogRoutePage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <AiCatalogPage />
    </>
  );
}
