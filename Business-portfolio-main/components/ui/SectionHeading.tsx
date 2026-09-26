import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  aside?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  aside,
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const mutedColor = light ? "text-light-text/70" : "text-muted";

  return (
    <div className={`flex flex-col gap-6 ${align === "center" ? "max-w-3xl" : ""} ${alignClasses} ${className}`}>
      <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className={`flex flex-col gap-5 ${alignClasses}`}>
          {eyebrow && (
            <span className={`label ${light ? "text-light-text/60" : "text-subtle"}`}>{eyebrow}</span>
          )}
          <h2
            className="text-h2 font-medium tracking-tight text-balance"
            style={{ letterSpacing: "var(--text-h2--letter-spacing)" }}
          >
            {title}
          </h2>
        </div>
        {aside && <div className={`max-w-sm ${mutedColor} text-body-lg`}>{aside}</div>}
      </div>
      {description && <p className={`max-w-2xl text-body-lg ${mutedColor}`}>{description}</p>}
    </div>
  );
}
