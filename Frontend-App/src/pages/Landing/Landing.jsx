import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Logo from "../../components/common/Logo";
import Badge from "../../components/common/Badge";
import ThemeToggle from "../../components/layout/ThemeToggle";
import ProgressRing from "../../components/common/ProgressRing";
import { useAuth } from "../../context/AuthContext";

const features = [
  {
    Icon: FiZap,
    title: "Lightning fast",
    text: "Capture tasks in a single tap. No menus, no friction, no distractions.",
  },
  {
    Icon: FiTarget,
    title: "Stay focused",
    text: "Priorities, due dates and progress rings keep your day on track.",
  },
  {
    Icon: FiTrendingUp,
    title: "See progress",
    text: "Weekly insights show exactly what you've shipped and what's next.",
  },
];

const previewTasks = [
  { title: "Design onboarding flow", done: true, tone: "low" },
  { title: "Review Q3 report", done: false, tone: "high" },
  { title: "Sync with backend team", done: false, tone: "medium" },
];

const Landing = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStart = () => {
    if (!isAuthenticated) login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {["Features", "How it works", "Pricing"].map((item) => (
              <a
                key={item}
                href="#features"
                className="text-sm font-bold text-muted transition-colors hover:text-ink"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {isAuthenticated ? (
              <Link to="/dashboard" className="hidden sm:block">
                <Button>
                  Dashboard
                  <FiArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button onClick={handleStart} className="hidden sm:inline-flex">
                Get started
                <FiArrowRight className="h-4 w-4" />
              </Button>
            )}

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="clay-sm clay-press flex h-11 w-11 items-center justify-center text-ink md:hidden"
            >
              {menuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="animate-fade-up px-4 pb-4 md:hidden">
            <Card size="sm" className="flex flex-col gap-1 p-3">
              {["Features", "How it works", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#features"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-muted transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {item}
                </a>
              ))}
              <Button onClick={handleStart} className="mt-2 w-full">
                Get started
                <FiArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <Badge tone="accent" className="mx-auto lg:mx-0">
              <FiZap className="h-3 w-3" />
              Now with smart priorities
            </Badge>

            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Get things done,
              <span className="block bg-gradient-to-r from-accent to-[#4aa8ff] bg-clip-text text-transparent">
                beautifully.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base font-medium leading-relaxed text-muted sm:text-lg lg:mx-0">
              Taskly is a calm, focused task manager that helps you plan your
              day, track progress and actually finish what matters.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleStart}
                className="w-full sm:w-auto"
              >
                Start for free
                <FiArrowRight className="h-4 w-4" />
              </Button>
              <a href="#features" className="w-full sm:w-auto">
                <Button variant="soft" size="lg" className="w-full sm:w-auto">
                  See how it works
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
              <div className="flex -space-x-3">
                {["AM", "JD", "KL", "RS"].map((i, idx) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface text-[10px] font-extrabold ${
                      idx === 0 ? "clay-accent" : "clay-sm text-ink"
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold text-muted">
                <span className="font-extrabold text-ink">12,400+</span> people
                <br className="hidden sm:block" /> stay organised with Taskly
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md">
            <Card
              size="lg"
              className="animate-fade-up p-5 sm:p-6"
              style={{ animationDelay: "120ms" }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-ink">Today's tasks</p>
                <Badge tone="accent">4 left</Badge>
              </div>

              <div className="mt-4 space-y-2.5">
                {previewTasks.map((t) => (
                  <div
                    key={t.title}
                    className="clay-inset-sm flex items-center gap-3 px-3 py-3"
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                        t.done
                          ? "clay-accent"
                          : "clay-inset-sm text-transparent"
                      }`}
                    >
                      <FiCheck className="h-3 w-3" strokeWidth={4} />
                    </span>
                    <span
                      className={`min-w-0 flex-1 truncate text-[13px] font-bold ${
                        t.done ? "text-muted line-through" : "text-ink"
                      }`}
                    >
                      {t.title}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        t.tone === "high"
                          ? "bg-red-500"
                          : t.tone === "medium"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl px-1">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                    Progress
                  </p>
                  <p className="text-lg font-extrabold text-ink">68%</p>
                </div>
                <ProgressRing value={68} size={64} stroke={8} />
              </div>
            </Card>

            {/* Floating cards */}
            <Card
              size="sm"
              className="animate-floaty absolute -left-3 top-1/3 hidden items-center gap-2 p-3 sm:flex lg:-left-10"
            >
              <div className="clay-accent flex h-8 w-8 items-center justify-center rounded-lg">
                <FiClock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-muted">
                  Focus
                </p>
                <p className="text-xs font-extrabold text-ink">2h 15m</p>
              </div>
            </Card>

            <Card
              size="sm"
              className="animate-floaty-slow absolute -right-3 bottom-8 hidden items-center gap-2 p-3 sm:flex lg:-right-8"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15">
                <FiCheck className="h-4 w-4 text-emerald-500" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-muted">
                  Done today
                </p>
                <p className="text-xs font-extrabold text-ink">6 tasks</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-3 text-sm font-medium leading-relaxed text-muted sm:text-base">
            A focused toolset designed to keep you moving without the clutter.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {features.map(({ Icon, title, text }) => (
            <Card
              key={title}
              className="clay-press p-6 text-center sm:p-8 sm:text-left"
            >
              <div className="clay-accent mx-auto flex h-12 w-12 items-center justify-center rounded-2xl sm:mx-0">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-extrabold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted">
                {text}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <Card
          size="lg"
          className="grid grid-cols-2 gap-6 p-8 sm:p-10 lg:grid-cols-4"
        >
          {[
            { value: "12.4k", label: "Active users" },
            { value: "1.2M", label: "Tasks completed" },
            { value: "98%", label: "Satisfaction" },
            { value: "4.9", label: "Average rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card
          size="lg"
          className="relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]" />
          <h2 className="relative text-2xl font-black tracking-tight text-ink sm:text-4xl">
            Ready to reclaim your day?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-muted sm:text-base">
            Join thousands of people who plan less and finish more with Taskly.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={handleStart}
              className="w-full sm:w-auto"
            >
              Get started — it's free
              <FiArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="soft"
              size="lg"
              onClick={handleStart}
              className="w-full sm:w-auto"
            >
              Live demo
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <Logo />
          <p className="text-xs font-semibold text-muted">
            © {new Date().getFullYear()} Taskly. Built for focus.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
