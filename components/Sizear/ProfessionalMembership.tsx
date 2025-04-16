"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobe,
  FaHandsHelping,
  FaCertificate,
} from "react-icons/fa";

const memberships = [
  {
    id: "PHFBD-GM01202039",
    title: "Organizing Secretary",
    organization: "Public Health Foundation Bangladesh",
    description:
      "A key volunteer entity in Bangladesh connecting public health professionals to promote public health issues.",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
  },
  {
    id: "70096085",
    title: "Member",
    organization: "Health System Global",
    description:
      "A society that convenes researchers, policymakers, and implementers worldwide to develop the field of health systems.",
    icon: <FaGlobe className="text-green-500 text-4xl" />,
  },
  {
    id: "N/A",
    title: "Co-Convenor",
    organization: "Alliance for Health Reforms",
    description:
      "An entity of public health experts and emerging professionals dedicated to strengthening Bangladesh’s health system through reform.",
    icon: <FaHandsHelping className="text-red-500 text-4xl" />,
  },
  {
    id: "N/A",
    title: "Life Member",
    organization: "Public Health Association of Bangladesh",
    description:
      "A volunteer platform advocating with the government to improve Bangladesh's public health scenario.",
    icon: <FaCertificate className="text-purple-500 text-4xl" />,
  },
];

export default function ProfessionalMemberships() {
  const colors = [
    "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
  ];

  return (
    <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16">
      <h3 className="text-2xl md:text-2xl font-bold  pt-16 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00] pb-4">
        Professional Membership and Engagement
      </h3>

      <p className="mb-8">
        As a passionate public health leader, I serve as the Organizing
        Secretary of the Public Health Foundation of Bangladesh (PHFBD), a key
        organization promoting evidence-based public health knowledge
        nationally. I played a pivotal role in organizing the 8th, 9th, and 10th
        International Public Health Conferences in 2021, 2023, and 2024, along
        with several national and international events. Additionally, I am an
        active member of Health Systems Global, the Public Health Association of
        Bangladesh, and the Alliance for Health Reforms.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-5xl mx-auto"
      >
        {memberships.map((item, index) => (
          <motion.div
            key={index}
            // whileHover={{ borderColor: "#FFCE00" }}
            className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-center space-x-6 group transition-all duration-300 ${
              colors[index % colors.length]
            }`}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="flex w-full justify-between items-start">
              {/* Left Side: Title & ID */}
              <div className="w-1/3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                  {item.title}
                </h3>
                {item.id !== "N/A" && (
                  <p className="text-sm text-gray-500 group-hover:text-black">
                    <strong>ID:</strong> {item.id}
                  </p>
                )}
              </div>

              {/* Right Side: Organization & Description */}
              <div className="w-2/3">
                <p className="text-md font-medium text-gray-700 group-hover:text-black">
                  {item.organization}
                </p>
                <p className="text-gray-600 text-sm mt-1 group-hover:text-black">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
