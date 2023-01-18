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
                <div><img src={s1} alt="" /><p className="text-lg font-medium mt-7 ">Welcome to DOSTEAN<sup>n</sup> Cafe</p></div>
                <div><img src={s2} alt="" /></div>
                <div><img src={s3} alt="" /></div>
                <div><img src={s4} alt="" /></div>
                <div><img src={s5} alt="" /></div>
                <div><img src={s6} alt="" /></div>
                <div><img src={s7} alt="" /></div>
                <div><img src={s8} alt="" /></div>
            </Carousel>
        </div>
    )
}

export default DemoCarousel