import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import icon from "../assets/icons/logo.png";
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  if (
    currentPath === "/employeedash" ||
    currentPath === "/employeedash/employeeProfile" ||
    currentPath === "/employeedash/employeeprofile"
  ) {
    return null;
  }

  return (
    <nav className="">
      <img
        className="logo"
        src={icon}
        alt="Logo"
        onClick={() => {
          navigate("/main");
        }}
      />
      <ul>
        <li>
          <h1
            className="login-button text-dark"
            onClick={() => {
              navigate("/loginoption");
            }}
          >
            {" "}
            Login
          </h1>
        </li>
        <li>
          <h1
            className="signup-button text-dark"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </h1>
        </li>
        {currentPath !== "/signup" &&
          currentPath !== "/loginoption" &&
          currentPath !== "/login" &&
          currentPath !== "/employeelogin" &&
          currentPath !== "/employeeLogin" && (
            <>
              <li>
                <h1 className="aboutus-button text-dark"> About us</h1>
              </li>
              <li>
                <h1 className="contact-button text-dark">Contact us</h1>
              </li>
            </>
          )}
        <li>
          {/* <p>
            <img
              className="hamburgar-icon"
              src="./src/assets/icons/hamburger.png"
              alt="Menu"
            />
          </p> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
