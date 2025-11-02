import React from 'react'
import WhiteLabel from './WhiteLabel'
import Header from './Header'

const techStack = [
    {
        "id": 1,
        "title": "/01 Editor and AI Tools",
        "items": [
            { "icon": "./assets/icon1.svg", "name": "Figma" },
            { "icon": "./assets/icon2.svg", "name": "Play (Android)" },
            { "icon": "./assets/icon3.svg", "name": "Rive" },
            { "icon": "./assets/icon4.svg", "name": "Lottielab" },
            { "icon": "./assets/icon5.svg", "name": "ChatGPT", "note": "(thinking partner)" },
            { "icon": "./assets/icon6.svg", "name": "Claude", "note": "(thinking partner)" },
            { "icon": "./assets/icon7.svg", "name": "Midjourney", "note": "(art direction)" },
            { "icon": "./assets/icon8.svg", "name": "Flora Fauna", "note": "(art direction)" }
        ]
    },
    {
        "id": 2,
        "title": "/02 Product Development",
        "items": [
            { "icon": "./assets/icon9.svg", "name": "Next.js" },
            { "icon": "./assets/icon10.svg", "name": "TanStack" },
            { "icon": "./assets/icon11.svg", "name": "React" },
            { "icon": "./assets/icon12.svg", "name": "Shadcn" },
            { "icon": "./assets/icon13.svg", "name": "Supabase" },
            { "icon": "./assets/icon14.svg", "name": "Node.js" },
            { "icon": "./assets/icon15.svg", "name": "SwiftUI" },
            { "icon": "./assets/icon16.svg", "name": "React Native" }
        ]
    },
    {
        "id": 3,
        "title": "/03 Website Development",
        "items": [
            { "icon": "./assets/icon17.svg", "name": "Framer" },
            { "icon": "./assets/icon18.svg", "name": "Webflow" },
            { "icon": "./assets/icon19.svg", "name": "Shopify" },
            { "icon": "./assets/icon20.svg", "name": "React" },
            { "icon": "./assets/icon21.svg", "name": "Shadcn" },
            { "icon": "./assets/icon22.svg", "name": "Supabase" },
            { "icon": "./assets/icon23.svg", "name": "Node.js" },
            { "icon": "./assets/icon24.svg", "name": "Custom Stack" }
        ]
    }
]



const OurTechStack = () => {
    return (
        <section id="our-tech-stack" className="py-6 flex flex-col items-center gap-6 justify-center">
            <WhiteLabel label="Our tech stack" />
            <Header
                label1="We design the key pieces that shape"
                label2="how people see your brand."
            />

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-offGray rounded-xl p-6 sm:p-10 max-w-7xl mx-auto mt-12 text-left">
                {techStack.map((column, index) => (
                    <React.Fragment key={column.id}>
                        {/* Column */}
                        <div
                            className={`${index === 0
                                ? "md:pr-10 md:border-r"
                                : index === 1
                                    ? "md:px-10 md:border-r"
                                    : "md:pl-10"
                                } border-offGray`}
                        >
                            <h3 className="text-sm leading-[14px] font-hanken uppercase text-gray font-medium mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3 text-xs text-lightGray leading-[14px] font-inter">
                                {column.items.map((item, i) => (
                                    <li key={i}>
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="inline-block mr-1"
                                            loading="lazy"
                                        />
                                        {item.name}{" "}
                                        {item.note && (
                                            <span className="text-gray-500">{item.note}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* HR separator on mobile */}
                        {index < techStack.length - 1 && (
                            <hr className="block md:hidden my-6 border-t border-offGray" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default OurTechStack;
