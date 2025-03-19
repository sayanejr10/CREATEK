import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;
