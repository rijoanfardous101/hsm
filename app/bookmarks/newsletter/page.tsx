import { FeaturedBookmarks } from "../overview/page";

const newsletters = [
  {
    name: "WHO Newsletters",
    url: "https://www.who.int/news-room/newsletters",
  },
  {
    name: "CDC Global Health Newsletter",
    url: "https://www.cdc.gov/globalhealth/newsletter/index.html",
  },
  {
    name: "World Bank Newsletter Subscription",
    url: "https://www.worldbank.org/en/newsletter-subscription",
  },
  {
    name: "World Bank - Health Topic News",
    url: "https://www.worldbank.org/en/topic/health/news",
  },
  {
    name: "World Bank Health Programs Newsletter",
    url: "https://www.worldbank.org/en/programs/multi-donor-trust-fund-for-integrating-externally-financed-health-programs/newsletter",
  },
  {
    name: "UNFPA News",
    url: "https://www.unfpa.org/news",
  },
  {
    name: "Data for Impact Newsletter",
    url: "https://www.data4impactproject.org/resources/newsletter/",
  },
  {
    name: "Oxford Policy Management Newsletters",
    url: "https://www.opml.co.uk/about-us/newsletters",
  },
  {
    name: "PAHO Newsletters",
    url: "https://www.paho.org/en/newsletters",
  },
  {
    name: "United States Pharmacopeia (USP) Newsroom",
    url: "https://www.usp.org/about/newsroom",
  },
  {
    name: "International Health Policies Newsletter",
    url: "https://www.internationalhealthpolicies.org/newsletter/",
  },
  {
    name: "Health Systems Global Newsletter",
    url: "https://healthsystemsglobal.org/hsg-newsletter/",
  },
  {
    name: "FHI 360 Newsroom",
    url: "https://www.fhi360.org/newsroom",
  },
  {
    name: "Rural Water Supply Network Resources",
    url: "https://www.rural-water-supply.net/en/resources/details/420",
  },
  {
    name: "ASPPH Friday Letter",
    url: "https://aspph.org/news-events/friday-letter/",
  },
  {
    name: "JSI Newsletter Archives",
    url: "https://www.jsi.com/media/newsletter-archives/",
  },
  {
    name: "JAMA Health Forum",
    url: "https://jamanetwork.com/journals/jama-health-forum",
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
              Newsletter
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
                  A series of blogs and newsletters maintained by organizations
                  and dedicated professionals is available. By subscribing to
                  your preferred sites, you can stay up to date with the latest
                  updates and new resources. The list is extensive but not
                  exhaustive and is updated periodically.
                </p>
              </div>
              <OrganizationList
                title="Newsletters"
                organizations={newsletters}
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
