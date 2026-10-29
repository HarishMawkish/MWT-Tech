import type { Metadata } from "next";
import { LicensingPage } from "@/components/sap-licensing/LicensingPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Licensing & Commercial Advisory",
  description:
    "SAP Cloud ERP is licensed per user, per month, by what each person does in the system. We size your licence from your actual roles and check every entitlement, so the contract fits the business you are and the one you're becoming.",
};

export default function LicensingAndCommercialAdvisoryPage() {
  return <LicensingPage />;
}
