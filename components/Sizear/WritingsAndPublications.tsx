import { SiGooglescholar, SiOrcid, SiResearchgate } from "react-icons/si";

import OpinionArticle from "./OpinionArticle";
import PublicationsInPeerReviewed from "./PublicationsInPeerReviewed";

const WritingsAndPublications = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16 ">
        <h3 className="text-2xl md:text-2xl font-bold  pt-6 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Research and Publication
        </h3>

        {/* Content  */}
        <div>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            An integral and fulfilling aspect of my public health journey
            involves conducting research to understand complex health sector
            challenges and generate evidence that supports government
            initiatives through targeted advocacy. I have contributed as both
            first author and co-author to numerous scholarly publications
            featured in reputable, peer-reviewed journals.
          </p>
        </div>

        {/* Publications in Peer Reviewed Journals */}
        <PublicationsInPeerReviewed />

        {/* Opinion articles */}
        <OpinionArticle />

        <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6 mt-10">
          Connect with My Research
        </h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://scholar.google.com/citations?user=D34eyg4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
          >
            <SiGooglescholar className="text-xl" />
            <span>Google Scholar</span>
          </a>
          <a
            href="https://www.researchgate.net/profile/Monaemul-Sizear"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            <SiResearchgate className="text-xl" />
            <span>ResearchGate</span>
          </a>
          <a
            href="https://orcid.org/0000-0001-6478-9512"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            <SiOrcid className="text-xl" />
            <span>ORCID</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WritingsAndPublications;
