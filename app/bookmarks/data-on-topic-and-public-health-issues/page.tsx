import { FeaturedBookmarks } from "../overview/page";

const thematicDataSources = {
  lifeExpectancy: [
    {
      name: "WHO Healthy Life Expectancy (HALE)",
      url: "https://apps.who.int/gho/data/node.main.HALE?lang=en",
    },
  ],
  humanDevelopment: [
    {
      name: "UNDP Human Development Data",
      url: "https://hdr.undp.org/data-center/country-insights#/ranks",
    },
  ],
  demographicHealth: [
    {
      name: "Demographic and Health Surveys (DHS)",
      url: "https://www.dhsprogram.com/",
    },
  ],
  immunization: [
    {
      name: "Gavi – Bangladesh Country Hub",
      url: "https://www.gavi.org/programmes-impact/country-hub/south-east-asia/bangladesh",
    },
    {
      name: "WHO/UNICEF National Immunization Coverage",
      url: "https://www.who.int/news-room/questions-and-answers/item/who-unicef-estimates-of-national-immunization-coverage",
    },
  ],
  healthFinancing: [
    {
      name: "ThinkWell – Health Financing",
      url: "https://thinkwell.global/publications/?search_publications=health+financing",
    },
    {
      name: "IHME – Global Health Financing",
      url: "https://www.healthdata.org/health-financing",
    },
    {
      name: "International Budget Partnership",
      url: "https://internationalbudget.org/",
    },
  ],
  universalHealthCoverage: [
    {
      name: "World Bank – UHC Data",
      url: "https://datatopics.worldbank.org/universal-health-coverage/resources.html",
    },
  ],
  aids: [
    {
      name: "UNAIDS – AIDSinfo",
      url: "https://aidsinfo.unaids.org/",
    },
  ],
  healthSystems: [
    {
      name: "ThinkWell – Health Systems",
      url: "https://thinkwell.global/publications/?search_publications=health+systems",
    },
    {
      name: "Eye on Global Health – Systems & Governance",
      url: "https://eyeonglobalhealth.com/category/health-care-systems-policies-and-governance/",
    },
  ],
  africaPublicHealthInfographics: [
    {
      name: "PMA Data – Technical Areas",
      url: "https://www.pmadata.org/technical-areas",
    },
  ],
  nutrition: [
    {
      name: "Global Nutrition Report",
      url: "https://globalnutritionreport.org/",
    },
  ],
  tuberculosis: [
    {
      name: "Stop TB – Country Dashboard",
      url: "https://dashboards.stoptb.org/country-profile.html",
    },
  ],
  population: [
    {
      name: "PRB – Population Data Sheets",
      url: "https://www.prb.org/collections/data-sheets/",
    },
  ],
  climate: [
    {
      name: "NOAA Climate Data",
      url: "https://www.climate.gov/",
    },
  ],
  gender: [
    {
      name: "UN Women Data Hub",
      url: "https://data.unwomen.org/",
    },
    {
      name: "ILO – Gender Gap in Labor Force",
      url: "https://www.ilo.org/infostories/en-GB/Stories/Employment/barriers-women#global-gap/gap-labour-force",
    },
  ],
  wash: [
    {
      name: "WHO/UNICEF WASH Data",
      url: "https://washdata.org/",
    },
    {
      name: "WASH – Explore the Data",
      url: "https://washdata.org/data",
    },
  ],
  hunger: [
    {
      name: "Global Hunger Index",
      url: "https://www.globalhungerindex.org/",
    },
  ],
  covid19: [
    {
      name: "WHO – COVID-19 Dashboard",
      url: "https://data.who.int/dashboards/covid19/cases?n=c",
    },
  ],
  bangladeshHealthBulletin: [
    {
      name: "DGHS Bangladesh Health Bulletin",
      url: "https://old.dghs.gov.bd/index.php/en/publications/health-bulletin/dghs-health-bulletin",
    },
  ],
  sdgData: [
    {
      name: "UN Women – SDG Gender Tracker",
      url: "https://data.unwomen.org/features/are-we-track-achieve-gender-equality-2030",
    },
    {
      name: "World Bank – SDG Atlas",
      url: "https://datatopics.worldbank.org/sdgatlas/",
    },
    {
      name: "Our World in Data – SDG Progress Tracker",
      url: "https://ourworldindata.org/sdgs",
    },
  ],
  employment: [
    {
      name: "ILO – Global Regions",
      url: "https://ilo.org/global/regions/lang--en/index.htm",
    },
    {
      name: "ILO – Country Gateway (Bangladesh)",
      url: "https://www.ilo.org/gateway/faces/home/ctryHome?locale=EN&countryCode=BGD&_adf.ctrl-state=162d3d0rex_9",
    },
    {
      name: "ILOSTAT Employment Database",
      url: "https://ilostat.ilo.org/data/",
    },
    {
      name: "ILO Bangladesh Office",
      url: "https://www.ilo.org/dhaka/lang--en/index.htm",
    },
  ],
  incomeClassification: [
    {
      name: "World Bank – Country Income Classifications",
      url: "https://datahelpdesk.worldbank.org/knowledgebase/articles/906519",
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
              Data on Topic and Public Health Issues
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
                title="Life expectancy"
                organizations={thematicDataSources.lifeExpectancy}
              />
              <OrganizationList
                title="Human development: country wise data"
                organizations={thematicDataSources.humanDevelopment}
              />
              <OrganizationList
                title="Demographic health survey"
                organizations={thematicDataSources.demographicHealth}
              />
              <OrganizationList
                title="Immunization/Vaccine"
                organizations={thematicDataSources.immunization}
              />
              <OrganizationList
                title="Health Financing & Budget"
                organizations={thematicDataSources.healthFinancing}
              />
              <OrganizationList
                title="Universal Health Coverage Data"
                organizations={thematicDataSources.universalHealthCoverage}
              />
              <OrganizationList
                title="AIDS"
                organizations={thematicDataSources.aids}
              />
              <OrganizationList
                title="Health System"
                organizations={thematicDataSources.healthSystems}
              />
              <OrganizationList
                title="Data and infographics on public health topics for African countries"
                organizations={
                  thematicDataSources.africaPublicHealthInfographics
                }
              />
              <OrganizationList
                title="Nutrition"
                organizations={thematicDataSources.nutrition}
              />
              <OrganizationList
                title="Tuberculosis"
                organizations={thematicDataSources.tuberculosis}
              />
              <OrganizationList
                title="Population"
                organizations={thematicDataSources.population}
              />
              <OrganizationList
                title="Climate"
                organizations={thematicDataSources.climate}
              />
              <OrganizationList
                title="Gender"
                organizations={thematicDataSources.gender}
              />
              <OrganizationList
                title="Wash"
                organizations={thematicDataSources.wash}
              />
              <OrganizationList
                title="Hunger"
                organizations={thematicDataSources.hunger}
              />
              <OrganizationList
                title="COVID-19"
                organizations={thematicDataSources.covid19}
              />
              <OrganizationList
                title="Bangladesh Health Bulleting"
                organizations={thematicDataSources.bangladeshHealthBulletin}
              />
              <OrganizationList
                title="Data availability for SDG as per country"
                organizations={thematicDataSources.sdgData}
              />
              <OrganizationList
                title="Employment related information"
                organizations={thematicDataSources.employment}
              />
              <OrganizationList
                title="Income-based country specifications"
                organizations={thematicDataSources.incomeClassification}
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
