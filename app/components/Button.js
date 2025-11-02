"use client"
import React from 'react'

const SIZE_CLASSES = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
}

/**
 * Button component with consistent sizing and variants.
 * Props:
 * - icon: optional icon src
 * - text: label
 * - onClick: click handler
 * - size: 'sm'|'md'|'lg'
 * - variant: 'primary'|'secondary'
 */
const Button = ({ icon, text, onClick, size = 'md', variant = 'primary', className = '', type = 'button' }) => {
    const base = 'inline-flex items-center justify-center rounded-lg font-medium transition';
    const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
    const variantClass =
        variant === 'primary'
            ? 'bg-brand text-white hover:opacity-90'
            : 'bg-white border border-lightBrand text-black hover:bg-gray-100';

    return (
        <button type={type} onClick={onClick} className={`${base} ${sizeClass} ${variantClass} ${className}`}>
            {icon && <img src={icon} alt="" className="h-4 w-4 mr-2" loading="lazy" />}
            <span className="text-inter">{text}</span>
        </button>
    );
}

export default Button