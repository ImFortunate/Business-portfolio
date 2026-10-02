import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { testimonialsSection } from "@/content";
import { testimonials, type Testimonial } from "@/data/testimonials";

function initials(name = "") {
  return name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function Stars({ rating, lime }: { rating: number; lime?: boolean }) {
  const value = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex gap-1" role="img" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={
            i < value ? (lime ? "text-on-accent" : "text-accent") : lime ? "text-on-accent/25" : "text-border/20"
          }
          fill="currentColor"
        >
          <path d="m12 2.5 2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ item }: { item: Testimonial }) {
  if (item.avatar) {
    return (
      <Image
        src={item.avatar}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
        item.lime ? "bg-on-accent text-accent" : "bg-surface-2 text-text"
      }`}
    >
      {initials(item.name)}
    </span>
  );
}

// Desktop grid has 6 columns: the first three cards span 2 each, the last two span 3,
// so five cards fill two even rows. Any other count falls back to a regular 3-up grid.
function desktopSpan(index: number, count: number) {
  if (count !== 5) return "lg:col-span-2";
  return index < 3 ? "lg:col-span-2" : "lg:col-span-3";
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-container section-space">
      <SectionHeading
        eyebrow={testimonialsSection.eyebrow}
        title={parseAccent(testimonialsSection.heading)}
        aside={testimonialsSection.text}
      />

      <div className="-mx-[var(--container-pad)] mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--container-pad)] pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-6">
        {testimonials.map((item, i) => (
          <Reveal
            key={item.quote}
            delay={(i % 3) * 0.1}
            className={`w-[85%] shrink-0 snap-center md:w-auto md:shrink ${desktopSpan(i, testimonials.length)}`}
          >
            <figure
              className={`flex h-full flex-col gap-8 rounded-card p-8 transition-colors duration-300 ${
                item.lime
                  ? "bg-accent text-on-accent"
                  : "border border-border/15 bg-surface hover:border-border/30"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  aria-hidden="true"
                  className={item.lime ? "text-on-accent/30" : "text-accent/60"}
                  fill="currentColor"
                >
                  <path d="M0 24V14.4C0 6.24 4.4 1.44 12 0l1.6 3.2C9.6 4.48 7.6 7.2 7.2 10.4H13V24H0Zm19 0V14.4C19 6.24 23.4 1.44 31 0l1 3.2c-4 1.28-6 4-6.4 7.2H32V24H19Z" />
                </svg>
                {item.rating !== undefined && <Stars rating={item.rating} lime={item.lime} />}
              </div>

              <blockquote className="flex-1 text-lg leading-snug">
                <p>{item.quote}</p>
              </blockquote>

              {item.name && (
                <figcaption
                  className={`flex items-center gap-3 border-t pt-6 ${
                    item.lime ? "border-on-accent/15" : "border-border/10"
                  }`}
                >
                  <Avatar item={item} />
                  <div className="min-w-0">
                    <p className="truncate font-medium">{item.name}</p>
                    <p className={`truncate text-sm ${item.lime ? "text-on-accent/70" : "text-muted"}`}>
                      {item.title}
                    </p>
                  </div>
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
