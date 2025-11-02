"use client"
import React from 'react'
import WhiteLabel from './WhiteLabel'
import Header from './Header'
import Button from './Button'
import WhiteButton from './WhiteButton'

const OurResult = ({ onOpenPopup }) => {
    return (
        <section id="our-results" className='py-6 flex flex-col items-center gap-6 justify-center'>
            <WhiteLabel label="Our Results" />
            <Header label1="We design for" label2="people first and results follow!" />
            <div className="space-y-0 flex flex-col text-center justify-center">
                <p className="font-inter text-base leading-6 text-lightGray">
                    Discover how we empowered businesses to achieve up to
                </p>
                <p className="font-inter text-base leading-6 text-darkGray font-bold">
                    272% higher conversions and unmatched ROI.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-start main-grid relative mx-3 md:mx-20 overflow-hidden container-max'>
                {/* Left - Image */}
                <div className='relative overflow-hidden flex items-center justify-center bg-white p-6 card'>
                    <img
                        src='/assets/result.svg'
                        alt='Full Mockup'
                        className='w-full h-auto max-h-[420px] object-contain'
                        loading="lazy"
                    />
                </div>

                {/* Right - Content */}
                <div className='right-box py-6 pr-6 pl-6 md:pl-0 flex flex-col justify-start card'>
                    {/* Testimonial */}
                    <div className='border rounded-lg bg-lightestPink shadow-sm p-4 text-sm border-offGray relative'>
                        <img src='/assets/quoteIcon.svg' alt='ACT Fibernet Logo' className='absolute opacity-100 quoteImg' loading="lazy" />
                        <p className='text-[#111111] font-medium text-sm leading-[18px] font-inter'>
                            Codeloom.Studio delivered beyond expectations. Their team perfectly blended design, development, and marketing to create a digital experience that not only looks amazing but drives real results. A reliable, strategic partner for any growth-focused brand.
                        </p>
                        <p className='mt-2 text-sm font-semibold text-[#111111]'>
                            Dr. Parsa T. Zadeh{" "}
                            <span className='text-brand font-bold'>•</span>{" "}
                            <span className='text-sm text-lightGray'>Founder, Zadeh DentistryFibernet</span>
                        </p>
                    </div>


                    <div className='text-sm space-y-4 border-t border-dashed border-offGray mt-5 pt-4 text-gray-700'>
                        <div>
                            <p className='font-[500] text-[13.13px] text-lightGray'>Our Goal</p>
                            <p className='text-[#1E1E1E] text-[14px] leading-[18px]'>Reduce website cognitive overload, improve lead conversion</p>
                        </div>
                        <div>
                            <p className='text-sm space-y-4  pt-4 text-lightGray'>
                                Areas of Improvement
                            </p>
                            <p className='text-[#1E1E1E] text-[14px] leading-[18px]'>Strengthen internal marketing, enhance client onboarding</p>
                        </div>
                    </div>


                    <div className='grid grid-cols-3 text-left border-dashed border-offGray gap-4 border-t mt-4 pt-6 text-sm'>

                        <div>
                            <p className='text-[19.69px] font-semibold text-[#F54A00]'>25%</p>
                            <p className='text-[500] text-[13px] text-[#111111] leading-[18px]'>
                                Increase in new customer acquisitions
                            </p>
                        </div>
                        <div>
                            <p className='text-[19.69px] font-semibold text-[#F54A00] '>12%</p>
                            <p className='text-[500] text-[13px] text-[#111111] leading-[18px]'>Rise in overall conversions</p>
                        </div>
                        <div>
                            <p className='text-[19.69px] font-semibold text-[#F54A00]'>6%</p>
                            <p className='text-[500] text-[13px] text-[#111111] leading-[18px]'>
                                Higher CTA conversions via A/B testing
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='mt-6 flex justify-start gap-4 flex-wrap items-center'>
                        <Button icon="/assets/cube.svg" text="Book intro call" onClick={onOpenPopup} size="md" variant="primary" />
                        <WhiteButton />
                    </div>
                </div>
            </div>



        </section >
    )
}

export default OurResult