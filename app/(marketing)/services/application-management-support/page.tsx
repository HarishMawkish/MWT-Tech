import type { Metadata } from "next";
import { SupportPage } from "@/components/sap-support/SupportPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Application Management Support",
  description:
    "SAP runs the cloud system for you: servers, backups, security and upgrades. What SAP doesn't do is know your business. When a payment run misses a supplier, a bank file doesn't reach the bank, or finance needs a new approval rule, you need people who know your setup. That's our application management service, from Colombo, in your time zone.",
};

export default function ApplicationManagementSupportPage() {
  return <SupportPage />;
}
