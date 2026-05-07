"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ArrowCounterClockwise, Sparkle } from "@phosphor-icons/react";

const COMPANY_NAME = "Ventura";
const CONTACT_HREF = "/contact";

type Stage = "exploring" | "first_fund" | "follow_on" | "migrating";
type Investors = "professional" | "family_office" | "retail" | "institutional";
type Strategy = "liquid" | "hedge" | "pe_vc" | "real_assets" | "digital" | "other";
type Aum = "under_10" | "10_50" | "50_250" | "over_250";
type Location = "eu" | "uk" | "us" | "mena" | "other";

type Answers = {
  stage?: Stage;
  investors?: Investors[];
  strategy?: Strategy;
  aum?: Aum;
  location?: Location[];
};

type Structure = {
  id: string;
  name: string;
  shortName: string;
  fitsInvestors: Investors[];
  fitsStrategy: Strategy[];
  fitsAum: Aum[];
  fitsLocation: Location[];
  setupWeeks: [number, number];
  minCommitment: string;
  licencePath: string;
  euPassport: string;
  nav: string;
  whyBullets: string[];
  proposalText: string;
  startingFee: string;
};

// Ventura is a U.S. focused administrator. Structures reflect what U.S. PE,
// VC, real estate, private credit, and infrastructure GPs actually launch:
// Delaware partnerships and LLCs, Cayman feeders, and master/feeder pairs.
const STRUCTURES: Structure[] = [
  {
    id: "delaware_lp",
    name: "Delaware Limited Partnership",
    shortName: "Delaware LP",
    fitsInvestors: ["professional", "institutional", "family_office"],
    fitsStrategy: ["pe_vc", "real_assets"],
    fitsAum: ["under_10", "10_50", "50_250", "over_250"],
    fitsLocation: ["us"],
    setupWeeks: [4, 8],
    minCommitment: "USD 250k typical",
    licencePath: "Reg D / 506(b) or 506(c)",
    euPassport: "Not applicable (U.S. domestic)",
    nav: "Quarterly",
    whyBullets: [
      "The default structure for U.S. private equity, venture, and real estate GPs",
      "Pass-through tax efficiency, well-understood by accredited and qualified purchasers",
      "Capital calls, drawdown waterfalls, and high-water mark performance fees handled natively",
    ],
    proposalText: `${COMPANY_NAME} runs your Delaware LP end-to-end: LPA review, full investor onboarding, capital account administration, drawdown waterfalls, performance fee allocations with high-water mark, audited financial statements, and FATCA/CRS coordination.`,
    startingFee: "From USD 60k/yr admin + setup",
  },
  {
    id: "delaware_llc",
    name: "Delaware Limited Liability Company",
    shortName: "Delaware LLC",
    fitsInvestors: ["professional", "family_office"],
    fitsStrategy: ["real_assets", "other"],
    fitsAum: ["under_10", "10_50", "50_250"],
    fitsLocation: ["us"],
    setupWeeks: [3, 6],
    minCommitment: "USD 100k typical",
    licencePath: "Reg D private placement",
    euPassport: "Not applicable (U.S. domestic)",
    nav: "Quarterly or monthly",
    whyBullets: [
      "Flexible governance for real estate ventures, club deals, and family-office vehicles",
      "Series LLC option for multi-deal sponsors who need to silo liabilities",
      "Lower setup overhead than a fully formed LP for smaller or single-deal funds",
    ],
    proposalText: `${COMPANY_NAME} administers Delaware LLCs across single-asset real estate deals, joint ventures, and series structures. Capital tracking, member reporting, distribution waterfalls, and audit support included.`,
    startingFee: "From USD 35k/yr admin + setup",
  },
  {
    id: "cayman_feeder",
    name: "Cayman Exempted Limited Partnership Feeder",
    shortName: "Cayman Feeder",
    fitsInvestors: ["professional", "institutional", "family_office"],
    fitsStrategy: ["pe_vc", "hedge", "real_assets", "digital"],
    fitsAum: ["10_50", "50_250", "over_250"],
    fitsLocation: ["eu", "uk", "mena", "other"],
    setupWeeks: [6, 10],
    minCommitment: "USD 1M typical",
    licencePath: "CIMA private fund registration",
    euPassport: "Reverse-solicitation / private placement",
    nav: "Quarterly typical",
    whyBullets: [
      "The standard wrapper for non-U.S. and U.S. tax-exempt LPs investing alongside U.S. GPs",
      "Pairs with a Delaware master partnership for a clean master-feeder model",
      "Handles UBTI and ECI sensitivities for institutional capital",
    ],
    proposalText: `${COMPANY_NAME} administers the Cayman feeder in lockstep with the U.S. master: harmonized capital accounts, allocations, and reporting. CIMA filings coordinated end-to-end.`,
    startingFee: "From USD 75k/yr admin + setup",
  },
  {
    id: "credit_fund",
    name: "Delaware Private Credit Fund",
    shortName: "Credit Fund",
    fitsInvestors: ["professional", "institutional"],
    fitsStrategy: ["pe_vc", "real_assets", "other"],
    fitsAum: ["50_250", "over_250"],
    fitsLocation: ["us"],
    setupWeeks: [6, 10],
    minCommitment: "USD 500k typical",
    licencePath: "Reg D / 506(c)",
    euPassport: "Not applicable",
    nav: "Quarterly with monthly accruals",
    whyBullets: [
      "Coupon accruals, PIK interest, and OID handled inside the platform, not on side spreadsheets",
      "Borrower base reporting and concentration limits monitored each cycle",
      "Mid-quarter NAV available where LPAs require it",
    ],
    proposalText: `${COMPANY_NAME} administers private credit funds with the operational rigor lenders need: loan tape reconciliation, borrower-level reporting, NAV with mid-cycle accruals, and audit liaison.`,
    startingFee: "From USD 90k/yr admin + setup",
  },
  {
    id: "hedge_master_feeder",
    name: "Master-Feeder Hedge Vehicle",
    shortName: "Hedge Master-Feeder",
    fitsInvestors: ["professional", "institutional"],
    fitsStrategy: ["liquid", "hedge", "digital"],
    fitsAum: ["50_250", "over_250"],
    fitsLocation: ["us", "eu", "uk", "mena", "other"],
    setupWeeks: [8, 12],
    minCommitment: "USD 1M typical",
    licencePath: "Reg D + CIMA registered",
    euPassport: "Reverse-solicitation",
    nav: "Monthly typical",
    whyBullets: [
      "Onshore Delaware feeder for U.S. taxable LPs, Cayman feeder for non-U.S. and tax-exempt",
      "Performance allocation with high-water mark and equalization",
      "Monthly NAV strike, side pockets supported when needed",
    ],
    proposalText: `${COMPANY_NAME} administers the full master-feeder stack with synchronized monthly NAV, performance allocation, and consolidated investor reporting.`,
    startingFee: "From USD 110k/yr admin + setup",
  },
];

