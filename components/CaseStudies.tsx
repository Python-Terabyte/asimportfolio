import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { CASE_STUDIES } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-[76px] px-5 md:px-7 bg-bg0">
      <div className="max-w-[1080px] mx-auto">
        <SectionReveal>
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] text-ivory mb-12 max-w-[760px]">
            Two products, from problem to live system.
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-16">
          {CASE_STUDIES.map((study) => (
            <SectionReveal key={study.name}>
              <article className="rounded-[20px] border border-ivory/[0.08] bg-bg2/40 overflow-hidden">
                <a href={study.url} target="_blank" rel="noopener noreferrer" className="block border-b border-ivory/[0.08]">
                  <Image
                    src={study.screenshot}
                    alt={study.screenshotAlt}
                    width={1568}
                    height={779}
                    sizes="(min-width: 1080px) 1080px, 100vw"
                    className="w-full h-auto"
                  />
                </a>

                <div className="p-6 md:p-10">
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-3">{study.kicker}</div>
                  <h3 className="font-sora font-bold text-2xl md:text-[32px] text-ivory mb-2">{study.name}</h3>
                  <p className="font-manrope text-sm text-ivory-faint mb-8">My role: {study.role}</p>

                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-rust mb-3">Problem</div>
                      <p className="font-manrope text-[15px] leading-relaxed text-ivory-dim">{study.problem}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-3">Approach</div>
                      <ul className="flex flex-col gap-2.5">
                        {study.approach.map((item) => (
                          <li key={item} className="flex gap-2.5 font-manrope text-[15px] leading-relaxed text-ivory-dim">
                            <span className="text-gold shrink-0">▪</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-emerald mb-3">Outcome</div>
                      <ul className="flex flex-col gap-2.5">
                        {study.outcome.map((item) => (
                          <li key={item} className="flex gap-2.5 font-manrope text-[15px] leading-relaxed text-ivory-dim">
                            <span className="text-emerald shrink-0">▪</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {study.stack.map((tech) => (
                      <span key={tech} className="font-mono text-[10.5px] text-ivory-faint border border-ivory/10 px-[11px] py-[5px] rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
