"use client";

import { motion } from "framer-motion";

import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

import NextButton from "@/components/Shared/NextButton";

const bookmarksData = [
  {
    title: "General Reports",
    href: "/resources/reports/general-reports",
    description: "",
    Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
  },
  {
    title: "Topic wise reports",
    href: "/resources/reports/topic-wise-reports",
    description: "",
    Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
  },
];

// Define animation variants
// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

const Reports = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Title Section */}
      <div className="relative w-full h-[85px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Reports
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 mt-2">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            Reports are a fundamental output of interventions and initiatives,
            serving as a cornerstone for organizations in the global development
            sector. Given the mandatory and periodic nature of these
            publications, the volume of reports continues to grow rapidly. This
            section organizes reports by topic, including organizational
            reports, key policy briefs, and presentations, providing users with
            a systematic and accessible resource.
          </p>

          {/* general and topic wise reports */}

          <div className="max-w-screen-lg mx-auto pt-8 pb-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {bookmarksData.map((bookmark, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
                transition={{ duration: 0.2, delay: index * 0.1 }} // Staggered effect
              >
                <BookMarksSectionCard
                  title={bookmark.title}
                  description={bookmark.description}
                  href={bookmark.href}
                  Icon={bookmark.Icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <NextButton
        href="/resources/books"
        text="Next"
        className="bg-[#00DFC0] text-black mb-8"
      />
    </div>
  );
};

export default Reports;
