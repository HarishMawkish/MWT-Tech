"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryImage = {
  /** Smaller rendition for the in-article tiles. */
  thumb: string;
  /** Large rendition for the full-screen view. */
  full: string;
  alt: string;
};

const MAX_TILES = 5;
const SWIPE_PX = 50;

/**
 * Mid-article photo break: a mosaic of the post's photos that opens a
 * full-screen viewer. Tiles crop to fill (they're only previews); the viewer
 * always shows the whole photo. Built on a native <dialog> so focus is
 * trapped, Escape closes it, the page behind is inert, and focus returns to
 * the tile that opened it.
 */
export function BlogGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);
  const count = images.length;

  const show = (i: number) => {
    setOpen(i);
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + count) % count)),
    [count],
  );

  // The dialog also closes itself on Escape, so sync state from its own event.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setOpen(null);
      document.body.style.overflow = "";
    };
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  // The cover is usually a poster with text baked in, which a cropped tile
  // would butcher (and the reader already saw it at the top), so the mosaic
  // starts from the first extra photo. The full-screen view still includes it.
  const first = count > 2 ? 1 : 0;
  const tiles = images.slice(first, first + MAX_TILES);
  const extra = count - first - tiles.length;
  const tileCount = tiles.length;

  // 2 photos: side by side. 3: one large + two stacked. 4+: one large + a 2x2.
  const layout =
    tileCount === 2
      ? "grid-cols-2"
      : tileCount === 3
        ? "grid-cols-2 grid-rows-2 [&>*:first-child]:row-span-2"
        : "grid-cols-4 grid-rows-2 [&>*:first-child]:col-span-2 [&>*:first-child]:row-span-2";

  return (
    <>
      <div
        role="group"
        aria-label={`Photo gallery, ${count} photos`}
        className={`grid aspect-[16/10] w-full gap-2 sm:aspect-[16/8] sm:gap-3 ${layout}`}
      >
        {tiles.map((img, i) => (
          <button
            key={img.full}
            type="button"
            onClick={() => show(first + i)}
            aria-label={`Open photo ${first + i + 1} of ${count}${extra > 0 && i === tiles.length - 1 ? ` (and ${extra} more)` : ""}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 active:scale-[0.99] sm:rounded-3xl"
          >
            <Image
              src={img.thumb}
              alt={img.alt}
              fill
              unoptimized
              sizes="(min-width: 1024px) 640px, 50vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
            />
            {extra > 0 && i === tiles.length - 1 && (
              <span className="absolute inset-0 grid place-items-center bg-black/60 font-display text-2xl text-white backdrop-blur-[2px]">
                +{extra + 1}
              </span>
            )}
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        // Clicking the dark backdrop (the dialog element itself) closes it.
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/90 p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-md open:animate-[mw-viewer-in_200ms_cubic-bezier(0.23,1,0.32,1)]"
      >
        {open !== null && (
          <div
            className="relative flex h-full w-full flex-col"
            onClick={(e) => e.target === e.currentTarget && close()}
            onPointerDown={(e) => {
              swipeStart.current = e.clientX;
            }}
            onPointerUp={(e) => {
              if (swipeStart.current === null) return;
              const dx = e.clientX - swipeStart.current;
              swipeStart.current = null;
              if (Math.abs(dx) > SWIPE_PX) step(dx < 0 ? 1 : -1);
            }}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm font-medium text-white/70" aria-live="polite">
                {open + 1} / {count}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                autoFocus
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/[0.08] text-2xl leading-none text-white transition-[background-color,transform] duration-150 hover:bg-white/20 active:scale-[0.95]"
              >
                &times;
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1"
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <Image
                key={images[open].full}
                src={images[open].full}
                alt={images[open].alt}
                fill
                unoptimized
                sizes="100vw"
                className="mw-viewer-photo select-none object-contain px-2 sm:px-20"
                draggable={false}
                priority
              />
              {/* Warm the neighbours so cycling feels instant. */}
              {count > 1 &&
                [(open + 1) % count, (open - 1 + count) % count].map((n) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={n} src={images[n].full} alt="" aria-hidden="true" className="hidden" />
                ))}
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => step(-1)}
                  className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/50 text-2xl text-white backdrop-blur-xl transition-[background-color,transform] duration-150 hover:bg-white/20 active:scale-[0.95] sm:left-6"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => step(1)}
                  className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/50 text-2xl text-white backdrop-blur-xl transition-[background-color,transform] duration-150 hover:bg-white/20 active:scale-[0.95] sm:right-6"
                >
                  &#8250;
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
