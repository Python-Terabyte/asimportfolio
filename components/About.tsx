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
              <h2 className="font-jost font-light text-4xl md:text-5xl text-ink mb-8 leading-tight uppercase tracking-wide">
                The Mind Behind<br />
                <span className="text-teal text-teal-glow italic font-cormorant font-semibold normal-case">the Machine</span>
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
                    className="font-mono text-xs px-3 py-1 border border-teal/20 text-teal/70 bg-teal/5 hover:border-teal/60 hover:text-teal transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right — profile card */}
          <SectionReveal delay={0.15} className="lg:sticky lg:top-24">
            <ProfileCard />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
