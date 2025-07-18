import React from 'react';
import './Login.css';

const Login = ({ onSubmit, switchToRegister }) => {
  return (
    <form
      className="login-form"
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

      <button type="submit" className="login-button">
        Log In
      </button>

      <p className="forgot-password">
        Forget your password?
      </p>
    </form>
  );
};

export default Login;
