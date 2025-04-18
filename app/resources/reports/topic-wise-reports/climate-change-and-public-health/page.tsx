"use client";

import NextButton from "@/components/Shared/NextButton";
// import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import Image from "next/image";

import { FaDownload, FaBookOpen } from "react-icons/fa";
import FallbackPdfImage from "@/public/fallback-pdf.jpg";

const pdfs = [
  {
    title: "Climate Afflictions 2021_WB",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Afflictions 2021_WB.pdf",
  },
  {
    title:
      "Climate Change Impacts on Human Health and the Health Sector 2022_USAID",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Change Impacts on Human Health and the Health Sector 2022_USAID.pdf",
  },
  {
    title: "Climate Finance Guide 2020",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Finance Guide 2020.pdf",
  },
  {
    title: "Climate Finance in Bangladesh 2017_USAID",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Finance in Bangladesh 2017_USAID.pdf",
  },
  {
    title:
      "Climate Financing for Sustainable Development of Bangladesh 2023_MOF",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Financing for Sustainable Development of Bangladesh 2023_MOF.pdf",
  },
  {
    title:
      "Estimates of the Impact of Climate Change on Extreme Poverty 2020_WB",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Estimates of the Impact of Climate Change on Extreme Poverty 2020_WB.pdf",
  },
  {
    title: "Handbook on Climate Chnage Impact 2024",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Handbook on Climate Chnage Impact 2024.pdf",
  },
  {
    title: "Health and Climate Change_Lancet Countdown 2022",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Health and Climate Change_Lancet Countdown 2022.pdf",
  },
  {
    title: "IDU08d9e0a9203ad50400d09a6e078489562e7e8",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/IDU08d9e0a9203ad50400d09a6e078489562e7e8.pdf",
  },
  {
    title:
      "Impacts of climate change on health in Bangladesh Policy brief 2023",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Impacts of climate change on health in Bangladesh Policy brief 2023.pdf",
  },
  {
    title: "People in a Changing Climate 2024_WB",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/People in a Changing Climate 2024_WB.pdf",
  },
  {
    title: "Quantifying the Impact of Climate Change 2024_WB",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Quantifying the Impact of Climate Change 2024_WB.pdf",
  },
  {
    title:
      "Socioeconomic Impact on Climate Change Developing-Countries Next Decades 2024_CGD",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/Socioeconomic Impact on Climate Change Developing-Countries Next Decades 2024_CGD.pdf",
  },
  {
    title: "The Impact of Heat on Health and the Economy of Bangladesh 2024_WB",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/The Impact of Heat on Health and the Economy of Bangladesh 2024_WB.pdf",
  },
  {
    title: "What Can I Do about the Climate Emergency",
    filePath:
      "/resources/TopicWiseReports/Climate-change-and-public-health/What Can I Do about the Climate Emergency.pdf",
  },
];

const ClimateChangeAndPublicHealth = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">
              Climate Change And Public Health
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
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

          <div className="max-w-screen-xl mx-auto px-6 md:px-16 pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
              {pdfs.map((pdf, index) => {
                // const imageName = pdf.title + ".png";
                // const imagePath = `/essential-reading-list/${imageName}`;

                return (
                  <div
                    key={index}
                    className=" rounded-lg shadow-md overflow-hidden border border-gray-200 w-[350px] sm:w-[400px]"
                  >
                    <div className="w-[350px] sm:w-[400px] h-[450px]">
                      <Image
                        src={FallbackPdfImage.src}
                        alt={pdf.title}
                        width={350}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-4 flex flex-col justify-between">
                      <h3 className="font-semibold text-md text-gray-800 mb-4 h-10">
                        {pdf.title}
                      </h3>
                      <div className="flex gap-2 mt-auto">
                        <a
                          href={pdf.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-md"
                        >
                          <FaBookOpen /> Read
                        </a>
                        <a
                          href={pdf.filePath}
                          download
                          className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md"
                        >
                          <FaDownload /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <NextButton
        href="/resources/reports/topic-wise-reports/health-financing"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ClimateChangeAndPublicHealth;
