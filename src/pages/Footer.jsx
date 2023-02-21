import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-light d-flex justify-content-around">
                    <div className="col text-center">
                        <h4>Address</h4>
                            <h6>1234 Anywhere Dr</h6>
                            <h6>San Antonio, TX 78216</h6>

                    </div>
                    <div className="col text-center">
                        <h4>Contact</h4>
                        <h6>210-555-5555</h6>
                        <h6>Text: 210-555-5555</h6>
                        <h6>awesomemassage@gmail.com</h6>
                    </div>
                    <div className="col text-center">
                        <h4>Appointments</h4>
                        <h6>Monday - Friday</h6>
                        <h6>9:00am - 5:00pm</h6>

                    </div>
            </footer>

        </div>
    );
};

export default Footer;