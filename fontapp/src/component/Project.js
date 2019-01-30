import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './Responsive.css'

class Project extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="container total-area box-card" itemID="project">
                    <div className="all-section">
                        <h2>Project</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-5 card project-area">
                            <div className="card-body text-center">
                                <img src="img/html.png" alt="Project-image" />
                                <p className="details-info">Title: This is some text within a card body.</p>
                                <h6>Tag: html, css, reactjs, django</h6>
                                <NavLink to="/details" className="btn btn-success">More..</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;