import { FeaturedBookmarks } from "../overview/page";

const podcasts = [
  {
    name: "WHO Podcasts",
    url: "https://www.who.int/podcasts",
  },
  {
    name: "Global Health Matters (WHO TDR)",
    url: "https://tdr.who.int/global-health-matters-podcast",
  },
  {
    name: "The Development Podcast (World Bank)",
    url: "https://www.worldbank.org/en/news/series/the-development-podcast",
  },
  {
    name: "The Lancet Podcasts",
    url: "https://www.thelancet.com/multimedia/podcasts",
  },
  {
    name: "Public Health On Call – Johns Hopkins",
    url: "https://publichealth.jhu.edu/headlines/public-health-on-call-podcast",
  },
  {
    name: "University of Michigan – Population Healthy Podcast",
    url: "https://sph.umich.edu/podcast/",
  },
  {
    name: "PH SPOTlight Podcast",
    url: "https://phspot.org/podcast/",
  },
  {
    name: "The Public Health Insight Podcast",
    url: "https://thepublichealthinsight.com/podcast/",
  },
  {
    name: "AJPH Podcast – American Journal of Public Health",
    url: "https://ajph.aphapublications.org/podcasts",
  },
];

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Podcast
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
              <div className="w-full text-gray-700 text-justify">
                <p className="text-base leading-7">
                  The curated list of podcasts offers valuable insights into
                  global health and development issues.
                </p>
              </div>
              <OrganizationList title="Podcasts" organizations={podcasts} />
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedBookmarks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPublicHealthOrganizations;

interface Organization {
  name: string;
  url: string;
}

// Define the props for the OrganizationList component
interface OrganizationListProps {
  title: string;
  organizations: Organization[];
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  title,
  organizations,
}) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="organization-card border border-gray-300 rounded-lg p-4 shadow-sm transition-all flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold text-gray-800">{org.name}</h3>
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 inline-block hover:underline mt-auto"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
