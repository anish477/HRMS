import React from "react";
import AboutClip from "../ClipsComponents/AboutClip";

const About = () => {
  return (
    <>
      <div className="about-container">
        <AboutClip />
        <div className="hero">
          <h1> About us</h1>
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

export default About;
