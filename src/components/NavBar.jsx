import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeContext from "../context/Themecontext";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 fixed w-full z-50 top-0">
      <img
        src="https://weboin.com/wp-content/uploads/2024/05/WEBOIN-BANNER-2-ai-1.png.webp"
        alt="Logo"
        className="w-32 h-10 object-contain"
      />

      <nav className="hidden md:flex items-center gap-6">
        <Link to={"/"} onClick={closeMenu}>
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            Home
          </h2>
        </Link>
        <Link to={"/about"} onClick={closeMenu}>
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            About
          </h2>
        </Link>
        <HashLink smooth to="/#services" onClick={closeMenu}>
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            Services
          </h2>
        </HashLink>
        <HashLink smooth to="/#footer" onClick={closeMenu}>
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            Contact
          </h2>
        </HashLink>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {isDark ? "Light" : "Dark"}
        </button>
        <button onClick={handleToggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-40">
          <Link to={"/"} onClick={closeMenu}>
            <h2 className="font-bold text-lg hover:text-primary transition-colors duration-300">
              Home
            </h2>
          </Link>
          <Link to={"/about"} onClick={closeMenu}>
            <h2 className="font-bold text-lg hover:text-primary transition-colors duration-300">
              About
            </h2>
          </Link>
          <HashLink smooth to="/#services" onClick={closeMenu}>
            <h2 className="font-bold text-lg hover:text-primary transition-colors duration-300">
              Services
            </h2>
          </HashLink>
          <HashLink smooth to="/#footer" onClick={closeMenu}>
            <h2 className="font-bold text-lg hover:text-primary transition-colors duration-300">
              Contact
            </h2>
          </HashLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
