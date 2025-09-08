import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggleTheme }) => {
  return (
    <div className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <img
        src="https://weboin.com/wp-content/uploads/2024/05/WEBOIN-BANNER-2-ai-1.png.webp"
        alt="Logo"
        className="w-32 h-10 object-contain"
      />
      <nav className="flex items-center gap-6">
        <Link to={"/"}>
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            Home
          </h2>
        </Link>
        <Link to={"/about"}>
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            About
          </h2>
        </Link>
        <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
          Services
        </h2>
        <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
          Contact
        </h2>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          Change Theme
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
