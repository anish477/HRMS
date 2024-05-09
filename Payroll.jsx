import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Replace with your backend URL

const Payroll = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [salary, setSalary] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [payrollData, setPayrollData] = useState([]);

  useEffect(() => {
    fetchPayrollData();
  }, []);

  const fetchPayrollData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/payroll`);
      setPayrollData(response.data);
    } catch (error) {
      console.error('Error fetching payroll data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/payroll`, {
        employeeId,
        salary,
        paymentDate
      });
      setPayrollData([...payrollData, response.data]);
      setEmployeeId('');
      setSalary('');
      setPaymentDate('');
    } catch (error) {
      console.error('Error adding payroll record:', error);
    }
  };

  return (
    <div>
      <h2>Payroll Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        </label>
        <label>
          Salary:
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        <label>
          Payment Date:
          <input type="date" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
        </label>
        <button type="submit">Add Payroll</button>
      </form>
      <h3>Payroll Records</h3>
      <ul>
        {payrollData.map((payroll, index) => (
          <li key={index}>
            Employee ID: {payroll.employeeId}, Salary: {payroll.salary}, Payment Date: {payroll.paymentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payroll;
