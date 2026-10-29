import type { Metadata } from "next";
import { GroupRepPage } from "@/components/sap-grouprep/GroupRepPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Group Reporting & Consolidation",
  description:
    "For most groups, consolidation still means collecting trial balances by email, chasing intercompany differences, and rebuilding a spreadsheet that only one person understands. SAP Cloud ERP includes group reporting in the same system as your accounting: SAP companies flow in directly, other subsidiaries load their numbers, and the system matches, translates and eliminates. We set it up for your group structure and standards.",
};

export default function GroupReportingAndConsolidationPage() {
  return <GroupRepPage />;
}
