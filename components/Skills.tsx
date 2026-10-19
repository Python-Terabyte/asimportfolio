"use client";

import { useState } from "react";
import Photo from "@/components/ui/Photo";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionReveal from "@/components/ui/SectionReveal";
import { SKILL_GROUPS } from "@/lib/data";

const COLOR_CYCLE = ["#C9A876", "#3FA57D", "#D06B4A"];

export default function Skills() {
  const [active, setActive] = useState(0);
  const activeColor = COLOR_CYCLE[active % COLOR_CYCLE.length];

  return (
    <section id="skills" className="py-10 md:py-14 px-5 md:px-7 bg-bg1 bg-deco-skills">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-center">
        <SectionReveal className="flex-1 min-w-0 basis-[320px]">
          <Photo id="1460925895917-afdab827c52f" alt="Laptop showing an analytics dashboard" className="aspect-[4/5]" />
        </SectionReveal>
        <div className="flex-1 min-w-0 basis-[440px]">
        <SectionReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-sora font-bold text-[28px] md:text-[42px] text-ivory mb-5 max-w-[680px]">
            A stack that spans the balance sheet and the codebase.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 mb-4">
            {SKILL_GROUPS.map((grp, i) => {
              const isActive = i === active;
              const col = COLOR_CYCLE[i % COLOR_CYCLE.length];
              return (
                <button
                  key={grp.name}
                  onClick={() => setActive(i)}
                  className="font-sora font-semibold text-[12.5px] px-[18px] py-2.5 rounded-full transition-colors"
                  style={{
                    background: isActive ? col : "transparent",
                    color: isActive ? "#020202" : "#B7BCC4",
                    border: `1px solid ${isActive ? col : "rgba(245,245,240,0.15)"}`,
                  }}
                >
                  {grp.name}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div
            className="grid gap-3 content-start p-5 rounded-[20px] bg-bg2"
            style={{ border: `1px solid ${activeColor}44`, gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
          >
            {SKILL_GROUPS[active].items.map((item) => (
              <span
                key={item}
                className="font-mono text-[12.5px] text-ivory-dim px-4 h-[48px] flex items-center justify-center text-center rounded-full"
                style={{ background: `${activeColor}18`, border: `1px solid ${activeColor}55` }}
              >
                {item}
              </span>
            ))}
          </div>
        </SectionReveal>
        </div>
      </div>
    </section>
  );
}
