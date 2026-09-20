import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { CONVERGENCE_NODES } from "@/lib/data";

const COLOR_HEX: Record<string, string> = { gold: "#C9A876", emerald: "#3FA57D", rust: "#D06B4A" };
const COLOR_CLASS: Record<string, string> = { gold: "border-gold", emerald: "border-emerald", rust: "border-rust" };
const cycle = ["gold", "emerald", "rust"];
const lineEndpoints = [
  { x: 210, y: 40 },
  { x: 380, y: 140 },
  { x: 380, y: 300 },
  { x: 210, y: 390 },
  { x: 40, y: 260 },
];

export default function About() {
  return (
    <section id="about" className="relative py-[76px] px-5 md:px-7 bg-bg1">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-16 items-center">
        <SectionReveal className="flex-1 min-w-0 basis-[440px]">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] leading-[1.15] text-ivory mb-6">
            Business, finance, technology, data &amp; product — converging into one operator.
          </h2>
          <div className="space-y-4 font-manrope text-[17px] leading-[1.7] text-ivory-muted max-w-[560px]">
            <p>
              I joined Metric HQ in 2022 as an accounts analyst. Within two years I was designing the BI
              infrastructure those reports depended on — not because I was promoted into it, but because I
              kept building what wasn&apos;t there yet.
            </p>
            <p>
              Today I lead as Manager, External Execution at a fintech platform active in 190+ countries,
              trusted by 200,000+ businesses, processing $4.2B in transactions. ACMA-qualified from ICMAP, I
              understand what numbers mean, why they move, and what decisions they should drive — financial
              depth paired with systems thinking.
            </p>
            <p>
              Alongside that, I&apos;m CEO &amp; Director of Quasar Technologies, a studio I co-founded that
              builds both business software and games. I lead and build the business suite; my co-founder
              leads the gaming division.
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
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-32 px-2.5 py-3.5 text-center rounded-2xl bg-bg3 border ${COLOR_CLASS[color]}`}
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
