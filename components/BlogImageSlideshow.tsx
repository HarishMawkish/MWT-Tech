"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type SlideshowImage = { src: string; alt: string };

const AUTO_PLAY_MS = 4000;

/**
 * Looping cross-fade slideshow for a blog post's cover + additional photos.
 * Auto-advances (paused on hover/focus, and disabled entirely for users who
 * prefer reduced motion), wraps from the last image back to the first, and
 * has arrows + dots for manual control. With a single image it renders just
 * the image, no controls.
 *
 * Every photo is shown whole (never cropped); a blurred copy of the same
 * photo fills any leftover space so the frame always reads as one surface.
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
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] sm:aspect-[16/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role={count > 1 ? "region" : undefined}
      aria-roledescription={count > 1 ? "carousel" : undefined}
      aria-label={count > 1 ? "Post photos" : undefined}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={img.src}
            alt=""
            fill
            sizes="48px"
            aria-hidden="true"
            className="scale-125 object-cover opacity-60 blur-3xl"
          />
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            unoptimized
            className="object-contain"
            priority={i === 0}
          />
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(index - 1)}
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/45 text-xl text-white backdrop-blur-xl transition hover:bg-black/70"
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(index + 1)}
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/45 text-xl text-white backdrop-blur-xl transition hover:bg-black/70"
          >
            &#8250;
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <div className="flex items-center rounded-full border border-white/15 bg-black/40 px-2 backdrop-blur-xl">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show photo ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className="group/dot grid h-6 place-items-center px-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-white" : "w-1.5 bg-white/45 group-hover/dot:bg-white/80"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
