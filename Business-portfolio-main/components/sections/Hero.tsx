import { Button } from "@/components/ui/Button";
import { Italic } from "@/components/ui/Italic";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content";

export function Hero() {
  return (
    <section
      id="top"
      className="section-container flex flex-col items-center pb-16 pt-40 text-center md:pt-48"
    >
      <Reveal delay={0.08}>
        <h1
          className="mt-8 max-w-5xl text-h1 font-medium text-balance"
          style={{ letterSpacing: "var(--text-h1--letter-spacing)" }}
        >
          {hero.headingSegments.map((segment, i) =>
            segment.type === "word" ? (
              <span
                key={i}
                className={`inline-flex rounded-[0.5em] px-[0.35em] py-[0.03em] align-baseline ${
                  segment.variant === "lime"
                    ? "bg-accent text-on-accent"
                    : "bg-surface-2 text-text"
                }`}
              >
                <Italic>{segment.text}</Italic>
              </span>
            ) : (
              <span key={i}>{segment.text}</span>
            ),
          )}
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-8 max-w-xl text-body-lg text-muted">{hero.subtext}</p>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" variant="primary" arrow>
            {hero.primaryCta}
          </Button>
          <Button href="#work" variant="outline">
            {hero.secondaryCta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
