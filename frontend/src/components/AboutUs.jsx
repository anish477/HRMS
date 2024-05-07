import React from "react";
import AboutImage from "../ClipsComponents/AboutImage";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="about-container">
        <AboutImage />
        <div className="hero">
          <h1>About us</h1>
          <p>
            At HRMasters, we are passionate about revolutionizing the way
            businesses manage their human resources. Our comprehensive suite of
            HR solutions empowers organizations to streamline their operations,
            enhance employee engagement, and foster continuous learning and
            development.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
