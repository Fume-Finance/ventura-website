import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/utils";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-(--max-width-container) px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-900/70">
              {SITE.tagline} A U.S. based, management-owned fund administrator for private equity, venture, real estate, private credit, and infrastructure funds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
              >
                Talk to us
              </Link>
              <Link
                href="/fund-wizard"
                className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-400"
              >
                Fund Wizard
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">Sitemap</p>
            <ul className="mt-5 space-y-3 text-sm text-brand-900/80">
              <li><Link href="/services" className="hover:text-brand-700">Services</Link></li>
              <li><Link href="/about" className="hover:text-brand-700">About</Link></li>
              <li><Link href="/insights" className="hover:text-brand-700">Insights</Link></li>
              <li><Link href="/fund-wizard" className="hover:text-brand-700">Fund Wizard</Link></li>
              <li><Link href="/contact" className="hover:text-brand-700">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">Offices</p>
            <ul className="mt-5 space-y-4 text-sm text-brand-900/80">
              {SITE.offices.map((o) => (
                <li key={o.city}>
                  <p className="font-semibold text-brand-900">{o.city}</p>
                  <p className="text-brand-900/65">{o.lines.join(", ")}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-sm text-brand-900/80">
              <p>{SITE.phones.join(" · ")}</p>
              <p>
                <a href={`mailto:${SITE.email}`} className="text-brand-700 hover:text-brand-900">{SITE.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-brand-100 pt-8 text-xs text-brand-900/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Ventura Fund Services, LLC. All rights reserved.</p>
          <a
            href="https://www.fume.finance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-900/55 hover:text-brand-700"
          >
            Site by Fume
            <ArrowUpRight className="h-3 w-3" weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}
