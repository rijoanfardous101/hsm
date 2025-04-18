"use client";

import NextButton from "@/components/Shared/NextButton";
import Image from "next/image";
// import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

import { FaDownload, FaBookOpen } from "react-icons/fa";
import FallbackPdfImage from "@/public/fallback-pdf.jpg";

const pdfs = [
  {
    title: "Asian Development Outlook-2024",
    filePath: "/resources/GeneralReports/Asian Development Outlook-2024.pdf",
  },
  {
    title: "Child, Food and Nutrition",
    filePath: "/resources/GeneralReports/Child, Food and Nutrition.pdf",
  },
  {
    title: "Cost Effectiveness of Health Aid 2024",
    filePath:
      "/resources/GeneralReports/Cost Effectiveness of Health Aid 2024.pdf",
  },
  {
    title: "Finance and Prosperity 2024",
    filePath: "/resources/GeneralReports/Finance and Prosperity 2024.pdf",
  },
  {
    title: "Global Tuberculosis Report 2024",
    filePath: "/resources/GeneralReports/Global Tuberculosis Report 2024.pdf",
  },
  {
    title: "Health & Climate Change_Lancet Countdown 2024",
    filePath:
      "/resources/GeneralReports/Health & Climate Change_Lancet Countdown 2024.pdf",
  },
  {
    title: "Humanitarian Action Overview 2024",
    filePath: "/resources/GeneralReports/Humanitarian Action Overview 2024.pdf",
  },
  {
    title: "Impact of Climate Change on Human Health_2024",
    filePath:
      "/resources/GeneralReports/Impact of Climate Change on Human Health_2024.pdf",
  },
  {
    title: "International Debt Report 2024",
    filePath: "/resources/GeneralReports/International Debt Report 2024.pdf",
  },
  {
    title: "Pathways out of the Polycrisis",
    filePath: "/resources/GeneralReports/Pathways out of the Polycrisis.pdf",
  },
  {
    title: "Sustainable Development Report 2024",
    filePath:
      "/resources/GeneralReports/Sustainable Development Report 2024.pdf",
  },
  {
    title: "The Global Risks Report 2024",
    filePath: "/resources/GeneralReports/The Global Risks Report 2024.pdf",
  },
  {
    title: "World Bank in Bangladesh 2024",
    filePath: "/resources/GeneralReports/World Bank in Bangladesh 2024.pdf",
  },
  {
    title: "World Development Report 2024",
    filePath: "/resources/GeneralReports/World Development Report 2024.pdf",
  },
  {
    title: "World Hapiness Report 2024",
    filePath: "/resources/GeneralReports/World Hapiness Report 2024.pdf",
  },
  {
    title: "World Health Statistics 2024",
    filePath: "/resources/GeneralReports/World Health Statistics 2024.pdf",
  },
];

const GeneralReports = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              General Reports
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

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
                {pdfs.map((pdf, index) => {
                  // const imageName = pdf.title + ".png";
                  // const imagePath = `/general-reports/${imageName}`;

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
                          className="w-full h-full object-cover"
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
      </div>
      <NextButton
        href="/resources/reports/topic-wise-reports"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default GeneralReports;
