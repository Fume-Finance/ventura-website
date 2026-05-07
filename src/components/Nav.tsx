"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Pages with a dark hero at the top, where nav should be transparent + white text.
  const darkTop = pathname === "/";
  const onDark = darkTop && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-lg border-b border-brand-100"
          : darkTop
            ? "bg-transparent border-b border-transparent"
            : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-(--max-width-container) items-center justify-between px-6 md:px-10">
        <Link href="/" className="focus-ring rounded-md">
          <Logo mono={onDark} className={onDark ? "text-white" : ""} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors focus-ring rounded",
                onDark ? "text-white/80 hover:text-white" : "text-brand-900/70 hover:text-brand-700",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/fund-wizard"
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              onDark
                ? "border border-white/25 text-white hover:border-white/60 hover:bg-white/[0.05]"
                : "border border-brand-200 text-brand-700 hover:border-brand-400 hover:bg-brand-50",
            )}
          >
            Fund Wizard
          </Link>
          <Link
            href="/contact"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              onDark
                ? "bg-accent-400 text-brand-900 hover:bg-accent-300"
                : "bg-brand-700 text-white hover:bg-brand-800",
            )}
          >
            Talk to us
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" weight="bold" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={cn("lg:hidden rounded-md p-2", onDark ? "text-white" : "text-brand-900")}
          aria-label="Open menu"
        >
          <List className="h-6 w-6" weight="bold" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-900/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <Logo mono className="text-white" />
              <button onClick={() => setOpen(false)} className="text-white/80" aria-label="Close menu">
                <X className="h-6 w-6" weight="bold" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="mt-8 flex flex-col gap-1 px-6"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-3xl text-white"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link
                  href="/fund-wizard"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/30 px-5 py-3 text-center text-white"
                >
                  Fund Wizard
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-accent-400 px-5 py-3 text-center font-medium text-brand-900"
                >
                  Talk to us
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
