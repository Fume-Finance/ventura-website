"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Ventura inquiry from ${data.get("name") || "website"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\nCompany: ${data.get("company") || ""}\nEmail: ${data.get("email") || ""}\n\nMessage:\n${data.get("message") || ""}`,
    );
    window.location.href = `mailto:info@venturafs.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-start gap-4 rounded-xl bg-brand-50 p-6"
        >
          <CheckCircle className="h-8 w-8 text-accent-500" weight="fill" />
          <p className="font-serif text-2xl text-brand-900">Thanks. Your message is on its way.</p>
          <p className="text-sm text-brand-900/70">
            We&apos;ll be in touch within one business day. If your mail client did not open, write us directly at{" "}
            <a href="mailto:info@venturafs.com" className="text-brand-700 underline">info@venturafs.com</a>.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Your name" required />
            <Field name="company" label="Company" required />
          </div>
          <Field name="email" label="Email" type="email" required />
          <div>
            <label className="block text-xs font-medium uppercase tracking-[0.14em] text-brand-700/70">
              Tell us about your fund
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Strategy, structure, target launch, anything that helps us prepare."
              className="mt-2 w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400"
            />
          </div>
          <button
            type="submit"
            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-medium text-white transition hover:bg-brand-800 sm:w-auto"
          >
            Send message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-[0.14em] text-brand-700/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-brand-900 outline-none transition focus:border-brand-400"
      />
    </div>
  );
}
