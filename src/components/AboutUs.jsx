import React, { useState } from "react";
import Navbar from "./home_component/Navbar";
import b1 from "../components/images/si6.jpg";
import lp from "../components/images/lp.jpeg";
import HeroImage from "./HeroImage";
import v1 from '../../src/components/images/v1.mp4'
import v2 from '../../src/components/images/v2.mp4'
import Footer from "./home_component/Footer";

const AboutUs = () => {
    const [v1play, setv1Play] = useState(false)
    const [v2play, setv2Play] = useState(false)

    return (
        <>
            <Navbar />
            <HeroImage url="" title="About Us" />
            <div className="flex flex-col w-full">
                <div className="birthday flex flex-col md:flex-row items-center text-center md:text-left">
                    <div className="line fontmerienda text-2xl w-full md:w-1/2 px-5 my-5">
                        <h1 className="text-4xl md:text-6xl fontmerienda my-3">Events</h1>
                        <div className="text-base md:text-xl">
                            Here you can celebrate your <span className="font-medium text-lg fontmerienda">birthday, anniversary </span>etc. We provide a gorgeouse room with decoration and lighting.
                        </div>
                    </div>
                    <div className="b-img w-full md:w-1/2">
                        {/* <img src={b2} className="mt-7" /> */}
                        <img src={b1} />
                    </div>
                </div>

                <div className="lighting-partner flex flex-col md:flex-row items-center bg-[#efd43a]">
                    <div className="text p-5 w-full md:w-1/2 md:order-2">
                        <p className="fontmerienda text-center md:text-xl md:text-left">
                            DOSTEA<sup>n</sup> Cafe is the official lighting partner at LOST
                            LAKE fest 2.0 where SHARMAN JOSHI, ASHIM RIAZ,SUYYASH RAI,DJ Honey
                            and DJ RUBIN comes.
                        </p>
                    </div>
                    <div className="img w-full md:w-1/2 md:order-1">
                        <img src={lp} />
                    </div>
                </div>

                <div className="celebretiy my-10 text-center flex flex-col justify-center mt-20">
                    <div className="p ml-4 fontmerienda md:text-2xl font-medium my-10">
                        Here is the video of
                        <span className="fontmerienda font-bold text-xl md:text-3xl"> celebrities </span>
                        that comes to DOSTEA<sup>n</sup> Cafe and enjoy the delasious items.
                    </div>
                    <div className="video flex flex-col md:flex-row md:space-x-20 md:space-y-0 space-y-10 mt-4 justify-center">
                        <video src={v1} onClick={evt => {
                            v1play ? evt.target.pause() : evt.target.play()
                            setv1Play(prev => !prev);
                        }} controls></video>
                        <video src={v2} onClick={evt => {
                            v2play ? evt.target.pause() : evt.target.play()
                            setv2Play(prev => !prev);

                        }} controls></video>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default AboutUs;
