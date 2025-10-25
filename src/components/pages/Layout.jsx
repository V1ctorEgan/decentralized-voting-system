import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../assets/sideNav.jsx";
import DashboardHeader from "./DashboardHeader.jsx";

const Layout = () => {
  return (
    <div className="flex p-4 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header (sticks to top) */}
        <DashboardHeader />

        {/* Page content (renders nested routes) */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
