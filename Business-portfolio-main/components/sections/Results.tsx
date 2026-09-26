"use client";

import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { results } from "@/content";

export function Results() {
  return (
    <section className="section-container section-space">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {results.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col justify-between gap-6 rounded-card border p-6 md:p-8 ${
                "lime" in stat && stat.lime
                  ? "border-transparent bg-accent text-on-accent"
                  : "border-border/10 bg-surface text-text"
              }`}
            >
              <p
                className="text-h2 font-medium"
                style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                {"target" in stat ? (
                  <CountUp target={stat.target} format={stat.format} />
                ) : (
                  stat.display
                )}
              </p>
              <p className={`text-sm ${"lime" in stat && stat.lime ? "text-on-accent/80" : "text-muted"}`}>
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
