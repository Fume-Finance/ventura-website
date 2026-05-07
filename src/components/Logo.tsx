import { cn } from "@/lib/utils";

export default function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  const stroke = mono ? "currentColor" : "#1F3553";
  const fill = mono ? "currentColor" : "#1F3553";
  return (
    <span className={cn("inline-flex items-center gap-3", className)} aria-label="Ventura Fund Services">
      <svg width="36" height="36" viewBox="0 0 60 60" fill="none" aria-hidden>
        <rect x="2" y="2" width="56" height="56" rx="3" stroke={stroke} strokeWidth="2.4" />
        <path
          d="M 16 14 L 30 44 L 44 14"
          stroke={fill}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-[0.95] tracking-tight">
        <span className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", mono ? "text-current" : "text-brand-700")}>
          Ventura
        </span>
        <span className={cn("text-[10px] font-medium uppercase tracking-[0.22em]", mono ? "text-current/70" : "text-brand-500")}>
          Fund Services
        </span>
      </span>
    </span>
  );
}
