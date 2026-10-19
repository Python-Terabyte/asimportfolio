import Photo from "@/components/ui/Photo";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";

export default function About() {
  return (
    <section id="about" className="relative py-10 md:py-14 px-5 md:px-7 bg-bg1 bg-deco-about">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-center">
        <SectionReveal className="flex-1 min-w-0 basis-[320px]">
          <Photo id="1486406146926-c627a92ad1ab" alt="Glass office towers in a financial district" className="aspect-[4/5]" />
        </SectionReveal>
        <SectionReveal className="flex-1 min-w-0 basis-[440px]">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] leading-[1.15] text-ivory mb-4">
            About Asim
          </h2>
          <div className="space-y-3 font-manrope text-[16px] leading-[1.65] text-ivory-muted max-w-[560px]">
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

              </div>
    </section>
  );
}
