import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Team from "./Team";
import Stats from "./Stats";
import Cta from "./Cta";

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
      <Team />
      <Stats />
      <Cta />
    </div>
  );
};

export default About;
