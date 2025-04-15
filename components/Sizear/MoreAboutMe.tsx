const MoreAboutMe = () => {
  return (
    <div className=" bg-slate-50">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold  text-center text-[#155f82]">
          More About Me
          <span className="block w-72 h-1 bg-blue-500 mx-auto mt-0 rounded-full"></span>
        </h2>

        {/* Career Profile/Professional Endeavors  */}
        <div>
          <h3 className="text-2xl md:text-2xl font-bold  pt-16 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
            Career Profile
          </h3>

          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            I am a public health policy and system strengthening professional
            with over 12 years of progressive experience in program design,
            management, and implementation research across both national and
            international platforms. Most recently, I served as a Technical
            Advisor at Open Development, a U.S.-based international
            organization, where I contributed to a global initiative. This
            project focuses on enhancing health systems through strategic policy
            reforms and regulatory innovations.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            My professional interests lie at the intersection of health systems,
            public financial management, policy analysis, public-private
            partnerships, health-seeking behavior, systems thinking, and
            human-centered design. I am particularly focused on leveraging these
            disciplines to inform and shape effective health policies that
            address the needs of populations in complex and rapidly urbanizing
            settings.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            I firmly believe that health interventions, in isolation, are
            insufficient to achieve lasting transformation. As an advocate for
            holistic, system-based approaches, I actively engage in public
            health activism. My initiative, Health Systems Matter, reflects my
            commitment to contributing as a confident global health system
            professional while also supporting and complementing the growth of
            emerging professionals in the field. In parallel, I serve as the
            Organizing Secretary of the Public Health Foundation of Bangladesh
            (PHFBD), a leading institution dedicated to advancing
            evidence-informed public health practices and fostering national
            dialogue on emerging health issues.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            Through my multi-faceted roles, I strive to leverage evidence,
            systems thinking, and cross-sectoral collaboration to address
            pressing health challenges and co-create sustainable,
            people-centered solutions that leave a lasting societal impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
