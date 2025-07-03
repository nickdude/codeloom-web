import React from "react";
import { Helmet } from "react-helmet";

const HelpSection = () => {
  const images = [
    "help1.svg",
    "help2.svg",
    "help3.svg",
    "help4.svg",
    "help5.svg",
    "help1.svg",
    "help2.svg",
    "help3.svg",
    "help4.svg",
    "help5.svg",
    "help1.svg",
  ];

  const columns = [
    {
      title: "/01 DIGITAL PRODUCT",
      items: [
        { service: "MVP web app", duration: "4–10 weeks" },
        { service: "MVP mobile app", duration: "2–8 weeks" },
        { service: "New feature sprint", duration: "min. 1 week" },
        { service: "Product refactor", duration: "min. 1 week" },
        { service: "Design system", duration: "min. 1 week" },
        { service: "UX audit", duration: "min. 1 week" },
      ],
    },
    {
      title: "/02 BRAND",
      items: [
        { service: "Logo design", duration: "3–5 days" },
        { service: "Full brand identity", duration: "5–10 days" },
        { service: "Brand guidelines", duration: "5 days" },
        { service: "Brand uplift/revamp", duration: "10–15 days" },
        { service: "Marketing campaign", duration: "min. 1 week" },
        { service: "Merchandise design", duration: "min. 3 days" },
      ],
    },
    {
      title: "/03 WEBSITE",
      items: [
        { service: "Design only", duration: "Min. 3 days" },
        { service: "Build in Framer", duration: "Min. 10 days" },
        { service: "Build in Webflow", duration: "Min. 10 days" },
        { service: "Fully coded", duration: "Min. 10 days" },
        { service: "Shopify", duration: "Min. 10 days" },
        { service: "E-Commerce", duration: "Min. 10 days" },
      ],
    },
  ];

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
      <section className='py-10 bg-white'>
        {/* Horizontal scroll image section */}
        <div className='overflow-x-auto scrollbar-hide px-4'>
          <div className='flex gap-6 w-max animate-scroll'>
            {images.map((img, index) => (
              <div
                key={index}
                className='w-[945px] h-[480px] rounded-sm overflow-hidden shrink-0'>
                <img
                  src={`./assets/${img}`}
                  alt={`Help ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button & subheading */}
        <div className='mt-20 text-center px-4'>
          <button className='bg-white text-black border border-brand font-inter font-medium text-[12px] leading-[16px] px-5 py-2 rounded-md hover:bg-gray-100 transition'>
            How we help you grow?
          </button>

          <p className='mt-14 font-inter text-[24px] md:text-[30px] leading-[34px] md:leading-[40px] text-[#1E1E1E]'>
            We design the key pieces that shape{" "}
            <span className='text-brand font-semibold'>
              how people <br className='hidden sm:block' /> see your brand.
            </span>
          </p>
        </div>

        {/* Responsive 3-column services box */}
        <div className='mt-20 px-4'>
          <div className='max-w-[946px] mx-auto border border-gray-200 rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className='p-4 border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0'>
                <h3 className='font-inter font-medium text-sm text-black mb-4'>
                  {col.title}
                </h3>
                <ul className='space-y-2'>
                  {col.items.map((item, i) => (
                    <li
                      key={i}
                      className='flex justify-between text-[14px] text-[#4B5563] font-inter'>
                      <span>{item.service}</span>
                      <span>{item.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSection;
