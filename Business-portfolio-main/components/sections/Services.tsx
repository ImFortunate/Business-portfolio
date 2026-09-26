import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { services } from "@/content";

const icons = {
  design: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20l4.5-1.5L19 8a2.12 2.12 0 0 0-3-3L5.5 15.5 4 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  development: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 6 2 12l6 6M16 6l6 6-6 6M13.5 4l-3 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  apps: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3 9h18 M9 9v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  product: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 3 8l9 5 9-5-9-5Z M3 12l9 5 9-5 M3 16l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  data: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20h16 M7 16v-4 M12 16V7 M17 16v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  infra: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h16v6H4V4Z M4 14h16v6H4v-6Z M8 7h.01 M8 17h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  growth: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 17l6-6 4 4 8-8 M15 7h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
} as const;

export function Services() {
  return (
    <section id="services" className="bg-light text-light-text">
      <div className="section-container section-space">
        <SectionHeading
          light
          eyebrow={services.eyebrow}
          title={parseAccent(services.heading)}
          aside={services.aside}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 0.1}>
              <div
                className={`flex h-full flex-col gap-8 rounded-card p-8 ${
                  card.dark ? "bg-bg text-text" : "bg-white text-light-text"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      card.dark ? "bg-accent text-on-accent" : "bg-light text-light-text"
                    }`}
                  >
                    {icons[card.icon]}
                  </span>
                  <span className={`label ${card.dark ? "text-muted" : "text-light-text/50"}`}>{card.number}</span>
                </div>

                <h3 className="text-2xl font-medium tracking-tight">{card.title}</h3>

                <ul
                  className={`flex flex-col divide-y text-sm ${
                    card.dark ? "divide-border/15 text-muted" : "divide-light-text/10 text-light-text/70"
                  }`}
                >
                  {card.items.map((item) => (
                    <li key={item} className="py-3 first:pt-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-col items-start gap-6 rounded-card border border-light-text/15 p-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-body-lg text-light-text/80">{services.retainer.text}</p>
            <Button href="#contact" variant="dark" className="shrink-0">
              {services.retainer.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
