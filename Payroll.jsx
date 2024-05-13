import React from 'react';

const Payroll = ({ payroll }) => {
    return (
        <div>
            <h2>Payroll</h2>
            <p>Salary: ${payroll.salary}</p>
            <p>Performance Bonus: ${payroll.bonuses.performance}</p>
            <p>Annual Bonus: ${payroll.bonuses.annual}</p>
        </div>
    );
}

export default Payroll;
