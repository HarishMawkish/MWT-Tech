import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { OdPage } from "@/components/odoo/OdPage";
import { ProductBody } from "@/components/odoo/ProductBody";
import { contents } from "@/components/odoo/content";
import { products, type ProductSlug } from "@/components/odoo/data";
import { odooLd, odooMetadata } from "@/lib/odoo-pages";
import { CanaryNote } from "@/components/CanaryNote";

// One route for every Odoo page. Only the slugs in the product list exist; anything else is a 404.
export function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

const isSlug = (s: string): s is ProductSlug => products.some((p) => p.slug === s);

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  return isSlug(product) ? odooMetadata(product) : {};
}

export default async function OdooProductPage({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  if (!isSlug(product)) notFound();
  return (
    <>
      <JsonLd data={odooLd(product)} />
      <OdPage>
        <ProductBody c={contents[product]} />
      </OdPage>
    <CanaryNote id="odoo" />
    </>
  );
}
