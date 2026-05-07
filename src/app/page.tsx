import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import StrategiesPanel from "@/components/StrategiesPanel";
import Differentiators from "@/components/Differentiators";
import WizardBand from "@/components/WizardBand";
import CtaBand from "@/components/CtaBand";
import SectionLabel from "@/components/SectionLabel";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="mx-auto max-w-(--max-width-container) px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
            A holistic admin stack for illiquid funds.
          </h2>
          <p className="mt-5 text-lg text-brand-900/70">
            Initial setup, accounting, investor services, and compliance. One team. One system of record. Built for the way American GPs raise, deploy, and report.
          </p>
        </div>
        <ServicesGrid />
      </section>

      {/* Strategies */}
      <section className="mx-auto max-w-(--max-width-container) px-6 pb-24 md:px-10 md:pb-32">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Who we serve</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
            Five strategies, one operating model.
          </h2>
        </div>
        <StrategiesPanel />
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-(--max-width-container) px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
              From scoping call to first audit, in lockstep.
            </h2>
            <p className="mt-5 text-lg text-brand-900/70">
              A predictable cadence built on tight processes. We partner with you the way an in-house team would, without the overhead.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-(--max-width-container) px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>The Ventura advantage</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
            What makes us different.
          </h2>
        </div>
        <Differentiators />
      </section>

      <WizardBand />

      <div className="h-24 md:h-32" />
      <CtaBand />
    </>
  );
}
