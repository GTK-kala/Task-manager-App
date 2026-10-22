import { NavLink } from "react-router-dom";
import { FiGrid, FiSettings, FiLogOut, FiX } from "react-icons/fi";
import Logo from "../common/Logo";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { to: "/dashboard", label: "Dashboard", Icon: FiGrid },
  { to: "/settings", label: "Settings", Icon: FiSettings },
];

const linkClass = ({ isActive }) =>
  `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold outline-none
   transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent/50
   ${isActive ? "clay-accent" : "text-muted hover:bg-ink/5 hover:text-ink"}`;

const Sidebar = ({ open, onClose }) => {
  const { user, logout } = useAuth();

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[290px] p-4 transition-transform duration-300
          ease-[cubic-bezier(.22,.61,.36,1)] lg:translate-x-0 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="clay-lg flex h-full flex-col overflow-y-auto p-5">
          {/* Brand */}
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="clay-sm clay-press flex h-9 w-9 items-center justify-center text-muted lg:hidden"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>

          {/* Nav */}
          <nav className="mt-8 flex flex-col gap-2">
            <p className="mb-1 px-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
              Menu
            </p>
            {navItems.map(({ to, label, Icon }) => (
              <NavLink key={to} to={to} onClick={onClose} className={linkClass}>
                {({ isActive }) => (
                  <>
                    <Icon className="h-[18px] w-[18px]" />
                    <span>{label}</span>
                    <span
                      className={`ml-auto h-1.5 w-1.5 rounded-full transition-opacity ${
                        isActive ? "bg-white opacity-100" : "opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Weekly goal */}
          <div className="clay-inset mt-8 p-4">
            <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-[0.1em]">
              <span className="text-muted">Weekly goal</span>
              <span className="text-accent">72%</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink/10">
              <div className="h-full w-[72%] rounded-full bg-accent transition-all duration-700" />
            </div>
            <p className="mt-3 text-xs font-medium leading-relaxed text-muted">
              You've completed 18 of 25 tasks this week. Keep it up!
            </p>
          </div>

          {/* User */}
          <div className="mt-auto pt-8">
            <div className="clay-inset flex items-center gap-3 p-3">
              <div className="clay-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold">
                {user?.initials || "AM"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-ink">
                  {user?.name || "Guest"}
                </p>
                <p className="truncate text-[11px] font-medium text-muted">
                  {user?.email || "not signed in"}
                </p>
              </div>
              <button
                onClick={logout}
                aria-label="Log out"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-muted
                  transition-colors hover:bg-red-500/10 hover:text-red-500"
              >
                <FiLogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
