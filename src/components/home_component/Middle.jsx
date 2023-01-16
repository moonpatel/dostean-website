import React from "react";
import Img from "../images/i1.jpg";
import CafeImage from "../images/i2.jpg";
import LocationDetails from "../LocationDetails";
export default function Middle() {
    return (
        <div>
            <div className="h-[720px]">
                <div className="h-[720px]">
                    <img className="w-full h-[720px]" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    {/* <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" /> */}
                </div>
            </div>
            <div className="flex my-5">
                <img src={CafeImage} alt="cafeimg" className="w-1/2 mt-7 m-3" />
                <div className="w-1/2 my-auto">
                    <p className="font-bold text-3xl my-3">About us</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                        dolorem. Repudiandae quaerat expedita earum, soluta aspernatur aut
                    </p>
                </div>
            </div>
            <div className="menu my-10 text-center bg-gray-200">
                <h1 className="text-3xl font-bold my-5">Our Menu</h1>
                <div className="3-img flex">
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" className="w-48 m-auto" />
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" className="w-48 m-auto" />
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" className="w-48 m-auto" />
                </div>
                <button className=" bg-black text-lg font-semibold text-white mx-36 mt-5 text-center">View Menu</button>
            </div>
            <LocationDetails />
        </div>
    );
}
