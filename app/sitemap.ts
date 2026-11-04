import type { MetadataRoute } from "next";
import { salesforcePages, sfPath } from "@/lib/salesforce-pages";
import { insights, services } from "@/lib/site-data";
import { sapPages, sapPath } from "@/lib/sap-pages";
import { swyftfloPages, swPath } from "@/lib/swyftflo-pages";
import { odooPages, odPath } from "@/lib/odoo-pages";
import { mihcmPages, mhPath } from "@/lib/mihcm-pages";
import { anthropicPages, anPath } from "@/lib/anthropic-pages";
import { databricksPages, dbPath } from "@/lib/databricks-pages";
import { CLOUD_HUB_PATH, cloudHub, cloudPages, cloudPath } from "@/lib/cloud-pages";
import { absoluteUrl } from "@/lib/seo";

// Every public page, with the SAP pages listed first and weighted highest. Search engines read this to find pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const SAP_HUB = "/services/sap-solutions";
  const entry = (
    path: string,
    priority: number,
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
    lastModified?: string,
  ) => ({ url: absoluteUrl(path), priority, changeFrequency, ...(lastModified ? { lastModified } : {}) });

  return [
    entry("/", 1, "weekly"),
    entry(SAP_HUB, 0.95, "weekly"),
    ...sapPages.map((p) => entry(sapPath(p.slug), 0.85, "monthly", p.updated)),
    // Swyftflo: the suite page, then one page per product
    ...swyftfloPages.map((p) => entry(swPath(p.slug), p.slug ? 0.8 : 0.9, "monthly", p.updated)),
    entry("/services", 0.9, "weekly"),
    // the other services, the SAP hub being listed above
    ...services.filter((s) => s.slug !== "sap-solutions" && s.slug !== "salesforce-solutions" && s.slug !== "odoo-implementation").map((s) => entry(`/services/${s.slug}`, 0.7, "monthly")),
    // Salesforce: the hub, then one page per product
    ...salesforcePages.map((p) => entry(sfPath(p.slug), p.slug ? 0.7 : 0.9, "monthly", p.updated)),
    // Odoo: the hub, then one page per family and one per supporting topic
    ...odooPages.map((p) => entry(odPath(p.slug), p.slug ? 0.7 : 0.9, "monthly", p.updated)),
    // MiHCM: the hub, then one page per edition and one per part of MiHCM Enterprise
    ...mihcmPages.map((p) => entry(mhPath(p.slug), p.slug ? 0.7 : 0.8, "monthly", p.updated)),
    // Anthropic: the hub, then one page per product and supporting topic
    ...anthropicPages.map((p) => entry(anPath(p.slug), p.slug ? 0.7 : 0.8, "monthly", p.updated)),
    // Cloud Infrastructure: the hub, then one page per service
    entry(CLOUD_HUB_PATH, 0.85, "weekly", cloudHub.updated),
    ...cloudPages.map((p) => entry(cloudPath(p.slug), 0.75, "monthly", cloudHub.updated)),
    // Databricks: the hub, then one page per platform product and supporting topic
    ...databricksPages.map((p) => entry(dbPath(p.slug), p.slug ? 0.7 : 0.85, "monthly", p.updated)),
    entry("/industries", 0.7, "monthly"),
    entry("/insights", 0.6, "weekly"),
    ...insights.map((p) => entry(`/insights/${p.slug}`, 0.5, "monthly")),
    entry("/about", 0.6, "yearly"),
    entry("/contact", 0.7, "yearly"),
    entry("/careers", 0.6, "weekly"),
    entry("/copyright", 0.4, "yearly"),
    // Only the public Clients list. Case studies are gated and have no URLs of their own: never list them here.
    entry("/clients", 0.6, "monthly"),
  ];
}
