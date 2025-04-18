"use client";
import NextButton from "@/components/Shared/NextButton";
import { motion } from "framer-motion";

const DataInGlobalHealth = () => {
  const data = [
    {
      fact: "Global average life expectancy is approximately 73 years.",
    },
    {
      fact: "1 in 700 babies are born with a cleft lip and/or palate globally. Clefts cause difficulties eating, breathing, hearing, and speaking.",
    },
    {
      fact: "1 in 3 women and girls—about 1.3 billion worldwide—experiences gender-based violence over their lifetime.",
    },
    {
      fact: "Worldwide obesity has nearly tripled since 1975, with 650 million adults classified as obese in 2022.",
    },
    {
      fact: "5 billion people worldwide lack access to life-saving surgical care.",
    },
    {
      fact: "In the United States, 1 in 4 women will have an abortion by age 45.",
    },
    {
      fact: "More than 70 percent of adult men smoke in Indonesia, a testament to how commercial advertising harms the population's health.",
    },
    {
      fact: "Climate change is projected to cause 250,000 additional deaths annually between 2030 and 2050 due to malnutrition, malaria, diarrhea, and heat stress.",
    },
    {
      fact: "Depression is a leading cause of disability worldwide, affecting 280 million people. Anxiety disorders affect 301 million people.",
    },
  ];

  const colors = [
    "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12 pb-24">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2D8CBB]">
          Data in Global Health
        </h1>
      </div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-5xl mx-auto"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            // whileHover={{ borderColor: "#FFCE00" }}
            className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-center space-x-6 group ${
              colors[index % colors.length]
            } transition-all duration-300`}
          >
            {/* Left Side: Date */}
            {/* <div className="w-1/4">
              <h3 className="text-lg font-semibold text-gray-900">{item.id}</h3>
            </div> */}

            {/* Right Side: Title & Organization */}
            <div className="w-3/4">
              <p className="text-lg font-semibold text-gray-800">{item.fact}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <NextButton
        href="/news/do-you-know"
        text="Next"
        className="bg-[#00DFC0] text-black mt-16"
      />
    </div>
  );
};

export default DataInGlobalHealth;
