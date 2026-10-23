import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Card from "../../components/common/Card";
import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";
import AuthAside from "../../components/auth/AuthAside";
import ThemeToggle from "../../components/layout/ThemeToggle";
import { Link, Navigate, useNavigate } from "react-router-dom";

const inputBase =
  "w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-muted";

const Field = ({ icon, error, children }) => (
  <div
    className={`rounded-[1.15rem] transition-shadow duration-200 ${
      error
        ? "ring-2 ring-red-500/40"
        : "focus-within:ring-2 focus-within:ring-accent/40"
    }`}
  >
    <div className="clay-inset flex items-center gap-2.5 px-4 py-3">
      <span className="shrink-0 text-muted">{icon}</span>
      {children}
    </div>
  </div>
);

const RULES = [
  { test: (v) => v.length >= 8, label: "8+ characters" },
  {
    test: (v) => /[a-z]/.test(v) && /[A-Z]/.test(v),
    label: "Upper & lower case",
  },
  { test: (v) => /\d/.test(v), label: "A number" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "A symbol" },
];

const Register = () => {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const passed = RULES.filter((r) => r.test(password)).length;

  const validate = () => {
    const next = {};

    if (!name.trim()) next.name = "Your name is required.";
    else if (name.trim().length < 2)
      next.name = "Name must be at least 2 characters.";

    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      next.email = "Enter a valid email address.";

    if (!password) next.password = "Password is required.";
    else if (password.length < 8) next.password = "Use at least 8 characters.";

    if (!confirm) next.confirm = "Please confirm your password.";
    else if (confirm !== password) next.confirm = "Passwords don't match.";

    if (!terms) next.terms = "Please accept the terms to continue.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !validate()) return;

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 750)); // mock latency — replace with API
      register({ name: name.trim(), email: email.trim() });
      toast.success("Account created. Welcome to Taskly!");
      navigate("/dashboard", { replace: true });
    } catch {
      toast.error("Couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const comingSoon = (provider) =>
    toast(`${provider} sign-up is coming soon`, { icon: "🚧" });

  return (
    <div className="relative min-h-dvh overflow-hidden bg-bg">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[440px] w-[440px] rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute -bottom-48 -right-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Taskly home">
          <Logo />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link to="/" className="hidden sm:block">
            <Button variant="soft" size="sm">
              <FiArrowLeft className="h-3.5 w-3.5" />
              Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-14 pt-2 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20">
        <AuthAside
          title="Start your day"
          gradient="in flow."
          subtitle="Create a free account and turn a messy to-do list into a calm, clear plan you can actually finish."
        />

        <section className="mx-auto w-full max-w-md animate-fade-up lg:mr-0 lg:ml-auto">
          <Card size="lg" className="p-6 sm:p-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
              Create account
            </h1>
            <p className="mt-1.5 text-sm font-medium text-muted">
              Free forever. No credit card required.
            </p>

            {/* Social */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => comingSoon("Google")}
                className="clay-sm clay-press flex items-center justify-center gap-2 px-3 py-3
                  text-[13px] font-bold text-ink outline-none
                  focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <FcGoogle className="h-4 w-4" />
                Google
              </button>
              <button
                type="button"
                onClick={() => comingSoon("GitHub")}
                className="clay-sm clay-press flex items-center justify-center gap-2 px-3 py-3
                  text-[13px] font-bold text-ink outline-none
                  focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </button>
            </div>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-ink/10" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted">
                or with email
              </span>
              <span className="h-px flex-1 bg-ink/10" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold text-muted"
                >
                  Full name
                </label>
                <Field
                  icon={<FiUser className="h-4 w-4" />}
                  error={errors.name}
                >
                  <input
                    id="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name)
                        setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    placeholder="Alex Morgan"
                    className={inputBase}
                  />
                </Field>
                {errors.name && (
                  <p className="mt-1.5 text-[11px] font-bold text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold text-muted"
                >
                  Email address
                </label>
                <Field
                  icon={<FiMail className="h-4 w-4" />}
                  error={errors.email}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </Field>
                {errors.email && (
                  <p className="mt-1.5 text-[11px] font-bold text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-bold text-muted"
                >
                  Password
                </label>
                <Field
                  icon={<FiLock className="h-4 w-4" />}
                  error={errors.password}
                >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((p) => ({ ...p, password: undefined }));
                    }}
                    placeholder="Create a password"
                    className={inputBase}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="-mr-1 flex h-7 w-7 shrink-0 items-center justify-center
                      rounded-lg text-muted transition-colors hover:text-ink"
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-4 w-4" />
                    ) : (
                      <FiEye className="h-4 w-4" />
                    )}
                  </button>
                </Field>
                {errors.password && (
                  <p className="mt-1.5 text-[11px] font-bold text-red-500">
                    {errors.password}
                  </p>
                )}

                {/* Strength meter */}
                {password.length > 0 && (
                  <div className="mt-2.5">
                    <div className="flex gap-1.5">
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                            i < passed
                              ? passed <= 1
                                ? "bg-red-500"
                                : passed === 2
                                  ? "bg-amber-500"
                                  : passed === 3
                                    ? "bg-emerald-500"
                                    : "bg-accent"
                              : "bg-ink/10"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {RULES.map((r) => {
                        const ok = r.test(password);
                        return (
                          <span
                            key={r.label}
                            className={`flex items-center gap-1.5 text-[10px] font-bold transition-colors ${
                              ok
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-muted"
                            }`}
                          >
                            <FiCheck
                              className={`h-3 w-3 transition-opacity ${
                                ok ? "opacity-100" : "opacity-40"
                              }`}
                              strokeWidth={3.5}
                            />
                            {r.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm */}
              <div>
                <label
                  htmlFor="confirm"
                  className="mb-2 block text-xs font-bold text-muted"
                >
                  Confirm password
                </label>
                <Field
                  icon={<FiLock className="h-4 w-4" />}
                  error={errors.confirm}
                >
                  <input
                    id="confirm"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => {
                      setConfirm(e.target.value);
                      if (errors.confirm)
                        setErrors((p) => ({ ...p, confirm: undefined }));
                    }}
                    placeholder="Repeat your password"
                    className={inputBase}
                  />
                </Field>
                {errors.confirm && (
                  <p className="mt-1.5 text-[11px] font-bold text-red-500">
                    {errors.confirm}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setTerms((v) => !v);
                    if (errors.terms)
                      setErrors((p) => ({ ...p, terms: undefined }));
                  }}
                  className="flex items-start gap-2.5 text-left text-xs font-semibold
                    leading-relaxed text-muted transition-colors hover:text-ink"
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-all duration-200 ${
                      terms ? "clay-accent" : "clay-inset-sm text-transparent"
                    }`}
                  >
                    <FiCheck className="h-3 w-3" strokeWidth={4} />
                  </span>
                  <span>
                    I agree to the{" "}
                    <a
                      href="#terms"
                      className="font-extrabold text-accent hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#privacy"
                      className="font-extrabold text-accent hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </button>
                {errors.terms && (
                  <p className="mt-1.5 text-[11px] font-bold text-red-500">
                    {errors.terms}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Creating account…
                  </>
                ) : (
                  <>
                    Create account
                    <FiArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm font-medium text-muted">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-extrabold text-accent hover:underline"
              >
                Sign in
              </Link>
            </p>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Register;
