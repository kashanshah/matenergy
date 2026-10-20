"use client";

import type { FormEvent } from "react";
import { roofTypes, segments, systemTypes } from "@/lib/lead-schema";
import { Field, FormError, FormSuccess, Honeypot, SubmitButton } from "./fields";
import { formString, useLeadSubmit } from "./use-lead-submit";

export function QuoteForm({ defaultSegment = "Residential" }: { defaultSegment?: (typeof segments)[number] }) {
  const { status, error, fieldErrors, submit, reset } = useLeadSubmit();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const ok = await submit({
      formType: "quote",
      name: formString(fd, "name"),
      phone: formString(fd, "phone"),
      email: formString(fd, "email"),
      website: formString(fd, "website"),
      segment: formString(fd, "segment") as (typeof segments)[number],
      systemType: formString(fd, "systemType") as (typeof systemTypes)[number],
      roofType: (formString(fd, "roofType") || undefined) as (typeof roofTypes)[number] | undefined,
      monthlyBill: formString(fd, "monthlyBill"),
      location: formString(fd, "location"),
      message: formString(fd, "message"),
    });
    if (ok) form.reset();
  }

  if (status === "success") return <FormSuccess title="Thanks! Your request is in." onReset={reset} />;

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot />
      <fieldset className="sm:col-span-2">
        <legend className="label">I need solar for my</legend>
        <div className="mt-1 grid grid-cols-3 gap-2">
          {segments.map((s) => (
            <label
              key={s}
              className="flex cursor-pointer items-center justify-center rounded-md px-3 py-3 text-sm font-semibold text-ink-700 ring-1 ring-ink-200 transition has-checked:bg-brand-700 has-checked:text-white has-checked:ring-brand-700 has-focus-visible:ring-4 has-focus-visible:ring-brand-100"
            >
              <input type="radio" name="segment" value={s} defaultChecked={s === defaultSegment} className="sr-only" />
              {s === "Residential" ? "Home" : s}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Full name" name="name" required error={fieldErrors.name}>
        <input id="name" name="name" required autoComplete="name" className="field" placeholder="Your name" />
      </Field>
      <Field label="Phone / WhatsApp" name="phone" required error={fieldErrors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          className="field"
          placeholder="03xx xxxxxxx"
        />
      </Field>
      <Field label="Email" name="email" error={fieldErrors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" />
      </Field>
      <Field label="Area in Karachi" name="location" error={fieldErrors.location}>
        <input id="location" name="location" className="field" placeholder="e.g. DHA Phase 6, SITE Area" />
      </Field>
      <Field label="Average monthly bill (PKR)" name="monthlyBill" error={fieldErrors.monthlyBill}>
        <input id="monthlyBill" name="monthlyBill" inputMode="numeric" className="field" placeholder="e.g. 45,000" />
      </Field>
      <Field label="System type" name="systemType" required error={fieldErrors.systemType}>
        <select id="systemType" name="systemType" className="field" defaultValue="Not sure">
          {systemTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Roof type" name="roofType" error={fieldErrors.roofType}>
        <select id="roofType" name="roofType" className="field" defaultValue="">
          <option value="">Select…</option>
          {roofTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="Anything else we should know?" name="message" error={fieldErrors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="field resize-y"
            placeholder="Load-shedding hours, number of ACs, factory shift timings…"
          />
        </Field>
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">We&apos;ll only use your details to respond to this request.</p>
        <SubmitButton submitting={status === "submitting"}>Request a quote</SubmitButton>
      </div>
      <div className="sm:col-span-2">
        <FormError message={error} />
      </div>
    </form>
  );
}
