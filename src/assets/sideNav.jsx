import React, { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, PlusCircle, BarChart3, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

// Navigation links
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

  // Animation Variants
  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="h-screen w-64 bg-white text-black flex flex-col p-6 border-r border-gray-200 shadow-sm"
    >
      {/* Logo / Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8 text-green-500 tracking-wide"
      >
        Voting Admin
      </motion.h1>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-2">
        {navLinks.map(({ text, icon: Icon, path }, index) => (
          <motion.div key={text} variants={linkVariants}>
            <NavLink
              to={path}
              onClick={() => setActiveLink(path)}
              className={({ isActive }) =>
                `group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-green-100 text-green-600 font-semibold"
                    : "hover:bg-green-50 hover:text-green-600 text-gray-700"
                }`
              }
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Icon size={22} />
              </motion.div>
              <span
                className={`text-sm font-medium ${
                  activeLink === path ? "text-green-600" : "text-gray-700"
                }`}
              >
                {text}
              </span>
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-auto pt-6 text-sm text-gray-400 border-t border-gray-200"
      >
        © 2025 Decentralized Voting
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
