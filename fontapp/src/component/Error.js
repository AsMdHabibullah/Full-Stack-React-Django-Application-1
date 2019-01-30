import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './Responsive.css'

const Error = () => {

    return (
        <div className="container wrapper">
            <div className="error-text text-center">
                <span>404</span>
                <p>Page Not Found</p>
                <NavLink className="back" to="/">homepage</NavLink>
            </div>
        </div>
    )
}

export default Error;