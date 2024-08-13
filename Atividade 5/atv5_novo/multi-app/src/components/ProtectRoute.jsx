// import React from 'react'
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom'

function ProtectedRoute( {isLoggedIn, children} ) {
    if(!isLoggedIn){
        return <Navigate to="Login"/>
    }
    return children
}
ProtectedRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute
