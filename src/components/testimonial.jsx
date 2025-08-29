// components/Testimonial.jsx
import React from 'react';
import '../styles/testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="section-header">
          <h2>Testimonial</h2>
          <h3>Our Students Says!</h3>
        </div>
        
        <div className="testimonial-content">
          <p className="testimonial-text">
            Invident Jeremy justo sancita chia. E'est Jerem labile' go, justo dolor! Jerem ipsam ut sed eos, 
            ipsam et dolor kand sit ea jaute. E'ret iantos sed sed diam. Ea et ent ut t sed diam esse ipsum est dolor
          </p>
          
          <div className="testimonial-author">
            <h4>STUDENT NAME</h4>
            <p>Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;