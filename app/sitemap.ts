import type { MetadataRoute } from "next";
import { clouds, cloudHref } from "@/components/salesforce/clouds";
import { insights, services } from "@/lib/site-data";
import { sapPages, sapPath } from "@/lib/sap-pages";
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
    entry("/services", 0.9, "weekly"),
    // the other services, the SAP hub being listed above
    ...services.filter((s) => s.slug !== "sap-solutions").map((s) => entry(`/services/${s.slug}`, 0.7, "monthly")),
    ...clouds.map((c) => entry(cloudHref(c.slug), 0.6, "monthly")),
    entry("/industries", 0.7, "monthly"),
    entry("/insights", 0.6, "weekly"),
    ...insights.map((p) => entry(`/insights/${p.slug}`, 0.5, "monthly")),
    entry("/about", 0.6, "yearly"),
    entry("/contact", 0.7, "yearly"),
  ];
}
