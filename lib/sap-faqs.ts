// Generated from the supplied SAP page files. Each entry is the question and answer exactly as the page shows it,
// so the FAQ structured data always matches the visible FAQ. Regenerate rather than edit by hand.
export type Faq = { q: string; a: string };

export const sapFaqs: Record<string, Faq[]> = {
  "grow-with-sap": [
    {
      "q": "What's the difference between GROW with SAP and RISE with SAP?",
      "a": "Both put you on SAP's cloud ERP. GROW is for a fresh start on the standard cloud product, shared with other customers and upgraded by SAP twice a year. RISE gives you your own private instance, more room for deep custom code, and the option to convert an existing SAP ECC system. Most growing mid-sized companies and subsidiaries fit GROW. Large groups with complex customisation usually fit RISE."
    },
    {
      "q": "Can we keep our current SAP ECC configuration?",
      "a": "No. GROW is always a fresh implementation, but you can bring your data with you. Migration tools are included, and many customers find it a good chance to clean up years of old data and workarounds."
    },
    {
      "q": "How long does an implementation take?",
      "a": "For a mid-sized company with standard scope, a few months rather than years. The biggest factors are how many processes and countries are in scope, how much data you migrate, and how quickly your people can join the workshops. We give you a realistic plan after the readiness assessment."
    },
    {
      "q": "Will upgrades disrupt our business?",
      "a": "They're designed not to. You get about six weeks' notice, the test system is upgraded about three weeks early, and the test automation tool is included. Extensions built the clean-core way carry over automatically. We can run regression testing for you each release."
    },
    {
      "q": "What if we need something the standard system doesn't do?",
      "a": "First we check whether a standard process or a configuration setting covers it. If it doesn't, there are three upgrade-safe options: key-user changes, developer extensions, and side-by-side apps on SAP BTP. We'll recommend the simplest one that does the job."
    },
    {
      "q": "Does it work for our country?",
      "a": "SAP provides local versions for around 60 countries, covering tax, legal reporting and language. Requirements in other countries can be added through localisation. We'll confirm exactly what applies to your entities during the assessment."
    }
  ],
  "data-migration": [
    {
      "q": "Do we lose our history?",
      "a": "No. History isn't loaded into the new system, but you can still see it. The usual options are to keep the old system available in read-only mode for a period, or to move history into an archive or a reporting store. We agree the option and how long you keep it, with your auditors' requirements in mind."
    },
    {
      "q": "We aren't on SAP today. Can you still migrate us?",
      "a": "Yes. Most of our sources are non-SAP systems, such as IFS, Microsoft Dynamics, Oracle, Sage, Tally or custom-built software. We extract the data, map it to SAP's templates and load it with the migration cockpit. Only moves from SAP ECC can also use the direct transfer option."
    },
    {
      "q": "Who cleans the data, you or us?",
      "a": "Both. We profile the data, find the problems and build the rules and mappings. Your people decide what's correct, because they know which of three customer records is the real one. Fixing data at the source is always cheaper than fixing it after go-live."
    },
    {
      "q": "How long is the business frozen at cutover?",
      "a": "Usually a weekend, sometimes a little longer for large volumes. The final mock load is timed, so the cutover plan is based on a measured run, not an estimate. We agree beforehand which transactions stop, and when."
    },
    {
      "q": "Can we load data again later, for example after an acquisition?",
      "a": "Yes. The migration cockpit stays available after go-live, so a new company or a new business can be loaded the same way."
    },
    {
      "q": "How is personal data handled?",
      "a": "Migration files contain personal data such as employee and customer contacts. We agree secure storage and transfer, limit access to named people, and delete working files when the project closes. The cockpit also deletes its migration data after a retention period you choose."
    }
  ],
  "ai-catalog": [
    {
      "q": "Is this SAP's official catalog?",
      "a": "No. SAP publishes its own full catalog of AI features in the SAP Discovery Center, covering all SAP products. This is Mawkish's guide to the AI that matters for SAP Cloud ERP customers, written in plain language, with our view on where to start."
    },
    {
      "q": "What does \"Mawkish quick win\" mean?",
      "a": "It's our recommendation: AI that most companies can switch on early, with little change to how people work and a result you can measure within weeks."
    },
    {
      "q": "Can we use these if we're still implementing SAP?",
      "a": "Yes, and it's often the best time. Some, such as reading sales orders or payment advices, can be part of your design from day one."
    },
    {
      "q": "Why does availability say \"beta\" or \"early adopter\"?",
      "a": "SAP releases some AI to a limited group of customers first. We can tell you whether joining makes sense for you."
    },
    {
      "q": "How often is the catalog updated?",
      "a": "We review it after each SAP release and each quarterly AI update."
    }
  ],
  "rise-with-sap": [
    {
      "q": "Is RISE with SAP just hosting?",
      "a": "No. Hosting moves your servers somewhere else. RISE moves you to SAP Cloud ERP Private, with infrastructure, technical operations and tools under one SAP contract. You also move from ECC to SAP S/4HANA along the way."
    },
    {
      "q": "Can we keep our custom code?",
      "a": "Yes. Private Edition allows classic custom code, unlike GROW with SAP. We still recommend cleaning it up during the move. Most systems carry a lot of code that's no longer used, and every object you keep has to be adapted and tested."
    },
    {
      "q": "How long does a conversion take?",
      "a": "For most companies, 12 to 24 months from planning to go-live. The main factors are system size, how much custom code there is, data quality, the number of integrations, and which path you take. We give you a firm plan after the readiness check."
    },
    {
      "q": "How much downtime is there at go-live?",
      "a": "Usually a planned weekend. We rehearse the cutover several times on copies of your system, so the timing is measured, not guessed."
    },
    {
      "q": "Do we have to upgrade every year?",
      "a": "No. With Private Edition, you decide when to move to a new release, within SAP's maintenance windows. We help you plan upgrades around your business calendar."
    },
    {
      "q": "We're not on SAP today. Is RISE still an option?",
      "a": "Yes. Larger or more complex companies sometimes choose Private Edition for a new implementation, for example for industry coverage or deeper customisation. If you're a growing mid-sized company, GROW with SAP is often the better fit. We'll recommend one honestly."
    }
  ],
  "cloud-erp-readiness-assessment": [
    {
      "q": "Isn't this just a sales exercise?",
      "a": "No. It's a fixed-fee piece of work with a written result you own. If SAP Cloud ERP isn't the right fit, or the timing is wrong, the report says so. Our reputation depends on recommending only projects that succeed."
    },
    {
      "q": "What does it cost?",
      "a": "A fixed fee, agreed upfront, based on the number of departments and entities in scope. If you go ahead with Mawkish for the implementation, we credit the fee against the project."
    },
    {
      "q": "We're on SAP ECC. Is this different for us?",
      "a": "Yes. We add SAP's technical Readiness Check on your system. It shows how much custom code you really use, which changes affect you, and whether a conversion or a fresh start makes more sense."
    },
    {
      "q": "Can you assess several companies in our group?",
      "a": "Yes. For groups, we look at how head office and the subsidiaries fit together. That often leads to a two-tier recommendation: RISE at the centre and GROW in the subsidiaries. The timeline grows with the number of entities."
    },
    {
      "q": "What happens after the readout?",
      "a": "You keep everything. Many customers take the report to their board, then use the roadmap and licence sizing to request formal proposals. The fit map becomes the starting point for the project's workshops, so none of the work is wasted."
    }
  ],
  "fit-to-standard-workshops": [
    {
      "q": "Can't we just keep our current processes?",
      "a": "Some, yes. But many current processes are workarounds for the limits of the old system. In the workshop you'll see whether SAP's standard already solves the problem. When it doesn't and the need is real, we'll find the simplest upgrade-safe way to support it."
    },
    {
      "q": "How many workshops will we need?",
      "a": "It depends on how many processes are in scope. A mid-sized company implementing finance, sales, procurement and inventory typically needs eight to fifteen workshop days, spread over three to five weeks, with departments running in parallel after the finance foundations are set."
    },
    {
      "q": "Do our people need SAP experience?",
      "a": "No. They need to know their own work well. We explain the SAP side, and the hands-on session at the end of each workshop is where they get comfortable with it."
    },
    {
      "q": "What if two departments want different things?",
      "a": "That's normal, and the workshop is the right place to find out. We log both views, show how the standard handles it, and bring a decision to the process owner or steering committee. Decisions are recorded in SAP Cloud ALM, so they don't get reopened later."
    },
    {
      "q": "Is this only for GROW with SAP?",
      "a": "No. Fit-to-standard is SAP's method for every cloud ERP project. For RISE projects that convert an existing system, we use it to review processes and decide what to simplify during the move."
    }
  ],
  "licensing-and-commercial-advisory": [
    {
      "q": "What happened to FUEs?",
      "a": "For new contracts, SAP replaced Full Use Equivalents with named user types priced per user per month in 2025. Existing GROW customers on FUE contracts can stay on them. Whether to move to the new model is a case-by-case decision, and we can model both for you."
    },
    {
      "q": "What are SAP AI Units?",
      "a": "They're the currency for SAP's premium AI: agents and assistants that carry out work for you. Basic AI, including Joule and embedded AI features, is included with every user. Premium packages come with a required purchase of AI Units."
    },
    {
      "q": "What is digital access?",
      "a": "When another system creates documents in SAP, such as sales orders from a web shop or invoices from a portal, those documents are counted. Finance and Supply Chain users come with a yearly allowance that covers most mid-sized companies. We size it from your integration list."
    },
    {
      "q": "Can we change our user mix later?",
      "a": "You can add users and user types during the contract as you grow. Reducing them usually has to wait until renewal, which is why getting the starting mix right matters."
    },
    {
      "q": "Does this apply to RISE with SAP too?",
      "a": "SAP Cloud ERP Private has its own packages, but the same principle applies: licence by role, check entitlements, and plan for growth. We advise on both."
    },
    {
      "q": "You're an SAP partner. Is your advice independent?",
      "a": "We're an SAP partner, and we say so. Our interest is a customer who stays with us for years, and over-selling licences on day one is the fastest way to lose that customer. Every number we give you is backed by your own roles and SAP's published user-type definitions."
    }
  ],
  "two-tier-erp-for-subsidiaries": [
    {
      "q": "Does our headquarters have to run SAP?",
      "a": "It works best when it does, because SAP's prebuilt two-tier scenarios assume SAP on both sides. That includes SAP S/4HANA on-premise, SAP Cloud ERP Private and older SAP ECC systems. If headquarters runs something else, the subsidiaries can still run SAP Cloud ERP, but the connection is built with APIs and takes more work."
    },
    {
      "q": "Our headquarters is still on SAP ECC. Is that a problem?",
      "a": "No. ECC connects through the same IDoc messages it already uses. Keep in mind that ECC mainstream maintenance ends in 2027, so we design the subsidiary side to keep working when headquarters moves to SAP S/4HANA."
    },
    {
      "q": "Can a subsidiary work differently from headquarters?",
      "a": "Yes, within SAP's standard processes. The group template fixes what has to be the same: accounts, master data and the intercompany flows. Each company then adds what its country and business need."
    },
    {
      "q": "How is it licensed?",
      "a": "Each subsidiary subscribes to SAP Cloud ERP per user, by what each person does. SAP also has commercial options for subsidiaries of groups that already use SAP. We look at both as part of licensing advisory."
    },
    {
      "q": "What if we sell a subsidiary later, or merge it into headquarters?",
      "a": "A subsidiary on its own system is easier to sell, because its data and processes are already separate. If you later want it inside the headquarters system, its data can be migrated across."
    },
    {
      "q": "How long does it take to add a subsidiary?",
      "a": "The first company takes longest, because the template and the connection to headquarters are built with it. After that, each company is mostly local set-up, data and training. We give you a plan for each wave after mapping the group."
    }
  ],
  "cloud-erp-implementation": [
    {
      "q": "How long will our implementation take?",
      "a": "For a mid-sized company with standard scope in one country, typically six to eight months. More countries, complex manufacturing, many integrations or large data volumes extend it. We give you a firm plan after the readiness assessment and workshops."
    },
    {
      "q": "Can we go live in phases?",
      "a": "Yes, and many companies do. The usual pattern is finance, sales and procurement first, then manufacturing, warehouse or more countries in later phases. SAP offers a parallel project line, so later phases can be built without disturbing the live system."
    },
    {
      "q": "What happens to our old system?",
      "a": "It stays read-only after go-live for reference and audit. We migrate master data, open items and balances, and you decide how much history to bring across. Often the answer is less than you'd expect, because older data is still searchable in the old system."
    },
    {
      "q": "Who owns the system after go-live?",
      "a": "You do. SAP runs the infrastructure and upgrades. Your team, or Mawkish through our support service, looks after the application: users, roles, changes, integrations and testing each release."
    },
    {
      "q": "Will our users need a lot of training?",
      "a": "Less than with older ERPs. SAP's apps are built around specific tasks and include in-app help and guided simulations. We train key users first, who then support their colleagues, with role-based sessions before go-live."
    }
  ],
  "move-from-ecc-on-premise": [
    {
      "q": "When exactly does SAP stop supporting ECC?",
      "a": "Mainstream maintenance ends at the end of 2027. Extended maintenance runs from 2028 to the end of 2030 at a two-point premium, and only for the last three enhancement packages. After that, the only SAP-supported option is the RISE transition option to 2033, which needs a RISE contract and an SAP HANA system moved into SAP's private cloud by the end of 2030."
    },
    {
      "q": "Should we wait for the 2033 option?",
      "a": "Only if your landscape is genuinely too complex to move by 2030. It provides essential fixes but no new features, the price rises for later commitments, and the project still has to happen. For most mid-sized companies, it costs more than it saves."
    },
    {
      "q": "We're already on S/4HANA on-premise. Do we need to move?",
      "a": "Check your release. Releases before 2023 had five years of mainstream maintenance, and several have ended or end soon. From 2023, each release gets seven years. Moving an existing S/4HANA system to SAP Cloud ERP Private is the shortest route on this page and stops the cycle of upgrade projects."
    },
    {
      "q": "Our ECC runs on Oracle or SQL Server. Is that a problem?",
      "a": "No, but it adds a database migration to SAP HANA. SAP's conversion tools handle the database migration and the software conversion in one run. The database size after archiving is what drives the downtime."
    },
    {
      "q": "What happens to our history if we choose a fresh start?",
      "a": "Open items, balances and master data move across. Older history usually stays in a read-only copy of the old system or an archive for audit and reference. Selective data transition can bring a defined number of years of history into the new system if you need it."
    },
    {
      "q": "How long does a conversion take?",
      "a": "Typically 12 to 24 months from assessment to go-live, depending on system size, custom code, data quality and integrations. Preparation work done in advance shortens it."
    },
    {
      "q": "Can we change processes during a conversion?",
      "a": "Keep it limited. The safest approach is to convert first, then improve processes in planned waves after go-live. If you need to restructure during the move, for example by merging company codes, selective data transition is the better route."
    }
  ],
  "rollouts-and-localisation": [
    {
      "q": "Can SAP Cloud ERP really run a Sri Lankan company?",
      "a": "Yes. SAP doesn't provide a ready-made Sri Lanka version, but the system is configured from a template country and a Sri Lanka layer is added for VAT, SSCL, withholding tax, RAMIS integration, invoice formats and bank files. The difference is who maintains that layer: in Sri Lanka, it's your partner, not SAP."
    },
    {
      "q": "What happens when the IRD changes a rate or a rule?",
      "a": "We track IRD notices, circulars and budget changes, assess the impact on your system, and apply the change before it takes effect. Most rate changes are configuration. Changes to schedules or the RAMIS API may need a small development, which we plan with you."
    },
    {
      "q": "Do we have to connect to RAMIS?",
      "a": "The IRD is rolling out the VAT Web API in phases, starting with export-oriented businesses and expecting full integration by the end of 2026. Records can also be uploaded by CSV, but an ERP integration is the only practical option at volume. We build it as part of the project."
    },
    {
      "q": "We export in US dollars. Can SAP handle LKR and USD?",
      "a": "Yes. SAP keeps several currencies on every posting: transaction, company and group currency. We decide early which currency each company reports in, because group currency is one of the settings that can't be changed later."
    },
    {
      "q": "Do you only work in Sri Lanka?",
      "a": "No. We're based in Colombo and serve clients in Sri Lanka, India, the UAE and beyond. Many projects start with a Sri Lankan head office and roll out to subsidiaries abroad. The global template approach is designed for exactly that."
    },
    {
      "q": "How long does it take to add a country?",
      "a": "Once the template is live, a new country in SAP's local-version list typically takes a few months, depending on scope and integrations. Countries that need a local layer built take longer the first time, and less after that."
    }
  ],
  "sap-btp-extensions-and-apps": [
    {
      "q": "Do we need to pay for SAP BTP?",
      "a": "Key-user changes and developer extensions inside SAP Cloud ERP come with your subscription, although developer extensions need the three-system landscape. Side-by-side apps run on SAP BTP services, which are subscribed separately and sized by use. We size this with you before you commit."
    },
    {
      "q": "Will our extensions break when SAP upgrades?",
      "a": "Not if they're built on released interfaces, which is the only way SAP Cloud ERP allows. We also run each extension's tests on the upgraded test system before SAP upgrades production."
    },
    {
      "q": "Our old ERP has hundreds of customisations. Do we rebuild them all?",
      "a": "Usually not. When we go through them, many turn out to be reports that standard analytics now covers, or workarounds for processes SAP now handles. The rest become key-user changes, developer extensions or side-by-side apps, and only where they still add value."
    },
    {
      "q": "Low-code or pro-code?",
      "a": "Both have a place. Low-code with SAP Build is fast for forms, approvals and simple mobile apps. Pro-code with CAP or ABAP Cloud suits complex logic, high volumes and apps you'll grow over years. We choose per app and tell you why."
    },
    {
      "q": "Can our own developers build extensions?",
      "a": "Yes, and we encourage it. Many clients have us build the first extensions together with their team, set the standards, and review what the team builds after that."
    },
    {
      "q": "Who owns what we build?",
      "a": "You do. The code lives in your repository and runs in your SAP accounts, and the documentation is handed over with it."
    }
  ],
  "process-automation-with-sap-build": [
    {
      "q": "Is process automation included in SAP Cloud ERP?",
      "a": "Flexible workflows, My Inbox and situation handling are included. SAP Build Process Automation, document extraction and AI agents are SAP Business AI Platform services, subscribed separately and sized by use. We check what you already own before proposing anything new."
    },
    {
      "q": "Do we need UiPath or another RPA tool?",
      "a": "No. SAP Build has its own bots. If you already use UiPath, SAP offers an add-on that lets you use UiPath capabilities with SAP Build, so you can keep that investment."
    },
    {
      "q": "Will automations break when SAP upgrades?",
      "a": "Processes that use SAP's released APIs keep working through upgrades. Bots that use screens are more fragile, which is why we prefer APIs and include every automation in the tests that run before each upgrade."
    },
    {
      "q": "Will an AI agent approve payments on its own?",
      "a": "Only if you decide it should, and only within limits you set. In practice, agents prepare, check and recommend, and a person approves anything that moves money or changes a commitment."
    },
    {
      "q": "How quickly can we see a result?",
      "a": "A flexible workflow can be live in days. A first SAP Build process, such as supplier onboarding, usually takes a few weeks from design to go-live. We agree the scope and timeline with you after discovery."
    },
    {
      "q": "Can our own team maintain the automations?",
      "a": "Yes. Business rules, approvers and forms are designed so key users can change them. We train your team and stay available for the bigger changes."
    }
  ],
  "sap-and-non-sap-integration": [
    {
      "q": "Do we need SAP Integration Suite?",
      "a": "Not always. Integrations that SAP runs, and simple direct connections, work without it. Once you connect several non-SAP systems, Integration Suite is the right place to build, run and monitor them. It is licensed separately on SAP Business Technology Platform, and we size it with you."
    },
    {
      "q": "Will our integrations break when SAP upgrades the system?",
      "a": "Not if they use SAP's released APIs and events, which SAP keeps stable across upgrades. That's why we don't build integrations on internal tables or screens. We also include key interfaces in the regression tests for each release."
    },
    {
      "q": "Can we keep our existing middleware?",
      "a": "Yes. SAP Cloud ERP's APIs follow open standards, so other middleware, such as MuleSoft, Boomi or Azure Integration Services, can connect to it. We'll tell you honestly where SAP's prebuilt content would save you effort."
    },
    {
      "q": "Can you connect to systems running in our own data centre?",
      "a": "Yes, through SAP's secure connectivity to on-premise systems, or with Edge Integration Cell when integrations themselves must run on your own infrastructure."
    },
    {
      "q": "How do you keep integrations secure?",
      "a": "Every connection has its own technical user with only the permissions it needs, encrypted transport and certificate-based authentication where the other system supports it. Personal data is only sent where there's a business reason, and every message is logged."
    },
    {
      "q": "Does Mawkish work with the other systems too?",
      "a": "Yes. Besides SAP, we're partners for Salesforce, Odoo, MiHCM and Databricks, among others, so we understand both ends of many of these connections."
    }
  ],
  "application-management-support": [
    {
      "q": "SAP already supports the cloud system. Why do we need you?",
      "a": "SAP supports its software and runs the service. It doesn't know how your company codes, approvals, integrations and reports are set up, and it doesn't make changes for you. Most issues after go-live are about exactly that, so that's what we cover."
    },
    {
      "q": "Can you support a system another partner implemented?",
      "a": "Yes. We start with a short handover review of your setup, extensions, integrations and open issues, document what we find, and then take over. If we see risks, we tell you up front."
    },
    {
      "q": "What hours do you cover?",
      "a": "Sri Lankan business hours as standard, with extended cover for critical dates such as month-end, year-end and SAP upgrade weekends. Round-the-clock cover for critical issues can be agreed where you need it."
    },
    {
      "q": "Do unused hours roll over?",
      "a": "That depends on the plan. In most plans, unused hours can go to improvement work, so the budget still goes into your system."
    },
    {
      "q": "Do you support SAP add-ons and integrations too?",
      "a": "Yes. We support the integrations, extensions and SAP Business AI Platform services around SAP Cloud ERP, as well as the connected systems we implemented, such as Salesforce."
    },
    {
      "q": "Will we become dependent on you?",
      "a": "We aim for the opposite. Your key users get training and a knowledge base, everything is documented, and you own all of it."
    }
  ],
  "release-and-upgrade-management": [
    {
      "q": "Can we delay or skip an upgrade?",
      "a": "No. SAP Cloud ERP is one version for all customers, and SAP upgrades everyone on a published schedule. That's what keeps you current. The way to reduce risk is good testing, not delay."
    },
    {
      "q": "Will the system be down during the upgrade?",
      "a": "Production is upgraded over a planned weekend window that SAP announces in advance. We tell your users when it is and plan around your critical dates."
    },
    {
      "q": "How much of our team's time does an upgrade take?",
      "a": "With automated tests in place, mostly a few days of key-user checks during the test window, plus a short briefing on what's changed. Without automation, it's much more, which is why we build the tests early."
    },
    {
      "q": "We didn't build automated tests during our implementation. Is it too late?",
      "a": "No. We start with your most important processes, such as order to cash, procure to pay and the month-end close, and add more each release."
    },
    {
      "q": "Are new features switched on automatically?",
      "a": "Improvements to processes you already use arrive with the upgrade. Many new features stay off until you choose them, and new processes or countries are always your decision."
    },
    {
      "q": "Is this included in your support service?",
      "a": "Yes, upgrade testing is part of our Managed and Extended support plans. We also offer it on its own for customers who support themselves."
    }
  ],
  "test-automation": [
    {
      "q": "Do we have to pay for the test tool?",
      "a": "No. SAP's test automation tool and SAP Cloud ALM come with SAP Cloud ERP. Tricentis test automation for cross-system tests is offered through SAP's partnership with Tricentis; we check what your SAP support agreement includes."
    },
    {
      "q": "How many tests do we need?",
      "a": "Fewer than you'd think. A few dozen well-chosen tests on your main processes cover most of the risk. We start there and add tests as you change the system."
    },
    {
      "q": "Does automation replace our key users' testing?",
      "a": "No. Automated tests check that processes still work. Key users still review what only a person can judge, such as a form layout or a new screen, and they still sign off acceptance testing."
    },
    {
      "q": "We're already live without automated tests. Can we start now?",
      "a": "Yes. We start with the processes that hurt most if they fail, have them ready before your next upgrade, and build from there."
    },
    {
      "q": "Can the tests run in production?",
      "a": "No. Tests run in your test system, so they never create real orders, postings or payments."
    }
  ],
  "security-roles-and-authorisations": [
    {
      "q": "Can we just use SAP's standard roles?",
      "a": "Only for demos and testing. SAP's standard roles are broad examples. In production they give people more access than they need and can push users into a higher licence type. We build your roles from SAP's catalogs instead."
    },
    {
      "q": "How long does role design take?",
      "a": "It depends on how many jobs and companies you have. For a mid-sized company, role design runs alongside the project for several weeks and needs time from each department head. Starting early avoids a rush before go-live."
    },
    {
      "q": "Can our existing ECC or IFS roles be copied across?",
      "a": "Not directly. SAP Cloud ERP uses a different access model. Your current roles are still useful as a starting point for who does what, and we map them to the new catalogs."
    },
    {
      "q": "Do we need SAP Cloud Identity Access Governance?",
      "a": "Many companies manage well with clear roles, conflict rules and regular reviews. Larger or regulated companies, or those with strict audit demands, often find the automated risk analysis and access requests worth it. We'll help you decide."
    },
    {
      "q": "Can we keep using our Microsoft sign-in?",
      "a": "Yes. SAP Cloud Identity Services can hand sign-in over to Microsoft Entra ID or another corporate directory, so people use the account and multi-factor authentication they already have."
    }
  ],
  "sap-business-ai": [
    {
      "q": "Do we have to pay extra for AI?",
      "a": "Not for everything. Many AI features and Joule's basic features are included in SAP Cloud ERP. Assistants, agents and some document processing are premium and charged by use. We tell you which is which before you start."
    },
    {
      "q": "Is our data used to train public AI models?",
      "a": "SAP's AI runs under your SAP contract and SAP's AI ethics and data protection commitments. We walk you through what those terms say for your subscription before you switch anything on."
    },
    {
      "q": "Do we need a data science team?",
      "a": "No. Most of SAP's AI is built into the apps and works on your data as it is. You need people who know the process and can judge the results, which you already have."
    },
    {
      "q": "We're still implementing SAP. Is it too early for AI?",
      "a": "No, it's the best time. Some AI features can be part of your design from the start, such as reading sales orders or payment advices, so you never build the manual process at all."
    },
    {
      "q": "Does AI work with Sri Lankan documents and formats?",
      "a": "SAP's document reading handles many languages and layouts. We test it on your real documents first, including local bank advices, before we rely on it."
    }
  ],
  "joule-and-ai-agents": [
    {
      "q": "Is Joule included in SAP Cloud ERP?",
      "a": "Joule's basic features are included. Assistants, agents and some advanced features are premium AI, licensed separately and charged by use. We tell you which is which for each use case."
    },
    {
      "q": "Can an agent do something it shouldn't?",
      "a": "Agents work within the roles and authorisations of the user they act for, and within the autonomy level, limits and approvals you set. Their actions are recorded, so you can always see what was done and why."
    },
    {
      "q": "Does Joule understand our company's terms?",
      "a": "Joule works on your live SAP data, so it knows your customers, products and documents. Your own terms, such as product nicknames, can be taught through custom skills and grounding in your own documents."
    },
    {
      "q": "Can agents work with our non-SAP systems?",
      "a": "Yes. Agents built in Joule Studio can connect to other systems and to other companies' agents through open standards. We check what each system supports."
    },
    {
      "q": "Where should we start?",
      "a": "With one high-volume task that annoys your team, such as clearing open items or resolving blocked orders. Prove it there, then expand."
    }
  ],
  "sap-business-data-cloud": [
    {
      "q": "Does Business Data Cloud replace SAP Analytics Cloud?",
      "a": "No. SAP Analytics Cloud is part of Business Data Cloud. It's where people see dashboards and do planning. Business Data Cloud adds the data foundation underneath it."
    },
    {
      "q": "Does it replace our SAP BW?",
      "a": "Not overnight. Business Data Cloud can include SAP BW, so you can keep what works and move to data products at your own pace."
    },
    {
      "q": "Can we use it with Microsoft, Databricks or Snowflake?",
      "a": "Yes. SAP Databricks and SAP Snowflake are part of the offering, and SAP shares data with other platforms without copying it where possible. We check what fits your existing tools."
    },
    {
      "q": "Which data products are available for SAP Cloud ERP?",
      "a": "SAP adds data products with each release, starting with finance, procurement and supply chain. We check the current list for your edition before we plan."
    },
    {
      "q": "We've just gone live. Is it too early?",
      "a": "Usually, yes. Get comfortable with SAP Cloud ERP's built-in reporting first. Plan Business Data Cloud when you need to combine systems, plan or use AI across your data."
    }
  ],
  "sap-analytics-cloud": [
    {
      "q": "Is SAP Analytics Cloud included in SAP Cloud ERP?",
      "a": "SAP Cloud ERP includes its own reporting and can show some SAP Analytics Cloud content inside the ERP. Full dashboards and planning need a separate SAP Analytics Cloud subscription. We tell you what you need for your use."
    },
    {
      "q": "Can we keep using Excel?",
      "a": "Yes. SAP Analytics Cloud has an Excel add-in, so finance teams can work with live, governed data in Excel when they prefer it."
    },
    {
      "q": "Is our data copied out of SAP?",
      "a": "For dashboards, SAP Analytics Cloud can read data live from SAP Cloud ERP without copying it. Planning works on its own copy of the data it needs, which is kept in step with SAP."
    },
    {
      "q": "How long does a first budget take to set up?",
      "a": "It depends on your structure and approval steps. We plan it so you're ready before your budget cycle starts, starting from SAP's ready-made finance planning content."
    },
    {
      "q": "Can managers use it on their phones?",
      "a": "Yes. Dashboards work on phones and tablets through SAP's mobile app, with the same access rules as on the desktop."
    }
  ],
  "group-reporting-and-consolidation": [
    {
      "q": "Do we need a separate consolidation tool?",
      "a": "Usually not. Group reporting is part of SAP Cloud ERP, so it runs on the same data as your accounting. Very large or complex groups sometimes need more, and we'll tell you if that's you."
    },
    {
      "q": "Do all our subsidiaries have to move to SAP?",
      "a": "No. Subsidiaries on other systems can upload their trial balances or enter data in forms. Many groups move them to SAP over time, often using a simpler setup for small companies."
    },
    {
      "q": "Can it handle SLFRS and reporting to overseas owners?",
      "a": "Yes. You can run group accounts in more than one currency and keep separate consolidation groups for different reporting needs. We design the structure with your finance team and auditors."
    },
    {
      "q": "How long does it take to set up?",
      "a": "It depends on the number of units and how clean your intercompany process is. We usually start with a parallel run alongside your current consolidation, so you can compare before you switch."
    },
    {
      "q": "Is group reporting included in SAP Cloud ERP?",
      "a": "Group reporting is part of SAP Cloud ERP's finance scope. Some options depend on your licence. We confirm what your subscription includes."
    }
  ]
};
