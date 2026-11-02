import { CopyrightNotice } from "@/components/CopyrightNotice";
import { Fragment, type ReactNode } from "react";
import { AppGrid } from "./AppGrid";
import { OneDatabase } from "./OneDatabase";
import { Picker, type PickItem } from "./Picker";
import { CtaBand, Defs, d, Faq, FlowSteps, Head, Hero, Pairs, ProductIndex, SupportDirectory } from "./parts";
import { hubFaq } from "./hub-content";
import { apps, productPath } from "./data";

// "Where to start": pick the problem that bites most, see which family answers it and what to look at next. Every capability
// named below comes from Odoo's own pages for that family.
const PAINS: PickItem[] = [
  {
    pain: "Our sales run on spreadsheets and email threads.",
    title: "Sales",
    icon: "crm",
    why: "CRM keeps leads and opportunities on one pipeline, Sales turns them into quotations and orders, and customers can pay or sign from a portal.",
    gets: ["A pipeline with each stage's expected revenue", "Follow-ups planned from your sales script", "Quotes from templates, with the right prices and taxes"],
    then: { label: "Finance", why: "invoices are created from the orders, so nothing is typed twice." },
    links: [{ label: "Explore Sales", href: `${productPath("sales")}#crm` }],
  },
  {
    pain: "Stock and production plans do not match what is on the shelf.",
    title: "Supply Chain",
    icon: "inventory",
    why: "Inventory, Purchase and Manufacturing share one set of stock and order records, with replenishment rules that propose purchase and production orders.",
    gets: ["Min-max and make-to-order replenishment", "Barcodes, lots and serial numbers", "Capacity planning and a shop floor tablet"],
    then: { label: "Sales", why: "confirmed orders can drive deliveries and production directly." },
    links: [{ label: "Explore Supply Chain", href: `${productPath("supply-chain")}#inventory` }],
  },
  {
    pain: "The books are slow, and re-keyed from other systems.",
    title: "Finance",
    icon: "accounting",
    why: "Accounting works from the same orders, bills and stock moves as the rest of Odoo, with bank synchronisation and suggested matches.",
    gets: ["Bank lines matched to invoices and bills", "Country localisation packages for taxes and charts", "Reports that update as entries post"],
    then: { label: "Supply Chain", why: "stock valuation posts to the books automatically." },
    links: [{ label: "Explore Finance", href: `${productPath("finance")}#accounting` }],
  },
  {
    pain: "We want to sell online, tied to real stock.",
    title: "Websites",
    icon: "ecommerce",
    why: "Website and eCommerce build the site and shop from blocks, and show stock for each variant in real time from the same database as your warehouse.",
    gets: ["A no-code site builder with AI help", "Variants with live stock", "Click and collect, and online payment"],
    then: { label: "Supply Chain", why: "online orders drive the same deliveries as every other order." },
    links: [{ label: "Explore Websites", href: `${productPath("websites")}#ecommerce` }],
  },
  {
    pain: "HR is paperwork: leave, hiring and payslips.",
    title: "Human Resources",
    icon: "employees",
    why: "Employees, Recruitment, Time Off and Payroll share one record per person, so leave approvals and attendance flow into payslips.",
    gets: ["An applicant pipeline from posting to contract", "Leave requests with approval rules", "Payslips under a chosen country's rules"],
    then: { label: "Finance", why: "expenses and payroll costs reach the books." },
    links: [{ label: "Explore HR", href: `${productPath("human-resources")}#employees` }],
  },
  {
    pain: "Projects, support and field visits run on separate tools.",
    title: "Service Delivery",
    icon: "project",
    why: "Project, Timesheets, Helpdesk and Planning share time and materials, which flow straight into invoicing.",
    gets: ["Kanban and Gantt over the same tasks", "Tickets against SLA rules", "Shifts, equipment and field visits on one plan"],
    then: { label: "Finance", why: "time and materials become invoices." },
    links: [{ label: "Explore Service Delivery", href: `${productPath("services")}#project` }],
  },
  {
    pain: "We want AI to take on routine work, safely.",
    title: "Odoo AI",
    icon: "ai",
    why: "Odoo AI offers agents with a role, skills and sources, AI fields and AI in chat and email, and what an agent may change is set by the skills you give it.",
    gets: ["Agents that can only answer, or also act", "Restrict to Sources, so answers come from your material", "A way to connect outside AI agents"],
    then: { label: "Odoo Studio", why: "it is how you add the rules and approvals around what an agent does." },
    links: [{ label: "Explore Odoo AI", href: productPath("ai") }],
  },
];

