"use client";
import { colors } from "@/lib/utils";
import { motion } from "framer-motion";

const OpinionArticle = () => {
  const opinionArticle = {
    year: "2024",
    title:
      "Urgent need to address increasing caesarean section rates in lower-middle-income countries like Bangladesh",
    journal: "Frontiers in Global Women’s Health, Volume 5",
    link: "https://doi.org/10.3389/fgwh.2024.1365504",
    titleLink: "#", // Update this with the actual title link
  };

  return (
    <div className="pt-16">
      <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
        Opinion Article
      </h3>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // whileHover={{ borderColor: "#FFCE00" }}
        className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-start space-x-4 max-w-5xl mx-auto group ${colors[0]}`}
      >
        <div className="w-1/4">
          <h3 className="text-lg font-semibold text-gray-900">
            {opinionArticle.year}
          </h3>
        </div>
        <div className="w-3/4">
          <a
            href={opinionArticle.titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-semibold text-gray-800 hover:underline hover:bg-blue-500 hover:text-white transition duration-200 rounded"
          >
            {opinionArticle.title}
          </a>
          <p className="text-gray-600 text-sm">{opinionArticle.journal}</p>
          <a
            href={opinionArticle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm group-hover:text-black"
          >
            {opinionArticle.link}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default OpinionArticle;
