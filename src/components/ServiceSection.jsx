import { useState } from "react";

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
];

const ServiceCard = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const nextCard = () => {
    setCardIndex((prev) => (prev + 1) % services.length);
  };

  const prevCard = () => {
    setCardIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div
        className="card bg-base-100 shadow-xl transition hover:scale-105 duration-300"
        style={{ width: "36rem", minHeight: "28rem" }} // increased width here
      >
        <figure>
          <img
            src={services[cardIndex].image}
            alt={services[cardIndex].title}
            className="w-full h-64 object-cover"
          />
        </figure>

        {/* Fixed height card body */}
        <div className="card-body bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-b-lg h-48 flex flex-col">
          <h2 className="card-title text-xl font-semibold text-primary">
            {services[cardIndex].title}
          </h2>

          {/* Paragraph with scroll if overflow */}
          <p className="text-base dark:text-gray-400 text-black leading-relaxed mt-2 overflow-y-auto flex-grow">
            {services[cardIndex].description}
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="btn btn-outline btn-md" onClick={prevCard}>
          Previous
        </button>
        <button className="btn btn-primary btn-md" onClick={nextCard}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
