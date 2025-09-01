import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Get in Touch */}
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>23 Street, New York, USA</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+012 345 67890</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@example.com</span>
              </li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
               <img src="/src/assets/icons/linkedin.svg" alt="Previous" className="icon" />  
              </a>
              <a href="#" aria-label="Facebook">
               <img src="/src/assets/icons/fb.svg" alt="Previous" className="icon" />  
              </a>
              <a href="#" aria-label="Twitter">
               <img src="/src/assets/icons/twitter.svg" alt="Previous" className="icon" />  
              </a>
              <a href="#" aria-label="Instagram">
               <img src="/src/assets/icons/ig.svg" alt="Previous" className="icon" />  
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div className="footer-section">
            <h3>Our Courses</h3>
            <ul className="courses-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Web Design</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>App Design</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Marketing</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Reasearch</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>SEO</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p className="newsletter-text">
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
              />
              <Link to="/signup" className="newsletter-btn">
                SIGN UP
              </Link>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="copyright">
            © <span className="domain">Domain Name.</span> <span className="rights">All Rights Reserved.</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;