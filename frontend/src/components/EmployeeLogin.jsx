import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      navigate("/employeedash/employeeProfile");
    }
  };

  return (
    <div className="">
      <form
        className="login"
        style={{ marginTop: "100px" }}
        onSubmit={handleSubmit}
      >
        <h3>Log In</h3>

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="btn btn-primary">Log in</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default EmployeeLogin;
