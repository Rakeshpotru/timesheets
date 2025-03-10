import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  return (
    <header>
      <nav>
        <ul style={navStyle}>
          <li style={listStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={listStyle}>
            <Link to="/login" style={linkStyle}>Login</Link>
          </li>
          <li style={listStyle}>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          </li>
          <li style={listStyle}>
            <Link to="/timesheet" style={linkStyle}>Timesheet</Link>
          </li>
          <li style={listStyle}>
            <Link to="/projects" style={linkStyle}>List of Projects</Link>
          </li>
          <li style={listStyle}>
            <Link to="/add-project" style={linkStyle}>Add Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#333',
  padding: '10px',
};

const listStyle = {
  listStyleType: 'none',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '8px 16px',
};

export default Header;
