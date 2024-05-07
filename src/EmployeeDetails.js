// EmployeeDetails.js
import React from 'react';

const EmployeeDetails = ({ employee }) => {
  const { id, FirstName, LastName, Gender, Age, Salary, Department, Position } = employee;

  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {id}</p>
      <p>First Name: {FirstName}</p>
      <p>Last Name: {LastName}</p>
      <p>Gender: {Gender}</p>
      <p>Age: {Age}</p>
      <p>Salary: ${Salary.toFixed(2)}</p>
      <p>Department: {Department}</p>
      <p>Position: {Position}</p>
    </div>
  );
};

export default EmployeeDetails;