import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './Responsive.css'

const CustomNavbar = () => {

    return (
        <header className="header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><img src="img/logo.png"/></NavLink>
                    <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link active" to="/">home</NavLink>
                            <NavLink className="nav-item nav-link" to="/project">project</NavLink>
                            <NavLink className="nav-item nav-link" to="/service">service</NavLink>
                            <NavLink className="nav-item nav-link" to="/news">news</NavLink>
                            <NavLink className="nav-item nav-link" to="/contact">contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default CustomNavbar;