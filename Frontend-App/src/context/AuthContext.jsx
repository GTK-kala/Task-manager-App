import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "taskly-user";

const readUser = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const buildUser = (email, name) => {
  const fallback = (email || "user@taskly.app").split("@")[0];
  const raw = (name && name.trim()) || fallback.replace(/[._-]+/g, " ");
  const display = raw
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const initials =
    display
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return { name: display, email, role: "Member", initials };
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readUser);

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  // ── Demo only ──────────────────────────────────────────────
  // Swap these bodies for real API calls when your backend is ready.
  const login = (email = "alex@taskly.app") => {
    setUser(buildUser(email));
    return true;
  };

  const register = ({ name, email }) => {
    setUser(buildUser(email, name));
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: Boolean(user), login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
