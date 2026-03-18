"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/data/dictionary";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

function validate(
  values: FormState,
  copy: Dictionary["contact"]["form"]["errors"]
): FormErrors {
  const next: FormErrors = {};
  if (!values.name.trim()) next.name = copy.name;
  if (!values.email.trim()) {
    next.email = copy.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    next.email = copy.emailInvalid;
  }
  if (!values.message.trim()) next.message = copy.messageRequired;
  return next;
}

type ContactFormProps = {
  copy: Dictionary["contact"]["form"];
};

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

export function ContactForm({ copy }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitErrors, setSubmitErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setSubmitted(false);
    setSendFailed(false);
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";
    const submitValues = { name, email, message };
    const errors = validate(submitValues, copy.errors);
    setValues(submitValues);
    setSubmitErrors(errors);
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;

    if (!FORMSPREE_URL) {
      setSendFailed(true);
      return;
    }

    setSending(true);
    setSendFailed(false);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitValues),
      });
      if (!res.ok) throw new Error("Formspree error");
      setValues(initialState);
    } catch {
      setSendFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      suppressHydrationWarning
      className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-300">
            {copy.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder={copy.placeholders.name}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none"
          />
          {submitted && submitErrors.name ? (
            <p className="mt-1.5 text-sm text-rose-300">{submitErrors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-300">
            {copy.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder={copy.placeholders.email}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none"
          />
          {submitted && submitErrors.email ? (
            <p className="mt-1.5 text-sm text-rose-300">{submitErrors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-300">
            {copy.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder={copy.placeholders.message}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none"
          />
          {submitted && submitErrors.message ? (
            <p className="mt-1.5 text-sm text-rose-300">{submitErrors.message}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? "…" : copy.submit}
        </Button>
      </div>
      {submitted && Object.keys(submitErrors).length === 0 && !sendFailed ? (
        <p className="mt-4 text-sm text-emerald-300">{copy.success}</p>
      ) : null}
      {sendFailed ? (
        <p className="mt-4 text-sm text-rose-300">{copy.sendError}</p>
      ) : null}
    </form>
  );
}
