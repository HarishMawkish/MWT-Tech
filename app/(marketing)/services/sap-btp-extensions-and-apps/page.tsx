import type { Metadata } from "next";
import { BtpPage } from "@/components/sap-btp/BtpPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "SAP BTP Extensions & Apps",
  description:
    "SAP Cloud ERP runs your standard processes. The things that set your business apart, such as a field app, a dealer portal or a special approval, are built around it: small changes inside the system, and complete apps on SAP's Business Technology Platform. Every extension uses SAP's released interfaces, so the twice-yearly upgrades never break what you've built.",
};

export default function SapBtpExtensionsAndAppsPage() {
  return <BtpPage />;
}
