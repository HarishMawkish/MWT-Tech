// The Odoo product set, as the pages and the menu see it. Odoo organises its apps into eight families on its own site, and
// so do these pages: each family has a page, and each app inside it is a tab on that page. Three supporting pages cover
// what cuts across the families (AI, Studio, and editions and hosting). Every description here is written from Odoo's
// own published material (see the sources on each page and in docs/odoo-product-knowledge.md).

export const OD_HUB = "/services/odoo";

/** One colour for every "you are here" marker, on every Odoo page. */
export const OD_HERE = "#c27ab0";

export const OD_LEGAL =
  "Odoo, its app names and its app icons belong to Odoo S.A. The icons are shown as Odoo publishes them on its brand-assets page. Other names are the property of their owners. Screens shown are our own illustrations with sample data, not Odoo screenshots. Product descriptions follow Odoo's own published material and may change; check odoo.com for current details.";

export type ProductSlug =
  | "finance"
  | "sales"
  | "websites"
  | "supply-chain"
  | "human-resources"
  | "marketing"
  | "services"
  | "productivity"
  | "ai"
  | "studio"
  | "editions-and-hosting";

/** Where an app's icon lives. The files are Odoo's own, from its brand-assets page. */
export const iconSrc = (key: string) => `/images/odoo/apps/${key}.svg`;

export type FamilySlug = Exclude<ProductSlug, "ai" | "studio" | "editions-and-hosting">;

export type App = {
  /** The icon file name, and the id of the app's tab on its family page. */
  key: string;
  name: string;
  family: FamilySlug | "platform";
  /** One plain line on what it is for. */
  line: string;
};

/** Every app named on Odoo's own app pages that these pages cover. Names and icons are Odoo's; the lines are ours. */
export const apps: App[] = [
  // Finance
  { key: "accounting", name: "Accounting", family: "finance", line: "Books, bank reconciliation, taxes and reports." },
  { key: "invoicing", name: "Invoicing", family: "finance", line: "Send invoices and get paid online." },
  { key: "expenses", name: "Expenses", family: "finance", line: "Receipts to reports to reimbursement." },
  { key: "sign", name: "Sign", family: "finance", line: "Contracts signed online." },
  { key: "spreadsheet", name: "Spreadsheet", family: "finance", line: "Live data in a spreadsheet and dashboards." },
  { key: "esg", name: "ESG", family: "finance", line: "Sustainability data from the records you already keep." },
  // Sales
  { key: "crm", name: "CRM", family: "sales", line: "Leads and opportunities on a pipeline." },
  { key: "sales", name: "Sales", family: "sales", line: "Quotations to orders to invoices." },
  { key: "subscriptions", name: "Subscriptions", family: "sales", line: "Recurring revenue and renewals." },
  { key: "point-of-sale", name: "Point of Sale", family: "sales", line: "The till for shops and retail." },
  { key: "point-of-sale-restaurant", name: "Restaurant POS", family: "sales", line: "Tables, kitchen screens and delivery apps." },
  { key: "rental", name: "Rental", family: "sales", line: "Rent products with dates, pickups and returns." },
  // Websites
  { key: "website", name: "Website", family: "websites", line: "Build and edit your site with blocks." },
  { key: "ecommerce", name: "eCommerce", family: "websites", line: "An online shop tied to your stock." },
  { key: "events", name: "Events", family: "websites", line: "Plan events and sell tickets." },
  { key: "elearning", name: "eLearning", family: "websites", line: "Courses, quizzes and certificates." },
  { key: "blog", name: "Blog", family: "websites", line: "Publish posts and news." },
  { key: "forum", name: "Forum", family: "websites", line: "A community Q&A and FAQ." },
  // Supply chain
  { key: "inventory", name: "Inventory", family: "supply-chain", line: "Stock, warehouses and logistics." },
  { key: "manufacturing", name: "Manufacturing", family: "supply-chain", line: "Bills of materials and manufacturing orders." },
  { key: "purchase", name: "Purchase", family: "supply-chain", line: "Requests for quotation to vendor bills." },
  { key: "plm", name: "PLM", family: "supply-chain", line: "Engineering changes and versions." },
  { key: "quality", name: "Quality", family: "supply-chain", line: "Checks, alerts and corrective actions." },
  { key: "maintenance", name: "Maintenance", family: "supply-chain", line: "Equipment upkeep and repair requests." },
  // Human resources
  { key: "employees", name: "Employees", family: "human-resources", line: "One record per person, with the right privacy." },
  { key: "recruitment", name: "Recruitment", family: "human-resources", line: "An applicant pipeline from posting to contract." },
  { key: "time-off", name: "Time Off", family: "human-resources", line: "Leave requests, balances and approvals." },
  { key: "appraisals", name: "Appraisals", family: "human-resources", line: "Review cycles and 360-degree feedback." },
  { key: "payroll", name: "Payroll", family: "human-resources", line: "Payslips and employer costs by country rules." },
  { key: "fleet", name: "Fleet", family: "human-resources", line: "Vehicles, contracts and running costs." },
  // Marketing
  { key: "email-marketing", name: "Email Marketing", family: "marketing", line: "Campaigns, segments and results." },
  { key: "sms-marketing", name: "SMS Marketing", family: "marketing", line: "Short, scheduled text campaigns." },
  { key: "social-marketing", name: "Social Marketing", family: "marketing", line: "Post, monitor and reply from one place." },
  { key: "marketing-automation", name: "Marketing Automation", family: "marketing", line: "Visual journeys that run on their own." },
  { key: "whatsapp", name: "WhatsApp", family: "marketing", line: "Business messages inside your Odoo records." },
  { key: "surveys", name: "Surveys", family: "marketing", line: "Questionnaires with live results." },
  // Services
  { key: "project", name: "Project", family: "services", line: "Tasks on Kanban, list and Gantt views." },
  { key: "timesheets", name: "Timesheets", family: "services", line: "Track time and bill it." },
  { key: "planning", name: "Planning", family: "services", line: "Shifts and resources on one schedule." },
  { key: "appointments", name: "Appointments", family: "services", line: "Let people book time with you." },
  { key: "helpdesk", name: "Helpdesk", family: "services", line: "Tickets, SLAs and self-service." },
  { key: "field-service", name: "Field Service", family: "services", line: "Onsite work, now part of Planning in Odoo 20." },
  { key: "live-chat", name: "Live Chat", family: "services", line: "Talk to site visitors as they browse." },
  // Productivity
  { key: "discuss", name: "Discuss", family: "productivity", line: "Channels, messages and one inbox." },
  { key: "documents", name: "Documents", family: "productivity", line: "Files kept with the records they belong to." },
  { key: "knowledge", name: "Knowledge", family: "productivity", line: "A shared library of how things are done." },
  { key: "voip", name: "VoIP", family: "productivity", line: "Calls logged on the customer's record." },
  { key: "iot", name: "IoT", family: "productivity", line: "Connect scales, printers and scanners." },
  { key: "approvals", name: "Approvals", family: "productivity", line: "Requests that need a yes or a no." },
  // Platform
  { key: "ai", name: "AI", family: "platform", line: "Agents and AI tools inside the apps." },
  { key: "studio", name: "Studio", family: "platform", line: "Build and change apps without code." },
];

