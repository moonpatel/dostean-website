import React from 'react'

const LocationDetails = () => {
    // const map = document.querySelector('#map')
    return (
        <div className="address mt-4">
            <div className="flex mx-20">
                {/* <img src="" alt="gif" className="w-24 mr-4" /> */}
                <p>Location</p>
            </div>
            <div className="flex ">
                <div className="address">
                    <p className="font-bold text-lg">Address</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto aliquam rem molestias incidunt dolor.</p>
                </div>
                <div className="timing">
                    <p className="font-bold text-lg">Timings</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque nobis totam corporis dicta dolorem quasi laborum</p>
                </div>
            </div>
            <p className="font-bold text-lg m-3">Map</p>
            <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.602683585226!2d72.77897830528755!3d21.1621569759782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da5cd96a645%3A0x570d0a5bf2f181a2!2sDostean%20Cafe%20%26%20restro!5e0!3m2!1sen!2sin!4v1673886927650!5m2!1sen!2sin" className='w-full' height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default LocationDetails