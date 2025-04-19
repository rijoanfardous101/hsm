// import { FaBook, FaFileAlt, FaClipboardList } from "react-icons/fa";
import {
  BookOpen,
  FileText,
  Bookmark,
  Scroll,
  BarChart,
  Globe,
  Database,
  Users,
  Activity,
  GraduationCap,
  Briefcase,
  Search,
  Newspaper,
  Youtube,
  Mic,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const bookmarks = [
  {
    href: "/bookmarks/key-public-health-organizations",
    icon: <BookOpen />,
    text: "Key Public Health Organizations",
  },
  {
    href: "/bookmarks/reports-and-publications",
    icon: <FileText />,
    text: "Reports and Publications",
  },
  {
    href: "/bookmarks/journals",
    icon: <Bookmark />,
    text: "Journals",
  },
  {
    href: "/bookmarks/commentaries-blogs",
    icon: <Scroll />,
    text: "Commentaries and Blogs",
  },
  {
    href: "/bookmarks/interviews-sites",
    icon: <BarChart />,
    text: "Interviews & Insights on Global Health",
  },
  {
    href: "/bookmarks/useful-platforms-and-tools",
    icon: <Globe />,
    text: "Useful Platforms and Tools",
  },
  {
    href: "/bookmarks/data-and-facts",
    icon: <Database />,
    text: "Data and Facts",
  },
  {
    href: "/bookmarks/data-and-respiratory-of-organizations",
    icon: <Users />,
    text: "Data Repository of Organizations",
  },
  {
    href: "/bookmarks/data-centric-organizations-and-platforms",
    icon: <Activity />,
    text: "Data-Centric Organizations and Platforms",
  },
  {
    href: "/bookmarks/data-on-topic-and-public-health-issues",
    icon: <Globe />,
    text: "Data on Public Health Issues",
  },
  {
    href: "/bookmarks/training-and-courses",
    icon: <GraduationCap />,
    text: "Training and Courses",
  },
  {
    href: "/bookmarks/career-scope",
    icon: <Briefcase />,
    text: "Career Scope",
  },
  {
    href: "/bookmarks/job-sites",
    icon: <Search />,
    text: "Job Sites",
  },
  {
    href: "/bookmarks/scholarship-and-fellowship-opportunities",
    icon: <GraduationCap />,
    text: "Scholarship and Fellowship Opportunities",
  },
  {
    href: "/bookmarks/newsletter",
    icon: <Newspaper />,
    text: "Newsletter",
  },
  {
    href: "/bookmarks/youtube",
    icon: <Youtube />,
    text: "YouTube",
  },
  {
    href: "/bookmarks/podcast",
    icon: <Mic />,
    text: "Podcast",
  },
];

const ResourcesOverview = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Overview
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Image Section */}
              <div className="w-full">
                <Image
                  src="https://img.freepik.com/free-photo/business-work-concept_1388-69.jpg?t=st=1741539768~exp=1741543368~hmac=f9cfaefc1f6459c616b427197be993fbb23876f5cdaa641d7fe9f50ab34a8335&w=1060"
                  alt="Overview"
                  width={1000}
                  height={300}
                  className="w-full h-64 brightness-75 object-cover mix-blend-darken"
                />
              </div>

              {/* Description Section */}
              <div className="w-full text-gray-700 text-justify">
                <p className="text-base leading-7">
                  The Global Health Bookmarks section indicates the resources
                  either document, entities, courses, career, podcast and so on
                  pertained with the global health and health systems are
                  covered. The section offers a comprehensive list of resources
                  that may enrich one global health professionals’ career. If
                  these given resources are well utilized, anyone can attain the
                  knowledge of the contemporary trend of the global health and
                  health systems challenges.
                </p>
              </div>
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesOverview;

export const FeaturedBookmarks = function () {
  return (
    <div className="bg-gray-100 p-6 border border-gray-200 shadow-sm self-start">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Featured Bookmarks
      </h2>
      <ul className="space-y-4">
        {bookmarks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center space-x-2 text-blue-800 hover:text-[#F18A00] transition"
            >
              {item.icon}
              <span className="hover:underline">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
