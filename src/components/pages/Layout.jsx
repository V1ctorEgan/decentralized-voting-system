import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../assets/sideNav.jsx";
import DashboardHeader from "./DashboardHeader.jsx";
import { Menu } from "lucide-react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (Desktop) */}
      <div className="hidden md:flex w-64">
        <Sidebar />
      </div>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="relative z-50 w-64 bg-white shadow-lg animate-slideIn">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header (with menu button for mobile) */}
        <header className="sticky top-0 z-30 bg-white shadow-sm flex items-center justify-between px-4 py-3 md:px-6">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Header content */}
          <DashboardHeader />
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
