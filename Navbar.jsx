import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand " to="/">School Management</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item-login"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item-register"><Link className="nav-link" to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
