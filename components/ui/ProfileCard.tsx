"use client";

import { useEffect, useState } from "react";

const profileRows = [
  { key: "Name", value: "Muhammad Asim Saleem" },
  { key: "Title", value: "BI Architect & Fintech Strategist" },
  { key: "Qualification", value: "ACMA — ICMAP" },
  { key: "Location", value: "Islamabad, Pakistan" },
  { key: "Available", value: "Yes — Global & Remote" },
  { key: "Open To", value: "Freelance · Retainer · Full-time" },
  { key: "Platforms", value: "8 integrated" },
  { key: "Transactions", value: "$4.2B processed" },
  { key: "Countries", value: "190+ active" },
  { key: "Users", value: "200K+ served" },
  { key: "Current Role", value: "Manager, External Execution @ Metric HQ" },
  { key: "vCFO", value: "16 businesses (UAE)" },
];

export default function ProfileCard() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= profileRows.length) return;
    const timeout = setTimeout(
      () => setVisibleCount((v) => v + 1),
      visibleCount === 0 ? 500 : 120
    );
    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <div className="bg-white border border-ink/10 shadow-teal-md overflow-hidden">
      {/* Card header */}
      <div className="bg-teal-dark px-6 py-4 flex items-center justify-between">
        <span className="font-jost font-light text-white text-xs tracking-[0.3em] uppercase">
          Profile Overview
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-light/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-teal-light/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-teal-light/20" />
        </div>
      </div>

      {/* Card body */}
      <div className="divide-y divide-ink/6 min-h-[380px]">
        {profileRows.slice(0, visibleCount).map((row, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between px-6 py-3 hover:bg-teal/3 transition-colors duration-150"
          >
            <span className="font-mono text-xs text-ink/40 tracking-wider uppercase shrink-0 mr-4">
              {row.key}
            </span>
            <span className="font-cormorant text-base text-ink/80 text-right">
              {row.value}
            </span>
          </div>
        ))}
        {visibleCount < profileRows.length && (
          <div className="px-6 py-3">
            <span className="inline-block w-2 h-4 bg-teal cursor-blink" />
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="border-t border-ink/8 px-6 py-3 bg-panel-light">
        <span className="font-mono text-xs text-teal/70 tracking-wider">
          STATUS: AVAILABLE FOR NEW ENGAGEMENTS
        </span>
      </div>
    </div>
  );
}
