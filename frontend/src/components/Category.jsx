import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className=" m-4 d-flex justify-content-center">
        <h3>Category List</h3>
      </div>
      {/* styling the add categoty  */}
      <div className="m-5 d-flex justify-content-center">
        <Link to="/dashboard/add_category" className=" btn btn-success">
          Add Catagory
        </Link>
      </div>
    </div>
  );
};

export default Category;
