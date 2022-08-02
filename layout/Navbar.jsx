import React from "react";
import { NavLink } from "react-router-dom";
import Signup from "../buttons/Signup";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink
                        className="navbar-brand fw-bold "
                        to="/"
                    >
                        Billing App
                    </NavLink>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>


                    </ul>

                </div>
                {/* <Login /> */}
                <Signup />
                {/* <CartBtn /> */}
            </div>
        </nav>
    );
};

export default Navbar;
