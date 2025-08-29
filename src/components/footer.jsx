import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Explore</h3>
              <p>Browse through our courses and pick one that suits your career goals.</p>
            </div>
            <div className="footer-column">
              <h3>Learn</h3>
              <p>Eos vero dolore elirned diam duo lorem magna sit sea dolore sanctus sed et</p>
            </div>
            <div className="footer-column">
              <h3>Practice</h3>
              <p>Apply what you've learned with assignments and projects.</p>
            </div>
            <div className="footer-column">
              <h3>Achieve</h3>
              <p>Earn certifications and showcase your skills to companies.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-middle">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>GET IN TOUCH</h3>
              <ul>
                <li>23 Street, New York, USA</li>
                <li>+01234567890</li>
                <li>info@example.com</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>OUR COURSES</h3>
              <ul>
                <li>Web Design</li>
                <li>App Design</li>
                <li>Marketing</li>
                <li>Researcher</li>
                <li>SEO</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>NEWSLETTER</h3>
              <p>Robum labeur lorem dolores kasd est, et ipsum amet et at kasd, ipsum nec tempor magna tempor. Ancu kasd sed ea do iguam. Dolor dau.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email" />
                <button>Sign up</button>
              </div>
              <p className="newsletter-note">By signing up</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>Domain Name. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;