const steps = [
  {
    key: "stage" as const,
    multi: false,
    title: "Where are you in your fund journey?",
    sub: "We tailor the recommendation to your stage.",
    options: [
      { value: "exploring", label: "Just exploring", desc: "Validating the structure and economics" },
      { value: "first_fund", label: "Raising my first fund", desc: "Launching within 6 months" },
      { value: "follow_on", label: "Launching a follow-on fund", desc: "Already operate a vehicle" },
      { value: "migrating", label: "Migrating an existing fund", desc: "Moving from another administrator" },
    ],
  },
  {
    key: "investors" as const,
    multi: true,
    title: "Who are your investors?",
    sub: "This drives the structure and the wrapper. Pick all that apply.",
    options: [
      { value: "professional", label: "Accredited / qualified purchasers", desc: "U.S. professionals, qualifying investors" },
      { value: "family_office", label: "Single family office", desc: "One family group, no external capital" },
      { value: "retail", label: "Retail investors", desc: "Public, mass market" },
      { value: "institutional", label: "Institutional", desc: "Pensions, endowments, FoF, insurers" },
    ],
  },
  {
    key: "strategy" as const,
    multi: false,
    title: "What does the fund invest in?",
    sub: "Strategy informs valuation, NAV cadence, and admin complexity.",
    options: [
      { value: "liquid", label: "Liquid markets", desc: "Equities, bonds, FX, listed securities" },
      { value: "hedge", label: "Hedge / alternative", desc: "Long/short, derivatives, credit" },
      { value: "pe_vc", label: "Private equity / venture", desc: "Closed-ended, illiquid" },
      { value: "real_assets", label: "Real estate / real assets", desc: "Property, infrastructure, commodities" },
      { value: "digital", label: "Digital assets", desc: "Crypto, tokenized securities, DeFi" },
      { value: "other", label: "Other", desc: "Tell us more on the call" },
    ],
  },
  {
    key: "aum" as const,
    multi: false,
    title: "Target fund size at launch?",
    sub: "We will scale the operating model to your AUM.",
    options: [
      { value: "under_10", label: "Under USD 10M", desc: "Boutique launch" },
      { value: "10_50", label: "USD 10M to 50M", desc: "Sweet spot for streamlined Delaware structures" },
      { value: "50_250", label: "USD 50M to 250M", desc: "Mid-market PE / credit / RE" },
      { value: "over_250", label: "Over USD 250M", desc: "Institutional grade" },
    ],
  },
  {
    key: "location" as const,
    multi: true,
    title: "Where are your investors based?",
    sub: "Affects wrapper choice, FATCA scope, and KYC. Pick all that apply.",
    options: [
      { value: "us", label: "United States", desc: "Domestic LPs, taxable and tax-exempt" },
      { value: "eu", label: "European Union", desc: "Reverse-solicitation considerations" },
      { value: "uk", label: "United Kingdom", desc: "" },
      { value: "mena", label: "MENA / GCC", desc: "" },
      { value: "other", label: "Other", desc: "Asia, LATAM, Africa, etc." },
    ],
  },
];

