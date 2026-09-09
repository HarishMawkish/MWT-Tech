/**
 * A lightweight, client-only heuristic for "is this a weaker device that
 * should get a cheaper version of the WebGL scenes". Deliberately
 * conservative — it should basically never fire for a modern iPhone or a
 * desktop, and should reliably fire for budget/mid-range Android hardware
 * and anyone who's asked for reduced motion.
 *
 * None of the signals used here are available (or meaningful) on iOS
 * Safari, so this never downgrades the experience there — matching what
 * we've actually observed: iPhones already run the full scene smoothly.
 */
export function isLowPowerDevice(): boolean {
  if (typeof window === "undefined") return false;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return true;

  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (!coarsePointer) return false; // Desktops/laptops always get the full scene.

  const cores = navigator.hardwareConcurrency ?? 8;
  // deviceMemory is Chrome/Android-only; treat "unknown" (e.g. iOS) as capable.
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;

  return cores <= 4 || memory <= 4;
}
