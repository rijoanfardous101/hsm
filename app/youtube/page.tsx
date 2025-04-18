import Link from "next/link";
import YouTubePageImage from "@/public/Youtube-page-image.png";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */
const YoutubePage = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[80px]  border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-16 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">YouTube</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-16 px-16">
        <p className="text-xl text-[#001844] text-justify">
          Health Systems Matter is set to launch a YouTube channel dedicated to
          exploring global health system challenges and capturing expert
          insights through in-depth interviews. Currently in the planning phase,
          the initiative is scheduled to go live in the third quarter of this
          year.
        </p>
        <p className="text-xl text-[#001844] text-justify mt-4">
          Stay connected for updates on the official launch. Subscribe to our{" "}
          <Link href="/newsletter" className="underline text-blue-500">
            newsletter
          </Link>{" "}
          and follow us on social media to be the first to know when the channel
          goes live!
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Image
          src={YouTubePageImage.src}
          alt="a microphone"
          width={YouTubePageImage.width}
          height={YouTubePageImage.height}
        />
      </div>
    </div>
  );
};

export default YoutubePage;
