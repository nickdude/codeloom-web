import React from "react";
import { Helmet } from "react-helmet";

const Result = () => {
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
      <section id='results' className='max-w-7xl mx-auto px-4 py-1'>
        {/* Centered Heading */}
        <div className='text-center mb-10'>
          <button className='bg-white text-black border border-grey font-inter font-medium text-[12px] leading-[16px] px-5 py-2 rounded-md hover:bg-gray-100 transition'>
            Our Results
          </button>

          <h2 className='text-3xl sm:text-xxl font-medium mb-4 mt-6'>
            We design for <span className='text-orange-500'>people first</span>{" "}
            and results follow!
          </h2>
          <p className='text-gray-600 font-light text-sm max-w-2xl mx-auto'>
            Discover how we empowered businesses to achieve up to <br />
            <span className='text-black font-semibold'>
              272% higher conversions and unmatched ROI.
            </span>
          </p>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
          {/* Left - Image */}
          <div className='relative w-full rounded-xl overflow-hidden shadow-xl'>
            <img
              src='/assets/result.svg' // Replace with actual full mockup
              alt='Full Mockup'
              className='w-full h-auto object-cover'
            />
          </div>

          {/* Right - Content */}
          <div className='space-y-6'>
            {/* Testimonial */}
            <div className='border rounded-lg bg-white shadow-sm p-4 text-sm'>
              <p className='text-gray-700 italic'>
                “Codeloom.Studio delivered beyond expectations. Their team
                perfectly blended design, development, and marketing to create a
                digital experience that not only looks amazing but drives real
                results. A reliable, strategic partner for any growth-focused
                brand.”
              </p>
              <p className='mt-4 text-sm font-medium text-black'>
                Anjali Mehta{" "}
                <span className='text-orange-500 font-bold'>•</span>{" "}
                <span className='text-gray-600'>CMO, ACT Fibernet</span>
              </p>
            </div>

            {/* Goals & Improvements */}
            <div className='text-sm space-y-4 border-t pt-4 text-gray-700'>
              <div>
                <p className='font-semibold text-gray-800'>Our Goal</p>
                <p>Reduce app cognitive overload, improve lead conversion</p>
              </div>
              <div>
                <p className='font-semibold text-gray-800'>
                  Areas of Improvement
                </p>
                <p>Strengthen internal marketing, enhance client onboarding</p>
              </div>
            </div>

            {/* Metrics */}
            <div className='grid grid-cols-3 text-center gap-4 border-t pt-6 text-sm'>
              <div>
                <p className='text-2xl font-semibold text-orange-600'>25%</p>
                <p className='text-gray-700'>
                  Increase in new customer acquisitions
                </p>
              </div>
              <div>
                <p className='text-2xl font-semibold text-orange-600'>12%</p>
                <p className='text-gray-700'>Rise in overall conversions</p>
              </div>
              <div>
                <p className='text-2xl font-semibold text-orange-600'>6%</p>
                <p className='text-gray-700'>
                  Higher CTA conversions via A/B testing
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <button
                onClick={() => scrollToSection("contact")}
                className='bg-orange-500 text-white text-sm font-medium px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition'>
                📞 Book intro call
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className='border border-gray-300 text-sm px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition'>
                🗓️ Book on <strong>Calendly</strong>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;
