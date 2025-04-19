import { FeaturedBookmarks } from "../overview/page";

const CommentariesAndBlogs = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Data and Facts
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-16 pt-8 pb-16">
          <p className="text-lg">
            In today&apos;s data-driven world, information is crucial for
            professional efforts. This section presents select websites that
            specialize in global health data and statistics, aligned with the
            development agenda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8"></div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentariesAndBlogs;
