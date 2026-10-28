"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

/**
 * Photo frame that unmasks as it scrolls into view (a clip-path wipe from the
 * top), then drifts very slightly against the scroll so the photo seems to sit
 * behind the frame. `children` is the photo (fill-positioned); `overlay` is
 * anything that must stay put on top, like a caption.
 */
export function ImageReveal({
  children,
  overlay,
  className = "",
  style,
  clip = true,
}: {
  children: ReactNode;
  overlay?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Wipe the photo in with a clip-path as it enters; false keeps only the drift. */
  clip?: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const photo = photoRef.current;
    if (!frame || !photo || prefersReducedMotion()) return;

    gsap.set(photo, { scale: 1.18 });
    if (clip) gsap.set(frame, { clipPath: "inset(0 0 100% 0)" });

    const reveal = clip
      ? ScrollTrigger.create({
          trigger: frame,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(frame, { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "expo.inOut", clearProps: "clipPath" }),
        })
      : null;
    const drift = gsap.to(photo, {
      scale: 1,
      yPercent: -4,
      ease: "none",
      scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
    });

    return () => {
      reveal?.kill();
      drift.scrollTrigger?.kill();
      drift.kill();
      gsap.set([frame, photo], { clearProps: "all" });
    };
  }, [clip]);

  return (
    // Callers that position the frame themselves (absolute/fixed) must not also get `relative`.
    <div className={`${className.includes("absolute") || className.includes("fixed") ? "" : "relative"} ${className}`} style={style}>
      <div ref={frameRef} className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div ref={photoRef} className="absolute inset-0 will-change-transform">
          {children}
        </div>
      </div>
      {overlay}
    </div>
  );
}
