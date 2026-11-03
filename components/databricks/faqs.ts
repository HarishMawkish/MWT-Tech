import type { DbSlug } from "./data";

// One source for both the questions shown on the page and the FAQ structured data, so the two can never drift apart.
// Every answer is drawn from material Databricks publishes. Where its own pages disagree with each other, or where a
// date or a price is likely to move, the answer says so instead of picking a side.

export type Faq = { q: string; a: string };

export const dbFaqs: Record<DbSlug | "", Faq[]> = {
  "": [
    {
      q: "Is Databricks a data warehouse, a data lake, or something else?",
      a: "It is one platform that does the work of both, which is what the word lakehouse means. Your tables live as open files — Delta Lake or Apache Iceberg — in your own cloud storage account, and Databricks puts a warehouse engine, a pipeline engine, a notebook environment, an AI stack and a governance layer over the same copy.\n\nThe practical consequence is that you do not keep a lake for the data scientists and a warehouse for the finance team, with a nightly job copying between them and two sets of permissions to keep in step.",
    },
    {
      q: "We already run SAP. Does Databricks replace anything there?",
      a: "No. SAP runs your processes; Databricks is where you analyse what came out of them and where you build AI on top. SAP and Databricks have built a connector for exactly this: SAP Business Data Cloud data products can be mounted as catalogues in Unity Catalog over the open sharing protocol, with no copy of the data and with the table and column meanings carried across.\n\nWe have a page on that connector, what it shares in each direction and what SAP is told about your usage.",
    },
    {
      q: "How much of this do we have to buy at once?",
      a: "None of it is sold as a seat count or a suite. Databricks bills consumption: you pay for the compute and storage a workload uses, measured per second, and products such as Unity Catalog come with the tier rather than as a separate line. That means you can start with one warehouse, one pipeline and one catalogue, and the bill follows what you actually run.\n\nIt also means an unwatched platform can get expensive quietly, which is why we treat cost controls as part of the build rather than something to look at later.",
    },
    {
      q: "Does our data have to leave our cloud account?",
      a: "Your tables and files stay in storage you own, in the region you choose. Databricks splits itself into a control plane it operates — the web interface, job scheduling, metadata — and a compute plane that runs the work. With classic compute the compute plane runs inside your own cloud account; with serverless compute it runs in a Databricks-managed account in the same region, with its own network and key controls.\n\nWhich of the two you use changes what you can lock down, so it is worth deciding deliberately rather than by default.",
    },
    {
      q: "Is it available near Sri Lanka?",
      a: "Databricks publishes a region list per cloud. On AWS, Asia Pacific (Mumbai) and Asia Pacific (Singapore) both appear with serverless support; on Google Cloud the equivalents are asia-south1 (Mumbai) and asia-southeast1 (Singapore). Individual features — some Lakeflow connectors, some AI services — reach regions at different times, and the Azure list is maintained separately.\n\nWe check the current region and feature tables for the specific services a design depends on before anyone signs anything, because a feature that is missing in your region changes the architecture, not just the timeline.",
    },
    {
      q: "Can we try it before committing?",
      a: "There is a Free Edition for learning, and a trial of the full platform with credits. Free Edition is deliberately boxed in: one workspace, one metastore, one small SQL warehouse, serverless compute only, no SSO or SCIM, a handful of concurrent tasks, and it may not be used commercially. Features like Agent Bricks and clean rooms are not in it at all.\n\nIt is genuinely good for learning the interface and the SQL. It will not tell you what your workload costs, so we usually pair it with a short paid proof on your own data.",
    },
  ],

  lakehouse: [
    {
      q: "If the data is in open files, what am I paying Databricks for?",
      a: "The engine, the optimiser and the plumbing. The files are Delta Lake or Iceberg in your bucket and another tool can read them, but what you buy is Photon executing queries over them, serverless compute that starts in seconds, predictive optimisation deciding when to rewrite a table's layout, liquid clustering replacing the partitions you used to design by hand, and the catalogue that makes all of it safe to expose.\n\nThe openness is not the product. It is the exit: it means your data is not held hostage if you change your mind.",
    },
    {
      q: "Do we have to pick Delta Lake or Iceberg?",
      a: "Databricks supports both as managed table formats and will let other engines read what it writes. It also supports foreign tables over catalogues it does not own — AWS Glue, Hive Metastore, Snowflake Horizon — so existing tables can be governed through Unity Catalog without being moved first.\n\nIn practice the choice follows what else reads your data. If the rest of your estate has standardised on Iceberg, write Iceberg.",
    },
    {
      q: "What is Lakehouse//RT, and should we wait for it?",
      a: "It is a real-time tier announced in June 2026, running on a new engine Databricks calls Reyden, aimed at dashboards and applications that need an answer in milliseconds at high concurrency. Databricks reports around 10ms responses on smaller datasets, under 100ms on larger ones, and sub-100ms at 12,000 queries per second on standard benchmarks, with up to 16x gains over separate serving layers in preview.\n\nIt is in beta, limited to selected read-only workloads, and access goes through your Databricks account team. Design for it if you have a genuine millisecond requirement; do not build a plan that only works if a beta ships on time.",
    },
    {
      q: "Can our BI tool connect, or do people have to learn a new one?",
      a: "Power BI, Tableau, Looker, Sigma, Qlik and ThoughtSpot are all named as supported, and datasets can be published to them without anyone hand-managing ODBC or JDBC connections. Materialized views refresh incrementally behind them so a dashboard is not recomputing the world on every open.\n\nMost clients keep the BI tool their people already know and change what sits underneath it. That is the cheapest version of this project.",
    },
    {
      q: "Databricks quotes 5x and 9x improvements. Should we believe them?",
      a: "Treat them as what they are: vendor figures without a published method. The page says customer queries run about 5x faster than three years ago, claims 9x better price-performance for ETL, 4x throughput on batch inference and up to 6x against traditional cloud warehouses for SQL.\n\nThe only number that should influence a decision is the one from your own queries on your own data. That is a two-week exercise, not a leap of faith, and it is how we would start.",
    },
  ],

  lakeflow: [
    {
      q: "What does a managed connector actually set up?",
      a: "Three things: a Unity Catalog connection holding the source credentials, an ingestion pipeline, and the destination streaming tables. Pipelines run on serverless compute by default. Database connectors add two more pieces — an ingestion gateway that reads the change stream and a staging area — because capturing change continuously is not the same job as querying a table.\n\nQuery-based connectors skip the gateway and simply query the source on a schedule, which is simpler and heavier on the source.",
    },
    {
      q: "Which sources are covered?",
      a: "Databricks names Salesforce, Workday, HubSpot, Jira, Confluence, Zendesk Support, Slack and its audit logs, Google Ads, Meta Ads and TikTok Ads among SaaS applications; SQL Server, PostgreSQL and MySQL for change-data capture; Google Drive and SharePoint as file sources; and RabbitMQ for streaming. Beyond those there are community connectors and the option to build your own in your workspace.\n\nThe list moves every quarter, and the method differs per source — SQL Server can use change tracking or CDC, Salesforce uses a cursor column from a fixed set. We check the current table for your specific systems rather than assuming.",
    },
    {
      q: "Is the first run going to hammer our production database?",
      a: "The first run does load everything you selected, and later runs load only what changed where the source supports it. That initial read is the moment to plan for: a read replica, an off-hours window, or a staged selection of tables.\n\nAfter that the gateway reads the change stream rather than re-scanning, which is far lighter than the nightly full extract most teams are replacing.",
    },
    {
      q: "What happens when a pipeline breaks at 2am?",
      a: "Failed connectors retry on their own with exponential backoff, and when an error needs a human — an expired credential, for instance — the connector keeps its cursor position so it resumes from where it stopped instead of starting over. Databricks also offers Genie ZeroOps, which watches pipeline health, notices schema drift and uses telemetry and lineage to point at a root cause and propose a fix.\n\nNone of that removes the need for someone to own the alert. It removes the need for that someone to reconstruct the state of the world first.",
    },
    {
      q: "Do we have to write Spark?",
      a: "No. Spark Declarative Pipelines let you declare the tables you want and the quality expectations they must meet, and the same code runs for batch or streaming — there is a real-time mode with sub-second latency. Lakeflow Designer adds visual and natural-language authoring, and Genie Code can draft and test a pipeline from a description using the metadata in Unity Catalog.\n\nSomeone on the team still needs to understand what the pipeline is doing. The declarative form just means they are reading intent rather than orchestration code.",
    },
  ],

  "unity-catalog": [
    {
      q: "Is Unity Catalog an extra licence?",
      a: "No. Databricks includes it in the Premium and Enterprise tiers, and you pay only for the compute and storage you use. It is also switched on automatically in new workspaces, so for anything built from today it is not a decision — it is the default.\n\nThe work is not buying it. The work is designing the catalogue, schema and permission model it holds, which is the part that decides whether anyone trusts the platform in a year's time.",
    },
    {
      q: "What does it govern besides tables?",
      a: "Tables, views, volumes of files, functions, machine-learning models, dashboards, AI agents and MCP servers all sit in the same hierarchy with the same privilege model. That matters more than it sounds: an agent is only as safe as the permissions on the things it can reach, and governing the data in one system and the agents in another is how an agent ends up answering a question it should not have been able to ask.\n\nUnity Gateway is the part that applies this at runtime to models, agents, tools and MCP servers, with guardrails, rate limits, budgets and usage tracking.",
    },
    {
      q: "How fine-grained can access control get?",
      a: "Beyond grants on a table there are row filters, column masks, and policies written against attributes and tags rather than object names — so a rule like \"nobody outside Finance sees columns tagged pii\" holds for tables created next month. Automated classification can apply the tags in the first place.\n\nLineage is column-level and automatic, which is what makes the rest usable: before you change a table you can see every dashboard, model and agent downstream of it.",
    },
    {
      q: "Can we govern data that is not in Databricks?",
      a: "Partly, and it is worth being precise about the limit. Lakehouse Federation lets you query MySQL, PostgreSQL, Redshift, Snowflake, Azure SQL, Synapse, BigQuery and others in place, with Unity Catalog's row, column and attribute controls applied to the query. Foreign tables bring catalogues such as Glue, Hive Metastore and Snowflake Horizon under the same discovery and permissions.\n\nWhat that does not do is make Databricks the enforcement point inside those systems. Someone connecting directly to that Postgres instance is still governed by Postgres.",
    },
    {
      q: "What are business semantics, and why would we bother?",
      a: "They are shared definitions — what \"active customer\" means, how net revenue is calculated — held once in the catalogue instead of once per dashboard. Every BI tool, every Genie answer and every agent then computes the metric the same way.\n\nIt is unglamorous and it is the single highest-return thing on this page. Most of the arguments about whose number is right are not data problems; they are two correct calculations of two different definitions.",
    },
  ],

  genie: [
    {
      q: "How is this different from asking a chatbot about a spreadsheet?",
      a: "Genie answers from governed tables under Unity Catalog, using the metric definitions, dashboards and curated spaces your data team has certified, and it honours the asker's permissions. Metadata routes a question so higher-trust sources win. The next-generation release can also reach beyond a single space and into connected sources such as Google Drive and SharePoint, with access controlled through the gateway.\n\nSo the difference is accountability: you can see which certified asset an answer came from, and the person asking cannot see anything they could not already query.",
    },
    {
      q: "Will it get the answer wrong?",
      a: "Sometimes, and anyone who tells you otherwise is selling. Databricks publishes no accuracy figure for Genie. What it publishes is the machinery for making answers trustworthy: curated spaces, certified dashboards, shared metric definitions, and routing that prefers higher-trust sources.\n\nThat machinery is the whole project. A Genie space pointed at raw tables with no definitions will be confidently wrong; one pointed at ten well-described tables with agreed metrics is genuinely useful. Which of those you get is a modelling decision, not a licensing one.",
    },
    {
      q: "What does it cost per user?",
      a: "AI/BI dashboards and Genie spaces carry no per-seat or per-licence BI fee — they bill at standard warehouse rates for the compute a question actually uses. Genie One, the business-user interface, is the part to check: Databricks has published both a move to usage-based pricing with a free monthly per-user allowance and a date through which usage stays free, and the two notices give different dates.\n\nRead the current pricing page before you plan a rollout to hundreds of people. We will read it with you.",
    },
    {
      q: "Can we put it where people already work?",
      a: "Yes. Dashboards can be embedded in business applications, and the Genie API is used to reach it from Microsoft Teams, Slack and Glean. There is a web interface at account level, and Databricks lists native mobile apps as coming, available on request through your account team.\n\nIn our experience adoption follows the channel, not the quality of the answer. A good answer in a tool nobody opens is a dashboard nobody opens.",
    },
    {
      q: "Does the data team lose control?",
      a: "It gains a different job. Nobody hand-builds the hundredth variation of a report, and instead the team curates: which tables are certified, how each metric is defined, which spaces exist and who may use them.\n\nThat is more leverage and less drudgery, but it is not less work, and it needs someone's name against it. Platforms like this fail quietly when curation is everybody's job.",
    },
  ],

  "agent-bricks": [
    {
      q: "What is actually provided here that we could not build ourselves?",
      a: "Durability, governance and observability — the parts that are boring until they are the reason a pilot never reached production. Agent Runtime hosts agents from any framework; AgentKit adds durable execution so a run survives a crash or restart; the Agent Server handles synchronous, streaming and background runs with crash recovery; memory and sessions persist state in Lakebase-backed stores; a sandbox runs code the agent writes; MLflow traces every step; and Unity Gateway governs which models, tools and MCP servers the agent may use, with rate limits and budgets.\n\nYou could assemble that. Most teams who try are still assembling it a year later.",
    },
    {
      q: "Which models can we use?",
      a: "Both frontier and open models through one API, governed by the gateway: foundation models served natively, plus external providers connected with your own key, with OpenAI, Anthropic, GPT, Claude and Gemini named as examples. Traffic can be split across destinations, with failover, and Smart Routing picks a model per coding task to control spend.\n\nSo the model is a configuration choice behind a governed interface rather than a dependency baked into application code, which is the right way round given how often the best model changes.",
    },
    {
      q: "How do we know an agent is good enough to ship?",
      a: "Evaluation is part of the platform rather than a separate project: LLM judges, custom scorers you write, and structured feedback from the people who actually know the right answer, all tied back to traces so a bad output leads to the step that caused it.\n\nThe discipline we insist on is a written definition of \"good enough\" before anything is built — a measurable bar for accuracy on a fixed set of real cases. Without it, every review becomes an argument about anecdotes.",
    },
    {
      q: "Can an agent reach our other systems?",
      a: "Through MCP servers and tools, yes: Databricks-managed, custom and external servers, Unity Catalog functions published as tools, HTTP connections, AI Search over your indexed documents, and a Genie One MCP server for natural-language questions over governed data.\n\nEverything an agent can reach is registered and permissioned, which is the point. An agent with an unaudited credential is an incident waiting for a date.",
    },
    {
      q: "Do we need AI at all, or do we need better data first?",
      a: "Usually the second, and we would rather say so early. An agent is only as good as what it can retrieve, and the most common reason a pilot disappoints is that the underlying tables have no agreed definitions and no owner.\n\nThe honest sequence is: get the data governed and described, then put an agent on it. That order also makes the agent cheaper, because grounded retrieval beats a larger model on the same ungrounded mess.",
    },
  ],

  lakebase: [
    {
      q: "Is this real Postgres, or a lookalike?",
      a: "Open-source Postgres, not a fork and not a new dialect. Standard clients, drivers and ORMs work; psql, pgAdmin and DBeaver connect; and most popular extensions are supported, including PostGIS and pgvector.\n\nWhat is different is underneath: data lives in open formats on cheap object storage with a serverless Postgres engine over it, so compute scales — and scales to zero — separately from storage.",
    },
    {
      q: "What does branching a database mean in practice?",
      a: "You take an instant branch for development or a test, work against production-shaped data, and reset it without touching the live workload. A restore can be validated on an isolated branch before anything reaches production.\n\nAnyone who has restored a dump into a staging box overnight will recognise what that removes. It makes \"test with real data\" a normal Tuesday rather than a project.",
    },
    {
      q: "Why not just use the lakehouse tables?",
      a: "Because transactional reads and writes are a different shape of work from analytical scans. An application or an agent updating a row thousands of times a minute wants a row store with Postgres semantics; a query scanning three years of history wants columnar files.\n\nDatabricks calls running both over one governed copy LTAP, and the Lakebase Change Data Feed moves transactional data into the lakehouse without a pipeline in between. The point is to stop building and babysitting that sync yourself.",
    },
    {
      q: "Is it reliable enough for a production application?",
      a: "Databricks publishes a 99.99% uptime SLA for production apps, with a primary read-write instance paired with one to three secondaries across availability zones, failover, and read offloading onto the secondaries. On compliance it states SOC 2 and HIPAA, with PCI-DSS and HITRUST support on Azure and AWS, described as limited.\n\nAs with any SLA, read what it covers and what it pays. We do that reading as part of an architecture review rather than after an outage.",
    },
    {
      q: "What would we use it for first?",
      a: "The use cases Databricks names are the honest ones: state and long-term memory for agents, vector, keyword and hybrid search inside Postgres, operational analytics without an ETL hop, and planning applications such as inventory intelligence. Its scale claim is \"from 1 row to 1 billion vectors\"; it publishes no latency benchmark.\n\nIn a typical first project it is the database behind one internal application that needs to read governed data and write back decisions — which is also exactly what Databricks Apps is for.",
    },
  ],

  apps: [
    {
      q: "What kind of app is this for?",
      a: "Internal tools, not your public product. Dashboards with controls, data exploration interfaces, custom reporting, a review queue, an approval screen, the front end of a GenAI assistant — things that need to read governed data, be used by named colleagues, and exist by Friday.\n\nIt is deliberately narrow, and that is why it works. The hard part of an internal tool was never the Python.",
    },
    {
      q: "Which frameworks are supported?",
      a: "Python frameworks — Dash, Gradio and Streamlit — with pre-built templates, and development either in the workspace or in your own editor through the Databricks extension for VS Code or the PyCharm integration. Git version control and CI/CD pipelines are supported.\n\nSo an app is a repository like anything else, which matters the first time you need to roll one back.",
    },
    {
      q: "Who can see an app, and how do they sign in?",
      a: "Users are authenticated automatically through OIDC and OAuth 2.0 with your single sign-on, access is controlled per app, and app-to-app communication uses service principals Databricks manages for you. Data access goes through Unity Catalog, and the app inherits the workspace's networking protections.\n\nThat combination is the real feature. The reason internal tools take three months is rarely the interface; it is the security review of a server nobody wants to own.",
    },
    {
      q: "What does it run on, and what does it cost?",
      a: "Serverless compute, provisioned automatically, so there is no instance to size or patch. Billing follows the platform's consumption model rather than a per-app fee.\n\nThe cost question worth asking is not the hosting. It is whether an app that queries a warehouse on every page load is doing so against a materialized view or against three years of raw events.",
    },
    {
      q: "Is there a catch?",
      a: "Two worth knowing. First, this ties an application's lifecycle to your data platform, which is right for an internal tool and wrong for a customer-facing product — keep that line clear. Second, Databricks' own customer notes praise it for exactly one thing, getting a proof of concept into colleagues' hands without an infrastructure conversation, and publishes no performance or adoption figures.\n\nTake it at that: an excellent way to make something real quickly, not a general-purpose application platform.",
    },
  ],

  sharing: [
    {
      q: "How is this different from sending someone a file?",
      a: "Nothing is copied. You publish a share; the recipient queries the current version directly from you with SQL, Python or a BI tool, with no proprietary client in between. Revoke the share and access ends — there is no stale extract sitting in somebody's downloads folder, and no second copy to keep in step.\n\nThat is the whole argument for it, and it is a strong one once you count how many of your integrations are really a scheduled export.",
    },
    {
      q: "Does the other side need to be on Databricks?",
      a: "No. Delta Sharing was developed with the Linux Foundation as an open, vendor-neutral protocol, and data in Delta Lake and Parquet can be shared with other platforms. OpenSharing extends the same approach to AI assets — models, agent skills, unstructured data. Recipients who are not Databricks customers can reach shared data products through the Marketplace without an account.\n\nDatabricks names Atlassian, Shell, Nasdaq, Deutsche Börse, SafeGraph and YipitData among the organisations using it.",
    },
    {
      q: "What is a clean room for?",
      a: "Work that neither party is allowed to let the other see. Two companies bring data into a hosted environment, run agreed computations in SQL and Python — R and Scala are listed, Java as coming — and take away only the result, with nothing replicated and no raw rows exposed. It works across clouds.\n\nThe classic case is a retailer and a brand measuring a campaign against each other's customer lists. The point is that the measurement happens without either list changing hands.",
    },
    {
      q: "Can we sell data this way?",
      a: "Databricks names monetisation as a use case: package datasets, models, dashboards and notebooks once and distribute them through the open marketplace. Sharing through Cloudflare R2 is offered as a way to avoid egress fees on the traffic.\n\nThe commercial and legal work around that is yours, and it is the larger half of the project. The distribution mechanics are the easy part.",
    },
    {
      q: "How do we keep track of what we have given away?",
      a: "Unity Catalog is the control point: shares, recipients, grants, audit and usage tracking all sit in the one place, which is how you can answer \"who has our pricing table?\" without a spreadsheet.\n\nWe would put that question in your governance review on day one, because the honest answer at most companies today is nobody knows.",
    },
  ],

  "sap-business-data-cloud": [
    {
      q: "What exactly did SAP and Databricks build?",
      a: "A connector that shares data between SAP Business Data Cloud and Databricks over the open sharing protocol, in both directions, with no copy of the data. SAP BDC shares mount as catalogues in Unity Catalog and are queried from Databricks; Databricks shares can be granted to SAP BDC recipients.\n\nThere is also SAP Databricks: an SAP-managed version of the Databricks platform reached from inside SAP Business Data Cloud. They are related but not the same thing, and which one you want changes the commercial conversation.",
    },
    {
      q: "Does the business meaning survive the trip?",
      a: "More of it than usual, which is the interesting part. When SAP BDC shares are mounted into Unity Catalog the metadata syncs: table and column comments, primary and foreign keys, and governance tags. That metadata is then usable in Catalog Explorer, in SQL, in Genie agents and in governance policies.\n\nThat is the difference between receiving a table called KNA1 and receiving a described customer master with its keys intact. Anyone who has rebuilt SAP semantics by hand in a warehouse knows what that is worth.",
    },
    {
      q: "Who sets it up, and how long does it take?",
      a: "It is a four-step handshake between two administrators. The Databricks workspace administrator — who needs CREATE PROVIDER and CREATE RECIPIENT privileges, in a Unity Catalog-enabled workspace with sharing configured — generates a connection identifier and sends it to the SAP BDC administrator, who sets up a third-party connection and returns an invitation link, which the Databricks administrator uses to create the connection. Then both sides share and receive.\n\nThe technical steps are short. Agreeing which data products are shared, with whom, and under what retention is the part that takes meetings.",
    },
    {
      q: "Is anything disclosed to SAP about our Databricks usage?",
      a: "Yes, and it is worth reading before you sign. Databricks states that if you use the connector to share SAP BDC data into Databricks, it may disclose usage and operations information to SAP for billing and administrative purposes — data volumes, timing, and your effective Databricks price, identified per workload, not aggregated and not anonymised. Your organisation may be identified.\n\nWe raise this in the commercial review rather than discovering it in an invoice. If your Databricks pricing is confidential, that sentence matters.",
    },
    {
      q: "We already extract SAP data into a warehouse. Do we throw that away?",
      a: "Not necessarily. Existing extraction approaches continue to work, and the connector is an addition rather than an ultimatum. The question is whether a pipeline you maintain is giving you anything the connector does not — and for most teams the honest answer is a lot of upkeep and a loss of semantics.\n\nWe would map what you extract today, which of it a data product covers, and retire pipelines one at a time. Nothing about this needs to be a big-bang cutover.",
    },
    {
      q: "How is it secured?",
      a: "Exchanges use mutual TLS and OpenID Connect, with governance and auditing through Unity Catalog.\n\nAs with any cross-company share, the controls that matter most are the ones you set: which data products, which recipients, which retention, reviewed on a schedule rather than at the moment someone leaves.",
    },
  ],

  "security-and-architecture": [
    {
      q: "Where does our data physically sit?",
      a: "Your tables and files stay in your own cloud storage, in the region you pick. Databricks runs a multi-tenant control plane — the interface, job orchestration, metadata — and the work itself runs in a compute plane. With classic compute that plane is inside your cloud account; with serverless it runs in a Databricks-managed account in the same region.\n\nThat distinction drives most security conversations, because it decides which network controls are yours to configure and which are Databricks' to attest.",
    },
    {
      q: "Which certifications does Databricks hold?",
      a: "It publishes attestations for ISO 27001, ISO 27017, ISO 27018 and SOC 2 Type II, and offerings for PCI-DSS, HIPAA and FedRAMP compliance. A plain-language security commitment sits in the Security Addendum of the customer agreement.\n\nAn offering is not the same as a default. A compliance-bound workload needs the right tier and the right configuration, and that is a procurement item, not a tick box.",
    },
    {
      q: "Can we hold our own encryption keys?",
      a: "Customer-managed keys and multi-key encryption are both named features. Private Link and serverless egress controls cover the network side, letting you keep traffic off the public internet and constrain where serverless workloads may reach.\n\nEach of these has prerequisites and a tier. We size them against your actual obligations rather than switching on everything that sounds reassuring.",
    },
    {
      q: "How does Databricks look after its own platform?",
      a: "It publishes an unusual amount of detail: daily authenticated vulnerability scans, static and dynamic analysis before code reaches production, roughly 8 to 10 external and 15 to 20 internal penetration tests a year, a public bug bounty through HackerOne, an immutable infrastructure model where systems are replaced rather than patched, multi-factor authentication and single sign-on for production access, multi-person approval for deployments, and the ability for a customer to control whether Databricks staff can access their workspace at all.\n\nIt also runs its own platform as its security monitoring system, processing more than 9TB a day. Make of that what you like, but it is a meaningful signal.",
    },
    {
      q: "What is Lakewatch?",
      a: "Databricks' own security product, launched in March 2026 as an open, agentic SIEM in private preview. The pitch is a security lakehouse rather than a tool that charges you to copy logs into it: petabyte-scale detection and investigation on the same architecture, with triage agents built on Agent Bricks, Genie for multi-step investigation, and an assistant that writes, tests and deploys detections. Databricks claims up to 80% lower total cost of ownership and names Adobe and Dropbox among early customers. Anthropic's Claude models are used inside it.\n\nIt is in private preview. Treat it as a direction, not a plan.",
    },
  ],

  migration: [
    {
      q: "Is there a tool that just converts our warehouse?",
      a: "There is a tool that does a specific, valuable part of it. Lakebridge, released by Databricks Labs in June 2025 as free and open source, assesses a legacy warehouse and its pipelines, converts code, and reconciles the result before cutover. Alongside it, an agentic converter in Genie Code uses sub-agents to analyse source code, convert files in parallel, validate the SQL and retry what failed, with reusable rules for your own SQL quirks and a migration project workspace to track it all.\n\nSQL-to-SQL translation is supported for T-SQL, Snowflake, Redshift, Oracle, BigQuery and Teradata. Treat it as compressing the rewrite, not the migration.",
    },
    {
      q: "What does it not do?",
      a: "Data movement and reconciliation are not yet inside the migration project experience — Databricks says they are coming, with Lakeflow Connect integration — so the converter shortens the SQL rewrite rather than the overall timeline. Independent analysis makes exactly that point.\n\nAnd on a Hadoop or heavily ETL-tool-based estate the leverage drops sharply: the tooling can describe the problem but will not convert most of it. Spark jobs often port with modest changes; DataStage and Informatica graphs do not.",
    },
    {
      q: "How would you sequence it?",
      a: "Never as a big bang. Inventory first, because every estate contains reports nobody has opened in two years and three that the board depends on. Then run the new platform beside the old one for one domain, reconcile the numbers to the penny, move its consumers, and only then decommission. Repeat by domain.\n\nThe discipline that makes this work is reconciliation: an agreed set of figures that must match before anything is switched off. It is unglamorous and it is the difference between a migration and an incident.",
    },
    {
      q: "What usually goes wrong?",
      a: "Three things, in order of frequency. Semantics: the old warehouse encoded business rules in views nobody documented, and converting the SQL preserves the rule without anyone understanding it. Cost: a lift-and-shift of an inefficient model onto consumption pricing produces a bill that ends the project's political support. And ownership: a migration with no named owner for each domain stalls at 70% and stays there.\n\nNone of these are tooling problems, which is why we spend the first weeks on inventory and reconciliation rather than on conversion.",
    },
    {
      q: "Can we keep some of what we have?",
      a: "Often, and it is usually the right answer for a while. Lakehouse Federation queries Snowflake, Redshift, BigQuery, Synapse, SQL Server, PostgreSQL, MySQL and others in place under Unity Catalog governance, and foreign tables bring external catalogues under the same discovery and permissions.\n\nThat turns a migration into a sequence you control instead of a cliff edge. Federate, prove, then move what is worth moving.",
    },
  ],

  "pricing-and-cost": [
    {
      q: "How is Databricks actually billed?",
      a: "By consumption, measured per second, with no up-front cost on pay-as-you-go. Compute is counted in DBUs — a normalised unit of processing power that varies by the compute type and the work done — and storage in DSUs, whose value varies by region, storage type, volume and transactions. Data transfer is billed per GB and private connectivity endpoints by the hour, rounded up. Your cloud provider bills its own infrastructure separately, and Azure Databricks is billed by Microsoft under your Azure subscription.\n\nRates differ by product, by region and by cloud, which is why nobody can quote you a figure without knowing all three.",
    },
    {
      q: "Can we get a discount?",
      a: "Yes: Databricks offers committed use contracts, with better terms at larger commitments and the option to apply a commitment across more than one cloud. Temporary promotional discounts appear on the price list or are communicated to eligible customers; whether they stack with a commitment is not stated publicly.\n\nThe mistake we see is committing before the workload is understood. Measure for a quarter, then commit to a number you can justify.",
    },
    {
      q: "Where does the money actually leak?",
      a: "Rarely where people look. In our experience the recurring causes are: all-purpose compute left running for work that should have been a job; classic warehouses where a serverless one would have idled to nothing; dashboards querying raw history instead of a materialized view; pipelines re-reading the world because nothing captures change; and batch AI functions pointed at a dedicated serving endpoint that bills whether it is busy or not.\n\nEach is a setting, not a rewrite. Together they routinely halve a bill, which is why we audit them before anyone argues about rates.",
    },
    {
      q: "Which products bill on top of compute?",
      a: "Several, and knowing which is the difference between a predictable platform and a surprise. AI functions always bill the compute running the query, and task-specific functions and Databricks-hosted model endpoints add inference charges — ai_query bills according to the serving endpoint you name, and custom or provisioned-throughput endpoints bill their own dedicated compute. Vector search bills through the AI Search service. Forecasting and prediction functions carry no separate inference cost.\n\nUsage is queryable in system tables, which is how you attribute spend to a team instead of arguing about it.",
    },
    {
      q: "How do we keep control once more teams are on it?",
      a: "Attribute first, then limit. Tags on compute and jobs, the system billing tables as the single source of truth, budgets and per-user thresholds with hard caps through Unity Gateway for AI usage, and a governance dashboard that shows cost beside access changes and policy drift.\n\nThe cultural half matters as much: a monthly review where each team sees its own number. Platforms get expensive when the bill arrives somewhere nobody recognises their own work in it.",
    },
  ],
};
