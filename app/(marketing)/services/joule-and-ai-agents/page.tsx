import type { Metadata } from "next";
import { JoulePage } from "@/components/sap-joule/JoulePage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Joule & AI Agents",
  description:
    "Joule is SAP's AI assistant, built into SAP Cloud ERP. Ask it a question in plain English and it finds the answer in your live data. Ask it to act and it opens the right app with the fields filled in. SAP's AI agents go further: they take on whole tasks, such as clearing open items or fixing blocked orders, and hand you only the decisions. We help you put both to work, safely.",
};

export default function JouleAndAiAgentsPage() {
  return <JoulePage />;
}
