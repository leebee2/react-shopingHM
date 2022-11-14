import React from 'react';
import { ProductDetail } from '../page';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const authen = useSelector(state => state.auth.authenFlag);

    return authen ? <ProductDetail/> : <Navigate to="/login/"/>;
};

export default PrivateRoute;