// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employees">Employees</Link></li>
                <li><Link to="/employees/add">Add Employee</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;