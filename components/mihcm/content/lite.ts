import type { ProductContent } from "../content-types";

// MiHCM Lite. Every statement below comes from MiHCM's own pages (the MiHCM Lite page, the home page and the About page),
// read in November 2026. Client quotes on those pages have been left out.

export const lite: ProductContent = {
  slug: "lite",
  crumb: "MiHCM Lite",
  eyebrow: "MiHCM Lite",
  title: ["HR for small teams with big plans,", "up to 250 people."],
  lede: "MiHCM Lite is a cloud HRIS for start-ups and small businesses. It covers the HR work a small team cannot afford to get wrong (employee records, payroll, time and attendance) with analytics on top, on web and mobile, and tailored to your country's labour laws.",
  primary: { label: "See what is inside", href: "#explore" },
  secondary: { label: "Lite or Enterprise?", href: "#compare" },
  note: "MiHCM launched Lite in 2019 as its SaaS product for small businesses. MiA ONE, its AI assistant, works with Lite too.",
  hero: {
    app: "MiHCM Lite · Home",
    icon: "core",
    label: "Illustration of a small-business HR home page: headcount, today's attendance, leave to approve and the next payroll run. Sample data.",
    tiles: [
      { h: "Employees", k: "64", s: "One company" },
      { h: "Checked in today", k: "58", s: "6 on leave", tone: "ok" },
      { h: "Payroll", k: "28th", s: "Checklist 3 of 4", tone: "wr" },
    ],
    rows: {
      title: "Waiting on you",
      items: [
        { a: "Annual leave", b: "Employee A", pill: { t: "To approve", tone: "wr" } },
        { a: "Overtime, Saturday", b: "Employee B", pill: { t: "To approve", tone: "wr" } },
        { a: "Profile update", b: "Employee C", pill: { t: "Done", tone: "ok" } },
      ],
    },
  },
  heroCaption: "Illustration of a MiHCM Lite home page, simplified. Sample data.",

  does: {
    eyebrow: "At a glance",
    title: "The HR basics, done properly.",
    lede: "MiHCM sums Lite up in six lines. It is for start-ups and small businesses with straightforward HR operations, up to 250 employees.",
    items: [
      { title: "Up to 250 employees", body: "Sized for start-ups and small businesses with straightforward HR operations." },
      { title: "Three complete modules", body: "Core HRIS, Payroll, and Time & Attendance, with HR analytics and reports across all three." },
      { title: "Web and mobile", body: "Employees clock in, submit timesheets and handle leave from any device." },
      { title: "Your country's rules", body: "Tailored to country labour laws and regulations; MiHCM says payroll is localised to Sri Lankan statutory requirements, with changes applied as they happen." },
      { title: "Analytics included", body: "Standard reports, a workforce snapshot, dashboards for headcount, turnover and diversity, and an advanced search." },
      { title: "An AI assistant", body: "MiA ONE handles leave requests, payslips and everyday HR questions in a conversation, and clocks people in by GPS." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Four parts of MiHCM Lite, up close.",
    lede: "Pick one to see what it covers, as MiHCM describes it.",
    tabs: [
      {
        id: "core-hris",
        label: "Core HRIS",
        icon: "core",
        title: "Employee records and the lifecycle around them",
        tagline: "Simplified HR administration for a small company.",
        points: [
          "Employee profiles hold each person's information, important documents and letters, and users and roles are assigned per module.",
          "Organisation charts with clear reporting lines, for as many companies as you run.",
          "Organisation planning defines job descriptions, qualifications and experience, with automated approval workflows at each level.",
          "Employee dynamics covers transfers, promotions, resignations, terminations and reactivations.",
          "Self-service lets employees oversee their attendance, submit timesheets and handle their leave.",
        ],
        look: { title: "Small, but not simplistic", body: "Lite keeps the same idea as the enterprise suite: one profile per person, with every movement recorded against it." },
        screen: {
          app: "Core HRIS · Profile",
          icon: "core",
          label: "Illustration of an employee profile in MiHCM Lite with documents and a recent promotion. Sample data.",
          rows: { title: "Documents", items: [{ a: "Appointment letter", pill: { t: "Signed", tone: "ok" } }, { a: "Promotion letter", pill: { t: "New", tone: "in" } }, { a: "ID copy", pill: { t: "Missing", tone: "wr" } }] },
          steps: { title: "Movements", items: [{ t: "Joined", state: "done" }, { t: "Confirmed", state: "done" }, { t: "Promoted", state: "now" }] },
        },
      },
      {
        id: "payroll",
        label: "Payroll",
        icon: "payroll",
        title: "Payroll with the statutory rules built in",
        tagline: "Automated calculations, a checklist, and payslips that send themselves.",
        points: [
          "Payroll designed for country-specific compliance, localised to Sri Lankan statutory requirements.",
          "Run a payroll checklist, including attendance and loans, before you process salaries.",
          "Integrated with Time & Attendance, so attendance and overtime are calculated automatically.",
          "Reconcile allowances, deductions and overtime before you pay.",
          "Monthly statutory, attendance and leave reports.",
          "Download the payroll file, upload it to any bank, and payslips are sent automatically.",
        ],
        look: { title: "A checklist before the money moves", body: "Attendance and loans are confirmed first, so the payroll run starts from numbers that have already been checked." },
        screen: {
          app: "Payroll · Process",
          icon: "payroll",
          label: "Illustration of a payroll checklist with reconciliation totals. Sample data.",
          steps: { title: "Checklist", items: [{ t: "Attendance confirmed", state: "done" }, { t: "Loans updated", state: "done" }, { t: "Reconciliation", state: "now" }, { t: "Bank file and payslips" }] },
          bars: { title: "Reconciliation", rows: [["Allowances", 60, "Matched", "g"], ["Deductions", 45, "Matched", "g"], ["Overtime", 30, "2 to check", "o"]] },
        },
      },
      {
        id: "time-attendance",
        label: "Time & Attendance",
        icon: "time-attendance",
        title: "Time tracking with GPS, rosters and any device",
        tagline: "Hours, timesheets and locations, without manual clocking.",
        points: [
          "Clock in and out with exact GPS locations and submit daily timesheets from any device.",
          "Unlimited, flexible and split shifts, including shifts that cross midnight.",
          "Connect any biometric device: facial clocking, fingerprint or iris recognition.",
          "Single, double or triple overtime pay, whichever policy applies.",
          "Reports on work hours, absenteeism and overtime, filtered by demographics.",
        ],
        look: { title: "Attendance that feeds payroll", body: "Because attendance and payroll are one system, overtime worked is overtime paid, with no spreadsheet in between." },
        screen: {
          app: "Time & Attendance · Roster",
          icon: "time-attendance",
          label: "Illustration of a weekly roster with a night shift crossing midnight and overtime totals. Sample data.",
          rows: { title: "This week", items: [{ a: "Day shift", b: "08:00–17:00", pill: { t: "12 staff", tone: "in" } }, { a: "Night shift", b: "22:00–06:00", pill: { t: "6 staff", tone: "in" } }, { a: "Overtime", b: "Double rate", pill: { t: "14 hrs", tone: "wr" } }] },
        },
      },
      {
        id: "analytics",
        label: "HR Analytics",
        title: "Numbers turned into a picture of the workforce",
        tagline: "Reports, a snapshot, dashboards and search.",
        points: [
          "Standard reports with real-time data on attendance, leave and more.",
          "A snapshot view of the whole workforce: demographics, movements and more.",
          "Workforce analytics and a dashboard for headcount, turnover and diversity.",
          "Advanced search to build tailored queries and get answers instantly.",
        ],
        look: { title: "Small teams need numbers too", body: "Turnover and absenteeism matter at 60 people as much as at 6,000. Lite reports them from the same records it pays from." },
        screen: {
          app: "Analytics · Workforce",
          label: "Illustration of a small-business workforce dashboard with headcount by department. Sample data.",
          bars: { title: "Headcount by department", rows: [["Operations", 80, "31"], ["Sales", 45, "17", "o"], ["Finance", 20, "8", "g"], ["Admin", 18, "8", "l"]] },
        },
      },
    ],
  },

  blocks: [
    {
      id: "compare",
      kind: "pairs",
      eyebrow: "Lite or Enterprise?",
      title: "Two editions, sized differently.",
      lede: "MiHCM sizes the two editions by organisation: Lite for start-ups and small businesses, Enterprise for medium and large ones.",
      a: "Question",
      b: "How the two compare",
      rows: [
        { l: "Size", r: "Lite is for up to 250 employees. Enterprise is for organisations of 250 to 20,000+ people." },
        { l: "Scope", r: "Lite covers Core HRIS, Payroll, and Time & Attendance with analytics. Enterprise adds talent management (ten modules), richer self-service, Syntra and SmartAssist, across every entity." },
        { l: "Countries", r: "Lite's payroll is localised to Sri Lankan requirements on MiHCM's Sri Lanka site. Enterprise runs native payroll in 13 countries." },
        { l: "Complexity", r: "MiHCM describes Lite as great for straightforward HR operations. Enterprise is configured around complex structures, multi-entity payroll and unique business rules." },
        { l: "Analytics", r: "Both include reporting. MiHCM's Data & AI services, such as Power BI dashboards and predictive analytics, are offered to users of either edition." },
        { l: "AI", r: "MiA ONE is part of both. SmartAssist and Syntra are part of Enterprise." },
      ],
      note: "Growing out of Lite? The same company makes both, so moving up to Enterprise is a conversation about scope, not a change of vendor.",
    },
  ],

  scenario: {
    eyebrow: "A worked example",
    title: "A month in a small company, start to finish.",
    lede: "One month followed through MiHCM Lite, from what MiHCM's pages say each part does. It is an illustration, not a promise of any particular set-up.",
    steps: [
      { t: "Clock in", s: "Staff check in on their phones, inside the geofence.", icon: "time-attendance" },
      { t: "Ask MiA", s: "An employee asks MiA ONE for leave and confirms the form.", icon: "mia-one" },
      { t: "Approve", s: "The manager approves leave and overtime.", icon: "core" },
      { t: "Check", s: "The payroll checklist confirms attendance and loans.", icon: "payroll" },
      { t: "Pay", s: "The bank file goes out and payslips are sent.", icon: "payroll" },
    ],
    note: "Illustrative. A real project sets the leave policies, shift patterns and approval rules.",
  },

  faq: [
    { q: "How many employees can MiHCM Lite handle?", a: "MiHCM positions Lite for start-ups and small businesses of up to 250 employees. Larger organisations are served by MiHCM Enterprise." },
    { q: "Does it handle Sri Lankan payroll?", a: "Yes. MiHCM's Sri Lanka site says Lite's payroll is localised to Sri Lankan statutory requirements, with changes applied as they happen. Our MiHCM overview explains what Sri Lankan payroll involves: EPF, ETF, gratuity and APIT." },
    { q: "Does it work on mobile?", a: "Yes. MiHCM describes a web and mobile experience: employees clock in and out with GPS, submit timesheets and handle leave from any device, and MiA ONE works on web, iOS and Android." },
    { q: "Which attendance devices does it support?", a: "MiHCM says Lite connects to any biometric device, including facial, fingerprint and iris recognition." },
    { q: "Is there AI in Lite?", a: "MiA ONE, MiHCM's personal AI assistant, appears on the Lite page: it handles leave requests, payslips and everyday HR questions in a conversation, shares announcements and tracks attendance by GPS." },
    { q: "Can we move up to Enterprise later?", a: "Both editions come from MiHCM. Moving up is a question of adding the modules and entities you need, which we would scope with you." },
  ],
  sources: [
    { label: "MiHCM Lite", href: "https://mihcm.com/en-lk/mihcm-lite" },
    { label: "MiHCM home page", href: "https://mihcm.com/en-lk" },
    { label: "MiHCM Data & AI", href: "https://mihcm.com/en-lk/mihcm-data-ai" },
    { label: "About MiHCM", href: "https://mihcm.com/en-lk/about-us" },
  ],
  checked: "Checked against MiHCM's own pages in November 2026.",
};
