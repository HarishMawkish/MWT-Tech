import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BtpPage } from "@/components/sap-btp/BtpPage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "sap-btp-extensions-and-apps";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function SapBtpExtensionsAndAppsPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <BtpPage />
    </>
  );
}
