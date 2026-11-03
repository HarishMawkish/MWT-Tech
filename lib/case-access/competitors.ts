// Companies that sell SAP or Salesforce services in Sri Lanka and India. Anyone signing in with an email on one of
// these domains is not given access to the case studies.
//
// HOW THIS LIST WAS BUILT (checked 2 November 2026)
// An entry is here only if there is evidence for BOTH its domain and its offer:
//   - the domain: the company's own homepage was fetched and its title (or the address it redirects to) matched
//     the company, or it is the company's long-established primary domain; and
//   - the offer: the company is named as a Salesforce or SAP partner in a source read for this list (the sources
//     are in `evidence`), or its own homepage advertises SAP or Salesforce services.
// A wrongly blocked prospect costs more than a competitor reading a marketing case study, so anything that could
// not be verified was left out rather than guessed. This is a starting list, not a complete census: there are
// hundreds of SAP and Salesforce partners across the two countries. To add a company, add one entry below; matching
// covers the domain and every subdomain of it (so "deloitte.com" also covers "x@in.deloitte.com").
//
// KNOWN LIMITS
//  - Group-wide domains are deliberately not listed, because they would also block people who are not
//    competitors. keells.com and softlogic.lk are shared by whole conglomerates (John Keells IT and the
//    Softlogic IT arm sit inside them, and keells.com also covers Mawkish's own client John Keells Restaurants).
//  - A competitor who writes from a domain not listed here, or from a personal address, is not caught by this list.
//    Personal addresses are rejected separately by email-policy.ts.
//  - Swyftflo-category vendors (source to pay, transport management, invoice audit) are not covered yet.

export type Offer = "SAP" | "Salesforce";

export type Competitor = {
  name: string;
  /** Where it sells: Sri Lanka, India, or both (for the global firms that operate in each). */
  markets: ("LK" | "IN")[];
  offers: Offer[];
  /** Email domains used by the company. Subdomains are matched automatically. */
  domains: string[];
  /** What the entry rests on, in a few words. */
  evidence: string;
};

const SF_LK_RELEASE = "Salesforce Sri Lanka press release, 28 Aug 2026";
const SF_LK_PRESS = "Daily Mirror, Salesforce Sri Lanka partner network, 2026";
const SAP_ORG = "SAP partner profile on sap.com";
const SELF = "own homepage advertises it";

