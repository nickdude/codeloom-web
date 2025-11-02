import React from 'react'
import WhiteLabel from './WhiteLabel'
import Header from './Header'

const Help = () => {
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
        <section id="help" className='py-6 flex flex-col items-center gap-6 justify-center'>
            <WhiteLabel label="How we help you grow?" />
            <Header label1="We design the key pieces that shape" label2="how people see your brand." />
            <div className='mt-10 px-4'>
                <div className='mx-auto border border-offGray rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {columns.map((col, colIdx) => (
                        <div
                            key={colIdx}
                            className='p-8 border-b border-offGray sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0'>
                            <h3 className='font-hanken font-medium text-xs text-lightBlack leading-3 mb-5'>
                                {col.title}
                            </h3>
                            <ul className='space-y-3'>
                                {col.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className='font-inter font-light flex justify-between text-sm text-gray leading-5'>
                                        <span>{item.service}</span>
                                        <span>{item.duration}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </section >
    )
}

export default Help