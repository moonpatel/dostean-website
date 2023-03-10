import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Dostean_logo.png";

export default function Navbar() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const w = `w-[${width}px]`;
    console.log(w);
    const linkStateFunction = ({ isActive }) => { return isActive ? "text-yellow1 bg-[#333333] w-full my-auto" : "text-white/75" }
    const linkStateFunctionPC = ({ isActive }) => { return isActive ? "text-yellow1 border-b border-b-primary-400 my-auto" : "text-white/75" }
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className="h-16 md:h-14"></div>
            <div className={`bg-dark text-white fixed z-50 top-0 w-screen`}>
                <div className="flex justify-between items-center text-base h-16 md:h-14 w-full font-bold p-2 mt-1">
                    <div className="flex items-center space-x-2">
                        <img src={Logo} alt="logo" className="w-10 h-10" />
                        <h1 className="text-yellow1 Bantayog text-lg pr-44 md:pr-0">
                            DOSTEA<sup><i className="Allura">n</i></sup>
                        </h1>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 my-auto md:hidden"
                        onClick={() => setShowNavbar(prev => !prev)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <ul className="hidden md:flex font-normal space-x-6 mr-10">
                        <NavLink className={linkStateFunctionPC} to="/home" >
                            <li className="pb-2 px-3 hover:text-yellow1/75">Home</li>
                        </NavLink>
                        <NavLink className={linkStateFunctionPC} to="/menu" >
                            <li className="pb-2 px-3 hover:text-yellow1/75">Menu</li>
                        </NavLink>
                        <NavLink className={linkStateFunctionPC} to="/gallery" >
                            <li className="pb-2 px-3 hover:text-yellow1/75">Gallery</li>
                        </NavLink>
                        <NavLink className={linkStateFunctionPC} to="/about-us" >
                            <li className="pb-2 px-3 hover:text-yellow1/75">About Us</li>
                        </NavLink>
                    </ul>
                </div>
                {(showNavbar) &&
                    <ul className="text-center text-lg space-y-2 flex flex-col py-3 items-center z-30 bg-dark w-full">
                        <NavLink className={linkStateFunction} to="/home" >
                            <li className="h-10 p-1 w-full hover:text-yellow1/75 hover:border-b hover:border-blue-70\">Home</li>
                        </NavLink>
                        <NavLink className={linkStateFunction} to="/menu" >
                            <li className="h-10 p-1 w-full hover:text-yellow1/75 hover:border-b hover:border-blue-70\">Menu</li>
                        </NavLink>
                        <NavLink className={linkStateFunction} to="/gallery" >
                            <li className="h-10 p-1 w-full hover:text-yellow1/75 hover:border-b hover:border-blue-70\">Gallery</li>
                        </NavLink>
                        <NavLink className={linkStateFunction} to="/about-us" >
                            <li className="h-10 p-1 w-full hover:text-yellow1/75 hover:border-b hover:border-blue-70\">About Us</li>
                        </NavLink>
                    </ul>}
            </div>
        </>
    );
}
