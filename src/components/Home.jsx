import { useEffect, useState } from "react";
import ServiceSection from "./ServiceSection";
import PortfolioPreview from "./Portfolio";
import TestimonialSection from "./Testimonials";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";

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
      <NavBar toggleTheme={toggleTheme} />

      <Hero />

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
      <section className="p-10 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <div>
          <TestimonialSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
