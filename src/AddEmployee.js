import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({ onAddEmployee }) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(employee);
    setEmployee({});
    navigate('/employees');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <b>FirstName:</b> <input type="text" name="FirstName" placeholder="First Name" onChange={handleChange} style={styles.input} /><br />
        <b>LastName:</b> <input type="text" name="LastName" placeholder="Last Name" onChange={handleChange} style={styles.input} /><br />
        <b>Gender:</b> <input type="text" name="Gender" placeholder="Gender" onChange={handleChange} style={styles.input} /><br />
        <b>Age:</b> <input type="number" name="Age" placeholder="Age" onChange={handleChange} style={styles.input} /><br />
        <b>Department:</b> <input type="text" name="Department" placeholder="Department" onChange={handleChange} style={styles.input} /><br />
        <b>Salary:</b> <input type="number" name="Salary" placeholder="Salary" onChange={handleChange} style={styles.input} /><br />
        <b>Position:</b> <input type="text" name="Position" placeholder="Position" onChange={handleChange} style={styles.input} /><br />
        <button type="submit" style={styles.button}>Add Employee</button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    marginBottom: '10px',
    width: '100%',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: 'pink',
    color: 'dark blue',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddEmployee;
