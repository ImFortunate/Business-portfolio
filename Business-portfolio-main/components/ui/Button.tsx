import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "dark" | "light";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const styles: Record<Variant, { button: string; circle: string; arrow: string }> = {
  primary: {
    button: "bg-accent text-on-accent hover:brightness-95",
    circle: "bg-on-accent",
    arrow: "text-accent",
  },
  outline: {
    button: "bg-transparent text-text border border-border/30 hover:border-border/60",
    circle: "bg-text",
    arrow: "text-bg",
  },
  dark: {
    button: "bg-on-accent text-accent hover:brightness-125",
    circle: "bg-accent",
    arrow: "text-on-accent",
  },
  light: {
    button: "bg-text text-bg hover:brightness-95",
    circle: "bg-bg",
    arrow: "text-text",
  },
};

const baseClasses =
  "group inline-flex items-center gap-3 rounded-pill px-6 py-3 text-[15px] font-medium transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent";

function ArrowIcon({ variant }: { variant: Variant }) {
  const { circle, arrow } = styles[variant];

  return (
    <span
      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${circle} ${arrow} transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
      aria-hidden="true"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Button({ children, variant = "primary", arrow = false, className = "", href, ...rest }: ButtonProps) {
  const classes = `${baseClasses} ${styles[variant].button} ${className}`;

  if (href) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    // Only real in-app routes/anchors go through next/link — anything else (external
    // URLs, mailto:, or bracketed placeholders like "[CALENDLY LINK]") is a plain <a>,
    // since Link treats bracket characters as dynamic route segments.
    const isInternal = href.startsWith("#") || href.startsWith("/");

    if (!isInternal) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
          {arrow && <ArrowIcon variant={variant} />}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {arrow && <ArrowIcon variant={variant} />}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
      {arrow && <ArrowIcon variant={variant} />}
    </button>
  );
}
