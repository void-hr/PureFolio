interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="reveal mb-14">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[1.5px] uppercase mb-4 section-label">
        <span className="w-5 h-px section-label-line" />
        {label}
      </div>
      <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-1.5px] leading-tight text-[var(--text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[var(--muted)] max-w-[480px] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
