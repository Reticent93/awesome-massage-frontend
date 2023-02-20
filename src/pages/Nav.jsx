import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="container pb-5">
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
                <Link to="contact" className="nav-link">Contact</Link>
            </li>
        </ul>
        </div>
    );
};

export default Nav;