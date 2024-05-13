import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";

const LeaveManagement = () => {
  const { user } = useAuthContext();
  const [employees, setEmployee] = useState(null);

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

  return (
    <div>
      <div className="">
        <div className="px-5 mt-3 d-flex justify-content-center">
          <h4>On leave Employee List</h4>
        </div>
        <div className=" mt-3 px-5">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>

                <th>Email</th>

                <th>Leave Status</th>
                <th>Leave Date</th>
                <th>Leave Reason</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees &&
                employees
                  .filter((employee) => employee.assetthree === "On Leave")
                  .map((employee) => (
                    <tr key={employee._id}>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.assetthree}</td>
                      <td>{employee.assetfour}</td>
                      <td>{employee.trainthree}</td>
                      <td>
                        <Link
                          to={`/dashboard/edit_leave/${employee._id}`}
                          className="btn btn-primary me-2"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Link to="/dashboard/editleavemain" className="btn btn-success">
          Add on Leave
        </Link>
      </div>
    </div>
  );
};

export default LeaveManagement;