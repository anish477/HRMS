
import React from "react";

const AboutClip = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-clip"
      src="./src/assets/clips/about.mp4"
      type="video/mp4"
    />
  );
};

export default AboutClip;
