import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";

const About = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-500">
      <NavBar toggleTheme={toggleTheme} />

      <div className="flex justify-center items-center py-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          About Us
        </h2>
      </div>

      <Intro />
      <div>
        <section className="p-10 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Team
          </h2>

          <div className="card w-64 bg-base-100 shadow-md hover:shadow-lg transition duration-300">
            {/* Dominant Image */}
            <figure className="h-40">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </figure>

            {/* Compact Body */}
            <div className="card-body p-3">
              <h2 className="card-title text-base font-semibold mb-1">
                Card Title
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                A short and sweet description that fits well into a compact
                layout.
              </p>

              <div className="card-actions justify-end mt-3">
                <button className="btn btn-xs btn-primary">Buy</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
