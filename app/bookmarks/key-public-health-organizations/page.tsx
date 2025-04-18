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

const organizations = {
  UNAgencies: [
    { name: "World Health Organization (WHO)", url: "https://www.who.int/" },
    {
      name: "UNICEF (United Nations Children’s Fund)",
      url: "https://www.unicef.org/",
    },
    {
      name: "UNFPA (United Nations Population Fund)",
      url: "https://www.unfpa.org/",
    },
    {
      name: "UNAIDS (Joint United Nations Programme on HIV/AIDS)",
      url: "https://www.unaids.org/",
    },
    {
      name: "Food and Agriculture Organization (FAO)",
      url: "https://www.fao.org/",
    },
    {
      name: "United Nations Development Programme (UNDP)",
      url: "https://www.undp.org/",
    },
    { name: "World Food Programme (WFP)", url: "https://www.wfp.org/" },
    {
      name: "United Nations High Commissioner for Refugees (UNHCR)",
      url: "https://www.unhcr.org/",
    },
    {
      name: "United Nations Environment Programme (UNEP)",
      url: "https://www.unep.org/",
    },
  ],
  regionalOrganizations: [
    { name: "Asian Development Bank (ADB)", url: "https://www.adb.org/" },
    { name: "African Development Bank (AfDB)", url: "https://www.afdb.org/" },
    { name: "African Union (AU)", url: "https://au.int/" },
    {
      name: "Inter-American Development Bank (IDB)",
      url: "https://www.iadb.org/",
    },
    { name: "European Union (EU)", url: "https://europa.eu/" },
    {
      name: "Pan American Health Organization (PAHO)",
      url: "https://www.paho.org/",
    },
    {
      name: "Caribbean Public Health Agency (CARPHA)",
      url: "https://carpha.org/",
    },
  ],
  bilateralDonors: [
    {
      name: "USAID (United States Agency for International Development)",
      url: "https://www.usaid.gov/",
    },
    {
      name: "FCDO/DFID (UK Foreign, Commonwealth & Development Office)",
      url: "https://www.gov.uk/government/organisations/foreign-commonwealth-and-development-office",
    },
    {
      name: "GIZ (German Agency for International Cooperation)",
      url: "https://www.giz.de/en/html/index.html",
    },
    {
      name: "JICA (Japan International Cooperation Agency)",
      url: "https://www.jica.go.jp/english/index.html",
    },
    {
      name: "Norad (Norwegian Agency for Development Cooperation)",
      url: "https://www.norad.no/en/frontpage/",
    },
    {
      name: "Global Affairs Canada (GAC)",
      url: "https://www.international.gc.ca/",
    },
    {
      name: "Australian Department of Foreign Affairs and Trade (DFAT)",
      url: "https://www.dfat.gov.au/",
    },
    {
      name: "Sida (Swedish International Development Cooperation Agency)",
      url: "https://www.sida.se/English/",
    },
    {
      name: "Netherlands Ministry of Foreign Affairs",
      url: "https://www.government.nl/ministries/ministry-of-foreign-affairs",
    },
  ],
  publicHealthOrgs: [
    { name: "World Bank Group", url: "https://www.worldbank.org/" },
    {
      name: "Global Fund to Fight AIDS, Tuberculosis, and Malaria",
      url: "https://www.theglobalfund.org/",
    },
    { name: "Gavi, the Vaccine Alliance", url: "https://www.gavi.org/" },
    {
      name: "International Federation of Red Cross and Red Crescent Societies (IFRC)",
      url: "https://www.ifrc.org/",
    },
    { name: "Médecins Sans Frontières (MSF)", url: "https://www.msf.org/" },
    { name: "PATH", url: "https://www.path.org/" },
    { name: "Save the Children", url: "https://www.savethechildren.org/" },
    { name: "Care International", url: "https://www.care.org/" },
    {
      name: "International Planned Parenthood Federation (IPPF)",
      url: "https://www.ippf.org/",
    },
    {
      name: "Management Sciences for Health (MSH)",
      url: "https://www.msh.org/",
    },
    {
      name: "Family Health International/FHI 360",
      url: "https://www.fhi360.org/",
    },
    {
      name: "Bangladesh Rural Advancement Committee (BRAC)",
      url: "https://www.brac.net/",
    },
  ],
  philanthropicOrgs: [
    {
      name: "Bill & Melinda Gates Foundation",
      url: "https://www.gatesfoundation.org/",
    },
    { name: "Wellcome Trust", url: "https://wellcome.org/" },
    {
      name: "Rockefeller Foundation",
      url: "https://www.rockefellerfoundation.org/",
    },
    { name: "Ford Foundation", url: "https://www.fordfoundation.org/" },
    {
      name: "Clinton Health Access Initiative (CHAI)",
      url: "https://clintonhealthaccess.org/",
    },
    { name: "Bloomberg Philanthropies", url: "https://www.bloomberg.org/" },
    {
      name: "Global Health Innovative Technology Fund (GHIT)",
      url: "https://www.ghitfund.org/",
    },
  ],
  privateOrgs: [
    { name: "ThinkWell Global", url: "https://www.thinkwell.global/" },
    { name: "Open Development", url: "https://opendevelopment.org/" },
  ],
  researchOrgs: [
    {
      name: "Centers for Disease Control and Prevention (CDC)",
      url: "https://www.cdc.gov/",
    },
    {
      name: "Johns Hopkins Bloomberg School of Public Health",
      url: "https://www.jhsph.edu/",
    },
    {
      name: "National Institutes of Health (NIH)",
      url: "https://www.nih.gov/",
    },
    {
      name: "London School of Hygiene & Tropical Medicine",
      url: "https://www.lshtm.ac.uk/",
    },
    {
      name: "Institute for Health Metrics and Evaluation (IHME)",
      url: "https://www.healthdata.org/",
    },
    { name: "Population Council – Global", url: "https://www.popcouncil.org/" },
    {
      name: "Health Systems Global (HSG)",
      url: "https://healthsystemsglobal.org/",
    },
    {
      name: "International Centre for Diarrhoeal Disease Research, Bangladesh (icddr,b)",
      url: "https://www.icddrb.org/",
    },
    {
      name: "Institute of Tropical Medicine (ITM) – Belgium",
      url: "https://www.itg.be/",
    },
    {
      name: "Robert Koch Institute (RKI) – Germany",
      url: "https://www.rki.de/",
    },
    {
      name: "Health Systems Research Institute (HSRI) – Thailand",
      url: "https://www.hsri.org",
    },
  ],
  otherPartnerships: [
    { name: "Stop TB Partnership", url: "https://www.stoptb.org/" },
    { name: "RBM Partnership to End Malaria", url: "https://endmalaria.org/" },
    {
      name: "Every Woman Every Child",
      url: "https://www.everywomaneverychild.org/",
    },
    { name: "Health Systems Global", url: "https://healthsystemsglobal.org/" },
    {
      name: "Global Polio Eradication Initiative (GPEI)",
      url: "https://polioeradication.org/",
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
              Key Public Health Organizations
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
              {/* <div className="w-full">
                <Image
                  src="https://img.freepik.com/free-photo/business-work-concept_1388-69.jpg?t=st=1741539768~exp=1741543368~hmac=f9cfaefc1f6459c616b427197be993fbb23876f5cdaa641d7fe9f50ab34a8335&w=1060"
                  alt="Overview"
                  width={1000}
                  height={300}
                  className="w-full h-64 brightness-75 object-cover mix-blend-darken"
                />
              </div> */}

              {/* Description Section */}
              <div className="w-full text-gray-700 text-justify">
                <p className="text-base leading-7">
                  Many organizations, both large and small, have long been
                  dedicated to public health and health systems strengthening.
                  Understanding their work and plans to promote public health is
                  both enlightening and valuable. This section provides a
                  categorized list of organizations involved in public health at
                  global, regional, and local levels, including UN agencies,
                  donor agencies, international organizations, philanthropic
                  foundations, private entities, and key partnerships and
                  alliances.
                </p>
              </div>

              <OrganizationList
                title="United Nations (UN) Agencies"
                description="These organizations operate globally and address public health within the broader framework of sustainable development:"
                organizations={organizations.UNAgencies}
              />
              <OrganizationList
                title="Regional Multilateral Organizations"
                description="Regional Multilateral Organizations are entities that operate within specific geographic regions, pooling resources from member countries to address shared challenges, including public health."
                organizations={organizations.regionalOrganizations}
              />
              <OrganizationList
                title="Bilateral Donor Agencies"
                description="These agencies are funded and operated by individual countries, providing financial and technical assistance to partner nations:"
                organizations={organizations.bilateralDonors}
              />
              <OrganizationList
                title="International Public Health Organizations"
                description="These organizations provide expertise, technical support, and advocacy:"
                organizations={organizations.publicHealthOrgs}
              />
              <OrganizationList
                title="Philanthropic Organizations"
                description="These entities support public health programs through grants and advocacy."
                organizations={organizations.philanthropicOrgs}
              />
              <OrganizationList
                title="Private Organizations"
                description=""
                organizations={organizations.privateOrgs}
              />
              <OrganizationList
                title="Research and Policy Organizations"
                description=""
                organizations={organizations.researchOrgs}
              />
              <OrganizationList
                title="Other Key Partnerships and Alliances"
                description=""
                organizations={organizations.otherPartnerships}
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

export default KeyPublicHealthOrganizations;

interface Organization {
  name: string;
  url: string;
}

// Define the props for the OrganizationList component
interface OrganizationListProps {
  title: string;
  description: string;
  organizations: Organization[];
}

// OrganizationList component to display a list of organizations
const OrganizationList: React.FC<OrganizationListProps> = ({
  title,
  description,
  organizations,
}) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
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
