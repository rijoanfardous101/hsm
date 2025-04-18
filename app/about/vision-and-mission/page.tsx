/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import VisionImage from "@/public/about/vision.jpg";
import MissionImage from "@/public/about/mission.jpg";
import GoalImage from "@/public/about/Goal.jpg";
import NextButton from "@/components/Shared/NextButton";

const VisionAndMissionPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#01CAC2]/10 via-white to-[#01CAC2]/10">
      {/* Page Title Section */}
      <div className="relative w-full h-[80px] border-t-2 border-[#FFCE00] ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Vision and Mission
            </h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      <div className="min-h-screen max-w-screen-lg mx-auto px-4 md:px-8 pb-16 pt-8 flex flex-col items-center gap-12">
        {/* Vision Section */}
        <div className="w-full rounded-xl bg-blue-50 p-6 shadow-sm">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-6">
            {/* Vision Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <Image
                src={VisionImage.src}
                alt="Vision"
                width={400}
                height={300}
                className="object-contain max-h-64 mix-blend-darken"
              />
            </div>

            {/* Vision Content */}
            <div className="w-full md:w-3/5 space-y-4 text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-blue-200 pb-2">
                Our Vision
              </h2>
              <p className="text-justify">
                The vision of Health Systems Matter is to create an{" "}
                <strong>evidence-based platform</strong> that empowers emerging
                public health professionals to become{" "}
                <strong>informed and confident global health advocates,</strong>{" "}
                dedicated to promoting public health issues and contributing to
                global health.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="w-full rounded-xl bg-green-50 p-6 shadow-sm">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Mission Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <Image
                src={MissionImage.src}
                alt="Mission"
                width={400}
                height={300}
                className="object-contain max-h-64 mix-blend-darken"
              />
            </div>

            {/* Mission Content */}
            <div className="w-full md:w-3/5 space-y-4 text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-green-200 pb-2">
                Our Mission
              </h2>
              <p className="text-justify">
                Health Systems Matter's mission is to provide{" "}
                <strong>comprehensive, health system-focused resources</strong>{" "}
                from diverse organizations to{" "}
                <strong>enhance the capabilities</strong> of public health
                professionals and promote public health issues. The platform
                offers significant news, publications, and insights, both
                historical and contemporary, covering a broad spectrum of topics
                relevant to all public health enthusiasts.
              </p>
            </div>
          </div>
        </div>

        {/* Goal Section */}
        <div className="w-full rounded-xl bg-amber-50 p-6 shadow-sm">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Goal Content */}
            <div className="w-full md:w-3/5 space-y-4 text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-amber-200 pb-2">
                Our Goal
              </h2>
              <p className="text-justify">
                The goal of this initiative is to cultivate passionate and
                confident health systems advocates who recognize the importance
                of robust health systems and are committed to advancing global
                health outcomes.
              </p>
            </div>

            {/* Goal Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <Image
                src={GoalImage.src}
                alt="Goal"
                width={400}
                height={300}
                className="object-contain max-h-64 mix-blend-darken"
              />
            </div>
          </div>
        </div>
        <NextButton
          href="/about/activities-and-approach"
          text="Next"
          className="bg-[#00DFC0] text-black"
        />
      </div>
    </div>
  );
};

export default VisionAndMissionPage;
