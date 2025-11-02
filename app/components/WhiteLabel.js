import React from 'react'

const WhiteLabel = ({ label }) => {
    return (
        <button className="relative p-[2px] rounded-md overflow-hidden">
            {/* Gradient border layer */}
            <span className="absolute inset-0 rounded-md bg-[conic-gradient(from_0deg,theme(colors.brand)_0deg,theme(colors.brand)_90deg,transparent_90deg,transparent_360deg)] animate-spin-slow"></span>

            {/* Inner content */}
            <span className="relative bg-white border border-lightestGray text-darkGray font-medium font-inter px-6 py-2 rounded-md text-xs leading-4 flex items-center gap-2">
                {label}
            </span>
        </button>
    )
}

export default WhiteLabel
