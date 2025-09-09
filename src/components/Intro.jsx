import React from "react";

const Intro = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/05/39/65/40/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg"
            alt="Digital Marketing Team"
            className="w-full max-h-[450px] rounded-xl shadow-xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
            Elevate Your Brand with{" "}
            <span className="text-blue-600">Weboin</span>
          </h3>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              At{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                Weboin
              </span>
              , we help ambitious brands thrive in the digital world. Our team
              of experienced marketers, designers, and strategists builds
              data-driven campaigns that generate measurable results.
            </p>

            <p>
              From SEO and content marketing to social media and paid
              advertising, we deliver full-spectrum digital services tailored to
              your unique business goals.
            </p>

            <p>
              Whether you're a startup building your presence or a scaling brand
              aiming for the next level, we bring creativity, tools, and
              strategic thinking that deliver real impact.
            </p>

            <p className="italic text-blue-700 dark:text-blue-400 font-semibold">
              Let’s grow your brand together — one click at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