/** The Odoo hub. It leads with the eight families and treats AI, Studio and hosting as the pages that cut across them. */
export function HubBody() {
  const bands: { node: (light: boolean) => ReactNode }[] = [];
  const add = (node: (light: boolean) => ReactNode) => bands.push({ node });

  add((light) => (
    <section className={light ? "light" : undefined} id="families" key="families">
      <div className="in">
        <Head
          eyebrow="The eight families"
          title="Start with the part of the business that hurts most."
          lede="Odoo groups its apps into eight families. Each has its own page here, and every app inside it is a tab you can open."
        />
        <div className="five">
          <ProductIndex />
        </div>
        <div className="hub-sup">
          <SupportDirectory />
        </div>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="apps" key="apps">
      <div className="in">
        <Head
          eyebrow="Every app"
          title={`${apps.length} apps, each with its own icon.`}
          lede="The apps these pages cover, grouped as Odoo groups them. Filter by family, then choose an app to open its tab."
        />
        <AppGrid />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="fit-together" key="fit">
      <div className="in">
        <Head
          eyebrow="How it fits together"
          title="Add the next app when you need it."
          lede="Odoo's apps are separate, but they share one database. That is the idea underneath everything on these pages."
        />
        <Defs
          items={[
            { title: "One database", body: "Every app reads and writes the same records. A customer, a product or an order is one thing in Odoo, not a copy in each app." },
            { title: "Start small", body: "Odoo's pricing describes a plan with one app free and unlimited users, and other apps added as you need them. If an app depends on others, you get the required ones with it." },
            { title: "Hand-offs without re-keying", body: "A confirmed sales order drives the delivery and the invoice, a low-stock product drafts a purchase order, an approved expense posts to the books." },
            { title: "An open-source core", body: "Odoo Community is free and open-source, licensed under the GNU LGPLv3, and Enterprise is built on it with more functionality and support." },
            { title: "Change it to fit", body: "Odoo Studio lets you change fields, screens, reports and approvals without code, and custom modules cover the rest." },
            { title: "AI inside the apps", body: "Odoo AI puts agents and AI tools into the apps your team already uses, with the limits you set." },
          ]}
        />
        <FlowSteps
          label="One order, across the apps"
          steps={[
            { t: "Enquiry", s: "A lead arrives on the pipeline.", icon: "crm" },
            { t: "Quotation", s: "A quote is made and sent.", icon: "sales" },
            { t: "Delivery", s: "The confirmed order drives the delivery.", icon: "inventory" },
            { t: "Invoice", s: "The invoice comes from the order.", icon: "invoicing" },
            { t: "The books", s: "Payment is matched to the bank line.", icon: "accounting" },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          Illustrative: one order followed through five apps, built from what Odoo&rsquo;s pages say each does. Which steps are automatic is decided in a project.
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="start" key="start">
      <div className="in">
        <Head
          eyebrow="Where to start"
          title="Find the gap that costs you most."
          lede="Pick the problem closest to yours. We will show which family usually comes first, and what to look at next."
        />
        <Picker
          items={PAINS}
          label="What bites most today?"
          kicker="Where to start"
          prompt="Pick the problem that bites most today."
          intro="Odoo is a set of apps on one database, and most companies begin with one. Choose a problem on the left to see which family usually comes first, and what to look at next."
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="beside" key="beside">
      <div className="in">
        <Head
          eyebrow="Beside what you already run"
          title="Odoo works with the systems around it."
          lede="What Odoo's own material says about connecting to other things, including what it does not say."
        />
        <Pairs
          a="Where"
          b="What Odoo's own material says"
          rows={[
            { l: "The external API", r: "Odoo's documentation describes an external JSON-2 API with API keys for outside software to call, and notes migrating from the older XML-RPC and JSON-RPC interfaces. Odoo's pricing page lists the external API with the Custom plan." },
            { l: "SAP and Salesforce", r: "The Odoo pages we read describe no ready-made connector to either. A connection would be built on the external API, and scoped like any integration." },
            { l: "Banks and payments", r: "Accounting synchronises with banks, and Odoo's Invoicing page shows Adyen, PayPal and Stripe as online payment methods." },
            { l: "Shipping and marketplaces", r: "Inventory and Sales integrate with carriers to print labels, and Sales describes an Amazon connector. The pages do not name the carriers." },
            { l: "Messaging", r: "WhatsApp connects through Meta's API, with fees charged through Meta, and SMS spends prepaid credits." },
            { l: "Calendars", r: "Appointments and Recruitment sync with the Odoo Calendar, Google Calendar and Microsoft Outlook." },
            { l: "Devices", r: "The IoT Box connects scales, printers, cameras, barcode scanners, payment terminals and measuring tools." },
            { l: "Third-party apps", r: "Odoo has an Apps Store of third-party modules. Odoo's documentation says Odoo Online is incompatible with them, so they need Odoo.sh or on-premise hosting." },
          ]}
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="local" key="local">
      <div className="in">
        <Head
          eyebrow="In Sri Lanka and India"
          title="Local tax and payroll rules, stated plainly."
          lede="Odoo handles each country's rules through localisation packages. This is what its documentation, app pages and Odoo 20 release notes say about our two markets, as we last read them in November 2026."
        />
        <Pairs
          a="Area"
          b="What Odoo says"
          rows={[
            { l: "India: tax", r: "Odoo's documentation lists an India fiscal localisation and says Odoo is compliant with the Indian GST e-invoice system. It covers e-invoicing, the e-way bill, GSTIN checks, GSTR-1 and GSTR-2B filing, GST reports, a TDS and TCS threshold alert and Bill of Entry support." },
            { l: "India: payroll", r: "Odoo's Payroll page names India among its pre-configured localisations, and the Odoo 20 release notes add TDS declarations, a gratuity calculation report and flexible sandwich-leave options." },
            { l: "Sri Lanka: tax", r: "Odoo 20's release notes say a new localisation package is available for Sri Lanka, with the chart of accounts, taxes, balance sheet, profit and loss reports and the VAT 001 and WHT 001 reports, and that tax invoice sequence and layout follow Gazette No. 2481/22. The list of packages in Odoo's documentation did not yet name Sri Lanka when we read it." },
            { l: "Sri Lanka: payroll", r: "Odoo's Payroll page does not mention Sri Lanka, and the Sri Lanka section of the release notes covers accounting only." },
            { l: "What that means", r: "Odoo now ships a Sri Lankan accounting package, and it is new. We would test it against your statutory returns in a pilot, and scope Sri Lankan payroll as configuration work at the start of a project, and say so before you commit." },
          ]}
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="editions" key="editions">
      <div className="in">
        <Head
          eyebrow="Editions and hosting"
          title="Two editions, three places to run it."
          lede="The choice shapes what you can add and how you upgrade. It is the hardest to undo, so make it early."
        />
        <Pairs
          a="Option"
          b="What Odoo says"
          rows={[
            { l: "Odoo Community", r: "The free and open-source edition, licensed under the GNU LGPLv3, and the core on which Enterprise is built." },
            { l: "Odoo Enterprise", r: "The shared-source edition, with more functionality including functional support, upgrades and hosting." },
            { l: "Odoo Online", r: "Private databases hosted and managed by Odoo. Incompatible with custom modules and Apps Store modules." },
            { l: "Odoo.sh", r: "Odoo's official cloud platform for hosting and managing Odoo, with production, staging and development branches, for custom modules." },
            { l: "On-premise", r: "You download Odoo and host it yourself, with packaged installers, a source install and Docker." },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          <a href={productPath("editions-and-hosting")}>
            Editions and hosting, in detail <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="delivery" key="delivery">
      <div className="in">
        <Head
          eyebrow="Implementation"
          title="What an Odoo project involves."
          lede="Odoo's plans cover the software, not the project. Its pricing page describes what an implementation service covers and who usually delivers it."
        />
        <Defs
          items={[
            { title: "Business needs analysis", body: "Working out which apps you need first, and how your process maps onto them." },
            { title: "Configuration and data import", body: "Setting up the apps and loading your customers, products, balances and open items." },
            { title: "Customisation and development", body: "Changes through Studio, and custom modules where Studio is not enough." },
            { title: "Training", body: "Getting the people who will use it comfortable with it." },
            { title: "Project management", body: "Keeping a plan, and the people on it, moving." },
            { title: "Who delivers it", body: "Odoo says small companies can use its Success Packs, mid-size and larger companies (over 50 employees) usually work with a partner offering local project management, and companies over 250 employees can contact Odoo directly." },
          ]}
        />
        <div className="decide" data-r style={d(1)}>
          <h3>Decisions to settle before you start</h3>
          <ul>
            <li>Which family comes first: begin with the area that costs you most, and add the next when the first is running.</li>
            <li>Where it will run, and whether you will ever need custom modules, which rules out Odoo Online.</li>
            <li>Which countries you operate in, and whether each has a fiscal localisation package.</li>
            <li>How many people count as paying users, and who could be Light Users.</li>
            <li>The budget outside the plans: implementation, credits for SMS and AI, Odoo.sh hosting and custom-code maintenance.</li>
          </ul>
        </div>
      </div>
    </section>
  ));

  add((light) => (
    <Fragment key="faq-band">
      <CopyrightNotice inline />
      <section className={light ? "light" : undefined} id="faq" key="faq">
        <div className="in">
          <Head eyebrow="Questions" title="Straight answers." />
          <Faq items={hubFaq} />
          <div className="src" data-r>
            <p>Checked against Odoo&rsquo;s own pages and documentation in November 2026.</p>
            <ul>
              <li><a href="https://www.odoo.com/" target="_blank" rel="noopener noreferrer">Odoo</a></li>
              <li><a href="https://www.odoo.com/page/all-apps" target="_blank" rel="noopener noreferrer">All Odoo apps</a></li>
              <li><a href="https://www.odoo.com/pricing" target="_blank" rel="noopener noreferrer">Odoo pricing</a></li>
              <li><a href="https://www.odoo.com/page/editions" target="_blank" rel="noopener noreferrer">Compare editions</a></li>
              <li><a href="https://www.odoo.com/documentation/latest/administration.html" target="_blank" rel="noopener noreferrer">Database management (documentation)</a></li>
              <li><a href="https://www.odoo.com/pricing-packs" target="_blank" rel="noopener noreferrer">Odoo implementation services</a></li>
              <li><a href="https://www.odoo.com/page/brand-assets" target="_blank" rel="noopener noreferrer">Odoo brand assets</a></li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  ));

  return (
    <>
      <Hero
        crumb="Odoo"
        eyebrow="Odoo"
        title={
          <>
            Eight families of apps, <em>one database underneath.</em>
          </>
        }
        lede="Odoo is a suite of business apps that share one database. Accounting, sales, inventory, manufacturing, websites, HR, marketing and service work are separate apps you add as you need them, and they all read and write the same records."
        primary={{ label: "See the eight families", href: "#families" }}
        secondary={{ label: "Where to start", href: "#start" }}
        note="App names and icons on these pages are Odoo's own, as published on odoo.com. Odoo's current version is Odoo 20, released in September 2026."
        visual={<OneDatabase />}
      />
      {bands.map((b, i) => b.node(i % 2 === 0))}
      <CtaBand
        title="Not sure where to start with Odoo?"
        lede="Tell us how the business runs today. We will help you work out which family comes first, where Odoo should run and what can wait."
        list={["Your goals and the systems involved", "Which family fits first", "A sensible first step"]}
      />
    </>
  );
}
