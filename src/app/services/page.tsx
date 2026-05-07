import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import HowItWorks from "@/components/HowItWorks";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services | Ventura Fund Services",
  description: "Initial setup, investor services, accounting and reporting, compliance and treasury. The full admin stack for illiquid funds.",
};

const SERVICES = [
  {
    id: "setup",
    label: "01",
    title: "Initial Setup",
    body: "We onboard the fund, the GP, and every investor in lockstep with your launch timeline. Documents reviewed, structure mapped, and reporting templates configured before day one.",
    items: [
      "LPA and subscription document review",
      "Comprehensive entity and investor onboarding",
      "Customized reporting templates and processes",
      "Full AML/KYC process management",
      "FATCA and CRS due diligence",
    ],
  },
  {
    id: "investor",
    label: "02",
    title: "Investor Services",
    body: "A complete transfer agency function. We administer commitments, fund the calls, distribute the proceeds, and run the investor portal so you can focus on capital deployment and LP relationships.",
    items: [
      "Comprehensive investor administration",
      "Capital calls and distributions",
      "Investor portal management",
      "Side letter tracking and compliance",
      "Single point of contact for LP queries",
    ],
  },
  {
    id: "accounting",
    label: "03",
    title: "Accounting & Reporting",
    body: "Quarterly bookkeeping, financial reporting, and audit-ready statements. Performance metrics in formats your LPs expect, calculated by people who understand the fee waterfall in your LPA.",
    items: [
      "Ongoing bookkeeping",
      "Quarterly and annual financial reporting",
      "Annual audited financial statements",
      "External auditor liaison",
      "Waterfall calculations, IRR, MOIC, and others",
      "Treasury services",
    ],
  },
  {
    id: "compliance",
    label: "04",
    title: "Compliance",
    body: "We coordinate with your tax advisors and stay on top of investor-level monitoring so the fund's compliance posture never lapses. Quiet, exact, ongoing.",
    items: [
      "External tax advisor liaison",
      "Ongoing AML/KYC monitoring",
      "Ongoing FATCA/CRS monitoring",
      "SOC controls maintained year-round",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
          <div className="absolute -left-32 top-10 h-[440px] w-[440px] rounded-full bg-brand-300/30 blur-[120px]" />
          <div className="absolute -right-20 top-40 h-[360px] w-[360px] rounded-full bg-accent-300/30 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-(--max-width-container) px-6 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-serif text-5xl leading-[1.05] text-brand-900 md:text-7xl">
            One team. <span className="italic text-brand-500">Every</span> piece of the stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-900/75">
            Initial setup, investor services, accounting and reporting, compliance. Each function tightly integrated, each handled by senior people who know your fund as well as you do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-(--max-width-container) px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <article id={s.id} className="grid gap-10 border-t border-brand-100 pt-16 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="font-serif text-5xl text-brand-200">{s.label}</p>
                  <h2 className="mt-6 font-serif text-4xl leading-tight text-brand-900">{s.title}</h2>
                  <p className="mt-5 leading-relaxed text-brand-900/70">{s.body}</p>
                </div>
                <div className="lg:col-span-7">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                          <Check className="h-3 w-3" weight="bold" />
                        </span>
                        <span className="text-sm text-brand-900/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-(--max-width-container) px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
              A predictable cadence, scoping call to audit.
            </h2>
          </div>
          <HowItWorks />
        </div>
      </section>

      <CtaBand
        title="Ready to scope your fund?"
        body="Tell us about the strategy, structure, and timing. We'll come back with a tight proposal and a launch plan."
      />
    </>
  );
}
