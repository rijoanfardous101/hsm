import { FeaturedBookmarks } from "../overview/page";

const organizations = [
  {
    name: "Public Health Informatics Institute (PHII)",
    url: "https://phii.org/",
  },
  {
    name: "Institute for Health Metrics and Evaluation (IHME)",
    url: "https://www.healthdata.org/",
  },
  {
    name: "Data.org",
    url: "https://data.org/",
  },
  {
    name: "Data International",
    url: "http://www.dataint.com/",
  },
  {
    name: "Our World in Data",
    url: "https://ourworldindata.org/",
  },
  {
    name: "Data.World",
    url: "https://data.world/",
  },
  {
    name: "DataBD (Bangladesh)",
    url: "https://databd.co/",
  },
  {
    name: "Data Partnership",
    url: "https://datapartnership.org/",
  },
  {
    name: "Poverty Evidence",
    url: "https://povertyevidence.org/",
  },
  {
    name: "ONE Data (Data by ONE Campaign)",
    url: "https://data.one.org/",
  },
  {
    name: "AidData",
    url: "https://www.aiddata.org/",
  },
  {
    name: "GlobalData",
    url: "https://www.globaldata.com/",
  },
  {
    name: "Statista",
    url: "https://www.statista.com/",
  },
];

const CommentariesAndBlogs = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Data-Centric Organizations and Platforms
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
              <OrganizationList
                // title="United Nations (UN) Agencies"
                // description="These organizations operate globally and address public health within the broader framework of sustainable development:"
                organizations={organizations}
              />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
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
