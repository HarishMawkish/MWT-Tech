// The questions the Odoo hub answers, in our own words from Odoo's own pages and documentation, read in November 2026.
// The same text feeds the visible FAQ and the FAQ structured data, so the two can never differ.

export const hubFaq: { q: string; a: string }[] = [
  {
    q: "What is Odoo?",
    a: "Odoo's own repository describes it as a suite of web-based open-source business apps, which can run standalone or together. On its website Odoo groups its apps into eight families: Finance, Sales, Websites, Supply Chain, Human Resources, Marketing, Services and Productivity. Its current version is Odoo 20, released in September 2026.",
  },
  {
    q: "Do I have to buy every app?",
    a: "No. You add apps as you need them. Odoo's pricing page describes a One App Free plan with one app and unlimited users, a Standard plan with all apps on Odoo Online, and a Custom plan that adds Odoo.sh or on-premise hosting, Studio, agentic AI, multi-company and the external API. If an app depends on others, such as eCommerce on Website and Invoicing, you get the required ones with it.",
  },
  {
    q: "What is the difference between Community and Enterprise?",
    a: "Odoo describes Community as the free and open-source edition, licensed under the GNU LGPLv3, and the core on which Enterprise is built. Enterprise is the shared-source edition, with more functionality including functional support, upgrades and hosting. You can switch from Community to Enterprise at any time, except from a source install.",
  },
  {
    q: "Where can Odoo run?",
    a: "On Odoo Online, where Odoo hosts and manages your database, on Odoo.sh, Odoo's cloud platform for developers, or on your own servers. Odoo Online is incompatible with custom modules and Apps Store modules, so custom code needs Odoo.sh or on-premise. Our editions and hosting page sets out the differences.",
  },
  {
    q: "Does Odoo support our country's tax and payroll rules?",
    a: "India: Odoo's documentation lists a fiscal localisation package covering GST e-invoicing, the e-way bill, GST returns and TDS and TCS alerts, and Odoo's Payroll page lists India among its localisations. Sri Lanka: Odoo 20's release notes say a new localisation package is available, with the chart of accounts, taxes, balance sheet, profit and loss reports and the VAT 001 and WHT 001 reports. It is new, and Odoo's documentation did not yet list Sri Lanka among its packages, nor its Payroll page mention it, when we read them in November 2026. We would test the Sri Lankan package against your statutory returns, and scope payroll, before you commit.",
  },
  {
    q: "Can Odoo be customised?",
    a: "Yes, in two ways. Odoo Studio lets you change fields, views, automation, reports and approvals without coding, and build apps from scratch. Custom modules written in code are hosted on Odoo.sh or on-premise, and Odoo's pricing page says their maintenance is not included in its plans.",
  },
  {
    q: "Does Odoo have AI?",
    a: "Yes. Odoo AI offers configurable agents, AI fields, AI in email templates, voice transcription and AI in Live Chat, and an Odoo database can act as an MCP server for outside agents. Odoo's pages do not name the models behind it or give a data privacy position, and AI use spends in-app purchase credits. Our Odoo AI page covers this in detail.",
  },
  {
    q: "How do I connect Odoo to other systems?",
    a: "Odoo's documentation describes an external JSON-2 API for outside software, which its pricing page lists with the Custom plan. The pages we read describe no ready-made connector to SAP or Salesforce, so such a connection would be built on that API.",
  },
  {
    q: "Who implements Odoo?",
    a: "Odoo's pricing page says small companies can use its Success Packs, mid-size and larger companies (over 50 employees) usually work with a partner who offers local project management, and companies over 250 employees can contact Odoo directly. Implementation is not part of Odoo's plans. We implement Odoo for companies in Sri Lanka and India: talk to us about your project.",
  },
];
