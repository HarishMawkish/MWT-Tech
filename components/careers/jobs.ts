/* Open roles for the Careers page, carried over unchanged from the supplied page.
   "d" is how many days ago a role was posted (0 to 13): the page shows today minus d, so every
   role always reads as posted within the last 14 days. Replace d with a fixed date when the
   roles move to a CMS. */
export type TeamKey = "sap" | "salesforce" | "aws" | "pmo" | "sales" | "marketing" | "aiexec";

export type Job = {
  id: string;
  t: string;
  team: TeamKey;
  lvl: string;
  exp: string;
  type: string;
  d: number;
  intern?: boolean;
  ai?: boolean;
  s: string;
  a: string;
  r: string[];
  q: string[];
  n: string[];
};

export const TEAM: Record<TeamKey, string> = {
  sap: "SAP",
  salesforce: "Salesforce",
  aws: "AWS",
  pmo: "Project office",
  sales: "Sales",
  marketing: "Marketing",
  aiexec: "AI Execution",
};

export const CAREERS_MAIL = "careers@mawkishtechnologies.com";

export const JOBS: Job[] = [
  {
    "id": "MT-SAP-120",
    "t": "SAP Business AI Consultant (Joule and AI Agents)",
    "team": "sap",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 0,
    "ai": true,
    "s": "Bring Joule, AI agents and embedded AI into our customers' SAP processes.",
    "a": "You will help customers get real value from SAP Business AI. You will find the right use cases, set up Joule and AI agents, and measure the results in finance, supply chain and sales processes.",
    "r": [
      "Run AI use-case workshops and build value cases with customers",
      "Set up and test Joule, AI agents and embedded AI features in SAP Cloud ERP",
      "Design AI-assisted processes with functional consultants",
      "Track adoption and business results after go-live",
      "Keep the team current on SAP AI releases"
    ],
    "q": [
      "5 or more years of SAP functional or solution experience",
      "Hands-on experience with SAP Business AI, Joule or SAP AI Core",
      "Strong understanding of business processes on S/4HANA",
      "Able to explain AI value and risks to business leaders"
    ],
    "n": [
      "SAP certification in SAP Business AI or SAP BTP",
      "Experience with responsible AI and data governance"
    ]
  },
  {
    "id": "MT-SF-202",
    "t": "Salesforce Developer",
    "team": "salesforce",
    "lvl": "Consultant",
    "exp": "2 to 4 years",
    "type": "Full time",
    "d": 0,
    "s": "Build Apex, Lightning Web Components and integrations for Sales Cloud and Service Cloud customers.",
    "a": "You will build custom features and integrations on Salesforce, including links to SAP. You will use AI coding assistants and help customers take up Agentforce.",
    "r": [
      "Develop Apex classes, triggers and Lightning Web Components",
      "Build integrations with SAP and other systems through APIs",
      "Write tests and keep code coverage high",
      "Deploy with version control and CI/CD",
      "Support go-live and fix issues"
    ],
    "q": [
      "2 to 4 years of Salesforce development",
      "Strong Apex, SOQL and Lightning Web Components",
      "Experience with REST APIs and integration patterns",
      "Salesforce Platform Developer I certification"
    ],
    "n": [
      "Platform Developer II",
      "Experience with MuleSoft or Agentforce"
    ]
  },
  {
    "id": "MT-SAP-101",
    "t": "SAP Functional Intern",
    "team": "sap",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 1,
    "intern": true,
    "s": "Start your SAP career on live Cloud ERP projects, working with finance and supply chain consultants.",
    "a": "You will join a project team and learn how businesses run on SAP Cloud ERP. You will help with workshops, configuration, testing and documentation, using AI tools every day.",
    "r": [
      "Support consultants in workshops and record decisions",
      "Help configure and test SAP processes in finance, sales or procurement",
      "Prepare test cases, test data and user guides with AI tools",
      "Learn SAP Activate and the SAP Learning Hub content we assign",
      "Present what you learned to the team every month"
    ],
    "q": [
      "Degree in progress or completed in IT, accounting, business or engineering",
      "Interest in how businesses work: finance, supply chain or sales",
      "Good written and spoken English",
      "Curious and comfortable using AI tools such as ChatGPT, Copilot or Claude"
    ],
    "n": [
      "Part-qualified CIMA, ACCA or CA Sri Lanka",
      "Any exposure to an ERP system"
    ]
  },
  {
    "id": "MT-SAP-114",
    "t": "Senior SAP Presales Consultant",
    "team": "sap",
    "lvl": "Senior",
    "exp": "6+ years",
    "type": "Full time",
    "d": 1,
    "s": "Win SAP deals with demos, solution designs and proposals that speak the customer's industry.",
    "a": "You will work with our sales team to shape SAP opportunities. You will run discovery, build demos on SAP Cloud ERP, design solutions and scope, and write proposals, using AI to move fast.",
    "r": [
      "Run discovery and process mapping with prospects",
      "Build and present industry demos on SAP Cloud ERP, BTP and SAP Business AI",
      "Design solution scope and estimates with delivery teams",
      "Write proposals and RFP responses with AI support",
      "Keep up with SAP releases and turn them into demo stories"
    ],
    "q": [
      "6 or more years in SAP, with at least 2 in presales or solution consulting",
      "Broad knowledge across finance and supply chain on S/4HANA",
      "Excellent presentation and storytelling skills",
      "Able to explain value to business and IT leaders"
    ],
    "n": [
      "Experience with SAP Digital Discovery Assessment or similar scoping tools",
      "Industry depth in manufacturing, food or consumer goods"
    ]
  },
  {
    "id": "MT-AIX-701",
    "t": "Senior SAP AI Solution Engineer",
    "team": "aiexec",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 1,
    "ai": true,
    "s": "Implement SAP Business AI in live customer landscapes, from use case to production.",
    "a": "You will take SAP AI from slides to production. You will implement embedded AI features, Joule, document AI and custom AI services on SAP BTP, and make sure they work reliably with real SAP data and real users.",
    "r": [
      "Implement and configure SAP Business AI features in SAP Cloud ERP and SAP BTP",
      "Design AI solutions that use the generative AI hub in SAP AI Core",
      "Set up grounding on customer documents and SAP data, with security and roles in place",
      "Test AI quality, measure results and tune before go-live",
      "Lead junior AI engineers and review their work"
    ],
    "q": [
      "5 or more years in SAP technical or solution roles, with at least 1 on SAP AI",
      "Hands-on with SAP BTP, SAP AI Core or Joule",
      "Strong understanding of SAP data, APIs and authorisations",
      "Able to explain AI design choices to business and IT"
    ],
    "n": [
      "SAP certification in SAP Business AI or SAP BTP",
      "Experience with responsible AI and data protection"
    ]
  },
  {
    "id": "MT-AWS-310",
    "t": "Generative AI Engineer (Amazon Bedrock)",
    "team": "aws",
    "lvl": "Senior",
    "exp": "4+ years",
    "type": "Full time",
    "d": 1,
    "ai": true,
    "s": "Design and build generative AI solutions on AWS that use SAP and business data safely.",
    "a": "You will build AI assistants, document processing and agents with Amazon Bedrock and related AWS services. You will connect them to SAP and other systems, with security and cost in mind from the start.",
    "r": [
      "Design generative AI architectures on Amazon Bedrock",
      "Build retrieval-augmented generation over company documents and SAP data",
      "Build AI agents and tool integrations",
      "Set up guardrails, monitoring and cost controls",
      "Mentor engineers and support presales"
    ],
    "q": [
      "4 or more years in software or cloud engineering",
      "Hands-on with Amazon Bedrock or similar LLM platforms",
      "Strong Python and API skills",
      "Understanding of AWS security and networking"
    ],
    "n": [
      "AWS Certified Machine Learning or AI certification",
      "Experience with SAP data or SAP AI services"
    ]
  },
  {
    "id": "MT-MKT-611",
    "t": "Marketing Executive",
    "team": "marketing",
    "lvl": "Entry level",
    "exp": "0 to 2 years",
    "type": "Full time",
    "d": 1,
    "s": "Run campaigns, events and partner marketing activities from plan to results.",
    "a": "You will plan and run marketing activities with SAP, Salesforce and AWS as our partners. You will coordinate events, webinars and campaigns and report on the leads they bring.",
    "r": [
      "Plan and run campaigns, events and webinars",
      "Coordinate joint activities with technology partners",
      "Prepare marketing material and presentations",
      "Track leads and report campaign results",
      "Use AI to speed up content, research and reporting"
    ],
    "q": [
      "Degree in marketing, business or communication",
      "Up to 2 years in marketing, ideally B2B",
      "Strong organisation and English writing",
      "Comfortable with AI tools"
    ],
    "n": [
      "A CIM or SLIM qualification",
      "Event management experience"
    ]
  },
  {
    "id": "MT-PMO-404",
    "t": "Project Manager (SAP)",
    "team": "pmo",
    "lvl": "Lead",
    "exp": "8+ years",
    "type": "Full time",
    "d": 1,
    "s": "Lead RISE with SAP and GROW with SAP projects from kick-off to go-live and beyond.",
    "a": "You will lead SAP projects for our customers in Sri Lanka and India. You will manage scope, plan, budget, people and risk, and keep customers confident from start to finish.",
    "r": [
      "Plan and run SAP projects using SAP Activate",
      "Manage scope, timeline, budget and change requests",
      "Lead steering committees and customer relationships",
      "Manage risks, issues and cutover",
      "Use AI for planning, reporting and communication"
    ],
    "q": [
      "8 or more years in IT, with at least 4 managing SAP projects",
      "At least two full SAP implementations as project manager",
      "Strong stakeholder and team leadership",
      "PMP or PRINCE2 Practitioner"
    ],
    "n": [
      "SAP Activate Project Manager certification",
      "Experience with multi-country rollouts"
    ]
  },
  {
    "id": "MT-SAP-103",
    "t": "Associate SAP FICO Consultant",
    "team": "sap",
    "lvl": "Associate",
    "exp": "1 to 2 years",
    "type": "Full time",
    "d": 2,
    "s": "Configure and support SAP finance and controlling for customers moving to SAP Cloud ERP.",
    "a": "You will work on finance workstreams in RISE with SAP and GROW with SAP projects. You will configure, test and train users on general ledger, receivables, payables, assets and controlling.",
    "r": [
      "Configure SAP finance and controlling processes to the agreed design",
      "Prepare and run test scripts for finance scenarios",
      "Support data migration for opening balances and master data",
      "Train key users and support them after go-live",
      "Use AI to draft configuration notes, test cases and user guides"
    ],
    "q": [
      "Degree in accounting or finance, or a professional qualification",
      "1 to 2 years of SAP FICO hands-on experience",
      "Understanding of Sri Lankan tax, including VAT and SSCL",
      "Clear communicator with customers"
    ],
    "n": [
      "SAP certification in S/4HANA Financial Accounting",
      "Experience with SAP Cloud ERP (public edition)"
    ]
  },
  {
    "id": "MT-SAP-110",
    "t": "Senior SAP Functional Consultant (Tea Industry)",
    "team": "sap",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 2,
    "s": "Design SAP processes for tea buyers, blenders and exporters, from auction lots to export shipments.",
    "a": "You will shape how tea businesses run on SAP Cloud ERP and our tea solution on SAP BTP. You will cover lot purchasing, tasting and quality, blending, packing, export sales and costing.",
    "r": [
      "Lead workshops with buying, tasting, blending and export teams",
      "Design batch-based purchasing for auction and private lots",
      "Design blending, packing and quality flows with batch traceability",
      "Work with developers on our tea module on SAP BTP",
      "Guide junior consultants and review their configuration"
    ],
    "q": [
      "5 or more years of SAP functional experience in MM, PP, QM or SD",
      "Hands-on experience in the tea trade, plantations or a food manufacturer",
      "Strong understanding of batches, quality inspections and export selling",
      "Confident leading customer workshops"
    ],
    "n": [
      "Knowledge of Colombo tea auction and broker processes",
      "Experience with SAP Cloud ERP (public edition)"
    ]
  },
  {
    "id": "MT-AIX-703",
    "t": "Claude Solutions Engineer",
    "team": "aiexec",
    "lvl": "Senior",
    "exp": "4+ years",
    "type": "Full time",
    "d": 2,
    "ai": true,
    "s": "Design and deliver business solutions built on Anthropic's Claude for our clients.",
    "a": "You will implement Claude for clients: assistants, document processing, analysis and AI agents that work with their SAP, Salesforce and business data. You will build on the Claude API, on Amazon Bedrock or on Google Cloud, and take solutions to production.",
    "r": [
      "Design Claude-based solutions with clients, from use case to architecture",
      "Build applications on the Claude API, including tool use and retrieval over company data",
      "Connect Claude to SAP and other systems through APIs and Model Context Protocol (MCP) servers",
      "Set up evaluation, guardrails, logging and cost controls",
      "Mentor engineers and support presales with demos and estimates"
    ],
    "q": [
      "4 or more years in software engineering or solution architecture",
      "Hands-on experience building with the Claude API or other LLM APIs",
      "Strong Python or TypeScript",
      "Understanding of security, data privacy and cloud deployment"
    ],
    "n": [
      "Experience deploying Claude on Amazon Bedrock or Google Cloud",
      "SAP or Salesforce integration experience"
    ]
  },
  {
    "id": "MT-SF-210",
    "t": "Agentforce Developer",
    "team": "salesforce",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 2,
    "ai": true,
    "s": "Build AI agents on Salesforce that answer customers, help sales reps and automate service.",
    "a": "You will design and build Agentforce agents, prompt templates and actions for Sales Cloud and Service Cloud customers. You will connect agents to Flows, Apex and data from SAP.",
    "r": [
      "Build Agentforce agents, topics and actions",
      "Write prompt templates and ground them in customer data",
      "Connect agents to Flows, Apex and external APIs",
      "Test agent quality, safety and handover to humans",
      "Support go-live and improve agents from real use"
    ],
    "q": [
      "1 to 3 years of Salesforce development or administration",
      "Hands-on with Flows and Apex",
      "Experience with Agentforce or large language models",
      "Salesforce Platform Developer I or Administrator certification"
    ],
    "n": [
      "Agentforce Specialist certification",
      "Experience with MuleSoft or SAP integration"
    ]
  },
  {
    "id": "MT-AWS-301",
    "t": "Associate AWS Cloud Engineer",
    "team": "aws",
    "lvl": "Associate",
    "exp": "1 to 2 years",
    "type": "Full time",
    "d": 2,
    "s": "Build and run customer environments on AWS with infrastructure as code and automation.",
    "a": "You will set up and support AWS environments for our customers, including workloads that run next to SAP. You will learn landing zones, networking and security from senior engineers.",
    "r": [
      "Build AWS resources with Terraform or AWS CloudFormation",
      "Set up monitoring, backup and alerts",
      "Support migrations of servers and databases",
      "Write runbooks and automation scripts with AI help",
      "Respond to support tickets and fix issues"
    ],
    "q": [
      "1 to 2 years in cloud or system administration",
      "Hands-on experience with core AWS services (EC2, VPC, IAM, S3)",
      "Linux and basic networking skills",
      "AWS Certified Cloud Practitioner or Solutions Architect Associate"
    ],
    "n": [
      "Scripting in Python or Bash",
      "Experience with Windows Server or databases"
    ]
  },
  {
    "id": "MT-SAL-501",
    "t": "Business Development Intern",
    "team": "sales",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 2,
    "intern": true,
    "s": "Learn how enterprise technology is sold, from finding prospects to supporting proposals.",
    "a": "You will support our sales team in finding and qualifying new business for SAP, Salesforce and cloud services. You will research companies, prepare outreach and help build proposals, using AI tools every day.",
    "r": [
      "Research target companies and industries with AI tools",
      "Build and update prospect lists in our CRM",
      "Help prepare outreach emails, LinkedIn messages and call notes",
      "Support proposal and presentation preparation",
      "Join sales meetings and record next steps"
    ],
    "q": [
      "Degree in progress or completed in business, marketing or IT",
      "Confident communicator in English, with Sinhala or Tamil an advantage",
      "Curious about technology and how businesses buy it",
      "Comfortable using AI tools and Excel"
    ],
    "n": [
      "Any sales, customer service or event experience",
      "Interest in ERP or CRM"
    ]
  },
  {
    "id": "MT-SAL-530",
    "t": "Tender Executive (Government and Public Sector)",
    "team": "sales",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 2,
    "s": "Prepare complete, compliant bids for government and public sector tenders.",
    "a": "You will own the paperwork behind our public sector bids. You will track tender notices, read the bidding documents closely, gather every certificate and form, and make sure each submission is complete, compliant and on time.",
    "r": [
      "Track tender notices in newspapers, government gazettes and e-procurement portals",
      "Read bidding documents and build a compliance checklist for each tender",
      "Prepare forms, declarations, company documents and bid securities",
      "Coordinate pricing schedules and technical inputs with sales and delivery teams",
      "Manage clarifications, pre-bid meetings and on-time submission"
    ],
    "q": [
      "1 to 3 years in tender or bid preparation, ideally for IT or government contracts",
      "Working knowledge of Sri Lankan government procurement guidelines",
      "Very detail-minded and well organised under deadlines",
      "Good English writing, with Sinhala or Tamil an advantage"
    ],
    "n": [
      "Experience with India Government e-Marketplace (GeM) or other e-procurement portals",
      "Knowledge of bid and performance security requirements"
    ]
  },
  {
    "id": "MT-MKT-620",
    "t": "AI Marketing Automation Executive",
    "team": "marketing",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 2,
    "ai": true,
    "s": "Run AI-powered campaigns, nurture journeys and lead scoring.",
    "a": "You will use AI and marketing automation to target the right accounts, personalise campaigns at scale and score leads for the sales team.",
    "r": [
      "Build email and nurture journeys with AI-assisted personalisation",
      "Set up lead scoring and hand-off rules with sales",
      "Use AI to create campaign variants and test them",
      "Report on pipeline and conversion from campaigns",
      "Keep marketing data clean and compliant"
    ],
    "q": [
      "1 to 3 years in digital or marketing automation",
      "Hands-on with a marketing automation tool",
      "Comfortable with AI tools for content and analysis",
      "Data-driven and detail-minded"
    ],
    "n": [
      "Salesforce Marketing Cloud or Account Engagement experience"
    ]
  },
  {
    "id": "MT-SAP-106",
    "t": "SAP BTP Developer (CAP and Fiori)",
    "team": "sap",
    "lvl": "Consultant",
    "exp": "2 to 4 years",
    "type": "Full time",
    "d": 3,
    "s": "Build side-by-side extensions and apps on SAP BTP that keep the customer's core clean.",
    "a": "You will build apps and integrations on SAP BTP with the SAP Cloud Application Programming Model, SAP Fiori elements and SAP Build. You will also help add AI features to customer solutions.",
    "r": [
      "Build CAP services and SAP Fiori apps on SAP BTP",
      "Connect apps to SAP Cloud ERP through released APIs and events",
      "Set up CI/CD pipelines and transports",
      "Use AI coding assistants and SAP generative AI services where they help",
      "Document designs and support go-live"
    ],
    "q": [
      "2 to 4 years of development, with at least 1 year on SAP BTP",
      "Node.js or Java, plus JavaScript and SAPUI5",
      "Understanding of OData and REST APIs",
      "Experience with Git"
    ],
    "n": [
      "SAP certification in CAP or SAP Build",
      "Experience with SAP Integration Suite"
    ]
  },
  {
    "id": "MT-SAP-122",
    "t": "AI and Automation Intern (SAP)",
    "team": "sap",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 3,
    "ai": true,
    "intern": true,
    "s": "Help build AI agents and automations around SAP on real customer projects.",
    "a": "You will join our SAP AI team and help prototype AI agents, document automation and smart workflows with SAP Build and SAP AI services.",
    "r": [
      "Prototype AI use cases with SAP Build and generative AI services",
      "Prepare test data and evaluate AI outputs",
      "Build simple automations and workflows",
      "Document what works and share it with the team",
      "Demo your work to consultants and customers"
    ],
    "q": [
      "Degree in progress or completed in computer science, data science or IT",
      "Basic Python or JavaScript",
      "Curious about AI agents and large language models",
      "Good English communication"
    ],
    "n": [
      "A personal AI project you can show us"
    ]
  },
  {
    "id": "MT-AIX-706",
    "t": "AI Execution Intern (SAP and Claude)",
    "team": "aiexec",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 3,
    "ai": true,
    "intern": true,
    "s": "Help build and test real AI solutions with SAP AI and Claude on client projects.",
    "a": "You will join our AI Execution team and help prototype Joule agents, Claude-based assistants and MCP connectors. You will test them, measure results and present what you build.",
    "r": [
      "Prototype AI solutions with SAP AI services and the Claude API",
      "Help build simple MCP servers and agent tools",
      "Prepare test data and evaluate AI answers",
      "Document builds and record demos",
      "Share learnings with the team every week"
    ],
    "q": [
      "Degree in progress or completed in computer science, data science or IT",
      "Basic Python or TypeScript",
      "Real curiosity about AI agents",
      "Good English communication"
    ],
    "n": [
      "A personal project built with Claude or another LLM"
    ]
  },
  {
    "id": "MT-MKT-601",
    "t": "Marketing Intern",
    "team": "marketing",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 3,
    "intern": true,
    "s": "Help plan and run campaigns, events and content for SAP, Salesforce and cloud audiences.",
    "a": "You will support our marketing team on campaigns, events and webinars. You will help write content, prepare event material and track results, with AI tools as part of your daily work.",
    "r": [
      "Support campaign planning and execution",
      "Help organise webinars, events and customer sessions",
      "Draft posts, emails and event content with AI tools",
      "Track campaign results and prepare reports",
      "Keep our marketing calendar up to date"
    ],
    "q": [
      "Degree in progress or completed in marketing, communication or business",
      "Good English writing",
      "Creative and organised",
      "Comfortable with social media and AI tools"
    ],
    "n": [
      "Experience with Canva or similar design tools"
    ]
  },
  {
    "id": "MT-SAL-520",
    "t": "AI Solutions Business Development Executive",
    "team": "sales",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 3,
    "ai": true,
    "s": "Find and open AI opportunities with companies ready to use SAP, Salesforce and AWS AI.",
    "a": "You will build a pipeline for our AI offerings: SAP Business AI, Agentforce and generative AI on AWS. You will reach decision makers, qualify their AI ideas and set up discovery sessions.",
    "r": [
      "Prospect companies with strong AI potential in our focus industries",
      "Qualify AI use cases, data readiness and budget",
      "Book discovery sessions with our AI consultants",
      "Use AI to research accounts and personalise outreach",
      "Track pipeline and results in the CRM"
    ],
    "q": [
      "1 to 3 years in B2B sales or business development",
      "Strong interest in AI and how businesses use it",
      "Confident communicator with senior people",
      "Disciplined CRM habits"
    ],
    "n": [
      "Experience selling software, SaaS or IT services"
    ]
  },
  {
    "id": "MT-PMO-401",
    "t": "Project Office Intern",
    "team": "pmo",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 3,
    "intern": true,
    "s": "Learn how large technology projects are planned and run, alongside our project managers.",
    "a": "You will support our project office with plans, reports, meeting notes and tracking. It is a strong start for a career in project management.",
    "r": [
      "Prepare meeting notes, action logs and status reports with AI tools",
      "Keep project plans and trackers up to date",
      "Help organise workshops and training sessions",
      "Track timesheets and project documents",
      "Learn project methods such as SAP Activate and agile"
    ],
    "q": [
      "Degree in progress or completed in business, management or IT",
      "Organised and detail-minded",
      "Good English writing",
      "Comfortable with Excel and AI tools"
    ],
    "n": [
      "Interest in project management certification"
    ]
  },
  {
    "id": "MT-SAP-102",
    "t": "Trainee SAP ABAP Developer",
    "team": "sap",
    "lvl": "Trainee",
    "exp": "0 to 1 year",
    "type": "Full time",
    "d": 4,
    "s": "Learn modern ABAP, SAP BTP and clean core development from experienced SAP developers.",
    "a": "You will learn to build extensions the way SAP wants them built today: ABAP Cloud, RAP and side-by-side apps on SAP BTP. AI coding assistants are part of your daily toolkit.",
    "r": [
      "Build and test ABAP reports, interfaces and enhancements under guidance",
      "Learn the ABAP RESTful Application Programming Model and ABAP Cloud",
      "Write unit tests and technical documentation with AI support",
      "Fix defects found in testing and support go-lives",
      "Follow clean core and code review standards"
    ],
    "q": [
      "Degree in computer science, software engineering or a related field",
      "Good knowledge of at least one programming language and SQL",
      "Understanding of object-oriented programming",
      "Comfortable using AI coding assistants"
    ],
    "n": [
      "SAP ABAP training or certification",
      "Exposure to Git and CI/CD"
    ]
  },
  {
    "id": "MT-SAP-112",
    "t": "Junior SAP Consultant (Poultry and Livestock)",
    "team": "sap",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 4,
    "s": "Learn and configure SAP for breeder farms, hatcheries, feed mills and processing plants.",
    "a": "You will join projects for integrated poultry and livestock businesses. You will help configure feed production, flock and batch tracking, processing yields and weight-based selling, with senior consultants guiding you.",
    "r": [
      "Configure process orders and recipes for feed production",
      "Help set up batch tracking from flock to finished product",
      "Prepare test scripts for processing, co-products and weight-based sales",
      "Collect farm and plant requirements with AI-assisted notes",
      "Support users during go-live"
    ],
    "q": [
      "1 to 3 years of SAP functional experience in PP, MM or SD",
      "Interest in agriculture, food or livestock businesses",
      "Good analytical and Excel skills",
      "Clear communicator"
    ],
    "n": [
      "Degree in agriculture, food science or animal science",
      "Exposure to catch weight or co-product processes"
    ]
  },
  {
    "id": "MT-AIX-702",
    "t": "SAP Joule Agent Engineer",
    "team": "aiexec",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 4,
    "ai": true,
    "s": "Build Joule skills and AI agents that automate real SAP business tasks.",
    "a": "You will build custom Joule skills and agents with Joule Studio and SAP Build, connected to SAP Cloud ERP through released APIs. You will work with functional consultants to automate tasks in finance, procurement and sales.",
    "r": [
      "Build Joule skills and agents with Joule Studio",
      "Connect agents to SAP processes through released APIs and workflows",
      "Write and test agent instructions, actions and guardrails",
      "Document and hand over agents to customer teams",
      "Monitor agents after go-live and improve them"
    ],
    "q": [
      "1 to 3 years in SAP development or SAP Build",
      "JavaScript or Python, plus REST and OData APIs",
      "Good understanding of at least one SAP business process",
      "Comfortable working with business users"
    ],
    "n": [
      "SAP Build or SAP BTP certification",
      "Experience with AI agents on any platform"
    ]
  },
  {
    "id": "MT-SAL-511",
    "t": "Business Development Executive",
    "team": "sales",
    "lvl": "Entry level",
    "exp": "0 to 2 years",
    "type": "Full time",
    "d": 4,
    "s": "Open doors with mid-sized and large companies for SAP, Salesforce and cloud solutions.",
    "a": "You will find and qualify new opportunities, set up first meetings for our senior sales team and build relationships in our focus industries, such as manufacturing, food and consumer goods.",
    "r": [
      "Prospect target accounts through calls, email, LinkedIn and events",
      "Qualify leads and book discovery meetings",
      "Keep all activity and pipeline in the CRM",
      "Research customers with AI to personalise every approach",
      "Support account managers on proposals and follow-ups"
    ],
    "q": [
      "Degree in business, marketing or a related field",
      "Up to 2 years in sales, business development or customer-facing roles",
      "Confident on the phone and in meetings",
      "Self-driven, with a strong interest in technology"
    ],
    "n": [
      "B2B or IT sales experience",
      "A professional sales or marketing qualification such as CIM or SLIM"
    ]
  },
  {
    "id": "MT-PMO-410",
    "t": "AI Adoption Analyst (Delivery Excellence)",
    "team": "pmo",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 4,
    "ai": true,
    "s": "Help every project team at Mawkish use AI better, faster and more safely.",
    "a": "You will work with our project office to roll out AI tools, templates and agents across delivery. You will measure time saved and quality gained, and train teams on what works.",
    "r": [
      "Build AI templates for status reports, minutes, risk logs and test cases",
      "Train project teams on approved AI tools",
      "Measure AI usage, time saved and quality",
      "Keep our AI usage guidelines current",
      "Collect and share the best prompts and agents across teams"
    ],
    "q": [
      "1 to 3 years in a PMO, business analysis or process improvement role",
      "Hands-on with AI assistants and automation tools",
      "Strong training and communication skills",
      "Organised and data-driven"
    ],
    "n": [
      "Experience with Microsoft 365 Copilot or similar",
      "Power Automate or SAP Build skills"
    ]
  },
  {
    "id": "MT-SAP-121",
    "t": "SAP AI Developer (Generative AI Hub and Joule Studio)",
    "team": "sap",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 5,
    "ai": true,
    "s": "Build AI agents and generative AI apps on SAP BTP that work with live SAP data.",
    "a": "You will build custom AI agents and skills with Joule Studio and generative AI apps with the generative AI hub in SAP AI Core. You will connect them to SAP Cloud ERP through released APIs.",
    "r": [
      "Build Joule skills and AI agents with Joule Studio",
      "Build generative AI apps with the generative AI hub and CAP",
      "Write prompts, grounding and evaluation tests",
      "Connect AI apps to SAP data through released APIs",
      "Monitor quality, cost and safety of AI features in use"
    ],
    "q": [
      "1 to 3 years of software development",
      "Python or JavaScript, plus REST APIs",
      "Hands-on with large language models and prompt design",
      "Interest in enterprise business processes"
    ],
    "n": [
      "SAP BTP or CAP experience",
      "Experience with retrieval-augmented generation and vector databases"
    ]
  },
  {
    "id": "MT-SF-201",
    "t": "Salesforce Intern",
    "team": "salesforce",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 5,
    "intern": true,
    "s": "Learn Salesforce on live projects and earn your first certification with us.",
    "a": "You will join a Salesforce delivery team and learn how companies manage sales, service and marketing on the platform. You will configure, test and document with AI tools.",
    "r": [
      "Help configure objects, flows and page layouts",
      "Prepare test cases and test data",
      "Complete Trailhead learning paths we assign",
      "Help prepare demos for customers",
      "Document what you build"
    ],
    "q": [
      "Degree in progress or completed in IT or business",
      "Interest in CRM and customer experience",
      "Good English communication",
      "Comfortable using AI tools"
    ],
    "n": [
      "Trailhead badges or a Salesforce Associate certification"
    ]
  },
  {
    "id": "MT-SAL-531",
    "t": "RFP and Proposal Writer",
    "team": "sales",
    "lvl": "Junior",
    "exp": "2 to 4 years",
    "type": "Full time",
    "d": 5,
    "s": "Write clear, winning responses to RFPs, RFIs and RFQs for SAP, Salesforce and cloud solutions.",
    "a": "You will turn our solutions and experience into proposals that clients want to say yes to. You will write executive summaries, solution sections and answers to detailed questionnaires, using AI to draft fast and our experts to get it right.",
    "r": [
      "Write proposal sections, executive summaries and questionnaire answers",
      "Work with consultants and architects to capture solution content",
      "Maintain a library of approved answers, case studies and CVs",
      "Use AI tools to draft, check consistency and tailor content to each client",
      "Format and quality-check every proposal before it goes out"
    ],
    "q": [
      "2 to 4 years in proposal writing, bid writing or technical writing",
      "Excellent English writing and editing",
      "Able to understand technology and explain it simply",
      "Comfortable with AI writing tools and document design"
    ],
    "n": [
      "Experience with ERP, CRM or IT services proposals",
      "APMP Foundation certification"
    ]
  },
  {
    "id": "MT-MKT-612",
    "t": "Digital Marketing Executive",
    "team": "marketing",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 5,
    "s": "Grow our online presence and lead flow across search, LinkedIn and email.",
    "a": "You will run our digital channels: SEO, paid campaigns on LinkedIn and Google, email marketing and website analytics. You will turn data into clear improvements every month.",
    "r": [
      "Plan and run paid campaigns on LinkedIn and Google",
      "Improve SEO and website content",
      "Run email campaigns and nurture journeys",
      "Track performance and report on leads and cost per lead",
      "Test new AI tools for content and targeting"
    ],
    "q": [
      "1 to 3 years in digital marketing",
      "Hands-on with Google Ads, LinkedIn Ads and Google Analytics",
      "Good understanding of SEO",
      "Data-driven and detail-minded"
    ],
    "n": [
      "Marketing automation experience, such as Salesforce Marketing Cloud or HubSpot",
      "Google or LinkedIn marketing certifications"
    ]
  },
  {
    "id": "MT-PMO-402",
    "t": "Project Coordinator",
    "team": "pmo",
    "lvl": "Associate",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 5,
    "s": "Keep SAP and Salesforce projects on track: plans, risks, reports and the people in between.",
    "a": "You will coordinate one or more projects with the project manager. You will keep plans, risks and issues current and make sure everyone knows what happens next.",
    "r": [
      "Maintain project plans, RAID logs and status reports",
      "Schedule workshops, steering meetings and cutover activities",
      "Track deliverables, sign-offs and change requests",
      "Prepare reports and presentations with AI tools",
      "Support billing and resource tracking"
    ],
    "q": [
      "1 to 3 years in project coordination, ideally in IT",
      "Strong planning and follow-up skills",
      "Confident with Excel, project tools and AI assistants",
      "Clear written and spoken English"
    ],
    "n": [
      "PMP, PRINCE2 Foundation or CAPM",
      "Experience on ERP or CRM projects"
    ]
  },
  {
    "id": "MT-SAP-104",
    "t": "SAP SD Consultant",
    "team": "sap",
    "lvl": "Consultant",
    "exp": "3 to 5 years",
    "type": "Full time",
    "d": 6,
    "s": "Lead the order-to-cash workstream on S/4HANA projects for manufacturing and distribution customers.",
    "a": "You will design and deliver sales and distribution processes: pricing, orders, deliveries, billing, rebates and credit management. You will work closely with finance and logistics consultants.",
    "r": [
      "Run fit-to-standard workshops for order to cash",
      "Design and configure pricing, billing, rebates and credit management",
      "Work with developers on output forms and interfaces",
      "Lead testing for your area and resolve defects",
      "Coach associate consultants on the team"
    ],
    "q": [
      "3 to 5 years of SAP SD experience with at least one full implementation",
      "Experience with S/4HANA sales processes",
      "Strong understanding of distributor and export selling",
      "Good stakeholder management"
    ],
    "n": [
      "SAP certification in S/4HANA Sales",
      "Experience with advanced ATP or condition contracts"
    ]
  },
  {
    "id": "MT-AIX-704",
    "t": "AI Agent Developer (Claude Agent SDK and MCP)",
    "team": "aiexec",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 6,
    "ai": true,
    "s": "Build AI agents with Claude that carry out real work across business systems.",
    "a": "You will build agents with the Claude Agent SDK and Model Context Protocol (MCP). You will create MCP servers that give Claude safe access to tools and data, such as SAP APIs, document stores and ticketing systems.",
    "r": [
      "Build agents with the Claude Agent SDK",
      "Build and maintain MCP servers for client systems, including SAP",
      "Write prompts, tool definitions and tests for agent behaviour",
      "Set up permissions and human approval steps for sensitive actions",
      "Package and deploy agents for client teams"
    ],
    "q": [
      "1 to 3 years in software development",
      "Python or TypeScript, plus REST APIs",
      "Hands-on with LLM APIs and prompt design",
      "Careful about security and access control"
    ],
    "n": [
      "A public project or repository with an AI agent or MCP server",
      "Experience with Claude Code"
    ]
  },
  {
    "id": "MT-SF-212",
    "t": "Generative AI Intern (Agentforce)",
    "team": "salesforce",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 6,
    "ai": true,
    "intern": true,
    "s": "Learn to build AI agents on Salesforce and earn your first AI certification.",
    "a": "You will help our Salesforce team prototype Agentforce agents and prompt templates, test them and prepare demos for customers.",
    "r": [
      "Build simple agents and prompt templates in a sandbox",
      "Test agent answers and record improvements",
      "Complete Agentforce learning paths on Trailhead",
      "Prepare demo scripts and recordings",
      "Share what you learn with the team"
    ],
    "q": [
      "Degree in progress or completed in IT or business",
      "Interest in AI and customer experience",
      "Good English writing",
      "Comfortable using AI tools"
    ],
    "n": [
      "Agentforce Specialist certification or Trailhead AI badges"
    ]
  },
  {
    "id": "MT-SAL-502",
    "t": "Sales Operations Intern",
    "team": "sales",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 6,
    "intern": true,
    "s": "Keep the sales engine running: CRM data, pipeline reports and tender documents.",
    "a": "You will help the sales team stay organised. You will keep CRM data clean, prepare pipeline reports and help put together tender and RFP responses.",
    "r": [
      "Keep CRM records, contacts and opportunities up to date",
      "Prepare weekly pipeline and activity reports",
      "Help assemble RFP and tender documents",
      "Track proposal deadlines and follow-ups",
      "Automate simple reports with AI and spreadsheets"
    ],
    "q": [
      "Degree in progress or completed in business, management or IT",
      "Organised and detail-minded",
      "Good with Excel and AI tools",
      "Clear written English"
    ],
    "n": [
      "Experience with Salesforce or any CRM"
    ]
  },
  {
    "id": "MT-SAP-108",
    "t": "Process Lead, Order to Cash",
    "team": "sap",
    "lvl": "Lead",
    "exp": "8+ years",
    "type": "Full time",
    "d": 7,
    "s": "Own the order-to-cash process area across our SAP projects and shape our industry solutions.",
    "a": "You will be the go-to expert for order to cash across sales, logistics, billing and receivables. You will lead design on key projects, support presales and build reusable process content.",
    "r": [
      "Set the standard order-to-cash design and best practices for our projects",
      "Lead design authority reviews on key engagements",
      "Support presales with demos, scoping and estimates",
      "Build process content and accelerators with the team, using AI",
      "Coach consultants and grow the practice"
    ],
    "q": [
      "8 or more years in SAP sales, logistics or finance, with team leadership",
      "Several full implementations, at least one on S/4HANA",
      "Deep understanding of order to cash end to end",
      "Confident with senior customer stakeholders"
    ],
    "n": [
      "Experience in food, consumer goods or distribution",
      "Experience with SAP Cloud ERP (public edition)"
    ]
  },
  {
    "id": "MT-SAP-111",
    "t": "Senior SAP Consultant (Oil and Gas Downstream)",
    "team": "sap",
    "lvl": "Senior",
    "exp": "6+ years",
    "type": "Full time",
    "d": 7,
    "s": "Design SAP processes for fuel, lubricant and LPG distribution, terminals and dealer networks.",
    "a": "You will bring industry knowledge to SAP projects for downstream oil and gas businesses. You will cover hydrocarbon stock, terminals and tanks, secondary distribution, dealer billing and asset maintenance.",
    "r": [
      "Lead design for bulk product stock, tank management and quantity conversion",
      "Design dealer and station ordering, delivery and billing",
      "Work with maintenance consultants on terminal and station assets",
      "Support fit-to-standard and solution design for the oil and gas industry solution",
      "Mentor junior consultants on industry processes"
    ],
    "q": [
      "6 or more years of SAP SD, MM or IS-Oil experience",
      "Experience in a fuel, lubricant, LPG or petroleum distribution business",
      "Understanding of volume at standard temperature and density",
      "Strong stakeholder management"
    ],
    "n": [
      "SAP S/4HANA for oil and gas experience",
      "Knowledge of HSE and permit processes"
    ]
  },
  {
    "id": "MT-SF-203",
    "t": "Salesforce Business Analyst",
    "team": "salesforce",
    "lvl": "Consultant",
    "exp": "2 to 4 years",
    "type": "Full time",
    "d": 8,
    "s": "Turn customer needs into clear Salesforce solutions for sales, service and marketing teams.",
    "a": "You will run discovery sessions, write user stories and configure Salesforce. You are the link between the customer's business teams and our developers.",
    "r": [
      "Run requirement workshops and map current processes",
      "Write user stories with clear acceptance criteria",
      "Configure Salesforce with flows, objects and reports",
      "Lead user acceptance testing and training",
      "Use AI to draft stories, process maps and training material"
    ],
    "q": [
      "2 to 4 years as a business analyst, with Salesforce experience",
      "Salesforce Administrator certification",
      "Strong writing and facilitation skills",
      "Understanding of sales and service processes"
    ],
    "n": [
      "Salesforce Business Analyst certification",
      "Experience in retail, building materials or consumer goods"
    ]
  },
  {
    "id": "MT-SF-211",
    "t": "Salesforce Data and AI Consultant (Data 360)",
    "team": "salesforce",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 8,
    "ai": true,
    "s": "Unify customer data and turn it into AI-driven insight and action on Salesforce.",
    "a": "You will design customer data foundations on Salesforce Data 360 and use them for segmentation, predictions and AI agents. You will bring together data from SAP, e-commerce, loyalty and service.",
    "r": [
      "Design data models, identity resolution and segments in Data 360",
      "Bring in data from SAP and other systems",
      "Set up predictive and generative AI use cases on unified data",
      "Advise on consent, privacy and data quality",
      "Lead workshops with marketing, sales and service teams"
    ],
    "q": [
      "5 or more years in Salesforce or customer data platforms",
      "Hands-on experience with Data Cloud or Data 360",
      "Strong data modelling and SQL skills",
      "Able to explain data and AI value to business teams"
    ],
    "n": [
      "Salesforce Data Cloud Consultant certification",
      "Marketing Cloud experience"
    ]
  },
  {
    "id": "MT-MKT-602",
    "t": "Digital Marketing and Content Intern",
    "team": "marketing",
    "lvl": "Internship",
    "exp": "Undergraduate or fresh graduate",
    "type": "Internship, 6 months",
    "d": 8,
    "intern": true,
    "s": "Create content and run digital channels that explain complex technology simply.",
    "a": "You will help create content for our website, LinkedIn and email, and support SEO and paid campaigns. You will learn how B2B technology marketing works in practice.",
    "r": [
      "Write and edit posts, blogs and case study drafts with AI support",
      "Create simple graphics and short videos",
      "Support SEO updates on our website",
      "Help set up and report on digital campaigns",
      "Monitor social channels and engagement"
    ],
    "q": [
      "Degree in progress or completed in marketing, media or communication",
      "Strong English writing",
      "Basic design or video editing skills",
      "Comfortable using AI writing and design tools"
    ],
    "n": [
      "Google Analytics or LinkedIn Ads exposure"
    ]
  },
  {
    "id": "MT-SAP-105",
    "t": "Senior SAP PP/QM Consultant (Process Manufacturing)",
    "team": "sap",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 9,
    "s": "Design production planning and quality processes for food, beverage and consumer goods manufacturers.",
    "a": "You will own the manufacturing workstream on projects for process industries. That means recipes, batches, process orders, MRP, quality inspections and traceability, from design to go-live.",
    "r": [
      "Lead workshops with plant, quality and planning teams",
      "Design process orders, batch management, MRP and quality inspection flows",
      "Guide the team on integration with procurement, sales and finance",
      "Review solution designs and help with estimates in presales",
      "Mentor consultants and review their work"
    ],
    "q": [
      "5 or more years of SAP PP and QM experience, with process manufacturing",
      "At least two full implementations, ideally on S/4HANA",
      "Strong knowledge of batch management and shelf-life handling",
      "Able to lead customer workshops with confidence"
    ],
    "n": [
      "Food, tea, beverage or consumer goods experience",
      "SAP certification in S/4HANA manufacturing"
    ]
  },
  {
    "id": "MT-SAP-113",
    "t": "Junior SAP Consultant (Printing and Packaging)",
    "team": "sap",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 9,
    "s": "Configure SAP for make-to-order printing and packaging, from job estimating to dispatch.",
    "a": "You will work on projects for printers and packaging converters making cartons, labels, cans and PET. You will help build variant configuration models, production flows and job costing.",
    "r": [
      "Help build variant configuration models for sizes, materials and print",
      "Configure make-to-order production and production order combination",
      "Prepare test cases for estimating, costing and dispatch",
      "Document designs and user guides with AI tools",
      "Support key users during testing and go-live"
    ],
    "q": [
      "1 to 3 years of SAP functional experience in PP, SD or CO",
      "Understanding of make-to-order manufacturing",
      "Strong logical thinking for configuration rules",
      "Detail-minded"
    ],
    "n": [
      "Experience in a printing, packaging or converting company",
      "Exposure to SAP Advanced Variant Configuration"
    ]
  },
  {
    "id": "MT-AIX-705",
    "t": "Claude Enterprise Deployment Specialist",
    "team": "aiexec",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 9,
    "ai": true,
    "s": "Roll out Claude across client organisations and make sure people actually use it well.",
    "a": "You will deploy Claude for client teams: workspace setup, single sign-on, data and access policies, connectors to business tools, and adoption programmes. You will also help developer teams adopt Claude Code.",
    "r": [
      "Set up Claude workspaces, users, single sign-on and admin policies",
      "Configure connectors and projects for client teams",
      "Run training sessions and build prompt libraries for each department",
      "Help developer teams roll out Claude Code with good practice",
      "Measure adoption and report the value delivered"
    ],
    "q": [
      "1 to 3 years in IT, SaaS rollout or digital adoption",
      "Hands-on daily use of Claude or similar AI assistants",
      "Strong training and communication skills",
      "Understanding of identity, access and data policies"
    ],
    "n": [
      "Experience with Microsoft Entra ID or Okta",
      "Change management or training qualification"
    ]
  },
  {
    "id": "MT-SAL-521",
    "t": "AI Presales Specialist",
    "team": "sales",
    "lvl": "Senior",
    "exp": "4+ years",
    "type": "Full time",
    "d": 9,
    "ai": true,
    "s": "Show prospects what AI can do for them with demos, value cases and clear proposals.",
    "a": "You will support our sales team on AI deals. You will run AI demos across SAP, Salesforce and AWS, build value cases and shape proposals that customers can approve with confidence.",
    "r": [
      "Run discovery and AI ideation workshops with prospects",
      "Build and present AI demos and short proof of concepts",
      "Write value cases with expected savings and outcomes",
      "Shape scope and proposals with delivery teams",
      "Keep demo assets current with each product release"
    ],
    "q": [
      "4 or more years in presales or solution consulting",
      "Hands-on with at least one AI platform: SAP Business AI, Agentforce or Amazon Bedrock",
      "Excellent presentation and storytelling skills",
      "Business process knowledge"
    ],
    "n": [
      "Industry experience in manufacturing, retail or consumer goods"
    ]
  },
  {
    "id": "MT-PMO-403",
    "t": "PMO Executive",
    "team": "pmo",
    "lvl": "Associate",
    "exp": "2 to 3 years",
    "type": "Full time",
    "d": 9,
    "s": "Run project governance across our delivery portfolio, with reports leadership can act on.",
    "a": "You will run the project management office processes for all our projects: reporting, resource planning, quality checks and governance. You will build AI-assisted reporting that saves everyone time.",
    "r": [
      "Consolidate status, risk and financial reports across projects",
      "Run resource planning and utilisation tracking",
      "Check project documents against our quality standards",
      "Automate reporting with dashboards and AI",
      "Support project managers with governance tasks"
    ],
    "q": [
      "2 to 3 years in a PMO or project control role",
      "Strong Excel and reporting skills",
      "Understanding of project finance and resourcing",
      "Detail-minded and organised"
    ],
    "n": [
      "Power BI or similar dashboard skills",
      "PMO or project management certification"
    ]
  },
  {
    "id": "MT-SF-204",
    "t": "Salesforce Solution Lead",
    "team": "salesforce",
    "lvl": "Lead",
    "exp": "7+ years",
    "type": "Full time",
    "d": 10,
    "s": "Lead Salesforce solution design across Sales Cloud, Service Cloud, Revenue Cloud and Agentforce.",
    "a": "You will design end-to-end Salesforce solutions, lead delivery teams and support presales. You will also shape how we bring AI agents to our customers.",
    "r": [
      "Own solution architecture on Salesforce projects",
      "Lead and mentor developers and analysts",
      "Support presales with scoping, demos and estimates",
      "Design integrations with SAP and other systems",
      "Set standards for quality and security"
    ],
    "q": [
      "7 or more years on Salesforce, with at least 2 in a lead role",
      "Several full implementations across more than one cloud",
      "Strong integration and data model design skills",
      "Excellent customer communication"
    ],
    "n": [
      "Salesforce Application or System Architect certification",
      "Agentforce or Data Cloud experience"
    ]
  },
  {
    "id": "MT-AWS-311",
    "t": "Machine Learning Engineer (Amazon SageMaker AI)",
    "team": "aws",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 10,
    "ai": true,
    "s": "Build, deploy and monitor machine learning models for forecasting, quality and customer insight.",
    "a": "You will build ML pipelines on AWS for use cases such as demand forecasting, predictive maintenance and churn. You will take models from notebook to production with MLOps practices.",
    "r": [
      "Prepare data and features from SAP and other sources",
      "Train and evaluate models with Amazon SageMaker AI",
      "Deploy models with CI/CD and monitor them in production",
      "Automate pipelines with infrastructure as code",
      "Explain results clearly to business users"
    ],
    "q": [
      "1 to 3 years in machine learning or data engineering",
      "Strong Python, pandas and SQL",
      "Understanding of common ML algorithms",
      "Experience with any cloud ML platform"
    ],
    "n": [
      "AWS Certified Machine Learning Engineer Associate",
      "Time series forecasting experience"
    ]
  },
  {
    "id": "MT-SAL-512",
    "t": "Inside Sales Executive",
    "team": "sales",
    "lvl": "Junior",
    "exp": "1 to 2 years",
    "type": "Full time",
    "d": 10,
    "s": "Turn enquiries and campaign leads into qualified opportunities for the sales team.",
    "a": "You will be the first contact for prospects who come through our website, campaigns and events. You will qualify their needs and hand strong opportunities to our account managers and presales consultants.",
    "r": [
      "Respond quickly to inbound enquiries and campaign leads",
      "Qualify needs, budget, timeline and decision makers",
      "Run follow-up sequences with AI-assisted emails",
      "Book meetings and demos for account managers",
      "Report on lead conversion every week"
    ],
    "q": [
      "1 to 2 years in inside sales, telesales or customer success",
      "Clear spoken and written English",
      "Organised, with good CRM habits",
      "Comfortable using AI tools"
    ],
    "n": [
      "Experience selling software or IT services",
      "Salesforce CRM experience"
    ]
  },
  {
    "id": "MT-SAL-532",
    "t": "Senior Bid Specialist (Public Sector and Enterprise RFPs)",
    "team": "sales",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 10,
    "s": "Lead complex government and enterprise bids from qualification to submission.",
    "a": "You will lead our largest bids. You will decide which tenders to pursue, plan the bid, bring together sales, presales, delivery and finance, and make sure every response is compliant, competitive and delivered on time.",
    "r": [
      "Assess tenders and RFPs and recommend which to pursue",
      "Plan bid timelines, owners and review stages",
      "Lead solution, commercial and compliance reviews",
      "Prepare and review bid bonds, performance securities and contract terms with finance and legal",
      "Run lessons learned after every bid and improve our win rate"
    ],
    "q": [
      "5 or more years in bid or tender work, including government tenders",
      "Strong knowledge of public procurement rules in Sri Lanka, and ideally India",
      "Proven record of winning competitive bids",
      "Strong leadership across teams under pressure"
    ],
    "n": [
      "APMP Practitioner certification",
      "Experience bidding for ERP or large IT programmes"
    ]
  },
  {
    "id": "MT-SAP-107",
    "t": "SAP Basis Consultant (RISE and Cloud)",
    "team": "sap",
    "lvl": "Consultant",
    "exp": "3 to 6 years",
    "type": "Full time",
    "d": 11,
    "s": "Run SAP landscapes on RISE with SAP and on hyperscalers, from system setup to upgrades.",
    "a": "You will manage SAP systems for our customers: system copies, transports, upgrades, monitoring and security. You will work with SAP on RISE environments and with our cloud team on AWS.",
    "r": [
      "Install, upgrade and maintain SAP S/4HANA and SAP HANA systems",
      "Coordinate with SAP for RISE service requests",
      "Manage transports, system copies and client copies",
      "Monitor performance and fix issues",
      "Automate routine tasks with scripts and AI tools"
    ],
    "q": [
      "3 to 6 years of SAP Basis experience",
      "Hands-on SAP HANA administration",
      "Linux administration skills",
      "Experience with RISE with SAP or SAP on a hyperscaler"
    ],
    "n": [
      "SAP certification in SAP HANA or S/4HANA system administration",
      "AWS certification"
    ]
  },
  {
    "id": "MT-MKT-613",
    "t": "Content and Social Media Executive",
    "team": "marketing",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 11,
    "s": "Tell our story and our customers' stories through clear, useful content.",
    "a": "You will create content that explains SAP, Salesforce and cloud topics simply: posts, articles, case studies, videos and newsletters. You will manage our social channels and grow engagement.",
    "r": [
      "Write posts, articles, newsletters and case studies",
      "Plan and manage our LinkedIn and social calendar",
      "Work with consultants to turn their expertise into content",
      "Create graphics and short videos",
      "Use AI to research, draft and repurpose content"
    ],
    "q": [
      "1 to 3 years in content, copywriting or social media",
      "Excellent English writing",
      "Basic design and video skills",
      "A portfolio of work you are proud of"
    ],
    "n": [
      "Experience writing about technology or B2B services"
    ]
  },
  {
    "id": "MT-MKT-621",
    "t": "AI Content Specialist",
    "team": "marketing",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 11,
    "ai": true,
    "s": "Create high-quality content at speed with AI, and keep it accurate and on brand.",
    "a": "You will produce articles, posts, videos and visuals with AI tools, working with our consultants to make sure every piece is correct and useful. You will set up our AI content workflow.",
    "r": [
      "Create articles, posts, scripts and visuals with AI tools",
      "Fact-check and edit AI drafts with subject experts",
      "Build prompt libraries and brand guidelines for AI",
      "Repurpose content across web, LinkedIn and email",
      "Track what content performs best"
    ],
    "q": [
      "1 to 3 years in content or copywriting",
      "Excellent English writing and editing",
      "Hands-on with AI writing, image and video tools",
      "A portfolio of your work"
    ],
    "n": [
      "Experience writing about technology"
    ]
  },
  {
    "id": "MT-SAP-109",
    "t": "Product Lead, SAP Cloud ERP (GROW with SAP)",
    "team": "sap",
    "lvl": "Lead",
    "exp": "10+ years",
    "type": "Full time",
    "d": 12,
    "s": "Lead our GROW with SAP offering: the product, the go-to-market and the delivery model.",
    "a": "You will own our SAP Cloud ERP public edition offering. You will shape packaged solutions for our focus industries, work with sales on pipeline and make sure delivery is fast and repeatable.",
    "r": [
      "Define our GROW with SAP packages and industry offerings",
      "Work with sales and presales on deals and solution demos",
      "Set delivery standards, templates and AI-assisted methods",
      "Track SAP release updates and turn them into customer value",
      "Build and lead a team of product and solution experts"
    ],
    "q": [
      "10 or more years in SAP, with at least 3 in a lead or practice role",
      "Strong knowledge of SAP Cloud ERP and SAP Activate",
      "Commercial awareness and experience supporting sales",
      "Excellent presentation and leadership skills"
    ],
    "n": [
      "Experience building partner offerings or packaged solutions",
      "Industry depth in manufacturing or consumer products"
    ]
  },
  {
    "id": "MT-PMO-411",
    "t": "AI Project Coordinator",
    "team": "pmo",
    "lvl": "Junior",
    "exp": "1 to 3 years",
    "type": "Full time",
    "d": 12,
    "ai": true,
    "s": "Coordinate AI projects for customers, from use-case discovery to pilot and rollout.",
    "a": "You will coordinate our AI projects across SAP, Salesforce and AWS. You will keep plans, data access, testing and approvals on track, and make sure pilots turn into real results.",
    "r": [
      "Plan and track AI pilots and rollouts",
      "Coordinate data access, security reviews and approvals",
      "Track AI quality testing and user feedback",
      "Prepare status reports and steering material with AI tools",
      "Keep risks and decisions logged"
    ],
    "q": [
      "1 to 3 years in project coordination in IT",
      "Basic understanding of AI and data projects",
      "Strong planning and follow-up",
      "Clear written and spoken English"
    ],
    "n": [
      "PRINCE2 Foundation or CAPM",
      "Experience on an AI or analytics project"
    ]
  },
  {
    "id": "MT-AWS-302",
    "t": "Senior AWS Cloud Engineer (SAP on AWS)",
    "team": "aws",
    "lvl": "Senior",
    "exp": "5+ years",
    "type": "Full time",
    "d": 13,
    "s": "Design and run SAP and enterprise workloads on AWS, from landing zone to disaster recovery.",
    "a": "You will lead the technical side of our AWS projects. That includes landing zones, private connectivity to RISE with SAP, high availability and disaster recovery for SAP HANA, and cost optimisation.",
    "r": [
      "Design AWS landing zones, networks and security controls",
      "Plan and run SAP and non-SAP migrations to AWS",
      "Design high availability and disaster recovery for SAP HANA",
      "Review cost and performance and recommend savings",
      "Mentor engineers and support presales"
    ],
    "q": [
      "5 or more years in cloud engineering, with at least 3 on AWS",
      "Experience running SAP workloads on AWS",
      "Strong networking and security knowledge",
      "AWS Certified Solutions Architect Professional or equivalent experience"
    ],
    "n": [
      "SAP Basis knowledge",
      "Experience with Azure or Google Cloud"
    ]
  },
  {
    "id": "MT-SAL-513",
    "t": "Associate Account Manager",
    "team": "sales",
    "lvl": "Junior",
    "exp": "2 to 3 years",
    "type": "Full time",
    "d": 13,
    "s": "Grow relationships with existing customers and find new ways we can help them.",
    "a": "You will look after a group of existing customers with a senior account manager. You will keep in touch, spot new needs such as support, upgrades or new modules, and coordinate renewals.",
    "r": [
      "Hold regular check-ins with assigned customers",
      "Identify upsell and cross-sell opportunities",
      "Coordinate renewals, quotations and contracts",
      "Work with delivery teams to keep customers happy",
      "Prepare account plans with AI support"
    ],
    "q": [
      "2 to 3 years in account management or B2B sales",
      "Strong relationship and communication skills",
      "Commercial awareness",
      "Organised and reliable with follow-up"
    ],
    "n": [
      "IT, software or professional services background"
    ]
  }
];
