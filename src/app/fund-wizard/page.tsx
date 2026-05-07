import type { Metadata } from "next";
import FundWizard from "@/components/FundWizard";

export const metadata: Metadata = {
  title: "Fund Wizard | Ventura Fund Services",
  description:
    "Five questions, one tailored fund-structure recommendation with indicative timeline and pricing.",
};

export default function FundWizardPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
        <div className="absolute -left-32 top-10 h-[440px] w-[440px] rounded-full bg-brand-300/30 blur-[120px]" />
        <div className="absolute -right-20 top-40 h-[360px] w-[360px] rounded-full bg-accent-300/30 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-(--max-width-container) px-6 pb-32 pt-16 md:px-10 md:pt-24">
        <FundWizard />
      </div>
    </section>
  );
}
