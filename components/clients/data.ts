export type PlatformKey = "sf" | "rise" | "grow";

/** What the client list needs, and what a visitor can see before they unlock the case studies. */
export type ClientCard = {
  id: string;
  n: string;
  p: PlatformKey;
  co: string;
  ind: string;
  st?: string;
  prods: [string, string][];
  /** The case study's headline. The body is gated: see lib/case-access/case-details.ts. */
  t: string;
};

/** The body of a case study. It lives on the server and is only sent to visitors who have unlocked access. */
export type CaseDetail = {
  about: string;
  f: [string, string][];
  plat: string;
  mh: string;
  mods: string[];
  areas: string[];
  ah?: string;
  ih: string;
  ints: [string, string][];
  r: [string, string, number][];
};

export type Client = ClientCard & CaseDetail;

export const platforms: Record<PlatformKey, string> = { sf: "Salesforce", rise: "RISE with SAP", grow: "GROW with SAP" };

/** The public side of the case studies from the supplied Clients page. */
export const clients: ClientCard[] = [
  { id: "lanka-tiles", n: "Lanka Tiles PLC", p: "sf", co: "Sri Lanka", ind: "Retail and distribution", prods: [["Sales Cloud","sf"],["CPQ","sf"],["SAP S/4HANA integration",""]], t: "Salesforce Sales Cloud and CPQ, integrated with SAP S/4HANA, across 60+ showrooms" },
  { id: "royal-ceramics", n: "Royal Ceramics Lanka PLC", p: "sf", co: "Sri Lanka", ind: "Manufacturing and retail", prods: [["Sales Cloud","sf"],["CPQ","sf"],["Oracle ERP integration","op"]], t: "Salesforce Sales Cloud and CPQ, integrated with Oracle ERP, across 75+ Rocell showrooms" },
  { id: "vitawell", n: "Vitawell (Pvt) Ltd", p: "sf", co: "Sri Lanka", ind: "Health and wellness retail", prods: [["Sales Cloud","sf"],["Marketing Cloud","sf"],["Customer 360","sf"]], t: "Salesforce Sales Cloud, Marketing Cloud and Customer 360, integrated with a local ERP" },
  { id: "john-keells", n: "John Keells Restaurants", p: "sf", co: "Sri Lanka", ind: "Quick service restaurants", st: "In progress", prods: [["Sales Cloud","sf"],["Service Cloud","sf"],["Marketing Cloud","sf"],["Customer 360","sf"]], t: "Salesforce Sales Cloud, Service Cloud, Marketing Cloud and Customer 360, for a new restaurant launch" },
  { id: "cic", n: "CIC Holdings PLC", p: "rise", co: "Sri Lanka", ind: "Diversified conglomerate", prods: [["RISE with SAP",""],["S/4HANA Cloud Private Edition",""],["ECC migration",""]], t: "SAP ECC to S/4HANA Cloud Private Edition with RISE with SAP, across all group entities" },
  { id: "link-natural", n: "Link Natural Products", p: "rise", co: "Sri Lanka", ind: "Herbal and Ayurveda manufacturing", prods: [["RISE with SAP",""],["S/4HANA Cloud Private Edition",""],["New implementation",""]], t: "New SAP S/4HANA rollout on the CIC Holdings RISE with SAP landscape, replacing a local ERP" },
  { id: "cmg", n: "Capital Maharaja Group", p: "rise", co: "Sri Lanka", ind: "Diversified group", prods: [["RISE with SAP",""],["S/4HANA Cloud Private Edition",""],["ECC migration",""]], t: "SAP ECC to S/4HANA Cloud Private Edition with RISE with SAP, across all CMG companies" },
  { id: "cbl", n: "CBL Group", p: "rise", co: "Sri Lanka", ind: "Food manufacturing", prods: [["RISE with SAP",""],["S/4HANA Cloud Private Edition",""],["ECC migration",""]], t: "SAP ECC to S/4HANA Cloud Private Edition with RISE with SAP, for a food maker exporting to 65+ countries" },
  { id: "suwanda", n: "Suwanda Industries", p: "rise", co: "Sri Lanka", ind: "Incense and home fragrance manufacturing", prods: [["RISE with SAP",""],["S/4HANA Cloud Private Edition",""],["SAP BTP",""]], t: "RISE with SAP, S/4HANA Cloud Private Edition, across all company processes" },
  { id: "luminous", n: "Luminous Power Technologies", p: "rise", co: "India", ind: "Power backup and solar", prods: [["RISE with SAP",""],["S/4HANA conversion",""],["SAP RAR",""],["SAP GRC",""],["SAP Integration Suite",""],["Application management",""]], t: "SAP ECC to S/4HANA, moved to RISE with SAP in 2021, with managed support since 2014" },
  { id: "rr-kabel", n: "RR Kabel", p: "rise", co: "India", ind: "Electrical wires and cables", prods: [["RISE with SAP",""],["Carve-out",""],["SAP EWM",""],["Group rollouts",""],["Application management",""]], t: "SAP carve-out from its parent, moved to RISE with SAP in 2022, with group company rollouts" },
  { id: "lohia", n: "Lohia Corp", p: "rise", co: "India", ind: "Engineering and machinery", prods: [["RISE with SAP",""],["Suite on HANA",""],["ECC migration",""]], t: "SAP ECC to RISE with SAP via Suite on HANA, across Lohia Corp and Leesona US" },
  { id: "eswaran", n: "Eswaran Brothers Exports", p: "grow", co: "Sri Lanka", ind: "Tea export and manufacturing", prods: [["GROW with SAP",""],["S/4HANA Cloud Public Edition",""],["SAP BTP",""]], t: "GROW with SAP across all business processes, with a tea manufacturing module on SAP BTP" },
  { id: "ceylon-beverage-can", n: "Ceylon Beverage Can", p: "grow", co: "Sri Lanka and India", ind: "Aluminium can manufacturing", st: "In progress", prods: [["GROW with SAP",""],["S/4HANA Cloud Public Edition",""]], t: "GROW with SAP across all business processes, for Sri Lanka and the Chennai operations" },
];
