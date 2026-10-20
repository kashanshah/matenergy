import type { ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

export function Field({
  label,
  name,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string[];
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
        {required && <span className="text-sun-700"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-small text-ink-700">{hint}</p>}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-small text-red-600">
          {error[0]}
        </p>
      )}
    </div>
  );
}

/** Hidden honeypot input: humans never see it, bots tend to fill it. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function SubmitButton({ submitting, children }: { submitting: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="inline-flex w-full items-center justify-center gap-2 bg-brand-700 px-6 py-3 font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {submitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {submitting ? "Sending…" : children}
    </button>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="bg-red-50 px-4 py-3 text-small text-red-700">
      {message}
    </p>
  );
}

export function FormSuccess({ title, onReset }: { title: string; onReset?: () => void }) {
  return (
    <div role="status" className="flex flex-col items-center bg-brand-50 px-6 py-12 text-center">
      <CheckCircle2 className="size-12 text-brand-500" aria-hidden />
      <h3 className="mt-4 text-lead font-bold">{title}</h3>
      <p className="mt-3 max-w-md leading-7 text-ink-700">
        Our team will contact you shortly. For anything urgent, call or WhatsApp{" "}
        <a href={site.phoneHref} className="font-semibold text-brand-700">
          {site.phoneDisplay}
        </a>
        .
      </p>
      {onReset && (
        <button type="button" onClick={onReset} className="mt-6 text-small font-semibold text-brand-700 underline">
          Send another
        </button>
      )}
    </div>
  );
}
