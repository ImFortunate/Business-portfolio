"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-border/10 bg-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent" aria-label={`${site.name} home`}>
          <span className="h-6 w-6 rounded-md bg-accent" aria-hidden="true" />
          <span className="text-base font-medium">{site.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-pill border border-border/15 bg-surface px-2 py-2 lg:flex"
          aria-label="Primary"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-pill px-4 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="light" arrow>
            {nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/20 lg:hidden focus-visible:outline-2 focus-visible:outline-accent"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-text transition-transform duration-200 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 rounded-full bg-text transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="section-container flex flex-col gap-1 border-t border-border/10 bg-bg pb-8 pt-4 lg:hidden"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-text hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" arrow className="mt-3 justify-center">
            {nav.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
