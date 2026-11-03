import type { ProductContent } from "../content-types";

// Employee Experience. Every statement below comes from MiHCM's own pages (MiA ONE, Core HR's employee self-service
// section, the MiHCM Enterprise page and its FAQ, the Trust Portal and the About page), read in November 2026.

export const employeeExperience: ProductContent = {
  slug: "employee-experience",
  crumb: "Employee Experience",
  eyebrow: "Employee Experience",
  title: ["Every request in one place,", "whoever is asking."],
  lede: "A manager with a promotion to approve, a leave request to review and a training nomination to sign off should not need three apps and three logins. MiHCM's employee experience puts leave, payslips, claims, timesheets and profile changes in one place, reached through the web, the mobile app, MiA ONE by chat or voice, or a shared kiosk on the shop floor.",
  primary: { label: "Explore the four ways in", href: "#explore" },
  secondary: { label: "Meet MiA ONE", href: "#mia-one" },
  note: "MiA ONE is MiHCM's personal AI assistant, launched in 2026. Its name and logo are MiHCM's own.",
  hero: {
    app: "MiA ONE",
    icon: "mia-one",
    label: "Illustration of an employee asking MiA ONE to apply for leave and a manager approving it in the same conversation. Sample data.",
    chat: {
      title: "MiA ONE",
      msgs: [
        { who: "u", t: "Apply for leave on the 14th and 15th." },
        { who: "a", t: "Done: two days of annual leave, 7 left after this. Your manager has been asked to approve." },
        { who: "u", t: "And show my last payslip." },
      ],
    },
    rows: {
      title: "My requests",
      items: [
        { a: "Annual leave, 2 days", pill: { t: "Pending", tone: "wr" } },
        { a: "Travel claim", pill: { t: "Approved", tone: "ok" } },
        { a: "Timesheet, week 44", pill: { t: "Submitted", tone: "in" } },
      ],
    },
  },
  heroCaption: "Illustration of MiA ONE, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Self-service that people actually use.",
    lede: "MiHCM's line for employees: they do not want to learn an HR system; they want an answer, and a way to get things done without waiting on HR.",
    items: [
      { title: "One place for every request", body: "Leave, payslips, claims, timesheets and profile changes in one web app, each request tracked to approval." },
      { title: "In a conversation", body: "MiA ONE does the same by chat or voice on web, iOS and Android: ask, confirm the details, move on." },
      { title: "On the phone in your pocket", body: "The self-service app on the App Store and Google Play, with face-recognition check-in, geotagging and geofencing." },
      { title: "On the shop floor", body: "A kiosk on a shared device for staff without a workstation: check-in, leave requests and meal ordering." },
      { title: "For managers too", body: "Team attendance, leave and performance in real time, one-click team summaries and approvals from the home page." },
      { title: "Policies people actually read", body: "Policy updates reach every employee with automated alerts, and acknowledgements are tracked and auditable." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Four ways in, one record behind them.",
    lede: "Pick one to see what it offers, as MiHCM describes it.",
    tabs: [
      {
        id: "mia-one",
        label: "MiA ONE",
        icon: "mia-one",
        title: "A personal AI assistant for every employee",
        tagline: "Just ask. MiA ONE handles the rest.",
        points: [
          "Tell MiA ONE what you need and the right form opens, pre-filled from your request; review it, add documents and submit without leaving the conversation.",
          "It validates requests against policy as it fills them, for attendance, leave, approvals and updates.",
          "Policy-aligned answers to everyday questions; MiHCM's Enterprise page says Ask MiA answers with sourced links and drafts summaries on request.",
          "Geo-based check-in, timesheets, leave, claims and travel requests through one interface.",
          "For managers: team insights, connected directories, one-click team summaries and a career timeline for each person.",
          "Engagement pulse check-ins, learning and compliance delivery, wellbeing nudges and organisation-wide notices.",
          "The same experience on web, iOS and Android.",
        ],
        look: { title: "A form you did not have to find", body: "The request is the conversation: MiA ONE opens the form, fills what it already knows, checks it against policy and leaves you to confirm." },
        screen: {
          app: "MiA ONE · Manager",
          icon: "mia-one",
          label: "Illustration of a manager asking MiA ONE for a team summary. Sample data.",
          chat: { title: "MiA ONE", msgs: [{ who: "u", t: "Who is out this week?" }, { who: "a", t: "Two people: Employee A on annual leave Monday to Wednesday, Employee B on training Thursday. One overtime request needs your approval." }] },
          tiles: [{ h: "Team present", k: "14 / 16", s: "Today", tone: "ok" }, { h: "To approve", k: "3", s: "Leave and overtime", tone: "wr" }],
        },
      },
      {
        id: "self-service",
        label: "Web self-service",
        title: "The employee's HR home page",
        tagline: "Requests, records and updates, kept current by the people they belong to.",
        points: [
          "Employees update their own work and personal information, skills, qualifications and achievements.",
          "Leave requests with history and allocation, and quick alerts for absences, new staff, leavers and birthdays.",
          "Payslips, timesheets for daily work activities, and self-appraisals.",
          "The training calendar: apply for programmes and nominate others within your authority.",
          "Raise recruitment requisitions for your team.",
          "Personalise the home page with Essential Widgets and approve directly from it.",
        ],
        look: { title: "Approvals from the home page", body: "Managers see what is waiting for them on their home page and approve it there, instead of opening each module." },
        screen: {
          app: "Self-service · Home",
          label: "Illustration of an employee self-service home page with widgets for leave, payslips and approvals. Sample data.",
          tiles: [{ h: "Annual leave", k: "9 days", s: "Remaining" }, { h: "Payslip", k: "October", s: "Available", tone: "ok" }, { h: "Approvals", k: "2", s: "Waiting", tone: "wr" }],
          rows: { title: "Activity", items: [{ a: "Work anniversary", b: "Employee C, 5 years", pill: { t: "Today", tone: "in" } }, { a: "Training nomination", b: "Course A", pill: { t: "Approved", tone: "ok" } }] },
        },
      },
      {
        id: "mobile",
        label: "Mobile app",
        title: "HR in the pocket, with voice",
        tagline: "The self-service app for iOS and Android.",
        points: [
          "Available on the Apple App Store and Google Play.",
          "MiHCM describes a voice experience integrated with Apple Siri and Google Assistant.",
          "Face-recognition attendance with geotagging and geofencing, so people check in within a set range of a set place.",
          "Payslips available securely at any time.",
          "Goal and target updates for performance, from the phone.",
        ],
        look: { title: "Check in where the work is", body: "A geofence means a check-in only counts within range of the site, and face recognition confirms who is checking in." },
        screen: {
          app: "Mobile · Check-in",
          label: "Illustration of a mobile check-in inside a site geofence. Sample data.",
          steps: { title: "Check-in", items: [{ t: "Inside geofence", state: "done" }, { t: "Face recognised", state: "done" }, { t: "Checked in 07:58", state: "now" }] },
        },
      },
      {
        id: "kiosk",
        label: "Kiosk",
        title: "A shared device for staff without a workstation",
        tagline: "Check-in, leave and meals on the shop floor.",
        points: [
          "MiHCM describes the kiosk as a physical, shared-device channel for employees only.",
          "Built for factory and frontline staff who have no personal workstation.",
          "Covers check-in, leave requests and meal ordering.",
          "Kiosks feed the same attendance record as biometric devices and mobile check-in.",
        ],
        look: { title: "Meeting people where they are", body: "MiHCM's apparel example: thousands of line workers across three shifts, many of whom have never logged into a computer." },
        screen: {
          app: "Kiosk · Shift B",
          label: "Illustration of a shop-floor kiosk with check-in, leave and meal options. Sample data.",
          rows: { title: "Choose", items: [{ a: "Check in", pill: { t: "Tap", tone: "in" } }, { a: "Request leave", pill: { t: "Tap", tone: "in" } }, { a: "Order a meal", pill: { t: "Tap", tone: "in" } }] },
        },
      },
    ],
  },

  blocks: [
    {
      id: "mia-areas",
      kind: "defs",
      eyebrow: "How MiA ONE powers everyday work",
      title: "Four areas, as MiHCM groups them.",
      lede: "MiHCM groups MiA ONE's capabilities under four headings.",
      items: [
        { title: "Workday efficiency", body: "Accurate, policy-aligned answers; standardised routine processes; visibility of time, attendance and productivity from work and calendar signals; and secure, audit-ready records." },
        { title: "Process automation and governance", body: "One hub for time off, claims, travel and updates; approvals digitised with full traceability; forms that adapt to each request; and policies every employee receives and acknowledges." },
        { title: "People and team visibility", body: "Real-time team attendance, leave and performance for managers; connected directories of teams and roles; one-click summaries; and a career timeline per employee." },
        { title: "Culture, learning and wellbeing", body: "Engagement pulse check-ins and surveys; policy training and micro-learning in the flow of work; wellbeing nudges; and organisation-wide notices and reminders." },
      ],
    },
  ],

  roles: {
    eyebrow: "Who uses it",
    title: "Both sides of every approval.",
    lede: "MiHCM's own framing of who the employee experience is for.",
    rows: [
      { who: "Employees", does: "Ask, request and update by web, phone, MiA ONE or kiosk, and see every request tracked to approval." },
      { who: "Managers", does: "Approve in one place, see their team in real time, and get one-click summaries." },
      { who: "Frontline and factory staff", does: "Use the kiosk or their own phone for check-in, leave and meals." },
      { who: "HR teams", does: "Push policies and notices, track acknowledgements and run pulse check-ins." },
    ],
  },

  faq: [
    { q: "What is MiA ONE?", a: "MiHCM's personal AI assistant for every employee, launched in 2026. It answers HR questions, completes everyday requests by opening pre-filled forms, gives managers team insights, and works on web, iOS and Android." },
    { q: "What is the difference between MiA ONE and the kiosk?", a: "MiHCM's FAQ says MiA ONE is a conversational assistant for employees and managers on web, iOS and Android, while the kiosk is a shared device for employees only, for check-in, leave requests and meal ordering, built for staff without a personal workstation." },
    { q: "Does it work with MiHCM Lite?", a: "Yes. MiA ONE appears on MiHCM's Lite page as well as in MiHCM Enterprise." },
    { q: "Is MiA ONE secure?", a: "MiHCM's Trust Portal says MiA ONE, SmartAssist and Syntra follow its responsible-AI principles, that customer data is logically isolated and not used to train foundation AI models, and that mobile apps are assessed against OWASP MASVS with jailbreak and root detection." },
    { q: "Can employees use voice?", a: "MiHCM describes chat and voice in MiA ONE, and a voice experience in its mobile app integrated with Apple Siri and Google Assistant." },
  ],
  sources: [
    { label: "MiA ONE", href: "https://mihcm.com/en-lk/mia" },
    { label: "MiHCM Core HR (employee self-service)", href: "https://mihcm.com/solutions/core-hr?site_locale=en-lk" },
    { label: "MiHCM Enterprise", href: "https://mihcm.com/en-lk/mihcm-enterprise" },
    { label: "MiHCM Lite", href: "https://mihcm.com/en-lk/mihcm-lite" },
    { label: "MiHCM Trust Portal", href: "https://trust.mihcm.com/" },
  ],
  checked: "Checked against MiHCM's own pages in November 2026.",
};
