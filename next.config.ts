/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // @sanity/workbench ships broken, un-transpiled TypeScript and is only
      // used by an optional Sanity feature we don't use — see sanity/workbench-stub.ts.
      "@sanity/workbench": "./sanity/workbench-stub.ts",
    },
  },
  // Do not advertise the framework in every response.
  poweredByHeader: false,
  // The SAP pages used to sit directly under /services. Anything that still links to the old address
  // (search results, bookmarks, other sites) is sent to the new one with a permanent redirect.
  async redirects() {
    const moved = [
      "grow-with-sap", "rise-with-sap", "cloud-erp-readiness-assessment", "fit-to-standard-workshops",
      "licensing-and-commercial-advisory", "two-tier-erp-for-subsidiaries", "cloud-erp-implementation",
      "move-from-ecc-on-premise", "rollouts-and-localisation", "sap-btp-extensions-and-apps",
      "process-automation-with-sap-build", "sap-and-non-sap-integration", "application-management-support",
      "release-and-upgrade-management", "test-automation", "security-roles-and-authorisations",
      "sap-business-ai", "joule-and-ai-agents", "sap-business-data-cloud", "sap-analytics-cloud",
      "group-reporting-and-consolidation",
    ];
    return moved.map((slug) => ({
      source: `/services/${slug}`,
      destination: `/services/sap-solutions/${slug}`,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zql0rfjwszzixew9.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      // Or to allow all Vercel Storage blobs:
      // {
      //   protocol: 'https',
      //   hostname: '*.public.blob.vercel-storage.com',
      // },
    ],
  },
};

module.exports = nextConfig; // Use `export default nextConfig;` if using ES modules (.mjs)