"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

function ElegantBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber/8 blur-3xl" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-sage/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-rust/6 blur-2xl" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none">
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 0 L256 256 L0 256" stroke="#EFA23B" strokeWidth="0.5" opacity="0.4" />
          <path d="M196 0 L196 60 L130 60 L130 120" stroke="#EFA23B" strokeWidth="0.5" opacity="0.4" />
          <path d="M226 0 L226 90 L160 90 L160 150 L90 150" stroke="#EFA23B" strokeWidth="0.5" opacity="0.3" />
          <circle cx="130" cy="60" r="3" fill="#EFA23B" opacity="0.5" />
          <circle cx="160" cy="150" r="3" fill="#EFA23B" opacity="0.5" />
          <rect x="124" y="54" width="12" height="12" stroke="#EFA23B" strokeWidth="0.5" fill="none" opacity="0.4" />
        </svg>
      </div>
      {/* Ghost outline word for reference-style texture */}
      <div
        className="hidden lg:block absolute top-10 left-0 right-0 text-center select-none font-cormorant font-bold text-[7rem] xl:text-[8.5rem] leading-none uppercase tracking-tight rotate-[-2deg]"
        style={{
          WebkitTextStroke: "1px rgba(239,162,59,0.13)",
          color: "transparent",
        }}
      >
        Architect
      </div>
    </div>
  );
}

function FadeUp({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
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

const badges = [
  { label: "ACMA", rotate: "-rotate-2" },
  { label: "BI Architect", rotate: "rotate-1" },
  { label: "Fintech Strategist", rotate: "-rotate-1" },
  { label: "Finance & Compliance Expert", rotate: "rotate-2" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest">
      <ElegantBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left: content */}
          <div>
            <FadeUp delay={0} className="mb-6">
              <div className="group relative inline-flex items-center gap-2.5 pl-4 pr-5 py-2.5 rounded-full bg-cream/10 border border-amber/30 backdrop-blur-sm -rotate-1">
                <span className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-amber animate-pulse" />
                  <span className="absolute inset-0 rounded-full bg-amber blur-[3px] opacity-70" />
                </span>
                <span className="font-jost text-[12px] md:text-[13px] font-semibold text-cream tracking-[0.18em] uppercase whitespace-nowrap">
                  Available for New Engagements
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.12} className="mb-5">
              <h1 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream">
                Muhammad Asim
              </h1>
            </FadeUp>

            <FadeUp delay={0.24} className="mb-8">
              <div className="flex flex-wrap gap-3">
                {badges.map(({ label, rotate }) => (
                  <span
                    key={label}
                    className={`font-mono text-xs px-4 py-2 rounded-full border border-amber/40 text-amber bg-amber/10 ${rotate} hover:rotate-0 transition-transform duration-300`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.36}>
              <p className="font-cormorant text-xl md:text-2xl text-cream font-semibold mb-4 leading-snug">
                Let&apos;s not maintain dashboards.{" "}
                <span className="text-amber italic">
                  And start architecting the systems that power them.
                </span>
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <p className="font-cormorant text-base md:text-lg text-cream/75 mb-10 max-w-2xl leading-relaxed">
                Senior Business Analyst, BI Architect, and Fintech Product Leader with 5+ years
                building data infrastructure from scratch. Behind a platform processing{" "}
                <span className="text-cream font-bold">$4.2B in transactions</span> across{" "}
                <span className="text-cream font-bold">190+ countries</span>.
              </p>
            </FadeUp>

            <FadeUp delay={0.64} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber text-forest font-jost font-semibold text-sm tracking-widest uppercase hover:bg-cream transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cream/40 text-cream font-jost font-light text-sm tracking-widest uppercase hover:border-amber hover:text-amber transition-all duration-300"
              >
                Hire Me for Consulting
              </a>
            </FadeUp>
          </div>

          {/* Right: layered photo card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
            className="hidden lg:flex items-end justify-center relative"
            style={{ height: "78vh" }}
          >
            {/* Offset backdrop card, rotated for a hand-placed feel */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[74%] rounded-[2rem] bg-gradient-to-br from-amber/30 via-rust/20 to-transparent rotate-3" />
            <div className="absolute bottom-10 left-[8%] w-[78%] h-[70%] rounded-[2rem] border border-amber/25 -rotate-2" />

            <div className="relative w-full h-full">
              <Image
                src="/asim.png"
                alt="Muhammad Asim Saleem"
                fill
                priority
                className="object-contain object-bottom"
                style={{
                  filter:
                    "contrast(1.08) brightness(1.06) saturate(0.95) drop-shadow(0 32px 80px rgba(0,0,0,0.45))",
                }}
              />
            </div>

            {/* Floating sticker card */}
            <div className="absolute top-4 right-0 xl:right-4 bg-cream text-forest rounded-2xl px-5 py-4 shadow-amber-lg rotate-3 flex items-center gap-3 max-w-[190px]">
              <Sparkles size={20} className="text-amber shrink-0" />
              <span className="font-jost text-xs font-semibold leading-snug">
                5+ Years Architecting Fintech Systems
              </span>
            </div>

            {/* Small floating stat chip */}
            <div className="absolute bottom-16 -left-2 bg-forest border border-amber/40 rounded-xl px-4 py-3 -rotate-2">
              <div className="font-cormorant font-bold text-lg text-amber leading-none">$4.2B+</div>
              <div className="font-mono text-[9px] text-cream/70 tracking-wider uppercase mt-1">Processed</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll down badge */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-amber text-forest font-jost text-[10px] font-semibold tracking-widest uppercase text-center leading-tight hover:scale-105 transition-transform duration-300 z-10 rotate-[-6deg]"
      >
        Scroll<br />Down
      </a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest to-transparent pointer-events-none" />
    </section>
  );
}
