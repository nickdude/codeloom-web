import React, { useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = () => setShowDropdown(!showDropdown);
  const handleDropdownClose = () => setShowDropdown(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      let navbarHeight = 80; // Default navbar height

      // Add extra offset for tech-stack section to scroll it up more
      if (sectionId === "tech-stack") {
        navbarHeight = 10; // Increased offset for tech-stack
      }

      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
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
      <nav className='fixed w-full z-10 bg-gradient-to-b from-white/20 backdrop-blur-lg'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <img
              src='./assets/codeloom-logo.svg'
              alt='Logo'
              className='h-6 w-auto'
            />
          </div>

          {/* Hamburger for mobile & iPads */}
          <div className='lg:hidden'>
            <button onClick={toggleMobileMenu} className='text-brandDark'>
              {isMobileMenuOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Nav Menu */}
          <ul
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 shadow lg:shadow-none z-50 gap-4 lg:gap-6 font-inter font-normal text-[15px] leading-[100%] text-brandDark`}>
            <li className='relative group' onMouseLeave={handleDropdownClose}>
              <button
                onClick={() => scrollToSection("hero")}
                className='hover:text-brand py-2 px-2 flex items-center gap-1'>
                Home
                {/* <ChevronDownIcon className="w-4 h-4 text-brandDark" /> */}
              </button>
              {/* {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-20">
                  <a
                    href="#product1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Product 1
                  </a>
                  <a
                    href="#product2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Product 2
                  </a>
                </div>
              )} */}
            </li>
            <li>
              <button
                onClick={() => scrollToSection("help")}
                className='hover:text-brand py-2 px-2 block'>
                How we help
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("results")}
                className='hover:text-brand py-2 px-2 block'>
                Our Results
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("tech-stack")}
                className='hover:text-brand py-2 px-2 block'>
                Our Tech Stack
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className='hover:text-brand py-2 px-2 block'>
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className='bg-brand text-white px-3 py-2 rounded-md hover:bg-orange-700 transition flex items-center gap-2'>
                <img
                  src='./assets/cube.svg'
                  alt='Audit Icon'
                  className='w-4 h-4'
                />
                Free Audit
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