function scoreStructure(s: Structure, a: Answers): number {
  let score = 0;
  if (a.investors && a.investors.some((inv) => s.fitsInvestors.includes(inv))) score += 4;
  if (a.strategy && s.fitsStrategy.includes(a.strategy)) score += 3;
  if (a.aum && s.fitsAum.includes(a.aum)) score += 2;
  if (a.location && a.location.some((loc) => s.fitsLocation.includes(loc))) score += 2;
  if (a.stage === "migrating") score += s.setupWeeks[0] <= 5 ? 1 : 0;
  return score;
}

function recommend(answers: Answers): Structure | null {
  const ranked = [...STRUCTURES]
    .map((s) => ({ s, score: scoreStructure(s, answers) }))
    .sort((a, b) => b.score - a.score);
  if (!ranked[0] || ranked[0].score < 6) return null;
  return ranked[0].s;
}

export default function FundWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const isLast = stepIndex === steps.length - 1;
  const currentStep = steps[stepIndex];
  const currentAnswer = answers[currentStep.key];

  const hasAnswer = currentStep.multi
    ? Array.isArray(currentAnswer) && (currentAnswer as string[]).length > 0
    : !!currentAnswer;

  function handlePick(value: string) {
    setAnswers((prev) => {
      if (currentStep.multi) {
        const current = ((prev[currentStep.key] as string[] | undefined) ?? []).slice();
        const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
        return { ...prev, [currentStep.key]: next as never };
      }
      return { ...prev, [currentStep.key]: value as never };
    });
    if (!currentStep.multi && !isLast) {
      setTimeout(() => setStepIndex((i) => i + 1), 220);
    }
  }

  function handleAdvance() {
    if (!isLast) setStepIndex((i) => i + 1);
  }

  function handleBack() {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }

  function handleShow() {
    setShowResult(true);
  }

  function handleReset() {
    setAnswers({});
    setStepIndex(0);
    setShowResult(false);
  }

  if (showResult) {
    const match = recommend(answers);
    return <Recommendation match={match} onReset={handleReset} />;
  }

  const progress = ((stepIndex + (hasAnswer ? 1 : 0)) / steps.length) * 100;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-12">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
          <Sparkle className="h-3 w-3 text-accent-500" weight="fill" />
          Fund Wizard . 60 seconds
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] text-brand-900 md:text-7xl">
          Tell us your fund.
          <br />
          <span className="italic text-brand-500">We&apos;ll structure it.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-900/70">
          Five questions, one tailored proposal. We use your answers to recommend a structure, an indicative timeline, and a {COMPANY_NAME} proposal. Instantly.
        </p>
      </div>

      <motion.div
        layout
        className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card md:p-12"
      >
        <div className="mb-8 grid grid-cols-5 gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-colors ${
                i <= stepIndex ? "bg-brand-500" : "bg-brand-100"
              }`}
            />
          ))}
        </div>

        <div className="relative">
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-brand-400">
              Step {stepIndex + 1} of {steps.length}
            </p>
            <h2 className="font-serif text-3xl text-brand-900 md:text-4xl">{currentStep.title}</h2>
            <p className="mt-3 text-brand-900/65">{currentStep.sub}</p>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {currentStep.options.map((opt) => {
                const isPicked = currentStep.multi
                  ? Array.isArray(currentAnswer) && (currentAnswer as string[]).includes(opt.value)
                  : currentAnswer === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handlePick(opt.value)}
                    className={`group relative rounded-xl border p-5 text-left transition-all ${
                      isPicked
                        ? "border-brand-500 bg-brand-50/70 ring-2 ring-brand-200"
                        : "border-brand-100 bg-white hover:border-brand-300 hover:bg-brand-50/40"
                    }`}
                  >
                    {currentStep.multi && isPicked && (
                      <span className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-white">
                        <Check className="h-3 w-3" weight="bold" />
                      </span>
                    )}
                    <div className="font-semibold text-brand-900">{opt.label}</div>
                    {opt.desc && <div className="mt-1 text-sm text-brand-900/55">{opt.desc}</div>}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-brand-100 pt-6">
          <button
            onClick={handleBack}
            disabled={stepIndex === 0}
            className="text-sm text-brand-500 transition-colors hover:text-brand-700 disabled:opacity-40"
          >
            &larr; Back
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-400">
              {stepIndex + 1}/{steps.length}
            </span>
            {currentStep.multi && !isLast && (
              <button
                onClick={handleAdvance}
                disabled={!hasAnswer}
                className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {isLast && hasAnswer && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleShow}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-4 text-base font-medium text-white shadow-card transition-all hover:bg-brand-800 hover:shadow-card-hover"
          >
            <Sparkle className="h-5 w-5" weight="fill" />
            Show recommendation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
          </button>
        </motion.div>
      )}

      <p className="mt-3 text-center text-xs text-brand-400">{progress.toFixed(0)}% complete</p>
    </div>
  );
}

function Recommendation({ match, onReset }: { match: Structure | null; onReset: () => void }) {
  if (!match) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl rounded-2xl border border-brand-100 bg-white p-12 shadow-card"
      >
        <h2 className="font-serif text-3xl text-brand-900">Let&apos;s talk.</h2>
        <p className="mt-4 text-brand-900/70">
          Your situation needs a bespoke conversation, not a wizard. Book a 20-minute call and we&apos;ll walk you through the right structure for your strategy and investor base.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-white"
          >
            Talk to us <ArrowRight className="h-4 w-4" weight="bold" />
          </a>
          <button onClick={onReset} className="text-sm text-brand-500 hover:text-brand-700">
            <ArrowCounterClockwise className="mr-1 inline h-3 w-3" weight="bold" /> Restart
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-5xl"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm text-brand-700">
        <Check className="h-4 w-4" weight="bold" />
        Your match
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
        Recommended structure
      </p>
      <h2 className="mt-2 font-serif text-4xl text-brand-900 md:text-6xl">{match.name}</h2>
      <p className="mt-4 max-w-3xl text-lg text-brand-900/70">
        Based on your answers, the {match.shortName} is the right fit. Setup typically takes{" "}
        <strong className="text-brand-900">
          {match.setupWeeks[0]} to {match.setupWeeks[1]} weeks
        </strong>
        .
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <Stat label="Min commitment" value={match.minCommitment} />
        <Stat label="Wrapper / path" value={match.licencePath} />
        <Stat label="Cross-border" value={match.euPassport} />
        <Stat label="NAV" value={match.nav} />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-100 bg-white p-8">
          <h3 className="font-semibold text-brand-900">Why this fits you</h3>
          <ul className="mt-4 space-y-3">
            {match.whyBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-brand-900/85">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" weight="bold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-900 p-8 text-white">
          <h3 className="text-brand-200">Your {COMPANY_NAME} proposal</h3>
          <p className="mt-4 leading-relaxed text-white/85">{match.proposalText}</p>

          <div className="mt-6 border-t border-brand-700 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Indicative fees
            </p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <p className="font-serif text-2xl">{match.startingFee}</p>
              <a
                href={`${CONTACT_HREF}?utm_source=fund-wizard&utm_content=${match.shortName}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-5 py-2.5 text-sm font-medium text-brand-900 transition-transform hover:-translate-y-0.5"
              >
                Talk to us <ArrowRight className="h-4 w-4" weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 text-sm text-brand-500 hover:text-brand-700"
      >
        <ArrowCounterClockwise className="h-3 w-3" weight="bold" /> Restart the wizard
      </button>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-brand-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-500">{label}</p>
      <p className="mt-2 font-serif text-xl text-brand-900">{value}</p>
    </div>
  );
}
