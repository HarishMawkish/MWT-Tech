import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { DataMigPage } from "@/components/sap-datamig/DataMigPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "data-migration";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function DataMigrationPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <DataMigPage />
    </>
  );
}
