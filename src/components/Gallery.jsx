import React from 'react'
import Navbar from './home_component/Navbar'
import fi1 from "../components/images/fi1.jpeg"
import fi2 from "../components/images/fi2.jpeg"
import fi3 from "../components/images/fi3.jpeg"
import fi4 from "../components/images/fi4.jpeg"
import fi5 from "../components/images/fi5.jpeg"
import fi6 from "../components/images/fi6.jpeg"
import fi7 from "../components/images/fi7.jpeg"
import fi8 from "../components/images/fi8.jpeg"
import fi9 from "../components/images/fi9.jpeg"
import fi10 from "../components/images/fi10.jpeg"
import fi11 from "../components/images/fi11.jpeg"
import fi12 from "../components/images/fi12.jpeg"
import fi13 from "../components/images/sp3.jpg"
import fi14 from "../components/images/sp4.jpg"
import fi15 from "../components/images/sp5.jpg"
import fi16 from "../components/images/sp6.jpg"
import Footer from './home_component/Footer'

const Gallery = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='bg-blend-multiply bg-black/50 relative w-full h-[360px] md:h-[480px] bg-center bg-cover -z-10 bg-[url(https://images.unsplash.com/photo-1522784081430-8ac6a122cbc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]'>
                <div className='absolute top-1/3 text-center w-full z-0'>
                    <h1 className='text-white text-4xl md:text-8xl fontmerienda my-2 md:my-5'>Image Gallery</h1>
                    <p className='text-primary-200 font-medium text-sm md:text-lg'>Get a glimpse of our authentic dishes.</p>
                </div>
            </div>
            <div className='p-10 columns-2 md:columns-3 gap-6 space-y-6'>
                <img src={fi1}  alt=""  />
                <img src={fi2}  alt=""  />
                <img src={fi3}  alt=""  />
                <img src={fi4}  alt=""  />
                <img src={fi5}  alt=""  />
                <img src={fi6}  alt=""  />
                <img src={fi7}  alt=""  />
                <img src={fi8}  alt=""  />
                <img src={fi9}  alt=""  />
                <img src={fi10}  alt=""  />
                <img src={fi11}  alt=""  />
                <img src={fi12}  alt=""  />
                <img src={fi13}  alt=""  />
                <img src={fi14}  alt=""  />
                <img src={fi15}  alt=""  />
                <img src={fi16}  alt=""  />
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Gallery
 