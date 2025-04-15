"use client";
import { motion } from "framer-motion";

const EducationalJourney = () => {
  const educationData = [
    {
      title: "Health Policy and Financing",
      id: "May 2024",
      organization:
        "KIT Royal Tropical Institute, Vrije Universiteit Amsterdam, the Netherlands",
      description:
        "A three-week, three-credit, on-site short certificate course focused on health policy and financing strategies.",
    },
    {
      title: "Master of Science (MSc) in Urban Management and Development",
      id: "Oct 2020 – Sep 2021",
      organization: "Erasmus University Rotterdam, Netherlands",
      description:
        "A master's program emphasizing urban management, planning, and development policies.",
    },
    {
      title: "Master of Public Health (MPH)",
      id: "Jan 2014 – Jan 2015",
      organization:
        "James P Grant School of Public Health, BRAC University, Bangladesh",
      description:
        "Specialized in public health, covering epidemiology, health policy, and community health interventions.",
    },
    {
      title: "Master of Social Science (MSS) in Anthropology",
      id: "Mar 2010 – Apr 2011",
      organization: "University of Rajshahi, Bangladesh",
      description:
        "Focused on social research, cultural anthropology, and human behavior analysis.",
    },
    {
      title: "Bachelor of Social Science (BSS) in Anthropology",
      id: "Feb 2006 – Feb 2010",
      organization: "University of Rajshahi, Bangladesh",
      description:
        "Undergraduate studies in anthropology with an emphasis on social structures and ethnographic research.",
    },
  ];

  const colors = [
    "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
  ];

  return (
    <div className="pt-16">
      <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
        Educational Journey
      </h3>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-5xl mx-auto"
      >
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            // whileHover={{ borderColor: "#FFCE00" }}
            className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-center space-x-6 group ${
              colors[index % colors.length]
            } transition-all duration-300`}
          >
            {/* Left Side: Date */}
            <div className="w-1/4">
              <h3 className="text-lg font-semibold text-gray-900">{item.id}</h3>
            </div>

            {/* Right Side: Title & Organization */}
            <div className="w-3/4">
              <p className="text-md font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-gray-600 text-sm group-hover:text-black">
                {item.organization}
              </p>
              <p className="text-gray-600 text-sm mt-1 group-hover:text-black">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EducationalJourney;
