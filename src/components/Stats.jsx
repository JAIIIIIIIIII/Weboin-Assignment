import React from "react";
import { FaGlobe, FaUsers, FaBriefcase, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: <FaChartLine className="text-indigo-600 text-3xl" />,
    value: "10+ Years",
    label: "In Business",
  },
  {
    icon: <FaGlobe className="text-green-600 text-3xl" />,
    value: "25 Countries",
    label: "Global Presence",
  },
  {
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    value: "100+ Employees",
    label: "Across Departments",
  },
  {
    icon: <FaBriefcase className="text-yellow-600 text-3xl" />,
    value: "500+ Clients",
    label: "Served Worldwide",
  },
];
const yearlyStats = [
  {
    year: "2021",
    revenue: "$1.2M",
    employees: 30,
    clients: 120,
    milestone: "Expanded to 5 countries",
    detail:
      "This year marked our international expansion. We built partnerships in Europe and Asia, adapting our services to diverse markets.",
    image:
      "https://images.unsplash.com/photo-1646579886741-12b59840c63f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBjcmV3JTIwb2YlMjBkZXZlbG9wZXJzJTIwMzB8ZW58MHx8MHx8fDA%3D",
  },
  {
    year: "2022",
    revenue: "$2.8M",
    employees: 50,
    clients: 200,
    milestone: "Launched new platform",
    detail:
      "A major tech leap — we launched our revamped platform with a brand new UI/UX, boosting user retention and satisfaction.",
    image:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGF1bmNoaW5nJTIwZXZlbnQlMjBkZXZlbG9wZXJzfGVufDB8fDB8fHww",
  },
  {
    year: "2023",
    revenue: "$4.5M",
    employees: 80,
    clients: 350,
    milestone: "Acquired startup",
    detail:
      "We acquired a product-led startup that enhanced our AI capabilities and brought a strong engineering team on board.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJ0dXB8ZW58MHx8MHx8fDA%3D",
  },
  {
    year: "2024",
    revenue: "$6.1M",
    employees: 100,
    clients: 500,
    milestone: "Entered Asia market",
    detail:
      "This year focused on localization, with offices set up in India, Singapore, and Japan — and dedicated regional teams.",
    image:
      "https://media.istockphoto.com/id/1488521147/photo/global-network-usa-united-states-of-america-north-america-global-business-flight-routes.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkq0qStfGt-_otOwJgSz6t3Qnhy5r1yPuSDbN5KlgRY=",
  },
];

const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Company Stats
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full">
                {stat.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mt-10 mb-12 text-gray-800 dark:text-white">
        Growth Journey Year by Year
      </h2>

      <div className="relative">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600 z-0" />

        <div className="space-y-16">
          {yearlyStats.map((stat, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative w-full flex flex-col md:flex-row items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-2 w-6 h-6 bg-indigo-600 rounded-full ring-4 ring-white dark:ring-gray-700 z-10 transform -translate-x-1/2" />

                {/* Left or Right Content Blocks */}
                {isLeft ? (
                  <>
                    {/* Detail Box (left side) */}
                    <div className="w-full md:w-1/2 pr-6 md:text-right mb-6 md:mb-0">
                      <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                        <h4 className="text-md font-semibold text-indigo-600 mb-2">
                          About {stat.year}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {stat.detail}
                        </p>
                      </div>
                    </div>

                    {/* Milestone Card (right side) */}
                    <div className="w-full md:w-1/2 pl-6">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img
                          src={stat.image}
                          alt={`Milestone ${stat.year}`}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-5">
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase mb-1">
                            {stat.year}
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                            {stat.milestone}
                          </h3>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            <li>
                              <strong>Revenue:</strong> {stat.revenue}
                            </li>
                            <li>
                              <strong>Employees:</strong> {stat.employees}
                            </li>
                            <li>
                              <strong>Clients:</strong> {stat.clients}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Milestone Card (left side) */}
                    <div className="w-full md:w-1/2 pr-6">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img
                          src={stat.image}
                          alt={`Milestone ${stat.year}`}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-5">
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase mb-1">
                            {stat.year}
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                            {stat.milestone}
                          </h3>
                          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            <li>
                              <strong>Revenue:</strong> {stat.revenue}
                            </li>
                            <li>
                              <strong>Employees:</strong> {stat.employees}
                            </li>
                            <li>
                              <strong>Clients:</strong> {stat.clients}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Detail Box (right side) */}
                    <div className="w-full md:w-1/2 pl-6 md:text-left mt-6 md:mt-0">
                      <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow">
                        <h4 className="text-md font-semibold text-indigo-600 mb-2">
                          About {stat.year}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {stat.detail}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
