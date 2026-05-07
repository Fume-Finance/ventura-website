import Link from "next/link";
import {
  ChartLineUp,
  Users,
  Receipt,
  ShieldCheck,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: ChartLineUp,
    title: "Accounting & Reporting",
    body: "Ongoing bookkeeping, quarterly and annual reporting, audited financials, and waterfall, IRR, and MOIC calculations.",
    href: "/services#accounting",
  },
  {
    icon: Users,
    title: "Investor Services",
    body: "Capital calls, distributions, investor portal, and full transfer agency. One team, one point of contact.",
    href: "/services#investor",
  },
  {
    icon: Receipt,
    title: "Initial Setup",
    body: "LPA and subscription document review, AML/KYC onboarding, FATCA and CRS due diligence, custom reporting templates.",
    href: "/services#setup",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Treasury",
    body: "Ongoing AML/KYC and FATCA/CRS monitoring, treasury services, audit liaison, tax advisor coordination.",
    href: "/services#compliance",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {PILLARS.map((p, i) => {
        const Icon = p.icon;
        return (
          <Reveal key={p.title} delay={i * 0.06}>
            <Link
              href={p.href}
              className="group relative flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Icon className="h-5 w-5" weight="duotone" />
              </div>
              <h3 className="font-serif text-2xl text-brand-900">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-900/70">{p.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" weight="bold" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
