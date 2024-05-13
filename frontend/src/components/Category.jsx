import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CategoryDetails = () => {
  const { user } = useAuthContext();
  const [categories, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = async (categoryId) => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/category/" + categoryId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      setCategory(categories.filter((category) => category._id !== categoryId));
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      if (user) {
        try {
          const response = await fetch("/api/category", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const json = await response.json();
          setCategory(json);
        } catch (error) {
          console.error("Error fetching category:", error);
        }
      }
    };

    fetchCategory();
  }, [user]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="px-5 mt-3 d-flex justify-content-center">
        <h4>Category List</h4>
      </div>
      <div className="px-5 mt-3 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <Link to="/dashboard/add_category" className="btn btn-success">
          Add Category
        </Link>
      </div>
      <div className=" px-5 d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th className="col-8">Name</th>
              <th className="col-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories &&
              filteredCategories.map((category) => (
                <tr key={category._id}>
                  <td>{category.name}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClick(category._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {categories && categories.length === 0 && <p>No categories found</p>}
      </div>
    </div>
  );
};

export default CategoryDetails;
