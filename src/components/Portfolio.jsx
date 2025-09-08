import React from "react";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
    description:
      "A fully responsive online store with integrated payment gateways.",
  },
  {
    id: 2,
    title: "Mobile App UI",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    description:
      "Sleek and user-friendly mobile app design for a social platform.",
  },
  {
    id: 3,
    title: "Marketing Landing Page",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description:
      "Conversion-focused landing page for a digital marketing campaign.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "Personal portfolio website showcasing projects and skills.",
  },
  {
    id: 5,
    title: "Blog Platform",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    description:
      "A modern blog platform with user authentication and CMS features.",
  },
  {
    id: 6,
    title: "Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description: "Admin dashboard with data visualization and analytics tools.",
  },
];

const PortfolioPreview = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Portfolio Preview
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {portfolioItems.map(({ id, title, image, description }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5" bg->
              <h3 className="text-xl text-gray-600x font-semibold mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPreview;
