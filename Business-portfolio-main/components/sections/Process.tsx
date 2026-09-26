import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { process } from "@/content";

export function Process() {
  return (
    <section className="section-container section-space">
      <SectionHeading eyebrow={process.eyebrow} title={parseAccent(process.heading)} />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.1}>
            <div className="flex h-full flex-col justify-between gap-10 rounded-card border border-border/15 p-7">
              <span className="label text-accent">{item.step}</span>
              <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
