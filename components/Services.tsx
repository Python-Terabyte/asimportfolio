"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  LayoutDashboard, TrendingUp, Plug, FileText, Briefcase, Bot, type LucideProps,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { SERVICES } from "@/lib/data";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard, TrendingUp, Plug, FileText, Briefcase, Bot,
};

const rotations = ["", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-2"];
const stagger = ["", "md:translate-y-3", "", "md:-translate-y-2", "md:translate-y-2", ""];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 bg-panel-mid overflow-hidden">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal>
          <SectionLabel>Services</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-ink leading-[1.15]">
              What I Can{" "}
              <span className="text-forest italic font-semibold">Build for You</span>
            </h2>
            <p className="font-cormorant text-lg text-ink/85 max-w-sm">
              Available for project-based, retainer, and advisory engagements.
              Remote globally. Open to relocation.
            </p>
          </div>
        </SectionReveal>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const featured = i === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                className={`group relative bg-white rounded-2xl border border-ink/10 p-6 hover:border-amber/50 hover:shadow-amber-md hover:rotate-0 transition-all duration-300 overflow-hidden ${rotations[i % rotations.length]} ${stagger[i % stagger.length]} ${featured ? "lg:col-span-2 bg-forest border-amber/20" : ""}`}
              >
                {featured && Icon && (
                  <Icon size={140} className="absolute -bottom-6 -right-6 text-amber/10 pointer-events-none" strokeWidth={1} />
                )}

                <div className="relative mb-5">
                  <div className={`inline-flex p-2.5 rounded-lg transition-all duration-300 ${featured ? "bg-amber" : "bg-forest group-hover:bg-forest/90"}`}>
                    {Icon && <Icon size={20} className={featured ? "text-forest" : "text-amber"} />}
                  </div>
                </div>

                <h3 className={`relative font-jost font-semibold text-base mb-3 leading-snug transition-colors duration-300 uppercase tracking-wider ${featured ? "text-cream" : "text-ink group-hover:text-forest"}`}>
                  {service.title}
                </h3>
                <p className={`relative font-cormorant text-base leading-relaxed mb-5 ${featured ? "text-cream/75" : "text-ink/90"}`}>
                  {service.description}
                </p>

                <div className="relative flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border ${featured ? "border-amber/30 text-amber/80 bg-amber/8" : "border-ink/20 text-ink/75"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`relative inline-flex items-center gap-1 font-cormorant text-base transition-colors italic ${featured ? "text-amber hover:text-cream" : "text-forest/70 hover:text-forest"}`}
                >
                  Enquire <span className="ml-1 not-italic">→</span>
                </a>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber/0 group-hover:border-amber/50 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-12 p-6 rounded-2xl border border-amber/30 bg-amber/8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-jost font-light text-ink mb-1 tracking-wide uppercase text-sm">Not sure which fits?</p>
              <p className="font-cormorant text-base text-ink/85">
                Tell me your challenge. I&apos;ll tell you how I can help.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-amber-fill inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber text-forest font-jost font-semibold text-sm transition-all duration-300 whitespace-nowrap tracking-widest uppercase"
            >
              Start a Conversation
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
