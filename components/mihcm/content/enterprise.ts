import type { ProductContent } from "../content-types";

// MiHCM Enterprise. Every statement below comes from MiHCM's own pages (the MiHCM Enterprise page, its FAQ, the Trust
// Portal and the payroll page), read in November 2026. Customer stories, testimonials and customer counts on those pages
// have been left out.

export const enterprise: ProductContent = {
  slug: "enterprise",
  crumb: "MiHCM Enterprise",
  eyebrow: "MiHCM Enterprise",
  title: ["All-in-one HR for Asia,", "hire to retire."],
  lede: "MiHCM Enterprise is the full HCM suite for organisations of 250 to 20,000+ people. It covers the whole employee lifecycle across every entity you run, with native statutory payroll in 13 countries across South and South East Asia, three AI products with three different jobs, and the security and deployment options a bank or a listed group expects.",
  primary: { label: "See the product stack", href: "#explore" },
  secondary: { label: "Who it is for", href: "#roles" },
  note: "MiHCM sells two editions. MiHCM Lite is the smaller one, for up to 250 employees.",
  hero: {
    app: "MiHCM · Group overview",
    icon: "core",
    label: "Illustration of a group HR overview: headcount across three entities, approvals waiting, and a payroll run moving through its checklist. Sample data.",
    tiles: [
      { h: "Headcount", k: "4,812", s: "Across 3 entities" },
      { h: "Approvals waiting", k: "27", s: "Leave, claims, transfers", tone: "wr" },
      { h: "Payroll", k: "3 of 3", s: "Countries ready", tone: "ok" },
    ],
    rows: {
      title: "Payroll this month",
      items: [
        { a: "Sri Lanka", b: "EPF, ETF, APIT", pill: { t: "Locked", tone: "ok" } },
        { a: "Malaysia", b: "Statutory reports", pill: { t: "Locked", tone: "ok" } },
        { a: "Bangladesh", b: "Attendance period", pill: { t: "Review", tone: "wr" } },
      ],
    },
    steps: { title: "Payroll checklist", items: [{ t: "Attendance locked", state: "done" }, { t: "Loans and increments", state: "done" }, { t: "Statutory reports", state: "now" }, { t: "Bank file" }] },
  },
  heroCaption: "Illustration of a group overview, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "One platform under every HR process.",
    lede: "MiHCM puts its argument plainly: when performance ratings sit with HR, people costs with Finance and headcount with each country team, a simple question from the CEO takes days to answer. MiHCM Enterprise keeps those facts connected, so the answer already exists.",
    items: [
      { title: "Hire to retire", body: "One employee record carries a person from the job requisition through onboarding, movements, appraisals and learning to resignation and clearance, in every entity of the group." },
      { title: "Payroll in 13 countries", body: "Payroll runs natively across South and South East Asia, not through a bolted-on local partner, with each country's retirement funds, tax, gratuity and social security calculated by the engine." },
      { title: "Built for shift work", body: "Rotating rosters, midnight shifts, overtime ceilings and biometric devices from any vendor, for factories and frontline teams as well as offices." },
      { title: "Three AI products", body: "SmartAssist drafts documents and screens candidates, MiA ONE answers everyday questions by chat or voice, and Syntra gives leadership foresight on attrition and burnout risk." },
      { title: "Security it can prove", body: "ISO/IEC 27001, ISO/IEC 27701 and SOC 2 Type II, data hosted in Singapore with recovery in Hong Kong, a separate database for each client, and the option of your own Azure tenant." },
      { title: "Alongside your ERP", body: "REST APIs, webhooks and OAuth 2.0 connect it to the group ERP and finance systems, and it can go live module by module or entity by entity." },
    ],
  },

  explore: {
    eyebrow: "The product stack",
    title: "Four parts, seventeen modules.",
    lede: "MiHCM draws MiHCM Enterprise as four parts that work together. Pick one to see what is inside; each has its own page.",
    tabs: [
      {
        id: "workforce",
        label: "Workforce Management",
        icon: "core",
        title: "One foundation under every core HR process",
        tagline: "MiHCM Core, Payroll, Time & Attendance and Organisation Planning.",
        points: [
          "A single employee record holds every personal, contact, employment and document detail, with a completion indicator that flags what is missing.",
          "Payroll is one engine across 13 countries, with each country's statutory calculations and authority-ready reports built in.",
          "Attendance rules for rotating rosters, flexi and midnight shifts, grace periods and overtime ceilings are set once, and attendance periods lock before payroll runs.",
          "Org charts render live from the organisation set-up, and headcount requests route through approval into one plan that Finance and HR share.",
        ],
        look: { title: "The record everything depends on", body: "Payroll, attendance, talent and analytics all read the same profile, so a change made once is a change made everywhere." },
        screen: {
          app: "MiHCM Core · Employee profile",
          icon: "core",
          label: "Illustration of an employee profile with a completion indicator and a lifecycle timeline. Sample data.",
          tiles: [{ h: "Profile complete", k: "92%", s: "2 fields missing", tone: "wr" }, { h: "Entity", k: "LK-01", s: "Colombo" }],
          steps: { title: "Timeline", items: [{ t: "Joined", state: "done" }, { t: "Confirmed", state: "done" }, { t: "Promoted", state: "done" }, { t: "Transfer requested", state: "now" }] },
        },
      },
      {
        id: "talent",
        label: "Talent Management",
        icon: "performance",
        title: "Hire to succession, on one connected journey",
        tagline: "Ten connected modules for the whole talent lifecycle.",
        points: [
          "Recruitment and Onboarding take a role from requisition and approval to offer letter, e-signature and a new hire's first-day checklist.",
          "Performance Management sets goals and KPIs, runs appraisals and 360° feedback, and plots potential on a nine-box grid.",
          "Succession Planning, Learning Administration and the Learning Management System build on those results.",
          "Compensation Planning, Benefits Management, Expense Claims and Employee Engagement complete the set.",
        ],
        look: { title: "Results that travel", body: "MiHCM says Performance Management feeds Learning, Succession Planning, Compensation Planning and Workforce Analytics, so an appraisal is not the end of the trail." },
        screen: {
          app: "Performance · Nine-box",
          icon: "performance",
          label: "Illustration of a nine-box talent grid with counts in each box. Sample data.",
          bars: { title: "Potential and performance", rows: [["High potential", 64, "18 people", "g"], ["Core contributors", 90, "142 people"], ["Needs support", 22, "9 people", "o"]] },
        },
      },
      {
        id: "experience",
        label: "Employee Experience",
        icon: "mia-one",
        title: "Every request in one place, whoever is asking",
        tagline: "Web self-service, MiA ONE and a shop-floor kiosk.",
        points: [
          "Leave, payslips, claims, timesheets and profile changes in one web app, with every request tracked to approval.",
          "MiA ONE handles the same requests in a conversation, by chat or voice, on web, iOS and Android.",
          "Managers approve promotions, leave and training nominations in the same place instead of three apps.",
          "A kiosk on a shared device serves staff without a workstation: check-in, leave requests and meal ordering.",
        ],
        look: { title: "Three ways in, one record", body: "Whether an employee uses the web, MiA ONE or the kiosk, the request lands in the same workflow and the same record." },
        screen: {
          app: "MiA ONE",
          icon: "mia-one",
          label: "Illustration of an employee asking MiA ONE for leave and getting a pre-filled form. Sample data.",
          chat: { title: "MiA ONE", msgs: [{ who: "u", t: "I need Friday off." }, { who: "a", t: "You have 9 annual leave days left. I have filled in a request for Friday; check it and submit." }] },
        },
      },
      {
        id: "data-ai",
        label: "Data & AI",
        icon: "syntra",
        title: "Reports before the question, and AI with distinct jobs",
        tagline: "Reporting, Power BI, Syntra and SmartAssist.",
        points: [
          "Ready-made reports across every module, each user seeing only what their permissions allow.",
          "Live dashboards that drill from organisation-wide trends to a single employee, and a suite of Power BI dashboards built in.",
          "A visual query builder for the report that does not exist yet, with no query language.",
          "Syntra answers leadership questions in plain language and simulates the effect of a restructure before it happens.",
        ],
        look: { title: "Three AI products, three jobs", body: "MiHCM describes its AI as three tools rather than one chatbot: SmartAssist for documents and screening, MiA ONE for everyday answers, and Syntra for leadership foresight." },
        screen: {
          app: "Syntra",
          icon: "syntra",
          label: "Illustration of a leadership question to Syntra about attrition by department. Sample data.",
          chat: { title: "Syntra", msgs: [{ who: "u", t: "Where is attrition risk rising this quarter?" }, { who: "a", t: "Two departments show rising risk, both with overtime above their ceiling for six weeks. Shall I chart it by site?" }] },
        },
      },
    ],
  },

  blocks: [
    {
      id: "payroll",
      kind: "pairs",
      eyebrow: "Local depth, regional reach",
      title: "Native statutory payroll in 13 countries.",
      lede: "MiHCM's position is that it supports fewer markets than engines that list a hundred, and supports them properly: real contribution rules, real filing outputs and real statutory reporting for each authority.",
      a: "Region",
      b: "Countries, as MiHCM lists them",
      rows: [
        { l: "South Asia", r: "Sri Lanka, Bangladesh, the Maldives and Pakistan." },
        { l: "South East Asia", r: "Brunei, Cambodia, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, Thailand and Vietnam." },
        { l: "Built into the engine", r: "Retirement funds, tax, gratuity and social security calculate against local rules, so the system catches compliance mistakes before an audit does." },
        { l: "Reports per authority", r: "Contribution, reconciliation and remittance reports come out in the format each country's authorities expect, ready to submit rather than rebuilt by Finance." },
        { l: "India", r: "India is not on MiHCM's list. For an Indian entity we would plan payroll separately and connect it to MiHCM." },
      ],
      note: "MiHCM's payroll page names eleven of these markets; its Enterprise page and FAQ name all thirteen. Some countries have no country page yet. We confirm coverage for each of your entities at the start of a project.",
    },
    {
      id: "industries",
      kind: "defs",
      eyebrow: "Solutions by industry",
      title: "The same platform, set up for how each industry works.",
      lede: "MiHCM publishes industry pages for five sectors. Each shows the same platform configured around that industry's shifts, workforce structure and compliance needs.",
      items: [
        { title: "Apparel", body: "Three shifts on a factory floor, and thousands of line workers who have never logged into a computer: attendance, kiosks and the mobile app meet them where they are." },
        { title: "Manufacturing", body: "Several sites across several countries, each on its own rules, run by one engine so group HR gets one headcount instead of three." },
        { title: "Banking, financial services and insurance", body: "An HR platform that holds the same sensitive data as core banking, held to the same security bar." },
        { title: "Hospitality", body: "Dozens of properties, most staff on rotating shifts and high turnover: onboarding, attendance and everyday requests kept consistent at every property." },
        { title: "Telecommunications", body: "A field engineer hours from the nearest office and a head office on a nine-to-five rhythm, served by the same system." },
      ],
    },
    {
      id: "trust",
      kind: "defs",
      eyebrow: "Security, trust and data residency",
      title: "Built to pass the security review.",
      lede: "From MiHCM's Enterprise FAQ and its Trust Portal, which publishes its certificates for download and answers a vendor security questionnaire of 111 controls across 11 domains.",
      items: [
        { title: "Certifications", body: "ISO/IEC 27001:2022 for information security, ISO/IEC 27701:2025 for privacy, ISO 9001:2015 for quality, and SOC 2 Type II across security, availability, confidentiality, processing integrity and privacy." },
        { title: "Where the data lives", body: "Primary hosting in Azure South East Asia (Singapore) with disaster recovery in Azure East Asia (Hong Kong). Each client has its own isolated database, and data stays in the region except for approved support access or authorised integrations." },
        { title: "Your own cloud, if you need it", body: "Deployment ranges from shared multi-tenant infrastructure to a fully dedicated environment, including deployment inside your own Azure tenant for stricter data-sovereignty needs." },
        { title: "Encryption and access", body: "TLS 1.2+ in transit and encryption at rest, role-based access control, single sign-on, MFA, audit trails for critical actions and periodic access reviews." },
        { title: "Data protection law", body: "MiHCM supports the standard data-subject rights and aligns with GDPR and the personal data protection acts of Sri Lanka, Singapore, Malaysia and Indonesia. It acts as a data processor: customers own their data, and it is not sold or used for advertising." },
        { title: "AI and your data", body: "The Trust Portal says customer data is kept logically isolated and is not used to train foundation AI models, and that prompts and responses may be retained under MiHCM's governance controls for evaluation and improvement." },
      ],
    },
  ],

  scenario: {
    eyebrow: "A worked example",
    title: "“Are bonuses being awarded fairly?”",
    lede: "MiHCM's own example of the question no report was built for: are bonuses fair this cycle, across every region and entity? Without connected data, HR and Finance reconcile it by hand for days. With it, the answer is assembled from records that already agree.",
    steps: [
      { t: "Ratings", s: "Performance ratings for the cycle, by employee.", icon: "performance" },
      { t: "Pay", s: "Bonus amounts and people costs from payroll.", icon: "payroll" },
      { t: "Structure", s: "Headcount and cost centres for every entity.", icon: "organisation-planning" },
      { t: "Budget", s: "Compensation planned within the approved budget.", icon: "compensation" },
      { t: "Answer", s: "Asked of the data in plain language, region by region.", icon: "syntra" },
    ],
    note: "Illustrative: built from what MiHCM's pages say each module does. Which data sits where, and who may see it, is decided in a project.",
  },

  roles: {
    eyebrow: "Who it is built for",
    title: "Seven perspectives, one platform.",
    lede: "MiHCM sets out MiHCM Enterprise from seven points of view. In their words, roughly:",
    rows: [
      { who: "Employees", does: "Want an answer and a way to get things done without learning an HR system or waiting on HR." },
      { who: "Managers", does: "Should not have to chase approvals across systems, or piece information together, to see what is happening in their team." },
      { who: "HR executives and managers", does: "Must deliver a seamless employee experience while keeping requests, records, permissions and compliance running at once." },
      { who: "CHROs", does: "Are asked to shape the future workforce, but fragmented records and retrospective reports hide the whole picture." },
      { who: "CIOs, IT and security", does: "Need HR technology that does not open security gaps, scatter access controls or leave doubt about where workforce data is processed." },
      { who: "CFOs", does: "Manage people costs among their largest expenses, often without a connected view of spend, pay commitments and HR effort." },
      { who: "Group HR directors", does: "Should not have to rebuild processes, duplicate systems and request separate reports from every country to see the regional workforce." },
    ],
  },

  fits: {
    eyebrow: "Coexistence and integration",
    title: "It sits beside your ERP, not in place of it.",
    lede: "MiHCM is built to run alongside existing systems rather than replace them on one go-live date.",
    rows: [
      { name: "ERP and finance", how: "Workforce and payroll data move through REST APIs managed in Azure API Management, with webhooks pushing workforce events as they happen." },
      { name: "Identity and access", how: "OAuth 2.0 authorisation and single sign-on." },
      { name: "Attendance hardware", how: "Biometric and access-control devices from any vendor, geo-fenced mobile check-in and shared kiosks feed one attendance record." },
      { name: "Everyday tools", how: "Calendars, job boards and Power BI; interview invitations can carry Microsoft Teams links." },
      { name: "Anything bespoke", how: "MiHCM offers a change-request path for integrations it does not already cover." },
      { name: "Phased roll-out", how: "Go live module by module or entity by entity, and run alongside the old system until each part is ready." },
    ],
    note: "Running SAP as well? Our SAP integration page describes how payroll postings from an HR system such as MiHCM flow into SAP finance.",
  },

  ai: {
    eyebrow: "AI in MiHCM Enterprise",
    title: "Three AI products, three different jobs.",
    lede: "MiHCM's point is that one chatbot on the login screen does none of these jobs well, so it built three tools.",
    items: [
      { title: "MiHCM SmartAssist", body: "Drafts HR letters, templates and job descriptions, and scores every applicant from 0 to 100 against criteria you set." },
      { title: "MiA ONE", body: "Answers policy questions with sourced links, drafts summaries on request, and completes everyday requests by chat or voice." },
      { title: "Syntra", body: "Conversational analytics for leadership: predicts attrition and burnout risk, and simulates a restructure before it happens." },
    ],
    note: "Each has its own page here: SmartAssist and Syntra under Data & AI, MiA ONE under Employee Experience.",
  },

  start: {
    eyebrow: "Getting started",
    title: "What a MiHCM Enterprise project involves.",
    lede: "MiHCM describes an enterprise implementation that configures the system around complex structures, multi-entity payroll and unique business rules. This is how we would approach it with you.",
    steps: [
      { title: "Map the organisation", body: "Entities, legislative entities, countries, cost centres and reporting lines, which MiHCM tags so each follows its own labour law." },
      { title: "Set the foundations", body: "Employee records, leave policies, shift patterns and payroll rules for each country, migrated from the systems you run today." },
      { title: "Run in parallel", body: "Payroll alongside the old system until the numbers agree, then lock attendance periods and go live." },
      { title: "Add the next module", body: "Talent, self-service and AI as each part of the business is ready, module by module or entity by entity." },
    ],
    decide: {
      title: "Decisions to settle before you start",
      items: [
        "Which countries and entities go first, and whether each is on MiHCM's payroll list.",
        "Where the data should live: MiHCM's shared or dedicated environment, or your own Azure tenant.",
        "Which systems MiHCM must talk to on day one, such as the ERP, banks and attendance devices.",
        "Which modules start now and which can wait.",
        "Whether staff without a workstation need the kiosk or MiA ONE on their own phones.",
      ],
    },
  },

  faq: [
    { q: "Who is MiHCM Enterprise for?", a: "MiHCM positions it for medium and large organisations, from 250 to 20,000+ people, often across several entities and countries. Smaller organisations, up to 250 employees, are served by MiHCM Lite." },
    { q: "Which countries does its payroll support?", a: "MiHCM's Enterprise FAQ lists native statutory payroll in 13 countries: Brunei, Cambodia, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, Thailand and Vietnam in South East Asia, and Sri Lanka, Bangladesh, the Maldives and Pakistan in South Asia. India is not on the list." },
    { q: "Is it suitable for factories and shift-based operations?", a: "Yes. MiHCM says attendance and overtime rules support complex shift patterns, midnight shifts, configurable overtime ceilings and rates, and biometric devices from any vendor, built for industrial and shift-based work, not just office attendance." },
    { q: "Where is our data hosted?", a: "Primary hosting is Azure South East Asia (Singapore), with disaster recovery replication to Azure East Asia (Hong Kong). Each client's data is in its own isolated database and stays in the region except for approved support access or authorised integrations." },
    { q: "Can we deploy it in our own cloud?", a: "Yes. MiHCM's options run from shared multi-tenant infrastructure to a fully dedicated environment, including deployment inside your own Azure tenant." },
    { q: "Does it support single sign-on?", a: "Yes. MiHCM lists single sign-on alongside role-based access control and periodic access reviews." },
    { q: "Can it run alongside our existing HR or ERP system?", a: "Yes. MiHCM supports a phased roll-out, module by module or entity by entity, and connects through REST APIs, webhooks and OAuth 2.0, with a change-request path for anything bespoke." },
    { q: "What stops a manager overspending the compensation budget?", a: "MiHCM says compensation budgets are approved before planning opens, and recommendations are prevented from exceeding the approved budget: an enforced control, not a reminder." },
    { q: "What is the difference between MiA ONE and the kiosk?", a: "MiA ONE is a conversational assistant on web, iOS and Android for employees and managers. The kiosk is a shared device for employees only, for check-in, leave requests and meal ordering, built for staff without a personal workstation." },
  ],
  sources: [
    { label: "MiHCM Enterprise", href: "https://mihcm.com/en-lk/mihcm-enterprise" },
    { label: "MiHCM Trust Portal", href: "https://trust.mihcm.com/" },
    { label: "MiHCM Payroll (Sri Lanka)", href: "https://mihcm.com/en-lk/solutions/payroll" },
    { label: "MiHCM Core HR", href: "https://mihcm.com/solutions/core-hr?site_locale=en-lk" },
    { label: "MiHCM home page", href: "https://mihcm.com/en-lk" },
  ],
  checked: "Checked against MiHCM's own pages in November 2026.",
};
