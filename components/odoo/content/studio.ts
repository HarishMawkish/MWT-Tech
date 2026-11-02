import type { ProductContent } from "../content-types";

// Odoo Studio. Every statement below comes from Odoo's own Studio page, its Studio documentation, its pricing page, its Odoo
// Online and upgrade documentation, and its Odoo 20 release notes, read in November 2026. Where Odoo's pages say nothing (for
// example how Studio changes are treated at upgrade time) this page says so.

export const studio: ProductContent = {
  slug: "studio",
  crumb: "Odoo Studio",
  eyebrow: "Odoo Studio",
  title: ["Change your apps, or build a new one,", "without writing code."],
  lede: "Odoo Studio is a toolbox for customising Odoo without coding knowledge. In any app you can add or change fields, views, models, automation rules, webhooks, PDF reports, approval rules and security rules, and you can build a whole app from scratch. It is how most businesses make Odoo fit the way they already work.",
  primary: { label: "See what it changes", href: "#explore" },
  secondary: { label: "Plans and hosting", href: "#plans" },
  note: "Odoo's documentation says installing Studio on the Standard plan automatically triggers an upsell to the Custom plan. Details are below.",
  hero: {
    app: "Studio · Form view",
    icon: "studio",
    label: "Illustration of a form being edited in Studio: a new field being dragged onto the screen, with a panel of properties on the right. Sample data.",
    rows: {
      title: "Properties of the new field",
      items: [
        { a: "Label", b: "Delivery notes", pill: { t: "Set", tone: "ok" } },
        { a: "Type", b: "Text", pill: { t: "Set", tone: "ok" } },
        { a: "Required", b: "When amount is high", pill: { t: "Condition", tone: "in" } },
        { a: "Visible", b: "Always", pill: { t: "Set", tone: "nt" } },
      ],
    },
    steps: { title: "Studio session", items: [{ t: "Open the form", state: "done" }, { t: "Add a field", state: "done" }, { t: "Set its rules", state: "now" }, { t: "Close Studio" }] },
  },
  heroCaption: "Illustration of Studio's form editor, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "Odoo that fits, not a business that bends.",
    lede: "No standard software matches a business exactly. Studio lets the people who know the process change the screens, the rules and the documents themselves, inside Odoo, without a development project.",
    items: [
      { title: "Fields where you need them", body: "Drag and drop fields onto a screen, then set their labels, types, appearance and behaviour." },
      { title: "Screens the way you work", body: "Rearrange menus by drag and drop, change views, and make fields invisible, required or read-only under conditions." },
      { title: "Documents that look like yours", body: "Change items such as invoices and manufacturing order overviews, or create new documents, and use an XML editor for advanced reports." },
      { title: "Automation when records change", body: "Define triggers and automated actions that run when a record is created or changed." },
      { title: "Sign-off before it matters", body: "Require approval before critical actions run, and notify specific users when those actions start." },
      { title: "A whole app, if you need one", body: "Choose the features you need and Odoo assembles the app, integrated with the other apps." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "Six things you can change.",
    lede: "Pick one to see what it covers and how its screen might look.",
    tabs: [
      {
        id: "fields",
        label: "Fields",
        icon: "studio",
        title: "Add and shape the information you keep",
        tagline: "Capture what your process needs, where it needs it.",
        points: [
          "Drag and drop fields onto a screen.",
          "Set each field's label, type, appearance and behaviour.",
          "Make a field invisible, required or read-only when a condition is met.",
          "Odoo's documentation covers fields and widgets as their own topic.",
        ],
        look: { title: "A condition on a field", body: "A field can become required only when it matters, for example for orders above a certain size, so people are not asked for what they do not need." },
        screen: {
          app: "Studio · Fields",
          icon: "studio",
          label: "Illustration of a field list with types and conditional rules. Sample data.",
          rows: { title: "Fields on this form", items: [{ a: "Delivery notes", b: "Text", pill: { t: "New", tone: "in" } }, { a: "Cost centre", b: "Selection", pill: { t: "Required if high", tone: "wr" } }, { a: "Internal ref", b: "Text", pill: { t: "Read-only", tone: "nt" } }] },
        },
      },
      {
        id: "views",
        label: "Views and menus",
        icon: "studio",
        title: "Arrange screens and menus your way",
        tagline: "Move things, hide things, rename things.",
        points: [
          "Reorganise menus with a drag-and-drop menu editor.",
          "Change views so each team sees the layout that fits its work.",
          "Odoo 20 lets you enable the Gantt scheduling option through Studio, so records can be dragged to or from a side panel to schedule or unschedule them.",
          "An XML editor is there for advanced changes.",
        ],
        look: { title: "A menu is a list you can reorder", body: "Drag a menu item to a new place, and the people who use that app see it there at once." },
        screen: {
          app: "Studio · Menu editor",
          icon: "studio",
          label: "Illustration of a menu editor with items being reordered. Sample data.",
          steps: { title: "Menu", items: [{ t: "Orders", state: "done" }, { t: "Deliveries", state: "now" }, { t: "Customers" }, { t: "Reports" }] },
        },
      },
      {
        id: "automation",
        label: "Automation",
        icon: "studio",
        title: "Actions that run when records change",
        tagline: "Let Odoo do the follow-up.",
        points: [
          "Define triggers and automated actions that run when a record changes.",
          "Webhooks are part of automation rules in Odoo's documentation.",
          "Combine automation with approvals and notifications to move work along.",
          "Odoo's AI app can use automated actions to trigger agents, covered on the Odoo AI page.",
          "Odoo 20 lets automations trigger activity plans.",
        ],
        look: { title: "When this, do that", body: "A rule watches for a change on a record, such as a stage moving, and runs the action you chose, with nobody having to remember." },
        screen: {
          app: "Studio · Automation",
          icon: "studio",
          label: "Illustration of an automation rule with a trigger and an action. Sample data.",
          steps: { title: "Rule", items: [{ t: "Trigger: stage changes", state: "done" }, { t: "Condition: amount is high", state: "done" }, { t: "Action: notify the manager", state: "now" }] },
        },
      },
      {
        id: "reports",
        label: "PDF reports",
        icon: "studio",
        title: "Documents that carry your look",
        tagline: "Invoices, order overviews and your own documents.",
        points: [
          "Customise documents such as invoices and manufacturing order overviews.",
          "Create new documents of your own.",
          "Use an XML editor for advanced reporting.",
          "Odoo's documentation has a PDF reports section of its own for the detail.",
          "Odoo 20 introduces a new user interface for the report editor, with a warning when an element is shared with other reports.",
        ],
        look: { title: "A document built on the record", body: "The report draws on the fields of the record it belongs to, so a change to a field shows up in the document." },
        screen: {
          app: "Studio · PDF report",
          icon: "studio",
          label: "Illustration of a document layout with editable blocks for a header, a table and a footer. Sample data.",
          rows: { title: "Document blocks", items: [{ a: "Header", pill: { t: "Edited", tone: "ok" } }, { a: "Lines table", pill: { t: "Default", tone: "nt" } }, { a: "Footer", pill: { t: "Edited", tone: "ok" } }] },
        },
      },
      {
        id: "approvals",
        label: "Approval rules",
        icon: "studio",
        title: "Make sign-off part of the process",
        tagline: "A yes before the action, from the right person.",
        points: [
          "Require sign-off before critical actions run.",
          "Send notifications to specific users when those actions start.",
          "Approval rules have their own section in Odoo's documentation.",
          "The Approvals app, covered on the Productivity page, handles formal requests that people raise themselves.",
        ],
        look: { title: "An action that waits", body: "The action does not run until the named people have approved it, and they are told that it is waiting." },
        screen: {
          app: "Studio · Approval rule",
          icon: "studio",
          label: "Illustration of an approval rule with an action, a condition and the approvers who must sign off. Sample data.",
          steps: { title: "Rule", items: [{ t: "Action: confirm an order", state: "done" }, { t: "Condition: amount is high", state: "now" }, { t: "Approver: finance manager" }] },
        },
      },
      {
        id: "apps",
        label: "Models and apps",
        icon: "studio",
        title: "Build an app from scratch",
        tagline: "Pick the features; Odoo assembles the app.",
        points: [
          "Choose the features you need, and Odoo assembles the app.",
          "The new app is integrated with Odoo's other apps.",
          "Odoo's documentation covers models, modules and apps, and building an app from scratch, as their own topics.",
          "Security rules can be added alongside fields, views and the rest.",
        ],
        look: { title: "A model for your own records", body: "If a thing you track has no home in the standard apps, a new model gives it one, with its own screens and rules." },
        screen: {
          app: "Studio · New app",
          icon: "studio",
          label: "Illustration of a new app being assembled from a list of features. Sample data.",
          rows: { title: "Features", items: [{ a: "Pipeline stages", pill: { t: "Added", tone: "ok" } }, { a: "Contact details", pill: { t: "Added", tone: "ok" } }, { a: "Chatter", pill: { t: "Added", tone: "ok" } }, { a: "Calendar view", pill: { t: "Available", tone: "in" } }] },
        },
      },
    ],
  },

  blocks: [
    {
      kind: "pairs",
      id: "plans",
      eyebrow: "Plans, hosting and upgrades",
      title: "What Studio changes about your plan.",
      lede: "From Odoo's pricing page and documentation.",
      a: "Question",
      b: "What Odoo's pages say",
      rows: [
        { l: "Which plan includes it?", r: "Odoo's pricing page lists Odoo Studio with the Custom plan. The One App Free plan can use Studio as its single app." },
        { l: "What if I am on Standard?", r: "Installing Studio on the Standard plan automatically triggers an upsell to the Custom plan. For yearly or multi-year contracts an upsell order is created with a 30-day limit; monthly contracts switch to Custom and the new rate applies at the next bill." },
        { l: "Does it work on Odoo Online?", r: "Odoo's documentation says Odoo Online can be used for long-term production, including customisations that do not require custom code. It is incompatible with custom modules and Apps Store modules." },
        { l: "What about upgrades?", r: "Odoo's upgrade documentation says a database with custom modules cannot be upgraded until a compatible version of those modules exists. Its pages do not say how Studio changes are treated, so ask before you rely on a heavy set of them." },
      ],
      link: { label: "Odoo pricing", href: "https://www.odoo.com/pricing" },
    },
  ],

  scenario: {
    eyebrow: "A worked example",
    title: "A purchase approval, added in an afternoon.",
    lede: "One change followed through Studio, built from what Odoo's pages say it can do. It is an illustration, not a promise of any particular set-up.",
    steps: [
      { t: "Open Studio", s: "Switch on Studio in the Purchase app.", icon: "studio" },
      { t: "Add a field", s: "A cost-centre field is required only for large orders.", icon: "studio" },
      { t: "Add an approval", s: "Orders above a limit need a manager's sign-off.", icon: "approvals" },
      { t: "Notify the approver", s: "An automation tells the approver an order is waiting.", icon: "discuss" },
      { t: "Test and close", s: "Try it on a copy of the database, then switch Studio off.", icon: "purchase" },
    ],
    note: "Illustrative. Real limits, approvers and tests are decided with the people who own the process.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "Whoever owns the process.",
    lede: "Odoo describes Studio as usable without coding knowledge.",
    rows: [
      { who: "Process owners", does: "Add the fields, screens and approvals their team needs, without waiting for a development project." },
      { who: "Administrators", does: "Keep customisations tidy, and decide which are worth doing in Studio and which are not." },
      { who: "Finance and operations leads", does: "Set approval rules and change documents such as invoices to match how the company reports." },
      { who: "Developers", does: "Handle what Studio's pages leave to code, such as advanced XML reports, and the tools AI and webhooks call." },
    ],
  },

  fits: {
    eyebrow: "Connects to",
    title: "How it meets the rest of Odoo.",
    lede: "From what Odoo's own pages and documentation say.",
    rows: [
      { name: "Every Odoo app", how: "Studio works in any app: open the app and model you want to change and toggle Studio on." },
      { name: "Approvals", how: "Approval rules in Studio and the Approvals app sit side by side: one gates an action, the other handles requests people raise." },
      { name: "Odoo AI", how: "Automated actions can trigger AI agents, and AI server actions can call tools you build." },
      { name: "Hosting", how: "Studio customisations that need no custom code run on Odoo Online. Custom modules need Odoo.sh or on-premise." },
      { name: "The external API", how: "Odoo's pricing page lists the external API with the Custom plan, for connecting outside software." },
    ],
  },

  faq: [
    { q: "Do I need a developer to use Studio?", a: "Odoo says Studio works without coding knowledge. Some things, such as advanced reports through the XML editor and tools called by AI or webhooks, are more technical." },
    { q: "Does Studio change what I pay?", a: "It can. Odoo's pricing lists Studio with the Custom plan, and its documentation says installing it on Standard triggers an upsell. The first app on the free plan can be Studio." },
    { q: "Can I build a whole app with it?", a: "Yes. Odoo's page says you choose the features you need and Odoo assembles the app, integrated with the other apps, and its documentation covers building one from scratch." },
    { q: "Will my customisations survive upgrades?", a: "Odoo's upgrade documentation covers custom modules but says nothing specific about Studio changes. We would test an upgraded copy of the database before every production upgrade." },
    { q: "Can I use Studio on Odoo Online?", a: "Yes for customisations that need no custom code, according to Odoo's documentation. Custom modules and Apps Store modules are not compatible with Odoo Online." },
    { q: "Is Studio the same as custom development?", a: "No. Studio is a toolbox inside Odoo. Custom development means writing modules, which is hosted on Odoo.sh or on-premise, and whose maintenance Odoo's pricing page says is not included in the plans." },
  ],
  sources: [
    { label: "Odoo Studio", href: "https://www.odoo.com/app/studio" },
    { label: "Studio (documentation)", href: "https://www.odoo.com/documentation/latest/applications/studio.html" },
    { label: "Odoo Online (documentation)", href: "https://www.odoo.com/documentation/latest/administration/odoo_online.html" },
    { label: "Upgrade (documentation)", href: "https://www.odoo.com/documentation/latest/administration/upgrade.html" },
    { label: "Odoo pricing", href: "https://www.odoo.com/pricing" },
    { label: "Odoo 20 release notes", href: "https://www.odoo.com/odoo-20-release-notes" },
  ],
  checked: "Checked against Odoo's own pages and documentation in November 2026.",
};
