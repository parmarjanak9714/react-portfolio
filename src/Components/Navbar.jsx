import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`rounded-2xl border backdrop-blur-xl shadow-lg transition-all duration-300 ${
            darkMode
              ? "border-white/10 bg-black/75 shadow-cyan-500/5"
              : "border-gray-200 bg-white/95 shadow-gray-200/50"
          }`}
        >
          {/* Main Navbar */}
          <div className="px-4 md:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-black font-extrabold text-lg md:text-xl">
                  J
                </span>
              </div>

              <div className="leading-tight">
                <h1
                  className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Janak<span className="text-cyan-400">.</span>
                </h1>

                <p className="hidden sm:block text-[10px] text-gray-400 tracking-wider uppercase">
                  &lt; Full Stack Developer /&gt;
                </p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          isActive
                            ? "text-cyan-400"
                            : darkMode
                              ? "text-gray-300 hover:text-white"
                              : "text-gray-800 hover:text-cyan-600"
                        }`}
                      >
                        {item.name}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-lg bg-cyan-400/10 border border-cyan-400/10"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
                    : "text-gray-600 hover:text-cyan-600 hover:bg-cyan-50"
                }`}
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/parmarjanak9714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/janak-parmar08111997"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              {/* Resume */}
              <a
                href="/Janak _MERN_Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 ml-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <FaFileAlt size={14} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border transition ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`lg:hidden overflow-hidden border-t transition-colors duration-300 ${
                  darkMode ? "border-white/10" : "border-gray-200"
                }`}
              >
                <div className="px-4 py-4 space-y-2">
                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-between px-4 py-3 mb-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2">
                      {darkMode ? (
                        <FaMoon className="text-cyan-400" />
                      ) : (
                        <FaSun className="text-yellow-400" />
                      )}

                      <span className="text-gray-300 text-sm font-medium">
                        {darkMode ? "Dark Mode" : "Light Mode"}
                      </span>
                    </div>

                    <button
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="relative w-12 h-6 rounded-full bg-gray-700 transition-colors"
                    >
                      <motion.span
                        animate={{ x: darkMode ? 24 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="absolute top-1 left-1 w-4 h-4 rounded-full bg-cyan-400"
                      />
                    </button>
                  </div>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg font-medium transition-all ${
                            isActive
                              ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/10"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Social Links */}
                  <div className="flex gap-3 pt-3 border-t border-white/10">
                    <a
                      href="https://github.com/parmarjanak9714"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/janak-parmar08111997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  </div>

                  {/* Mobile Resume */}
                  <a
                    href="/Janak _MERN_Cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold"
                  >
                    <FaFileAlt />
                    View Resume
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
