// components/Hero.jsx
import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>"Unlock your future with expert-led courses."</h1>
          <div className="hero-buttons">
            <button className="learn-more-btn">LearnMore</button>
            <button className="signup-btn">Sign Up &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;