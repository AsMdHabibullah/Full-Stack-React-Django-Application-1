import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import './Responsive.css'

const Footer = () => {
    return (
        <div className="bg-light">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 card">
                            <h3>My Dream</h3>
                            <h5>I've never stopped engaging my passion to help others and solve problems.I've never stopped engaging my passion to help others and solve problems.I've never stopped engaging my passion to help others and solve problems.</h5>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="social-button">
                            <h4>Follow</h4>
                                <a href="#" className="social-icon"><button><img src="img/social/fb.png" alt="social-icon" /></button></a>
                                <a href="#" className="social-icon"><button><img src="img/social/tw.png" alt="social-icon" /></button></a>
                                <a href="#" className="social-icon"><button><img src="img/social/ln.png" alt="social-icon" /></button></a>
                                <a href="#" className="social-icon"><button><img src="img/social/fb.png" alt="social-icon" /></button></a>
                                <a href="#" className="social-icon"><button><img src="img/social/pn.png" alt="social-icon" /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copy-right">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-10">
                            <h6>&copy; All right reserved - As Md Habibullah.  Today-2019-01-16</h6>
                        </div>
                        <div className="col-md-2 back-to-top">
                            <NavLink to = "/" className=""><img src="img/arrow.png" /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;