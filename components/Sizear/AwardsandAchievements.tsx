import React from "react";
import AcademicAwards from "./AcademicAwards";
import LiteratureAward from "./LiteratureAward";
import ConferenceAwards from "./ConferancePresentation";
import BestOrganizerAward from "./BestOrganizerAward";

const AwardsandAchievements = () => {
  return (
    <div className="bg-yellow-50/25">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 pt-32 pb-16">
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Awards and Achievements
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2> */}

        <h3 className="text-2xl md:text-2xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Awards and Achievements
        </h3>

        {/* content */}
        <div>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            Throughout my extensive academic and professional journey, I have
            been honored with various recognitions for my work. While these
            achievements may appear modest, each one represents a significant
            milestone earned through dedication and effort. Below, you can view
            highlights of these accomplishments and awards.
          </p>
        </div>

        {/* Academic Awards */}
        <AcademicAwards />

        {/* Litarature Award */}
        <LiteratureAward />

        {/* Conferance presentation */}
        <ConferenceAwards />

        {/* Best organizer award */}
        <BestOrganizerAward />
      </div>
    </div>
  );
};

export default AwardsandAchievements;
