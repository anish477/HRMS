import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Employee = () => {
  const { user } = useAuthContext();
  const [employees, setEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = async (employeeId) => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/employee/" + employeeId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      setEmployee(employees.filter((employee) => employee._id !== employeeId));
    }
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      if (user) {
        try {
          const response = await fetch("/api/employee", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const json = await response.json();
          setEmployee(json);
        } catch (error) {
          console.error("Error fetching employee:", error);
        }
      }
    };

    fetchEmployee();
  }, [user]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees?.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="px-5 mt-3 d-flex justify-content-center">
        <h4>Employee List</h4>
      </div>
      <div className="px-5 mt-3 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="d-flex justify-content-center ">
        <Link to="/dashboard/add_employee" className="btn btn-success">
          Add Employee
        </Link>
      </div>

      <div className="mt-3 px-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees &&
              filteredEmployees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>$ {employee.salary}</td>
                  <td>{employee.address}</td>
                  <td>{employee.category}</td>
                  <td>
                    <Link
                      to={`/dashboard/edit_employee/${employee._id}`}
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClick(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
