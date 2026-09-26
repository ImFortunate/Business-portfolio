import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Variant = "surface" | "dark" | "lime" | "outline";
type Size = "sm" | "md" | "lg";

type PillProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  as?: ElementType;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  surface: "bg-surface text-text border border-border/15",
  dark: "bg-surface-2 text-text",
  lime: "bg-accent text-on-accent",
  outline: "bg-transparent text-text border border-border/25",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export function Pill({
  children,
  variant = "surface",
  size = "md",
  as: Component = "span",
  className = "",
  ...rest
}: PillProps) {
  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-pill font-medium leading-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
