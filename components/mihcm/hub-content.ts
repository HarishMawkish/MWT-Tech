// The questions the MiHCM hub answers, in our own words from MiHCM's own pages, read in November 2026. The same text feeds
// the visible FAQ and the FAQ structured data, so the two can never differ.

export const hubFaq: { q: string; a: string }[] = [
  {
    q: "What is MiHCM?",
    a: "MiHCM is an HR and payroll platform built in Asia, part of the Microimage group. MiHCM says it began building HR systems in 1995 and launched its cloud platform in 2017. It now sells two editions, MiHCM Enterprise for organisations of 250 to 20,000+ people and MiHCM Lite for up to 250, with three AI products: MiA ONE, Syntra and MiHCM SmartAssist.",
  },
  {
    q: "Which edition do we need?",
    a: "MiHCM sizes them by organisation. Lite covers Core HRIS, Payroll, and Time & Attendance with analytics for start-ups and small businesses of up to 250 employees. Enterprise covers the full employee lifecycle in 17 modules, across many entities, with native payroll in 13 countries, for 250 to 20,000+ people.",
  },
  {
    q: "Which countries does MiHCM payroll cover?",
    a: "MiHCM's Enterprise page lists native statutory payroll in 13 countries: Sri Lanka, Bangladesh, the Maldives and Pakistan in South Asia, and Brunei, Cambodia, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, Thailand and Vietnam in South East Asia. India is not on the list.",
  },
  {
    q: "Does it handle Sri Lankan payroll?",
    a: "Yes. MiHCM's Sri Lanka payroll page covers APIT/PAYE, EPF and ETF calculations, more than 20 standard and statutory reports including T9, T10 and EPF/ETF returns, and bank files for Sri Lanka's major banks. Our Workforce Management page explains how Sri Lankan payroll works.",
  },
  {
    q: "What about our Indian entity?",
    a: "MiHCM's pages do not list India among its payroll countries, and its site has no India locale. For a group with Indian operations we would plan Indian payroll separately and connect it to MiHCM, and confirm the approach with MiHCM before you commit.",
  },
  {
    q: "Where is our data hosted, and how is it protected?",
    a: "MiHCM hosts primarily in Azure South East Asia (Singapore) with disaster recovery in Azure East Asia (Hong Kong), each client in its own isolated database. It holds ISO/IEC 27001, ISO/IEC 27701, ISO 9001 and SOC 2 Type II, and offers deployment in your own Azure tenant. Its Trust Portal publishes the certificates.",
  },
  {
    q: "Does MiHCM use AI?",
    a: "Yes, in three products with distinct jobs: MiA ONE answers employees and completes requests, MiHCM SmartAssist drafts HR documents and screens candidates, and Syntra gives leadership conversational analytics and foresight. MiHCM's Trust Portal says customer data is not used to train foundation AI models.",
  },
  {
    q: "Can MiHCM connect to our ERP?",
    a: "Yes. MiHCM connects through REST APIs managed in Azure API Management, webhooks and OAuth 2.0, with a change-request path for anything bespoke, and can run alongside existing systems during a phased roll-out.",
  },
  {
    q: "Who implements MiHCM?",
    a: "MiHCM's own teams configure the system around your structures and rules. We help you prepare: mapping entities and processes, cleaning employee data, planning integrations with your ERP and banks, and testing payroll before go-live. Talk to us about your project.",
  },
];
