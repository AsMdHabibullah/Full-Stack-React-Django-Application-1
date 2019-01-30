import React, {Component} from 'react';
import './style.css';
import './Responsive.css'


class Details extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="container total-area box-card" itemID="project">
                    <div className="all-section">
                        <h2>Name: HTML Project.</h2>
                    </div>
                    <div className="card project-details">
                        <div className="card-body">
                            <img src="img/html.png" alt="Project-image" />
                            <h3>Title: This is some text within a card body</h3>
                            <p>I've never stopped engaging my passion to help others and solve problems.I've never stopped engaging my passion to help others and solve problems.I've never stopped engaging my passion to help others and solve problems.
                            I've never stopped engaging my passion to help others and solve problems.I've never stopped engaging my passion to help others and solve problems.I've never stopped engaging my passion to help others and solve problems.</p>
    
                            <div className="comments">
                                <h2>Comments</h2>
                            </div>
                            <form id="contact">
                                <fieldset>
                                    <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" tabindex="2" required />
                                </fieldset>
                                <fieldset>
                                    <textarea placeholder="Type your message here...." tabindex="5" required ></textarea>
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Click</button>
                                </fieldset>
                            </form>
                            <div className="card">
                                <div className="card-body">
                                <h6>Name: </h6>
                                <h6>Star Marks Here.</h6>
                                <p>Comments: Excillent job</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;
