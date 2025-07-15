import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            RepRanker
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Submit
          </Link>
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;