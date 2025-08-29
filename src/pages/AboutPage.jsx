// pages/AboutPage.jsx
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>ABOUT US</h1>
        </div>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Welcome to eLEARNING</h2>
            <p>
              Tempor erat elitr rebum at cilia. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Cilia erat ipsum et lorem et sit, sed stet lorem sit cilia duo justo magna dolore erat amet.
            </p>
            <p>
              Our mission is to provide high-quality education that is accessible to everyone. 
              We believe that learning should be engaging, practical, and tailored to individual needs.
            </p>
          </div>
          <div className="about-image">
            <img src="/src/assets/about-image.jpg" alt="About Us" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;