import React from "react";

const Information = () => {
  return (
    <section className="bg-slate-800 dark:bg-slate-200 py-16 px-4 sm:px-6 rounded-lg max-w-7xl mx-auto mt-20 text-center text-white transition-colors duration-500">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-black">
            Leading Digital Marketing Agency in India
          </h2>
          <p className="text-indigo-200 mb-6 dark:text-gray-700">
            At Weboin, we specialize in delivering top-notch digital marketing
            solutions that drive growth and maximize ROI. Our team of experts is
            dedicated to helping businesses of all sizes succeed in the digital
            landscape through innovative strategies and cutting-edge
            technologies.
          </p>
          <p className="text-indigo-200 dark:text-gray-700">
            Whether you're looking to enhance your online presence, increase
            website traffic, or boost conversions, Weboin has the expertise and
            experience to help you achieve your goals. Partner with us to unlock
            the full potential of your digital marketing efforts and take your
            business to new heights.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xl">
          <img
            src="https://digifame.in/wp-content/uploads/2023/12/What-is-Digital-Marketing-768x512-1.jpg"
            alt="Digital Marketing"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Information;
