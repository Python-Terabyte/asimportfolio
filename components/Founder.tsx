import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { FOUNDER_PILLARS, PRODUCTS } from "@/lib/data";

const PILLAR_COLOR = ["text-gold", "text-emerald", "text-rust"];

export default function Founder() {
  return (
    <section id="founder" className="relative py-[76px] px-5 md:px-7 bg-gradient-to-b from-bg1 to-[#0A0A0A] overflow-hidden">
      <div
        className="absolute -top-[10%] -right-[10%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,118,0.1), transparent 70%)" }}
      />
      <div className="relative max-w-[1280px] mx-auto">
        <SectionReveal>
          <SectionLabel>Founder</SectionLabel>
          <h2 className="font-sora font-extrabold text-[30px] md:text-[46px] text-ivory mb-6 max-w-[760px]">
            Building what I couldn&apos;t find.
          </h2>
          <p className="font-manrope text-[17px] leading-[1.7] text-ivory-muted max-w-[680px] mb-8">
            Beyond consulting, I build my own software through <strong className="text-ivory">Quasar Technologies</strong> —
            a studio I co-founded spanning business software and games. I lead and build the business suite; my
            co-founder leads the gaming division.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-12 mb-12 py-8 border-t border-b border-ivory/[0.08]">
            <div className="flex-1 min-w-0 basis-[300px]">
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-gold mb-2.5">Business Suite — Led by Asim</div>
              <div className="font-manrope text-[15px] leading-relaxed text-ivory-dim">
                Accounting, automation, and reporting software — BrandFox and Ledgerly.
              </div>
            </div>
            <div className="flex-1 min-w-0 basis-[300px] pl-12 border-l border-ivory/10">
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-emerald mb-2.5">Games — Led by Co-Founder</div>
              <div className="font-manrope text-[15px] leading-relaxed text-ivory-dim">
                Quasar&apos;s game development division, built and led by my co-founder.
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="flex flex-col mb-14">
          {FOUNDER_PILLARS.map((pillar, i) => (
            <SectionReveal key={pillar.label} delay={i * 0.05}>
              <div className="flex flex-wrap gap-6 py-5 border-b border-ivory/[0.07]">
                <div className={`flex-none w-[140px] font-mono text-[11px] tracking-[0.14em] uppercase ${PILLAR_COLOR[i % 3]}`}>
                  {pillar.label}
                </div>
                <div className="flex-1 min-w-0 basis-[320px] font-manrope text-[15px] leading-relaxed text-ivory-dim">
                  {pillar.text}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {PRODUCTS.map((product) => {
            const isLive = product.status === "live";
            return (
              <SectionReveal key={product.name}>
                <div
                  className="p-8 rounded-[20px] relative h-full"
                  style={{
                    background: isLive ? "rgba(201,168,118,0.06)" : "rgba(63,165,125,0.06)",
                    border: `1px solid ${isLive ? "rgba(201,168,118,0.3)" : "rgba(63,165,125,0.3)"}`,
                  }}
                >
                  <div
                    className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-wide uppercase px-3 py-1.5 rounded-full mb-5"
                    style={{ color: isLive ? "#C9A876" : "#3FA57D", border: `1px solid ${isLive ? "#C9A876" : "#3FA57D"}` }}
                  >
                    {isLive ? "Live" : "In Development"}
                  </div>
                  <h3 className="font-sora font-bold text-2xl text-ivory mb-1.5">{product.name}</h3>
                  <div className="font-mono text-[11px] tracking-wide uppercase text-gold mb-4">{product.tagline}</div>
                  <p className="font-manrope text-[14.5px] leading-relaxed text-ivory-muted mb-5">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-[22px]">
                    {product.features.map((feat) => (
                      <span key={feat} className="font-mono text-[10.5px] text-ivory-faint border border-ivory/10 px-[11px] py-[5px] rounded-full">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <a href={product.url} target={product.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-sora font-semibold text-[13px] text-gold hover:text-gold-light transition-colors">
                    {product.cta} →
                  </a>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
