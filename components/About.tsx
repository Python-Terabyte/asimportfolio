import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import ProfileCard from "@/components/ui/ProfileCard";

const skillTags = [
  "Power BI", "Tableau", "SQL", "Python", "Excel VBA",
  "QuickBooks", "Xero", "Zoho", "Shopify", "API Integration",
  "BRD / FRD", "Agile", "Jira", "ClickUp", "Azure DevOps",
  "Financial Modeling", "KPI Design", "Virtual CFO", "LLM Workflows",
  "Data Pipelines", "ACMA", "Product Delivery",
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
              <div className="space-y-5 font-cormorant text-lg text-ink/60 leading-relaxed mb-8">
                <p>
                  I joined Metric in 2022 as an accounts analyst — the person who cleaned data,
                  ran reports, and mapped transactions. Within two years, I was architecting the
                  pipelines those reports depended on. Not because I was promoted into it, but
                  because I couldn&apos;t stop building what wasn&apos;t there yet.
                </p>
                <p>
                  Today, I&apos;m the Manager of External Execution at Metric HQ — a fintech platform
                  active in 190+ countries, trusted by 200,000+ business owners, and processing
                  $4.2B in global transactions. I built the BI infrastructure. I designed the
                  Business Health Score. I architected the data layer for MAX, Metric&apos;s AI
                  financial co-pilot. I act as Virtual CFO for 16 UAE businesses and support
                  28 more. Every system I&apos;ve touched, I built from scratch.
                </p>
                <p>
                  I&apos;m ACMA-qualified from ICMAP — the professional body equivalent of an MBA in
                  Finance — which means I don&apos;t just build dashboards. I understand what the
                  numbers mean, why they move, and what decisions they should drive. That
                  combination — financial domain depth plus systems architecture — is rare.
                  It&apos;s what I bring to every engagement.
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
