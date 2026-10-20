"use client";

import type { FormEvent } from "react";
import { Field, FormError, FormSuccess, Honeypot, SubmitButton } from "./fields";
import { formString, useLeadSubmit } from "./use-lead-submit";

export function ContactForm() {
  const { status, error, fieldErrors, submit, reset } = useLeadSubmit();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const ok = await submit({
      formType: "contact",
      name: formString(fd, "name"),
      phone: formString(fd, "phone"),
      email: formString(fd, "email"),
      website: formString(fd, "website"),
      subject: formString(fd, "subject"),
      message: formString(fd, "message"),
    });
    if (ok) form.reset();
  }

  if (status === "success") return <FormSuccess title="Message sent!" onReset={reset} />;

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot />
      <Field label="Full name" name="c-name" required error={fieldErrors.name}>
        <input id="c-name" name="name" required autoComplete="name" className="field" />
      </Field>
      <Field label="Phone / WhatsApp" name="c-phone" required error={fieldErrors.phone}>
        <input id="c-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field" />
      </Field>
      <Field label="Email" name="c-email" error={fieldErrors.email}>
        <input id="c-email" name="email" type="email" autoComplete="email" className="field" />
      </Field>
      <Field label="Subject" name="c-subject" error={fieldErrors.subject}>
        <input id="c-subject" name="subject" className="field" placeholder="e.g. Maintenance visit" />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Message" name="c-message" required error={fieldErrors.message}>
          <textarea id="c-message" name="message" required rows={5} className="field resize-y" />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <SubmitButton submitting={status === "submitting"}>Send message</SubmitButton>
      </div>
      <div className="sm:col-span-2">
        <FormError message={error} />
      </div>
    </form>
  );
}
