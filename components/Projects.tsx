import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { PROJECTS } from "@/lib/data";

const COLOR_CYCLE = ["text-gold", "text-emerald", "text-rust"];
const HOVER_COLOR_CYCLE = ["hover:text-gold", "hover:text-emerald", "hover:text-rust"];

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[76px] px-5 md:px-7 bg-bg0">
      <div className="max-w-[1280px] mx-auto">
        <SectionReveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] text-ivory mb-10">Case studies, not repos.</h2>
        </SectionReveal>

        {featured && (
          <SectionReveal>
            <div
              className="p-9 rounded-[22px] mb-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              style={{ background: "linear-gradient(135deg,#111111,#0A0A0A)", border: "1px solid rgba(201,168,118,0.25)" }}
            >
              <div className="flex flex-wrap gap-10 items-start justify-between">
                <div className="flex-1 min-w-0 basis-[380px]">
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-gold mb-3.5">Featured Case Study</div>
                  <h3 className="font-sora font-bold text-2xl text-ivory mb-3.5">{featured.title}</h3>
                  <p className="font-manrope text-[15px] leading-relaxed text-ivory-muted mb-[18px]">{featured.description}</p>
                  <a href="#casestudy" className="font-sora font-semibold text-[13px] text-gold hover:text-gold-light transition-colors">
                    Read the full case study →
                  </a>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {featured.stats?.map((s) => (
                    <div key={s} className="text-center px-5 py-4 rounded-[14px] bg-white/[0.03] border border-ivory/[0.08]">
                      <div className="font-mono text-[13px] text-gold">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        )}

        <div className="flex flex-col">
          {rest.map((p, i) => (
            <SectionReveal key={p.title} delay={0.05 + i * 0.05}>
              <div className="py-[26px] border-b border-ivory/[0.08] flex flex-wrap gap-6 items-baseline">
                <div className="flex-1 min-w-0 basis-[320px]">
                  <h3 className={`font-sora font-bold text-[17px] text-ivory mb-2 transition-colors duration-300 ${HOVER_COLOR_CYCLE[i % 3]}`}>
                    {p.title}
                  </h3>
                  <p className="font-manrope text-[14.5px] leading-relaxed text-ivory-faint mb-2 max-w-[560px]">{p.description}</p>
                  <div className={`font-mono text-[11px] ${COLOR_CYCLE[i % 3]}`}>
                    {p.tags?.join(" / ")} · {p.stat}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
