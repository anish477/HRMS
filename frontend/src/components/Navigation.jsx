import React from "react";

const Navigation = () => {
  return (
    <nav>
      <img className="logo" src="./src/assets/icons/logo.png" alt="Logo" />
      <ul>
        <li>
          <a className="login-button" href="#">
            {" "}
            Login
          </a>
        </li>
        <li>
          <a className="signup-button" href="#">
            Sign up
          </a>
        </li>
        <li>
          {/* <Link to="/about"><a className="aboutus-button" href="#">
            {" "}
            About us
          </a></Link> */}

          <a className="aboutus-button" href="#">
            {" "}
            About us
          </a>
        </li>
        <li>
          <a className="contact-button" href="#">
            Contact us
          </a>
        </li>
        {/* <li>
          <a href="#">
            <img className="hamburgar-icon" src="./src/assets/icons/hamburger.png" alt="Menu" />
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
