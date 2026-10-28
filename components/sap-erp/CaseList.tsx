import { Reveal } from "@/components/Reveal";

/**
 * Customer stories as an editorial index: a name set large on the left, the
 * story on the right, hairlines between. A pointer slides each row over and
 * lights its rule, in the manner of a magazine contents page or a studio's
 * client list, rather than a grid of cards.
 */
export function CaseList({ items }: { items: readonly { name: string; body: string }[] }) {
  return (
    <ul className="border-t border-white/10">
      {items.map((c, i) => (
        <li key={c.name}>
          <Reveal delay={i * 70}>
            <div className="group relative grid grid-cols-1 gap-3 border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:py-10">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-[#7fd9b4] shadow-[0_0_10px_rgba(127,217,180,0.8)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
              />
              <h3 className="font-display text-3xl text-white transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 sm:text-4xl">
                {c.name}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/85 md:pt-2">
                {c.body}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
