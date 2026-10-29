"use client";

import { useState } from "react";
import { F, V, tagName } from "./data";

// Port of the video library from the supplied page. The cards link out to SAP's official YouTube channel.
export function VideoLibrary() {
  const [f, setF] = useState("all");
  const list = V.filter((v) => f === "all" || v.k === f);

  return (
    <>
      <div className="vf" role="group" aria-label="Filter videos" id="vf">
        {F.map(([k, l]) => (
          <button key={k} type="button" aria-pressed={k === f} onClick={() => setF(k)}>
            {l}
            <span>{k === "all" ? V.length : V.filter((v) => v.k === k).length}</span>
          </button>
        ))}
      </div>
      <div className="vgrid" id="vgrid">
        {list.map((v) => (
          <a
            key={v.id}
            className={`vcard${f === "all" && v.feat ? " feat" : ""}`}
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noopener"
            data-yt={v.id}
            aria-label={`Play on YouTube: ${v.t}`}
          >
            <div className="poster" data-k={v.k}>
              <div className="top">
                <span className="ch">
                  <b>SAP</b>YouTube
                </span>
                <span className="tag">{tagName[v.k]}</span>
              </div>
              <div className="big">{v.big}</div>
              <span className="play" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M5 2.5v13l11-6.5z" fill="#0b2a1f" />
                </svg>
              </span>
            </div>
            <div className="vmeta">
              <h3>{v.t}</h3>
              <p>{v.p}</p>
              <span className="d">SAP · {v.d}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
