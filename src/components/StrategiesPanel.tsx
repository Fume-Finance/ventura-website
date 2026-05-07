import {
  Buildings,
  Rocket,
  House,
  Bank,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const STRATEGIES = [
  {
    icon: Buildings,
    title: "Private Equity",
    body: "Buyout, growth, special situations. Capital accounts, drawdown waterfalls, performance fees with high-water mark.",
  },
  {
    icon: Rocket,
    title: "Venture Capital",
    body: "Early to late stage. SAFE and convertible note tracking. Multi-currency portfolio support.",
  },
  {
    icon: House,
    title: "Real Estate",
    body: "Open and closed-ended. Property-level reporting, valuation roll-ups, distribution waterfalls.",
  },
  {
    icon: Bank,
    title: "Private Credit",
    body: "Direct lending, mezzanine, distressed. Coupon accruals, PIK interest, complex fee structures.",
  },
  {
    icon: Lightning,
    title: "Infrastructure",
    body: "Energy, transport, digital. Long-duration vehicles. Inflation-indexed reporting, co-invest sleeves.",
  },
];

export default function StrategiesPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {STRATEGIES.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="group relative flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-colors hover:border-brand-300">
              <Icon className="h-7 w-7 text-accent-500" weight="duotone" />
              <h3 className="mt-5 font-serif text-xl text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{s.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
