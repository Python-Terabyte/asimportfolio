import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Philosophy() {
  return (
    <section className="py-[76px] px-5 md:px-7 bg-bg0 text-center">
      <div className="max-w-[820px] mx-auto">
        <SectionReveal>
          <SectionLabel>Beyond the Job Title</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <p className="font-sora font-bold text-[28px] md:text-[44px] leading-[1.3] text-ivory mb-8">
            &ldquo;Build systems that make complexity disappear.&rdquo;
          </p>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="font-manrope text-base leading-[1.75] text-ivory-faint max-w-[600px] mx-auto">
            I don&apos;t chase job titles — I chase the gap between a business problem and the system that
            quietly solves it. Combining financial rigor with software thinking is not a differentiator I
            chose; it&apos;s simply how I see problems. Every dashboard, ledger, and workflow I build is
            judged by one question: does it make a real decision easier tomorrow?
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
