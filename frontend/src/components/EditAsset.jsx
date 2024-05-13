import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const EditEmployee = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuthContext();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    category: "",

    assetone: "",
    assettwo: "",
    assetthree: "",
    assetfour: "",
    trainone: "",
    traintwo: "",
    trainthree: "",
  });

  const navigate = useNavigate();

  const fetchCategories = useCallback(async () => {
    if (user) {
      try {
        const response = await fetch("/api/category", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        setCategories(json);
      } catch (error) {
        console.error("Error fetching category:", error);
        setError(error.message);
      }
    }
  }, [user]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    const fetchEmployee = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/employee/${id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const json = await response.json();
          setEmployee(json);
          setCategory(json.category_id);
        } catch (error) {
          console.error("Error fetching employee:", error);
          setError(error.message);
        }
      }
    };

    fetchEmployee();
  }, [id, user]);

  // Modify your handleSubmit function
  const handleSubmit = async (event) => {
    const validatePassword = (password) => {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return re.test(password);
    };
    event.preventDefault();

    let requestBody = { ...employee, category_id: category };

    // Validate password only if it has been changed
    if (employee.password) {
      if (!validatePassword(employee.password)) {
        setError(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
      }
      requestBody.password = employee.password;
    }

    try {
      const response = await fetch(`/api/employee/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        navigate("/dashboard/employee");
      } else {
        const json = await response.json();
        setError(json.message);
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      setError(error.message);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Asset</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="assetone" className="form-label">
              Asset 1
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="assetone"
              autoComplete="off"
              value={employee.assetone}
              onChange={(e) =>
                setEmployee({ ...employee, assetone: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="assettwo" className="form-label">
              Asset 2
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="assettwo"
              autoComplete="off"
              value={employee.assettwo}
              onChange={(e) =>
                setEmployee({ ...employee, assettwo: e.target.value })
              }
            />
          </div>
          {/* <div className="col-12">
            <label htmlFor="assetthree" className="form-label">
              Asset 3
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="assetthree"
              autoComplete="off"
              value={employee.assetthree}
              onChange={(e) =>
                setEmployee({ ...employee, assetthree: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="assetfour" className="form-label">
              Asset 4
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="assetfour"
              autoComplete="off"
              value={employee.assetfour}
              onChange={(e) =>
                setEmployee({ ...employee, assetfour: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              autoComplete="off"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="trainone" className="form-label">
              Train 1
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="trainone"
              autoComplete="off"
              value={employee.trainone}
              onChange={(e) =>
                setEmployee({ ...employee, trainone: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="trainthree" className="form-label">
              Train 3
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="trainthree"
              autoComplete="off"
              value={employee.trainthree}
              onChange={(e) =>
                setEmployee({ ...employee, trainthree: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              autoComplete="off"
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              autoComplete="off"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category_id"
              id="category"
              className="form-select"
              value={category} // Add this line to control the select element with the category state
              onChange={(e) => {
                setCategory(e.target.value);
                setEmployee((prev) => ({
                  ...prev,
                  category_id: e.target.value,
                }));
              }}
            >
              <option value="">Select a category</option>{" "}
              {/* Add this line to set the initial value to null */}
          {/* {categories &&
                categories.map((category) => {
                  return (
                    <option key={category._id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div> */}

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Asset
            </button>
          </div>
          {error && <div className="text-danger">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
