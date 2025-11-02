import React from 'react'

const HelpCard = ({ img }) => {
    return (
        <div className='min-w-[700px] lg:min-w-[956px] h-[480px] bg-lightestPink flex justify-center items-center rounded-lg overflow-hidden'>
            <img src={img} alt="Help Card" className='w-full h-full object-cover' loading="lazy" />
        </div>
    )
}

export default HelpCard