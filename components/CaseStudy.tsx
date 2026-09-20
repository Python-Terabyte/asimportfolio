import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { CASE_STUDY_STEPS } from "@/lib/data";

const COLOR_CYCLE = ["#C9A876", "#3FA57D", "#D06B4A"];

export default function CaseStudy() {
  return (
    <section id="casestudy" className="py-[76px] px-5 md:px-7 bg-bg1">
      <div className="max-w-[960px] mx-auto">
        <SectionReveal>
          <SectionLabel>Case Study</SectionLabel>
          <h2 className="font-sora font-bold text-[26px] md:text-4xl text-ivory mb-10">
            How I approach a problem: Business Health Score
          </h2>
        </SectionReveal>

        <div className="flex flex-col">
          {CASE_STUDY_STEPS.map((step, i) => {
            const col = COLOR_CYCLE[i % 3];
            const isLast = i === CASE_STUDY_STEPS.length - 1;
            return (
              <SectionReveal key={step.n} delay={i * 0.05}>
                <div className="flex gap-6 pb-8">
                  <div className="flex flex-col items-center shrink-0">
                    <span
                      className="w-9 h-9 rounded-full bg-bg3 flex items-center justify-center font-mono text-xs"
                      style={{ border: `1px solid ${col}`, color: col }}
                    >
                      {step.n}
                    </span>
                    {!isLast && <span className="w-px flex-1 bg-ivory/10 mt-1.5" />}
                  </div>
                  <div className="pt-1">
                    <div className="font-sora font-bold text-base uppercase tracking-wide mb-2" style={{ color: col }}>
                      {step.label}
                    </div>
                    <p className="font-manrope text-[15px] leading-relaxed text-ivory-dim max-w-[640px]">{step.text}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
