// components/Login.jsx
import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h2>Sign up</h2>
          <p className="login-agreement">
            By signing up, you agree to the Terms & Law and Privacy Policy.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="signup-btn">Sign up</button>
          </form>
          <p className="login-redirect">
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
        
        <div className="login-features">
          <h3>Your plan includes</h3>
          <ul>
            <li>Unlimited projects and resources</li>
            <li>Unlimited templates</li>
            <li>Unlimited storage</li>
            <li>List, Board, and Calendar views...</li>
          </ul>
        </div>
      </div>
      
      <div className="login-footer">
        <p>Domain Name. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Login;