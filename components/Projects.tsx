"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
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
          <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-ink mb-16 leading-[1.15]">
            Things I&apos;ve{" "}
            <span className="text-forest italic font-semibold">Actually Built</span>
          </h2>
        </SectionReveal>

        <div ref={ref} className="space-y-5">
          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative bg-forest border border-amber/30 rounded-2xl p-8 hover:shadow-amber-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-4 font-mono text-xs text-amber/80 px-2 py-1 rounded-full border border-amber/30">
                FEATURED
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-jost font-light text-2xl md:text-3xl text-cream mb-4 group-hover:text-amber transition-colors duration-300 uppercase tracking-wider">
                    {featured.title}
                  </h3>
                  <p className="font-cormorant text-lg text-cream/60 leading-relaxed mb-5">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full border border-amber/25 text-amber/70 bg-amber/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-cormorant text-base text-amber hover:text-cream transition-colors italic"
                    >
                      <ExternalLink size={14} />
                      View Live Platform
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {featured.stats.map((stat) => (
                    <div key={stat} className="bg-cream/5 border border-amber/20 rounded-lg p-4 text-center">
                      <div className="font-jost font-light text-amber text-sm mb-1 tracking-wider">{stat}</div>
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
                className={`group relative bg-panel-light rounded-2xl border border-ink/8 hover:border-amber/40 hover:shadow-amber-sm hover:rotate-0 transition-all duration-300 overflow-hidden ${["", "rotate-1", "-rotate-1"][i % 3]} ${["", "md:translate-y-3", "md:-translate-y-2"][i % 3]}`}
              >
                <span className="absolute top-3 right-4 font-cormorant font-bold text-5xl text-ink/[0.06] leading-none pointer-events-none select-none">
                  0{i + 1}
                </span>

                {/* Image area */}
                {project.image ? (
                  <div className="relative w-full h-44 bg-ink/5 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : null}

                <div className="relative p-6">
                  <h3 className="font-jost font-semibold text-sm text-ink mb-3 group-hover:text-forest transition-colors duration-300 leading-snug uppercase tracking-wider">
                    {project.title}
                  </h3>
                  <p className="font-cormorant text-base text-ink/90 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-2 py-0.5 border border-ink/20 text-ink/75">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    {project.stats.slice(0, 2).map((s) => (
                      <span key={s} className="font-mono text-xs text-forest/60">{s}</span>
                    ))}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-ink/60 hover:text-forest transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
