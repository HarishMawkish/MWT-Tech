import type { Metadata } from "next";
import { PrintingPage } from "@/components/industries/printing/PrintingPage";
import { CanaryNote } from "@/components/CanaryNote";

const description =
  "How SAP runs a printing and packaging converter, from artwork to dispatch: estimating, planning, production, quality, warehouse and finance on one SAP core.";

export const metadata: Metadata = {
  title: "Printing and Packaging on SAP",
  description,
  alternates: { canonical: "/industries/printing-and-packaging" },
};

export default function Page() {
  return (
    <>
      <PrintingPage />
      <CanaryNote />
    </>
  );
}
