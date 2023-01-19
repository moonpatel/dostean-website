import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s1 from "../components/images/si1.jpg";
import s2 from "../components/images/si2.jpg";
import s3 from "../components/images/si2-5.jpg";
import s4 from "../components/images/si3.jpg";
import s5 from "../components/images/si4.jpg";
import s6 from "../components/images/si5.jpg";
import s7 from "../components/images/si6.jpg";
import s8 from "../components/images/si7.jpg";

const DemoCarousel = () => {
    return (
        <div className='-z-10'>
            <Carousel className='-z-10' autoPlay={true} interval={"1000"} infiniteLoop={true}>
                <div className=" bg-[url('../src/components/images/si1.jpg')] h-[360px] md:h-[640px] bg-top bg-cover"><p className="text-lg font-medium mt-7 ">Welcome to DOSTEAN<sup>n</sup> Cafe</p></div>
                <div className=" bg-[url('../src/components/images/si2.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
                <div className=" bg-[url('../src/components/images/si3.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
                <div className=" bg-[url('../src/components/images/si4.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
                <div className=" bg-[url('../src/components/images/si5.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
                <div className=" bg-[url('../src/components/images/si6.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
                <div className=" bg-[url('../src/components/images/si7.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
                <div className=" bg-[url('../src/components/images/si8.jpg')] h-[360px] md:h-[640px] bg-center bg-cover"></div>
            </Carousel>
        </div>
    )
}

export default DemoCarousel