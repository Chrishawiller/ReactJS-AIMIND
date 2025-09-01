import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import '../styles/login.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>Sign up</h1>
        <p className="auth-agreement">
          By signing up, you agree to the{' '}
          <a href="#" className="auth-link">Terms of use</a> and{' '}
          <a href="#" className="auth-link">Privacy Policy.</a>
        </p>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-btn">Sign up</button>
        </form>
        <p className="auth-redirect">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      
      <div className="auth-right">
        <img 
          alt="Person working on laptop with coffee cup and phone on desk with papers" 
          src="https://storage.googleapis.com/a1aa/image/1b955f86-95d2-4bae-517a-56caae3e338a.jpg" 
          className="auth-image"
        />
        <div className="auth-features">
          <h2>Your plan includes</h2>
          <ul>
            <li>Unlimited projects and resources</li>
            <li>Unlimited templates</li>
            <li>Unlimited storage</li>
            <li>List, Board, and Calendar views...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;