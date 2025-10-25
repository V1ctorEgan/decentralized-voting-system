import React, { useState } from "react";
import { LayoutDashboard, PlusCircle, BarChart3, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { text: "Dashboard", icon: LayoutDashboard, path: "/dashboard/home" },
  {
    text: "Create Election",
    icon: PlusCircle,
    path: "/dashboard/create-election",
  },
  { text: "Results", icon: BarChart3, path: "/dashboard/results" },
  { text: "Settings", icon: Settings, path: "/dashboard/settings" },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <aside className="h-screen w-64 bg-white text-black flex flex-col p-6 border-r border-gray-200 shadow-sm">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-8 text-green-500 tracking-wide">
        Voting Admin
      </h1>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-2">
        {navLinks.map(({ text, icon: Icon, path }) => (
          <NavLink
            key={text}
            to={path}
            onClick={() => setActiveLink(path)}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-green-100 text-green-600 font-semibold"
                  : "hover:bg-green-50 hover:text-green-600 text-gray-700"
              }`
            }
          >
            <Icon size={22} />
            <span
              className={`text-sm font-medium ${
                activeLink === path ? "text-green-600" : "text-gray-700"
              }`}
            >
              {text}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 text-sm text-gray-400 border-t border-gray-200">
        © 2025 Decentralized Voting
      </div>
    </aside>
  );
};

export default Sidebar;
