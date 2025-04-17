"use client";

import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "@/public/logo3.png";
import Image from "next/image";
// import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo4 from "@/public/logo/Logo4.jpeg";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#001844] text-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Horizontal line with Back to Top button aligned right */}
        <div className="flex items-center justify-center gap-5 pb-6">
          <div className="flex-1 border-t border-gray-400">
            {/* Placeholder to push button to the right */}
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-[#FFCE00] transition duration-300"
            aria-label="Back to Top"
          >
            <span className="tracking-[3px]">BACK TO TOP</span>
            <FaArrowUp className="text-2xl" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-3 ">
          {/* First Grid */}
          <div className="flex flex-col items-center justify-center">
            <Image src={logo} alt="Logo" className="mb-6 w-80" />
            <p className="pb-10  text-xs text-center">
              Founded in 2024, HSM is a career development platform for public
              health professionals around the world.
            </p>
            <p className="font-bold  text-xs text-center">
              Health Systems Matter
            </p>
            <p className="text-center  text-xs ">Bangladesh</p>
          </div>

          {/* Second Grid */}
          <div className="flex flex-col text-xs">
            <ul className="space-y-2 md:ps-28">
              <li>
                <Link href="/about" className="hover:underline">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline">
                  RESOURCES
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="hover:underline">
                  BOOKMARKS
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:underline">
                  NEWSLETTER
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  BLOG
                </Link>
              </li>
              <li>
                <Link href="/interview" className="hover:underline">
                  INTERVIEW
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:underline">
                  YOUTUBE
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  TESTIMONIAL
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Last Grid */}
          <div className="flex flex-col items-center justify-center">
            <blockquote className="mb-6 italic text-[#FFCE00] text-center">
              “Believe work can be better. <br /> Know deeper. Do Better.”
            </blockquote>
            <p className="font-semibold text-center">
              Scope of Collaboration and Support
            </p>

            <div className="flex space-x-2">
              <div className="flex gap-2 mt-3 w-[100px]">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-[#FFCE00] w-[100px] font-bold hover:bg-[#e6b00e]"
                >
                  Support HSM
                </Button>
              </div>
              <div>
                <Button
                  className="mt-3 px-4 font-bold w-[100px]"
                  variant="destructive"
                  size="sm"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Copyright Section */}
        <div className="pt-6 mt-10 text- border-t border-gray-400">
          <p className="text-sm tracking-wide text-center flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Monaemul Islam Sizear. All rights
            reserved.{" "}
            <Link
              href="/privacy-policy-and-terms-of-use"
              className="font-bold underline text-blue-500"
            >
              Privacy Policy and Terms of use.
            </Link>
          </p>
        </div>

        <div className="flex justify-between mt-4 font-roboto">
          <div>
            <p className="text-left mb-1">Developed By</p>
            <div className="flex justify-end gap-4">
              <Image
                src={Logo4.src}
                alt="Exhort Logo"
                width={140}
                height={75}
                className=""
              />
            </div>
          </div>

          <div>
            <p className="mb-1">Let&apos;s Connect with Developer </p>
            <div className="bg-gradient-to-r from-[#000040] to-[#000014] p-3 flex gap-2 items-center">
              <div className="">
                <a href="mailto:" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30"
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
              <div className="w-[1px] bg-white h-[34px]"></div>
              <div>
                <a href="mailto:mjubayer.aiub@gmail.com">
                  mjubayer.aiub@gmail.com
                </a>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
