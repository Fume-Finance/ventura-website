import Link from "next/link";
import { Sparkle, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function WizardBand() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-(--max-width-container) px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-accent-50 px-8 py-14 md:px-16 md:py-20">
          <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-200/50 blur-3xl" />
          <div aria-hidden className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-medium text-brand-700 backdrop-blur">
                <Sparkle className="h-3 w-3 text-accent-500" weight="fill" />
                Fund Wizard . 60 seconds
              </p>
              <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
                Find the right structure in under a minute.
              </h2>
              <p className="mt-5 max-w-xl text-brand-900/70 md:text-lg">
                Five questions about your investors, strategy, fund size, and geography. We return a tailored structure recommendation, indicative timeline, and an indicative Ventura proposal. Instantly.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Link
                href="/fund-wizard"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-4 text-base font-medium text-white shadow-card transition-all hover:bg-brand-800 hover:shadow-card-hover"
              >
                Try the Fund Wizard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
