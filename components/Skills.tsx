"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingUp, CreditCard, Brain, ClipboardList, Layers, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { SKILLS } from "@/lib/data";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
const iconMap: Record<string, LucideIcon> = {
  BarChart3, TrendingUp, CreditCard, Brain, ClipboardList, Layers,
};

const rotations = ["", "-rotate-1", "rotate-1", "rotate-2", "-rotate-2", "rotate-1"];
const stagger = ["", "md:translate-y-2", "md:-translate-y-2", "", "md:translate-y-3", "md:-translate-y-1"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-24 bg-panel-mid overflow-hidden">
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-ink mb-16 leading-[1.15]">
            The Full Stack of{" "}
            <span className="text-forest italic font-semibold">What I Do</span>
          </h2>
        </SectionReveal>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
                className={`group relative bg-white rounded-2xl border border-ink/8 p-6 hover:border-amber/40 hover:shadow-amber-sm hover:rotate-0 transition-all duration-300 overflow-hidden ${rotations[i % rotations.length]} ${stagger[i % stagger.length]}`}
              >
                {Icon && <Icon size={80} className="absolute -bottom-4 -right-4 text-forest/[0.04] pointer-events-none" strokeWidth={1} />}
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-forest group-hover:bg-forest/90 transition-all duration-300">
                    {Icon && <Icon size={18} className="text-amber" />}
                  </div>
                  <h3 className="font-jost font-semibold text-sm text-ink group-hover:text-forest transition-colors duration-300 uppercase tracking-wider">
                    {skill.name}
                  </h3>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink/4 text-ink/85 border border-ink/15 hover:border-amber/50 hover:text-ink transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
