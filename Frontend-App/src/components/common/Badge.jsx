const tones = {
  accent: "bg-accent/12 text-accent",
  high: "bg-red-500/12 text-red-500",
  medium: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  low: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
  neutral: "bg-ink/8 text-muted",
};

const Badge = ({ children, tone = "neutral", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
