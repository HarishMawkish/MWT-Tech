// Generated from the supplied Cloud Infrastructure pages. One entry per page; all of them share one template (CloudBody).
// Vendor facts (AWS, Microsoft, Google, SAP) are as supplied and are listed with their sources on each page.

export type CloudCard = [title: string, body: string];

export type CloudHead = { eyebrow: string; h2: string; lede: string | null };

export type CloudPageData = {
  slug: string;
  /** The name used in the menu and in search results. */
  label: string;
  /** The group it sits under in the menu. */
  group: string;
  description: string;
  /** Last segment of the breadcrumb, as supplied. */
  crumb: string;
  eyebrow: string;
  /** The headline: plain text, then the highlighted part. */
  h1: [plain: string, em: string];
  lede: string;
  cta1: string;
  cta2: string;
  facts: [figure: string, caption: string][];
  why: CloudHead & { items: CloudCard[] };
  /** Only the three platform pages have this band. */
  str: (CloudHead & { items: CloudCard[] }) | null;
  what: CloudHead & { items: [n: string, title: string, body: string][] };
  how: CloudHead & { steps: [title: string, body: string, duration: string][] };
  tbl: CloudHead & { cols: string[]; rows: string[][] };
  sap: CloudHead & { items: string[] };
  del: { eyebrow: string; h2: string; items: string[] };
  faq: { eyebrow: string; h2: string; items: [question: string, answer: string][] };
  relH: { eyebrow: string; h2: string };
  /** Related pages: group, title, slug. */
  rels: [group: string, title: string, slug: string][];
  cta: CloudHead & { btn: string; items: string[] };
  sources: [label: string, href: string][];
};

