import React from "react";
import Navigation from "./Components/Navigation";
import ClipHome from "./ClipsComponents/HomeClip";
import Home from "./Components/Home";
import "./Sytels/Home.css";

import AboutUs from "./Components/AboutUs";
import "./Sytels/About.css";

import WhyUs from "./Components/WhyUs";
import "./Sytels/Why.css";

import Contact from "./Components/Contact";
import "./Sytels/Contact.css";

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
