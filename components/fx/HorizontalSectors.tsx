"use client";

import { useEffect, useRef } from "react";
import { SpotlightCard } from "@/components/SpotlightLink";
import { IconLayers, industryIconBySlug } from "@/components/home/icons";
import { industries } from "@/lib/site-data";
import { gsap, prefersReducedMotion } from "@/lib/motion";

/**
 * The eight sectors as a gallery you travel through. On desktop the section
 * pins in place and your vertical scroll slides the cards sideways, with a
 * progress line underneath. Below `lg` (and with reduced motion) it is just a
 * normal grid that scrolls down the page: same markup, no pinning.
 */
export function HorizontalSectors() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!wrap || !track || !bar || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 18%",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            bar.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
        bar.style.transform = "";
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative lg:overflow-hidden lg:pb-10">
      <div ref={trackRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:w-max lg:gap-6 lg:pr-[14vw]">
        {industries.map((ind, i) => {
          const Icon = industryIconBySlug[ind.slug] ?? IconLayers;
          return (
            <SpotlightCard
              key={ind.slug}
              className="relative flex min-h-[17rem] flex-col rounded-[2rem] p-8 lg:h-[25rem] lg:w-[min(30rem,70vw)] lg:shrink-0 lg:p-10"
            >
              {/* Hollow numeral and oversized icon: depth without clutter. */}
              <span
                aria-hidden="true"
                className="mw-outline-text pointer-events-none absolute right-6 top-4 hidden font-display text-[7rem] font-extrabold leading-none opacity-60 lg:block"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="pointer-events-none absolute -bottom-8 -right-8 h-52 w-52 text-white/[0.035]" />

              <div className="mw-icon-tile grid h-12 w-12 place-items-center rounded-xl text-white lg:h-14 lg:w-14">
                <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
              </div>
              <h3 className="mt-auto pt-12 font-display text-2xl text-white lg:text-3xl">{ind.name}</h3>
              <p className="relative mt-3 max-w-md text-base leading-relaxed text-white/65">{ind.description}</p>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Progress through the gallery, desktop only. */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-px bg-white/10 lg:block">
        <span ref={barRef} className="block h-full origin-left scale-x-0 bg-mw-glow shadow-[0_0_10px_rgba(127,217,180,0.8)]" />
      </div>
    </div>
  );
}
