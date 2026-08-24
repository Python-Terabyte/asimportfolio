"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles, Wrench } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { PRODUCTS } from "@/lib/data";

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-matrix pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal>
          <SectionLabel>Products</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-ink leading-[1.15]">
              Software I&apos;ve{" "}
              <span className="text-forest italic font-semibold">Built for Myself</span>
            </h2>
            <p className="font-cormorant text-lg text-ink/85 max-w-sm">
              Beyond consulting, I build my own products, applying the same
              financial and systems thinking to software I own.
            </p>
          </div>
        </SectionReveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-10 pt-4">
          {PRODUCTS.map((product, i) => {
            const isLive = product.status === "live";
            const rotate = i === 0 ? "-rotate-1" : "rotate-1";
            return (
              <div key={product.name} className={`relative ${i === 1 ? "md:mt-6" : ""}`}>
                {/* Offset backdrop */}
                <div className={`absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl ${isLive ? "bg-forest/20" : "bg-amber/15"} ${i === 0 ? "rotate-1" : "-rotate-1"} pointer-events-none`} />

                {/* Sticker corner accent */}
                <div className={`absolute -top-4 -right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center rotate-12 ${isLive ? "bg-amber text-forest" : "bg-forest text-amber"} shadow-amber-md`}>
                  <Sparkles size={16} />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className={`group relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:rotate-0 ${rotate} ${
                    isLive
                      ? "bg-forest hover:shadow-amber-lg"
                      : "bg-panel-light border border-amber/30 hover:border-amber/60"
                  }`}
                >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full tracking-widest uppercase ${
                      isLive
                        ? "bg-amber/15 text-amber border border-amber/40"
                        : "bg-transparent text-forest border border-forest/30"
                    }`}
                  >
                    {isLive ? <Sparkles size={12} /> : <Wrench size={12} />}
                    {isLive ? "Live" : "In Development"}
                  </span>
                </div>

                <h3
                  className={`font-cormorant font-bold text-2xl md:text-3xl mb-2 leading-tight ${
                    isLive ? "text-cream" : "text-ink"
                  }`}
                >
                  {product.name}
                </h3>
                <p
                  className={`font-jost text-xs tracking-widest uppercase mb-5 ${
                    isLive ? "text-amber" : "text-forest"
                  }`}
                >
                  {product.tagline}
                </p>

                <p
                  className={`font-cormorant text-base leading-relaxed mb-6 ${
                    isLive ? "text-cream/75" : "text-ink/85"
                  }`}
                >
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                        isLive
                          ? "border-cream/20 text-cream/70 bg-cream/5"
                          : "border-ink/15 text-ink/70 bg-white"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-jost font-semibold text-sm tracking-widest uppercase text-amber hover:text-cream transition-colors"
                  >
                    Visit bfox.pro <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-jost font-medium text-sm tracking-widest uppercase text-ink/50">
                    Coming Soon
                  </span>
                )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
