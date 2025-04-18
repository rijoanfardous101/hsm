"use client";

import Image from "next/image";

import { FaDownload, FaBookOpen } from "react-icons/fa";
import FallbackPdfImage from "@/public/fallback-pdf.jpg";
import NextButton from "@/components/Shared/NextButton";
const pdfs = [
  {
    title:
      "Bangladesh Health Financing Context Analysis revised October 2019 (clean)",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Bangladesh Health Financing Context Analysis revised October 2019 (clean).docx",
  },
  {
    title: "Budget Matters for Health 2018_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Budget Matters for Health 2018_WHO.pdf",
  },
  {
    title: "Costing of Covid-19 Vaccine in bangladesh - TW_2024",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Costing of Covid-19 Vaccine in bangladesh - TW_2024.pdf",
  },
  {
    title: "Crowd Funding in Health Research 2021_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Crowd Funding in Health Research 2021_WHO.pdf",
  },
  {
    title: "Domestic Co-financing policy in Global health 2024_CGD",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Domestic Co-financing policy in Global health 2024_CGD.pdf",
  },
  {
    title: "Financing Global Health 2021",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Financing Global Health 2021.pdf",
  },
  {
    title: "Financing TB -USAID 2022",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Financing TB -USAID 2022.pdf",
  },
  {
    title: "Financing the Future- 2024_IDA",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Financing the Future- 2024_IDA.pdf",
  },
  {
    title: "Funding by Neglected Disease 2023",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Funding by Neglected Disease 2023.pdf",
  },
  {
    title: "Global Expenditure on Health 2021_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Global Expenditure on Health 2021_WHO.pdf",
  },
  {
    title: "Health care Financing in LMICs",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health care Financing in LMICs.pdf",
  },
  {
    title: "Health Financing Challenges for NCDs 2024",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing Challenges for NCDs 2024.pdf",
  },
  {
    title: "Health Financing in a Time of Global Shock 2023-WB",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing in a Time of Global Shock 2023-WB.pdf",
  },
  {
    title: "Health Financing in Times of Uncertainty 2021_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing in Times of Uncertainty 2021_WHO.pdf",
  },
  {
    title: "Health Financing Policy 2016_WB",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing Policy 2016_WB.pdf",
  },
  {
    title: "Health Financing Policy Guidance 2008_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing Policy Guidance 2008_WHO.pdf",
  },
  {
    title: "Health Financing Practitionars' Guide 2006_WB",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing Practitionars' Guide 2006_WB.pdf",
  },
  {
    title: "Health Financing Progress Matrix of Bangladesh 2021_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health Financing Progress Matrix of Bangladesh 2021_WHO.pdf",
  },
  {
    title: "Health-Financing Designing 2001_DFID",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health-Financing Designing 2001_DFID.pdf",
  },
  {
    title: "Health-Financing Trends in Sub-Saharan Africa 2012_OPM",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Health-Financing Trends in Sub-Saharan Africa 2012_OPM.pdf",
  },
  {
    title: "National Health Financing Strategy 2017_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/National Health Financing Strategy 2017_WHO.pdf",
  },
  {
    title: "Political Economy Analysis for Health Financing - 2024_WHO",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Political Economy Analysis for Health Financing - 2024_WHO.pdf",
  },
  {
    title: "Public health Expenditure Review of Bangladesh- HEU_2021",
    filePath:
      "/resources/TopicWiseReports/Health-Financing/Public health Expenditure Review of Bangladesh- HEU_2021.pdf",
  },
];

const HealthFincancing = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Health Financing
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
        href="/resources/reports/topic-wise-reports/health-policy-and-analysis"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default HealthFincancing;
