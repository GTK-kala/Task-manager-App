const Toggle = ({ checked, onChange, label, description, disabled }) => {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="min-w-0">
        <p className="text-sm font-bold text-ink">{label}</p>
        {description && (
          <p className="mt-1 text-xs leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full outline-none transition-all duration-300
          focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2
          focus-visible:ring-offset-surface disabled:opacity-40
          ${checked ? "clay-accent" : "bg-ink/10"}`}
      >
        <span
          className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-md
            transition-all duration-300 ${checked ? "left-6" : "left-1"}`}
        />
      </button>
    </div>
  );
};

export default Toggle;
