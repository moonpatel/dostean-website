import React from "react";
import Navbar from "./home_component/Navbar";
import b1 from "../components/images/si6.jpg";
import b2 from "../components/images/b2.jpeg";
import lp from "../components/images/lp.jpeg";
import UseRefPlayer from "./UseRefPlayer";
import UseRefPlayer2 from "./UseRefPlayer2";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="birthday flex bg-[#efd43a]">
        <div className="line ">
          <p className="fontmerienda">
            {" "}
            Here you can celebrate your{" "}
            <span className="font-medium text-lg fontmerienda">
              {" "}
              birthday, anniversary,
            </span>{" "}
            etc. We provide a gorgeouse room with decoration and lighting.
          </p>
          <img src={b1} />
        </div>
        <div className="b-img">
          <img src={b2} className="mt-7" />
        </div>
      </div>
      <div className="lighting-partner bg-[#efd43a]">
        <div className="text   p-5">
          <p className="fontmerienda">
            DOSTEA<sup>n</sup> Cafe is the official lighting partner at LOST
            LAKE fest 2.0 where SHARMAN JOSHI, ASHIM RIAZ,SUYYASH RAI,DJ Honey
            and DJ RUBIN comes.
          </p>
        </div>
        <div className="img">
          <img src={lp} />
        </div>
      </div>
      <div className="celebretiy bg-[#efd43a]">
        <div className="p ml-4 fontmerienda">
          Here is the video of{" "}
          <span className="font-medium text-lg fontmerienda"> celebrity </span>
          that comes to DOSTEA<sup>n</sup> Cafe and enjoy the delasious items.
        </div>
        <div className="video flex mt-4">
          <UseRefPlayer />
          <UseRefPlayer2 />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
