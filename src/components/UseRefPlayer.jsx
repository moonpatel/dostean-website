import React, { useRef } from "react";
import v2 from "../components/images/v2.mp4";
const UseRefPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div className="flex-col-reverse mr-5">
        <button className="btn ml-5 mr-2 bg-green-600" onClick={handlePlay}>
          Play
        </button>
        <button className="btn  bg-red-600" onClick={handlePause}>
          Pause
        </button>
      <video width="520" height="240" ref={videoRef} className="m-5">
        <source src={v2}/>
      </video>
      </div>
    </>
  );
};

export default UseRefPlayer;