import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      // We're on the homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page, navigate to homepage first then scroll
      window.location.href = `/`;
      // Scroll after a short delay to allow page load
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <span className="logo-text">AIMIND</span>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About US</a></li>
            <li><a href="#course" onClick={(e) => {
              e.preventDefault();
              scrollToSection('course');
            }}>Courses</a></li>
            <li><a href="#whyus" onClick={(e) => {
              e.preventDefault();
              scrollToSection('whyus');
            }}>Why US</a></li>
            <li><a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login / Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;