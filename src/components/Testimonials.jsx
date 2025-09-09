import React from "react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "CEO, FreshTech",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Absolutely amazing service! The team was professional, efficient, and delivered results beyond expectations.",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Marketing Lead, BoldMedia",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "They truly understand digital marketing. Our traffic and engagement improved drastically within weeks.",
  },
  {
    id: 3,
    name: "Linda Patel",
    role: "Founder, EcoMarket",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "A game-changer for our business. Their creativity and dedication helped us launch with confidence.",
  },
];

const TestimonialSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const skeletonArray = Array(testimonials.length).fill(null);

  return (
    <section className="p-10 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Testimonials
      </h2>
      <div>
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Reviews By Our Clients
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(loading ? skeletonArray : testimonials).map((item, index) => (
            <div
              key={item?.id || index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 dark:bg-gray-800"
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  {loading ? (
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    {loading ? (
                      <>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2 animate-pulse" />
                        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16 animate-pulse" />
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold text-lg text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </>
                    )}
                  </div>
                </div>

                {loading ? (
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 animate-pulse" />
                  </div>
                ) : (
                  <p className="text-gray-400 italic">"{item.message}"</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
