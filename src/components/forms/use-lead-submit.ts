"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import type { LeadInput } from "@/lib/lead-schema";

type Status = "idle" | "submitting" | "success" | "error";

export function useLeadSubmit() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[] | undefined>>({});

  async function submit(payload: LeadInput) {
    setStatus("submitting");
    setError(null);
    setFieldErrors({});
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, page: window.location.href }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: Record<string, string[]>;
      };
      if (!res.ok || !data.ok) {
        setFieldErrors(data.fields ?? {});
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return false;
      }
      setStatus("success");
      // Conversion event for Google Analytics / Ads (no-op if the tag isn't loaded).
      if (Array.isArray((window as { dataLayer?: unknown }).dataLayer)) {
        sendGAEvent("event", "generate_lead", { form_type: payload.formType });
      }
      return true;
    } catch {
      setError("Network error. Please check your connection or call us directly.");
      setStatus("error");
      return false;
    }
  }

  return { status, error, fieldErrors, submit, reset: () => setStatus("idle") };
}

export function formString(form: FormData, key: string) {
  const v = form.get(key);
  return typeof v === "string" ? v : "";
}
