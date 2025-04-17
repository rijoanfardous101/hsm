import Image from "next/image";

const AboutSizear = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-10 md:py-16 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden text-justify">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-green-200 opacity-10 rounded-full blur-2xl -translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10 z-10 justify-between">
        {/* Left content */}
        <div className="w-full md:w-[80%] text-gray-800 -mt-6">
          {/* Name */}
          <h1 className="text-[36px] font-bold text-gray-900">
            <span className="text-[#0070c0]">Monaemul</span>{" "}
            <span className="text-[#155f82]">Islam</span>{" "}
            <span className="text-[#0f9ed5]">Sizear</span>{" "}
            <span className="text-sm font-medium text-gray-600">
              (MSS, MPH, MSc)
            </span>
          </h1>

          {/* Titles */}
          <p className="mt-0 text-base">
            <span className="text-blue-600 font-semibold text-[17px]">
              Founder of Health Systems Matter
            </span>
            <br />
            <span className="text-green-600 font-medium">
              Urban Public Health Anthropologist
            </span>{" "}
            |{" "}
            <span className="text-orange-600 font-medium">
              Health System Activist
            </span>{" "}
            |{" "}
            <span className="text-purple-600 font-medium">Aspiring Writer</span>
          </p>

          {/* Paragraphs */}
          <div className="mt-2 space-y-4  text-gray-700">
            <p className="text-[17px] leading-[26px]">
              I am Monaemul Islam Sizear, widely known as Sizear. Public health
              is my profession, passion, and purpose by choice. My mission is to
              advance public health through evidence-based approaches and
              stronger health systems. To support this commitment, I initiated
              the <span className="font-bold">Health Systems Matter</span>{" "}
              platform, leveraging a website and social media to promote and
              disseminate critical public health issues. I also contribute
              public health columns to national newspapers and blogs, and have
              published research in peer-reviewed journals.
            </p>

            <p className="text-[17px] leading-[26px]">
              I firmly realize that poor health outcomes are deeply rooted in
              low education levels, socio-economic disparities, structural
              inequalities, and weak governance. To address these complexities,
              I have pursued a multidisciplinary academic journey, combining
              studies in Anthropology, Public Health, and Urban Development
              Policy across institutions in Bangladesh and the Netherlands. This
              diverse expertise equips me to design holistic, innovative
              solutions to tackle global health challenges.
            </p>

            <p className="text-[17px] leading-[26px]">
              Sizear is a health systems advocate who aspires to be a global
              health champion, committed to transforming lives.
            </p>

            <p className="font-semibold text-blue-700 text-[17px]  leading-[26px]">
              Let’s build a healthier future together!
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="">
          <div>
            <Image
              src="/sizearImage.webp"
              alt="Monaemul Islam Sizear"
              width={300}
              height={200}
              className="rounded-2xl w-full"
            />
          </div>

          <div className="flex gap-3 items-center mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/monaemulsizear/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="36"
                height="36"
                x="0"
                y="0"
                viewBox="0 0 152 152"
                // style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <g data-name="Layer 2">
                    <g data-name="10.linkedin">
                      <circle
                        cx="76"
                        cy="76"
                        r="76"
                        fill="#0b69c7"
                        opacity="1"
                        data-original="#0b69c7"
                      />
                      <g fill="#fff">
                        <path
                          d="M59 48.37A10.38 10.38 0 1 1 48.63 38 10.38 10.38 0 0 1 59 48.37z"
                          fill="#ffffff"
                          opacity="1"
                          data-original="#ffffff"
                        />
                        <rect
                          width="16.06"
                          height="50.93"
                          x="40.6"
                          y="63.07"
                          rx="2.57"
                          fill="#ffffff"
                          opacity="1"
                          data-original="#ffffff"
                        />
                        <path
                          d="M113.75 89.47v22.17a2.36 2.36 0 0 1-2.36 2.36H99.67a2.36 2.36 0 0 1-2.36-2.36V90.16c0-3.21.93-14-8.38-14-7.22 0-8.69 7.42-9 10.75v24.78a2.36 2.36 0 0 1-2.34 2.31H66.25a2.35 2.35 0 0 1-2.36-2.36v-46.2a2.36 2.36 0 0 1 2.36-2.37h11.34A2.37 2.37 0 0 1 80 65.44v4c2.68-4 6.66-7.12 15.13-7.12 18.73-.01 18.62 17.52 18.62 27.15z"
                          fill="#ffffff"
                          opacity="1"
                          data-original="#ffffff"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a href="mailto:sizear.monaemul@gmail.com" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="36"
                height="36"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <g data-name="Layer 2">
                    <g data-name="01.mail">
                      <circle
                        cx="256"
                        cy="256"
                        r="256"
                        fill="#2196f3"
                        opacity="1"
                        data-original="#2196f3"
                      />
                      <g fill="#fff">
                        <path
                          d="M255.94 268.64 121 201.32v133.76a25.66 25.66 0 0 0 25.59 25.59h218.82A25.66 25.66 0 0 0 391 335.08V202.73z"
                          fill="#ffffff"
                          opacity="1"
                          data-original="#ffffff"
                        />
                        <path
                          d="M256.06 243.36 391 177.5v-.58a25.66 25.66 0 0 0-25.59-25.59H146.59A25.66 25.66 0 0 0 121 176z"
                          fill="#ffffff"
                          opacity="1"
                          data-original="#ffffff"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSizear;
