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

const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
const stagger = ["md:translate-y-0", "md:translate-y-2", "md:-translate-y-1", "md:translate-y-1"];

export default function Stats() {
  return (
    <section className="relative bg-forest border-y border-cream/10 py-16 overflow-hidden">
      <div className="absolute inset-0 subtle-grid-dark pointer-events-none opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-5 py-6 rounded-2xl bg-cream/5 border border-amber/15 hover:border-amber/40 hover:bg-cream/8 transition-all duration-300 ${rotations[i % rotations.length]} ${stagger[i % stagger.length]}`}
            >
              <div className="font-cormorant font-bold text-3xl md:text-4xl text-amber mb-1">
                <CountUp
                  target={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                />
              </div>
              <div className="font-jost text-sm font-medium text-cream mb-1 tracking-wider uppercase">{stat.label}</div>
              <div className="font-mono text-xs text-cream/40 tracking-wider">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
