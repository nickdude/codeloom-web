import React from "react";

const CaseStudyCard = ({
    logo,
    websiteScreens,
    testimonial,
    author,
    role,
    goal,
    improvements,
    results,
    primaryCta,
    secondaryCta,
}) => {
    return (
        <section className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-200">
            {/* Left Side - Website Screens */}
            <div className="flex gap-4 justify-center">
                {websiteScreens.map((screen, idx) => (
                    <img
                        key={idx}
                        src={screen}
                        alt={`Website screen ${idx + 1}`}
                        className={`rounded-lg shadow-md w-1/2 object-cover ${idx === 0 ? "mt-8" : ""
                            }`}
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Right Side - Testimonial + Results */}
            <div className="flex flex-col gap-6">
                {/* Testimonial */}
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 text-sm">
                    <p className="italic text-gray-700">“{testimonial}”</p>
                    <p className="mt-3 font-semibold text-gray-900">
                        {author}{" "}
                        <span className="text-sm font-normal text-gray-500">— {role}</span>
                    </p>
                </div>

                {/* Goal + Improvements */}
                <div className="text-sm space-y-4">
                    <div>
                        <h4 className="font-semibold text-gray-900">Our Goal</h4>
                        <p className="text-gray-700">{goal}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Areas of Improvement</h4>
                        <p className="text-gray-700">{improvements}</p>
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 text-center">
                    {results.map((r, i) => (
                        <div key={i}>
                            <p className="text-2xl font-bold text-brand">{r.value}</p>
                            <p className="text-xs text-gray-600">{r.label}</p>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                    <a
                        href={primaryCta.href}
                        className="flex-1 bg-brand text-white text-sm font-medium py-3 px-4 rounded-md text-center hover:bg-brand/90 transition"
                    >
                        {primaryCta.label}
                    </a>
                    <a
                        href={secondaryCta.href}
                        className="flex-1 border border-gray-300 bg-white text-gray-700 text-sm font-medium py-3 px-4 rounded-md text-center hover:bg-gray-50 transition"
                    >
                        {secondaryCta.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCard;
