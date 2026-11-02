# Salesforce product knowledge brief

Status: **built (1 Nov 2026). Parts A to H are the research record; Part I was the proposal and the build differs from it as set out here.**

Changes made at approval and during the build:
- The five main products are **Sales Cloud, Data 360, Marketing Cloud, Loyalty Management and Service Cloud**. The hub and every page lead with them. Agentforce, Revenue Cloud, Field Service, Commerce Cloud, Slack, Tableau and MuleSoft are supporting pages, shown smaller. There is no Platform page; the platform is covered on the hub.
- Extra official sources read after the first draft: Salesforce Research's "How to Get Started with Agentforce" (2024), the Agentic Enterprise Partner Guidebook, "Understanding Data 360 Pricing" (July 2026), the "Marketing Use Cases in the Age of AI and Agentforce" workbook, the Marketing Cloud Next 60-day plan, the Loyalty page and Help listing, and the Field Service pricing page.
- Every statement on the pages was then tested against its source page by re-reading it. That re-read corrected these points, now fixed: Piper is described by Salesforce as its own AI SDR (from Qualified), not a third-party product; Field Service is sold as its own per-user products and requires a Service Cloud licence (it is not an add-on); Revenue Cloud's single data model covers pricing, quoting, contracts and billing (order automation sits alongside); MuleSoft's page names API-led connectivity but does not define it; Omni Gateway and model-traffic routing are described in separate sections of the MuleSoft page.
- Still partly unverified, and labelled as such on the pages: Loyalty process details (Salesforce Help could be read only through its search listing) and the MuleSoft SAP connector details (MuleSoft documentation search listing).
- Removed from the site: all statistics, analyst-ranking and customer-result claims from the old Salesforce pages, and the phrases "world's leading CRM platform" and "We design and implement Salesforce solutions". Not touched: the Levarus entry on the contact page that reads "Salesforce Summit Platinum Partner" (a third party's status, outside the Salesforce section; needs your decision).
Researched: 1 Nov 2026 (the date in the working environment). Every product fact below was read on an official Salesforce page (salesforce.com, architect.salesforce.com, trailhead.salesforce.com, developer.salesforce.com, mulesoft.com / docs.mulesoft.com) and is paraphrased. Where a fact came with a number, the number is only kept if it was on an official page, and it is labelled "vendor-reported".

How to read this: Part A is naming. Part B is the platform picture. Part C is one section per product. Part D covers what cuts across products (AI trust, security, licensing, implementation). Part E is FAQ banks. Part F is the audit of what is already on the site. Part G is the source ledger. Part H is open points. Part I is the page plan for approval.

Limits of this research, stated plainly:
- The research tool summarises pages with a small model, so each summary is a *lead to be re-read on the page* before any sentence ships. During the build I will re-open every cited URL and check each statement against the page itself.
- Several official pages could not be read: `help.salesforce.com` (not surfaced by search), `developer.salesforce.com/docs/...` (403), `trust.salesforce.com` (landing page only), `compliance.salesforce.com` (no list of certifications), `salesforce.com/agentforce/faq/` and `salesforce.com/experience-cloud/` (404 at the URL I tried). Anything that depended on those is in Part H, not in the copy.
- No third-party source was used for any claim. Search results that were third-party were discarded.

---

## Part A. Names as they are today

| Today's official name | Earlier name | Source and note |
| --- | --- | --- |
| **Data 360** | Data Cloud | salesforce.com/data/ states "formerly Data Cloud". Trailhead still carries "Data Cloud" in module URLs and some titles, so both appear in official material. |
| **Marketing Cloud Next** | (new generation) | salesforce.com/marketing/ calls it the flagship, built natively on the Salesforce platform. |
| **Marketing Cloud Account Engagement** | Pardot | Same page, "formerly Pardot". |
| **Marketing Cloud Engagement** | ExactTarget | Same page, "formerly ExactTarget". |
| **Agentforce** (AI agent platform) | Einstein Copilot (for the employee-facing assistant) | salesforce.com/agentforce/ lists "Agentforce (formerly Einstein Copilot)" among its agent types. |
| **AgentExchange** | AppExchange | The only evidence is a headline on appexchange.salesforce.com saying AppExchange "is now AgentExchange"; salesforce.com/agentforce/agentexchange/ does not say "formerly". Treat the rename as **likely but not fully confirmed** (Part H). |
| **Tableau Next** (agentic analytics) alongside **Tableau** and **CRM Analytics** | n/a | salesforce.com/analytics/ lists all three plus Tableau Pulse, Embedded Analytics, Tableau Accelerators. |
| **Revenue Cloud** (Revenue Lifecycle Management) | Salesforce CPQ and Billing family | Commerce page links Revenue Lifecycle Management to the Revenue Cloud page. The page itself does not say "formerly CPQ" but names CPQ-style quoting as a capability. |
| **Agentforce Coworker** | n/a | New. Described as an AI teammate, sold as its own user licence and used inside Starter Suite. |
| **Agentforce 360 Platform** | Einstein 1 Platform | Used on architect.salesforce.com ("The Agentforce 360 Platform"). security.salesforce.com still says "Einstein 1 Platform", so that page is dated. |
| **Trust layer** | Einstein Trust Layer | salesforce.com/artificial-intelligence/trusted-ai/ uses "Salesforce Trust Layer" in the body and "Einstein Trust Layer" in one FAQ answer. Official pages disagree with each other; copy will say "the trust layer" and name its features (Part H). |

Names to **avoid** because they are stale or unconfirmed: Data Cloud (as a product name), Pardot, ExactTarget, Einstein Copilot, Einstein 1, "Agentforce Marketing" and "Agentforce Commerce" (neither is used as a product name on its page), "Salesforce Customer 360" as a product (the products page says Customer 360 is an end state, not a product).

---

## Part B. The platform in one picture

Salesforce sells one connected platform. The products page lists the entry points; the platform page describes the shared parts underneath. In plain terms:

1. **Applications** (what people use): Sales, Service, Marketing, Commerce, Revenue, Field Service, plus industry versions.
2. **Agents** (what works alongside people): Agentforce builds, runs and monitors AI agents that reason over CRM data and take actions.
3. **Data** (the context): Data 360 unifies data from Salesforce and other systems, often without copying it, and gives agents and apps a shared, governed view.
4. **Integration and automation**: MuleSoft connects systems and APIs; Flow automates work; both can be used as agent actions.
5. **Analytics**: Tableau (Tableau Next, Tableau, CRM Analytics) turns the same data into dashboards and conversational answers.
6. **Collaboration**: Slack is the place people and agents talk, approve and update records.
7. **Foundation**: the Salesforce Platform (shared metadata framework, security and compliance controls, DevOps Center, sites and portals) running on Hyperforce infrastructure, with an ecosystem marketplace (AgentExchange).

Source: salesforce.com/products/, salesforce.com/platform/, salesforce.com/agentforce/.

The unifying claim Salesforce makes is that agents are only as useful as the data and actions they can reach, so every product is positioned as sharing the same data layer and the same agent platform. The copy should describe this as Salesforce's own positioning, not as a verified outcome.

---

## Part C. Product by product

Format per product: one sentence · the problem · who uses it and what they do · capabilities · how it works · how it connects · AI · editions · notes. Sources are in Part G under the same product heading.

### C1. Agentforce (the agent platform)

**One sentence.** The Salesforce platform for building, deploying and monitoring AI agents that handle customer and employee work around the clock and hand over to people when needed.

**Problem it solves.** Routine questions, case handling, bookings and follow-ups consume staff time; scripted chatbots cannot decide what to do next. Agents interpret the request, plan, pick the tools they have, and act.

**Who uses it.**
- *Admins and developers* define an agent's goals, instructions, actions and guardrails in Agent Builder (low-code, natural language) or in code (Agent Script, developer tooling).
- *Service reps and supervisors* work with agents handing cases over; supervisors watch conversations and step in.
- *Sellers and marketers* use purpose-built agents (for example a sales development agent, a sales coach, a campaign optimiser).
- *Shoppers and customers* talk to agents on web, messaging apps, voice and inside CRM.

**What it contains (as named on the Agentforce page).**
- Agent development lifecycle tools; Agent Builder (low-code); Agent Script (precise control over reliable behaviour); Agentforce Voice; Agentforce Observability (near real-time monitoring); MCP support (agents reach tools through verified MCP servers from AgentExchange partners); multi-agent orchestration; Agent Optimizer; Long-Horizon Runtime (goals pursued over days or weeks under human oversight); purpose-built agents for sales, service, HR and others.
- Agent types named: Service Agent, Sales Development Representative, Sales Coach, Merchandiser, Buyer Agent, Personal Shopper, Campaign Optimizer.

**How it works.**
- An agent is made of *instructions* (what it is for and how it should behave), *topics or subagents* (areas of competence), and *actions* (things it can do). Existing assets can become actions: Flow, prompt templates, Apex, APIs, Data 360, Slack and MuleSoft are named as native tools.
- At run time the Atlas Reasoning Engine breaks the request into smaller tasks, evaluates each step and builds a plan until the answer or action is complete. Agents draw on CRM data and on external data via Data 360. The "how it works" page adds that agents can be triggered by data changes and automations, not only by a person typing.
- Architect guidance describes five agent shapes: conversational, proactive (event-driven), ambient (background, surfacing suggestions), collaborative (human-in-the-loop teams), and autonomous (given a goal, work within policy). It names supporting patterns such as Greeter, Operator and Orchestrator (a lead agent plans, delegates to specialists and combines results). "Handoff" and "grounding" are not named patterns, but escalation to a human with the transcript and RAG-based grounding in CRM and Data 360 data are both described.
- The Agent Development Lifecycle runs in five phases with a feedback loop: ideation and design, development, testing and validation (unit, end-to-end, adversarial, human review, scale tests, in a sandbox because agents can change CRM data), deployment (version-controlled metadata, CI/CD, deployment and activation are separate steps, rollback possible), and monitoring and tuning (latency, token cost, error rates, task completion, escalation frequency, satisfaction).

**How it connects.** Data 360 (grounding and context), Flow, Apex and APIs (actions), MuleSoft (Agent Fabric to govern agents across vendors), Slack (agents work inside channels), and AgentExchange partners (third-party agents and MCP servers).

**AI trust and guardrails.** See D1. Plus Audit Trail of agent actions and outputs, and testing before deployment ("generate test cases, check how guardrails are followed").

**Editions and licensing (concepts only).** Consumption pricing (Flex Credits: pay per agent action from a shared pool; Conversations: pay per customer conversation; the two cannot coexist in one org), per-user models (an Agentforce user licence, add-ons for Sales/Service/Field Service/Industries with unmetered employee usage, Max edition bundles, a separate Agentforce Coworker licence), a free Foundations entry point, and buying models (pre-purchase, pre-commit, pay-as-you-go). A usage tracker (Digital Wallet) exists. Pricing changes; link salesforce.com/agentforce/pricing/ and do not quote.

**Notes.** The existing site page quotes counts such as "18K+ companies" and "70%… resolved autonomously". None of these were confirmed on an official page I could read; see Part F.

### C2. Sales Cloud

**One sentence.** Salesforce's CRM for sales teams, with AI and agents inside the selling workflow.

**Problem.** Seller time goes into data entry and chasing, pipelines are opaque, forecasts are guessed.

**Who uses it.** Sellers (leads, deals, next steps), sales managers (pipeline, coaching), revenue leaders such as CROs (forecast), partner sellers (Partner Cloud), sales ops (territories, quota and compensation data).

**Capabilities (grouped).**
- *Capture and records:* leads, contacts, accounts and opportunities in one place; automatic logging of emails, events and calls.
- *Pipeline and forecast:* consolidated pipeline, change tracking, real-time forecasts with metrics tailored to goals, AI coaching on priority deals.
- *Workflow:* drag-and-drop process automation, territory assignment, templated quotes and contract approvals.
- *Reach:* mobile app and browser extension; headless access that brings account insight into Slack, Teams, ChatGPT and Claude under enterprise controls.
- *Performance:* quota, earnings, SPIFFs and coaching data (Sales Performance Management, add-on).
- *Partners:* Partner Cloud (shared account view, co-sold deals, market-development fund claims).
- *Revenue:* Revenue Cloud for quoting, contracts and billing (C3).

**How it works (data model).** Leads are prospects not yet qualified. Qualifying a lead converts it into an account, a contact and optionally an opportunity; the opportunity is the deal tracked through stages to a forecast. Quotes and products attach to opportunities. (Primary source for the object model is `developer.salesforce.com/docs/platform/data-models/...sales-cloud-overview.html`, which returned 403; the object list above is confirmed only via the official architect diagram description. Re-verify before shipping an ERD.)

**AI.** AI scores and ranks leads, drafts emails and proposals, detects triggers without manual set-up; agents research prospects, prepare deals, monitor accounts, engage inbound leads, generate quotes and process orders.

**Editions (concepts).** Suites for small business (Free Suite, Starter Suite, Pro Suite) and sales-focused editions named Core, Advanced and Max. Per-user, per-month pricing; billing terms differ by edition. Support levels (Standard, Premier, Signature) are part of the decision. Agent capabilities, Revenue Cloud, Partner Relationship Management and Sales Planning are sold as add-ons. Flex Credits power AI and agent usage. A 30-day free trial is offered.

### C3. Revenue Cloud

**One sentence.** The quote-to-cash product: pricing, quoting, contracts, assets and subscriptions, order management and billing on one data model.

**Problem.** What was sold differs from what is invoiced; deal desks and finance re-key data.

**Who uses it.** Sellers (guided quotes), deal desk and revenue operations, legal (clause libraries and templates), order-management and finance teams.

**Capabilities.** Guided quoting with bundling rules and a configurator for complex products; one attribute-based product catalogue connectable to PIM, PLM and ERP; a configurable pricing engine that shows how a price was built; contract templates with AI-assisted clause generation and redlining, approvals, e-signature and obligation tracking; asset and subscription tracking (renewals, amendments, cancellations; recurring-revenue metrics such as MRR, ARR, NRR); order management that breaks a commercial order into fulfilment tasks on a visual canvas; billing (listed as a separate product); analytics powered by Tableau Next.

**ERP.** The page treats ERP as an integration point, not in depth. This is a place where the SAP angle matters for Mawkish, but the official page does not describe an SAP pattern; do not invent one.

**AI.** Agents embedded in revenue workflows enforce deal rules and handle routine tasks; people make the decisions.

### C4. Service Cloud

**One sentence.** The customer-service and support product where AI agents, human reps and customer data work together on cases, conversations and knowledge.

**Problem.** Fragmented channels, repeated questions, no shared context between agent and rep.

**Who uses it.** Customers (self-service), service reps (console), supervisors (Command Center), field teams (Field Service, C5), employees (IT and HR service).

**Capabilities.**
- *Customer service management:* case management (Core edition and up), Service Rep Assistant (step-by-step plans and guidance in live chat, voice and case record), Service Replies (AI-drafted replies grounded in customer and organisation data).
- *Knowledge:* Enterprise Knowledge grounds AI answers in multiple sources via Data 360; Article Recommendations; Self-Learning Knowledge finds gaps and drafts articles.
- *Console and supervision:* Service Console combines context, cases, conversations and tools; Command Center lets supervisors watch rep and AI conversations and step in.
- *Contact centre:* omnichannel on one platform with telephony integrations and digital channels (chat, email, WhatsApp, SMS, voice, Slack).
- *Employee service:* IT and HR service management.
- *Self-service:* help centre and customer-facing agents.

**Industries named.** Healthcare, banking, retail, manufacturing, financial services, technology, education, transportation, public sector.

**Editions (concepts).** Suites plus Service editions Core, Advanced, Max. Core covers case management and a self-service help centre; Advanced adds AI channels, a customer-service AI agent and stronger data protection; Max adds the full Agentforce for Service suite, an expanded contact centre and a yearly pool of Flex Credits. Many capabilities are add-ons (digital channels, workforce and quality management, field service, Security Center, storage).

**Not covered by the official pages read.** Entitlements/SLAs and incident/problem management were not on the pages I could open. Do not write about them until sourced (Part H).

### C5. Field Service

**One sentence.** Software for work done at customers' sites: scheduling, dispatch, mobile work, assets and parts.

**Who uses it.** Dispatchers (console), technicians (offline-capable mobile app for Android and iOS), contractors (secure portal and app), customers (booking agents), service managers.

**Capabilities.** AI-assisted scheduling and route building that matches jobs to people by skills and availability; a mobile app that works offline and can create quotes, capture signatures and take payments; asset lifecycle and preventive maintenance driven by usage, condition or sensor thresholds, with an AI model that estimates failure likelihood; parts and inventory (thin detail on the page); Visual Remote Assistant (live video with a remote expert). Agents let customers book, change or cancel appointments, brief technicians before a job and summarise after.

**Editions.** Field Service is an add-on to Service (Field Service Plus bundles dispatcher, technician and sales/service tools). See the Field Service pricing page; do not quote.

### C6. Marketing Cloud

**One sentence.** The umbrella for Salesforce's marketing products; Marketing Cloud Next is the new generation built on the Salesforce platform with Data 360 and Agentforce at its core.

**Product family (all official names, with how they relate).**
- Marketing Cloud Next: flagship, platform-native.
- Marketing Cloud Account Engagement (formerly Pardot): B2B marketing automation; Account Engagement+ adds Next's AI without switching platforms.
- Marketing Cloud Engagement (formerly ExactTarget): the established product; its customers can reach Next capabilities.
- Contentful (headless CMS, described as newly acquired) is linked from the content-management page.

**Capabilities.** A real-time customer profile (Data 360 positioned as the CDP); create-once-publish-everywhere content structured for people and AI agents; Campaign Agent (acts as a digital campaign manager from brand guidelines, generates channel content, optimises sends from intent signals; marketers set goals and guardrails); two-way conversations over email, SMS and web; cross-channel attribution and reporting; loyalty offers; demand generation and paid-channel audience activation; personalisation.

**Who uses it.** Marketers (B2B and B2C), small-business owners, and sales/service/commerce teams who share the same conversations and profile.

**Notes.** The page names a "Piper" AI SDR agent but presents it as third-party (via Qualified); do not present it as a Salesforce product. Loyalty Management (existing Mawkish page) sits under marketing on the official site; confirm whether to keep it as its own page (Part H).

### C7. Commerce Cloud

**One sentence.** Salesforce's commerce platform connecting online storefronts, in-store point of sale and order management.

**Capabilities.** B2C Commerce (discovery to checkout; technology originates from Demandware, acquired 2016 per the page); B2B Commerce (business buying, AI-assisted buying tools); Order Management (real-time inventory across channels, automated routing; B2B order splitting); Modern Point of Sale (mobile-first); Revenue Lifecycle Management for guided quoting; Composable Commerce for headless storefronts; Payments; Agentforce Guided Shopping (chat-based discovery including visual product search); Starter Suite storefront for small businesses.

**Who uses it.** Merchandisers, developers and admins; marketing, sales and service teams through the shared CRM; shoppers via agents.

**Notes.** Page cites vendor-reported conversion uplifts from a search partner; do not carry over.

### C8. Data 360

**One sentence.** Salesforce's data platform: it brings data from many sources together and gives it business meaning so people and agents can act on it.

**Problem.** Customer data lives in separate systems with different IDs; AI answers built on partial data are unreliable.

**How it works (Trailhead stages, own words).**
1. *Connect:* bring data in from Salesforce clouds, third-party apps, legacy and on-premises systems, and data lakes or warehouses. Warehouse data can be mirrored without copying ("zero copy"); unstructured files (documents, audio, video) are processed and indexed for AI.
2. *Harmonise and unify:* set governance rules for access, tagging and encryption; clean and transform data; map it to a shared data model so external data behaves like standard Salesforce objects; match records across sources to build one profile per customer. Identity resolution uses rulesets with *match rules* (which source profiles consolidate) and *reconciliation rules* (which value wins). Unified profiles are described as a "key ring" of customer IDs and update as source data changes.
3. *Analyse and act:* calculated insights, audience segments and predictive models; results appear on Salesforce records, trigger Flow, flow into Sales, Service and Marketing, agents, dashboards and ad platforms.

**Capability groups on the official page.** A headless data platform (zero-copy integration, structured and unstructured data, 200-plus pre-built connectors per the page, "Context Anywhere"); the Agent Context Engine (turns documents and logs into structured knowledge agents can use, with persistent memory); a customer data platform (unified profiles, journeys, interaction history); add-ons (Agentforce Coworker, Apromore process intelligence).

**Who uses it.** Service reps and agents (interaction history), marketers (segments and journeys), sales and service teams, admins and low-code builders (Flow), data and AI teams.

**Governance.** Automated classification and tagging, policy-based access, data masking, secure connections, encryption-key management (as listed on the guide page).

**Licensing.** Consumption-based (credits for ingestion, identity resolution, segment activation and similar, plus storage and premium add-ons). A calculator and pricing page exist; existing Data Cloud contracts are honoured through their term. Do not quote.

**Notes.** Trailhead terms DLO (data lake object) and DMO (data model object) are used in module text; the marketing guide page does not define them. Re-verify on Trailhead before using the acronyms.

### C9. Slack

**One sentence.** The collaboration layer Salesforce positions as the "agentic OS": the place people and agents work together and update CRM records.

**Capabilities.** Salesforce Channels tie a Slack channel to one record (opportunity, account, case) so teams can view and edit it there; Flow can create a deal channel automatically when an opportunity changes; Agentforce agents work in channels; Slackbot understands business context, a Today view gives a daily briefing, and users can ask in plain language to update a record (a person confirms before it saves); Slack Workflow Builder can read and write Salesforce records without code; Flow approvals run in Slack with approve/reject buttons; Slack Surfaces turns Salesforce and other data into interactive views; Tableau in Slack shares metrics.

**Controls.** Admins decide which objects Slackbot may change; every CRM change needs human confirmation before saving.

### C10. Tableau

**One sentence.** Salesforce's analytics family: Tableau Next (agentic analytics on Data 360), Tableau (the established BI platform), and CRM Analytics (analytics inside Salesforce CRM).

**Capabilities.** Dashboards and visualisation over many data sources; agentic analytics (ask questions in natural language and receive summaries and visuals, agents that watch metrics and flag anomalies, insights that trigger workflows); a semantic layer that unifies business definitions so answers stay consistent (Tableau Semantics, "Trusted Context"); Tableau Pulse; embedded analytics; Tableau in Slack. Deployment can be on-premises or cloud per the page.

**Notes.** Roles (creator, explorer, viewer) were **not** on the official page I read, so the copy will not describe Tableau licence roles until sourced.

### C11. MuleSoft

**One sentence.** Salesforce's integration and API platform; now also positioned as a control plane for agents.

**Products.** Anypoint Platform (integration and API management); Agent Fabric (discover, govern and orchestrate agents, with a registry of tools, agents and models and shared policies); Omni Gateway (control and protect APIs and AI interactions, route model traffic through one endpoint with token budgeting).

**Approach.** API-led connectivity: existing systems are exposed as reusable, governed APIs that applications and agents can use. Capability groups: connect (pre-built connectors, templates), automate (workflows and bots, document data extraction), govern (catalogue of agents and tools with consistent policies).

**SAP angle.** The MuleSoft SAP Connector (docs.mulesoft.com/connectors/sap/sap-connector) connects Mule to SAP ECC or S/4HANA on-premises over RFC, built on SAP's Java Connector libraries; it needs credentials and authorisations for RFC, BAPI and IDoc; it requires a separate licence from MuleSoft. mulesoft.com/integration/sap-salesforce-integration describes bidirectional customer and product sync, opportunity aggregation and sales-order flows between SAP and Salesforce. **Caveat:** the official connector docs describe on-premises ECC and S/4HANA over RFC; I did not find an official statement on SAP cloud editions (for example S/4HANA Public Cloud). Do not claim cloud-edition support.

### C12. Salesforce Platform (including Flow, Hyperforce, AgentExchange, Experience Cloud)

**One sentence.** The shared foundation under every Salesforce app, covering agents, data, integration, security, analytics, DevOps, sites and an ecosystem.

**What the official page lists.** AI agents; data and metadata (Data 360); integration and automation (MuleSoft); security, privacy and compliance; analytics (Tableau); applications; DevOps Center; websites and custom apps (branded sites and portals); an open partner ecosystem; Hyperforce infrastructure; Slack.

**Hyperforce (official page).** Salesforce's public-cloud infrastructure, built as software so Salesforce can deploy to new regions quickly. Customers choose the region where data is stored and processed; availability varies by product and country; no extra charge for Hyperforce itself, with a paid EU option (EU Operating Zone) for stricter residency and in-region support; Shield, Security Center and Privacy Center add monitoring and privacy tools; cross-region continuity can replicate an org to a second region.

**AgentExchange (official page).** Marketplace for apps, agents, Slack solutions, sub-agents and MCP servers that plug into Agentforce Builder. Listings are curated and vetted for security; admins control data boundaries and API scopes per agent; purchases roll up to one Salesforce billing account. The page does not describe the security-review process.

**Flow / automation.** The automation page returned 404; Flow is described via Slack and Agentforce pages (Flow can create channels, run approvals in Slack, serve as agent actions). A dedicated Flow description needs another official source (Part H).

**Experience Cloud.** The page I tried returned 404; Experience Cloud appears on security.salesforce.com (configuration hygiene guidance for sites). Needs its own official source before a page or section is written.

### C13. Industries

Salesforce publishes dedicated pages for 17 industries: automotive, communications, consumer goods, education, energy and utilities, construction and real estate, financial services, healthcare, life sciences, manufacturing, media, nonprofit, professional services, public sector, retail, technology, travel/transportation/hospitality (salesforce.com/industries/). I read two in detail:
- **Financial services:** Financial Services Cloud is the core product (pulls data from core banking, wealth and insurance systems into one customer view with built-in workflows, compliance rules and approvals); use cases span banking, insurance and wealth; Agentforce, Data 360, Slack and Tableau sit around it.
- **Manufacturing:** Manufacturing Cloud (data model, apps and UX for sales, service and channel); designed to work alongside ERP and supply-chain systems by pulling customer, product and asset data from ERP, PLM, IoT and partners into one governed place without moving it. The page does not mention rebates or run-rate forecasting, so those must not be claimed.
Proposal: no industry pages in the first release; one directory section on the hub (Part I).

---

## Part D. Cross-cutting

### D1. Trust, AI safety and governance (as Salesforce describes it)

- **Trust layer** (official body text uses "Salesforce Trust Layer"; one FAQ says "Einstein Trust Layer"). Three feature groups named: *secure data retrieval and dynamic grounding* (the model uses company data; users see only what their permissions allow), *zero data retention and data masking* (prompts and responses are not stored or used to train third-party models; personal or proprietary details are swapped for placeholders before reaching the model), and *toxicity detection and security guardrails* (generated content is scanned and flagged output is filtered, blocked or marked). The FAQ also lists TLS in-flight encryption. The page does **not** mention an audit trail or prompt defence, although the Agentforce how-it-works page lists Audit Trail.
- **Guardrails for agents:** safeguards you define plus protections Salesforce manages, to keep agents on their instructions, block off-topic or inappropriate conversations, and reduce hallucinated or biased answers. Test before deploying.
- **Humans stay in control:** Slack record changes need confirmation; agent deployment and activation are separate steps; long-horizon agents run "under human oversight".
- **Security guidance** (security.salesforce.com): multi-factor authentication, login IP ranges, TLS 1.3 migration, configuration hygiene (especially on Experience Cloud sites), monitoring, a Zero Trust approach, mitigations for the OWASP LLM risks, a responsible-disclosure policy. Customers share responsibility for configuring their own org.
- **Compliance:** the landing pages say Salesforce maintains certifications and attestations but the pages I could read list none by name. **Copy must not name any certification** until the list is read on compliance.salesforce.com or trust.salesforce.com (Part H).

### D2. Licensing in concept (what a customer has to decide)

1. Which edition: suite for a small team, or a product-specific edition; how many users.
2. Billing terms: monthly versus annual; contract length.
3. Support plan: Standard (included), Premier, Signature.
4. Add-ons: agents, Revenue Cloud, Partner Relationship Management, digital channels, workforce management, Field Service, storage, security tooling.
5. AI consumption: Flex Credits (pay per agent action), Conversations (pay per customer conversation), per-user agent add-ons; commitment level (prepaid, committed, pay as you go); how to monitor usage.
6. Data 360 consumption: credits for ingestion, identity resolution, activation.
Every price and credit allotment moves, so the pages explain these decisions and link the official pricing pages (sales, service, agentforce, data).

### D3. Implementation, as Salesforce describes it

Salesforce's own services page names four phases for its professional services: **Get started** (plan, best practices, a foundation that fits how the business operates), **Build** (working solutions through testing, feedback and launch; build, integration and data work), **Optimise** (tuning, security, simplification, scaling), **Transform** (adopt AI and new capabilities with guardrails and skills). For agents specifically the Agent Development Lifecycle (C1) gives five phases with a feedback loop. Salesforce's Well-Architected framework lists five pillars today: Trust, Reliability, Operational Excellence, Resource and Cost Optimisation, Fairness, with decision guides (data integration, Data 360 interoperability and provisioning) and architecture patterns (integration patterns, enterprise agentic architecture, Data 360 architecture).

The official pages I read do **not** list "what customers should prepare" or "common pitfalls" in so many words. Material for those lists must come from Trailhead modules or Salesforce Help pages I could not open; until then the pages will present the *phases* (sourced) and a *readiness checklist derived only from sourced statements* (for example: define the questions and goals before building an agent; agents need sandbox testing because they can change data; data must be mapped to a shared model before unification). Flag in Part H.

---

## Part E. FAQ banks (each answer is a sourced paraphrase)

**Hub**
1. *What is the Salesforce platform and how do the products fit together?* Applications on a shared platform, with Data 360 as the data layer and Agentforce as the agent layer; Slack, Tableau and MuleSoft round it out. (products, platform pages)
2. *What is Agentforce and how is it different from a chatbot?* Agents interpret the request, plan and choose actions, can be triggered by data changes, and use trusted data; scripted bots follow fixed flows. (agentforce, how-it-works)
3. *What is Data 360 and was it called Data Cloud?* Yes; formerly Data Cloud. (data page)
4. *Do we have to copy our data into Salesforce?* Not necessarily: zero copy brings in warehouse and lake data without duplicating it, though data can also be ingested. (data guide)
5. *How is AI kept safe?* Trust layer features, guardrails, permissions, human confirmation. (trusted-ai, how-it-works)
6. *How is Salesforce priced?* By edition and seat, with add-ons and consumption for AI and data; decisions listed in D2; links to official pricing pages.
7. *Can Salesforce work alongside our ERP?* Yes in principle: MuleSoft publishes connectors and patterns for SAP ECC and on-premises S/4HANA; Manufacturing Cloud is designed to work alongside ERP. Cloud-edition SAP is not confirmed on the pages read.
8. *Where does data live?* Hyperforce lets you choose a region; availability varies by product.

**Sales Cloud (examples).** What is Sales Cloud? What does sales force automation do? How do we get started? (free trial, edition choice, configure, or use an AgentExchange partner; official FAQ). How does it handle customer data? (one secure database for activity and rep-entered data; feeds agents).

**Service Cloud.** What is the difference between a case and a conversation? (needs Help source; hold). Can agents and reps work together? (yes: handoff, Command Center). Which channels? (chat, email, WhatsApp, SMS, voice, Slack).

**Data 360.** Is it a CDP? (Yes, and also serves sales, service and commerce). How is it priced? (consumption). What is identity resolution? (rulesets with match and reconciliation rules; Trailhead).

**Agentforce.** How do we test an agent before going live? (test cases, sandbox, testing tools; ADLC). Can two pricing models be mixed? (Flex Credits and Conversations cannot be used in the same org.) Who can build agents? (admins and developers; low-code and code paths).

---

## Part F. Audit of what is already on the site

Existing Salesforce code (found, read, not modified):
- `components/salesforce/*` renders six cloud pages at `/services/salesforce/<slug>`: sales-cloud, service-cloud, marketing-cloud, data-360, agentforce, loyalty-management. Content in `components/salesforce/clouds.ts`.
- The hub is the generic services template at `/services/salesforce-solutions` (copy in `lib/site-data.ts`: "put the customer at the centre…", "the world's leading CRM platform").
- The "Our Services" menu shows a tile grid of the six clouds (`lib/services-menu.ts`, id `salesforce`), not the SAP-style layout.
- `app/sitemap.ts` imports the clouds list.

Issues against your content rules:
1. **Statistics and third-party claims.** `clouds.ts` quotes many figures: revenue and hours (Sales), a Forrester total-economic-impact ROI figure and an "average resolution rate" (Service), Customer Success Metrics percentages (Marketing), connector counts and a records-processed figure (Data 360), a company count and a customer result (Agentforce), a customer deal-speed figure, and Gartner Magic Quadrant leader claims in Sales and Data. I confirmed only a few of these on official product pages I read (Sales page: 30% revenue and 25 hours, labelled vendor claims; Data 360 page: "over 200 connectors"; financial services page cites Salesforce's 2026 Customer Success Metrics). The Gartner, Forrester and customer-story figures were not confirmed. Under your rules they come out unless re-verified on an official page.
2. **Mascot and brand.** I did not find logos or mascots in the code but have not audited every image; the build will check.
3. **Partner status.** `lib/site-data.ts` (around line 399) has a team member's `relationship: "Salesforce Summit Platinum Partner"`. That is a partner claim that your rules say is unconfirmed. I have not touched it. **Decision needed:** keep or remove.
4. **Name drift.** "Marketing Cloud" copy should distinguish Next, Account Engagement and Engagement; "Loyalty Management" is not a top-level product on the main products page.

---

## Part G. Source ledger (official URLs only)

Product index and platform
- https://www.salesforce.com/products/ : product list, names, one-line descriptions, Customer 360 as end state, Data 360 naming.
- https://www.salesforce.com/platform/ : shared platform layers.
- https://www.salesforce.com/hyperforce/ : regions, residency, EU Operating Zone, Shield and Security Center mention.

Agentforce
- https://www.salesforce.com/agentforce/ : components, agent types, Atlas Reasoning Engine description, "formerly Einstein Copilot".
- https://www.salesforce.com/ap/agentforce/how-it-works/ : build, actions, grounding, channels, guardrails, testing, monitoring, Audit Trail.
- https://www.salesforce.com/agentforce/pricing/ : pricing models (concepts only).
- https://architect.salesforce.com/fundamentals/agent-development-lifecycle : five phases.
- https://architect.salesforce.com/fundamentals/agentic-patterns : agent shapes and patterns (first 100k characters read; the last 32k characters were not).
- https://www.salesforce.com/artificial-intelligence/trusted-ai/ : trust layer features and the naming inconsistency.
- https://www.salesforce.com/agentforce/agentexchange/ : marketplace description.

Sales
- https://www.salesforce.com/sales/ ; https://www.salesforce.com/sales/cloud/ (capabilities, FAQ) ; https://www.salesforce.com/sales/pricing/ (editions, Flex Credits, concepts).
- https://www.salesforce.com/sales/revenue-lifecycle-management/ : Revenue Cloud.
- https://www.salesforce.com/small-business/starter/ : Starter Suite scope and limits (an entry price appears on the page; do not carry it).

Service and Field Service
- https://www.salesforce.com/service/ ; https://www.salesforce.com/service/cloud/ ; https://www.salesforce.com/service/pricing/ ; https://www.salesforce.com/service/field-service-management/.

Marketing, Commerce
- https://www.salesforce.com/marketing/ ; https://www.salesforce.com/commerce/.

Data 360
- https://www.salesforce.com/data/ ; https://www.salesforce.com/data/guide/ ; https://trailhead.salesforce.com/content/learn/modules/data-cloud-explore-the-data-landscape/explore-the-stages-of-data-cloud ; https://trailhead.salesforce.com/content/learn/modules/data-cloud-connect-and-unify/map-and-unify-data (search snippet only; page not opened).

Slack, Tableau, MuleSoft
- https://www.salesforce.com/slack/ ; https://www.salesforce.com/analytics/ ; https://www.salesforce.com/mulesoft/ ; https://docs.mulesoft.com/connectors/sap/sap-connector ; https://www.mulesoft.com/integration/sap-salesforce-integration (search snippets for the last two; pages not opened).

Industries
- https://www.salesforce.com/industries/ ; https://www.salesforce.com/financial-services/ ; https://www.salesforce.com/manufacturing/.

Trust, security, implementation
- https://security.salesforce.com/ ; https://trust.salesforce.com/ (landing only) ; https://compliance.salesforce.com/ (no list) ; https://www.salesforce.com/services/ (success plans and professional-services phases) ; https://architect.salesforce.com/well-architected and /well-architected/overview (five pillars, decision guides, patterns).

Official pages that failed or were empty: help.salesforce.com (not reached), developer.salesforce.com docs (403), salesforce.com/agentforce/faq/ (404), salesforce.com/experience-cloud/ (404), salesforce.com/platform/products/automation/ (404), salesforce.com/news/stories/ (no story list).

---

## Part H. Open points (need your decision or more sourcing)

1. **Conflict: trust-layer name.** "Salesforce Trust Layer" vs "Einstein Trust Layer" on the same official page. Proposed wording: "the Salesforce trust layer". Also: the trusted-ai page lists three groups and does not mention Audit Trail or prompt defence, while the Agentforce how-it-works page lists Audit Trail. I will list features only on the page that names them.
2. **Conflict: "Agentforce for Sales" vs Sales Cloud.** The sales page presents the product as Sales Cloud and uses "Agentforce for Sales" only in pricing context; the Service page uses "Agentforce for Service". Proposed wording: "Sales Cloud with Agentforce".
3. **AgentExchange rename.** Headline-only evidence. Say "AgentExchange (Salesforce's marketplace)" and drop "formerly AppExchange" until confirmed.
4. **Unreachable official sources.** Sales data model (developer docs), Experience Cloud, Flow, Service entitlements/SLA and incident/problem management, compliance certification names, Tableau licence roles, "what customers should prepare" and "common pitfalls". I can retry via the Help site with more URL discovery, or you can paste what you want covered. Until then these are out of the copy.
5. **Existing statistics and analyst claims.** Remove unless re-verified (Part F). Salesforce's own "Customer Success Metrics" numbers are labelled vendor-reported on official pages; ask whether you want any carried over, with date and attribution.
6. **ERP and SAP.** The only official SAP-to-Salesforce material found is MuleSoft's connector (on-premises ECC and S/4HANA over RFC, separately licensed). Cloud-edition coverage unknown. This is central to Mawkish's SAP business; consider a targeted follow-up on mulesoft.com and Salesforce Architects.
7. **Team page partner claim** (`relationship: "Salesforce Summit Platinum Partner"` in `lib/site-data.ts`): keep or remove.
8. **Dated official pages.** security.salesforce.com says "Einstein 1 Platform"; some Trailhead modules still say Data Cloud. Treat both as lagging.
9. **Marketing "Piper" agent.** Presented by the page as a third-party product; leave out of Marketing copy.
10. **Revenue timing claims.** Several official pages reference "Dreamforce 2026" and new products (Agentforce Coworker, Long-Horizon Runtime, Contentful). They are current as of the pages I read but new; I will mark them "announced" where I mention them and check release notes during the build.

---

## Part I. Proposed page plan (for approval)

### I1. Structure and routes

Keep the existing path family and add a real hub. The old `/services/salesforce-solutions` redirects to the hub so inbound links survive.

| Route | Page | Replaces |
| --- | --- | --- |
| `/services/salesforce` | **Hub: the Salesforce platform** | the generic `/services/salesforce-solutions` text page |
| `/services/salesforce/agentforce` | Agentforce | existing |
| `/services/salesforce/sales-cloud` | Sales Cloud | existing |
| `/services/salesforce/revenue-cloud` | Revenue Cloud | new |
| `/services/salesforce/service-cloud` | Service Cloud | existing |
| `/services/salesforce/field-service` | Field Service | new |
| `/services/salesforce/marketing-cloud` | Marketing Cloud | existing |
| `/services/salesforce/commerce-cloud` | Commerce Cloud | new |
| `/services/salesforce/data-360` | Data 360 | existing |
| `/services/salesforce/slack` | Slack | new |
| `/services/salesforce/tableau` | Tableau | new |
| `/services/salesforce/mulesoft` | MuleSoft | new |
| `/services/salesforce/platform` | Platform (Flow, Hyperforce, AgentExchange, sites) | new, depends on Part H item 4 |

That is 1 hub + 12 product pages. `loyalty-management` stays as a section of Marketing Cloud unless you want it kept as a page (Part H). Industries: no pages in v1; a grouped directory on the hub linking to Salesforce's own industry pages.

Order for the "you are here" reading rail (Product N of M): Agentforce, Data 360, Sales, Revenue, Service, Field Service, Marketing, Commerce, Slack, Tableau, MuleSoft, Platform (12 products).

### I2. Page anatomy

Hub: hero stating the platform in one line with a drawn "platform map" · "How the pieces fit" (the seven layers from Part B as an editorial numbered list and a diagram) · where-to-start picker (by problem: sell, serve, market, unify data, deploy agents, connect systems) · how Salesforce sits next to your ERP (MuleSoft patterns, zero-copy data, honest limits) · licensing decisions (D2) · implementation phases (D3) · industries directory · FAQ (hub bank) · CTA · legal.

Product pages: hero with a drawn screen · what it does (plain-language) · tabbed capability explorer (ARIA tabs, one drawn screen per tab) · end-to-end scenario (neutral, labelled illustrative) · role views · how it fits with other systems · AI (what the agents do, trust layer) · starting and implementation · editions conceptually with official link · FAQ · related reading rail ("You are currently viewing X, Product N of 12") · CTA · legal line.

All design rules in your brief apply: no icon-topped cards, no pill lists, no horizontal scrollers, even spacing, content visible without JavaScript, reveal on scroll gated by a JS class, reduced-motion respected. CSS scoped under `.sf`, fonts via `next/font/google` like SAP and Swyftflo.

### I3. Metadata, structured data, sitemap

Per page: title and description (my words), FAQ from the bank above, JSON-LD (WebPage, SoftwareApplication, BreadcrumbList, FAQPage) via a `lib/salesforce-pages.ts` mirroring `lib/swyftflo-pages.ts`; entries in `app/sitemap.ts`; Open Graph via the existing `app/og` route pattern if the SAP one is reusable.

### I4. Navigation

Rebuild the `salesforce` entry in `lib/services-menu.ts` like SAP and Swyftflo: two featured cards ("The Salesforce platform", "Where to start"), titled groups of links with `#anchor` deep links, and a CTA.
- *Sell and monetise:* Sales Cloud, Revenue Cloud, Commerce Cloud
- *Engage and serve:* Marketing Cloud, Service Cloud, Field Service
- *Data and AI:* Agentforce, Data 360, Tableau
- *Connect and collaborate:* MuleSoft, Slack, Platform
Menu marks: two small SVGs of our own design (hub mark and where-to-start), no Salesforce logos.

### I5. Legal line (needs your approval)

Proposed text for the footer of every Salesforce page:

> Salesforce, Agentforce, Data 360, Slack, Tableau, MuleSoft, Heroku and other Salesforce product names are trademarks of Salesforce, Inc. Other names are the property of their owners. Screens shown are illustrations with sample data. Product descriptions follow Salesforce's own published material and may change; check salesforce.com for current details.

The text deliberately makes no claim about any relationship between Mawkish and Salesforce. Add an independence sentence if you want one.

### I6. "You are here" accent

One colour on every page for the marker, pin, pulse and index badge. Swyftflo uses `#7c5cff`; Salesforce pages need their own so the two families are distinguishable. Proposal: `#38a3ff`. Your call.

### I7. Questions I need answered before building

1. Is the page set in I1 right (12 product pages plus hub)? Anything to add (Loyalty page, Experience Cloud, Heroku, Net Zero) or drop?
2. Hub at `/services/salesforce` with `/services/salesforce-solutions` redirecting there: OK?
3. Accent colour for "you are here": `#38a3ff` OK?
4. Legal line (I5): OK as written?
5. Existing statistics and the team-page partner claim (Part F items 1 and 3): remove?
6. Should I do another research round on the unreachable topics (Part H item 4) before building, or build with those topics left out?
