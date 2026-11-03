// What the Industries menu in the header shows, from the supplied Industries page.
export type MenuIndustry = { k: string; n: string; p: ("sap" | "sf")[]; promise: string; sap: string; sf: string; icon: string };

export const industriesMenu: MenuIndustry[] = [
  {
    "k": "groups",
    "n": "Diversified Groups",
    "p": [
      "sap"
    ],
    "promise": "Many businesses, one connected core",
    "sap": "Group finance, intercompany and consolidation",
    "sf": "",
    "icon": "<path d=\"M4 20V8l6-3v15M10 20V4l8 4v12M2 20h20M13 10h2M13 13h2M13 16h2M6 11h2M6 14h2\"/>"
  },
  {
    "k": "food",
    "n": "Food, Beverage and Tea",
    "p": [
      "sap",
      "sf"
    ],
    "promise": "Batch production and exports to global markets",
    "sap": "Recipes, batches, quality and export sales",
    "sf": "Export buyers, key accounts and retail visits",
    "icon": "<path d=\"M7 3h10l-1 4H8L7 3zM8 7l1 13h6l1-13M9.5 12h5\"/>"
  },
  {
    "k": "industrial",
    "n": "Industrial Manufacturing",
    "p": [
      "sap"
    ],
    "promise": "Complex plants and multi-entity operations",
    "sap": "Planning, production, maintenance and multi-plant",
    "sf": "",
    "icon": "<path d=\"M3 20V10l5 3V10l5 3V6h4l1 14H3zM7 17h2M12 17h2\"/>"
  },
  {
    "k": "consumer",
    "n": "Consumer Brands and Wellness",
    "p": [
      "sap",
      "sf"
    ],
    "promise": "From factory to customer in one view",
    "sap": "Batches, compliance, trade terms and planning",
    "sf": "Consumer view, loyalty, campaigns and care",
    "icon": "<path d=\"M6 8h12l-1 12H7L6 8zM9 8a3 3 0 0 1 6 0\"/>"
  },
  {
    "k": "tiles",
    "n": "Tiles and Building Materials Retail",
    "p": [
      "sap",
      "sf"
    ],
    "promise": "From kiln to customer floor",
    "sap": "Shade by batch, units of measure, showrooms",
    "sf": "Showroom leads, projects and quotes",
    "icon": "<path d=\"M4 9h16v11H4zM3 9l2-5h14l2 5M9 20v-5h6v5M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0\"/>"
  },
  {
    "k": "auto",
    "n": "Automotive",
    "p": [
      "sap",
      "sf"
    ],
    "promise": "Vehicle import, parts and service",
    "sap": "Vehicles, parts, workshops and warranty",
    "sf": "Drivers, test drives, dealers and service",
    "icon": "<path d=\"M4 16v-4l2-5h12l2 5v4zM4 16v2h3v-2M17 16v2h3v-2M7 13h1M16 13h1\"/>"
  },
  {
    "k": "oil",
    "n": "Oil and Gas",
    "p": [
      "sap"
    ],
    "promise": "Downstream distribution and assets",
    "sap": "Hydrocarbon stock, terminals and assets",
    "sf": "",
    "icon": "<path d=\"M5 20V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15M3 20h13M7 7h5v4H7zM14 9h2l2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3\"/>"
  },
  {
    "k": "print",
    "n": "Printing and Packaging",
    "p": [
      "sap"
    ],
    "promise": "Make-to-order, every job different",
    "sap": "Configured jobs, production and costing",
    "sf": "",
    "icon": "<path d=\"M7 8V3h10v5M7 17H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7h-3M7 14h10v7H7z\"/>"
  },
  {
    "k": "poultry",
    "n": "Poultry and Livestock",
    "p": [
      "sap"
    ],
    "promise": "Breeder farm to processing on one core",
    "sap": "Feed, flocks, processing and catch weight",
    "sf": "",
    "icon": "<path d=\"M12 3c-3.5 0-6 5-6 10a6 6 0 0 0 12 0c0-5-2.5-10-6-10z\"/>"
  }
];
