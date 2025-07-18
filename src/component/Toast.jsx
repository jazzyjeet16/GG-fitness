import React from "react";
import "./Toast.css";

const Toast = ({ message, show }) => {
  return (
    <div
      className={`toast ${show ? "toast-show" : "toast-hide"}`}
      style={{ minWidth: 220 }}
    >
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;
