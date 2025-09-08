import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?cs=srgb&dl=pexels-canvastudio-3194519.jpg&fm=jpg"
          className="max-w-sm rounded-lg shadow-2xl h-[400px] w-[500px] object-cover"
          alt="Hero Illustration"
        />
        <div>
          <h1 className="text-5xl font-bold uppercase">
            Connecting Brands with People
          </h1>
          <p className="py-6 text-lg text-gray-700 dark:text-gray-300">
            We bridge the gap between businesses and their audience by creating
            meaningful digital experiences that inspire trust, loyalty, and
            growth.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
