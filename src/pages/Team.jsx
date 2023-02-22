import React from 'react';
import table from '../images/table.jpg';
import candles from '../images/candles.jpg';
import jessica from '../images/jessica.jpg';
import shane from '../images/shane.jpg';
import sarah from '../images/sarah.jpg';
import {Link} from "react-router-dom";


const Team = () => {
    return (
        <div className='container max-vh-100 bg-info-subtle'>
            <div className="row d-flex mx-auto justify-content-around pt-5 pb-5">
                <div className="col-3">
                    <img src={table} alt="table" className="img-fluid" style={{height: '350px', width: '450px'}}/>

                </div>

                <div className="col-3 align-self-center text-center">
                    <h2>Team Page</h2>
                    <p>We are so glad you're here. Our team is made up of the best massage therapists in the industry.
                        We
                        offer massage therapy for people with chronic emotional and physical pain. We are dedicated to
                        providing you with the best massage experience
                        possible.</p>
                </div>
                <div className="col-3 text-center justify-content-center">
                    <img src={candles} alt="candles" className="img-fluid" style={{height: '350px', width: '450px'}}/>
                </div>
            </div>
            <div className="row d-flex mx-auto justify-content-between p-5">
                <div className="col-3">
                    <img src={jessica} alt="jessica" className="rounded img-fluid" style={{height: '350px'}}/>
                    <p className='m-2'>Jessica is a Massage Therapist and Energy Worker specializing in Deep Relaxation
                        Techniques such as Reiki. Jessica has 3 decades of Reiki experience. Reiki is an
                        energy modality where the Practitioner sends Universal Healing Energy to the Receiver relaxing
                        both the body and mind.</p>
                    <Link to='/book' type="button" className="btn btn-outline-info bg-info-subtle btn-lg text-dark-50 p-2" >Book An Appointment</Link>
                </div>
                <div className="col-3 text-center justify-content-center">
                    <img src={shane} alt="shane" className="rounded img-fluid" style={{height: '350px'}}/>
                    <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Lorem ipsum
                        dolor sit amet consectetur adipiscing elit ut aliquam. Sed adipiscing diam donec adipiscing
                        tristique risus nec. Pharetra et ultrices neque ornare aenean euismod. Interdum velit laoreet id
                        donec ultrices tincidunt.</p>
                    <Link to='book' type="button" className="btn btn-outline-info bg-info-subtle btn-lg text-dark-50 p-2" >Book An Appointment</Link>

                </div>
                <div className="col-3 text-center justify-content-center">
                    <img src={sarah} alt="sarah" className="rounded img-fluid" style={{height: '350px'}}/>
                    <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Lorem ipsum
                        dolor sit amet consectetur adipiscing elit ut aliquam. Sed adipiscing diam donec adipiscing
                        tristique risus nec. Pharetra et ultrices neque ornare aenean euismod. Interdum velit laoreet id
                        donec ultrices tincidunt.</p>
                    <Link to='book' type="button" className="btn btn-outline-info bg-info-subtle btn-lg text-dark-50 p-2" >Book An Appointment</Link>

                </div>
            </div>
        </div>
    );
};

export default Team;