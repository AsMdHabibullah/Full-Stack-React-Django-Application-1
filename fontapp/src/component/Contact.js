import React, { Component } from 'react';
import './style.css';
import './Responsive.css'

class Contact extends Component{

    render(){

        return(

            <div className="wrapper">
                <div className="container">
                <div className="card">
                        <h2 className="contact text-center"> Contuct Form</h2>
                        <div className="row contact-form">
                                <div className="col-md-4">
                                    <h6><i class="fas fa-map-marker-alt"></i> Address: </h6>
                                    <p> Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US </p>
                                    <h6><i class="fas fa-mobile-alt"></i> Lets Talk</h6>
                                    <p>+86 1560 8807860 <br />+88 0191 5977694</p>
                                    <h6><i class="fas fa-envelope"></i>  General Support </h6>
                                    <p>asmdhabibullah@yahoo.com</p>
                                </div>
                                <h2>OR</h2>
                                <div className="col-md-6">
                                    <form id="contact" action="" method="">
                                        <h3></h3>
                                        <fieldset>
                                            <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your Email Address" type="email" tabindex="2" required />
                                        </fieldset>
                                        <fieldset>
                                            <input placeholder="Your web Address" type="url" tabindex="3" required />
                                        </fieldset>
                                        <fieldset>
                                            <textarea placeholder="Type your message here...." tabindex="4" required ></textarea>
                                        </fieldset>
                                        <fieldset>
                                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send Your Information</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;