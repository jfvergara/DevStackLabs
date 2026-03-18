"use client";

import { useMemo, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/data/dictionary";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

type ContactFormProps = {
  copy: Dictionary["contact"]["form"];
};

export function ContactForm({ copy }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = copy.errors.name;
    if (!values.email.trim()) {
      next.email = copy.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = copy.errors.emailInvalid;
    }
    if (!values.message.trim()) next.message = copy.errors.messageRequired;
    return next;
  }, [copy.errors, values]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setSubmitted(false);
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;
    setValues(initialState);
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
            type="text"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder={copy.placeholders.name}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none"
          />
          {submitted && errors.name ? (
            <p className="mt-1.5 text-sm text-rose-300">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-300">
            {copy.email}
          </label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder={copy.placeholders.email}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none"
          />
          {submitted && errors.email ? (
            <p className="mt-1.5 text-sm text-rose-300">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-300">
            {copy.message}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder={copy.placeholders.message}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none"
          />
          {submitted && errors.message ? (
            <p className="mt-1.5 text-sm text-rose-300">{errors.message}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" size="lg">
          {copy.submit}
        </Button>
      </div>
      {submitted && Object.keys(errors).length === 0 ? (
        <p className="mt-4 text-sm text-emerald-300">{copy.success}</p>
      ) : null}
    </form>
  );
}
