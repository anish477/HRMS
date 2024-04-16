import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <p className="title">Human Resource Management System</p>
          <div className="left-bottom">
            <p className="services">
              Payroll, Employee Engagement, Learning, Performance, Development,
              Human Resources and Learning Platform.
            </p>
          </div>
        </div>

        <div className="right-container">
          <div className="top-container">
              <Link to ="login">
            <button id="login-button" >Login</button>
            </Link>
            <Link to = "about-us">
            <button id="about-us-button">About us</button>
            </Link>
            <Link to = "contact-us"> 
            <button id="contact-us-button">Contact us</button>
            </Link>
          </div>
          <div className="middle-container">
            <img
              className="home-icon"
              src="./src/assets/icons/hrms.png"
              alt="HRMS icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
