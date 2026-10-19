import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { CONVERGENCE_NODES } from "@/lib/data";

const COLOR_HEX: Record<string, string> = { gold: "#C9A876", emerald: "#3FA57D", rust: "#D06B4A" };
const COLOR_CLASS: Record<string, string> = { gold: "border-gold", emerald: "border-emerald", rust: "border-rust" };
const cycle = ["gold", "emerald", "rust"];
const lineEndpoints = [
  { x: 210, y: 40 },
  { x: 353, y: 140 },
  { x: 353, y: 300 },
  { x: 210, y: 390 },
  { x: 67, y: 260 },
];

export default function About() {
  return (
    <section id="about" className="relative py-[76px] px-5 md:px-7 bg-bg1 bg-deco-about">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-16 items-center">
        <SectionReveal className="flex-1 min-w-0 basis-[440px]">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] leading-[1.15] text-ivory mb-6">
            About Asim
          </h2>
          <div className="space-y-4 font-manrope text-[17px] leading-[1.7] text-ivory-muted max-w-[560px]">
            <p>
              My career began in finance, where I developed a foundation in accounting, financial reporting, and
              business performance. Over time, my work expanded into business analysis, product management, data
              architecture, and financial technology.
            </p>
            <p>
              As an ACMA-qualified professional, I bring financial discipline to technology decisions. I work to
              understand the business problem first, translate it into clear requirements, and help shape systems
              that make information more reliable and decisions more useful.
            </p>
            <p>
              At Metric HQ, my experience spans financial analysis, business intelligence, product design, and
              execution leadership. My work includes financial reporting automation, business performance metrics,
              and the data architecture behind financial intelligence products.
            </p>
            <p>
              Outside my professional role, I&apos;m building Quasar Technologies with a co-founder. We are
              developing software products across business applications and games, with a focus on solving
              practical problems through thoughtful engineering and product design.
            </p>
            <p className="text-ivory">
              <strong className="text-gold">My approach:</strong> understand the numbers, challenge the
              assumptions, build the system, and measure the outcome.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15} className="flex-1 min-w-[320px] basis-[380px] flex justify-center">
          <div className="relative w-full max-w-[420px] h-[420px]">
            {CONVERGENCE_NODES.map((node, i) => {
              const color = cycle[i % cycle.length];
              return (
                <div
                  key={node.label}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-28 sm:w-32 px-2.5 py-3.5 text-center rounded-2xl bg-bg3 border ${COLOR_CLASS[color]}`}
                  style={{ top: node.top, left: node.left, boxShadow: `0 12px 28px rgba(0,0,0,0.35), 0 0 20px ${COLOR_HEX[color]}22` }}
                >
                  <div className="font-sora font-semibold text-[13px] text-ivory">{node.label}</div>
                </div>
              );
            })}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full flex items-center justify-center z-[2]"
              style={{
                background: "radial-gradient(circle at 35% 30%, #E8D4A0, #C9A876 60%, #8A7148)",
                boxShadow: "0 0 60px rgba(201,168,118,0.35), 0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <span className="font-sora font-extrabold text-[17px] text-bg0 tracking-[0.03em]">ASIM</span>
            </div>
            <svg viewBox="0 0 420 420" className="absolute inset-0 z-[1] pointer-events-none">
              {lineEndpoints.map((p, i) => (
                <line
                  key={i}
                  x1={210}
                  y1={210}
                  x2={p.x}
                  y2={p.y}
                  stroke={COLOR_HEX[cycle[i % cycle.length]]}
                  strokeOpacity={0.3}
                  strokeWidth={1}
                />
              ))}
            </svg>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
