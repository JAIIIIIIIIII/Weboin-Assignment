import React from "react";

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
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Reviews By Our Clients
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ id, name, role, image, message }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 dark:bg-gray-800"
          >
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-white">{name}</h3>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{message}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
