"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type SlideshowImage = { src: string; alt: string };

const AUTO_PLAY_MS = 3000;

/**
 * Looping cross-fade slideshow for a blog post's cover + additional photos.
 * Auto-advances (paused on hover/focus, and disabled entirely for users who
 * prefer reduced motion), wraps from the last image back to the first, and
 * has arrows + dots for manual control. With a single image it renders just
 * the image, no controls.
 */
export function BlogImageSlideshow({ images }: { images: SlideshowImage[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const count = images.length;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (count <= 1 || paused || reduceMotion) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [count, paused, reduceMotion, index]);

  const go = (i: number) => setIndex((i + count) % count);

  return (
    <div
      className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl sm:h-96"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role={count > 1 ? "region" : undefined}
      aria-roledescription={count > 1 ? "carousel" : undefined}
      aria-label={count > 1 ? "Blog photos" : undefined}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className={`object-contain transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
          priority={i === 0}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-xl text-white transition hover:bg-black/75"
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-xl text-white transition hover:bg-black/75"
          >
            &#8250;
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-mw-mint" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
