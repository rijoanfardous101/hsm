"use client";

import NextButton from "@/components/Shared/NextButton";
import Image from "next/image";
import Link from "next/link";
import ShahaduzZamanImage from "@/public/Shahaduz-Zaman.png";

const interviews = [
  {
    id: 1,
    title: "Public Health Insights with Dr. Madhukar Pai: A Global Leader",
    description:
      "Dr. Madhukar Pai shares his journey, inspiration, and thoughts on the biggest global health challenges.",
    image: "/interview/madhukar.jpg", // Ensure you have this image in the public folder
    slug: "public-health-insights",
  },
  {
    id: 2,
    title:
      "Development Perspective with Dr. Zarif Rasul: Insights from A Global Water Specialist",
    description:
      "Dr. Zarif shares insights from his inspiring academic and professional journey toward becoming a global development expert.",
    image: "/interview/Zarif-Rasul.jpg", // Ensure you have this image in the public folder
    slug: "development-perspective",
  },
  // {
  //   id: 2,
  //   title: "The Future of Global Health with Dr. XYZ",
  //   description:
  //     "A discussion on emerging trends in public health and how young professionals can contribute.",
  //   image: "/images/interview-global-health.jpg",
  //   slug: "global-health",
  // },
];

const InterviewPage = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[350px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 px-8 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h1 className="text-5xl font-[1000] text-white w-[30%] -mt-36">
              Interviews
            </h1>
            <p className="text-xl  text-gray-800 font-semibold my-8 text-justify md:w-auto w-[30%]">
              &quot;An effective interview is a collaborative intellectual
              adventure&quot; - Shahaduz Zaman
            </p>

            <div className="w-[40%] mt-8">
              <Image
                src={ShahaduzZamanImage.src}
                alt="Shahaduz Zaman"
                width={ShahaduzZamanImage.width}
                height={ShahaduzZamanImage.height}
                className="w-[200px] mx-auto"
              />
              <p className="font-bold text-lg mt-2 text-center">
                Dr. Shahaduz Zaman
              </p>
              <p className="text-center">
                Medical Anthropologist and Bangladeshi Writer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      {/* <div className="w-full h-[300px] relative">
        <Image
          src="/interview/Interview.jpg"
          alt="Interview Section"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div> */}

      {/* Interviews Section */}
      <div className="max-w-screen-xl mx-auto px-16 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="bg-white border overflow-hidden transition-transform duration-300 hover:border-r-4 hover:border-b-4 border-[#2D8CBB] hover:shadow-md"
            >
              <Link href={`/interview/${interview.slug}`}>
                <Image
                  src={interview.image}
                  alt={interview.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <Link
                  href={`/interview/${interview.slug}`}
                  className="text-xl font-bold text-gray-800 hover:underline text-justify"
                >
                  {interview.title}
                </Link>
                <p className="text-gray-600 mt-2 text-justify">
                  {interview.description}
                </p>
                <Link href={`/interview/${interview.slug}`}>
                  <button className="mt-4 bg-[#2D8CBB] text-white px-4 py-2 rounded-md hover:bg-[#1B6E99] transition">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NextButton href="/blog" text="Next" className="bg-[#01748D]" />
    </div>
  );
};

export default InterviewPage;
