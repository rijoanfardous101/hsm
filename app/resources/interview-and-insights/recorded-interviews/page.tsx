"use client";

import NextButton from "@/components/Shared/NextButton";
import { motion } from "framer-motion";

const interviews = [
  {
    title: "A Global Health Conversation With Dr. Paul Farmer",
    url: "https://www.youtube.com/watch?v=tzYRXlSNWGk",
  },
  {
    title: "Dr. Anthony Fauci on Pandemics and Partisan Attacks",
    url: "https://www.youtube.com/watch?v=ny3rMwmp1kA",
  },
  {
    title: "Dr. Tedros Adhanom Ghebreyesus | TIME100 Talks",
    url: "https://www.youtube.com/watch?v=zMUh0ti5EzI",
  },
  {
    title: "Exclusive Interview with Dr. Margaret Chan",
    url: "https://www.youtube.com/watch?v=0qyt25k7Vd0",
  },
  {
    title: "Bloomberg Big Decisions: Dr. Paul Farmer",
    url: "https://www.youtube.com/watch?v=4-7P0_8WMAQ",
  },
  {
    title: "Dr. Richard Cash on Epidemics",
    url: "https://www.youtube.com/watch?v=YL7OUoJlNBw",
  },
  {
    title: "Interview with Tim Evans",
    url: "https://www.youtube.com/watch?v=XtnktEItFPA",
  },
  {
    title: "An Interview with Madhukar Pai",
    url: "https://www.youtube.com/watch?v=SkfIqKcpxxI",
  },
  {
    title:
      "Global Leader Interview: Richard Horton, Editor-in-Chief of The Lancet",
    url: "https://www.youtube.com/watch?v=FoWY1-BtcAQ",
  },
  {
    title:
      'Prof Devi Sridhar: "For the world the pandemic is going to go on for several years"',
    url: "https://www.youtube.com/watch?v=ZXP7WwXW5KA",
  },
  {
    title:
      "Health is Improving Worldwide, but We Need More Focus on the Ones Left Behind – with Peter Piot",
    url: "https://www.youtube.com/watch?v=dZftFN4Oi_Y",
  },
  {
    title: "Ending Polio for Good by Bill Gates",
    url: "https://www.youtube.com/playlist?list=PLxf-CDjxvNVqTTC53pTBsrNMFSykXiAS2",
  },
  {
    title: "Paul Farmer: Taking up the Challenge of Poverty",
    url: "https://www.youtube.com/watch?v=JwWT2WylbP8",
  },
  {
    title:
      "The Power of Partnership: A Discussion with Dr. Paul Farmer and John Green",
    url: "https://www.youtube.com/watch?v=V4gvZ5RdHso",
  },
  {
    title: "Dr. Gro Harlem Brundtland on Global Health Successes",
    url: "https://www.youtube.com/watch?v=dTXyZU_S_-w",
  },
  {
    title: "Who's Suffering the Most? | Dr. Paul Farmer |",
    url: "https://www.youtube.com/watch?v=JletQj_LT7g",
  },
  {
    title: "Global Health Diplomacy and Partnerships for Health",
    url: "https://www.youtube.com/watch?v=wnw5bIOmtLY",
  },
  {
    title: "Conversation Between Dr. Tahmeed Ahmed from icddr,b",
    url: "https://www.youtube.com/watch?v=He7bPbgAHUQ",
  },
  {
    title: "Repairing the World: A Conversation with Paul Farmer",
    url: "https://www.youtube.com/watch?v=uI5mouRRaEw",
  },
];

const RecordedInterviews = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              🎥 Recorded Interviews
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 px-6 md:px-16 max-w-screen-xl mx-auto">
        {interviews.map((interview, index) => {
          const videoId = new URL(interview.url).searchParams.get("v");
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <a
                href={interview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline block mb-3"
              >
                {interview.title}
              </a>
              {videoId && (
                <iframe
                  className="w-full h-80 rounded-md"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={interview.title}
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          );
        })}
      </div>
      <NextButton
        href="/resources/interview-and-insights/written-interviews"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default RecordedInterviews;
