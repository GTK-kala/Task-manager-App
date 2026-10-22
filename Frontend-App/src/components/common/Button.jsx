const variants = {
  primary: "clay-accent clay-press font-semibold tracking-tight",
  soft: "clay-sm clay-press font-semibold text-ink",
  ghost: "font-semibold text-muted hover:text-ink hover:bg-ink/5",
  outline:
    "font-semibold text-ink border border-ink/10 hover:bg-ink/5 transition-colors",
  danger:
    "font-semibold text-red-500 bg-red-500/10 hover:bg-red-500/15 transition-colors",
};

const sizes = {
  sm: "px-3.5 py-2 text-[13px] rounded-xl gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-2xl gap-2",
  lg: "px-6 py-3.5 text-[15px] rounded-2xl gap-2.5",
  icon: "h-11 w-11 rounded-2xl",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center whitespace-nowrap outline-none transition
        focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2
        focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
