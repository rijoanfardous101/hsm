import { BlogCard } from "@/components/ui/BlogCard";
import Image from "next/image";
import FlanneryImage from "@/public/Flannery.png";

const BlogPage = () => {
  return (
    <div className="pb-20">
      {/* Page Title Section */}
      <div className="relative w-full h-[350px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 px-8 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-28">
            <h1 className="text-5xl font-[1000] text-white w-[30%] -mt-36">
              Blogs
            </h1>
            <p className="text-xl  text-gray-800 font-semibold my-8 text-justify md:w-auto w-[30%]">
              &quot;I write to discover what I know&quot; - Flannery
              O&apos;Connor
            </p>

            <div className="w-[40%] mt-8">
              <Image
                src={FlanneryImage.src}
                alt="Shahaduz Zaman"
                width={FlanneryImage.width}
                height={FlanneryImage.height}
                className="w-[200px] mx-auto"
              />
              <p className="font-bold text-lg mt-2 text-center">
                O&apos;Connor | American Author.
              </p>
              {/* <p className="text-center">
                Medical Anthropologist and Bangladeshi Writer
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="flex justify-center gap-10 py-16 max-w-screen-xl mx-auto px-8">
        <BlogCard
          item={{
            title:
              "Bridging the Gaps: Strengthening Mental Healthcare to Build a Resilient Health System in Bangladesh",
            description:
              "Mental health remains a critical yet often neglected aspect of Bangladesh’s healthcare system. The country faces significant challenges. ",
            date: "February 8, 2025",
            type: "blog",
            thumbnail: "/interview-and-blogs/TasdikDip.jpg",
          }}
        />

        <BlogCard
          item={{
            title:
              "Overcoming Budget Bottlenecks: Ensuring Effective Health Financing for Universal Health Coverage in Bangladesh",
            description:
              "To achieve Universal Health Coverage and the Sustainable Development Goals, at least 15% of total budget and 4-5% of gross domestic product (GDP) should be invested in healthcare in Bangladesh. However, t",
            date: "February 8, 2025",
            type: "blog",
            thumbnail: "/interview-and-blogs/ShahParan.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default BlogPage;
