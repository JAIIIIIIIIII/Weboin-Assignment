import { useEffect, useState } from "react";
import ServiceSection from "./ServiceSection";
import PortfolioPreview from "./Portfolio";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-500">
      <div className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <img
          src="https://weboin.com/wp-content/uploads/2024/05/WEBOIN-BANNER-2-ai-1.png.webp"
          alt="Logo"
          className="w-32 h-10 object-contain"
        />
        <nav className="flex items-center gap-6">
          <h2 className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-300">
            About
          </h2>
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
            Toggle Theme
          </button>
        </nav>
      </div>

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
              We bridge the gap between businesses and their audience by
              creating meaningful digital experiences that inspire trust,
              loyalty, and growth.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <section className="p-10 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Services
        </h2>
        <div>
          <ServiceSection />
        </div>
      </section>

      <section className="p-10 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          PortFolios
        </h2>
        <div>
          <PortfolioPreview />
        </div>
      </section>

      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Have questions or want to start a project? Reach out to us anytime!
        </p>
        <form className="flex flex-col max-w-md gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
