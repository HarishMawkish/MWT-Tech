// Industry guides, copied word for word from the supplied Industries page.
export type Platform = "sap" | "sf";
export type Guide = {
  intro: string[];
  ed: [string, string];
  ch: [string, string][];
  cap: [string, string[]][];
  prod: [string, string][];
  ai: string[];
  ext: string[];
  start: string[];
};
export type Industry = Guide & { k: string; n: string; p: string; c: string[]; pr: string[] };

export const ICON: Record<string, string> = {
  "groups": "<path d=\"M4 20V8l6-3v15M10 20V4l8 4v12M2 20h20M13 10h2M13 13h2M13 16h2M6 11h2M6 14h2\"/>",
  "food": "<path d=\"M7 3h10l-1 4H8L7 3zM8 7l1 13h6l1-13M9.5 12h5\"/>",
  "industrial": "<path d=\"M3 20V10l5 3V10l5 3V6h4l1 14H3zM7 17h2M12 17h2\"/>",
  "consumer": "<path d=\"M6 8h12l-1 12H7L6 8zM9 8a3 3 0 0 1 6 0\"/>",
  "tiles": "<path d=\"M4 9h16v11H4zM3 9l2-5h14l2 5M9 20v-5h6v5M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0\"/>",
  "auto": "<path d=\"M4 16v-4l2-5h12l2 5v4zM4 16v2h3v-2M17 16v2h3v-2M7 13h1M16 13h1\"/>",
  "oil": "<path d=\"M5 20V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15M3 20h13M7 7h5v4H7zM14 9h2l2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3\"/>",
  "print": "<path d=\"M7 8V3h10v5M7 17H4v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7h-3M7 14h10v7H7z\"/>",
  "poultry": "<path d=\"M12 3c-3.5 0-6 5-6 10a6 6 0 0 0 12 0c0-5-2.5-10-6-10z\"/>"
};

export const LINES: Record<Platform, Record<string, string>> = {
  "sap": {
    "groups": "Group finance, intercompany and consolidation",
    "food": "Recipes, batches, quality and export sales",
    "industrial": "Planning, production, maintenance and multi-plant",
    "consumer": "Batches, compliance, trade terms and planning",
    "tiles": "Shade by batch, units of measure, showrooms",
    "auto": "Vehicles, parts, workshops and warranty",
    "oil": "Hydrocarbon stock, terminals and assets",
    "print": "Configured jobs, production and costing",
    "poultry": "Feed, flocks, processing and catch weight"
  },
  "sf": {
    "food": "Export buyers, key accounts and retail visits",
    "consumer": "Consumer view, loyalty, campaigns and care",
    "tiles": "Showroom leads, projects and quotes",
    "auto": "Drivers, test drives, dealers and service"
  }
};

