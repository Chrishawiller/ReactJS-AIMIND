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
        <div className="about-content-page">
          <img alt="Woman using laptop in library with books on table" src="https://storage.googleapis.com/a1aa/image/5a736b58-6980-44a7-fc9c-3dd8de31718e.jpg" />
          <div className="about-text">
            <p className="about-subtitle">ABOUT US !</p>
            <h2>Welcome to eLEARNING</h2>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p>
              Our mission is to provide high-quality education that is accessible to everyone. 
              We believe that learning should be engaging, practical, and tailored to individual needs.
            </p>
            <div className="features-lists">
              <ul className="features-list">
                <li><i className="fas fa-arrow-right"></i>Skilled Instructors</li>
                <li><i className="fas fa-arrow-right"></i>Online Classes</li>
                <li><i className="fas fa-arrow-right"></i>International Certificate</li>
              </ul>
              <ul className="features-list">
                <li><i className="fas fa-arrow-right"></i>Skilled Instructors</li>
                <li><i className="fas fa-arrow-right"></i>Online Classes</li>
                <li><i className="fas fa-arrow-right"></i>International Certificate</li>
              </ul>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;