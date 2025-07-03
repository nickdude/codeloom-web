import React from "react";
import { Helmet } from "react-helmet";
import HeroRotatingText from "./HeroRotatingText";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Codeloom Studio | Design-first Development</title>
        <meta
          name='description'
          content="We craft stunning websites and digital products focused on results. Boost your brand's growth with us!"
        />
        <meta
          name='keywords'
          content='UI/UX, Web Design, Development, React, Codeloom'
        />
        <link rel='canonical' href='https://codeloom.studio' />
      </Helmet>
      <section id='hero' className='bg-white pt-32 pb-16 px-4 text-center'>
        {/* Top Line */}
        <p className='font-inter font-medium text-[14px] leading-[19.2px] text-brandDark flex items-center justify-center gap-1'>
          <img src='./assets/flash.svg' alt='Icon' className='w-4 h-4' />
          We are Design, Development & Marketing Studio
        </p>

        {/* Main Heading */}
        <HeroRotatingText />
        <p className='font-inter font-extralight text-[16px] leading-[24px] max-w-2xl mx-auto mt-6 text-brandDark'>
          At Codeloom.Studio, we bring together thoughtful design, robust
          development, and result-driven marketing to craft websites and apps
          that not only look great but also attract, convert, and help your
          business grow.
        </p>

        {/* CTA Buttons */}
        <div className='mt-6 flex justify-center gap-4 flex-wrap'>
          <button
            onClick={() => scrollToSection("contact")}
            className='bg-brand text-white font-inter font-medium text-[12px] leading-[15px] px-6 py-2 rounded-md hover:bg-orange-700 transition flex items-center gap-2 shadow-inner'>
            <img src='./assets/cube.svg' alt='cube' className='w-4 h-4' />
            Book Intro Call
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className='bg-white text-brandDark border border-brand font-inter font-medium text-[12px] leading-[15px] px-6 py-2 rounded-md hover:bg-gray-100 transition flex items-center gap-2 shadow-inner'>
            Book on
            <img
              src='./assets/calendly_logo.svg'
              alt='Calendly'
              className='w-15 h-15 m-0'
            />
          </button>
        </div>

        {/* Trusted By */}
        <p className='font-inter font-small text-[16px] leading-[24px] text-gray-500 mt-20 tracking-[-0.32px]'>
          Trusted by 40+ founders and counting
        </p>

        {/* Logo Marquee */}
        <div className='mt-16 overflow-hidden relative'>
          <div className='whitespace-nowrap flex gap-8 justify-center'>
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
            ].map((logo, index) => (
              <img
                key={index}
                src={`./assets/${logo}`}
                alt={`Logo ${index + 1}`}
                className='h-8 inline-block'
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
