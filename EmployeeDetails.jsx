import React from 'react';

const EmployeeDetails = ({ name, email }) => {
    return (
        <div>
            <h2>Employee Details</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default EmployeeDetails;
