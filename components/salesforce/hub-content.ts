// The questions the Salesforce hub answers. The text is the single source for both the visible FAQ and the FAQ
// structured data. Every answer follows Salesforce's own published material.

export const hubFaq: { q: string; a: string }[] = [
  {
    q: "What is the Salesforce platform, and how do the products fit together?",
    a: "Salesforce's applications, such as Sales, Service, Marketing and Commerce, run on a shared platform. Data 360 is the data layer, Agentforce is the agent layer, and Slack, Tableau and MuleSoft add collaboration, analytics and integration. Salesforce describes its portfolio as sharing the same data and the same agent platform.",
  },
  {
    q: "Which five products should we look at first?",
    a: "Sales Cloud, Data 360, Marketing Cloud, Loyalty Management and Service Cloud are the products most teams build their Salesforce use around. The others, such as Agentforce, Revenue Cloud and MuleSoft, support them.",
  },
  {
    q: "What is Agentforce, and how is it different from a chatbot?",
    a: "Agentforce is Salesforce's platform for building, deploying and monitoring AI agents. A scripted chatbot follows a fixed path. An agent interprets a request, builds a plan and chooses from the tools it has, and it can also be started by a data change.",
  },
  {
    q: "What is Data 360, and was it called Data Cloud?",
    a: "Data 360 is Salesforce's data platform, formerly called Data Cloud. Some older pages and training still use the earlier name.",
  },
  {
    q: "Do we have to copy our data into Salesforce?",
    a: "Not always. Salesforce's zero-copy approach lets Data 360 query warehouse and lake data where it lives. Data can also be ingested when that suits the use case.",
  },
  {
    q: "How does Salesforce keep AI safe?",
    a: "Salesforce describes a trust layer that retrieves data securely under each user's permissions, does not store prompts or use them to train third-party models, masks personal details, and scans generated content. It also describes guardrails on agents and an audit trail. Its own pages differ slightly in how they list these features, so check the page for the one you rely on.",
  },
  {
    q: "Can Salesforce work alongside our ERP?",
    a: "Yes, in principle. MuleSoft publishes an SAP connector for SAP ECC and S/4HANA on-premises, and Salesforce says Manufacturing Cloud is designed to work alongside ERP systems. The pages we read do not confirm support for SAP's cloud editions, so check your edition with Salesforce or MuleSoft.",
  },
  {
    q: "Where is our data stored?",
    a: "On Hyperforce, Salesforce's public-cloud infrastructure, customers choose the region where data is stored and processed. Availability varies by product and country.",
  },
];
