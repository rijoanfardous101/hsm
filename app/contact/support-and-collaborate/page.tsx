"use client";

import Link from "next/link";

const SupportAndCollaboratePage = () => {
  return (
    <>
      <div className="relative w-full h-[80px] border-t-2 border-[#FFCE00] ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Support and Collaborate
            </h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>
      <div className="border-t-2 pt-10 pb-24 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#2D8CBB]">Support</h2>
        <p className="mt-4 text-lg">
          This is a volunteer-driven initiative, and we greatly appreciate any
          sponsorships or contributions to support the site and promote our
          page. If you find the site valuable, please share it with like-minded
          individuals.
        </p>

        <h2 className="text-2xl font-bold mt-8 text-[#2D8CBB]">Collaborate</h2>
        <p className="mt-4 text-lg">
          We Value Collaboration! At Health Systems Matter, we welcome
          partnerships that align with our mission and vision. If you find this
          platform relevant and see potential for collaboration, please
          don&apos;t hesitate to reach out to us through the{" "}
          <Link href="/contact/stay-connected" className="underline">
            <strong>Stay Connected </strong>
          </Link>
          section. <br /> <br /> We&apos;ll get back to you promptly to explore
          your ideas and discuss how we can work together.
        </p>
      </div>
    </>
  );
};

export default SupportAndCollaboratePage;
