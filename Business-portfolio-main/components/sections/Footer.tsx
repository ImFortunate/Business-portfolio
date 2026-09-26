import Link from "next/link";
import { footer, site } from "@/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-container pb-10 pt-20">
      <div className="grid grid-cols-2 gap-10 border-b border-border/10 pb-14 md:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
          <Link href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <span className="h-6 w-6 rounded-md bg-accent" aria-hidden="true" />
            <span className="text-base font-medium">{site.name}</span>
          </Link>
          <p className="max-w-[20ch] text-sm text-muted">{footer.brandBlurb}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <span className="label text-subtle">{column.title}</span>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <span className="label text-subtle">Follow</span>
          <ul className="flex flex-col gap-3">
            {footer.follow.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center gap-4 pt-8 text-sm text-subtle md:flex-row md:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {footer.legal.map((link, i) => (
            <span key={link.label} className="flex items-center gap-2">
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
              {i < footer.legal.length - 1 && <span aria-hidden="true">·</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
