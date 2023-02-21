import React from 'react';
import {useNavigate} from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();
    return (
        <div className="container d-flex">
            <div className='w-50 p-5'>
            <h3>Get In Touch!</h3>
            <p>Openly has made me feel supported & valued as an employee. The company culture empowers me to make
                decisions from day one. Openly has a clear direction and no matter your role within you know you are
                apart of something great.</p>
            <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>Home</button>
            </div>
            <div className="row shadow-lg p-5 mb-5 bg-body-tertiary rounded ">

                <h2>Contact Us</h2>
                <form className="" action="" method="POST">
                    <div className="form-group mb-3 text-start">
                        <label className='form-label ms-1 mb-0' htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name"
                               placeholder="Enter your name"/>
                    </div>
                    <div className="form-group mb-3 text-start">
                        <label className='form-label ms-1 mb-0' htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone" name="phone"
                               placeholder="Enter your phone"/>
                    </div>
                    <div className="form-group mb-3 text-start">
                        <label className='form-label ms-1 mb-0' htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email"
                               placeholder="Enter your email"/>
                    </div>
                    <div className="form-group mb-3 text-start">
                        <label className='form-label ms-1 mb-0' htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="3"
                                  placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p>Please contact us at support@awesomemassage.com</p>
                </form>
            </div>
        </div>

    );
};

export default ContactUs;