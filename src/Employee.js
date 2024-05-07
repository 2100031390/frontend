import React, { useState } from 'react';

const Employee = ({ employee, onEdit, onDelete }) => {
  const { id, FirstName, LastName, Department, Salary, Age, Position } = employee;

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleEditClick = () => {
    // Invoke the onEdit function provided by the parent component
    if (typeof onEdit === 'function') {
      onEdit(employee);
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{FirstName}</td>
      <td>{LastName}</td>
      <td>{Department}</td>
      <td>{Age}</td>
      <td>{typeof Salary === 'number' ? `$${Salary.toFixed(2)}` : 'N/A'}</td>
      <td>{Position}</td>
      <td>
        <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'View Details'}</button><br></br>
        <button onClick={handleEditClick}>Edit</button><br></br>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
      {showDetails && (
        <tr>
          <td colSpan="7">
            <div>
              <h3>Details:</h3>
              <p>ID: {id}</p>
              <p>First Name: {FirstName}</p>
              <p>Last Name: {LastName}</p>
              <p>Department: {Department}</p>
              <p>Age: {Age}</p>
              <p>Salary: {typeof Salary === 'number' ? `$${Salary.toFixed(2)}` : 'N/A'}</p>
              <p>Position: {Position}</p>
            </div>
          </td>
        </tr>
      )}
    </tr>
  );
};

export default Employee;
