import { Check } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Management owned, no PE behind us",
    body: "Decisions are made by the people doing the work. No quarterly cost-out memos. Service quality is the whole product.",
  },
  {
    title: "U.S. funds, U.S. team, U.S. hours",
    body: "Manhattan, Iselin, and Los Angeles. No follow-the-sun delegation. Your accountant picks up the phone in your time zone.",
  },
  {
    title: "Built for illiquid strategies",
    body: "Capital accounts, drawdown waterfalls, IRR and MOIC, high-water marks, and complex fee structures. Not retrofitted from a hedge platform.",
  },
  {
    title: "Single point of contact",
    body: "One team owns onboarding, accounting, investor services, and compliance. Audit-ready by design, not by escalation.",
  },
];

export default function Differentiators() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {REASONS.map((r, i) => (
        <Reveal key={r.title} delay={i * 0.06}>
          <div className="flex gap-5">
            <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
              <Check className="h-5 w-5" weight="bold" />
            </span>
            <div>
              <h3 className="font-serif text-2xl leading-tight text-brand-900">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-900/70">{r.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