export const appByKey = (key: string) => apps.find((a) => a.key === key);

export type Product = {
  slug: ProductSlug;
  /** Full name as the pages use it. */
  name: string;
  /** Short name for the chip line and the menu. */
  short: string;
  tier: "main" | "support";
  /** What the family is for, in a word or two. */
  stage: string;
  tagline: string;
  /** Two sentences for the index. */
  summary: string;
  points: string[];
  /** The family's accent, taken from the colours of Odoo's own icons. */
  color: string;
  /** The icon that stands for the family (one of its apps). The editions page is not an app, so it has none. */
  icon?: string;
};

export const products: Product[] = [
  {
    slug: "finance",
    name: "Finance",
    short: "Finance",
    tier: "main",
    stage: "Account",
    tagline: "Books, invoices, expenses and signatures on one set of records.",
    summary:
      "Accounting, Invoicing, Expenses, Sign, Spreadsheet and ESG draw on the same records as the rest of Odoo, so a sale or a purchase reaches the books without being typed twice.",
    points: ["Bank reconciliation", "E-invoicing", "Expense reports", "E-signatures"],
    color: "#b26aa0",
    icon: "accounting",
  },
  {
    slug: "sales",
    name: "Sales",
    short: "Sales",
    tier: "main",
    stage: "Sell",
    tagline: "From the first lead to the renewal, and the till in between.",
    summary:
      "CRM, Sales, Subscriptions, Point of Sale and Rental cover the whole way a customer buys, from a lead on a pipeline to a quotation, an order, a shop receipt or a renewal.",
    points: ["Pipeline", "Quotations", "Recurring billing", "Shop and restaurant POS"],
    color: "#f86126",
    icon: "sales",
  },
  {
    slug: "websites",
    name: "Websites",
    short: "Websites",
    tier: "main",
    stage: "Publish",
    tagline: "A website, a shop and a community that share your data.",
    summary:
      "Website, eCommerce, Events, eLearning, Blog and Forum let you publish and sell online from the same database that holds your stock, customers and orders.",
    points: ["Drag-and-drop pages", "Online shop", "Event tickets", "Courses"],
    color: "#2ebcfa",
    icon: "website",
  },
  {
    slug: "supply-chain",
    name: "Supply Chain",
    short: "Supply chain",
    tier: "main",
    stage: "Make and move",
    tagline: "Stock, production and purchasing that keep each other honest.",
    summary:
      "Inventory, Manufacturing, Purchase, PLM, Quality and Maintenance cover what you buy, make, store and ship, with replenishment and traceability running through all of it.",
    points: ["Replenishment", "Barcodes and lots", "Bills of materials", "Quality checks"],
    color: "#fbb945",
    icon: "inventory",
  },
  {
    slug: "human-resources",
    name: "Human Resources",
    short: "HR",
    tier: "main",
    stage: "Employ",
    tagline: "People, time, pay and performance in one place.",
    summary:
      "Employees, Recruitment, Time Off, Appraisals, Payroll and Fleet follow a person from the job posting to the payslip, using the same records for every step.",
    points: ["Applicant pipeline", "Leave and approvals", "Payslips", "Appraisals"],
    color: "#1ad3bb",
    icon: "employees",
  },
  {
    slug: "marketing",
    name: "Marketing",
    short: "Marketing",
    tier: "main",
    stage: "Reach",
    tagline: "Email, SMS, social and WhatsApp, tied to the customer record.",
    summary:
      "Email Marketing, SMS Marketing, Social Marketing, Marketing Automation, WhatsApp and Surveys reach people and report back what each message earned.",
    points: ["Segments", "Journeys", "WhatsApp", "Campaign results"],
    color: "#fc868b",
    icon: "email-marketing",
  },
  {
    slug: "services",
    name: "Service Delivery",
    short: "Delivery",
    tier: "main",
    stage: "Deliver",
    tagline: "Projects, time, tickets and fieldwork, billed from the same place.",
    summary:
      "Project, Timesheets, Planning, Appointments, Helpdesk, Field Service and Live Chat run the delivery side of a service business and hand time and materials straight to invoicing.",
    points: ["Kanban and Gantt", "Timesheets", "SLAs", "Field visits"],
    color: "#7a8cf0",
    icon: "project",
  },
  {
    slug: "productivity",
    name: "Productivity",
    short: "Productivity",
    tier: "main",
    stage: "Connect",
    tagline: "Conversations, files and knowledge that live beside the work.",
    summary:
      "Discuss, Documents, Knowledge, VoIP, IoT and Approvals keep messages, files, phone calls, devices and sign-offs attached to the records they are about.",
    points: ["One inbox", "Document hub", "Knowledge pages", "Connected devices"],
    color: "#9aa9c7",
    icon: "discuss",
  },
  {
    slug: "ai",
    name: "Odoo AI",
    short: "AI",
    tier: "support",
    stage: "AI",
    tagline: "AI agents and tools inside the apps you already use.",
    summary: "Agents with their own instructions, tools and knowledge, plus AI fields and AI in email, chat and transcription.",
    points: ["Agents", "AI fields", "Voice transcription", "MCP"],
    color: "#c27ab0",
    icon: "ai",
  },
  {
    slug: "studio",
    name: "Odoo Studio",
    short: "Studio",
    tier: "support",
    stage: "Customise",
    tagline: "Change your apps, or build a new one, without code.",
    summary: "Add fields, rearrange screens, automate actions, design documents and set approvals by drag and drop.",
    points: ["Fields and views", "Automation", "Documents", "Approvals"],
    color: "#4f7fe0",
    icon: "studio",
  },
  {
    slug: "editions-and-hosting",
    name: "Editions and hosting",
    short: "Editions and hosting",
    tier: "support",
    stage: "Run it",
    tagline: "Community or Enterprise, and where Odoo runs.",
    summary: "Odoo Community and Odoo Enterprise, and the three ways to host it: Odoo Online, Odoo.sh and on-premise.",
    points: ["Community and Enterprise", "Odoo Online", "Odoo.sh", "On-premise"],
    color: "#8f9aa6",
  },
];

export const mainProducts = products.filter((p) => p.tier === "main");
export const supportProducts = products.filter((p) => p.tier === "support");

export const productBySlug = (slug: ProductSlug) => products.find((p) => p.slug === slug)!;
export const productPath = (slug: ProductSlug) => `${OD_HUB}/${slug}`;
export const appsOf = (family: FamilySlug) => apps.filter((a) => a.family === family);
