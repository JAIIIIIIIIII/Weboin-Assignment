import React from "react";
import { HashRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-800 transition-colors duration-500 flex items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="text-center pb-8 lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-gray-900 dark:text-white">
            Connecting Brands with People
          </h1>
          <p className="py-6 text-base sm:text-lg text-gray-700 font-semibold dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            We bridge the gap between businesses and their audience by creating
            meaningful digital experiences that inspire trust, loyalty, and
            growth.
          </p>
          <HashLink to="/about#team" smooth>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md transition duration-300">
              Get Started
            </button>
          </HashLink>
        </div>

        {/* Image Section */}
        <div className="w-full  max-w-md md:max-w-lg">
          <img
            src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?cs=srgb&dl=pexels-canvastudio-3194519.jpg&fm=jpg"
            alt="Hero Illustration"
            className="rounded-lg shadow-2xl w-full h-[550px] md:h-[480px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
