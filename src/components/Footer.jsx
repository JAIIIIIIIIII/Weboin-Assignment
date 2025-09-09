import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = ({ id }) => {
  return (
    <footer
      id={id}
      className="bg-base-200 dark:bg-gray-900 py-10 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700 dark:text-gray-300">
        {/* About */}
        <div className="flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-200 dark:text-white text-left">
            About Weboin
          </h3>
          <p className="text-sm leading-relaxed text-gray-300 dark:text-white text-left">
            Weboin is a leading digital marketing agency committed to helping
            your business grow online. We deliver innovative solutions tailored
            to your needs.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-200 dark:text-white text-left">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-600 flex-shrink-0" />
              <span className="text-gray-200 dark:text-white">
                +91 98765 43210
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600 flex-shrink-0" />
              <span className="text-gray-200 dark:text-white">
                contact@weboin.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-600 flex-shrink-0" />
              <span className="text-gray-200 dark:text-white">
                123 Weboin St,Chennai, India
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-200 dark:text-white text-left">
            Follow Us
          </h3>
          <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-400">
            <a
              href="https://facebook.com/weboin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/weboin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/weboin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/weboin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* You could add an extra column or keep it empty for better spacing */}
        <div className="hidden md:block" />
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-gray-300 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Weboin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
