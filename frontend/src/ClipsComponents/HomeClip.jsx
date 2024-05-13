import React from "react";
import home from "../assets/clips/home.mp4";

const HomeClip = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-clip"
      src={home}
      type="video/mp4"
    ></video>
  );
};

export default HomeClip;
