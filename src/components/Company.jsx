import { motion } from "framer-motion";

const features = [
  {
    emoji: "🚀",
    title: "Proven Results",
    description: "500+ campaigns with strong ROI and growth outcomes.",
    bg: "bg-indigo-50 dark:bg-indigo-900",
    text: "text-indigo-700 dark:text-indigo-300",
  },
  {
    emoji: "👩‍💼",
    title: "Expert Team",
    description: "Professionals with deep marketing expertise and vision.",
    bg: "bg-green-50 dark:bg-green-900",
    text: "text-green-700 dark:text-green-300",
  },
  {
    emoji: "📊",
    title: "Data-Driven",
    description: "Every decision backed by data, not guesswork.",
    bg: "bg-yellow-50 dark:bg-yellow-900",
    text: "text-yellow-700 dark:text-yellow-300",
  },
  {
    emoji: "🤝",
    title: "Client First",
    description: "We prioritize long-term success and honest partnerships.",
    bg: "bg-pink-50 dark:bg-pink-900",
    text: "text-pink-700 dark:text-pink-300",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Company = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-10 max-w-7xl mx-auto rounded-lg my-10 bg-slate-700 dark:bg-gray-300 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 dark:text-gray-800 mb-12">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ${feature.bg}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="text-4xl mb-4">{feature.emoji}</div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-2 ${feature.text}`}
            >
              {feature.title}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Company;
