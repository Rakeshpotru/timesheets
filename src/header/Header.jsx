import { link } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing


function Header() {
  return (
    <header >
      <nav>
        <ul style={navStyle} className='bg_gradient'>
          <li style={listStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          
          <li style={listStyle}>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          </li>
          
          <li style={listStyle}>
            <Link to="/projects" style={linkStyle}>List of Projects</Link>
          </li>
          {/* <li style={listStyle}>
            <Link to="/add-project" style={linkStyle}>Add Project</Link>
          </li> */}
          <li style={listStyle}>
            <Link to="/add-employee" style={linkStyle}>Employees</Link>
          </li>
          <li style={listStyle}>
            <Link to="/timesheetList" style={linkStyle}>Timesheet</Link>
          </li>
          <li style={listStyle}>
            <Link to="/login" style={linkStyle}>Login</Link>
          </li>
          <li>
            <Link to="/add-timeSheetsemp" style={linkStyle}> Fill Timesheets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  margin: '0', // Remove default margins
  
};

const listStyle = {
  listStyleType: 'none',
};

const linkStyle = {
  textDecoration: 'none',
  padding: '8px 16px',
};

export default Header;
