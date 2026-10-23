import { useState } from "react";
import {
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
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

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

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) return <Navigate to={from} replace />;

  const validate = () => {
    const next = {};
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      next.email = "Enter a valid email address.";

    if (!password) next.password = "Password is required.";
    else if (password.length < 6)
      next.password = "Password must be at least 6 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !validate()) return;

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 650)); // mock latency — replace with API
      login(email.trim());
      toast.success("Welcome back!");
      navigate(from, { replace: true });
    } catch {
      toast.error("Couldn't sign you in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const comingSoon = (provider) =>
    toast(`${provider} sign-in is coming soon`, { icon: "🚧" });

  return (
    <div className="relative min-h-dvh overflow-hidden bg-bg">
      {/* Ambient clay glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[130px]" />
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
          title="Welcome back to"
          gradient="focus."
          subtitle="Your tasks are exactly where you left them. Sign in to see what's next and keep the momentum going."
        />

        <section className="mx-auto w-full max-w-md animate-fade-up lg:mr-0 lg:ml-auto">
          <Card size="lg" className="p-6 sm:p-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
              Sign in
            </h1>
            <p className="mt-1.5 text-sm font-medium text-muted">
              Welcome back — let's get things done.
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
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-bold text-muted"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      toast("Password reset is coming soon", { icon: "🔑" })
                    }
                    className="text-[11px] font-extrabold text-accent hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <Field
                  icon={<FiLock className="h-4 w-4" />}
                  error={errors.password}
                >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((p) => ({ ...p, password: undefined }));
                    }}
                    placeholder="••••••••"
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
              </div>

              {/* Remember me */}
              <button
                type="button"
                onClick={() => setRemember((v) => !v)}
                className="flex items-center gap-2.5 text-xs font-semibold text-muted
                  transition-colors hover:text-ink"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md transition-all duration-200 ${
                    remember ? "clay-accent" : "clay-inset-sm text-transparent"
                  }`}
                >
                  <FiCheck className="h-3 w-3" strokeWidth={4} />
                </span>
                Keep me signed in
              </button>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign in
                    <FiArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm font-medium text-muted">
              New to Taskly?{" "}
              <Link
                to="/register"
                className="font-extrabold text-accent hover:underline"
              >
                Create an account
              </Link>
            </p>
          </Card>

          <p className="mt-5 text-center text-[11px] font-semibold leading-relaxed text-muted">
            By continuing you agree to our{" "}
            <a href="#terms" className="text-ink hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#privacy" className="text-ink hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
