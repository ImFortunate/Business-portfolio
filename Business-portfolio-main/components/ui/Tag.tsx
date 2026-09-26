import type { HTMLAttributes, ReactNode } from "react";

type Variant = "default" | "lime";
type Size = "sm" | "lg";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  default: "bg-surface text-muted border border-border/15",
  lime: "bg-accent text-on-accent border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1 text-xs label",
  lg: "px-5 py-2.5 text-base font-medium",
};

export function Tag({ children, variant = "default", size = "sm", className = "", ...rest }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
