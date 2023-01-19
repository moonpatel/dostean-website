import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const LocationDetails = () => {
    return (
        <div className="text-center bg-yellow1 pb-20">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4 items-center md:justify-around py-10 md:py-16 bg-[#ffa630] text-white">
                <div className="w-1/2 md:w-1/4">
                    <AnimationOnScroll animateIn='animate__fadeInUp'>
                        <p className="font-bold text-2xl fontmerienda my-3 text-black">Address</p>
                        <p className="text-sm text-dark font-medium">BUNGALOW NO -2, beside ICHHANATH SUPER STORE, Jalaram Society, Piplod, Surat, Gujarat 395007</p>
                    </AnimationOnScroll>
                </div>

                <div className="w-1/2 md:w-1/4">
                    <AnimationOnScroll animateIn='animate__fadeInUp'>
                        <p className="font-bold text-2xl fontmerienda my-3 text-black">Timings</p>
                        <p className='text-sm text-dark font-medium'>All Days <br /> 12:00p.m.-11:30p.m.</p>
                    </AnimationOnScroll>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.602683585226!2d72.77897830528755!3d21.1621569759782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da5cd96a645%3A0x570d0a5bf2f181a2!2sDostean%20Cafe%20%26%20restro!5e0!3m2!1sen!2sin!4v1673886927650!5m2!1sen!2sin" className='w-[75%] rounded-xl mx-auto' height="480" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default LocationDetails