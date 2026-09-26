import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-10 md:py-16">
      <div className="section-container">
        <header className="mb-16 flex items-center justify-between gap-6">
          <Link
            href="/#top"
            className="text-sm text-muted transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to home
          </Link>
          <p className="label text-muted">{projects.length} projects</p>
        </header>

        <div className="mb-12 max-w-3xl">
          <p className="label mb-4 text-muted">Selected work</p>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-card border border-border/10 bg-surface p-5 md:p-6"
            >
              <div className="overflow-hidden rounded-[20px]">
                <div className="relative aspect-16/10 w-full">
                  <Image
                    src={project.image}
                    alt={project.imageLabel}
                    fill
                    loading={index === 0 ? "eager" : undefined}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <h2 className="text-2xl font-medium tracking-tight">
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
              </h2>
              <p className="text-muted">{project.description}</p>
              {project.url && (
                <span className="mt-auto text-sm text-accent transition-colors group-hover:text-text">
                  Visit site ↗
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
