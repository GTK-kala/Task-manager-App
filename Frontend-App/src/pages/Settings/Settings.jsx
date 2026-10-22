import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiTrash2,
  FiLogOut,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import Card from "../../components/common/Card";
import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";
import Toggle from "../../components/common/Toggle";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Settings = () => {
  const { user, logout } = useAuth();
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
  });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="animate-fade-up mx-auto max-w-3xl space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Settings
        </h2>
        <p className="mt-1 text-sm font-medium text-muted">
          Manage your profile, appearance and preferences.
        </p>
      </div>

      {/* Profile */}
      <Card className="p-5 sm:p-6">
        <h3 className="text-base font-extrabold tracking-tight text-ink">
          Profile
        </h3>

        <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="clay-accent flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold">
            {user?.initials || "AM"}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="truncate text-base font-extrabold text-ink">
                {user?.name || "Guest user"}
              </p>
              <Badge tone="accent">Pro</Badge>
            </div>
            <p className="mt-0.5 truncate text-xs font-semibold text-muted">
              {user?.role || "Member"}
            </p>
          </div>
          <Button variant="soft" size="sm" className="shrink-0">
            Edit profile
          </Button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold text-muted">
              Full name
            </label>
            <div className="clay-inset flex items-center gap-2.5 px-4 py-3">
              <FiUser className="h-4 w-4 shrink-0 text-muted" />
              <input
                defaultValue={user?.name || ""}
                className="w-full bg-transparent text-sm font-semibold text-ink outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-muted">
              Email address
            </label>
            <div className="clay-inset flex items-center gap-2.5 px-4 py-3">
              <FiMail className="h-4 w-4 shrink-0 text-muted" />
              <input
                type="email"
                defaultValue={user?.email || ""}
                className="w-full bg-transparent text-sm font-semibold text-ink outline-none"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Appearance */}
      <Card className="p-5 sm:p-6">
        <h3 className="text-base font-extrabold tracking-tight text-ink">
          Appearance
        </h3>
        <p className="mt-1 text-xs font-medium text-muted">
          Choose how Taskly looks on this device.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:max-w-sm">
          <button
            onClick={() => setDarkMode(false)}
            className={`flex flex-col items-center gap-3 rounded-2xl px-4 py-5 transition-all duration-200 ${
              !darkMode
                ? "clay-accent"
                : "clay-sm clay-press text-muted hover:text-ink"
            }`}
          >
            <FiSun className="h-5 w-5" />
            <span className="text-xs font-extrabold">Light</span>
          </button>

          <button
            onClick={() => setDarkMode(true)}
            className={`flex flex-col items-center gap-3 rounded-2xl px-4 py-5 transition-all duration-200 ${
              darkMode
                ? "clay-accent"
                : "clay-sm clay-press text-muted hover:text-ink"
            }`}
          >
            <FiMoon className="h-5 w-5" />
            <span className="text-xs font-extrabold">Dark</span>
          </button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-5 sm:p-6">
        <h3 className="text-base font-extrabold tracking-tight text-ink">
          Notifications
        </h3>

        <div className="mt-5 space-y-5">
          <Toggle
            label="Email notifications"
            description="Get a daily summary of your tasks by email."
            checked={notifications.email}
            onChange={(v) => setNotifications((n) => ({ ...n, email: v }))}
          />
          <div className="h-px bg-ink/5" />
          <Toggle
            label="Push notifications"
            description="Receive reminders for tasks that are due soon."
            checked={notifications.push}
            onChange={(v) => setNotifications((n) => ({ ...n, push: v }))}
          />
          <div className="h-px bg-ink/5" />
          <Toggle
            label="Weekly report"
            description="A weekly recap of everything you completed."
            checked={notifications.weekly}
            onChange={(v) => setNotifications((n) => ({ ...n, weekly: v }))}
          />
        </div>
      </Card>

      {/* Account */}
      <Card className="p-5 sm:p-6">
        <h3 className="text-base font-extrabold tracking-tight text-ink">
          Account
        </h3>

        <div className="mt-5 space-y-3">
          <div className="clay-inset flex items-center gap-2.5 px-4 py-3">
            <FiLock className="h-4 w-4 shrink-0 text-muted" />
            <input
              type="password"
              placeholder="Current password"
              className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-muted"
            />
          </div>
          <div className="clay-inset flex items-center gap-2.5 px-4 py-3">
            <FiLock className="h-4 w-4 shrink-0 text-muted" />
            <input
              type="password"
              placeholder="New password"
              className="w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-muted"
            />
          </div>
          <Button variant="soft" className="w-full sm:w-auto">
            Update password
          </Button>
        </div>
      </Card>

      {/* Danger zone */}
      <Card className="p-5 sm:p-6">
        <h3 className="text-base font-extrabold tracking-tight text-red-500">
          Danger zone
        </h3>
        <p className="mt-1 text-xs font-medium text-muted">
          These actions are permanent and cannot be undone.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="danger"
            className="justify-center sm:w-auto"
            onClick={handleLogout}
          >
            <FiLogOut className="h-4 w-4" />
            Log out
          </Button>
          <Button variant="danger" className="justify-center sm:w-auto">
            <FiTrash2 className="h-4 w-4" />
            Delete account
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
