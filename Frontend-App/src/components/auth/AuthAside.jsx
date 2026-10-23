import { FiCheck, FiZap, FiTarget, FiTrendingUp } from "react-icons/fi";
import Card from "../common/Card";

const highlights = [
  { Icon: FiZap, text: "Capture tasks in a single tap" },
  { Icon: FiTarget, text: "Smart priorities keep you focused" },
  { Icon: FiTrendingUp, text: "Weekly insights on your progress" },
];

const preview = [
  { title: "Design onboarding flow", done: true },
  { title: "Review Q3 report", done: false },
  { title: "Sync with backend team", done: false },
];

const AuthAside = ({ title, gradient, subtitle }) => {
  return (
    <section className="hidden animate-fade-up lg:block">
      <h2 className="text-[40px] font-black leading-[1.08] tracking-tight text-ink xl:text-[46px]">
        {title}{" "}
        <span className="block bg-gradient-to-r from-accent to-[#4aa8ff] bg-clip-text text-transparent">
          {gradient}
        </span>
      </h2>

      <p className="mt-4 max-w-md text-[15px] font-medium leading-relaxed text-muted">
        {subtitle}
      </p>

      <ul className="mt-8 space-y-3.5">
        {highlights.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <span className="clay-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-ink">{text}</span>
          </li>
        ))}
      </ul>

      <Card size="sm" className="animate-floaty mt-10 max-w-sm p-4">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-extrabold text-ink">Today's plan</p>
          <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[10px] font-extrabold text-accent">
            1 of 3 done
          </span>
        </div>

        <div className="mt-3 space-y-2">
          {preview.map((t) => (
            <div
              key={t.title}
              className="clay-inset-sm flex items-center gap-2.5 px-3 py-2.5"
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded ${
                  t.done ? "clay-accent" : "clay-inset-sm text-transparent"
                }`}
              >
                <FiCheck className="h-2.5 w-2.5" strokeWidth={4} />
              </span>
              <span
                className={`min-w-0 flex-1 truncate text-[12px] font-bold ${
                  t.done ? "text-muted line-through" : "text-ink"
                }`}
              >
                {t.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3.5">
          <div className="flex items-center justify-between text-[11px] font-bold">
            <span className="text-muted">Progress</span>
            <span className="text-accent">33%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <div className="h-full w-1/3 rounded-full bg-accent" />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AuthAside;
