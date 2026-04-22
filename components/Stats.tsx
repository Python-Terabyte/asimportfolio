"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-teal-dark border-y border-ink/10 py-12 overflow-hidden">
      <div className="absolute inset-0 subtle-grid pointer-events-none opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/20">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <div className="font-jost font-light text-4xl md:text-5xl text-teal-light mb-1">
                <CountUp
                  target={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                />
              </div>
              <div className="font-jost text-sm font-medium text-white mb-1 tracking-wider uppercase">{stat.label}</div>
              <div className="font-mono text-xs text-white/40 tracking-wider">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
