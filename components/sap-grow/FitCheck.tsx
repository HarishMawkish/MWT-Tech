"use client";

import Link from "next/link";
import { useState } from "react";

// The five questions and the three outcomes, exactly as on the supplied page.
const QS = [
  "We're happy to start fresh instead of converting our current system.",
  "We'd rather adopt proven standard processes than rebuild our own.",
  "Our custom requirements are a handful of fields, forms and reports, not a different way of running the business.",
  "We're fine with SAP upgrading the system twice a year, with a test window beforehand.",
  "We're a growing mid-sized company, or a subsidiary of a larger group.",
];

type Answer = boolean | null;

export function FitCheck() {
  const [a, setA] = useState<Answer[]>(QS.map(() => null));
  const yes = a.filter((v) => v === true).length;
  const answered = a.filter((v) => v !== null).length;

  let title: string;
  let text: string;
  if (answered < QS.length) {
    title = answered ? `${answered} of ${QS.length} answered` : "Answer the questions to see where you land";
    text = 'Each "yes" points toward GROW with SAP. Each "no" is something to look at more closely, and may point to RISE with SAP.';
  } else if (yes >= 4) {
    title = "Strong fit for GROW with SAP";
    text =
      "Your answers match the companies that get the most from SAP Cloud ERP. A readiness assessment will confirm the scope and give you a timeline.";
  } else if (yes >= 2) {
    title = "Worth a closer look";
    text =
      'GROW may still fit, but your "no" answers need a conversation. Sometimes they turn out to be simpler than expected, and sometimes RISE with SAP is the better route.';
  } else {
    title = "RISE with SAP may suit you better";
    text =
      "Your answers suggest you need more room to customise or a conversion path. RISE with SAP gives you SAP cloud ERP on a private instance. We can walk you through both.";
  }

  const set = (i: number, v: boolean) => setA((prev) => prev.map((x, j) => (j === i ? v : x)));

  return (
    <div className="fit">
      <div className="qs" id="qs">
        {QS.map((q, i) => (
          <div className="q" key={q}>
            <span>{q}</span>
            <div className="yn">
              <button type="button" className="yes" aria-pressed={a[i] === true} onClick={() => set(i, true)}>
                Yes
              </button>
              <button type="button" className="no" aria-pressed={a[i] === false} onClick={() => set(i, false)}>
                No
              </button>
            </div>
          </div>
        ))}
      </div>
      <aside className="result" aria-live="polite">
        <div className="lab">Your fit</div>
        <div className="meter">
          <i id="meter" style={{ width: `${(yes / QS.length) * 100}%` }} />
        </div>
        <h3 id="rTitle">{title}</h3>
        <p id="rText">{text}</p>
        <a href="#book" className="btn pri">
          Talk it through with us →
        </a>
      </aside>
    </div>
  );
}
