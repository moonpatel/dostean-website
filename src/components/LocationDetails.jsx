import React from 'react';

const LocationDetails = () => {
    return (
        <div className="text-center">
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4 items-center md:justify-around py-10 md:py-16 bg-primary-200 text-white">
                <div className="w-1/2 md:w-1/4">
                    <p className="font-bold text-2xl fontmerienda my-3">Address</p>
                    <p className="text-sm text-dark/75 font-medium">BUNGALOW NO -2, beside ICHHANATH SUPER STORE, Jalaram Society, Piplod, Surat, Gujarat 395007</p>
                </div>
                <div className="w-1/2 md:w-1/4">
                    <p className="font-bold text-2xl fontmerienda my-3">Timings</p>
                    <p className='text-sm text-dark/75 font-medium'>All Days <br /> 12:00p.m.-11:30p.m.</p>
                </div>
            </div>
            {/* <p className="font-bold m-3 mt-5 text-3xl fontmerienda text-primary-400">Map</p> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.602683585226!2d72.77897830528755!3d21.1621569759782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da5cd96a645%3A0x570d0a5bf2f181a2!2sDostean%20Cafe%20%26%20restro!5e0!3m2!1sen!2sin!4v1673886927650!5m2!1sen!2sin" className='w-full' height="720" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default LocationDetails