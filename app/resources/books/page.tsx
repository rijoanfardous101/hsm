"use client";

import NextButton from "@/components/Shared/NextButton";

import { FaDownload, FaBookOpen } from "react-icons/fa";
import Image from "next/image";

const pdfs = [
  {
    title: "A System of Health Accounts 2011",
    filePath:
      "/resources/Essential-Reading-List/A-System-of-Health-Accounts-2011.pdf",
  },
  {
    title: "Alma Ata Conference Report on PHC_WHO 1978",
    filePath:
      "/resources/Essential-Reading-List/Alma-Ata-Conference-Report-on-PHC_WHO-1978.pdf",
  },
  {
    title: "Basic Epidemiology_WHO 2006",
    filePath:
      "/resources/Essential-Reading-List/Basic Epidemiology_WHO 2006.pdf",
  },
  {
    title: "Delivering Quality Health Services_WHO 2018",
    filePath:
      "/resources/Essential-Reading-List/Delivering Quality Health Services_WHO 2018.pdf",
  },
  {
    title: "Everybody's Business- Strengthening Health Systems_WHo 2007",
    filePath:
      "/resources/Essential-Reading-List/Everybody's Business- Strengthening Health Systems_WHo 2007.pdf",
  },
  {
    title: "Guns, Germs and Steel - Jared Diamond_1997",
    filePath:
      "/resources/Essential-Reading-List/Guns, Germs and Steel - Jared Diamond_1997.pdf",
  },
  {
    title: "Health Systems - Improving Performance_WHO_2000",
    filePath:
      "/resources/Essential-Reading-List/Health Systems - Improving Performance_WHO_2000.pdf",
  },
  {
    title: "Health Systems Building Blocks_WHO 2010",
    filePath:
      "/resources/Essential-Reading-List/Health Systems Building Blocks_WHO 2010.pdf",
  },
  {
    title: "Health Systems Financing_WHO 2010",
    filePath:
      "/resources/Essential-Reading-List/Health Systems Financing_WHO 2010.pdf",
  },
  {
    title: "International Profiles of Health Care Systems_2020",
    filePath:
      "/resources/Essential-Reading-List/International Profiles of Health Care Systems_2020.pdf",
  },
  {
    title: "Investing in Health_WDR 1993",
    filePath:
      "/resources/Essential-Reading-List/Investing in Health_WDR 1993.pdf",
  },
  {
    title: "Now More Than Ever-PHC_WHO 2008",
    filePath:
      "/resources/Essential-Reading-List/Now More Than Ever-PHC_WHO 2008.pdf",
  },
  {
    title: "Tracking Universal health Coverage_WHO 2015",
    filePath:
      "/resources/Essential-Reading-List/Tracking Universal health Coverage_WHO 2015.pdf",
  },
];

const Books = () => {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Books
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 mt-2">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            The PDF books provided are significant works by renowned public
            health professionals, offering valuable insights into global health
            and health systems
          </p>

          {/* general and topic wise reports */}

          <div className="max-w-screen-xl mx-auto px-6 md:px-16 pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
              {pdfs.map((pdf, index) => {
                const imageName = pdf.title + ".png";
                const imagePath = `/essential-reading-list/${imageName}`;

                return (
                  <div
                    key={index}
                    className=" rounded-lg shadow-md overflow-hidden border border-gray-200 w-[350px] sm:w-[400px]"
                  >
                    <div className="w-[350px] sm:w-[400px] h-[450px]">
                      <Image
                        src={imagePath}
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
        href="/resources/policy-briefs"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default Books;
