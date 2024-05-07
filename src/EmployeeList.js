import React from 'react';
import Employee from './Employee';

const EmployeeList = ({ employees, onEdit, onDelete, onViewDetails }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.header}>ID</th>
          <th style={styles.header}>First Name</th>
          <th style={styles.header}>Last Name</th>
          <th style={styles.header}>Department</th>
          <th style={styles.header}>Age</th>
          <th style={styles.header}>Salary</th>
          <th style={styles.header}>Position</th>
          <th style={styles.header}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={index} employee={employee} onEdit={onEdit} onDelete={onDelete} onViewDetails={onViewDetails} />
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  header: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    backgroundColor: 'pink',
  },
};

export default EmployeeList;
