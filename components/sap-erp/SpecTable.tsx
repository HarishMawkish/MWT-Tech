import { Reveal } from "@/components/Reveal";

type Group = { title: string; rows: { k: string; v: string }[] };

/**
 * Security, compliance and cost set out like a docs page: a label on the left,
 * the specifics on the right, rows you can scan down. Stripe's documentation is
 * the model: plain, dense, and easy to trust.
 */
export function SpecTable({ groups }: { groups: Group[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
      {groups.map((g, gi) => (
        <Reveal key={g.title} delay={gi * 90}>
          <div className={gi > 0 ? "border-t border-white/10" : ""}>
            <h3 className="bg-white/[0.03] px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.22em] text-[#7fd9b4] sm:px-9">
              {g.title}
            </h3>
            <dl>
              {g.rows.map((r) => (
                <div
                  key={r.k}
                  className="group grid grid-cols-1 gap-1 border-t border-white/[0.07] px-6 py-5 transition-colors duration-300 hover:bg-[#7fd9b4]/[0.04] sm:grid-cols-[14rem_1fr] sm:gap-8 sm:px-9"
                >
                  <dt className="text-sm font-semibold text-white">{r.k}</dt>
                  <dd className="text-sm leading-relaxed text-white/65 transition-colors duration-300 group-hover:text-white/85">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
