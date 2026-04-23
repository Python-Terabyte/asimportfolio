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
    let dotScale = 1;
    let ringScale = 1;
    let targetDotScale = 1;
    let targetRingScale = 1;
    let isHovering = false;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => {
      targetDotScale = 0.6;
      targetRingScale = 0.7;
    };

    const onMouseUp = () => {
      targetDotScale = isHovering ? 0 : 1;
      targetRingScale = isHovering ? 2.2 : 1;
    };

    const onDocMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest(
        "a, button, [role=button], input, textarea, select, label"
      );
      if (target && !isHovering) {
        isHovering = true;
        targetDotScale = 0;
        targetRingScale = 2.2;
      }
    };

    const onDocMouseOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest(
        "a, button, [role=button], input, textarea, select, label"
      );
      if (target && isHovering) {
        isHovering = false;
        targetDotScale = 1;
        targetRingScale = 1;
      }
    };

    const animate = () => {
      // Snappier ring: 0.22 lerp factor (was 0.12)
      ringX = lerp(ringX, mouseX, 0.22);
      ringY = lerp(ringY, mouseY, 0.22);
      dotScale = lerp(dotScale, targetDotScale, 0.2);
      ringScale = lerp(ringScale, targetRingScale, 0.18);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${ringScale})`;
      }

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onDocMouseOver);
    document.addEventListener("mouseout", onDocMouseOut);

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onDocMouseOver);
      document.removeEventListener("mouseout", onDocMouseOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — follows mouse instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#006879] rounded-full pointer-events-none z-[9999] will-change-transform hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0) scale(1)" }}
      />
      {/* Ring — trails mouse with lerp, expands on hover */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#006879] rounded-full pointer-events-none z-[9998] will-change-transform opacity-60 hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0) scale(1)" }}
      />
    </>
  );
}
