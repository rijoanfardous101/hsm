import { FeaturedBookmarks } from "../overview/page";

const learningResources = {
  "UN Courses": [
    {
      name: "UN Courses",
      url: "https://unccelearn.org/courses/?lang=en&language=en",
    },
    {
      name: "UN Mandatory Learning",
      url: "https://hr.un.org/page/mandatory-learning",
    },
  ],
  "World Bank Academy": [
    {
      name: "World Bank Academy",
      url: "https://academy.worldbank.org/en/home",
    },
  ],
  "WHO Courses": [
    {
      name: "WHO Courses",
      url: "https://openwho.org/courses",
    },
  ],
  UNICEF: [
    {
      name: "UNICEF",
      url: "https://agora.unicef.org/local/catalogue/index.php?filters[]=1",
    },
  ],
  "Harvard University": [
    {
      name: "Harvard University",
      url: "https://pll.harvard.edu/subject/public-health",
    },
  ],
  "Cornell University": [
    {
      name: "Cornell University",
      url: "https://ecornell.cornell.edu/certificates/",
    },
  ],
  "Global Health e-Learning Center": [
    {
      name: "Global Health e-Learning Center",
      url: "https://www.globalhealthlearning.org/courses",
    },
  ],
  Coursera: [
    {
      name: "Coursera",
      url: "https://www.coursera.org/browse/health/public-health",
    },
  ],
  Udemy: [
    {
      name: "Udemy",
      url: "https://www.udemy.com/courses/search/?src=ukw&q=Public+health",
    },
  ],
  edX: [
    {
      name: "edX",
      url: "https://www.edx.org/search?q=Public+health",
    },
  ],
  Alison: [
    {
      name: "Alison",
      url: "https://alison.com/tag/public-health",
    },
  ],
  "My MOOC": [
    {
      name: "My MOOC",
      url: "https://www.my-mooc.com/en/categorie/public-health",
    },
  ],
};

const KeyPublicHealthOrganizations = () => {
  return (
    <div className="pb-16">
      {/* Page Title Section */}
      <div className="relative w-full h-[90px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Training and Courses
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
              {/* Description Section */}
              <div className="w-full text-gray-700 text-justify">
                <p className="text-base leading-7">
                  This list of online training and courses in global health and
                  health systems can help you choose and enroll in programs to
                  enhance your skills and expand your professional network.
                </p>
              </div>

              <OrganizationList
                title="UN Courses"
                organizations={learningResources["UN Courses"]}
              />
              <OrganizationList
                title="World Bank Academy"
                organizations={learningResources["World Bank Academy"]}
              />
              <OrganizationList
                title="WHO Courses"
                organizations={learningResources["WHO Courses"]}
              />
              <OrganizationList
                title="UNICEF"
                organizations={learningResources["UNICEF"]}
              />
              <OrganizationList
                title="Harvard University"
                organizations={learningResources["Harvard University"]}
              />
              <OrganizationList
                title="Cornell University"
                organizations={learningResources["Cornell University"]}
              />
              <OrganizationList
                title="Global Health e-Learning Center"
                organizations={
                  learningResources["Global Health e-Learning Center"]
                }
              />
              <OrganizationList
                title="Coursera"
                organizations={learningResources["Coursera"]}
              />
              <OrganizationList
                title="Udemy"
                organizations={learningResources["Udemy"]}
              />
              <OrganizationList
                title="edX"
                organizations={learningResources["edX"]}
              />
              <OrganizationList
                title="Alison"
                organizations={learningResources["Alison"]}
              />
              <OrganizationList
                title="My MOOC"
                organizations={learningResources["My MOOC"]}
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
