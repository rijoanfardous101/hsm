import NextButton from "@/components/Shared/NextButton";

/* eslint-disable react/no-unescaped-entities */
const HeadlineNews = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12 pb-20">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2D8CBB]">
          📰 Headline News
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Stay updated with major global health developments shaping policies
          and responses.
        </p>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* News Item 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            🇺🇸 U.S. Withdraws from WHO – January 20, 2025
          </h2>
          <p className="text-gray-600">
            The United States has officially withdrawn from the World Health
            Organization (WHO), a move that significantly impacts global health
            collaborations.
          </p>
          <a
            href="https://www.whitehouse.gov/presidential-actions/2025/01/withdrawing-the-united-states-fromthe-worldhealth-organization/"
            className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
          >
            Read More →
          </a>
        </div>

        {/* News Item 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            🌍 WHO's Health Emergency Appeal 2025
          </h2>
          <p className="text-gray-600">
            The World Health Organization (WHO) has launched its Health
            Emergency Appeal for 2025 to address urgent global health crises.
          </p>
          <a
            href="https://www.who.int/emergencies/funding/health-emergency-appeals/2025"
            className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
          >
            Read More →
          </a>
        </div>
      </div>
      <NextButton
        href="/news/data-in-global-health"
        text="Next"
        className="bg-[#00DFC0] text-black mt-16"
      />
    </div>
  );
};

export default HeadlineNews;
