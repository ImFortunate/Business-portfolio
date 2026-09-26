import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { testimonialsSection } from "@/content";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-container section-space">
      <SectionHeading eyebrow={testimonialsSection.eyebrow} title={parseAccent(testimonialsSection.heading)} />

      <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {testimonials.map((item, i) => (
          <Reveal key={item.name + i} delay={i * 0.1} className="w-[85%] shrink-0 snap-center md:w-auto md:shrink">
            <figure
              className={`flex h-full flex-col justify-between gap-8 rounded-card p-8 ${
                item.lime ? "bg-accent text-on-accent" : "border border-border/15 bg-surface"
              }`}
            >
              <blockquote className="text-lg leading-snug">{item.quote}</blockquote>
              <figcaption className="flex items-center gap-3">
                <ImagePlaceholder label={`${item.name} avatar`} className="h-11 w-11 shrink-0" rounded="rounded-full" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className={`text-sm ${item.lime ? "text-on-accent/70" : "text-muted"}`}>{item.title}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
