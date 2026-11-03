import { CopyrightNotice } from "@/components/CopyrightNotice";
import { Fragment, type ReactNode } from "react";
import { AppGrid } from "./AppGrid";
import { OneDatabase } from "./OneDatabase";
import { Picker, type PickItem } from "./Picker";
import { CtaBand, Defs, d, Faq, FlowSteps, Head, Hero, Pairs, ProductIndex } from "./parts";
import { hubFaq } from "./hub-content";
import { modules, productPath } from "./data";

// "Where to start": pick the problem that bites most, see which part of MiHCM answers it and what to look at next. Every
// capability named below comes from MiHCM's own pages for that part.
const PAINS: PickItem[] = [
  {
    pain: "Payroll is checked line by line, and statutory returns are rebuilt by hand.",
    title: "Payroll",
    icon: "payroll",
    why: "MiHCM Payroll calculates each country's retirement funds, tax, gratuity and social security in the engine, and produces reports in each authority's format.",
    gets: ["A checklist before every run: attendance, loans, increments", "EPF, ETF, APIT, T9 and T10 for Sri Lanka", "Bank files and eSubmissions by default"],
    then: { label: "Time & Attendance", why: "overtime and no-pay are settled and locked before payroll sees them." },
    links: [{ label: "Explore Payroll", href: `${productPath("workforce-management")}#payroll` }],
  },
  {
    pain: "Shifts and overtime on the floor never match what payroll pays.",
    title: "Time & Attendance",
    icon: "time-attendance",
    why: "Rosters, midnight shifts, grace periods and overtime ceilings are set once, devices from any vendor feed one record, and attendance periods lock before payroll runs.",
    gets: ["Biometric devices from any vendor", "Overtime capped per cost centre, with alerts", "Kiosks and geofenced mobile check-in"],
    then: { label: "Payroll", why: "attendance payroll can trust becomes pay that is right first time." },
    links: [{ label: "Explore Time & Attendance", href: `${productPath("workforce-management")}#time-attendance` }],
  },
  {
    pain: "Every country team reports headcount differently.",
    title: "MiHCM Enterprise",
    icon: "organisation-planning",
    why: "One platform runs every entity on its own legislative rules, with live org charts and one approved headcount plan that Finance and HR share.",
    gets: ["Entities tagged to their labour law", "Present, requested and approved headcount", "Native payroll in 13 countries"],
    then: { label: "Data & AI", why: "regional reporting comes from records that already agree." },
    links: [{ label: "Explore MiHCM Enterprise", href: productPath("enterprise") }],
  },
  {
    pain: "Hiring runs on email, and onboarding starts from scratch.",
    title: "Talent Management",
    icon: "recruitment",
    why: "Requisitions go through approval, applications land in one tracking system, SmartAssist ranks applicants against your criteria, and the hire's profile is created from the application.",
    gets: ["Job board and third-party publishing", "Interview scheduling with calendars", "Onboarding checklists and a new-hire portal"],
    then: { label: "Performance Management", why: "the new hire's goals and feedback start on the same record." },
    links: [{ label: "Explore Recruitment", href: `${productPath("talent-management")}#recruitment` }],
  },
  {
    pain: "Employees chase HR for answers, and managers chase approvals.",
    title: "Employee Experience",
    icon: "mia-one",
    why: "MiA ONE answers questions and opens pre-filled forms in a conversation, on web, iOS and Android, and managers approve everything in one place.",
    gets: ["Leave, payslips and claims by chat or voice", "Policy acknowledgements tracked", "A kiosk for staff without a workstation"],
    then: { label: "Talent Management", why: "engagement pulse check-ins arrive through the same assistant." },
    links: [{ label: "Explore MiA ONE", href: `${productPath("employee-experience")}#mia-one` }],
  },
  {
    pain: "The board asks a question and the answer takes a week.",
    title: "Data & AI",
    icon: "syntra",
    why: "Live dashboards, Power BI inside MiHCM and a visual query builder answer the standard questions, and Syntra answers the new ones in plain language.",
    gets: ["Drill from the organisation to one employee", "Attrition and burnout risk", "Exports to PowerPoint, Excel or PDF"],
    then: { label: "MiHCM Enterprise", why: "the answers are only as good as the records underneath them." },
    links: [{ label: "Explore Data & AI", href: productPath("data-and-ai") }],
  },
  {
    pain: "We are a small company and just need HR and payroll done properly.",
    title: "MiHCM Lite",
    icon: "core",
    why: "MiHCM Lite covers Core HRIS, Payroll, and Time & Attendance with analytics, for up to 250 employees, on web and mobile.",
    gets: ["Payroll localised to Sri Lankan requirements", "GPS attendance and any biometric device", "MiA ONE for everyday requests"],
    then: { label: "MiHCM Enterprise", why: "when you grow past one simple structure." },
    links: [{ label: "Explore MiHCM Lite", href: productPath("lite") }],
  },
];

