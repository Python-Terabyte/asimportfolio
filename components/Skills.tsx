"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, GitMerge, CreditCard, Brain, ClipboardList, Layers, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { SKILLS } from "@/lib/data";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
const iconMap: Record<string, LucideIcon> = {
  BarChart3, GitMerge, CreditCard, Brain, ClipboardList, Layers,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-24 bg-panel-mid overflow-hidden">
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-jost font-light text-4xl md:text-5xl text-ink mb-16 leading-tight uppercase tracking-wide">
            The Full Stack of<br />
            <span className="text-teal text-teal-glow italic font-cormorant font-semibold normal-case">What I Do</span>
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
                className="group bg-white border border-ink/8 p-6 hover:border-teal/30 hover:shadow-teal-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 border border-teal/20 bg-teal/5 group-hover:border-teal/40 transition-all duration-300">
                    {Icon && <Icon size={18} className="text-teal" />}
                  </div>
                  <h3 className="font-jost font-light text-sm text-ink group-hover:text-teal transition-colors duration-300 uppercase tracking-wider">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 bg-ink/4 text-ink/50 border border-ink/8 hover:border-teal/30 hover:text-ink/80 transition-all duration-200"
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
