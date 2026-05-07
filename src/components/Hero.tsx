"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, ShieldCheck, Sparkle } from "@phosphor-icons/react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const shape1X = useTransform(mouseX, [-1, 1], [-22, 22]);
  const shape1Y = useTransform(mouseY, [-1, 1], [-22, 22]);
  const shape2X = useTransform(mouseX, [-1, 1], [16, -16]);
  const shape2Y = useTransform(mouseY, [-1, 1], [12, -12]);
  const shape3X = useTransform(mouseX, [-1, 1], [-12, 12]);
  const shape3Y = useTransform(mouseY, [-1, 1], [10, -10]);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-white to-white" />
        <motion.div
          style={{ x: shape1X, y: shape1Y }}
          className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-brand-300/35 blur-[120px] animate-pulse-soft"
        />
        <motion.div
          style={{ x: shape2X, y: shape2Y }}
          className="absolute right-[-8%] top-32 h-[440px] w-[440px] rounded-full bg-accent-300/40 blur-[120px] animate-pulse-soft"
        />
        <motion.div
          style={{ x: shape3X, y: shape3Y }}
          className="absolute bottom-[-10%] left-1/3 h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-[120px]"
        />
        {/* Subtle skyline silhouette */}
        <SkylineSilhouette className="absolute inset-x-0 bottom-0 w-full opacity-[0.06]" />
      </div>

      <div className="mx-auto max-w-(--max-width-container) px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/85 px-4 py-1.5 text-xs font-medium text-brand-700 shadow-sm backdrop-blur"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-accent-500" weight="fill" />
          AICPA SOC compliant. U.S. funds, U.S. team.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl leading-[1.04] text-brand-900 sm:text-6xl md:text-[88px]"
        >
          Fund administration for{" "}
          <span className="italic text-brand-500">illiquid</span> asset managers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-brand-900/75 md:text-xl"
        >
          Ventura is a U.S. based, management-owned administrator for private equity, venture, real estate, private credit, and infrastructure funds. One team. Single point of contact. Built around the way American GPs actually run capital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-medium text-white shadow-card transition-all hover:bg-brand-800 hover:shadow-card-hover"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
          </Link>
          <Link
            href="/fund-wizard"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-7 py-3.5 font-medium text-brand-900 backdrop-blur transition-colors hover:border-brand-400"
          >
            <Sparkle className="h-4 w-4 text-accent-500" weight="fill" />
            Fund Wizard
          </Link>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 border-t border-brand-100 pt-8 sm:grid-cols-4"
        >
          {[
            { v: "20+", l: "years per partner" },
            { v: "3", l: "U.S. offices" },
            { v: "5", l: "fund strategies" },
            { v: "100%", l: "management owned" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-3xl text-brand-900">{s.v}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-900/55">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkylineSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 220" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden>
      <path
        d="M0 220 L0 150 L60 150 L60 110 L120 110 L120 80 L160 80 L160 50 L195 50 L195 30 L210 30 L210 80 L240 80 L240 100 L290 100 L290 60 L320 60 L320 90 L370 90 L370 30 L405 30 L405 70 L440 70 L440 100 L490 100 L490 50 L520 50 L520 110 L580 110 L580 80 L630 80 L630 40 L670 40 L670 90 L720 90 L720 60 L770 60 L770 110 L820 110 L820 80 L870 80 L870 30 L905 30 L905 70 L950 70 L950 110 L1010 110 L1010 80 L1060 80 L1060 50 L1095 50 L1095 100 L1150 100 L1150 60 L1200 60 L1200 110 L1260 110 L1260 80 L1310 80 L1310 50 L1350 50 L1350 110 L1400 110 L1400 150 L1440 150 L1440 220 Z"
        fill="#0C1A30"
      />
    </svg>
  );
}
