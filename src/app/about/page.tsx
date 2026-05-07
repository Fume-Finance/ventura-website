import type { Metadata } from "next";
import Image from "next/image";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About | Ventura Fund Services",
  description: "Ventura is a U.S. based, management-owned fund administrator. Our partners spent careers at J.P. Morgan, Goldman Sachs, Deloitte, PwC, and global fund admin firms.",
};

const TEAM = [
  {
    name: "Matt Lowe, CPA",
    role: "Co-Founder, Managing Partner",
    photo: "/images/source/team/matt-lowe.jpg",
    bio: "Matt is a fund administration industry leader. In 2016 he launched the U.S. operations of a global fund administration firm and spent the following seven years as the leader and key catalyst of its growth. His career spans 20+ years in financial services, with senior accounting and finance roles at J.P. Morgan and Goldman Sachs. He started at Deloitte and has been known throughout for meticulous, process-oriented service to fund managers with illiquid assets.",
  },
  {
    name: "Alan Tsarovsky, Esq.",
    role: "Co-Founder, Managing Partner",
    photo: "/images/source/team/alan-tsarovsky.jpg",
    bio: "Alan is a tax attorney with 15 years of regulatory and compliance experience. He has advised private equity backed portfolio companies and fund managers on a wide range of corporate tax matters. He graduated with a Juris Doctor from Loyola Law School and a Bachelor's degree from UCLA. Alan is deeply passionate about client service, dedicating his expertise to guiding Ventura toward unparalleled excellence and integrity.",
  },
  {
    name: "Greg Shneynberg",
    role: "Managing Director",
    photo: "/images/source/team/greg-shneynberg.jpg",
    bio: "Greg is a seasoned professional with over 17 years of experience in fund administration. His background includes a deep understanding of private equity, real estate, and infrastructure funds, particularly in accounting, financial reporting, and investor services. He previously served as Senior Manager of Accounting and acting COO for a respected fund administration firm. Greg holds a BBA from Baruch College with a focus in Accounting.",
  },
  {
    name: "Manoj Kamdar",
    role: "Managing Director",
    photo: "/images/source/team/manoj-kamdar.png",
    bio: "Manoj is an experienced professional in private equity and real estate fund administration with over 20 years of experience. He established and oversaw the finance and IT teams for a European real estate and private equity fund, and previously served in senior level roles at an internationally recognized fund administration firm. His focus is operational efficiency in accounting, financial reporting, and investor relations. Manoj earned his Bachelor's in Accounting from Baruch College.",
  },
  {
    name: "Priya Patel",
    role: "Manager",
    photo: "/images/source/team/priya-patel.jpg",
    bio: "Priya brings over 10 years of experience in fund administration. Prior to Ventura she worked as a supervisor providing full accounting and financial reporting services to private equity and SBIC funds. She earned her Bachelor's in Accounting from Stockton University.",
  },
  {
    name: "Caroline Cruz",
    role: "Supervisor",
    photo: "/images/source/team/caroline-cruz.jpg",
    bio: "Caroline joined Ventura Fund Services in April 2024 as a Senior Fund Accountant. She began her career in 2021 as an accountant with a global fund administration firm. Most recently she was an accountant at TZP Group, working across financial reporting, tax, and treasury for both the management company and the funds. Caroline holds a BS in Business Administration from Fordham University, Gabelli School of Business.",
  },
  {
    name: "Laila Etzion, CPA",
    role: "Strategic Advisor",
    photo: null,
    bio: "Laila is a Strategic Advisor to Ventura. She was previously a Senior Manager at a global fund administration firm, providing fund administration services and advising clients on technical issues as the key relationship manager for private equity and real estate fund clients. She started her career at PwC as an auditor serving real estate funds and publicly traded REITs. Laila graduated with a BBA in Accounting and Finance from the Goizueta Business School at Emory University.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
          <div className="absolute -right-32 top-10 h-[440px] w-[440px] rounded-full bg-accent-300/30 blur-[120px]" />
          <div className="absolute -left-20 top-40 h-[360px] w-[360px] rounded-full bg-brand-300/30 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-(--max-width-container) px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>About</SectionLabel>
              <h1 className="font-serif text-5xl leading-[1.05] text-brand-900 md:text-7xl">
                Senior people, doing the work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-brand-900/75">
                Ventura is a U.S. based, management-owned and operated fund administrator. Our partners spent careers at J.P. Morgan, Goldman Sachs, Deloitte, PwC, and global fund administration firms before launching Ventura to do this work the way it should be done.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-card">
                <p className="font-serif text-3xl text-brand-900">
                  &ldquo;Service quality is the whole product.&rdquo;
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-brand-500">
                  Management owned, management operated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="mx-auto max-w-(--max-width-container) px-6 pb-16 md:px-10 md:pb-20">
        <div className="grid gap-6 rounded-2xl bg-white p-8 shadow-card sm:grid-cols-2 md:grid-cols-4 md:p-10">
          {[
            { v: "20+", l: "Years per managing partner" },
            { v: "3", l: "U.S. offices coast to coast" },
            { v: "5", l: "Strategies administered" },
            { v: "100%", l: "Management owned" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-4xl text-brand-900">{s.v}</p>
              <p className="mt-2 text-sm text-brand-900/65">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-(--max-width-container) px-6 pb-24 md:px-10 md:pb-32">
        <div className="mb-12 max-w-3xl">
          <SectionLabel>The team</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-brand-900 md:text-5xl">
            Senior at every level.
          </h2>
          <p className="mt-5 text-lg text-brand-900/70">
            Our partners are Big Four trained, bulge-bracket experienced, and CPA or attorney qualified. Every client touch is by someone with at least a decade in this work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04}>
              <article className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl bg-brand-50">
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <Initials name={p.name} />
                  )}
                </div>
                <h3 className="font-serif text-xl text-brand-900">{p.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-accent-600">
                  {p.role}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-900/70">{p.bio}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-brand-500">
                  <LinkedinLogo className="h-3.5 w-3.5" weight="fill" />
                  Connect on LinkedIn
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Built by operators, for operators."
        body="If you've ever shipped a quarterly close two days late, you know why we built Ventura. Talk to us about your fund."
      />
    </>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .replace(/,.+$/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((s) => s[0])
    .join("");
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200">
      <span className="font-serif text-5xl text-brand-700">{initials}</span>
    </div>
  );
}
