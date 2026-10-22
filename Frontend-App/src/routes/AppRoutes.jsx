import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "../components/layout/AppLayout";
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
import Button from "../components/common/Button";

const NotFound = () => (
  <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
    <div className="clay-lg flex h-24 w-24 items-center justify-center text-4xl font-black text-accent">
      404
    </div>
    <div>
      <h1 className="text-2xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-2 text-sm text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
    </div>
    <Link to="/">
      <Button size="lg">Back to home</Button>
    </Link>
  </div>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />

    <Route
      element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }
    >
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
