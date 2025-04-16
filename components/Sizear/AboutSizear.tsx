import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

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
          <div className="mt-6 space-y-5  text-gray-700">
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

            <p className="text-[17px]  leading-[26px]">
              I firmly realize that poor health outcomes are deeply rooted in
              low education levels, socio-economic disparities, structural
              inequalities, and weak governance. To address these complexities,
              I have pursued a multidisciplinary academic journey, combining
              studies in Anthropology, Public Health, and Urban Development
              Policy across institutions in Bangladesh and the Netherlands. This
              diverse expertise equips me to design holistic, innovative
              solutions to tackle global health challenges.
            </p>

            <p className="text-[17px]  leading-[26px]">
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
              <FaLinkedin className="text-[26px] text-blue-700 hover:text-blue-900" />
            </a>
            <a href="mailto:sizear.monaemul@gmail.com" className="">
              {/* <MdEmail className="text-[30px] text-" /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                // style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <rect
                    width="446"
                    height="305.613"
                    fill="#e57e25"
                    rx="25.31"
                    opacity="1"
                    data-original="#e57e25"
                  ></rect>
                  <path
                    fill="#f29c1f"
                    d="M435.739 300.212A26.13 26.13 0 0 0 446 279.434V26.179A26.179 26.179 0 0 0 419.821 0H166.508L435.2 300.014z"
                    opacity="1"
                    data-original="#f29c1f"
                  ></path>
                  <path
                    fill="#f29c1f"
                    d="M279.492 0H26.179A26.179 26.179 0 0 0 0 26.179v253.255a26.124 26.124 0 0 0 9.7 20.334l1.1.246z"
                    opacity="1"
                    data-original="#f29c1f"
                  ></path>
                  <path
                    fill="#f0c419"
                    d="M419.821 0H26.179A26.179 26.179 0 0 0 0 26.179v10.063l188.916 130.177a60.068 60.068 0 0 0 68.168 0L446 36.242V26.179A26.179 26.179 0 0 0 419.821 0z"
                    opacity="1"
                    data-original="#f0c419"
                  ></path>
                  <path
                    fill="#ff5364"
                    d="M116.126 512a8 8 0 0 1-5.157-14.119l110.588-91.916a8 8 0 1 1 10.306 12.235l-110.587 91.919a7.97 7.97 0 0 1-5.15 1.881z"
                    opacity="1"
                    data-original="#ff5364"
                  ></path>
                  <path
                    fill="#35acef"
                    d="M209.927 494.588a8 8 0 0 1-5.275-14.018l27.222-24.87a8 8 0 1 1 10.543 12.035l-27.217 24.87a7.967 7.967 0 0 1-5.273 1.983z"
                    opacity="1"
                    data-original="#35acef"
                  ></path>
                  <path
                    fill="#285680"
                    d="m239.598 336.348 50.471 120.895 92.207-138.322 129.63-123.515z"
                    opacity="1"
                    data-original="#285680"
                  ></path>
                  <path
                    fill="#7ed0fc"
                    d="m511.906 194.516-266.03 155.177-78.277-20.307z"
                    opacity="1"
                    data-original="#7ed0fc"
                  ></path>
                  <path
                    fill="#35acef"
                    d="M418.218 297.138 290.069 457.243l15.123-91.701z"
                    opacity="1"
                    data-original="#35acef"
                  ></path>
                  <path
                    fill="#7ed0fc"
                    d="M511.906 195.406c.073-.227.169-.4 0-.232L305.192 365.542 433.246 400.4z"
                    opacity="1"
                    data-original="#7ed0fc"
                  ></path>
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
