"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onHover = () => {
      ringRef.current?.classList.add("scale-150");
      dotRef.current?.classList.add("scale-150");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("scale-150");
      dotRef.current?.classList.remove("scale-150");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("a, button, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-teal rounded-full pointer-events-none z-[9999] transition-transform duration-100 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-teal rounded-full pointer-events-none z-[9998] transition-transform duration-200 hidden md:block"
        style={{ opacity: 0.5 }}
      />
    </>
  );
}
