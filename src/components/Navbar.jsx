import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiFeather } from "react-icons/fi";
import useTheme from "../theme";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const navLinks = [
  "Home",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Certificates",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">
          <span className="hidden sm:inline">Harshini</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-500 relative group"
              >
                {link}
                <span className="block h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme & Mobile Toggle Group */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Theme toggle button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-gray-800 dark:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
          >
            {theme === "light" ? (
              <FaRegMoon size={20} />
            ) : (
              <IoSunnyOutline size={20} />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-800 dark:text-white"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-6 text-left bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
