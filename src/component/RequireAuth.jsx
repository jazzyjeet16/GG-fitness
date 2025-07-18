import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Dummy auth check: replace with real auth logic (e.g., token in localStorage)
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // or whatever your logic is
};

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    // Redirect to login, preserving where user tried to go
    return <Navigate to="/auth" replace />;
  }
  return children;
};

export default RequireAuth;
