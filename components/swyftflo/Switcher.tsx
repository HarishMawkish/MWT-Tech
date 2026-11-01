"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type SwitchOption = { id: string; label: string; content: ReactNode };

/**
 * A segmented control with one pane below it: used to switch audience, view or event type. The pane is
 * rendered on the server and handed in; switching only swaps which one shows, with a short crossfade.
 */
export function Switcher({
  options,
  label,
  className = "",
  head,
}: {
  options: SwitchOption[];
  label: string;
  className?: string;
  /** Rendered beside the control, above the pane. */
  head?: ReactNode;
}) {
  const [i, setI] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const n = options.length;
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setI(next);
    refs.current[next]?.focus();
  };

  return (
    <div className={className}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <div className="seg" role="tablist" aria-label={label} onKeyDown={onKey}>
          {options.map((o, k) => (
            <button
              key={o.id}
              ref={(el) => {
                refs.current[k] = el;
              }}
              type="button"
              role="tab"
              id={`${base}-${k}`}
              aria-selected={k === i}
              aria-controls={`${base}-p`}
              tabIndex={k === i ? 0 : -1}
              onClick={() => setI(k)}
            >
              {o.label}
            </button>
          ))}
        </div>
        {head}
      </div>
      <div className="tabpane" key={options[i].id} role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-${i}`}>
        {options[i].content}
      </div>
    </div>
  );
}
