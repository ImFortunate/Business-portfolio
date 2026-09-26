import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { logos } from "@/content";

function ClientLogo({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="flex h-10 w-32 shrink-0 items-center justify-center text-muted/70 transition-colors duration-200 hover:text-text">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={128}
          height={40}
          className="h-full w-full object-contain opacity-60 grayscale transition-opacity duration-200 hover:opacity-100"
        />
      ) : (
        <span className="whitespace-nowrap text-lg font-medium tracking-tight">
          {name}
        </span>
      )}
    </div>
  );
}

export function LogosStrip() {
  return (
    <section className="section-container py-16 md:py-20">
      <Reveal>
        <div className="flex flex-col gap-8 border-y border-border/10 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <p className="max-w-xs text-sm text-muted md:text-base">
            {logos.text}
          </p>

          {/* The visual rows below are decorative (the marquee duplicates its
              children), so screen readers get this single list instead. */}
          <ul className="sr-only">
            {logos.clients.map((client) => (
              <li key={client.name}>{client.name}</li>
            ))}
          </ul>

          <div className="hidden items-center gap-8 lg:flex" aria-hidden="true">
            {logos.clients.map((client) => (
              <ClientLogo key={client.name} {...client} />
            ))}
          </div>

          <div className="lg:hidden" aria-hidden="true">
            <Marquee>
              <div className="flex items-center gap-8 pr-8">
                {logos.clients.map((client) => (
                  <ClientLogo key={client.name} {...client} />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
