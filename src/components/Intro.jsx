import React from "react";

const Intro = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-12">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 animate-fade-in">
        <div className="w-full md:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/05/39/65/40/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg"
            alt="Digital Marketing Team"
            className="w-full h-[450px] rounded-xl shadow-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 ">
            Elevate Your Brand with Weboin
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed space-y-4">
            At <span className="font-semibold text-blue-700">Weboin</span>, we
            are passionate about helping brands grow in the digital world. Our
            team of experienced marketers, designers, and strategists creates
            data-driven campaigns that deliver measurable results.
            <br />
            <br />
            From SEO and content marketing to social media and paid ads, we
            offer full-spectrum digital marketing services tailored to your
            business goals. Our mission? To connect your brand with the right
            audience through impactful digital experiences.
            <br />
            <br />
            Whether you're a startup building your presence or a growing company
            scaling operations, we bring creativity, tools, and strategic
            thinking that make a difference.
            <br />
            <br />
            <span className="italic text-blue-700 font-semibold">
              Let’s grow your brand together — one click at a time.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
