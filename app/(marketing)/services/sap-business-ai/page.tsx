import type { Metadata } from "next";
import { BaiPage } from "@/components/sap-bai/BaiPage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "SAP Business AI",
  description:
    "SAP builds AI straight into SAP Cloud ERP: it reads purchase orders and payment advices, predicts late deliveries, explains errors in plain language and summarises your reports. Because it runs on your own processes and data, it gives useful answers, not generic ones. We help you find where AI pays off for your business, switch it on, and prove the result.",
};

export default function SapBusinessAiPage() {
  return <BaiPage />;
}
