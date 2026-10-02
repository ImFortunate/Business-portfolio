import Link from "next/link";
import type { LegalDoc } from "@/data/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
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
        </header>

        <article className="max-w-3xl">
          <p className="label mb-4 text-muted">Legal</p>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">{doc.title}</h1>
          <p className="mt-8 text-body-lg text-muted">{doc.intro}</p>

          <div className="mt-14 flex flex-col divide-y divide-border/10 border-t border-border/10">
            {doc.sections.map((section, i) => (
              <section key={section.heading} className="flex flex-col gap-4 py-10">
                <h2 className="text-2xl font-medium tracking-tight">
                  <span className="label mr-3 text-subtle">{String(i + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted marker:text-accent">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <nav aria-label="Legal" className="flex gap-6 border-t border-border/10 pt-8 text-sm text-muted">
            <Link href="/privacy" className="transition-colors hover:text-text">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text">
              Terms of Use
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}
