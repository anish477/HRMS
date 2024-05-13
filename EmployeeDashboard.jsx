import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import Payroll from './Payroll';

const EmployeeDashboard = () => {
    const employee = {
        name: 'John Doe',
        email: 'john@example.com',
        payroll: {
            salary: 50000,
            bonuses: {
                performance: 2000,
                annual: 3000
            }
        }
    };

    return (
        <div>
            <h1>Employee Dashboard</h1>
            <EmployeeDetails name={employee.name} email={employee.email} />
            <Payroll payroll={employee.payroll} />
        </div>
    );
}

export default EmployeeDashboard;
