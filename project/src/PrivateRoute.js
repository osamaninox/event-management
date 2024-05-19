import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './views/auth/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/auth/login" />;
};

export default PrivateRoute;