import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">

            <h3>The page you are looking for does not exist. If you have any questions, please reach out to us at
                @support.com</h3>
            <h5>The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you
                can return back to the site's homepage and see if you can find what you are looking for.</h5>
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
        </div>
    );
};

export default NotFound;