/** The MiHCM hub. It leads with the two editions and the four parts of MiHCM Enterprise, then the seventeen modules. */
export function HubBody() {
  const bands: { node: (light: boolean) => ReactNode }[] = [];
  const add = (node: (light: boolean) => ReactNode) => bands.push({ node });

  add((light) => (
    <section className={light ? "light" : undefined} id="products" key="products">
      <div className="in">
        <Head
          eyebrow="Two editions, four parts"
          title="Pick the edition, then the part that matters most."
          lede="MiHCM sells two editions, sized by organisation. MiHCM Enterprise is built from four parts. Each has its own page here."
        />
        <div className="five">
          <ProductIndex />
        </div>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="modules" key="modules">
      <div className="in">
        <Head
          eyebrow="Every module"
          title={`${modules.length} modules, each with MiHCM's own icon.`}
          lede="The capabilities MiHCM draws in its Enterprise product stack, grouped by part. Filter by part, then choose a module to read about it."
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
          title="One record, from hire to retire."
          lede="MiHCM calls the employee record the foundation everything else depends on. That is the idea underneath every page here."
        />
        <Defs
          items={[
            { title: "One employee record", body: "Every personal, contact, employment and document detail lives in one place, so payroll, attendance and talent all work from the same picture." },
            { title: "Local rules, built in", body: "Each entity is tagged to its legislative entity, so leave, working hours and payroll follow that country's law." },
            { title: "Payroll in 13 countries", body: "Native statutory payroll across South and South East Asia, run in-house rather than through a local partner." },
            { title: "Self-service everywhere", body: "Web, mobile, MiA ONE by chat or voice, and a shop-floor kiosk, all feeding the same workflows." },
            { title: "AI with distinct jobs", body: "MiA ONE for everyday answers, SmartAssist for documents and screening, Syntra for leadership foresight." },
            { title: "Next to what you run", body: "REST APIs, webhooks and OAuth 2.0 connect MiHCM to your ERP, and it can go live module by module." },
          ]}
        />
        <FlowSteps
          label="One employee, across the modules"
          steps={[
            { t: "Hired", s: "Requisition approved, applicant ranked, offer signed.", icon: "recruitment" },
            { t: "Onboarded", s: "Profile created from the application.", icon: "onboarding" },
            { t: "Rostered", s: "Shifts and overtime under the site's rules.", icon: "time-attendance" },
            { t: "Paid", s: "Statutory payroll, bank file, payslip.", icon: "payroll" },
            { t: "Grown", s: "Goals, feedback, learning and succession.", icon: "performance" },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          Illustrative: one employee followed through five modules, built from what MiHCM&rsquo;s pages say each does. Which steps are automatic is decided in a project.
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="start" key="start">
      <div className="in">
        <Head eyebrow="Where to start" title="Find the gap that costs you most." lede="Pick the problem closest to yours. We will show which part of MiHCM usually comes first, and what to look at next." />
        <Picker
          items={PAINS}
          label="What bites most today?"
          kicker="Where to start"
          prompt="Pick the problem that bites most today."
          intro="MiHCM is one platform, but most organisations begin with the part that hurts most. Choose a problem on the left to see where to start and what to look at next."
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="payroll" key="payroll">
      <div className="in">
        <Head
          eyebrow="Payroll across Asia"
          title="Fewer countries, done properly."
          lede="MiHCM's stated position: it supports fewer markets than engines that list a hundred, with real contribution rules, real filing outputs and real statutory reporting for each authority."
        />
        <Pairs
          a="Where"
          b="What MiHCM says"
          rows={[
            { l: "South Asia", r: "Native statutory payroll in Sri Lanka, Bangladesh, the Maldives and Pakistan." },
            { l: "South East Asia", r: "Native statutory payroll in Brunei, Cambodia, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, Thailand and Vietnam." },
            { l: "In the engine", r: "Retirement funds, tax, gratuity and social security calculated against local rules, with contribution, reconciliation and remittance reports in each authority's format." },
            { l: "Groups", r: "Multi-company and multi-currency payroll from one dashboard." },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          <a href={`${productPath("workforce-management")}#lk-payroll`}>
            How Sri Lankan payroll works: EPF, ETF, gratuity and APIT <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="local" key="local">
      <div className="in">
        <Head
          eyebrow="In Sri Lanka and India"
          title="Our two markets, stated plainly."
          lede="What MiHCM's own pages say about the two countries we work in, as we last read them in November 2026."
        />
        <Pairs
          a="Country"
          b="What MiHCM says"
          rows={[
            { l: "Sri Lanka", r: "MiHCM's Sri Lanka site covers APIT/PAYE, EPF and ETF, gratuity, Shop & Office and Wages Board employees, more than 20 statutory and standard reports, and bank files for Sri Lanka's major banks. MiHCM complies with Sri Lanka's Personal Data Protection Act No. 9 of 2022." },
            { l: "India", r: "India is not among MiHCM's 13 payroll countries, and its site has no India locale. For a group with an Indian entity, we would plan Indian payroll separately and integrate it with MiHCM, and confirm the approach with MiHCM first." },
          ]}
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="trust" key="trust">
      <div className="in">
        <Head eyebrow="Security and trust" title="HR data is the most sensitive data you hold." lede="MiHCM's Trust Portal publishes its certificates and answers a vendor security questionnaire. In short:" />
        <Defs
          items={[
            { title: "Certified", body: "ISO/IEC 27001:2022, ISO/IEC 27701:2025, ISO 9001:2015 and SOC 2 Type II." },
            { title: "Hosted in the region", body: "Azure South East Asia (Singapore) with recovery in Azure East Asia (Hong Kong), each client in its own isolated database." },
            { title: "Or in your own Azure tenant", body: "From shared infrastructure to a fully dedicated environment, or inside your own Azure tenant." },
            { title: "Tested", body: "Annual third-party penetration testing against OWASP ASVS, security testing in the build pipeline, and OWASP MASVS assessments for the mobile apps." },
          ]}
        />
        <p className="pairs-note" data-r style={d(1)}>
          <a href={`${productPath("enterprise")}#trust`}>
            Security, trust and data residency in detail <span aria-hidden="true">→</span>
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
          title="What a MiHCM project involves."
          lede="MiHCM configures the system around your structures and rules. Most of the effort, and most of the risk, is in getting your own organisation ready for it."
        />
        <Defs
          items={[
            { title: "Organisation design", body: "Entities, legislative entities, cost centres, positions and reporting lines, set up the way the business really runs." },
            { title: "Policies as rules", body: "Leave policies, shift patterns, overtime ceilings and approval workflows, written down before they are configured." },
            { title: "Clean employee data", body: "Profiles, balances, loans and pay history from the systems you run today, checked before they are loaded." },
            { title: "Parallel payroll", body: "Payroll run beside the old system until every statutory number agrees." },
            { title: "Integrations", body: "Banks, attendance devices and the ERP connected and tested, with a plan for anything bespoke." },
            { title: "Adoption", body: "Managers and employees shown how to use self-service and MiA ONE, so requests stop arriving by email." },
          ]}
        />
        <div className="decide" data-r style={d(1)}>
          <h3>Decisions to settle before you start</h3>
          <ul>
            <li>Lite or Enterprise: how many people, how many entities, and how many countries.</li>
            <li>Which countries go first, and whether each is on MiHCM&rsquo;s payroll list.</li>
            <li>Where the data should live: MiHCM&rsquo;s environment or your own Azure tenant.</li>
            <li>Which modules start now, and which follow once payroll is stable.</li>
            <li>Which systems MiHCM must talk to on day one.</li>
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
            <p>Checked against MiHCM&rsquo;s own pages in November 2026.</p>
            <ul>
              <li><a href="https://mihcm.com/en-lk" target="_blank" rel="noopener noreferrer">MiHCM</a></li>
              <li><a href="https://mihcm.com/en-lk/mihcm-enterprise" target="_blank" rel="noopener noreferrer">MiHCM Enterprise</a></li>
              <li><a href="https://mihcm.com/en-lk/mihcm-lite" target="_blank" rel="noopener noreferrer">MiHCM Lite</a></li>
              <li><a href="https://mihcm.com/en-lk/solutions/payroll" target="_blank" rel="noopener noreferrer">MiHCM Payroll (Sri Lanka)</a></li>
              <li><a href="https://trust.mihcm.com/" target="_blank" rel="noopener noreferrer">MiHCM Trust Portal</a></li>
              <li><a href="https://mihcm.com/en-lk/about-us" target="_blank" rel="noopener noreferrer">About MiHCM</a></li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  ));

  return (
    <>
      <Hero
        crumb="MiHCM"
        eyebrow="MiHCM"
        title={
          <>
            HR and payroll built in Asia, <em>on one employee record.</em>
          </>
        }
        lede="MiHCM is an HR and payroll platform for organisations across South and South East Asia. Two editions, sized from small teams to 20,000+ people, cover the whole employee lifecycle: records, attendance, payroll in 13 countries, talent, self-service and AI, all working from one employee record."
        primary={{ label: "See the editions and parts", href: "#products" }}
        secondary={{ label: "Where to start", href: "#start" }}
        note="Product names, logos and module icons on these pages are MiHCM's own, as published on mihcm.com."
        visual={<OneDatabase />}
      />
      {bands.map((b, i) => b.node(i % 2 === 0))}
      <CtaBand
        title="Not sure where to start with MiHCM?"
        lede="Tell us how HR and payroll run today. We will help you work out which edition fits, which part comes first and what can wait."
        list={["Your headcount, entities and countries", "Lite or Enterprise, and which modules first", "A sensible first step"]}
      />
    </>
  );
}
