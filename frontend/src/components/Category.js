import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/category/add_category" className="btn btn-success">
        Add Catagory
      </Link>
    </div>
  );
};

export default Category;
