import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Employee Management</h1>
      <div className="sidebar-links">
        <Link to="/home">Home</Link>
        <Link to="/addemployee">Add Emploayee</Link>
        <Link to="/employeelist">Employee List</Link>
      </div>
    </div>
  );
};

export default Sidebar;
