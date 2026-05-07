import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function CtaBand({
  title = "Ready to launch? Talk to us.",
  body = "A 20-minute call answers most questions. We'll show you how Ventura administers funds with the speed and precision GPs and LPs expect.",
  primary = { label: "Talk to us", href: "/contact" },
  secondary = { label: "Try the Fund Wizard", href: "/fund-wizard" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div aria-hidden className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-500/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-(--max-width-container) px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
          <p className="mt-6 text-lg text-white/75">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={primary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 font-medium text-brand-900 transition-all hover:bg-accent-300"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-medium text-white transition-colors hover:bg-white/5"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
