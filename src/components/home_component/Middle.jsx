import React from "react";
import CafeImage from "../images/i2.jpg";
import LocationDetails from "../LocationDetails";

export default function Middle() {
    return (
        <div>
            {/* <div className="">
                <div className="">
                    <img className="w-full" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                </div>
            </div> */}
            <div className='bg-blend-multiply bg-black/60 w-full h-[360px] md:h-[480px] flex items-center bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]'>
                <div className='flex items-center top-1/3 text-center flex-col w-full z-0'>
                    <h1 className='text-white text-4xl md:text-8xl fontmerienda my-2 md:my-5'>Dostea<sup>n</sup></h1>
                    <p className='text-primary-200 font-medium text-sm md:text-lg'>Get a glimpse of our authentic dishes.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row text-center my-20 mt-20 w-full justify-center md:items-center">
                <div className="md:bg-primary-300 md:w-1/2 md:mx-10 -z-10 relative">
                    <img src={CafeImage} alt="cafeimg" className="md:w-full shadow-lg" />
                </div>
                <div className="md:w-1/2 md:text-left my-20">
                    <p className="font-bold text-3xl my-3 md:px-3 text-primary-400 fontmerienda">About us</p>
                    <p className="text-sm text-black/50 font-medium px-3">
                        Lorem ipsum dol or sit amet, consectetur adipisicing elit. Qui,
                        dolorem. Repudiandae quaerat expedita earum, soluta aspernatur aut
                        Lorem ipsum dol or sit amet, consectetur adipisicing elit. Qui,
                        dolorem. Repudiandae quaerat expedita earum, soluta aspernatur aut
                    </p>
                </div>
                {/* <img src={CafeImage} alt="cafeimg" className="md:w-1/2 mt-7 order-2" /> */}

            </div>
            <div className="menu my-10 text-center bg-gray-200">
                <h1 className="text-3xl font-bold my-5 text-primary-400 fontmerienda">Our Menu</h1>
                <div className="flex">
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" className="w-20 m-auto" />
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" className="w-20 m-auto" />
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" className="w-20 m-auto" />
                </div>
                <button className=" bg-black text-lg font-semibold text-white p-2 rounded-lg w-fit text-center">View Menu</button>
            </div>
            <LocationDetails />
        </div>
    );
}
