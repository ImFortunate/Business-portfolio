import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { about } from "@/content";
import { isHttpUrl } from "@/lib/links";
import { team } from "@/data/team";

export function About() {
  return (
    <section id="about" className="section-container section-space">
      <SectionHeading
        eyebrow={about.eyebrow}
        title={parseAccent(about.heading)}
        description={about.text}
      />

      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {team.map((member, i) => (
          <Reveal key={member.name + i} delay={i * 0.1}>
            <div className="flex flex-col gap-4">
              {isHttpUrl(member.x) ? (
                <a
                  href={member.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X (opens in a new tab)`}
                  className="group relative block aspect-square w-full overflow-hidden rounded-card border border-border/10 transition-colors duration-300 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-bg/70 text-text opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                    </svg>
                  </span>
                </a>
              ) : (
                <div className="relative aspect-square w-full overflow-hidden rounded-card border border-border/10">
                  <Image
                    src={member.image}
                    alt={`${member.name} photo`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
