import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Full-width sticky topbar */}
      <Navbar onMenuToggle={() => setSidebarOpen(true)} />

      {/* Body row */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar:
            - Mobile: slides in as fixed overlay (controlled by sidebarOpen)
            - Desktop (lg+): always visible, static in flow */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;