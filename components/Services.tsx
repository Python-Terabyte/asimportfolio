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
            <h2 className="font-jost font-light text-4xl md:text-5xl text-ink leading-tight uppercase tracking-wide">
              What I Can<br />
              <span className="text-teal text-teal-glow italic font-cormorant font-semibold normal-case">Build for You</span>
            </h2>
            <p className="font-cormorant text-lg text-ink/50 max-w-sm">
              Available for project-based, retainer, and advisory engagements.
              Remote globally. Open to relocation.
            </p>
          </div>
        </SectionReveal>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                className="group relative bg-white border border-ink/10 p-6 hover:border-teal/40 hover:shadow-teal-md transition-all duration-300 overflow-hidden"
              >
                <div className="mb-5">
                  <div className="inline-flex p-2.5 border border-teal/20 bg-teal/5 group-hover:border-teal/50 group-hover:bg-teal/10 transition-all duration-300">
                    {Icon && <Icon size={20} className="text-teal" />}
                  </div>
                </div>

                <h3 className="font-jost font-light text-base text-ink mb-3 leading-snug group-hover:text-teal transition-colors duration-300 uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="font-cormorant text-base text-ink/55 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 border border-ink/10 text-ink/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-cormorant text-base text-teal/70 hover:text-teal transition-colors group-hover:text-teal italic"
                >
                  Enquire <span className="ml-1 not-italic">→</span>
                </a>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-teal/0 group-hover:border-teal/40 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-12 p-6 border border-teal/20 bg-teal/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-jost font-light text-ink mb-1 tracking-wide uppercase text-sm">Not sure which fits?</p>
              <p className="font-cormorant text-base text-ink/50">
                Tell me your challenge — I&apos;ll tell you how I can help.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-teal-fill inline-flex items-center gap-2 px-6 py-3 border border-teal text-teal font-jost font-light text-sm hover:text-white transition-all duration-300 whitespace-nowrap tracking-widest uppercase"
            >
              Start a Conversation
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
