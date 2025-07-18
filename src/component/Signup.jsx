import React from 'react';
import './Signup.css';

const Signup = ({ onSubmit, switchToLogin }) => {
  return (
    <form
      className="signup-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <div>
        <label className="label">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          required
          className="input"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="label">
          Password <span className="required">*</span>
        </label>
        <input
          type="password"
          required
          className="input"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="label">
          Confirm Password <span className="required">*</span>
        </label>
        <input
          type="password"
          required
          className="input"
          placeholder="Confirm your password"
        />
      </div>

      <button type="submit" className="signup-button">
        Proceed
      </button>

      <p className="login-link">
        Already have an account?{' '}
        <span onClick={switchToLogin} className="login-text">
          Login
        </span>
      </p>
    </form>
  );
};

export default Signup;
