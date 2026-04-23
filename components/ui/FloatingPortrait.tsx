"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  /** Colour distance below which pixels are fully transparent */
  threshold?: number;
  /** Colour distance below which pixels are feathered */
  feather?: number;
}

export default function FloatingPortrait({
  src,
  alt,
  className = "",
  threshold = 42,
  feather = 72,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const img = new window.Image();

    img.onload = () => {
      // Size the canvas to the container, maintaining contain behaviour
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
      const drawW = Math.round(img.naturalWidth * scale);
      const drawH = Math.round(img.naturalHeight * scale);
      const drawX = Math.round((cw - drawW) / 2);
      const drawY = Math.round((ch - drawH) / 2);

      canvas.width = cw;
      canvas.height = ch;

      const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      const imageData = ctx.getImageData(0, 0, cw, ch);
      const d = imageData.data;

      // Sample background colour from multiple corner regions
      const samplePoints = [
        [drawX + 2, drawY + 2],
        [drawX + 12, drawY + 2],
        [drawX + 2, drawY + 12],
        [drawX + drawW - 3, drawY + 2],
        [drawX + drawW - 13, drawY + 2],
        [drawX + 2, drawY + drawH - 3],
        [drawX + drawW - 3, drawY + drawH - 3],
      ];

      let rSum = 0, gSum = 0, bSum = 0;
      samplePoints.forEach(([x, y]) => {
        const i = (y * cw + x) * 4;
        rSum += d[i]; gSum += d[i + 1]; bSum += d[i + 2];
      });
      const bgR = rSum / samplePoints.length;
      const bgG = gSum / samplePoints.length;
      const bgB = bSum / samplePoints.length;

      // Remove background pixels, feather the edge
      for (let i = 0; i < d.length; i += 4) {
        if (d[i + 3] === 0) continue; // already transparent (outside drawn area)
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);
        if (dist < threshold) {
          d[i + 3] = 0;
        } else if (dist < feather) {
          d[i + 3] = Math.round(((dist - threshold) / (feather - threshold)) * 255);
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setReady(true);
    };

    img.src = src;
  }, [src, threshold, feather]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      aria-label={alt}
      role="img"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      />
    </div>
  );
}
