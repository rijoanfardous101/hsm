import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="relative w-full h-[85px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Owner and Data Controller
            </h2>
            <p>
              <strong>Name:</strong> Monaemul Islam Sizear <br />
              <strong>Location:</strong> Pallabi, Dhaka, Bangladesh <br />
              <strong>Contact Email:</strong>{" "}
              <a
                href="mailto:sizear.monaemul@gmail.com"
                className="text-blue-600 underline"
              >
                sizear.monaemul@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Privacy Statement</h2>
            <p>
              This website represents the views of{" "}
              <strong>Health Systems Matter</strong>, its founder, and guest
              contributors. It does not reflect the official opinions of any
              organizations affiliated with the owner or contributors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Changes to this Privacy Policy
            </h2>
            <p>
              The Owner reserves the right to make changes to this privacy
              policy at any time by notifying its users on this page and
              possibly within this website, social media, or via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have any questions or comments regarding our privacy policy
              and practices, you may contact us at: <br />
              <strong>Health Systems Matter</strong> <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:healthsystemsmatter@gmail.com"
                className="text-blue-600 underline"
              >
                healthsystemsmatter@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
