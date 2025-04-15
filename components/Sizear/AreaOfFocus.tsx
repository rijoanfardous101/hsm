"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AreaOfFocusImage from "@/public/area-of-focus-image.jpeg";

const AreaOfFocus = () => {
  return (
    <div className="bg-[#6ACBD4]/10">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16">
        <h3 className="text-2xl md:text-2xl font-bold pb-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Area of Focus and Research
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-transparent  rounded-lg p-8 border-l-4 border-[#6ACBD4]"
        >
          <div className="flex items-center justify-center mb-4 gap-10 flex-row-reverse ">
            {/* <FaUniversity className="text-green-800 text-8xl" /> */}
            <div>
              <Image
                src={AreaOfFocusImage.src}
                alt="research"
                width={400}
                height={500}
                className="mix-blend-darken min-w-72"
              />
            </div>
            {/* <h3 className="text-xl font-semibold text-gray-900">
            Evidence-Based Research & Advocacy
          </h3> */}
            <p className="text-gray-500 leading-relaxed text-justify max-w-3xl mx-auto text-lg">
              My research and professional interests encompass health systems
              and financing, environmental health, and health-seeking behavior.
              In the context of growing urbanization and increasingly complex
              health service delivery, my work emphasizes public financial
              management, the role of the private sector, and human-centered
              design. These elements are critical for rethinking and formulating
              comprehensive urban health policies aimed at building sustainable
              and resilient health systems. I also engage in research to
              understand complex health sector challenges and generate evidence
              to support government initiatives through targeted advocacy.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
