import React from "react";

const HomeClip = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-clip"
      src="./src/assets/clips/home.mp4"
      type="video/mp4"
    ></video>
  );
};

export default HomeClip;
