import React from "react";
import { Link } from "react-router-dom";
import DemoCarousel from "../DemoCarousel";

import LocationDetails from "../LocationDetails";
import MenuDisplay from "../MenuDisplay";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CafeImage from "../images/i2.jpg";

export default function Middle() {
  return (
    <div className="section">
      <DemoCarousel />
      <br />
      <div className="flex flex-col-reverse md:flex-row text-center my-5 mt-5 md:pl-20 w-full justify-start md:items-center relative md:h-[500px]">
        <div className="md:bg-primary-300 md:w-1/2 md:mx-10 -z-10 relative">
          <img src={CafeImage} alt="cafeimg" className="md:w-full shadow-lg" />
        </div>
        <div className="md:text-left my-5 shadow-lg p-3 md:p-10 rounded-lg md:absolute bg-yellow1 md:w-[300px] md:right-[240px] md:h-[500px]">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <p className="font-bold text-3xl my-3 md:px-3 text-black fontmerienda mt-16 mb-9">
              Our Journey
            </p>
            <p className="text-sm text-black/90 font-medium px-3">
              Welcome to our restaurant, where a love for good food and a
              passion for culinary excellence come together. Our journey started
              on 15th September,2020 by 3 friends who are tea lovers. We have a
              simple dream to create a dining experience that would delight the
              senses and leave a lasting impression.
            </p>
            <a href="/about-us" className="text-yellow1 hover:underline">
              Learn More
            </a>
          </AnimationOnScroll>
        </div>

        {/* <img src={CafeImage} alt="cafeimg" className="md:w-1/2 mt-7 order-2" /> */}
      </div>

      <div className="menu my-10 text-center space-y-3 py-3">
        <h1 className="text-3xl font-bold mb-3 fontmerienda text-red-500 ">
          Our Special Items
        </h1>
        <MenuDisplay />
        <Link
          to="/menu"
          className=" bg-black text-lg font-semibold block mx-auto mt-5 text-white p-2 rounded-lg w-fit text-center"
        >
          View Menu
        </Link>
      </div>
      <div className="flex mb-4 text-center justify-center">
        <span className="text-base font-bold mr-4">Google Rating</span>
        <div class="flex items-center">
          <svg
            aria-hidden="true"
            class="w-5 h-5 fill-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 fill-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 fill-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 fill-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 fill-yellow-400/70 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.7 out of 5
          </p>
        </div>
      </div>
      <LocationDetails />
    </div>
  );
}
