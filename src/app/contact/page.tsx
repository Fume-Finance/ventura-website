import type { Metadata } from "next";
import { MapPin, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ventura Fund Services",
  description: "Talk to Ventura. Three U.S. offices. One team. Direct lines and one email.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
          <div className="absolute -left-20 top-20 h-[420px] w-[420px] rounded-full bg-brand-300/30 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-(--max-width-container) px-6 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-serif text-5xl leading-[1.05] text-brand-900 md:text-7xl">
            Talk to us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-900/75">
            Tell us about your fund. We&apos;ll come back with a 20-minute call to scope the work and a tailored proposal within a week.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-(--max-width-container) px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-card md:p-10">
              <h2 className="font-serif text-2xl text-brand-900">Send us a note</h2>
              <p className="mt-2 text-sm text-brand-900/65">
                We reply within one business day. For anything urgent, call directly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-900 p-8 text-white md:p-10">
              <h2 className="font-serif text-2xl">Direct lines</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-accent-300" weight="bold" />
                  <span>
                    {SITE.phones.map((p, i) => (
                      <span key={p}>
                        <a href={`tel:${p.replace(/[^0-9+]/g, "")}`} className="hover:text-accent-200">
                          {p}
                        </a>
                        {i < SITE.phones.length - 1 && <span className="mx-2 text-white/30">·</span>}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Envelope className="mt-0.5 h-4 w-4 text-accent-300" weight="bold" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-accent-200">{SITE.email}</a>
                </li>
              </ul>
            </div>

            <div className="mt-6 grid gap-4">
              {SITE.offices.map((o) => (
                <div key={o.city} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                    <MapPin className="h-3.5 w-3.5" weight="fill" />
                    {o.city}
                  </p>
                  <p className="mt-3 font-serif text-lg text-brand-900">{o.lines[0]}</p>
                  <p className="text-sm text-brand-900/65">{o.lines.slice(1).join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
