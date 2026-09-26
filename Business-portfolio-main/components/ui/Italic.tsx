import type { ReactNode } from "react";

export function Italic({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`italic-accent ${className}`}>{children}</span>;
}
