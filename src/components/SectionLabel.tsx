export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
      <span className="h-px w-6 bg-accent-400" />
      {children}
    </p>
  );
}
