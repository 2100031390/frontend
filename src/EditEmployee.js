// EditEmployee.js
import React, { useState, useEffect } from 'react';

const EditEmployee = ({ employee, onUpdateEmployee }) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);

  useEffect(() => {
    setEditedEmployee(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateEmployee(editedEmployee);
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="FirstName" placeholder="First Name" value={editedEmployee.FirstName} onChange={handleChange} />
        <input type="text" name="LastName" placeholder="Last Name" value={editedEmployee.LastName} onChange={handleChange} />
        <input type="text" name="Gender" placeholder="Gender" value={editedEmployee.Gender} onChange={handleChange} />
        <input type="number" name="Age" placeholder="Age" value={editedEmployee.Age} onChange={handleChange} />
        <input type="text" name="Department" placeholder="Department" value={editedEmployee.Department} onChange={handleChange} />
        <input type="number" name="Salary" placeholder="Salary" value={editedEmployee.Salary} onChange={handleChange} />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;