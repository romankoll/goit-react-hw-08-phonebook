import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
