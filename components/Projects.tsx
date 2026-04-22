"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-matrix pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-jost font-light text-4xl md:text-5xl text-ink mb-16 leading-tight uppercase tracking-wide">
            Things I&apos;ve<br />
            <span className="text-teal text-teal-glow italic font-cormorant font-semibold normal-case">Actually Built</span>
          </h2>
        </SectionReveal>

        <div ref={ref} className="space-y-5">
          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative bg-teal-dark border border-teal/30 p-8 hover:shadow-teal-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-4 font-mono text-xs text-teal-light/70 px-2 py-1 border border-teal-light/20">
                FEATURED
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-jost font-light text-2xl md:text-3xl text-white mb-4 group-hover:text-teal-light transition-colors duration-300 uppercase tracking-wider">
                    {featured.title}
                  </h3>
                  <p className="font-cormorant text-lg text-white/60 leading-relaxed mb-5">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-2.5 py-1 border border-teal-light/20 text-teal-light/60 bg-teal-light/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-cormorant text-base text-teal-light hover:text-white transition-colors italic"
                    >
                      <ExternalLink size={14} />
                      View Live Platform
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {featured.stats.map((stat) => (
                    <div key={stat} className="bg-white/5 border border-teal-light/15 p-4 text-center">
                      <div className="font-jost font-light text-teal-light text-sm mb-1 tracking-wider">{stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Rest */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: "easeOut" }}
                className="group bg-panel-light border border-ink/8 p-6 hover:border-teal/30 hover:shadow-teal-sm transition-all duration-300"
              >
                <h3 className="font-jost font-light text-sm text-ink mb-3 group-hover:text-teal transition-colors duration-300 leading-snug uppercase tracking-wider">
                  {project.title}
                </h3>
                <p className="font-cormorant text-base text-ink/55 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-0.5 border border-ink/10 text-ink/35">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center mt-auto">
                  {project.stats.slice(0, 2).map((s) => (
                    <span key={s} className="font-mono text-xs text-teal/50">{s}</span>
                  ))}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-ink/30 hover:text-teal transition-colors"
                    >
                      {project.liveUrl.includes("github") ? (
                        <Code2 size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
