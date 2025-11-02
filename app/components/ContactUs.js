"use client"
import React, { useState } from 'react'

const ContactUs = () => {
    const [productNeed, setProductNeed] = useState('')
    const [budget, setBudget] = useState('')

    return (
        <section id="contact" className='w-full flex flex-col md:flex-row items-center justify-center py-12 px-4'>
            <div className='w-full md:w-[567px] bg-lightestPinkTransparent rounded-xl flex flex-col p-6 space-y-6'>
                <h1 className='w-full md:w-[500px] text-2xl md:text-3xl font-semibold font-inter text-left text-darkestGray leading-[34px] md:leading-[40px] mb-0'>
                    Start the adventure of creating
                    your <span className='text-brand'> "unicorn" </span> product with us
                </h1>
                <h1 className='text-darkestGray font-inter text-sm text-left mt-0 font-light'>
                    Let's turn your vision into a reality that stands out in today's competitive
                    landscape
                </h1>

                {/* ✅ Formspree form starts here */}
                <form
                    action="https://formspree.io/f/mkgqwgon"
                    method="POST"
                    className="flex flex-col space-y-6"
                >
                    {/* Name + Email */}
                    <div className='w-full flex flex-col md:flex-row rounded-lg gap-3'>
                        <input
                            type="text"
                            name="name"
                            placeholder='What is your name?'
                            className='w-full h-12 border border-lightGray rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent'
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='What is your email?'
                            className='w-full h-12 border border-lightGray rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent'
                            required
                        />
                    </div>

                    {/* What your product need */}
                    <div className='w-full flex flex-col font-light '>
                        <p className='text-darkestGray font-inter text-sm text-left mb-2'>What your product need?</p>
                        <div className='w-full flex flex-wrap gap-3 justify-start md:justify-center items-center mb-4'>
                            {["Ui/Ux + Development", "Ui/Ux", "Development"].map((need) => (
                                <button
                                    key={need}
                                    type="button"
                                    onClick={() => setProductNeed(need)}
                                    className={`border flex-1 min-w-[140px] md:w-[158px] text-xs rounded-full px-4 py-3 
                                        ${productNeed === need
                                            ? "bg-brand text-white border-brand"
                                            : "border-grayish text-grayish"
                                        }`}
                                >
                                    {need}
                                </button>
                            ))}
                        </div>
                        {/* Hidden input for Formspree */}
                        <input type="hidden" name="productNeed" value={productNeed} />

                        {/* Budget */}
                        <p className='text-darkestGray font-inter text-sm text-left mb-2'>A budget for this project is</p>
                        <div className='w-full flex flex-wrap md:flex-nowrap gap-3 justify-center items-center mb-4'>
                            {["Up to ₹50k", "₹50k-₹150k", "₹150k-₹300k", "₹300k+"].map((range) => (
                                <button
                                    key={range}
                                    type="button"
                                    onClick={() => setBudget(range)}
                                    className={`border w-[158px] text-xs rounded-full px-4 py-4 
                                        ${budget === range
                                            ? "bg-brand text-white border-brand"
                                            : "border-grayish text-grayish"
                                        }`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                        {/* Hidden input for Formspree */}
                        <input type="hidden" name="budget" value={budget} />

                        {/* Project Details */}
                        <p className='text-darkestGray font-inter text-sm text-left mb-2'>Project details</p>
                        <textarea
                            name="details"
                            placeholder='Describe your project...'
                            className='mb-4 w-full h-22 border border-lightGray rounded-2xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent'
                            required
                        ></textarea>

                        {/* Submit button */}
                        <div className='w-full flex justify-center items-center'>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-brand text-white rounded-2xl py-3 hover:opacity-90 transition"
                            >
                                <img src="./assets/cube.svg" alt="icon" />
                                Become a Client
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className='w-full grid grid-cols-2 text-left text-sm text-darkestGray font-inter mt-6 gap-y-2'>
                            <p className='font-light'>Email</p>
                            <p className='font-light text-right'>Phone</p>
                            <p className='font-semibold'>connect@codeloom.studio</p>
                            <p className='font-semibold text-right'>+91- 9137421926</p>
                        </div>
                    </div>
                </form>
                {/* ✅ Form ends here */}
            </div>
            <img
                src="./assets/glass.svg"
                alt="contact us illustration"
                className='h-fit hidden md:block md:ml-10 mt-6 md:mt-0'
                loading="lazy"
            />
        </section>
    )
}

export default ContactUs
