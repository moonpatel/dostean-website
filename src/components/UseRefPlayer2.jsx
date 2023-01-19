import React, { useRef } from "react";
import v1 from "../components/images/v1.mp4";
const UseRefPlayer2 = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div className="flex-col-reverse ml-5">
        <button className="btn mb-5 mr-2 bg-green-600" onClick={handlePlay}>
          Play
        </button>
        <button className="btn bg-red-600 " onClick={handlePause}>
          Pause
        </button>

      <video width="520" height="240" ref={videoRef}>
        <source src={v1}/>
      </video>
      </div>
    </>
  );
};

export default UseRefPlayer2;