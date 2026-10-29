import type { Metadata } from "next";
import { MovePage } from "@/components/sap-move/MovePage";

// A dedicated route, outside the shared /services/[slug] template.
export const metadata: Metadata = {
  title: "Move from ECC & On-Premise",
  description:
    "Whether you're on SAP ECC or an older on-premise SAP S/4HANA release, there are four ways into SAP's cloud ERP. We help you pick the right one, prepare your system for it, and run the move with rehearsed, measured downtime.",
};

export default function MoveFromEccOnPremisePage() {
  return <MovePage />;
}
