import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ReleasePage } from "@/components/sap-release/ReleasePage";
import { sapLd, sapMetadata } from "@/lib/sap-pages";

const SLUG = "release-and-upgrade-management";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = sapMetadata(SLUG);

export default function ReleaseAndUpgradeManagementPage() {
  return (
    <>
      <JsonLd data={sapLd(SLUG)} />
      <ReleasePage />
    </>
  );
}
