// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginOption = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "100px",
        height: "100vh",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center loginPage "
        style={{
          marginTop: "100px",
          height: "50vh",
          overflow: "hidden",
        }}
      >
        <div className="p-3 rounded w-25 border loginForm bg-light">
          <h2 className="text-center">Login As</h2>
          <div className="d-flex justify-content-between mt-5 mb-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                navigate("/login");
              }}
            >
              Admin
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/employeelogin");
              }}
            >
              Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOption;
