import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/SectionLabel";
import CtaBand from "@/components/CtaBand";

type Post = {
  slug: string;
  category: string;
  title: string;
  date: string;
  read: string;
  author: string;
  body: { kind: "h2" | "p" | "quote"; text: string }[];
};

const POSTS: Post[] = [
  {
    slug: "five-day-nav-strike",
    category: "Operations",
    title: "Why we strike NAV in five business days, not fifteen",
    date: "March 2026",
    read: "5 min read",
    author: "Matt Lowe, CPA",
    body: [
      {
        kind: "p",
        text: "Quarterly close, in most fund admin shops, is a fire drill. The first week is spent chasing custody breaks. The second is spent reconciling investor wires. By the time the partners get a draft NAV, it is already two weeks past quarter-end and the LPs are emailing.",
      },
      {
        kind: "p",
        text: "We run it differently at Ventura. The cadence we hold is five business days from quarter-end to a draft NAV the GP can review, and ten days to a finalized investor pack. It is not magic. It is a few tightly held habits.",
      },
      { kind: "h2", text: "Reconcile early, not late" },
      {
        kind: "p",
        text: "Custody breaks do not show up at quarter-end. They show up the day a trade is allocated wrong, a wire posts to the manager account by mistake, or a coupon hits a different ledger than the one expecting it. We sweep custody monthly, not quarterly. By the time the close starts, the breaks that exist are real, narrow, and identified.",
      },
      { kind: "h2", text: "Investor side ready before the books close" },
      {
        kind: "p",
        text: "Capital calls and distributions are not a quarter-end activity. They live on their own cadence. By the time we hit close, every funded call is already booked, every distribution is allocated, and every side letter rebate is computed. The investor side does not block the books.",
      },
      { kind: "h2", text: "One template, applied everywhere" },
      {
        kind: "p",
        text: "Every fund we run uses the same chart of accounts, the same allocation logic, and the same NAV template. Customizations live at the reporting layer, not the calculation layer. This is what allows a senior accountant to step into any fund on the platform and get useful work done in an hour.",
      },
      {
        kind: "quote",
        text: "Five days is a function of the previous eighty-five, not the next five.",
      },
      { kind: "h2", text: "Why this matters to GPs" },
      {
        kind: "p",
        text: "A faster close is not a vanity metric. It compresses the gap between the strategy decision and the data that informs the next one. It also gives the IR team time to write a real letter, not a placeholder. And when the audit lands in March, we are not building the book backwards.",
      },
    ],
  },
  {
    slug: "delaware-vs-cayman-feeder",
    category: "Structuring",
    title: "When a Delaware LP needs a Cayman feeder, and when it doesn't",
    date: "February 2026",
    read: "7 min read",
    author: "Alan Tsarovsky, Esq.",
    body: [
      {
        kind: "p",
        text: "U.S. GPs raising from non-U.S. or U.S. tax-exempt LPs run into a familiar question: do we need a Cayman feeder, or can the LPs come into the Delaware partnership directly? The answer turns on tax sensitivities, not preference.",
      },
      { kind: "h2", text: "The UBTI question" },
      {
        kind: "p",
        text: "U.S. tax-exempt LPs (foundations, endowments, pension plans) care deeply about Unrelated Business Taxable Income. A Delaware LP with leveraged investments throws off UBTI to its tax-exempt LPs, who then owe tax. A Cayman feeder, properly structured, blocks the UBTI flow. For tax-exempts considering a leveraged strategy, the feeder is not optional.",
      },
      { kind: "h2", text: "The ECI question for non-U.S. LPs" },
      {
        kind: "p",
        text: "Non-U.S. LPs are similarly sensitive to Effectively Connected Income. A direct investment in a Delaware LP that earns ECI exposes them to U.S. tax filing obligations and withholding. The Cayman feeder, again properly structured, generally avoids that exposure.",
      },
      { kind: "h2", text: "When you can skip the feeder" },
      {
        kind: "p",
        text: "If your strategy is venture or growth equity with no leverage at the fund level, and your LP base is all U.S. taxable, the feeder is overhead you don't need. The same is true for some real estate strategies that elect to flow through directly. The feeder is a tool, not a default.",
      },
      {
        kind: "quote",
        text: "Structure follows the LP base, the strategy, and the leverage profile. Pick two and the third is decided.",
      },
      { kind: "h2", text: "Operationally, what changes?" },
      {
        kind: "p",
        text: "A feeder is not just a tax wrapper. It comes with CIMA registration, a separate set of accounts, parallel investor onboarding, and synchronized capital activity. Done well, it is invisible to the LP. Done poorly, it doubles the operating burden. We administer master and feeder on a single platform with synchronized NAV cycles, which is the only way to keep the math honest.",
      },
      {
        kind: "p",
        text: "If you are scoping a fund and unsure which way to go, this is exactly the kind of question worth a 20-minute call.",
      },
    ],
  },
];

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Insight | Ventura" };
  return {
    title: `${post.title} | Ventura Insights`,
    description: post.body.find((b) => b.kind === "p")?.text.slice(0, 180),
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-12 md:pt-20">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-brand-500 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" weight="bold" />
          All insights
        </Link>

        <div className="mt-8">
          <SectionLabel>{post.category}</SectionLabel>
          <h1 className="font-serif text-4xl leading-[1.1] text-brand-900 md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-brand-900/55">
            {post.author} . {post.date} . {post.read}
          </p>
        </div>

        <div className="mt-12 space-y-7 text-lg leading-relaxed text-brand-900/85">
          {post.body.map((block, i) => {
            if (block.kind === "h2")
              return (
                <h2 key={i} className="mt-12 font-serif text-2xl text-brand-900 md:text-3xl">
                  {block.text}
                </h2>
              );
            if (block.kind === "quote")
              return (
                <blockquote
                  key={i}
                  className="my-10 border-l-2 border-accent-400 pl-6 font-serif text-2xl italic text-brand-900"
                >
                  {block.text}
                </blockquote>
              );
            return (
              <p key={i} className="text-[17px] leading-[1.75] text-brand-900/85">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-20 rounded-2xl border border-brand-100 bg-white p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            About the author
          </p>
          <p className="mt-3 font-serif text-2xl text-brand-900">{post.author}</p>
          <p className="mt-2 text-sm text-brand-900/65">
            Co-Founder and Managing Partner at Ventura Fund Services.
          </p>
        </div>
      </article>

      {others.length > 0 && (
        <section className="mx-auto max-w-(--max-width-container) px-6 pb-24 md:px-10 md:pb-32">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            Keep reading
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {p.category}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-brand-900">
                  {p.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" weight="bold" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
