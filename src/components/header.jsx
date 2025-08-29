// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">AIMIND</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#about">About US</Link></li>
            <li><Link to="/courses">Course</Link></li>
            <li><Link to="#whyus">Why US</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/login" className="signup-btn">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;