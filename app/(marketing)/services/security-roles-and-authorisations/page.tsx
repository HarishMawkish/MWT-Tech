import type { Metadata } from "next";
import { SecurityPage } from "@/components/sap-security/SecurityPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Security, Roles & Authorisations",
  description:
    "Who can post a journal, release a payment or change a supplier's bank account? In SAP Cloud ERP that's decided by business roles. Design them well and your auditors are happy, your people can do their jobs, and you don't pay for licences nobody needs. We design, build and look after your roles, from the first workshop to every upgrade after go-live.",
};

export default function SecurityRolesAndAuthorisationsPage() {
  return <SecurityPage />;
}
