"use client";
import { motion } from "framer-motion";
import { colors } from "@/lib/utils";

const CareerAndScholarship = () => {
  const articles = [
    {
      title: "How to get the fully-funded scholarship",
      year: "8 October 2020",
      link: "https://www.tbsnews.net/feature/pursuit/how-get-fully-funded-scholarship-142642", // Replace with the correct link
      source: "The Business Standard",
    },
    {
      title: "জাপান সরকার ও বিশ্বব্যাংকের বৃত্তি নিয়ে কিছুকথা",
      year: "8 October 2020",
      link: "https://www.prothomalo.com/education/scholarship/%E0%A6%9C%E0%A6%BE%E0%A6%AA%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%83%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%95%E0%A6%BF%E0%A6%9B%E0%A7%81-%E0%A6%95%E0%A6%A5%E0%A6%BE?fbclid=IwAR0uUK3jJj5syTq4zmKCPNvBi4fqAK8BPm3nk-B408IMQgybc-61hO2eS9M", // Replace with the correct link
      source: "Prothom Alo",
    },
  ];
  return (
    <div className="pt-16">
      <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
        Career and Scholarship
      </h3>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {articles.map((article, index) => (
          <motion.div
            key={index}
            whileHover={{ borderColor: "#2196F3" }}
            className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-green-500 flex items-start space-x-6 group transition-all duration-300 ${
              colors[index % colors.length]
            }`}
          >
            {/* Left Side: Year */}
            <div className="w-1/4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                {article.year}
              </h3>
            </div>

            {/* Right Side: Title & Source */}
            <div className="w-3/4">
              <p className="text-md font-semibold text-gray-800 group-hover:text-black">
                {/* Clickable Title */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-md transition duration-200 group-hover:text-black"
                >
                  {article.title}
                </a>
              </p>
              <p className="text-gray-600 text-sm group-hover:text-black">
                {article.source}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CareerAndScholarship;
