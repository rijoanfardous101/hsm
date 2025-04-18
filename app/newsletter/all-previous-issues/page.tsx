"use client";
// import { FaBook, FaHeartbeat, FaUniversity } from "react-icons/fa";

// Define animation variants
// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

const AllPreviousIssuesPage = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px]  border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center pb-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-16 flex-wrap gap-6">
            <h1 className="text-3xl font-extrabold text-white text-center mt-16">
              All Previous Issues
            </h1>
          </div>
        </div>
      </div>

      <div className="my-12 max-w-5xl mx-auto">
        <p className="font-medium text-xl">Newsletter will be coming soon.</p>
      </div>
    </div>
  );
};

export default AllPreviousIssuesPage;
