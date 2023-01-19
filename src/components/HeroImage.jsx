import React from 'react'

const HeroImage = ({ url, title, subtitle }) => {
    const bgImage = `bg-[url(${url})]`;
    return (
        <div className={`bg-blend-multiply bg-black/50 relative w-full h-[360px] md:h-[480px] bg-center bg-cover -z-10 ${bgImage} `}>
            <div className='absolute top-1/3 text-center w-full z-0'>
                <h1 className='text-white text-4xl md:text-8xl fontmerienda my-2 md:my-5'>{title}</h1>
                <p className='text-yellow1 tracking-widest font-medium text-sm md:text-lg'>{subtitle}</p>
            </div>
        </div>
    )
}

export default HeroImage