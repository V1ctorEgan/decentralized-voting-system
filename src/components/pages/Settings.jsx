import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import {
  Sun,
  Moon,
  Bell,
  BellOff,
  Settings,
  User,
  Globe,
  Shield,
  LogOut,
} from "lucide-react";

export default function Setting() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@citizenvote.gov",
    password: "********",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () =>
    alert("✅ Your settings have been updated successfully!");
  const handleDelete = () =>
    confirm("⚠️ Are you sure? This will permanently remove your account.");
  const handleLogout = () => alert("👋 You’ve been logged out successfully.");

  return (
    <div
      className={`min-h-screen px-6 py-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center px-8 py-6 border-b ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold">Settings & Preferences</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          >
            <LogOut size={18} />
            Logout
          </motion.button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3">
          {/* Left Sidebar */}
          <div
            className={`border-r ${
              darkMode ? "border-gray-800" : "border-gray-200"
            } p-6 space-y-6`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center text-center"
            >
              <motion.img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
                whileHover={{ scale: 1.05 }}
              />
              <h2 className="mt-3 text-lg font-semibold">{formData.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Verified Citizen
              </p>
              <span className="mt-2 inline-block bg-green-600 text-xs text-white px-3 py-1 rounded-full">
                Active
              </span>
            </motion.div>

            <div className="space-y-3">
              {[
                { icon: User, label: "Profile" },
                { icon: Shield, label: "Security" },
                { icon: Globe, label: "Language" },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <item.icon size={18} />
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-2 p-8 space-y-10">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`rounded-2xl p-6 ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">
                Profile Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 p-2"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 p-2"
                  />
                </div>
              </div>
            </motion.div>

            {/* Preferences Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`rounded-2xl p-6 ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">Preferences</h3>

              <div className="space-y-4">
                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {darkMode ? <Moon /> : <Sun />}
                    <span className="font-medium">Dark Mode</span>
                  </div>
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    className={`${
                      darkMode ? "bg-blue-600" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        darkMode ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {notifications ? <Bell /> : <BellOff />}
                    <span className="font-medium">Email Notifications</span>
                  </div>
                  <Switch
                    checked={notifications}
                    onChange={setNotifications}
                    className={`${
                      notifications ? "bg-blue-600" : "bg-gray-300"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        notifications ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>

                {/* Language Selection */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe />
                    <span className="font-medium">Language</span>
                  </div>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent border border-gray-400 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500"
                  >
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
              >
                Save Changes
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition"
              >
                Delete Account
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
