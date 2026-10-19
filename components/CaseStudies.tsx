import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { CASE_STUDIES } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-10 md:py-14 px-5 md:px-7 bg-bg0">
      <div className="max-w-[1280px] mx-auto">
        <SectionReveal>
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[40px] text-ivory mb-6 max-w-[760px]">
            Two products, from problem to live system.
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-10">
          {CASE_STUDIES.map((study, i) => (
            <SectionReveal key={study.name}>
              <article className={`flex flex-wrap gap-8 items-center ${i % 2 === 0 ? "flex-row-reverse" : ""}`}>
                <div className="flex-1 min-w-0 basis-[420px]">
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-2">{study.kicker}</div>
                  <h3 className="font-sora font-bold text-2xl md:text-[30px] text-ivory mb-1">{study.name}</h3>
                  <p className="font-manrope text-sm text-ivory-faint mb-4">My role: {study.role}</p>

                  <div className="flex flex-col gap-3 font-manrope text-[15px] leading-relaxed text-ivory-dim">
                    <p>
                      <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-rust mr-2">Problem</span>
                      {study.problem}
                    </p>
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-1.5">Approach</div>
                      <ul className="flex flex-col gap-1.5">
                        {study.approach.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span className="text-gold shrink-0">▪</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-emerald mb-1.5">Outcome</div>
                      <ul className="flex flex-col gap-1.5">
                        {study.outcome.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span className="text-emerald shrink-0">▪</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.stack.map((tech) => (
                      <span key={tech} className="font-mono text-[10.5px] text-ivory-faint border border-ivory/10 px-[11px] py-[5px] rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 basis-[320px] block rounded-xl overflow-hidden border border-ivory/10 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                >
                  <Image
                    src={study.screenshot}
                    alt={study.screenshotAlt}
                    width={1568}
                    height={779}
                    sizes="(min-width: 768px) 600px, 100vw"
                    className="w-full h-auto"
                  />
                </a>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
