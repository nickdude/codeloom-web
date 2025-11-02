import React from 'react'

const Header = ({ label1, label2 }) => {
    return (
        <h2 className='text-3xl font-semibold text-darkestGray text-center leading-10 tracking-[-0.64] w-full md:w-[45vw] p-3'>
            {label1} <span className='text-brand'>{label2}</span>
        </h2>
    )
}

export default Header