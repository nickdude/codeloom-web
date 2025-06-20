import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white pt-28 pb-16 px-4 text-center">
      {/* Top Line */}
      <p className="font-inter font-medium text-[14.75px] leading-[19.2px] text-brandDark flex items-center justify-center gap-2">
        <img src="./assets/flash.svg" alt="Icon" className="w-4 h-4" />
        We are Design, Development & Marketing Studio
      </p>

      {/* Main Heading */}
      <h1 className="font-grotesk font-medium text-[42px] sm:text-[49.36px] leading-[125%] tracking-[-1.04px] text-center mt-4">
        <span className="text-black">Your Development partner</span>
        <br />
        <span className="text-brand">for Real Business Impact</span>
      </h1>

      {/* Subtext */}
      <p className="font-inter font-small text-[16px] leading-[24px] max-w-2xl mx-auto mt-6 text-brandDark">
        At Codeloom.Studio, we bring together thoughtful design, robust
        development, and result-driven marketing to craft websites and apps that
        not only look great but also attract, convert, and help your business
        grow.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-brand text-white font-inter font-medium text-[15px] leading-[15px] px-6 py-2 rounded-md hover:bg-orange-700 transition flex items-center gap-2">
          <img src="./assets/cube.svg" alt="cube" className="w-4 h-4" />
          Book Intro Call
        </button>

        <button className="bg-white text-brandDark border border-brand font-inter font-medium text-[15px] leading-[15px] px-6 py-2 rounded-md hover:bg-gray-100 transition flex items-center gap-2">
          Book on
          <img
            src="./assets/calendly_logo.svg"
            alt="Calendly"
            className="w-15 h-15 m-0"
          />
        </button>
      </div>

      {/* Trusted By */}
      <p className="font-inter font-small text-[16px] leading-[24px] text-gray-500 mt-20 tracking-[-0.32px]">
        Trusted by 40+ founders and counting
      </p>

      {/* Logo Marquee */}
      <div className="mt-8 overflow-hidden relative">
        <div className="animate-scrollReverse whitespace-nowrap flex gap-8">
          {/* Add more logos as needed */}
          {[
            "logo1.svg",
            "logo2.svg",
            "logo3.svg",
            "logo4.svg",
            "logo5.svg",
            "logo6.svg",
            "logo7.svg",
            "logo8.svg",
            "logo1.svg",
            "logo2.svg",
            "logo3.svg",
            "logo4.svg",
            "logo5.svg",
            "logo6.svg",
            "logo7.svg",
            "logo8.svg",
          ].map((logo, index) => (
            <img
              key={index}
              src={`./assets/${logo}`}
              alt={`Logo ${index + 1}`}
              className="h-10 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
