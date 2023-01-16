import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Dostean_logo.png";

export default function Navbar() {
    const linkStateFunction = ({ isActive }) => { return isActive ? "text-primary-400 bg-[#333333] w-full my-auto" : "text-white/75" }
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className="h-16"></div>
            <div className="bg-dark text-white/75 fixed w-full top-0 h-16">
                <div className="flex justify-between items-center text-xl font-bold p-2 mt-1">
                    <img src={Logo} alt="logo" className="w-10 h-10" />
                    <h1>
                        DOSTEA<sup>n</sup>
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 my-auto"
                        onClick={() => setShowNavbar(prev => !prev)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
                {showNavbar &&
                    <ul className="text-center text-lg space-y-2 flex flex-col py-3 items-center bg-dark w-full">
                        <NavLink className={linkStateFunction} to="/home" >
                            <li className="h-10 p-1 w-full">Home</li>
                        </NavLink>
                        <NavLink className={linkStateFunction} to="/menu" >
                            <li className="h-10 p-1 w-full">Menu</li>
                        </NavLink>
                        <NavLink className={linkStateFunction} to="/gallery" >
                            <li className="h-10 p-1 w-full">Gallery</li>
                        </NavLink>
                        <NavLink className={linkStateFunction} to="/about-us" >
                            <li className="h-10 p-1 w-full">About Us</li>
                        </NavLink>
                    </ul>}
            </div>
        </>
    );
}
