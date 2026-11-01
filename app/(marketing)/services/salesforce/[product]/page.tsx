import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ProductBody } from "@/components/salesforce/ProductBody";
import { SfPage } from "@/components/salesforce/SfPage";
import { contents } from "@/components/salesforce/content";
import { products, type ProductSlug } from "@/components/salesforce/data";
import { salesforceLd, salesforceMetadata } from "@/lib/salesforce-pages";

// One route for every Salesforce product page. Only the slugs in the product list exist; anything else is a 404.
export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

const isSlug = (s: string): s is ProductSlug => products.some((p) => p.slug === s);

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  return isSlug(product) ? salesforceMetadata(product) : {};
}

export default async function SalesforceProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  if (!isSlug(product)) notFound();
  return (
    <>
      <JsonLd data={salesforceLd(product)} />
      <SfPage>
        <ProductBody c={contents[product]} />
      </SfPage>
    </>
  );
}
