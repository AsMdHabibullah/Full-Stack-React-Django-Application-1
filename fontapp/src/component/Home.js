import React, {Component} from 'react';
import './style.css';
import './Responsive.css'

class Home extends Component{

    render(){

        return (
            <div className="wrapper">
                <div className="container total-area box-card">
                    <div className="col-md-12">
                        <div className="owner-img">
                            <h2>Don't get up, You will win.</h2>
                            <img src="img/owner.jpg" alt="Profile-image" />
                        </div>
                    </div>
                </div>
                
                <div className="container total-area box-card">
                    <div className="all-section">
                        <h2>My About</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="owner">
                            <h2 className="text-center owner-name">
                                As Md Habibullah
                            </h2>
                            <div className="card owner-details">
                                <div className="card-body">
                                    <p>
                                        I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion to help others and solve problems.I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="container total-area box-card">
                    <div className="all-section">
                        <h2>Education</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-5 card">
                            <div className="card-body">
                                <h4>Yunnan University</h4>
                                <h5>Computer Scaince & Technology-CST</h5>
                                <h6>BSC In Softwear</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
    
                <div className="container total-area box-card">
                    <div className="all-section">
                        <h2>Skill</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-5 card">
                            <div className="card-body">
                                <img className="skill-img" src="img/html.png" alt="skill-image" />
                                <h6>Name: HTML</h6>
                                <h6>Compleate 10 Project's</h6>
                                <progress max="100" value="50" />
                                <p>50%</p>
                            </div>
                        </div>	
                    </div>
                </div>
                <div className="container total-area box-card">
                    <div className="all-section">
                        <h2>Team Meamber</h2>
                    </div>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-md-12 team-info">
                                <img src="img/person-1.jpg" className="team-img" alt="Team-image" />
                                <h5>Name: As Md Habibullah</h5>
                                <h6>Designation: Developer</h6>
                                <div className="team-social">
                                    <a href="#" className="person-social"><button><img src="img/social/fb.png" alt="social-icon" /></button></a>
                                    <a href="#" className="person-social"><button><img src="img/social/tw.png" alt="social-icon" /></button></a>
                                    <a href="#" className="person-social"><button><img src="img/social/ln.png" alt="social-icon" /></button></a>
                                    <a href="#" className="person-social"><button><img src="img/social/fb.png" alt="social-icon" /></button></a>
                                    <a href="#" className="person-social"><button><img src="img/social/pn.png" alt="social-icon" /></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;