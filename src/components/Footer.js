import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>Codeloom Studio | Design-first Development</title>
        <meta
          name="description"
          content="We craft stunning websites and digital products focused on results. Boost your brand's growth with us!"
        />
        <meta
          name="keywords"
          content="UI/UX, Web Design, Development, React, Codeloom"
        />
        <link rel="canonical" href="https://codeloom.studio" />
      </Helmet>
      <footer className="bg-white py-10 px-4 flex flex-col items-center mt-10">
        {/* Inner container */}
        <div
          className="relative w-full max-w-[1064px] bg-white rounded-xl shadow-md px-4 sm:px-6 md:px-10 pt-20 pb-10 z-10"
          style={{ borderTop: "1.5px solid var(--Stroke-primary, #CCCCCC)" }}
        >
          {/* Stickers */}
          <img
            src="./assets/stick-left.svg"
            alt="Sticker Left"
            className="absolute top-0 left-0 translate-x-[-40%] translate-y-[-40%] w-[60px] sm:w-[80px] md:w-[160px]"
          />
          <img
            src="./assets/stick-right.svg"
            alt="Sticker Right"
            className="absolute top-0 right-0 translate-x-[40%] translate-y-[-40%] w-[60px] sm:w-[80px] md:w-[160px]"
          />

          {/* Logo + Links */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="./assets/codeloom-logo.svg"
                alt="Codeloom.studio"
                className="w-[180px] sm:w-[200px] h-auto"
              />
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              {[
                {
                  title: "Services",
                  links: [
                    "Web design",
                    "UI/UX Design",
                    "SaaS products",
                    "App development",
                  ],
                },
                {
                  title: "Why us?",
                  links: ["Testimonials", "About us", "Value prepositions"],
                },
                {
                  title: "Resources",
                  links: ["Blog", "News letter"],
                },
                {
                  title: "Contact",
                  links: ["Partner with us", "Get support", "Join our team"],
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-inter font-medium text-[#FF5722] mb-3 text-sm">
                    {section.title}
                  </h4>
                  <ul className="font-inter font-light text-[#666] space-y-2 text-xs">
                    {section.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Copyright + Socials */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 text-xs text-black px-2">
            <div className="text-center sm:text-left">
              ©2025 Codeloom.studio. All rights reserved.
              <span className="ml-4 underline cursor-pointer">
                Privacy Policy
              </span>
              <span className="ml-4 underline cursor-pointer">
                Terms and Conditions
              </span>
            </div>
            <div className="flex gap-4">
              <img src="./assets/in.svg" alt="LinkedIn" className="w-5 h-5" />
              <img src="./assets/x.svg" alt="X" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-4 text-xs text-gray-600 font-inter text-center">
          <span className="italic">Designed with ❤️ by </span>
          <a
            href="https://codeloom.studio"
            className="text-black font-medium underline"
          >
            Codeloom.studio
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
