import { useState, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "SEO & Digital Marketing",
    image:
      "https://media.istockphoto.com/id/1360521208/photo/businessman-using-a-computer-for-analysis-seo-search-engine-optimization-marketing-ranking.jpg?s=612x612&w=0&k=20&c=UWrxVhwaaUYb7A-3BQHZTJTO7KM7cQYSC6yfcEbkhlk=",
    description:
      "Our professional services are designed to help your business grow both online and offline. We offer tailored solutions including web development, digital marketing, SEO, branding, and IT support. Whether you're launching something new or improving current operations, our team is here to support your growth every step of the way.",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    image:
      "https://digiskillzz.com/wp-content/uploads/2023/03/Earn-these-qualifications-For-a-Digital-Marketing-Job6.png",
    description:
      "Maximize your brand’s reach and engagement with powerful social media marketing strategies. From content creation to scheduling and analytics, we help businesses build strong online presences on platforms like Instagram, Facebook, LinkedIn, and X (formerly Twitter).",
  },
  {
    id: 3,
    title: "Paid Advertising (PPC)",
    image:
      "https://resources.americaneagle.com/aecom-blobs/images/default-source/blog-images/the-role-of-ai-in-ppc-advertising.jpg?sfvrsn=ae969705_3",
    description:
      "Drive instant traffic and measurable results with high-performance ad campaigns. We manage ads across Google, Facebook, Instagram, and YouTube—handling everything from targeting and copy to analytics and ROI optimization.",
  },
  {
    id: 4,
    title: "E-Commerce Website Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FolIC8sL9fBpYkjUcO1HCVrru2CgkrNfHA&s",
    description:
      "Launch your e-commerce venture with a custom-built website designed to drive sales and maximize conversions. We specialize in platforms like Shopify, WooCommerce, and Magento, ensuring seamless user experiences and secure payment integrations.",
  },
  {
    id: 5,
    title: "Strategic Branding",
    image:
      "https://i0.wp.com/www.thesocialmediahat.com/wp-content/uploads/2024/03/Strategic-Branding.png?fit=1920%2C1080&ssl=1",
    description:
      "Define your brand identity and captivate your audience with our strategic branding solutions. We help businesses create compelling brand stories, logos, and visual identities that resonate with their target market.",
  },
];

const Services = ({ id }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextCard = () => {
    setCardIndex((prev) => (prev + 1 + services.length) % services.length);
  };

  const prevCard = () => {
    setCardIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      id={id}
      className="px-4 sm:px-6 md:px-10 py-10 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Services
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap transition-transform duration-500 ease-in-out">
          {loading ? (
            <div className="w-full sm:w-[90%] md:w-[36rem] bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse">
              <div className="w-full h-48 sm:h-64 bg-gray-300 dark:bg-gray-600 rounded-t-lg" />
              <div className="p-4 sm:p-6 space-y-3">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6" />
              </div>
            </div>
          ) : (
            <>
              <div
                className="relative w-28 h-48 opacity-60 scale-90 cursor-pointer hidden md:block"
                onClick={prevCard}
              >
                <img
                  src={
                    services[
                      (cardIndex - 1 + services.length) % services.length
                    ].image
                  }
                  alt="Previous"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="card bg-base-100 shadow-xl transition hover:scale-105 duration-300 w-full sm:w-[90%] md:w-[36rem]">
                <figure>
                  <img
                    src={services[cardIndex].image}
                    alt={services[cardIndex].title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </figure>
                <div className="card-body bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-4 sm:p-6 rounded-b-lg flex flex-col">
                  <h2 className="card-title text-lg sm:text-xl font-semibold text-primary mb-2">
                    {services[cardIndex].title}
                  </h2>
                  <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed overflow-y-auto max-h-40 sm:max-h-48">
                    {services[cardIndex].description}
                  </p>
                </div>
              </div>
              <div
                className="relative w-28 h-48 opacity-60 scale-90 cursor-pointer hidden md:block"
                onClick={nextCard}
              >
                <img
                  src={services[(cardIndex + 1) % services.length].image}
                  alt="Next"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </>
          )}
        </div>

        {/* Buttons */}
        {!loading && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <button
              className="btn btn-outline w-full sm:w-auto"
              onClick={prevCard}
            >
              Previous
            </button>
            <button
              className="btn btn-primary w-full sm:w-auto"
              onClick={nextCard}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
