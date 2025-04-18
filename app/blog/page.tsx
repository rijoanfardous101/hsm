import { BlogCard } from "@/components/ui/BlogCard";

const BlogPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[100px]  border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">Blog</h1>
            <p className="text-xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
              The blog covers diverse global health topics, offering thoughtful
              analysis from public health professionals through a health systems
              perspective.
            </p>
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
            thumbnail:
              "https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog=",
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
            thumbnail:
              "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default BlogPage;
