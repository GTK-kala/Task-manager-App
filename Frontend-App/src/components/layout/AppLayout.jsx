import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-[290px]">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
