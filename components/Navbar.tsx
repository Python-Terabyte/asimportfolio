"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled ? "bg-[#08090C]/92 border-gold/15" : "bg-[#08090C]/55 border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-5 md:px-7 py-3 flex flex-wrap items-center justify-between gap-3 gap-x-5">
        <a href="#home" className="flex items-center shrink-0">
          <Image
            src="/asim.png"
            alt="Asim"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover object-top border-[1.5px] border-gold"
          />
        </a>

        <div className="hidden md:flex flex-wrap items-center gap-4 flex-1 justify-end">
          <ul className="flex flex-wrap items-center gap-4 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-[#C7CAD1] hover:text-gold-light whitespace-nowrap transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="font-sora font-semibold text-xs tracking-wide uppercase text-bg0 bg-gold px-5 py-2.5 rounded-full whitespace-nowrap shrink-0 hover:bg-gold-light transition-colors"
          >
            Let&apos;s Connect
          </a>
        </div>

        <button
          className="md:hidden text-ivory hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#08090C]/98 border-b border-gold/15 backdrop-blur-md"
          >
            <ul className="px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block font-mono text-[10.5px] tracking-[0.1em] uppercase text-[#C7CAD1] hover:text-gold-light py-1 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block rounded-full font-sora font-semibold text-xs uppercase text-bg0 bg-gold px-4 py-2.5 text-center tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
