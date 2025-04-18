import { FaDownload, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import NextButton from "@/components/Shared/NextButton";

const EssentialReadingList = () => {
  // Sample PDF data
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

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[85px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-4xl font-bold text-white">
              Essential Reading List
            </h1>
          </div>
        </div>
      </div>

      <div className="flex max-w-screen-xl mx-auto flex-col md:flex-row-reverse justify-between w-full px-6 md:px-16 gap-8 pb-16 pt-8">
        {/* Image Section */}
        <div className="w-full">
          <Image
            src="https://australiainstitute.org.au/wp-content/uploads/2021/11/0_-P20RegfYHGeARz5.jpg"
            alt="Essential reading list"
            width={1000}
            height={1000}
            className="w-full h-44 object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="w-full text-gray-900 italic text-justify">
          <p className="text-lg/9">
            Reading preferences and needs vary widely yet certain resources are
            considered essential for global health professionals. Explore this
            curated reading list to discover materials that can enrich your
            knowledge and support your professional growth.
          </p>
        </div>
      </div>
      {/* Content Section with Sidebar */}
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

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/4 bg-white shadow-sm p-6 border border-gray-200 self-start">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Featured Resources
          </h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/resources/overview"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                🌎 Overview
              </Link>
            </li>
            <li>
              <Link
                href="/resources/reports"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📑 Reports
              </Link>
            </li>
            <li>
              <Link
                href="/resources/books"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📚 Books
              </Link>
            </li>
            <li>
              <Link
                href="/resources/policy-briefs"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📜 Policy Briefs
              </Link>
            </li>
            <li>
              <Link
                href="/resources/presentations"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📊 Presentations
              </Link>
            </li>
            <li>
              <Link
                href="/resources/interview-and-insights"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                🎙️ Interview and Insights
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      <NextButton
        href="/resources/reports"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default EssentialReadingList;
