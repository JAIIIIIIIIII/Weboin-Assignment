import NavBar from "./NavBar";
import Intro from "./Intro";
import Team from "./Team";
import Stats from "./Stats";
import Cta from "./Cta";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-500 pt-16">
      <NavBar />

      <header className="flex justify-center items-center py-8 px-4 sm:px-6 md:py-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-center">
          About Us
        </h2>
      </header>

      <main className="px-4 sm:px-6 md:px-10">
        <Intro />
        <Team id="team" />
        <Stats />
        <Cta />
      </main>
    </div>
  );
};

export default About;
