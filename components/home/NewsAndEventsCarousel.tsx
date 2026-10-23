"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { SanityBlogPost } from "@/lib/sanity/queries";
import { excerptFromPlainText } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

type NewsAndEventsCarouselProps = {
  posts: SanityBlogPost[];
};

const AUTO_PLAY_MS = 5000;

export function NewsAndEventsCarousel({ posts }: NewsAndEventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Add the first slide again at the end so the transition from the final
  // blog back to the first blog can be made seamless.
  const slides = posts.length > 1 ? [...posts, posts[0]] : posts;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (posts.length <= 1 || isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => index + 1);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [posts.length, isPaused, reduceMotion]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Ignore bubbled transitions from the cards inside (image hover scale etc).
    if (e.target !== e.currentTarget) return;
    if (posts.length > 1 && currentIndex === posts.length) {
      // Once the cloned first slide is visible, silently jump back to the
      // real first slide. The user sees a continuous loop.
      setAnimate(false);
      setCurrentIndex(0);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimate(true));
      });
    }
  };

  const goTo = (index: number) => {
    setAnimate(true);
    setCurrentIndex(index);
  };

  const goNext = () => {
    if (posts.length <= 1) return;
    setAnimate(true);
    setCurrentIndex((index) => {
      if (index >= posts.length) return 0;
      return index + 1;
    });
  };

  const goPrevious = () => {
    if (posts.length <= 1) return;
    if (currentIndex === 0) {
      // Mirror the forward loop: silently jump to the cloned first slide
      // (identical to slide 0), then slide backwards to the last real one.
      setAnimate(false);
      setCurrentIndex(posts.length);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true);
          setCurrentIndex(posts.length - 1);
        });
      });
    } else {
      setAnimate(true);
      setCurrentIndex((index) => index - 1);
    }
  };

  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-5xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role={posts.length > 1 ? "region" : undefined}
      aria-roledescription={posts.length > 1 ? "carousel" : undefined}
      aria-label={posts.length > 1 ? "Latest insights" : undefined}
    >
      <div className="overflow-hidden rounded-3xl">
        <div
          className={`mw-news-carousel-track flex ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" : ""}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((post, slideIndex) => (
            <div
              key={`${post._id}-${slideIndex}`}
              className="w-full shrink-0"
              style={{ flexBasis: `${100 / slides.length}%` }}
            >
              <Link
                href={`/insights/${post.slug}`}
                className="group block overflow-hidden rounded-3xl border border-mw-line bg-mw-paper transition hover:border-mw-secondary hover:shadow-xl hover:shadow-mw-secondary/5"
              >
                {/* Every blog gets exactly the same image frame. The source
                    image's native aspect ratio no longer changes the card
                    or carousel height. */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={urlFor(post.coverImage).width(1600).height(900).fit("crop").url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1024px"
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority={slideIndex === 0}
                  />
                </div>

                <div className="flex min-h-[230px] flex-col p-6 sm:p-8">
                  <h3 className="line-clamp-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-mw-ink/65 sm:text-base">
                    {excerptFromPlainText(post.plainText)}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-xs text-mw-ink/50">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="font-semibold text-mw-secondary transition group-hover:translate-x-1">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {posts.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous blog"
            onClick={goPrevious}
            className="absolute left-3 top-[38%] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-xl text-white backdrop-blur-md transition hover:bg-black/75 sm:left-5"
          >
            &larr;
          </button>

          <button
            type="button"
            aria-label="Next blog"
            onClick={goNext}
            className="absolute right-3 top-[38%] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-xl text-white backdrop-blur-md transition hover:bg-black/75 sm:right-5"
          >
            &rarr;
          </button>

          <div className="mt-5 flex justify-center gap-2" aria-label="Blog navigation">
            {posts.map((post, index) => (
              <button
                key={post._id}
                type="button"
                aria-label={`Show blog ${index + 1}: ${post.title}`}
                onClick={() => goTo(index)}
                aria-current={currentIndex % posts.length === index}
                className="group/dot grid h-6 place-items-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex % posts.length === index
                      ? "w-8 bg-mw-secondary"
                      : "w-2 bg-mw-ink/20 group-hover/dot:bg-mw-ink/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-mw-ink/45">
            {isPaused || reduceMotion ? "Paused" : "Automatically advancing"} · {currentIndex % posts.length + 1} of {posts.length}
          </p>
        </>
      )}
    </div>
  );
}
