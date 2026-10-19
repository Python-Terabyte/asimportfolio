import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { DEFTY_BARS, DEFTY_CAPABILITIES, DEFTY_KPIS, DEFTY_STACK } from "@/lib/data";

export default function ProductDeepDive() {
  return (
    <section id="product" className="py-10 md:py-14 px-5 md:px-7 bg-bg0 bg-deco-product">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-start">
        <SectionReveal className="flex-1 min-w-0 basis-[420px]">
          <SectionLabel>Flagship Product</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[40px] text-ivory mb-3">
            Defty Books - the accounting engine I wished existed.
          </h2>
          <p className="font-manrope text-base leading-[1.7] text-ivory-muted mb-4">
            A cloud accounting and financial-intelligence platform where every transaction is a balanced
            double-entry journal. Multi-company workspaces, multi-currency support and a built-in tax engine,
            live at{" "}
            <a
              href="https://deftysolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              deftysolutions.com
            </a>{" "}
            and used by 30 businesses.
          </p>
          <div className="flex flex-col gap-1">
            {DEFTY_CAPABILITIES.map((cap) => (
              <div key={cap} className="flex items-center gap-3 py-2 border-b border-ivory/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="font-manrope text-[14.5px] text-ivory-dim">{cap}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {DEFTY_STACK.map((tech) => (
              <span key={tech} className="font-mono text-[10.5px] text-ivory-faint border border-ivory/10 px-[11px] py-[5px] rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="flex-1 min-w-[320px] basis-[400px]">
          <div className="rounded-[20px] overflow-hidden bg-bg2 border border-ivory/[0.08] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <div className="px-[18px] py-3.5 bg-bg3 flex items-center gap-2 border-b border-ivory/[0.06]">
              <span className="w-2 h-2 rounded-full bg-[#4A5058]" />
              <span className="w-2 h-2 rounded-full bg-[#4A5058]" />
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="ml-2.5 font-mono text-[10px] text-ivory-ghost">deftysolutions.com / books</span>
            </div>
            <div className="p-[26px] flex flex-col gap-[18px]">
              <div className="grid grid-cols-3 gap-3">
                {DEFTY_KPIS.map((kpi) => (
                  <div key={kpi.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-ivory/[0.06]">
                    <div className="font-mono text-[9px] text-ivory-ghost uppercase tracking-wide mb-1.5">{kpi.label}</div>
                    <div className="font-sora font-bold text-base text-ivory">{kpi.value}</div>
                  </div>
                ))}
              </div>
              <div className="h-[120px] flex items-end gap-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-ivory/[0.06]">
                {DEFTY_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gold rounded-t-[3px]"
                    style={{ height: `${h * 100}%`, opacity: 0.4 + h * 0.5 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
