"use client";

import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
// import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";

const bookmarksData = [
  {
    title: "Climate change and public health",
    href: "/resources/reports/topic-wise-reports/climate-change-and-public-health",
    description: "",
    Icon: "/topic-wise-report/Climate change and public health.jpg",
  },
  {
    title: "Health Financing",
    href: "/resources/reports/topic-wise-reports/health-financing",
    description: "",
    Icon: "/topic-wise-report/Health Financing.jpg",
  },
  {
    title: "Health Policy & Analysis",
    href: "/resources/reports/topic-wise-reports/health-policy-and-analysis",
    description: "",
    Icon: "/topic-wise-report/Health Policy and Analysis.jpg",
  },
  {
    title: "Health workers & human resources",
    href: "/resources/reports/topic-wise-reports/health-workers-and-human-resources",
    description: "",
    Icon: "/topic-wise-report/Health workers.jpg",
  },
  {
    title: "Maternal and child health",
    href: "/resources/reports/topic-wise-reports/maternal-and-child-health",
    description: "",
    Icon: "/topic-wise-report/Maternal and child health.jpg",
  },
  {
    title: "Mental Health",
    href: "/resources/reports/topic-wise-reports/mental-health",
    description: "",
    Icon: "/topic-wise-report/Mental health.jpg",
  },
  {
    title: "NCDs",
    href: "/resources/reports/topic-wise-reports/ncds",
    description: "",
    Icon: "/topic-wise-report/NCDs.jpg",
  },
  {
    title: "Nutrition",
    href: "/resources/reports/topic-wise-reports/nutrition",
    description: "",
    Icon: "/topic-wise-report/Nutrition.jpg",
  },
  {
    title: "Primary health care",
    href: "/resources/reports/topic-wise-reports/primary-health-care",
    description: "",
    Icon: "/topic-wise-report/Primary health care.jpg",
  },
  {
    title: "Strategic Purchasing in Health",
    href: "/resources/reports/topic-wise-reports/strategic-purchasing-in-health",
    description: "",
    Icon: "/topic-wise-report/Strategic purchasing in health.jpg",
  },
  {
    title: "Universal Health Coverage",
    href: "/resources/reports/topic-wise-reports/universal-health-coverage",
    description: "",
    Icon: "/topic-wise-report/Universal health coverage.jpg",
  },
];

// const pdfs = [
//   {
//     title: "A System of Health Accounts 2011",
//     filePath:
//       "/resources/Essential-Reading-List/A-System-of-Health-Accounts-2011.pdf",
//   },
//   {
//     title: "Alma Ata Conference Report on PHC_WHO 1978",
//     filePath:
//       "/resources/Essential-Reading-List/Alma-Ata-Conference-Report-on-PHC_WHO-1978.pdf",
//   },
//   {
//     title: "Basic Epidemiology_WHO 2006",
//     filePath:
//       "/resources/Essential-Reading-List/Basic Epidemiology_WHO 2006.pdf",
//   },
//   {
//     title: "Delivering Quality Health Services_WHO 2018",
//     filePath:
//       "/resources/Essential-Reading-List/Delivering Quality Health Services_WHO 2018.pdf",
//   },
//   {
//     title: "Everybody's Business- Strengthening Health Systems_WHo 2007",
//     filePath:
//       "/resources/Essential-Reading-List/Everybody's Business- Strengthening Health Systems_WHo 2007.pdf",
//   },
//   {
//     title: "Guns, Germs and Steel - Jared Diamond_1997",
//     filePath:
//       "/resources/Essential-Reading-List/Guns, Germs and Steel - Jared Diamond_1997.pdf",
//   },
//   {
//     title: "Health Systems - Improving Performance_WHO_2000",
//     filePath:
//       "/resources/Essential-Reading-List/Health Systems - Improving Performance_WHO_2000.pdf",
//   },
//   {
//     title: "Health Systems Building Blocks_WHO 2010",
//     filePath:
//       "/resources/Essential-Reading-List/Health Systems Building Blocks_WHO 2010.pdf",
//   },
//   {
//     title: "Health Systems Financing_WHO 2010",
//     filePath:
//       "/resources/Essential-Reading-List/Health Systems Financing_WHO 2010.pdf",
//   },
//   {
//     title: "International Profiles of Health Care Systems_2020",
//     filePath:
//       "/resources/Essential-Reading-List/International Profiles of Health Care Systems_2020.pdf",
//   },
//   {
//     title: "Investing in Health_WDR 1993",
//     filePath:
//       "/resources/Essential-Reading-List/Investing in Health_WDR 1993.pdf",
//   },
//   {
//     title: "Now More Than Ever-PHC_WHO 2008",
//     filePath:
//       "/resources/Essential-Reading-List/Now More Than Ever-PHC_WHO 2008.pdf",
//   },
//   {
//     title: "Tracking Universal health Coverage_WHO 2015",
//     filePath:
//       "/resources/Essential-Reading-List/Tracking Universal health Coverage_WHO 2015.pdf",
//   },
// ];

const TopicWiseReports = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[80px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Topic wise Reports
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            Reports are a fundamental output of interventions and initiatives,
            serving as a cornerstone for organizations in the global development
            sector. Given the mandatory and periodic nature of these
            publications, the volume of reports continues to grow rapidly. This
            section organizes reports by topic, including organizational
            reports, key policy briefs, and presentations, providing users with
            a systematic and accessible resource.
          </p> */}

          {/* general and topic wise reports */}

          <div className="max-w-screen-xl mx-auto pt-8 pb-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarksData.map((bookmark, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                }} // Staggered effect
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
    </div>
  );
};

export default TopicWiseReports;
