import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-success-subtle">
        <ul className="nav justify-content-end p-3">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="team" className="nav-link">Team</Link>
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