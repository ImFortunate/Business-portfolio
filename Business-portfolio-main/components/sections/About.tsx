import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { parseAccent } from "@/lib/richText";
import { about } from "@/content";
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
              <div className="relative aspect-square w-full overflow-hidden rounded-card border border-border/10">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
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