export const INDUSTRIES: Industry[] = [
  {
    "k": "groups",
    "n": "Diversified Groups",
    "p": "Many businesses, one connected core.",
    "c": [
      "Group finance and consolidation",
      "Shared services and intercompany",
      "Group-wide reporting and governance"
    ],
    "pr": [
      "SAP Cloud ERP Private",
      "Group Reporting",
      "SAP BTP"
    ],
    "intro": [
      "A diversified group runs plantations next to factories, retail next to services, and each business has its own rhythm. The board still needs one set of numbers, closed on time, with intercompany balances that agree.",
      "SAP gives a group one financial backbone. Every company keeps the processes its industry needs, while finance, controls and reporting follow one group design. Consolidation reads directly from the same ledger, so the close stops being a spreadsheet exercise."
    ],
    "ed": [
      "SAP Cloud ERP Private at the centre, SAP Cloud ERP for smaller companies",
      "Larger groups usually run the core businesses on SAP Cloud ERP Private, which carries the industry solutions each business needs. Smaller or newly acquired companies can run SAP Cloud ERP (two-tier) and still report into the same group close."
    ],
    "ch": [
      [
        "Slow group close",
        "Each company closes on its own system, and consolidation waits for spreadsheets and emails."
      ],
      [
        "Intercompany disputes",
        "Sales, loans and recharges between companies rarely agree on both sides at month end."
      ],
      [
        "Different charts of accounts",
        "Every business codes its costs differently, so group reports need manual mapping."
      ],
      [
        "Acquisitions and disposals",
        "New companies take months to integrate, and carve-outs are hard to separate cleanly."
      ],
      [
        "Weak central control",
        "Treasury, procurement and approvals happen company by company, with little group visibility."
      ],
      [
        "Board reporting by hand",
        "Management packs take days to build and are out of date when they are presented."
      ]
    ],
    "cap": [
      [
        "Group finance design",
        [
          "One group chart of accounts with local accounts mapped to it",
          "Company codes, segments and profit centres modelled for each business line",
          "Parallel ledgers for local GAAP (SLFRS) and group IFRS reporting",
          "Common master data for customers, suppliers and materials shared across companies"
        ]
      ],
      [
        "Intercompany",
        [
          "Intercompany sales and stock transfers posted on both sides automatically",
          "Intercompany matching and reconciliation with rules and auto-match",
          "Cross-company cost recharges and management fees",
          "Eliminations prepared from the same postings"
        ]
      ],
      [
        "Consolidation and close",
        [
          "SAP S/4HANA Group Reporting for currency translation, eliminations and consolidation of investments",
          "Data collection from non-SAP companies through templates and APIs",
          "Validation rules that catch errors before consolidation",
          "A close calendar with tasks, owners and status for every company"
        ]
      ],
      [
        "Shared services",
        [
          "Central accounts payable and receivable for several companies",
          "Central purchasing with group contracts that every company calls off",
          "Payment runs and bank communication from one place",
          "Approval workflows that follow group authority limits"
        ]
      ],
      [
        "Treasury and cash",
        [
          "Cash position and liquidity forecast across all group banks",
          "Bank account management and electronic bank statements",
          "Intercompany loans and in-house cash where needed",
          "Foreign exchange exposure visible by company and currency"
        ]
      ],
      [
        "Governance and control",
        [
          "Role design with segregation of duties across companies",
          "Audit trail on every posting and master data change",
          "Policy controls in workflow, not on paper",
          "One security model when new companies join"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP Private",
        "Core ERP for the main operating companies, with industry solutions"
      ],
      [
        "SAP Cloud ERP",
        "Two-tier ERP for smaller subsidiaries and acquisitions"
      ],
      [
        "SAP S/4HANA Group Reporting",
        "Consolidation and the group close"
      ],
      [
        "SAP Analytics Cloud",
        "Board packs, planning and group dashboards"
      ],
      [
        "SAP Business Data Cloud",
        "Group data products for analytics and AI"
      ],
      [
        "SAP Integration Suite",
        "Links group companies and non-SAP systems"
      ],
      [
        "SAP BTP",
        "Extensions and group-specific apps without changing the core"
      ]
    ],
    "ai": [
      "Joule answers finance questions in plain language, such as cash by company or open intercompany items",
      "Machine learning proposes matches for bank statements and intercompany items",
      "Embedded analytics show results by company, segment and business line in real time",
      "SAP Analytics Cloud runs group planning and what-if scenarios on the same data"
    ],
    "ext": [
      "A group design workshop that sets the chart of accounts, entities and close calendar before any build",
      "Templates that roll new companies onto the group design in weeks",
      "Connectors that bring non-SAP companies into Group Reporting",
      "Sri Lankan statutory reporting, tax and bank formats in every company"
    ],
    "start": [
      "Map your companies, ledgers and reporting lines",
      "Agree the group finance design and close calendar",
      "Roll out in waves, starting with the companies that matter most to the close"
    ]
  },
  {
    "k": "food",
    "n": "Food, Beverage and Tea",
    "p": "Batch production and exports to global markets.",
    "c": [
      "Recipe and batch management",
      "Quality and food safety compliance",
      "Export sales and logistics"
    ],
    "pr": [
      "SAP Cloud ERP",
      "SAP Cloud ERP Private",
      "SAP BTP"
    ],
    "intro": [
      "Food, beverage and tea businesses buy natural raw materials that vary from lot to lot, turn them into products with a shelf life, and sell them into markets with strict rules. Every batch has to be traceable from the field or auction to the customer.",
      "SAP runs this as process manufacturing. Recipes, batches, quality checks and shelf-life dates are part of the core, so traceability, costing and compliance come from the same transactions the plant already records."
    ],
    "ed": [
      "SAP Cloud ERP for most producers and exporters",
      "SAP Cloud ERP covers recipes, batches, quality, export sales and costing for most food, beverage and tea businesses. Catch weight, direct store delivery and finite scheduling with tank and shelf-life constraints are SAP Cloud ERP Private features, so they decide the edition when you need them."
    ],
    "ch": [
      [
        "Lot-to-lot variation",
        "Raw tea, grain or fruit differs by origin and season, which changes yield, quality and cost."
      ],
      [
        "Traceability on demand",
        "Buyers and regulators expect a recall trace in hours, not days."
      ],
      [
        "Shelf life and freshness",
        "Stock must ship in date order, and best-before dates must follow the ingredients."
      ],
      [
        "Margins by product and market",
        "Costs move with raw material prices, and margin by blend, pack and market is hard to see."
      ],
      [
        "Export paperwork",
        "Certificates, packing lists and bank documents are prepared outside the system."
      ],
      [
        "Separate blending and packing sites",
        "Bulk is made in one place and packed in another, often by a subcontractor."
      ]
    ],
    "cap": [
      [
        "Buy",
        [
          "Purchasing of batch-managed raw and packaging materials",
          "Each lot is a batch carrying grade, origin, estate or garden mark as characteristics",
          "Incoming inspection with tasting or lab results recorded against the lot",
          "Supplier rebates and contracts managed in the system"
        ]
      ],
      [
        "Make",
        [
          "Process orders driven by recipes for blending, cooking or bottling",
          "Batch derivation, so manufacturing and best-before dates flow from the ingredient lots",
          "Co-products and by-products such as dust, fannings or trims valued correctly",
          "Production in one plant and packing in another, including subcontract packing"
        ]
      ],
      [
        "Quality and food safety",
        [
          "Quality inspections in procurement, production and stock",
          "Results, usage decisions and certificates of analysis per batch",
          "Full batch where-used list for a recall in minutes",
          "First article inspection of packaging film and materials"
        ]
      ],
      [
        "Store and ship",
        [
          "Embedded warehouse management with handling units for export cartons and containers",
          "First-expiry-first-out picking and shelf-life checks",
          "Returnable pallets and crates tracked by customer",
          "Available-to-promise that respects stock, production and allocations"
        ]
      ],
      [
        "Sell and export",
        [
          "Quotations, contracts and orders in any currency",
          "Distributor rebates, free goods and promotions",
          "Down payments for advance-paid exports",
          "Customer and market pricing kept in one place"
        ]
      ],
      [
        "Cost and margin",
        [
          "Standard and actual cost per recipe and pack",
          "Event-based production costing as orders progress",
          "Margin analysis by customer, market, blend and pack size",
          "Raw material price changes reflected in cost quickly"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP",
        "Core ERP for manufacturing, quality, sales and finance"
      ],
      [
        "SAP Cloud ERP Private",
        "When catch weight, direct store delivery or finite scheduling is needed"
      ],
      [
        "SAP Integrated Business Planning",
        "Demand, supply and S&OP for seasonal and export demand"
      ],
      [
        "SAP Global Trade Services",
        "Export controls and customs where volumes justify it"
      ],
      [
        "SAP BTP",
        "Tea auction, export documents and local extensions"
      ],
      [
        "SAP Analytics Cloud",
        "Margin, yield and quality dashboards"
      ]
    ],
    "ai": [
      "Joule finds batches, orders and quality results through plain-language questions",
      "Predictive MRP and demand sensing help plan around seasonal peaks",
      "Embedded analytics show yield, waste and margin by product and market",
      "Document AI reads supplier invoices and customer purchase orders into the system"
    ],
    "ext": [
      "Tea auction catalogues and broker purchases connected to SAP purchasing and batches",
      "Export documents such as certificates of origin and packing lists generated from SAP data",
      "Letters of credit and collections handled through bank integration",
      "Sri Lankan levies, cess, VAT and SSCL built into the local design",
      "Our tea module on SAP BTP for the parts of tea trade the standard does not cover"
    ],
    "start": [
      "Map your flow from purchase to export, plant by plant",
      "Confirm the edition against catch weight, delivery and scheduling needs",
      "Run a fit-to-standard on recipes, batches and quality before design"
    ]
  },
  {
    "k": "industrial",
    "n": "Industrial Manufacturing",
    "p": "Complex plants and multi-entity operations.",
    "c": [
      "Production planning and MRP",
      "Plant maintenance and asset care",
      "Multi-entity rollouts and carve-outs"
    ],
    "pr": [
      "SAP Cloud ERP Private",
      "SAP Cloud ERP",
      "SAP Integration Suite"
    ],
    "intro": [
      "Industrial manufacturers juggle long bills of material, shared plants, engineered orders and machines that must keep running. Shortages and late changes ripple through every plant and every company in the group.",
      "SAP connects planning, production, quality, maintenance and finance on one model. Planners see real constraints, the shop floor works to the same orders, and finance sees the cost of every change as it happens."
    ],
    "ed": [
      "SAP Cloud ERP Private for complex plants, SAP Cloud ERP for focused operations",
      "Advanced planning with finite scheduling, deep plant integration and large multi-plant groups usually point to SAP Cloud ERP Private. Single-plant or standard make-to-stock and make-to-order businesses run well on SAP Cloud ERP."
    ],
    "ch": [
      [
        "Shortages and expediting",
        "Planners chase parts by phone because MRP results are not trusted."
      ],
      [
        "Engineering change",
        "Late design changes are not reflected in orders, stock or cost."
      ],
      [
        "Unplanned downtime",
        "Breakdowns stop lines, and maintenance history sits in notebooks."
      ],
      [
        "Many plants, many systems",
        "Each plant or company runs its own system, so stock and capacity are invisible across the group."
      ],
      [
        "Carve-outs and mergers",
        "Separating or combining businesses disrupts operations and reporting."
      ],
      [
        "Hundreds of interfaces",
        "MES, PLM, logistics and banking links break with every change."
      ]
    ],
    "cap": [
      [
        "Plan",
        [
          "MRP Live across plants with exception-based planner apps",
          "Demand-driven MRP to set buffers on critical parts",
          "Capacity planning and finite scheduling (advanced planning in SAP Cloud ERP Private)",
          "Sales and operations planning with SAP Integrated Business Planning"
        ]
      ],
      [
        "Make",
        [
          "Production orders, repetitive manufacturing and Kanban",
          "Variant configuration for configurable products",
          "Make-to-order and engineer-to-order linked to customer projects",
          "Integration with MES and SAP Digital Manufacturing on the shop floor"
        ]
      ],
      [
        "Quality",
        [
          "Inspection plans in receiving, production and final inspection",
          "Quality notifications and corrective actions",
          "Certificates and batch or serial traceability",
          "Supplier quality scores feeding purchasing decisions"
        ]
      ],
      [
        "Maintain",
        [
          "Equipment, functional locations and maintenance plans",
          "Preventive, condition-based and breakdown maintenance orders",
          "Scheduling with Gantt views and maintenance windows",
          "Mobile work orders with SAP Service and Asset Manager"
        ]
      ],
      [
        "Warehouse and logistics",
        [
          "Embedded warehouse management with bins, waves and handling units",
          "Stock transfers between plants and companies",
          "Inbound and outbound deliveries with transport planning",
          "Serial numbers and batches through the whole chain"
        ]
      ],
      [
        "Multi-entity operations",
        [
          "Intercompany sales and stock transfers with automatic billing",
          "Group templates rolled out plant by plant or country by country",
          "India GST and e-invoicing, and Sri Lanka localisation",
          "Selective data transformation for carve-outs and mergers"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP Private",
        "Core ERP for complex, multi-plant groups"
      ],
      [
        "SAP Cloud ERP",
        "Core ERP for focused plants and subsidiaries"
      ],
      [
        "SAP Integrated Business Planning",
        "Demand, supply and S&OP"
      ],
      [
        "SAP Digital Manufacturing",
        "Shop floor execution and machine data"
      ],
      [
        "SAP Service and Asset Manager",
        "Mobile maintenance"
      ],
      [
        "SAP Integration Suite",
        "APIs and integration to MES, PLM, logistics and banks"
      ],
      [
        "SAP Analytics Cloud",
        "Plant and group performance"
      ]
    ],
    "ai": [
      "Joule and production planning agents flag shortages and propose fixes",
      "Predictive maintenance on machine data to plan work before failure",
      "Machine learning on quality results to spot recurring defects",
      "Embedded analytics for OEE, schedule adherence and cost variance"
    ],
    "ext": [
      "Group templates that let new plants go live in waves",
      "Carve-out and merger programmes that keep the business running",
      "An integration layer that replaces point-to-point interfaces",
      "Custom shop floor and dealer apps on SAP BTP, kept outside the core"
    ],
    "start": [
      "Map plants, companies and the main product families",
      "Decide the planning approach and the edition",
      "Build a group template, then roll out plant by plant"
    ]
  },
  {
    "k": "consumer",
    "n": "Consumer Brands and Wellness",
    "p": "From factory to customer in one view.",
    "c": [
      "Trade and distributor management",
      "Product compliance and shelf life",
      "Demand and supply planning"
    ],
    "pr": [
      "SAP Cloud ERP",
      "SAP IBP",
      "SAP Analytics Cloud"
    ],
    "intro": [
      "Consumer brands in personal care, herbal and wellness products make many SKUs from natural ingredients, sell through distributors and retailers, and run constant promotions. Regulators and customers expect safe, well-labelled products.",
      "SAP links the factory to the trade. Batches, shelf life and product compliance sit in the core, while pricing, rebates and allocation make sure the right stock reaches the right channel at the right margin."
    ],
    "ed": [
      "SAP Cloud ERP for most brands",
      "SAP Cloud ERP covers batch manufacturing, quality, rebates, allocation and finance for most consumer brands. Van sales and direct store delivery are SAP Cloud ERP Private features, or a partner solution."
    ],
    "ch": [
      [
        "SKU proliferation",
        "New variants and packs add planning and stock complexity faster than sales."
      ],
      [
        "Distributor visibility",
        "Secondary sales and stock at distributors are not visible to the brand."
      ],
      [
        "Promotions and rebates",
        "Trade spend is hard to track, and rebate settlement is slow and disputed."
      ],
      [
        "Natural ingredients",
        "Herbal and natural raw materials vary in quality and have limited shelf life."
      ],
      [
        "Compliance and labelling",
        "Product registrations, ingredient rules and labels differ by market."
      ],
      [
        "Forecast accuracy",
        "Promotions and seasonality make demand hard to predict."
      ]
    ],
    "cap": [
      [
        "Source and make",
        [
          "Batch-managed ingredients with quality inspection on receipt",
          "Process orders driven by recipes, with batch derivation for shelf-life dates",
          "Contract manufacturing and subcontract packing",
          "Rework and quality holds managed in the system"
        ]
      ],
      [
        "Product compliance",
        [
          "Product compliance and dangerous goods checks on materials and products",
          "Label management connected to label printing systems",
          "Safety data sheets for chemicals and personal care products",
          "Regulatory status visible in sales and purchasing"
        ]
      ],
      [
        "Plan",
        [
          "Demand planning with promotions and seasonality in SAP IBP",
          "Supply planning across plants, co-packers and distributors",
          "Advanced available-to-promise with product allocation when stock is short",
          "Shelf-life aware stock rotation"
        ]
      ],
      [
        "Sell through the trade",
        [
          "Customer hierarchies for distributors, key accounts and retailers",
          "Condition contracts for rebates and trade terms",
          "Free goods and promotional pricing",
          "Returns with inspection and credit notes"
        ]
      ],
      [
        "Margin and channel insight",
        [
          "Margin by brand, SKU, channel and customer",
          "Trade spend tracked against volume",
          "Cost of goods by batch and plant",
          "Real-time stock by location and age"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP",
        "Core ERP for manufacturing, compliance, trade and finance"
      ],
      [
        "SAP Integrated Business Planning",
        "Demand, supply and S&OP"
      ],
      [
        "SAP Analytics Cloud",
        "Brand, channel and margin dashboards"
      ],
      [
        "SAP BTP",
        "Distributor portals and secondary sales capture"
      ],
      [
        "SAP Integration Suite",
        "Links to retailers, marketplaces and label systems"
      ]
    ],
    "ai": [
      "Joule answers stock, order and margin questions in plain language",
      "Demand sensing improves short-term forecasts from recent sales",
      "Machine learning proposes rebate and pricing corrections",
      "Document AI turns retailer purchase orders into sales orders"
    ],
    "ext": [
      "Distributor portals for orders, stock and secondary sales on SAP BTP",
      "Registration tracking for products by market",
      "Integration with e-commerce and marketplaces",
      "Customer engagement on Salesforce, connected to SAP when you need it"
    ],
    "start": [
      "Map brands, channels and the plants or co-packers behind them",
      "Review trade terms, rebates and compliance requirements",
      "Run a fit-to-standard on the order-to-cash and batch flows"
    ]
  },
  {
    "k": "tiles",
    "n": "Tiles and Building Materials Retail",
    "p": "From kiln to customer floor, with every shade matched.",
    "c": [
      "Shade and size managed by batch",
      "Showroom, project and dealer sales",
      "Delivery, credit and returns"
    ],
    "pr": [
      "SAP Cloud ERP",
      "SAP Retail",
      "SAP BTP"
    ],
    "intro": [
      "Tiles, sanitaryware and building materials are sold by the box but specified by the square metre. Every production run has its own shade and size, customers buy for a project, and stock sits across factories, warehouses and showrooms.",
      "SAP manages this from kiln to customer. Shade and calibre are tracked as batch characteristics, units of measure convert automatically, and showrooms, dealers and project sales draw on one view of stock."
    ],
    "ed": [
      "SAP Cloud ERP",
      "SAP Cloud ERP covers manufacturing, batch-based selling, store operations and finance for most tile and building materials businesses. Salesforce can run the showroom and lead side when you want a richer customer experience."
    ],
    "ch": [
      [
        "Shade mismatch",
        "A customer receives tiles from two production runs that do not match on the floor."
      ],
      [
        "Units of measure",
        "Customers think in square metres, warehouses in boxes and pallets, factories in pieces."
      ],
      [
        "Project sales",
        "Builders and architects order in phases, with special prices and long credit."
      ],
      [
        "Showroom stock",
        "Showrooms cannot see what is available in the warehouse or factory."
      ],
      [
        "Breakage and returns",
        "Damaged and returned stock is hard to track and credit."
      ],
      [
        "Energy and yield",
        "Kiln energy and yield losses drive cost but are not measured by product."
      ]
    ],
    "cap": [
      [
        "Make",
        [
          "Process or repetitive production for pressing, glazing and firing",
          "Batch characteristics for shade, calibre and grade on every run",
          "Yield, quality grades and seconds recorded at the line",
          "Energy and overhead allocated to products for real cost"
        ]
      ],
      [
        "Stock and units",
        [
          "Alternative units: pieces, boxes, square metres and pallets",
          "Batch-specific stock so one order ships from one shade",
          "Stock visible across factories, warehouses and showrooms",
          "Transfers between locations with transport planning"
        ]
      ],
      [
        "Showroom and retail",
        [
          "Store apps for stock lookup, orders, transfers and receiving",
          "POS integration and in-store sales orders with down payments",
          "Display stock and samples managed separately from saleable stock",
          "Price lists and promotions for retail customers"
        ]
      ],
      [
        "Project and dealer sales",
        [
          "Quotations and contracts for builders and architects",
          "Phased deliveries against one project order",
          "Dealer pricing, rebates and credit limits",
          "Credit management with exposure and blocked orders"
        ]
      ],
      [
        "Deliver and service",
        [
          "Delivery scheduling with vehicle and route planning",
          "Returns and breakage with inspection and credit notes",
          "Customer-specific labelling and packing",
          "Proof of delivery recorded against the order"
        ]
      ],
      [
        "Finance",
        [
          "Margin by product, shade, channel and showroom",
          "Instalment and down payment handling",
          "Sri Lankan tax and bank formats",
          "Showroom and branch profitability"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP",
        "Core ERP for manufacturing, stock, sales and finance"
      ],
      [
        "SAP Retail (in SAP Cloud ERP)",
        "Store operations, POS integration and replenishment"
      ],
      [
        "SAP Analytics Cloud",
        "Showroom, product and project dashboards"
      ],
      [
        "SAP Integration Suite",
        "Links to POS, e-commerce and Salesforce"
      ],
      [
        "SAP BTP",
        "Tile calculators and dealer portals"
      ]
    ],
    "ai": [
      "Joule finds matching shade stock across locations",
      "Machine learning forecasts demand by design and size",
      "Embedded analytics on showroom conversion and margin",
      "Document AI reads builder purchase orders into sales orders"
    ],
    "ext": [
      "Square-metre calculators and room planners feeding SAP quotations",
      "Dealer portals for stock, orders and statements",
      "Salesforce for leads, showroom visits and project pipelines, integrated with SAP",
      "Sri Lankan instalment and finance company integration"
    ],
    "start": [
      "Map how a tile moves from kiln to customer floor",
      "Decide what runs in SAP and what runs in Salesforce",
      "Design batch, unit and pricing rules before build"
    ]
  },
  {
    "k": "auto",
    "n": "Automotive",
    "p": "Vehicle import, parts and service on one core.",
    "c": [
      "Vehicle and parts management",
      "Service, warranty and after-sales",
      "Dealer and customer lifecycle"
    ],
    "pr": [
      "SAP Cloud ERP Private",
      "SAP Cloud ERP",
      "Salesforce"
    ],
    "intro": [
      "Vehicle importers and distributors buy vehicles in shipments, hold them in yards, sell through showrooms and dealers, and then service them for years. Parts and service often earn more than the vehicles themselves.",
      "SAP tracks every vehicle from order to sale, runs parts logistics and service, and connects it to finance. Salesforce can run the customer and dealer journey, with SAP as the system of record behind it."
    ],
    "ed": [
      "SAP Cloud ERP Private for vehicle management, SAP Cloud ERP for parts and service",
      "Vehicle management for importers and dealers is an SAP Cloud ERP Private capability. Businesses focused on parts distribution and workshops can run on SAP Cloud ERP."
    ],
    "ch": [
      [
        "Vehicle visibility",
        "Vehicles in transit, at port, in the yard and at dealers are tracked in spreadsheets."
      ],
      [
        "Landed cost",
        "Duty, freight and clearing costs are added late, so margin per vehicle is unclear."
      ],
      [
        "Parts availability",
        "Fast and slow parts compete for capital, and workshops wait for parts."
      ],
      [
        "Warranty claims",
        "Claims to the manufacturer are slow, and rejected claims go unrecovered."
      ],
      [
        "Service retention",
        "Customers drift to independent garages after the free service period."
      ],
      [
        "Dealer network",
        "Dealer stock, orders and performance are not visible to the importer."
      ]
    ],
    "cap": [
      [
        "Vehicles",
        [
          "Vehicle management: each vehicle tracked by chassis and engine number",
          "Ordering from the manufacturer and shipment tracking",
          "Yard stock, accessories fitting and pre-delivery inspection",
          "Vehicle sales with registration and finance details"
        ]
      ],
      [
        "Import and landed cost",
        [
          "Import purchase orders with duty, freight and clearing as planned costs",
          "Letters of credit through bank integration",
          "Landed cost settled to each vehicle and part",
          "Foreign currency exposure on shipments"
        ]
      ],
      [
        "Parts",
        [
          "Parts planning with forecasts and safety stock",
          "Supersessions and interchangeable parts",
          "Embedded warehouse management for fast picking",
          "Parts sales to dealers, workshops and retail customers"
        ]
      ],
      [
        "Service and warranty",
        [
          "Service orders for workshop jobs with labour and parts",
          "Service contracts and maintenance schedules",
          "Warranty claims to the manufacturer with tracking",
          "Recalls and campaigns by chassis number"
        ]
      ],
      [
        "Customers and dealers",
        [
          "Dealer orders, stock and pricing",
          "Customer and vehicle history in one record",
          "Salesforce for leads, test drives and service reminders",
          "Finance and insurance partners connected"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP Private",
        "Vehicle management, parts, service and finance"
      ],
      [
        "SAP Cloud ERP",
        "Parts distribution and workshops"
      ],
      [
        "SAP Integration Suite",
        "Links to manufacturers, dealers and Salesforce"
      ],
      [
        "SAP Analytics Cloud",
        "Vehicle, parts and service performance"
      ],
      [
        "Salesforce",
        "Customer and dealer engagement on top of SAP"
      ]
    ],
    "ai": [
      "Joule finds vehicles, parts and service history in plain language",
      "Parts demand forecasts from service history and vehicle population",
      "Warranty claim analytics to spot recurring failures",
      "Embedded analytics on margin per vehicle and per workshop"
    ],
    "ext": [
      "Integration with manufacturer systems for orders and warranty",
      "Customer apps and service booking on Salesforce, linked to SAP",
      "Sri Lankan import duty and registration handling",
      "Dealer portals on SAP BTP"
    ],
    "start": [
      "Map the vehicle, parts and service flows",
      "Decide the split between SAP and Salesforce",
      "Confirm the edition based on vehicle management needs"
    ]
  },
  {
    "k": "oil",
    "n": "Oil and Gas",
    "p": "Downstream distribution, fuel retail and asset-heavy operations.",
    "c": [
      "Bulk product and tank management",
      "Plant maintenance and asset management",
      "Dealer and station network billing"
    ],
    "pr": [
      "SAP Cloud ERP Private",
      "SAP Asset Management",
      "SAP BTP"
    ],
    "intro": [
      "Downstream oil and gas businesses import, store and distribute fuels, lubricants and LPG through terminals, tankers and stations. Volumes change with temperature, assets are expensive, and safety is not negotiable.",
      "SAP has a dedicated oil and gas industry solution for hydrocarbon products. It handles quantities at standard temperature and density, bulk storage, exchanges and secondary distribution, alongside maintenance and finance on the same core."
    ],
    "ed": [
      "SAP Cloud ERP Private with the oil and gas solution",
      "Hydrocarbon product management and downstream distribution are part of the oil and gas industry solution in SAP Cloud ERP Private. Lubricant blending and packaged products can also run on SAP Cloud ERP."
    ],
    "ch": [
      [
        "Temperature and density",
        "Fuel volume changes with temperature, so book and physical stock never agree."
      ],
      [
        "Tank and terminal stock",
        "Stock across terminals, depots and tankers is reconciled by hand."
      ],
      [
        "Asset reliability",
        "Pumps, tanks and pipelines need inspections, and failures are costly and dangerous."
      ],
      [
        "Station and dealer billing",
        "Deliveries, credit and pricing for hundreds of stations are hard to control."
      ],
      [
        "Regulated pricing",
        "Price changes must apply on time across the whole network."
      ],
      [
        "Safety and environment",
        "Permits, incidents and emissions need records that stand up to audit."
      ]
    ],
    "cap": [
      [
        "Hydrocarbon products",
        [
          "Quantity conversion to standard temperature and density",
          "Stock in litres, kilograms and barrels at the same time",
          "Gains and losses in storage and transport",
          "Product quality and specifications per batch"
        ]
      ],
      [
        "Terminals and storage",
        [
          "Tank and silo management with dip readings",
          "Receipts from ships and pipelines",
          "Blending of fuels and lubricants",
          "Bulk tank trailer loading with residual quantities"
        ]
      ],
      [
        "Distribution",
        [
          "Secondary distribution planning for tanker deliveries",
          "Station and dealer orders, deliveries and billing",
          "Price changes applied across the network on a date",
          "Credit management for dealers and fleet customers"
        ]
      ],
      [
        "Assets and maintenance",
        [
          "Equipment and functional locations for tanks, pumps and pipelines",
          "Preventive and inspection-based maintenance plans",
          "Mobile work orders and inspections",
          "Maintenance cost by asset and site"
        ]
      ],
      [
        "Safety and environment",
        [
          "Incident management and investigations",
          "Permits and work clearance for hazardous work",
          "Emissions and waste records",
          "Dangerous goods checks on shipments"
        ]
      ],
      [
        "Finance",
        [
          "Joint venture accounting where relevant",
          "Asset retirement obligations",
          "Margin by product, terminal and channel",
          "Duties and taxes on fuel products"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP Private",
        "Core ERP with the oil and gas industry solution"
      ],
      [
        "SAP Asset Management",
        "Maintenance, inspections and mobile work"
      ],
      [
        "SAP EHS",
        "Incidents, permits and environment"
      ],
      [
        "SAP Integration Suite",
        "Links to tank gauges, station systems and fleet cards"
      ],
      [
        "SAP Analytics Cloud",
        "Volume, margin and asset dashboards"
      ]
    ],
    "ai": [
      "Predictive maintenance on pumps and rotating equipment",
      "Loss and gain analytics to detect leaks or theft",
      "Joule answers stock and delivery questions in plain language",
      "Embedded analytics for volume and margin by station"
    ],
    "ext": [
      "Tank gauge and station automation integration",
      "Fleet card and payment integration",
      "Sri Lankan fuel pricing and tax handling",
      "Dealer self-service apps on SAP BTP"
    ],
    "start": [
      "Map terminals, products and distribution channels",
      "Confirm the oil and gas scope and edition",
      "Plan integration with tank gauges and station systems"
    ]
  },
  {
    "k": "print",
    "n": "Printing and Packaging",
    "p": "Make-to-order production where every job is different.",
    "c": [
      "Variant configuration and job estimating",
      "Production planning and job costing",
      "Quality and batch traceability"
    ],
    "pr": [
      "SAP Cloud ERP",
      "SAP Digital Manufacturing",
      "SAP BTP"
    ],
    "intro": [
      "Printers and packaging converters make cartons, labels, cans, bottles and flexible packaging to each customer's design. Every job has its own size, material, print and finish, and margins depend on estimating accurately and running the press efficiently.",
      "SAP models every job through variant configuration, so one quotation drives the bill of material, routing, cost and production order. Batches link every finished pallet back to the resin, board, coil or ink it came from."
    ],
    "ed": [
      "SAP Cloud ERP",
      "SAP Cloud ERP covers configuration, make-to-order production, quality and costing for most converters. Cutting optimisation and commodity metal pricing are not standard and are added through partner solutions or extensions."
    ],
    "ch": [
      [
        "Estimating",
        "Quotes are built in spreadsheets, and the cost of a job is known only after it runs."
      ],
      [
        "Artwork and approvals",
        "Proofs and artwork versions are managed by email."
      ],
      [
        "Changeovers",
        "Many short runs cost hours of setup on presses and lines."
      ],
      [
        "Waste",
        "Setup waste, trims and rejects are not measured by job."
      ],
      [
        "Brand owner demands",
        "Customers want schedules, consignment stock and full traceability."
      ],
      [
        "Material prices",
        "Board, resin, aluminium and tinplate prices move every month."
      ]
    ],
    "cap": [
      [
        "Quote and configure",
        [
          "Variant configuration for size, material, colours, print and finish",
          "Quotations priced from the configured product",
          "Cost estimates from the configured bill of material and routing",
          "Repeat orders that reuse an approved configuration"
        ]
      ],
      [
        "Plan and produce",
        [
          "Make-to-order and make-to-stock production",
          "Repetitive manufacturing for high-volume lines",
          "Production order combination to run identical operations together",
          "Kanban for packaging materials and components"
        ]
      ],
      [
        "Shop floor",
        [
          "Integration with MES and SAP Digital Manufacturing",
          "Machine data, downtime and waste by job",
          "Scrap and rework recorded against the order",
          "Labels and pallet IDs printed at the line"
        ]
      ],
      [
        "Quality and traceability",
        [
          "Batches for resin, board, coil, ink and finished goods",
          "First article and in-process inspections",
          "Certificates of analysis for brand owners",
          "Full forward and backward traceability"
        ]
      ],
      [
        "Customer supply",
        [
          "Scheduling agreements with brand owners",
          "Consignment stock at customer sites",
          "Returnable pallets and layer pads tracked",
          "Delivery schedules and dispatch"
        ]
      ],
      [
        "Cost and margin",
        [
          "Actual cost per job compared to the estimate",
          "Material price changes reflected in cost",
          "Margin by customer, product and machine",
          "Overhead and energy allocated by machine hours"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP",
        "Core ERP with configuration, production, quality and finance"
      ],
      [
        "SAP Digital Manufacturing",
        "Shop floor execution and machine data"
      ],
      [
        "SAP Integrated Business Planning",
        "Capacity and S&OP"
      ],
      [
        "SAP BTP",
        "Artwork approval workflows and customer portals"
      ],
      [
        "SAP Analytics Cloud",
        "Job, machine and margin performance"
      ]
    ],
    "ai": [
      "Joule finds past jobs and quotes similar to a new enquiry",
      "Machine learning to predict job cost and waste",
      "Embedded analytics on OEE, changeovers and waste",
      "Document AI reads customer orders and specifications"
    ],
    "ext": [
      "Artwork and proof approval workflows built with SAP Build",
      "Cutting optimisation through a partner solution",
      "Commodity price surcharges for metal and resin",
      "Customer portals for orders, stock and delivery schedules"
    ],
    "start": [
      "Map your product families and what makes each job different",
      "Design the configuration model and pricing rules",
      "Plan shop floor integration with presses and lines"
    ]
  },
  {
    "k": "poultry",
    "n": "Poultry and Livestock",
    "p": "Breeder farm, hatchery, feed mill and processing on one core.",
    "c": [
      "Flock and batch management",
      "Feed formulation and production",
      "Weight-based selling and cold chain"
    ],
    "pr": [
      "SAP Cloud ERP Private",
      "SAP Cloud ERP",
      "SAP BTP"
    ],
    "intro": [
      "Integrated poultry businesses run breeder farms, hatcheries, feed mills, contract growers and processing plants. Each step feeds the next, live animals are valued differently from products, and every bird is sold by weight.",
      "SAP connects the chain on one core. Feed is made with process orders, flocks are tracked as batches, processing yields many products from one bird, and finance sees the real cost at every stage."
    ],
    "ed": [
      "SAP Cloud ERP Private for catch weight and processing",
      "Catch weight, where products are sold by actual weight, is an SAP Cloud ERP Private feature. Feed mills and simpler operations that sell by fixed weight can run on SAP Cloud ERP."
    ],
    "ch": [
      [
        "Flock performance",
        "Mortality, feed conversion and growth are recorded on paper at the farm."
      ],
      [
        "Feed cost",
        "Feed is the largest cost, and formulas change with raw material prices."
      ],
      [
        "One bird, many products",
        "Processing yields cuts, offal and by-products from one input."
      ],
      [
        "Sold by weight",
        "Every crate and pack has a different weight and price."
      ],
      [
        "Cold chain",
        "Fresh and frozen products need temperature control and short lead times."
      ],
      [
        "Valuing livestock",
        "Live birds and breeding stock need valuation as biological assets."
      ]
    ],
    "cap": [
      [
        "Breeders and hatchery",
        [
          "Flocks managed as batches with age, breed and source",
          "Egg production and hatchery yield recorded",
          "Chick placement with contract growers",
          "Vaccination and health records"
        ]
      ],
      [
        "Feed mill",
        [
          "Recipes for feed formulas by age and species",
          "Process orders and batch production",
          "Raw material quality checks on maize, soya and premixes",
          "Feed cost per batch and per flock"
        ]
      ],
      [
        "Growing",
        [
          "Feed, medicine and chicks issued to farms and growers",
          "Mortality, weight and feed conversion captured on mobile",
          "Grower settlement based on performance",
          "Cost per kilogram live weight"
        ]
      ],
      [
        "Processing",
        [
          "Disassembly of birds into cuts with co-products and by-products",
          "Yield recording against standard",
          "Catch weight for actual weight in pieces and kilograms",
          "Batch traceability back to the flock and farm"
        ]
      ],
      [
        "Cold chain and selling",
        [
          "Fresh and frozen stock with shelf-life control",
          "Weight-based pricing and invoicing",
          "Route deliveries to retailers and food service",
          "Returns and claims with quality checks"
        ]
      ],
      [
        "Finance",
        [
          "Livestock valued as biological assets under LKAS 41",
          "Cost through the chain from feed to finished product",
          "Margin by product, customer and channel",
          "Grower payments and advances"
        ]
      ]
    ],
    "prod": [
      [
        "SAP Cloud ERP Private",
        "Core ERP with catch weight and processing"
      ],
      [
        "SAP Cloud ERP",
        "Feed mills and focused operations"
      ],
      [
        "SAP BTP",
        "Farm and grower apps for flock data"
      ],
      [
        "SAP Integration Suite",
        "Links to scales, farm sensors and label printers"
      ],
      [
        "SAP Analytics Cloud",
        "Flock, yield and margin dashboards"
      ]
    ],
    "ai": [
      "Machine learning on flock data to predict weights and mortality",
      "Feed cost analytics as raw material prices move",
      "Joule answers stock and order questions in plain language",
      "Embedded analytics on processing yield"
    ],
    "ext": [
      "Mobile farm apps on SAP BTP for daily flock records",
      "Scale and label integration at processing lines",
      "Grower settlement and contract logic",
      "Feed formulation tools connected to SAP recipes"
    ],
    "start": [
      "Map the chain from breeder to customer",
      "Confirm catch weight needs and the edition",
      "Design how flock data reaches SAP from the farms"
    ]
  }
];

export const SALESFORCE: Record<string, Guide> = {
  "food": {
    "intro": [
      "Food, beverage and tea brands win on relationships: with distributors, retailers, food service buyers and overseas importers. Those relationships live in email, phone calls and sales reps' notebooks, so nobody sees the whole picture.",
      "Salesforce gives every account one record, from the first enquiry to repeat orders, visits, complaints and campaigns. SAP keeps running production, stock and invoicing, and the two are connected so sales sees real availability and order status."
    ],
    "ed": [
      "Sales Cloud and Consumer Goods Cloud, connected to SAP",
      "Sales Cloud runs export and key account selling. Consumer Goods Cloud adds retail visits and store audits for brands sold through shops. MuleSoft or SAP Integration Suite connects both to your SAP system."
    ],
    "ch": [
      [
        "Scattered buyer contacts",
        "Importer and distributor relationships sit with individual sales staff."
      ],
      [
        "Slow export enquiries",
        "Samples, price quotes and specifications take days to send."
      ],
      [
        "No view of the shelf",
        "Brands cannot see how their products are displayed and priced in stores."
      ],
      [
        "Complaints by email",
        "Quality complaints are not logged, tracked or linked to batches."
      ],
      [
        "Campaigns without results",
        "Trade fairs and promotions are not measured against sales."
      ],
      [
        "Sales cannot see stock",
        "Reps call the factory to check availability and order status."
      ]
    ],
    "cap": [
      [
        "Win new buyers",
        [
          "Leads from trade fairs, websites and agents in one pipeline",
          "Opportunity stages for samples, tasting, quotation and first order",
          "Quotes built from SAP prices and product data",
          "Forecasts by market, buyer and product"
        ]
      ],
      [
        "Manage key accounts",
        [
          "Account plans for importers, distributors and retail chains",
          "Contact history, visits and agreements in one record",
          "Sales agreements with volume targets tracked against SAP orders",
          "Account teams across countries and brands"
        ]
      ],
      [
        "Retail execution",
        [
          "Store visit planning and route optimisation",
          "Shelf audits, photos and price checks on mobile",
          "Promotion compliance and display checks",
          "Orders taken in store and sent to SAP"
        ]
      ],
      [
        "Service and quality",
        [
          "Complaints logged as cases with batch numbers from SAP",
          "Escalation and resolution tracking with service levels",
          "Self-service portal for buyers to see orders and documents",
          "Feedback loops to quality and production"
        ]
      ],
      [
        "Marketing",
        [
          "Campaigns to importers, distributors and consumers",
          "Consent and preference management",
          "Event and trade fair follow-up",
          "Campaign results measured against pipeline and sales"
        ]
      ]
    ],
    "prod": [
      [
        "Sales Cloud",
        "Pipeline, accounts, quotes and forecasts"
      ],
      [
        "Consumer Goods Cloud",
        "Retail visits, store audits and in-store orders"
      ],
      [
        "Service Cloud",
        "Complaints, cases and customer service"
      ],
      [
        "Marketing Cloud",
        "Campaigns, journeys and consent"
      ],
      [
        "Experience Cloud",
        "Buyer and distributor portals"
      ],
      [
        "MuleSoft",
        "Integration with SAP for products, prices, stock and orders"
      ]
    ],
    "ai": [
      "Agentforce drafts quotes, follow-ups and visit summaries for sales reps",
      "Einstein scores leads and predicts which buyers are ready to reorder",
      "Image recognition checks shelf displays from store photos",
      "Dashboards on pipeline, visits and account growth by market"
    ],
    "ext": [
      "SAP integration for stock, prices, orders and invoices",
      "Sample and specification request flows for export buyers",
      "Sri Lankan distributor and route structures in Consumer Goods Cloud",
      "One customer view across SAP and Salesforce"
    ],
    "start": [
      "Map how a buyer moves from enquiry to repeat order",
      "Decide which data comes from SAP and which lives in Salesforce",
      "Start with Sales Cloud, then add retail execution and service"
    ]
  },
  "consumer": {
    "intro": [
      "Consumer brands live and die by how well they know their customers, through distributors and retailers and, more and more, directly. Loyalty, campaigns and service all need one view of the consumer.",
      "Salesforce connects marketing, sales, service and commerce on one customer record. SAP runs the factory, stock and finance behind it, so promises to customers match what the supply chain can deliver."
    ],
    "ed": [
      "Sales Cloud, Marketing Cloud and Data 360, connected to SAP",
      "Sales Cloud runs trade and distributor selling. Marketing Cloud and Salesforce Data 360 (formerly Data Cloud) build the consumer view for campaigns and loyalty. Service Cloud handles consumer care."
    ],
    "ch": [
      [
        "No single consumer view",
        "Data sits in e-commerce, loyalty, social and call centres separately."
      ],
      [
        "Generic campaigns",
        "Every customer gets the same message, and results are not measured."
      ],
      [
        "Distributor performance",
        "Targets, schemes and claims are tracked in spreadsheets."
      ],
      [
        "Loyalty with low engagement",
        "Points programmes do not change buying behaviour."
      ],
      [
        "Consumer care",
        "Queries and complaints across channels are not tracked to resolution."
      ],
      [
        "Direct-to-consumer growth",
        "Online orders and subscriptions need a different way of selling."
      ]
    ],
    "cap": [
      [
        "Know the consumer",
        [
          "Unified consumer profiles from web, e-commerce, loyalty and service",
          "Segments built on behaviour, purchases and preferences",
          "Consent and privacy managed in one place",
          "Insights shared with marketing, sales and service"
        ]
      ],
      [
        "Market and engage",
        [
          "Personalised journeys across email, SMS and WhatsApp",
          "Launch and promotion campaigns with measured results",
          "Loyalty programmes with tiers, points and rewards",
          "Social listening and engagement"
        ]
      ],
      [
        "Sell through the trade",
        [
          "Distributor and retailer accounts with targets and schemes",
          "Visit planning and retail execution for field teams",
          "Claims and scheme settlement tracked",
          "Orders flow to SAP for fulfilment"
        ]
      ],
      [
        "Sell direct",
        [
          "B2C and B2B commerce storefronts",
          "Subscriptions and repeat orders",
          "Order status from SAP shown to customers",
          "Returns started online"
        ]
      ],
      [
        "Consumer care",
        [
          "Cases from phone, email, chat and social in one console",
          "Knowledge base for agents and consumers",
          "Product and batch details from SAP on each case",
          "Service levels and satisfaction tracked"
        ]
      ]
    ],
    "prod": [
      [
        "Sales Cloud",
        "Trade, distributor and key account selling"
      ],
      [
        "Marketing Cloud",
        "Personalised journeys and campaigns"
      ],
      [
        "Salesforce Data 360",
        "Unified consumer profiles and segments"
      ],
      [
        "Loyalty Management",
        "Tiers, points and rewards"
      ],
      [
        "Service Cloud",
        "Consumer care across channels"
      ],
      [
        "Commerce Cloud",
        "Direct-to-consumer and B2B storefronts"
      ],
      [
        "MuleSoft",
        "Integration with SAP and other systems"
      ]
    ],
    "ai": [
      "Agentforce answers consumer questions and handles routine service requests",
      "Einstein recommends the next best offer for each consumer",
      "Predictive models on churn and loyalty engagement",
      "Campaign and loyalty dashboards with revenue attribution"
    ],
    "ext": [
      "SAP integration for products, stock, orders and batches",
      "WhatsApp and local messaging channels for Sri Lankan consumers",
      "Loyalty design based on your brand and margins",
      "Distributor scheme and claim workflows"
    ],
    "start": [
      "Map your consumer touchpoints and data sources",
      "Pick the first use case: loyalty, campaigns or care",
      "Connect SAP so every team works from the same facts"
    ]
  },
  "tiles": {
    "intro": [
      "A tile or bathware sale starts long before the order. Homeowners visit showrooms, architects specify products, and builders negotiate project prices. Most of that journey is lost if it is not captured.",
      "Salesforce captures every enquiry, from showroom walk-in to architect specification, and turns it into a tracked pipeline. Quotes use SAP prices and stock, and orders flow to SAP for delivery and invoicing."
    ],
    "ed": [
      "Sales Cloud and Revenue Cloud, connected to SAP",
      "Sales Cloud runs the showroom, project and dealer pipeline. Revenue Cloud (CPQ) builds quotes with bundles and discounts. SAP stays the system of record for products, stock, pricing and invoicing."
    ],
    "ch": [
      [
        "Lost showroom enquiries",
        "Walk-in customers leave without their details being captured."
      ],
      [
        "Project pipelines",
        "Architect and builder projects take months, and follow-ups are missed."
      ],
      [
        "Slow, inconsistent quotes",
        "Quotes are built by hand, with different discounts by showroom."
      ],
      [
        "Dealer visibility",
        "Dealer orders, targets and claims are tracked outside the system."
      ],
      [
        "After-sales issues",
        "Breakage, shade complaints and installation issues are not tracked."
      ],
      [
        "Marketing waste",
        "Leads from ads and exhibitions are not followed up or measured."
      ]
    ],
    "cap": [
      [
        "Capture every enquiry",
        [
          "Showroom walk-ins captured on a tablet",
          "Leads from web, social, ads and exhibitions in one pipeline",
          "Automatic assignment to the right showroom or rep",
          "Follow-up tasks and reminders"
        ]
      ],
      [
        "Project and specifier selling",
        [
          "Architects, builders and contractors as linked accounts",
          "Projects tracked from specification to final delivery",
          "Phased opportunities for large projects",
          "Influencer and specifier rewards"
        ]
      ],
      [
        "Quote and price",
        [
          "Quotes with tiles, adhesives, grout and sanitaryware as bundles",
          "Discount approvals by role and margin",
          "Prices and stock from SAP on every quote",
          "Quotes converted to SAP sales orders in one step"
        ]
      ],
      [
        "Dealers",
        [
          "Dealer portal for orders, stock and statements",
          "Targets and schemes tracked by dealer",
          "Claims and returns raised online",
          "Dealer performance dashboards"
        ]
      ],
      [
        "After-sales",
        [
          "Complaints and breakage logged as cases",
          "Site visits scheduled with field service",
          "Shade and batch details from SAP on each case",
          "Customer satisfaction measured after delivery"
        ]
      ]
    ],
    "prod": [
      [
        "Sales Cloud",
        "Showroom, project and dealer pipelines"
      ],
      [
        "Revenue Cloud (CPQ)",
        "Quotes, bundles, pricing and approvals"
      ],
      [
        "Experience Cloud",
        "Dealer and architect portals"
      ],
      [
        "Service Cloud",
        "Complaints and after-sales"
      ],
      [
        "Field Service",
        "Site visits and inspections"
      ],
      [
        "MuleSoft",
        "Integration with SAP for products, prices, stock and orders"
      ]
    ],
    "ai": [
      "Agentforce drafts quotes and follow-ups from showroom visit notes",
      "Einstein predicts which projects are most likely to close",
      "Product recommendations for matching accessories",
      "Dashboards on showroom conversion and quote win rates"
    ],
    "ext": [
      "SAP S/4HANA integration for stock, shade batches and pricing",
      "Square-metre calculators inside the quote",
      "Architect and influencer reward programmes",
      "Showroom tablet apps for walk-in capture"
    ],
    "start": [
      "Map the journey from showroom visit to delivered order",
      "Agree pricing and discount rules for quotes",
      "Start with showroom and project pipelines, then add dealers"
    ]
  },
  "auto": {
    "intro": [
      "Vehicle buyers research online, visit showrooms, book test drives and expect to be remembered at every service visit. Importers and dealers that know each driver and each vehicle keep customers for years.",
      "Salesforce Automotive Cloud brings drivers, vehicles, dealers and service history into one view. SAP handles vehicle stock, parts, workshops and finance, and the two are connected so every conversation uses real data."
    ],
    "ed": [
      "Automotive Cloud, connected to SAP",
      "Automotive Cloud covers vehicle sales, dealer performance and driver relationships. Service Cloud and Field Service run after-sales. SAP remains the system of record for vehicles, parts and finance."
    ],
    "ch": [
      [
        "Leads from many sources",
        "Web, social, showroom and phone leads are not tracked in one place."
      ],
      [
        "Test drive to sale",
        "Follow-up after test drives is inconsistent."
      ],
      [
        "Service retention",
        "Customers stop coming back after the warranty period."
      ],
      [
        "Dealer performance",
        "Importers cannot see dealer pipelines and customer satisfaction."
      ],
      [
        "Fleet customers",
        "Corporate fleet deals and renewals are managed by hand."
      ],
      [
        "Vehicle history",
        "Sales and service history are not linked to the driver."
      ]
    ],
    "cap": [
      [
        "Sell vehicles",
        [
          "Leads from web, showroom, events and phone in one pipeline",
          "Test drive booking and follow-up",
          "Vehicle interest matched to SAP stock and incoming shipments",
          "Finance and insurance offers tracked on the deal"
        ]
      ],
      [
        "Know the driver",
        [
          "Driver and household profiles with vehicles owned",
          "Vehicle records with ownership, service and warranty history",
          "Consent and communication preferences",
          "Life events and renewal triggers"
        ]
      ],
      [
        "Dealers and fleets",
        [
          "Dealer pipelines, targets and performance",
          "Dealer portal for leads, stock and campaigns",
          "Fleet accounts with contracts and renewal dates",
          "Corporate pricing and approvals"
        ]
      ],
      [
        "After-sales",
        [
          "Service reminders based on mileage and time",
          "Online service booking",
          "Service cases and complaints tracked to resolution",
          "Recall campaigns by vehicle"
        ]
      ],
      [
        "Marketing",
        [
          "Launch campaigns and events",
          "Personalised offers for service and accessories",
          "Trade-in and upgrade journeys",
          "Campaign results measured against sales"
        ]
      ]
    ],
    "prod": [
      [
        "Automotive Cloud",
        "Drivers, vehicles, dealers and vehicle sales"
      ],
      [
        "Sales Cloud",
        "Fleet and corporate selling"
      ],
      [
        "Service Cloud",
        "After-sales service and complaints"
      ],
      [
        "Marketing Cloud",
        "Launches, service offers and journeys"
      ],
      [
        "Experience Cloud",
        "Dealer portals and customer self-service"
      ],
      [
        "MuleSoft",
        "Integration with SAP for vehicles, parts and workshops"
      ]
    ],
    "ai": [
      "Agentforce books service appointments and answers routine questions",
      "Einstein predicts which drivers are due to upgrade",
      "Lead scoring to focus showroom teams",
      "Dashboards on dealer performance and service retention"
    ],
    "ext": [
      "SAP integration for vehicle stock, parts and service orders",
      "Manufacturer data feeds for vehicles and campaigns",
      "Sri Lankan leasing and insurance partner integration",
      "Dealer onboarding and portal setup"
    ],
    "start": [
      "Map the driver journey from first enquiry to fifth service",
      "Agree what comes from SAP and the manufacturer",
      "Start with leads and test drives, then add after-sales"
    ]
  }
};
