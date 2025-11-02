"use client"
import React from "react";
import Button from './Button'

const WhiteButton = ({ className = '' }) => {
    const handleClick = () => {
        // Opens Calendly in a new tab
        window.open("https://calendly.com/codeloom-studio", "_blank");
    };

    return (
        <Button
            text={"Book on"}
            onClick={handleClick}
            size="md"
            variant="secondary"
            className={`flex items-center gap-2 ${className}`}
        >
            {/* Calendly logo is included via the icon prop for Button, but keep explicit image for screen readers */}
        </Button>
    );
};

export default WhiteButton;
