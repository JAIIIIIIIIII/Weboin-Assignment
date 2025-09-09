import Services from "./ServiceSection";
import PortfolioPreview from "./Portfolio";
import TestimonialSection from "./Testimonials";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import Information from "./Information";
import Company from "./Company";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-500">
      <NavBar />

      <main>
        <Hero />
        <Company />
        <Services id="services" />
        <PortfolioPreview />
        <Information />
        <TestimonialSection />
      </main>

      <Footer id="footer" />
    </div>
  );
};

export default Home;
