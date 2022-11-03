import React from 'react';
import { ProductDetail } from '../page';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authen }) => {
    return authen ? <ProductDetail/> : <Navigate to="/login/"/>;
};

export default PrivateRoute;