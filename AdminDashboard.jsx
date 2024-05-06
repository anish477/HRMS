import React, { useState } from "react";

const AdminDashboard = () => {
 
  const [payroll, setPayroll] = useState([
    { id: 1, name: "John Doe", salary: 50000 },
    { id: 2, name: "Jane Smith", salary: 60000 },

  ]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Employee Payroll</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {payroll.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>${employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
