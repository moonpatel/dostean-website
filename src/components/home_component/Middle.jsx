import React from "react";
import Img from "../images/i1.jpg";
import CafeImage from "../images/i2.jpg";
export default function Middle() {
    return (
        <div>
            <div className="">
                <div className="m-2">
                    <img src={Img} alt="img" className="img" />
                    {/* <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" />
                    <img src="" alt="img" className="img" /> */}
                </div>
            </div>
            <div className="flex">
                <img src={CafeImage} alt="cafeimg" className="w-48 h-44 mt-7 m-3" />
                <div className="w-60 m-3">
                    <p className="font-bold text-lg">About us</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                        dolorem. Repudiandae quaerat expedita earum, soluta aspernatur aut
                    </p>
                </div>
            </div>
            <div className="menu">
                <div className="3-img flex">
                    <img src={Img} className="w-24 h-28 m-auto" />
                    <img src={Img} className="w-24 h-28 m-auto" />
                    <img src={Img} className="w-24 h-28 m-auto" />
                </div>
                <button className=" bg-black text-lg font-semibold text-white mx-36 mt-5 text-center">View Menu</button>
            </div>
            <div className="address mt-4">
                <div className="flex mx-20">
                    <img src={Img} alt="gif" className="w-24 mr-4" />
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
                <img src={Img} alt="map" />
            </div>
        </div>
    );
}
