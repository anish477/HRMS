import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const [employees, setEmployees] = useState(null);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [totalLeave, setLeaveTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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
          setEmployees(json);

          // Calculate total employees and total salary
          const leaveCount = json.filter(
            (employee) => employee.assetthree === "On Leave"
          ).length;
          setLeaveTotal(leaveCount);
          setEmployeeTotal(json.length);
          setSalaryTotal(
            json.reduce(
              (total, employee) => total + parseFloat(employee.salary),
              0
            )
          );
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
      <div className="p-3 d-flex justify-content-around mt-3 ">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25 bg-light">
          <div className="text-center pb-1 bg-primary">
            <h4 className="text-light">Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25 bg-light">
          <div className="text-center pb-1 bg-primary">
            <h4 className="text-light">Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25 bg-light">
          <div className="text-center pb-1 bg-primary">
            <h4 className="text-light">Leave Count</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{totalLeave}</h5>
          </div>
        </div>
      </div>

      <div className="px-5 mt-3 d-flex justify-content-center ">
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
      <div className=" mt-3 px-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>

              <th>Category</th>
              <th> Salary</th>

              <th>Address</th>
              <th>Leave Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees &&
              filteredEmployees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.name}</td>
                  <td>{employee.category}</td>
                  <td>$ {employee.salary}</td>
                  <td>{employee.address}</td>
                  <td>{employee.assetthree}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
