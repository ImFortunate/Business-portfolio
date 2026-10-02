"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { bookingModal } from "@/content";
import { toEnquiry, validateEnquiry, type Enquiry, type EnquiryErrors } from "@/lib/enquiry";

type Status = "idle" | "submitting" | "success" | "error";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const inputClasses =
  "w-full rounded-xl border border-border/15 bg-bg px-4 py-3 text-base text-text placeholder:text-subtle transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400 [color-scheme:dark]";

function todayISO() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleId = useId();
  const descId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [serverError, setServerError] = useState("");

  // Sync the native <dialog> with React state. showModal() gives us the top layer
  // (above the Tawk.to bubble and nav), a focus trap, Escape-to-close and an inert page.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      setStatus((s) => (s === "success" ? "idle" : s));
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Fires for Escape, the close button and backdrop clicks alike.
    const handleClose = () => {
      document.body.style.overflow = "";
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  const close = () => dialogRef.current?.close();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const formData = new FormData(e.currentTarget);
    const enquiry = toEnquiry(Object.fromEntries(formData));
    const fieldErrors = validateEnquiry(enquiry);
    setErrors(fieldErrors);
    setServerError("");

    const firstInvalid = Object.keys(fieldErrors)[0] as keyof Enquiry | undefined;
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...enquiry, website: formData.get("website") ?? "" }),
      });
      const data: { error?: string; errors?: EnquiryErrors } = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.error ?? "Something went wrong sending your request. Please try again.");
        setStatus("error");
        return;
      }

      formRef.current?.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setServerError("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      // A click whose target is the <dialog> itself landed on the backdrop, not the panel.
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-card border border-border/10 bg-surface p-0 text-text shadow-2xl backdrop:bg-bg/80 backdrop:backdrop-blur-sm open:animate-[modal-in_200ms_ease-out]"
    >
      <div className="flex flex-col gap-6 p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 id={titleId} className="text-3xl font-medium tracking-tight">
              {status === "success" ? bookingModal.successTitle : bookingModal.title}
            </h2>
            <p id={descId} className="text-muted">
              {status === "success" ? bookingModal.successText : bookingModal.intro}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={bookingModal.close}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/20 text-muted transition-colors hover:bg-surface-2 hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <Button variant="primary" onClick={close} className="self-start" autoFocus>
            {bookingModal.close}
          </Button>
        ) : (
          <form ref={formRef} noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required error={errors.name} className="sm:col-span-2">
                {(props) => <input {...props} type="text" autoComplete="name" autoFocus className={inputClasses} />}
              </Field>
              <Field label="Email address" name="email" required error={errors.email}>
                {(props) => <input {...props} type="email" autoComplete="email" inputMode="email" className={inputClasses} />}
              </Field>
              <Field label="Phone number" name="phone" required error={errors.phone}>
                {(props) => <input {...props} type="tel" autoComplete="tel" inputMode="tel" className={inputClasses} />}
              </Field>
              <Field label="Company or business name" name="company" error={errors.company} className="sm:col-span-2">
                {(props) => <input {...props} type="text" autoComplete="organization" className={inputClasses} />}
              </Field>
              <Field label="Preferred date" name="date" error={errors.date}>
                {(props) => <input {...props} type="date" min={todayISO()} className={inputClasses} />}
              </Field>
              <Field label="Preferred time" name="time" error={errors.time}>
                {(props) => <input {...props} type="time" className={inputClasses} />}
              </Field>
              <Field label="What do you need help with?" name="message" error={errors.message} className="sm:col-span-2">
                {(props) => (
                  <textarea
                    {...props}
                    rows={4}
                    placeholder="A short description of your project or the service you need"
                    className={`${inputClasses} resize-y`}
                  />
                )}
              </Field>
            </div>

            {/* Honeypot: hidden from people, filled in by spam bots. */}
            <div aria-hidden="true" className="hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div aria-live="polite">
              {status === "error" && serverError && (
                <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {serverError}
                </p>
              )}
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-subtle">
                <span aria-hidden="true">*</span> Required
              </p>
              <Button
                type="submit"
                variant="primary"
                arrow={status !== "submitting"}
                disabled={status === "submitting"}
                aria-disabled={status === "submitting"}
                className="justify-center disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "submitting" ? (
                  <>
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-on-accent/30 border-t-on-accent"
                      aria-hidden="true"
                    />
                    {bookingModal.submitting}
                  </>
                ) : (
                  bookingModal.submit
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}

type FieldProps = {
  label: string;
  name: keyof Enquiry;
  required?: boolean;
  error?: string;
  className?: string;
  children: (props: {
    id: string;
    name: string;
    required?: boolean;
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
  }) => ReactNode;
};

function Field({ label, name, required, error, className = "", children }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm text-muted">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-accent">
            {" "}*
          </span>
        ) : (
          <span className="text-subtle"> (optional)</span>
        )}
      </label>
      {children({
        id,
        name,
        required,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
