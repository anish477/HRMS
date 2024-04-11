import { useState } from "react";
import { useCredsContext } from "../hooks/useCredsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const CredForm = () => {
  const { dispatch } = useCredsContext();
  const { user } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const cred = {
      email,
      password,
      firstName,
      middleName,
      lastName,
      personalEmail,
    };

    const response = await fetch("/api/creds", {
      method: "POST",
      body: JSON.stringify(cred),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setPersonalEmail("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_CRED", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Detail</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={emptyFields.includes("email") ? "error" : ""}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={emptyFields.includes("password") ? "error" : ""}
      />

      <label>First Name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        className={emptyFields.includes("firstName") ? "error" : ""}
      />

      <label>Middle Name:</label>
      <input
        type="text"
        onChange={(e) => setMiddleName(e.target.value)}
        value={middleName}
      />

      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        className={emptyFields.includes("lastName") ? "error" : ""}
      />

      <label>Personal Email:</label>
      <input
        type="email"
        onChange={(e) => setPersonalEmail(e.target.value)}
        value={personalEmail}
        className={emptyFields.includes("personalEmail") ? "error" : ""}
      />

      <button>Add Cred</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CredForm;
