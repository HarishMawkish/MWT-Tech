import type { ReactNode } from "react";
import { CtaBand, Defs, d, Faq, FlowSteps, Head, Hero, Pairs, ProductIndex, SupportDirectory, WordList } from "./parts";
import { Screen } from "./screens";
import { StartPicker } from "./StartPicker";
import { hubFaq } from "./hub-content";

/** The Salesforce hub. It leads with the five main products and treats everything else as support. */
export function HubBody() {
  const bands: { node: (light: boolean) => ReactNode }[] = [];
  const add = (node: (light: boolean) => ReactNode) => bands.push({ node });

  add((light) => (
    <section className={light ? "light" : undefined} id="five" key="five">
      <div className="in">
        <Head
          eyebrow="The five main products"
          title="Start with these five."
          lede="Sales, data, marketing, loyalty and service are the products most teams build their Salesforce use around. Each one has its own page."
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
    <section className={light ? "light" : undefined} id="start" key="start">
      <div className="in">
        <Head
          eyebrow="Where to start"
          title="Find the gap that bites most."
          lede="Pick the problem closest to yours. We will show which of the five usually comes first."
        />
        <StartPicker />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="fit-together" key="fit">
      <div className="in">
        <Head
          eyebrow="How it fits together"
          title="One platform under every product."
          lede="Salesforce describes its platform as shared layers that every product uses. Salesforce's own partner guide names four of them as systems."
        />
        <Defs
          items={[
            { title: "Context: Data 360", body: "Converts structured and unstructured data into the context that models and agents need, so answers rest on a trusted, unified source." },
            { title: "Work: the applications", body: "Sales, Service, Marketing and Commerce, and the industry versions, where the daily workflows run. Salesforce says the aim is to move workflows from suggestions to execution." },
            { title: "Agency: Agentforce", body: "The platform for building agents and the place to find partner agents, so work can be automated with actions the platform provides." },
            { title: "Engagement: Slack", body: "Where agents sit inside conversations and workflows, so people and agents work together." },
          ]}
        />
        <p className="pairs-note" data-r>
          Underneath, Salesforce lists security, privacy and compliance controls, integration and automation through MuleSoft,
          analytics through Tableau, DevOps tools, and the Hyperforce infrastructure.
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="erp" key="erp">
      <div className="in">
        <Head
          eyebrow="Beside your ERP"
          title="Salesforce works alongside the systems you run."
          lede="Salesforce does not replace an ERP. What each of its pages says about connecting to one is set out here, including what is not confirmed."
        />
        <Pairs
          a="Where"
          b="What Salesforce's own material says"
          rows={[
            { l: "MuleSoft and SAP", r: "MuleSoft publishes an SAP connector for SAP ECC and SAP S/4HANA on-premises, over RFC. Its documentation says it needs a separate licence." },
            { l: "SAP cloud editions", r: "The MuleSoft pages we read describe on-premises systems. They do not say whether SAP's cloud editions are supported, so this needs checking for your edition." },
            { l: "Revenue Cloud", r: "Its product catalogue connects to PIM, PLM and ERP systems." },
            { l: "Manufacturing", r: "Manufacturing Cloud is designed to work alongside ERP and supply chain systems, pulling customer, product and asset data from ERP, PLM, IoT and partner systems into one governed place without moving it." },
            { l: "Data 360", r: "Connects to warehouses and lakes in place, and has pre-built connectors for databases and popular apps, with SDKs and APIs for anything else." },
          ]}
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="trust" key="trust">
      <div className="in">
        <Head
          eyebrow="Trust and where data lives"
          title="What Salesforce says about safety and residency."
          lede="From Salesforce's trust, security and Hyperforce pages."
        />
        <Defs
          items={[
            { title: "A trust layer for AI", body: "Salesforce says prompts and responses are not stored or used to train third-party models, personal details are masked before they reach a model, and generated content is scanned for toxicity. People see only the data their permissions allow." },
            { title: "Shared responsibility", body: "Salesforce builds security into the platform, and customers configure their own org settings and access controls. Its security page recommends multi-factor authentication, restricting login IP ranges and moving to TLS 1.3." },
            { title: "Choose your region", body: "On Hyperforce, Salesforce's public-cloud infrastructure, customers choose the region where data is stored and processed. Availability varies by product and country. Hyperforce has no extra charge, and a paid EU option adds stricter residency and in-region support." },
            { title: "Compliance reports", body: "Salesforce says it maintains compliance certifications and attestations and points customers to its compliance and trust sites for the list. We do not name any here." },
          ]}
        />
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="delivery" key="delivery">
      <div className="in">
        <Head
          eyebrow="Implementation and licensing"
          title="What a Salesforce project involves."
          lede="Salesforce's own services page describes four stages. The decisions below are the ones its pricing pages put to a customer."
        />
        <FlowSteps
          label="Salesforce's four stages"
          steps={[
            { t: "Get started", s: "Set a plan, apply best practice and design a foundation that fits how the business operates." },
            { t: "Build", s: "Create working solutions through testing, feedback and launch, with build, integration and data work." },
            { t: "Optimise", s: "Keep it performing: tuning, security, simplification and scaling." },
            { t: "Transform", s: "Adopt AI and new capabilities with guardrails, skills and ways of working." },
          ]}
        />
        <div className="decide" data-r style={d(1)}>
          <h3>Decisions to settle before you buy</h3>
          <ul>
            <li>Which edition, and how many users: most editions are priced per user, per month.</li>
            <li>Billing terms and support plan: Salesforce offers Standard (included), Premier and Signature plans.</li>
            <li>Add-ons: agent features, Revenue Cloud, partner management and digital channels are among those sold separately.</li>
            <li>How you will pay for AI and data: Flex Credits, conversations, per-user licences or profile-based pricing, and how you will monitor use.</li>
          </ul>
        </div>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="industries" key="industries">
      <div className="in">
        <Head
          eyebrow="Industries"
          title="Salesforce publishes material for 17 industries."
          lede="Each has its own page on salesforce.com. We link to them rather than describe them here."
        />
        <WordList
          items={[
            "Automotive", "Communications", "Consumer goods", "Education", "Energy and utilities", "Construction and real estate", "Financial services", "Healthcare", "Life sciences", "Manufacturing", "Media", "Nonprofit", "Professional services", "Public sector", "Retail", "Technology", "Travel, transportation and hospitality",
          ]}
        />
        <p className="pairs-note" data-r>
          <a href="https://www.salesforce.com/industries/" target="_blank" rel="noopener noreferrer">
            Salesforce for industries <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  ));

  add((light) => (
    <section className={light ? "light" : undefined} id="faq" key="faq">
      <div className="in">
        <Head eyebrow="Questions" title="Straight answers." />
        <Faq items={hubFaq} />
        <div className="src" data-r>
          <p>Checked against Salesforce&rsquo;s own pages in November 2026.</p>
          <ul>
            <li><a href="https://www.salesforce.com/products/" target="_blank" rel="noopener noreferrer">Salesforce products</a></li>
            <li><a href="https://www.salesforce.com/platform/" target="_blank" rel="noopener noreferrer">The Salesforce platform</a></li>
            <li><a href="https://www.salesforce.com/hyperforce/" target="_blank" rel="noopener noreferrer">Hyperforce</a></li>
            <li><a href="https://www.salesforce.com/services/" target="_blank" rel="noopener noreferrer">Salesforce services and success plans</a></li>
            <li><a href="https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/partners/readiness/Official-Agentic-Enterprise-Partner-Guidebook.pdf" target="_blank" rel="noopener noreferrer">Agentic Enterprise Partner Guidebook (Salesforce)</a></li>
          </ul>
        </div>
      </div>
    </section>
  ));

  return (
    <>
      <Hero
        crumb="Salesforce"
        eyebrow="Salesforce"
        title={
          <>
            Five products at the core, <em>one platform underneath.</em>
          </>
        }
        lede="Salesforce is a set of products on one platform. Sales, data, marketing, loyalty and service are the five most teams start with. Everything else here, from agents to integration, supports them."
        primary={{ label: "See the five", href: "#five" }}
        secondary={{ label: "Where to start", href: "#start" }}
        note="Product names on this site follow Salesforce's own pages. Data 360 was formerly Data Cloud."
        visual={
          <figure style={{ margin: 0 }}>
            <Screen
              spec={{
                app: "Salesforce · The five",
                label: "Illustration listing the five main Salesforce products and what each is for. Sample data.",
                rows: {
                  title: "Main products",
                  items: [
                    { a: "Sales Cloud", b: "Sell", pill: { t: "Pipeline", tone: "in" } },
                    { a: "Data 360", b: "Unify", pill: { t: "Profiles", tone: "in" } },
                    { a: "Marketing Cloud", b: "Engage", pill: { t: "Journeys", tone: "in" } },
                    { a: "Loyalty Management", b: "Retain", pill: { t: "Programmes", tone: "in" } },
                    { a: "Service Cloud", b: "Serve", pill: { t: "Cases", tone: "in" } },
                  ],
                },
                chat: { title: "Agentforce", msgs: [{ who: "a", t: "I can help with that, and hand over to a person if needed." }] },
              }}
            />
            <figcaption className="caption">Illustration, simplified. Sample data.</figcaption>
          </figure>
        }
      />
      {bands.map((b, i) => b.node(i % 2 === 0))}
      <CtaBand
        title="Not sure where to start with Salesforce?"
        lede="Tell us what you want it to do. We will help you work out which of the five comes first, and what can wait."
        list={["Your goals and the systems involved", "Which of the five fits first", "A sensible first step"]}
      />
    </>
  );
}