export const competitors: Competitor[] = [
  // Sri Lanka
  { name: "Altria Consulting", markets: ["LK"], offers: ["SAP", "Salesforce"], domains: ["thealtria.com", "altriaconsulting.com"], evidence: `${SF_LK_RELEASE}; ${SELF} (GROW and RISE with SAP); altriaconsulting.com redirects to thealtria.com` },
  { name: "John Keells IT", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["johnkeellsit.com"], evidence: `${SAP_ORG} (Gold, sells SAP cloud in Sri Lanka and India); ${SF_LK_RELEASE}` },
  { name: "Teardrop AI", markets: ["LK"], offers: ["Salesforce"], domains: ["teardropai.com"], evidence: `${SF_LK_RELEASE}; ${SELF} (Salesforce implementation partner)` },
  { name: "MillenniumIT ESP", markets: ["LK"], offers: ["Salesforce"], domains: ["mitesp.com", "millenniumitesp.com"], evidence: `${SF_LK_PRESS}; millenniumitesp.com redirects to mitesp.com` },
  { name: "Cybersoft", markets: ["LK"], offers: ["Salesforce"], domains: ["cybersoft.lk"], evidence: `${SF_LK_PRESS}; homepage is CyberSoft (Pvt) Ltd, Sri Lanka` },
  { name: "Virtusa", markets: ["LK", "IN"], offers: ["Salesforce"], domains: ["virtusa.com"], evidence: SF_LK_PRESS },
  { name: "Dazeworks", markets: ["LK", "IN"], offers: ["Salesforce"], domains: ["dazeworks.com"], evidence: `${SELF} (Salesforce consulting partner); announced a Colombo office` },

  // India
  { name: "SAVIC Technologies", markets: ["IN"], offers: ["SAP"], domains: ["savictech.com"], evidence: `${SELF} (GROW and RISE with SAP partner)` },
  { name: "YASH Technologies", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["yash.com"], evidence: SELF },
  { name: "Absyz", markets: ["IN"], offers: ["Salesforce"], domains: ["absyz.com"], evidence: `${SELF} (Salesforce partner)` },
  { name: "360 Degree Cloud", markets: ["IN"], offers: ["Salesforce"], domains: ["360degreecloud.com"], evidence: `${SELF} (Salesforce consulting)` },
  { name: "Cloud Analogy", markets: ["IN"], offers: ["Salesforce"], domains: ["cloudanalogy.com"], evidence: `${SELF} (Salesforce consulting)` },
  { name: "Grant Thornton Bharat", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["grantthornton.in"], evidence: "ERPResearch directory lists it as an SAP Gold partner; own homepage mentions Salesforce" },
  { name: "Embee Software", markets: ["IN"], offers: ["SAP"], domains: ["embee.co.in"], evidence: "Appears in India SAP partner results; publishes SAP partner guidance on its own site" },
  { name: "Persistent Systems", markets: ["IN"], offers: ["Salesforce"], domains: ["persistent.com"], evidence: SELF },
  { name: "Coforge", markets: ["IN"], offers: ["Salesforce"], domains: ["coforge.com"], evidence: SELF },
  { name: "Mphasis", markets: ["IN"], offers: ["Salesforce"], domains: ["mphasis.com"], evidence: SELF },
  { name: "Zensar", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["zensar.com"], evidence: SELF },
  { name: "Birlasoft", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["birlasoft.com"], evidence: SELF },
  { name: "LTIMindtree (LTM)", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["ltimindtree.com", "ltm.com"], evidence: `${SELF}; ltimindtree.com redirects to ltm.com` },

  // Global firms that deliver SAP or Salesforce in both countries
  { name: "Deloitte", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["deloitte.com"], evidence: `${SF_LK_RELEASE}; ${SF_LK_PRESS}` },
  { name: "Tata Consultancy Services", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["tcs.com"], evidence: `${SF_LK_PRESS}; listed as an SAP Platinum partner in India by SAVIC` },
  { name: "Wipro", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["wipro.com"], evidence: `${SF_LK_PRESS}; listed as an SAP Platinum partner in India by SAVIC` },
  { name: "HCLTech", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["hcltech.com"], evidence: `${SF_LK_PRESS}; listed as an SAP Platinum partner in India by SAVIC` },
  { name: "Tech Mahindra", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["techmahindra.com"], evidence: `${SF_LK_PRESS}; listed as an SAP Platinum partner in India by SAVIC` },
  { name: "Infosys", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["infosys.com"], evidence: "Listed as an SAP Platinum partner in India by SAVIC; named in India Salesforce partner lists" },
  { name: "Capgemini", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["capgemini.com"], evidence: "Listed as an SAP Platinum partner in India by SAVIC; named in India Salesforce partner lists" },
  { name: "Accenture", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["accenture.com"], evidence: "Named as a top Salesforce partner in India partner lists" },
  { name: "Cognizant", markets: ["IN"], offers: ["SAP"], domains: ["cognizant.com"], evidence: SELF },
  { name: "NTT DATA", markets: ["IN"], offers: ["SAP", "Salesforce"], domains: ["nttdata.com"], evidence: SELF },
  { name: "EY", markets: ["LK", "IN"], offers: ["SAP"], domains: ["ey.com"], evidence: SELF },
  { name: "KPMG", markets: ["LK", "IN"], offers: ["SAP", "Salesforce"], domains: ["kpmg.com"], evidence: SELF },
  { name: "IBM", markets: ["IN"], offers: ["SAP"], domains: ["ibm.com"], evidence: SELF },
];

/** The competitor an email domain belongs to, or null. A domain matches itself and any subdomain of it. */
export function findCompetitor(domain: string): Competitor | null {
  const d = domain.toLowerCase().replace(/\.$/, "");
  for (const c of competitors) {
    for (const listed of c.domains) {
      const l = listed.toLowerCase();
      if (d === l || d.endsWith(`.${l}`)) return c;
    }
  }
  return null;
}
