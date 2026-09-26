import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { cta, site } from "@/content";

export function CTA() {
  return (
    <section id="contact" className="section-container section-space">
      <Reveal>
        <div className="flex flex-col items-center gap-8 rounded-card bg-accent px-6 py-20 text-center text-on-accent md:px-16 md:py-28">
          <h2
            className="max-w-4xl text-cta font-medium text-balance"
            style={{ letterSpacing: "var(--text-cta--letter-spacing)" }}
          >
            {parseAccent(cta.heading)}
          </h2>
          <p className="max-w-md text-body-lg text-on-accent/80">{cta.subtext}</p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <Button href={site.calendlyUrl} variant="dark" arrow>
              {cta.primaryCta}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="text-base font-medium underline decoration-on-accent/40 underline-offset-4 transition-colors hover:decoration-on-accent focus-visible:outline-2 focus-visible:outline-on-accent"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
