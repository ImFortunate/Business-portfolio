type ImagePlaceholderProps = {
  label: string;
  className?: string;
  rounded?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
  rounded = "rounded-card",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden border border-border/10 bg-surface-2 ${rounded} ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(237,234,227,0.05) 0px, rgba(237,234,227,0.05) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <span className="label px-4 text-center text-subtle/70">{label}</span>
    </div>
  );
}
