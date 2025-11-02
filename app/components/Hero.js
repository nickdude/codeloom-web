"use client"
import React from "react";
import Button from "./Button";
import WhiteButton from "./WhiteButton";
import HelpCard from "./HelpCard";
import HeroRotatingText from "./HeroRotatingText";




const Hero = ({ onOpenPopup }) => {

    const logoImages = [
        { src: "./assets/logo1.svg", alt: "Zadeh" },
        { src: "./assets/logo2.svg", alt: "Soundhub" },
        { src: "./assets/logo3.svg", alt: "UIUX" },
        { src: "./assets/logo4.svg", alt: "GOAT" },
        { src: "./assets/logo5.svg", alt: "BangDB" },
        { src: "./assets/logo6.svg", alt: "ACT" },
        { src: "./assets/logo7.svg", alt: "Actofit" },
        { src: "./assets/logo8.svg", alt: "Skillup" },
    ];

    const helpImages = [
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

    return (
        <main id="hero" className="gradient-to-b from-[#FFF9F7] to-white py-16 pt-20 md:pt-40 ">
            <section className="max-w-5xl mx-auto px-6 text-center">
                {/* Tagline */}
                <p className="text-sm font-normal text-black font-inter flex items-center justify-center gap-2">
                    <img src="/assets/flash.svg" alt="rocket" className="h-4" loading="lazy" />
                    We are Design, Development & Marketing Studio
                </p>

                {/* Heading */}
                <div className="text-4xl md:text-5xl font-semibold font-hanken leading-[125%] mt-4">
                    <HeroRotatingText />
                </div>

                {/* Subtext */}
                <p className="mt-6 text-black font-inter font-light text-base max-w-2xl mx-auto">
                    At Codeloom.Studio, we bring together thoughtful design, robust
                    development, and result-driven marketing to craft websites and apps
                    that not only look great but also attract, convert, and help your
                    business grow.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button icon="./assets/cube.svg" text="Book intro call" onClick={onOpenPopup} />
                    <WhiteButton />
                </div>

                {/* Logos */}
                <div className="mt-28">
                    <p className="text-lightGray mb-6 font-inter font-medium text-base leading-6">
                        Trusted by 40+ founders and counting
                    </p>
                    {/* Logos Section */}
                    <div className="w-full overflow-x-auto md:overflow-visible">
                        <div className="flex md:justify-center items-center gap-8 opacity-80 mt-16 flex-nowrap px-4 md:px-0">
                            {logoImages.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 flex-shrink-0"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full py-6 mt-16'>
                <div className='overflow-x-auto scroll scrollbar-hide'>
                    <div className='flex gap-6 w-max animate-scroll'>
                        {helpImages.map((img, index) => (
                            <HelpCard key={index} img={`./assets/${img}`} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
