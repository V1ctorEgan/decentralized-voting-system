import React from "react";
import { motion } from "framer-motion";
import { Bell, Settings, User, Search } from "lucide-react";

const DashboardHeader = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white shadow-sm rounded-xl px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      {/* Left Section: Logo / Title */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-xl md:text-2xl font-semibold text-gray-800"
      >
        Dashboard
      </motion.h1>

      {/* Center: Search Bar (Hidden on very small screens) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative flex-1 max-w-md hidden sm:flex"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </motion.div>

      {/* Right Section: Icons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex items-center justify-end gap-3"
      >
        {/* Notification Icon */}
        <button className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-semibold rounded-full w-3.5 h-3.5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Settings Icon */}
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
          <Settings className="w-5 h-5 text-gray-700" />
        </button>

        {/* Profile Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            C
          </div>
          <span className="hidden sm:inline text-gray-800 font-medium">
            Chosen
          </span>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default DashboardHeader;
