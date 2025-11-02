"use client";

import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = ({ onOpenPopup }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-white/30">
            <div className="w-full flex px-6 md:px-12 py-4 items-center justify-between">
                {/* Logo */}
                <div className="w-1/2 items-center space-x-2"> <img src="./assets/codeloom-logo.svg" alt="codeloom logo" className="w-15" loading="lazy" /> </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center space-x-8 text-[15px] leading-[100%] font-inter font-light text-darkBlue ">
                    <a href="#hero" className="hover:text-brand"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Home
                    </a>
                    <a href="#help" className="hover:text-brand"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('help').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Help
                    </a>
                    <a href="#our-results" className="hover:text-brand"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('our-results').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Our Work
                    </a>
                    <a href="#our-tech-stack" className="hover:text-brand"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('our-tech-stack').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Our Tech
                    </a>
                    <a href="#contact" className="hover:text-brand"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Contact Us
                    </a>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Button icon="./assets/cube.svg" text="Free Audit" onClick={onOpenPopup} />
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-2xl"
                    >
                        {mobileOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-3 text-darkBlue font-inter font-light">

                    <a href="#hero" className=" block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Home
                    </a>
                    <a href="#help" className="block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('help').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Help
                    </a>
                    <a href="#our-results" className="block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('our-results').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Our Work
                    </a>
                    <a href="#our-tech-stack" className="block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('our-tech-stack').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Our Tech
                    </a>
                    <a href="#contact" className="block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            setMobileOpen(false); // close mobile menu if open
                        }}>
                        Contact Us
                    </a>

                    {/* Mobile Button */}
                    <div className="pt-3">
                        <Button icon="./assets/cube.svg" text="Free Audit" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
