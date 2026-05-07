"use client";

import Link from "next/link";
import Image from "next/image";
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

  const orb1X = useTransform(mouseX, [-1, 1], [-30, 30]);
  const orb1Y = useTransform(mouseY, [-1, 1], [-26, 26]);
  const orb2X = useTransform(mouseX, [-1, 1], [22, -22]);
  const orb2Y = useTransform(mouseY, [-1, 1], [18, -18]);
  const orb3X = useTransform(mouseX, [-1, 1], [-14, 14]);
  const orb3Y = useTransform(mouseY, [-1, 1], [12, -12]);

  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      {/* Background image */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <Image
          src="/images/manhattan-night.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%] scale-110"
        />
      </div>

      {/* Dark + brand color overlay (kept light enough for the skyline to read) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,26,48,0.30) 0%, rgba(12,26,48,0.40) 50%, rgba(12,26,48,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-brand-900/75 via-brand-900/30 to-transparent"
      />

      {/* Soft animated grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(229,171,70,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(140,170,210,0.18) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      {/* Floating orbs (parallax + drift) */}
      <motion.div
        aria-hidden
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-[480px] w-[480px] rounded-full bg-brand-500/35 blur-[140px] animate-pulse-soft"
      />
      <motion.div
        aria-hidden
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute -right-24 top-32 -z-10 h-[420px] w-[420px] rounded-full bg-accent-400/35 blur-[140px] animate-pulse-soft"
      />
      <motion.div
        aria-hidden
        style={{ x: orb3X, y: orb3Y }}
        className="pointer-events-none absolute bottom-[-15%] left-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-brand-400/30 blur-[140px]"
      />

      {/* Subtle floating particles */}
      <Particles />

      {/* Glow ring (right side) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-200px] top-[80px] -z-10 h-[640px] w-[640px] rounded-full border border-white/[0.06]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent-400 shadow-[0_0_18px_4px_rgba(229,171,70,0.7)]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-[180px] bottom-[-80px] -z-10 h-[420px] w-[420px] rounded-full border border-white/[0.05]"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-200 shadow-[0_0_14px_3px_rgba(182,197,221,0.6)]" />
      </motion.div>

      {/* Bottom fade into the rest of the page */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#FAFBFD]"
      />

      <div className="relative mx-auto max-w-(--max-width-container) px-6 pb-32 pt-24 md:px-10 md:pb-44 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-accent-300" weight="fill" />
          AICPA SOC compliant. U.S. funds, U.S. team.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl leading-[1.04] text-white sm:text-6xl md:text-[88px]"
        >
          Fund administration for{" "}
          <span className="italic text-accent-300">illiquid</span> asset managers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
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
            className="group inline-flex items-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 font-medium text-brand-900 shadow-card transition-all hover:bg-accent-300 hover:shadow-card-hover"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
          </Link>
          <Link
            href="/fund-wizard"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.05] px-7 py-3.5 font-medium text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/[0.08]"
          >
            <Sparkle className="h-4 w-4 text-accent-300" weight="fill" />
            Fund Wizard
          </Link>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {[
            { v: "20+", l: "years per partner" },
            { v: "3", l: "U.S. offices" },
            { v: "5", l: "fund strategies" },
            { v: "100%", l: "management owned" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-3xl text-white">{s.v}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Particles() {
  // 22 stylized building lights drifting upward, pseudo-random positions and durations
  const items = Array.from({ length: 22 }).map((_, i) => {
    const left = (i * 53) % 100;
    const top = 30 + ((i * 17) % 65);
    const dur = 8 + ((i * 13) % 10);
    const delay = (i * 0.4) % 6;
    const size = i % 5 === 0 ? 3 : 2;
    const isGold = i % 4 === 0;
    return { left, top, dur, delay, size, isGold };
  });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.isGold ? "rgb(239 196 114)" : "rgba(255,255,255,0.85)",
            boxShadow: p.isGold
              ? "0 0 8px 2px rgba(229,171,70,0.7)"
              : "0 0 6px 1px rgba(255,255,255,0.45)",
          }}
          animate={{ y: [0, -28, 0], opacity: [0.2, 0.95, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
