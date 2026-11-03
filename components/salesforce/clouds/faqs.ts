import type { ProductSlug } from "../data";

// One source for both the questions shown on the five main cloud pages and their FAQ structured data, so the two can
// never drift. Every answer is drawn from what Salesforce publishes. Where its own pages leave something out, or
// where a price looks likely to move, the answer says so rather than guessing.

export type Faq = { q: string; a: string };

export const cloudFaqs: Partial<Record<ProductSlug, Faq[]>> = {
  "sales-cloud": [
    {
      q: "What does Sales Cloud actually cost?",
      a: "Salesforce publishes five rungs, per user per month, billed annually unless stated: Starter Suite at $25 (monthly or annual), Pro Suite at $100, Core at $195, Advanced at $395 and Max at $550. There is also a Free Suite at $0.\n\nThe jump that catches people out is Core to Max. Max is where Agentforce for Sales, Agentforce Coworker, Spiff, Sales Planning, Sales Programs, Maps, Tableau Next and Slack Enterprise+ are included, along with 2.75 million Flex Credits per org per year. Below Max those arrive as add-ons: Agentforce for Sales from $125 per user per month, Sales Programs from $100, Revenue Intelligence from $220, Revenue Cloud from $200.",
    },
    {
      q: "Is the AI included, or is it another line on the invoice?",
      a: "Both, depending on the rung. Salesforce says AI can be added to Core and above, and the full AI suite is what you are buying at Max. Underneath the per-user price, agent work is metered in Flex Credits.\n\nThat second meter is the one to model before you commit. Billing is per action rather than per answer, so a one-step reply is cheap and a multi-step task is not. Work out the actions per task for your real processes, not for the demo.",
    },
    {
      q: "Our CRM data is a mess. Will agents make it worse?",
      a: "They will make it visible, which feels worse for a fortnight and is the best thing that could happen to you. An agent researching an account reads the same fields a person would; where those are stale, blank or contradictory, the agent's output shows it plainly rather than quietly working around it the way an experienced rep does.\n\nSo the honest sequence is hygiene first: required fields that are genuinely required, a close-date discipline, owners on accounts, and automatic activity capture so the record reflects what happened rather than what someone remembered to type.",
    },
    {
      q: "What is Headless Sales?",
      a: "Salesforce's name for putting deal intelligence and updates where the seller already is — it names Slack, Teams, ChatGPT and Claude — under enterprise guardrails, instead of requiring a trip into the CRM interface.\n\nIt matters more than it sounds. The oldest complaint about CRM is that it takes time from selling to serve a system nobody sells from. Moving the interaction to the channel people live in is the first credible answer we have seen to that.",
    },
    {
      q: "Can we believe the 30% more revenue figure?",
      a: "Treat it as what it is: a vendor headline with no published method, alongside 25 hours a week back for sellers. The customer figures beside it are the same — The 1916 Company closing 63% faster, Crexi saving reps five hours a day, Wonolo cutting handle time 20%, BACA doubling productivity.\n\nThese tell you the shape of what companies report, not what you would get. The number worth having is from your own pipeline: pick two teams, run one on the new process for a quarter, and compare. That is six weeks of work and it settles the argument permanently.",
    },
    {
      q: "How long does an implementation take?",
      a: "For a single sales team with clean-ish data and standard processes, a first useful release is weeks rather than months. What stretches it is rarely the software: it is agreeing one definition of a qualified lead, one set of stages, and one owner per account, across teams who have quietly run their own versions for years.\n\nWe would rather spend the first fortnight on that agreement than on configuration, because configuration built on an unresolved disagreement gets rebuilt.",
    },
  ],

  "data-360": [
    {
      q: "Is this a data warehouse? Do we still need ours?",
      a: "No, and yes. Data 360 is not a replacement for Snowflake, Databricks or BigQuery — it connects to them. Salesforce's own framing is zero copy: it reads live data in Snowflake, Databricks, Google BigQuery and AWS (S3 and Redshift) without ETL or duplication.\n\nWhat it adds is the thing a warehouse does not: a resolved customer profile, with business meaning attached, that Salesforce applications and agents can act on in the moment. Keep the warehouse for analysis; use this for action.",
    },
    {
      q: "What does zero copy really mean in practice?",
      a: "That the query runs against your data where it lives rather than against a copy Salesforce has taken. No extract, no nightly sync to babysit, no second copy drifting out of step with the first, and no second place to govern.\n\nThe caveat worth knowing: zero copy is a connection, not magic. Performance and cost still depend on the system at the other end, and some operations will materialise data. Which ones, and what that costs, is a question for your architecture review rather than the product page.",
    },
    {
      q: "What is the Agent Context Engine?",
      a: "The part of Data 360 that turns unstructured material — PDFs, call logs, wikis — into structured business knowledge an agent can be grounded in, along with persistent agent memory. Salesforce says this reduces hallucinations and model processing costs, though it publishes no figure for either.\n\nIt is the most consequential piece for anyone whose AI pilot disappointed. Most of those failed on retrieval, not on the model: the agent had nothing good to read.",
    },
    {
      q: "How is it priced?",
      a: "Consumption, in three parts: Consumption Credits, Data Storage and Premium Add-ons. Existing Data Cloud agreements are honoured to the end of their current term, and existing Salesforce customers can start free.\n\nCredits are where the surprises live. Profile unification, identity resolution, segmentation and activation all consume, and a badly scoped ingestion — everything, because we might need it — produces a bill that ends the project's political support. Scope the data to the decisions it serves.",
    },
    {
      q: "Does identity resolution actually work?",
      a: "It matches and resolves identities across devices, channels and anonymous sessions into known profiles — and how well it does that is a function of your match rules, not of the product. Email-only matching under-merges; loose fuzzy matching over-merges, which is worse, because merging two real customers into one profile is a privacy incident rather than a data-quality issue.\n\nWe treat match rules as a decision for the business, documented and reviewed, not a default somebody accepted during setup.",
    },
    {
      q: "Where does it sit against our existing lakehouse work?",
      a: "Beside it, reading from it. If you are already on Databricks or Snowflake, that estate stays where it is and Data 360 connects to it — which is also why the connector list matters more than any feature.\n\nSalesforce names 200-plus pre-built connectors, and it is named a Leader in customer data platforms by Forrester for B2C and by Gartner for a second year. Both are its own citations, and both are reasonable signals rather than proof.",
    },
  ],

  "marketing-cloud": [
    {
      q: "Which Marketing Cloud am I actually being sold?",
      a: "This is the single most important question on the page, because three different products share the name. Marketing Cloud Next is the current flagship, built on the Salesforce platform with Data 360 and Agentforce. Marketing Cloud Account Engagement is B2B marketing automation and was called Pardot. Marketing Cloud Engagement is the classic product and was called ExactTarget.\n\nGet the name in writing before you sign, because the implementation, the skills and the migration path are different for each.",
    },
    {
      q: "We are on Engagement today. Do we have to move?",
      a: "Not immediately. Salesforce offers Account Engagement+ and a route to add Next's AI capabilities to Engagement without switching platforms, which reads as a deliberate attempt to avoid a forced migration.\n\nTreat that as breathing room rather than a permanent answer. When a vendor builds its new flagship on a different foundation, investment follows the flagship. Plan the move on your timetable, while you still have one.",
    },
    {
      q: "What do the marketing agents actually do?",
      a: "Campaign Agent creates on-brand, channel-ready content, builds campaigns from your brand guidelines, and optimises sends against intent signals — Salesforce's demo also has it prioritising sends and optimising budget. Agentic Demand Generation agents prospect target accounts, qualify inbound demand and nurture buyers. Piper, from the Qualified business Salesforce bought in April 2026 for about $1.2bn, is an AI sales development agent working the website and inbox.\n\nThe common dependency is brand guidelines and segments that are actually defined. An agent generating content against a vague brand produces plausible, off-key work at volume.",
    },
    {
      q: "Why did Salesforce buy Contentful, and does it affect us?",
      a: "Contentful is a composable content platform, bought for about $1.5bn and completed on 1 September 2026, to give the stack a native content layer — structured content that can be reused across channels rather than rebuilt per campaign.\n\nWhether it affects you depends on whether content production is your bottleneck. For organisations re-authoring the same offer five times for five channels, a content layer is the fix. For organisations whose bottleneck is data or approvals, it changes nothing.",
    },
    {
      q: "Are the ROI numbers real?",
      a: "Salesforce attributes them to its own Customer Success Metrics: 32% higher marketing ROI, 34% higher customer lifetime value, 32% higher engagement, 27% lower cost to acquire. Fisher & Paykel is cited at 33% higher order conversion with 100,000-plus unified profiles.\n\nSelf-reported customer-success metrics are the weakest class of evidence a vendor publishes, because the sample is customers who stayed. We quote them labelled, and we would not build a business case on them.",
    },
    {
      q: "Can we run B2B and B2C on the same platform?",
      a: "Salesforce sells both, and the shared foundation — Data 360 underneath, agents on top — is genuinely the same. The day-to-day products differ, and so do the motions: account-based nurture and sales alignment on one side, high-volume personalisation and loyalty on the other.\n\nOrganisations doing both well usually run one data layer and two marketing practices, rather than pretending one team can do both with one playbook.",
    },
  ],

  "loyalty-management": [
    {
      q: "How much does it cost?",
      a: "This is the question that reframes the product, so we put it first. Salesforce prices Loyalty Management per org per month, not per user: Starter at $20,000, Growth at $35,000 and Advanced at $45,000, billed annually. Tableau CRM for Loyalty Management is a further $165 per user per month.\n\nAt those numbers this is not a loyalty scheme for a few thousand members. It is enterprise programme infrastructure, and the business case has to be built on retained revenue rather than on convenience.",
    },
    {
      q: "What do the editions actually change?",
      a: "Volume and sophistication. Loyalty events per year run 1 million on Starter, 15 million on Growth and 50 million on Advanced, with API calls at 50,000, 100,000 and 500,000 a day. Benefits management is static on Starter and full on Growth and above. Partner management is absent on Starter, simple on Growth and advanced on Advanced. Starter is a single programme with 100,000 brand advocates; Advanced supports multiple programmes.\n\nThe event ceiling is the one to model first, because loyalty events are generated by behaviour, not by members, and they accumulate faster than anyone expects.",
    },
    {
      q: "What shapes of programme does it support?",
      a: "Points-based, tiered status, spend-based cash back, visit or punch cards, and hybrids of those. Reward currencies can be denominated in dollars, percentages or vouchers, and cash back can credit a member wallet or apply at checkout.\n\nIt will also reward things that are not purchases — referrals, reviews, social engagement, app activity — which is usually where the interesting programme design is, because it moves behaviour you could not previously pay for.",
    },
    {
      q: "Does it work for B2B and channel partners?",
      a: "Yes, and this is underrated. You can onboard partners, run joint promotions, manage shared currencies, and handle channel rewards and volume rebates.\n\nFor distributors and manufacturers, a rebate programme currently run in spreadsheets and settled quarterly in arrears is often a better first use of this product than a consumer points scheme.",
    },
    {
      q: "What connects it to the rest of Salesforce?",
      a: "Loyalty events — a tier upgrade, a points milestone, an expiring reward, an enrolment — can trigger journeys in Marketing Cloud Journey Builder in real time, or flows in Marketing Cloud Next. Data 360 can unify loyalty data with behavioural and transactional signals, and Salesforce says the platform can predict disengagement risk and trigger a journey automatically.\n\nIn practice the expiring-points reminder and the tier-drop warning are the two highest-returning automations, and both are available on day one.",
    },
    {
      q: "What if the price is beyond us?",
      a: "Then say so early and we will design something else. A points ledger, tier rules and a redemption flow can be built on the core platform, or run from your commerce system, for a fraction of this — with the trade-off that you are maintaining it.\n\nThe line we use: buy Loyalty Management when the programme is a material part of how the business makes money and somebody senior owns it. Below that, build the minimum and revisit when the numbers justify it.",
    },
  ],

  "service-cloud": [
    {
      q: "What is Fin, and why does it keep coming up?",
      a: "Fin is the customer service AI company formerly called Intercom, which renamed itself Fin in May 2026 and which Salesforce agreed to buy on 15 June 2026 for about $3.6bn, completing on 10 September 2026 and bringing more than 30,000 customers with it.\n\nSalesforce now leads its service pages with Fin as the flagship service agent and is folding it into Agentforce. That is a large bet, and it changes what Service Cloud is: less a case-management system with AI attached, more an AI resolution layer with case management behind it.",
    },
    {
      q: "Does it really resolve 76% of queries?",
      a: "That is Salesforce's published average for Fin, with Bloomerang cited at 84% of conversations at an 85% CX score and Formula 1 at race-day issues resolved 50% faster. A Forrester Total Economic Impact study is cited at 396% ROI over three years.\n\nBefore you plan around any of them, pin down what resolution means in your contract. Deflection — the customer gave up — is not resolution. Containment is not resolution. Ask whether the rate is measured on conversations started or conversations completed, and what happens to the ones that escalate.",
    },
    {
      q: "What does Service Cloud cost?",
      a: "Per user per month, billed annually: Starter Suite from $25, Pro Suite from $100, Core at $195, Advanced at $395 and Max at $550.\n\nThe meaningful line is Advanced, which is where an AI agent for customer service first appears, and Max, which includes the full AI suite with Agentforce Coworker unmetered, the contact centre tools, IT service with ten service-desk licences, Tableau Next, Slack Enterprise+ and 2.75 million Flex Credits per org per year.",
    },
    {
      q: "How is the agent work actually metered?",
      a: "Through Flex Credits, and the important nuance is that you are billed per action rather than per answer. A one-step FAQ reply is cheap; a multi-step task fans out into several actions and the meter climbs with it. Voice actions cost more than standard ones.\n\nSalesforce does not publish a plain rate card on its pricing page, and the per-action figures circulating come from third-party analyses rather than from Salesforce. Get the rate card in writing, and model it on your real conversation mix rather than on an average.",
    },
    {
      q: "Which parts of Service Cloud do we actually need?",
      a: "Far fewer than are on the page. Salesforce lists self-service, customer service management, contact centre, CCaaS integrations, digital channels, field service, asset service lifecycle management, visual remote assistant, IT service, HR service and Service Cloud in Slack.\n\nMost organisations need case management, one or two channels, a knowledge base somebody owns, and a clear escalation path. Everything else should wait for a specific problem to justify it.",
    },
    {
      q: "What happens to our service team?",
      a: "The work changes shape rather than disappearing. Volume handled by agents is overwhelmingly the repetitive end, which means what reaches a person is harder, longer and more emotionally demanding than the average case used to be.\n\nPlan for that honestly: fewer, more skilled people; different metrics, because average handle time gets worse when the easy cases are gone; and a knowledge base that someone is paid to maintain, since it is now the thing answering most of your customers.",
    },
  ],
};
