import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import ProfileCard from "@/components/ui/ProfileCard";

const skillTags = [
  "Microsoft Excel (Expert)", "Power BI", "Tableau", "Financial Modeling",
  "KPI Design", "Virtual CFO", "ACMA",
  "QuickBooks", "Xero", "Zoho", "Shopify",
  "BRD / FRD / PRD", "Agile", "Product Delivery", "AI Workflow Design",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-matrix pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionReveal>
              <SectionLabel>About</SectionLabel>
              <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-ink mb-8 leading-[1.15]">
                The Mind Behind{" "}
                <span className="text-forest italic font-semibold">the Machine</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5 font-cormorant text-lg text-ink/90 leading-relaxed mb-8">
                <p>
                  I joined Metric in 2022 as an accounts analyst. Within two years, I was
                  designing the BI infrastructure those reports depended on, not because I was
                  promoted into it, but because I kept building what wasn&apos;t there yet.
                </p>
                <p>
                  Today I lead as Manager of External Execution at Metric HQ, a fintech platform
                  active in 190+ countries, trusted by 200,000+ businesses, and processing $4.2B
                  in global transactions. I designed the Business Health Score, the data
                  architecture for MAX (Metric&apos;s AI co-pilot), and serve as Virtual CFO for
                  16 UAE businesses.
                </p>
                <p>
                  ACMA-qualified from ICMAP, I understand what numbers mean, why they move, and
                  what decisions they should drive. Financial domain depth combined with systems
                  thinking is what I bring to every engagement.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full border border-amber/30 text-ink/75 bg-amber/8 hover:border-amber/70 hover:text-forest transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right — layered photo + profile card */}
          <SectionReveal delay={0.15} className="lg:sticky lg:top-24">
            <div className="relative pt-14 pl-10">
              {/* Offset backdrop */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-amber/15 rotate-2 pointer-events-none" />

              <div className="rotate-1 hover:rotate-0 transition-transform duration-300">
                <ProfileCard />
              </div>

              {/* Overlapping circular photo */}
              <div className="absolute -top-10 -left-6 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-cream shadow-amber-lg -rotate-6 bg-forest z-10">
                <Image
                  src="/asim.png"
                  alt="Muhammad Asim Saleem"
                  fill
                  className="object-cover object-top scale-[1.8] translate-y-2"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
