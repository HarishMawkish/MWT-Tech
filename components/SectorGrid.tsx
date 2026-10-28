import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightLink";
import { IconLayers, industryIconBySlug } from "@/components/home/icons";
import { industries } from "@/lib/site-data";

/**
 * All eight sectors on screen at once, two columns on desktop. Each card is
 * icon + name + description with nothing hidden behind a hover or a scroll, so
 * the page reads at a glance and never holds the scroll hostage. The light
 * that follows the pointer is the only interaction.
 */
export function SectorGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
      {industries.map((ind, i) => {
        const Icon = industryIconBySlug[ind.slug] ?? IconLayers;
        return (
          <Reveal key={ind.slug} delay={(i % 2) * 90} className="h-full">
            <SpotlightCard className="relative flex h-full gap-6 rounded-[1.75rem] p-7 sm:p-8">
              <Icon className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-white/[0.035]" />

              <div className="mw-icon-tile grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div className="relative min-w-0">
                <p className="font-display text-xs font-semibold tracking-[0.22em] text-mw-glow">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl text-white sm:text-2xl">{ind.name}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/65">{ind.description}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  );
}
