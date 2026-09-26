"use client";

import { useEffect, useRef } from "react";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
};

export function VideoModal({ open, onClose, label }: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute -top-14 right-0 rounded-full border border-border/30 px-4 py-2 text-sm text-text transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
        >
          Close
        </button>
        <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-card bg-surface-2 border border-border/10">
          <span className="label text-subtle">{label}</span>
        </div>
      </div>
    </div>
  );
}
