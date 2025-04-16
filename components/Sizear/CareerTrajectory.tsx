"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const CareerTrajectory = () => {
  //   const data = [
  //     {
  //       title: "January 2023 – Present",
  //       content: (
  //         <div>
  //           <p className="text-neutral-600  text-xl font-medium mb-8">
  //             Technical Advisor, Open Development
  //           </p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "November 2021 – December 2022 ",
  //       content: (
  //         <div>
  //           <p className="text-neutral-600  text-xl font-medium mb-8">
  //             Senior Program Analyst, ThinkWell Global
  //           </p>
  //         </div>
  //       ),
  //     },
  //   ];

  const experiences = [
    {
      title: "Technical Advisor",
      company: "Open Development",
      date: "January 2023 – March 2025",
    },
    {
      title: "Senior Program Analyst",
      company: "ThinkWell Global",
      date: "November 2021 – December 2022",
    },
    {
      title: "Program Officer",
      company: "WaterAid",
      date: "August 2018 – September 2020",
    },
    {
      title: "Senior Program Coordinator",
      company: "Sajida Foundation",
      date: "February 2017 – July 2018",
    },
    {
      title: "Project Coordinator",
      company: "Sajida Foundation",
      date: "March 2015 – January 2017",
    },
    {
      title: "Research Officer",
      company: "icddr,b",
      date: "January 2015 – February 2015",
    },
    {
      title: "District Coordinator",
      company: "NGO Forum for Public Health",
      date: "November 2012 – July 2013",
    },
    {
      title: "Research Assistant",
      company:
        "Bangladesh Agricultural Resource Center for Indigenous Knowledge (BARCIK)",
      date: "February 2011 – January 2012",
    },
  ];
  const colors = [
    "hover:bg-[#FFCE00]",
    "hover:bg-[#ef4444]",
    "hover:bg-[#2D8CBB]",
  ];

  return (
    <div className=" bg-[#D5E5D5]/30">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 pb-16 pt-12 ">
        <h3 className="text-2xl md:text-2xl font-bold underline underline-offset-[6px] mb-6 font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Career Trajectory |{" "}
          <span className="text-black font-normal text-lg">
            12 years of experience
          </span>
        </h3>

        <div className="relative max-w-4xl mx-auto pt-4 grid grid-cols-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6 relative border border-blue-500  shadow-sm rounded-md"
            >
              <div className="absolute -left-[25px] top-8 bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <div
                className={`bg-slate-50 p-8 shadow-sm rounded-md flex justify-between h-full font-roboto items-center group ${
                  colors[index % colors.length]
                } transition-all duration-300`}
              >
                <div className="ml-4">
                  <h3
                    className={`text-lg  font-bold  text-[#155f82] group-hover:translate-x-6 transition-all duration-300 group-hover:text-white`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-base text-gray-600 group-hover:text-black">
                    {exp.company}
                  </p>
                </div>
                {/* <p className="text-gray-700 text-xl">{exp.company}</p> */}
                <p className=" text-gray-500 font-medium group-hover:text-black">
                  {exp.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTrajectory;
