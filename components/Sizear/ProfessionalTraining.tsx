"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import MajorAcademicShortCourses from "./MajorAcademicShortCourses";

const trainings = [
  {
    title: "Systematic Review and Meta Analysis in Health Research",
    organization: "James P Grant School of Public Health",
    year: "2025",
  },
  {
    title: "Health Economics and Non-Communicable Diseases Policies",
    organization: "James P Grant School of Public Health",
    year: "2023",
  },
  {
    title: "Health Economics Policy Analysis",
    organization: "icddr,b",
    year: "2023",
  },
  {
    title: "Introduction to R Training",
    organization: "CPSD, James P Grant School of Public Health",
    year: "2023",
  },
  {
    title: "Advanced Professional Training in Sustainable Urban Sanitation",
    organization: "NIRAS & WaterAid",
    year: "Sweden (2017) & Cambodia (2018)",
  },
  {
    title: "Training of Trainers (ToT)",
    organization: "WaterAid Bangladesh",
    year: "2018",
  },
  {
    title: "Leadership and People Management",
    organization: "MDF Bangladesh",
    year: "2018",
  },
  {
    title: "Implementing Health Research",
    organization: "WHO, UNICEF & James P Grant School of Public Health",
    year: "2017",
  },
  {
    title: "Mixed Method Technique",
    organization: "James P Grant School of Public Health",
    year: "2014",
  },
];

export default function ProfessionalTraining() {
  const colors = [
    "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
  ];
  return (
    <div className=" bg-slate-100 py-16">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16">
        <h3 className="text-2xl md:text-2xl font-bold  pt-16 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Professional Development
        </h3>

        <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] py-8">
          Training
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {trainings.map((item, index) => (
            <motion.div
              key={index}
              // whileHover={{ borderColor: "#FFCE00" }}
              className={`flex items-start space-x-4 bg-white shadow-sm rounded-md p-4 border-l-4 border-green-500 group transition-all duration-300 ${
                colors[index % colors.length]
              }`}
            >
              <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-md text-gray-700 group-hover:text-black">
                  {item.organization}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-black">
                  {item.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <MajorAcademicShortCourses />
      </div>
    </div>
  );
}
