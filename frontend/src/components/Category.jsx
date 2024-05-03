import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// import { useCategoryContext } from "../hooks/useCategoryContext";
import { useAuthContext } from "../hooks/useAuthContext";

const CategoryDetails = () => {
  // const { dispatch } = useCategoryContext();
  const { user } = useAuthContext();
  // fetching data from /api/category/:id
  const [categories, setCategory] = useState(null);
  // with use of useAuthContext, we can get the user object from the context
  useEffect(() => {
    const fetchCategory = async () => {
      if (user) {
        // Check if user is not null
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

  return (
    <div>
      <div className="d-flex justify-content-center border-bottom p-2">
        {/* add virtical height  */}
        <div className="">
          <h4>Category List</h4>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {/* displayion fetched data in paragrah tag */}
        {categories && (
          <div className="border-r-2 rounded">
            {Array.from(
              new Set(categories.map((category) => category.name))
            ).map((name) => (
              <h5 key={name}>{name}</h5>
            ))}
          </div>
        )}

        {categories && categories.length === 0 && <p>No categories found</p>}
      </div>
      <div className="m-5 d-flex justify-content-center">
        <Link to="/dashboard/add_category" className=" btn btn-success">
          Add Category
        </Link>
      </div>
    </div>
  );
};

export default CategoryDetails;
