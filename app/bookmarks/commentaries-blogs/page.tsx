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
// import Image from "next/image";
import Link from "next/link";

const organizations = [
  {
    name: "World Bank Blogs on Health",
    url: "https://blogs.worldbank.org/en/search?topics=Health",
  },
  {
    name: "World Health Organization Commentaries",
    url: "https://www.who.int/news-room/commentaries",
  },
  {
    name: "Center for Global Development – All Commentary",
    url: "https://www.cgdev.org/commentary-and-analysis",
  },
  {
    name: "Center for Global Development – Global Health Blogs",
    url: "https://www.cgdev.org/commentary-and-analysis?f%5B0%5D=commentary_content_type%3Ablog_post&f%5B1%5D=topics%3AGlobal%20Health&q=",
  },
  {
    name: "London School of Economics Blogs",
    url: "https://blogs.lse.ac.uk/",
  },
  {
    name: "Abt Global Blogs",
    url: "https://www.abtglobal.com/search?search_api_fulltext=&type[blog]=blog",
  },
  {
    name: "icddr,b Blog",
    url: "https://blog.icddrb.org/",
  },
  {
    name: "International Health Policies Network Blogs",
    url: "https://www.internationalhealthpolicies.org/blogs/",
  },
];

const bookmarks = [
  {
    href: "/bookmarks/essential-reading-list",
    icon: <BookOpen />,
    text: "Key Public Health Organizations",
  },
  {
    href: "/bookmarks/reports",
    icon: <FileText />,
    text: "Reports and Publications",
  },
  { href: "/bookmarks/books", icon: <Bookmark />, text: "Journals" },
  {
    href: "/bookmarks/policy-briefs",
    icon: <Scroll />,
    text: "Commentaries and Blogs",
  },
  {
    href: "/bookmarks/presentations",
    icon: <BarChart />,
    text: "Interviews & Insights on Global Health",
  },
  {
    href: "/bookmarks/tools",
    icon: <Globe />,
    text: "Useful Platforms and Tools",
  },
  {
    href: "/bookmarks/data-facts",
    icon: <Database />,
    text: "Data and Facts",
  },
  {
    href: "/bookmarks/organizations",
    icon: <Users />,
    text: "Data Repository of Organizations",
  },
  {
    href: "/bookmarks/data-centric",
    icon: <Activity />,
    text: "Data-Centric Organizations and Platforms",
  },
  {
    href: "/bookmarks/public-health-data",
    icon: <Globe />,
    text: "Data on Public Health Issues",
  },
  {
    href: "/bookmarks/training",
    icon: <GraduationCap />,
    text: "Training and Courses",
  },
  {
    href: "/bookmarks/career-scope",
    icon: <Briefcase />,
    text: "Career Scope",
  },
  { href: "/bookmarks/jobs", icon: <Search />, text: "Job Sites" },
  {
    href: "/bookmarks/scholarships",
    icon: <GraduationCap />,
    text: "Scholarship and Fellowship Opportunities",
  },
  { href: "/bookmarks/newsletter", icon: <Newspaper />, text: "Newsletter" },
  { href: "/bookmarks/youtube", icon: <Youtube />, text: "YouTube" },
  { href: "/bookmarks/podcast", icon: <Mic />, text: "Podcast" },
];

const CommentariesAndBlogs = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Commentaries and Blogs
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-16 pt-8 pb-16">
          <p className="text-lg">
            A series of blogs and newsletters maintained by organizations and
            dedicated professionals is available. This section provides a list
            of these valuable resources. By subscribing to your preferred sites,
            you can stay up-to-date with the latest updates and new resources.
            The list is extensive but not exhaustive and is updated
            periodically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <OrganizationList
                // title="United Nations (UN) Agencies"
                // description="These organizations operate globally and address public health within the broader framework of sustainable development:"
                organizations={organizations}
              />
            </div>

            {/* Right Featured Resources Section */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentariesAndBlogs;

interface Organization {
  name: string;
  url: string;
}

// Define the props for the OrganizationList component
interface OrganizationListProps {
  organizations: Organization[];
  //   description: string;
  //   organizations: Organization[];
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  organizations,
}) => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="organization-card border border-gray-300 rounded-lg p-4 shadow-sm transition-all"
          >
            <h3 className="text-lg font-semibold text-gray-800">{org.name}</h3>
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
