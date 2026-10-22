import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../../context/AuthContext";

const titles = {
  "/dashboard": "Dashboard",
  "/settings": "Settings",
};

const Navbar = ({ onMenuClick }) => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-30 bg-bg/70 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="clay-sm flex items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="clay-sm clay-press flex h-9 w-9 shrink-0 items-center justify-center
            text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent/50 lg:hidden"
        >
          <FiMenu className="h-[18px] w-[18px]" />
        </button>

        <h1 className="truncate text-sm font-extrabold tracking-tight text-ink sm:text-base">
          {titles[pathname] || "Taskly"}
        </h1>

        {/* Search */}
        <div className="clay-inset ml-auto hidden items-center gap-2 px-3 py-2 md:flex md:w-72">
          <FiSearch className="h-4 w-4 shrink-0 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tasks..."
            className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:text-muted"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />

          <button
            aria-label="Notifications"
            className="clay-sm clay-press relative hidden h-11 w-11 items-center justify-center
              text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:flex"
          >
            <FiBell className="h-5 w-5" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-accent ring-2 ring-surface" />
          </button>

          <Link
            to="/settings"
            aria-label="Profile"
            className="clay-accent clay-press flex h-11 w-11 items-center justify-center
              rounded-2xl text-xs font-extrabold outline-none
              focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {user?.initials || "AM"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
