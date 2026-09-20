"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_BADGES } from "@/lib/data";

function useParallaxTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x: y * -6, y: x * 8 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return tilt;
}

export default function Hero() {
  const tilt = useParallaxTilt();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg0 pt-[140px] pb-20 px-5 md:px-7"
      style={{ background: "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(201,168,118,0.08), transparent), #020202" }}
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="relative z-[2] max-w-[1280px] mx-auto w-full flex flex-wrap gap-16 items-center">
        <div className="flex-1 min-w-0 basis-[480px]">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/35 bg-gold/[0.06] mb-7 max-w-full animate-fadeUp">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 pulse-dot" />
            <span className="font-mono text-[9.5px] md:text-[11px] tracking-[0.1em] uppercase text-gold whitespace-nowrap">
              CEO &amp; Founder · Advisory Open
            </span>
          </div>

          <h1
            className="font-sora font-extrabold text-[38px] md:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.01em] text-ivory mb-5 animate-fadeUp"
            style={{ animationDelay: "0.08s" }}
          >
            Muhammad Asim Saleem<span className="text-gold">,</span> ACMA
          </h1>

          <p
            className="font-manrope font-medium text-[17px] md:text-xl leading-relaxed text-ivory-dim max-w-[560px] mb-2.5 animate-fadeUp"
            style={{ animationDelay: "0.16s" }}
          >
            I build businesses, products, and financial technology that turn complex problems into simple systems.
          </p>
          <p
            className="font-mono text-[12.5px] tracking-wide text-ivory-faint mb-6 animate-fadeUp"
            style={{ animationDelay: "0.2s" }}
          >
            CEO &amp; Director, Quasar Technologies
          </p>

          <div className="flex flex-wrap gap-2.5 mb-9 animate-fadeUp" style={{ animationDelay: "0.26s" }}>
            {HERO_BADGES.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[11.5px] tracking-wide text-ivory-muted border border-ivory/10 px-3.5 py-1.5 rounded-full bg-white/[0.02] whitespace-nowrap"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: "0.32s" }}>
            <a
              href="#projects"
              className="font-sora font-bold text-[13px] tracking-wide uppercase text-bg0 bg-gold px-[30px] py-4 rounded-full whitespace-nowrap hover:bg-gold-light transition-colors"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="font-sora font-semibold text-[13px] tracking-wide uppercase text-ivory border border-ivory/20 px-[30px] py-4 rounded-full whitespace-nowrap hover:border-gold hover:text-gold transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="flex-1 min-w-0 basis-[380px] flex justify-center min-h-[440px] relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="w-full max-w-[480px] h-[460px] relative"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform .2s ease-out",
            }}
          >
            <div className="absolute inset-[18%] rounded-full border border-gold/[0.18] animate-spinSlow" />
            <div className="absolute inset-[30%] rounded-full border border-dashed border-gold/[0.12]" />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[58%] max-w-[260px] h-[82%] z-[3]"
              style={{
                maskImage: "radial-gradient(ellipse 64% 80% at 50% 58%, black 42%, transparent 94%)",
                WebkitMaskImage: "radial-gradient(ellipse 64% 80% at 50% 58%, black 42%, transparent 94%)",
              }}
            >
              <Image
                src="/asim.png"
                alt="Muhammad Asim Saleem"
                fill
                priority
                className="object-cover object-top"
                style={{ filter: "contrast(1.08) saturate(0.92) brightness(1.05)" }}
              />
            </div>

            <div className="absolute top-[2%] left-[3%] w-40 p-4 rounded-2xl bg-bg3/70 border border-gold/25 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-floatSlow">
              <div className="font-mono text-[9px] tracking-wide text-gold uppercase mb-2">Ledger Engine</div>
              <div className="flex gap-1 items-end h-[34px]">
                <div className="flex-1 h-[60%] bg-gold/50 rounded-sm" />
                <div className="flex-1 h-full bg-gold rounded-sm" />
                <div className="flex-1 h-[40%] bg-gold/40 rounded-sm" />
                <div className="flex-1 h-[80%] bg-gold/70 rounded-sm" />
              </div>
            </div>

            <div className="absolute top-[4%] right-[2%] w-[142px] p-3.5 rounded-2xl bg-bg3/70 border border-ivory/10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-floatSlow2">
              <div className="font-mono text-[9px] tracking-wide text-ivory-faint uppercase mb-1.5">Data Nodes</div>
              <div className="flex gap-1.5">
                <span className="w-[7px] h-[7px] rounded-full bg-gold" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#4A5058]" />
                <span className="w-[7px] h-[7px] rounded-full bg-gold/60" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#4A5058]" />
              </div>
            </div>

            <div className="absolute bottom-[2%] left-[3%] w-[152px] p-3.5 rounded-2xl bg-bg3/70 border border-ivory/10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-floatSlow">
              <div className="font-mono text-[9px] tracking-wide text-ivory-faint uppercase mb-1.5">AI Co-Pilot</div>
              <div className="font-sora text-[13px] text-ivory font-semibold">Natural-language finance</div>
            </div>

            <div className="absolute bottom-[4%] right-[2%] w-36 px-[18px] py-4 rounded-2xl bg-gold shadow-[0_20px_50px_rgba(0,0,0,0.45)] animate-floatSlow2">
              <div className="font-sora font-extrabold text-[22px] text-bg0 leading-none">$4.2B+</div>
              <div className="font-mono text-[9px] tracking-wide text-bg0/80 uppercase mt-1">Platform Volume</div>
            </div>

            <div
              className="absolute top-[48%] left-[47%] w-10 h-10 rounded-full"
              style={{
                background: "radial-gradient(circle, #C9A876, #8A7148)",
                boxShadow: "0 0 40px rgba(201,168,118,0.5)",
              }}
            />
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.16em] uppercase text-ivory-ghost flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <span className="w-px h-7 bg-gradient-to-b from-ivory-ghost to-transparent" />
      </a>
    </section>
  );
}
