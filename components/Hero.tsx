"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function ElegantBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-teal-light/20 blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-teal/4 blur-2xl" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none">
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 0 L256 256 L0 256" stroke="#006879" strokeWidth="0.5" opacity="0.4" />
          <path d="M196 0 L196 60 L130 60 L130 120" stroke="#006879" strokeWidth="0.5" opacity="0.4" />
          <path d="M226 0 L226 90 L160 90 L160 150 L90 150" stroke="#006879" strokeWidth="0.5" opacity="0.3" />
          <circle cx="130" cy="60" r="3" fill="#006879" opacity="0.5" />
          <circle cx="160" cy="150" r="3" fill="#006879" opacity="0.5" />
          <rect x="124" y="54" width="12" height="12" stroke="#006879" strokeWidth="0.5" fill="none" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      <ElegantBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left: content */}
          <div>
            <FadeUp delay={0} className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-teal/20 bg-white/70 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-xs text-ink/60 tracking-widest">
                BI Architect · Fintech Strategist · ACMA · Available for Consulting
              </span>
            </FadeUp>

            <FadeUp delay={0.12} className="mb-5">
              <h1 className="font-jost font-light text-2xl md:text-3xl text-ink/50 tracking-wide uppercase">
                Muhammad Asim Saleem
              </h1>
            </FadeUp>

            <FadeUp delay={0.24} className="mb-8">
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Excel (Expert)", accent: true },
                  { label: "Power BI", accent: true },
                  { label: "Financial Modeling", accent: true },
                  { label: "Tableau", accent: false },
                  { label: "QuickBooks", accent: false },
                  { label: "Xero", accent: false },
                  { label: "Agile / Kanban", accent: false },
                  { label: "BRD / FRD / PRD", accent: false },
                  { label: "Virtual CFO", accent: false },
                ].map(({ label, accent }) => (
                  <span
                    key={label}
                    className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                      accent
                        ? "border-teal text-teal bg-teal/8"
                        : "border-teal/25 text-teal/70 bg-teal/4 hover:border-teal/60 hover:text-teal"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.36}>
              <p className="font-cormorant text-2xl md:text-3xl text-ink/90 font-semibold mb-4 leading-snug">
                I don&apos;t maintain dashboards.<br className="hidden sm:block" />
                <span className="text-teal text-teal-glow italic"> I architect the systems that power them.</span>
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <p className="font-cormorant text-lg md:text-xl text-ink/55 mb-10 max-w-2xl leading-relaxed">
                Senior Business Analyst, BI Architect, and Fintech Product Leader with 5+ years
                building data infrastructure from scratch. Behind a platform processing{" "}
                <span className="text-ink/80 font-medium">$4.2B in transactions</span> across{" "}
                <span className="text-ink/80 font-medium">190+ countries</span>.
              </p>
            </FadeUp>

            <FadeUp delay={0.64} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-teal-fill inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-jost font-medium text-sm tracking-widest uppercase border border-teal hover:text-white transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-teal/60 text-teal font-jost font-light text-sm tracking-widest uppercase hover:border-teal hover:bg-teal/8 transition-all duration-300"
              >
                Hire Me for Consulting
              </a>
            </FadeUp>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div
              className="relative w-full"
              style={{ height: "78vh" }}
            >
              <Image
                src="/asim.png"
                alt="Muhammad Asim Saleem"
                fill
                priority
                className="object-contain object-center"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 78% 82% at 50% 44%, black 38%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.4) 76%, transparent 92%)",
                  maskImage:
                    "radial-gradient(ellipse 78% 82% at 50% 44%, black 38%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.4) 76%, transparent 92%)",
                  filter: "contrast(1.14) brightness(1.08) saturate(0.85)",
                }}
              />

              {/* Left-edge blend so the photo merges into the left column */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, #F8F7F4 0%, rgba(248,247,244,0.6) 18%, transparent 40%)",
                }}
              />

              {/* Bottom fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #F8F7F4 0%, rgba(248,247,244,0.5) 12%, transparent 30%)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
