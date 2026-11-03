import type { ProductContent } from "../content-types";

// Data & AI. Every statement below comes from MiHCM's own pages (the MiHCM Enterprise page's reporting and AI sections,
// Syntra, MiHCM SmartAssist, MiHCM Data & AI, the Trust Portal and the About page), read in November 2026. Customer case
// studies and their figures have been left out.

export const dataAndAi: ProductContent = {
  slug: "data-and-ai",
  crumb: "Data & AI",
  eyebrow: "Data & AI",
  title: ["The report already exists,", "the moment someone asks."],
  lede: "The board asks for turnover by department, by country, by quarter on a Friday, and the report is usually ready the following Wednesday. MiHCM's Data & AI part is built to close that gap: ready-made reports and live dashboards, Power BI inside MiHCM, a visual query builder, and three AI products with three different jobs.",
  primary: { label: "Explore the tools", href: "#explore" },
  secondary: { label: "AI and your data", href: "#ai" },
  note: "Syntra, MiHCM SmartAssist and MiA ONE are MiHCM's own AI products. MiHCM is a Microsoft Solutions Partner for Data & AI.",
  hero: {
    app: "Syntra",
    icon: "syntra",
    label: "Illustration of a leadership question to Syntra and a chart of turnover by department, ready to export. Sample data.",
    chat: {
      title: "Syntra",
      msgs: [
        { who: "u", t: "Turnover by department this quarter, against last year?" },
        { who: "a", t: "Up in two departments, down in four. The rise is concentrated among staff with under a year of service. Export to PowerPoint?" },
      ],
    },
    bars: { title: "Turnover by department", rows: [["Operations", 68, "14%", "o"], ["Sales", 52, "11%", "o"], ["Finance", 22, "5%", "g"], ["Admin", 18, "4%", "g"]] },
  },
  heroCaption: "Illustration of Syntra, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "From a question to a decision, without the week in between.",
    lede: "MiHCM separates reporting you can rely on from AI that does particular jobs. Both read the same workforce data, and each user sees only what their permissions allow.",
    items: [
      { title: "Reports, ready-made", body: "Pre-built reports across profiles, lifecycle events, attendance and leave, performance, recruitment and training, from contract expiry to overtime claimed versus approved." },
      { title: "Live analytics", body: "Dashboards for workforce, attendance, talent, 360 feedback, training and engagement that drill from the organisation down to one employee." },
      { title: "Power BI, built in", body: "A suite of Power BI dashboards inside MiHCM, and your own Power BI reports alongside them." },
      { title: "The report that does not exist yet", body: "Pick fields and conditions across profile, attendance and recruitment data, see results at once and save the query, with no query language." },
      { title: "AI with three jobs", body: "Syntra for leadership foresight, SmartAssist for documents and screening, and MiA ONE for everyday answers." },
      { title: "Analytics built for you", body: "MiHCM's Data & AI team builds custom dashboards, predictive models and AI solutions for MiHCM Lite and Enterprise users." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Four tools, up close.",
    lede: "Pick one to see what it does, as MiHCM describes it.",
    tabs: [
      {
        id: "reporting",
        label: "Reporting",
        title: "Standard reports, dashboards, Power BI and a query builder",
        tagline: "Workforce reporting that is ready before the question is asked.",
        points: [
          "Ready-made reports across every module, each user seeing only what their permissions allow.",
          "Interactive dashboards for workforce, attendance, talent, 360 feedback, training and engagement, drilling from headcount and turnover trends to a single employee.",
          "Power BI dashboards for Core HR, productivity, learning, benefits, performance, attendance, recruitment and diversity, with your own Power BI reports loading alongside them.",
          "A visual query builder: pick fields and conditions across profile, attendance and recruitment data, save the query and see results straight away.",
        ],
        look: { title: "The Friday question", body: "MiHCM's example: turnover by department, country and quarter is a live dashboard, not a report someone starts building after the board asks." },
        screen: {
          app: "Analytics · Workforce",
          label: "Illustration of a workforce dashboard with headcount and turnover trends. Sample data.",
          tiles: [{ h: "Headcount", k: "4,812", s: "All entities" }, { h: "Turnover", k: "9.4%", s: "Rolling 12 months", tone: "wr" }],
          cols: { title: "Headcount by quarter", values: [4510, 4620, 4705, 4812], labels: ["Q1", "Q2", "Q3", "Q4"] },
        },
      },
      {
        id: "syntra",
        label: "Syntra",
        icon: "syntra",
        title: "Workforce intelligence you can talk to",
        tagline: "Ask. Analyse. Visualise.",
        points: [
          "Ask in natural language and Syntra turns raw data into answers, charts, tables and graphs, with no manual reporting.",
          "It links attendance, performance, resignations and more to explain why a trend is happening, and leaders can keep asking follow-up questions.",
          "MiHCM's Enterprise page says Syntra predicts attrition and burnout risk and simulates the effect of a restructure before it happens.",
          "It connects to MiHCM and to third-party systems by secure API, bringing workforce data into one view.",
          "Findings export to PowerPoint, Excel or PDF, formatted for leadership and board reviews.",
          "Built on Microsoft Azure, with AES-256 encryption, TLS 1.2+, ISO/IEC 27001 and ISO 9001, GDPR and PDPA compliance, and responsible-AI principles.",
        ],
        look: { title: "Insight that explains", body: "Syntra's purpose, in MiHCM's words, is to show why patterns emerge, not just what happened, and to turn analysis into a dialogue." },
        screen: {
          app: "Syntra · Scenario",
          icon: "syntra",
          label: "Illustration of Syntra simulating the effect of merging two departments. Sample data.",
          chat: { title: "Syntra", msgs: [{ who: "u", t: "What happens to span of control if we merge these two teams?" }, { who: "a", t: "Average span rises from 6 to 9. Two managers would exceed 12 reports. Want the options as slides?" }] },
        },
      },
      {
        id: "smartassist",
        label: "SmartAssist",
        icon: "smartassist",
        title: "An AI co-pilot for HR documents and screening",
        tagline: "SmartAssist for Core and SmartAssist for Recruitment.",
        points: [
          "Generates HR letters (confirmation letters, contracts and NDAs) in seconds, personalised with Letter Builder tags and refined by prompt.",
          "Builds templates for feedback, evaluations and surveys, choosing question types, tone and weightings.",
          "Drafts job descriptions, drawing on your existing ones, and lets you adjust them by prompt.",
          "Turns a prompt describing the ideal candidate into screening rules for you to verify, and lets you change them at any point.",
          "Reads candidates' CVs and compiles their applications; candidates can check and edit the result before applying.",
          "Ranks candidates against your criteria, with a drill-down per candidate, and re-screens everyone when criteria change.",
          "MiHCM says it works with MiHCM Enterprise and with other HRIS platforms.",
        ],
        look: { title: "First drafts in minutes", body: "MiHCM's claim for SmartAssist is that first drafts and shortlists take minutes instead of a day, leaving HR to review rather than write." },
        screen: {
          app: "SmartAssist · Screening",
          icon: "smartassist",
          label: "Illustration of SmartAssist ranking applicants against screening criteria. Sample data.",
          rows: { title: "Ranked against your criteria", items: [{ a: "Applicant A", b: "5 of 5 criteria", pill: { t: "92", tone: "ok" } }, { a: "Applicant B", b: "4 of 5 criteria", pill: { t: "81", tone: "ok" } }, { a: "Applicant C", b: "2 of 5 criteria", pill: { t: "47", tone: "wr" } }] },
        },
      },
      {
        id: "services",
        label: "Data & AI services",
        title: "Custom analytics and AI, built by MiHCM's experts",
        tagline: "For MiHCM Lite and Enterprise users.",
        points: [
          "End-to-end data and AI projects using advanced analytics, machine learning and both small and large language models.",
          "Data visualisation with Microsoft Power BI, data clustering and predictive analytics, and custom analytics for your business.",
          "Work across HR, work, ERP and other data, not only MiHCM's own.",
          "Example uses MiHCM names: generating HR templates with language models on Azure, and a knowledge-base assistant that answers questions from your own private document repositories.",
          "Delivered by Microsoft-certified data science, AI and infrastructure experts; MiHCM shows Microsoft Solutions Partner designations for Data & AI and for Digital & App.",
        ],
        look: { title: "Beyond the product", body: "MiHCM's Data & AI page describes projects such as turnover prediction and data warehousing for large employers, built on top of their HR data." },
        screen: {
          app: "Data & AI · Prediction",
          label: "Illustration of a turnover-risk model with employees grouped by risk. Sample data.",
          bars: { title: "Predicted turnover risk", rows: [["High", 18, "42 people", "r"], ["Medium", 34, "96 people", "o"], ["Low", 88, "1,204 people", "g"]] },
        },
      },
    ],
  },

  ai: {
    eyebrow: "AI and your data",
    title: "What MiHCM says about responsible AI.",
    lede: "From MiHCM's Trust Portal, which covers MiA ONE, SmartAssist and Syntra.",
    items: [
      { title: "People stay accountable", body: "AI supports human decisions; accountability remains with people, not algorithms, and insights are meant to be contextual and explainable." },
      { title: "Not used to train foundation models", body: "Customer data is logically isolated and is not used to train foundation AI models, or models across customer datasets." },
      { title: "What may be kept", body: "Prompts and responses may be retained under MiHCM's security and data-governance controls for evaluation, retrieval and prompt improvement." },
      { title: "Hosted on Azure", body: "MiHCM operates on Microsoft Azure, with encryption in transit (TLS 1.2+) and at rest, and a separate isolated database for each client." },
    ],
    note: "Before an AI tool screens candidates or flags people as at risk, we would agree with you who reviews its output and how its criteria are tested.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "Answers for every level.",
    lede: "From MiHCM's Enterprise, Syntra and Data & AI pages.",
    rows: [
      { who: "Leadership and boards", does: "Ask Syntra questions in plain language and take board-ready exports into the meeting." },
      { who: "CHROs", does: "See the complete workforce picture and act on attrition and burnout risk before it hits." },
      { who: "CFOs", does: "Connect people costs, compensation commitments and HR effort in one view." },
      { who: "HR analysts", does: "Build reports with the query builder and extend the Power BI suite with their own reports." },
      { who: "HR teams", does: "Draft letters, templates and job descriptions with SmartAssist, and screen applicants against agreed criteria." },
    ],
  },

  faq: [
    { q: "What is Syntra?", a: "MiHCM's AI-powered HR intelligence product, launched in 2026: a conversational interface for workforce data that answers questions in natural language, explains trends, predicts attrition and burnout risk, simulates restructures, and exports findings to PowerPoint, Excel or PDF." },
    { q: "What is MiHCM SmartAssist?", a: "MiHCM's AI-powered HR co-pilot, announced in 2024. SmartAssist for Core drafts HR letters, templates and job descriptions; SmartAssist for Recruitment builds screening criteria from a prompt and ranks candidates against them." },
    { q: "Does MiHCM support Power BI?", a: "Yes. MiHCM Enterprise includes a suite of Power BI dashboards, and your own Power BI reports load alongside them inside MiHCM." },
    { q: "Is our data used to train AI models?", a: "MiHCM's Trust Portal says customer data is logically isolated and not used to train foundation AI models, nor models across customer datasets. It also says prompts and responses may be retained under its governance controls for evaluation and improvement." },
    { q: "Can MiHCM analyse data from outside MiHCM?", a: "Syntra connects to MiHCM and third-party systems by secure API, and MiHCM's Data & AI services work with HR, work, ERP and other data." },
  ],
  sources: [
    { label: "MiHCM Enterprise (reporting and AI)", href: "https://mihcm.com/en-lk/mihcm-enterprise" },
    { label: "Syntra", href: "https://mihcm.com/syntra?site_locale=en-lk" },
    { label: "MiHCM SmartAssist", href: "https://mihcm.com/en-lk/mihcm-smartassist" },
    { label: "MiHCM Data & AI", href: "https://mihcm.com/en-lk/mihcm-data-ai" },
    { label: "MiHCM Trust Portal", href: "https://trust.mihcm.com/" },
    { label: "About MiHCM", href: "https://mihcm.com/en-lk/about-us" },
  ],
  checked: "Checked against MiHCM's own pages in November 2026.",
};
