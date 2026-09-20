import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-[76px] px-5 md:px-7 bg-bg0">
      <div className="max-w-[1080px] mx-auto">
        <SectionReveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] text-ivory mb-12">
            Accounting → Analysis → Product → Leadership.
          </h2>
        </SectionReveal>

        <div className="relative pl-7 border-l border-ivory/10">
          {EXPERIENCE.map((role, i) => (
            <SectionReveal key={`${role.company}-${role.period}`} delay={i * 0.06} className="relative mb-11">
              <span
                className="absolute -left-[33px] top-1.5 w-[9px] h-[9px] rounded-full bg-gold"
                style={{ boxShadow: "0 0 0 4px rgba(201,168,118,0.15)" }}
              />
              <div className="font-mono text-[11px] text-ivory-ghost tracking-wide mb-2">{role.period}</div>
              <div className="flex flex-wrap items-baseline gap-2.5 mb-3">
                <h3 className="font-sora font-bold text-[19px] text-ivory">{role.title}</h3>
                {role.companyUrl ? (
                  <a
                    href={role.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    {role.company}
                  </a>
                ) : (
                  <span className="font-manrope text-sm text-gold">{role.company}</span>
                )}
              </div>
              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2.5 font-manrope text-[15px] leading-relaxed text-ivory-muted">
                    <span className="text-gold shrink-0">▪</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
