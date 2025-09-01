import React from 'react';
import '../styles/whyus.css';

const WhyUs = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="container">
        <div className="section-header">
          <span className="process-subtitle">Our Learning Process</span>
          <h2 className="process-title">A simple step-by-step<br />journey to master your skills</h2>
        </div>
        
        <div className="learning-process">
          <div className="process-step">
            <div className="step-icon">
               <img src="/src/assets/icons/magnify.svg" alt="Previous" className="icon" />  
            </div>
            <h3>Explore</h3>
            <p>Browse through our courses and pick one that suits your career goals.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
               <img src="/src/assets/icons/trophy.svg" alt="Previous" className="icon" />  
            </div>
            <h3>Learn</h3>
            <p>Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
               <img src="/src/assets/icons/grad cap.svg" alt="Previous" className="icon" />  
            </div>
            <h3>Practice</h3>
            <p>Apply what you've learned with assignments and projects.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
               <img src="/src/assets/icons/curly bracket.svg" alt="Previous" className="icon" />  
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