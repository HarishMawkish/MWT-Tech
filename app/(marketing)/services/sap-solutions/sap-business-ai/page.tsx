import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BaiPage } from "@/components/sap-bai/BaiPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "sap-business-ai";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function SapBusinessAiPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <BaiPage />
    </>
  );
}
