"use client";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const AcademicAwards = () => {
  const awards = [
    {
      title: "Joint Japan/World Bank Scholarship",
      year: "2020-21",
      description:
        "For Masters in Erasmus University Rotterdam, The Netherlands",
    },
    {
      title: "Next Generation of Public Health Experts Scholarship",
      year: "2014-15",
      description:
        "Funded by USAID for MPH program in James P Grant School of Public Health, BRAC University, Bangladesh",
    },
  ];

  const colors = [
    // "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
  ];

  return (
    <div className="py-16 mt-8 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-8 rounded-md shadow-sm">
      <h3 className="text-xl font-bold  font-roboto text-[#0070c0]  pb-6 ">
        🎓{" "}
        <span className="decoration-[#ef4444] underline underline-offset-[6px]">
          Academic Awards
        </span>
      </h3>

      {/* Awards List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            // whileHover={{ borderColor }}
            className={`flex items-center space-x-6 bg-white shadow-sm rounded-lg p-5 border-l-4 border-yellow-500 transition-all duration-300 group ${
              colors[index % colors.length]
            }`}
          >
            <FaAward className="text-yellow-500 text-4xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600">{award.year}</p>
              <p className="text-sm text-gray-700 italic">
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AcademicAwards;
