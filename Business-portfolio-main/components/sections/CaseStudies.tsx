import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { caseStudies } from "@/content";
import { projects } from "@/data/projects";

export function CaseStudies() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="work" className="section-container section-space">
      <SectionHeading
        eyebrow={caseStudies.eyebrow}
        title={parseAccent(caseStudies.heading)}
        aside={
          <Button href="/projects" variant="outline" className="text-text">
            {caseStudies.cta}
          </Button>
        }
      />

      <div className="mt-16 flex flex-col gap-6">
        {featured && (
          <Reveal>
            <article className="group relative grid grid-cols-1 gap-8 overflow-hidden rounded-card border border-border/10 bg-surface p-8 md:grid-cols-2 md:items-center md:gap-10 md:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                  {featured.url ? (
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      {featured.name}
                    </a>
                  ) : (
                    featured.name
                  )}
                </h3>
                <p className="max-w-md text-body-lg text-muted">
                  {featured.description}
                </p>
                {featured.stats && (
                  <div className="mt-2 flex gap-10">
                    {featured.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-1">
                        <span className="text-3xl font-medium text-accent">
                          {stat.value}
                        </span>
                        <span className="text-sm text-muted">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={featured.image}
                    alt={featured.imageLabel}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-card border border-border/10 bg-surface p-8">
                <div className="overflow-hidden rounded-[20px]">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={project.image}
                      alt={project.imageLabel}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="text-muted">{project.description}</p>
                {project.url && (
                  <span className="mt-auto text-sm text-accent transition-colors group-hover:text-text">
                    Visit site ↗
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
