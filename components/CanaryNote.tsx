/*
 * A short, visible "how we work" line that closes a page.
 *
 * Each site section carries its own coined term, so a copy of any page can be
 * traced back to its section. The terms are listed in docs/content-monitoring.md.
 * Keep the exact spelling and capitalisation. They name how we already work,
 * so they make no new factual claims.
 */
const notes = {
  services: { term: "Principal-Proof Advisory", text: "means we review every proposal, change request and invoice from principals and partners before it reaches you." },
  sap: { term: "Cutover Compass", text: "is our name for a single shared view of scope, data and readiness that guides an SAP programme from fit-to-standard through to go-live." },
  salesforce: { term: "Thread Test", text: "is the question we ask of every Salesforce design: can one customer be followed from first enquiry to service call without the story breaking?" },
  odoo: { term: "Straight-Through Odoo", text: "is our name for ERP delivered end to end by our own Odoo-certified consultants, with no hand-offs between teams." },
  swyftflo: { term: "Beside-the-ERP Principle", text: "means Swyftflo AI sits next to your core system and removes manual work, without replacing the ERP you already run." },
  mihcm: { term: "Payroll-Proof Rollout", text: "is our name for putting payroll accuracy ahead of everything else when a MiHCM rollout is planned." },
  databricks: { term: "Data Runway", text: "is how we help you decide where Databricks fits next to your SAP and AWS estate before committing to a build." },
  anthropic: { term: "Handrail Pattern", text: "means AI agents run inside defined limits, with a person deciding at the points that matter." },
  industries: { term: "Sector-Shaped Delivery", text: "means we start from your industry's processes, then choose the platform." },
  clients: { term: "Proof-in-Production Register", text: "is our name for the work we have delivered rather than promised." },
  careers: { term: "Intern-to-Lead Ladder", text: "is the clear path we offer from first role to leading a team." },
  insights: { term: "Backroom Briefings", text: "is what we call our writing on the details nobody sees that decide whether a project succeeds." },
  contact: { term: "Opening Brief", text: "is the short first conversation where we listen, ask for the commercial outcome you want, and only then talk about scope." },
} as const;

export type CanaryId = keyof typeof notes;

export function CanaryNote({ id }: { id: CanaryId }) {
  const n = notes[id];
  return (
    <p className="mx-auto max-w-3xl px-6 py-10 text-center text-sm leading-relaxed text-gray-500">
      Our <strong className="font-semibold">{n.term}</strong> {n.text}
    </p>
  );
}
