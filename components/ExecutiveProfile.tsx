import Photo from "@/components/ui/Photo";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { EXECUTIVE_CARDS } from "@/lib/data";

const COLOR_CLASS = ["text-gold", "text-emerald", "text-rust"];

export default function ExecutiveProfile() {
  return (
    <section id="executive" className="py-10 md:py-14 px-5 md:px-7 bg-bg0 bg-deco-executive">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-center">
        <div className="flex-1 min-w-0 basis-[440px]">
        <SectionReveal>
          <SectionLabel>Executive Profile</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] text-ivory mb-5 max-w-[680px]">
            Five identities. One operator.
          </h2>
        </SectionReveal>

        <div className="flex flex-col">
          {EXECUTIVE_CARDS.map((card, i) => (
            <SectionReveal key={card.mark} delay={i * 0.05}>
              <div className="flex flex-wrap gap-6 py-4 border-b border-ivory/[0.08] transition-opacity duration-300 hover:opacity-[0.82]">
                <div className={`flex-none w-[90px] font-mono font-bold text-[13px] tracking-wide ${COLOR_CLASS[i % 3]}`}>
                  {card.mark}
                </div>
                <div className="flex-1 min-w-[260px]">
                  <div className="font-sora font-bold text-[17px] text-ivory mb-2">{card.title}</div>
                  <div className="font-manrope text-[14.5px] leading-relaxed text-ivory-faint max-w-[640px]">{card.desc}</div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
        </div>
        <SectionReveal delay={0.1} className="flex-1 min-w-0 basis-[320px]">
          <Photo id="1454165804606-c3d57bc86b40" alt="Two colleagues reviewing figures at a desk" className="aspect-[4/5]" />
        </SectionReveal>
      </div>
    </section>
  );
}
