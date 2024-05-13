import React from "react";
import Navigation from "../HomeComponent/Navigation";
import ClipHome from "../ClipsComponents/HomeClip";
import Home from "../HomeComponent/Home";
import "../Sytels/Home.css";

import AboutUs from "../HomeComponent/AboutUs";
import "../Sytels/About.css";

import WhyUs from "../HomeComponent/WhyUs";
import "../Sytels/Why.css";

import Contact from "../HomeComponent/Contact";
import "../Sytels/Contact.css";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/home" element ={<Home/>}/>
      </Routes>
    </BrowserRouter> */}
      <div className="home-container">
        <ClipHome />
        <Navigation />
        <Home />
      </div>

      <div className="about-container">
        <AboutUs />
      </div>

      <div className="why-container">
        <WhyUs />
      </div>

      <div className="contact-container">
        <Contact />
      </div>
    </>
  );
};

export default App;
