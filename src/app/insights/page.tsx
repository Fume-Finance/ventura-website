import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Insights | Ventura Fund Services",
  description: "Notes from Ventura's partners on fund administration, operating cadence, and the U.S. illiquid fund market.",
};

const POSTS = [
  {
    slug: "five-day-nav-strike",
    category: "Operations",
    title: "Why we strike NAV in five business days, not fifteen",
    excerpt:
      "Quarterly close should not be a fire drill. Here is the operating cadence we use to keep the cycle tight without sacrificing accuracy.",
    date: "March 2026",
    read: "5 min read",
  },
  {
    slug: "delaware-vs-cayman-feeder",
    category: "Structuring",
    title: "When a Delaware LP needs a Cayman feeder, and when it doesn't",
    excerpt:
      "U.S. GPs raising from non-U.S. and tax-exempt LPs face a familiar question. Here is the framework our partners use to decide.",
    date: "February 2026",
    read: "7 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/60 via-white to-white" />
        <div className="mx-auto max-w-(--max-width-container) px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
          <SectionLabel>Insights</SectionLabel>
          <h1 className="font-serif text-5xl leading-[1.05] text-brand-900 md:text-7xl">
            Operating notes from the partners.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-900/75">
            Short pieces on fund administration cadence, structure decisions, and the U.S. illiquid market. Written by people doing the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-(--max-width-container) px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/insights/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover md:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {p.category}
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-brand-900 md:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 flex-1 text-brand-900/70">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-brand-900/55">
                    {p.date} . {p.read}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-brand-700">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" weight="bold" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to talk shop?"
        body="If a piece raised a question worth a conversation, we'd love to hear about it."
      />
    </>
  );
}
