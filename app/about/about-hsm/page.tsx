/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
// import Link from "next/link";
import AboutHSMImage from "@/public/about/about.jpg";
import NextButton from "@/components/Shared/NextButton";
import Link from "next/link";

const AboutHSM = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[80px] border-t-2 border-[#FFCE00] ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-800">About HSM</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00DFC0]/10 via-white to-[#00DFC0]/10">
        <div className="max-w-screen-lg mx-auto px-16 min-h-dvh">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-start gap-8 ">
            {/* Image Section */}
            <div className="w-full md:w-1/2 self-start pt-16">
              <Image
                src={AboutHSMImage.src}
                alt="About HSM"
                width={1000}
                height={300}
                className="w-full h-auto object-cover mix-blend-darken"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6 text-gray-700 py-16 text-justify">
              <p>
                <strong>"Information is power"</strong> and{" "}
                <strong>
                  "Evidence lies at the heart of public health policy."
                </strong>
              </p>
              <p>
                Inspired by these principles, Health Systems Matter (HSM) offers
                essential resources on health systems, public health events, and
                career opportunities. HSM serves as an independent,
                comprehensive global health resource, providing updates on
                public health issues and career opportunities.
              </p>
              <p>
                By subscribing or visiting regularly, users can stay informed
                about a wide range of documents and news related to global
                health issues from various organizations and life-changing
                career opportunities.
              </p>

              <div className="space-y-4">
                <p>
                  <strong>
                    The HSM site is useful for two primary reasons:
                  </strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Comprehensive Content:</strong> Covers impactful
                    global health issues and career opportunities.
                  </li>
                  <li>
                    <strong>Consistent Updates:</strong> Provides daily updates
                    via social media, ensuring timely information.
                  </li>
                </ul>
              </div>

              <p className="font-bold">
                Health Systems Matter was launched on social media (
                <a
                  href="https://www.linkedin.com/in/monaemulsizear/"
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                ,{" "}
                <a
                  href="https://www.facebook.com/monaemul.sizear"
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                ) on August 9, 2024. This website was launched on February 20,
                2025, to systematically preserve all posted resources.
              </p>

              <p className="font-bold">
                The site, passionately maintained by{" "}
                <Link
                  href="/sizear"
                  className="text-blue-600 underline hover:text-blue-800"
                  rel="noopener noreferrer"
                >
                  Monaemul Islam Sizear
                </Link>
                , aims to enlighten many and foster impactful careers.
              </p>
            </div>
          </div>

          <NextButton
            href="/about/vision-and-mission"
            text="Next"
            className="bg-[#00DFC0] text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHSM;
