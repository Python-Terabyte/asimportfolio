"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 hex-grid pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-jost font-light text-4xl md:text-5xl text-ink mb-16 leading-tight uppercase tracking-wide">
            Where I&apos;ve<br />
            <span className="text-teal text-teal-glow italic font-cormorant font-semibold normal-case">Built Things</span>
          </h2>
        </SectionReveal>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-ink/10 hidden md:block" />

          <div className="space-y-14">
            {EXPERIENCE.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="relative md:grid md:grid-cols-[200px_1fr] md:gap-12"
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-[196px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal z-10"
                  style={{ boxShadow: "0 0 0 3px rgba(0,104,121,0.15)" }}
                />

                {/* Left: meta */}
                <div className="mb-3 md:mb-0 md:text-right md:pr-10">
                  <div className="font-mono text-xs text-ink/35 mb-2 leading-relaxed">
                    {role.period}
                  </div>
                  <div className="font-cormorant text-base font-medium text-ink/70">
                    {role.companyUrl ? (
                      <a
                        href={role.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-teal transition-colors"
                      >
                        {role.company}
                        <ExternalLink size={10} />
                      </a>
                    ) : (
                      role.company
                    )}
                  </div>
                </div>

                {/* Right: content */}
                <div className="md:pl-10">
                  <h3 className="font-jost font-light text-lg text-ink mb-4 uppercase tracking-wider">
                    {role.title}
                  </h3>
                  <ul className="space-y-2">
                    {role.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 font-cormorant text-base text-ink/55 leading-relaxed">
                        <span className="text-teal/60 mt-1.5 shrink-0">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
