"use client";

import Image from "next/image";
import ApproachImage from "@/public/about/approach.jpg";
import NextButton from "@/components/Shared/NextButton";

const ActivitiesAndApproachPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00] ">
        <div className="absolute inset-0 bg-gradient-to-l from-[#8EDBED] to-[#8DDEF1] flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Activities and Approach
            </h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      <div className="bg-[#DCF0F9] py-16">
        <div className="max-w-screen-lg mx-auto px-16">
          <div className="flex flex-col-reverse md:flex-row-reverse items-start gap-4">
            {/* Content Section (Left) */}
            <div className="w-full md:w-1/2 space-y-6 text-gray-700 text-justify">
              {/* Activities & Approach Section */}
              <div className="space-y-4 text-justify">
                <h2 className="text-xl font-semibold text-gray-800">
                  In order to be aligned with the vision and mission of Health
                  Systems Matter, the specific activities are as follows:
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Showcasing health systems and global health documents daily.
                  </li>
                  <li>
                    Generating and regenerating demand for impactful documents.
                  </li>
                  <li>
                    Disseminating major public health events and milestones.
                  </li>
                  <li>
                    Promoting pages and events focused on health systems and
                    global health.
                  </li>
                  <li>
                    Introducing individuals in the health systems field
                    dedicated to enhancing global health.
                  </li>
                  <li>
                    Highlighting organizations working on public health agendas.
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section (Right) */}
            <div className="w-full md:w-1/2 self-start">
              <Image
                src={ApproachImage.src}
                alt="Activities and Approach"
                width={1000}
                height={300}
                className="w-96 h-auto object-cover mix-blend-darken"
              />
            </div>
          </div>
          <p className="text-xl max-w-screen-lg  mx-auto text-gray-800 font-semibold pt-16 text-justify">
            To carry out these activities, the site systematically documents and
            showcases resources, creatively posts on social media to reach
            users, ensuring proper credit to organizations. The focus is on
            topics rather than organizations, promoting news without bias or
            political agenda.
          </p>
        </div>

        <NextButton
          href="/about/why-health-systems-matter"
          text="Next"
          className="bg-[#00DFC0] text-black mt-8"
        />
      </div>
    </div>
  );
};

export default ActivitiesAndApproachPage;
