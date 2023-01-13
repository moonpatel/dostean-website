import React from "react";
import Logo from "../images/Dostean_logo.png";
export default function Navbar() {
  return (
    <div className="m-0 p-0">
      <div className="navbar text-black bg-slate-200 flex justify-between items-center text-xl font-bold p-2">
        <img src={Logo} alt="logo" className="w-16 h-16 " />
        <p className=" h-10 p-2 ">
          DOSTEA<sup>n</sup>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 my-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="img-slider bg-green-100">
        <img />
      </div>
    </div>
  );
}
