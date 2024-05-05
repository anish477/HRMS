import React, { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";

const AddCategory = () => {
  const { user } = useAuthContext();

  const [name, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = { name };

    const response = await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      setCategory("");
      setError(null);
      console.log("new workout added", json);
    } else {
      setError(json.error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded w-25 border">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category">
              <strong>Category:</strong>
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Enter Category"
              value={name}
              onChange={(e) => setCategory(e.target.value)}
              required // Make the input field required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 mb-2"
          >
            Add Category
          </button>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};

export default AddCategory;
