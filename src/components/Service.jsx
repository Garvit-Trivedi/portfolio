import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern technologies like React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic, APIs, and databases using Node.js, Express, and MongoDB.",
  },
  {
    id: 3,
    title: "Database & Deployment",
    description: "Managing databases efficiently and deploying applications on cloud platforms like Vercel and Render.",
  },
  {
    id: 4,
    title: "Tools & Version Control",
    description: "Using Git, GitHub, and CI/CD pipelines to streamline development and collaboration.",
  },
   {
    id: 5,
    title: "UI/UX Design (Figma)",
    description: "Designing intuitive and engaging user experiences using Figma.",
  },
  {
    id: 6,
    title: "Problem Solving",
    description: "Analyzing and solving complex coding challenges efficiently.",
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 w-full" id="service">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 w-full">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`relative p-6 rounded-xl bg-gray-800 bg-opacity-90 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-green-400 cursor-pointer`}
              onClick={() => handleServiceClick(service.id)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-right text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400">
                {service.id}
              </div>

              <h3 className="mt-2 text-2xl font-bold text-gray-100">{service.title}</h3>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: selectedService === service.id ? 1 : 0, height: selectedService === service.id ? "auto" : 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mt-3 text-gray-300 text-lg">{service.description}</p>
                <button className="mt-4 text-green-400 hover:text-blue-400 transition-all">
                  Read Less
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;