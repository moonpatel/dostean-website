import React from 'react'
import Navbar from './home_component/Navbar'

const Gallery = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='bg-blend-multiply bg-black/50 relative w-full h-[360px] md:h-[480px] bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1522784081430-8ac6a122cbc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]'>
                <div className='absolute top-1/3 text-center w-full z-0'>
                    <h1 className='text-white text-4xl md:text-8xl fontmerienda my-2 md:my-5'>Image Gallery</h1>
                    <p className='text-primary-200 font-medium text-sm md:text-lg'>Get a glimpse of our authentic dishes.</p>
                </div>
            </div>
            <div className='p-10 columns-2 md:columns-3 gap-6 space-y-6'>
                <img src="https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1611915365928-565c527a0590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1607018244619-dab6235709dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1607929298871-fbdcf7e84852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </React.Fragment>
    )
}

export default Gallery