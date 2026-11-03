import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Body } from "@/components/databricks/Body";
import { DbPage } from "@/components/databricks/DbPage";
import { ALL_SLUGS, bySlug, isDbSlug } from "@/components/databricks/data";
import { databricksLd, databricksMetadata } from "@/lib/databricks-pages";

// One route for every Databricks page. Only the slugs in the product list exist; anything else is a 404.
export function generateStaticParams() {
  return ALL_SLUGS.map((product) => ({ product }));
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  return isDbSlug(product) ? databricksMetadata(product) : {};
}

export default async function DatabricksProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  if (!isDbSlug(product)) notFound();
  return (
    <>
      <JsonLd data={databricksLd(product)} />
      <DbPage accent={bySlug(product)!.accent}>
        <Body slug={product} />
      </DbPage>
    </>
  );
}
