import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { industries } from "@/content";

export function Industries() {
  return (
    <section id="industries" className="section-container section-space">
      <SectionHeading eyebrow={industries.eyebrow} title={parseAccent(industries.heading)} description={industries.text} />

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap gap-3">
          {industries.tags.map((tag) => (
            <Tag key={tag.label} variant={tag.lime ? "lime" : "default"} size="lg">
              {tag.label}
            </Tag>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
