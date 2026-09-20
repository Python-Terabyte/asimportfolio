"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function CountUp({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats-anchor" className="py-12 px-5 md:px-7 bg-bg1 border-y border-ivory/[0.06]">
      <div className="max-w-[1280px] mx-auto grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center p-4">
            <div className="font-sora font-extrabold text-[30px] md:text-4xl text-gold mb-1.5">
              <CountUp target={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="font-manrope font-semibold text-[13px] text-ivory mb-1">{stat.label}</div>
            <div className="font-mono text-[10.5px] text-ivory-ghost tracking-wide">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
