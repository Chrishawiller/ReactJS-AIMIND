import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about" id="about"><div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>ABOUT US !</h2>
              <h3>Welcome to eLEARNING</h3>
            </div>
            
            <p>
              Tempor erat elitr rebum at cilia. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Cilia erat ipsum et lorem et sit, sed stet lorem sit cilia duo justo magna dolore erat amet
            </p>
            
            <ul className="features-list">
              <li>Skilled Instructors</li>
              <li>Online Classes</li>
              <li>International Certificate</li>
            </ul>
            
            <button className="read-more-btn">Read More</button>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h4>Skilled Instructors</h4>
              <p>Diam eltr kaud sed at elitr sed ipsum justo dolor sed diam amet diam</p>
            </div>
            
            <div className="stat-item">
              <h4>Skilled Instructors</h4>
              <p>Diam eltr kaud sed at elitr sed ipsum justo dolor sed diam amet diam</p>
            </div>
            
            <div className="stat-item">
              <h4>Skilled Instructors</h4>
              <p>Diam eltr kaud sed at elitr sed ipsum justo dolor sed diam amet diam</p>
            </div>
            
            <div className="stat-item">
              <h4>Skilled Instructors</h4>
              <p>Diam eltr kaud sed at elitr sed ipsum justo dolor sed diam amet diam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;