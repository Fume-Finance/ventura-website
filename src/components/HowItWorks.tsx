"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Scoping call",
    body: "A 20-minute conversation. Strategy, structure, fund size, timing. We map the work.",
  },
  {
    n: "02",
    title: "Onboarding",
    body: "LPA review, investor onboarding, AML/KYC, FATCA/CRS, custom report templates configured.",
  },
  {
    n: "03",
    title: "Operate",
    body: "Quarterly cycle: accounting, NAV, capital calls, distributions, investor reporting, treasury.",
  },
  {
    n: "04",
    title: "Audit-ready",
    body: "Annual audited financials with full liaison support. Tight close, predictable timeline.",
  },
];

export default function HowItWorks() {
  return (
    <div className="relative">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 top-[42px] hidden h-px origin-left bg-gradient-to-r from-brand-200 via-accent-300 to-brand-200 lg:block"
      />
      <ol className="grid gap-8 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <li className="relative">
              <div className="relative z-10 flex h-[88px] flex-col justify-end">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-white font-serif text-lg text-brand-700">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
