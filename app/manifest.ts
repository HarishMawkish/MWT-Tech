import type { MetadataRoute } from "next";
import { brand } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: "Mawkish",
    description: "Technology that creates real business outcomes: SAP, Salesforce, Odoo and enterprise transformation.",
    start_url: "/",
    display: "browser",
    background_color: "#020604",
    theme_color: "#114232",
    icons: [{ src: "/images/brand/logo-mark.png", type: "image/png" }],
  };
}
