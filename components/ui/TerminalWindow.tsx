"use client";

import { useEffect, useState } from "react";

const lines = [
  '$ whoami',
  '> Muhammad Asim Saleem',
  '',
  '$ cat profile.json',
  '{',
  '  "title": "BI Architect & Fintech Strategist",',
  '  "qualification": "ACMA — ICMAP",',
  '  "location": "Islamabad, Pakistan",',
  '  "available": true,',
  '  "openTo": ["Freelance", "Retainer", "Full-time", "Remote"],',
  '  "platforms": 8,',
  '  "transactions": "$4.2B",',
  '  "countries": "190+",',
  '  "users": "200K+"',
  '}',
  '',
  '$ status',
  '> Currently: Manager, External Execution @ Metric HQ',
  '> vCFO: 16 businesses (UAE)',
  '> Available for new engagements globally',
  '',
  '$ _',
];

export default function TerminalWindow() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= lines.length) return;
    const timeout = setTimeout(
      () => {
        setDisplayed((prev) => [...prev, lines[idx]]);
        setIdx((i) => i + 1);
      },
      idx === 0 ? 400 : 60
    );
    return () => clearTimeout(timeout);
  }, [idx]);

  return (
    <div className="bg-panel-dark border border-white/10 rounded-lg overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-panel-mid">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-white/30 font-dm">terminal — profile.sh</span>
      </div>
      <div className="p-5 space-y-1 min-h-[380px]">
        {displayed.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("$")
                ? "text-neon"
                : line.startsWith(">")
                ? "text-white/80"
                : line.startsWith("{") || line.startsWith("}") || line.startsWith("  ")
                ? "text-muted-green"
                : "text-white/50"
            }
          >
            {line || "\u00A0"}
          </div>
        ))}
        {idx < lines.length && (
          <span className="inline-block w-2 h-4 bg-neon cursor-blink" />
        )}
      </div>
    </div>
  );
}
