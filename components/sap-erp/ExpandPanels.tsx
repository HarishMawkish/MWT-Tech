"use client";

import Image from "next/image";
import { useState } from "react";
import type { ExplorerItem } from "../sap-ai/types";

/**
 * Photographic panels that open like an accordion laid on its side: point at one
 * and it widens to show its detail while the others narrow to a slim strip,
 * the way Apple and Framer present a handful of equal-weight options. Below
 * `lg` they simply stack with everything showing.
 */
export function ExpandPanels({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
      {items.map((it, i) => {
        const on = i === active;
        return (
          <div
            key={it.id}
            tabIndex={0}
            onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className="group relative min-h-[22rem] cursor-default overflow-hidden rounded-[2rem] border border-white/10 outline-none transition-[flex-grow,border-color] duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:border-[#7fd9b4] lg:min-h-0 lg:min-w-0 lg:basis-0"
            style={{ flexGrow: on ? 3.2 : 1 }}
          >
            {it.photo && (
              <Image
                src={it.photo.src}
                alt={on ? it.photo.alt : ""}
                aria-hidden={!on}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`object-cover transition-transform duration-[1400ms] ease-out ${on ? "scale-105" : "scale-100"}`}
              />
            )}
            <div className="absolute inset-0 bg-[#1c6b51]/25 mix-blend-multiply" />
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                on ? "bg-gradient-to-t from-black/90 via-black/45 to-black/10" : "bg-black/60"
              }`}
            />

            {/* collapsed label, set sideways */}
            <div
              aria-hidden={on}
              className={`absolute inset-0 hidden items-end p-7 transition-opacity duration-500 lg:flex ${
                on ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
              }`}
            >
              <span className="font-display text-lg uppercase tracking-[0.12em] text-white/90 [writing-mode:vertical-rl] rotate-180">
                {it.label}
              </span>
            </div>

            {/* open content: fixed width so it never reflows while the panel animates */}
            <div
              className={`relative flex h-full flex-col justify-end p-7 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] sm:p-9 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[min(30rem,38vw)] ${
                on ? "translate-y-0 opacity-100 lg:delay-200" : "lg:pointer-events-none lg:translate-y-3 lg:opacity-0"
              }`}
            >
              <p className="font-display text-xs font-bold tracking-[0.2em] text-[#7fd9b4]">0{i + 1}</p>
              <h3 className="mt-2 font-display text-3xl text-white sm:text-4xl">{it.label}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">{it.headline}</p>
              <ul className="mt-5 space-y-2 border-t border-white/15 pt-5">
                {it.also.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7fd9b4]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
