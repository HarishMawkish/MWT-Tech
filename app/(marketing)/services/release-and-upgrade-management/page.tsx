import type { Metadata } from "next";
import { ReleasePage } from "@/components/sap-release/ReleasePage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Release & Upgrade Management",
  description:
    "SAP upgrades SAP Cloud ERP twice a year, on SAP's schedule, for every customer at once. You can't skip a release, and you wouldn't want to: each one brings new features and AI. But each one also changes screens, roles and processes your people rely on. We plan every upgrade, test what matters to your business, and switch on the new features worth having.",
};

export default function ReleaseAndUpgradeManagementPage() {
  return <ReleasePage />;
}
