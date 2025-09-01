import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/`;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="hero-container">
      {/* Left side - Content */}
      <div className="hero-left">
        <header className="hero-header">
          <div className="logo-container">
            <div className="logo-icon"></div>
            <span className="logo-text">AIMIND</span>
          </div>
          <nav className="hero-nav">
            <a href="#">Home</a>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About US</a>
            <a href="#course" onClick={(e) => {
              e.preventDefault();
              scrollToSection('course');
            }}>Courses</a>
            <a href="#whyus" onClick={(e) => {
              e.preventDefault();
              scrollToSection('whyus');
            }}>Why US</a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
          </nav>
        </header>


        <main className="hero-main">
          <h1>"Unlock your future with expert-led courses."</h1>
          <div className="hero-buttons">
            <button className="learn-more-btn">Learn More</button>
            <Link to="/signup" className="signup-btn">
              <span>Sign Up</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </main>
        
       <section className="hero-features">
  <div className="feature-card">
    <img src="/src/assets/icons/cap.svg" alt="Courses" className="feature-icon" />
    <div>
      <p className="feature-title">Our Courses</p>
      <p className="feature-subtitle">view more</p>
    </div>
  </div>
  <div className="feature-card">
    <img src="/src/assets/icons/book stack.svg" alt="Library" className="feature-icon" />
    <div>
      <p className="feature-title">Our Library</p>
      <p className="feature-subtitle">view more</p>
    </div>
  </div>
  <div className="feature-card">
    <img src="/src/assets/icons/pro teacher.svg" alt="Teachers" className="feature-icon" />
    <div>
      <p className="feature-title">Our Teachers</p>
      <p className="feature-subtitle">view more</p>
    </div>
  </div>
</section>
      </div>
      
      {/* Right side - Image */}
      <div className="hero-right">
        <img 
          alt="Workspace with laptop showing ad spend breakdown on screen, coffee cup, glasses, notebooks, pencils, and plants on wooden desk" 
          src="src\assets\images\img1.png" 
          className="hero-image"
        />
        <Link to="/login" className="login-btn-hero">Login / Sign Up</Link>
      </div>
    </div>
  );
};

export default Hero;