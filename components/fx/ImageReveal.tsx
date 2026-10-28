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
}: {
  children: ReactNode;
  overlay?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const photo = photoRef.current;
    if (!frame || !photo || prefersReducedMotion()) return;

    gsap.set(frame, { clipPath: "inset(0 0 100% 0)" });
    gsap.set(photo, { scale: 1.18 });

    const reveal = ScrollTrigger.create({
      trigger: frame,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(frame, { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "expo.inOut", clearProps: "clipPath" }),
    });
    const drift = gsap.to(photo, {
      scale: 1,
      yPercent: -4,
      ease: "none",
      scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
    });

    return () => {
      reveal.kill();
      drift.scrollTrigger?.kill();
      drift.kill();
      gsap.set([frame, photo], { clearProps: "all" });
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={style}>
      <div ref={frameRef} className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div ref={photoRef} className="absolute inset-0 will-change-transform">
          {children}
        </div>
      </div>
      {overlay}
    </div>
  );
}
