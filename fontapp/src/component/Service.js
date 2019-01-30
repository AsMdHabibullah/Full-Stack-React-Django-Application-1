import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './Responsive.css'


const Service = () => {

    return (
        <div className="wrapper">
            <div className="container total-area box-card">
                <div className="all-section">
                    <h2>Service</h2>
                </div>
                <div className="row">
                    <div className="col-md-3 card service-area">
                        <div className="card-body ">
                            <h4>Name: SEO</h4>
                            <h6>Primary Price: 50$ for 1 month</h6>
                            <h6>Secondary Price: 150$ for 1 month</h6>
                            <h6>Premium Price: 250$ for 1 month</h6>
                            <NavLink to="/details" className="btn btn-success">Details</NavLink>
                        </div>
                    </div>
                    <div className="col-md-3 card service-area">
                        <div className="card-body ">
                            <h4>Name: Business Web Application Development</h4>
                            <h6>Premium Price: 250$ needed 1 month</h6>
                            <NavLink to="/details" className="btn btn-success">Details</NavLink>
                        </div>
                    </div>
                    <div className="col-md-3 card service-area">
                        <div className="card-body ">
                            <h4>Name: e-Commarce Web Application Development</h4>
                            <h6>Premium Price: 450$ needed 1 month</h6>
                            <NavLink to="/details" className="btn btn-success">Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;