export const cloudPageData: CloudPageData[] = [
  {
    "slug": "aws",
    "label": "AWS",
    "group": "Cloud platforms",
    "description": "We plan, build and operate SAP and non-SAP workloads on Amazon Web Services, from RISE with SAP on AWS to self-managed SAP HANA on Amazon EC2.",
    "crumb": "Cloud Platforms",
    "eyebrow": "Cloud Infrastructure · Cloud Platforms",
    "h1": [
      "SAP and business workloads on AWS,",
      "designed, moved and run for you."
    ],
    "lede": "We plan, build and operate SAP and non-SAP workloads on Amazon Web Services, from RISE with SAP on AWS to self-managed SAP HANA on Amazon EC2. You get a secure, well-architected AWS estate close to Sri Lanka and India, with SAP data connected to AWS analytics and AI services.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "32 TiB",
        "Largest SAP-certified U7inh high memory EC2 instance"
      ],
      [
        "200+",
        "AWS services reachable from ABAP with AWS SDK for SAP ABAP"
      ],
      [
        "2",
        "AWS regions in India: Mumbai and Hyderabad, three zones each"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why run SAP on AWS",
      "lede": "SAP landscapes are memory hungry, business critical and tightly coupled to finance, supply chain and HR. There is no AWS region in Sri Lanka, so latency, data residency and connectivity need planning from day one. Many companies also run a mix of SAP, Odoo, HR systems, databases and websites, and want one cloud foundation, one security model and one operations team for all of it.",
      "items": [
        [
          "Certified for SAP HANA",
          "AWS offers SAP-certified EC2 instances from small systems up to 32 TiB of memory. That covers sandbox, BW/4HANA and large S/4HANA production systems on one platform."
        ],
        [
          "Regions near you",
          "Asia Pacific (Mumbai) and Asia Pacific (Hyderabad) each have three Availability Zones, with Singapore as a further option. That gives room for high availability within a region and disaster recovery across regions."
        ],
        [
          "SAP-specific tooling",
          "AWS Launch Wizard for SAP, AWS Systems Manager for SAP and AWS Backup for SAP HANA automate deployment, operations and backup. Less hand-built scripting means fewer errors."
        ],
        [
          "Data and AI on SAP data",
          "Services such as AWS Glue, Amazon AppFlow and Amazon Bedrock work with SAP data. Bedrock models are also offered inside SAP generative AI hub in SAP AI Core."
        ]
      ]
    },
    "str": {
      "eyebrow": "Where it is strong",
      "h2": "Why customers choose AWS",
      "lede": null,
      "items": [
        [
          "Large certified HANA instances",
          "AWS U7i high memory instances are SAP-certified for S/4HANA, BW/4HANA and Business Suite on HANA. The U7inh size reaches 32 TiB of memory."
        ],
        [
          "Two regions in India",
          "Asia Pacific (Mumbai) and Asia Pacific (Hyderabad) each have three Availability Zones. This supports high availability within a region and disaster recovery across the two."
        ],
        [
          "ABAP access to AWS",
          "The AWS SDK for SAP ABAP connects ABAP programs to more than 200 AWS services. A BTP edition extends this to the SAP BTP ABAP Environment."
        ],
        [
          "SAP automation tools",
          "AWS Launch Wizard for SAP sizes and deploys HANA and NetWeaver systems, and AWS Backup supports SAP HANA databases on EC2. Together they cut manual effort in build and run."
        ]
      ]
    },
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We cover the full AWS lifecycle for SAP and the systems around it.",
      "items": [
        [
          "01",
          "RISE with SAP on AWS",
          "We help you choose AWS as the hyperscaler for RISE with SAP and SAP Cloud ERP Private, and connect your own AWS account to the SAP-managed environment. SAP runs the infrastructure; we handle the network, identity, integration and extensions on your side."
        ],
        [
          "02",
          "Self-managed SAP on EC2",
          "For ECC, S/4HANA or BW on HANA that you run under your own licences, we size, deploy and harden the landscape on certified EC2 instances. We use AWS Launch Wizard for SAP and infrastructure as code so builds are repeatable."
        ],
        [
          "03",
          "ECC to S/4HANA moves",
          "We move ECC to AWS first or convert straight to S/4HANA, depending on your timeline. ECC mainstream maintenance ends in 2027, so we plan the route and the cutover around that date."
        ],
        [
          "04",
          "Landing zone and security",
          "We set up a multi-account AWS landing zone with guardrails, logging, encryption and least-privilege access. It is ready for SAP and non-SAP workloads from the start."
        ],
        [
          "05",
          "SAP data, analytics and AI",
          "We connect SAP to Amazon S3, AWS Glue and Amazon Redshift, and build use cases with Amazon Bedrock. We also use the AWS SDK for SAP ABAP to call AWS services directly from ABAP code."
        ],
        [
          "06",
          "Non-SAP workloads",
          "We host Odoo, MIHCM, Swyftflo, SQL and open-source databases, and company websites on AWS. They share the same landing zone, backup and monitoring as your SAP estate."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your SAP and non-SAP landscape, licences, interfaces and performance needs. We confirm whether RISE with SAP or a self-managed model fits best.",
          "2 to 4 weeks"
        ],
        [
          "Design",
          "We design the landing zone, network to Sri Lanka or India offices, region and zone layout, sizing and high availability. You get a clear architecture and plan.",
          "2 to 4 weeks"
        ],
        [
          "Build and migrate",
          "We build the AWS environment as code, migrate systems in waves and test each one. SAP cutovers are rehearsed before go-live.",
          "2 to 6 months"
        ],
        [
          "Run and improve",
          "We operate, patch, back up and monitor the estate, and review cost and security each month. We add data and AI use cases once the foundation is stable.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "On AWS",
      "h2": "How AWS services map to your needs",
      "lede": "The AWS services we use most often for SAP and business systems.",
      "cols": [
        "What you need",
        "AWS service",
        "How we help"
      ],
      "rows": [
        [
          "Run SAP HANA in production",
          "Amazon EC2 High Memory (U7i) and memory-optimised instances certified for SAP HANA",
          "We size the landscape to SAP sizing results and pick the right certified instance."
        ],
        [
          "Deploy SAP consistently",
          "AWS Launch Wizard for SAP",
          "We use it, plus Terraform or CloudFormation, to build HANA and NetWeaver systems the same way every time."
        ],
        [
          "Back up SAP HANA",
          "AWS Backup for SAP HANA and AWS Backint Agent to Amazon S3",
          "We set retention, test restores and protect backups in a separate account."
        ],
        [
          "Operate SAP on AWS",
          "AWS Systems Manager for SAP and Amazon CloudWatch",
          "We register SAP systems, automate routine tasks and set up alerts."
        ],
        [
          "Connect to RISE with SAP",
          "Amazon VPC, AWS Transit Gateway and AWS Direct Connect",
          "We connect your AWS account and offices to the SAP-managed RISE environment."
        ],
        [
          "Use SAP data for analytics and AI",
          "AWS Glue, Amazon AppFlow, Amazon Redshift and Amazon Bedrock",
          "We build data pipelines and AI use cases on governed SAP data."
        ],
        [
          "Extend SAP with AWS services",
          "AWS SDK for SAP ABAP",
          "We write ABAP extensions that call AWS services such as Amazon S3 or Amazon Textract."
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "SAP on AWS, the right way",
      "lede": "Under RISE with SAP on AWS, SAP owns and manages the AWS account that hosts your SAP Cloud ERP Private landscape, so you do not manage those servers. You extend it from your own AWS account, which is where we work: networking, identity, integration, data and extensions. If you run ECC or S/4HANA under your own licences on AWS, you and we run the whole stack, from EC2 and storage to HANA, high availability and backup. We keep these two models clear so responsibilities, contracts and support are never in doubt.",
      "items": [
        "RISE with SAP on AWS: SAP runs the infrastructure; we connect and extend it from your AWS account.",
        "Self-managed SAP on EC2: we build, run and support HANA and NetWeaver on certified instances.",
        "ECC mainstream maintenance ends in 2027, with optional extended maintenance to 2030; we plan your move around these dates.",
        "Amazon Bedrock models are available in SAP generative AI hub, so SAP BTP apps can use them."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "AWS landing zone with security guardrails, ready for SAP",
        "SAP sizing, architecture and region design for Mumbai, Hyderabad or Singapore",
        "Migrated and tested SAP and non-SAP systems",
        "Backup, high availability and disaster recovery runbooks",
        "Connectivity to RISE with SAP and to your offices",
        "Monthly operations, cost and security reports"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Is there an AWS region in Sri Lanka?",
          "No. The nearest AWS regions are Asia Pacific (Mumbai) and Asia Pacific (Hyderabad) in India, with Singapore as a further option. We choose the region based on latency, data residency needs and which services you need there."
        ],
        [
          "If we choose RISE with SAP on AWS, who manages the servers?",
          "SAP does. SAP owns and manages the AWS account that runs your SAP landscape. We work in your own AWS account to connect, secure and extend it."
        ],
        [
          "Can AWS handle very large SAP HANA databases?",
          "Yes. AWS U7i high memory instances are certified by SAP for S/4HANA and BW/4HANA, with sizes up to 32 TiB of memory. Most mid-sized companies need far less, and we size to your actual data."
        ],
        [
          "Can we run Odoo or MIHCM next to SAP on AWS?",
          "Yes. We host Odoo, MIHCM, databases and websites in the same landing zone. They share security, backup and monitoring with your SAP systems."
        ],
        [
          "Can you help with funding for the move?",
          "Yes. We help you secure hyperscaler funding programmes where you qualify. We prepare the assessment and business case these programmes usually ask for."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ],
      [
        "Migrate & Modernise",
        "RISE with SAP: Cloud & Region Choice",
        "rise-cloud-region-choice"
      ],
      [
        "Advise & Plan",
        "Landing Zone & Architecture Design",
        "landing-zone-architecture"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "AWS: RISE with SAP on AWS",
        "https://docs.aws.amazon.com/sap/latest/general/rise.html"
      ],
      [
        "AWS: Launch Wizard for SAP",
        "https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html"
      ],
      [
        "AWS: EC2 U7i instances",
        "https://aws.amazon.com/ec2/instance-types/u7i/"
      ],
      [
        "AWS: SDK for SAP ABAP",
        "https://aws.amazon.com/pt/sdk-for-sap-abap/"
      ],
      [
        "AWS: Hyderabad region launch",
        "https://aws.amazon.com/blogs/aws/now-open-the-30th-aws-region-asia-pacific-hyderabad-region-in-india"
      ],
      [
        "AWS: Backup for SAP HANA on EC2",
        "https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-saphana.html"
      ],
      [
        "AWS: Bedrock in SAP generative AI hub",
        "https://aws.amazon.com/blogs/awsforsap/power-your-business-with-secure-and-scalable-generative-ai-services-from-aws-and-sap/"
      ]
    ]
  },
  {
    "slug": "microsoft-azure",
    "label": "Microsoft Azure",
    "group": "Cloud platforms",
    "description": "We plan, build and operate SAP and non-SAP workloads on Microsoft Azure, from RISE with SAP on Azure to self-managed SAP HANA on certified Azure virtual…",
    "crumb": "Cloud Platforms",
    "eyebrow": "Cloud Infrastructure · Cloud Platforms",
    "h1": [
      "SAP and business workloads on Azure,",
      "connected to the Microsoft tools you use."
    ],
    "lede": "We plan, build and operate SAP and non-SAP workloads on Microsoft Azure, from RISE with SAP on Azure to self-managed SAP HANA on certified Azure virtual machines. You get a secure Azure estate in India regions close to Sri Lanka, linked to Microsoft Entra ID, Microsoft 365, Power BI and Microsoft Fabric.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "4",
        "Azure regions in India, with Hyderabad added in 2026"
      ],
      [
        "32 TB",
        "Mv3 very high memory VM recommended for large S/4HANA"
      ],
      [
        "3",
        "Availability Zones in the Hyderabad region, India South Central"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why run SAP on Azure",
      "lede": "Many companies already run Microsoft 365, Teams and Entra ID, and want SAP to fit into the same identity, security and reporting tools. There is no Azure region in Sri Lanka, so region choice, latency and connectivity need careful design. Alongside SAP sit Odoo, HR systems, databases and websites that should share one foundation and one operations model.",
      "items": [
        [
          "Microsoft integration",
          "Azure connects SAP with Microsoft Entra ID for single sign-on, Power Platform, Power BI and Excel. Users work with SAP data in tools they already know."
        ],
        [
          "Regions near you",
          "Azure has four regions in India: Central India (Pune), South India (Chennai), West India (Mumbai) and India South Central (Hyderabad). Southeast Asia (Singapore) is a further option."
        ],
        [
          "SAP as a first-class workload",
          "Azure Center for SAP solutions deploys and manages SAP systems as one unit, and Azure Monitor for SAP solutions tracks their health. This gives a clear view of the whole landscape."
        ],
        [
          "Security for SAP",
          "The Microsoft Sentinel solution for SAP applications monitors SAP business logic, application, database and operating system layers. It supports ECC, NetWeaver systems and SAP Cloud ERP Private under RISE."
        ]
      ]
    },
    "str": {
      "eyebrow": "Where it is strong",
      "h2": "Why customers choose Microsoft Azure",
      "lede": null,
      "items": [
        [
          "Microsoft 365 and identity",
          "Azure links SAP with Microsoft Entra ID, Power Platform, Power BI and Excel. Companies already on Microsoft 365 can extend their existing identity and tools to SAP."
        ],
        [
          "Four regions in India",
          "Azure runs Central India, South India, West India and India South Central, which opened in Hyderabad in 2026 with three Availability Zones. This gives several options for production and disaster recovery near Sri Lanka."
        ],
        [
          "SAP-aware management",
          "Azure Center for SAP solutions treats an SAP system as one managed resource, and Azure Monitor for SAP solutions adds native monitoring. The SAP on Azure deployment automation framework is open source."
        ],
        [
          "Security monitoring for SAP",
          "The Microsoft Sentinel solution for SAP applications watches SAP business logic, application, database and operating system layers. A separate solution covers SAP BTP."
        ]
      ]
    },
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We cover the full Azure lifecycle for SAP and the systems around it.",
      "items": [
        [
          "01",
          "RISE with SAP on Azure",
          "We help you choose Azure as the hyperscaler for RISE with SAP and SAP Cloud ERP Private, then connect your Azure hub to the SAP-managed environment. SAP runs the infrastructure in its own tenant; we handle peering, identity, integration and extensions on your side."
        ],
        [
          "02",
          "Self-managed SAP on Azure VMs",
          "For ECC, S/4HANA or BW on HANA under your own licences, we size, deploy and harden the landscape on SAP-certified Azure virtual machines. We use Azure Center for SAP solutions and the SAP on Azure deployment automation framework."
        ],
        [
          "03",
          "ECC to S/4HANA moves",
          "We move ECC to Azure first or convert straight to S/4HANA, depending on your timeline. ECC mainstream maintenance ends in 2027, so we plan the route and cutover around that date."
        ],
        [
          "04",
          "Landing zone and security",
          "We set up an Azure landing zone with Azure Policy, Microsoft Defender for Cloud, Azure Key Vault and network controls. It is ready for SAP and non-SAP workloads from the start."
        ],
        [
          "05",
          "SAP data, analytics and AI",
          "We bring SAP data into Microsoft Fabric and Power BI, and build AI use cases with Azure AI services. We connect Microsoft 365 Copilot and Joule where it helps users."
        ],
        [
          "06",
          "Non-SAP workloads",
          "We host Odoo, MIHCM, Swyftflo, SQL Server and open-source databases, and websites on Azure. They share the same landing zone, backup and monitoring as your SAP estate."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your SAP and non-SAP landscape, Microsoft licences, interfaces and performance needs. We confirm whether RISE with SAP or a self-managed model fits best.",
          "2 to 4 weeks"
        ],
        [
          "Design",
          "We design the landing zone, hub network, ExpressRoute or VPN to your offices, region and zone layout, and sizing. You get a clear architecture and plan.",
          "2 to 4 weeks"
        ],
        [
          "Build and migrate",
          "We build Azure resources as code with Bicep or Terraform, migrate systems in waves and test each one. SAP cutovers are rehearsed before go-live.",
          "2 to 6 months"
        ],
        [
          "Run and improve",
          "We operate, patch, back up and monitor the estate, and review cost and security each month. We add Fabric, Power BI and AI use cases once the foundation is stable.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "On Microsoft Azure",
      "h2": "How Azure services map to your needs",
      "lede": "The Azure services we use most often for SAP and business systems.",
      "cols": [
        "What you need",
        "Azure service",
        "How we help"
      ],
      "rows": [
        [
          "Run SAP HANA in production",
          "SAP-certified Azure M-series virtual machines, including Mv3",
          "We size to SAP sizing results and choose the right certified VM."
        ],
        [
          "Deploy and manage SAP as one system",
          "Azure Center for SAP solutions and the SAP on Azure deployment automation framework",
          "We deploy new systems or register existing ones, and keep builds repeatable."
        ],
        [
          "Monitor SAP health",
          "Azure Monitor for SAP solutions",
          "We set up dashboards and alerts for HANA, NetWeaver and the operating system."
        ],
        [
          "Back up and recover SAP",
          "Azure Backup for SAP HANA, Azure NetApp Files and Azure Site Recovery",
          "We set retention, test restores and design disaster recovery between regions."
        ],
        [
          "Connect to RISE with SAP",
          "Virtual network peering, VPN Gateway and Azure ExpressRoute",
          "We peer your hub with the SAP-managed RISE network in the same region."
        ],
        [
          "Secure SAP and sign-in",
          "Microsoft Entra ID and Microsoft Sentinel solution for SAP applications",
          "We set up single sign-on and threat monitoring across SAP and Microsoft systems."
        ],
        [
          "Use SAP data for analytics and AI",
          "Microsoft Fabric, Power BI and Azure AI services",
          "We build governed SAP data models and AI use cases your teams can use."
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "SAP on Azure, the right way",
      "lede": "Under RISE with SAP on Azure, SAP runs your SAP Cloud ERP Private landscape in its own Azure tenant and subscriptions, so you do not manage those virtual machines. Microsoft recommends peering your network to the RISE network in the same Azure region, and that is where we work: your hub, identity, integration, data and extensions. If you run ECC or S/4HANA under your own licences on Azure, you and we run the whole stack, from VMs and storage to HANA, high availability and backup. We keep both models clear so responsibilities and support are never in doubt.",
      "items": [
        "RISE with SAP on Azure: SAP runs the infrastructure; we peer, secure and extend it from your subscription.",
        "Self-managed SAP on Azure VMs: we build, run and support HANA and NetWeaver on certified VMs.",
        "ECC mainstream maintenance ends in 2027, with optional extended maintenance to 2030; we plan your move around these dates.",
        "SAP Business Data Cloud Connect for Microsoft Fabric, announced in November 2025, brings zero-copy sharing of SAP data products with OneLake."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Azure landing zone with policy and security controls, ready for SAP",
        "SAP sizing, architecture and region design across Azure India regions or Singapore",
        "Migrated and tested SAP and non-SAP systems",
        "Backup, high availability and disaster recovery runbooks",
        "Network peering to RISE with SAP and links to your offices",
        "Monthly operations, cost and security reports"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Is there an Azure region in Sri Lanka?",
          "No. Azure has four regions in India: Central India (Pune), South India (Chennai), West India (Mumbai) and India South Central (Hyderabad), which opened in 2026. Southeast Asia (Singapore) is a further option, and we choose based on latency, data residency and service availability."
        ],
        [
          "If we choose RISE with SAP on Azure, who manages the servers?",
          "SAP does. The RISE environment runs in SAP's own Azure tenant and subscriptions. We connect your Azure network to it, usually by virtual network peering, and build extensions in your subscription."
        ],
        [
          "Can we use our Microsoft 365 sign-in for SAP?",
          "Yes. We set up single sign-on from Microsoft Entra ID to SAP applications and SAP BTP. Users sign in once with the account they already use."
        ],
        [
          "Can we run Odoo or MIHCM next to SAP on Azure?",
          "Yes. We host Odoo, MIHCM, databases and websites in the same landing zone. They share security, backup and monitoring with your SAP systems."
        ],
        [
          "Can you help with funding for the move?",
          "Yes. We help you secure hyperscaler funding programmes where you qualify. We prepare the assessment and business case these programmes usually ask for."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ],
      [
        "Data, AI & Skills",
        "Microsoft 365 & Copilot with SAP",
        "microsoft-365-copilot-sap"
      ],
      [
        "Build & Connect",
        "Identity & Single Sign-On",
        "identity-single-sign-on"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Microsoft Learn: SAP on Azure offerings",
        "https://learn.microsoft.com/en-us/azure/sap/sap-on-azure-overview"
      ],
      [
        "Microsoft Learn: Connectivity with SAP RISE",
        "https://learn.microsoft.com/he-il/azure/sap/workloads/rise-integration-network"
      ],
      [
        "Microsoft Learn: Mdsv3 very high memory series",
        "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mdsv3-vhm-series"
      ],
      [
        "Microsoft Learn: Sentinel solution for SAP applications",
        "https://learn.microsoft.com/azure/sentinel/sap/solution-overview"
      ],
      [
        "Microsoft Learn: Azure Center for SAP solutions",
        "https://learn.microsoft.com/azure/sap/center-sap-solutions/overview"
      ],
      [
        "W.Media: India South Central region live",
        "https://w.media/microsofts-india-south-central-cloud-region-goes-live/"
      ],
      [
        "SAP News: BDC Connect for Microsoft Fabric",
        "https://news.sap.com/?p=238914"
      ]
    ]
  },
  {
    "slug": "google-cloud",
    "label": "Google Cloud",
    "group": "Cloud platforms",
    "description": "We plan, build and operate SAP and non-SAP workloads on Google Cloud, from RISE with SAP on Google Cloud to self-managed SAP HANA on certified Compute…",
    "crumb": "Cloud Platforms",
    "eyebrow": "Cloud Infrastructure · Cloud Platforms",
    "h1": [
      "SAP and business workloads on Google Cloud,",
      "with SAP data ready for BigQuery and AI."
    ],
    "lede": "We plan, build and operate SAP and non-SAP workloads on Google Cloud, from RISE with SAP on Google Cloud to self-managed SAP HANA on certified Compute Engine machines. You get a secure Google Cloud estate in Mumbai or Delhi, with SAP data flowing into BigQuery and Gemini for analytics and AI.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "32 TB",
        "Memory on the largest X4 bare metal machine for SAP HANA"
      ],
      [
        "2026",
        "SAP BDC Connect for BigQuery became generally available"
      ],
      [
        "2",
        "Google Cloud regions in India: Mumbai and Delhi NCR"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why run SAP on Google Cloud",
      "lede": "Most companies want more from their SAP data than standard reports: forecasting, supplier insight and AI assistants that understand finance and supply chain. There is no Google Cloud region in Sri Lanka, so latency, residency and connectivity must be planned. Odoo, HR systems, databases and websites also need a home that shares the same security and operations model as SAP.",
      "items": [
        [
          "Analytics on SAP data",
          "BigQuery, the BigQuery Connector for SAP and Google Cloud Cortex Framework turn SAP ECC and S/4HANA tables into ready data models. SAP Business Data Cloud Connect for BigQuery adds zero-copy access to SAP data products."
        ],
        [
          "Certified for SAP HANA",
          "Google Cloud certifies M3, M4, C4, X4 and X5 machine types for SAP HANA, from small systems to 32 TB bare metal. That covers sandbox through large production."
        ],
        [
          "Regions near you",
          "Mumbai (asia-south1) and Delhi NCR (asia-south2) are the nearest regions, with Singapore as a further option. Delhi NCR launched with three zones."
        ],
        [
          "AI from SAP",
          "The ABAP SDK for Google Cloud lets ABAP programs call Gemini models and Google Cloud APIs. SAP teams can add AI to existing processes without leaving ABAP."
        ]
      ]
    },
    "str": {
      "eyebrow": "Where it is strong",
      "h2": "Why customers choose Google Cloud",
      "lede": null,
      "items": [
        [
          "Analytics on SAP data",
          "BigQuery, the BigQuery Connector for SAP and Cortex Framework give a direct route from SAP ECC and S/4HANA into analytics. Cortex Framework is open source and deploys in your own Google Cloud environment."
        ],
        [
          "Zero-copy SAP data sharing",
          "SAP Business Data Cloud Connect for BigQuery became generally available in July 2026. It gives two-way access to SAP data products from BigQuery without replication."
        ],
        [
          "Large certified HANA machines",
          "X4 bare metal machines reach 32 TB of memory and are certified for SAP HANA scale-up and scale-out. M4 and the newer X5 series add further certified options."
        ],
        [
          "AI in ABAP",
          "The ABAP SDK for Google Cloud supports Gemini models and many Google Cloud APIs. SAP developers can add AI and cloud services from inside their ABAP code."
        ]
      ]
    },
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We cover the full Google Cloud lifecycle for SAP and the systems around it.",
      "items": [
        [
          "01",
          "RISE with SAP on Google Cloud",
          "We help you choose Google Cloud as the hyperscaler for RISE with SAP and SAP Cloud ERP Private, then connect your own Google Cloud projects to it. SAP Enterprise Cloud Services runs the VPC, instances and storage; we handle connectivity, identity, integration and extensions on your side."
        ],
        [
          "02",
          "Self-managed SAP on Compute Engine",
          "For ECC, S/4HANA or BW on HANA under your own licences, we size, deploy and harden the landscape on SAP-certified machine types. We use Google Cloud's Agent for SAP and Workload Manager to check it against best practice."
        ],
        [
          "03",
          "ECC to S/4HANA moves",
          "We move ECC to Google Cloud first or convert straight to S/4HANA, depending on your timeline. ECC mainstream maintenance ends in 2027, so we plan the route and cutover around that date."
        ],
        [
          "04",
          "Landing zone and security",
          "We set up a Google Cloud organisation with folders, policies, logging, encryption and least-privilege access. It is ready for SAP and non-SAP workloads from the start."
        ],
        [
          "05",
          "SAP data, analytics and AI",
          "We replicate SAP data to BigQuery, deploy Cortex Framework data models and connect SAP Business Data Cloud through BDC Connect for BigQuery. We then build reports and Gemini-based assistants on top."
        ],
        [
          "06",
          "Non-SAP workloads",
          "We host Odoo, MIHCM, Swyftflo, Cloud SQL and other databases, and websites on Google Cloud. They share the same organisation, backup and monitoring as your SAP estate."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your SAP and non-SAP landscape, licences, interfaces and data needs. We confirm whether RISE with SAP or a self-managed model fits best.",
          "2 to 4 weeks"
        ],
        [
          "Design",
          "We design the landing zone, network to your offices, region and zone layout, sizing and the data platform. You get a clear architecture and plan.",
          "2 to 4 weeks"
        ],
        [
          "Build and migrate",
          "We build Google Cloud resources as code, migrate systems in waves and test each one. SAP cutovers are rehearsed before go-live.",
          "2 to 6 months"
        ],
        [
          "Run and improve",
          "We operate, patch, back up and monitor the estate, and review cost and security each month. We add BigQuery and AI use cases once the foundation is stable.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "On Google Cloud",
      "h2": "How Google Cloud services map to your needs",
      "lede": "The Google Cloud services we use most often for SAP and business systems.",
      "cols": [
        "What you need",
        "Google Cloud service",
        "How we help"
      ],
      "rows": [
        [
          "Run SAP HANA in production",
          "Compute Engine M3, M4, C4, X4 and X5 machine types certified for SAP HANA",
          "We size to SAP sizing results and choose the right certified machine type."
        ],
        [
          "Monitor and back up SAP",
          "Google Cloud's Agent for SAP, with Backint and disk snapshot backup",
          "We set up monitoring, backup to Cloud Storage and tested restores."
        ],
        [
          "Check SAP against best practice",
          "Workload Manager, including its observability service for SAP workloads",
          "We run regular evaluations and fix gaps before they cause outages."
        ],
        [
          "Connect to RISE with SAP",
          "Cloud VPN, Cloud Interconnect and VPC networking",
          "We connect your projects and offices to the SAP-managed RISE environment."
        ],
        [
          "Replicate SAP data to analytics",
          "BigQuery Connector for SAP and BigQuery",
          "We replicate SAP tables in near real time, including change data capture."
        ],
        [
          "Ready-made SAP data models",
          "Google Cloud Cortex Framework and SAP BDC Connect for BigQuery",
          "We deploy data foundations for SAP ECC, S/4HANA and Business Data Cloud."
        ],
        [
          "Add AI to SAP processes",
          "Gemini models via the ABAP SDK for Google Cloud",
          "We build ABAP extensions and assistants that use Gemini on SAP data."
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "SAP on Google Cloud, the right way",
      "lede": "Under RISE with SAP on Google Cloud, SAP Enterprise Cloud Services manages your SAP Cloud ERP Private environment, including the VPC, Compute Engine instances and storage, so you do not manage those servers. You or your partner handle on-premise systems, your own Google Cloud projects and the connections to SAP's projects, and that is where we work. If you run ECC or S/4HANA under your own licences on Google Cloud, you and we run the whole stack, from machines and storage to HANA, high availability and backup. We keep both models clear so responsibilities and support are never in doubt.",
      "items": [
        "RISE with SAP on Google Cloud: SAP runs the infrastructure; we connect and extend it from your projects.",
        "Self-managed SAP on Compute Engine: we build, run and support HANA and NetWeaver on certified machine types.",
        "ECC mainstream maintenance ends in 2027, with optional extended maintenance to 2030; we plan your move around these dates.",
        "SAP Business Data Cloud is available in the Google Cloud Mumbai region, and BDC Connect for BigQuery gives zero-copy access to SAP data products."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Google Cloud landing zone with security policies, ready for SAP",
        "SAP sizing, architecture and region design for Mumbai, Delhi NCR or Singapore",
        "Migrated and tested SAP and non-SAP systems",
        "Backup, high availability and disaster recovery runbooks",
        "SAP data in BigQuery with Cortex Framework data models",
        "Monthly operations, cost and security reports"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Is there a Google Cloud region in Sri Lanka?",
          "No. The nearest regions are Mumbai (asia-south1) and Delhi NCR (asia-south2) in India, with Singapore as a further option. We choose based on latency, data residency and which services you need there."
        ],
        [
          "If we choose RISE with SAP on Google Cloud, who manages the servers?",
          "SAP does. SAP Enterprise Cloud Services manages the VPC, Compute Engine instances and storage for your SAP environment. We connect your own projects and offices to it and build extensions there."
        ],
        [
          "How do we get SAP data into BigQuery?",
          "There are several routes. The BigQuery Connector for SAP replicates tables from SAP systems, Cortex Framework supplies data models, and SAP Business Data Cloud Connect for BigQuery shares SAP data products without copying them. We pick the route that fits your SAP version and use case."
        ],
        [
          "Can we run Odoo or MIHCM next to SAP on Google Cloud?",
          "Yes. We host Odoo, MIHCM, databases and websites in the same Google Cloud organisation. They share security, backup and monitoring with your SAP systems."
        ],
        [
          "Can you help with funding for the move?",
          "Yes. We help you secure hyperscaler funding programmes where you qualify. We prepare the assessment and business case these programmes usually ask for."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Data, AI & Skills",
        "AI & Data on SAP Data",
        "ai-data-on-sap"
      ],
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ],
      [
        "Migrate & Modernise",
        "RISE with SAP: Cloud & Region Choice",
        "rise-cloud-region-choice"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Google Cloud: RISE with SAP on Google Cloud",
        "https://docs.cloud.google.com/sap/docs/rise-overview"
      ],
      [
        "Google Cloud: SAP release notes",
        "https://docs.cloud.google.com/sap/docs/release-notes"
      ],
      [
        "Google Cloud: Memory-optimised machines",
        "https://docs.cloud.google.com/compute/docs/memory-optimized-machines"
      ],
      [
        "Google Cloud: Cortex Framework overview",
        "https://docs.cloud.google.com/cortex/docs/overview"
      ],
      [
        "Google Cloud: BDC Connect for BigQuery",
        "https://cloud.google.com/blog/products/sap-google-cloud/sap-and-google-cloud-launch-bdc-connect-for-bigquery/"
      ],
      [
        "Google Cloud: BigQuery Connector for SAP",
        "https://docs.cloud.google.com/sap/docs/bq-connector/latest/planning"
      ],
      [
        "Google: Delhi NCR region open",
        "https://blog.google/intl/en-in/products/google-companies/new-google-cloud-region-delhi-ncr-now-open/"
      ]
    ]
  },
  {
    "slug": "cloud-readiness-assessment",
    "label": "Cloud Strategy & Readiness Assessment",
    "group": "Advise & plan",
    "description": "We assess your current IT estate, your SAP landscape and your team, then set out a cloud adoption roadmap you can act on.",
    "crumb": "Advise & Plan",
    "eyebrow": "Cloud Infrastructure · Advise & Plan",
    "h1": [
      "Know what you have and where it should go,",
      "before you move a single workload."
    ],
    "lede": "We assess your current IT estate, your SAP landscape and your team, then set out a cloud adoption roadmap you can act on. You get a clear view of which workloads move, to which cloud, in what order, and what your SAP options look like before the ECC maintenance deadline.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "2027",
        "End of SAP mainstream maintenance for Business Suite 7"
      ],
      [
        "2030",
        "Last year of optional SAP extended maintenance"
      ],
      [
        "0",
        "AWS, Azure or Google Cloud regions inside Sri Lanka"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why start with an assessment",
      "lede": "Most organisations know they need to move, but not what they actually run, how it depends on other systems or what it costs today. Without that baseline, cloud plans are built on guesses: the wrong workloads go first, SAP decisions are made late, and the move stalls when hidden dependencies appear. With SAP mainstream maintenance for ECC ending at the end of 2027, the window for a calm, planned decision is getting shorter.",
      "items": [
        [
          "Unknown estate",
          "Server lists, licences and application owners are often out of date. A proper discovery shows what is really running and how busy it is."
        ],
        [
          "SAP deadline",
          "SAP mainstream maintenance for Business Suite 7 core applications ends at the end of 2027, with optional extended maintenance until the end of 2030. The SAP path needs to be decided early, not last."
        ],
        [
          "Region and data rules",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka, so data location, latency and Sri Lanka's Personal Data Protection Act need to be considered up front."
        ],
        [
          "Skills and operating model",
          "Cloud changes how teams work. Knowing your skills gaps early lets you plan training, hiring or managed support alongside the technical move."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We combine automated discovery with workshops so the roadmap reflects both the data and your business priorities.",
      "items": [
        [
          "01",
          "Estate discovery",
          "We use the native discovery and assessment tools of AWS, Azure and Google Cloud to inventory servers, databases and utilisation. We map application dependencies so related systems move together."
        ],
        [
          "02",
          "Workload disposition",
          "We place each workload in a migration approach such as rehost, replatform, refactor, replace with SaaS, retain or retire. Each decision is recorded with the reason behind it."
        ],
        [
          "03",
          "SAP landscape options",
          "We compare RISE with SAP (SAP Cloud ERP Private), GROW with SAP (SAP Cloud ERP), S/4HANA on your own cloud subscription and staying on ECC for a period. We use SAP Readiness Check results to show custom code, add-on and simplification item impact."
        ],
        [
          "04",
          "Cloud and region fit",
          "We compare AWS, Microsoft Azure and Google Cloud against your applications, skills and existing agreements. We look at the nearest regions to Sri Lanka, such as Mumbai, Hyderabad, Pune, Delhi and Singapore, for latency and data residency."
        ],
        [
          "05",
          "Readiness scoring",
          "We assess your organisation against the cloud adoption frameworks published by AWS, Microsoft and Google. This covers business, people, governance, platform, security and operations."
        ],
        [
          "06",
          "Adoption roadmap",
          "We produce a sequenced roadmap of migration waves, foundations, skills and decisions. It links directly into the business case and landing zone design."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Kick-off and goals",
          "We agree the scope, the business drivers and who needs to be involved. We set up read-only access for discovery tools.",
          "1 week"
        ],
        [
          "Discovery and data collection",
          "Agentless collectors or exported inventories gather server, database and utilisation data. We run SAP Readiness Check on ECC systems where relevant.",
          "2 to 4 weeks"
        ],
        [
          "Workshops and analysis",
          "We run workshops with IT, finance, security and business owners. We analyse dependencies, risks and options for each workload group.",
          "2 to 3 weeks"
        ],
        [
          "Roadmap and recommendations",
          "We present the target cloud, SAP option, migration waves and readiness actions. You receive a roadmap you can take straight into a business case.",
          "1 to 2 weeks"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "The native tools we use on each cloud",
      "lede": "We work with each provider's own frameworks and assessment tools, so findings carry straight into their migration services.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Adoption framework",
          "AWS Cloud Adoption Framework (AWS CAF)",
          "Microsoft Cloud Adoption Framework for Azure",
          "Google Cloud Adoption Framework"
        ],
        [
          "Discovery and assessment",
          "AWS Transform, Migration Evaluator",
          "Azure Migrate",
          "Migration Center"
        ],
        [
          "Cost estimates",
          "AWS Pricing Calculator",
          "Azure pricing calculator",
          "Google Cloud Pricing Calculator"
        ],
        [
          "Architecture review",
          "AWS Well-Architected Tool",
          "Azure Well-Architected Framework, Azure Advisor",
          "Google Cloud Well-Architected Framework"
        ],
        [
          "SAP guidance",
          "SAP Lens for the AWS Well-Architected Framework",
          "SAP on Azure documentation, Azure Center for SAP solutions",
          "SAP on Google Cloud planning guides"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Your SAP options, laid out clearly",
      "lede": "For SAP customers the assessment answers one question above all: which path to S/4HANA, and who runs it. Under RISE with SAP, SAP runs the infrastructure on a hyperscaler such as AWS, Azure or Google Cloud, and you do not manage the virtual machines. If you keep ECC or run S/4HANA yourself on your own cloud subscription, you (with us) operate the systems. We set out the trade-offs, timelines and dependencies of each so the decision is made on facts.",
      "items": [
        "RISE with SAP with SAP Cloud ERP Private: SAP manages the infrastructure and technical operations in a dedicated hyperscaler account.",
        "GROW with SAP with SAP Cloud ERP: a public cloud ERP suited to standard processes and new implementations.",
        "S/4HANA on your own AWS, Azure or Google Cloud subscription: full control, with your team or ours running operations.",
        "ECC timeline: mainstream maintenance ends at the end of 2027, and optional extended maintenance runs until the end of 2030."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Current estate inventory with utilisation and dependency maps",
        "Workload disposition register with a migration approach per application",
        "SAP options paper covering RISE, GROW, self-managed S/4HANA and ECC timelines",
        "Cloud provider and region recommendation with data residency notes",
        "Cloud readiness scorecard across business, people, governance, platform, security and operations",
        "Sequenced adoption roadmap with migration waves and next steps"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Do you install agents on our servers?",
          "Not necessarily. The provider tools we use support agentless collection over standard protocols, or we can work from exported inventories. We agree the method with your security team before we start."
        ],
        [
          "Will the assessment tell us which cloud to choose?",
          "Yes. We compare AWS, Microsoft Azure and Google Cloud against your workloads, skills, existing agreements and region needs, and make a recommendation. Some organisations end up using more than one cloud, and we say so where it makes sense."
        ],
        [
          "We run SAP ECC. Do we have to decide on RISE with SAP now?",
          "Not immediately, but soon. SAP mainstream maintenance for ECC ends at the end of 2027, with optional extended maintenance until the end of 2030. The assessment sets out your options and the lead time each one needs, so you can decide with enough runway."
        ],
        [
          "Where would our data be hosted if we are based in Sri Lanka?",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka today. The nearest regions are in India, such as Mumbai, Hyderabad, Pune and Delhi, and in Singapore. We assess latency and data protection needs, including Sri Lanka's Personal Data Protection Act, when recommending a region."
        ],
        [
          "What happens after the assessment?",
          "The roadmap feeds directly into a business case, a landing zone design and migration planning. You can take it forward with us or with your own team."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Advise & Plan",
        "Business Case & TCO",
        "business-case-tco"
      ],
      [
        "Advise & Plan",
        "Landing Zone & Architecture Design",
        "landing-zone-architecture"
      ],
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP maintenance strategy for Business Suite 7",
        "https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html"
      ],
      [
        "AWS Cloud Adoption Framework",
        "https://aws.amazon.com/cloud-adoption-framework/"
      ],
      [
        "Microsoft Cloud Adoption Framework overview",
        "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview"
      ],
      [
        "Google Cloud Adoption Framework",
        "https://cloud.google.com/adoption-framework"
      ],
      [
        "AWS Migration Hub availability change (AWS Transform)",
        "https://docs.aws.amazon.com/migrationhub/latest/ug/migrationhub-availability-change.html"
      ],
      [
        "Azure regions list",
        "https://learn.microsoft.com/azure/reliability/regions-list"
      ],
      [
        "AWS Asia Pacific (Hyderabad) Region launch",
        "https://aws.amazon.com/blogs/aws/now-open-the-30th-aws-region-asia-pacific-hyderabad-region-in-india"
      ],
      [
        "Google Cloud locations (Mumbai, Delhi, Singapore)",
        "https://docs.cloud.google.com/infrastructure-manager/docs/locations"
      ],
      [
        "RISE with SAP on AWS",
        "https://docs.aws.amazon.com/sap/latest/general/rise.html"
      ],
      [
        "Sri Lanka PDPA compliance from 1 January 2027 (Daily FT)",
        "https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776"
      ]
    ]
  },
  {
    "slug": "business-case-tco",
    "label": "Business Case & TCO",
    "group": "Advise & plan",
    "description": "We build a total cost of ownership model that sets your current on-premise costs against running the same workloads on AWS, Microsoft Azure or Google Cloud.",
    "crumb": "Advise & Plan",
    "eyebrow": "Cloud Infrastructure · Advise & Plan",
    "h1": [
      "Compare cloud and on-premise costs honestly,",
      "and build a case your board will sign."
    ],
    "lede": "We build a total cost of ownership model that sets your current on-premise costs against running the same workloads on AWS, Microsoft Azure or Google Cloud. The result is a business case with clear assumptions, a multi-year cash flow view and the non-financial benefits your leadership needs to decide.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "5 years",
        "Span of Google Cloud Migration Center cost estimates"
      ],
      [
        "8",
        "Cost categories compared in an Azure Migrate business case"
      ],
      [
        "2027",
        "SAP ECC mainstream maintenance ends, shaping SAP business cases"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why cloud business cases go wrong",
      "lede": "Many cloud business cases compare a server's purchase cost with a monthly cloud bill and stop there. That misses the real on-premise costs, such as power, space, hardware refresh, support contracts, backup and staff time, and it often assumes cloud resources are sized exactly like today's servers. The result is either a case that is too optimistic and loses credibility after go-live, or one that is too pessimistic and stops a sensible move.",
      "items": [
        [
          "Hidden on-premise costs",
          "Facilities, hardware refresh cycles, software support and administration time are rarely in one place. We gather them so the comparison is fair."
        ],
        [
          "Over-sized cloud estimates",
          "Sizing cloud resources on allocated capacity rather than actual use inflates the cost. We size on measured utilisation."
        ],
        [
          "Licensing surprises",
          "Moving Windows Server, SQL Server, Oracle or SAP licences to cloud has rules. Getting them wrong can change the case completely."
        ],
        [
          "Timing of spend",
          "Migrations happen in waves, so on-premise and cloud costs overlap for a period. The case must show that overlap, not just the end state."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We produce a business case grounded in your own data, with every assumption written down and open to challenge.",
      "items": [
        [
          "01",
          "Current cost baseline",
          "We collect hardware, data centre, licence, support, network and staff costs for the systems in scope. Where figures are missing we agree reasonable assumptions with your finance team."
        ],
        [
          "02",
          "Right-sized cloud costing",
          "We use utilisation data from discovery tools to size each workload on AWS, Azure or Google Cloud. We then cost it with each provider's own pricing calculators and assessment tools."
        ],
        [
          "03",
          "Licence review",
          "We check how your existing Microsoft, Oracle, SAP and other licences can be reused in the cloud. We model licence-included and bring-your-own-licence options where both are allowed."
        ],
        [
          "04",
          "Commitment and purchasing options",
          "We show how reserved capacity, savings plans and existing cloud commitments affect the long-term cost. We also flag where marketplace buying can help."
        ],
        [
          "05",
          "Multi-year cash flow",
          "We model costs year by year through the migration, including the overlap while both environments run. We can include net present value using your own discount rate."
        ],
        [
          "06",
          "Non-financial benefits",
          "We capture benefits such as resilience, security, speed of delivery and avoided hardware refresh. These sit alongside the numbers so the decision is balanced."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Scope and data request",
          "We agree which systems are in scope and send a structured data request. Finance, IT and procurement each provide their part.",
          "1 week"
        ],
        [
          "Baseline and discovery",
          "We build the on-premise cost baseline and collect utilisation data from your servers and databases. Gaps are filled with agreed assumptions.",
          "2 to 3 weeks"
        ],
        [
          "Cloud modelling",
          "We size and cost the target environment on the chosen cloud or clouds. We run scenarios for different migration timings and purchasing options.",
          "2 weeks"
        ],
        [
          "Review with finance",
          "We walk your finance team through every assumption and adjust where they disagree. This is where the case earns its credibility.",
          "1 week"
        ],
        [
          "Final business case",
          "We deliver the model, a written case and an executive summary. You can use them for board approval or budget planning.",
          "1 week"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native costing tools on each cloud",
      "lede": "We use each provider's own tools so your figures line up with what the provider will quote and bill.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "On-premise versus cloud TCO",
          "Migration Evaluator",
          "Azure Migrate business case",
          "Migration Center cost estimates and TCO reports"
        ],
        [
          "Service cost estimates",
          "AWS Pricing Calculator",
          "Azure pricing calculator",
          "Google Cloud Pricing Calculator"
        ],
        [
          "Commitment options",
          "Savings Plans, Reserved Instances",
          "Azure savings plan for compute, Azure Reservations",
          "Committed use discounts"
        ],
        [
          "Licence reuse",
          "Bring your own licence, AWS License Manager",
          "Azure Hybrid Benefit",
          "Bring your own licence on sole-tenant nodes"
        ],
        [
          "Tracking costs after go-live",
          "AWS Cost Explorer",
          "Microsoft Cost Management",
          "Cloud Billing reports"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Business cases for SAP",
      "lede": "SAP business cases are different because the choice is not just which cloud, but who runs the system. Under RISE with SAP, SAP runs the infrastructure and technical operations on your chosen hyperscaler under a single subscription, so infrastructure, basis operations and support move into one contract. If you run S/4HANA or ECC yourself on AWS, Azure or Google Cloud, you pay the cloud provider directly and run operations with your team or ours. We model both so you can compare like with like.",
      "items": [
        "We compare RISE with SAP against self-managed S/4HANA on your own cloud subscription, on the same scope and timeline.",
        "We include the cost of staying on ECC, such as extended maintenance after 2027 and ageing hardware.",
        "We separate one-off transformation costs from ongoing run costs so each option is clear.",
        "Google Cloud Migration Center includes a calculator for SAP workloads, which we use alongside our own models where Google Cloud is in scope."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "On-premise cost baseline with sources and assumptions",
        "Right-sized cloud cost model for each option",
        "Licence reuse and compliance summary",
        "Year-by-year cash flow covering the migration period",
        "Written business case and executive summary for approval",
        "Assumptions register your finance team can update"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Will the cloud always be cheaper than on-premise?",
          "Not always. Some steady, fully used workloads cost about the same or more in the cloud, while others save a great deal. A fair business case shows both and also weighs benefits like resilience and avoided hardware refresh."
        ],
        [
          "How accurate is the model?",
          "It is as accurate as the data behind it. We size on measured utilisation, use each provider's own pricing tools and write down every assumption, so your finance team can test and adjust it."
        ],
        [
          "Can you compare more than one cloud?",
          "Yes. We can model AWS, Microsoft Azure and Google Cloud side by side on the same workload set. This is useful when you are deciding between providers or planning a multi-cloud estate."
        ],
        [
          "Do you include SAP licences in the comparison?",
          "We include SAP-related costs as you provide them, such as maintenance, subscription and infrastructure. We do not set SAP prices, but we structure the comparison so RISE with SAP and self-managed options are assessed on the same basis."
        ],
        [
          "Can the business case include funding from the cloud provider?",
          "Yes. Hyperscaler funding programmes can offset part of the assessment or migration cost, subject to eligibility. We help secure funding and show it separately so the case stands on its own without it."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Advise & Plan",
        "Cloud Strategy & Readiness Assessment",
        "cloud-readiness-assessment"
      ],
      [
        "Advise & Plan",
        "Migration Funding & Marketplace Buying",
        "migration-funding-marketplace"
      ],
      [
        "Run & Optimise",
        "FinOps & Cost Optimisation",
        "finops-cost-optimisation"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Azure Migrate business case calculation",
        "https://learn.microsoft.com/en-us/azure/migrate/concepts-business-case-calculation"
      ],
      [
        "Google Cloud Migration Center cost estimation overview",
        "https://docs.cloud.google.com/migration-center/docs/estimate/overview"
      ],
      [
        "AWS Migration Evaluator FAQs",
        "https://aws.amazon.com/migration-evaluator/faqs"
      ],
      [
        "AWS pricing and TCO tools",
        "https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/aws-pricingtco-tools.html"
      ],
      [
        "SAP maintenance strategy for Business Suite 7",
        "https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html"
      ],
      [
        "RISE with SAP on AWS",
        "https://docs.aws.amazon.com/sap/latest/general/rise.html"
      ],
      [
        "Google Cloud Quick TCO Estimator",
        "https://docs.cloud.google.com/migration-center/docs/quick_tco_estimator"
      ]
    ]
  },
  {
    "slug": "landing-zone-architecture",
    "label": "Landing Zone & Architecture Design",
    "group": "Advise & plan",
    "description": "We design and build your cloud landing zone: the account, subscription or project structure, identity, networking, guardrails and logging that every…",
    "crumb": "Advise & Plan",
    "eyebrow": "Cloud Infrastructure · Advise & Plan",
    "h1": [
      "Build the foundations once, properly,",
      "so every workload lands somewhere safe."
    ],
    "lede": "We design and build your cloud landing zone: the account, subscription or project structure, identity, networking, guardrails and logging that every workload sits on. We add reference architectures for SAP and other key systems, so teams can deploy quickly without reinventing security or breaking governance.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "3",
        "Control types in AWS Control Tower: preventive, detective, proactive"
      ],
      [
        "8",
        "Design areas in the Azure landing zone guidance"
      ],
      [
        "4",
        "Core design areas in Google Cloud landing zone guidance"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why the landing zone comes first",
      "lede": "When teams start deploying into a single cloud account or subscription without a plan, problems build up quickly: unclear ownership, open networks, inconsistent access and no central view of costs or security. Fixing that later means moving live workloads. A landing zone sets the structure and rules before migration starts, so new workloads, including SAP, arrive in an environment that is already secure, governed and ready to scale.",
      "items": [
        [
          "Isolation and ownership",
          "Separating workloads into their own accounts, subscriptions or projects limits the impact of mistakes and makes ownership and billing clear."
        ],
        [
          "Guardrails, not gatekeepers",
          "Policies enforced by the platform stop risky changes automatically, so teams can move quickly without a manual approval for every change."
        ],
        [
          "Connectivity planned up front",
          "Private links to your offices, data centres and SAP systems need address planning and routing that are hard to change later."
        ],
        [
          "Audit and security from day one",
          "Central logging and security monitoring should be in place before the first production workload, not added after an incident."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We design the landing zone with your security, network and finance teams, then build it as code.",
      "items": [
        [
          "01",
          "Resource hierarchy",
          "We design the structure of accounts and organisational units on AWS, management groups and subscriptions on Azure, or folders and projects on Google Cloud. It reflects your business units, environments and cost ownership."
        ],
        [
          "02",
          "Identity and access",
          "We connect the cloud to your identity provider for single sign-on and set role-based access with least privilege. Break-glass and privileged access are designed and documented."
        ],
        [
          "03",
          "Network design",
          "We build a hub-and-spoke or similar topology with IP address planning, private connectivity to on-premise and controlled internet access. We plan the links to RISE with SAP and SAP BTP where relevant."
        ],
        [
          "04",
          "Guardrails and policy",
          "We apply preventive and detective controls using each cloud's native policy services. Typical controls cover allowed regions, encryption, public access and mandatory tagging."
        ],
        [
          "05",
          "Logging, security and cost visibility",
          "We centralise audit logs and security findings in dedicated accounts or subscriptions. Tagging and budgets give finance a clear view of spend by team and application."
        ],
        [
          "06",
          "Reference architectures",
          "We provide approved patterns for SAP, web applications, data platforms and file services. Teams deploy from these patterns rather than starting from a blank page."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Requirements and design workshops",
          "We gather security, compliance, network, identity and cost requirements. We agree naming, tagging and the resource hierarchy.",
          "1 to 2 weeks"
        ],
        [
          "Architecture design",
          "We document the landing zone design and the reference architectures for priority workloads, including SAP. Your teams review and approve it.",
          "2 weeks"
        ],
        [
          "Build as code",
          "We deploy the landing zone using infrastructure as code and the provider's native landing zone tooling. Everything is version controlled and repeatable.",
          "2 to 4 weeks"
        ],
        [
          "Test and hand over",
          "We test guardrails, access and connectivity, then deploy a pilot workload. We hand over runbooks and train your platform team.",
          "1 to 2 weeks"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Landing zone building blocks on each cloud",
      "lede": "We build with each provider's native services so the landing zone stays supported and up to date.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Resource hierarchy",
          "AWS Organizations, organisational units and accounts",
          "Management groups and subscriptions",
          "Resource Manager organisation, folders and projects"
        ],
        [
          "Landing zone setup",
          "AWS Control Tower, Landing Zone Accelerator on AWS",
          "Azure landing zone accelerators",
          "Google Cloud Setup, enterprise foundations blueprint"
        ],
        [
          "Guardrails",
          "Service control policies, resource control policies, AWS Control Tower controls",
          "Azure Policy",
          "Organization Policy Service"
        ],
        [
          "Workforce identity",
          "AWS IAM Identity Center",
          "Microsoft Entra ID",
          "Cloud Identity"
        ],
        [
          "Hub networking",
          "AWS Transit Gateway",
          "Azure Virtual WAN or hub-and-spoke virtual networks",
          "Shared VPC, Network Connectivity Center"
        ],
        [
          "Private link to on-premise",
          "AWS Direct Connect, AWS Site-to-Site VPN",
          "Azure ExpressRoute, Azure VPN Gateway",
          "Cloud Interconnect, Cloud VPN"
        ],
        [
          "Central logging and security",
          "AWS CloudTrail, AWS Security Hub",
          "Azure Monitor, Microsoft Defender for Cloud",
          "Cloud Logging, Security Command Center"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Landing zones for SAP",
      "lede": "How SAP fits into the landing zone depends on who runs it. Under RISE with SAP, SAP owns and manages the hyperscaler account that hosts your SAP Cloud ERP Private systems, so your landing zone provides the private connectivity, identity and the separate accounts, subscriptions or projects where your own extensions, integrations and data platforms run. If you run S/4HANA or ECC yourself on AWS, Azure or Google Cloud, the SAP systems sit inside your landing zone and we design dedicated SAP workload zones for production, non-production and disaster recovery.",
      "items": [
        "RISE with SAP: we design the connection from your network to the SAP-managed environment, such as a customer-managed intermediary project on Google Cloud.",
        "Self-managed SAP: we build separate SAP production and non-production zones with subnets for application and database tiers.",
        "We follow provider SAP guidance, such as the SAP Lens for the AWS Well-Architected Framework and SAP Deployment Automation Framework on Azure.",
        "We plan private connectivity between SAP BTP and your SAP systems so integration traffic avoids the public internet."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Landing zone design document with resource hierarchy and naming standards",
        "Network design with IP address plan and connectivity diagrams",
        "Identity and access model with role definitions",
        "Guardrail and policy catalogue",
        "Landing zone deployed as version-controlled code",
        "Reference architectures for SAP and priority workloads"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "We already have a cloud account in use. Can you still build a landing zone?",
          "Yes. We design the target structure and then bring existing accounts or subscriptions into it, or move workloads across in a planned way. AWS Control Tower, for example, can enrol existing accounts into a new landing zone."
        ],
        [
          "Do we need a landing zone for RISE with SAP?",
          "SAP manages the infrastructure that hosts RISE with SAP, but you still need a secure place for connectivity, identity and your own extensions. A smaller landing zone covering those needs is usually enough."
        ],
        [
          "Can you build landing zones on more than one cloud?",
          "Yes. We design each one with the same principles for identity, naming, tagging and security, using each cloud's native services. This keeps a multi-cloud estate consistent and easier to govern."
        ],
        [
          "Will our teams be able to manage it after you leave?",
          "Yes. The landing zone is delivered as code with documentation and runbooks, and we train your platform team. We can also run it for you under a managed service."
        ],
        [
          "How do you handle data residency for Sri Lanka?",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka, so we use guardrails to restrict deployments to the regions you approve, such as those in India or Singapore. This supports your data protection obligations."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Build & Connect",
        "Infrastructure as Code",
        "infrastructure-as-code"
      ],
      [
        "Build & Connect",
        "Network & Connectivity to RISE and BTP",
        "network-connectivity-rise-btp"
      ],
      [
        "Build & Connect",
        "Identity & Single Sign-On",
        "identity-single-sign-on"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "What is AWS Control Tower",
        "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html"
      ],
      [
        "Azure landing zone overview",
        "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/"
      ],
      [
        "Azure landing zone design areas",
        "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-areas"
      ],
      [
        "Google Cloud landing zone design",
        "https://docs.cloud.google.com/architecture/landing-zones"
      ],
      [
        "Google Cloud enterprise foundations blueprint",
        "https://docs.cloud.google.com/architecture/security-foundations"
      ],
      [
        "RISE with SAP on AWS",
        "https://docs.aws.amazon.com/sap/latest/general/rise.html"
      ],
      [
        "RISE with SAP on Google Cloud",
        "https://docs.cloud.google.com/sap/docs/rise-overview"
      ],
      [
        "SAP Lens for the AWS Well-Architected Framework",
        "https://docs.aws.amazon.com/wellarchitected/latest/sap-lens/sap-lens.html"
      ],
      [
        "SAP Deployment Automation Framework on Azure",
        "https://learn.microsoft.com/en-us/azure/sap/automation/deployment-framework"
      ]
    ]
  },
  {
    "slug": "migration-funding-marketplace",
    "label": "Migration Funding & Marketplace Buying",
    "group": "Advise & plan",
    "description": "We help you secure hyperscaler funding for assessments and migrations, and buy SAP and other software through the AWS, Microsoft and Google Cloud marketplaces.",
    "crumb": "Advise & Plan",
    "eyebrow": "Cloud Infrastructure · Advise & Plan",
    "h1": [
      "Make your cloud budget go further,",
      "with funding and smarter buying."
    ],
    "lede": "We help you secure hyperscaler funding for assessments and migrations, and buy SAP and other software through the AWS, Microsoft and Google Cloud marketplaces. Where your agreements allow, eligible marketplace purchases count towards cloud commitments you have already made, so one budget does more work.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "2025",
        "SAP Cloud ERP and SAP BTP launched on AWS Marketplace"
      ],
      [
        "Sep 2025",
        "SAP BTP listed on Google Cloud Marketplace, payable from commitments"
      ],
      [
        "1 invoice",
        "Azure and Microsoft Marketplace charges billed together by Microsoft"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why funding and procurement matter",
      "lede": "Many organisations sign a multi-year commitment with a cloud provider and then buy software, including SAP, through entirely separate contracts. That leaves cloud commitments underused while software budgets are stretched, and it means more suppliers, more contracts and more invoices to manage. At the same time, hyperscalers offer funding for assessments and migrations that many customers never claim because they do not know it exists or how to apply.",
      "items": [
        [
          "Underused commitments",
          "Cloud spend commitments are often sized for future growth. Routing eligible software purchases through the marketplace helps you use what you have already committed."
        ],
        [
          "Fragmented procurement",
          "Buying through a marketplace puts software on your existing cloud bill, under terms your procurement and legal teams have already agreed."
        ],
        [
          "Unclaimed funding",
          "Hyperscaler funding programmes can offset part of the cost of assessments, proofs of concept and migrations. They have eligibility rules and need a partner to apply."
        ],
        [
          "Timing",
          "Funding and marketplace offers often need to be arranged before contracts are signed. Planning early avoids missing them."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We work alongside your procurement and finance teams to plan how cloud and software are bought and funded.",
      "items": [
        [
          "01",
          "Commitment review",
          "We review your current AWS, Azure or Google Cloud agreements and how much of each commitment is being used. We identify software purchases that could count towards them."
        ],
        [
          "02",
          "Marketplace buying for SAP",
          "We check which SAP offerings, such as SAP Cloud ERP and SAP BTP, are available through each marketplace for your country. We help you arrange the purchase as a private offer where SAP supports it."
        ],
        [
          "03",
          "Other software through the marketplace",
          "Many ISVs list security, data, backup and monitoring tools on the marketplaces. We help you choose eligible listings so these purchases also count towards your commitment."
        ],
        [
          "04",
          "Hyperscaler funding applications",
          "We help secure funding for discovery, assessments, proofs of concept and migrations. We prepare the business case and evidence the provider needs and manage the application."
        ],
        [
          "05",
          "Commercial structuring",
          "We help you plan the order of contracts so funding, marketplace offers and commitments line up. We flag terms such as eligibility rules and purchasing channels that affect whether spend counts."
        ],
        [
          "06",
          "Tracking and reporting",
          "After purchase we track commitment drawdown and funding milestones. Finance gets a clear view of what has been used and what remains."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Review agreements and plans",
          "We look at your existing cloud agreements, software renewals and planned projects. We identify where marketplace buying and funding could apply.",
          "1 to 2 weeks"
        ],
        [
          "Check eligibility",
          "We confirm which offers are listed and eligible in your country and under your agreement. We also check which funding the planned work may qualify for.",
          "1 to 2 weeks"
        ],
        [
          "Apply and arrange offers",
          "We prepare funding applications with the provider and coordinate private offers with SAP or other vendors. Your procurement team approves the final terms.",
          "2 to 6 weeks"
        ],
        [
          "Purchase and track",
          "You accept the offer through your cloud account and the charges appear on your cloud bill. We track drawdown and funding milestones through delivery.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Marketplace buying on each cloud",
      "lede": "Each provider has its own marketplace and rules for how purchases count towards a commitment.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Marketplace",
          "AWS Marketplace",
          "Microsoft Marketplace",
          "Google Cloud Marketplace"
        ],
        [
          "Negotiated terms with a vendor",
          "Private offers",
          "Private offers",
          "Private offers"
        ],
        [
          "Buying through a partner",
          "Channel partner private offers",
          "Multiparty private offers",
          "Marketplace resale through Google Cloud resellers"
        ],
        [
          "Counting purchases towards a commitment",
          "Eligible purchases count towards AWS spend commitments",
          "Azure benefit eligible offers count towards the Microsoft Azure Consumption Commitment",
          "Eligible Marketplace spend counts towards Google Cloud commitments"
        ],
        [
          "SAP offerings listed",
          "SAP Cloud ERP, SAP BTP",
          "SAP Cloud ERP packages and SAP BTP, announced in 2025",
          "SAP BTP"
        ],
        [
          "Tracking spend",
          "AWS Billing and Cost Management",
          "Microsoft Cost Management",
          "Cloud Billing reports"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Buying SAP through your cloud provider",
      "lede": "SAP has made several of its cloud subscriptions available through hyperscaler marketplaces. AWS lists SAP Cloud ERP and SAP BTP and states that existing AWS commitments can count towards SAP purchases; Microsoft announced SAP Cloud ERP packages and SAP BTP for its marketplace; and Google Cloud lists SAP BTP and lets customers use existing spend commitments for it. Under RISE with SAP, SAP still runs the infrastructure on the hyperscaler you choose, whichever way you buy. We help you work out whether marketplace buying is available for your SAP scope and country, and whether it makes commercial sense for you.",
      "items": [
        "We check which SAP offerings are available through each marketplace in Sri Lanka or India before you plan around them.",
        "We help you align a RISE with SAP or GROW with SAP purchase with the cloud provider that hosts it and your existing commitment.",
        "We include SAP BTP and related services so integration and extension spend can count towards the same commitment.",
        "We keep your SAP account team and cloud account team aligned so the private offer reflects what you agreed."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Commitment usage review across your cloud agreements",
        "List of eligible marketplace purchases, including SAP offerings",
        "Funding plan with eligibility notes and timelines",
        "Prepared funding applications and supporting business case",
        "Purchasing sequence aligned with contracts and renewals",
        "Drawdown and funding tracking reports"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Can we buy RISE with SAP through a cloud marketplace?",
          "SAP offers several cloud subscriptions through hyperscaler marketplaces, and AWS states that SAP purchases on AWS Marketplace can count towards existing AWS commitments. What is available depends on the cloud, the SAP product and your country. We confirm the current options with SAP and the provider for your case."
        ],
        [
          "Does every marketplace purchase count towards our commitment?",
          "No. Each provider has eligibility rules. On Azure only offers marked Azure benefit eligible and bought through the Azure portal count, and Google Cloud excludes some categories such as professional services. We check eligibility before you buy."
        ],
        [
          "What can hyperscaler funding be used for?",
          "Hyperscaler funding programmes typically support activities such as discovery and assessment, proofs of concept and migration delivery. Funding depends on the provider, the workload and the size of the opportunity, and it is never guaranteed. We help secure funding and tell you early whether a project is likely to qualify."
        ],
        [
          "Can customers in Sri Lanka and India use the marketplaces?",
          "Yes, the marketplaces serve customers in both countries, but listings and terms can vary by country. In India, AWS Marketplace added local rupee invoicing for offers from India-based sellers in November 2025. We check what applies to your entity before planning around it."
        ],
        [
          "Will this change who supports our software?",
          "No. Buying through a marketplace changes how you pay, not who supports the product. The vendor, such as SAP, remains responsible for its software and support under its own terms."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Advise & Plan",
        "Business Case & TCO",
        "business-case-tco"
      ],
      [
        "Migrate & Modernise",
        "RISE with SAP: Cloud & Region Choice",
        "rise-cloud-region-choice"
      ],
      [
        "Run & Optimise",
        "FinOps & Cost Optimisation",
        "finops-cost-optimisation"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP Cloud ERP and SAP BTP on AWS Marketplace (AWS blog)",
        "https://aws.amazon.com/blogs/awsforsap/sap-cloud-erp-and-sap-btp-now-available-on-aws-marketplace/"
      ],
      [
        "New innovations for SAP on Microsoft Cloud (Azure blog)",
        "https://azure.microsoft.com/en-us/blog/announcing-new-innovations-for-sap-on-microsoft-cloud/"
      ],
      [
        "SAP BTP on Google Cloud Marketplace (Google Cloud blog)",
        "https://cloud.google.com/blog/products/sap-google-cloud/unlocking-a-new-era-for-sap-on-google-cloud"
      ],
      [
        "Azure consumption commitment benefit",
        "https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit"
      ],
      [
        "Microsoft Marketplace procurement overview",
        "https://learn.microsoft.com/en-us/marketplace/procurement-overview"
      ],
      [
        "Google Cloud Marketplace commitment drawdown",
        "https://docs.cloud.google.com/marketplace/docs/commit-drawdown"
      ],
      [
        "AWS expands AWS Marketplace in India",
        "https://press.aboutamazon.com/aws/2025/11/aws-expands-aws-marketplace-in-india"
      ],
      [
        "GROW with SAP on AWS Marketplace (CIO Dive)",
        "https://www.ciodive.com/news/sap-aws-cloud-erp-solution-partnership/734515/"
      ]
    ]
  },
  {
    "slug": "sap-to-cloud",
    "label": "SAP ECC & S/4HANA to the Cloud",
    "group": "Migrate & modernise",
    "description": "We move SAP ECC, S/4HANA on-premise and older SAP landscapes onto SAP HANA certified infrastructure on AWS, Microsoft Azure or Google Cloud.",
    "crumb": "Migrate & Modernise",
    "eyebrow": "Cloud Infrastructure · Migrate & Modernise",
    "h1": [
      "Move SAP ECC and S/4HANA to the cloud,",
      "without stopping the business."
    ],
    "lede": "We move SAP ECC, S/4HANA on-premise and older SAP landscapes onto SAP HANA certified infrastructure on AWS, Microsoft Azure or Google Cloud. You leave ageing hardware behind, get a landscape that is ready for S/4HANA, and keep full control of the systems you run.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "2027",
        "End of mainstream maintenance for SAP ECC 6.0 EHP 6 to 8"
      ],
      [
        "2030",
        "Last year of optional extended maintenance for ECC"
      ],
      [
        "2040",
        "SAP maintenance commitment for SAP S/4HANA"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why move SAP to the cloud now",
      "lede": "SAP has set clear dates. Mainstream maintenance for SAP Business Suite 7 core applications, including ECC 6.0 on enhancement packages 6 to 8, ends at the end of 2027, with optional extended maintenance to the end of 2030 at a higher maintenance fee. Older enhancement packages are already outside mainstream maintenance. At the same time, on-premise hardware refreshes, data centre contracts and SAP Process Orchestration timelines are arriving together. Moving the current landscape to the cloud first removes the hardware problem and gives you a cleaner base for the move to S/4HANA.",
      "items": [
        [
          "Hardware and data centre pressure",
          "Replacing ageing SAP servers and storage locks you into another multi-year cycle. Cloud infrastructure lets you size for today and change size later."
        ],
        [
          "A stepping stone to S/4HANA",
          "S/4HANA runs only on SAP HANA. Moving ECC onto HANA certified cloud infrastructure now shortens the later conversion and lets you test it on copies of production."
        ],
        [
          "Integration timelines too",
          "Mainstream maintenance for SAP Process Orchestration 7.5 also ends in 2027. Planning the infrastructure move and the integration move together avoids doing the work twice."
        ],
        [
          "Environments on demand",
          "Sandbox, project and test copies can be built when needed and switched off afterwards, which is hard to do on fixed on-premise hardware."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We plan, migrate and stabilise SAP landscapes on the hyperscaler that fits your business.",
      "items": [
        [
          "01",
          "Landscape assessment",
          "We review your SAP systems, versions, databases, interfaces, sizes and add-ons. You get a clear view of what can move as is and what needs to change first."
        ],
        [
          "02",
          "Target architecture",
          "We design the cloud landscape on SAP HANA certified instance types, with high availability, backup, network and security built in. The design follows SAP and hyperscaler reference architectures."
        ],
        [
          "03",
          "Lift and shift",
          "Where the operating system and database stay the same, we move systems with a homogeneous system copy or replication. This is the fastest path with the fewest changes."
        ],
        [
          "04",
          "OS and database migration",
          "We move from AIX, HP-UX, Solaris, Oracle, SQL Server or DB2 to Linux and SAP HANA using SAP tools such as Software Update Manager with Database Migration Option. You land on a platform that is ready for S/4HANA."
        ],
        [
          "05",
          "S/4HANA readiness",
          "We can combine the move with preparation work: custom code checks, data volume reduction and a plan for the later S/4HANA conversion. Some customers convert during the move itself."
        ],
        [
          "06",
          "Cutover and hypercare",
          "We rehearse the cutover on copies, agree a downtime window with the business and support you closely in the weeks after go-live."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Discover and decide",
          "We collect system data, sizing and interface lists, then agree the target cloud, region and migration path. You get a migration plan with risks and options.",
          "2 to 4 weeks"
        ],
        [
          "Build the landing zone",
          "We set up accounts or subscriptions, networks, connectivity to your offices, identity and security controls. SAP infrastructure is built with automation so it can be repeated.",
          "2 to 4 weeks"
        ],
        [
          "Migrate non-production",
          "Sandbox, development and quality systems move first. Each move is a rehearsal that tunes the runbook and measures downtime.",
          "4 to 8 weeks"
        ],
        [
          "Migrate production",
          "We run the production cutover in an agreed window, validate with business users and switch interfaces over. Rollback options are prepared in advance.",
          "1 weekend per system"
        ],
        [
          "Stabilise and hand over",
          "We tune performance, confirm backup and recovery, and hand over to your team or to our managed operations service.",
          "2 to 4 weeks"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "SAP on each cloud",
      "lede": "Native services we use for self-managed SAP on AWS, Microsoft Azure and Google Cloud.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "SAP HANA certified compute",
          "Amazon EC2 memory optimised and High Memory U7i instances",
          "Azure M-series virtual machines",
          "Compute Engine M-series and X4 machine types"
        ],
        [
          "Guided SAP deployment and checks",
          "AWS Launch Wizard for SAP",
          "Azure Center for SAP solutions",
          "Workload Manager with Google Cloud's Agent for SAP"
        ],
        [
          "SAP aware operations",
          "AWS Systems Manager for SAP",
          "Azure Monitor for SAP solutions",
          "Google Cloud's Agent for SAP with Cloud Monitoring"
        ],
        [
          "SAP HANA backup",
          "AWS Backup for SAP HANA",
          "Azure Backup for SAP HANA",
          "Backup and DR Service"
        ],
        [
          "Rehost surrounding servers",
          "AWS Transform MGN",
          "Azure Migrate",
          "Migrate to Virtual Machines"
        ],
        [
          "Private connection to the cloud",
          "AWS Direct Connect",
          "Azure ExpressRoute",
          "Cloud Interconnect"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Self-managed SAP or RISE with SAP",
      "lede": "This service is for SAP you run yourself on the cloud, sometimes called bring your own licence. You keep your SAP licences, and you, with us, run the virtual machines, operating system, database and SAP Basis. That is different from RISE with SAP, where SAP runs the infrastructure on a hyperscaler and you do not manage the virtual machines. Both are valid paths. Many customers move ECC to the cloud first to leave the data centre, then choose between a self-managed S/4HANA conversion and a move to SAP Cloud ERP Private under RISE with SAP.",
      "items": [
        "ECC 6.0 on EHP 6 to 8 keeps mainstream maintenance until the end of 2027, with optional extended maintenance to the end of 2030.",
        "SAP has committed to maintain SAP S/4HANA until the end of 2040.",
        "Under self-managed SAP on the cloud, the customer remains responsible for the systems, patches and SAP support compliance, so we design for that from the start.",
        "If RISE with SAP is the better fit, we help you choose the cloud and region and connect it to the rest of your estate."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "SAP landscape assessment and migration plan",
        "Target cloud architecture on SAP HANA certified infrastructure",
        "Landing zone with network, identity and security controls",
        "Tested migration runbooks and cutover plan",
        "Migrated SAP systems with backup, recovery and monitoring in place",
        "Handover pack and S/4HANA readiness recommendations"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "When does support for SAP ECC end?",
          "SAP provides mainstream maintenance for SAP Business Suite 7 core applications, including ECC 6.0 on enhancement packages 6 to 8, until the end of 2027. Optional extended maintenance runs to the end of 2030 at a higher fee. Customers who do not take it move to customer-specific maintenance."
        ],
        [
          "Should we move ECC to the cloud or go straight to S/4HANA?",
          "It depends on your hardware dates, project capacity and how much change the business can absorb. Moving ECC first removes the infrastructure deadline and can include the move to SAP HANA, which shortens the later S/4HANA conversion. Going straight to S/4HANA avoids a second project but takes longer to start."
        ],
        [
          "Can we change the database and operating system during the move?",
          "Yes. An OS and database migration from Oracle, SQL Server, DB2, AIX, HP-UX or Solaris to Linux and SAP HANA is a common part of the move. SAP tools such as Software Update Manager with Database Migration Option are designed for this."
        ],
        [
          "Which cloud is best for SAP?",
          "AWS, Microsoft Azure and Google Cloud all offer SAP HANA certified infrastructure and SAP support. The right choice depends on your existing contracts, skills, nearby regions, and the other applications you run. We compare them on your actual requirements."
        ],
        [
          "How long will the business be down?",
          "Downtime depends on database size, the migration method and the network. We measure it during rehearsals on non-production systems and agree a production window with you before the cutover, usually over a weekend."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "RISE with SAP: Cloud & Region Choice",
        "rise-cloud-region-choice"
      ],
      [
        "Run & Optimise",
        "High Availability, DR & Backup",
        "high-availability-dr-backup"
      ],
      [
        "Advise & Plan",
        "Business Case & TCO",
        "business-case-tco"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP News: S/4HANA maintenance to 2040 and Business Suite 7 clarity",
        "https://news.sap.com/2020/02/sap-s4hana-maintenance-2040-clarity-choice-sap-business-suite-7/"
      ],
      [
        "SAPinsider: Business Suite end of maintenance by enhancement package",
        "https://sapinsider.org/blogs/sap-details-end-of-maintenance-plans-for-business-suite/"
      ],
      [
        "LeverX: SAP PI/PO maintenance timeline",
        "https://leverx.com/en-gb/blog/sap-pi-po-to-integration-suite-migration-uk"
      ],
      [
        "AWS: SAP HANA certified EC2 instances",
        "https://docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html"
      ],
      [
        "Microsoft Learn: SAP certifications and configurations on Azure",
        "https://learn.microsoft.com/en-au/azure/sap/workloads/certifications"
      ],
      [
        "Google Cloud: SAP certifications on Google Cloud",
        "https://docs.cloud.google.com/sap/docs/certifications-sap-apps"
      ],
      [
        "Microsoft Learn: Azure Center for SAP solutions",
        "https://learn.microsoft.com/azure/sap/center-sap-solutions/overview"
      ],
      [
        "AWS: Launch Wizard for SAP",
        "https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html"
      ]
    ]
  },
  {
    "slug": "rise-cloud-region-choice",
    "label": "RISE with SAP: Cloud & Region Choice",
    "group": "Migrate & modernise",
    "description": "Under RISE with SAP, SAP runs SAP Cloud ERP Private for you on a hyperscaler you choose. We help you pick the provider and region that suit Sri Lanka and India.",
    "crumb": "Migrate & Modernise",
    "eyebrow": "Cloud Infrastructure · Migrate & Modernise",
    "h1": [
      "Choose the right cloud and region for RISE with SAP,",
      "and connect it to everything else."
    ],
    "lede": "Under RISE with SAP, SAP runs SAP Cloud ERP Private for you on a hyperscaler you choose. We help you pick the provider and region that suit users in Sri Lanka and India, make clear what SAP manages and what you still own, and connect the new landscape to your networks, identity and applications.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "1",
        "Contract for SAP software, infrastructure and technical managed services"
      ],
      [
        "4",
        "Microsoft Azure cloud regions in India, including Hyderabad"
      ],
      [
        "2",
        "AWS regions in India: Mumbai and Hyderabad"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why the cloud and region choice matters",
      "lede": "RISE with SAP takes away the work of running SAP infrastructure, but it does not make every decision for you. SAP's private cloud runs on Microsoft Azure, AWS, Google Cloud or SAP's own data centres, and the choice shapes latency, data residency, integration with your other systems and where your own cloud spend goes. There is no AWS, Azure or Google Cloud region in Sri Lanka, so Sri Lankan companies serve users from India or Singapore. And under the RISE agreement, connecting your network to the SAP environment is your responsibility, not SAP's.",
      "items": [
        [
          "Latency for users",
          "Finance, warehouse and shop floor users feel every round trip. The region and the network path from Colombo or your Indian sites decide how responsive SAP feels."
        ],
        [
          "Data residency and law",
          "Sri Lanka's Personal Data Protection Act No. 9 of 2022 brings its core obligations into force on 1 January 2027, including rules on cross-border processing. Region choice needs to fit your legal advice."
        ],
        [
          "Your other workloads",
          "Analytics, integration, AI, Databricks, Salesforce and HR systems work best close to SAP. Choosing the hyperscaler you already use, or plan to use, keeps data paths short."
        ],
        [
          "Clear responsibilities",
          "SAP manages the SAP environment in its own subscription or account. Your network, identity, interfaces, security monitoring and the systems around SAP stay with you."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We help you make the RISE infrastructure decisions with evidence, then build what sits around SAP.",
      "items": [
        [
          "01",
          "Hyperscaler comparison",
          "We compare AWS, Microsoft Azure and Google Cloud against your existing contracts, skills, integration needs and roadmap. You get a recommendation you can defend to the board."
        ],
        [
          "02",
          "Region selection",
          "We check which regions SAP offers for your RISE scope and measure latency from your offices to candidate regions in India and Singapore. We also consider disaster recovery pairing."
        ],
        [
          "03",
          "Responsibility map",
          "We set out, task by task, what SAP Enterprise Cloud Services does under your contract, what is optional, and what stays with you or with us. Nothing important falls between the gaps."
        ],
        [
          "04",
          "Network connectivity",
          "We design and build the connection from your offices and cloud accounts to the SAP managed network, using peering, VPN or private circuits. Address ranges, routing, firewalls and DNS are planned up front."
        ],
        [
          "05",
          "Identity and access",
          "We connect SAP Cloud ERP Private and SAP BTP to your identity provider for single sign-on and keep user access under your control."
        ],
        [
          "06",
          "Integration and data",
          "We connect SAP to your other applications, data platforms and AI services through SAP Integration Suite and native cloud services in your own subscription."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Understand needs",
          "We gather user locations, compliance needs, existing cloud contracts and integration lists. This sets the criteria for the decision.",
          "1 to 2 weeks"
        ],
        [
          "Compare and test",
          "We compare providers and regions, and run latency tests from your sites. You get a written recommendation with trade-offs.",
          "1 to 2 weeks"
        ],
        [
          "Agree responsibilities",
          "We review the RISE scope with you and SAP and write a responsibility map for operations, security and integration.",
          "1 week"
        ],
        [
          "Build connectivity",
          "We build your side of the network, identity and security, then work with SAP to complete peering or private connectivity and test it.",
          "3 to 6 weeks"
        ],
        [
          "Connect the estate",
          "We move interfaces, data flows and monitoring onto the new landscape and support you through go-live.",
          "Alongside the RISE project"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "RISE with SAP on each cloud",
      "lede": "Regions near Sri Lanka and the native services you use on your side of the connection; SAP confirms which regions are offered for your scope.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Regions nearest Sri Lanka",
          "Asia Pacific (Mumbai), Asia Pacific (Hyderabad), Asia Pacific (Singapore)",
          "Central India (Pune), South India (Chennai), West India (Mumbai), India South Central (Hyderabad), Southeast Asia (Singapore)",
          "asia-south1 (Mumbai), asia-south2 (Delhi), asia-southeast1 (Singapore)"
        ],
        [
          "Link your cloud to SAP's network",
          "VPC peering or AWS Transit Gateway",
          "Virtual network peering",
          "VPC Network Peering through a transit VPC"
        ],
        [
          "Private line from your offices",
          "AWS Direct Connect or AWS Site-to-Site VPN",
          "Azure ExpressRoute or Azure VPN Gateway",
          "Cloud Interconnect or HA VPN"
        ],
        [
          "Identity for users",
          "AWS IAM Identity Center",
          "Microsoft Entra ID",
          "Cloud Identity"
        ],
        [
          "Data and analytics next to SAP",
          "Amazon S3, Amazon Redshift",
          "Microsoft Fabric, Azure Data Factory",
          "BigQuery"
        ],
        [
          "Monitoring of your side",
          "Amazon CloudWatch",
          "Azure Monitor",
          "Cloud Monitoring"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "What SAP manages and what you still own",
      "lede": "RISE with SAP bundles SAP Cloud ERP Private, the cloud infrastructure and technical managed services in one contract with SAP. SAP builds and runs the SAP environment in its own hyperscaler account or subscription, which only SAP can see and manage, so you do not manage the virtual machines, operating system or database. You keep full functional control of SAP, including access through SAP GUI and your own custom code. You also own everything outside SAP's boundary: the network connection into it, your cloud accounts, identity, interfaces, application management and the tasks your contract lists as excluded.",
      "items": [
        "SAP's private cloud can run on Microsoft Azure, AWS, Google Cloud or SAP data centres, with other providers available in some markets.",
        "Connecting your network to the RISE environment is the customer's responsibility under the RISE agreement.",
        "Support for resources inside SAP's subscription goes through SAP; your own cloud provider support covers only your own accounts.",
        "For the largest ECC estates, SAP also offers a time-bound SAP ERP, private edition, transition option under RISE, with conditions such as a move to SAP HANA before the end of 2030."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Hyperscaler and region recommendation with latency results",
        "RISE responsibility map for SAP, customer and partner",
        "Network design with address plan, routing, firewall and DNS",
        "Built and tested connectivity to the SAP managed environment",
        "Single sign-on and identity integration",
        "Integration and monitoring plan for the wider estate"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Which clouds does RISE with SAP run on?",
          "SAP's private cloud offering can run on Microsoft Azure, AWS, Google Cloud or SAP's own data centres, and Alibaba Cloud is also listed by SAP. In some markets additional providers are available, such as STACKIT in Europe. For customers in Sri Lanka and India, AWS, Azure and Google Cloud are the usual choices."
        ],
        [
          "Is there a cloud region in Sri Lanka?",
          "No. AWS, Microsoft Azure and Google Cloud do not have a region in Sri Lanka today. Sri Lankan customers usually use regions in India, such as Mumbai, Pune, Chennai, Hyderabad or Delhi, or Singapore. SAP confirms which of these it offers for your RISE scope."
        ],
        [
          "Do we still need cloud skills if SAP runs the infrastructure?",
          "Yes, but for different work. You own the connection to SAP's network, your identity provider, interfaces, security monitoring and the applications around SAP. Those run in your own cloud accounts, and we can build and run them for you."
        ],
        [
          "Does the hyperscaler choice change what SAP delivers?",
          "RISE with SAP is the same SAP offering whichever certified infrastructure provider you choose. What changes is how easily SAP connects to your other workloads, data platforms and existing cloud contracts, and which regions are available."
        ],
        [
          "Can we change our mind later?",
          "Moving a RISE landscape to another provider or region is a significant project that has to be agreed with SAP. That is why we recommend testing the decision properly before the contract is signed."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Build & Connect",
        "Network & Connectivity to RISE and BTP",
        "network-connectivity-rise-btp"
      ],
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ],
      [
        "Build & Connect",
        "Identity & Single Sign-On",
        "identity-single-sign-on"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP Learning: Describing RISE with SAP",
        "https://learning.sap.com/courses/discovering-sap-activate-implementation-tools-and-methodology/describing-rise-with-sap"
      ],
      [
        "AWS: Roles and responsibility for connectivity to RISE",
        "https://docs.aws.amazon.com/sap/latest/general/rise-responsibility.html"
      ],
      [
        "Microsoft Learn: Integrating Azure with SAP RISE managed workloads",
        "https://learn.microsoft.com/azure/sap/workloads/rise-integration"
      ],
      [
        "Google Cloud: Network connectivity to RISE with SAP",
        "https://docs.cloud.google.com/sap/docs/rise-connectivity"
      ],
      [
        "Microsoft: India South Central region in Hyderabad goes live",
        "https://news.microsoft.com/source/asia/features/microsofts-newest-india-datacenter-region-goes-live-to-power-the-countrys-ai-economy-and-enable-frontier-firms/"
      ],
      [
        "AWS: Second infrastructure region in India (Hyderabad)",
        "https://press.aboutamazon.com/2022/11/aws-launches-second-infrastructure-region-in-india"
      ],
      [
        "SAP: List of data centres for SAP cloud services",
        "https://www.sap.com/israel/docs/download/agreements/product-use-and-support-terms/cls/en/list-of-data-centers-for-sap-cloud-services-english-v.9-2026.pdf"
      ],
      [
        "SAP News: SAP ERP, private edition, transition option",
        "https://news.sap.com/?p=233946"
      ],
      [
        "Daily FT: Data protection compliance regime from 1 January 2027",
        "https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776"
      ],
      [
        "Schwarz Digits: RISE with SAP on STACKIT",
        "https://schwarz-digits.de/en/presse/archive/2026/schwarz-digits-launches-rise-with-sap-on-stackit-at-competitive-market-prices"
      ]
    ]
  },
  {
    "slug": "database-application-migration",
    "label": "Database & Application Migration",
    "group": "Migrate & modernise",
    "description": "We move on-premise databases such as Oracle and SQL Server, and the applications that depend on them, to AWS, Microsoft Azure or Google Cloud.",
    "crumb": "Migrate & Modernise",
    "eyebrow": "Cloud Infrastructure · Migrate & Modernise",
    "h1": [
      "Move your databases and applications to the cloud,",
      "one sensible step at a time."
    ],
    "lede": "We move on-premise databases such as Oracle and SQL Server, and the applications that depend on them, to AWS, Microsoft Azure or Google Cloud. Each workload gets the right strategy, from a straight rehost to a managed database, so you leave the data centre with less risk and fewer surprises.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "7 Rs",
        "Migration strategies, from retire and retain to refactor"
      ],
      [
        "July 2026",
        "SQL Server 2016 extended support ended"
      ],
      [
        "3 clouds",
        "Oracle Database services run in India regions of each"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why migrate databases and applications now",
      "lede": "Most estates have grown over years: Oracle and SQL Server databases, Windows and Linux servers, line of business applications and file shares, often on hardware near the end of its life. Software support dates add pressure. SQL Server 2016 left extended support in July 2026 and Windows Server 2016 follows in January 2027. Moving everything the same way wastes effort. Some workloads should simply be retired, some rehosted, and some moved to a managed database that removes patching and backup work for good.",
      "items": [
        [
          "Ageing software and hardware",
          "Unsupported databases and operating systems carry security risk. A migration is the right moment to upgrade them."
        ],
        [
          "Database administration effort",
          "Managed database services take over patching, backups and high availability, so your team spends less time on routine work."
        ],
        [
          "Licence choices",
          "Moving from a commercial database to PostgreSQL is possible for many applications, and native tools now help convert schemas and code."
        ],
        [
          "Dependencies you cannot see",
          "Applications often depend on each other in ways that are not documented. Discovery tools reveal those links before anything moves."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We plan and run migrations of databases and applications using native cloud tooling.",
      "items": [
        [
          "01",
          "Discovery and assessment",
          "We inventory servers, databases and applications, and map dependencies using native discovery tools. You see what you have, how it is used and what it would need in the cloud."
        ],
        [
          "02",
          "7 Rs strategy per workload",
          "We assign each workload a strategy: retire, retain, rehost, relocate, repurchase, replatform or refactor. The aim is to move fast where change adds no value and modernise where it does."
        ],
        [
          "03",
          "Server rehosting",
          "We replicate servers continuously to the cloud and cut over in short windows. Applications keep running while data copies in the background."
        ],
        [
          "04",
          "Database migration",
          "We move Oracle, SQL Server, MySQL and PostgreSQL databases with native replication tools that keep source and target in sync until cutover. Downtime is limited to the final switch."
        ],
        [
          "05",
          "Database modernisation",
          "Where it makes sense, we convert Oracle or SQL Server databases to managed PostgreSQL services, using schema conversion tools and testing the application against the new engine."
        ],
        [
          "06",
          "Testing and cutover",
          "We run functional, performance and data checks, then plan the cutover with rollback options. We stay close through hypercare."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Discover",
          "We deploy discovery tools and collect inventory, utilisation and dependency data. Business owners confirm what each application is for.",
          "2 to 4 weeks"
        ],
        [
          "Plan waves",
          "We choose a strategy for each workload and group them into migration waves by dependency and risk. You get a wave plan and target designs.",
          "2 to 3 weeks"
        ],
        [
          "Prepare the landing zone",
          "We set up accounts or subscriptions, networking, identity, security and backup in the target cloud.",
          "2 to 4 weeks"
        ],
        [
          "Migrate in waves",
          "We migrate and test each wave, starting with low risk workloads to prove the process. Lessons from each wave improve the next.",
          "2 to 6 weeks per wave"
        ],
        [
          "Optimise and close",
          "We right-size resources, decommission old servers and hand over to your team or our managed service.",
          "2 to 4 weeks"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native migration tools by cloud",
      "lede": "The services we use for discovery, migration and target databases on each cloud.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Discovery and planning",
          "AWS Transform",
          "Azure Migrate",
          "Migration Center"
        ],
        [
          "Server rehost",
          "AWS Transform MGN",
          "Azure Migrate",
          "Migrate to Virtual Machines"
        ],
        [
          "Database replication",
          "AWS Database Migration Service",
          "Azure Database Migration Service",
          "Database Migration Service"
        ],
        [
          "Schema and code conversion",
          "DMS Schema Conversion",
          "SQL Server Migration Assistant",
          "Database Migration Service conversion workspaces"
        ],
        [
          "Managed SQL Server",
          "Amazon RDS for SQL Server",
          "Azure SQL Managed Instance",
          "Cloud SQL for SQL Server"
        ],
        [
          "Managed PostgreSQL",
          "Amazon Aurora PostgreSQL-Compatible Edition",
          "Azure Database for PostgreSQL flexible server",
          "AlloyDB for PostgreSQL"
        ],
        [
          "Oracle Database inside the cloud",
          "Oracle Database@AWS",
          "Oracle Database@Azure",
          "Oracle Database@Google Cloud"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Migrating the systems around SAP",
      "lede": "SAP rarely stands alone. Around it sit SQL Server and Oracle databases for reporting, custom portals, interface servers, file transfer servers and third party applications that read or write SAP data. When SAP moves to the cloud, whether self-managed or under RISE with SAP, these systems need to move with it or close to it, otherwise interfaces slow down and the data centre cannot close. We migrate them in the same plan, in the same region as SAP where possible, and reconnect them to the new SAP landscape.",
      "items": [
        "We map which non-SAP systems exchange data with SAP and move them in waves that match the SAP cutover.",
        "Interface and file transfer servers are placed near SAP to keep latency low.",
        "SAP databases themselves move with SAP tools such as Software Update Manager with Database Migration Option, not generic database tools.",
        "Where reporting databases duplicate SAP data, we look at whether SAP Business Data Cloud or Databricks can replace them."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Inventory and dependency map of servers, databases and applications",
        "7 Rs strategy for every workload",
        "Wave plan with target designs and cutover runbooks",
        "Migrated and tested databases and applications",
        "Decommissioning plan for source systems",
        "Handover documentation and optimisation recommendations"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "What are the 7 Rs?",
          "They are seven migration strategies: retire, retain, rehost, relocate, repurchase, replatform and refactor. Each workload gets the one that fits its value, risk and future. For large migrations, rehosting or replatforming first and modernising later is usually safer than refactoring during the move."
        ],
        [
          "Can we move Oracle databases to the cloud without changing them?",
          "Yes. You can run Oracle on cloud virtual machines, or use Oracle Database@AWS, Oracle Database@Azure or Oracle Database@Google Cloud, which run Oracle services inside the hyperscaler's data centres. All three are available in regions in India. Licensing needs to be checked for each option."
        ],
        [
          "Can we move from Oracle or SQL Server to PostgreSQL?",
          "Often, yes. Native tools on each cloud convert schemas and code to PostgreSQL and replicate the data. The application still needs testing, and some packaged software only supports specific databases, so we check vendor support first."
        ],
        [
          "How much downtime should we expect?",
          "With continuous replication, the source keeps running while data copies, and downtime is limited to the final cutover. The exact window depends on the application and we measure it in rehearsals."
        ],
        [
          "What happens to our SQL Server 2016 databases?",
          "SQL Server 2016 extended support ended in July 2026. Options include upgrading during the migration, moving to a managed service such as Azure SQL Managed Instance or Amazon RDS for SQL Server, or using Extended Security Updates while you plan."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "Infrastructure Modernisation",
        "infrastructure-modernisation"
      ],
      [
        "Advise & Plan",
        "Cloud Strategy & Readiness Assessment",
        "cloud-readiness-assessment"
      ],
      [
        "Build & Connect",
        "Hosting for Non-SAP Workloads",
        "non-sap-workload-hosting"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "AWS Prescriptive Guidance: the 7 Rs migration strategies",
        "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
      ],
      [
        "Microsoft Lifecycle: SQL Server 2016",
        "https://learn.microsoft.com/en-us/lifecycle/products/sql-server-2016"
      ],
      [
        "Oracle: Multicloud regional availability",
        "https://docs.oracle.com/iaas/Content/multicloud/regions.htm"
      ],
      [
        "Microsoft Learn: About Azure Migrate",
        "https://learn.microsoft.com/azure/migrate/migrate-services-overview"
      ],
      [
        "Google Cloud: Database Migration Service supported databases",
        "https://docs.cloud.google.com/database-migration/docs/supported-databases"
      ],
      [
        "AWS: Application Migration Service is now AWS Transform MGN",
        "https://aws.amazon.com/about-aws/whats-new/2026/06/aws-transform-mgn-rebrand/"
      ],
      [
        "AWS: Migration Hub availability change and AWS Transform",
        "https://docs.aws.amazon.com/migrationhub/latest/ug/migrationhub-availability-change.html"
      ],
      [
        "AWS: DMS Schema Conversion with generative AI",
        "https://aws.amazon.com/about-aws/whats-new/2026/03/aws-dms-schema-conversion-with-genai"
      ],
      [
        "Microsoft: Windows Server 2016 end of support",
        "https://www.microsoft.com/windows-server/blog"
      ]
    ]
  },
  {
    "slug": "infrastructure-modernisation",
    "label": "Infrastructure Modernisation",
    "group": "Migrate & modernise",
    "description": "We help you move beyond servers you have to patch and babysit, towards managed services, containers and serverless on AWS, Microsoft Azure and Google Cloud.",
    "crumb": "Migrate & Modernise",
    "eyebrow": "Cloud Infrastructure · Migrate & Modernise",
    "h1": [
      "Modernise your infrastructure,",
      "from virtual machines to managed services."
    ],
    "lede": "We help you move beyond servers you have to patch and babysit, towards managed services, containers and serverless on AWS, Microsoft Azure and Google Cloud. The result is infrastructure that scales with demand, costs less effort to run, and lets you exit your data centre on a plan you control.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "82%",
        "Of container users run Kubernetes in production"
      ],
      [
        "98%",
        "Of organisations surveyed use cloud native techniques"
      ],
      [
        "Jan 2027",
        "Windows Server 2016 extended support ends"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why modernise, not just move",
      "lede": "Moving virtual machines to the cloud as they are is often the right first step, but it keeps the same patching, sizing and operating work you had before. Many workloads can run with far less effort on managed databases, container platforms or serverless functions, where the cloud provider runs the underlying servers. Operating system support dates, such as the end of Windows Server 2016 extended support in January 2027 and data centre contract renewals give a natural moment to decide which path each workload should take.",
      "items": [
        [
          "Less undifferentiated work",
          "Managed services take over patching, backups and failover. Your team spends time on applications instead of servers."
        ],
        [
          "Scale with demand",
          "Containers and serverless scale up for month end or seasonal peaks and back down afterwards, instead of being sized for the worst day."
        ],
        [
          "Data centre exit on your terms",
          "Managed VMware services let you leave the data centre quickly, then modernise workloads at your own pace."
        ],
        [
          "Faster, safer change",
          "Automated builds and infrastructure as code make releases repeatable and environments consistent."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We assess your estate and move each workload to the most suitable modern platform.",
      "items": [
        [
          "01",
          "Modernisation assessment",
          "We review applications, servers and data centre contracts and score each workload for modernisation potential. You get a roadmap that balances speed, risk and effort."
        ],
        [
          "02",
          "Data centre exit",
          "We plan and run the move out of your data centre, using managed VMware services where a quick exit matters. Workloads then modernise in the cloud."
        ],
        [
          "03",
          "Managed databases",
          "We move self-managed databases on virtual machines to managed database services with built-in backup and high availability."
        ],
        [
          "04",
          "Containers and Kubernetes",
          "We containerise suitable applications and run them on managed Kubernetes or serverless container platforms, with secure build pipelines."
        ],
        [
          "05",
          "Serverless and event driven",
          "We replace scheduled jobs, file processing and integration scripts with serverless functions and managed messaging, so you pay for use, not idle servers."
        ],
        [
          "06",
          "Infrastructure as code",
          "We define networks, platforms and services in code, so environments can be rebuilt, reviewed and audited."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We collect inventory and usage data, interview application owners and identify quick wins and harder cases.",
          "2 to 4 weeks"
        ],
        [
          "Design the target platforms",
          "We design the landing zone, container platform, managed data services and pipelines your workloads will use.",
          "2 to 4 weeks"
        ],
        [
          "Pilot",
          "We modernise one or two representative workloads end to end to prove the patterns and tooling.",
          "4 to 6 weeks"
        ],
        [
          "Scale out",
          "We modernise the remaining workloads in waves, reusing proven patterns and automation.",
          "Ongoing, in waves"
        ],
        [
          "Retire and optimise",
          "We decommission old servers and data centre space, then tune capacity and spend.",
          "2 to 4 weeks per wave"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Modern platforms on each cloud",
      "lede": "The native services we use when moving workloads off traditional servers.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Managed Kubernetes",
          "Amazon Elastic Kubernetes Service (EKS)",
          "Azure Kubernetes Service (AKS)",
          "Google Kubernetes Engine (GKE)"
        ],
        [
          "Serverless containers",
          "Amazon ECS with AWS Fargate",
          "Azure Container Apps",
          "Cloud Run"
        ],
        [
          "Serverless functions",
          "AWS Lambda",
          "Azure Functions",
          "Cloud Run functions"
        ],
        [
          "Managed VMware for data centre exit",
          "Amazon Elastic VMware Service",
          "Azure VMware Solution",
          "Google Cloud VMware Engine"
        ],
        [
          "Moving VMs into containers",
          "AWS App2Container",
          "Azure Migrate",
          "Migrate to Containers"
        ],
        [
          "Managed relational databases",
          "Amazon RDS and Amazon Aurora",
          "Azure SQL Database and Azure Database for PostgreSQL",
          "Cloud SQL and AlloyDB for PostgreSQL"
        ],
        [
          "Infrastructure as code",
          "AWS CloudFormation",
          "Bicep",
          "Infrastructure Manager"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Modernising around SAP",
      "lede": "SAP systems themselves run on SAP HANA certified virtual machines, or under RISE with SAP where SAP runs the infrastructure, so they are not candidates for containers or serverless. The infrastructure around SAP is. Interface servers, file transfer jobs, custom portals, reporting databases and scheduled scripts can move to managed and serverless services, and new extensions can be built on SAP BTP or native cloud services instead of inside the ERP core. This keeps the SAP core clean, which makes S/4HANA upgrades easier.",
      "items": [
        "SAP application and HANA database servers stay on certified infrastructure or move under RISE with SAP.",
        "Custom file processing and integration scripts can become serverless functions connected to SAP Integration Suite.",
        "Side-by-side extensions on SAP BTP or cloud native services keep custom code out of the ERP core.",
        "Containers suit web portals and APIs that sit in front of SAP, with managed identity and secrets."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Modernisation assessment and workload roadmap",
        "Target platform designs for containers, serverless and managed data",
        "Data centre exit plan and timeline",
        "Modernised pilot workloads with reusable patterns",
        "Infrastructure as code and deployment pipelines",
        "Decommissioning and optimisation report"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Should we modernise during migration or after?",
          "For large estates, it is usually safer to move first and modernise afterwards, because changing everything at once raises risk. Workloads with a clear business case, or that are already being rewritten, can be modernised during the move."
        ],
        [
          "Do we need Kubernetes?",
          "Not always. Kubernetes suits teams running many services that need fine control. Serverless container platforms such as Cloud Run, Azure Container Apps or Amazon ECS with AWS Fargate are simpler for many applications. We recommend the lightest option that meets your needs."
        ],
        [
          "How do we exit our data centre quickly?",
          "Managed VMware services on each cloud let you move VMware workloads without converting them, which shortens the exit. Once in the cloud, workloads can be modernised to native services over time."
        ],
        [
          "What about Windows Server 2016?",
          "Extended support for Windows Server 2016 ends on 12 January 2027. Modernisation is a good moment to upgrade the operating system, move to Linux, or move the workload to a managed service that removes the operating system from your responsibility."
        ],
        [
          "Can SAP run on containers or serverless?",
          "No. SAP application servers and SAP HANA run on certified infrastructure or under RISE with SAP. Modernisation applies to the interfaces, extensions and systems around SAP."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "Database & Application Migration",
        "database-application-migration"
      ],
      [
        "Build & Connect",
        "Infrastructure as Code",
        "infrastructure-as-code"
      ],
      [
        "Data, AI & Skills",
        "DevOps & Automation",
        "devops-automation"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "CNCF: Annual Cloud Native Survey 2025 results",
        "https://www.cncf.io/announcements/2026/01/20/kubernetes-established-as-the-de-facto-operating-system-for-ai-as-production-use-hits-82-in-2025-cncf-annual-cloud-native-survey/"
      ],
      [
        "Microsoft: Planning ahead for Windows Server 2016 end of support",
        "https://www.microsoft.com/windows-server/blog"
      ],
      [
        "AWS: General availability of Amazon Elastic VMware Service",
        "https://aws.amazon.com/about-aws/whats-new/2025/08/aws-general-availability-amazon-elastic-evs"
      ],
      [
        "Google Cloud: Cloud Run functions release notes",
        "https://docs.cloud.google.com/functions/docs/release-notes"
      ],
      [
        "Google Cloud: Migration products including Migrate to Containers",
        "https://docs.cloud.google.cn/docs/migration?hl=en"
      ],
      [
        "AWS Prescriptive Guidance: Replatform with App2Container and managed services",
        "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
      ],
      [
        "Microsoft Learn: Azure Migrate web apps to App Service and AKS",
        "https://learn.microsoft.com/azure/migrate/migrate-services-overview"
      ]
    ]
  },
  {
    "slug": "infrastructure-as-code",
    "label": "Infrastructure Provisioning as Code",
    "group": "Build & connect",
    "description": "We define your cloud networks, servers, storage and security settings in Terraform, Bicep or AWS CloudFormation, and use the SAP deployment tools from AWS,…",
    "crumb": "Build & Connect",
    "eyebrow": "Cloud Infrastructure · Build & Connect",
    "h1": [
      "Cloud and SAP infrastructure, written as code,",
      "built the same way every time."
    ],
    "lede": "We define your cloud networks, servers, storage and security settings in Terraform, Bicep or AWS CloudFormation, and use the SAP deployment tools from AWS, Microsoft and Google Cloud to build SAP landscapes. Every environment is reviewed, versioned and repeatable, so test matches production and changes are traceable.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "31 Mar 2026",
        "Google Cloud Deployment Manager end of support date"
      ],
      [
        "2 tools",
        "Terraform builds, Ansible configures, in Microsoft's SAP automation framework"
      ],
      [
        "24 TB",
        "Largest single SAP HANA instance AWS Launch Wizard deploys"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why build cloud infrastructure from code",
      "lede": "When infrastructure is built by hand in a console, each environment drifts a little from the last. Firewall rules, disk layouts and tags differ between development, quality and production, nobody can say exactly what changed, and rebuilding after a failure depends on memory. For SAP this matters more than usual: HANA storage layouts, cluster settings and network rules must match SAP and hyperscaler guidance, and a quality system that does not match production gives misleading test results.",
      "items": [
        [
          "Drift between environments",
          "Manual changes pile up, so systems that should be identical are not. Code makes the target state explicit and lets you detect drift."
        ],
        [
          "Slow, error-prone builds",
          "Building an SAP landscape by hand takes days of checklist work. Templates and pipelines cut that to a repeatable run."
        ],
        [
          "No audit trail",
          "Console changes leave little record of who changed what and why. Code in version control gives you history, review and approval."
        ],
        [
          "Retiring tools",
          "Some older tools are being withdrawn, such as Google Cloud Deployment Manager. Moving to supported tooling avoids a forced migration later."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We design, write and hand over infrastructure code for your SAP and non-SAP estate on AWS, Microsoft Azure and Google Cloud.",
      "items": [
        [
          "01",
          "Landing zone as code",
          "We codify accounts, subscriptions or projects, networks, policies and logging for your landing zone. New workloads then start from an approved, consistent base."
        ],
        [
          "02",
          "SAP landscape automation",
          "We use AWS Launch Wizard for SAP, the SAP Deployment Automation Framework on Azure and Google Cloud Workload Manager guided deployment, or our own modules, to build SAP HANA and NetWeaver based systems. Each build follows the published reference architectures for that cloud."
        ],
        [
          "03",
          "Reusable modules",
          "We build or adopt tested modules, including Azure Verified Modules for Bicep and Terraform, for common patterns such as networks, VMs and storage. Teams reuse them instead of copying code."
        ],
        [
          "04",
          "Pipelines and state",
          "We set up pipelines that plan, review and apply changes, with remote state stored securely and locked. Changes reach production only after approval."
        ],
        [
          "05",
          "Policy and security checks",
          "We add automated checks for tagging, encryption, network exposure and naming before code is applied. Problems are caught in review, not after deployment."
        ],
        [
          "06",
          "Migration of existing estates",
          "We import hand-built resources into code and convert older templates, for example from Google Cloud Deployment Manager to Infrastructure Manager. You keep what runs today and gain control of it."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your current environments, tooling and team skills, and agree which IaC language and SAP deployment tool fit each cloud. We also list resources that already exist and need importing.",
          "1 to 2 weeks"
        ],
        [
          "Design",
          "We define the repository structure, module set, naming and tagging rules, state storage and approval flow. For SAP we agree the system sizes, high availability pattern and storage layout per environment.",
          "1 to 2 weeks"
        ],
        [
          "Build",
          "We write the modules and pipelines, deploy a first environment such as sandbox or development, and test rebuilds from scratch. SAP software installation is automated where the tooling supports it.",
          "3 to 6 weeks"
        ],
        [
          "Roll out",
          "We deploy the remaining environments from the same code with environment specific settings. Drift checks and policy checks run on every change.",
          "2 to 4 weeks"
        ],
        [
          "Hand over",
          "We document the code, run working sessions with your team and agree who owns which repositories. We can continue to run the pipelines under a managed service if you prefer.",
          "1 week"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Infrastructure as code tools on each cloud",
      "lede": "Each hyperscaler has its own native tooling, and Terraform works across all three.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Native template language",
          "AWS CloudFormation, AWS CDK",
          "Bicep, ARM templates",
          "Terraform via Infrastructure Manager"
        ],
        [
          "Managed Terraform runs",
          "Terraform with your own pipeline",
          "Terraform with your own pipeline",
          "Infrastructure Manager"
        ],
        [
          "Verified or reference modules",
          "AWS CloudFormation templates and AWS CDK constructs",
          "Azure Verified Modules (Bicep and Terraform)",
          "Google Cloud Terraform modules"
        ],
        [
          "Guided SAP deployment",
          "AWS Launch Wizard for SAP",
          "Azure Center for SAP solutions",
          "Workload Manager guided deployment automation"
        ],
        [
          "Open source SAP automation",
          "Launch Wizard APIs with CloudFormation",
          "SAP Deployment Automation Framework (Terraform and Ansible)",
          "Exported Terraform and Ansible from Workload Manager"
        ],
        [
          "Secrets for pipelines",
          "AWS Secrets Manager",
          "Azure Key Vault",
          "Secret Manager"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Infrastructure as code for SAP",
      "lede": "Where you run SAP yourself, on ECC or SAP S/4HANA with your own licences on cloud infrastructure, infrastructure as code gives you consistent HANA hosts, clusters and storage across every tier. Each hyperscaler offers SAP specific tooling: AWS Launch Wizard for SAP provisions and configures SAP HANA, NetWeaver, S/4HANA and BW/4HANA systems through CloudFormation, Microsoft's open source SAP Deployment Automation Framework uses Terraform for infrastructure and Ansible for configuration, and Google Cloud Workload Manager can deploy SAP systems and export the Terraform and Ansible it used. Under RISE with SAP the picture is different: SAP builds and runs the SAP systems on the hyperscaler you choose, so our code covers what you own around them, such as the hub network, connectivity, identity, BTP related resources and non-SAP workloads.",
      "items": [
        "Repeatable SAP HANA and NetWeaver builds for sandbox, quality and production",
        "High availability clusters and storage layouts that follow hyperscaler SAP guidance",
        "Rapid rebuilds of project, training or copy systems during S/4HANA moves",
        "Code for the customer owned side of RISE with SAP: hub network, peering and identity"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Agreed IaC standards: language per cloud, repository layout, naming and tagging",
        "Reusable modules for networks, compute, storage and SAP system tiers",
        "Deployment pipelines with plan review, approval and secure remote state",
        "Automated SAP landscape builds using the hyperscaler SAP deployment tools",
        "Policy and drift checks running on every change",
        "Runbooks, documentation and working sessions for your team"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Should we use Terraform or the native tool?",
          "Terraform suits teams that work across more than one cloud and want one language. Bicep on Azure and CloudFormation or CDK on AWS integrate closely with their platforms and need no separate state store. We recommend one primary tool per estate and help you choose based on your clouds and skills."
        ],
        [
          "Can you bring our existing hand-built resources under code?",
          "Yes. Terraform, Bicep and CloudFormation all support importing or describing existing resources. We import them in stages, confirm the code matches what is running, then manage changes only through code."
        ],
        [
          "Does this apply if we move to RISE with SAP?",
          "Partly. Under RISE with SAP, SAP provisions and runs the SAP systems and their infrastructure, so you do not write code for those VMs. You still own the landing zone, connectivity, identity and surrounding workloads, and those benefit from infrastructure as code."
        ],
        [
          "We use Google Cloud Deployment Manager. What now?",
          "Google ended support for Deployment Manager on 31 March 2026 and recommends moving to Infrastructure Manager, which runs Terraform. Google provides a conversion tool, and we help convert, test and cut over your configurations."
        ],
        [
          "Can the SAP software installation be automated too?",
          "Yes, within limits. AWS Launch Wizard for SAP and the SAP Deployment Automation Framework can install SAP software you supply, and Google Cloud Workload Manager can deploy SAP systems. Some steps, such as system copies or specific add-ons, may still need SAP Basis work."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Advise & Plan",
        "Landing Zone & Architecture Design",
        "landing-zone-architecture"
      ],
      [
        "Data, AI & Skills",
        "DevOps & Automation",
        "devops-automation"
      ],
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP Deployment Automation Framework overview, Microsoft Learn",
        "https://learn.microsoft.com/azure/sap/automation/deployment-framework"
      ],
      [
        "AWS Launch Wizard for SAP, AWS documentation",
        "https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html"
      ],
      [
        "Automating SAP deployments on Google Cloud",
        "https://docs.cloud.google.com/sap/docs/automation-for-sap"
      ],
      [
        "Cloud Deployment Manager deprecation, Google Cloud",
        "https://docs.cloud.google.com/deployment-manager/docs/deprecations"
      ],
      [
        "Infrastructure Manager locations, Google Cloud",
        "https://docs.cloud.google.com/infrastructure-manager/docs/locations"
      ],
      [
        "Azure Verified Modules overview",
        "https://azure.github.io/Azure-Verified-Modules/overview/"
      ]
    ]
  },
  {
    "slug": "network-connectivity-rise-btp",
    "label": "Network & Connectivity to RISE and BTP",
    "group": "Build & connect",
    "description": "We design and build the network between your offices, data centres, cloud accounts, the SAP managed RISE with SAP environment and SAP Business Technology…",
    "crumb": "Build & Connect",
    "eyebrow": "Cloud Infrastructure · Build & Connect",
    "h1": [
      "Private, resilient links to RISE with SAP,",
      "SAP BTP and the rest of your estate."
    ],
    "lede": "We design and build the network between your offices, data centres, cloud accounts, the SAP managed RISE with SAP environment and SAP Business Technology Platform. You get private connectivity sized for go-live and daily use, clear routing and DNS, and firewall rules agreed with SAP.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "9",
        "Connectivity patterns AWS documents for RISE with SAP"
      ],
      [
        "1.25 Gbps",
        "Per tunnel limit for Site-to-Site VPN into a RISE VPC"
      ],
      [
        "400 Gbps",
        "Top dedicated port on Direct Connect, ExpressRoute Direct, Interconnect"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why connectivity decides how RISE with SAP feels",
      "lede": "Under RISE with SAP, SAP runs your SAP Cloud ERP Private systems in its own managed network on AWS, Microsoft Azure or Google Cloud. Your users, interfaces, printers, file transfers and BTP applications all reach that network through links you own. If those links are undersized, single-path or routed over the internet without a plan, users see slow Fiori and SAP GUI sessions, migration data loads overrun, and interfaces fail at the worst time. From Sri Lanka there is no local hyperscaler region, so traffic travels to a region such as Mumbai, Hyderabad or Singapore, and the path matters.",
      "items": [
        [
          "SAP sets its side, you own yours",
          "SAP must approve peering and configure the RISE side. Your hub network, on-premises routing, gateways and firewalls are yours to design and run."
        ],
        [
          "Bandwidth for migration and go-live",
          "Data migration and replication need far more bandwidth than daily use. Temporary VPNs built without a plan often have to be rebuilt later."
        ],
        [
          "DNS and IP planning",
          "RISE uses private address ranges and a DNS subdomain delegated to SAP. Overlapping ranges or missed DNS setup block integrations."
        ],
        [
          "BTP is a separate connection",
          "SAP BTP runs outside the RISE network. It needs its own design using SAP Cloud Connector, public endpoints or SAP Private Link service."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We plan, build and test every link your SAP landscape depends on, and agree the details with SAP and your carriers.",
      "items": [
        [
          "01",
          "Connectivity design",
          "We choose between peering, transit hubs, VPN and private circuits for each path, based on bandwidth, resilience and security needs. The design covers future regions, accounts and systems, not only go-live."
        ],
        [
          "02",
          "Private circuits and VPN",
          "We set up AWS Direct Connect, Azure ExpressRoute or Google Cloud Interconnect with your carrier, and IPsec VPN for backup paths or smaller sites. We design for redundant paths and test failover."
        ],
        [
          "03",
          "Peering to RISE with SAP",
          "We build the hub network that peers with the SAP managed RISE network, through VPC or VNet peering, AWS Transit Gateway, Azure Virtual WAN or a transit VPC on Google Cloud. We handle the peering requests and settings with SAP."
        ],
        [
          "04",
          "IP addressing and DNS",
          "We plan non-overlapping address ranges and set up DNS so your systems resolve RISE host names, including the zone delegated to SAP. This avoids rework when new systems are added."
        ],
        [
          "05",
          "SAP BTP connectivity",
          "We install and configure SAP Cloud Connector, set up destinations, and use SAP Private Link service where BTP applications need private access to services in your own cloud account. Each integration gets the right path."
        ],
        [
          "06",
          "Firewalls and segmentation",
          "We define the ports and protocols SAP needs, such as RFC, HTTPS and HANA SQL, and apply them on your firewalls and security groups. Rules are documented and match what SAP sets on its side."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Discover",
          "We map users, sites, interfaces, data volumes and the SAP systems in scope, and confirm which hyperscaler and region host your RISE environment. We also record existing circuits and firewalls.",
          "1 to 2 weeks"
        ],
        [
          "Design",
          "We produce the network design: paths, bandwidth, IP plan, DNS, routing and firewall rules for RISE, BTP and other workloads. SAP reviews the parts that touch its environment.",
          "2 to 3 weeks"
        ],
        [
          "Order and build",
          "We order circuits through carriers, build the hub network and gateways as code, and raise peering requests with SAP. VPN backup paths are set up first so projects can start.",
          "4 to 12 weeks, mostly carrier lead time"
        ],
        [
          "Test",
          "We test latency, throughput, failover and name resolution from each site and integration. Results are measured against the agreed targets before migration starts.",
          "1 to 2 weeks"
        ],
        [
          "Operate",
          "We monitor links, tunnels and peering, and adjust bandwidth as usage grows. Changes follow your change process and are coordinated with SAP.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Connectivity building blocks on each cloud",
      "lede": "The native services we use to reach a RISE with SAP environment and SAP BTP on each hyperscaler.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Dedicated private circuit",
          "AWS Direct Connect",
          "Azure ExpressRoute, ExpressRoute Direct",
          "Dedicated Interconnect, Partner Interconnect"
        ],
        [
          "Encrypted VPN",
          "AWS Site-to-Site VPN",
          "Azure VPN Gateway",
          "HA VPN (Cloud VPN)"
        ],
        [
          "Link to the RISE network",
          "VPC peering, AWS Transit Gateway",
          "VNet peering, VPN VNet-to-VNet",
          "VPC Network Peering, transit VPC"
        ],
        [
          "Hub and global routing",
          "AWS Transit Gateway, AWS Cloud WAN, Direct Connect gateway",
          "Azure Virtual WAN, hub and spoke",
          "Cloud Router, transit VPC"
        ],
        [
          "Cloud to cloud links",
          "Direct Connect or VPN through a carrier",
          "ExpressRoute or VPN through a carrier",
          "Cross-Cloud Interconnect"
        ],
        [
          "Private access from SAP BTP",
          "SAP Private Link service with AWS PrivateLink",
          "SAP Private Link service with Azure Private Link",
          "SAP Private Link service with Private Service Connect"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "The SAP side of connectivity",
      "lede": "With RISE with SAP, SAP builds and runs the network that hosts your SAP Cloud ERP Private systems, inside its own account, subscription or project on the hyperscaler you choose. You connect to it from your own cloud network, and SAP approves and configures its side. Microsoft and AWS both describe peering from a customer hub as the preferred pattern, with on-premises sites reaching RISE through your existing ExpressRoute, Direct Connect or VPN. SAP BTP is separate: SAP recommends SAP Cloud Connector, which runs on your side and opens outbound-only tunnels, so you do not open inbound firewall ports. SAP Private Link service adds private connections from BTP Cloud Foundry or Kyma applications to services in your own AWS, Azure or Google Cloud account. If you run ECC or SAP S/4HANA yourself on cloud, the same principles apply, but you own both sides of the network.",
      "items": [
        "Peering design and requests agreed with SAP for the RISE network",
        "DNS integration with the subdomain delegated to SAP",
        "SAP Cloud Connector installed, made highly available and monitored",
        "SAP Private Link service set up for private BTP to cloud service access"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Network design covering sites, clouds, RISE with SAP and SAP BTP",
        "IP address plan, DNS design and routing tables",
        "Private circuits and VPN backup paths built and failover tested",
        "Hub network and peering to RISE built as code",
        "SAP Cloud Connector and SAP Private Link service configuration",
        "Firewall rule set, test report and operating runbook"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Do we need a private circuit, or is VPN enough?",
          "VPN suits smaller sites, backup paths and early project phases. AWS documents a limit of 1.25 Gbps per Site-to-Site VPN tunnel into a RISE VPC, so large user bases, migrations and replication usually justify Direct Connect, ExpressRoute or Interconnect. We size it from your actual traffic."
        ],
        [
          "Who configures the network inside RISE with SAP?",
          "SAP does. It owns the RISE network, approves peering requests and sets its firewall rules. We design and build your side, prepare the requests and settings SAP needs, and test the result with SAP."
        ],
        [
          "How do we connect SAP BTP to our RISE systems?",
          "SAP recommends SAP Cloud Connector, which creates outbound-only tunnels from your network to BTP. When BTP and RISE run on the same hyperscaler, traffic stays on that provider's network. We set up the connector, destinations and access rules."
        ],
        [
          "What is SAP Private Link service for?",
          "It gives applications on SAP BTP a private connection to services in your own AWS, Azure or Google Cloud account, without going over the internet. It is useful when a BTP application must reach a database, API or file service you host privately."
        ],
        [
          "Which region should our network connect to from Sri Lanka?",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka, so links run to a region such as Mumbai, Hyderabad or Singapore. The right choice depends on where your RISE environment and BTP subaccount are hosted. We measure latency from your sites before deciding."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "RISE with SAP: Cloud & Region Choice",
        "rise-cloud-region-choice"
      ],
      [
        "Advise & Plan",
        "Landing Zone & Architecture Design",
        "landing-zone-architecture"
      ],
      [
        "Build & Connect",
        "Identity & Single Sign-On",
        "identity-single-sign-on"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Decision tree on connectivity to RISE, AWS",
        "https://docs.aws.amazon.com/sap/latest/general/rise-decision-tree.html"
      ],
      [
        "SAP BTP with RISE on AWS",
        "https://docs.aws.amazon.com/sap/latest/general/rise-btp.html"
      ],
      [
        "Connectivity with SAP RISE, Microsoft Learn",
        "https://learn.microsoft.com/azure/sap/workloads/rise-integration-network"
      ],
      [
        "Network connectivity to RISE with SAP on Google Cloud",
        "https://docs.cloud.google.com/sap/docs/rise-connectivity"
      ],
      [
        "Direct Connect connection options, AWS",
        "https://docs.aws.amazon.com/directconnect/latest/UserGuide/connection_options.html"
      ],
      [
        "About ExpressRoute Direct, Microsoft Learn",
        "https://learn.microsoft.com/azure/expressroute/expressroute-erdirect-about"
      ],
      [
        "Dedicated Interconnect overview, Google Cloud",
        "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview"
      ],
      [
        "Connect SAP Private Link service to Google Cloud Private Service Connect",
        "https://developers.sap.com/tutorials/private-link-gcp.html"
      ],
      [
        "Explaining the SAP Cloud Connector, SAP Learning",
        "https://learning.sap.com/courses/implementing-sap-service-and-asset-manager/explaining-the-sap-cloud-connector"
      ]
    ]
  },
  {
    "slug": "identity-single-sign-on",
    "label": "Identity & Single Sign-On",
    "group": "Build & connect",
    "description": "We connect your corporate directory, usually Microsoft Entra ID, to SAP Cloud Identity Services, SAP Fiori, SAP BTP, SAP Cloud ERP and your cloud platforms.",
    "crumb": "Build & Connect",
    "eyebrow": "Cloud Infrastructure · Build & Connect",
    "h1": [
      "One identity for every user,",
      "from cloud consoles to SAP Fiori."
    ],
    "lede": "We connect your corporate directory, usually Microsoft Entra ID, to SAP Cloud Identity Services, SAP Fiori, SAP BTP, SAP Cloud ERP and your cloud platforms. Users sign in once with multi-factor authentication, accounts are created and removed automatically, and auditors can see who has access to what.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "99.22%",
        "Lower risk of account compromise with MFA, Microsoft research"
      ],
      [
        "2027",
        "End of mainstream maintenance for SAP Identity Management"
      ],
      [
        "2030",
        "End of extended maintenance for SAP Identity Management"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why identity needs attention in a cloud and SAP move",
      "lede": "Most organisations have grown separate user stores over time: Active Directory for Windows, local SAP user master records, BTP subaccount users and separate cloud console logins. Each new SAP Cloud ERP system, BTP application or hyperscaler account adds another place to create and remove users. People keep access after they leave, passwords get reused, and audits take weeks. A move to RISE with SAP or SAP BTP is the right moment to put one identity provider in charge and connect everything to it.",
      "items": [
        [
          "Too many logins",
          "Separate passwords for SAP GUI, Fiori, BTP and cloud consoles frustrate users and lead to weak password habits."
        ],
        [
          "Leavers keep access",
          "When accounts are removed by hand, they are often missed in one system. Automated provisioning closes that gap."
        ],
        [
          "SAP Identity Management is retiring",
          "SAP Identity Management mainstream maintenance ends in 2027, with extended maintenance to 2030. Customers need a successor for provisioning."
        ],
        [
          "Weak sign-in protection",
          "Passwords alone are easy to phish. Multi-factor authentication and conditional access sharply reduce account takeover."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We design and build identity and access for your SAP applications, cloud platforms and surrounding systems.",
      "items": [
        [
          "01",
          "Identity provider design",
          "We agree which directory is the source of truth, usually Microsoft Entra ID, and how SAP Cloud Identity Services connects to it as a proxy. The design covers employees, contractors, partners and service accounts."
        ],
        [
          "02",
          "Single sign-on to SAP",
          "We set up SAML or OpenID Connect sign-on to SAP Fiori, SAP GUI where supported, SAP BTP and SAP Cloud ERP through SAP Cloud Identity Services. Users sign in once with their corporate account."
        ],
        [
          "03",
          "Multi-factor and conditional access",
          "We enforce MFA and conditional access policies centrally in Microsoft Entra ID or your chosen provider. Rules can depend on device, location and risk, and apply to all connected SAP apps."
        ],
        [
          "04",
          "User provisioning",
          "We automate user and group provisioning from Entra ID into SAP Cloud Identity Services, and from there into SAP Cloud ERP, BTP and other SAP cloud apps. Joiners, movers and leavers flow through without manual tickets."
        ],
        [
          "05",
          "Cloud console access",
          "We connect AWS IAM Identity Center, Azure role-based access and Google Cloud to the same directory, with least privilege roles and just-in-time elevation for administrators."
        ],
        [
          "06",
          "SAP Identity Management successor",
          "We plan the move off SAP Identity Management to Microsoft Entra ID Governance and SAP Cloud Identity Services, following the migration guidance from Microsoft and SAP. Existing provisioning rules are mapped and tested."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your directories, SAP user stores, BTP subaccounts, cloud accounts and current provisioning. We list every application that needs sign-on and its supported protocols.",
          "1 to 2 weeks"
        ],
        [
          "Design",
          "We define the identity provider chain, attribute mapping, group to role mapping, MFA and conditional access policies, and the provisioning flows. Security and audit teams review the design.",
          "2 weeks"
        ],
        [
          "Build and pilot",
          "We configure trust between Entra ID and SAP Cloud Identity Services, connect a first set of SAP and cloud apps, and run a pilot with a small user group. Issues are fixed before wider rollout.",
          "3 to 5 weeks"
        ],
        [
          "Roll out",
          "We onboard the remaining applications and user groups in waves, switch on provisioning and retire local passwords where possible. Users get short guidance on the new sign-in.",
          "2 to 6 weeks"
        ],
        [
          "Govern",
          "We set up access reviews, sign-in monitoring and break-glass accounts, and hand over runbooks. Ongoing changes can run under our managed service.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Identity services on each cloud",
      "lede": "The native identity services we connect to your corporate directory and to SAP.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Workforce sign-on to the cloud",
          "AWS IAM Identity Center",
          "Microsoft Entra ID",
          "Cloud Identity, Workforce Identity Federation"
        ],
        [
          "Federation with an external provider",
          "IAM Identity Center with external identity provider",
          "Microsoft Entra ID federation and B2B",
          "Workforce Identity Federation"
        ],
        [
          "Multi-factor and conditional access",
          "IAM Identity Center MFA",
          "Microsoft Entra multifactor authentication, Conditional Access",
          "2-Step Verification, Context-Aware Access"
        ],
        [
          "Just-in-time privileged access",
          "IAM Identity Center permission sets with an approval workflow",
          "Microsoft Entra Privileged Identity Management",
          "Privileged Access Manager"
        ],
        [
          "Managed Active Directory",
          "AWS Managed Microsoft AD",
          "Microsoft Entra Domain Services",
          "Managed Service for Microsoft Active Directory"
        ],
        [
          "Secrets and keys",
          "AWS Secrets Manager, AWS KMS",
          "Azure Key Vault",
          "Secret Manager, Cloud KMS"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Identity for SAP Fiori, BTP and SAP Cloud ERP",
      "lede": "SAP Cloud Identity Services is the centre of SAP's identity strategy. Its Identity Authentication service handles sign-on for SAP cloud applications and BTP, and its Identity Provisioning service creates users in connected SAP systems. Microsoft recommends that when Entra ID is your main directory, BTP trusts Identity Authentication, which in turn federates to Entra ID as the corporate identity provider, so MFA and conditional access are enforced in one place. For SAP Fiori on ECC or SAP S/4HANA, including systems run by SAP under RISE with SAP, SAML sign-on can be configured with Entra ID. Microsoft also documents provisioning to SAP S/4HANA on-premise through SAP Cloud Identity Services and SAP Cloud Connector, and to ECC through its provisioning agent. Authorisations stay in SAP roles and BTP role collections, mapped from directory groups.",
      "items": [
        "Entra ID federated to SAP Cloud Identity Services for BTP and SAP cloud apps",
        "SAML sign-on to SAP Fiori and SAP NetWeaver based systems",
        "Automated provisioning to SAP Cloud ERP, BTP and SAP S/4HANA",
        "Directory groups mapped to SAP roles and BTP role collections"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Identity architecture covering directory, SAP Cloud Identity Services and cloud platforms",
        "Single sign-on configured for SAP Fiori, SAP BTP, SAP Cloud ERP and other apps",
        "MFA and conditional access policies with break-glass procedures",
        "Automated joiner, mover and leaver provisioning flows",
        "Least privilege and just-in-time access for cloud administrators",
        "SAP Identity Management transition plan, runbooks and access review setup"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Do we need SAP Cloud Identity Services if we already have Entra ID?",
          "For SAP cloud applications such as SuccessFactors, an Identity Authentication tenant is already part of the setup. For BTP you can federate directly to Entra ID, but Microsoft recommends going through Identity Authentication because it centralises configuration across subaccounts. Entra ID remains the source of users and sign-in policy."
        ],
        [
          "Can users sign in to SAP Fiori with their Microsoft account?",
          "Yes. SAP Fiori on SAP NetWeaver supports SAML sign-on, and Microsoft publishes a tutorial for configuring it with Entra ID. Users then sign in with the same account and MFA they use for Microsoft 365."
        ],
        [
          "What replaces SAP Identity Management?",
          "SAP Identity Management mainstream maintenance ends in 2027, with extended maintenance to 2030. SAP positions SAP Cloud Identity Services as its strategic direction, and Microsoft and SAP have published guidance on moving provisioning scenarios to Microsoft Entra. We assess your current rules and plan the move."
        ],
        [
          "Does this change under RISE with SAP?",
          "SAP runs the systems and infrastructure under RISE with SAP, but user identity, sign-on and authorisations remain your responsibility. We configure sign-on and provisioning for your RISE systems, coordinating with SAP where system settings are needed."
        ],
        [
          "Does identity data fall under Sri Lanka's data protection law?",
          "Yes, names, email addresses and sign-in logs are personal data. The core obligations of Sri Lanka's Personal Data Protection Act No. 9 of 2022 apply from 1 January 2027. We help you limit the attributes shared between systems and keep sign-in logs under control."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Run & Optimise",
        "Cloud Security & Compliance",
        "cloud-security-compliance"
      ],
      [
        "Build & Connect",
        "Network & Connectivity to RISE and BTP",
        "network-connectivity-rise-btp"
      ],
      [
        "Data, AI & Skills",
        "Microsoft 365 & Copilot with SAP",
        "microsoft-365-copilot-sap"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Manage access to your SAP applications, Microsoft Learn",
        "https://learn.microsoft.com/en-us/entra/id-governance/sap"
      ],
      [
        "Using Microsoft Entra ID to secure access to SAP platforms, Microsoft Learn",
        "https://learn.microsoft.com/entra/fundamentals/scenario-azure-first-sap-identity-integration"
      ],
      [
        "SAP Fiori SSO with Microsoft Entra ID, Microsoft Learn",
        "https://learn.microsoft.com/en-us/entra/identity/saas-apps/sap-fiori-tutorial"
      ],
      [
        "Preparing for SAP Identity Management's end of maintenance in 2027, SAP Community",
        "https://blogs.sap.com/t5/technology-blogs-by-sap/preparing-for-sap-identity-management-s-end-of-maintenance-in-2027/ba-p/13596101"
      ],
      [
        "How effective is multifactor authentication at deterring cyberattacks, Microsoft Research",
        "https://www.microsoft.com/research/publication/how-effective-is-multifactor-authentication-at-deterring-cyberattacks/"
      ],
      [
        "Privileged Access Manager overview, Google Cloud",
        "https://docs.cloud.google.com/iam/docs/pam-overview"
      ],
      [
        "Single sign-on with SAP Cloud Identity Services and Microsoft Entra, AWS",
        "https://docs.aws.amazon.com/sap/latest/general/sso-entra.html"
      ],
      [
        "Data protection compliance regime takes effect on 1 Jan 2027, Daily FT",
        "https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776"
      ]
    ]
  },
  {
    "slug": "non-sap-workload-hosting",
    "label": "Hosting for Non-SAP Workloads",
    "group": "Build & connect",
    "description": "SAP rarely runs alone. We host Odoo, HR systems, middleware, file servers, websites and databases on AWS, Azure or Google Cloud, next to your SAP landscape.",
    "crumb": "Build & Connect",
    "eyebrow": "Cloud Infrastructure · Build & Connect",
    "h1": [
      "The systems around SAP,",
      "hosted properly in the same cloud."
    ],
    "lede": "SAP rarely runs alone. We host the applications around it, such as Odoo, HR systems, integration middleware, file servers, EDI gateways, websites and databases, on AWS, Microsoft Azure or Google Cloud, close to your SAP landscape. They get the same security, backup, monitoring and network design as SAP, instead of living on ageing servers in a back room.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "4",
        "Azure regions in India: Pune, Chennai, Mumbai, Hyderabad"
      ],
      [
        "All X12",
        "EDI transaction sets supported by AWS B2B Data Interchange"
      ],
      [
        "1 Jan 2027",
        "Core duties of Sri Lanka's data protection law apply"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why the workloads around SAP matter",
      "lede": "When SAP moves to RISE with SAP or to cloud infrastructure, the systems that feed it often stay behind: an EDI server talking to customers, a file share used for bank files, an integration server, an HR or payroll system, a company website and a few departmental databases. These are often the least patched and least backed up systems in the estate, and every interface to SAP now crosses a long network path. Moving them to the same cloud and region, on a planned design, cuts latency to SAP, removes hardware risk and puts them under the same controls.",
      "items": [
        [
          "Ageing servers",
          "Many surrounding systems run on hardware and operating systems near end of support. A failure there can stop orders, payroll or bank files reaching SAP."
        ],
        [
          "Interfaces across long links",
          "If SAP is in a cloud region and its interfaces are still on-premises, every call crosses a WAN link. Hosting both in the same region reduces latency and failure points."
        ],
        [
          "Uneven security and backup",
          "Smaller systems often miss patching, MFA and tested backups. Bringing them into a governed landing zone applies the same standards everywhere."
        ],
        [
          "Personal data on scattered servers",
          "HR, CRM and website systems hold personal data. Sri Lanka's Personal Data Protection Act core duties apply from 1 January 2027, and they cover where and how that data is kept."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We assess, move and run the non-SAP applications that support your business and your SAP landscape.",
      "items": [
        [
          "01",
          "Odoo hosting",
          "We host Odoo on your own cloud account, on virtual machines or containers with a managed PostgreSQL database, when you need more control than Odoo Online or Odoo.sh. We set up backups, upgrades, monitoring and integration with SAP where both run side by side."
        ],
        [
          "02",
          "HR and business applications",
          "We host or connect applications such as MIHCM and other line of business systems, using the deployment model the vendor supports. Identity, network and backup follow the same design as the rest of your estate."
        ],
        [
          "03",
          "Integration middleware",
          "We host integration servers and message queues, or move them to managed services such as SAP Integration Suite, Azure Logic Apps, Amazon SQS or Google Cloud Pub/Sub. Interfaces to SAP are documented and monitored."
        ],
        [
          "04",
          "EDI and B2B exchange",
          "We set up AS2 and SFTP exchange with trading partners, using AWS Transfer Family with AWS B2B Data Interchange, Azure Logic Apps integration accounts, or your EDI software on cloud VMs. Messages are translated and passed to SAP as IDocs or API calls."
        ],
        [
          "05",
          "File servers and shares",
          "We replace on-premises file servers with managed SMB and NFS file services joined to your directory. Shares used by SAP interfaces, such as bank or print files, are placed close to the SAP systems."
        ],
        [
          "06",
          "Websites and databases",
          "We host company websites, portals and departmental databases on managed web, container and database services. Patching, scaling and backups are handled by the platform or by us."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Inventory",
          "We list each application, its servers, data, users, interfaces to SAP and vendor support terms. We note which ones hold personal data and their recovery needs.",
          "1 to 2 weeks"
        ],
        [
          "Decide the target",
          "For each workload we choose to rehost on VMs, move to a managed service, replace with SaaS or retire. Vendor supported deployment options guide the choice.",
          "1 to 2 weeks"
        ],
        [
          "Build the platform",
          "We extend your landing zone with the networks, identity, backup and monitoring these workloads need, in the same region as SAP where it helps. Everything is built as code.",
          "2 to 4 weeks"
        ],
        [
          "Migrate in waves",
          "We move workloads in small groups, test interfaces to SAP and with users, then cut over in agreed windows. Old servers stay available until each move is signed off.",
          "2 to 8 weeks per wave"
        ],
        [
          "Run",
          "We hand over runbooks or run the workloads under our managed service, with patching, backup checks and monitoring. Costs are reviewed and rightsized after the first months.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native services for common non-SAP workloads",
      "lede": "The managed services we typically use for each type of workload on each cloud.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Virtual machines for packaged apps",
          "Amazon EC2",
          "Azure Virtual Machines",
          "Compute Engine"
        ],
        [
          "Managed PostgreSQL, for example Odoo",
          "Amazon RDS for PostgreSQL, Amazon Aurora",
          "Azure Database for PostgreSQL flexible server",
          "Cloud SQL for PostgreSQL, AlloyDB"
        ],
        [
          "Managed SQL Server",
          "Amazon RDS for SQL Server",
          "Azure SQL Database, Azure SQL Managed Instance",
          "Cloud SQL for SQL Server"
        ],
        [
          "Windows file shares",
          "Amazon FSx for Windows File Server",
          "Azure Files",
          "Google Cloud NetApp Volumes"
        ],
        [
          "EDI and B2B exchange",
          "AWS Transfer Family, AWS B2B Data Interchange",
          "Azure Logic Apps with integration account",
          "Partner EDI software on Compute Engine"
        ],
        [
          "Integration and messaging",
          "Amazon SQS, Amazon EventBridge",
          "Azure Logic Apps, Azure Service Bus",
          "Application Integration, Pub/Sub"
        ],
        [
          "Websites and containers",
          "AWS Amplify Hosting, Amazon ECS",
          "Azure App Service, Azure Kubernetes Service",
          "Cloud Run, Google Kubernetes Engine"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Keeping the surrounding systems close to SAP",
      "lede": "Under RISE with SAP, SAP hosts and runs your SAP Cloud ERP Private systems on the hyperscaler and region you choose, but it does not host your other applications. Placing EDI gateways, file shares, integration servers and databases in your own account on the same hyperscaler and region, connected to RISE by peering, keeps interface traffic short and private. If you run ECC or SAP S/4HANA yourself on cloud, these workloads sit in the same landing zone as SAP. Either way, we design the interfaces: IDocs and RFC for EDI and file based flows, OData and APIs for portals and apps, and SAP Integration Suite where integration should run on SAP BTP. With no hyperscaler region in Sri Lanka, we help you choose a region such as Mumbai, Hyderabad or Singapore that suits both SAP and your other systems.",
      "items": [
        "Same hyperscaler and region as RISE with SAP or your own SAP systems",
        "Private peering between your workload network and SAP",
        "Interfaces documented and monitored end to end, including IDoc and API flows",
        "Shared identity, backup and security controls across SAP and non-SAP systems"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Inventory of non-SAP workloads with a target decision for each",
        "Landing zone extension for the workloads, built as code",
        "Migrated workloads with tested interfaces to SAP",
        "Backup, monitoring and patching set up and verified",
        "Data protection notes covering where personal data is stored",
        "Runbooks and an agreed operating model"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Why host Odoo ourselves instead of using Odoo Online?",
          "Odoo offers Odoo Online, Odoo.sh and on-premise deployment. Hosting on your own cloud account suits you when you need custom modules, direct database access, specific data location or close integration with SAP and other systems. We help you choose based on those needs."
        ],
        [
          "Can our EDI run in the cloud?",
          "Yes. AWS Transfer Family supports AS2 and SFTP and works with AWS B2B Data Interchange for X12 translation, and Azure Logic Apps supports AS2, X12 and EDIFACT through integration accounts. If you use a specific EDI product, we can host it on cloud VMs instead."
        ],
        [
          "Does RISE with SAP include hosting for our other applications?",
          "No. RISE with SAP covers SAP's own systems that SAP runs for you. Your other applications need their own hosting, which we set up in your cloud account and connect privately to the RISE environment."
        ],
        [
          "Which region should we use from Sri Lanka?",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka. India regions include Mumbai and Hyderabad on AWS, Pune, Chennai, Mumbai and Hyderabad on Azure, and Mumbai and Delhi on Google Cloud, with Singapore also available. We usually place these workloads in the same region as SAP."
        ],
        [
          "Do we have to move everything at once?",
          "No. We move workloads in waves, starting with those that support SAP interfaces or run on the oldest hardware. Each move is tested and signed off before the old server is switched off."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Migrate & Modernise",
        "Infrastructure Modernisation",
        "infrastructure-modernisation"
      ],
      [
        "Migrate & Modernise",
        "Database & Application Migration",
        "database-application-migration"
      ],
      [
        "Run & Optimise",
        "Managed Cloud Operations",
        "managed-cloud-operations"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Azure regions list, Microsoft Learn",
        "https://learn.microsoft.com/azure/reliability/regions-list"
      ],
      [
        "AWS B2B Data Interchange supports all X12 transaction sets, AWS",
        "https://aws.amazon.com/about-aws/whats-new/2024/11/aws-b-2-b-data-interchange-x12-transaction-sets"
      ],
      [
        "AWS Transfer Family custom directories for AS2 files, AWS",
        "https://aws.amazon.com/about-aws/whats-new/2025/01/aws-transfer-family-custom-directory-locations-as2-files"
      ],
      [
        "Automate B2B messages with Azure Logic Apps, Microsoft Learn",
        "https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-enterprise-integration-b2b"
      ],
      [
        "Odoo source install documentation",
        "https://www.odoo.com/documentation/latest/administration/on_premise/source.html"
      ],
      [
        "Data protection compliance regime takes effect on 1 Jan 2027, Daily FT",
        "https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776"
      ],
      [
        "Google Cloud NetApp Volumes Active Directory integration",
        "https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/about-ad"
      ],
      [
        "Infrastructure Manager locations incl. Mumbai and Delhi, Google Cloud",
        "https://docs.cloud.google.com/infrastructure-manager/docs/locations"
      ],
      [
        "AWS Launch Wizard in Hyderabad Region, AWS",
        "https://aws.amazon.com/about-aws/whats-new/2023/07/aws-launch-wizard-hyderabad-dubai-regions"
      ]
    ]
  },
  {
    "slug": "managed-cloud-operations",
    "label": "Managed Cloud Operations",
    "group": "Run & optimise",
    "description": "We run day to day operations for SAP and non-SAP workloads on AWS, Microsoft Azure and Google Cloud: monitoring, patching, backup checks, incident response…",
    "crumb": "Run & Optimise",
    "eyebrow": "Cloud Infrastructure · Run & Optimise",
    "h1": [
      "Your SAP and cloud estate, watched,",
      "patched and kept running every day."
    ],
    "lede": "We run day to day operations for SAP and non-SAP workloads on AWS, Microsoft Azure and Google Cloud: monitoring, patching, backup checks, incident response and SAP Basis. You get agreed service levels, clear reporting and a team that knows both the cloud platform and the SAP stack on top of it.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "2nd Tuesday",
        "SAP Security Patch Day, every month"
      ],
      [
        "5 min",
        "Default HANA metric interval in Google Cloud's Agent for SAP"
      ],
      [
        "6",
        "Provider types in Azure Monitor for SAP solutions"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why cloud operations need a dedicated team",
      "lede": "Moving SAP to the cloud removes hardware work, but it does not remove operations. Someone still has to watch HANA memory and replication, apply SAP security notes and operating system patches, prove that backups restore, and respond when a job or interface fails at night. In a hybrid estate with RISE with SAP, SAP Business Technology Platform, integration services and non-SAP systems, those tasks are split across several providers, and gaps appear where responsibilities meet.",
      "items": [
        [
          "Alerts nobody owns",
          "Cloud tools raise plenty of alerts. Without runbooks and an owner, real incidents get lost among noise."
        ],
        [
          "Patching falls behind",
          "SAP publishes security notes every month and operating systems need regular updates. Skipped cycles build up risk and make later upgrades harder."
        ],
        [
          "Backups that are never tested",
          "A backup job that reports success is not the same as a database you can restore within your target time."
        ],
        [
          "Split responsibilities",
          "Under RISE with SAP, SAP runs the infrastructure and Basis, while you still own integrations, identity, extensions and surrounding workloads. Those boundaries need managing."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We take on the run tasks your team should not have to handle alone, with clear scope and service levels.",
      "items": [
        [
          "01",
          "Monitoring and alerting",
          "We set up full stack monitoring across infrastructure, operating system, database and SAP application layers using native cloud tools. Alerts are tuned and linked to runbooks so the right person acts on them."
        ],
        [
          "02",
          "Patching and updates",
          "We plan and apply operating system patches, SAP kernel updates and SAP security notes in agreed maintenance windows. Each cycle is tested on non-production first and recorded."
        ],
        [
          "03",
          "Backup checks and restore tests",
          "We check that HANA and file backups complete, are retained correctly and are stored away from the source system. We run scheduled restore tests and report the results."
        ],
        [
          "04",
          "Incident and problem management",
          "We respond to incidents within agreed times, restore service and find the root cause. Repeat problems are tracked until they are fixed."
        ],
        [
          "05",
          "SAP Basis on cloud",
          "For ECC, SAP S/4HANA or other SAP systems that you run on your own cloud subscription, we provide Basis support: system copies, transports, job monitoring, performance tuning and housekeeping. For RISE with SAP customers we handle the tasks that stay with you and work with SAP on the rest."
        ],
        [
          "06",
          "Reporting and service reviews",
          "You get monthly reports on availability, incidents, changes, patch status and backup results. We review them with you and agree improvements."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Discovery and scope",
          "We review your landscape, current tools, responsibilities and pain points. Together we agree what we run, what you keep and what SAP or another provider covers.",
          "2 to 3 weeks"
        ],
        [
          "Onboarding and tooling",
          "We deploy or configure monitoring agents, dashboards, alert rules and access. We write runbooks for your systems and connect alerts to our service desk.",
          "3 to 6 weeks"
        ],
        [
          "Transition and shadowing",
          "We work alongside your current team or provider, handle live tickets under supervision and confirm the runbooks work. Handover happens only when both sides agree.",
          "2 to 4 weeks"
        ],
        [
          "Steady state operations",
          "We run monitoring, patching, backup checks and incident response under the agreed service levels. You get regular reports and a named contact.",
          "Ongoing"
        ],
        [
          "Continuous improvement",
          "Each quarter we look at incident trends, automation options and cost or performance gains. Agreed changes go into the plan for the next period.",
          "Quarterly"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native tools we use on each cloud",
      "lede": "We build on each provider's own operations services, and add SAP tooling where it helps.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Infrastructure and log monitoring",
          "Amazon CloudWatch",
          "Azure Monitor with Log Analytics",
          "Google Cloud Observability (Cloud Monitoring and Cloud Logging)"
        ],
        [
          "SAP aware monitoring",
          "Amazon CloudWatch Application Insights for SAP HANA and SAP NetWeaver",
          "Azure Monitor for SAP solutions",
          "Google Cloud's Agent for SAP with Cloud Monitoring"
        ],
        [
          "SAP operations and start or stop",
          "AWS Systems Manager for SAP",
          "Azure Center for SAP solutions",
          "Google Cloud's Agent for SAP and Workload Manager"
        ],
        [
          "Operating system patching",
          "AWS Systems Manager Patch Manager",
          "Azure Update Manager",
          "VM Manager OS patch management"
        ],
        [
          "Platform health notices",
          "AWS Health",
          "Azure Service Health",
          "Personalized Service Health"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Operations for every SAP model",
      "lede": "What we run depends on how you run SAP. If you run ECC or SAP S/4HANA yourself on a cloud subscription, including bring your own licence deployments, you and we are responsible for the virtual machines, operating system, database and Basis. Under RISE with SAP, SAP runs the infrastructure and core Basis on the hyperscaler you chose, so you do not manage those virtual machines. You still own integrations, identity, custom code, SAP Business Technology Platform services and the non-SAP systems around them, and that is where we focus. ECC mainstream maintenance ends at the end of 2027, with optional extended maintenance to the end of 2030, so many estates need stable operations during the move as well as after it.",
      "items": [
        "Basis support for self-managed ECC and SAP S/4HANA on AWS, Azure and Google Cloud",
        "Monthly review of SAP security notes published on SAP Security Patch Day",
        "Coordination with SAP on RISE with SAP service requests and maintenance windows",
        "Monitoring of interfaces between SAP, SAP BTP and non-SAP systems such as Salesforce or MIHCM"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Agreed scope and responsibility matrix covering you, us, SAP and the cloud provider",
        "Monitoring dashboards and tuned alert rules for each system",
        "Runbooks for common incidents and routine tasks",
        "Patch calendar and records for operating system, kernel and SAP security notes",
        "Backup and restore test reports",
        "Monthly service report with availability, incidents and improvement actions"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Do you replace SAP's role under RISE with SAP?",
          "No. Under RISE with SAP, SAP runs the infrastructure and core Basis tasks on the hyperscaler you chose. We look after the tasks that remain yours, such as integrations, identity, extensions and surrounding systems, and we raise and follow up service requests with SAP for you."
        ],
        [
          "Can you run SAP systems that we host ourselves on the cloud?",
          "Yes. For ECC or SAP S/4HANA running on your own AWS, Azure or Google Cloud subscription, we can cover monitoring, patching, backups, incident response and Basis. We agree scope and service levels with you before we start."
        ],
        [
          "Which monitoring tools do you use?",
          "We start with each cloud's native services, such as Amazon CloudWatch, Azure Monitor and Azure Monitor for SAP solutions, and Google Cloud Observability with Google Cloud's Agent for SAP. If you already use SAP Cloud ALM or another tool, we can work with it."
        ],
        [
          "How do you handle patching without disrupting the business?",
          "We agree maintenance windows with you, apply patches to non-production systems first and test them, then patch production. SAP security notes are reviewed each month after SAP Security Patch Day and prioritised by risk."
        ],
        [
          "Do you cover non-SAP workloads too?",
          "Yes. We can run web applications, databases, integration platforms and other line of business systems alongside SAP, using the same monitoring, patching and reporting approach."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Run & Optimise",
        "High Availability, DR & Backup",
        "high-availability-dr-backup"
      ],
      [
        "Run & Optimise",
        "Cloud Security & Compliance",
        "cloud-security-compliance"
      ],
      [
        "Run & Optimise",
        "FinOps & Cost Optimisation",
        "finops-cost-optimisation"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP Security Notes FAQ (Patch Day)",
        "https://support.sap.com/securitynotes"
      ],
      [
        "Azure Monitor for SAP solutions overview",
        "https://learn.microsoft.com/en-us/azure/sap/monitor/about-azure-monitor-sap-solutions"
      ],
      [
        "Google Cloud: Monitoring SAP HANA with Agent for SAP",
        "https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/monitoring-sap-hana"
      ],
      [
        "AWS: CloudWatch Application Insights for SAP NetWeaver",
        "https://aws.amazon.com/about-aws/whats-new/2022/11/observe-monitor-sap-netweaver-applications-cloudwatch-application-insights/"
      ],
      [
        "AWS Systems Manager for SAP stop and start",
        "https://aws.amazon.com/about-aws/whats-new/2024/08/aws-systems-manager-sap-console-integration-stop-start"
      ],
      [
        "Azure Center for SAP solutions start and stop",
        "https://learn.microsoft.com/en-us/azure/sap/center-sap-solutions/stop-start-sap-and-underlying-vm"
      ],
      [
        "SAPinsider: SAP support deadlines 2027, 2030, 2033",
        "https://sapinsider.org/blogs/sap-support-deadlines-2027-2030-2033/"
      ],
      [
        "SAP: Securing RISE with SAP",
        "https://blogs.sap.com/2021/07/04/securing-rise-with-sap/"
      ]
    ]
  },
  {
    "slug": "finops-cost-optimisation",
    "label": "FinOps & Cost Optimisation",
    "group": "Run & optimise",
    "description": "We set up FinOps practices and tooling for SAP and non-SAP workloads on AWS, Microsoft Azure and Google Cloud.",
    "crumb": "Run & Optimise",
    "eyebrow": "Cloud Infrastructure · Run & Optimise",
    "h1": [
      "Know what your cloud costs,",
      "and pay only for what you use."
    ],
    "lede": "We set up FinOps practices and tooling for SAP and non-SAP workloads on AWS, Microsoft Azure and Google Cloud. You get clear cost visibility by team and system, steady savings from right-sizing, commitments and scheduling, and a routine that keeps costs under control after the first clean-up.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "3",
        "FinOps Framework phases: Inform, Optimize, Operate"
      ],
      [
        "6",
        "Principles in the FinOps Foundation framework"
      ],
      [
        "98%",
        "Of FinOps practitioners now manage AI spend (State of FinOps 2026)"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why cloud costs drift",
      "lede": "Cloud billing is based on use, so costs follow decisions made every day by many people. Systems are sized for peak and left that way, non-production environments run all weekend, commitments are bought without a plan and resources are created without tags. SAP adds its own constraints, because HANA must run on SAP certified instance types and some systems cannot simply be switched off. Without a shared view of cost and clear owners, savings found once tend to disappear within months.",
      "items": [
        [
          "No line of sight",
          "Without consistent tags and allocation, finance sees one large bill and nobody can say which team or system drives it."
        ],
        [
          "Oversized systems",
          "Instances chosen for a migration or a sizing estimate often stay larger than real use needs."
        ],
        [
          "Always-on non-production",
          "Development, test and training systems that run around the clock use capacity for hours when nobody is working."
        ],
        [
          "Commitments without a plan",
          "Reserved capacity and savings commitments help only when they match stable, long term use. Buying too much or too little both waste money."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We combine FinOps practice with hands-on engineering on SAP and cloud workloads.",
      "items": [
        [
          "01",
          "Cost visibility and allocation",
          "We design a tagging or labelling standard and apply it through policy so every resource has an owner, system and environment. We build reports and dashboards by business unit, project and SAP system."
        ],
        [
          "02",
          "Right-sizing",
          "We compare actual CPU, memory and storage use with what is provisioned and recommend smaller or newer instance types. For HANA we stay within SAP certified sizes and keep headroom for growth."
        ],
        [
          "03",
          "Commitment planning",
          "We analyse stable use and recommend reserved instances, savings plans or committed use discounts that fit your forecast. We track coverage and use over time and adjust as the estate changes."
        ],
        [
          "04",
          "Scheduling non-production SAP",
          "We set up SAP aware start and stop schedules so development, quality and training systems shut down cleanly out of hours and start before people need them. Schedules respect batch jobs, transports and system dependencies."
        ],
        [
          "05",
          "Storage and data clean-up",
          "We find unattached disks, old snapshots, outdated backups and data that can move to cheaper storage tiers. We apply lifecycle rules so the problem does not return."
        ],
        [
          "06",
          "FinOps operating model",
          "We help you set roles, a monthly cost review, budgets and anomaly alerts, following the FinOps Foundation framework. Engineering, finance and business owners share one view of cost and value."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Inform",
          "We connect to billing data, apply allocation rules and build the first cost reports. You see where money goes by team, system and environment.",
          "2 to 4 weeks"
        ],
        [
          "Quick wins",
          "We remove idle resources, apply non-production schedules and fix obvious oversizing. These changes are low risk and agreed with system owners first.",
          "2 to 4 weeks"
        ],
        [
          "Optimise",
          "We right-size production systems, plan commitments and review architecture choices such as storage tiers and instance families.",
          "4 to 8 weeks"
        ],
        [
          "Operate",
          "We embed tagging policies, budgets, anomaly alerts and a monthly FinOps review. Savings are tracked and reported against a baseline.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native cost tools on each cloud",
      "lede": "Each provider has its own tools for billing data, recommendations and commitments; we use them together.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Cost reporting and analysis",
          "AWS Cost Explorer and AWS Data Exports",
          "Microsoft Cost Management",
          "Cloud Billing reports and billing export to BigQuery"
        ],
        [
          "Right-sizing recommendations",
          "AWS Compute Optimizer and Cost Optimization Hub",
          "Azure Advisor",
          "Active Assist recommenders and FinOps hub"
        ],
        [
          "Commitments",
          "Savings Plans and Reserved Instances",
          "Azure Reservations and Azure savings plan for compute",
          "Committed use discounts"
        ],
        [
          "Scheduling",
          "AWS Systems Manager for SAP and Instance Scheduler on AWS",
          "Azure Center for SAP solutions start and stop",
          "Compute Engine instance schedules"
        ],
        [
          "Allocation and governance",
          "Cost allocation tags and AWS Budgets",
          "Azure tags, Azure Policy and budgets",
          "Labels, Organization Policy and budgets"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "FinOps for SAP estates",
      "lede": "How much of your SAP cost you can optimise depends on the model. If you run ECC or SAP S/4HANA yourself on a cloud subscription, including bring your own licence deployments, you control instance sizes, commitments and schedules, and we can work on all of them within SAP certified configurations. Under RISE with SAP, SAP runs the infrastructure on the hyperscaler you chose as part of the subscription, so you do not size or schedule those virtual machines. FinOps then focuses on what sits around SAP: SAP BTP consumption, integration platforms, data platforms such as SAP Business Data Cloud and Databricks, and non-SAP workloads on your own cloud accounts.",
      "items": [
        "SAP aware start and stop for non-production systems you run yourself",
        "Right-sizing within SAP certified HANA instance types",
        "Cost visibility for SAP BTP, integration and data workloads around RISE with SAP",
        "Tagging standards that map cloud cost to SAP system IDs and business owners"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Tagging and allocation standard, enforced through policy",
        "Cost dashboards by business unit, system and environment",
        "Right-sizing and clean-up report with agreed actions",
        "Commitment plan with coverage tracking",
        "Non-production start and stop schedules for SAP and non-SAP systems",
        "FinOps operating model with monthly review routine"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "What is FinOps?",
          "FinOps is an operating model for cloud spend, set out by the FinOps Foundation. It brings engineering, finance and business teams together so decisions on cloud use are made with cost and value in view. The framework has three phases: Inform, Optimize and Operate."
        ],
        [
          "Can we switch off SAP systems at night?",
          "For non-production systems you run yourself, yes, as long as the shutdown is SAP aware. We stop the application servers and HANA cleanly before the virtual machines, and start them in the right order, while avoiding times when batch jobs or transports are planned."
        ],
        [
          "Can we optimise costs under RISE with SAP?",
          "Under RISE with SAP the infrastructure is part of SAP's subscription and SAP runs it, so you do not size or schedule those virtual machines. We focus on the workloads around it, such as SAP BTP, integration, data platforms and non-SAP systems on your own cloud accounts."
        ],
        [
          "Should we buy commitments straight after migration?",
          "Usually not straight away. We recommend running for a few weeks to see real use, right-sizing first and then committing to the stable baseline, so you do not lock in oversized capacity."
        ],
        [
          "Do you quote savings figures?",
          "We do not promise a fixed figure before we have seen your data. After the Inform phase we give you a list of specific actions with estimated effect, and we track the actual results against a baseline."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Advise & Plan",
        "Business Case & TCO",
        "business-case-tco"
      ],
      [
        "Run & Optimise",
        "Managed Cloud Operations",
        "managed-cloud-operations"
      ],
      [
        "Advise & Plan",
        "Migration Funding & Marketplace Buying",
        "migration-funding-marketplace"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "FinOps Foundation: FinOps Framework",
        "https://www.finops.org/framework/"
      ],
      [
        "Linux Foundation: State of FinOps 2026",
        "https://www.linuxfoundation.org/press/state-of-finops-survey-ai-value-and-skills-top-priorities-as-finops-matures-across-technology-value-98-manage-ai-90-saas-64-licensing-48-data-center-1"
      ],
      [
        "AWS Systems Manager for SAP stop and start",
        "https://aws.amazon.com/about-aws/whats-new/2024/08/aws-systems-manager-sap-console-integration-stop-start"
      ],
      [
        "Azure Center for SAP solutions start and stop",
        "https://learn.microsoft.com/en-us/azure/sap/center-sap-solutions/stop-start-sap-and-underlying-vm"
      ],
      [
        "Google Cloud: Scheduling a VM to start and stop",
        "https://docs.cloud.google.com/compute/docs/instances/schedule-instance-start-stop"
      ],
      [
        "SAPinsider: SAP support deadlines",
        "https://sapinsider.org/blogs/sap-support-deadlines-2027-2030-2033/"
      ]
    ]
  },
  {
    "slug": "high-availability-dr-backup",
    "label": "High Availability, DR & Backup",
    "group": "Run & optimise",
    "description": "We design, build and test high availability, disaster recovery and backup for SAP HANA and SAP applications on AWS, Microsoft Azure and Google Cloud.",
    "crumb": "Run & Optimise",
    "eyebrow": "Cloud Infrastructure · Run & Optimise",
    "h1": [
      "Keep SAP running through failures,",
      "and recover fast when a region goes down."
    ],
    "lede": "We design, build and test high availability, disaster recovery and backup for SAP HANA and SAP applications on AWS, Microsoft Azure and Google Cloud. You get recovery targets agreed with the business, an architecture that meets them and regular tests that prove it.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "0 min",
        "RPO SAP publishes for short distance DR in RISE"
      ],
      [
        "15 min",
        "Minimum RPO stated for Azure Backup for SAP HANA"
      ],
      [
        "3+",
        "Isolated Availability Zones in every AWS Region"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why resilience has to be designed, not assumed",
      "lede": "SAP is usually the system the business cannot do without, and an outage stops orders, shipments and payroll. The cloud gives you zones, regions and native backup services, but none of them protect SAP on their own. HANA needs replication configured, clusters need correct fencing, application servers need a plan to fail over, and backups need to be restorable within the time the business expects. For Sri Lankan organisations there is also distance to consider: there is no hyperscaler region in Sri Lanka, so primary and DR sites are typically in India or Singapore.",
      "items": [
        [
          "Unclear recovery targets",
          "Without an agreed recovery point objective and recovery time objective, nobody knows whether the design is good enough or overbuilt."
        ],
        [
          "Single zone deployments",
          "A production system in one Availability Zone has no protection if that zone fails."
        ],
        [
          "Clusters that fail over badly",
          "Pacemaker clusters with wrong fencing or timeouts can cause split brain or long outages instead of preventing them."
        ],
        [
          "Untested DR",
          "A DR site that has never been switched to is a plan on paper, not a capability."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We cover the full resilience stack for SAP and HANA, from local high availability to cross-region recovery and backup.",
      "items": [
        [
          "01",
          "Recovery target workshop",
          "We work with business and IT owners to set RPO and RTO for each system. Those targets then drive the design and the cost of resilience."
        ],
        [
          "02",
          "HANA system replication",
          "We configure SAP HANA system replication between zones and regions, choosing synchronous or asynchronous modes to fit distance and targets. We size the secondary and set up monitoring of replication status."
        ],
        [
          "03",
          "Pacemaker clusters",
          "We build and test Pacemaker clusters on SUSE Linux Enterprise Server for SAP or Red Hat Enterprise Linux for SAP for HANA and for ASCS and ERS. Fencing, virtual IP handling and timeouts follow each cloud's reference guidance."
        ],
        [
          "04",
          "Cross-region disaster recovery",
          "We set up a secondary region with HANA replication, replicated application servers and network routes. We write the failover and failback runbooks and rehearse them."
        ],
        [
          "05",
          "Backup and restore",
          "We set up SAP certified Backint backups to cloud storage, plus snapshots where they fit. Retention, immutability and encryption follow your policy, and restores are tested on a schedule."
        ],
        [
          "06",
          "DR testing and reporting",
          "We run planned DR tests, measure the actual recovery times and report them against targets. Gaps go into a remediation plan."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your current landscape, backup setup and any past incidents. We agree RPO and RTO per system with the business.",
          "2 to 3 weeks"
        ],
        [
          "Design",
          "We produce a resilience architecture covering zones, regions, replication, clustering and backup. It includes the cost and operational impact of each option.",
          "2 to 4 weeks"
        ],
        [
          "Build",
          "We deploy clusters, replication, backup agents and DR infrastructure, ideally as infrastructure as code. Each component is tested as it is built.",
          "4 to 8 weeks"
        ],
        [
          "Test",
          "We run failover tests, restore tests and a full DR rehearsal. Results are measured and documented against the agreed targets.",
          "1 to 2 weeks"
        ],
        [
          "Operate and retest",
          "We monitor replication and backups as part of daily operations and repeat DR tests at an agreed frequency, usually at least once a year.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native building blocks on each cloud",
      "lede": "SAP HANA system replication and Pacemaker work on all three clouds; backup and DR services differ by provider.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Local high availability",
          "Multiple Availability Zones with Pacemaker and overlay IP",
          "Availability zones with Pacemaker and Azure Load Balancer",
          "Multiple zones with Pacemaker and an internal passthrough Network Load Balancer"
        ],
        [
          "SAP certified HANA backup",
          "AWS Backint Agent for SAP HANA to Amazon S3 or AWS Backup",
          "Azure Backup for SAP HANA (Backint and snapshots)",
          "Backint feature of Google Cloud's Agent for SAP to Cloud Storage"
        ],
        [
          "Snapshot and managed backup",
          "AWS Backup",
          "Azure Backup with Recovery Services vault",
          "Google Cloud Backup and DR Service"
        ],
        [
          "Cross-region replication for application servers",
          "AWS Elastic Disaster Recovery",
          "Azure Site Recovery",
          "Persistent Disk Asynchronous Replication or Backup and DR Service"
        ],
        [
          "Database replication across regions",
          "SAP HANA system replication (asynchronous)",
          "SAP HANA system replication (asynchronous)",
          "SAP HANA system replication (asynchronous)"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "The SAP angle: who owns recovery",
      "lede": "Under RISE with SAP, SAP runs the infrastructure on the hyperscaler you chose and is responsible for high availability, backup and disaster recovery within the options in your contract. SAP's published service description for RISE private cloud DR sets an RPO of 0 minutes for short distance DR and 30 minutes for long distance DR, with a standard RTO of 12 hours and an optional 4 hour RTO. Your job is to choose the right option, check it covers your business needs and plan recovery for everything around SAP, such as SAP BTP services, interfaces and non-SAP systems. If you run ECC or SAP S/4HANA yourself on a cloud subscription, the whole design is yours, and that is where we do most of the build work.",
      "items": [
        "Advice on RISE with SAP DR options and what they mean for your business",
        "Full HA and DR build for self-managed ECC and SAP S/4HANA on AWS, Azure and Google Cloud",
        "DR planning for integrations, SAP BTP and surrounding systems",
        "Backup design that meets SAP certification and your retention rules"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "RPO and RTO register agreed with business owners",
        "High availability and DR architecture document",
        "Configured HANA system replication, Pacemaker clusters and backup",
        "Failover, failback and restore runbooks",
        "DR test report with measured recovery times",
        "Remediation plan for any gaps found"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "What is the difference between high availability and disaster recovery?",
          "High availability keeps a system running through a local failure, such as a server or zone outage, usually with automatic failover in minutes. Disaster recovery restores service in another region after a larger event, and is usually a planned, manual switch with a longer recovery time."
        ],
        [
          "Which HANA replication mode should we use?",
          "Synchronous modes suit replication between zones in the same region, where latency is low and you need no data loss. Asynchronous mode suits longer distances between regions, accepting a small possible data loss in return for no impact on production performance."
        ],
        [
          "Is there a cloud region in Sri Lanka?",
          "No. AWS, Microsoft Azure and Google Cloud do not have a region in Sri Lanka today. Sri Lankan organisations usually place SAP in an Indian region such as Mumbai or in Singapore, and choose a DR region with data protection rules and latency in mind."
        ],
        [
          "Do we still need backups if we have HANA system replication?",
          "Yes. Replication copies every change, including accidental deletions and corruption, to the secondary. Backups give you a point in time to go back to, which replication cannot do."
        ],
        [
          "How often should we test DR?",
          "We recommend at least one full DR test a year for production SAP, plus regular restore tests of backups. Tests should also follow any major change to the landscape."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Run & Optimise",
        "Managed Cloud Operations",
        "managed-cloud-operations"
      ],
      [
        "Migrate & Modernise",
        "RISE with SAP: Cloud & Region Choice",
        "rise-cloud-region-choice"
      ],
      [
        "Migrate & Modernise",
        "SAP ECC & S/4HANA to the Cloud",
        "sap-to-cloud"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP DR service description, RISE private cloud",
        "https://assets.cdn.sap.com/agreements/product-policy/hec/service-description/disaster-recovery-services-and-customer-invoked-failover-services-for-private-cloud-edition-services-and-tailored-option-service-description-english-v7-2023.pdf"
      ],
      [
        "Microsoft: About SAP HANA database backup on Azure VMs",
        "https://learn.microsoft.com/azure/backup/sap-hana-database-about"
      ],
      [
        "AWS Backint Agent for SAP HANA",
        "https://docs.aws.amazon.com/de_de/sap/latest/sap-hana/aws-backint-agent-sap-hana.html"
      ],
      [
        "Google Cloud: Backint backup with Agent for SAP",
        "https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/backint-backup-recovery"
      ],
      [
        "Google Cloud Backup and DR for SAP HANA",
        "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana"
      ],
      [
        "AWS: Reliability for RISE with SAP",
        "https://docs.aws.amazon.com/sap/latest/general/reliability-rise.md"
      ],
      [
        "SAP HANA System Replication Guide",
        "https://help.sap.com/doc/c81e9406d08046c0a118c8bef71f6bdc/2.0.08/en-US/SAP_HANA_System_Replication_Guide_en.pdf"
      ]
    ]
  },
  {
    "slug": "cloud-security-compliance",
    "label": "Cloud Security & Compliance",
    "group": "Run & optimise",
    "description": "We put security guardrails, encryption, logging and posture management in place across AWS, Microsoft Azure and Google Cloud, and keep them working.",
    "crumb": "Run & Optimise",
    "eyebrow": "Cloud Infrastructure · Run & Optimise",
    "h1": [
      "Secure your cloud and SAP estate,",
      "and show auditors the evidence."
    ],
    "lede": "We put security guardrails, encryption, logging and posture management in place across AWS, Microsoft Azure and Google Cloud, and keep them working. You get a clear split of responsibilities, controls mapped to ISO 27001 and data protection law, and evidence ready for audits and Sri Lanka's PDPA.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "1 Jan 2027",
        "Core Sri Lanka PDPA obligations for controllers take effect"
      ],
      [
        "No. 22 of 2025",
        "PDPA amendment that replaced the cross-border transfer rules"
      ],
      [
        "31 Oct 2025",
        "Deadline for moving to ISO/IEC 27001:2022 certification"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why cloud security needs ongoing attention",
      "lede": "Cloud providers secure their own infrastructure, but the configuration of accounts, networks, identities and data is the customer's job. Most cloud incidents come from settings that drift over time: a storage bucket made public, a missing log, an over-privileged account. At the same time regulation is tightening. In Sri Lanka, the Personal Data Protection Act, No. 9 of 2022, as amended, brings its core obligations for controllers and processors into force on 1 January 2027, including duties on data protection officers, breach notification, impact assessments and cross-border transfers.",
      "items": [
        [
          "Shared responsibility gaps",
          "Each provider secures the cloud itself, while you secure what you put in it. Under RISE with SAP a third party, SAP, adds another boundary to manage."
        ],
        [
          "Configuration drift",
          "Settings that were right at go-live change over time. Without continuous posture checks, nobody notices until an audit or an incident."
        ],
        [
          "Missing evidence",
          "Auditors for ISO 27001, SOC reports and data protection law want proof that controls work, not just policies."
        ],
        [
          "Data location questions",
          "There is no hyperscaler region in Sri Lanka, so personal data is processed abroad, usually in India or Singapore. That needs to be handled under the PDPA cross-border rules."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We design, build and run security controls for SAP and non-SAP workloads, and help you prove compliance.",
      "items": [
        [
          "01",
          "Landing zone guardrails",
          "We set preventive controls at organisation level, such as allowed regions, blocked public access and required encryption. New accounts and subscriptions inherit them automatically."
        ],
        [
          "02",
          "Encryption and key management",
          "We enable encryption at rest and in transit, with customer managed keys where your policy requires them. Key access and rotation are logged and reviewed."
        ],
        [
          "03",
          "Logging and monitoring",
          "We centralise audit logs, network flow logs and SAP security logs in a protected location with defined retention. Alerts feed your security operations or ours."
        ],
        [
          "04",
          "Posture management",
          "We turn on native posture tools, map their findings to your control framework and fix issues in priority order. Scores and trends are reported monthly."
        ],
        [
          "05",
          "Identity and access",
          "We apply least privilege roles, multi-factor authentication and privileged access controls for cloud consoles and SAP administration. Access is reviewed on a regular cycle."
        ],
        [
          "06",
          "Compliance and audit support",
          "We map controls to ISO/IEC 27001, the Sri Lanka PDPA and other rules that apply to you, and collect evidence for audits. We help you use provider ISO certificates and SOC reports as part of your own assurance."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your cloud accounts, SAP security setup and current policies against a baseline such as the CIS benchmarks and your own requirements. You get a prioritised findings list.",
          "2 to 4 weeks"
        ],
        [
          "Design",
          "We define the responsibility matrix, guardrails, logging design, key management approach and data residency position. Each control is mapped to the standards that matter to you.",
          "2 to 3 weeks"
        ],
        [
          "Implement",
          "We deploy guardrails, logging, encryption and posture tools, preferably as code. High risk findings from the assessment are fixed first.",
          "4 to 8 weeks"
        ],
        [
          "Operate and evidence",
          "We monitor posture, handle findings and keep audit evidence current. We support you through internal and external audits.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native security services on each cloud",
      "lede": "We start from each provider's own security services and connect them into one view.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Organisation guardrails",
          "AWS Organizations service control policies and AWS Control Tower",
          "Azure Policy and management groups",
          "Organization Policy Service"
        ],
        [
          "Posture management",
          "AWS Security Hub with Security Hub CSPM",
          "Microsoft Defender for Cloud",
          "Security Command Center"
        ],
        [
          "Key management",
          "AWS Key Management Service",
          "Azure Key Vault and Azure Key Vault Managed HSM",
          "Cloud Key Management Service"
        ],
        [
          "Audit logging",
          "AWS CloudTrail",
          "Azure Monitor activity log and Log Analytics",
          "Cloud Audit Logs"
        ],
        [
          "Threat detection and SIEM",
          "Amazon GuardDuty",
          "Microsoft Sentinel",
          "Google Security Operations"
        ],
        [
          "Compliance reports",
          "AWS Artifact",
          "Microsoft Service Trust Portal",
          "Compliance Reports Manager"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "Security responsibilities for SAP",
      "lede": "Security work depends on how SAP runs. Under RISE with SAP, SAP runs the infrastructure, operating system, database and core Basis on the hyperscaler you chose, and SAP handles their security monitoring and patching. You remain responsible for business roles and authorisations, single sign-on through your identity provider, tenant security settings, application audit logs, integrations, custom code and the network link into SAP's environment. If you run ECC or SAP S/4HANA yourself on a cloud subscription, you also own the full stack below the application, and our controls cover it end to end.",
      "items": [
        "Responsibility matrix for RISE with SAP, SAP BTP and your own cloud accounts",
        "Monthly review of SAP security notes for systems you run yourself",
        "SAP security audit log and identity integration with your central logging",
        "PDPA impact assessments and records for SAP, Salesforce and HR systems that hold personal data"
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Security assessment with prioritised findings",
        "Shared responsibility matrix covering you, us, SAP and each cloud provider",
        "Deployed guardrails, logging, encryption and posture management",
        "Control mapping to ISO/IEC 27001 and the Sri Lanka PDPA",
        "Data residency and cross-border transfer register",
        "Monthly posture report and audit evidence pack"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "What is the shared responsibility model?",
          "Cloud providers are responsible for the security of the cloud: data centres, hardware and the core platform. You are responsible for security in the cloud: your configuration, identities, data and applications. With RISE with SAP, SAP takes on more of the stack, but business access and data remain yours."
        ],
        [
          "When does Sri Lanka's PDPA apply?",
          "Gazette Extraordinary No. 2498/16 of 22 July 2026 set 1 January 2027 for sections 2 and 3, Part I and Part III of the Personal Data Protection Act, No. 9 of 2022, as amended. Some other parts, such as data subject rights and administrative penalties, have not yet been given a start date. We recommend taking legal advice on how the Act applies to your organisation."
        ],
        [
          "Can our personal data be stored outside Sri Lanka?",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka, so cloud hosting means processing abroad. The PDPA, as amended in 2025, allows cross-border transfers when the controller meets the Act's obligations and uses safeguards that the Data Protection Authority specifies, with extra limits possible for public authorities. We help you record transfers and apply the required safeguards."
        ],
        [
          "Do the cloud providers' ISO and SOC reports cover us?",
          "They cover the provider's part of the shared responsibility model, and you can use them as evidence for that part. Your own controls, such as access, configuration and data handling, still need to be designed, run and evidenced by you or by us on your behalf."
        ],
        [
          "Can you work with our existing security team or SOC?",
          "Yes. We can feed alerts and posture findings into your SIEM and ticketing tools, and agree which team handles which type of event. Where you have no security operations function, we can cover cloud and SAP specific monitoring."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Advise & Plan",
        "Landing Zone & Architecture Design",
        "landing-zone-architecture"
      ],
      [
        "Build & Connect",
        "Identity & Single Sign-On",
        "identity-single-sign-on"
      ],
      [
        "Run & Optimise",
        "Managed Cloud Operations",
        "managed-cloud-operations"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Daily FT: PDPA compliance regime from 1 Jan 2027",
        "https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776"
      ],
      [
        "Gazette Extraordinary No. 2498/16",
        "https://documents.gov.lk/view/egz/2026/7/2498-16_E.pdf"
      ],
      [
        "Daily Mirror: staggered PDPA rollout",
        "https://www.dailymirror.lk/breaking-news/Legal-experts-flag-unique-compliance-landscape-in-staggered-PDPA-rollout/108-346685"
      ],
      [
        "Readme.lk: PDPA No. 9 of 2022 and Amendment No. 22 of 2025",
        "https://readme.lk/digital-policy-watch/personal-data-protection-act-no-9-of-2022/"
      ],
      [
        "Concentric: PDPA amended Section 26 summary",
        "https://concentric.ai/sri-lankas-pdpa-takes-effect-january-1-2027-what-global-enterprises-need-to-know/"
      ],
      [
        "NSAI: ISO/IEC 27001:2022 transition",
        "https://www.nsai.ie/certification/management-systems/iso-iec-27001-information-security-management-system/iso-iec-270012022-transition-policy/"
      ],
      [
        "AWS: Security Hub generally available",
        "https://aws.amazon.com/about-aws/whats-new/2025/12/security-hub-near-real-time-risk-analytics/"
      ],
      [
        "AWS shared responsibility model",
        "https://aws.amazon.com/compliance/shared-responsibility-model/"
      ],
      [
        "SAP: Securing RISE with SAP",
        "https://blogs.sap.com/2021/07/04/securing-rise-with-sap/"
      ]
    ]
  },
  {
    "slug": "ai-data-on-sap",
    "label": "AI & Data on SAP Data",
    "group": "Data, AI & skills",
    "description": "We connect SAP business data with the data and AI services of AWS, Microsoft Azure and Google Cloud, using SAP Business Data Cloud, SAP Databricks, SAP…",
    "crumb": "Data, AI & Skills",
    "eyebrow": "Cloud Infrastructure · Data, AI & Skills",
    "h1": [
      "Put your SAP data to work,",
      "in analytics and AI you can trust."
    ],
    "lede": "We connect SAP business data with the data and AI services of AWS, Microsoft Azure and Google Cloud, using SAP Business Data Cloud, SAP Databricks, SAP Datasphere and the generative AI hub on SAP BTP. You get governed, business-ready data and AI use cases that keep SAP context, without building a tangle of copies and custom extracts.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "Apr 2025",
        "SAP Databricks generally available inside SAP Business Data Cloud"
      ],
      [
        "Jul 2026",
        "SAP BDC Connect for BigQuery generally available, zero-copy sharing"
      ],
      [
        "Mumbai",
        "Google Cloud region in India that hosts SAP Business Data Cloud"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why SAP data needs a plan for AI",
      "lede": "SAP holds your most valuable data: orders, stock, finance, suppliers and people. It is also hard to use outside SAP, because tables are complex, business meaning sits in the application layer and every extract creates another copy to secure and reconcile. AI makes this worse if models are fed partial or stale data. A clear data architecture, with SAP semantics kept intact and governance in place, is the difference between a useful AI assistant and a risky one.",
      "items": [
        [
          "Business meaning gets lost",
          "Raw table extracts drop the semantics that SAP applications add. SAP Business Data Cloud data products keep that context, so analysts and models work with recognisable business objects."
        ],
        [
          "Too many copies",
          "Every replicated copy adds storage, security and reconciliation work. Zero-copy sharing through SAP BDC Connect with Databricks, Google BigQuery and Microsoft Fabric reduces the need to duplicate data."
        ],
        [
          "AI without guardrails",
          "Generative AI on business data needs access control, grounding and monitoring. The generative AI hub in SAP AI Core gives governed access to models from providers including Amazon, Anthropic, Google, Meta, Mistral AI and OpenAI."
        ],
        [
          "Names and offerings change fast",
          "Vertex AI is now Gemini Enterprise Agent Platform and Azure AI Foundry is now Microsoft Foundry. We track these changes so your architecture uses what is current and supported."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We design and build the data and AI layer around your SAP landscape, on the cloud you already use.",
      "items": [
        [
          "01",
          "Data and AI strategy",
          "We map your SAP sources, business questions and AI ideas to a target architecture. We pick the first use cases by value and data readiness, not by hype."
        ],
        [
          "02",
          "SAP Business Data Cloud setup",
          "We plan and configure SAP Business Data Cloud, including SAP Datasphere and SAP Analytics Cloud. We activate the data products and intelligent applications that fit your processes."
        ],
        [
          "03",
          "SAP Databricks and BDC Connect",
          "We use SAP Databricks for data engineering and machine learning on SAP data products through Delta Sharing. Where you already run Databricks, Google BigQuery or Microsoft Fabric, we set up SAP BDC Connect for zero-copy sharing in both directions."
        ],
        [
          "04",
          "Replication to hyperscaler data lakes",
          "Where a copy is the right answer, we build SAP Datasphere replication flows to Amazon S3, Azure Data Lake Storage or Google Cloud Storage and BigQuery. We design for change data capture, volumes and outbound integration licensing."
        ],
        [
          "05",
          "Generative AI on SAP data",
          "We build assistants and agents with the generative AI hub on SAP BTP, Amazon Bedrock, Microsoft Foundry or Gemini Enterprise Agent Platform. We ground answers in SAP data and keep humans in the loop for actions."
        ],
        [
          "06",
          "Governance and security",
          "We set up catalogues, access policies, lineage and data quality checks across SAP and cloud tools. Sensitive fields such as personal data are masked or excluded before they reach a model."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Discover",
          "We review your SAP systems, existing data platforms and reporting pain points. We agree three to five use cases with owners and success measures.",
          "2 to 3 weeks"
        ],
        [
          "Design",
          "We define the target architecture: which data stays in SAP Business Data Cloud, what is shared zero-copy and what is replicated. We document security, identity and network design.",
          "2 to 4 weeks"
        ],
        [
          "Build the foundation",
          "We provision the platform, connect SAP sources and publish the first data products. We automate deployments and set up monitoring from the start.",
          "4 to 8 weeks"
        ],
        [
          "Deliver use cases",
          "We build dashboards, models and AI assistants for the agreed use cases, testing them with business users. Each one goes live with clear ownership and support.",
          "4 to 6 weeks per use case"
        ],
        [
          "Scale and improve",
          "We add data products, tune performance and track adoption. Your team takes on more of the work as skills grow.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native data and AI services per cloud",
      "lede": "We combine SAP data services with the native data and AI services of your chosen cloud.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Data lake storage",
          "Amazon S3",
          "Azure Data Lake Storage, Microsoft Fabric OneLake",
          "Cloud Storage"
        ],
        [
          "Analytics warehouse",
          "Amazon Redshift",
          "Microsoft Fabric",
          "BigQuery"
        ],
        [
          "SAP data ingestion",
          "AWS Glue, Amazon AppFlow",
          "Azure Data Factory, Fabric Data Factory",
          "BigQuery Connector for SAP"
        ],
        [
          "Zero-copy sharing with SAP BDC",
          "SAP Business Data Cloud on AWS with SAP Databricks",
          "SAP BDC Connect for Microsoft Fabric",
          "SAP BDC Connect for BigQuery"
        ],
        [
          "Generative AI models",
          "Amazon Bedrock",
          "Microsoft Foundry (formerly Azure AI Foundry)",
          "Gemini Enterprise Agent Platform (formerly Vertex AI)"
        ],
        [
          "Agents",
          "Amazon Bedrock AgentCore",
          "Microsoft Copilot Studio, Foundry Agent Service",
          "Gemini Enterprise"
        ],
        [
          "Data governance",
          "AWS Lake Formation",
          "Microsoft Purview",
          "Knowledge Catalog (formerly Dataplex)"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "The SAP angle",
      "lede": "SAP Business Data Cloud is SAP's answer to the data problem: it brings SAP Datasphere, SAP Analytics Cloud, SAP Business Warehouse and SAP Databricks together around managed data products that keep business context. The generative AI hub in SAP AI Core gives governed access to large language models, and Joule uses SAP data to answer questions and act within SAP applications. SAP now positions SAP BTP, SAP Business Data Cloud and its AI services together as the SAP Business AI Platform, announced at SAP Sapphire 2026. Our job is to fit these SAP services together with the hyperscaler platform you already run, so you do not pay twice for the same capability or end up with two versions of the truth.",
      "items": [
        "SAP Business Data Cloud data products are shared to SAP Databricks through Delta Sharing, without physical copies.",
        "SAP BDC Connect links SAP Business Data Cloud with Databricks, Google BigQuery, Microsoft Fabric and Snowflake.",
        "SAP Datasphere replication flows can send SAP data to Amazon S3, Azure Data Lake Storage and Google BigQuery.",
        "The generative AI hub on SAP BTP offers models from Amazon, Anthropic, Google, Meta, Mistral AI and OpenAI under one governance layer."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "SAP data and AI target architecture with a decision on share, replicate or keep in place",
        "Configured SAP Business Data Cloud or hyperscaler data platform with SAP sources connected",
        "Prioritised use case backlog with owners and success measures",
        "Working dashboards, models or AI assistants for the first use cases",
        "Data governance model covering access, lineage, quality and personal data",
        "Runbooks and handover sessions for your data and SAP teams"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Do we need SAP Business Data Cloud to use AI on SAP data?",
          "No, but it helps. SAP Business Data Cloud gives you managed data products with SAP semantics and zero-copy sharing to Databricks, BigQuery and Microsoft Fabric. Without it, we can still replicate SAP data with SAP Datasphere or hyperscaler connectors, but more of the modelling and governance work sits with you."
        ],
        [
          "What is the difference between SAP Databricks and our own Databricks?",
          "SAP Databricks is a managed version of Databricks included as a service in SAP Business Data Cloud, with SAP data products available through Delta Sharing. If you already run Databricks on AWS, Azure or Google Cloud, SAP BDC Connect for Databricks can share SAP data products with that workspace instead. We help you decide which fits your team and existing investments."
        ],
        [
          "Which AI models can we use with SAP data?",
          "The generative AI hub in SAP AI Core offers models from providers including Amazon, Anthropic, Google, Meta, Mistral AI and OpenAI. You can also use Amazon Bedrock, Microsoft Foundry or Gemini Enterprise Agent Platform directly. We choose based on the use case, data residency and the cloud you already use."
        ],
        [
          "Does our SAP data leave Sri Lanka or India?",
          "There is no AWS, Azure or Google Cloud region in Sri Lanka, so cloud data services run in a nearby region such as Mumbai or Singapore. SAP Business Data Cloud on Google Cloud is available in Mumbai, for example. We document where each dataset is stored and processed so you can check it against your obligations, including Sri Lanka's Personal Data Protection Act."
        ],
        [
          "We run ECC, not S/4HANA. Can we still do this?",
          "Yes. SAP Datasphere can connect to SAP ECC through ABAP connections, and hyperscaler connectors such as AWS Glue, Azure Data Factory and the BigQuery Connector for SAP also support ECC. Some SAP Business Data Cloud data products and intelligent applications are built for newer SAP systems, so we check fit source by source."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Data, AI & Skills",
        "Microsoft 365 & Copilot with SAP",
        "microsoft-365-copilot-sap"
      ],
      [
        "Build & Connect",
        "Network & Connectivity to RISE and BTP",
        "network-connectivity-rise-btp"
      ],
      [
        "Run & Optimise",
        "Cloud Security & Compliance",
        "cloud-security-compliance"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "Databricks: SAP Databricks GA in SAP Business Data Cloud",
        "https://databricks.com/blog/announcing-general-availability-sap-databricks-sap-business-data-cloud"
      ],
      [
        "Google Cloud: SAP BDC Connect for BigQuery GA",
        "https://cloud.google.com/blog/products/sap-google-cloud/sap-and-google-cloud-launch-bdc-connect-for-bigquery/"
      ],
      [
        "Microsoft Fabric: SAP BDC Connect for Microsoft Fabric",
        "https://blog.fabric.microsoft.com/en-GB/blog/29410/"
      ],
      [
        "SAP News: SAP Snowflake and BDC Connect",
        "https://news.sap.com/2025/11/sap-snowflake-new-data-fabric-innovations-sap-bdc-sap-hana-cloud/"
      ],
      [
        "SAP Help: generative AI hub SDK, supported providers",
        "https://help.sap.com/doc/generative-ai-hub-sdk/CLOUD/en-US/_reference/README_sphynx.html"
      ],
      [
        "AWS: replicating SAP data with SAP Datasphere",
        "https://docs.amazonaws.cn/en_us/sap/latest/general/rise-data-replication-sap.html"
      ],
      [
        "HPCwire: Gemini Enterprise Agent Platform, evolution of Vertex AI",
        "https://www.hpcwire.com/aiwire/2026/04/23/google-unveils-gemini-enterprise-agent-platform/"
      ],
      [
        "Directions on Microsoft: Azure AI Foundry renamed Microsoft Foundry",
        "https://www.directionsonmicrosoft.com/reports/foundry-gets-new-name-anthropic-models/"
      ],
      [
        "SAP: Top 5 SAP Sapphire 2026 AI announcements",
        "https://www.sap.com/blogs/top-5-sapphire-2026-ai-announcements"
      ]
    ]
  },
  {
    "slug": "microsoft-365-copilot-sap",
    "label": "Microsoft 365 & Copilot with SAP",
    "group": "Data, AI & skills",
    "description": "We connect SAP with Microsoft 365, from Joule and Microsoft 365 Copilot working together to SAP apps in Teams, SAP data in Excel and single sign-on with…",
    "crumb": "Data, AI & Skills",
    "eyebrow": "Cloud Infrastructure · Data, AI & Skills",
    "h1": [
      "Bring SAP into the tools people use all day,",
      "Teams, Outlook, Excel and Copilot."
    ],
    "lede": "We connect SAP with Microsoft 365, from Joule and Microsoft 365 Copilot working together to SAP apps in Teams, SAP data in Excel and single sign-on with Microsoft Entra ID. Your people get SAP answers and tasks where they already work, with identity and access controlled in one place.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "Teams",
        "First access point for Joule from Microsoft 365 Copilot"
      ],
      [
        "2027",
        "SAP Identity Management maintenance ends; Entra ID is a migration path"
      ],
      [
        "Nov 2025",
        "SAP BDC Connect for Microsoft Fabric announced, zero-copy to OneLake"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why connect SAP and Microsoft 365",
      "lede": "Most SAP users spend their day in Outlook, Teams and Excel, and switch to SAP only to approve, check or update something. Every switch costs time, and data copied into spreadsheets or emails goes stale and escapes access controls. SAP and Microsoft now offer joint integrations, from Joule working with Microsoft 365 Copilot to SAP Fiori apps shared in Teams. Setting them up well depends on identity, licensing and security being right first.",
      "items": [
        [
          "Less switching between apps",
          "Joule and Microsoft 365 Copilot work in both directions, so users can reach SAP tasks and data from Copilot, and Microsoft 365 information from Joule. Responses show which assistant produced them."
        ],
        [
          "Collaboration on live SAP data",
          "The SAP S/4HANA for Microsoft Teams app lets users share SAP Fiori app content as a chat link, tab or card, and receive SAP task notifications in the Teams activity feed."
        ],
        [
          "One identity for everything",
          "Microsoft Entra ID can act as the identity provider for SAP applications through SAP Cloud Identity Services, and provision users into SAP systems. Leavers lose access everywhere at once."
        ],
        [
          "A deadline for SAP Identity Management",
          "SAP Identity Management maintenance ends in 2027, with extended support to 2030. Microsoft publishes guidance for moving those scenarios to Microsoft Entra ID."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We plan, configure and support the integrations between your SAP landscape and Microsoft 365.",
      "items": [
        [
          "01",
          "Joule and Microsoft 365 Copilot",
          "We check prerequisites, activate Joule in your SAP landscape and connect it to your Microsoft 365 Copilot tenant. The integration is opt-in, so we agree the scenarios and user groups before switching it on."
        ],
        [
          "02",
          "SAP in Microsoft Teams",
          "We deploy the SAP S/4HANA for Microsoft Teams app so users can share SAP Fiori content and get task notifications in Teams. We configure the Teams admin policies and SAP roles that control who sees what."
        ],
        [
          "03",
          "SAP data in Excel",
          "We set up the SAP Analytics Cloud add-in for Microsoft Excel for reporting and planning on SAP Analytics Cloud models, SAP Datasphere and SAP S/4HANA Cloud CDS views. Finance teams keep Excel while the numbers stay governed."
        ],
        [
          "04",
          "Single sign-on and provisioning with Entra ID",
          "We connect Microsoft Entra ID with SAP Cloud Identity Services for single sign-on and user provisioning into SAP cloud and on-premise systems. We add conditional access and multifactor authentication for SAP access."
        ],
        [
          "05",
          "SAP Identity Management migration",
          "We assess your SAP Identity Management scenarios and plan the move to SAP Cloud Identity Services and Microsoft Entra ID Governance. We keep joiner, mover and leaver processes running during the change."
        ],
        [
          "06",
          "SAP data in Microsoft Fabric and Power BI",
          "We share SAP Business Data Cloud data products into Microsoft Fabric with SAP BDC Connect, or replicate with SAP Datasphere where needed. Users then analyse SAP data in Power BI, Excel and Teams."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review your SAP products, Microsoft 365 licences, Entra ID setup and SAP identity processes. We list which integrations are available for your SAP releases and region.",
          "1 to 2 weeks"
        ],
        [
          "Fix identity first",
          "We align user identities between SAP and Entra ID, set up SAP Cloud Identity Services and enable single sign-on. Everything else depends on this step.",
          "2 to 4 weeks"
        ],
        [
          "Pilot",
          "We switch on the chosen integrations, such as Joule with Microsoft 365 Copilot or SAP apps in Teams, for a pilot group. We collect feedback and check security and data access.",
          "3 to 6 weeks"
        ],
        [
          "Roll out",
          "We extend to more users with training, guides and support. We monitor usage and adjust roles and policies.",
          "4 to 8 weeks"
        ],
        [
          "Support and extend",
          "We keep integrations working through SAP and Microsoft updates and add new scenarios as they become available.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Equivalent services per cloud",
      "lede": "Most customers pair SAP with Microsoft 365, but similar building blocks exist on each cloud.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Identity provider for SAP single sign-on",
          "AWS IAM Identity Center",
          "Microsoft Entra ID",
          "Cloud Identity"
        ],
        [
          "AI assistant for employees",
          "Amazon Quick",
          "Microsoft 365 Copilot",
          "Gemini Enterprise"
        ],
        [
          "Low-code agent building",
          "Amazon Bedrock AgentCore",
          "Microsoft Copilot Studio",
          "Gemini Enterprise Agent Platform"
        ],
        [
          "Zero-copy SAP data sharing",
          "SAP Business Data Cloud on AWS",
          "SAP BDC Connect for Microsoft Fabric",
          "SAP BDC Connect for BigQuery"
        ],
        [
          "Business intelligence on SAP data",
          "Amazon Quick",
          "Power BI",
          "Looker"
        ],
        [
          "Workflow integration with SAP",
          "AWS Step Functions",
          "Azure Logic Apps SAP connector",
          "Application Integration"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "The SAP angle",
      "lede": "SAP and Microsoft have built integrations on both sides. On the SAP side, Joule is SAP's AI assistant, and its integration with Microsoft 365 Copilot is activated through SAP AI Units and needs a licensed Microsoft 365 Copilot environment and aligned identities. The SAP S/4HANA for Microsoft Teams app works with SAP S/4HANA Cloud and SAP S/4HANA, including from Outlook and Microsoft 365. Under RISE with SAP, SAP runs the SAP systems, but identity, Microsoft 365 configuration and the integration settings are still your responsibility, and that is where we help. For ECC customers, Entra ID can still provide single sign-on and provisioning, even before an S/4HANA move.",
      "items": [
        "Joule and Microsoft 365 Copilot integration requires an activated Joule instance and a licensed Microsoft 365 Copilot environment.",
        "The SAP S/4HANA for Microsoft Teams app supports sharing Fiori content as chat, tab or card, plus task notifications.",
        "Microsoft Entra ID can provision users to SAP ECC, SAP S/4HANA on-premise and SAP cloud apps through SAP Cloud Identity Services.",
        "SAP Identity Management reaches end of maintenance in 2027, so identity planning belongs in every ECC to S/4HANA roadmap."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Integration readiness report covering SAP releases, Microsoft 365 licences and identity",
        "Single sign-on and user provisioning between Microsoft Entra ID and SAP",
        "Joule and Microsoft 365 Copilot integration configured for agreed scenarios",
        "SAP S/4HANA for Microsoft Teams app and SAP Analytics Cloud Excel add-in deployed",
        "SAP Identity Management migration plan",
        "User guides, admin runbooks and training for key users"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "What does the Joule and Microsoft 365 Copilot integration do?",
          "It lets users reach SAP tasks and data through Joule from Microsoft 365 Copilot, and Microsoft 365 information from Joule. Microsoft Teams is the first supported access point. The integration is opt-in and must be activated on both sides."
        ],
        [
          "What do we need before we can use it?",
          "You need an activated Joule instance in your SAP landscape, a licensed Microsoft 365 Copilot environment, aligned identities between SAP and Microsoft, and the trust configuration between the platforms. Use of the integration consumes SAP AI Units. We check each prerequisite and the availability for your country before starting."
        ],
        [
          "We are still on SAP ECC. Can we connect it to Microsoft 365?",
          "Partly. Microsoft Entra ID can provide single sign-on and user provisioning for SAP ECC, and Excel and Power BI can work with ECC data. Joule and the SAP S/4HANA for Microsoft Teams app are built for newer SAP solutions, so many customers plan them as part of the move to S/4HANA."
        ],
        [
          "Should we replace SAP Identity Management with Microsoft Entra ID?",
          "If you already run Microsoft Entra ID, it is a strong option. SAP Identity Management maintenance ends in 2027, SAP points to SAP Cloud Identity Services as its strategic direction, and Microsoft publishes guidance for moving SAP Identity Management scenarios to Entra ID. Most designs use both, with Entra ID as the source and SAP Cloud Identity Services distributing access into SAP."
        ],
        [
          "Is our SAP data safe when Copilot can see it?",
          "Copilot and Joule work within the user's existing permissions, so access control in SAP and Entra ID matters most. We review roles, sensitive data and conditional access policies before rollout. We also set up monitoring so you can see how the integration is used."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Build & Connect",
        "Identity & Single Sign-On",
        "identity-single-sign-on"
      ],
      [
        "Data, AI & Skills",
        "AI & Data on SAP Data",
        "ai-data-on-sap"
      ],
      [
        "Cloud Platforms",
        "Microsoft Azure",
        "microsoft-azure"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP: Joule and Microsoft 365 Copilot",
        "https://www.sap.com/products/artificial-intelligence/joule-joule-and-microsoft-365-copilot.html"
      ],
      [
        "SAP Learning: Setting up Joule with Microsoft 365 Copilot",
        "https://learning.sap.com/courses/setting-up-joule-across-your-organizational-system-landscapes/setting-up-joule-with-microsoft-365-copilot"
      ],
      [
        "SAP News: Joule and Microsoft 365 Copilot integration",
        "https://news.sap.com/2024/11/joule-microsoft-365-copilot-integration-redefining-productivity/"
      ],
      [
        "Microsoft AppSource: SAP S/4HANA for Microsoft Teams",
        "https://appsource.microsoft.com/en-us/product/office/wa200005087"
      ],
      [
        "Microsoft Marketplace: SAP Analytics Cloud for Excel",
        "https://marketplace.microsoft.com/en-us/product/office/wa200000169"
      ],
      [
        "Microsoft Learn: Entra ID Governance for SAP",
        "https://learn.microsoft.com/entra/id-governance/sap"
      ],
      [
        "SAP Community: SAP Identity Management end of maintenance",
        "https://blogs.sap.com/t5/technology-blogs-by-sap/preparing-for-sap-identity-management-s-end-of-maintenance-in-2027/ba-p/13596101"
      ],
      [
        "Microsoft Fabric: SAP BDC Connect for Microsoft Fabric",
        "https://blog.fabric.microsoft.com/en-GB/blog/29410/"
      ]
    ]
  },
  {
    "slug": "devops-automation",
    "label": "DevOps & Automation",
    "group": "Data, AI & skills",
    "description": "We build CI/CD pipelines and automation for SAP BTP apps, ABAP code, cloud infrastructure and custom applications, using SAP Continuous Integration and…",
    "crumb": "Data, AI & Skills",
    "eyebrow": "Cloud Infrastructure · Data, AI & Skills",
    "h1": [
      "Ship SAP and cloud changes faster,",
      "with pipelines you can audit."
    ],
    "lede": "We build CI/CD pipelines and automation for SAP BTP apps, ABAP code, cloud infrastructure and custom applications, using SAP Continuous Integration and Delivery, GitHub Actions, Azure DevOps, AWS CodePipeline or Google Cloud Build. Changes move from developer to production through repeatable, tested and traceable steps, instead of manual transports and late night deployments.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "2020",
        "SAP S/4HANA release where gCTS covers workbench and customising objects"
      ],
      [
        "3",
        "CI/CD options SAP documents for CAP apps on SAP BTP"
      ],
      [
        "5",
        "Systems in SAP's recommended ABAP environment DevOps landscape"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why SAP teams need DevOps",
      "lede": "Many SAP teams still move changes by hand: transports released by email, BTP apps deployed from a laptop and cloud infrastructure built by clicking in a console. That works until something breaks in production and nobody can say exactly what changed. As SAP landscapes move to RISE with SAP, SAP BTP and hyperscaler services, the number of moving parts grows. Pipelines and automation make every change repeatable, tested and recorded.",
      "items": [
        [
          "Fewer manual errors",
          "Automated builds, tests and deployments run the same way every time. Problems are caught in development, not after go-live."
        ],
        [
          "An audit trail by default",
          "Git history, pipeline logs and SAP Cloud Transport Management records show who changed what and when. Auditors get evidence without a spreadsheet hunt."
        ],
        [
          "ABAP joins modern tooling",
          "gCTS manages ABAP changes with Git, and abapGit moves code between systems outside the gCTS boundary. ABAP developers can work with the same practices as cloud teams."
        ],
        [
          "Infrastructure as code",
          "SAP landscapes on AWS, Azure and Google Cloud can be built with Terraform and Ansible, and SAP BTP accounts with the Terraform provider for SAP BTP. Environments can be rebuilt on demand."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We set up and run the pipelines and automation your SAP and cloud teams need.",
      "items": [
        [
          "01",
          "CI/CD for SAP BTP apps",
          "We set up SAP Continuous Integration and Delivery with predefined pipelines for CAP, SAP Fiori and SAP Integration Suite content. For more control, we build pipelines on GitHub Actions or with SAP Project Piper."
        ],
        [
          "02",
          "Transports with SAP Cloud Transport Management",
          "We connect pipelines to SAP Cloud Transport Management so tested changes move into test and production subaccounts through approved routes. Each transport is recorded."
        ],
        [
          "03",
          "ABAP DevOps with gCTS and abapGit",
          "We set up gCTS for SAP S/4HANA and the SAP BTP ABAP environment, with automated ABAP Unit and ATC checks. We use abapGit to move custom code from ECC to S/4HANA or to the cloud."
        ],
        [
          "04",
          "Infrastructure pipelines",
          "We build Terraform and Ansible pipelines for SAP landscapes and surrounding cloud resources. We use SAP Deployment Automation Framework on Azure, AWS Launch Wizard for SAP and Google Cloud Workload Manager where they fit."
        ],
        [
          "05",
          "Pipelines for custom and non-SAP apps",
          "We build CI/CD for web apps, integrations and services on Azure DevOps, GitHub Actions, AWS CodePipeline or Google Cloud Build and Cloud Deploy. Security scanning and approvals are part of every pipeline."
        ],
        [
          "06",
          "Operations automation",
          "We automate routine SAP BTP tasks and alert responses with SAP Automation Pilot, and connect monitoring to SAP Cloud ALM. Recurring manual work shrinks."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess",
          "We review how changes move today across ABAP, SAP BTP, infrastructure and custom apps. We identify the biggest risks and delays.",
          "1 to 2 weeks"
        ],
        [
          "Design",
          "We define branching, environments, approvals and the toolchain for each type of change. We align it with your change management and audit requirements.",
          "1 to 3 weeks"
        ],
        [
          "Build",
          "We set up repositories, pipelines, test automation and transport routes for a first application or landscape. We store secrets in the cloud's secret manager, never in code.",
          "3 to 6 weeks"
        ],
        [
          "Expand",
          "We bring more applications, systems and teams onto the pipelines. We train developers and Basis staff along the way.",
          "4 to 8 weeks"
        ],
        [
          "Run and improve",
          "We maintain pipelines, update tools and track deployment frequency and failure rates. We tune the process as your team matures.",
          "Ongoing"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Native DevOps services per cloud",
      "lede": "We use SAP DevOps services together with the native tools of your cloud, or GitHub across all of them.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Build and deploy pipelines",
          "AWS CodePipeline, AWS CodeBuild",
          "Azure Pipelines (Azure DevOps), GitHub Actions",
          "Cloud Build, Cloud Deploy"
        ],
        [
          "Infrastructure as code",
          "AWS CloudFormation, Terraform",
          "Bicep, Terraform",
          "Terraform, Infrastructure Manager"
        ],
        [
          "SAP landscape deployment",
          "AWS Launch Wizard for SAP",
          "SAP Deployment Automation Framework",
          "Workload Manager Guided Deployment Automation"
        ],
        [
          "Secrets for pipelines",
          "AWS Secrets Manager",
          "Azure Key Vault",
          "Secret Manager"
        ],
        [
          "Artifact and container registry",
          "Amazon ECR, AWS CodeArtifact",
          "Azure Container Registry, Azure Artifacts",
          "Artifact Registry"
        ],
        [
          "Operations automation",
          "AWS Systems Manager",
          "Azure Automation",
          "Workflows"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "The SAP angle",
      "lede": "SAP offers its own DevOps services on SAP BTP: SAP Continuous Integration and Delivery for predefined pipelines, SAP Cloud Transport Management for controlled transports, SAP Automation Pilot for operations tasks and SAP Cloud ALM for monitoring and change management. For ABAP, gCTS brings Git into the Change and Transport System, and abapGit handles code movement between systems, such as from ECC to S/4HANA. Under RISE with SAP, SAP runs the infrastructure, so pipelines focus on your code, configuration and BTP extensions. Where you run SAP yourself on a hyperscaler, infrastructure pipelines matter too, and we cover both.",
      "items": [
        "SAP Continuous Integration and Delivery cannot be used with the SAP BTP ABAP environment, so we use Project Piper pipelines on a separate CI server there.",
        "gCTS can use an SAP-managed Git repository or your own GitHub, GitLab or Bitbucket.",
        "The Terraform provider for SAP BTP lets us create subaccounts, entitlements and services as code.",
        "Clean core extensions on SAP BTP are easier to keep clean when every change goes through a pipeline."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "DevOps assessment and target toolchain design",
        "Working CI/CD pipelines for SAP BTP apps and custom applications",
        "gCTS or abapGit setup with automated ABAP checks",
        "Terraform and Ansible code for SAP BTP and cloud infrastructure",
        "Transport routes in SAP Cloud Transport Management with approvals",
        "Runbooks and training for developers and Basis teams"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Which CI/CD tool should we use for SAP BTP?",
          "SAP Continuous Integration and Delivery is the quickest start, with predefined pipelines and no CI server to run. GitHub Actions or Project Piper give more flexibility if you already use them or need custom steps. We often combine them with SAP Cloud Transport Management for controlled releases."
        ],
        [
          "Can we use Git for ABAP?",
          "Yes. gCTS manages ABAP changes and transports using Git, covering workbench and customising objects from SAP S/4HANA 2020. In the SAP BTP ABAP environment, each software component maps to one Git repository. abapGit is used to move code outside that boundary, for example from ECC."
        ],
        [
          "Does DevOps apply under RISE with SAP?",
          "Yes, but the scope changes. SAP runs the infrastructure under RISE with SAP, so you do not automate VMs or databases. Your code, configuration, SAP BTP extensions, integrations and the cloud resources in your own account still benefit from pipelines."
        ],
        [
          "Do we have to replace our current transport process?",
          "No. We usually start by automating checks and BTP deployments alongside your existing transports, then extend step by step. Change Request Management in SAP Solution Manager 7.2 or SAP Cloud ALM can stay in charge of approvals."
        ],
        [
          "Which cloud DevOps tool do you recommend?",
          "We use what fits your estate: Azure DevOps or GitHub Actions on Azure, AWS CodePipeline on AWS, Cloud Build and Cloud Deploy on Google Cloud. GitHub Actions works across all three clouds and SAP BTP. The pipeline design matters more than the brand of tool."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Build & Connect",
        "Infrastructure as Code",
        "infrastructure-as-code"
      ],
      [
        "Run & Optimise",
        "Managed Cloud Operations",
        "managed-cloud-operations"
      ],
      [
        "Data, AI & Skills",
        "Training & Enablement",
        "training-enablement"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "SAP: Continuous Integration and Delivery",
        "https://www.sap.com/products/technology-platform/continuous-integration-and-delivery.html"
      ],
      [
        "SAP Architecture Center: DevOps with SAP BTP",
        "https://architecture.learning.sap.com/docs/ref-arch/b51e91"
      ],
      [
        "CAP documentation: Deploy using CI/CD pipelines",
        "https://cap.cloud.sap/docs/guides/deploy/cicd"
      ],
      [
        "SAP Learning: DevOps for SAP BTP ABAP environment",
        "https://learning.sap.com/courses/exploring-devops-with-sap-btp/explaining-your-sap-btp-account-model-for-devops_aeff6f9c-7049-4863-93d3-20dc9b2bbf2c"
      ],
      [
        "SAP Support: Change and Transport System and gCTS",
        "https://support.sap.com/ja/tools/software-logistics-tools/change-and-transport-system.html"
      ],
      [
        "GitHub: Terraform provider for SAP BTP",
        "https://github.com/SAP/terraform-provider-btp"
      ],
      [
        "Microsoft Learn: SAP Deployment Automation Framework",
        "https://learn.microsoft.com/azure/sap/automation/deployment-framework"
      ],
      [
        "AWS: Launch Wizard for SAP",
        "https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html"
      ],
      [
        "Google Cloud: Automating SAP deployments",
        "https://docs.cloud.google.com/sap/docs/automation-for-sap"
      ]
    ]
  },
  {
    "slug": "training-enablement",
    "label": "Training & Enablement",
    "group": "Data, AI & skills",
    "description": "We train SAP Basis, infrastructure, development and finance teams to work confidently on AWS, Microsoft Azure, Google Cloud and SAP BTP.",
    "crumb": "Data, AI & Skills",
    "eyebrow": "Cloud Infrastructure · Data, AI & Skills",
    "h1": [
      "Build the cloud skills your SAP team needs,",
      "so you can run what we build together."
    ],
    "lede": "We train SAP Basis, infrastructure, development and finance teams to work confidently on AWS, Microsoft Azure, Google Cloud and SAP BTP. Training is tied to your own landscape and to current certification paths, so your people can operate, troubleshoot and improve the cloud estate after go-live.",
    "cta1": "Talk to a cloud architect →",
    "cta2": "See how it works",
    "facts": [
      [
        "Apr 2024",
        "AWS retired its SAP on AWS Specialty certification exam"
      ],
      [
        "AZ-120",
        "Azure for SAP Workloads Specialty exam, skills updated April 2026"
      ],
      [
        "3,000",
        "Nearly this many courses and labs on Google Skills"
      ]
    ],
    "why": {
      "eyebrow": "Why it matters",
      "h2": "Why cloud skills matter for SAP teams",
      "lede": "Moving SAP to the cloud changes the job. Basis teams that sized servers and patched operating systems now work with cloud networking, identity, infrastructure as code and cost reports. Under RISE with SAP, SAP runs the infrastructure, but your team still owns integration, security on your side, SAP BTP and the systems around SAP. Without the right skills, teams depend on outside help for every change, and cloud spend drifts because nobody reads the bill.",
      "items": [
        [
          "Roles are changing",
          "Basis administrators need cloud networking, high availability and automation skills alongside SAP. Developers need Git, pipelines and SAP BTP."
        ],
        [
          "Certifications move",
          "AWS retired its SAP on AWS Specialty exam in 2024 and renamed SysOps Administrator to CloudOps Engineer. Microsoft keeps AZ-120 for SAP on Azure. We keep learning plans current."
        ],
        [
          "Cost is everyone's job",
          "Cloud costs depend on daily decisions about sizing, shutdown schedules and storage. Leaders and finance teams need enough understanding to ask the right questions."
        ],
        [
          "Learning by doing sticks",
          "Hands-on labs in your own sandbox or on AWS Skill Builder, Microsoft Learn and Google Skills build confidence faster than slides."
        ]
      ]
    },
    "str": null,
    "what": {
      "eyebrow": "What we do",
      "h2": "What we do",
      "lede": "We plan and deliver practical training for every role that touches your SAP cloud estate.",
      "items": [
        [
          "01",
          "Skills assessment",
          "We map the skills your team has against the roles your cloud operating model needs. The result is a learning plan per person, with priorities."
        ],
        [
          "02",
          "Cloud for SAP Basis",
          "We teach networking, identity, high availability, backup and monitoring for SAP on AWS, Azure or Google Cloud. Sessions use your actual architecture, not generic examples."
        ],
        [
          "03",
          "Certification paths",
          "We guide people through the right exams, such as AZ-120 for SAP on Azure, AWS Certified Solutions Architect or CloudOps Engineer, and Google Professional Cloud Architect. We combine official learning paths with practice on real tasks."
        ],
        [
          "04",
          "SAP BTP and DevOps skills",
          "We train administrators and developers on SAP BTP account management, Git, CI/CD and infrastructure as code. SAP's administrator certification for the platform, now titled SAP Business AI Platform Administrator, is an option."
        ],
        [
          "05",
          "Cost awareness for leaders",
          "We run short sessions for managers and finance on how cloud billing works, what drives cost and how to read reports. FinOps Foundation practices give a shared language."
        ],
        [
          "06",
          "Hands-on labs and handover",
          "We build sandbox labs for failover tests, restores and deployments. During projects, your staff work alongside our engineers and take on tasks step by step."
        ]
      ]
    },
    "how": {
      "eyebrow": "How it works",
      "h2": "How it works",
      "lede": null,
      "steps": [
        [
          "Assess skills",
          "We interview team members and review roles against your target operating model. We agree which skills are needed first.",
          "1 to 2 weeks"
        ],
        [
          "Plan learning",
          "We build a learning plan per role that mixes official courses, certification goals and labs on your landscape. Managers sign off time and goals.",
          "1 week"
        ],
        [
          "Deliver training",
          "We run workshops, labs and coaching sessions in blocks that fit around project and support work. Sessions can be on site in Colombo or remote.",
          "4 to 12 weeks"
        ],
        [
          "Practise on real work",
          "Team members take on tasks in the project or support queue with our engineers alongside. We review and give feedback.",
          "During the project"
        ],
        [
          "Review and refresh",
          "We check progress against the plan and update it as cloud services and certifications change.",
          "Every 6 months"
        ]
      ]
    },
    "tbl": {
      "eyebrow": "Across AWS, Azure and Google Cloud",
      "h2": "Certification and learning paths per cloud",
      "lede": "We match each role to the current certification and learning resources on your cloud.",
      "cols": [
        "Need",
        "AWS",
        "Microsoft Azure",
        "Google Cloud"
      ],
      "rows": [
        [
          "Cloud basics for everyone",
          "AWS Certified Cloud Practitioner",
          "Microsoft Certified: Azure Fundamentals (AZ-900)",
          "Cloud Digital Leader"
        ],
        [
          "AI basics for leaders",
          "AWS Certified AI Practitioner",
          "Microsoft Learn AI learning paths",
          "Generative AI Leader"
        ],
        [
          "Administration and operations",
          "AWS Certified CloudOps Engineer, Associate",
          "Azure Administrator Associate (AZ-104)",
          "Associate Cloud Engineer"
        ],
        [
          "Architecture",
          "AWS Certified Solutions Architect, Associate and Professional",
          "Azure Solutions Architect Expert (AZ-305)",
          "Professional Cloud Architect"
        ],
        [
          "SAP on the cloud",
          "SAP courses on AWS Skill Builder (Specialty exam retired 2024)",
          "Azure for SAP Workloads Specialty (AZ-120)",
          "Professional Cloud Architect with SAP on Google Cloud guides"
        ],
        [
          "DevOps and automation",
          "AWS Certified DevOps Engineer, Professional",
          "DevOps Engineer Expert (AZ-400)",
          "Professional Cloud DevOps Engineer"
        ],
        [
          "Hands-on labs",
          "AWS Skill Builder and AWS Builder Labs",
          "Microsoft Learn",
          "Google Skills"
        ]
      ]
    },
    "sap": {
      "eyebrow": "For SAP landscapes",
      "h2": "The SAP angle",
      "lede": "SAP skills and cloud skills now overlap. Under RISE with SAP, SAP operates the infrastructure, so your team focuses on integration, identity, SAP BTP, the network link to your cloud account and the non-SAP systems around SAP. Where you run ECC or S/4HANA yourself on a hyperscaler, your team, with us, also runs the VMs, databases, backups and failover, which needs deeper cloud skills. ECC mainstream maintenance ends at the end of 2027, with optional extended maintenance to 2030, so many teams are learning cloud and S/4HANA at the same time. We plan training to match the model you choose.",
      "items": [
        "AZ-120 covers SAP on Azure migration, infrastructure, high availability and integration with RISE with SAP.",
        "AWS offers SAP learning on AWS Skill Builder, including an SAP Generative AI on AWS course published in 2026.",
        "SAP Learning offers the SAP Certified SAP Business AI Platform Administrator exam (C_ADBTP) for teams that manage SAP BTP.",
        "Training for RISE with SAP customers focuses on your responsibilities, not on infrastructure SAP manages."
      ]
    },
    "del": {
      "eyebrow": "What you get",
      "h2": "Deliverables",
      "items": [
        "Skills assessment and gap report by role",
        "Individual learning plans with certification goals",
        "Workshops and labs built on your own SAP cloud architecture",
        "Cost awareness session for leaders and finance",
        "Runbooks and recorded walkthroughs for key operations tasks",
        "Six-monthly progress review and plan refresh"
      ]
    },
    "faq": {
      "eyebrow": "Questions",
      "h2": "Frequently asked",
      "items": [
        [
          "Is there still an AWS certification for SAP?",
          "No. AWS retired the AWS Certified: SAP on AWS Specialty exam in April 2024, and existing holders keep it for three years from the date earned. We now combine AWS Certified Solutions Architect or CloudOps Engineer with SAP-specific courses on AWS Skill Builder and practice on your landscape."
        ],
        [
          "Is AZ-120 still current?",
          "Yes. AZ-120, Planning and Administering Azure for SAP Workloads, earns the Azure for SAP Workloads Specialty certification, and Microsoft updated its skills outline in April 2026. Like other Microsoft role-based and specialty certifications, it must be renewed every 12 months through an online assessment on Microsoft Learn."
        ],
        [
          "Does Google Cloud have an SAP certification?",
          "Google Cloud does not currently list an SAP-specific certification. For SAP on Google Cloud, we recommend Professional Cloud Architect or Associate Cloud Engineer, combined with Google's SAP on Google Cloud documentation and labs on Google Skills."
        ],
        [
          "Our managers do not need to be engineers. What do they get?",
          "Leaders get short, practical sessions on how cloud services are billed, what drives cost and risk, and which questions to ask their teams and suppliers. Foundational options such as AWS Certified Cloud Practitioner, Azure Fundamentals, Cloud Digital Leader or Generative AI Leader suit those who want a credential."
        ],
        [
          "Can training happen during our project?",
          "Yes, and that is usually best. Your staff work alongside our engineers on real tasks, with workshops at key points such as design, build and cutover. By go-live, your team has already done the work it will support."
        ]
      ]
    },
    "relH": {
      "eyebrow": "Related services",
      "h2": "Often paired with this"
    },
    "rels": [
      [
        "Run & Optimise",
        "Managed Cloud Operations",
        "managed-cloud-operations"
      ],
      [
        "Run & Optimise",
        "FinOps & Cost Optimisation",
        "finops-cost-optimisation"
      ],
      [
        "Data, AI & Skills",
        "DevOps & Automation",
        "devops-automation"
      ]
    ],
    "cta": {
      "eyebrow": "Next step",
      "h2": "Plan your move with people who know SAP.",
      "lede": "One working session with our cloud and SAP architects. You leave with the options, the risks and a first plan.",
      "btn": "Talk to a cloud architect →",
      "items": [
        "Your landscape reviewed",
        "The right cloud and region",
        "A first roadmap"
      ]
    },
    "sources": [
      [
        "AWS: Certification retirements and launches",
        "https://aws.amazon.com/blogs/training-and-certification/aws-certification-retirements-and-launches/"
      ],
      [
        "Microsoft Learn: AZ-120 study guide",
        "https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-120"
      ],
      [
        "Microsoft Learn: Azure Administrator Associate",
        "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/"
      ],
      [
        "Microsoft Learn: Azure Solutions Architect Expert",
        "https://learn.microsoft.com/certifications/azure-solutions-architect"
      ],
      [
        "Google Cloud: Certifications",
        "https://cloud.google.com/learn/certification"
      ],
      [
        "Google Cloud: Google Skills launch",
        "https://cloud.google.com/blog/topics/training-certifications/google-skills-new-home-AI-learning"
      ],
      [
        "AWS Builder Center: AWS certification roadmap 2026",
        "https://builder.aws.com/content/3KNM7EdJJqiAVvYTjRSRUst6DeQ/aws-certification-roadmap-which-cert-to-take-next-and-how-to-prepare"
      ],
      [
        "AWS for SAP: SAP Generative AI on AWS course",
        "https://aws.amazon.com/blogs/awsforsap/sap-generative-ai-on-aws-course-now-on-aws-skill-builder/"
      ],
      [
        "SAP Learning: SAP Business AI Platform Administrator certification",
        "https://learning.sap.com/certifications/sap-certified-associate-sap-btp-administrator"
      ],
      [
        "Linux Foundation: FinOps Certified Practitioner",
        "https://training.linuxfoundation.org/certification/certified-finops/"
      ]
    ]
  }
];
