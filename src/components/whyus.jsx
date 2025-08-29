// components/WhyUs.jsx
import React from 'react';
import '../styles/whyus.css';
import { FaSearch, FaGraduationCap, FaLaptopCode, FaAward } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="container">
        <div className="section-header">
          <h2>Our Learning Process</h2>
          <p>A simple step-by-step journey to master your skills</p>
        </div>
        
        <div className="learning-process">
          <div className="process-step">
            <div className="step-icon">
              <FaSearch />
            </div>
            <h3>Explore</h3>
            <p>Browse through our courses and pick one that suits your career goals.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
              <FaGraduationCap />
            </div>
            <h3>Learn</h3>
            <p>Eos vero dolore elmrod diam duo lonem magna sit sea dolore sancius sed et</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
              <FaLaptopCode />
            </div>
            <h3>Practice</h3>
            <p>Apply what you've learned with assignments and projects.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
              <FaAward />
            </div>
            <h3>Achieve</h3>
            <p>Earn certifications and showcase your skills to companies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;