import React from 'react';
import { Link } from 'react-router-dom';
import icon from "../../assets/home-page.png";

function Navbar() {
    return (
        <nav className="navbar navbar-light">
            <div className="container justify-content-center">
                <Link className="navbar-brand" to="/">
                    <img src={icon} alt="icon"></img>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;