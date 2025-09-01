import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* Top cards */}
        <div className="about-cards">
          <div className="about-card">
            <img alt="Dark green graduation cap " src="src\assets\icons\g cap.svg" />
            <h3>Skilled<br />Instructors</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="about-card">
            <img alt="Dark green globe icon " src="src\assets\icons\globe.svg" />
            <h3>Skilled<br />Instructors</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="about-card">
            <img alt="Dark green map icon " src="src\assets\icons\open book.svg" />
            <h3>Skilled<br />Instructors</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="about-card">
            <img alt="Dark green blueprint icon " src="src\assets\icons\home book.svg" />
            <h3>Skilled<br />Instructors</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
        </div>
        
        {/* About us section */}
        <div className="about-content">
          <img alt="Woman " src='src\assets\images\img4.png' />
          <div className="about-text">
            <h3 className="about-subtitle">ABOUT US !</h3>
            <h2>Welcome to eLEARNING</h2>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="features-lists">
              <ul className="features-list">
                <li><img src="/src/assets/icons/right arrow.svg" alt="arrow" className="arrow-icon" />Skilled Instructors</li>
<li><img src="/src/assets/icons/right arrow.svg" alt="arrow" className="arrow-icon" />Online Classes</li>
<li><img src="/src/assets/icons/right arrow.svg" alt="arrow" className="arrow-icon" />International Certificate</li>
              </ul>
              <ul className="features-list">
<li><img src="/src/assets/icons/right arrow.svg" alt="arrow" className="arrow-icon" />Skilled Instructors</li>
<li><img src="/src/assets/icons/right arrow.svg" alt="arrow" className="arrow-icon" />Online Classes</li>
<li><img src="/src/assets/icons/right arrow.svg" alt="arrow" className="arrow-icon" />International Certificate</li>
              </ul>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;