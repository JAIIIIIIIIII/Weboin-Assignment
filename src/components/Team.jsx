import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ava Thompson",
      role: "Digital Marketing Specialist",
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Liam Carter",
      role: "SEO Analyst",
      picture: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sophie Bennett",
      role: "Social Media Manager",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Ethan Walker",
      role: "PPC Expert",
      picture: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Isabella King",
      role: "Content Strategist",
      picture: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    {
      name: "Noah Scott",
      role: "Email Marketing Manager",
      picture: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Mia Lewis",
      role: "UX Designer",
      picture: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Lucas Young",
      role: "Web Developer",
      picture: "https://randomuser.me/api/portraits/men/61.jpg",
    },
  ];

  return (
    <section className="p-6 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg my-10 transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        Our Team
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {teamMembers.map(({ name, role, picture }, index) => (
          <div key={index} className="text-center">
            <div className="w-28 h-28 mx-auto overflow-hidden rounded-full shadow-md">
              <img
                src={picture}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
